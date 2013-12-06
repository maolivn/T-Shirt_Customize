<?php
if (!defined('_PS_VERSION_')) exit;
class CustomDecal extends Module {
    public function __construct()
    {
        $this->name          = 'customdecal';
        $this->tab           = 'front_office_features';
        $this->version       = '1.0';
        $this->author        = 'Tan Phan - tanitct89@gmail.com';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->l('CustomDecal');
        $this->description = $this->l('Prestashop Module for customize product appearance.');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

        if (!Configuration::get('PS_CUSTOMDECAL')) $this->warning = $this->l('No name provided');
    }

    public function install()
    {
        if (Shop::isFeatureActive()) Shop::setContext(Shop::CONTEXT_ALL);

        return parent::install() &&
        $this->registerHook('header') &&
        $this->registerHook('displayLeftColumnProduct') &&
        $this->registerHook('displayFooterProduct') &&
        $this->registerHook('displayAdminProductsExtra') &&
        $this->registerHook('displayAdminOrder') &&
        $this->registerHook('actionProductSave') &&
        Configuration::updateValue('PS_CUSTOMDECAL', 'customdecal');
    }

    public function uninstall()
    {
        return parent::uninstall() && Configuration::deleteByName('PS_CUSTOMDECAL');
    }

    public function hookDisplayHeader()
    {
        $page = $this->context->controller->php_self;
        if ($page == 'CustomDecalDisplay') {
            $this->context->controller->addCSS($this->_path . 'css/jquery-ui/jquery-ui.min.css', 'all');
            $this->context->controller->addCSS($this->_path . 'css/font.css', 'all');
            $this->context->controller->addCSS($this->_path . 'css/colorpicker.css', 'all');
            $this->context->controller->addCSS($this->_path . 'css/customdecal.css', 'all');
            $this->context->controller->addJS($this->_path . 'js/jquery-ui.min.js');
            $this->context->controller->addJS($this->_path . 'js/fabric.all.min.js');
            $this->context->controller->addJS($this->_path . 'js/fabric.curvedText.js');
            $this->context->controller->addJS($this->_path . 'js/colorpicker.js');
            $this->context->controller->addJS($this->_path . 'js/fabric_init.js');
        }
    }

    public function hookDisplayLeftColumnProduct($params)
    {
        $this->context->smarty->assign(array('module_link' => $this->context->link->getModuleLink('customdecal', 'display')));
        return $this->display(__FILE__, 'LeftColumnProduct.tpl');
    }
}
