//==========================================================
// <T>画板应用。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FE3dModelApplication = function FE3dModelApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   //..........................................................
   // @attribute
   o._desktop      = MO.Class.register(o, new MO.AGetter('_desktop'));
   // @attribute
   o._dynamicInfo  = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   //..........................................................
   // @event
   o.onDataLoaded  = MO.FE3dModelApplication_onDataLoaded;
   //..........................................................
   // @method
   o.construct     = MO.FE3dModelApplication_construct;
   // @method
   o.createChapter = MO.FE3dModelApplication_createChapter;
   o.setup         = MO.FE3dModelApplication_setup;
   // @method
   o.processResize = MO.FE3dModelApplication_processResize;
   o.processEvent  = MO.FE3dModelApplication_processEvent;
   o.process       = MO.FE3dModelApplication_process;
   // @method
   o.loadByGuid    = MO.FE3dModelApplication_loadByGuid;
   o.loadByCode    = MO.FE3dModelApplication_loadByCode;
   // @method
   o.dispose       = MO.FE3dModelApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FE3dModelApplication_onDataLoaded = function FE3dModelApplication_onDataLoaded(event){
   var o = this;
   var graphic = o._graphicContext;
   var space = o._activeSpace = event.source;
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
   var canvas3d = o._desktop.canvas3d();
   canvas3d.selectStage(space);
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
MO.FE3dModelApplication_construct = function FE3dModelApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
}

//==========================================================
// <T>根据代码创建章节。</T>
//
// @method
// @param code:String 代码
// @return FChapter 章节
//==========================================================
MO.FE3dModelApplication_createChapter = function FE3dModelApplication_createChapter(code){
   var o = this;
   var chapter = null;
   switch(code){
      // 创建图表章节
      case MO.ECanvasChapter.Simple:
         chapter = MO.Class.create(MO.FCanvasSimpleChapter);
         break;
   }
   chapter.linkGraphicContext(o);
   return chapter;
}

//==========================================================
// <T>配置处理。</T>
//
// @method
// @param hPanel:HtmlTag 页面元素
//==========================================================
MO.FE3dModelApplication_setup = function FE3dModelApplication_setup(hPanel){
   var o = this;
   var result = o.__base.FApplication.setup.call(o, hPanel);
   if(!result){
      return result;
   }
   o._hPanel = hPanel;
   //..........................................................
   // 创建桌面
   var desktop = o._desktop = MO.Class.create(MO.FCanvasDesktop);
   desktop.setCanvas2dClass(MO.FGuiCanvas);
   desktop.setCanvas3dClass(MO.FCanvas3d);
   desktop.build(hPanel);
   // 检查状态
   var canvas = desktop.canvas3d();
   var context = canvas.graphicContext();
   if(!context.isValid()){
      return;
   }
   o.linkGraphicContext(canvas);
   //..........................................................
   // 创建动态信息
   var control = o._dynamicInfo = MO.Class.create(MO.FCanvasDynamicInfo);
   control.linkGraphicContext(canvas);
   control.setContext(canvas.graphicContext());
   control.location().set(10, 300);
   control.build();
   return true;
}

//==========================================================
// <T>大小变更事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FE3dModelApplication_processResize = function FE3dModelApplication_processResize(event){
   var o = this;
   o.__base.FApplication.processResize.call(o, event);
   // 处理事件
   var desktop = o._desktop;
   if(desktop){
      desktop.resize();
   }
}

//==========================================================
// <T>事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FE3dModelApplication_processEvent = function FE3dModelApplication_processEvent(event){
   var o = this;
   o.__base.FApplication.processEvent.call(o, event);
   // 处理事件
   var desktop = o._desktop;
   if(desktop){
      desktop.processEvent(event);
   }
}

//==========================================================
// <T>逻辑处理。</T>
//
// @method
//==========================================================
MO.FE3dModelApplication_process = function FE3dModelApplication_process(){
   var o = this;
   o.__base.FApplication.process.call(o);
   // 桌面处理
   o._desktop.process();
   var space = o._activeSpace;
   if(space){
      space.process();
   }
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param guid:String 唯一编号
//==========================================================
MO.FE3dModelApplication_loadByGuid = function FE3dModelApplication_loadByGuid(guid){
   var o = this;
   // 收集场景
   var modelConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      modelConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var model = o._activeSpace = modelConsole.allocByGuid(o._graphicContext, guid);
   model.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FE3dModelApplication_loadByCode = function FE3dModelApplication_loadByCode(code){
   var o = this;
   // 收集场景
   var modelConsole = MO.Console.find(MO.FE3dModelConsole);
   if(o._activeSpace){
      modelConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var model = o._activeSpace = modelConsole.allocByCode(o._graphicContext, code);
   model.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FE3dModelApplication_dispose = function FE3dModelApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FApplication.dispose.call(o);
}
