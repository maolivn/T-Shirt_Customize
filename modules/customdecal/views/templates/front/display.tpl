{include file="$block_tpl_path/header.tpl"}
<input type="file" style="display: none" id="fileupload">
<div id="decal_left" class="left">
    <div class="block tags_block" id="tags_block_left">
        <div id="image_block" class="hide">{include file="$block_tpl_path/image_block.tpl"}</div>
        <div id="txt_block">{include file="$block_tpl_path/txt_block.tpl"}</div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0" class="tools-body-left-slider" style="margin-left: 0px;">
            <tbody><tr>
                <td class="tools-body-left-slider-left">
                    <div class="tools-body-left-slider-left-head">View</div>
                    <div class="tools-body-left-slider-left-body" id="shrt_img">
                        <div style="background-color: rgb(0, 0, 255);" class="tools-body-left-slider-left-body-image">
                            <img width="50" height="52" alt="" src="modules/customdecal/img/t-shirts_front.png">
                        </div>
                        <div style="background-color: rgb(0, 0, 255);" class="tools-body-left-slider-left-body-image">
                            <img width="50" height="52" alt="" src="modules/customdecal/img/t-shirts_back.png">
                        </div>
                        <!--<div class="tools-body-left-slider-left-body-image" style="background-color:#F30;">
                            <img src="images/t-shirts_Rht-side.png" width="50" height="52"  alt=""/>
                        </div>
                        <div class="tools-body-left-slider-left-body-image" style="background-color:#F30;">
                            <img src="images/t-shirts_lft-side.png" width="50" height="52"  alt=""/>
                        </div>-->
                    </div>
                    <div class="tools-body-left-slider-left-head">Colors</div>
                    <div class="tools-body-left-slider-left-body" id="shrt_img_color">


                        <div style="background-color:#FFF; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#000; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#09F; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#00F; width:18px;" class="tools-body-left-slider-left-body-image selected">&nbsp;</div>
                        <div style="background-color:#AAFFB0; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#0F0; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#FF0; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="background-color:#FFA6FF; width:18px;" class="tools-body-left-slider-left-body-image">&nbsp;</div>
                        <div style="float:left;margin-left:21px;margin-top:33px;">
                            <a href="JavaScript:void(0);">
                                <img width="25" height="24" alt="" src="images/information-icon.png">
                            </a>
                        </div>
                    </div>
                </td>
                <td class="tools-body-left-slider-right">
                    <div class="slider-open-close slider-close-arow"></div>
                </td>
            </tr>
            </tbody></table>
    </div>
</div>
<div id="canvas-wrapper" class="editor-area left">
    <div class="canvas-bg-wrapper">
        <img class="canvas-bg" style="" src="{$img_tpl_path}/t-shirts_front.png">
        <canvas id="canvas"></canvas>
    </div>
</div>
<div id="decal_right" class="left">
    {include file="$block_tpl_path/effects_block.tpl"}
</div>
