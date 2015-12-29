//==========================================================
// <T>画板桌面。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FSpaceDesktop = function FSpaceDesktop(o){
   o = MO.Class.inherits(this, o, MO.FDesktop);
   //..........................................................
   // @attribute
   o._canvas2dClass         = MO.Class.register(o, new MO.AGetSet('_canvas2dClass'), MO.FGuiCanvas);
   o._canvas2d              = MO.Class.register(o, new MO.AGetter('_canvas2d'));
   o._canvas3dClass         = MO.Class.register(o, new MO.AGetSet('_canvas3dClass'), MO.FCanvas3d);
   o._canvas3d              = MO.Class.register(o, new MO.AGetter('_canvas3d'));
   // @attribute
   o._orientationCd         = null;
   // @attribute
   o._captureStatus         = false;
   o._capturePosition       = null;
   o._captureCameraPosition = null;
   o._captureCameraRotation = null;
   //..........................................................
   // @event
   o.onOperationResize      = MO.FSpaceDesktop_onOperationResize;
   // @event
   o.onOperationOrientation = MO.FSpaceDesktop_onOperationOrientation;
   //..........................................................
   // @method
   o.construct              = MO.FSpaceDesktop_construct;
   // @method
   o.build                  = MO.FSpaceDesktop_build;
   o.resize                 = MO.FSpaceDesktop_resize;
   o.setVisible             = MO.FSpaceDesktop_setVisible;
   o.selectStage            = MO.FSpaceDesktop_selectStage;
   // @method
   o.processResize          = MO.FSpaceDesktop_processResize;
   o.processEvent           = MO.FSpaceDesktop_processEvent;
   o.process                = MO.FSpaceDesktop_process;
   // @method
   o.dispose                = MO.FSpaceDesktop_dispose;
   return o;
}

//==========================================================
// <T>操作大小处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceDesktop_onOperationResize = function FSpaceDesktop_onOperationResize(event){
   var o = this;
   o.__base.FDesktop.onOperationResize.call(o, event);
   // 改变大小
   o.resize();
}

//==========================================================
// <T>操作方向处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceDesktop_onOperationOrientation = function FSpaceDesktop_onOperationOrientation(){
   var o = this;
   o.__base.FDesktop.onOperationOrientation.call(o, event);
   // 改变大小
   o.resize();
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FSpaceDesktop_construct = function FSpaceDesktop_construct(){
   var o = this;
   o.__base.FDesktop.construct.call(o);
   // 设置属性
   o._size.set(1920, 1080);
   o._logicSize.set(1920, 1080);
   // 设置属性
   o._rotation = new MO.SVector3();
   o._capturePosition = new MO.SPoint2();
   o._captureCameraPosition = new MO.SPoint3();
   o._captureCameraRotation = new MO.SVector3();
   // 创建触摸跟踪器
   o._touchTracker = MO.Class.create(MO.FTouchTracker);
   //o._touchTracker.addTouchZoomListener(o, o.onTouchZoom);
}

//==========================================================
// <T>构造处理。</T>
//
// @method
// @param hPanel:HtmlTag 页面元素
//==========================================================
MO.FSpaceDesktop_build = function FSpaceDesktop_build(hPanel){
   var o = this;
   o.__base.FDesktop.build.call(o, hPanel);
   // 创建3D画板
   var canvas3d = o._canvas3d = MO.Class.create(o._canvas3dClass);
   canvas3d.setDesktop(o);
   canvas3d.build(hPanel);
   canvas3d.setPanel(hPanel);
   o.canvasRegister(canvas3d);
   // 创建2D画板
   var canvas2d = o._canvas2d = MO.Class.create(o._canvas2dClass);
   canvas2d.setDesktop(o);
   canvas2d.build(hPanel);
   canvas2d.setPanel(hPanel);
   canvas2d._hCanvas.style.position = 'absolute';
   o.canvasRegister(canvas2d);
   // 引擎配置
   MO.Engine3d.setup();
}

//==========================================================
// <T>改变大小处理。</T>
//
// @method
// @param targetWidth:Integer 宽度
// @param targetHeight:Integer 高度
//==========================================================
MO.FSpaceDesktop_resize = function FSpaceDesktop_resize(targetWidth, targetHeight){
   var o = this;
   var browser = MO.Window.Browser;
   // 检查大小和方向
   var sourceWidth = (targetWidth != null) ? targetWidth : window.innerWidth;
   var sourceHeight = (targetHeight != null) ? targetHeight : window.innerHeight;
   var orientationCd = browser.orientationCd();
   if(o._screenSize.equalsData(sourceWidth, sourceHeight) && (o._orientationCd == orientationCd)){
      return;
   }
   o._screenSize.set(sourceWidth, sourceHeight);
   o._orientationCd = orientationCd;
   //..........................................................
   // 计算比率
   var pixelRatio = browser.capability().pixelRatio;
   var width = parseInt(sourceWidth * pixelRatio);
   var height = parseInt(sourceHeight * pixelRatio);
   o._size.set(width, height);
   // 计算比率
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
   //..........................................................
   // 设置3D画板
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
   // 设置2D画板
   var canvas2d = o._canvas2d;
   canvas2d.resize(width, height);
   canvas2d.graphicContext().setGlobalScale(sizeRate, sizeRate);
}

//==========================================================
// <T>设置可见处理。</T>
//
// @method
// @param visible:Boolean 可见性
//==========================================================
MO.FSpaceDesktop_setVisible = function FSpaceDesktop_setVisible(visible){
   var o = this;
   o.__base.FDesktop.setVisible.call(o, visible);
   // 设置属性
   o._canvas2d.setVisible(visible);
   o._canvas3d.setVisible(visible);
}

//==========================================================
// <T>选择舞台。</T>
//
// @method
// @param code:String 代码
// @return FStage 舞台
//==========================================================
MO.FSpaceDesktop_selectStage = function FSpaceDesktop_selectStage(stage){
   var o = this;
   o._canvas3d.selectStage(stage);
   o._activeStage = stage;
   o.resize();
}

//==========================================================
// <T>大小变更事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceDesktop_processResize = function FSpaceDesktop_processResize(event){
   var o = this;
   o.__base.FDesktop.processResize.call(o, event);
   // 处理事件
   //var desktop = o._desktop;
   //if(desktop){
   //   desktop.resize();
   //}
}

//==========================================================
// <T>事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceDesktop_processEvent = function FSpaceDesktop_processEvent(event){
   var o = this;
   o.__base.FDesktop.processEvent.call(o, event);
   // 处理事件
   o._canvas2d.dispatchEvent(event);
   o._canvas3d.dispatchEvent(event);
}

//==========================================================
// <T>逻辑处理。</T>
//
// @method
//==========================================================
MO.FSpaceDesktop_process = function FSpaceDesktop_process(event){
   var o = this;
   o.__base.FDesktop.process.call(o, event);
   // 处理事件
   // o._canvas2d.process(event);
   o._canvas3d.process(event);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FSpaceDesktop_dispose = function FSpaceDesktop_dispose(){
   var o = this;
   o._canvas2d = MO.Lang.Object.dispose(o._canvas2d);
   o._canvas3d = MO.Lang.Object.dispose(o._canvas3d);
   // 父处理
   o.__base.FDesktop.dispose.call(o);
}
