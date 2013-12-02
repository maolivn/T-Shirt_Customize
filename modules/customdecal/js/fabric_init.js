/**
 * Created by Tan on 11/27/13.
 */
//if(jQuery) alert('jQuery');
var canvas, imgInstance;
$(document).ready(function() {
    //Remove Left and Right Column
    $('#left_column').remove();
    $('#right_column').remove();

    //Set center column to fit content
    $('#center_column').removeClass('grid_5').addClass('grid_9');

    initCanvas();
});

$(function (){
    $('.vert-flip-image').click(function(e){
        e.preventDefault();
        if(imgInstance.getFlipX()){
            imgInstance.setFlipX(false);
        } else {
            imgInstance.setFlipX(true);
        }
        canvas.renderAll();
    });

    $('.hori-flip-image').click(function(e){
        e.preventDefault();
        if(imgInstance.getFlipY()){
            imgInstance.setFlipY(false);
        } else {
            imgInstance.setFlipY(true);
        }
        canvas.renderAll();
    });

    //Create spinner options for image box
    $( "#ImageRotationSlider" ).slider({
        range: "max",
        value: 0,
        min: 0,
        max: 360,
        step: 1,
        slide: function(event, ui){
            $('#rotate_value').val(ui.value);
            if(imgInstance != undefined) {
                imgInstance.setAngle(ui.value).setCoords();
                canvas.renderAll();
            }
        }
    });
    $( "#ImageOpacitySlider" ).slider({
        range: "max",
        value: 10,
        min: 1,
        max: 10,
        step: 1,
        slide: function(event, ui) {
            $('#opacity_value').val(ui.value);
            if(imgInstance != undefined) {
                imgInstance.opacity = ui.value / 10;
                canvas.renderAll();
            }
        }
    });
    $( "#ImageWidthSlider" ).slider({
        range: "max",
        value: 100,
        min: 30,
        max: 200,
        step: 1,
        slide: function(event, ui){
            $('#width_value').val(ui.value);
            if(imgInstance != undefined) {
                imgInstance.setScaleX(ui.value / 100);
                canvas.renderAll();
            }
        }
    });
    $( "#ImageHeightSlider" ).slider({
        range: "max",
        value: 100,
        min: 30,
        max: 200,
        step: 1,
        slide: function(event, ui){
            $('#height_value').val(ui.value);
            if(imgInstance != undefined) {
                imgInstance.setScaleY(ui.value / 100);
                canvas.renderAll();
            }
        }
    });
    $( "#ImageSizeSlider" ).slider({
        range: "max",
        value: 0,
        min: 0,
        max: 99,
        step: 1,
        slide: function(event, ui){
            $('#size_value').val(ui.value);
            if(imgInstance != undefined) {
                imgInstance.scale(1 + (ui.value + 1 / 100));
                canvas.renderAll();
            }
        }
    });

    $( "#spinner-I" ).spinner({
        step: 1,
        change: function() {
            imgInstance.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
//            imgInstance.setCoords();
            canvas.renderAll();
        },
        stop: function() {
            imgInstance.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
//            imgInstance.setCoords();
            canvas.renderAll();
        }
    });
    $( "#spinner-J" ).spinner({
        step: 1,
        change: function() {
            imgInstance.setTop(parseInt($('#spinner-J').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function() {
            imgInstance.setTop(parseInt($('#spinner-J').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });

    $('.image-center').click(function() {
       imgInstance.center().setCoords();
       canvas.renderAll();
       updatePosition(imgInstance);
    });

    canvas.on('object:moving', function(e) {
        var activeObject = e.target;
        updatePosition(activeObject);
    });

    //Upload Image functions
    $('#image-pop').click(function () {
        $('#fileupload').click();
    });
    $('#fileupload').change(function (evt) {
        fileSelect(evt);
    });
});

function fileSelect(evt) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var files = evt.target.files;

        var reader;
        var file;
        for (var i = 0; file = files[i]; i++) {
            // if the file is not an image, continue
            if (!file.type.match('image.*')) {
                continue;
            }

            //BOF Load image from reader
            reader = new FileReader();
            reader.onload = (function (tFile) {
                return function (evt) {
                    var sourcePath = evt.target.result;
                    loadImages(sourcePath, initStage);
                };
            }(file));
            reader.readAsDataURL(file);
            //EOF Load image from reader
        }
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

function loadImages(sources, callback) {
    var image;
    image = new Image();
    image.onload = function () {
        callback(image);
    };
    image.src = sources;
}

function initStage(image) {
    //Create Image
    imgInstance = new fabric.Image(image, {
        left: 0,
        top: 0,
        originX: 'center',
        originY: 'center',
        hasRotatingPoint: false,
        hasControls: false,
        hasBorders: false,
        lockUniScaling: true,
        centeredRotation: true
    });
    imgInstance.id = 'puppy';

    canvas.add(imgInstance);
    canvas.setActiveObject(imgInstance);
    imgInstance.center().setCoords();
    canvas.renderAll();

    updatePosition(imgInstance);
    //Reset Slider Value
    $( "#ImageRotationSlider" ).slider( "value", 0 );
    $( "#rotate_value" ).val(0);
}
function updatePosition(object){
    $('#spinner-I').val(Math.round(object.getLeft() / 10));
    $('#spinner-J').val(Math.round(object.getTop() / 10));
}
function initCanvas(){
    //BOF Create Canvas
    canvas = new fabric.Canvas('canvas', {
        controlsAboveOverlay: true
    });
    $('.canvas-container').css({
        position: 'absolute',
        top: 0,
        left: 0,
        'z-index': 100
    });
    canvas.setDimensions({width: 500, height: 600});
    canvas.clear();
    canvas.clipTo = function(ctx) {
        ctx.beginPath();
        ctx.rect((canvas.width / 2) - 100, (canvas.height / 2) - 200 ,200, 300);
        ctx.closePath();
    };
    canvas.renderAll();
    //EOF Create Canvas
}
