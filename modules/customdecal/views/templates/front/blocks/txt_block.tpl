<div class="title_block">Text</div>
<div class="block_content">
    <label class="tools-fixd-tab-back-label">Enter Text</label>
    <textarea name="text_name" id="letter" cols="26" rows="2" class="tools-fixd-tab-back-field product-monogram-txt-stl"></textarea>

    <div class="span-container">
        <input type="checkbox" style="float:left;margin:0;padding:0;vertical-align:middle;">
        <label style="width:auto;line-height:15px;" class="tools-fixd-tab-back-label">&nbsp;&nbsp;Right to Left</label>
    </div>
    <div class="span-container">
        <label style="width:auto;line-height:22px;" class="tools-fixd-tab-back-label">Fonts</label>
        <select style="width:111px;float:right;margin-left:12px;" name="monogram_font" id="font_select" class="tools-fixd-tab-back-select">
            <option selected="selected" value="ballon">Ballon</option>
            <option value="Cool3D">Cool3D</option>
            <option value="arial">Arial</option>
            <option value="contrast">Contrast</option>
            <option value="Heineken">Heineken</option>
            <option value="blackjack">blackjack</option>
            <option value="OLDFAX">OLDFAX</option>
            <option value="sewer">Sewer</option>
            <option value="WavedLineRegular">WavedLineRegular</option>
            <option value="HorrendousRegular">HorrendousRegular</option>
            <option value="XposedRegular">XposedRegular</option>
            <option value="BitstreamVeraSansBold">BitstreamVeraSansBold</option>
            <option value="MilitRegular">MilitRegular</option>
            <option value="MoltenRegular">MoltenRegular</option>
            <option value="FleckRegular">FleckRegular</option>
        </select>
        <input type="hidden" class="font_select_hidden" value="ballon">
    </div>
    <div class="span-container">
        <label class="tools-fixd-tab-back-label img-label">Size</label>
        <span style="float:right;">
            <input type="text" class="slider_value" id="sizetext" value="30">
            <div id="slider-range-max" class="img_slider"></div>
        </span>
    </div>
    <div class="span-container">
        <label class="tools-fixd-tab-back-label img-label">Spacing</label>
        <span class="span-row">
            <input type="text" class="slider_value" id="spacetext" value="0">
			<div id="slider-range-max-space" class="img_slider"></div>
        </span>
    </div>
    <div class="span-container">
        <label class="tools-fixd-tab-back-label img-label">Opacity</label>
        <span style="float:right;">
            <input type="text" class="slider_value" id="opactext" value="10">
			<div id="slider-range-max-opacity" class="img_slider"></div>
        </span>
    </div>
    <div style="float:left;width:100%;">
        <div style="width:50%;" class="span-container xupper">
            <label style="width:auto;line-height:22px;margin-right:4px;" class="tools-fixd-tab-back-label">X pos</label>
            <input value="0" name="value" id="spinner-A">
        </div>
        <div style="width:50%;" class="span-container">
            <label style="width:auto;line-height:22px;margin-right:4px;" class="tools-fixd-tab-back-label">Y pos</label>
            <input value="0" name="value" id="spinner-B">
        </div>
    </div>
    <div class="span-container">
        <input type="button" class="span-container-button-style center_align" value="Center">
    </div>
    <div style="width:100%;margin-top:12px;" class="span-container">
        <label style="width:auto;line-height:29px;margin-right:4px;" class="tools-fixd-tab-back-label">Align</label>

        <div style="float:right;width:128px;">
            <span class="text_align" id="txt_justify">
                <img width="32" height="32" alt="" src="modules/customdecal/img/1374251743_text_align_justity.png">
            </span>
            <span class="text_align" id="txt_right">
               	<img width="32" height="32" alt="" class="right_align" src="modules/customdecal/img/1374251703_text_align_right.png">
            </span>
            <span class="text_align" id="txt_center">
                <img width="32" height="32" alt="" class="center_align" src="modules/customdecal/img/1374251724_text_align_center.png">
            </span>
            <span class="text_align" id="txt_left">
                <img width="32" height="32" alt="" class="left_align" src="modules/customdecal/img/1374251714_text_align_left.png">
            </span>
        </div>
    </div>
    <div class="span-container">
        <label style="width:auto;line-height:29px;margin-right:4px;" class="tools-fixd-tab-back-label">Color</label>
        <div id="colorSelector"><div style="background-color: #0000ff"></div></div>
    </div>
</div>
