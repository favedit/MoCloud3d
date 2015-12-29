//==========================================================
// <T>场景空间应用。</T>
//
// @class
// @author maocy
// @history 151226
//==========================================================
MO.FSceneSpaceApplication = function FSceneSpaceApplication(o){
   o = MO.Class.inherits(this, o, MO.FSpaceApplication);
   //..........................................................
   // @event
   o.onDataLoaded   = MO.FSceneSpaceApplication_onDataLoaded;
   //..........................................................
   // @method
   o.construct      = MO.FSceneSpaceApplication_construct;
   // @method
   o.setup          = MO.FSceneSpaceApplication_setup;
   // @method
   o.loadByGuid     = MO.FSceneSpaceApplication_loadByGuid;
   o.loadByCode     = MO.FSceneSpaceApplication_loadByCode;
   // @method
   o.dispose        = MO.FSceneSpaceApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSceneSpaceApplication_onDataLoaded = function FSceneSpaceApplication_onDataLoaded(event){
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
   o._desktop.selectStage(space);
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FSceneSpaceApplication_construct = function FSceneSpaceApplication_construct(){
   var o = this;
   o.__base.FSpaceApplication.construct.call(o);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param guid:String 唯一编号
//==========================================================
MO.FSceneSpaceApplication_loadByGuid = function FSceneSpaceApplication_loadByGuid(guid){
   var o = this;
   // 获得属性
   var desktop = o._desktop;
   var canvas = desktop.canvas3d();
   var graphic = canvas.graphicContext();
   // 收集场景
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var scene = o._activeSpace = sceneConsole.allocByGuid(graphic, guid);
   scene.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FSceneSpaceApplication_loadByCode = function FSceneSpaceApplication_loadByCode(code){
   var o = this;
   // 获得属性
   var desktop = o._desktop;
   var canvas = desktop.canvas3d();
   var graphic = canvas.graphicContext();
   // 收集场景
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var scene = o._activeSpace = sceneConsole.allocByCode(graphic, code);
   scene.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FSceneSpaceApplication_dispose = function FSceneSpaceApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FSpaceApplication.dispose.call(o);
}
