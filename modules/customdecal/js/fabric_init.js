/**
 * Created by Tan on 11/27/13.
 */
//if(jQuery) alert('jQuery');
var canvas;
$(document).ready(function () {
    //Remove Left and Right Column
    $('#left_column').remove();
    $('#right_column').remove();

    //Set center column to fit content
    $('#center_column').removeClass('grid_5').addClass('grid_9');

    initCanvas();

    textInit();
});

$(function () {
    var text_obj, img_obj;
    //BOF create image slider
    $('.vert-flip-image').click(function (e) {
        var img_obj = getObjectById('image');
        e.preventDefault();
        if (img_obj.getFlipX()) {
            img_obj.setFlipX(false);
        } else {
            img_obj.setFlipX(true);
        }
        canvas.renderAll();
    });

    $('.hori-flip-image').click(function (e) {
        var img_obj = getObjectById('image');
        e.preventDefault();
        if (img_obj.getFlipY()) {
            img_obj.setFlipY(false);
        } else {
            img_obj.setFlipY(true);
        }
        canvas.renderAll();
    });

    /** BOF create sliders for image **/
        //Rotate Slider
    $("#ImageRotationSlider").slider({
        range: "max",
        value: 0,
        min: 0,
        max: 360,
        step: 1,
        slide: function (event, ui) {
            var img_obj = getObjectById('image');
            $('#rotate_value').val(ui.value);
            if (img_obj != undefined) {
                img_obj.setAngle(ui.value).setCoords();
                canvas.renderAll();
            }
        }
    });

    //Opacity Slider
    $("#ImageOpacitySlider").slider({
        range: "max",
        value: 10,
        min: 1,
        max: 10,
        step: 1,
        slide: function (event, ui) {
            var img_obj = getObjectById('image');
            $('#opacity_value').val(ui.value);
            if (img_obj != undefined) {
                img_obj.opacity = ui.value / 10;
                canvas.renderAll();
            }
        }
    });

    //Width Slider
    $("#ImageWidthSlider").slider({
        range: "max",
        value: 100,
        min: 30,
        max: 200,
        step: 1,
        slide: function (event, ui) {
            var img_obj = getObjectById('image');
            $('#width_value').val(ui.value);
            if (img_obj != undefined) {
                img_obj.setScaleX(ui.value / 100);
                canvas.renderAll();
            }
        }
    });

    //Height Slider
    $("#ImageHeightSlider").slider({
        range: "max",
        value: 100,
        min: 30,
        max: 200,
        step: 1,
        slide: function (event, ui) {
            var img_obj = getObjectById('image');
            $('#height_value').val(ui.value);
            if (img_obj != undefined) {
                img_obj.setScaleY(ui.value / 100);
                canvas.renderAll();
            }
        }
    });

    //Size Slider
    $("#ImageSizeSlider").slider({
        range: "max",
        value: 0,
        min: 0,
        max: 99,
        step: 1,
        slide: function (event, ui) {
            var img_obj = getObjectById('image');
            $('#size_value').val(ui.value);
            if (img_obj != undefined) {
                img_obj.scale(1 + (ui.value + 1 / 100));
                canvas.renderAll();
            }
        }
    });
    /** EOF create image slider **/

    /** BOF create text slider **/
    //Font size slider
    $('#slider-range-max').slider({
        range: "max",
        min: 15,
        max: 100,
        value: 30,
        step: 1,
        slide: function (event, ui) {
            text_obj = getObjectById('text');
            text_obj.setFontSize(ui.value);
            canvas.renderAll();
            $('#sizetext').val(ui.value);
        }
    });

    //Letter Space Slider
    //TODO: find a way to set letter spacing on canvas
    $('#slider-range-max-space').slider({
        range: "max",
        min: 0,
        max: 10,
        value: 0,
        slide: function (event, ui) {
            $('#spacetext').val(ui.value);
            /*var new_text = text_spacing($('#letter').val(),ui.value);
             canvas.add(new_text);
             new_text.center().setCoords();
             canvas.renderAll();*/
        },
        stop: function (event, ui) {

        }
    });

    //Opacity Slider
    $('#slider-range-max-opacity').slider({
        range: "max",
        value: 10,
        min: 1,
        max: 10,
        step: 1,
        slide: function (event, ui) {
            text_obj = getObjectById('text');
            text_obj.setOpacity(ui.value / 10);
            canvas.renderAll();
            $('#opactext').val(ui.value);
        }
    });

    //Rotator Slider
    $('#slider-range-max-rotate').slider({
        range: "max",
        value: 0,
        min: 1,
        max: 360,
        step: 1,
        slide: function (event, ui) {
            text_obj = getObjectById('text');
            $('#rotatetext').val(ui.value);
            if (text_obj != undefined) {
                text_obj.setAngle(ui.value).setCoords();
                canvas.renderAll();
            }
        }
    });

    //Curvedtext slider
    $('#slider-range-max-curve_txt').slider({
        range: "max",
        value: 0,
        min: 0,
        max: 500,
        step: 1,
        slide: function (event, ui) {
            text_obj = getObjectById('text');
            $('#curve_txt').val(ui.value);
            text_obj.set('spacing',ui.value);
            canvas.renderAll();
        }
    });
    $('#curve_xyz').hide();
    /** EOF create text slider **/

    /** BOF create image spinner **/
    $("#spinner-I").spinner({
        step: 1,
        change: function () {
            var img_obj = getObjectById('image');
            img_obj.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function () {
            var img_obj = getObjectById('image');
            img_obj.setLeft(parseInt($('#spinner-I').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });
    $("#spinner-J").spinner({
        step: 1,
        change: function () {
            var img_obj = getObjectById('image');
            img_obj.setTop(parseInt($('#spinner-J').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function () {
            var img_obj = getObjectById('image');
            img_obj.setTop(parseInt($('#spinner-J').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });
    /** EOF create image spinner **/

    /** BOF create text spinner **/
    $("#spinner-A").spinner({
        step: 1,
        change: function () {
            text_obj = getObjectById('text');
            text_obj.setLeft(parseInt($('#spinner-A').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function () {
            text_obj = getObjectById('text');
            text_obj.setLeft(parseInt($('#spinner-A').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });
    $("#spinner-B").spinner({
        step: 1,
        change: function () {
            text_obj = getObjectById('text');
            text_obj.setTop(parseInt($('#spinner-B').val()) * 10).setCoords();
            canvas.renderAll();
        },
        stop: function () {
            text_obj = getObjectById('text');
            text_obj.setTop(parseInt($('#spinner-B').val()) * 10).setCoords();
            canvas.renderAll();
        }
    });

    //Glow effect
    $("#spinner-C").spinner({
        step: 1,
        change: function () {
            setShadow($('#highlightSelector div').css('backgroundColor'), 0, 0, $('#spinner-C').val());
        },
        stop: function () {
            setShadow($('#highlightSelector div').css('backgroundColor'), 0, 0, $('#spinner-C').val());
        }
    });

    $("#spinner-D").spinner({
        step: 1,
        max: 2,
        change: function () {
            setShadow($('#highlightSelector div').css('backgroundColor'), 0, 0, $('#spinner-D').val() * 2);
        },
        stop: function () {
            setShadow($('#highlightSelector div').css('backgroundColor'), 0, 0, $('#spinner-D').val() * 2);
        }
    });

    //Shadow effect
    $("#spinner-E").spinner({
        step: 1,
        change: function (event, ui) {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        },
        stop: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        }
    });
    $("#spinner-F").spinner({
        step: 1,
        change: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        },
        stop: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        }
    });
    $("#spinner-G").spinner({
        step: 1,
        change: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        },
        stop: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        }
    });
    $("#spinner-H").spinner({
        max: 2,
        step: 1,
        change: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val() * 2);
        },
        stop: function () {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val()* 2);
        }
    });
    /** EOF create text spinner **/

    //Center Image
    $('.image-center').click(function () {
        var img_obj = getObjectById('image');
        img_obj.center().setCoords();
        canvas.renderAll();
        updateImagePosition(imgInstance);
    });

    //Center Text
    $('.center_align').click(function () {
        text_obj = getObjectById('text');
        text_obj.centerH();
        canvas.renderAll();
        updateTextPosition(text_obj);
    });

    //Update text and image position
    canvas.on('object:moving', function (e) {
        var activeObject = e.target;
        updateImagePosition(activeObject);
        updateTextPosition(activeObject);
    });

    /** BOF text align handle **/
    $('.text_align').click(function () {
        text_obj = getObjectById('text');
        var id = $(this).attr('id');
        if (id == 'txt_justify')
            text_obj.textAlign = 'justify';
        else if (id == 'txt_right')
            text_obj.textAlign = 'right';
        else if (id == 'txt_center')
            text_obj.textAlign = 'center';
        else if (id == 'txt_left')
            text_obj.textAlign = 'left';
        canvas._adjustPosition && canvas._adjustPosition(text_obj, value === 'justify' ? 'left' : value);
        canvas.renderAll();
    });
    /** EOF text align handle **/

    /** BOF intergrate text color picker function **/
    //text color selector
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
        },
        onSubmit: function (hsb, hex, rgb, div) {
            text_obj = getObjectById('text');
            text_obj.setColor('#' + hex);
            canvas.renderAll();
        }
    });

    //text highlight color selector
    $('#highlightSelector').ColorPicker({
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
            $('#highlightSelector div').css('backgroundColor', '#' + hex);
        },
        onSubmit: function (hsb, hex, rgb, div) {
            setShadow($('#highlightSelector div').css('backgroundColor'), 0, 0, $('#spinner-C').val());
        }
    });

    //shadow highlight color selector
    $('#shadowSelector').ColorPicker({
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
            $('#shadowSelector div').css('backgroundColor', '#' + hex);
        },
        onSubmit: function (hsb, hex, rgb, div) {
            setShadow($('#shadowSelector div').css('backgroundColor'), $('#spinner-E').val(), $('#spinner-F').val(), $('#spinner-G').val());
        }
    });
    /** EOF intergrate text color picker function **/

    /** BOF text style format **/
    $('.text_style').click(function () {
        var img = $(this).find('img');
        text_obj = getObjectById('text');

        //Check if text has styled
        var isItalic = getStyle(text_obj, 'fontStyle') === 'italic';
        var isUnderline = (getStyle(text_obj, 'textDecoration') || '').indexOf('underline') > -1;
        var isBold = getStyle(text_obj, 'fontWeight') === 'bold';

        if (img.hasClass('latinetext'))
            setStyle(text_obj, 'fontStyle', isItalic ? '' : 'italic');
        else if (img.hasClass('underlinetext'))
            setStyle(text_obj, 'textDecoration', isUnderline ? '' : 'underline');
        else if (img.hasClass('boldtext'))
            setStyle(text_obj, 'fontWeight', isBold ? '' : 'bold');
        canvas.renderAll();
    });
    /** EOF text style format **/

    /** BOF curved text handle **/
    $('#curve_check').click(function () {
        var obj = getObjectById('text');
        var default_text = $('#letter').val();
        var props = txtInstance.toObject();
        var textSample;

        if (/curvedText/.test(obj.type)) {
            $('#curve_xyz').hide();
            props = obj.toObject();
            delete props['type'];
            textSample = new fabric.Text(default_text, props);
        } else if (/text/.test(obj.type)) {
            $('#curve_xyz').show();
            delete props['type'];
            props['textAlign'] = 'center';
            props['radius'] = 50;
            props['spacing'] = 20;
            textSample = new fabric.CurvedText(default_text, props);
        }
        textSample.id = 'text';
        canvas.remove(obj);
        canvas.add(textSample).renderAll();
    });
    /** EOF curved text handle **/

    //Flipt text
    $('.flip-txt').click(function() {
        text_obj = getObjectById('text');
        var type = $(this).find('img');
        if(type.hasClass('vert-flip')) {
            if(text_obj.getFlipX())
                text_obj.setFlipX(false);
            else
                text_obj.setFlipX(true);
        } else if(type.hasClass('hori-flip')) {
            if(text_obj.getFlipY())
                text_obj.setFlipY(false);
            else
                text_obj.setFlipY(true);
        }
        canvas.renderAll();
    });

    //Upload Image
    $('#image-pop').click(function () {
        var img_block = $('#image_block');

        if (img_block.hasClass('hide')) {
            $('#txt_block').addClass('hide');
            img_block.removeClass('hide');
        }
        $('#fileupload').click();
    });

    $('#fileupload').change(function (evt) {
        fileSelect(evt);
    });

    //Show text panel
    $('#text_menubar').click(function () {
        var txt_block = $('#txt_block');
        if (txt_block.hasClass('hide')) {
            $('#image_block').addClass('hide');
            txt_block.removeClass('hide');
        }
    });

    //Effect container switcher
    $('.text_effect_btn').click(function() {
        var id = $(this).attr('id');
        $('.text_effect_btn').not(document.getElementById(id)).removeClass('active');
        $(this).addClass('active');
        switch (id) {
            case 'glow_btn':
                $('#shadow_effect').hide();
                $('#glow_effect').show();
                break;
            case 'shadow_btn':
                $('#glow_effect').hide();
                $('#shadow_effect').show();
                break;
        }
    });

    //Update text
    $('#letter').keyup(function () {
        text_obj = getObjectById('text');
        if(text_obj === undefined){
            textInit();
            text_obj = getObjectById('text');
        }
        text_obj.setText($(this).val());
        canvas.renderAll();
        $('#showtext').show().find('span').html($(this).val());
        if($(this).val() == '')
            $('#showtext').hide();
    });

    //Change text font
    $('#font_select').change(function () {
        text_obj = getObjectById('text');
        text_obj.setFontFamily($(this).val());
        text_obj.setText($('#letter').val());
        text_obj.setCoords();
        canvas.renderAll();
    });

    //Layer sortable Init
    $('.shortable').sortable({
        update: function(event, ui) {
            var end_pos = $(ui.item).index();
            var drag_id = $(ui.item).attr("id");
            var text_obj = getObjectById('text');
            var img_obj = getObjectById('image');
            if(drag_id == 'showtext') {
                if(end_pos == 0)
                    text_obj.bringToFront();
                else
                    text_obj.sendToBack();
            } else if (drag_id == 'showimage') {
                if(end_pos == 0)
                    img_obj.bringToFront();
                else
                    img_obj.sendToBack();
            }
            canvas.renderAll();
        }
    });

    //Remove layers
    $('.layer_close_btn').click(function() {
        var id = $(this).attr('id');
        text_obj = getObjectById('text');
        var img_obj = getObjectById('image');

        $(this).parent().hide();

        if (id == 'text_cross') {
            $('#letter').val('');
            canvas.remove(text_obj);
        } else if ( id =='image_cross') {
            canvas.remove(img_obj);
        }
        canvas.renderAll();
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
    //Remove old image object if exist
    var img = getObjectById('image');
    canvas.remove(img);

    //Create Image
    var imgInstance = new fabric.Image(image, {
        id: 'image',
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

    canvas.add(imgInstance);
    canvas.setActiveObject(imgInstance);
    imgInstance.center().setCoords();
    canvas.renderAll();

    updateImagePosition(imgInstance);

    //Reset Slider Value
    $("#ImageRotationSlider").slider("value", 0);
    $("#rotate_value").val(0);

    //Add image to layer item
    var src = imgInstance.toDataURL();
    $('#showimage').show().find('span').html('<img width="45" height="45" src ="' + src + '">');
}
function updateImagePosition(object) {
    $('#spinner-I').val(Math.round(object.getLeft() / 10));
    $('#spinner-J').val(Math.round(object.getTop() / 10));
}
function updateTextPosition(obj) {
    $('#spinner-A').val(Math.round(obj.getLeft() / 10));
    $('#spinner-B').val(Math.round(obj.getTop() / 10));
}
function initCanvas() {
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
    canvas.clipTo = function (ctx) {
        ctx.beginPath();
        ctx.rect((canvas.width / 2) - 100, (canvas.height / 2) - 200, 200, 300);
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

    txt = txtInstance.clone();
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
    group = new fabric.Group(text_group, {
        id: 'text_group',
        hasRotatingPoint: false,
        hasControls: false,
        hasBorders: false,
        visible: true
    });

    return group;
}
function getStyle(object, styleName) {
    return (object.getSelectionStyles && object.isEditing)
        ? object.getSelectionStyles()[styleName]
        : object[styleName];
}
function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
        var style = { };
        style[styleName] = value;
        object.setSelectionStyles(style);
        object.setCoords();
    }
    else {
        object[styleName] = value;
    }
    canvas.renderAll();
}
function getObjectById(id) {
    var objects = canvas.getObjects();
    for (var i in objects) {
        if (objects[i].id == id)
            return objects[i];
    }
}
function setShadow(color, x, y, blur){
    text_obj = getObjectById('text');
    text_obj.setShadow({
        offsetX: x,
        offsetY: y,
        color: color,
        blur: blur
    });
    canvas.renderAll();
}

function textInit(){
    var txtInstance = new fabric.Text('', {
        originX: 'center',
        originY: 'center',
        id: 'text',
        fontSize: 30,
        hasRotatingPoint: false,
        hasControls: false,
        hasBorders: false,
        useNative: true,
        centeredRotation: true
    });

    //fix font-preloading problem
    $('#font_select option').each(function () {
        var fontFamily = $(this).val();
        txtInstance.set('fontFamily', fontFamily);
        canvas.renderAll();
    });
    txtInstance.setFontFamily('ballon');
    canvas.add(txtInstance);
    txtInstance.center().setCoords();
    canvas.renderAll();
    updateTextPosition(txtInstance);
}
