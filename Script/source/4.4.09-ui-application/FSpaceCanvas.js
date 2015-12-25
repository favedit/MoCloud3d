//==========================================================
// <T>模板画板。</T>
//
// @author maocy
// @history 150130
//==========================================================
MO.FSpaceCanvas = function FSpaceCanvas(o){
   o = MO.Class.inherits(this, o, MO.FE3dCanvas, MO.MEventDispatcher);
   //..........................................................
   // @attribute
   o._captureStatus         = false;
   o._capturePosition       = null;
   o._captureCameraPosition = null;
   o._captureCameraRotation = null;
   // @attribute
   o._actionRotation        = false;
   o._actionFullScreen      = false;
   o._actionPlay            = false;
   o._actionMovie           = false;
   o._actionUp              = false;
   o._actionDown            = false;
   o._actionForward         = false;
   o._actionBack            = false;
   // @attribute
   o._cameraMoveRate        = 0.4;
   o._cameraKeyRotation     = 0.03;
   o._cameraMouseRotation   = 0.005;
   // @attribute
   o._touchTracker          = null;
   //..........................................................
   // @event
   o.onResize               = MO.FSpaceCanvas_onResize;
   // @event
   o.onOperationDown        = MO.FSpaceCanvas_onOperationDown;
   o.onOperationMove        = MO.FSpaceCanvas_onOperationMove;
   o.onOperationUp          = MO.FSpaceCanvas_onOperationUp;
   o.onOperationZoom        = MO.FSpaceCanvas_onOperationZoom;
   o.onOperationKeyDown     = MO.FSpaceCanvas_onOperationKeyDown;
   //..........................................................
   // @method
   o.construct              = MO.FSpaceCanvas_construct;
   // @method
   o.resize                 = MO.FSpaceCanvas_resize;
   // @method
   o.testPlay               = MO.FSpaceCanvas_testPlay;
   o.switchPlay             = MO.FSpaceCanvas_switchPlay;
   o.testMovie              = MO.FSpaceCanvas_testMovie;
   o.switchMovie            = MO.FSpaceCanvas_switchMovie;
   o.doAction               = MO.FSpaceCanvas_doAction;
   o.selectStage            = MO.FSpaceCanvas_selectStage;
   o.refresh                = MO.FSpaceCanvas_refresh;
   // @method
   o.process                = MO.FSpaceCanvas_process;
   // @method
   o.dispose                = MO.FSpaceCanvas_dispose;
   return o;
}

//==========================================================
// <T>改变大小事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceCanvas_onResize = function FSpaceCanvas_onResize(event){
   var o = this;
   o.__base.FE3dCanvas.onResize.call(o, event);
   // 获得相机信息
   var size = o._graphicContext.size();
   var stage = o._activeStage;
   if(stage){
      var projection = stage.camera().projection();
      projection.size().assign(size);
      projection.update();
   }
}

//==========================================================
// <T>触摸事件开始处理。</T>
//
// @method
// @param event:SEvent 触摸事件
//==========================================================
MO.FSpaceCanvas_onOperationDown = function FSpaceCanvas_onOperationDown(event){
   var o = this;
   // 检查场景加载完成
   var space = o._activeStage;
   if(!space){
      return;
   }
   var region = space.region();
   var camera = region.camera()
   // 获得事件
   var touches = event.touches;
   if(touches){
      var c = touches.length;
      // 单个触点事件处理
      if(c == 1){
         event.preventDefault();
         // 处理事件
         var t = ts[0];
         o._captureStatus = true;
         o._capturePosition.set(t.clientX, t.clientY);
         o._captureCameraPosition.assign(s.camera().position());
         o._captureCameraRotation.assign(s.camera().rotation());
      }else{
         o._touchTracker.eventStart(event);
      }
   }else{
      o._captureStatus = true;
      o._capturePosition.set(event.x, event.y);
      o._captureCameraPosition.assign(camera.position());
      o._captureCameraRotation.assign(camera.rotation());
   }
}

//==========================================================
// <T>触摸事件移动处理。</T>
//
// @method
// @param event:SEvent 触摸事件
//==========================================================
MO.FSpaceCanvas_onOperationMove = function FSpaceCanvas_onOperationMove(event){
   var o = this;
   // 检查状态
   if(!o._captureStatus){
      return;
   }
   // 检查场景加载完成
   var space = o._activeStage;
   if(!space){
      return;
   }
   var region = space.region();
   var camera = region.camera()
   // 获得事件
   var touchs = event.touches;
   if(touchs){
      var touchCount = touchs.length;
      // 单个触点事件处理
      if(touchCount == 1){
         event.preventDefault();
         // 处理事件
         var t = touchs[0];
         var cr = camera.rotation();
         // 计算偏移
         var cx = t.clientX - o._capturePosition.x;
         var cy = t.clientY - o._capturePosition.y;
         cr.x = o._captureCameraRotation.x + (-cy * o._cameraMouseRotation);
         cr.y = o._captureCameraRotation.y + (-cx * o._cameraMouseRotation);
      }else if(touchCount > 1){
         o._touchTracker.eventMove(event);
      }
   }else{
         var cameraRotation = camera.rotation();
         var cx = event.x - o._capturePosition.x;
         var cy = event.y - o._capturePosition.y;
         cameraRotation.x = o._captureCameraRotation.x + (-cy * o._cameraMouseRotation);
         cameraRotation.y = o._captureCameraRotation.y + (-cx * o._cameraMouseRotation);
   }
}

