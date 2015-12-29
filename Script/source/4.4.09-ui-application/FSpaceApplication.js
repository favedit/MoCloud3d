//==========================================================
// <T>画板应用。</T>
//
// @class
// @author maocy
// @history 150930
//==========================================================
MO.FSpaceApplication = function FSpaceApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   //..........................................................
   // @attribute
   o._activeSpace   = MO.Class.register(o, new MO.AGetter('_activeSpace'));
   o._desktop       = MO.Class.register(o, new MO.AGetter('_desktop'));
   // @attribute
   o._dynamicInfo   = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   //..........................................................
   // @event
   o.onDataLoaded   = MO.FSpaceApplication_onDataLoaded;
   o.onProcessInput = MO.FSpaceApplication_onProcessInput;
   //..........................................................
   // @method
   o.construct      = MO.FSpaceApplication_construct;
   // @method
   o.setup          = MO.FSpaceApplication_setup;
   // @method
   o.processResize  = MO.FSpaceApplication_processResize;
   o.processEvent   = MO.FSpaceApplication_processEvent;
   o.process        = MO.FSpaceApplication_process;
   // @method
   o.dispose        = MO.FSpaceApplication_dispose;
   return o;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceApplication_onDataLoaded = function FSpaceApplication_onDataLoaded(event){
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
// <T>响应输入处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FSpaceApplication_onProcessInput = function FSpaceApplication_onProcessInput(event){
   var o = this;
   o.__base.FApplication.onProcessInput.call(o);
   // 检查参数
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var timer = space.timer();
   var span = timer.spanSecond();
   var keyboard = MO.Device.Keyboard;
   //..........................................................
   // 按键处理
   var camera = space.camera();
   var distance = o._cameraMoveRate * span;
   var rotation = o._cameraKeyRotation * span;
   // 按键前后移动
   var keyForward = keyboard.isPress(MO.EStageKey.Forward);
   var keyBack = keyboard.isPress(MO.EStageKey.Back);
   if((keyForward && !keyBack) || o._actionForward){
      camera.doWalk(distance);
   }
   if((!keyForward && keyBack) || o._actionBack){
      camera.doWalk(-distance);
   }
   // 按键上下移动
   var keyUp = keyboard.isPress(MO.EStageKey.Up);
   var keyDown = keyboard.isPress(MO.EStageKey.Down);
   if((keyUp && !keyDown) || o._actionUp){
      camera.doFly(distance);
   }
   if((!keyUp && keyDown) || o._actionDown){
      camera.doFly(-distance);
   }
   // 按键左右旋转
   var keyLeft = keyboard.isPress(MO.EStageKey.RotationLeft);
   var keyRight = keyboard.isPress(MO.EStageKey.RotationRight);
   if(keyLeft && !keyRight){
      camera.doYaw(rotation);
   }
   if(!keyLeft && keyRight){
      camera.doYaw(-rotation);
   }
   // 按键上下旋转
   var keyRotationUp = keyboard.isPress(MO.EStageKey.RotationUp);
   var keyRotationDown = keyboard.isPress(MO.EStageKey.RotationDown);
   if(keyRotationUp && !keyRotationDown){
      camera.doPitch(rotation);
   }
   if(!keyRotationUp && keyRotationDown){
      camera.doPitch(-rotation);
   }
   // 更新相机
   camera.update();
   //..........................................................
   // 旋转模型
   if(o._optionRotation){
      var rotation = o._rotation;
      // 旋转所有层
      var layers = space.layers();
      var count = layers.count();
      for(var i = 0; i < count; i++){
         var layer = layers.at(i);
         var matrix = layer.matrix();
         matrix.setRotation(0, rotation.y, 0);
         matrix.update();
      }
      // 设置变量
      rotation.y += 0.01;
   }
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FSpaceApplication_construct = function FSpaceApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
}

//==========================================================
// <T>配置处理。</T>
//
// @method
// @param hPanel:HtmlTag 页面元素
//==========================================================
MO.FSpaceApplication_setup = function FSpaceApplication_setup(hPanel){
   var o = this;
   var result = o.__base.FApplication.setup.call(o, hPanel);
   if(!result){
      return result;
   }
   o._hPanel = hPanel;
   //..........................................................
   // 创建桌面
   var desktop = o._desktop = MO.Class.create(MO.FSpaceDesktop);
   desktop.setCanvas2dClass(MO.FGuiCanvas);
   desktop.setCanvas3dClass(MO.FSpaceCanvas);
   desktop.build(hPanel);
   // 检查状态
   var canvas = desktop.canvas3d();
   var context = canvas.graphicContext();
   if(!context.isValid()){
      return;
   }
   // o.linkGraphicContext(canvas);
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
MO.FSpaceApplication_processResize = function FSpaceApplication_processResize(event){
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
MO.FSpaceApplication_processEvent = function FSpaceApplication_processEvent(event){
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
MO.FSpaceApplication_process = function FSpaceApplication_process(){
   var o = this;
   o.__base.FApplication.process.call(o);
   // 桌面处理
   o._desktop.process();
   // 空间处理
   var space = o._activeSpace;
   if(space){
      space.process();
   }
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FSpaceApplication_dispose = function FSpaceApplication_dispose(){
   var o = this;
   // 父处理
   o.__base.FApplication.dispose.call(o);
}
