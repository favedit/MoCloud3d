//==========================================================
// <T>设计框架。</T>
//
// @class
// @author maocy
// @history 150424
//==========================================================
MO.FDsFrameSet = function FDsFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDuiFrameSet);
   //..........................................................
   // @style
   o._styleToolBarGround   = MO.Class.register(o, new MO.AStyle('_styleToolBarGround', 'ToolBar_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleCanvasContent   = MO.Class.register(o, new MO.AStyle('_styleCanvasContent', 'Canvas_Content'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   //..........................................................
   // @attribute
   o._activeGuid           = null;
   o._activeCode           = null;
   o._activeSpace          = null;
   // @attribute
   o._defineFrames         = null;
   o._propertyFrames       = MO.Class.register(o, new MO.AGetter('_propertyFrames'));
   //..........................................................
   // @method
   o.construct             = MO.FDsFrameSet_construct;
   // @method
   o.registerPropertyFrame = MO.FDsFrameSet_registerPropertyFrame;
   o.findPropertyFrame     = MO.FDsFrameSet_findPropertyFrame;
   o.selectPropertyFrame   = MO.FDsFrameSet_selectPropertyFrame;
   o.hidePropertyFrames    = MO.FDsFrameSet_hidePropertyFrames;
   // @method
   o.dispose               = MO.FDsFrameSet_dispose;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsFrameSet_construct = function FDsFrameSet_construct(){
   var o = this;
   // 父处理
   o.__base.FDuiFrameSet.construct.call(o);
   // 设置属性
   o._defineFrames = new MO.TObjects();
   o._propertyFrames = new MO.TDictionary();
}

//==========================================================
// <T>注册一个属性页面。</T>
//
// @method
// @param clazz:Function 类对象
// @param frameName:String 页面代码
//==========================================================
MO.FDsFrameSet_registerPropertyFrame = function FDsFrameSet_registerPropertyFrame(clazz, frameName){
   var o = this;
   var frame = new MO.SDsPropertyFrame();
   frame.clazz = clazz;
   frame.name = frameName;
   o._defineFrames.push(frame);
}

//==========================================================
// <T>根据名称获得属性页面。</T>
//
// @method
// @param code:String 代码
// @return FDuiFrame 页面
//==========================================================
MO.FDsFrameSet_findPropertyFrame = function FDsFrameSet_findPropertyFrame(code){
   var o = this;
   var frames = o._propertyFrames;
   var frame = frames.get(code);
   if(!frame){
      frame = MO.Console.find(MO.FDuiFrameConsole).get(o, code, o._framePropertyContent._hContainer);
      frame._frameSet = o;
      frames.set(code, frame);
   }
   return frame;
}

//==========================================================
// <T>根据名称选择属性页面。</T>
//
// @method
// @param space:FE3dSpace 空间
// @param select:FE3dObject 选择对象
// @return FDuiFrame 属性页面
//==========================================================
MO.FDsFrameSet_selectPropertyFrame = function FDsFrameSet_selectPropertyFrame(space, select){
   var o = this;
   var selectFrame = null;
   var frames = o._defineFrames;
   var count = frames.count();
   for(var i = 0; i < count; i++){
      var frame = frames.at(i);
      if(MO.Class.isClass(select, frame.clazz)){
         // 选中页面
         selectFrame = frame.frame;
         if(!selectFrame){
            selectFrame = frame.frame = o.findPropertyFrame(frame.name);
         }
         selectFrame.show();
         selectFrame.loadObject(space, select);
         break;
      }
   }
   return selectFrame;
}

//==========================================================
// <T>隐藏属性界面集合。</T>
//
// @method
//==========================================================
MO.FDsFrameSet_hidePropertyFrames = function FDsFrameSet_hidePropertyFrames(){
   var o = this;
   var frames = o._propertyFrames;
   var count = frames.count();
   for(var i = 0; i < count; i++){
      var frame = frames.at(i);
      frame.hide();
   }
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsFrameSet_dispose = function FDsFrameSet_dispose(){
   var o = this;
   // 释放属性
   o._activeSpace = null;
   o._defineFrames = MO.Lang.Object.dispose(o._defineFrames, true);
   o._propertyFrames = MO.Lang.Object.dispose(o._propertyFrames, true);
   // 父处理
   o.__base.FDuiFrameSet.dispose.call(o);
}
