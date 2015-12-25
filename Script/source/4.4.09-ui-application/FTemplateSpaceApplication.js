//==========================================================
// <T>画板应用。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FTemplateSpaceApplication = function FTemplateSpaceApplication(o){
   o = MO.Class.inherits(this, o, MO.FSpaceApplication);
   //..........................................................
   // @event
   o.onDataLoaded   = MO.FTemplateSpaceApplication_onDataLoaded;
   //..........................................................
   // @method
   o.construct      = MO.FTemplateSpaceApplication_construct;
   // @method
   o.setup          = MO.FTemplateSpaceApplication_setup;
   // @method
   o.loadByGuid     = MO.FTemplateSpaceApplication_loadByGuid;
   o.loadByCode     = MO.FTemplateSpaceApplication_loadByCode;
   // @method
   o.dispose        = MO.FTemplateSpaceApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FTemplateSpaceApplication_onDataLoaded = function FTemplateSpaceApplication_onDataLoaded(event){
   var o = this;
   var graphic = o._graphicContext;
   var space = o._activeSpace = event.sender;
   // 设置投影
   var size = graphic.size();
   var camerapPojection = space.camera().projection();
   camerapPojection.size().set(size.width, size.height);
   camerapPojection.update();
   // 设置移动
   var regionResource = space.region()._resource;
   o._cameraMoveRate = regionResource.moveSpeed();
   o._cameraKeyRotation = regionResource.rotationKeySpeed();
   o._cameraMouseRotation = regionResource.rotationMouseSpeed();
   // 加载完成
   //var canvas3d = o._desktop.canvas3d();
   //canvas3d.selectStage(space);
   o._desktop.selectStage(space);
   // 设置大小
   //o._desktop.resize();
   //var event = new MO.SEvent(o);
   //event.space = s;
   //o.processLoadListener(event);
   //event.dispose();
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FTemplateSpaceApplication_construct = function FTemplateSpaceApplication_construct(){
   var o = this;
   o.__base.FSpaceApplication.construct.call(o);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param guid:String 唯一编号
//==========================================================
MO.FTemplateSpaceApplication_loadByGuid = function FTemplateSpaceApplication_loadByGuid(guid){
   var o = this;
   // 收集场景
   var templateConsole = MO.Console.find(MO.FE3dTemplateConsole);
   if(o._activeSpace){
      templateConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var template = o._activeSpace = templateConsole.allocByGuid(o._graphicContext, guid);
   template.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FTemplateSpaceApplication_loadByCode = function FTemplateSpaceApplication_loadByCode(code){
   var o = this;
   // 收集场景
   var templateConsole = MO.Console.find(MO.FE3dTemplateConsole);
   if(o._activeSpace){
      templateConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var template = o._activeSpace = templateConsole.allocByCode(o._graphicContext, code);
   template.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FTemplateSpaceApplication_dispose = function FTemplateSpaceApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FSpaceApplication.dispose.call(o);
}
