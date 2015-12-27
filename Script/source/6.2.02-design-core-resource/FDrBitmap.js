//==========================================================
// <T>设计位图资源。</T>
//
// @class
// @author maocy
// @version 150424
//==========================================================
MO.FDrBitmap = function FDrBitmap(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   //..........................................................
   // @attribute
   o._classCode    = 'Bitmap';
   // @attribute
   o._sizeWidth    = MO.Class.register(o, new MO.AGetSet('_sizeWidth'), 0);
   o._sizeHeight   = MO.Class.register(o, new MO.AGetSet('_sizeHeight'), 0);
   //..........................................................
   // @method
   o.loadConfig    = MO.FDrBitmap_loadConfig;
   o.saveConfig    = MO.FDrBitmap_saveConfig;
   return o;
}

//==========================================================
// <T>加载配置信息。</T>
//
// @method
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrBitmap_loadConfig = function FDrBitmap_loadConfig(xconfig){
   var o = this;
   o.__base.FDrResource.loadConfig.call(o, xconfig);
   // 加载属性
   o._sizeWidth = xconfig.getInteger('size_width');
   o._sizeHeight = xconfig.getInteger('size_height');
}

//==========================================================
// <T>存储配置信息。</T>
//
// @method
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrBitmap_saveConfig = function FDrBitmap_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   // 存储属性
   xconfig.set('size_width', o._sizeWidth);
   xconfig.set('size_height', o._sizeHeight);
}
