//==========================================================
// <T>设计位图画板。</T>
//
// @class
// @author maocy
// @history 150424
//==========================================================
MO.FDsBitmapCanvas = function FDsBitmapCanvas(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   //..........................................................
   // @attribute
   o._activeBitmap        = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   // @attribute
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   //..........................................................
   // @event
   o.onBuild              = MO.FDsBitmapCanvas_onBuild;
   o.onMouseCaptureStart  = MO.FDsBitmapCanvas_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsBitmapCanvas_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsBitmapCanvas_onMouseCaptureStop;
   o.onMouseWheel         = MO.FDsBitmapCanvas_onMouseWheel;
   o.onLoaded             = MO.FDsBitmapCanvas_onLoaded;
   //..........................................................
   o.oeResize             = MO.FDsBitmapCanvas_oeResize;
   o.oeRefresh            = MO.FDsBitmapCanvas_oeRefresh;
   //..........................................................
   // @method
   o.construct            = MO.FDsBitmapCanvas_construct;
   // @method
   o.loadByGuid           = MO.FDsBitmapCanvas_loadByGuid;
   // @method
   o.dispose              = MO.FDsBitmapCanvas_dispose;
   return o;
}

//==========================================================
// <T>构建处理。</T>
//
// @method
// @param p:event:TEventProcess 处理事件
//==========================================================
MO.FDsBitmapCanvas_onBuild = function FDsBitmapCanvas_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
   var hPanel = o._hPanel;
   // 创建简单舞台
   var space = o._activeSpace = MO.Class.create(MO.FE3dFlatStage);
   space.linkGraphicContext(o);
   space.selectTechnique(o, MO.FE3dGeneralTechnique);
   space.region().backgroundColor().set(1, 1, 1, 1);
   space.region().linkGraphicContext(o);
   MO.RStage.register('space.bitmap', space);
   //g.addEnterFrameListener(o, o.onEnterFrame);
   // 设置相机
   var camera = space.camera();
   camera.setPosition(0, 0, -10);
   camera.lookAt(0, 0, 0);
   camera.update();
   // 设置投影
   var projection = camera.projection();
   projection._angle = 45;
   projection.size().set(hPanel.width, hPanel.height);
   projection.update();
   // 注册事件
   MO.Window.lsnsMouseWheel.register(o, o.onMouseWheel);
}

//==========================================================
// <T>鼠标捕捉开始处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsBitmapCanvas_onMouseCaptureStart = function FDsBitmapCanvas_onMouseCaptureStart(event){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var bitmap = o._activeBitmap;
   if(!bitmap){
      return;
   }
   // 选取物件
   o._capturePosition.set(event.clientX, event.clientY);
   o._captureMatrix.assign(bitmap.matrix());
   // 设置鼠标
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}

//==========================================================
// <T>鼠标捕捉处理。</T>
//
// @method
// @param p:event:SEvent 事件
//==========================================================
MO.FDsBitmapCanvas_onMouseCapture = function FDsBitmapCanvas_onMouseCapture(event){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var bitmap = o._activeBitmap;
   if(!bitmap){
      return;
   }
   var matrix = bitmap.matrix();
   // 计算偏移
   var cx = event.clientX - o._capturePosition.x;
   var cy = event.clientY - o._capturePosition.y;
   // 计算位置
   var captureMatrix = o._captureMatrix;
   matrix.tx = captureMatrix.tx + cx;
   matrix.ty = captureMatrix.ty + cy;
   matrix.updateForce();
}

//==========================================================
// <T>鼠标捕捉结束处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsBitmapCanvas_onMouseCaptureStop = function FDsBitmapCanvas_onMouseCaptureStop(event){
   var o = this;
   // 设置鼠标
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}

//==========================================================
// <T>鼠标滑轮处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsBitmapCanvas_onMouseWheel = function FDsBitmapCanvas_onMouseWheel(event){
   var o = this;
   // 获得位图
   var bitmap = o._activeBitmap;
   if(!bitmap){
      return;
   }
   // 计算缩放
   var scale = 1.0;
   if(event.deltaY < 0){
      scale = 1.1;
   }else if(event.deltaY > 0){
      scale = 0.9;
   }
   // 更新矩阵
   var matrix = bitmap.matrix();
   matrix.sx *= scale;
   matrix.sy *= scale;
   matrix.updateForce();
}

//==========================================================
// <T>加载完成处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDsBitmapCanvas_onLoaded = function FDsBitmapCanvas_onLoaded(event){
   var o = this;
   // 隐藏处理
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}

//==========================================================
// <T>变更大小处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsBitmapCanvas_oeResize = function FDsBitmapCanvas_oeResize(event){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, event);
   // 设置范围
   return MO.EEventStatus.Stop;
}

//==========================================================
// <T>刷新处理。</T>
//
// @method
//==========================================================
MO.FDsBitmapCanvas_oeRefresh = function FDsBitmapCanvas_oeRefresh(p){
   return MO.EEventStatus.Stop;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsBitmapCanvas_construct = function FDsBitmapCanvas_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._captureMatrix = new MO.SMatrix3d();
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
//==========================================================
MO.FDsBitmapCanvas_loadByGuid = function FDsBitmapCanvas_loadByGuid(guid){
   var o = this;
   var size = o._graphicContext.size();
   // 显示加载进度
   MO.Console.find(MO.FDuiDesktopConsole).showLoading();
   // 加载资源
   var resource = o._activeResource = MO.Console.find(MO.FDrBitmapConsole).query(guid);
   // 释放网格
   var url = '/cloud.resource.bitmap.wv?do=view&guid=' + guid;
   // 创建位图
   var bitmap = o._activeBitmap = MO.Console.find(MO.FE3dBitmapConsole).loadByGuid(o, guid);
   bitmap.material().info().effectCode = 'flat';
   bitmap.setLoadListener(o, o.onLoaded);
   bitmap.loadUrl(url);
   // 设置矩阵
   var matrix = bitmap.matrix();
   var left = Math.max((size.width - resource.sizeWidth()) / 2, 0);
   var top = Math.max((size.height - resource.sizeHeight()) / 2, 0);
   matrix.setTranslate(left, top);
   matrix.setScale(resource.sizeWidth(), resource.sizeHeight());
   matrix.update();
   // 放入场景
   var space = o._activeSpace;
   var layer = space.layer();
   layer.clearRenderables();
   layer.pushRenderable(bitmap);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsBitmapCanvas_dispose = function FDsBitmapCanvas_dispose(){
   var o = this;
   // 父处理
   o.__base.FDsCanvas.dispose.call(o);
}
