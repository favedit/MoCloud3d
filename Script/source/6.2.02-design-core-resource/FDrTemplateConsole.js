//==========================================================
// <T>设计资源模型控制台。</T>
//
// @class
// @author maocy
// @version 150415
//==========================================================
MO.FDrTemplateConsole = function FDrTemplateConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   //..........................................................
   // @attribute
   o._serviceCode   = 'cloud.resource.template';
   //..........................................................
   // @method
   o.selectMaterial = MO.FDrTemplateConsole_selectMaterial;
   o.createDisplay  = MO.FDrTemplateConsole_createDisplay;
   o.update         = MO.FDrTemplateConsole_update;
   return o;
}

//==========================================================
// <T>选择材质处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrTemplateConsole_selectMaterial = function FDrTemplateConsole_selectMaterial(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMaterial');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>插入精灵处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrTemplateConsole_createDisplay = function FDrTemplateConsole_createDisplay(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createDisplay');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>更新处理。</T>
//
// @param config:TXmlNode 配置节点
//==========================================================
MO.FDrTemplateConsole_update = function FDrTemplateConsole_update(config){
   var o = this;
   // 生成地址
   var url = MO.RBrowser.hostPath('/' + o._serviceCode + '.ws?action=updateContent&date=' + RDate.format());
   // 发送数据
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, config);
}
