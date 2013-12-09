{include file="$block_tpl_path/header.tpl"}
<input type="file" style="display: none" id="fileupload">
<div id="decal_left" class="left">
    <div class="block tags_block" id="tags_block_left">
        <div id="image_block" class="hide">{include file="$block_tpl_path/image_block.tpl"}</div>
        <div id="txt_block">{include file="$block_tpl_path/txt_block.tpl"}</div>
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
