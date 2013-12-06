/**
 * Created by Tan on 11/27/13.
 */
//if(jQuery) alert('jQuery');
var canvas, imgInstance, txtInstance;
$(document).ready(function() {
    //Remove Left and Right Column
    $('#left_column').remove();
    $('#right_column').remove();

    //Set center column to fit content
    $('#center_column').removeClass('grid_5').addClass('grid_9');

    initCanvas();

    /** BOF add text object **/
    txtInstance = new fabric.Text('', {
        id: 'text',
        fontSize: 30,
        hasRotatingPoint: false,
        hasControls: false,
        hasBorders: false,
        useNative: true
    });

    //fix font-preloading problem
    $('#font_select option').each(function()
    {
        var fontFamily = $(this).val();
        txtInstance.set('fontFamily', fontFamily);
        canvas.renderAll();
    });
    txtInstance.setFontFamily('ballon');
    canvas.add(txtInstance);
    txtInstance.center().setCoords();
    canvas.renderAll();
    updateTextPosition(txtInstance);
    /** EOF add text object **/
});

$(function (){
    //BOF create image slider
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

    /** Create spinner options for image box **/
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
    /** EOF create image slider **/

    /** BOF create text slider **/
    $('#slider-range-max').slider({
        range:"max",
        min: 15,
        max: 100,
        value: 30,
        step: 1,
        slide: function(event, ui) {
            txtInstance.setFontSize(ui.value);
            canvas.renderAll();
            $('#sizetext').val(ui.value);
        }
    });
    //TODO: find a way to set letter spacing on canvas
    $('#slider-range-max-space').slider({
        range: "max",
        min: 0,
        max: 10,
        value: 0,
        slide: function(event, ui){
            $('#spacetext').val(ui.value);
            /*var new_text = text_spacing($('#letter').val(),ui.value);
            canvas.add(new_text);
            new_text.center().setCoords();
            canvas.renderAll();*/
        },
        stop: function (event, ui) {

        }
    });
    $('#slider-range-max-opacity').slider({
        range: "max",
        value: 10,
        min: 1,
        max: 10,
        step: 1,
        slide: function(event, ui) {
            txtInstance.setOpacity(ui.value / 10);
            canvas.renderAll();
            $('#opactext').val(ui.value);
        }
    });
    /** EOF create text slider **/

    //Update text
    $('#letter').keyup(function(){
        txtInstance.setText($(this).val());
        canvas.renderAll();
        /*var new_text = text_spacing($(this).val(),0);
        canvas.add(new_text);
        new_text.center().setCoords();
        canvas.renderAll();*/
    });

    //Change text font
    $('#font_select').change(function() {
        txtInstance.setFontFamily($(this).val());
        txtInstance.setText($('#letter').val());
        txtInstance.setCoords();
        canvas.renderAll();
    });

    /** BOF create image spinner **/
    $( "#spinner-I" ).spinner({
        step: 1,
        change: function() {
            imgInstance.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function() {
            imgInstance.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
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
    /** EOF create image spinner **/

    /** BOF create text spinner **/
    $( "#spinner-A" ).spinner({
        step: 1,
        change: function() {
            txtInstance.setLeft(parseInt($('#spinner-A').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function() {
            txtInstance.setLeft(parseInt($('#spinner-A').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });
    $( "#spinner-B" ).spinner({
        step: 1,
        change: function() {
            txtInstance.setTop(parseInt($('#spinner-B').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function() {
            txtInstance.setTop(parseInt($('#spinner-B').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });
    /** EOF create text spinner **/

    //Center Image
    $('.image-center').click(function() {
       imgInstance.center().setCoords();
       canvas.renderAll();
       updateImagePosition(imgInstance);
    });

    //Center Text
    $('.center_align').click(function() {
        txtInstance.centerH();
        canvas.renderAll();
        updateTextPosition(txtInstance);
    });

    //Update text and image position
    canvas.on('object:moving', function(e) {
        var activeObject = e.target;
        updateImagePosition(activeObject);
        updateTextPosition(activeObject);
    });

    /** BOF text align handle **/
    $('.text_align').click(function(){
        var id = $(this).attr('id');
        if(id == 'txt_justify')
            txtInstance.textAlign = 'justify';
        else if (id == 'txt_right')
            txtInstance.textAlign = 'right';
        else if (id == 'txt_center')
            txtInstance.textAlign = 'center';
        else if (id == 'txt_left')
            txtInstance.textAlign = 'left';
        canvas._adjustPosition && canvas._adjustPosition(txtInstance, value === 'justify' ? 'left' : value);
        canvas.renderAll();
    });
    /** EOF text align handle **/

    //Intergrate text color picker function
    $('#colorSelector').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#colorSelector div').css('backgroundColor', '#' + hex);
        }
    });

    //Upload Image
    $('#image-pop').click(function () {
        var img_block = $('#image_block');

        if(img_block.hasClass('hide')){
            $('#txt_block').addClass('hide');
            img_block.removeClass('hide');
        }
        $('#fileupload').click();
    });

    $('#fileupload').change(function (evt) {
        fileSelect(evt);
    });

    //Show text panel
    $('#text_menubar').click(function() {
        var txt_block = $('#txt_block');
        if(txt_block.hasClass('hide')){
            $('#image_block').addClass('hide');
            txt_block.removeClass('hide');
        }
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
    imgInstance.id = 'image';

    canvas.add(imgInstance);
    canvas.setActiveObject(imgInstance);
    imgInstance.center().setCoords();
    canvas.renderAll();

    updateImagePosition(imgInstance);
    //Reset Slider Value
    $( "#ImageRotationSlider" ).slider( "value", 0 );
    $( "#rotate_value" ).val(0);
}
function updateImagePosition(object){
    $('#spinner-I').val(Math.round(object.getLeft() / 10));
    $('#spinner-J').val(Math.round(object.getTop() / 10));
}
function updateTextPosition(obj) {
    $('#spinner-A').val(Math.round(obj.getLeft() / 10));
    $('#spinner-B').val(Math.round(obj.getTop() / 10));
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
        'z-index': 999
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
function insertSpaces(aString) {
    return aString.split("").join(" ");
}
function text_spacing(str, space) {
    var txt_arr, group, txt;
    var text_group = [];
    var left = 0;
    txt_arr = str.split("");

    var objects = canvas.getObjects();

    //remove group
    for (var o in objects) {
        if (objects[o].id == 'text_group') {
            canvas.remove(objects[o]);
            canvas.renderAll();
        }
    }

    txt  = txtInstance.clone();
    txt.id = 'txt_temp';
    for (var i = 0; i < txt_arr.length; i++) {
        txt.setText(txt_arr[i]);
        left = left + txt.width + space;
        var txt_tmp;
        txt_tmp = txt.clone();
        txt_tmp.setText(txt_arr[i]);
        txt_tmp.left = left;
        txt_tmp.id = 'text' + i;
        txt_tmp.visible = true;
        text_group.push(txt_tmp);
    }
    group = new fabric.Group(text_group,{
        id:'text_group',
        hasRotatingPoint: false,
        hasControls: false,
        hasBorders: false,
        visible: true
    });

    return group;
}
