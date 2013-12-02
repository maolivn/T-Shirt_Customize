<?php
class CustomDecalDisplayModuleFrontController extends ModuleFrontController {
    public $php_self;
    public function init() {
        parent::init();
        $this->php_self = 'CustomDecalDisplay';

        //Remove Left and Right Column
        $this->display_column_left = false;
        $this->display_column_right = false;

        $this->context->smarty->assign(array(
            'block_tpl_path' => _PS_MODULE_DIR_ . 'customdecal/views/templates/front/blocks',
            'img_tpl_path' => 'modules/customdecal/img'
        ));
    }

    public function initContent(){
        parent::initContent();
        $this->setTemplate('display.tpl');
    }
}
