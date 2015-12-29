MO.EDsCanvasDrag = new function EDsCanvasDrag(){
   var o = this;
   o.Unknown = 0;
   o.X       = 1;
   o.Y       = 2;
   o.Z       = 3;
   o.All     = 4;
   return o;
}
MO.EDsCanvasMode = new function EDsCanvasMode(){
   var o = this;
   o.Unknown   = 0;
   o.Drop      = 1;
   o.Select    = 2;
   o.Translate = 3;
   o.Rotation  = 4;
   o.Scale     = 5;
   return o;
}
MO.EDsFrame = new function EDsFrame(){
   var o = this;
   o.CommonSpacePropertyFrame      = 'resource.common.property.SpaceFrame';
   o.CommonTechniquePropertyFrame  = 'resource.common.property.TechniqueFrame';
   o.CommonRegionPropertyFrame     = 'resource.common.property.RegionFrame';
   o.CommonCameraPropertyFrame     = 'resource.common.property.CameraFrame';
   o.CommonLightPropertyFrame      = 'resource.common.property.LightFrame';
   o.CommonMaterialPropertyFrame   = 'resource.common.property.MaterialFrame';
   o.CommonLayerPropertyFrame      = 'resource.common.property.LayerFrame';
   o.CommonDisplayPropertyFrame    = 'resource.common.property.DisplayFrame';
   o.CommonAnimationPropertyFrame  = 'resource.common.property.AnimationFrame';
   o.CommonMoviePropertyFrame      = 'resource.common.property.MovieFrame';
   o.CommonRenderablePropertyFrame = 'resource.common.property.RenderableFrame';
   o.SolutionProjectPropertyFrame  = 'resource.solution.property.ProjectFrame';
   o.ResourcePropertyFrame         = 'resource.resource.property.SpaceFrame';
   o.BitmapPropertyFrame           = 'resource.bitmap.property.Frame';
   o.MaterialPropertyFrame         = 'resource.material.property.Frame';
   o.MeshSpacePropertyFrame        = 'resource.mesh.property.SpaceFrame';
   o.MeshLayerPropertyFrame        = 'resource.mesh.property.LayerFrame';
   o.MeshDisplayPropertyFrame      = 'resource.mesh.property.DisplayFrame';
   o.MeshRenderablePropertyFrame   = 'resource.mesh.property.RenderableFrame';
   o.ModelSpacePropertyFrame       = 'resource.model.property.SpaceFrame';
   o.ModelLayerPropertyFrame       = 'resource.model.property.LayerFrame';
   o.ModelDisplayPropertyFrame     = 'resource.model.property.DisplayFrame';
   o.ModelRenderablePropertyFrame  = 'resource.model.property.RenderableFrame';
   o.SceneSpacePropertyFrame       = 'resource.scene.property.SpaceFrame';
   o.SceneDisplayPropertyFrame     = 'resource.scene.property.DisplayFrame';
   o.SceneMoviePropertyFrame       = 'resource.scene.property.MovieFrame';
   o.SceneRenderablePropertyFrame  = 'resource.scene.property.RenderableFrame';
   return o;
}
MO.EDsFrameSet = new function EDsFrameSet(){
   var o = this;
   o.PrivateSolutionFrameSet         = 'resource.private.solution.FrameSet';
   o.PrivateProjectFrameSet          = 'resource.private.project.FrameSet';
   o.PrivateResourceFrameSet         = 'resource.private.resource.FrameSet';
   o.PrivateBitmapFrameSet           = 'resource.private.bitmap.FrameSet';
   o.PrivateMaterialFrameSet         = 'resource.private.material.FrameSet';
   o.PrivateModelFrameSet            = 'resource.private.model.FrameSet';
   o.PrivateTemplateFrameSet         = 'resource.private.template.FrameSet';
   o.PrivateSceneFrameSet            = 'resource.private.scene.FrameSet';
   o.ShareResourceFrameSet           = 'resource.share.resource.FrameSet';
   o.ShareBitmapFrameSet             = 'resource.share.bitmap.FrameSet';
   o.ShareMaterialFrameSet           = 'resource.share.material.FrameSet';
   o.ShareModelFrameSet              = 'resource.share.model.FrameSet';
   o.ShareTemplateFrameSet           = 'resource.share.template.FrameSet';
   o.ShareSceneFrameSet              = 'resource.share.scene.FrameSet';
   o.SystemDesignPersistenceFrameSet = 'system.design.persistence.FrameSet';
   o.SystemDesignListFrameSet        = 'system.design.list.FrameSet';
   o.SystemDesignTreeFrameSet        = 'system.design.tree.FrameSet';
   o.SystemDesignFrameFrameSet       = 'system.design.frame.FrameSet';
   return o;
}
MO.MDsBoundBox = function MDsBoundBox(o){
   o = MO.Class.inherits(this, o);
   o._boundVisible = false;
   o._boundBox     = null;
   o.boundBox      = MO.MDsBoundBox_boundBox;
   o.showBoundBox  = MO.MDsBoundBox_showBoundBox;
   o.hideBoundBox  = MO.MDsBoundBox_hideBoundBox;
   return o;
}
MO.MDsBoundBox_boundBox = function MDsBoundBox_boundBox(){
   var o = this;
   var boundBox = o._boundBox;
   if(!boundBox){
      boundBox = o._boundBox = MO.Class.create(MO.FE3dBoundBox);
      boundBox.linkGraphicContext(o);
      boundBox._drawable = o;
      boundBox._parent = o;
      boundBox.setup();
   }
   return boundBox;
}
MO.MDsBoundBox_showBoundBox = function MDsBoundBox_showBoundBox(){
   var o = this;
   var boundBox = o.boundBox();
   var resource = o.resource();
   var meshResource = resource.mesh();
   var outline = meshResource.outline();
   boundBox.outline().assign(outline);
   boundBox.upload();
   o._boundVisible = true;
}
MO.MDsBoundBox_hideBoundBox = function MDsBoundBox_hideBoundBox(){
   var o = this;
   var boundBox = o._boundBox;
   o._boundVisible = false;
}
MO.SDsPropertyFrame = function SDsPropertyFrame(){
   var o = this;
   o.clazz   = null;
   o.name    = null;
   o.frame   = null;
   o.dispose = MO.Method.disposeStruct;
   return o;
}
MO.FDsApplication = function FDsApplication(o){
   o = MO.Class.inherits(this, o, MO.FDuiApplication);
   o.construct  = MO.FDsApplication_construct;
   o.initialize = MO.FDsApplication_initialize;
   o.dispose    = MO.FDsApplication_dispose;
   return o;
}
MO.FDsApplication_construct = function FDsApplication_construct(){
   var o = this;
   o.__base.FDuiApplication.construct.call(o);
}
MO.FDsApplication_initialize = function FDsApplication_initialize(){
   var o = this;
   o.__base.FDuiApplication.initialize.call(o);
   MO.Engine3d.setup();
}
MO.FDsApplication_dispose = function FDsApplication_dispose(){
   var o = this;
   o.__base.FDuiApplication.dispose.call(o);
}
MO.FDsBitmapCanvas = function FDsBitmapCanvas(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._activeBitmap        = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsBitmapCanvas_onBuild;
   o.onMouseCaptureStart  = MO.FDsBitmapCanvas_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsBitmapCanvas_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsBitmapCanvas_onMouseCaptureStop;
   o.onMouseWheel         = MO.FDsBitmapCanvas_onMouseWheel;
   o.onLoaded             = MO.FDsBitmapCanvas_onLoaded;
   o.oeResize             = MO.FDsBitmapCanvas_oeResize;
   o.oeRefresh            = MO.FDsBitmapCanvas_oeRefresh;
   o.construct            = MO.FDsBitmapCanvas_construct;
   o.loadByGuid           = MO.FDsBitmapCanvas_loadByGuid;
   o.dispose              = MO.FDsBitmapCanvas_dispose;
   return o;
}
MO.FDsBitmapCanvas_onBuild = function FDsBitmapCanvas_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
   var hPanel = o._hPanel;
   var space = o._activeSpace = MO.Class.create(MO.FE3dFlatStage);
   space.linkGraphicContext(o);
   space.selectTechnique(o, MO.FE3dGeneralTechnique);
   space.region().backgroundColor().set(1, 1, 1, 1);
   space.region().linkGraphicContext(o);
   MO.RStage.register('space.bitmap', space);
   var camera = space.camera();
   camera.setPosition(0, 0, -10);
   camera.lookAt(0, 0, 0);
   camera.update();
   var projection = camera.projection();
   projection._angle = 45;
   projection.size().set(hPanel.width, hPanel.height);
   projection.update();
   MO.Window.lsnsMouseWheel.register(o, o.onMouseWheel);
}
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
   o._capturePosition.set(event.clientX, event.clientY);
   o._captureMatrix.assign(bitmap.matrix());
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}
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
   var cx = event.clientX - o._capturePosition.x;
   var cy = event.clientY - o._capturePosition.y;
   var captureMatrix = o._captureMatrix;
   matrix.tx = captureMatrix.tx + cx;
   matrix.ty = captureMatrix.ty + cy;
   matrix.updateForce();
}
MO.FDsBitmapCanvas_onMouseCaptureStop = function FDsBitmapCanvas_onMouseCaptureStop(event){
   var o = this;
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsBitmapCanvas_onMouseWheel = function FDsBitmapCanvas_onMouseWheel(event){
   var o = this;
   var bitmap = o._activeBitmap;
   if(!bitmap){
      return;
   }
   var scale = 1.0;
   if(event.deltaY < 0){
      scale = 1.1;
   }else if(event.deltaY > 0){
      scale = 0.9;
   }
   var matrix = bitmap.matrix();
   matrix.sx *= scale;
   matrix.sy *= scale;
   matrix.updateForce();
}
MO.FDsBitmapCanvas_onLoaded = function FDsBitmapCanvas_onLoaded(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsBitmapCanvas_oeResize = function FDsBitmapCanvas_oeResize(event){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, event);
   return MO.EEventStatus.Stop;
}
MO.FDsBitmapCanvas_oeRefresh = function FDsBitmapCanvas_oeRefresh(p){
   return MO.EEventStatus.Stop;
}
MO.FDsBitmapCanvas_construct = function FDsBitmapCanvas_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._captureMatrix = new MO.SMatrix3d();
}
MO.FDsBitmapCanvas_loadByGuid = function FDsBitmapCanvas_loadByGuid(guid){
   var o = this;
   var size = o._graphicContext.size();
   MO.Console.find(MO.FDuiDesktopConsole).showLoading();
   var resource = o._activeResource = MO.Console.find(MO.FDrBitmapConsole).query(guid);
   var url = '/cloud.resource.bitmap.wv?do=view&guid=' + guid;
   var bitmap = o._activeBitmap = MO.Console.find(MO.FE3dBitmapConsole).loadByGuid(o, guid);
   bitmap.material().info().effectCode = 'flat';
   bitmap.setLoadListener(o, o.onLoaded);
   bitmap.loadUrl(url);
   var matrix = bitmap.matrix();
   var left = Math.max((size.width - resource.sizeWidth()) / 2, 0);
   var top = Math.max((size.height - resource.sizeHeight()) / 2, 0);
   matrix.setTranslate(left, top);
   matrix.setScale(resource.sizeWidth(), resource.sizeHeight());
   matrix.update();
   var space = o._activeSpace;
   var layer = space.layer();
   layer.clearRenderables();
   layer.pushRenderable(bitmap);
}
MO.FDsBitmapCanvas_dispose = function FDsBitmapCanvas_dispose(){
   var o = this;
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsCanvas = function FDsCanvas(o){
   o = MO.Class.inherits(this, o, MO.FDuiCanvas, MO.MGraphicObject, MO.MListenerLoad, MO.MMouseCapture);
   o._servicePreview      = 'cloud.resource.preview';
   o._resourceTypeCd      = null;
   o._optionRotation      = false;
   o._activeSpace         = MO.Class.register(o, new MO.AGetter('_activeSpace'));
   o._canvasModeCd        = MO.EDsCanvasMode.Drop;
   o._canvasMoveCd        = MO.EDsCanvasDrag.Unknown;
   o._switchWidth         = '*';
   o._switchHeight        = '*';
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._captureRotation     = null;
   o._cameraMoveRate      = 8;
   o._cameraKeyRotation   = 3;
   o._cameraMouseRotation = 0.005;
   o._dimensional         = null;
   o._rotation            = null;
   o.onBuild              = MO.FDsCanvas_onBuild;
   o.onMouseCaptureStart  = MO.FDsCanvas_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsCanvas_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsCanvas_onMouseCaptureStop;
   o.oeResize             = MO.FDsCanvas_oeResize;
   o.oeFrame              = MO.FDsCanvas_oeFrame;
   o.oeRefresh            = MO.FDsCanvas_oeRefresh;
   o.construct            = MO.FDsCanvas_construct;
   o.switchSize           = MO.FDsCanvas_switchSize;
   o.switchRotation       = MO.FDsCanvas_switchRotation;
   o.reloadRegion         = MO.FDsCanvas_reloadRegion;
   o.capture              = MO.FDsCanvas_capture;
   o.refreshSpace         = MO.FDsCanvas_refreshSpace;
   o.dispose              = MO.FDsCanvas_dispose;
   return o;
}
MO.FDsCanvas_onBuild = function FDsCanvas_onBuild(event){
   var o = this;
   o.__base.FDuiCanvas.onBuild.call(o, event);
   var hPanel = o._hPanel;
   hPanel.__linker = o;
   hPanel.style.width = '100%';
   hPanel.style.height = '100%';
   var parameters = new MO.SArgs();
   parameters.alpha = false;
   parameters.antialias = true;
   var context = o._graphicContext = MO.Engine3d.createContext(MO.FWglContext, hPanel, parameters);
   var dimensional = o._dimensional = MO.Class.create(MO.FE3dDimensional);
   dimensional.linkGraphicContext(context);
   dimensional.setup();
   MO.Console.find(MO.FMouseConsole).register(o);
}
MO.FDsCanvas_onMouseCaptureStart = function FDsCanvas_onMouseCaptureStart(event){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var camera = space.camera();
   o._capturePosition.set(event.clientX, event.clientY);
   o._captureRotation.assign(camera._rotation);
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}
MO.FDsCanvas_onMouseCapture = function FDsCanvas_onMouseCapture(event){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var camera = space.camera();
   var cx = event.clientX - o._capturePosition.x;
   var cy = event.clientY - o._capturePosition.y;
   var mc = o._canvasModeCd;
   var toolbar = o._frameSet._canvasToolBar;
   switch(toolbar._canvasModeCd){
      case MO.EDsCanvasMode.Drop:
         var rotation = camera.rotation();
         var captureRotation = o._captureRotation;
         rotation.x = captureRotation.x - cy * o._cameraMouseRotation;
         rotation.y = captureRotation.y - cx * o._cameraMouseRotation;
         break;
      case MO.EDsCanvasMode.Select:
         break;
      case EDsCanvasMode.Translate:
         break;
      case MO.EDsCanvasMode.Rotation:
         break;
      case MO.EDsCanvasMode.Scale:
         break;
   }
}
MO.FDsCanvas_onMouseCaptureStop = function FDsCanvas_onMouseCaptureStop(event){
   var o = this;
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsCanvas_oeResize = function FDsCanvas_oeResize(event){
   var o = this;
   o.__base.FDuiCanvas.oeResize.call(o, event);
   o.refreshSpace();
   return MO.EEventStatus.Stop;
}
MO.FDsCanvas_oeFrame = function FDsCanvas_oeFrame(event){
   var o = this;
   o.__base.FDuiCanvas.oeFrame.call(o, event);
   var space = o._activeSpace;
   if(!space){
      return;
   }
   if(event.isBefore()){
      var camera = space.camera();
      var timer = space.timer();
      var span = timer.spanSecond();
      var moveRate = o._cameraMoveRate * span;
      var rotationRate = o._cameraKeyRotation * span;
      var keyboard = MO.Device.Keyboard;
      var keyForward = keyboard.isPress(MO.EStageKey.Forward);
      var keyBack = keyboard.isPress(MO.EStageKey.Back);
      if(keyForward && !keyBack){
         camera.doWalk(moveRate);
      }
      if(!keyForward && keyBack){
         camera.doWalk(-moveRate);
      }
      var keyUp = keyboard.isPress(MO.EStageKey.Up);
      var keyDown = keyboard.isPress(MO.EStageKey.Down);
      if(keyUp && !keyDown){
         camera.doFly(moveRate);
      }
      if(!keyUp && keyDown){
         camera.doFly(-moveRate);
      }
      var keyRleft = keyboard.isPress(MO.EStageKey.RotationLeft);
      var keyRright = keyboard.isPress(MO.EStageKey.RotationRight);
      if(keyRleft && !keyRright){
         camera.doYaw(rotationRate);
      }
      if(!keyRleft && keyRright){
         camera.doYaw(-rotationRate);
      }
      var keyRup = keyboard.isPress(MO.EStageKey.RotationUp);
      var keyDown = keyboard.isPress(MO.EStageKey.RotationDown);
      if(keyRup && !keyDown){
         camera.doPitch(rotationRate);
      }
      if(!keyRup && keyDown){
         camera.doPitch(-rotationRate);
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
   if(event.isAfter()){
      space.process();
   }
}
MO.FDsCanvas_oeRefresh = function FDsCanvas_oeRefresh(p){
   return MO.EEventStatus.Stop;
}
MO.FDsCanvas_construct = function FDsCanvas_construct(){
   var o = this;
   o.__base.FDuiCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
}
MO.FDsCanvas_switchSize = function FDsCanvas_switchSize(width, height){
   var o = this;
   o._switchWidth = width;
   o._switchHeight = height;
   var hCanvas = o._hPanel;
   var hParent = o._hParent;
   if(width == '*'){
      width = hParent.offsetWidth;
   }
   if(height == '*'){
      height = hParent.offsetHeight;
   }
   hCanvas.width = width;
   hCanvas.style.width = width + 'px';
   hCanvas.height = height;
   hCanvas.style.height = height + 'px';
   o._graphicContext.setViewport(0, 0, width, height);
   var space = o._activeSpace;
   if(space){
      var projection = space.camera().projection();
      projection.size().set(width, height);
      projection.update();
   }
}
MO.FDsCanvas_switchRotation = function FDsCanvas_switchRotation(flag){
   this._optionRotation = flag;
}
MO.FDsCanvas_reloadRegion = function FDsCanvas_reloadRegion(){
   var o = this;
   var space = o._activeSpace;
   var region = space.region();
   var resource = region.resource();
   o._cameraMoveRate = resource.moveSpeed();
   o._cameraKeyRotation = resource.rotationKeySpeed();
   o._cameraMouseRotation = resource.rotationMouseSpeed();
}
MO.FDsCanvas_capture = function FDsCanvas_capture(){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var resource = space.resource();
   var guid = resource.guid();
   var switchWidth = o._switchWidth;
   var switchHeight = o._switchHeight;
   o.switchSize(200, 150);
   space.process();
   var context = o._graphicContext;
   var size = context.size();
   var width = size.width;
   var height = size.height;
   var data = context.readPixels(0, 0, width, height);
   o.switchSize(switchWidth, switchHeight);
   space.process();
   var url = '/' + o._servicePreview + '.wv?do=upload&type_cd=' + o._resourceTypeCd + '&guid=' + guid + '&width=' + width + '&height=' + height;
   return MO.Console.find(MO.FHttpConsole).send(url, data.buffer);
}
MO.FDsCanvas_refreshSpace = function FDsCanvas_refreshSpace(){
   var o = this;
   var graphic = o._graphicContext;
   var hPanel = o._hPanel;
   MO.Window.Html.visibleSet(hPanel, false);
   var hParent = o._hParent;
   var width = hParent.offsetWidth;
   var height = hParent.offsetHeight - 6;
   hPanel.width = width;
   hPanel.height = height;
   graphic.setViewport(0, 0, width, height);
   var space = o._activeSpace;
   if(space){
      var camera = space.camera();
      var projection = camera.projection();
      projection.size().set(width, height);
      projection.update();
   }
   MO.Window.Html.visibleSet(hPanel, true);
   return MO.EEventStatus.Stop;
}
MO.FDsCanvas_dispose = function FDsCanvas_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDuiCanvas.dispose.call(o);
}
MO.FDsCatalog = function FDsCatalog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDataTreeView, MO.MListenerSelected);
   o._iconView             = 'resource.scene.view';
   o._iconViewNot          = 'resource.scene.viewno';
   o._displayNodes         = null;
   o._renderableNodes      = null;
   o._materialNodes        = null;
   o.onBuild               = MO.FDsCatalog_onBuild;
   o.onLoadDisplay         = MO.FDsCatalog_onLoadDisplay;
   o.onNodeClick           = MO.FDsCatalog_onNodeClick;
   o.onNodeViewClick       = MO.FDsCatalog_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsCatalog_onNodeViewDoubleClick;
   o.construct             = MO.FDsCatalog_construct;
   o.buildNodeView         = MO.FDsCatalog_buildNodeView;
   o.buildTechnique        = MO.FDsCatalog_buildTechnique;
   o.buildRegion           = MO.FDsCatalog_buildRegion;
   o.buildRenderable       = MO.FDsCatalog_buildRenderable;
   o.buildDisplay          = MO.FDsCatalog_buildDisplay;
   o.buildLayer            = MO.FDsCatalog_buildLayer;
   o.buildSpace            = MO.FDsCatalog_buildSpace;
   o.selectObject          = MO.FDsCatalog_selectObject;
   o.showObject            = MO.FDsCatalog_showObject;
   o.dispose               = MO.FDsCatalog_dispose;
   return o;
}
MO.FDsCatalog_onBuild = function FDsCatalog_onBuild(p){
   var o = this;
   o.__base.FDuiDataTreeView.onBuild.call(o, p);
   o.addNodeClickListener(o, o.onNodeClick);
}
MO.FDsCatalog_onLoadDisplay = function FDsCatalog_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRenderable(n, p);
}
MO.FDsCatalog_onNodeClick = function FDsCatalog_onNodeClick(event){
   var o = this;
   var node = event.node;
   var linker = node.dataPropertyGet('linker');
   if(linker){
      o.selectObject(linker);
   }
}
MO.FDsCatalog_onNodeViewClick = function FDsCatalog_onNodeViewClick(event){
   var o = this;
   var cell = event.treeNodeCell;
   var linker = event.treeNode.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FDisplay)){
      if(event.ctrlKey){
         var displayNodes = o._displayNodes;
         var displayCount = displayNodes.count()
         for(var i = 0; i < displayCount; i++){
            var displayNode = displayNodes.at(i);
            var display = displayNode.dataPropertyGet('linker');
            display._visible = false;
            displayNode.cell('view').setIcon(o._iconViewNot);
         }
         linker.setVisible(true);
         cell.setIcon(o._iconView);
      }else{
         linker.setVisible(!linker.visible());
         cell.setIcon(linker.visible() ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(linker, MO.FDrawable)){
      if(event.ctrlKey){
         var renderableNodes = o._renderableNodes;
         var renderableCount = renderableNodes.count();
         for(var i = 0; i < renderableCount; i++){
            var renderableNode = renderableNodes.at(i);
            var renderable = renderableNode.dataPropertyGet('linker');
            renderable._visible = false;
            renderableNode.cell('view').setIcon(o._iconViewNot);
         }
         linker.setVisible(true);
         cell.setIcon(o._iconView);
      }else{
         linker.setVisible(!linker.visible());
         cell.setIcon(linker.visible() ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(linker, MO.FG3dMaterial)){
      if(event.ctrlKey){
         var materialNodes = o._materialNodes;
         var materialCount = materialNodes.count();
         for(var i = 0; i < materialCount; i++){
            var materialNode = materialNodes.at(i);
            var material = materialNode.dataPropertyGet('linker');
            material.setVisible(false);
            materialNode.cell('view').setIcon(o._iconViewNot);
         }
         linker.setVisible(true);
         cell.setIcon(o._iconView);
      }else{
         linker.setVisible(!linker.visible());
         cell.setIcon(linker.visible() ? o._iconView : o._iconViewNot);
      }
   }
}
MO.FDsCatalog_onNodeViewDoubleClick = function FDsCatalog_onNodeViewDoubleClick(event){
   var o = this;
   var node = event.treeNode;
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FDisplay)){
      var displayNodes = o._displayNodes;
      var displayCount = displayNodes.count()
      for(var i = 0; i < displayCount; i++){
         var displayNode = displayNodes.at(i);
         var display = displayNode.dataPropertyGet('linker');
         display.setVisible(true);
         displayNode.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(linker, MO.FDrawable)){
      var renderableNodes = o._renderableNodes;
      var renderableCount = renderableNodes.count();
      for(var i = 0; i < renderableCount; i++){
         var renderableNode = renderableNodes.at(i);
         var renderable = renderableNode.dataPropertyGet('linker');
         renderable.setVisible(true);
         renderableNode.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(linker, MO.FG3dMaterial)){
      var materialNodes = o._materialNodes;
      var materialCount = materialNodes.count();
      for(var i = 0; i < materialCount; i++){
         var materialNode = materialNodes.at(i);
         var material = materialNode.dataPropertyGet('linker');
         material.setVisible(true);
         materialNode.cell('view').setIcon(o._iconView);
      }
   }
}
MO.FDsCatalog_construct = function FDsCatalog_construct(){
   var o = this;
   o.__base.FDuiDataTreeView.construct.call(o);
   o._displayNodes = new MO.TObjects();
   o._renderableNodes = new MO.TObjects();
   o._materialNodes = new MO.TObjects();
}
MO.FDsCatalog_buildNodeView = function FDsCatalog_buildNodeView(pn, pv){
   var o = this;
   var c = pn.cell('view');
   c.setIcon(o._iconView);
   c.addClickListener(o, o.onNodeViewClick);
   c.addDoubleClickListener(o, o.onNodeViewDoubleClick);
}
MO.FDsCatalog_buildTechnique = function FDsCatalog_buildTechnique(parentNode, technique){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('technique');
   node.setLabel('Technique');
   node.dataPropertySet('linker', technique);
   parentNode.appendNode(node);
}
MO.FDsCatalog_buildRegion = function FDsCatalog_buildRegion(parentNode, region){
   var o = this;
   var regionNode = o.createNode();
   regionNode.setTypeCode('Region');
   regionNode.setLabel('Region');
   regionNode.dataPropertySet('linker', region);
   parentNode.appendNode(regionNode);
   var cameraNode = o.createNode();
   cameraNode.setTypeCode('Camera');
   cameraNode.setLabel('Camera');
   cameraNode.dataPropertySet('linker', region.camera());
   regionNode.appendNode(cameraNode);
   var lightNode = o.createNode();
   lightNode.setTypeCode('Light');
   lightNode.setLabel('Light');
   lightNode.dataPropertySet('linker', region.directionalLight());
   regionNode.appendNode(lightNode);
}
MO.FDsCatalog_buildRenderable = function FDsCatalog_buildRenderable(n, p){
   var o = this;
   var s = p.materials();
   if(s){
      var c = s.count();
      for(var i = 0; i < c; i++){
         var m = s.value(i);
         var mr = m.resource();
         var dn = o.createNode();
         dn.setLabel(mr.code());
         dn.setNote(mr.label());
         dn.setTypeCode('material');
         dn.dataPropertySet('linker', m);
         o.buildNodeView(dn, true);
         o._materialNodes.push(dn);
         n.appendNode(dn);
      }
   }
   var s = p.animations();
   if(s){
      var c = s.count();
      for(var i = 0; i < c; i++){
         var m = s.value(i);
         var mr = m.resource();
         var dn = o.createNode();
         dn.setLabel(mr.code());
         dn.setNote(mr.label());
         dn.setTypeCode('animation');
         dn.dataPropertySet('linker', m);
         o.buildNodeView(dn, true);
         n.appendNode(dn);
      }
   }
   var s = p.meshRenderables();
   if(s){
      var c = s.count();
      for(var i = 0; i < c; i++){
         var r = s.get(i);
         var rr = r.resource();
         var rd = rr.model();
         var rm = rr.mesh();
         var dn = o.createNode();
         dn.setLabel(rm.code());
         dn.setTypeCode('renderable');
         dn.dataPropertySet('linker', r);
         o.buildNodeView(dn, true);
         o._renderableNodes.push(dn);
         n.appendNode(dn);
      }
   }
}
MO.FDsCatalog_buildDisplay = function FDsCatalog_buildDisplay(n, p){
   var o = this;
   var s = p.displays();
   if(s){
      var c = s.count();
      for(var i = 0; i < c; i++){
         var d = s.get(i);
         var dr = d.resourceScene();
         var dn = o.createNode();
         dn.setLabel(dr.code());
         dn.setNote(dr.label());
         dn.setTypeCode('display');
         dn.dataPropertySet('linker', d);
         o.buildNodeView(dn, true);
         o._displayNodes.push(dn);
         n.appendNode(dn);
         d.addLoadListener(o, o.onLoadDisplay);
         d._linkNode = dn;
      }
   }
}
MO.FDsCatalog_buildLayer = function FDsCatalog_buildLayer(n, p){
   var o = this;
   var ns = o.createNode();
   ns.setLabel('Layers');
   ns.setTypeCode('layers');
   ns.dataPropertySet('linker', 'layers');
   o.buildNodeView(ns, true);
   n.appendNode(ns);
   var ds = p.layers();
   var c = ds.count();
   for(var i = 0; i < c; i++){
      var l = ds.value(i);
      if(MO.Class.isClass(l, MO.FDisplayUiLayer)){
         continue;
      }
      var lr = l.resource();
      var nl = o.createNode();
      nl.setLabel('Layer:' + lr.code());
      nl.setTypeCode('layer');
      nl.dataPropertySet('linker', l);
      o.buildNodeView(nl, true);
      ns.appendNode(nl);
      o.buildDisplay(nl, l)
   }
}
MO.FDsCatalog_buildSpace = function FDsCatalog_buildSpace(p){
   var o = this;
   var r = p._resource;
   var nr = o.createNode();
   nr.setLabel(r.code());
   nr.setNote(r.label());
   nr.setTypeCode('scene');
   nr.dataPropertySet('linker', p);
   o.appendNode(nr);
   o.buildTechnique(nr, p.technique())
   o.buildRegion(nr, p.region());
   o.buildLayer(nr, p);
   nr.click();
}
MO.FDsCatalog_selectObject = function FDsCatalog_selectObject(item){
   var o = this;
   if(item){
      o.processSelectedListener(item, true);
   }
}
MO.FDsCatalog_showObject = function FDsCatalog_showObject(item){
   var o = this;
   if(MO.Class.isClass(item, MO.FDsSceneRenderable)){
      var renderableNodes = o._renderableNodes;
      var renderableCount = renderableNodes.count();
      for(var i = 0; i < renderableCount; i++){
         var renderableNode = renderableNodes.at(i);
         var renderable = renderableNode.dataPropertyGet('linker');
         if(renderable == item){
            o.processSelectedListener(item, false);
         }
      }
   }
}
MO.FDsCatalog_dispose = function FDsCatalog_dispose(){
   var o = this;
   o._displayNodes = MO.Lang.Object.dispose(o._displayNodes);
   o._renderableNodes = MO.Lang.Object.dispose(o._renderableNodes);
   o._materialNodes = MO.Lang.Object.dispose(o._materialNodes);
   o.__base.FDuiDataTreeView.dispose.call(o);
}
MO.FDsFrameSet = function FDsFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDuiFrameSet);
   o._styleToolBarGround   = MO.Class.register(o, new MO.AStyle('_styleToolBarGround', 'ToolBar_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleCanvasContent   = MO.Class.register(o, new MO.AStyle('_styleCanvasContent', 'Canvas_Content'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   o._activeGuid           = null;
   o._activeCode           = null;
   o._activeSpace          = null;
   o._defineFrames         = null;
   o._propertyFrames       = MO.Class.register(o, new MO.AGetter('_propertyFrames'));
   o.construct             = MO.FDsFrameSet_construct;
   o.registerPropertyFrame = MO.FDsFrameSet_registerPropertyFrame;
   o.findPropertyFrame     = MO.FDsFrameSet_findPropertyFrame;
   o.selectPropertyFrame   = MO.FDsFrameSet_selectPropertyFrame;
   o.hidePropertyFrames    = MO.FDsFrameSet_hidePropertyFrames;
   o.dispose               = MO.FDsFrameSet_dispose;
   return o;
}
MO.FDsFrameSet_construct = function FDsFrameSet_construct(){
   var o = this;
   o.__base.FDuiFrameSet.construct.call(o);
   o._defineFrames = new MO.TObjects();
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsFrameSet_registerPropertyFrame = function FDsFrameSet_registerPropertyFrame(clazz, frameName){
   var o = this;
   var frame = new MO.SDsPropertyFrame();
   frame.clazz = clazz;
   frame.name = frameName;
   o._defineFrames.push(frame);
}
MO.FDsFrameSet_findPropertyFrame = function FDsFrameSet_findPropertyFrame(code){
   var o = this;
   var frames = o._propertyFrames;
   var frame = frames.get(code);
   if(!frame){
      frame = MO.Console.find(MO.FDuiFrameConsole).get(o, code, o._framePropertyContent._hContainer);
      frame._frameSet = o;
      frames.set(code, frame);
   }
   return frame;
}
MO.FDsFrameSet_selectPropertyFrame = function FDsFrameSet_selectPropertyFrame(space, select){
   var o = this;
   var selectFrame = null;
   var frames = o._defineFrames;
   var count = frames.count();
   for(var i = 0; i < count; i++){
      var frame = frames.at(i);
      if(MO.Class.isClass(select, frame.clazz)){
         selectFrame = frame.frame;
         if(!selectFrame){
            selectFrame = frame.frame = o.findPropertyFrame(frame.name);
         }
         selectFrame.show();
         selectFrame.loadObject(space, select);
         break;
      }
   }
   return selectFrame;
}
MO.FDsFrameSet_hidePropertyFrames = function FDsFrameSet_hidePropertyFrames(){
   var o = this;
   var frames = o._propertyFrames;
   var count = frames.count();
   for(var i = 0; i < count; i++){
      var frame = frames.at(i);
      frame.hide();
   }
}
MO.FDsFrameSet_dispose = function FDsFrameSet_dispose(){
   var o = this;
   o._activeSpace = null;
   o._defineFrames = MO.Lang.Object.dispose(o._defineFrames, true);
   o._propertyFrames = MO.Lang.Object.dispose(o._propertyFrames, true);
   o.__base.FDuiFrameSet.dispose.call(o);
}
MO.FDsMainCanvas = function FDsMainCanvas(o){
   o = MO.Class.inherits(this, o, MO.FCanvas);
   o._context   = null;
   o._stage     = null;
   o._layer     = null;
   o._activeModel = null;
   o._rotationX = 0;
   o._rotationY = 0;
   o._rotationZ = 0;
   o.onBuild      = MO.FDsMainCanvas_onBuild;
   o.onEnterFrame = MO.FDsMainCanvas_onEnterFrame;
   o.onThemeLoad  = MO.FDsMainCanvas_onThemeLoad;
   o.oeRefresh    = MO.FDsMainCanvas_oeRefresh;
   o.construct    = MO.FDsMainCanvas_construct;
   o.selectModel  = MO.FDsMainCanvas_selectModel;
   o.dispose      = MO.FDsMainCanvas_dispose;
   return o;
}
MO.FDsMainCanvas_onEnterFrame= function FDsMainCanvas_onEnterFrame(){
   var o = this;
   var m = o._activeModel;
   if(m){
      m.location().set(0, -6.0, 0);
      m.rotation().set(0, o._rotationY, 0);
      m.scale().set(2, 2, 2);
      m.update();
      o._rotationX += 0.01;
      o._rotationY += 0.01;
      o._rotationZ += 0.03;
   }
}
MO.FDsMainCanvas_onThemeLoad = function FDsMainCanvas_onThemeLoad(){
   var o = this;
   var hCanvas = o._hPanel;
   hCanvas.width = o._hParent.offsetWidth;
   hCanvas.height = o._hParent.offsetHeight;
   o._context = MO.REngine3d.createContext(MO.FWglContext, hCanvas);
   var g = o._stage = MO.Class.create(MO.FSimpleStage3d);
   g.backgroundColor().set(0.5, 0.5, 0.5, 1);
   g.selectTechnique(o._context, FG3dGeneralTechnique);
   o._layer = o._stage.spriteLayer();
   RStage.register('stage3d', o._stage);
   var rc = o._stage.camera();
   rc.setPosition(0, 3, -20);
   rc.lookAt(0, 0, 0);
   rc.update();
   o._stage.directionalLight().direction().set(0.7, -0.7, 0);
   var rp = o._stage.camera().projection();
   rp.size().set(hCanvas.width, hCanvas.height);
   rp.update();
   RStage.lsnsEnterFrame.register(o, o.onEnterFrame);
   RStage.start();
}
MO.FDsMainCanvas_onBuild = function FDsMainCanvas_onBuild(p){
   var o = this;
   o.__base.FCanvas.onBuild.call(o, p);
   var tc = MO.Console.find(FE3sThemeConsole);
   var m = tc.select('color');
   m.loadListener().register(o, o.onThemeLoad);
}
MO.FDsMainCanvas_oeRefresh = function FDsMainCanvas_oeRefresh(p){
   var o = this;
   o.__base.FCanvas.oeRefresh.call(o, p);
   return EEventStatus.Stop;
}
MO.FDsMainCanvas_construct = function FDsMainCanvas_construct(){
   var o = this;
   o.__base.FCanvas.construct.call(o);
}
MO.FDsMainCanvas_selectModel = function FDsMainCanvas_selectModel(p){
   var o = this;
   var rmc = MO.Console.find(FModel3dConsole);
   if(o._activeModel != null){
      rmc.free(o._activeModel);
   }
   var m = rmc.alloc(o._context, p);
   o._layer.pushDisplay(m);
   o._activeModel = m;
}
MO.FDsMainCanvas_dispose = function FDsMainCanvas_dispose(){
   var o = this;
   o.__base.FCanvas.dispose.call(o);
}
MO.FDsMainCatalog = function FDsMainCatalog(o){
   o = MO.Class.inherits(this, o, MO.FDataTreeView);
   o.onBuild     = MO.FDsMainCatalog_onBuild;
   o.onNodeClick = MO.FDsMainCatalog_onNodeClick;
   o.construct   = MO.FDsMainCatalog_construct;
   o.dispose     = MO.FDsMainCatalog_dispose;
   return o;
}
MO.FDsMainCatalog_onBuild = function FDsMainCatalog_onBuild(p){
   var o = this;
   o.__base.FDataTreeView.onBuild.call(o, p);
   o.lsnsClick.register(o, o.onNodeClick);
}
MO.FDsMainCatalog_onNodeClick = function FDsMainCatalog_onNodeClick(t, n){
   var o = this;
   var c = o._worksapce._canvas;
   c.selectModel(n.name());
}
MO.FDsMainCatalog_construct = function FDsMainCatalog_construct(){
   var o = this;
   o.__base.FDataTreeView.construct.call(o);
}
MO.FDsMainCatalog_dispose = function FDsMainCatalog_dispose(){
   var o = this;
   o.__base.FDataTreeView.dispose.call(o);
}
MO.FDsMainMenuBar = function FDsMainMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FMenuBar);
   o.onBuild   = MO.FDsMainMenuBar_onBuild;
   o.construct = MO.FDsMainMenuBar_construct;
   o.dispose   = MO.FDsMainMenuBar_dispose;
   return o;
}
MO.FDsMainMenuBar_onBuild = function FDsMainMenuBar_onBuild(p){
   var o = this;
   o.__base.FMenuBar.onBuild.call(o, p);
   var b = o._framesetMain = MO.Class.create(MO.FMenuButton);
   b.setLabel('文件');
   b.setIcon('design.menu.build');
   b.build(p);
   o.appendButton(b);
   var b = o._framesetMain = MO.Class.create(MO.FMenuButton);
   b.setLabel('保存');
   b.setIcon('design.menu.save');
   b.build(p);
   o.appendButton(b);
   var b = o._framesetMain = MO.Class.create(MO.FMenuButton);
   b.setLabel('帮助');
   b.setIcon('design.menu.help');
   b.build(p);
   o.appendButton(b);
}
MO.FDsMainMenuBar_construct = function FDsMainMenuBar_construct(){
   var o = this;
   o.__base.FMenuBar.construct.call(o);
}
MO.FDsMainMenuBar_dispose = function FDsMainMenuBar_dispose(){
   var o = this;
   o.__base.FMenuBar.dispose.call(o);
}
MO.FDsMainToolBar = function FDsMainToolBar(o){
   o = MO.Class.inherits(this, o, FToolBar);
   o.onPersistenceClick = MO.FDsMainToolBar_onPersistenceClick;
   o.onBuild   = MO.FDsMainToolBar_onBuild;
   o.construct = MO.FDsMainToolBar_construct;
   o.dispose   = MO.FDsMainToolBar_dispose;
   return o;
}
MO.FDsMainToolBar_onPersistenceClick = function FDsMainToolBar_onPersistenceClick(p){
   var o = this;
   var catalog = o._worksapce._catalog;
   catalog.loadUrl('/cloud.describe.tree.ws?action=query&code=resource3d.model');
}
MO.FDsMainToolBar_onBuild = function FDsMainToolBar_onBuild(p){
   var o = this;
   o.__base.FToolBar.onBuild.call(o, p);
   var b = o._persistenceButton  = MO.Class.create(MO.FToolButton);
   b.setLabel('模型管理');
   b.build(p);
   b.lsnsClick.register(o, o.onPersistenceClick);
   o.appendButton(b);
   var b = o._framesetMain = MO.Class.create(MO.FToolButton);
   b.setLabel('材质管理');
   b.build(p);
   o.appendButton(b);
   var b = o._framesetMain = MO.Class.create(MO.FToolButton);
   b.setLabel('模板管理');
   b.build(p);
   o.appendButton(b);
   var b = o._framesetMain = MO.Class.create(MO.FToolButton);
   b.setLabel('场景管理');
   b.build(p);
   o.appendButton(b);
}
MO.FDsMainToolBar_construct = function FDsMainToolBar_construct(){
   var o = this;
   o.__base.FToolBar.construct.call(o);
}
MO.FDsMainToolBar_dispose = function FDsMainToolBar_dispose(){
   var o = this;
   o.__base.FToolBar.dispose.call(o);
}
MO.FDsMainWindow = function FDsMainWindow(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._name             = null;
   o._matrix           = null;
   o._location         = null;
   o._rotation         = null;
   o._scale            = null;
   o._visible          = true;
   o._renderables      = null;
   o.construct         = MO.FDsMainWindow_construct;
   o.isName            = MO.FDsMainWindow_isName;
   o.name              = MO.FDsMainWindow_name;
   o.matrix            = MO.FDsMainWindow_matrix;
   o.location          = MO.FDsMainWindow_location;
   o.rotation          = MO.FDsMainWindow_rotation;
   o.scale             = MO.FDsMainWindow_scale;
   o.hasRenderable     = MO.FDsMainWindow_hasRenderable;
   o.filterRenderables = MO.FDsMainWindow_filterRenderables;
   o.renderables       = MO.FDsMainWindow_renderables;
   o.pushRenderable    = MO.FDsMainWindow_pushRenderable;
   o.process           = MO.FDsMainWindow_process;
   o.update            = MO.FDsMainWindow_update;
   o.dispose           = MO.FDsMainWindow_dispose;
   return o;
}
MO.FDsMainWindow_construct = function FDsMainWindow_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._matrix = new MO.SMatrix3d();
   o._location = new MO.SPoint3();
   o._rotation = new MO.SVector3();
   o._scale = new MO.SVector3();
   o._scale.set(1, 1, 1);
}
MO.FDsMainWindow_isName = function FDsMainWindow_isName(p){
   return this._name == p;
}
MO.FDsMainWindow_name = function FDsMainWindow_name(){
   return this._name;
}
MO.FDsMainWindow_matrix = function FDsMainWindow_matrix(){
   return this._matrix;
}
MO.FDsMainWindow_location = function FDsMainWindow_location(){
   return this._location;
}
MO.FDsMainWindow_rotation = function FDsMainWindow_rotation(){
   return this._rotation;
}
MO.FDsMainWindow_scale = function FDsMainWindow_scale(){
   return this._scale;
}
MO.FDsMainWindow_hasRenderable = function FDsMainWindow_hasRenderable(){
   var r = this._renderables;
   if(r != null){
      return !r.isEmpty();
   }
   return false;
}
MO.FDsMainWindow_filterRenderables = function FDsMainWindow_filterRenderables(p){
   var o = this;
   if(!o._visible){
      return false;
   }
   var rs = o._renderables;
   if(rs != null){
      var c = rs.count();
      for(var n = 0; n < c; n++){
         var r = rs.get(n);
         if(r.testVisible()){
            p.pushRenderable(r);
         }
      }
   }
   return true;
}
MO.FDsMainWindow_renderables = function FDsMainWindow_renderables(){
   var o = this;
   var r = o._renderables;
   if(r == null){
      r = o._renderables = new MO.TObjects();
   }
   return r;
}
MO.FDsMainWindow_pushRenderable = function FDsMainWindow_pushRenderable(p){
   this.renderables().push(p);
}
MO.FDsMainWindow_update = function FDsMainWindow_update(){
   var o = this;
   var m = o._matrix;
   m.set(o._location, o._rotation, o._scale);
   m.update();
}
MO.FDsMainWindow_process = function FDsMainWindow_process(){
   var o = this;
   var rs = o._renderables;
   if(rs != null){
      var c = rs.count();
      for(var i = 0; i < c; i++){
         rs.get(i).process();
      }
   }
}
MO.FDsMainWindow_dispose = function FDsMainWindow_dispose(){
   var o = this;
   o._matrix = null;
   o._position = null;
   o._direction = null;
   o._scale = null;
   var rs = o._renderables;
   if(rs != null){
      rs.dispose();
      o._renderables = null
   }
   o.__base.FObject.dispose.call(o);
}
MO.FDsMainWorkspace = function FDsMainWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FWorkspace);
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._styleCatalogGround   = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._stylePropertyGround  = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._framesetMain         = null;
   o._framesetBody         = null;
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameCatalog         = null;
   o._frameWorkspace       = null;
   o._frameStatusBar       = null;
   o.onBuild               = MO.FDsMainWorkspace_onBuild;
   o.construct             = MO.FDsMainWorkspace_construct;
   o.dispose               = MO.FDsMainWorkspace_dispose;
   return o;
}
MO.FDsMainWorkspace_construct = function FDsMainWorkspace_construct(){
   var o = this;
   o.__base.FWorkspace.construct.call(o);
}
MO.FDsMainWorkspace_onBuild = function FDsMainWorkspace_onBuild(p){
   var o = this;
   o.__base.FWorkspace.onBuild.call(o, p);
   o._hPanel.style.width = '100%';
   o._hPanel.style.height = '100%';
   var fs = o._framesetMain = MO.Class.create(MO.FFrameSet);
   fs.build(p);
   var f = o._frameToolBar = MO.Class.create(MO.FFrame);
   f.setHeight(26);
   f.build(p);
   f._hPanel.className = o.styleName('Toolbar_Ground');
   fs.appendFrame(f);
   var f = o._frameBody = MO.Class.create(MO.FFrame);
   f.build(p);
   fs.appendFrame(f);
   var f = o._frameProperty = MO.Class.create(MO.FFrame);
   f.setHeight(18);
   f.build(p);
   f._hPanel.className = o.styleName('Statusbar_Ground');
   fs.appendFrame(f);
   fs.setPanel(o._hPanel);
   var fs = MO.Class.create(FFrameSet);
   fs._directionCd = MO.EDirection.Horizontal;
   fs.build(p);
   var f = o._frameCatalog = MO.Class.create(MO.FFrame);
   f.setWidth(300);
   f.build(p);
   f._hPanel.className = o.styleName('Catalog_Ground');
   fs.appendFrame(f);
   var sp1 = fs.appendSpliter();
   var f = o._frameWorkspace = MO.Class.create(MO.FFrame);
   f.build(p);
   f._hPanel.className = o.styleName('Workspace_Ground');
   fs.appendFrame(f);
   var sp2 = fs.appendSpliter();
   var f = o._frameStatusBar = MO.Class.create(MO.FFrame);
   f.setWidth(360);
   f.build(p);
   f._hPanel.className = o.styleName('Property_Ground');
   fs.appendFrame(f);
   fs.setPanel(o._frameBody._hPanel);
   sp1._alignCd = MO.EAlign.Left;
   sp1._hSize = o._frameCatalog._hPanel;
   sp2._alignCd = MO.EAlign.Right;
   sp2._hSize = o._frameStatusBar._hPanel;
   var c = o._catalog = MO.Class.create(MO.FDsMainCatalog);
   c._worksapce = o;
   c.build(p);
   c.setPanel(o._frameCatalog._hPanel);
   o.push(c);
   var c = o._toolbar = MO.Class.create(MO.FDsMainToolBar);
   c._worksapce = o;
   c.build(p);
   c.setPanel(o._frameToolBar._hPanel);
   c._persistenceButton.click();
   o.push(c);
   var c = o._canvas = MO.Class.create(MO.FDsMainCanvas);
   c._worksapce = o;
   c.build(p);
   c.setPanel(o._frameWorkspace._hPanel);
   o.push(c);
}
MO.FDsMainWorkspace_dispose = function FDsMainWorkspace_dispose(){
   var o = this;
   o.__base.FWorkspace.dispose.call(o);
}
MO.FDsSpaceCanvas = function FDsSpaceCanvas(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._rotation             = null;
   o._optionRotation       = false;
   o._capturePosition      = null;
   o._captureMatrix        = null;
   o._captureRotation      = null;
   o._selectObject         = null;
   o._selectRenderables    = null;
   o._templateMatrix       = null;
   o._templateRenderable   = null;
   o.onBuild               = MO.FDsSpaceCanvas_onBuild;
   o.onMouseCaptureStart   = MO.FDsSpaceCanvas_onMouseCaptureStart;
   o.onMouseCapture        = MO.FDsSpaceCanvas_onMouseCapture;
   o.onMouseCaptureStop    = MO.FDsSpaceCanvas_onMouseCaptureStop;
   o.construct             = MO.FDsSpaceCanvas_construct;
   o.innerSelectRenderable = MO.FDsSpaceCanvas_innerSelectRenderable;
   o.innerSelectDisplay    = MO.FDsSpaceCanvas_innerSelectDisplay;
   o.innerSelectLayer      = MO.FDsSpaceCanvas_innerSelectLayer;
   o.selectNone            = MO.FDsSpaceCanvas_selectNone;
   o.selectLayers          = MO.FDsSpaceCanvas_selectLayers;
   o.selectLayer           = MO.FDsSpaceCanvas_selectLayer;
   o.selectDisplay         = MO.FDsSpaceCanvas_selectDisplay;
   o.selectMaterial        = MO.FDsSpaceCanvas_selectMaterial;
   o.selectRenderable      = MO.FDsSpaceCanvas_selectRenderable;
   o.switchPlay            = MO.FDsSpaceCanvas_switchPlay;
   o.switchMovie           = MO.FDsSpaceCanvas_switchMovie;
   o.dispose               = MO.FDsSpaceCanvas_dispose;
   return o;
}
MO.FDsSpaceCanvas_onBuild = function FDsSpaceCanvas_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsSpaceCanvas_onMouseCaptureStart = function FDsSpaceCanvas_onMouseCaptureStart(event){
   var o = this;
   o.__base.FDsCanvas.onMouseCaptureStart.call(o, event)
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var region = space.region();
   var selectTechnique = MO.Console.find(MO.FG3dTechniqueConsole).find(o, MO.FG3dSelectTechnique);
   var renderable = selectTechnique.test(region, event.offsetX, event.offsetY);
   o.selectRenderable(renderable);
   if(renderable){
      var display = renderable.display();
      o._captureMatrix.assign(display.matrix());
   }
}
MO.FDsSpaceCanvas_onMouseCapture = function FDsSpaceCanvas_onMouseCapture(event){
   var o = this;
   o.__base.FDsCanvas.onMouseCapture.call(o, event);
}
MO.FDsSpaceCanvas_onMouseCaptureStop = function FDsSpaceCanvas_onMouseCaptureStop(event){
   var o = this;
   o.__base.FDsCanvas.onMouseCaptureStop.call(o, event);
}
MO.FDsSpaceCanvas_construct = function FDsSpaceCanvas_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
   o._selectRenderables = new MO.TObjects();
}
MO.FDsSpaceCanvas_innerSelectRenderable = function FDsSpaceCanvas_innerSelectRenderable(renderable){
   var o = this;
   renderable._optionSelected = true;
   if(MO.Class.isClass(renderable, MO.MDsBoundBox)){
      renderable.showBoundBox();
   }
   o._selectRenderables.push(renderable);
}
MO.FDsSpaceCanvas_innerSelectDisplay = function FDsSpaceCanvas_innerSelectDisplay(select){
   var o = this;
   var displays = select.displays();
   var count = displays.count();
   for(var i = 0; i < count; i++){
      var display = displays.at(i);
      o.innerSelectDisplay(display);
   }
   var renderables = select.renderables();
   var count = renderables.count();
   for(var i = 0; i < count; i++){
      var renderable = renderables.at(i);
      if(MO.Class.isClass(renderable, MO.FDsSceneRenderable)){
         o.innerSelectRenderable(renderable);
      }
   }
}
MO.FDsSpaceCanvas_innerSelectLayer = function FDsSpaceCanvas_innerSelectLayer(layer){
   var o = this;
   var displays = layer.displays();
   var count = displays.count();
   for(var i = 0; i < count; i++){
      var display = displays.at(i);
      o.innerSelectDisplay(display)
   }
}
MO.FDsSpaceCanvas_selectNone = function FDsSpaceCanvas_selectNone(){
   var o = this;
   var renderables = o._selectRenderables;
   var count = renderables.count();
   for(var i = 0; i < count; i++){
      var renderable = renderables.at(i);
      renderable._optionSelected = false;
      if(MO.Class.isClass(renderable, MO.MDsBoundBox)){
         renderable.hideBoundBox();
      }
   }
   o._selectObject = null;
   o._selectRenderables.clear();
}
MO.FDsSpaceCanvas_selectLayers = function FDsSpaceCanvas_selectLayers(){
   var o = this;
   o.selectNone();
   var layers = o._activeSpace.layers();
   var layerCount = layers.count();
   for(var i = 0; i < layerCount; i++){
      var layer = layers.at(i);
      o.innerSelectLayer(layer);
   }
}
MO.FDsSpaceCanvas_selectLayer = function FDsSpaceCanvas_selectLayer(layer){
   var o = this;
   o.selectNone();
   o._selectObject = layer;
   o.innerSelectLayer(layer);
}
MO.FDsSpaceCanvas_selectDisplay = function FDsSpaceCanvas_selectDisplay(display){
   var o = this;
   o.selectNone();
   o._selectObject = display;
   o.innerSelectDisplay(display);
}
MO.FDsSpaceCanvas_selectMaterial = function FDsSpaceCanvas_selectMaterial(material){
   var o = this;
   o.selectNone();
   o._selectObject = material;
   var display = material._display;
   var sprite = display._sprite;
   var renderables = sprite.renderables();
   var count = renderables.count();
   for(var i = 0; i < count; i++){
      var renderable = renderables.at(i);
      if(renderable.material() == material){
         o.innerSelectRenderable(renderable);
      }
   }
}
MO.FDsSpaceCanvas_selectRenderable = function FDsSpaceCanvas_selectRenderable(renderable){
   var o = this;
   o.selectNone();
   if(renderable){
      o.innerSelectRenderable(renderable);
      o._frameSet._catalogContent.showObject(renderable);
   }
}
MO.FDsSpaceCanvas_switchPlay = function FDsSpaceCanvas_switchPlay(flag){
   var o = this;
   var space = o._activeSpace;
   var displays = space.allDisplays();
   var count = displays.count();
   for(var i = 0; i < count; i++){
      var display = displays.at(i);
      if(MO.Class.isClass(display, MO.FE3dSceneDisplay)){
         var sprite = display._sprite;
         sprite._optionPlay = flag;
         display._optionPlay = flag;
      }
   }
}
MO.FDsSpaceCanvas_switchMovie = function FDsSpaceCanvas_switchMovie(flag){
   var o = this;
   var space = o._activeSpace;
   var displays = space.allDisplays();
   var count = displays.count();
   for(var i = 0; i < count; i++){
      var display = displays.at(i);
      if(MO.Class.isClass(display, MO.FE3dSceneDisplay)){
         var sprite = display._sprite;
         if(sprite){
            sprite._optionMovie = flag;
         }
         display._optionMovie = flag;
      }
   }
}
MO.FDsSpaceCanvas_dispose = function FDsSpaceCanvas_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsSpaceDesignCanvas = function FDsSpaceDesignCanvas(o){
   o = MO.Class.inherits(this, o, MO.FDsSpaceCanvas);
   o._templateMatrix       = null;
   o._templateRenderable   = null;
   o._templateFace         = null;
   o._templateTranslation  = null;
   o._templateRotation     = null;
   o._templateScale        = null;
   o._templateViewScale    = 0.05;
   o.onBuild               = MO.FDsSpaceDesignCanvas_onBuild;
   o.onDataLoaded          = MO.FDsSpaceDesignCanvas_onDataLoaded;
   o.construct             = MO.FDsSpaceDesignCanvas_construct;
   o.selectRenderable      = MO.FDsSpaceDesignCanvas_selectRenderable;
   o.refreshOperationFace  = MO.FDsSpaceDesignCanvas_refreshOperationFace;
   o.switchMode            = MO.FDsSpaceDesignCanvas_switchMode;
   o.dispose               = MO.FDsSpaceDesignCanvas_dispose;
   return o;
}
MO.FDsSpaceDesignCanvas_onBuild = function FDsSpaceDesignCanvas_onBuild(p){
   var o = this;
   o.__base.FDsSpaceCanvas.onBuild.call(o, p);
   var templateConsole = MO.Console.find(MO.FE3dTemplateConsole);
   var templateTranslation = o._templateTranslation = templateConsole.allocByCode(o, 'com.design.translation');
   templateTranslation.addLoadListener(o, o.onDataLoaded);
   var templateRotation = o._templateRotation = templateConsole.allocByCode(o, 'com.design.rotation');
   templateRotation.addLoadListener(o, o.onDataLoaded);
   var templateScale = o._templateScale = templateConsole.allocByCode(o, 'com.design.scale');
   templateScale.addLoadListener(o, o.onDataLoaded);
}
MO.FDsSpaceDesignCanvas_onDataLoaded = function FDsSpaceDesignCanvas_onDataLoaded(p){
   var o = this;
   var context = o._graphicContext;
   var space = o._activeSpace;
   var templateTranslation = o._templateTranslation;
   if(!templateTranslation.testReady()){
      return;
   }
   var templateRotation = o._templateRotation;
   if(!templateRotation.testReady()){
      return;
   }
   var templateScale = o._templateScale;
   if(!templateScale.testReady()){
      return;
   }
   if(!space.testReady()){
      return;
   }
   var translationSprite = o._translationSprite = o._templateTranslation.sprite();
   translationSprite.setVisible(false);
   var rotationSprite = o._rotationSprite = o._templateRotation.sprite();
   rotationSprite.setVisible(false);
   var scaleSprite = o._scaleSprite = o._templateScale.sprite();
   scaleSprite.setVisible(false);
   var layer = o._uiLayer = MO.Class.create(MO.FDisplayUiLayer);
   layer.selectTechnique(context, MO.FE3dControlTechnique);
   layer.pushDisplay(translationSprite);
   layer.pushDisplay(rotationSprite);
   layer.pushDisplay(scaleSprite);
   space.registerLayer('ui', layer);
   o.reloadRegion()
   o.processLoadListener(o);
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsSpaceDesignCanvas_onMouseCaptureStart = function FDsSpaceDesignCanvas_onMouseCaptureStart(event){
   var o = this;
   o.__base.FDsSpaceCanvas.onMouseCaptureStart.call(o, event)
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var region = space.region();
   var selectTechnique = MO.Console.find(MO.FG3dTechniqueConsole).find(o._graphicContext, FG3dSelectTechnique);
   var renderable = selectTechnique.test(region, event.offsetX, event.offsetY);
   o.selectRenderable(renderable);
   if(renderable){
      var display = renderable.display();
      o._captureMatrix.assign(display.matrix());
   }
}
MO.FDsSpaceDesignCanvas_onMouseCapture = function FDsSpaceDesignCanvas_onMouseCapture(event){
   var o = this;
   o.__base.FDsSpaceCanvas.onMouseCapture.call(o, event);
}
MO.FDsSpaceDesignCanvas_onMouseCaptureStop = function FDsSpaceDesignCanvas_onMouseCaptureStop(event){
   var o = this;
   o.__base.FDsSpaceCanvas.onMouseCaptureStop.call(o, event);
}
MO.FDsSpaceDesignCanvas_construct = function FDsSpaceDesignCanvas_construct(){
   var o = this;
   o.__base.FDsSpaceCanvas.construct.call(o);
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
}
MO.FDsSpaceDesignCanvas_selectRenderable = function FDsSpaceDesignCanvas_selectRenderable(renderable){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   o.selectNone();
   if(renderable){
      o.innerSelectRenderable(renderable);
      o._frameSet._catalogContent.showObject(renderable);
   }
}
MO.FDsSpaceDesignCanvas_refreshOperationFace = function FDsSpaceDesignCanvas_refreshOperationFace(){
   var o = this;
   var modeCd = o._canvasModeCd;
   var hasRenderable = !o._selectRenderables.isEmpty();
   var templateTranslation = o._translationSprite;
   var templateRotation = o._rotationSprite;
   var templateScale = o._scaleSprite;
   o._templateFace = null;
   switch(modeCd){
      case EDsCanvasMode.Translate:
         templateTranslation.setVisible(hasRenderable);
         templateRotation.setVisible(false);
         templateScale.setVisible(false);
         o._templateFace = templateTranslation;
         break;
      case EDsCanvasMode.Rotation:
         templateTranslation.setVisible(false);
         templateRotation.setVisible(hasRenderable);
         templateScale.setVisible(false);
         o._templateFace = templateScale;
         break;
      case EDsCanvasMode.Scale:
         templateTranslation.setVisible(false);
         templateRotation.setVisible(false);
         templateScale.setVisible(hasRenderable);
         o._templateFace = templateScale;
         break;
   }
   var templateFace = o._templateFace;
   if(hasRenderable && templateFace){
      var renderable = o._selectRenderables.first();
      var display = renderable.display();
      var matrix = templateFace.matrix();
      matrix.assign(display.matrix());
      matrix.update();
   }
}
MO.FDsSpaceDesignCanvas_switchMode = function FDsSpaceDesignCanvas_switchMode(modeCd){
   var o = this;
   o._canvasModeCd = modeCd;
}
MO.FDsSpaceDesignCanvas_dispose = function FDsSpaceDesignCanvas_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsSpaceCanvas.dispose.call(o);
}
MO.FDsStage = function FDsStage(o){
   o = MO.Class.inherits(this, o, MO.FE3dStage);
   o._mapLayer    = MO.Class.register(o, new MO.AGetter('_mapLayer'));
   o._spriteLayer = MO.Class.register(o, new MO.AGetter('_spriteLayer'));
   o._faceLayer   = MO.Class.register(o, new MO.AGetter('_faceLayer'));
   o.construct    = MO.FDsStage_construct;
   o.active       = MO.FDsStage_active;
   o.deactive     = MO.FDsStage_deactive;
   return o;
}
MO.FDsStage_construct = function FDsStage_construct(){
   var o = this;
   o.__base.FE3dStage.construct.call(o);
   var layer = o._mapLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('MapLayer', layer);
   var layer = o._spriteLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('SpriteLayer', layer);
   var layer = o._faceLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('FaceLayer', layer);
}
MO.FDsStage_active = function FDsStage_active(){
   var o = this;
   o.__base.FE3dStage.active.call(o);
}
MO.FDsStage_deactive = function FDsStage_deactive(){
   var o = this;
   o.__base.FE3dStage.deactive.call(o);
}
