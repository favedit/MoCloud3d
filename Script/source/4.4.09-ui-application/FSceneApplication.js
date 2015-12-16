//==========================================================
// <T>画板应用。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FSceneApplication = function FSceneApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   //..........................................................
   // @attribute
   o._desktop      = MO.Class.register(o, new MO.AGetter('_desktop'));
   // @attribute
   o._dynamicInfo  = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   //..........................................................
   // @event
   o.onDataLoaded  = MO.FSceneApplication_onDataLoaded;
   //..........................................................
   // @method
   o.construct     = MO.FSceneApplication_construct;
   // @method
   o.createChapter = MO.FSceneApplication_createChapter;
   o.setup         = MO.FSceneApplication_setup;
   // @method
   o.processResize = MO.FSceneApplication_processResize;
   o.processEvent  = MO.FSceneApplication_processEvent;
   o.process       = MO.FSceneApplication_process;
   // @method
   o.loadByGuid    = MO.FSceneApplication_loadByGuid;
   o.loadByCode    = MO.FSceneApplication_loadByCode;
   // @method
   o.dispose       = MO.FSceneApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSceneApplication_onDataLoaded = function FSceneApplication_onDataLoaded(event){
   var o = this;
   var graphic = o._graphicContext;
   var space = o._activeSpace;
   // 设置投影
   var cs = graphic.size();
   var rp = space.camera().projection();
   rp.size().set(cs.width, cs.height);
   rp.update();
   // 设置移动
   var gr = space.region()._resource;
   o._cameraMoveRate = gr.moveSpeed();
   o._cameraKeyRotation = gr.rotationKeySpeed();
   o._cameraMouseRotation = gr.rotationMouseSpeed();
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
MO.FSceneApplication_construct = function FSceneApplication_construct(){
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
MO.FSceneApplication_createChapter = function FSceneApplication_createChapter(code){
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
MO.FSceneApplication_setup = function FSceneApplication_setup(hPanel){
   var o = this;
   var result = o.__base.FApplication.setup.call(o, hPanel);
   if(!result){
      return result;
   }
   o._hPanel = hPanel;
   //..........................................................
   // 创建桌面
   var desktop = o._desktop = MO.Class.create(MO.FSceneDesktop);
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
MO.FSceneApplication_processResize = function FSceneApplication_processResize(event){
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
MO.FSceneApplication_processEvent = function FSceneApplication_processEvent(event){
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
MO.FSceneApplication_process = function FSceneApplication_process(){
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
MO.FSceneApplication_loadByGuid = function FSceneApplication_loadByGuid(guid){
   var o = this;
   // 收集场景
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var scene = o._activeSpace = sceneConsole.allocByGuid(o._graphicContext, guid);
   scene.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>加载场景处理。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FSceneApplication_loadByCode = function FSceneApplication_loadByCode(code){
   var o = this;
   // 收集场景
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   // 监听加载完成
   var scene = o._activeSpace = sceneConsole.allocByCode(o._graphicContext, code);
   scene.addLoadListener(o, o.onDataLoaded);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FSceneApplication_dispose = function FSceneApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FApplication.dispose.call(o);
}