//==========================================================
// <T>触摸事件结束处理。</T>
//
// @method
// @param event:SEvent 触摸事件
//==========================================================
MO.FSpaceCanvas_onOperationUp = function FSpaceCanvas_onOperationUp(event){
   var o = this;
   o._touchTracker.eventStop(event);
   o._captureStatus = false;
}

//==========================================================
// <T>触摸事件缩放处理。</T>
//
// @method
// @param event:SEvent 触摸事件
//==========================================================
MO.FSpaceCanvas_onOperationZoom = function FSpaceCanvas_onOperationZoom(event){
   var o = this;
   var delta = event.delta;
   // 获得空间
   var space = o._activeStage;
   if(!space){
      return;
   }
   // 相机处理
   var camera = space.camera();
   camera.doForward(delta * 0.006);
}

//==========================================================
// <T>按键落下事件处理。</T>
//
// @method
// @param event:SEvent 触摸事件
//==========================================================
MO.FSpaceCanvas_onOperationKeyDown = function FSpaceCanvas_onOperationKeyDown(event){
   var o = this;
   // 设置属性
   o._actionRotation = !o._actionRotation;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FSpaceCanvas_construct = function FSpaceCanvas_construct(){
   var o = this;
   o.__base.FE3dCanvas.construct.call(o);
   o._rotation = new MO.SVector3();
   o._capturePosition = new MO.SPoint2();
   o._captureCameraPosition = new MO.SPoint3();
   o._captureCameraRotation = new MO.SVector3();
   // 创建触摸跟踪器
   o._touchTracker = MO.Class.create(MO.FTouchTracker);
   o._touchTracker.addTouchZoomListener(o, o.onOperationZoom);
}

//==========================================================
// <T>改变大小处理。</T>
//
// @method
//==========================================================
MO.FSpaceCanvas_resize = function FSpaceCanvas_resize(sourceWidth, sourceHeight){
   var o = this;
   o.__base.FE3dCanvas.resize.call(o, sourceWidth, sourceHeight);
   // 刷新处理
   o.refresh();
}

//==========================================================
// <T>测试是否是播放模式。</T>
//
// @method
// @return Boolean 播放模式
//==========================================================
MO.FSpaceCanvas_testPlay = function FSpaceCanvas_testPlay(){
   return this._actionPlay;
}

//==========================================================
// <T>切换播放模式。</T>
//
// @method
// @param flag:Boolean 模式
//==========================================================
MO.FSpaceCanvas_switchPlay = function FSpaceCanvas_switchPlay(flag){
   var o = this;
   var space = o._activeStage;
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

//==========================================================
// <T>测试是否是剪辑模式。</T>
//
// @method
// @return Boolean 剪辑模式
//==========================================================
MO.FSpaceCanvas_testMovie = function FSpaceCanvas_testMovie(){
   return this._actionMovie;
}

//==========================================================
// <T>切换动画模式。</T>
//
// @method
// @param p:modeCd:Integer 
//==========================================================
MO.FSpaceCanvas_switchMovie = function FSpaceCanvas_switchMovie(p){
   var o = this;
   var s = o._activeStage;
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

//==========================================================
// <T>切换动画模式。</T>
//
// @method
// @param p:modeCd:Integer 
//==========================================================
MO.FSpaceCanvas_doAction = function FSpaceCanvas_doAction(e, p, f){
   var o = this;
   var stage = o._activeStage;
   if(!stage){
      return;
   }
   // 获得事件
   e.preventDefault();
   o._actionUp = false;
   o._actionDown = false;
   o._actionForward = false;
   o._actionBack = false;
   // 设置数据
   switch(p){
      case 'fullscreen':
         var v = o._actionFullScreen = !o._actionFullScreen;
         MO.Window.Html.fullscreen(o._hPanel, v);
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

//==========================================================
// <T>选择舞台。</T>
//
// @method
// @param space:FSpace 舞台
//==========================================================
MO.FSpaceCanvas_selectStage = function FSpaceCanvas_selectStage(stage, technique){
   var o = this;
   if(stage){
      stage.linkGraphicContext(o);
      // 设置区域
      var region = stage.region();
      region.linkGraphicContext(o);
      // 设置技术
      var technique = stage.technique();
      if(!technique){
         stage.selectTechnique(o, MO.Runtime.nvl(technique, MO.FE3dGeneralTechnique));
      }
   }
   o._activeStage = stage;
   // 刷新处理
   o.refresh();
}

//==========================================================
// <T>刷新处理。</T>
//
// @method
//==========================================================
MO.FSpaceCanvas_refresh = function FSpaceCanvas_refresh(){
   var o = this;
   var stage = o._activeStage;
   if(stage){
      // 获得屏幕大小
      var desktop = o._desktop;
      var screenSize = desktop.screenSize();
      // 设置相机信息
      var camera = stage.camera();
      var projection = camera.projection();
      var size = o._graphicContext.size();
      //projection.setAngle(80);
      projection.size().assign(screenSize);
      projection.update();
   }
}

//==========================================================
// <T>逻辑处理。</T>
//
// @method
//==========================================================
MO.FSpaceCanvas_process = function FSpaceCanvas_process(){
   var o = this;
   //o.__base.FE3dCanvas.process.call(o);
   // 设置旋转
   var stage = o._activeStage;
   if(stage && o._actionRotation){
      var layers = stage.layers();
      var count = layers.count();
      for(var i = 0; i < count; i++){
         var layer = layers.at(i);
         var matrix = layer.matrix();
         matrix.ry += 0.01;
         matrix.updateForce();
      }
   }
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FSpaceCanvas_dispose = function FSpaceCanvas_dispose(){
   var o = this;
   // 释放旋转
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   // 父处理
   o.__base.FE3dCanvas.dispose.call(o);
}
