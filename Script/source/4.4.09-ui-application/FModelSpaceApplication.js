//==========================================================
// <T>画板应用。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FModelSpaceApplication = function FModelSpaceApplication(o){
   o = MO.Class.inherits(this, o, MO.FSpaceApplication);
   //..........................................................
   // @event
   o.onDataLoaded   = MO.FModelSpaceApplication_onDataLoaded;
   //..........................................................
   // @method
   o.construct      = MO.FModelSpaceApplication_construct;
   // @method
   o.setup          = MO.FModelSpaceApplication_setup;
   // @method
   o.loadByGuid     = MO.FModelSpaceApplication_loadByGuid;
   o.loadByCode     = MO.FModelSpaceApplication_loadByCode;
   // @method
   o.dispose        = MO.FModelSpaceApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FModelSpaceApplication_onDataLoaded = function FModelSpaceApplication_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace = event.sender;
   // 获得属性
   var desktop = o._desktop;
   var canvas = desktop.canvas3d();
   var graphic = canvas.graphicContext();
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
MO.FModelSpaceApplication_construct = function FModelSpaceApplication_construct(){
   var o = this;
   o.__base.FSpaceApplication.construct.call(o);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param guid:String 唯一编号
//==========================================================
MO.FModelSpaceApplication_loadByGuid = function FModelSpaceApplication_loadByGuid(guid){
   var o = this;
   // 收集场景
   var modelConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      modelConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var model = o._activeSpace = modelConsole.allocByGuid(graphic, guid);
   model.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FModelSpaceApplication_loadByCode = function FModelSpaceApplication_loadByCode(code){
   var o = this;
   // 获得属性
   var desktop = o._desktop;
   var canvas = desktop.canvas3d();
   var graphic = canvas.graphicContext();
   // 收集场景
   var modelConsole = MO.Console.find(MO.FE3dModelConsole);
   if(o._activeSpace){
      modelConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var model = o._activeSpace = modelConsole.allocByCode(graphic, code);
   model.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FModelSpaceApplication_dispose = function FModelSpaceApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FSpaceApplication.dispose.call(o);
}
