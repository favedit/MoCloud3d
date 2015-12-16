MO.EApplicationConstant = new function EApplicationConstant(){
   var o = this;
   o.SessionCode = "mo-session-id";
   o.Resource    = "resource";
   return o;
}
MO.ECanvasChapter = new function ECanvasChapter(){
   var o = this;
   o.Simple = 'simple';
   return o;
}
MO.ECanvasScene = new function ECanvasScene(){
   var o = this;
   o.Simple = 'simple';
   return o;
}
MO.FCanvas3d = function FCanvas3d(o){
   o = MO.Class.inherits(this, o, MO.FE3dCanvas);
   o._scaleRate          = 1;
   o._optionStageProcess = false;
   o._optionResize       = false;
   o._optionMouseCapture = false;
   o._optionAlpha        = false;
   o._optionAntialias    = false;
   o._activeStage        = MO.Class.register(o, new MO.AGetter('_activeStage'));
   o._capturePosition    = null;
   o._captureRotation    = null;
   o._cameraPosition     = null;
   o.construct           = MO.FCanvas3d_construct;
   o.resize              = MO.FCanvas3d_resize;
   o.selectStage         = MO.FCanvas3d_selectStage;
   o.setPanel            = MO.FCanvas3d_setPanel;
   o.dispose             = MO.FCanvas3d_dispose;
   return o;
}
MO.FCanvas3d_construct = function FCanvas3d_construct(){
   var o = this;
   o.__base.FE3dCanvas.construct.call(o);
   o._rotation = new MO.SVector3();
   o._capturePosition = new MO.SPoint2();
   o._captureRotation = new MO.SVector3();
   o._logicSize.set(1920, 1080);
   o._cameraPosition = new MO.SPoint3();
}
MO.FCanvas3d_resize = function FCanvas3d_resize(width, height){
   var o = this;
   o.__base.FE3dCanvas.resize.call(o, width, height);
   var context = o._graphicContext;
   var size = context.size();
   var stage = o._activeStage;
   if(stage){
      var projection = stage.camera().projection();
      projection.size().set(size.width, size.height);
      projection.update();
   }
}
MO.FCanvas3d_selectStage = function FCanvas3d_selectStage(stage){
   var o = this;
   if(stage){
      stage.linkGraphicContext(o);
      stage.region().linkGraphicContext(o);
      if(!stage.technique()){
         stage.selectTechnique(o, MO.FE3dGeneralTechnique);
      }
   }
   o._activeStage = stage;
}
MO.FCanvas3d_setPanel = function FCanvas3d_setPanel(hPanel){
   var o = this;
   hPanel.appendChild(o._hCanvas);
}
MO.FCanvas3d_dispose = function FCanvas3d_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o._capturePosition = MO.Lang.Object.dispose(o._capturePosition);
   o._captureRotation = MO.Lang.Object.dispose(o._captureRotation);
   o._cameraPosition = MO.Lang.Object.dispose(o._cameraPosition);
   o.__base.FE3dCanvas.dispose.call(o);
}
MO.FCanvasApplication = function FCanvasApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   o._desktop      = MO.Class.register(o, new MO.AGetter('_desktop'));
   o._dynamicInfo  = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   o.construct     = MO.FCanvasApplication_construct;
   o.createChapter = MO.FCanvasApplication_createChapter;
   o.setup         = MO.FCanvasApplication_setup;
   o.processResize = MO.FCanvasApplication_processResize;
   o.processEvent  = MO.FCanvasApplication_processEvent;
   o.process       = MO.FCanvasApplication_process;
   o.dispose       = MO.FCanvasApplication_dispose;
   return o;
}
MO.FCanvasApplication_construct = function FCanvasApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
}
MO.FCanvasApplication_createChapter = function FCanvasApplication_createChapter(code){
   var o = this;
   var chapter = null;
   switch(code){
      case MO.ECanvasChapter.Simple:
         chapter = MO.Class.create(MO.FCanvasSimpleChapter);
         break;
   }
   chapter.linkGraphicContext(o);
   return chapter;
}
MO.FCanvasApplication_setup = function FCanvasApplication_setup(hPanel){
   var o = this;
   var result = o.__base.FApplication.setup.call(o, hPanel);
   if(!result){
      return result;
   }
   o._hPanel = hPanel;
   var desktop = o._desktop = MO.Class.create(MO.FCanvasDesktop);
   desktop.build(hPanel);
   var canvas = desktop.canvas3d();
   var context = canvas.graphicContext();
   if(!context.isValid()){
      return;
   }
   o.linkGraphicContext(canvas);
   var control = o._dynamicInfo = MO.Class.create(MO.FCanvasDynamicInfo);
   control.linkGraphicContext(canvas);
   control.setContext(canvas.graphicContext());
   control.location().set(10, 300);
   control.build();
   return true;
}
MO.FCanvasApplication_processResize = function FCanvasApplication_processResize(event){
   var o = this;
   o.__base.FApplication.processResize.call(o, event);
   var desktop = o._desktop;
   if(desktop){
      desktop.resize();
   }
}
MO.FCanvasApplication_processEvent = function FCanvasApplication_processEvent(event){
   var o = this;
   o.__base.FApplication.processEvent.call(o, event);
   var desktop = o._desktop;
   if(desktop){
      desktop.processEvent(event);
   }
}
MO.FCanvasApplication_process = function FCanvasApplication_process(){
   var o = this;
   o.__base.FApplication.process.call(o);
   o._desktop.process();
}
MO.FCanvasApplication_dispose = function FCanvasApplication_dispose(){
   var o = this;
   o.__base.FApplication.dispose.call(o);
}
MO.FCanvasDesktop = function FCanvasDesktop(o){
   o = MO.Class.inherits(this, o, MO.FDesktop);
   o._orientationCd         = null;
   o._visible               = MO.Class.register(o, new MO.AGetter('_visible'), true);
   o._canvas2d              = MO.Class.register(o, new MO.AGetter('_canvas2d'));
   o._canvas3d              = MO.Class.register(o, new MO.AGetter('_canvas3d'));
   o.onOperationResize      = MO.FCanvasDesktop_onOperationResize;
   o.onOperationOrientation = MO.FCanvasDesktop_onOperationOrientation;
   o.construct              = MO.FCanvasDesktop_construct;
   o.build                  = MO.FCanvasDesktop_build;
   o.resize                 = MO.FCanvasDesktop_resize;
   o.setVisible             = MO.FCanvasDesktop_setVisible;
   o.show                   = MO.FCanvasDesktop_show;
   o.hide                   = MO.FCanvasDesktop_hide;
   o.selectStage            = MO.FCanvasDesktop_selectStage;
   o.dispose                = MO.FCanvasDesktop_dispose;
   return o;
}
MO.FCanvasDesktop_onOperationResize = function FCanvasDesktop_onOperationResize(event){
   var o = this;
   o.__base.FDesktop.onOperationResize.call(o, event);
   o.resize();
}
MO.FCanvasDesktop_onOperationOrientation = function FCanvasDesktop_onOperationOrientation(){
   var o = this;
   o.__base.FDesktop.onOperationOrientation.call(o, event);
   o.resize();
}
MO.FCanvasDesktop_construct = function FCanvasDesktop_construct(){
   var o = this;
   o.__base.FDesktop.construct.call(o);
   o._size.set(1920, 1080);
   o._logicSize.set(1920, 1080);
}
MO.FCanvasDesktop_build = function FCanvasDesktop_build(hPanel){
   var o = this;
   o.__base.FDesktop.build.call(o, hPanel);
   var canvas3d = o._canvas3d = MO.Class.create(MO.FCanvas3d);
   canvas3d.setDesktop(o);
   canvas3d.build(hPanel);
   canvas3d.setPanel(hPanel);
   o.canvasRegister(canvas3d);
   var canvas2d = o._canvas2d = MO.Class.create(MO.FGuiCanvas);
   canvas2d.setDesktop(o);
   canvas2d.build(hPanel);
   canvas2d.setPanel(hPanel);
   canvas2d._hCanvas.style.position = 'absolute';
   o.canvasRegister(canvas2d);
   MO.RE3dEngine.setup();
}
MO.FCanvasDesktop_resize = function FCanvasDesktop_resize(targetWidth, targetHeight){
   var o = this;
   var browser = MO.Window.Browser;
   var sourceWidth = (targetWidth != null) ? targetWidth : window.innerWidth;
   var sourceHeight = (targetHeight != null) ? targetHeight : window.innerHeight;
   var orientationCd = browser.orientationCd();
   if(o._screenSize.equalsData(sourceWidth, sourceHeight) && (o._orientationCd == orientationCd)){
      return;
   }
   o._screenSize.set(sourceWidth, sourceHeight);
   o._orientationCd = orientationCd;
   var pixelRatio = browser.capability().pixelRatio;
   var width = parseInt(sourceWidth * pixelRatio);
   var height = parseInt(sourceHeight * pixelRatio);
   o._size.set(width, height);
   var widthRate = 1;
   var heightRate = 1;
   var logicSize = o._logicSize;
   var isVertical = browser.isOrientationVertical()
   if(isVertical){
      widthRate = width / logicSize.height;
      heightRate = height / logicSize.width;
      o._calculateSize.set(logicSize.height, logicSize.width);
   }else{
      widthRate = width / logicSize.width;
      heightRate = height / logicSize.height;
      o._calculateSize.set(logicSize.width, logicSize.height);
   }
   var sizeRate = o._sizeRate = Math.min(widthRate, heightRate);
   o._logicRate.set(widthRate, heightRate);
   var calculateRate = o._calculateRate;
   if(widthRate > heightRate){
      calculateRate.set(widthRate / sizeRate, 1);
   }else if(widthRate < heightRate){
      calculateRate.set(1, heightRate / sizeRate);
   }else{
      calculateRate.set(1, 1);
   }
   o._sizeScale = 1 / sizeRate;
   MO.Logger.debug(o, 'Change screen size. (orientation={1}, ratio={2}, screen_size={3}, size={4}, rate={5}, calculate_rate={6})', browser.orientationCd(), pixelRatio, o._screenSize.toDisplay(), o._size.toDisplay(), sizeRate, o._calculateRate.toDisplay());
   var canvas3d = o._canvas3d;
   var context3d = canvas3d.graphicContext();
   context3d.size().set(width, height);
   if(browser.capability().canvasScale){
      canvas3d.resize(width, height);
   }else{
      canvas3d.resize(sourceWidth, sourceHeight);
   }
   context3d.setViewport(0, 0, width, height)
   if(isVertical){
      o._virtualSize.set(logicSize.height * calculateRate.width, logicSize.width * calculateRate.height);
   }else{
      o._virtualSize.set(logicSize.width * calculateRate.width, logicSize.height * calculateRate.height);
   }
   var canvas2d = o._canvas2d;
   canvas2d.resize(width, height);
   canvas2d.graphicContext().setGlobalScale(sizeRate, sizeRate);
   var stage = o._canvas3d.activeStage();
   o.selectStage(stage);
}
MO.FCanvasDesktop_setVisible = function FCanvasDesktop_setVisible(visible){
   var o = this;
   o._visible = visible;
   o._canvas2d.setVisible(visible);
   o._canvas3d.setVisible(visible);
}
MO.FCanvasDesktop_show = function FCanvasDesktop_show(){
   this.setVisible(true);
}
MO.FCanvasDesktop_hide = function FCanvasDesktop_hide(){
   this.setVisible(false);
}
MO.FCanvasDesktop_selectStage = function FCanvasDesktop_selectStage(stage){
   var o = this;
   o._canvas3d.selectStage(stage);
   if(stage){
      var camera = stage.camera();
      var projection = camera.projection();
      projection.size().assign(o._size);
      projection.update();
   }
   o._activeStage = stage;
}
MO.FCanvasDesktop_dispose = function FCanvasDesktop_dispose(){
   var o = this;
   o._canvas2d = MO.Lang.Object.dispose(o._canvas2d);
   o._canvas3d = MO.Lang.Object.dispose(o._canvas3d);
   o.__base.FDesktop.dispose.call(o);
}
MO.FCanvasDynamicInfo = function FCanvasDynamicInfo(o){
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._lastTick    = 0;
   o._name        = 'EngineInfo';
   o._stage       = MO.Class.register(o, new MO.AGetSet('_stage'));
   o._guiManager  = MO.Class.register(o, new MO.AGetSet('_guiManager'));
   o._context     = MO.Class.register(o, new MO.AGetSet('_context'));
   o._ticker      = null;
   o.onPaintBegin = MO.FCanvasDynamicInfo_onPaintBegin;
   o.oeUpdate     = MO.FCanvasDynamicInfo_oeUpdate;
   o.construct    = MO.FCanvasDynamicInfo_construct;
   return o;
}
MO.FCanvasDynamicInfo_onPaintBegin = function FCanvasDynamicInfo_onPaintBegin(event){
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   if(o._stage == null){
      return;
   }
   if(o._context == null){
      return;
   }
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var timer = o._stage.timer();
   var stageStatistics = o._stage.statistics();
   var statistics = o._context.statistics();
   var line = 20;
   var locationX = 10;
   var locationY = rectangle.top + line;
   graphic.setFont('16px sans-serif');
   var browser = MO.Window.Browser;
   var browserCapability = browser.capability();
   graphic.drawText(MO.Lang.String.format('Agent         : {1}', browser.code), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Browser    : type={1}, orientation={2}, canvas_scale={3}', browser.typeCd(), browser.orientationCd(), browserCapability.canvasScale), locationX, locationY, '#FFFFFF');
   locationY += line;
   var desktop = o._guiManager.desktop();
   var canvas2d = desktop.canvas2d();
   var canvas3d = desktop.canvas3d();
   var pixelRatio = MO.Window.Browser.capability().pixelRatio;
   graphic.drawText(MO.Lang.String.format('Screen        : ratio={1}, screen_size={2}, size={3}', pixelRatio, desktop.screenSize().toDisplay(), desktop.size().toDisplay()), locationX, locationY, '#FFFFFF');
   locationY += line;
   var hCanvas2d = canvas2d._hCanvas;
   graphic.drawText(MO.Lang.String.format(' - Canvas2d   : size={1}x{2}, inner_size={3}x{4}', hCanvas2d.offsetWidth, hCanvas2d.offsetHeight, hCanvas2d.width, hCanvas2d.height), locationX, locationY, '#FFFFFF');
   locationY += line;
   var hCanvas3d = canvas3d._hCanvas;
   graphic.drawText(MO.Lang.String.format(' - Canvas3d   : size={1}x{2}, inner_size={3}x{4}', hCanvas3d.offsetWidth, hCanvas3d.offsetHeight, hCanvas3d.width, hCanvas3d.height), locationX, locationY, '#FFFFFF');
   locationY += line;
   var context3d = canvas3d.graphicContext();
   graphic.drawText(MO.Lang.String.format('   - Context  : {1}', context3d.size().toDisplay()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format('   - Viewport : {1}', context3d.viewportRectangle()), locationX, locationY, '#FFFFFF');
   locationY += line;
   var camera = o._stage.camera();
   var projection = camera.projection();
   graphic.drawText(MO.Lang.String.format('Stage         :'), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Camera     : position={1}', camera.position()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Projection : size={1}, znear={2}, zfar={3}', projection.size(), projection.znear(), projection.zfar()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format('Frame         : rate={1}, span=[{2}]', MO.Timer.rate(), stageStatistics._frame), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Process    : {1}', stageStatistics._frameProcess), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Draw       : draw={1}, sort={2}', stageStatistics._frameDraw, stageStatistics._frameDrawSort), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format('Draw          : count={1}, triangle={2}', statistics.frameDrawCount(), statistics.frameTriangleCount()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Const      : count={1}, length={2}', statistics.frameConstCount(), statistics.frameConstLength()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Alloc      : buffer={1}, texture={2}', statistics.frameBufferCount(), statistics.frameTextureCount()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format(' - Total      : program={1}, layout={2}, vertex={3}, index={4}', statistics.programTotal(), statistics.layoutTotal(), statistics.vertexBufferTotal(), statistics.indexBufferTotal()), locationX, locationY, '#FFFFFF');
   locationY += line;
   graphic.drawText(MO.Lang.String.format('Investment    : entity={1}, table={2}, pool_item={3}, pool_free={4}', o._investmentEntityCount, o._investmentTableEntityCount, o._investmentPoolItemCount, o._investmentPoolFreeCount), locationX, locationY, '#FFFFFF');
   desktop.resize();
}
MO.FCanvasDynamicInfo_oeUpdate = function FCanvasDynamicInfo_oeUpdate(event){
   var o = this;
   if(o._ticker.process()){
      o.dirty();
   }
   return MO.EEventStatus.Stop;
}
MO.FCanvasDynamicInfo_construct = function FCanvasDynamicInfo_construct(){
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._size.set(1024, 512);
   o._ticker = new MO.TTicker(1000);
}
MO.FCanvasScene = function FCanvasScene(o){
   o = MO.Class.inherits(this, o, MO.FScene);
   o._guiManager            = MO.Class.register(o, new MO.AGetter('_guiManager'));
   o.onOperationKeyDown     = MO.FCanvasScene_onOperationKeyDown;
   o.onOperationResize      = MO.FCanvasScene_onOperationResize;
   o.onOperationOrientation = MO.FCanvasScene_onOperationOrientation;
   o.onProcessAfter         = MO.FCanvasScene_onProcessAfter;
   o.construct              = MO.FCanvasScene_construct;
   o.setup                  = MO.FCanvasScene_setup;
   o.active                 = MO.FCanvasScene_active;
   o.deactive               = MO.FCanvasScene_deactive;
   o.processLoaded          = MO.FCanvasScene_processLoaded;
   o.processResize          = MO.FCanvasScene_processResize;
   o.processEvent           = MO.FCanvasScene_processEvent;
   o.dispose                = MO.FCanvasScene_dispose;
   return o;
}
MO.FCanvasScene_onOperationKeyDown = function FCanvasScene_onOperationKeyDown(event){
   var o = this;
   o.__base.FScene.onOperationKeyDown.call(o, event);
   if(event.altKey && (event.keyCode == MO.EKeyCode.P)){
      var control = o._application.dynamicInfo();
      control.setVisible(!control.visible());
   }
}
MO.FCanvasScene_onOperationResize = function FCanvasScene_onOperationResize(event){
   var o = this;
   o.__base.FScene.onOperationResize.call(o, event);
   o.processResize();
}
MO.FCanvasScene_onOperationOrientation = function FCanvasScene_onOperationOrientation(event){
   var o = this;
   o.__base.FScene.onOperationOrientation.call(o, event);
   o.processResize();
}
MO.FCanvasScene_onProcessAfter = function FCanvasScene_onProcessAfter(){
   var o = this;
   o.__base.FScene.onProcessAfter.call(o);
   o._guiManager.process();
}
MO.FCanvasScene_construct = function FCanvasScene_construct(){
   var o = this;
   o.__base.FScene.construct.call(o);
}
MO.FCanvasScene_setup = function FCanvasScene_setup(){
   var o = this;
   o.__base.FScene.setup.call(o);
   var desktop = o._application.desktop();
   var canvas2d = desktop.canvas2d();
   var guiManager = o._guiManager = MO.Class.create(MO.FGuiCanvasManager);
   guiManager.linkGraphicContext(o);
   guiManager.setDesktop(desktop);
   guiManager.setCanvas(canvas2d);
   guiManager.setup();
   var control = o._application.dynamicInfo();
   guiManager.register(control);
}
MO.FCanvasScene_active = function FCanvasScene_active(){
   var o = this;
   o.__base.FScene.active.call(o);
   var stage = o._activeStage;
   var control = o._application.dynamicInfo();
   control.setVisible(false);
   control.setDisplayOrder(10000);
   control.setStage(stage);
   control.setGuiManager(o._guiManager);
   var application = o._application;
   var desktop = application.desktop();
   desktop.selectStage(stage);
}
MO.FCanvasScene_deactive = function FCanvasScene_deactive(){
   var o = this;
   o.__base.FScene.deactive.call(o);
   var application = o._application;
   var desktop = application.desktop();
   desktop.selectStage(null);
}
MO.FCanvasScene_processLoaded = function FCanvasScene_processLoaded(){
   var o = this;
   var event = new MO.SEvent(o);
   MO.Window.lsnsLoaded.process(event);
   event.dispose();
   var desktop = o._application.desktop();
   desktop.show();
}
MO.FCanvasScene_processResize = function FCanvasScene_processResize(event){
   var o = this;
   o._guiManager.dirty();
}
MO.FCanvasScene_processEvent = function FCanvasScene_processEvent(event){
   var o = this;
   o.__base.FScene.processEvent.call(o, event);
   o._guiManager.processEvent(event);
}
MO.FCanvasScene_dispose = function FCanvasScene_dispose(){
   var o = this;
   o._guiManager = MO.Lang.Object.dispose(o._guiManager);
   o.__base.FScene.dispose.call(o);
}
MO.FCanvasSimpleChapter = function FCanvasSimpleChapter(o){
   o = MO.Class.inherits(this, o, MO.FChapter);
   o._code       = MO.ECanvasChapter.Simple;
   o.createScene = MO.FCanvasSimpleChapter_createScene;
   return o;
}
MO.FCanvasSimpleChapter_createScene = function FCanvasSimpleChapter_createScene(code){
   var o = this;
   var scene = null;
   switch(code){
      case MO.ECanvasScene.Simple:
         scene = o._sceneSimple = MO.Class.create(MO.FCanvasSimpleScene);
         break;
   }
   scene.linkGraphicContext(o);
   return scene;
}
MO.FCanvasSimpleScene = function FCanvasSimpleScene(o){
   o = MO.Class.inherits(this, o, MO.FCanvasScene);
   o._code = MO.ECanvasScene.Simple;
   o.setup = MO.FCanvasSimpleScene_setup;
   return o;
}
MO.FCanvasSimpleScene_setup = function FCanvasSimpleScene_setup(){
   var o = this;
   o.__base.FCanvasScene.setup.call(o);
   var stage = o._activeStage = MO.Class.create(MO.FE3dSimpleStage);
   stage.linkGraphicContext(o);
   stage.region().linkGraphicContext(o);
   stage.region().backgroundColor().set(0, 0, 0, 0);
}
MO.FGuiApplication = function FGuiApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   o._canvas   = MO.Class.register(o, new MO.AGetter('_canvas'));
   o._manager  = MO.Class.register(o, new MO.AGetter('_manager'));
   o._desktop  = MO.Class.register(o, new MO.AGetter('_desktop'));
   o.construct = MO.FGuiApplication_construct;
   o.setup     = MO.FGuiApplication_setup;
   o.process   = MO.FGuiApplication_process;
   o.dispose   = MO.FGuiApplication_dispose;
   return o;
}
MO.FGuiApplication_construct = function FGuiApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
   o._chapters = new MO.TDictionary();
   o._eventEnterFrame = new MO.SEvent();
   o._eventLeaveFrame = new MO.SEvent();
}
MO.FGuiApplication_setup = function FGuiApplication_setup(hPanel){
   var o = this;
   var desktop = o._desktop = MO.Class.create(MO.FGuiDesktop);
   desktop.build(hPanel);
   var canvas = o._canvas = desktop.canvas();
   var manager = o._manager = MO.Class.create(MO.FGuiCanvasManager);
   manager.setDesktop(desktop);
   manager.setCanvas(canvas);
}
MO.FGuiApplication_process = function FGuiApplication_process(){
   var o = this;
   o.__base.FApplication.process.call(o);
   o._manager.process();
}
MO.FGuiApplication_dispose = function FGuiApplication_dispose(){
   var o = this;
   o.__base.FApplication.dispose.call(o);
}
MO.FGuiDesktop = function FGuiDesktop(o){
   o = MO.Class.inherits(this, o, MO.FDesktop);
   o._canvas                = MO.Class.register(o, new MO.AGetter('_canvas'));
   o.onOperationResize      = MO.FGuiDesktop_onOperationResize;
   o.onOperationOrientation = MO.FGuiDesktop_onOperationOrientation;
   o.construct              = MO.FGuiDesktop_construct;
   o.build                  = MO.FGuiDesktop_build;
   o.resize                 = MO.FGuiDesktop_resize;
   o.dispose                = MO.FGuiDesktop_dispose;
   return o;
}
MO.FGuiDesktop_onOperationResize = function FGuiDesktop_onOperationResize(event){
   var o = this;
   o.__base.FDesktop.onOperationResize.call(o, event);
   o.resize();
}
MO.FGuiDesktop_onOperationOrientation = function FGuiDesktop_onOperationOrientation(){
   var o = this;
   o.__base.FDesktop.onOperationOrientation.call(o, event);
   o.resize();
}
MO.FGuiDesktop_construct = function FGuiDesktop_construct(){
   var o = this;
   o.__base.FDesktop.construct.call(o);
   o._size.set(1920, 1080);
   o._logicSize.set(1920, 1080);
   o._screenSize.set(0, 0);
}
MO.FGuiDesktop_build = function FGuiDesktop_build(hPanel){
   var o = this;
   o.__base.FDesktop.build.call(o, hPanel);
   var canvas = o._canvas = MO.Class.create(MO.FE2dCanvas);
   canvas.setDesktop(o);
   canvas.build(hPanel);
   canvas.setPanel(hPanel);
   canvas._hCanvas.style.position = 'absolute';
   o.canvasRegister(canvas);
   MO.RE3dEngine.setup();
}
MO.FGuiDesktop_resize = function FGuiDesktop_resize(targetWidth, targetHeight){
   var o = this;
   var width = (targetWidth != null) ? targetWidth : window.innerWidth;
   var height = (targetHeight != null) ? targetHeight : window.innerHeight;
   if(o._screenSize.equalsData(width, height)){
      return;
   }
   o._screenSize.set(width, height);
   var pixelRatio = MO.Browser.capability().pixelRatio;
   MO.Logger.info(o, 'Change screen size. (size={1}x{2}, pixel_ratio={3})', width, height, pixelRatio);
   width *= pixelRatio;
   height *= pixelRatio;
   var widthRate = 1;
   var heightRate = 1;
   var logicSize = o._logicSize;
   if(MO.Browser.isOrientationHorizontal()){
      widthRate = width / logicSize.width;
      heightRate = height / logicSize.height;
      o._calculateSize.set(logicSize.width, logicSize.height);
   }else{
      widthRate = width / logicSize.height;
      heightRate = height / logicSize.width;
      o._calculateSize.set(logicSize.height, logicSize.width);
   }
   var sizeRate = o._sizeRate = Math.min(widthRate, heightRate);
   o._logicRate.set(widthRate, heightRate);
   if(widthRate > heightRate){
      o._calculateRate.set(widthRate / sizeRate, 1);
   }else if(widthRate < heightRate){
      o._calculateRate.set(1, heightRate / sizeRate);
   }else{
      o._calculateRate.set(1, 1);
   }
   o._canvas3d.resize(width, height);
   var canvas = o._canvas;
   canvas.resize(width, height);
   canvas.context().setGlobalScale(sizeRate, sizeRate);
}
MO.FGuiDesktop_dispose = function FGuiDesktop_dispose(){
   var o = this;
   o._canvas3d = MO.Lang.Object.dispose(o._canvas3d);
   o._canvas = MO.Lang.Object.dispose(o._canvas);
   o.__base.FDesktop.dispose.call(o);
}
MO.FSceneApplication = function FSceneApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   o._desktop      = MO.Class.register(o, new MO.AGetter('_desktop'));
   o._dynamicInfo  = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   o.onDataLoaded  = MO.FSceneApplication_onDataLoaded;
   o.construct     = MO.FSceneApplication_construct;
   o.createChapter = MO.FSceneApplication_createChapter;
   o.setup         = MO.FSceneApplication_setup;
   o.processResize = MO.FSceneApplication_processResize;
   o.processEvent  = MO.FSceneApplication_processEvent;
   o.process       = MO.FSceneApplication_process;
   o.loadByGuid    = MO.FSceneApplication_loadByGuid;
   o.loadByCode    = MO.FSceneApplication_loadByCode;
   o.dispose       = MO.FSceneApplication_dispose;
   return o;
}
MO.FSceneApplication_onDataLoaded = function FSceneApplication_onDataLoaded(event){
   var o = this;
   var graphic = o._graphicContext;
   var space = o._activeSpace;
   var cs = graphic.size();
   var rp = space.camera().projection();
   rp.size().set(cs.width, cs.height);
   rp.update();
   var gr = space.region()._resource;
   o._cameraMoveRate = gr.moveSpeed();
   o._cameraKeyRotation = gr.rotationKeySpeed();
   o._cameraMouseRotation = gr.rotationMouseSpeed();
   var canvas3d = o._desktop.canvas3d();
   canvas3d.selectStage(space);
}
MO.FSceneApplication_construct = function FSceneApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
}
MO.FSceneApplication_createChapter = function FSceneApplication_createChapter(code){
   var o = this;
   var chapter = null;
   switch(code){
      case MO.ECanvasChapter.Simple:
         chapter = MO.Class.create(MO.FCanvasSimpleChapter);
         break;
   }
   chapter.linkGraphicContext(o);
   return chapter;
}
MO.FSceneApplication_setup = function FSceneApplication_setup(hPanel){
   var o = this;
   var result = o.__base.FApplication.setup.call(o, hPanel);
   if(!result){
      return result;
   }
   o._hPanel = hPanel;
   var desktop = o._desktop = MO.Class.create(MO.FSceneDesktop);
   desktop.build(hPanel);
   var canvas = desktop.canvas3d();
   var context = canvas.graphicContext();
   if(!context.isValid()){
      return;
   }
   o.linkGraphicContext(canvas);
   var control = o._dynamicInfo = MO.Class.create(MO.FCanvasDynamicInfo);
   control.linkGraphicContext(canvas);
   control.setContext(canvas.graphicContext());
   control.location().set(10, 300);
   control.build();
   return true;
}
MO.FSceneApplication_processResize = function FSceneApplication_processResize(event){
   var o = this;
   o.__base.FApplication.processResize.call(o, event);
   var desktop = o._desktop;
   if(desktop){
      desktop.resize();
   }
}
MO.FSceneApplication_processEvent = function FSceneApplication_processEvent(event){
   var o = this;
   o.__base.FApplication.processEvent.call(o, event);
   var desktop = o._desktop;
   if(desktop){
      desktop.processEvent(event);
   }
}
MO.FSceneApplication_process = function FSceneApplication_process(){
   var o = this;
   o.__base.FApplication.process.call(o);
   o._desktop.process();
   var space = o._activeSpace;
   if(space){
      space.process();
   }
}
MO.FSceneApplication_loadByGuid = function FSceneApplication_loadByGuid(guid){
   var o = this;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   var scene = o._activeSpace = sceneConsole.allocByGuid(o._graphicContext, guid);
   scene.addLoadListener(o, o.onDataLoaded);
}
MO.FSceneApplication_loadByCode = function FSceneApplication_loadByCode(code){
   var o = this;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   var scene = o._activeSpace = sceneConsole.allocByCode(o._graphicContext, code);
   scene.addLoadListener(o, o.onDataLoaded);
}
MO.FSceneApplication_dispose = function FSceneApplication_dispose(){
   var o = this;
   o.__base.FApplication.dispose.call(o);
}
MO.FSceneCanvas = function FSceneCanvas(o){
   o = MO.Class.inherits(this, o, MO.FE3dCanvas);
   o._activeSpace           = null;
   o._captureStatus         = false;
   o._capturePosition       = null;
   o._captureCameraPosition = null;
   o._captureCameraRotation = null;
   o._actionFullScreen      = false;
   o._actionPlay            = false;
   o._actionMovie           = false;
   o._actionUp              = false;
   o._actionDown            = false;
   o._actionForward         = false;
   o._actionBack            = false;
   o._cameraMoveRate        = 0.4;
   o._cameraKeyRotation     = 0.03;
   o._cameraMouseRotation   = 0.005;
   o._touchTracker          = null;
   o.onEnterFrame           = MO.FSceneCanvas_onEnterFrame;
   o.onMouseCaptureStart    = MO.FSceneCanvas_onMouseCaptureStart;
   o.onMouseCapture         = MO.FSceneCanvas_onMouseCapture;
   o.onMouseCaptureStop     = MO.FSceneCanvas_onMouseCaptureStop;
   o.onTouchStart           = MO.FSceneCanvas_onTouchStart;
   o.onTouchMove            = MO.FSceneCanvas_onTouchMove;
   o.onTouchStop            = MO.FSceneCanvas_onTouchStop;
   o.onTouchZoom            = MO.FSceneCanvas_onTouchZoom;
   o.onDataLoaded           = MO.FSceneCanvas_onDataLoaded;
   o.onResize               = MO.FSceneCanvas_onResize;
   o.construct              = MO.FSceneCanvas_construct;
   o.testPlay               = MO.FSceneCanvas_testPlay;
   o.switchPlay             = MO.FSceneCanvas_switchPlay;
   o.testMovie              = MO.FSceneCanvas_testMovie;
   o.switchMovie            = MO.FSceneCanvas_switchMovie;
   o.doAction               = MO.FSceneCanvas_doAction;
   o.loadByGuid             = MO.FSceneCanvas_loadByGuid;
   o.loadByCode             = MO.FSceneCanvas_loadByCode;
   o.dispose                = MO.FSceneCanvas_dispose;
   return o;
}
MO.FSceneCanvas_onEnterFrame = function FSceneCanvas_onEnterFrame(){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var timer = space.timer();
   var span = timer.spanSecond();
   var camera = space.camera();
   var distance = o._cameraMoveRate * span;
   var rotation = o._cameraKeyRotation * span;
   var keyForward = RKeyboard.isPress(MO.EStageKey.Forward);
   var keyBack = RKeyboard.isPress(MO.EStageKey.Back);
   if((keyForward && !keyBack) || o._actionForward){
      camera.doWalk(distance);
   }
   if((!keyForward && keyBack) || o._actionBack){
      camera.doWalk(-distance);
   }
   var keyUp = RKeyboard.isPress(MO.EStageKey.Up);
   var keyDown = RKeyboard.isPress(MO.EStageKey.Down);
   if((keyUp && !keyDown) || o._actionUp){
      camera.doFly(distance);
   }
   if((!keyUp && keyDown) || o._actionDown){
      camera.doFly(-distance);
   }
   var keyLeft = RKeyboard.isPress(MO.EStageKey.RotationLeft);
   var keyRight = RKeyboard.isPress(MO.EStageKey.RotationRight);
   if(keyLeft && !keyRight){
      camera.doYaw(rotation);
   }
   if(!keyLeft && keyRight){
      camera.doYaw(-rotation);
   }
   var keyRotationUp = RKeyboard.isPress(MO.EStageKey.RotationUp);
   var keyRotationDown = RKeyboard.isPress(MO.EStageKey.RotationDown);
   if(keyRotationUp && !keyRotationDown){
      camera.doPitch(rotation);
   }
   if(!keyRotationUp && keyRotationDown){
      camera.doPitch(-rotation);
   }
   camera.update();
   if(o._optionRotation){
      var rotation = o._rotation;
      var layers = space.layers();
      var count = layers.count();
      for(var i = 0; i < count; i++){
         var layer = layers.at(i);
         var matrix = layer.matrix();
         matrix.setRotation(0, rotation.y, 0);
         matrix.update();
      }
      rotation.y += 0.01;
   }
}
MO.FSceneCanvas_onMouseCaptureStart = function FSceneCanvas_onMouseCaptureStart(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var r = o._activeSpace.region();
   var st = RConsole.find(FG3dTechniqueConsole).find(o._graphicContext, FG3dSelectTechnique);
   var r = st.test(r, p.offsetX, p.offsetY);
   o._capturePosition.set(p.clientX, p.clientY);
   o._captureCameraRotation.assign(s.camera()._rotation);
}
MO.FSceneCanvas_onMouseCapture = function FSceneCanvas_onMouseCapture(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var c = o._activeSpace.camera();
   var r = c.rotation();
   var cr = o._captureCameraRotation;
   r.x = cr.x + cy * o._cameraMouseRotation;
   r.y = cr.y + cx * o._cameraMouseRotation;
}
MO.FSceneCanvas_onMouseCaptureStop = function FSceneCanvas_onMouseCaptureStop(p){
}
MO.FSceneCanvas_onTouchStart = function FSceneCanvas_onTouchStart(event){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var r = o._activeSpace.region();
   var ts = event.touches;
   var c = ts.length;
   if(c == 1){
      event.preventDefault();
      var t = ts[0];
      o._captureStatus = true;
      o._capturePosition.set(t.clientX, t.clientY);
      o._captureCameraPosition.assign(s.camera().position());
      o._captureCameraRotation.assign(s.camera().rotation());
   }else{
      o._touchTracker.eventStart(event);
   }
}
MO.FSceneCanvas_onTouchMove = function FSceneCanvas_onTouchMove(event){
   var o = this;
   if(!o._captureStatus){
      return;
   }
   var touchs = event.touches;
   var touchCount = touchs.length;
   if(touchCount == 1){
      event.preventDefault();
      var t = touchs[0];
      var cm = o._activeSpace.camera();
      var cr = cm.rotation();
      var cx = t.clientX - o._capturePosition.x;
      var cy = t.clientY - o._capturePosition.y;
      cr.x = o._captureCameraRotation.x + (-cy * o._cameraMouseRotation);
      cr.y = o._captureCameraRotation.y + (-cx * o._cameraMouseRotation);
   }else if(touchCount > 1){
      o._touchTracker.eventMove(event);
   }
}
MO.FSceneCanvas_onTouchStop = function FSceneCanvas_onTouchStop(event){
   var o = this;
   o._touchTracker.eventStop(event);
   o._captureStatus = false;
}
MO.FSceneCanvas_onTouchZoom = function FSceneCanvas_onTouchZoom(event){
   var o = this;
   var delta = event.delta;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var camera = space.camera();
   camera.doForward(delta * 0.006);
}
MO.FSceneCanvas_onDataLoaded = function FSceneCanvas_onDataLoaded(event){
   var o = this;
   var c = o._graphicContext;
   var s = o._activeSpace;
   var cs = c.size();
   var rp = s.camera().projection();
   rp.size().set(cs.width, cs.height);
   rp.update();
   var gr = s._region._resource;
   o._cameraMoveRate = gr.moveSpeed();
   o._cameraKeyRotation = gr.rotationKeySpeed();
   o._cameraMouseRotation = gr.rotationMouseSpeed();
   var event = new MO.SEvent(o);
   event.space = s;
   o.processLoadListener(event);
   event.dispose();
}
MO.FSceneCanvas_onResize = function FSceneCanvas_onResize(event){
   var o = this;
   o.__base.FE3dCanvas.onResize.call(o, event);
   var c = o._graphicContext;
   var cs = c.size();
   var s = o._activeSpace;
   if(s){
      var rp = s.camera().projection();
      rp.size().set(cs.width, cs.height);
      rp.update();
   }
}
MO.FSceneCanvas_construct = function FSceneCanvas_construct(){
   var o = this;
   o.__base.FE3dCanvas.construct.call(o);
   o._rotation = new MO.SVector3();
   o._capturePosition = new MO.SPoint2();
   o._captureCameraPosition = new MO.SPoint3();
   o._captureCameraRotation = new MO.SVector3();
   o._touchTracker = MO.Class.create(MO.FTouchTracker);
   o._touchTracker.addTouchZoomListener(o, o.onTouchZoom);
}
MO.FSceneCanvas_testPlay = function FSceneCanvas_testPlay(){
   return this._actionPlay;
}
MO.FSceneCanvas_switchPlay = function FSceneCanvas_switchPlay(flag){
   var o = this;
   var space = o._activeSpace;
   var displays = space.allDisplays();
   var count = displays.count();
   for(var i = 0; i < count; i++){
      var display = displays.at(i);
      if(MO.Class.isClass(display, FE3dSceneDisplay)){
         var sprite = display._sprite;
         if(sprite){
            sprite._optionPlay = flag;
         }
         display._optionPlay = flag;
      }
   }
   o._actionPlay = flag;
}
MO.FSceneCanvas_testMovie = function FSceneCanvas_testMovie(){
   return this._actionMovie;
}
MO.FSceneCanvas_switchMovie = function FSceneCanvas_switchMovie(p){
   var o = this;
   var s = o._activeSpace;
   var ds = s.allDisplays();
   var c = ds.count();
   for(var i = 0; i < c; i++){
      var d = ds.get(i);
      if(d._movies){
         d._optionMovie = p;
      }
   }
   o._actionMovie = p;
}
MO.FSceneCanvas_doAction = function FSceneCanvas_doAction(e, p, f){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   e.preventDefault();
   o._actionUp = false;
   o._actionDown = false;
   o._actionForward = false;
   o._actionBack = false;
   switch(p){
      case 'fullscreen':
         var v = o._actionFullScreen = !o._actionFullScreen;
         MO.RHtml.fullscreen(o._hPanel, v);
         break;
      case 'play':
         o.switchMovie(!o._actionMovie);
         o.switchPlay(o._actionMovie);
         break;
      case 'up':
         o._actionUp = f;
         break;
      case 'down':
         o._actionDown = f;
         break;
      case 'forward':
         o._actionForward = f;
         break;
      case 'back':
         o._actionBack = f;
         break;
   }
}
MO.FSceneCanvas_loadByGuid = function FSceneCanvas_loadByGuid(guid){
   var o = this;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   var scene = o._activeSpace = sceneConsole.allocByGuid(o._graphicContext, guid);
   scene.addLoadListener(o, o.onDataLoaded);
   RStage.register('canvas.space', scene);
}
MO.FSceneCanvas_loadByCode = function FSceneCanvas_loadByCode(code){
   var o = this;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(o._activeSpace){
      sceneConsole.free(o._activeSpace);
   }
   var scene = o._activeSpace = sceneConsole.allocByCode(o._graphicContext, code);
   scene.addLoadListener(o, o.onDataLoaded);
   RStage.register('canvas.space', scene);
}
MO.FSceneCanvas_dispose = function FSceneCanvas_dispose(){
   var o = this;
   var v = o._rotation;
   if(v){
      v.dispose();
      o._rotation = null;
   }
   o.__base.FE3dCanvas.dispose.call(o);
}
MO.FSceneDesktop = function FSceneDesktop(o){
   o = MO.Class.inherits(this, o, MO.FDesktop);
   o._orientationCd         = null;
   o._visible               = MO.Class.register(o, new MO.AGetter('_visible'), true);
   o._canvas2d              = MO.Class.register(o, new MO.AGetter('_canvas2d'));
   o._canvas3d              = MO.Class.register(o, new MO.AGetter('_canvas3d'));
   o.onOperationResize      = MO.FSceneDesktop_onOperationResize;
   o.onOperationOrientation = MO.FSceneDesktop_onOperationOrientation;
   o.construct              = MO.FSceneDesktop_construct;
   o.build                  = MO.FSceneDesktop_build;
   o.resize                 = MO.FSceneDesktop_resize;
   o.setVisible             = MO.FSceneDesktop_setVisible;
   o.show                   = MO.FSceneDesktop_show;
   o.hide                   = MO.FSceneDesktop_hide;
   o.selectStage            = MO.FSceneDesktop_selectStage;
   o.process                = MO.FSceneDesktop_process;
   o.dispose                = MO.FSceneDesktop_dispose;
   return o;
}
MO.FSceneDesktop_onOperationResize = function FSceneDesktop_onOperationResize(event){
   var o = this;
   o.__base.FDesktop.onOperationResize.call(o, event);
   o.resize();
}
MO.FSceneDesktop_onOperationOrientation = function FSceneDesktop_onOperationOrientation(){
   var o = this;
   o.__base.FDesktop.onOperationOrientation.call(o, event);
   o.resize();
}
MO.FSceneDesktop_construct = function FSceneDesktop_construct(){
   var o = this;
   o.__base.FDesktop.construct.call(o);
   o._size.set(1920, 1080);
   o._logicSize.set(1920, 1080);
}
MO.FSceneDesktop_build = function FSceneDesktop_build(hPanel){
   var o = this;
   o.__base.FDesktop.build.call(o, hPanel);
   var canvas3d = o._canvas3d = MO.Class.create(MO.FCanvas3d);
   canvas3d.setDesktop(o);
   canvas3d.build(hPanel);
   canvas3d.setPanel(hPanel);
   o.canvasRegister(canvas3d);
   var canvas2d = o._canvas2d = MO.Class.create(MO.FGuiCanvas);
   canvas2d.setDesktop(o);
   canvas2d.build(hPanel);
   canvas2d.setPanel(hPanel);
   canvas2d._hCanvas.style.position = 'absolute';
   o.canvasRegister(canvas2d);
   MO.RE3dEngine.setup();
}
MO.FSceneDesktop_resize = function FSceneDesktop_resize(targetWidth, targetHeight){
   var o = this;
   var browser = MO.Window.Browser;
   var sourceWidth = (targetWidth != null) ? targetWidth : window.innerWidth;
   var sourceHeight = (targetHeight != null) ? targetHeight : window.innerHeight;
   var orientationCd = browser.orientationCd();
   if(o._screenSize.equalsData(sourceWidth, sourceHeight) && (o._orientationCd == orientationCd)){
      return;
   }
   o._screenSize.set(sourceWidth, sourceHeight);
   o._orientationCd = orientationCd;
   var pixelRatio = browser.capability().pixelRatio;
   var width = parseInt(sourceWidth * pixelRatio);
   var height = parseInt(sourceHeight * pixelRatio);
   o._size.set(width, height);
   var widthRate = 1;
   var heightRate = 1;
   var logicSize = o._logicSize;
   var isVertical = browser.isOrientationVertical()
   if(isVertical){
      widthRate = width / logicSize.height;
      heightRate = height / logicSize.width;
      o._calculateSize.set(logicSize.height, logicSize.width);
   }else{
      widthRate = width / logicSize.width;
      heightRate = height / logicSize.height;
      o._calculateSize.set(logicSize.width, logicSize.height);
   }
   var sizeRate = o._sizeRate = Math.min(widthRate, heightRate);
   o._logicRate.set(widthRate, heightRate);
   var calculateRate = o._calculateRate;
   if(widthRate > heightRate){
      calculateRate.set(widthRate / sizeRate, 1);
   }else if(widthRate < heightRate){
      calculateRate.set(1, heightRate / sizeRate);
   }else{
      calculateRate.set(1, 1);
   }
   o._sizeScale = 1 / sizeRate;
   MO.Logger.debug(o, 'Change screen size. (orientation={1}, ratio={2}, screen_size={3}, size={4}, rate={5}, calculate_rate={6})', browser.orientationCd(), pixelRatio, o._screenSize.toDisplay(), o._size.toDisplay(), sizeRate, o._calculateRate.toDisplay());
   var canvas3d = o._canvas3d;
   var context3d = canvas3d.graphicContext();
   context3d.size().set(width, height);
   if(browser.capability().canvasScale){
      canvas3d.resize(width, height);
   }else{
      canvas3d.resize(sourceWidth, sourceHeight);
   }
   context3d.setViewport(0, 0, width, height)
   if(isVertical){
      o._virtualSize.set(logicSize.height * calculateRate.width, logicSize.width * calculateRate.height);
   }else{
      o._virtualSize.set(logicSize.width * calculateRate.width, logicSize.height * calculateRate.height);
   }
   var canvas2d = o._canvas2d;
   canvas2d.resize(width, height);
   canvas2d.graphicContext().setGlobalScale(sizeRate, sizeRate);
   var stage = o._canvas3d.activeStage();
   o.selectStage(stage);
}
MO.FSceneDesktop_setVisible = function FSceneDesktop_setVisible(visible){
   var o = this;
   o._visible = visible;
   o._canvas2d.setVisible(visible);
   o._canvas3d.setVisible(visible);
}
MO.FSceneDesktop_show = function FSceneDesktop_show(){
   this.setVisible(true);
}
MO.FSceneDesktop_hide = function FSceneDesktop_hide(){
   this.setVisible(false);
}
MO.FSceneDesktop_selectStage = function FSceneDesktop_selectStage(stage){
   var o = this;
   o._canvas3d.selectStage(stage);
   if(stage){
      var camera = stage.camera();
      var projection = camera.projection();
      projection.size().assign(o._size);
      projection.update();
   }
   o._activeStage = stage;
}
MO.FSceneDesktop_process = function FSceneDesktop_process(){
   var o = this;
}
MO.FSceneDesktop_dispose = function FSceneDesktop_dispose(){
   var o = this;
   o._canvas2d = MO.Lang.Object.dispose(o._canvas2d);
   o._canvas3d = MO.Lang.Object.dispose(o._canvas3d);
   o.__base.FDesktop.dispose.call(o);
}
MO.FTestApplication = function FTestApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   o.setup = MO.FTestApplication_setup;
   return o;
}
MO.FTestApplication_setup = function FTestApplication_setup(hPanel){
   var o = this;
   var xroot = new MO.TXmlNode('Configuration');
   var identityCode = MO.Window.Browser.agent();
   var xbrowser = xroot.create('Browser')
   MO.Window.Browser.saveConfig(xbrowser);
   var xdesktop = xbrowser.create('Desktop')
   var xcontext2d = xdesktop.create('Context2d');
   var xcontext3d = xdesktop.create('Context3d');
   var hCanvas = MO.Window.Builder.create(hPanel, 'CANVAS');
   var context3d = MO.Graphic.Context3d.createContext(MO.FWglContext, hCanvas);
   if(context3d){
      var parameter = context3d.parameter('VERSION');
      if(parameter){
         identityCode += '|' + parameter;
      }
      var parameter = context3d.parameter('SHADING_LANGUAGE_VERSION');
      if(parameter){
         identityCode += '|' + parameter;
      }
      var parameter = context3d.parameter('UNMASKED_RENDERER_WEBGL');
      if(parameter){
         identityCode += '|' + parameter;
      }
      context3d.saveConfig(xcontext3d);
   }
   xroot.set('identity_code', identityCode);
   MO.Console.find(MO.FServiceConsole).send('cloud.info.device', 'access', xroot);
}
MO.RApplication = function RApplication(){
   var o = this;
   o._workspaces = new MO.TDictionary();
   return o;
}
MO.RApplication.prototype.initialize = function RApplication_initialize(){
   var o = this;
   MO.Window.Browser.construct();
   MO.Window.connect(window);
   MO.Window.Keyboard.construct();
}
MO.RApplication.prototype.findWorkspace = function RApplication_findWorkspace(clazz){
   var o = this;
   var name = MO.Class.name(clazz);
   var workspaces = o._workspaces;
   var workspace = workspaces.get(name);
   if(workspace == null){
      workspace = MO.Class.create(clazz);
      workspaces.set(name, workspace);
   }
   return workspace;
}
MO.RApplication.prototype.release = function RApplication_release(){
   try{
      CollectGarbage();
   }catch(e){
     MO.Logger.error(e);
   }
}
MO.RApplication = new MO.RApplication();
