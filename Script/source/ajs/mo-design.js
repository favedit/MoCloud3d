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
MO.FDsModelRenderable = function FDsModelRenderable(o){
   o = MO.Class.inherits(this, o, MO.FE3dModelRenderable, MO.MDsBoundBox);
   o._optionSelected = false;
   o.filterDrawables = MO.FDsModelRenderable_filterDrawables;
   return o;
}
MO.FDsModelRenderable_filterDrawables = function FDsModelRenderable_filterDrawables(region){
   var o = this;
   var result = o.__base.FE3dSceneDisplayRenderable.filterDrawables.call(o, region);
   if(result){
      if(o._boundVisible){
         region.pushRenderable(o._boundBox);
      }
   }
   return result;
}
MO.FDsSceneDisplay = function FDsSceneDisplay(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneDisplay);
   return o;
}
MO.FDsSceneLayer = function FDsSceneLayer(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneLayer);
   return o;
}
MO.FDsSceneRenderable = function FDsSceneRenderable(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneDisplayRenderable, MO.MDsBoundBox);
   o._optionSelected = false;
   o.filterDrawables = MO.FDsSceneRenderable_filterDrawables;
   return o;
}
MO.FDsSceneRenderable_filterDrawables = function FDsSceneRenderable_filterDrawables(region){
   var o = this;
   var result = o.__base.FE3dSceneDisplayRenderable.filterDrawables.call(o, region);
   if(result){
      if(o._boundVisible){
         region.pushRenderable(o._boundBox);
      }
   }
   return result;
}
MO.FDrAbsResourceConsole = function FDrAbsResourceConsole(o){
   o = MO.Class.inherits(this, o, MO.FConsole);
   o._scopeCd       = MO.EScope.Local;
   o._serviceCode   = null;
   o._classUnit     = null;
   o._resources     = null;
   o.construct      = MO.FDrAbsResourceConsole_construct;
   o.makeServiceUrl = MO.FDrAbsResourceConsole_makeServiceUrl;
   o.loadResource   = MO.FDrAbsResourceConsole_loadResource;
   o.doList         = MO.FDrAbsResourceConsole_doList;
   o.doQuery        = MO.FDrAbsResourceConsole_doQuery;
   o.doCreate       = MO.FDrAbsResourceConsole_doCreate;
   o.doUpdate       = MO.FDrAbsResourceConsole_doUpdate;
   o.doDelete       = MO.FDrAbsResourceConsole_doDelete;
   return o;
}
MO.FDrAbsResourceConsole_construct = function FDrAbsResourceConsole_construct(){
   var o = this;
   o.__base.FConsole.construct.call(o);
   o._resources = new MO.TDictionary();
}
MO.FDrAbsResourceConsole_makeServiceUrl = function FDrAbsResourceConsole_makeServiceUrl(action){
   var o = this;
   var url = MO.Window.Browser.hostPath('/' + o._serviceCode + '.ws?action=' + action);
   if(MO.Runtime.isDebug()){
      url += '&date=' + MO.Lang.Date.format();
   }
   return url;
}
MO.FDrAbsResourceConsole_loadResource = function FDrAbsResourceConsole_loadResource(xconfig){
   var o = this;
   var guid = xconfig.get('guid');
   var resource = o._resources.get(guid);
   if(!resource){
      resource = MO.Class.create(o._classUnit);
      o._resources.set(guid, resource);
   }
   resource.loadConfig(xconfig);
   return resource;
}
MO.FDrAbsResourceConsole_doList = function FDrAbsResourceConsole_doList(search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=list';
   if(!MO.Lang.String.isEmpty(search)){
      url += '&search=' + search;
   }
   if(!MO.Lang.String.isEmpty(order)){
      url += '&order=' + order;
   }
   if(pageSize >= 0){
      url += '&page_size=' + pageSize;
   }
   if(page >= 0){
      url += '&page=' + page;
   }
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrAbsResourceConsole_doQuery = function FDrAbsResourceConsole_doQuery(guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrAbsResourceConsole_doCreate = function FDrAbsResourceConsole_doCreate(resource){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'create');
   var xdata = xroot.create(resource.classCode());
   resource.saveConfig(xdata);
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._serviceCode + '.ws', xdocument);
   return connection;
}
MO.FDrAbsResourceConsole_doUpdate = function FDrAbsResourceConsole_doUpdate(resource){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'update');
   var xdata = xroot.create(resource.classCode());
   resource.saveConfig(xdata);
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._serviceCode + '.ws', xdocument);
   return connection;
}
MO.FDrAbsResourceConsole_doDelete = function FDrAbsResourceConsole_doDelete(guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=delete&guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrBitmap = function FDrBitmap(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode    = 'Bitmap';
   o._sizeWidth    = MO.Class.register(o, new MO.AGetSet('_sizeWidth'), 0);
   o._sizeHeight   = MO.Class.register(o, new MO.AGetSet('_sizeHeight'), 0);
   o.loadConfig    = MO.FDrBitmap_loadConfig;
   o.saveConfig    = MO.FDrBitmap_saveConfig;
   return o;
}
MO.FDrBitmap_loadConfig = function FDrBitmap_loadConfig(xconfig){
   var o = this;
   o.__base.FDrResource.loadConfig.call(o, xconfig);
   o._sizeWidth = xconfig.getInteger('size_width');
   o._sizeHeight = xconfig.getInteger('size_height');
}
MO.FDrBitmap_saveConfig = function FDrBitmap_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.set('size_width', o._sizeWidth);
   xconfig.set('size_height', o._sizeHeight);
}
MO.FDrBitmapConsole = function FDrBitmapConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.bitmap';
   o._classUnit   = MO.FDrBitmap;
   o.query        = MO.FDrBitmapConsole_query;
   o.update       = MO.FDrBitmapConsole_update;
   return o;
}
MO.FDrBitmapConsole_query = function FDrBitmapConsole_query(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   var xroot = MO.Console.find(MO.FXmlConsole).sendSync(url);
   var nodeCount = xroot.nodeCount();
   for(var n = 0; n < nodeCount; n++){
      var xbitmap = xroot.node(n);
      if(xbitmap.isName('Bitmap')){
         o.loadResource(xbitmap);
      }
   }
   return o._resources.get(guid);
}
MO.FDrBitmapConsole_update = function FDrBitmapConsole_update(xconfig){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=update';
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrMaterial = function FDrMaterial(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Material';
   o.loadConfig = MO.FDrMaterial_loadConfig;
   o.saveConfig = MO.FDrMaterial_saveConfig;
   return o;
}
MO.FDrMaterial_loadConfig = function FDrMaterial_loadConfig(xconfig){
   var o = this;
   o.__base.FDrResource.loadConfig.call(o, xconfig);
}
MO.FDrMaterial_saveConfig = function FDrMaterial_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
}
MO.FDrMaterialConsole = function FDrMaterialConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.material';
   o._classUnit   = MO.FDrMaterial;
   o.query        = MO.FDrMaterialConsole_query;
   o.update       = MO.FDrMaterialConsole_update;
   o.deleteBitmap = MO.FDrMaterialConsole_deleteBitmap;
   return o;
}
MO.FDrMaterialConsole_query = function FDrMaterialConsole_query(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   var xroot = MO.Console.find(MO.FXmlConsole).sendSync(url);
   var nodeCount = xroot.nodeCount();
   for(var n = 0; n < nodeCount; n++){
      var xbitmap = xroot.node(n);
      if(xbitmap.isName('Material')){
         o.loadResource(xbitmap);
      }
   }
   return o._resources.get(guid);
}
MO.FDrMaterialConsole_update = function FDrMaterialConsole_update(xconfig){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=update';
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrMaterialConsole_deleteBitmap = function FDrMaterialConsole_deleteBitmap(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=deleteBitmap&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrMesh = function FDrMesh(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Mesh';
   return o;
}
MO.FDrMeshConsole = function FDrMeshConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.mesh';
   o.update       = MO.FDrMeshConsole_update;
   return o;
}
MO.FDrMeshConsole_update = function FDrMeshConsole_update(config){
   var o = this;
   var url = MO.RBrowser.hostPath('/' + o._serviceCode + '.ws?action=update&date=' + RDate.format());
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, config);
}
MO.FDrModel = function FDrModel(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Model';
   return o;
}
MO.FDrModelConsole = function FDrModelConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.model';
   o.update       = MO.FDrModelConsole_update;
   return o;
}
MO.FDrModelConsole_update = function FDrModelConsole_update(config){
   var o = this;
   var url = MO.RBrowser.hostPath('/' + o._serviceCode + '.ws?action=updateContent&date=' + RDate.format());
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, config);
}
MO.FDrObject = function FDrObject(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._guid       = MO.Class.register(o, new MO.AGetSet('_guid'));
   o._code       = MO.Class.register(o, new MO.AGetSet('_code'));
   o._label      = MO.Class.register(o, new MO.AGetSet('_label'));
   o.unserialize = MO.FDrObject_unserialize;
   o.saveConfig  = MO.FDrObject_saveConfig;
   return o;
}
MO.FDrObject_unserialize = function FDrObject_unserialize(p){
   var o = this;
   o._guid = p.readString();
   o._code = p.readString();
   o._label = p.readString();
}
MO.FDrObject_saveConfig = function FDrObject_saveConfig(xconfig){
   var o = this;
   xconfig.setNvl('guid', o._guid);
   xconfig.setNvl('code', o._code);
   xconfig.setNvl('label', o._label);
}
MO.FDrProject = function FDrProject(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode   = 'Project';
   o._projectGuid = null;
   o.saveConfig   = MO.FDrProject_saveConfig;
   return o;
}
MO.FDrProject_saveConfig = function FDrProject_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.setNvl('project_guid', o._projectGuid);
}
MO.FDrProjectConsole = function FDrProjectConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.solution.project';
   return o;
}
MO.FDrResource = function FDrResource(o){
   o = MO.Class.inherits(this, o, MO.FDrObject);
   o._classCode = MO.Class.register(o, new MO.AGetter('_classCode'));
   o.loadConfig = MO.FDrResource_loadConfig;
   o.saveConfig = MO.FDrResource_saveConfig;
   return o;
}
MO.FDrResource_loadConfig = function FDrResource_loadConfig(xconfig){
   var o = this;
   o._guid = xconfig.get('guid');
   o._code = xconfig.get('code');
   o._label = xconfig.get('label');
}
MO.FDrResource_saveConfig = function FDrResource_saveConfig(xconfig){
   var o = this;
   xconfig.setName(o._classCode);
   xconfig.set('guid', o._guid);
   xconfig.set('code', o._code);
   xconfig.set('label', o._label);
}
MO.FDrResourceConsole = function FDrResourceConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode   = 'cloud.resource';
   o._catalogCode   = 'cloud.resource.catalog';
   o._resources     = null;
   o.construct      = MO.FDrResourceConsole_construct;
   o.doList         = MO.FDrResourceConsole_doList;
   o.doShare        = MO.FDrResourceConsole_doShare;
   o.doDelete       = MO.FDrResourceConsole_doDelete;
   o.doListShare    = MO.FDrResourceConsole_doListShare;
   o.doFolderCreate = MO.FDrResourceConsole_doFolderCreate;
   o.doFolderUpdate = MO.FDrResourceConsole_doFolderUpdate;
   o.doFolderDelete = MO.FDrResourceConsole_doFolderDelete;
   return o;
}
MO.FDrResourceConsole_construct = function FDrResourceConsole_construct(){
   var o = this;
   o.__base.FDrAbsResourceConsole.construct.call(o);
   o._resources = new MO.TDictionary();
}
MO.FDrResourceConsole_doList = function FDrResourceConsole_doList(typeCd, search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=list&type_cd=' + typeCd + '&serach=' + search + '&order=' + order + '&page_size=' + pageSize + '&page=' + page;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doShare = function FDrResourceConsole_doShare(guid, shareCd){
   var o = this;
   var url = o.makeServiceUrl('share') + '&guid=' + guid + '&share_cd=' + shareCd;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doDelete = function FDrResourceConsole_doDelete(typeCd, guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=delete&type_cd=' + typeCd + '&guid=' + guid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doListShare = function FDrResourceConsole_doListShare(typeCd, search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=listShare&type_cd=' + typeCd + '&serach=' + search + '&order=' + order + '&page_size=' + pageSize + '&page=' + page;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doFolderCreate = function FDrResourceConsole_doFolderCreate(parentGuid, code, label){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'create');
   var xfolder = xroot.create('Folder');
   xfolder.set('parent_guid', parentGuid);
   xfolder.set('code', code);
   xfolder.set('label', label);
   return MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._catalogCode + '.ws', xdocument);
}
MO.FDrResourceConsole_doFolderUpdate = function FDrResourceConsole_doFolderUpdate(guid, code, label){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'update');
   var xfolder = xroot.create('Folder');
   xfolder.set('guid', guid);
   xfolder.set('code', code);
   xfolder.set('label', label);
   return MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._catalogCode + '.ws', xdocument);
}
MO.FDrResourceConsole_doFolderDelete = function FDrResourceConsole_doFolderDelete(guid){
   var o = this;
   var url = '/' + o._catalogCode + '.ws?action=delete&guid=' + guid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrScene = function FDrScene(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode   = 'Scene';
   o._projectGuid = null;
   o.saveConfig   = MO.FDrScene_saveConfig;
   return o;
}
MO.FDrScene_saveConfig = function FDrScene_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.setNvl('project_guid', o._projectGuid);
}
MO.FDrSceneConsole = function FDrSceneConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.scene';
   o.createCamera = MO.FDrSceneConsole_createCamera;
   o.createLayer  = MO.FDrSceneConsole_createLayer;
   o.createSprite = MO.FDrSceneConsole_createSprite;
   o.createMovie  = MO.FDrSceneConsole_createMovie;
   o.copyNode     = MO.FDrSceneConsole_copyNode;
   o.deleteNode   = MO.FDrSceneConsole_deleteNode;
   o.update       = MO.FDrSceneConsole_update;
   return o;
}
MO.FDrSceneConsole_createCamera = function FDrSceneConsole_createCamera(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createCamera');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createLayer = function FDrSceneConsole_createLayer(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createLayer');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createSprite = function FDrSceneConsole_createSprite(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createSprite');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createMovie = function FDrSceneConsole_createMovie(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMovie');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_copyNode = function FDrSceneConsole_copyNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('copyNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrSceneConsole_deleteNode = function FDrSceneConsole_deleteNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('deleteNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrSceneConsole_update = function FDrSceneConsole_update(xconfig){
   var o = this;
   var url = o.makeServiceUrl('updateContent') + '&date=' + MO.Lang.Date.format();
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplate = function FDrTemplate(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Template';
   return o;
}
MO.FDrTemplateConsole = function FDrTemplateConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode   = 'cloud.resource.template';
   o.selectMaterial = MO.FDrTemplateConsole_selectMaterial;
   o.createDisplay  = MO.FDrTemplateConsole_createDisplay;
   o.update         = MO.FDrTemplateConsole_update;
   return o;
}
MO.FDrTemplateConsole_selectMaterial = function FDrTemplateConsole_selectMaterial(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMaterial');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplateConsole_createDisplay = function FDrTemplateConsole_createDisplay(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createDisplay');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplateConsole_update = function FDrTemplateConsole_update(xconfig){
   var o = this;
   var url = o.makeServiceUrl('updateContent') + '&date=' + MO.Lang.Date.format();
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDsCommonAnimationPropertyFrame = function FDsCommonAnimationPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible         = false;
   o._activeSpace     = null;
   o._activeAnimation = null;
   o._controlGuid     = null;
   o._controlCode     = null;
   o._controlLabel    = null;
   o.onBuilded        = MO.FDsCommonAnimationPropertyFrame_onBuilded;
   o.onDataChanged    = MO.FDsCommonAnimationPropertyFrame_onDataChanged;
   o.construct        = MO.FDsCommonAnimationPropertyFrame_construct;
   o.loadObject       = MO.FDsCommonAnimationPropertyFrame_loadObject;
   o.dispose          = MO.FDsCommonAnimationPropertyFrame_dispose;
   return o;
}
MO.FDsCommonAnimationPropertyFrame_construct = function FDsCommonAnimationPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonAnimationPropertyFrame_onBuilded = function FDsCommonAnimationPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
   o._controlPlayRate.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonAnimationPropertyFrame_onDataChanged = function FDsCommonAnimationPropertyFrame_onDataChanged(p){
   var o = this;
   var animation = o._activeAnimation;
   var resource = animation.resource();
   resource.setCode(o._controlCode.get());
   resource.setLabel(o._controlLabel.get());
   resource._playRate = o._controlPlayRate.get();
   animation.reloadResource();
}
MO.FDsCommonAnimationPropertyFrame_loadObject = function FDsCommonAnimationPropertyFrame_loadObject(space, animation){
   var o = this;
   var resource = animation.resource();
   o._activeSpace = space;
   o._activeAnimation = animation;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._controlPlayRate.set(resource.playRate());
}
MO.FDsCommonAnimationPropertyFrame_dispose = function FDsCommonAnimationPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonCameraFrame = function FDsCommonCameraFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._workspace        = null;
   o._camera           = null;
   o._controlPosition  = null;
   o._controlDirection = null;
   o.construct         = MO.FDsCommonCameraFrame_construct;
   o.loadObject        = MO.FDsCommonCameraFrame_loadObject;
   o.dispose           = MO.FDsCommonCameraFrame_dispose;
   return o;
}
MO.FDsCommonCameraFrame_construct = function FDsCommonCameraFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonCameraFrame_loadObject = function FDsCommonCameraFrame_loadObject(s, c){
   var o = this;
   var r = c._resource;
   o._camera = c;
   o._controlPosition.set(c.position());
   o._controlDirection.set(c.direction());
}
MO.FDsCommonCameraFrame_dispose = function FDsCommonCameraFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonCameraPropertyFrame = function FDsCommonCameraPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible          = false;
   o._workspace        = null;
   o._activeSpace      = null;
   o._activeCamera     = null;
   o._controlGuid      = null;
   o._controlCode      = null;
   o._controlLabel     = null;
   o._controlPosition  = null;
   o._controlDirection = null;
   o.onBuilded         = MO.FDsCommonCameraPropertyFrame_onBuilded;
   o.onDataChanged     = MO.FDsCommonCameraPropertyFrame_onDataChanged;
   o.construct         = MO.FDsCommonCameraPropertyFrame_construct;
   o.loadObject        = MO.FDsCommonCameraPropertyFrame_loadObject;
   o.dispose           = MO.FDsCommonCameraPropertyFrame_dispose;
   return o;
}
MO.FDsCommonCameraPropertyFrame_onBuilded = function FDsCommonCameraPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlPosition.addDataChangedListener(o, o.onDataChanged);
   o._controlDirection.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonCameraPropertyFrame_onDataChanged = function FDsCommonCameraPropertyFrame_onDataChanged(p){
   var o = this;
   var camera = o._activeCamera;
   var resource = camera.resource();
   resource.position().assign(o._controlPosition.get());
   resource.direction().assign(o._controlDirection.get());
   camera.position().assign(resource.position());
   camera.direction().assign(resource.direction());
   camera.update();
}
MO.FDsCommonCameraPropertyFrame_construct = function FDsCommonCameraPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonCameraPropertyFrame_loadObject = function FDsCommonCameraPropertyFrame_loadObject(space, camera){
   var o = this;
   var resource = camera.resource();
   o._activeSpace = space;
   o._activeCamera = camera;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._controlPosition.set(camera.position());
   o._controlDirection.set(camera.direction());
   resource.position().assign(camera.position());
   resource.direction().assign(camera.direction());
}
MO.FDsCommonCameraPropertyFrame_dispose = function FDsCommonCameraPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonDisplayDialog = function FDsCommonDisplayDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.DisplayDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonDisplayDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonDisplayDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonDisplayDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonDisplayDialog_onCancelClick;
   o.construct             = MO.FDsCommonDisplayDialog_construct;
   o.setSpace              = MO.FDsCommonDisplayDialog_setSpace;
   o.setDisplayLabel       = MO.FDsCommonDisplayDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonDisplayDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonDisplayDialog_setContentLabel;
   o.dispose               = MO.FDsCommonDisplayDialog_dispose;
   return o;
}
MO.FDsCommonDisplayDialog_onBuilded = function FDsCommonDisplayDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlSpaceGuid.setEditAble(false);
   o._controlSpaceLabel.setEditAble(false);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonDisplayDialog_onConfirmLoad = function FDsCommonDisplayDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonDisplayDialog_onConfirmClick = function FDsCommonDisplayDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new TXmlNode('Action');
   var xsprite = xaction.create('Display');
   xsprite.set('space_guid', o._spaceGuid);
   xsprite.set('code', o._controlCode.get());
   xsprite.set('label', o._controlLabel.get());
   xsprite.set('model_guid', o._controlModelGuid.get());
   xsprite.set('model_code', o._controlModelCode.get());
   var connection = MO.Console.find(FDrTemplateConsole).createDisplay(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonDisplayDialog_onCancelClick = function FDsCommonDisplayDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonDisplayDialog_construct = function FDsCommonDisplayDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonDisplayDialog_setSpace = function FDsCommonDisplayDialog_setSpace(space){
   var o = this;
   var resource = space.resource();
   o._controlSpaceGuid.set(resource.guid());
   o._controlSpaceLabel.set(resource.makeLabel());
}
MO.FDsCommonDisplayDialog_setDisplayLabel = function FDsCommonDisplayDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonDisplayDialog_setContentCode = function FDsCommonDisplayDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonDisplayDialog_setContentLabel = function FDsCommonDisplayDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonDisplayDialog_dispose = function FDsCommonDisplayDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonDisplayFrame = function FDsCommonDisplayFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeSpace   = null;
   o._activeDisplay = null;
   o.onBuilded      = MO.FDsCommonDisplayFrame_onBuilded;
   o.onDataChanged  = MO.FDsCommonDisplayFrame_onDataChanged;
   o.construct      = MO.FDsCommonDisplayFrame_construct;
   o.loadObject     = MO.FDsCommonDisplayFrame_loadObject;
   o.dispose        = MO.FDsCommonDisplayFrame_dispose;
   return o;
}
MO.FDsCommonDisplayFrame_onBuilded = function FDsCommonDisplayFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlTranslate.addDataChangedListener(o, o.onDataChanged);
   o._controlRotation.addDataChangedListener(o, o.onDataChanged);
   o._controlScale.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonDisplayFrame_onDataChanged = function FDsCommonDisplayFrame_onDataChanged(p){
   var o = this;
   var display = o._activeDisplay;
   var resource = display.resource();
   var matrix = resource.matrix();
   var value = o._controlTranslate.get();
   matrix.setTranslate(value.x, value.y, value.z);
   var value = o._controlRotation.get();
   matrix.setRotation(value.x, value.y, value.z);
   var value = o._controlScale.get();
   matrix.setScale(value.x, value.y, value.z);
   matrix.update();
   display.matrix().assign(matrix);
}
MO.FDsCommonDisplayFrame_construct = function FDsCommonDisplayFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonDisplayFrame_loadObject = function FDsCommonDisplayFrame_loadObject(space, display){
   var o = this;
   var resource = display.resource();
   o._activeSpace = space;
   o._activeDisplay = display;
   var matrix = resource.matrix();
   o._controlTranslate.set(matrix.tx, matrix.ty, matrix.tz);
   o._controlRotation.set(matrix.rx, matrix.ry, matrix.rz);
   o._controlScale.set(matrix.sx, matrix.sy, matrix.sz);
}
MO.FDsCommonDisplayFrame_dispose = function FDsCommonDisplayFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonDisplayPropertyFrame = function FDsCommonDisplayPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible        = false;
   o._workspace      = null;
   o._activeDisplay  = null;
   o._activeResource = null;
   o._controlGuid    = null;
   o._controlCode    = null;
   o._controlLabel   = null;
   o._displayFrame   = null;
   o._materialFrame  = null;
   o.onBuilded       = MO.FDsCommonDisplayPropertyFrame_onBuilded;
   o.onDataChanged   = MO.FDsCommonDisplayPropertyFrame_onDataChanged;
   o.construct       = MO.FDsCommonDisplayPropertyFrame_construct;
   o.loadObject      = MO.FDsCommonDisplayPropertyFrame_loadObject;
   o.dispose         = MO.FDsCommonDisplayPropertyFrame_dispose;
   return o;
}
MO.FDsCommonDisplayPropertyFrame_onBuilded = function FDsCommonDisplayPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonDisplayPropertyFrame_onDataChanged = function FDsCommonDisplayPropertyFrame_onDataChanged(p){
   var o = this;
   var r = o._activeResource;
   r._code = o._controlCode.get();
   r._label = o._controlLabel.get();
}
MO.FDsCommonDisplayPropertyFrame_construct = function FDsCommonDisplayPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonDisplayPropertyFrame_loadObject = function FDsCommonDisplayPropertyFrame_loadObject(space, display){
   var o = this;
   var resource = display._resource;
   o._activeSpace = space;
   o._activeDisplay = display;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._frameDisplay.loadObject(space, display);
}
MO.FDsCommonDisplayPropertyFrame_dispose = function FDsCommonDisplayPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonLayerDialog = function FDsCommonLayerDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.LayerDialog';
   o._displayModeCd        = null;
   o._controlSpaceGuid     = null;
   o._controlSpaceLabel    = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonLayerDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonLayerDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonLayerDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonLayerDialog_onCancelClick;
   o.construct             = MO.FDsCommonLayerDialog_construct;
   o.setSpace              = MO.FDsCommonLayerDialog_setSpace;
   o.setDisplayLabel       = MO.FDsCommonLayerDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonLayerDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonLayerDialog_setContentLabel;
   o.dispose               = MO.FDsCommonLayerDialog_dispose;
   return o;
}
MO.FDsCommonLayerDialog_onBuilded = function FDsCommonLayerDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlSpaceGuid.setEditAble(false);
   o._controlSpaceLabel.setEditAble(false);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonLayerDialog_onConfirmLoad = function FDsCommonLayerDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonLayerDialog_onConfirmClick = function FDsCommonLayerDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new TXmlNode('Action');
   var xsprite = xaction.create('Layer');
   xsprite.set('space_guid', o._spaceGuid);
   xsprite.set('code', o._controlCode.get());
   xsprite.set('label', o._controlLabel.get());
   var connection = MO.Console.find(FDrSceneConsole).createLayer(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonLayerDialog_onCancelClick = function FDsCommonLayerDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonLayerDialog_construct = function FDsCommonLayerDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonLayerDialog_setSpace = function FDsCommonLayerDialog_setSpace(space){
   var o = this;
   var resource = space.resource();
   o._controlSpaceGuid.set(resource.guid());
   o._controlSpaceLabel.set(resource.makeLabel());
}
MO.FDsCommonLayerDialog_setDisplayLabel = function FDsCommonLayerDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonLayerDialog_setContentCode = function FDsCommonLayerDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonLayerDialog_setContentLabel = function FDsCommonLayerDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonLayerDialog_dispose = function FDsCommonLayerDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonLayerPropertyFrame = function FDsCommonLayerPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible       = false;
   o._workspace     = null;
   o._layer         = null;
   o._layerResource = null;
   o._controlGuid   = null;
   o._controlCode   = null;
   o._controlLabel  = null;
   o.onBuilded      = MO.FDsCommonLayerPropertyFrame_onBuilded;
   o.onDataChanged  = MO.FDsCommonLayerPropertyFrame_onDataChanged;
   o.construct      = MO.FDsCommonLayerPropertyFrame_construct;
   o.loadObject     = MO.FDsCommonLayerPropertyFrame_loadObject;
   o.dispose        = MO.FDsCommonLayerPropertyFrame_dispose;
   return o;
}
MO.FDsCommonLayerPropertyFrame_construct = function FDsCommonLayerPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonLayerPropertyFrame_onBuilded = function FDsCommonLayerPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
   o._controlTypeCd.addDataChangedListener(o, o.onDataChanged);
   o._controlTransformCd.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonLayerPropertyFrame_onDataChanged = function FDsCommonLayerPropertyFrame_onDataChanged(p){
   var o = this;
   var r = o._layerResource;
   r.setCode(o._controlCode.get());
   r.setLabel(o._controlLabel.get());
   r.setTypeCd(o._controlTypeCd.get());
   r.setTransformCd(o._controlTransformCd.get());
}
MO.FDsCommonLayerPropertyFrame_loadObject = function FDsCommonLayerPropertyFrame_loadObject(s, l){
   var o = this;
   var r = l.resource();
   o._layer = l;
   o._layerResource = r;
   o._controlGuid.set(r.guid());
   o._controlCode.set(r.code());
   o._controlLabel.set(r.label());
   o._controlTypeCd.set(r.typeCd());
   o._controlTransformCd.set(r.transformCd());
}
MO.FDsCommonLayerPropertyFrame_dispose = function FDsCommonLayerPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonLightPropertyFrame = function FDsCommonLightPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible      = false;
   o._workspace    = null;
   o._activeSpace  = null;
   o._activeLight  = null;
   o._controlGuid  = null;
   o._controlCode  = null;
   o._controlLabel = null;
   o.construct     = MO.FDsCommonLightPropertyFrame_construct;
   o.loadObject    = MO.FDsCommonLightPropertyFrame_loadObject;
   o.dispose       = MO.FDsCommonLightPropertyFrame_dispose;
   return o;
}
MO.FDsCommonLightPropertyFrame_construct = function FDsCommonLightPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonLightPropertyFrame_loadObject = function FDsCommonLightPropertyFrame_loadObject(space, light){
   var o = this;
   var resource = light.resource();
   o._activeSpace = space;
   o._activeLight = light;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
}
MO.FDsCommonLightPropertyFrame_dispose = function FDsCommonLightPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonMaterial1Frame = function FDsCommonMaterial1Frame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeSpace           = null;
   o._activeMaterial        = null;
   o._controlOptionDouble   = null;
   o._controlEffectCode     = null;
   o._controlOptionAlpha    = null;
   o._controlAlphaBase      = null;
   o._controlAlphaRate      = null;
   o._controlOptionColor    = null;
   o._controlColorMin       = null;
   o._controlColorMax       = null;
   o._controlColorBalance   = null;
   o._controlColorRate      = null;
   o._controlOptionVertex   = null;
   o._controlVertexColor    = null;
   o._controlOptionAmbient  = null;
   o._controlAmbientColor   = null;
   o._controlOptionDiffuse  = null;
   o._controlDiffuseColor   = null;
   o._controlOptionSpecular = null;
   o._controlSpecularColor  = null;
   o._controlSpecularBase   = null;
   o._controlSpecularLevel  = null;
   o._controlOptionReflect  = null;
   o._controlReflectColor   = null;
   o._controlReflectMerge   = null;
   o._controlOptionEmissive = null;
   o._controlEmissiveColor  = null;
   o.onBuilded              = MO.FDsCommonMaterial1Frame_onBuilded;
   o.onOptionChanged        = MO.FDsCommonMaterial1Frame_onOptionChanged;
   o.onDataChanged          = MO.FDsCommonMaterial1Frame_onDataChanged;
   o.construct              = MO.FDsCommonMaterial1Frame_construct;
   o.loadObject             = MO.FDsCommonMaterial1Frame_loadObject;
   o.dispose                = MO.FDsCommonMaterial1Frame_dispose;
   return o;
}
MO.FDsCommonMaterial1Frame_onBuilded = function FDsCommonMaterial1Frame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlOptionDouble.addDataChangedListener(o, o.onDataChanged);
   o._controlEffectCode.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionAlpha.addDataChangedListener(o, o.onDataChanged);
   o._controlAlphaBase.addDataChangedListener(o, o.onDataChanged);
   o._controlAlphaRate.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionColor.addDataChangedListener(o, o.onOptionChanged);
   o._controlColorMin.addDataChangedListener(o, o.onDataChanged);
   o._controlColorMax.addDataChangedListener(o, o.onDataChanged);
   o._controlColorBalance.addDataChangedListener(o, o.onDataChanged);
   o._controlColorRate.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionVertex.addDataChangedListener(o, o.onOptionChanged);
   o._controlVertexColor.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionAmbient.addDataChangedListener(o, o.onOptionChanged);
   o._controlAmbientColor.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionDiffuse.addDataChangedListener(o, o.onOptionChanged);
   o._controlDiffuseColor.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionSpecular.addDataChangedListener(o, o.onOptionChanged);
   o._controlSpecularColor.addDataChangedListener(o, o.onDataChanged);
   o._controlSpecularBase.addDataChangedListener(o, o.onDataChanged);
   o._controlSpecularLevel.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionReflect.addDataChangedListener(o, o.onOptionChanged);
   o._controlReflectColor.addDataChangedListener(o, o.onDataChanged);
   o._controlReflectMerge.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionEmissive.addDataChangedListener(o, o.onOptionChanged);
   o._controlEmissiveColor.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonMaterial1Frame_onOptionChanged = function FDsCommonMaterial1Frame_onOptionChanged(p){
   var o = this;
   var space = o._activeSpace;
   var material = o._activeMaterial;
}
MO.FDsCommonMaterial1Frame_onDataChanged = function FDsCommonMaterial1Frame_onDataChanged(p){
   var o = this;
   var space = o._activeSpace;
   var material = o._activeMaterial;
   var materialResource = material.resource();
   var infoResource = materialResource.info();
   infoResource.optionDouble = o._controlOptionDouble.get();
   infoResource.effectCode = o._controlEffectCode.get();
   infoResource.optionAlpha = o._controlOptionAlpha.get();
   infoResource.alphaBase = o._controlAlphaBase.get();
   infoResource.alphaRate = o._controlAlphaRate.get();
   infoResource.colorMin = o._controlColorMin.get();
   infoResource.colorMax = o._controlColorMax.get();
   infoResource.colorBalance = o._controlColorBalance.get();
   infoResource.colorRate = o._controlColorRate.get();
   infoResource.vertexColor.assign(o._controlVertexColor.get());
   infoResource.ambientColor.assign(o._controlAmbientColor.get());
   infoResource.diffuseColor.assign(o._controlDiffuseColor.get());
   infoResource.specularColor.assign(o._controlSpecularColor.get());
   infoResource.specularBase = o._controlSpecularBase.get();
   infoResource.specularLevel = o._controlSpecularLevel.get();
   infoResource.reflectColor.assign(o._controlReflectColor.get());
   infoResource.reflectMerge = o._controlReflectMerge.get();
   infoResource.emissiveColor.assign(o._controlEmissiveColor.get());
   material.reloadResource();
}
MO.FDsCommonMaterial1Frame_construct = function FDsCommonMaterial1Frame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonMaterial1Frame_loadObject = function FDsCommonMaterial1Frame_loadObject(space, material){
   var o = this;
   o._activeSpace = space;
   o._activeMaterial = material;
   var resource = material.resource();
   if(!resource){
      return;
   }
   var infoResource = resource.info();
   o._controlOptionDouble.set(infoResource.optionDouble);
   o._controlEffectCode.set(infoResource.effectCode);
   o._controlOptionAlpha.set(infoResource.optionAlpha);
   o._controlAlphaBase.set(infoResource.alphaBase);
   o._controlAlphaRate.set(infoResource.alphaRate);
   o._controlOptionColor.set(infoResource.optionColor);
   o._controlColorMin.set(infoResource.colorMin);
   o._controlColorMax.set(infoResource.colorMax);
   o._controlColorBalance.set(infoResource.colorBalance);
   o._controlColorRate.set(infoResource.colorRate);
   o._controlOptionVertex.set(infoResource.optionVertex);
   o._controlVertexColor.set(infoResource.vertexColor);
   o._controlOptionAmbient.set(infoResource.optionAmbient);
   o._controlAmbientColor.set(infoResource.ambientColor);
   o._controlOptionDiffuse.set(infoResource.optionDiffuse);
   o._controlDiffuseColor.set(infoResource.diffuseColor);
   o._controlOptionSpecular.set(infoResource.optionSpecular);
   o._controlSpecularColor.set(infoResource.specularColor);
   o._controlSpecularBase.set(infoResource.specularBase);
   o._controlSpecularLevel.set(infoResource.specularLevel);
   o._controlOptionReflect.set(infoResource.optionReflect);
   o._controlReflectColor.set(infoResource.reflectColor);
   o._controlReflectMerge.set(infoResource.reflectMerge);
   o._controlOptionEmissive.set(infoResource.optionEmissive);
   o._controlEmissiveColor.set(infoResource.emissiveColor);
}
MO.FDsCommonMaterial1Frame_dispose = function FDsCommonMaterial1Frame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonMaterial2Frame = function FDsCommonMaterial2Frame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeSpace              = null;
   o._activeMaterial           = null;
   o._controlDiffuseViewColor  = null;
   o._controlSpecularViewColor = null;
   o._controlSpecularViewBase  = null;
   o._controlSpecularViewLevel = null;
   o.onBuilded                 = MO.FDsCommonMaterial2Frame_onBuilded;
   o.onDataChanged             = MO.FDsCommonMaterial2Frame_onDataChanged;
   o.construct                 = MO.FDsCommonMaterial2Frame_construct;
   o.loadObject                = MO.FDsCommonMaterial2Frame_loadObject;
   o.dispose                   = MO.FDsCommonMaterial2Frame_dispose;
   return o;
}
MO.FDsCommonMaterial2Frame_onBuilded = function FDsCommonMaterial2Frame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlOptionView.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionNormalInvert.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionShadow.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionShadowSelf.addDataChangedListener(o, o.onDataChanged);
   o._controlDiffuseViewColor.addDataChangedListener(o, o.onDataChanged);
   o._controlSpecularViewColor.addDataChangedListener(o, o.onDataChanged);
   o._controlSpecularViewBase.addDataChangedListener(o, o.onDataChanged);
   o._controlSpecularViewLevel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonMaterial2Frame_onDataChanged = function FDsCommonMaterial2Frame_onDataChanged(p){
   var o = this;
   var t = o._activeSpace;
   var m = o._activeMaterial;
   var mr = m.resource();
   var mi = mr.info();
   mi.optionView = o._controlOptionView.get();
   mi.optionNormalInvert = o._controlOptionNormalInvert.get();
   mi.optionShadow = o._controlOptionShadow.get();
   mi.optionShadowSelf = o._controlOptionShadowSelf.get();
   var v = o._controlDiffuseViewColor.get();
   mi.diffuseViewColor.assign(v);
   var v = o._controlSpecularViewColor.get();
   mi.specularViewColor.assign(v);
   mi.specularViewBase = o._controlSpecularViewBase.get();
   mi.specularViewLevel = o._controlSpecularViewLevel.get();
   m.reloadResource();
}
MO.FDsCommonMaterial2Frame_construct = function FDsCommonMaterial2Frame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonMaterial2Frame_loadObject = function FDsCommonMaterial2Frame_loadObject(space, material){
   var o = this;
   o._activeSpace = space;
   o._activeMaterial = material;
   var resource = material.resource();
   if(!resource){
      return;
   }
   var info = resource.info();
   o._controlOptionView.set(info.optionView);
   o._controlOptionNormalInvert.set(info.optionNormalInvert);
   o._controlOptionShadow.set(info.optionShadow);
   o._controlOptionShadowSelf.set(info.optionShadowSelf);
   o._controlDiffuseViewColor.set(info.diffuseViewColor);
   o._controlSpecularViewColor.set(info.specularViewColor);
   o._controlSpecularViewBase.set(info.specularViewBase);
   o._controlSpecularViewLevel.set(info.specularViewLevel);
}
MO.FDsCommonMaterial2Frame_dispose = function FDsCommonMaterial2Frame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonMaterialDialog = function FDsCommonMaterialDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.MaterialDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonMaterialDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonMaterialDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonMaterialDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonMaterialDialog_onCancelClick;
   o.construct             = MO.FDsCommonMaterialDialog_construct;
   o.setSpace              = MO.FDsCommonMaterialDialog_setSpace;
   o.setDisplayLabel       = MO.FDsCommonMaterialDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonMaterialDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonMaterialDialog_setContentLabel;
   o.dispose               = MO.FDsCommonMaterialDialog_dispose;
   return o;
}
MO.FDsCommonMaterialDialog_onBuilded = function FDsCommonMaterialDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlSpaceGuid.setEditAble(false);
   o._controlSpaceLabel.setEditAble(false);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonMaterialDialog_onConfirmLoad = function FDsCommonMaterialDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonMaterialDialog_onConfirmClick = function FDsCommonMaterialDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new TXmlNode('Action');
   var xsprite = xaction.create('Material');
   xsprite.set('space_guid', o._spaceGuid);
   xsprite.set('code', o._controlCode.get());
   xsprite.set('label', o._controlLabel.get());
   xsprite.set('material_guid', o._controlMaterialGuid.get());
   xsprite.set('material_code', o._controlMaterialCode.get());
   var connection = MO.Console.find(FDrTemplateConsole).selectMaterial(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonMaterialDialog_onCancelClick = function FDsCommonMaterialDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonMaterialDialog_construct = function FDsCommonMaterialDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonMaterialDialog_setSpace = function FDsCommonMaterialDialog_setSpace(space){
   var o = this;
   var resource = space.resource();
   o._controlSpaceGuid.set(resource.guid());
   o._controlSpaceLabel.set(resource.makeLabel());
}
MO.FDsCommonMaterialDialog_setDisplayLabel = function FDsCommonMaterialDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonMaterialDialog_setContentCode = function FDsCommonMaterialDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonMaterialDialog_setContentLabel = function FDsCommonMaterialDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonMaterialDialog_dispose = function FDsCommonMaterialDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonMaterialPropertyFrame = function FDsCommonMaterialPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible        = false;
   o._workspace      = null;
   o._activeMaterial = null;
   o._controlGuid    = null;
   o._controlCode    = null;
   o._controlLabel   = null;
   o._frameMaterial1 = null;
   o._frameMaterial2 = null;
   o.onBuilded       = MO.FDsCommonMaterialPropertyFrame_onBuilded;
   o.onDataChanged   = MO.FDsCommonMaterialPropertyFrame_onDataChanged;
   o.construct       = MO.FDsCommonMaterialPropertyFrame_construct;
   o.loadObject      = MO.FDsCommonMaterialPropertyFrame_loadObject;
   o.dispose         = MO.FDsCommonMaterialPropertyFrame_dispose;
   return o;
}
MO.FDsCommonMaterialPropertyFrame_onBuilded = function FDsCommonMaterialPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonMaterialPropertyFrame_onDataChanged = function FDsCommonMaterialPropertyFrame_onDataChanged(p){
   var o = this;
   var m = o._activeMaterial;
   var mr = m.resource();
   mr.setLabel(o._controlLabel.get());
}
MO.FDsCommonMaterialPropertyFrame_construct = function FDsCommonMaterialPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonMaterialPropertyFrame_loadObject = function FDsCommonMaterialPropertyFrame_loadObject(space, material){
   var o = this;
   var resource = material.resource();
   o._activeSpace = space;
   o._activeMaterial = material;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._frameMaterial1.loadObject(space, material);
   o._frameMaterial2.loadObject(space, material);
}
MO.FDsCommonMaterialPropertyFrame_dispose = function FDsCommonMaterialPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonMaterialReferDialog = function FDsCommonMaterialReferDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName      = 'resource.common.dialog.MaterialReferDialog';
   o._displayModeCd  = null;
   o._controlGuid    = null;
   o._controlCode    = null;
   o._controlLabel   = null;
   o._controlConfirm = null;
   o._controlCancel  = null;
   o.onBuilded       = MO.FDsCommonMaterialReferDialog_onBuilded;
   o.onConfirmLoad   = MO.FDsCommonMaterialReferDialog_onConfirmLoad;
   o.onConfirmClick  = MO.FDsCommonMaterialReferDialog_onConfirmClick;
   o.onCancelClick   = MO.FDsCommonMaterialReferDialog_onCancelClick;
   o.construct       = MO.FDsCommonMaterialReferDialog_construct;
   o.setContentGuid  = MO.FDsCommonMaterialReferDialog_setContentGuid;
   o.setContentCode  = MO.FDsCommonMaterialReferDialog_setContentCode;
   o.setContentLabel = MO.FDsCommonMaterialReferDialog_setContentLabel;
   o.dispose         = MO.FDsCommonMaterialReferDialog_dispose;
   return o;
}
MO.FDsCommonMaterialReferDialog_onBuilded = function FDsCommonMaterialReferDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonMaterialReferDialog_onConfirmLoad = function FDsCommonMaterialReferDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonMaterialReferDialog_onConfirmClick = function FDsCommonMaterialReferDialog_onConfirmClick(event){
   var o = this;
   o._materialRefer._guid = o._controlGuid.get();
   o.hide();
}
MO.FDsCommonMaterialReferDialog_onCancelClick = function FDsCommonMaterialReferDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonMaterialReferDialog_construct = function FDsCommonMaterialReferDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonMaterialReferDialog_setContentGuid = function FDsCommonMaterialReferDialog_setContentGuid(guid){
   this._controlGuid.set(guid);
}
MO.FDsCommonMaterialReferDialog_setContentCode = function FDsCommonMaterialReferDialog_setContentCode(code){
   this._controlCode.set(code);
}
MO.FDsCommonMaterialReferDialog_setContentLabel = function FDsCommonMaterialReferDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonMaterialReferDialog_dispose = function FDsCommonMaterialReferDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonMovieDialog = function FDsCommonMovieDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.MovieDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonMovieDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonMovieDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonMovieDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonMovieDialog_onCancelClick;
   o.construct             = MO.FDsCommonMovieDialog_construct;
   o.setLayerLabel         = MO.FDsCommonMovieDialog_setLayerLabel;
   o.setDisplayLabel       = MO.FDsCommonMovieDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonMovieDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonMovieDialog_setContentLabel;
   o.dispose               = MO.FDsCommonMovieDialog_dispose;
   return o;
}
MO.FDsCommonMovieDialog_onBuilded = function FDsCommonMovieDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlLayerLabel.setEditAble(false);
   o._controlDisplayLabel.setEditAble(false);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonMovieDialog_onConfirmLoad = function FDsCommonMovieDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonMovieDialog_onConfirmClick = function FDsCommonMovieDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new TXmlNode('Action');
   var xmovie = xaction.create('Movie');
   xmovie.set('space_guid', o._spaceGuid);
   xmovie.set('layer_guid', o._layerGuid);
   xmovie.set('display_guid', o._displayGuid);
   xmovie.set('code', o._controlCode.get());
   xmovie.set('label', o._controlLabel.get());
   xmovie.set('interval', o._controlInterval.get());
   xmovie.set('rotation', o._controlRotation.get());
   var console = MO.Console.find(FDrSceneConsole);
   var connection = null;
   connection = console.createMovie(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonMovieDialog_onCancelClick = function FDsCommonMovieDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonMovieDialog_construct = function FDsCommonMovieDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonMovieDialog_setLayerLabel = function FDsCommonMovieDialog_setLayerLabel(label){
   this._controlLayerLabel.set(label);
}
MO.FDsCommonMovieDialog_setDisplayLabel = function FDsCommonMovieDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonMovieDialog_setContentCode = function FDsCommonMovieDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonMovieDialog_setContentLabel = function FDsCommonMovieDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonMovieDialog_dispose = function FDsCommonMovieDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonMoviePropertyFrame = function FDsCommonMoviePropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible      = false;
   o._activeSpace  = null;
   o._activeMovie  = null;
   o._controlGuid  = null;
   o._controlCode  = null;
   o._controlLabel = null;
   o.onBuilded     = MO.FDsCommonMoviePropertyFrame_onBuilded;
   o.onDataChanged = MO.FDsCommonMoviePropertyFrame_onDataChanged;
   o.construct     = MO.FDsCommonMoviePropertyFrame_construct;
   o.loadObject    = MO.FDsCommonMoviePropertyFrame_loadObject;
   o.dispose       = MO.FDsCommonMoviePropertyFrame_dispose;
   return o;
}
MO.FDsCommonMoviePropertyFrame_construct = function FDsCommonMoviePropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonMoviePropertyFrame_onBuilded = function FDsCommonMoviePropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
   o._controlInterval.addDataChangedListener(o, o.onDataChanged);
   o._controlRotation.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonMoviePropertyFrame_onDataChanged = function FDsCommonMoviePropertyFrame_onDataChanged(p){
   var o = this;
   var movie = o._activeMovie;
   var resource = movie.resource();
   resource.setCode(o._controlCode.get());
   resource.setLabel(o._controlLabel.get());
   resource.setInterval(o._controlInterval.get());
   resource.rotation().assign(o._controlRotation.get());
   movie.reloadResource();
}
MO.FDsCommonMoviePropertyFrame_loadObject = function FDsCommonMoviePropertyFrame_loadObject(space, movie){
   var o = this;
   var resource = movie.resource();
   o._activeSpace = space;
   o._activeMovie = movie;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._controlInterval.set(resource.interval());
   o._controlRotation.set(resource.rotation());
}
MO.FDsCommonMoviePropertyFrame_dispose = function FDsCommonMoviePropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonProgramDialog = function FDsCommonProgramDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.ProgramDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonProgramDialog_onBuilded;
   o.onConfirmClick        = MO.FDsCommonProgramDialog_onConfirmClick;
   o.construct             = MO.FDsCommonProgramDialog_construct;
   o.setProgramCode        = MO.FDsCommonProgramDialog_setProgramCode;
   o.setVertexSource       = MO.FDsCommonProgramDialog_setVertexSource;
   o.setFragmentSource     = MO.FDsCommonProgramDialog_setFragmentSource;
   o.dispose               = MO.FDsCommonProgramDialog_dispose;
   return o;
}
MO.FDsCommonProgramDialog_onBuilded = function FDsCommonProgramDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
}
MO.FDsCommonProgramDialog_onConfirmClick = function FDsCommonProgramDialog_onConfirmClick(event){
   var o = this;
   o.hide();
}
MO.FDsCommonProgramDialog_construct = function FDsCommonProgramDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonProgramDialog_setProgramCode = function FDsCommonProgramDialog_setProgramCode(value){
   this._controlCode.set(value);
}
MO.FDsCommonProgramDialog_setVertexSource = function FDsCommonProgramDialog_setVertexSource(source, targetSource){
   var o = this;
   o._controlVertexSource.set(source);
   o._controlVertexTargetSource.set(targetSource);
}
MO.FDsCommonProgramDialog_setFragmentSource = function FDsCommonProgramDialog_setFragmentSource(source, targetSource){
   var o = this;
   o._controlFragmentSource.set(source);
   o._controlFragmentTargetSource.set(targetSource);
}
MO.FDsCommonProgramDialog_dispose = function FDsCommonProgramDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonRegionPropertyFrame = function FDsCommonRegionPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible                   = false;
   o._workspace                 = null;
   o._activeSpace               = null;
   o._activeRegion              = null;
   o._controlMoveSpeed          = null;
   o._controlRotationKeySpeed   = null;
   o._controlRotationMouseSpeed = null;
   o._controlOptionBackground   = null;
   o._controlBackgroundColor    = null;
   o.onBuilded                  = MO.FDsCommonRegionPropertyFrame_onBuilded;
   o.onDataChanged              = MO.FDsCommonRegionPropertyFrame_onDataChanged;
   o.construct                  = MO.FDsCommonRegionPropertyFrame_construct;
   o.loadObject                 = MO.FDsCommonRegionPropertyFrame_loadObject;
   o.dispose                    = MO.FDsCommonRegionPropertyFrame_dispose;
   return o;
}
MO.FDsCommonRegionPropertyFrame_onBuilded = function FDsCommonRegionPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlMoveSpeed.addDataChangedListener(o, o.onDataChanged);
   o._controlRotationKeySpeed.addDataChangedListener(o, o.onDataChanged);
   o._controlRotationMouseSpeed.addDataChangedListener(o, o.onDataChanged);
   o._controlOptionBackground.addDataChangedListener(o, o.onDataChanged);
   o._controlBackgroundColor.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonRegionPropertyFrame_onDataChanged = function FDsCommonRegionPropertyFrame_onDataChanged(p){
   var o = this;
   var region = o._activeRegion;
   var resource = region.resource();
   resource.setOptionBackground(o._controlOptionBackground.get());
   resource.backgroundColor().assign(o._controlBackgroundColor.get());
   resource.setMoveSpeed(o._controlMoveSpeed.get());
   resource.setRotationKeySpeed(o._controlRotationKeySpeed.get());
   resource.setRotationMouseSpeed(o._controlRotationMouseSpeed.get());
   region.reloadResource();
   var canvasContent = o._frameSet._canvasContent;
   canvasContent.reloadRegion(region);
}
MO.FDsCommonRegionPropertyFrame_construct = function FDsCommonRegionPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonRegionPropertyFrame_loadObject = function FDsCommonRegionPropertyFrame_loadObject(space, region){
   var o = this;
   var resource = region.resource();
   o._activeSpace = space;
   o._activeRegion = region;
   o._controlMoveSpeed.set(resource.moveSpeed());
   o._controlRotationKeySpeed.set(resource.rotationKeySpeed());
   o._controlRotationMouseSpeed.set(resource.rotationMouseSpeed());
   o._controlOptionBackground.set(resource.optionBackground());
   o._controlBackgroundColor.set(resource.backgroundColor());
}
MO.FDsCommonRegionPropertyFrame_dispose = function FDsCommonRegionPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonRenderableFrame = function FDsCommonRenderableFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeSpace      = null;
   o._activeRenderable = null;
   o.onBuilded         = MO.FDsCommonRenderableFrame_onBuilded;
   o.onDataChanged     = MO.FDsCommonRenderableFrame_onDataChanged;
   o.onMaterialClick   = MO.FDsCommonRenderableFrame_onMaterialClick;
   o.onEffectClick     = MO.FDsCommonRenderableFrame_onEffectClick;
   o.construct         = MO.FDsCommonRenderableFrame_construct;
   o.loadObject        = MO.FDsCommonRenderableFrame_loadObject;
   o.dispose           = MO.FDsCommonRenderableFrame_dispose;
   return o;
}
MO.FDsCommonRenderableFrame_onBuilded = function FDsCommonRenderableFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlTranslate.addDataChangedListener(o, o.onDataChanged);
   o._controlRotation.addDataChangedListener(o, o.onDataChanged);
   o._controlScale.addDataChangedListener(o, o.onDataChanged);
   o._controlMaterials.addClickListener(o, o.onMaterialClick);
   o._controlEffects.addClickListener(o, o.onEffectClick);
}
MO.FDsCommonRenderableFrame_onDataChanged = function FDsCommonRenderableFrame_onDataChanged(p){
   var o = this;
   var r = o._activeRenderable;
   var m = r.matrix();
   var v = o._controlTranslate.get();
   m.setTranslate(v.x, v.y, v.z);
   var v = o._controlRotation.get();
   m.setRotation(v.x, v.y, v.z);
   var v = o._controlScale.get();
   m.setScale(v.x, v.y, v.z);
   m.update();
}
MO.FDsCommonRenderableFrame_onMaterialClick = function FDsCommonRenderableFrame_onMaterialClick(event){
   var o = this;
   var item = event.item;
   var materialRefer = item.tag();
   var dialog = MO.Console.find(FDuiWindowConsole).find(FDsCommonMaterialReferDialog);
   dialog._frame = o;
   dialog._materialRefer = materialRefer;
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsCommonRenderableFrame_onEffectClick = function FDsCommonRenderableFrame_onEffectClick(event){
   var o = this;
   var item = event.item;
   var effect = item.tag();
   var program = effect._program;
   var vertexShader = program.vertexShader();
   var fragmentShader = program.fragmentShader();
   var dialog = MO.Console.find(FDuiWindowConsole).find(FDsCommonProgramDialog);
   dialog._frameSet = o._frameSet;
   dialog.setProgramCode(effect._code);
   dialog.setVertexSource(vertexShader.source(), vertexShader.targetSource());
   dialog.setFragmentSource(fragmentShader.source(), fragmentShader.targetSource());
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsCommonRenderableFrame_construct = function FDsCommonRenderableFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonRenderableFrame_loadObject = function FDsCommonRenderableFrame_loadObject(space, renderable){
   var o = this;
   o._activeSpace = space;
   o._activeRenderable = renderable;
   var resource = renderable.resource();
   var matrix = renderable.matrix();
   o._controlTranslate.set(matrix.tx, matrix.ty, matrix.tz);
   o._controlRotation.set(matrix.rx, matrix.ry, matrix.rz);
   o._controlScale.set(matrix.sx, matrix.sy, matrix.sz);
   if(resource){
      var materialBox = o._controlMaterials;
      materialBox.clear();
      var indexBuffers = renderable.indexBuffers();
      var count = indexBuffers.count();
      for(var i = 0; i < count; i++){
         var materialRefer = resource.syncMaterialRefer(i);
         var item = materialBox.createItem(null, i + ': ' + materialRefer.guid());
         item.setTag(materialRefer);
         materialBox.push(item);
      }
   }
   var effectBox = o._controlEffects;
   effectBox.clear();
   var infos = renderable.infos();
   var count = infos.count();
   for(var i = 0; i < count; i++){
      var effect = infos.at(i).effect;
      if(effect){
         var item = effectBox.createItem(null, effect.code());
         item.setTag(effect);
         effectBox.push(item);
      }
   }
}
MO.FDsCommonRenderableFrame_dispose = function FDsCommonRenderableFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonRenderablePropertyFrame = function FDsCommonRenderablePropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible          = false;
   o._activeRenderable = null;
   o._activeMaterial   = null;
   o._controlGuid      = null;
   o._controlCode      = null;
   o._controlLabel     = null;
   o._frameRenderable  = null;
   o._frameMaterial1   = null;
   o._frameMaterial2   = null;
   o.construct         = MO.FDsCommonRenderablePropertyFrame_construct;
   o.loadObject        = MO.FDsCommonRenderablePropertyFrame_loadObject;
   o.dispose           = MO.FDsCommonRenderablePropertyFrame_dispose;
   return o;
}
MO.FDsCommonRenderablePropertyFrame_construct = function FDsCommonRenderablePropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonRenderablePropertyFrame_loadObject = function FDsCommonRenderablePropertyFrame_loadObject(space, renderable){
   var o = this;
   var material = renderable.material();
   var resource = renderable.renderable().resource();
   o._activeRenderable = renderable;
   o._activeMaterial = material;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
   o._frameRenderable.loadObject(space, renderable);
   o._frameMaterial1.loadObject(space, material);
   o._frameMaterial2.loadObject(space, material);
}
MO.FDsCommonRenderablePropertyFrame_dispose = function FDsCommonRenderablePropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonShaderDialog = function FDsCommonShaderDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.ShaderDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonShaderDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonShaderDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonShaderDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonShaderDialog_onCancelClick;
   o.construct             = MO.FDsCommonShaderDialog_construct;
   o.setSpace              = MO.FDsCommonShaderDialog_setSpace;
   o.setDisplayLabel       = MO.FDsCommonShaderDialog_setDisplayLabel;
   o.setVertexSource       = MO.FDsCommonShaderDialog_setVertexSource;
   o.setFragmentSource     = MO.FDsCommonShaderDialog_setFragmentSource;
   o.dispose               = MO.FDsCommonShaderDialog_dispose;
   return o;
}
MO.FDsCommonShaderDialog_onBuilded = function FDsCommonShaderDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
}
MO.FDsCommonShaderDialog_onConfirmClick = function FDsCommonShaderDialog_onConfirmClick(event){
   var o = this;
   o.hide();
}
MO.FDsCommonShaderDialog_construct = function FDsCommonShaderDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonShaderDialog_setSpace = function FDsCommonShaderDialog_setSpace(space){
   var o = this;
}
MO.FDsCommonShaderDialog_setDisplayLabel = function FDsCommonShaderDialog_setDisplayLabel(label){
}
MO.FDsCommonShaderDialog_setVertexSource = function FDsCommonShaderDialog_setVertexSource(label){
}
MO.FDsCommonShaderDialog_setFragmentSource = function FDsCommonShaderDialog_setFragmentSource(label){
}
MO.FDsCommonShaderDialog_dispose = function FDsCommonShaderDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonSpacePropertyFrame = function FDsCommonSpacePropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible      = false;
   o._workspace    = null;
   o._activeSpace  = null;
   o._controlGuid  = null;
   o._controlCode  = null;
   o._controlLabel = null;
   o.onBuilded     = MO.FDsCommonSpacePropertyFrame_onBuilded;
   o.onDataChanged = MO.FDsCommonSpacePropertyFrame_onDataChanged;
   o.construct     = MO.FDsCommonSpacePropertyFrame_construct;
   o.loadObject    = MO.FDsCommonSpacePropertyFrame_loadObject;
   o.dispose       = MO.FDsCommonSpacePropertyFrame_dispose;
   return o;
}
MO.FDsCommonSpacePropertyFrame_onBuilded = function FDsCommonSpacePropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsCommonSpacePropertyFrame_onDataChanged = function FDsCommonSpacePropertyFrame_onDataChanged(p){
   var o = this;
   var space = o._activeSpace;
   var resource = space.resource();
   resource.setLabel(o._controlLabel.get());
}
MO.FDsCommonSpacePropertyFrame_construct = function FDsCommonSpacePropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsCommonSpacePropertyFrame_loadObject = function FDsCommonSpacePropertyFrame_loadObject(space){
   var o = this;
   var resource = space.resource();
   o._activeSpace = space;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
}
MO.FDsCommonSpacePropertyFrame_dispose = function FDsCommonSpacePropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonSpriteDialog = function FDsCommonSpriteDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.SpriteDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonSpriteDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonSpriteDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonSpriteDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonSpriteDialog_onCancelClick;
   o.construct             = MO.FDsCommonSpriteDialog_construct;
   o.setLayerLabel         = MO.FDsCommonSpriteDialog_setLayerLabel;
   o.setDisplayLabel       = MO.FDsCommonSpriteDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonSpriteDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonSpriteDialog_setContentLabel;
   o.dispose               = MO.FDsCommonSpriteDialog_dispose;
   return o;
}
MO.FDsCommonSpriteDialog_onBuilded = function FDsCommonSpriteDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlLayerLabel.setEditAble(false);
   o._controlDisplayLabel.setEditAble(false);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonSpriteDialog_onConfirmLoad = function FDsCommonSpriteDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
   var catalog = o._frameSet._catalogContent;
   if(o._displayModeCd == MO.EUiDataMode.Insert){
      if(o._parentGuid){
         var node = catalog.findByGuid(o._parentGuid);
         catalog.loadNode(node);
      }else{
         catalog.loadService();
      }
   }else{
      var label = o._controlLabel.get();
      var node = catalog.focusNode();
      node.setLabel(label);
   }
}
MO.FDsCommonSpriteDialog_onConfirmClick = function FDsCommonSpriteDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new MO.TXmlNode('Action');
   var xsprite = xaction.create('Sprite');
   xsprite.set('space_guid', o._spaceGuid);
   xsprite.set('layer_guid', o._layerGuid);
   xsprite.set('display_guid', o._displayGuid);
   xsprite.set('code', o._controlCode.get());
   xsprite.set('label', o._controlLabel.get());
   xsprite.set('template_guid', o._controlTemplateGuid.get());
   xsprite.set('template_code', o._controlTemplateCode.get());
   var console = MO.Console.find(MO.FDrSceneConsole);
   var connection = null;
   connection = console.createSprite(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonSpriteDialog_onCancelClick = function FDsCommonSpriteDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonSpriteDialog_construct = function FDsCommonSpriteDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonSpriteDialog_setLayerLabel = function FDsCommonSpriteDialog_setLayerLabel(label){
   this._controlLayerLabel.set(label);
}
MO.FDsCommonSpriteDialog_setDisplayLabel = function FDsCommonSpriteDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonSpriteDialog_setContentCode = function FDsCommonSpriteDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonSpriteDialog_setContentLabel = function FDsCommonSpriteDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonSpriteDialog_dispose = function FDsCommonSpriteDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsCommonTechniquePropertyFrame = function FDsCommonTechniquePropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible              = false;
   o._workspace            = null;
   o._activeSpace          = null;
   o._activeTechnique      = null;
   o._controlTriangleCount = null;
   o._controlDrawCount     = null;
   o._thread               = null;
   o._interval             = 2000;
   o.onBuilded             = MO.FDsCommonTechniquePropertyFrame_onBuilded;
   o.onDataChanged         = MO.FDsCommonTechniquePropertyFrame_onDataChanged;
   o.onModeClick           = MO.FDsCommonTechniquePropertyFrame_onModeClick;
   o.onRefresh             = MO.FDsCommonTechniquePropertyFrame_onRefresh;
   o.construct             = MO.FDsCommonTechniquePropertyFrame_construct;
   o.loadObject            = MO.FDsCommonTechniquePropertyFrame_loadObject;
   o.dispose               = MO.FDsCommonTechniquePropertyFrame_dispose;
   return o;
}
MO.FDsCommonTechniquePropertyFrame_onBuilded = function FDsCommonTechniquePropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlRenderModes.addClickListener(o, o.onModeClick);
}
MO.FDsCommonTechniquePropertyFrame_onDataChanged = function FDsCommonTechniquePropertyFrame_onDataChanged(p){
   var o = this;
   var r = o._activeTechnique;
   r._code = o._controlCode.get();
   r._label = o._controlLabel.get();
   r._activeTechniqueCode = o._controlTechniqueCode.get();
}
MO.FDsCommonTechniquePropertyFrame_onModeClick = function FDsCommonTechniquePropertyFrame_onModeClick(ps, pi){
   var o = this;
   var m = pi.tag();
   o._activeTechnique._activeMode = m;
   o._activeSpace.dirty();
}
MO.FDsCommonTechniquePropertyFrame_onRefresh = function FDsCommonTechniquePropertyFrame_onRefresh(){
   var o = this;
   if(!o._statusVisible){
      return;
   }
   var s = o._activeSpace;
   var ss = s.statistics();
   var gs = s._graphicContext.statistics();
   o._controlFrameTick.set(ss._frame.toString());
   o._controlProcessTick.set(ss._frameProcess.toString() + ' | ' + ss._frameDrawRenderable.toString());
   o._controlDrawTick.set(ss._frameDraw.toString() + ' | ' + ss._frameDrawSort.toString());
   o._controlClearCount.set(gs._frameClearCount);
   o._controlModeInfo.set(
      'FIL:' + gs._frameFillModeCount +
      ' | DEP:' + gs._frameDepthModeCount +
      ' | CUL:' + gs._frameCullModeCount +
      ' | BLD:' + gs._frameBlendModeCount);
   o._controlProgramCount.set(gs._frameProgramCount);
   o._controlConstInfo.set(gs._frameConstCount + ' : length=' + gs._frameConstLength);
   o._controlBufferCount.set(gs._frameBufferCount);
   o._controlTextureCount.set(gs._frameTextureCount);
   o._controlTargetCount.set(gs._frameTargetCount);
   o._controlDrawInfo.set(gs._frameDrawCount + ' : triangle=' + gs._frameTriangleCount);
   o._controlProgramTotal.set(gs._programTotal);
   o._controlLayoutTotal.set(gs._layoutTotal);
   o._controlBufferInfo.set('Vertex:' + gs._vertexBufferTotal + ' Index:' + gs._indexBufferTotal);
   o._controlTextureInfo.set('Flat:' + gs._flatTextureTotal + ' Cube:' + gs._cubeTextureTotal);
   o._controlTargetTotal.set(gs._targetTotal);
}
MO.FDsCommonTechniquePropertyFrame_construct = function FDsCommonTechniquePropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
   var t = o._thread = MO.Class.create(MO.FThread);
   t.setInterval(o._interval);
   t.addProcessListener(o, o.onRefresh);
   MO.Console.find(MO.FThreadConsole).start(t);
}
MO.FDsCommonTechniquePropertyFrame_loadObject = function FDsCommonTechniquePropertyFrame_loadObject(space, technique){
   var o = this;
   o._activeSpace = space;
   o._activeTechnique = technique;
   var ctlModes = o._controlRenderModes;
   ctlModes.clear();
   var modes = technique.modes();
   var c = modes.count();
   for(var i = 0; i < c; i++){
      var mode = modes.getAt(i);
      var item = ctlModes.createItem(null, mode.code());
      item.setTag(mode);
      ctlModes.push(item);
   }
   o.onRefresh();
}
MO.FDsCommonTechniquePropertyFrame_dispose = function FDsCommonTechniquePropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsCommonTemplateDialog = function FDsCommonTemplateDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.common.dialog.TemplateDialog';
   o._displayModeCd        = null;
   o._controlLayerLabel    = null;
   o._controlDisplayLabel  = null;
   o._controlCode          = null;
   o._controlLabel         = null;
   o._controlTemplateCode  = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsCommonTemplateDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsCommonTemplateDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsCommonTemplateDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsCommonTemplateDialog_onCancelClick;
   o.construct             = MO.FDsCommonTemplateDialog_construct;
   o.setSpace              = MO.FDsCommonTemplateDialog_setSpace;
   o.setDisplayLabel       = MO.FDsCommonTemplateDialog_setDisplayLabel;
   o.setContentCode        = MO.FDsCommonTemplateDialog_setContentCode;
   o.setContentLabel       = MO.FDsCommonTemplateDialog_setContentLabel;
   o.dispose               = MO.FDsCommonTemplateDialog_dispose;
   return o;
}
MO.FDsCommonTemplateDialog_onBuilded = function FDsCommonTemplateDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsCommonTemplateDialog_onConfirmLoad = function FDsCommonTemplateDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsCommonTemplateDialog_onConfirmClick = function FDsCommonTemplateDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var xaction = new TXmlNode('Action');
   var xsprite = xaction.create('Display');
   xsprite.set('space_guid', o._spaceGuid);
   xsprite.set('code', o._controlCode.get());
   xsprite.set('label', o._controlLabel.get());
   xsprite.set('model_guid', o._controlModelGuid.get());
   xsprite.set('model_code', o._controlModelCode.get());
   var connection = MO.Console.find(FDrTemplateConsole).createDisplay(xaction);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsCommonTemplateDialog_onCancelClick = function FDsCommonTemplateDialog_onCancelClick(event){
   this.hide();
}
MO.FDsCommonTemplateDialog_construct = function FDsCommonTemplateDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsCommonTemplateDialog_setSpace = function FDsCommonTemplateDialog_setSpace(space){
   var o = this;
   var resource = space.resource();
   o._controlSpaceGuid.set(resource.guid());
   o._controlSpaceLabel.set(resource.makeLabel());
}
MO.FDsCommonTemplateDialog_setDisplayLabel = function FDsCommonTemplateDialog_setDisplayLabel(label){
   this._controlDisplayLabel.set(label);
}
MO.FDsCommonTemplateDialog_setContentCode = function FDsCommonTemplateDialog_setContentCode(label){
   this._controlCode.set(label);
}
MO.FDsCommonTemplateDialog_setContentLabel = function FDsCommonTemplateDialog_setContentLabel(label){
   this._controlLabel.set(label);
}
MO.FDsCommonTemplateDialog_dispose = function FDsCommonTemplateDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsSolutionCatalogContent = function FDsSolutionCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiDataTreeView, MO.MListenerSelected);
   o._iconView             = 'resource.solution.view';
   o._iconViewNot          = 'resource.solution.viewno';
   o._activeSpace          = null;
   o._materials            = null;
   o.onLoaded              = MO.FDsSolutionCatalogContent_onLoaded;
   o.onBuild               = MO.FDsSolutionCatalogContent_onBuild;
   o.onLoadDisplay         = MO.FDsSolutionCatalogContent_onLoadDisplay;
   o.onNodeClick           = MO.FDsSolutionCatalogContent_onNodeClick;
   o.onNodeViewClick       = MO.FDsSolutionCatalogContent_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsSolutionCatalogContent_onNodeViewDoubleClick;
   o.lsnsSelect            = null;
   o.construct             = MO.FDsSolutionCatalogContent_construct;
   o.buildPrivate          = MO.FDsSolutionCatalogContent_buildPrivate;
   o.buildRecommend        = MO.FDsSolutionCatalogContent_buildRecommend;
   o.buildGroup            = MO.FDsSolutionCatalogContent_buildGroup;
   o.buildCatalog          = MO.FDsSolutionCatalogContent_buildCatalog;
   o.selectObject          = MO.FDsSolutionCatalogContent_selectObject;
   o.showObject            = MO.FDsSolutionCatalogContent_showObject;
   o.dispose               = MO.FDsSolutionCatalogContent_dispose;
   return o;
}
MO.FDsSolutionCatalogContent_onLoaded = function FDsSolutionCatalogContent_onLoaded(p){
   var o = this;
   o.__base.FDuiDataTreeView.onLoaded.call(o, p);
   this.buildCatalog();
}
MO.FDsSolutionCatalogContent_onBuild = function FDsSolutionCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDuiDataTreeView.onBuild.call(o, p);
   o.addNodeClickListener(o, o.onNodeClick);
   o.loadDefine('resource.solution');
}
MO.FDsSolutionCatalogContent_onLoadDisplay = function FDsSolutionCatalogContent_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRecommend(n, p);
}
MO.FDsSolutionCatalogContent_onNodeClick = function FDsSolutionCatalogContent_onNodeClick(t, n){
   var o = this;
   var s = n.dataPropertyGet('linker');
   o.selectObject(s);
}
MO.FDsSolutionCatalogContent_onNodeViewClick = function FDsSolutionCatalogContent_onNodeViewClick(p){
   var o = this;
   var c = p.treeNodeCell;
   var s = p.treeNode.dataPropertyGet('linker');
   if(MO.Class.isClass(s, MO.FDisplay)){
      if(p.ctrlKey){
         var ds = o._displays;
         for(var i = ds.count() - 1; i >= 0; i--){
            var nd = ds.get(i);
            var d = nd.dataPropertyGet('linker');
            d._visible = false;
            nd.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, MO.FDrawable)){
      if(p.ctrlKey){
         var rs = o._renderables;
         for(var i = rs.count() - 1; i >= 0; i--){
            var nr = rs.get(i);
            var r = nr.dataPropertyGet('linker');
            r._visible = false;
            nr.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, MO.FG3dMaterial)){
      if(p.ctrlKey){
         var ms = o._materials;
         for(var i = ms.count() - 1; i >= 0; i--){
            var nm = ms.get(i);
            var m = nm.dataPropertyGet('linker');
            m._visible = false;
            nm.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
}
MO.FDsSolutionCatalogContent_onNodeViewDoubleClick = function FDsSolutionCatalogContent_onNodeViewDoubleClick(p){
   var o = this;
   var n = p.treeNode;
   var c = p.treeNodeCell;
   var s = n.dataPropertyGet('linker');
   if(MO.Class.isClass(s, MO.FDisplay)){
      var s = o._displays;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var d = n.dataPropertyGet('linker');
         d._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, MO.FDrawable)){
      var s = o._renderables;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var r = n.dataPropertyGet('linker');
         r._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, MO.FG3dMaterial)){
      var s = o._materials;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var m = n.dataPropertyGet('linker');
         m._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
}
MO.FDsSolutionCatalogContent_construct = function FDsSolutionCatalogContent_construct(){
   var o = this;
   o.__base.FDuiDataTreeView.construct.call(o);
   o._renderables = new MO.TObjects();
   o._materials = new MO.TObjects();
}
MO.FDsSolutionCatalogContent_buildTechnique = function FDsSolutionCatalogContent_buildTechnique(n, p){
   var o = this;
   var nt = o.createNode();
   nt.setLabel('Technique');
   nt.setTypeCode('technique');
   nt.dataPropertySet('linker', p);
   n.appendNode(nt);
}
MO.FDsSolutionCatalogContent_buildPrivate = function FDsSolutionCatalogContent_buildPrivate(parent){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('全部项目');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('收藏项目');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('最近使用');
   parent.appendNode(node);
}
MO.FDsSolutionCatalogContent_buildRecommend = function FDsSolutionCatalogContent_buildRecommend(parent){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('本周排行');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('本月排行');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('全部排行');
   parent.appendNode(node);
}
MO.FDsSolutionCatalogContent_buildGroup = function FDsSolutionCatalogContent_buildGroup(parent){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('汽车');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('教育');
   parent.appendNode(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('人物');
   parent.appendNode(node);
}
MO.FDsSolutionCatalogContent_buildCatalog = function FDsSolutionCatalogContent_buildCatalog(){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('我的项目');
   o.appendNode(node);
   o.buildPrivate(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('推荐项目');
   o.appendNode(node);
   o.buildRecommend(node);
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel('项目分类');
   o.appendNode(node);
   o.buildGroup(node)
}
MO.FDsSolutionCatalogContent_selectObject = function FDsSolutionCatalogContent_selectObject(p){
   var o = this;
   if(p != null){
      o.processSelectedListener(p, true);
   }
}
MO.FDsSolutionCatalogContent_showObject = function FDsSolutionCatalogContent_showObject(p){
   var o = this;
   if(MO.Class.isClass(p, FDsSceneRenderable)){
      var s = o._renderables;
      var c = s.count();
      for(var i = 0; i < c; i++){
         var nr = s.getAt(i);
         var r = nr.dataPropertyGet('linker');
         if(r == p){
            o.processSelectedListener(p, false);
         }
      }
   }
}
MO.FDsSolutionCatalogContent_dispose = function FDsSolutionCatalogContent_dispose(){
   var o = this;
   o._displays = MO.Lang.Object.dispose(o._displays);
   o._renderables = MO.Lang.Object.dispose(o._renderables);
   o._materials = MO.Lang.Object.dispose(o._materials);
   o.__base.FDuiDataTreeView.dispose.call(o);
}
MO.FDsSolutionCatalogToolBar = function FDsSolutionCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.private.solution.CatalogToolBar';
   o._canvasModeCd    = MO.EDsCanvasMode.Drop;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsSolutionCatalogToolBar_onBuilded;
   o.onModeClick      = MO.FDsSolutionCatalogToolBar_onModeClick;
   o.onRotationClick  = MO.FDsSolutionCatalogToolBar_onRotationClick;
   o.construct        = MO.FDsSolutionCatalogToolBar_construct;
   o.dispose          = MO.FDsSolutionCatalogToolBar_dispose;
   return o;
}
MO.FDsSolutionCatalogToolBar_onBuilded = function FDsSolutionCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsSolutionCatalogToolBar_onModeClick = function FDsSolutionCatalogToolBar_onModeClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
   o._workspace._canvas.switchMode(p._canvasModeCd);
}
MO.FDsSolutionCatalogToolBar_onRotationClick = function FDsSolutionCatalogToolBar_onRotationClick(p, v){
   var o = this;
   var c = o._workspace._canvas;
   c.switchRotation(v);
}
MO.FDsSolutionCatalogToolBar_construct = function FDsSolutionCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsSolutionCatalogToolBar_dispose = function FDsSolutionCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsSolutionFrameSet = function FDsSolutionFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDuiFrameSet, MO.MUiStorage);
   o._frameName            = 'resource.private.solution.FrameSet';
   o._storageCode          = o._frameName;
   o._styleCatalogGround   = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleCatalogToolbar  = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'Catalog_Toolbar'));
   o._styleSearchGround    = MO.Class.register(o, new MO.AStyle('_styleSearchGround', 'List_Ground'));
   o._styleSearchToolbar   = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'List_Toolbar'));
   o._stylePreviewGround   = MO.Class.register(o, new MO.AStyle('_stylePreviewGround', 'Property_Ground'));
   o._stylePreviewToolbar  = MO.Class.register(o, new MO.AStyle('_stylePreviewToolbar', 'Property_Toolbar'));
   o._stylePropertyGround  = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._pageSize             = 40;
   o._activeResourceCd     = 'private';
   o._activeProjectGuid    = null;
   o._frameCatalog         = null;
   o._frameCatalogToolbar  = null;
   o._frameCatalogContent  = null;
   o._frameList            = null;
   o._frameListToolbar     = null;
   o._frameListContent     = null;
   o._frameProperty        = null;
   o._framePropertyToolbar = null;
   o._framePropertyContent = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsSolutionFrameSet_onBuilded;
   o.construct             = MO.FDsSolutionFrameSet_construct;
   o.findPropertyFrame     = MO.FDsSolutionFrameSet_findPropertyFrame;
   o.selectObject          = MO.FDsSolutionFrameSet_selectObject;
   o.switchContent         = MO.FDsSolutionFrameSet_switchContent;
   o.load                  = MO.FDsSolutionFrameSet_load;
   o.dispose               = MO.FDsSolutionFrameSet_dispose;
   return o;
}
MO.FDsSolutionFrameSet_onBuilded = function FDsSolutionFrameSet_onBuilded(p){
   var o = this;
   o.__base.FDuiFrameSet.onBuilded.call(o, p);
   var frame = o._frameCatalog = o.searchControl('catalogFrame');
   frame._hPanel.className = o.styleName('Catalog_Ground');
   var frame = o._frameCatalogToolbar = o.searchControl('catalogToolbarFrame');
   frame._hPanel.className = o.styleName('Catalog_Toolbar');
   var frame = o._frameCatalogContent = o.searchControl('catalogContentFrame');
   var frame = o._frameList = o.searchControl('listFrame');
   frame._hPanel.className = o.styleName('List_Ground');
   var frame = o._frameListToolbar = o.searchControl('listToolbarFrame');
   frame._hPanel.className = o.styleName('List_Toolbar');
   var frame = o._frameListContent = o.searchControl('listContentFrame');
   var spliter = o._catalogSplitter = o.searchControl('catalogSpliter');
   spliter.setAlignCd(MO.EUiAlign.Left);
   spliter.setSizeHtml(o._frameCatalog._hPanel);
   var control = o._catalogToolbar = MO.Class.create(MO.FDsSolutionCatalogToolBar);
   control._frameSet = o;
   control.buildDefine(p);
   o._frameCatalogToolbar.push(control);
   var control = o._catalogContent = MO.Class.create(MO.FDsSolutionCatalogContent);
   control._frameSet = o;
   control.build(p);
   o._frameCatalogContent.push(control);
   var control = o._listToolbar = MO.Class.create(MO.FDsSolutionListToolBar);
   control._frameSet = o;
   control.buildDefine(p);
   o._frameListToolbar.push(control);
   var control = o._listContent = MO.Class.create(MO.FDsSolutionListContent);
   control._frameSet = o;
   control.build(p);
   o._frameListContent.push(control);
   o.switchContent('private');
}
MO.FDsSolutionFrameSet_construct = function FDsSolutionFrameSet_construct(){
   var o = this;
   o.__base.FDuiFrameSet.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsSolutionFrameSet_findPropertyFrame = function FDsSolutionFrameSet_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._framePropertyProperty._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsSolutionFrameSet_selectObject = function FDsSolutionFrameSet_selectObject(control){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(control, MO.FDsSolutionListItem)){
      var f = o.findPropertyFrame(MO.EDsFrame.SolutionProjectPropertyFrame);
      f.show();
      f.loadObject(control);
      o._activeProjectGuid = control._guid;
   }else{
      throw new TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsSolutionFrameSet_switchContent = function FDsSolutionFrameSet_switchContent(typeCd){
   var o = this;
   o._activeResourceCd = typeCd;
   o._listContent.serviceSearch(typeCd, '', o._pageSize, 0);
}
MO.FDsSolutionFrameSet_load = function FDsSolutionFrameSet_load(){
   var o = this;
   o._listContent.serviceSearch('private', '', o._pageSize, 0);
}
MO.FDsSolutionFrameSet_dispose = function FDsSolutionFrameSet_dispose(){
   var o = this;
   o.__base.FDuiFrameSet.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsSolutionListContent = function FDsSolutionListContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiListView);
   o._activeControl    = null;
   o._activeGuid       = null;
   o._refreshButton    = null;
   o._saveButton       = null;
   o._runButton        = null;
   o.onBuilded         = MO.FDsSolutionListContent_onBuilded;
   o.onServiceLoad     = MO.FDsSolutionListContent_onServiceLoad;
   o.construct         = MO.FDsSolutionListContent_construct;
   o.doClickItem       = MO.FDsSolutionListContent_doClickItem;
   o.doDoubleClickItem = MO.FDsSolutionListContent_doDoubleClickItem;
   o.serviceSearch     = MO.FDsSolutionListContent_serviceSearch;
   o.serviceResearch   = MO.FDsSolutionListContent_serviceResearch;
   o.dispose           = MO.FDsSolutionListContent_dispose;
   return o;
}
MO.FDsSolutionListContent_onBuilded = function FDsSolutionListContent_onBuilded(p){
   var o = this;
   o.__base.FDuiListView.onBuilded.call(o, p);
}
MO.FDsSolutionListContent_onServiceLoad = function FDsSolutionListContent_onServiceLoad(p){
   var o = this;
   var xprojects = p.root.findNode('ProjectCollection');
   var pageSize = xprojects.getInteger('page_size');
   var pageCount = xprojects.getInteger('page_count');
   var page = xprojects.getInteger('page');
   o._frameSet._listToolbar.setNavigator(pageSize, pageCount, page);
   o.clear();
   var xnodes = xprojects.nodes();
   var count = xnodes.count();
   for(var i = 0; i < count; i++){
      var xnode = xnodes.getAt(i);
      if(xnode.isName('Project')){
         var item = o.createItem(MO.FDsSolutionListItem);
         item.propertyLoad(xnode);
         item._typeCd = xnode.get('type');
         item._guid = xnode.get('guid');
         item.setLabel(MO.Lang.String.nvl(xnode.get('label'), xnode.get('code')));
         item.refreshStyle();
         o.push(item);
      }
   }
   MO.Window.enable();
}
MO.FDsSolutionListContent_construct = function FDsSolutionListContent_construct(){
   var o = this;
   o.__base.FDuiListView.construct.call(o);
}
MO.FDsSolutionListContent_doClickItem = function FDsSolutionListContent_doClickItem(control){
   var o = this;
   o.__base.FDuiListView.doClickItem.call(o, control);
   o._activeControl = control;
   o._activeGuid = control._guid;
}
MO.FDsSolutionListContent_doDoubleClickItem = function FDsSolutionListContent_doDoubleClickItem(control){
   var o = this;
   o.__base.FDuiListView.doDoubleClickItem.call(o, control);
   var guid = control._guid;
   o._activeControl = control;
   o._activeGuid = guid;
   var workspace = o._frameSet._workspace;
   workspace.selectFrameSet(MO.EDsFrameSet.PrivateProjectFrameSet, guid);
}
MO.FDsSolutionListContent_serviceSearch = function FDsSolutionListContent_serviceSearch(typeCd, serach, pageSize, page){
   var o = this;
   o._typeCd = typeCd;
   o._serach = serach;
   o._pageSize = pageSize;
   o._page = page;
   MO.Window.disable();
   var connection = MO.Console.find(MO.FDrProjectConsole).doList(serach, null, pageSize, page);
   connection.addLoadListener(o, o.onServiceLoad);
}
MO.FDsSolutionListContent_serviceResearch = function FDsSolutionListContent_serviceResearch(){
   var o = this;
   o.serviceSearch(o._typeCd, o._serach, o._pageSize, o._page);
}
MO.FDsSolutionListContent_dispose = function FDsSolutionListContent_dispose(){
   var o = this;
   o.__base.FDuiListView.dispose.call(o);
}
MO.FDsSolutionListItem = function FDsSolutionListItem(o){
   o = MO.Class.inherits(this, o, MO.FDuiListViewItem);
   o.onBuild      = MO.FDsSolutionListItem_onBuild;
   o.refreshStyle = MO.FDsSolutionListItem_refreshStyle;
   return o;
}
MO.FDsSolutionListItem_onBuild = function FDsSolutionListItem_onBuild(p){
   var o = this;
   o.__base.FDuiListViewItem.onBuild.call(o, p);
   var h = o._hPanel;
   h.style.width = '200px';
   h.style.height = '150px';
}
MO.FDsSolutionListItem_refreshStyle = function FDsSolutionListItem_refreshStyle(){
   var o = this;
   var url = '/cloud.content.resource.preview.wv?type_cd=' + o._typeCd + '&guid=' + o._guid;
   o._hForm.style.backgroundImage = 'url("' + url + '")';
}
MO.FDsSolutionListToolBar = function FDsSolutionListToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.private.solution.ListToolBar';
   o._pageCount       = 0;
   o._page            = 0;
   o._serach          = null;
   o._resourceTypeCd  = null;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsSolutionListToolBar_onBuilded;
   o.onSearchClick    = MO.FDsSolutionListToolBar_onSearchClick;
   o.onNavigatorClick = MO.FDsSolutionListToolBar_onNavigatorClick;
   o.construct        = MO.FDsSolutionListToolBar_construct;
   o.setNavigator     = MO.FDsSolutionListToolBar_setNavigator;
   o.doNavigator      = MO.FDsSolutionListToolBar_doNavigator;
   o.dispose          = MO.FDsSolutionListToolBar_dispose;
   return o;
}
MO.FDsSolutionListToolBar_onBuilded = function FDsSolutionListToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlSearchEdit.addClickListener(o, o.onSearchClick);
   o._controlFirstButton.addClickListener(o, o.onNavigatorClick);
   o._controlPriorButton.addClickListener(o, o.onNavigatorClick);
   o._controlNextButton.addClickListener(o, o.onNavigatorClick);
   o._controlLastButton.addClickListener(o, o.onNavigatorClick);
}
MO.FDsSolutionListToolBar_onSearchClick = function FDsSolutionListToolBar_onSearchClick(p){
   this.doNavigator(0);
}
MO.FDsSolutionListToolBar_onNavigatorClick = function FDsSolutionListToolBar_onNavigatorClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._page;
   switch(name){
      case 'firstButton':
         page = 0;
         break;
      case 'priorButton':
         page--;
         break;
      case 'nextButton':
         page++;
         break;
      case 'lastButton':
         page = o._pageCount;
         break;
   }
   o.doNavigator(page);
}
MO.FDsSolutionListToolBar_construct = function FDsSolutionListToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsSolutionListToolBar_setNavigator = function FDsSolutionListToolBar_setNavigator(pageSize, pageCount, page){
   var o = this;
   o._pageSize = pageSize;
   o._pageCount = pageCount;
   o._page = page;
   o._controlPageEdit.setText(page);
}
MO.FDsSolutionListToolBar_doNavigator = function FDsSolutionListToolBar_doNavigator(page){
   var o = this;
   page = MO.Lang.Integer.toRange(page, 0, o._pageCount);
   var search = o._controlSearchEdit.text();
   var typeCd = o._frameSet._resourceTypeCd;
   if((o._resourceTypeCd != typeCd) || (o._serach != search) || (o._page != page)){
      o._frameSet._searchContent.serviceSearch(typeCd, search, o._pageSize, page)
   }
   o._resourceTypeCd = typeCd;
   o._serach = search;
}
MO.FDsSolutionListToolBar_dispose = function FDsSolutionListToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsSolutionMenuBar = function FDsSolutionMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._frameName      = 'resource.private.solution.MenuBar';
   o._refreshButton  = null;
   o._saveButton     = null;
   o._runButton      = null;
   o.onBuilded       = MO.FDsSolutionMenuBar_onBuilded;
   o.onCreateClick   = MO.FDsSolutionMenuBar_onCreateClick;
   o.onDeleteLoad    = MO.FDsSolutionMenuBar_onDeleteLoad;
   o.onDeleteExecute = MO.FDsSolutionMenuBar_onDeleteExecute;
   o.onDeleteClick   = MO.FDsSolutionMenuBar_onDeleteClick;
   o.construct       = MO.FDsSolutionMenuBar_construct;
   o.dispose         = MO.FDsSolutionMenuBar_dispose;
   return o;
}
MO.FDsSolutionMenuBar_onBuilded = function FDsSolutionMenuBar_onBuilded(p){
   var o = this;
   o.__base.FDuiMenuBar.onBuilded.call(o, p);
   o._controlCreateButton.addClickListener(o, o.onCreateClick);
   o._controlDeleteButton.addClickListener(o, o.onDeleteClick);
}
MO.FDsSolutionMenuBar_onCreateClick = function FDsSolutionMenuBar_onCreateClick(event){
   var o = this;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsSolutionProjectDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsSolutionMenuBar_onDeleteLoad = function FDsSolutionMenuBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var frame = o._frameSet._listContent;
   frame.serviceResearch();
}
MO.FDsSolutionMenuBar_onDeleteExecute = function FDsSolutionMenuBar_onDeleteExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      MO.Console.find(MO.FDuiDesktopConsole).hide();
      return
   }
   var listContent = o._frameSet._listContent;
   var guid = listContent._activeGuid;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrProjectConsole).doDelete(guid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsSolutionMenuBar_onDeleteClick = function FDsSolutionMenuBar_onDeleteClick(event){
   var o = this;
   var item = o._frameSet._listContent.focusItem();
   if(!item){
      return alert('请选中后再点击删除');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前项目？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsSolutionMenuBar_construct = function FDsSolutionMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsSolutionMenuBar_dispose = function FDsSolutionMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsSolutionProjectDialog = function FDsSolutionProjectDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.private.solution.ProjectDialog';
   o._resourceTypeCd       = 'private';
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   o.onBuilded             = MO.FDsSolutionProjectDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsSolutionProjectDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsSolutionProjectDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsSolutionProjectDialog_onCancelClick;
   o.construct             = MO.FDsSolutionProjectDialog_construct;
   o.dispose               = MO.FDsSolutionProjectDialog_dispose;
   return o;
}
MO.FDsSolutionProjectDialog_onBuilded = function FDsSolutionProjectDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsSolutionProjectDialog_onConfirmLoad = function FDsSolutionProjectDialog_onConfirmLoad(event){
   var o = this;
   var frame = o._frameSet._listContent;
   frame.serviceResearch();
   o.hide();
   RWindow.enable();
}
MO.FDsSolutionProjectDialog_onConfirmClick = function FDsSolutionProjectDialog_onConfirmClick(event){
   var o = this;
   RWindow.disable();
   var code = o._controlCode.get();
   var label = o._controlLabel.get();
   var project = MO.Class.create(MO.FDrProject);
   project.setCode(code);
   project.setLabel(label);
   var connection = MO.Console.find(MO.FDrProjectConsole).doCreate(project);
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsSolutionProjectDialog_onCancelClick = function FDsSolutionProjectDialog_onCancelClick(event){
   this.hide();
}
MO.FDsSolutionProjectDialog_construct = function FDsSolutionProjectDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsSolutionProjectDialog_dispose = function FDsSolutionProjectDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsSolutionProjectProperty = function FDsSolutionProjectProperty(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._visible          = false;
   o._workspace        = null;
   o._activeSpace      = null;
   o._activeCamera     = null;
   o._controlGuid      = null;
   o._controlCode      = null;
   o._controlLabel     = null;
   o._controlPosition  = null;
   o._controlDirection = null;
   o.onBuilded         = MO.FDsSolutionProjectProperty_onBuilded;
   o.onDataChanged     = MO.FDsSolutionProjectProperty_onDataChanged;
   o.onLoadProject     = MO.FDsSolutionProjectProperty_onLoadProject;
   o.construct         = MO.FDsSolutionProjectProperty_construct;
   o.loadObject        = MO.FDsSolutionProjectProperty_loadObject;
   o.dispose           = MO.FDsSolutionProjectProperty_dispose;
   return o;
}
MO.FDsSolutionProjectProperty_onBuilded = function FDsSolutionProjectProperty_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
}
MO.FDsSolutionProjectProperty_onDataChanged = function FDsSolutionProjectProperty_onDataChanged(p){
   var o = this;
   var camera = o._activeCamera;
   var resource = camera.resource();
   resource.position().assign(o._controlPosition.get());
   resource.direction().assign(o._controlDirection.get());
   camera.position().assign(resource.position());
   camera.direction().assign(resource.direction());
   camera.update();
}
MO.FDsSolutionProjectProperty_onLoadProject = function FDsSolutionProjectProperty_onLoadProject(event){
   var o = this;
   var xproject = event.root.findNode('Project');
   o._controlCode.set(xproject.get('code'));
   o._controlLabel.set(xproject.get('label'));
}
MO.FDsSolutionProjectProperty_construct = function FDsSolutionProjectProperty_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsSolutionProjectProperty_loadObject = function FDsSolutionProjectProperty_loadObject(control){
   var o = this;
   var guid = control._guid;
   o._controlGuid.set(guid);
   var connection = MO.Console.find(MO.FDrProjectConsole).doQuery(guid);
   connection.addLoadListener(o, o.onLoadProject);
}
MO.FDsSolutionProjectProperty_dispose = function FDsSolutionProjectProperty_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsSolutionPropertyContent = function FDsSolutionPropertyContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._activeSpace         = null;
   o._canvasModeCd        = MO.EDsCanvasMode.Drop;
   o._canvasMoveCd        = MO.EDsCanvasDrag.Unknown;
   o._optionRotation      = false;
   o._rotation            = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._captureRotation     = null;
   o._dimensional         = null;
   o._selectObject        = null;
   o._selectBoundBox      = null;
   o._selectRenderables   = null;
   o._cameraMoveRate      = 8;
   o._cameraKeyRotation   = 3;
   o._cameraMouseRotation = 0.005;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsSolutionPropertyContent_onBuild;
   o.onMouseCaptureStart  = MO.FDsSolutionPropertyContent_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsSolutionPropertyContent_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsSolutionPropertyContent_onMouseCaptureStop;
   o.onEnterFrame         = MO.FDsSolutionPropertyContent_onEnterFrame;
   o.onMeshLoad           = MO.FDsSolutionPropertyContent_onMeshLoad;
   o.oeResize             = MO.FDsSolutionPropertyContent_oeResize;
   o.oeRefresh            = MO.FDsSolutionPropertyContent_oeRefresh;
   o.construct            = MO.FDsSolutionPropertyContent_construct;
   o.innerSelectDisplay   = MO.FDsSolutionPropertyContent_innerSelectDisplay;
   o.innerSelectLayer     = MO.FDsSolutionPropertyContent_innerSelectLayer;
   o.switchRotation       = MO.FDsSolutionPropertyContent_switchRotation;
   o.reloadRegion         = MO.FDsSolutionPropertyContent_reloadRegion;
   o.loadMeshByGuid       = MO.FDsSolutionPropertyContent_loadMeshByGuid;
   o.loadMeshByCode       = MO.FDsSolutionPropertyContent_loadMeshByCode;
   o.dispose              = MO.FDsSolutionPropertyContent_dispose;
   return o;
}
MO.FDsSolutionPropertyContent_onBuild = function FDsSolutionPropertyContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsSolutionPropertyContent_onMouseCaptureStart = function FDsSolutionPropertyContent_onMouseCaptureStart(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var r = o._activeSpace.region();
   var st = MO.Console.find(MO.FG3dTechniqueConsole).find(o._graphicContext, FG3dSelectTechnique);
   var r = st.test(r, p.offsetX, p.offsetY);
   o.selectRenderable(r);
   o._capturePosition.set(p.clientX, p.clientY);
   o._captureRotation.assign(s.camera()._rotation);
   if(r){
      var d = r.display();
      o._captureMatrix.assign(d.matrix());
   }
   o._templateMatrix.identity();
   if(o._templateFace){
      o._templateFaceMatrix.assign(o._templateFace.matrix());
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         if(!r._dragMatrix){
            r._dragMatrix = new MO.SMatrix3d();
         }
         r._dragMatrix.assign(r.matrix());
      }
   }
   RHtml.cursorSet(o._hPanel, EUiCursor.Pointer);
}
MO.FDsSolutionPropertyContent_onMouseCapture = function FDsSolutionPropertyContent_onMouseCapture(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var mc = o._canvasModeCd;
   var mv = o._canvasMoveCd;
   var cm = o._captureMatrix;
   var sm = null;
   var tf = o._templateFace;
   var tm = o._templateMatrix;
   switch(mc){
      case MO.EDsCanvasMode.Drop:
         var c = o._activeSpace.camera();
         var r = c.rotation();
         var cr = o._captureRotation;
         r.x = cr.x - cy * o._cameraMouseRotation;
         r.y = cr.y - cx * o._cameraMouseRotation;
         break;
      case MO.EDsCanvasMode.Select:
         break;
      case MO.EDsCanvasMode.Translate:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.tx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ty = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.tz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Rotation:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.rx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ry = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.rz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Scale:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.sx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.sy = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.sz = cx / 10;
            }else if(mv == EDsCanvasDrag.All){
               tm.sx = cx / 10;
               tm.sy = cx / 10;
               tm.sz = cx / 10;
            }
         }
         break;
   }
   if(tf){
      tf.matrix().merge(o._templateFaceMatrix, tm);
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         r._matrix.merge(r._dragMatrix, tm);
      }
   }
}
MO.FDsSolutionPropertyContent_onMouseCaptureStop = function FDsSolutionPropertyContent_onMouseCaptureStop(p){
   var o = this;
   RHtml.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsSolutionPropertyContent_onEnterFrame = function FDsSolutionPropertyContent_onEnterFrame(){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var st = s.timer();
   var ss = st.spanSecond();
   var c = s.camera();
   var d = o._cameraMoveRate * ss;
   var r = o._cameraKeyRotation * ss;
   var kf = RKeyboard.isPress(EStageKey.Forward);
   var kb = RKeyboard.isPress(EStageKey.Back);
   if(kf && !kb){
      c.doWalk(d);
   }
   if(!kf && kb){
      c.doWalk(-d);
   }
   var kq = RKeyboard.isPress(EStageKey.Up);
   var ke = RKeyboard.isPress(EStageKey.Down);
   if(kq && !ke){
      c.doFly(d);
   }
   if(!kq && ke){
      c.doFly(-d);
   }
   var ka = RKeyboard.isPress(EStageKey.RotationLeft);
   var kd = RKeyboard.isPress(EStageKey.RotationRight);
   if(ka && !kd){
      c.doYaw(r);
   }
   if(!ka && kd){
      c.doYaw(-r);
   }
   var kz = RKeyboard.isPress(EStageKey.RotationUp);
   var kw = RKeyboard.isPress(EStageKey.RotationDown);
   if(kz && !kw){
      c.doPitch(r);
   }
   if(!kz && kw){
      c.doPitch(-r);
   }
   c.update();
   if(o._optionRotation){
      var r = o._rotation;
      var display = o._activeSpace._display;
      var matrix = display.matrix();
      matrix.setRotation(matrix.rx, matrix.ry + r.y, matrix.rz);
      matrix.update();
      r.y = 0.01;
   }
}
MO.FDsSolutionPropertyContent_onMeshLoad = function FDsSolutionPropertyContent_onMeshLoad(p){
   var o = this;
   var m = o._activeSpace;
   var g = m.region();
   var rc = g.camera();
   rc.setPosition(0, 3, -10);
   rc.lookAt(0, 3, 0);
   rc.update();
   var h = o._hPanel;
   var rp = rc.projection();
   rp.size().set(h.width, h.height);
   rp._angle = 45;
   rp.update();
   var l = g.directionalLight();
   var lc = l.camera();
   lc.setPosition(10, 10, 0);
   lc.lookAt(0, 0, 0);
   lc.update();
   o.processLoadListener(o);
}
MO.FDsSolutionPropertyContent_oeResize = function FDsSolutionPropertyContent_oeResize(p){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, p);
   var hp = o._hPanel;
   var w = hp.offsetWidth;
   var h = hp.offsetHeight;
   var s = o._activeSpace;
   if(s){
      var cp = s.camera().projection();
      cp.size().set(w, h);
      cp.update();
   }
   return EEventStatus.Stop;
}
MO.FDsSolutionPropertyContent_oeRefresh = function FDsSolutionPropertyContent_oeRefresh(p){
   return EEventStatus.Stop;
}
MO.FDsSolutionPropertyContent_construct = function FDsSolutionPropertyContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
   o._selectRenderables = new TObjects();
}
MO.FDsSolutionPropertyContent_innerSelectDisplay = function FDsSolutionPropertyContent_innerSelectDisplay(p){
   var o = this;
   var s = p.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.getAt(i);
      if(MO.Class.isClass(r, FDsSceneRenderable)){
         o._selectRenderables.push(r);
         r.showBoundBox();
      }
   }
}
MO.FDsSolutionPropertyContent_innerSelectLayer = function FDsSolutionPropertyContent_innerSelectLayer(p){
   var o = this;
   var s = p.displays();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var d = s.getAt(i);
      o.innerSelectDisplay(d)
   }
}
MO.FDsSolutionPropertyContent_switchMode = function FDsSolutionPropertyContent_switchMode(p){
   var o = this;
   o._canvasModeCd = p;
}
MO.FDsSolutionPropertyContent_switchRotation = function FDsSolutionPropertyContent_switchRotation(p){
   this._optionRotation = p;
}
MO.FDsSolutionPropertyContent_reloadRegion = function FDsSolutionPropertyContent_reloadRegion(region){
   var o = this;
   var resource = region.resource();
   o._cameraMoveRate = resource.moveSpeed();
   o._cameraKeyRotation = resource.rotationKeySpeed();
   o._cameraMouseRotation = resource.rotationMouseSpeed();
}
MO.FDsSolutionPropertyContent_loadMeshByGuid = function FDsSolutionPropertyContent_loadMeshByGuid(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByGuid(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsSolutionPropertyContent_loadMeshByCode = function FDsSolutionPropertyContent_loadMeshByCode(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByCode(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsSolutionPropertyContent_dispose = function FDsSolutionPropertyContent_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsSolutionPropertyToolBar = function FDsSolutionPropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName           = 'resource.solution.PropertyToolBar';
   o._controlInsertButton = null;
   o._controlUpdateButton = null;
   o._controlDeleteButton = null;
   o.onBuilded            = MO.FDsSolutionPropertyToolBar_onBuilded;
   o.onUpdateClick        = MO.FDsSolutionPropertyToolBar_onUpdateClick;
   o.construct            = MO.FDsSolutionPropertyToolBar_construct;
   o.dispose              = MO.FDsSolutionPropertyToolBar_dispose;
   return o;
}
MO.FDsSolutionPropertyToolBar_onBuilded = function FDsSolutionPropertyToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlUpdateButton.addClickListener(o, o.onUpdateClick);
}
MO.FDsSolutionPropertyToolBar_onUpdateClick = function FDsSolutionPropertyToolBar_onUpdateClick(event){
   var o = this;
   var guid = o._workspace._activeProjectGuid;
   window.location = 'Project.wa?do=detail&guid=' + guid;
}
MO.FDsSolutionPropertyToolBar_construct = function FDsSolutionPropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsSolutionPropertyToolBar_dispose = function FDsSolutionPropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectCanvasContent = function FDsProjectCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiListView);
   o._refreshButton = null;
   o._saveButton    = null;
   o._runButton     = null;
   o.onBuilded      = MO.FDsProjectCanvasContent_onBuilded;
   o.onServiceLoad  = MO.FDsProjectCanvasContent_onServiceLoad;
   o.construct      = MO.FDsProjectCanvasContent_construct;
   o.clickItem      = MO.FDsProjectCanvasContent_clickItem;
   o.serviceSearch  = MO.FDsProjectCanvasContent_serviceSearch;
   o.dispose        = MO.FDsProjectCanvasContent_dispose;
   return o;
}
MO.FDsProjectCanvasContent_onBuilded = function FDsProjectCanvasContent_onBuilded(p){
   var o = this;
   o.__base.FDuiListView.onBuilded.call(o, p);
}
MO.FDsProjectCanvasContent_onServiceLoad = function FDsProjectCanvasContent_onServiceLoad(p){
   var o = this;
   var xprojects = p.root.findNode('ProjectCollection');
   var pageSize = xprojects.getInteger('page_size');
   var pageCount = xprojects.getInteger('page_count');
   var page = xprojects.getInteger('page');
   o._workspace._searchToolbar.setNavigator(pageSize, pageCount, page);
   o.clear();
   var xnodes = xitems.nodes();
   var count = xnodes.count();
   for(var i = 0; i < count; i++){
      var xnode = xnodes.getAt(i);
      if(xnode.isName('Project')){
         var item = o.createItem(MO.FDsProjectSearchItem);
         item.propertyLoad(xnode);
         item._typeCd = xnode.get('type');
         item._guid = xnode.get('guid');
         item.setLabel(MO.Lang.String.nvl(xnode.get('label'), xnode.get('code')));
         item.refreshStyle();
         o.push(item);
      }
   }
   RWindow.enable();
}
MO.FDsProjectCanvasContent_construct = function FDsProjectCanvasContent_construct(){
   var o = this;
   o.__base.FDuiListView.construct.call(o);
}
MO.FDsProjectCanvasContent_clickItem = function FDsProjectCanvasContent_clickItem(p){
   var o = this;
   var frame = o._workspace._previewContent;
   frame._activeItem = p;
   frame.loadMeshByGuid(p._guid);
}
MO.FDsProjectCanvasContent_serviceSearch = function FDsProjectCanvasContent_serviceSearch(typeCd, serach, pageSize, page){
   var o = this;
   RWindow.disable();
   var connection = MO.Console.find(MO.FDrResourceConsole).fetch(typeCd, serach, null, pageSize, page);
   connection.addLoadListener(o, o.onServiceLoad);
}
MO.FDsProjectCanvasContent_dispose = function FDsProjectCanvasContent_dispose(){
   var o = this;
   o.__base.FDuiListView.dispose.call(o);
}
MO.FDsProjectCanvasPreviewToolBar = function FDsProjectCanvasPreviewToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.project.CanvasPreviewToolBar';
   o._pageCount       = 0;
   o._page            = 0;
   o._serach          = null;
   o._resourceTypeCd  = null;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsProjectCanvasPreviewToolBar_onBuilded;
   o.onSearchClick    = MO.FDsProjectCanvasPreviewToolBar_onSearchClick;
   o.onNavigatorClick = MO.FDsProjectCanvasPreviewToolBar_onNavigatorClick;
   o.construct        = MO.FDsProjectCanvasPreviewToolBar_construct;
   o.setNavigator     = MO.FDsProjectCanvasPreviewToolBar_setNavigator;
   o.doNavigator      = MO.FDsProjectCanvasPreviewToolBar_doNavigator;
   o.dispose          = MO.FDsProjectCanvasPreviewToolBar_dispose;
   return o;
}
MO.FDsProjectCanvasPreviewToolBar_onBuilded = function FDsProjectCanvasPreviewToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectCanvasPreviewToolBar_onSearchClick = function FDsProjectCanvasPreviewToolBar_onSearchClick(p){
   this.doNavigator(0);
}
MO.FDsProjectCanvasPreviewToolBar_onNavigatorClick = function FDsProjectCanvasPreviewToolBar_onNavigatorClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._page;
   switch(name){
      case 'firstButton':
         page = 0;
         break;
      case 'priorButton':
         page--;
         break;
      case 'nextButton':
         page++;
         break;
      case 'lastButton':
         page = o._pageCount;
         break;
   }
   o.doNavigator(page);
}
MO.FDsProjectCanvasPreviewToolBar_construct = function FDsProjectCanvasPreviewToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectCanvasPreviewToolBar_setNavigator = function FDsProjectCanvasPreviewToolBar_setNavigator(pageSize, pageCount, page){
   var o = this;
   o._pageSize = pageSize;
   o._pageCount = pageCount;
   o._page = page;
   o._controlPageEdit.setText(page);
}
MO.FDsProjectCanvasPreviewToolBar_doNavigator = function FDsProjectCanvasPreviewToolBar_doNavigator(page){
   var o = this;
   page = MO.Lang.Integer.toRange(page, 0, o._pageCount);
   var search = o._controlSearchEdit.text();
   var typeCd = o._workspace._resourceTypeCd;
   if((o._resourceTypeCd != typeCd) || (o._serach != search) || (o._page != page)){
      o._workspace._searchContent.serviceSearch(typeCd, search, o._pageSize, page)
   }
   o._resourceTypeCd = typeCd;
   o._serach = search;
}
MO.FDsProjectCanvasPreviewToolBar_dispose = function FDsProjectCanvasPreviewToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectCanvasSpaceToolBar = function FDsProjectCanvasSpaceToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.project.CanvasSpaceToolBar';
   o._pageCount       = 0;
   o._page            = 0;
   o._serach          = null;
   o._resourceTypeCd  = null;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsProjectCanvasSpaceToolBar_onBuilded;
   o.onSearchClick    = MO.FDsProjectCanvasSpaceToolBar_onSearchClick;
   o.onNavigatorClick = MO.FDsProjectCanvasSpaceToolBar_onNavigatorClick;
   o.construct        = MO.FDsProjectCanvasSpaceToolBar_construct;
   o.setNavigator     = MO.FDsProjectCanvasSpaceToolBar_setNavigator;
   o.doNavigator      = MO.FDsProjectCanvasSpaceToolBar_doNavigator;
   o.dispose          = MO.FDsProjectCanvasSpaceToolBar_dispose;
   return o;
}
MO.FDsProjectCanvasSpaceToolBar_onBuilded = function FDsProjectCanvasSpaceToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectCanvasSpaceToolBar_onSearchClick = function FDsProjectCanvasSpaceToolBar_onSearchClick(p){
   this.doNavigator(0);
}
MO.FDsProjectCanvasSpaceToolBar_onNavigatorClick = function FDsProjectCanvasSpaceToolBar_onNavigatorClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._page;
   switch(name){
      case 'firstButton':
         page = 0;
         break;
      case 'priorButton':
         page--;
         break;
      case 'nextButton':
         page++;
         break;
      case 'lastButton':
         page = o._pageCount;
         break;
   }
   o.doNavigator(page);
}
MO.FDsProjectCanvasSpaceToolBar_construct = function FDsProjectCanvasSpaceToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectCanvasSpaceToolBar_setNavigator = function FDsProjectCanvasSpaceToolBar_setNavigator(pageSize, pageCount, page){
   var o = this;
   o._pageSize = pageSize;
   o._pageCount = pageCount;
   o._page = page;
   o._controlPageEdit.setText(page);
}
MO.FDsProjectCanvasSpaceToolBar_doNavigator = function FDsProjectCanvasSpaceToolBar_doNavigator(page){
   var o = this;
   page = RInteger.toRange(page, 0, o._pageCount);
   var search = o._controlSearchEdit.text();
   var typeCd = o._workspace._resourceTypeCd;
   if((o._resourceTypeCd != typeCd) || (o._serach != search) || (o._page != page)){
      o._workspace._searchContent.serviceSearch(typeCd, search, o._pageSize, page)
   }
   o._resourceTypeCd = typeCd;
   o._serach = search;
}
MO.FDsProjectCanvasSpaceToolBar_dispose = function FDsProjectCanvasSpaceToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectCatalogContent = function FDsProjectCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiDataTreeView, MO.MListenerSelected);
   o._iconView             = 'design3d.mesh.view';
   o._iconViewNot          = 'design3d.mesh.viewno';
   o._activeSpace          = null;
   o._materials            = null;
   o.onBuild               = MO.FDsProjectCatalogContent_onBuild;
   o.onLoadDisplay         = MO.FDsProjectCatalogContent_onLoadDisplay;
   o.onNodeClick           = MO.FDsProjectCatalogContent_onNodeClick;
   o.onNodeViewClick       = MO.FDsProjectCatalogContent_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsProjectCatalogContent_onNodeViewDoubleClick;
   o.lsnsSelect            = null;
   o.construct             = MO.FDsProjectCatalogContent_construct;
   o.buildTechnique        = MO.FDsProjectCatalogContent_buildTechnique;
   o.buildRegion           = MO.FDsProjectCatalogContent_buildRegion;
   o.buildRenderable       = MO.FDsProjectCatalogContent_buildRenderable;
   o.buildDisplay          = MO.FDsProjectCatalogContent_buildDisplay;
   o.buildSpace            = MO.FDsProjectCatalogContent_buildSpace;
   o.selectObject          = MO.FDsProjectCatalogContent_selectObject;
   o.showObject            = MO.FDsProjectCatalogContent_showObject;
   o.dispose               = MO.FDsProjectCatalogContent_dispose;
   return o;
}
MO.FDsProjectCatalogContent_onBuild = function FDsProjectCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDuiDataTreeView.onBuild.call(o, p);
   o.lsnsClick.register(o, o.onNodeClick);
   o.loadUrl('/cloud.describe.tree.ws?action=query&code=resource.project');
}
MO.FDsProjectCatalogContent_onLoadDisplay = function FDsProjectCatalogContent_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRenderable(n, p);
}
MO.FDsProjectCatalogContent_onNodeClick = function FDsProjectCatalogContent_onNodeClick(t, n){
   var o = this;
   var s = n.dataPropertyGet('linker');
   o.selectObject(s);
}
MO.FDsProjectCatalogContent_onNodeViewClick = function FDsProjectCatalogContent_onNodeViewClick(p){
   var o = this;
   var c = p.treeNodeCell;
   var s = p.treeNode.dataPropertyGet('linker');
   if(MO.Class.isClass(s, FDisplay)){
      if(p.ctrlKey){
         var ds = o._displays;
         for(var i = ds.count() - 1; i >= 0; i--){
            var nd = ds.get(i);
            var d = nd.dataPropertyGet('linker');
            d._visible = false;
            nd.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, FDrawable)){
      if(p.ctrlKey){
         var rs = o._renderables;
         for(var i = rs.count() - 1; i >= 0; i--){
            var nr = rs.get(i);
            var r = nr.dataPropertyGet('linker');
            r._visible = false;
            nr.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, FG3dMaterial)){
      if(p.ctrlKey){
         var ms = o._materials;
         for(var i = ms.count() - 1; i >= 0; i--){
            var nm = ms.get(i);
            var m = nm.dataPropertyGet('linker');
            m._visible = false;
            nm.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
}
MO.FDsProjectCatalogContent_onNodeViewDoubleClick = function FDsProjectCatalogContent_onNodeViewDoubleClick(p){
   var o = this;
   var n = p.treeNode;
   var c = p.treeNodeCell;
   var s = n.dataPropertyGet('linker');
   if(MO.Class.isClass(s, FDisplay)){
      var s = o._displays;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var d = n.dataPropertyGet('linker');
         d._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, FDrawable)){
      var s = o._renderables;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var r = n.dataPropertyGet('linker');
         r._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, FG3dMaterial)){
      var s = o._materials;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var m = n.dataPropertyGet('linker');
         m._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
}
MO.FDsProjectCatalogContent_construct = function FDsProjectCatalogContent_construct(){
   var o = this;
   o.__base.FDuiDataTreeView.construct.call(o);
   o._renderables = new TObjects();
   o._materials = new TObjects();
}
MO.FDsProjectCatalogContent_buildTechnique = function FDsProjectCatalogContent_buildTechnique(n, p){
   var o = this;
   var nt = o.createNode();
   nt.setLabel('Technique');
   nt.setTypeCode('technique');
   nt.dataPropertySet('linker', p);
   n.appendNode(nt);
}
MO.FDsProjectCatalogContent_buildRegion = function FDsProjectCatalogContent_buildRegion(n, p){
   var o = this;
   var nr = o.createNode();
   nr.setLabel('Region');
   nr.setTypeCode('region');
   nr.dataPropertySet('linker', p);
   n.appendNode(nr);
   var nc = o.createNode();
   nc.setLabel('Camera');
   nc.setTypeCode('camera');
   nc.dataPropertySet('linker', p.camera());
   nr.appendNode(nc);
   var nl = o.createNode();
   nl.setLabel('Light');
   nl.setTypeCode('light');
   nl.dataPropertySet('linker', p.directionalLight());
   nr.appendNode(nl);
}
MO.FDsProjectCatalogContent_buildRenderable = function FDsProjectCatalogContent_buildRenderable(n, p){
   var o = this;
   var m = p._renderable._material;
   var dn = o.createNode();
   dn.setTypeCode('material');
   dn.setLabel('Material');
   dn.dataPropertySet('linker', m);
   o._materials.push(dn);
   n.appendNode(dn);
   var r = p._renderable;
   var dn = o.createNode();
   dn.setTypeCode('renderable');
   dn.setLabel('Renderable');
   dn.dataPropertySet('linker', r);
   o._renderables.push(dn);
   n.appendNode(dn);
}
MO.FDsProjectCatalogContent_buildDisplay = function FDsProjectCatalogContent_buildDisplay(n, p){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('display');
   node.setLabel('Mesh');
   node.dataPropertySet('linker', p);
   n.appendNode(node);
   o.buildRenderable(node, p);
}
MO.FDsProjectCatalogContent_buildSpace = function FDsProjectCatalogContent_buildSpace(space){
   var o = this;
   var resource = space.resource();
   o._activeSpace = space;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel(resource.code());
   node.setNote(resource.label());
   node.dataPropertySet('linker', space);
   o.appendNode(node);
   o.buildTechnique(node, space.technique())
   o.buildRegion(node, space.region());
   o.buildDisplay(node, space._display);
   node.click();
}
MO.FDsProjectCatalogContent_selectObject = function FDsProjectCatalogContent_selectObject(p){
   var o = this;
   if(p != null){
      o.processSelectedListener(p, true);
   }
}
MO.FDsProjectCatalogContent_showObject = function FDsProjectCatalogContent_showObject(p){
   var o = this;
   if(MO.Class.isClass(p, FDsSceneRenderable)){
      var s = o._renderables;
      var c = s.count();
      for(var i = 0; i < c; i++){
         var nr = s.getAt(i);
         var r = nr.dataPropertyGet('linker');
         if(r == p){
            o.processSelectedListener(p, false);
         }
      }
   }
}
MO.FDsProjectCatalogContent_dispose = function FDsProjectCatalogContent_dispose(){
   var o = this;
   o._displays = MO.Lang.Object.dispose(o._displays);
   o._renderables = MO.Lang.Object.dispose(o._renderables);
   o._materials = MO.Lang.Object.dispose(o._materials);
   o.__base.FDuiDataTreeView.dispose.call(o);
}
MO.FDsProjectCatalogToolBar = function FDsProjectCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.project.CatalogToolBar';
   o._canvasModeCd    = MO.EDsCanvasMode.Drop;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsProjectCatalogToolBar_onBuilded;
   o.onModeClick      = MO.FDsProjectCatalogToolBar_onModeClick;
   o.onRotationClick  = MO.FDsProjectCatalogToolBar_onRotationClick;
   o.construct        = MO.FDsProjectCatalogToolBar_construct;
   o.dispose          = MO.FDsProjectCatalogToolBar_dispose;
   return o;
}
MO.FDsProjectCatalogToolBar_onBuilded = function FDsProjectCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectCatalogToolBar_onModeClick = function FDsProjectCatalogToolBar_onModeClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
   o._workspace._canvas.switchMode(p._canvasModeCd);
}
MO.FDsProjectCatalogToolBar_onRotationClick = function FDsProjectCatalogToolBar_onRotationClick(p, v){
   var o = this;
   var c = o._workspace._canvas;
   c.switchRotation(v);
}
MO.FDsProjectCatalogToolBar_construct = function FDsProjectCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectCatalogToolBar_dispose = function FDsProjectCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectFrameSet = function FDsProjectFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDuiFrameSet);
   o._frameName            = 'resource.project.FrameSet';
   o._stylePageControl     = MO.Class.register(o, new MO.AStyle('_stylePageControl', 'PageControl'));
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._styleCatalogGround   = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleCanvasGround    = MO.Class.register(o, new MO.AStyle('_styleCanvasGround', 'Canvas_Ground'));
   o._styleCanvasContent   = MO.Class.register(o, new MO.AStyle('_styleCanvasContent', 'Canvas_Content'));
   o._stylePropertyGround  = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   o._activeSpace          = null;
   o._activeMesh           = null;
   o._framesetMain         = null;
   o._framesetBody         = null;
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameCatalog         = null;
   o._frameCanvas          = null;
   o._frameStatusBar       = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsProjectFrameSet_onBuilded;
   o.onMeshLoad            = MO.FDsProjectFrameSet_onMeshLoad;
   o.onCatalogSelected     = MO.FDsProjectFrameSet_onCatalogSelected;
   o.construct             = MO.FDsProjectFrameSet_construct;
   o.findPropertyFrame     = MO.FDsProjectFrameSet_findPropertyFrame;
   o.loadByGuid            = MO.FDsProjectFrameSet_loadByGuid;
   o.dispose               = MO.FDsProjectFrameSet_dispose;
   return o;
}
MO.FDsProjectFrameSet_onBuilded = function FDsProjectFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDuiFrameSet.onBuilded.call(o, event);
   var frame = o._frameCatalog = o.searchControl('catalogFrame');
   frame._hPanel.className = o.styleName('Catalog_Ground');
   var control = o._frameCatalogPageControl = o.searchControl('catalogPageControl');
   control._hPanel.className = o.styleName('PageControl');
   var frame = o._frameSceneListToolBar = o.searchControl('sceneListToolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameSceneListContent = o.searchControl('sceneListContentFrame');
   frame._hPanel.className = o.styleName('Catalog_Content');
   var frame = o._frameSceneCatalogToolBar = o.searchControl('sceneCatalogToolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameSceneCatalogContent = o.searchControl('sceneCatalogContentFrame');
   frame._hPanel.className = o.styleName('Catalog_Content');
   var frame = o._frameCanvas = o.searchControl('canvasFrame');
   frame._hPanel.className = o.styleName('Canvas_Ground');
   var control = o._frameCanvasPageControl = o.searchControl('canvasPageControl');
   control._hPanel.className = o.styleName('PageControl');
   var frame = o._frameCanvasSpaceToolBar = o.searchControl('canvasSpaceToolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameCanvasSpaceContent = o.searchControl('canvasSpaceContentFrame');
   frame._hPanel.className = o.styleName('Canvas_Content');
   var frame = o._frameCanvasPreviewToolBar = o.searchControl('canvasPreviewToolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameCanvasPreviewContent = o.searchControl('canvasPreviewContentFrame');
   frame._hPanel.className = o.styleName('Canvas_Content');
   var frame = o._frameProperty = o.searchControl('propertyFrame');
   frame._hPanel.className = o.styleName('Property_Ground');
   var control = o._framePropertyPageControl = o.searchControl('propertyPageControl');
   control._hPanel.className = o.styleName('PageControl');
   var frame = o._framePropertyAttributeToolBar = o.searchControl('propertyAttributeToolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._framePropertyAttributeContent = o.searchControl('propertyAttributeContentFrame');
   frame._hPanel.className = o.styleName('Property_Content');
   var f = o._catalogSplitter = o.searchControl('catalogSpliter');
   f.setAlignCd(MO.EUiAlign.Left);
   f.setSizeHtml(o._frameCatalog._hPanel);
   var f = o._propertySpliter = o.searchControl('propertySpliter');
   f.setAlignCd(MO.EUiAlign.Right);
   f.setSizeHtml(o._frameProperty._hPanel);
}
MO.FDsProjectFrameSet_onMeshLoad = function FDsProjectFrameSet_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsProjectFrameSet_onCatalogSelected = function FDsProjectFrameSet_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsProjectFrameSet_construct = function FDsProjectFrameSet_construct(){
   var o = this;
   o.__base.FDuiFrameSet.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsProjectFrameSet_findPropertyFrame = function FDsProjectFrameSet_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._frameProperty._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsProjectFrameSet_loadByGuid = function FDsProjectFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._sceneListContent.serviceList(guid);
}
MO.FDsProjectFrameSet_dispose = function FDsProjectFrameSet_dispose(){
   var o = this;
   o.__base.FDuiFrameSet.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsProjectMenuBar = function FDsProjectMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._refreshButton = null;
   o._saveButton    = null;
   o._runButton     = null;
   o.onBuilded      = MO.FDsProjectMenuBar_onBuilded;
   o.onSaveClick    = MO.FDsProjectMenuBar_onSaveClick;
   o.construct      = MO.FDsProjectMenuBar_construct;
   o.dispose        = MO.FDsProjectMenuBar_dispose;
   return o;
}
MO.FDsProjectMenuBar_onBuilded = function FDsProjectMenuBar_onBuilded(p){
   var o = this;
   o.__base.FDuiMenuBar.onBuilded.call(o, p);
   o._controlSave.addClickListener(o, o.onSaveClick);
}
MO.FDsProjectMenuBar_onSaveClick = function FDsProjectMenuBar_onSaveClick(p){
   var o = this;
   var space = o._workspace._activeSpace;
   var resource = space.resource();
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   MO.Console.find(MO.FE3sMeshConsole).update(xconfig);
}
MO.FDsProjectMenuBar_construct = function FDsProjectMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsProjectMenuBar_dispose = function FDsProjectMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsProjectPropertyContent = function FDsProjectPropertyContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._activeSpace         = null;
   o._canvasModeCd        = MO.EDsCanvasMode.Drop;
   o._canvasMoveCd        = MO.EDsCanvasDrag.Unknown;
   o._optionRotation      = false;
   o._rotation            = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._captureRotation     = null;
   o._dimensional         = null;
   o._selectObject        = null;
   o._selectBoundBox      = null;
   o._selectRenderables   = null;
   o._cameraMoveRate      = 8;
   o._cameraKeyRotation   = 3;
   o._cameraMouseRotation = 0.005;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsProjectPropertyContent_onBuild;
   o.onMouseCaptureStart  = MO.FDsProjectPropertyContent_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsProjectPropertyContent_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsProjectPropertyContent_onMouseCaptureStop;
   o.onEnterFrame         = MO.FDsProjectPropertyContent_onEnterFrame;
   o.onMeshLoad           = MO.FDsProjectPropertyContent_onMeshLoad;
   o.oeResize             = MO.FDsProjectPropertyContent_oeResize;
   o.oeRefresh            = MO.FDsProjectPropertyContent_oeRefresh;
   o.construct            = MO.FDsProjectPropertyContent_construct;
   o.innerSelectDisplay   = MO.FDsProjectPropertyContent_innerSelectDisplay;
   o.innerSelectLayer     = MO.FDsProjectPropertyContent_innerSelectLayer;
   o.selectNone           = MO.FDsProjectPropertyContent_selectNone;
   o.selectDisplay        = MO.FDsProjectPropertyContent_selectDisplay;
   o.selectMaterial       = MO.FDsProjectPropertyContent_selectMaterial;
   o.selectRenderable     = MO.FDsProjectPropertyContent_selectRenderable;
   o.switchRotation       = MO.FDsProjectPropertyContent_switchRotation;
   o.reloadRegion         = MO.FDsProjectPropertyContent_reloadRegion;
   o.loadMeshByGuid       = MO.FDsProjectPropertyContent_loadMeshByGuid;
   o.loadMeshByCode       = MO.FDsProjectPropertyContent_loadMeshByCode;
   o.dispose              = MO.FDsProjectPropertyContent_dispose;
   return o;
}
MO.FDsProjectPropertyContent_onBuild = function FDsProjectPropertyContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsProjectPropertyContent_onMouseCaptureStart = function FDsProjectPropertyContent_onMouseCaptureStart(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var r = o._activeSpace.region();
   var st = MO.Console.find(MO.FG3dTechniqueConsole).find(o._graphicContext, MO.FG3dSelectTechnique);
   var r = st.test(r, p.offsetX, p.offsetY);
   o.selectRenderable(r);
   o._capturePosition.set(p.clientX, p.clientY);
   o._captureRotation.assign(s.camera()._rotation);
   if(r){
      var d = r.display();
      o._captureMatrix.assign(d.matrix());
   }
   o._templateMatrix.identity();
   if(o._templateFace){
      o._templateFaceMatrix.assign(o._templateFace.matrix());
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         if(!r._dragMatrix){
            r._dragMatrix = new MO.SMatrix3d();
         }
         r._dragMatrix.assign(r.matrix());
      }
   }
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}
MO.FDsProjectPropertyContent_onMouseCapture = function FDsProjectPropertyContent_onMouseCapture(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var mc = o._canvasModeCd;
   var mv = o._canvasMoveCd;
   var cm = o._captureMatrix;
   var sm = null;
   var tf = o._templateFace;
   var tm = o._templateMatrix;
   switch(mc){
      case EDsCanvasMode.Drop:
         var c = o._activeSpace.camera();
         var r = c.rotation();
         var cr = o._captureRotation;
         r.x = cr.x - cy * o._cameraMouseRotation;
         r.y = cr.y - cx * o._cameraMouseRotation;
         break;
      case EDsCanvasMode.Select:
         break;
      case EDsCanvasMode.Translate:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.tx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ty = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.tz = cx / 10;
            }
         }
         break;
      case EDsCanvasMode.Rotation:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.rx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ry = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.rz = cx / 10;
            }
         }
         break;
      case EDsCanvasMode.Scale:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.sx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.sy = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.sz = cx / 10;
            }else if(mv == EDsCanvasDrag.All){
               tm.sx = cx / 10;
               tm.sy = cx / 10;
               tm.sz = cx / 10;
            }
         }
         break;
   }
   if(tf){
      tf.matrix().merge(o._templateFaceMatrix, tm);
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         r._matrix.merge(r._dragMatrix, tm);
      }
   }
}
MO.FDsProjectPropertyContent_onMouseCaptureStop = function FDsProjectPropertyContent_onMouseCaptureStop(p){
   var o = this;
   MO.RHtml.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsProjectPropertyContent_onEnterFrame = function FDsProjectPropertyContent_onEnterFrame(){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var st = s.timer();
   var ss = st.spanSecond();
   var c = s.camera();
   var d = o._cameraMoveRate * ss;
   var r = o._cameraKeyRotation * ss;
   var kf = RKeyboard.isPress(EStageKey.Forward);
   var kb = RKeyboard.isPress(EStageKey.Back);
   if(kf && !kb){
      c.doWalk(d);
   }
   if(!kf && kb){
      c.doWalk(-d);
   }
   var kq = RKeyboard.isPress(EStageKey.Up);
   var ke = RKeyboard.isPress(EStageKey.Down);
   if(kq && !ke){
      c.doFly(d);
   }
   if(!kq && ke){
      c.doFly(-d);
   }
   var ka = RKeyboard.isPress(EStageKey.RotationLeft);
   var kd = RKeyboard.isPress(EStageKey.RotationRight);
   if(ka && !kd){
      c.doYaw(r);
   }
   if(!ka && kd){
      c.doYaw(-r);
   }
   var kz = RKeyboard.isPress(EStageKey.RotationUp);
   var kw = RKeyboard.isPress(EStageKey.RotationDown);
   if(kz && !kw){
      c.doPitch(r);
   }
   if(!kz && kw){
      c.doPitch(-r);
   }
   c.update();
   if(o._optionRotation){
      var r = o._rotation;
      var display = o._activeSpace._display;
      var matrix = display.matrix();
      matrix.setRotation(matrix.rx, matrix.ry + r.y, matrix.rz);
      matrix.update();
      r.y = 0.01;
   }
}
MO.FDsProjectPropertyContent_onMeshLoad = function FDsProjectPropertyContent_onMeshLoad(p){
   var o = this;
   var m = o._activeSpace;
   var g = m.region();
   var rc = g.camera();
   rc.setPosition(0, 3, -10);
   rc.lookAt(0, 3, 0);
   rc.update();
   var h = o._hPanel;
   var rp = rc.projection();
   rp.size().set(h.width, h.height);
   rp._angle = 45;
   rp.update();
   var l = g.directionalLight();
   var lc = l.camera();
   lc.setPosition(10, 10, 0);
   lc.lookAt(0, 0, 0);
   lc.update();
   o.processLoadListener(o);
}
MO.FDsProjectPropertyContent_oeResize = function FDsProjectPropertyContent_oeResize(p){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, p);
   var hp = o._hPanel;
   var w = hp.offsetWidth;
   var h = hp.offsetHeight;
   var s = o._activeSpace;
   if(s){
      var cp = s.camera().projection();
      cp.size().set(w, h);
      cp.update();
   }
   return EEventStatus.Stop;
}
MO.FDsProjectPropertyContent_oeRefresh = function FDsProjectPropertyContent_oeRefresh(p){
   return EEventStatus.Stop;
}
MO.FDsProjectPropertyContent_construct = function FDsProjectPropertyContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
   o._selectRenderables = new TObjects();
}
MO.FDsProjectPropertyContent_innerSelectDisplay = function FDsProjectPropertyContent_innerSelectDisplay(p){
   var o = this;
   var s = p.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.getAt(i);
      if(MO.Class.isClass(r, FDsSceneRenderable)){
         o._selectRenderables.push(r);
         r.showBoundBox();
      }
   }
}
MO.FDsProjectPropertyContent_innerSelectLayer = function FDsProjectPropertyContent_innerSelectLayer(p){
   var o = this;
   var s = p.displays();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var d = s.getAt(i);
      o.innerSelectDisplay(d)
   }
}
MO.FDsProjectPropertyContent_selectNone = function FDsProjectPropertyContent_selectNone(){
   var o = this;
   o._selectObject = null;
   var s = o._selectRenderables;
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      r.hideBoundBox();
   }
   o._selectRenderables.clear();
}
MO.FDsProjectPropertyContent_selectDisplay = function FDsProjectPropertyContent_selectDisplay(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   o.innerSelectDisplay(p);
}
MO.FDsProjectPropertyContent_selectMaterial = function FDsProjectPropertyContent_selectMaterial(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   var d = p._display;
   var s = d.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      if(r._materialReference == p){
         o._selectRenderables.push(r);
         r._optionSelected = true;
         r.showBoundBox();
      }
   }
}
MO.FDsProjectPropertyContent_selectRenderable = function FDsProjectPropertyContent_selectRenderable(p){
   var o = this;
   var sr = p;
   if(sr){
      var n = sr._renderable._resource._code;
      switch(n){
         case 'ms_translation_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_all':
            o._canvasMoveCd = EDsCanvasDrag.All;
            o._templateRenderable = sr;
            return;
         default:
            o._canvasMoveCd = EDsCanvasDrag.Unknown;
            o._templateRenderable = null;
      }
   }
   o.selectNone();
   if(p){
      o._selectRenderables.push(p);
      p._optionSelected = true;
      p.showBoundBox();
      o._workspace._catalog.showObject(p);
   }
   var t = o._templateTranslation;
   var r = o._templateRotation;
   var s = o._templateScale;
   var mc = o._canvasModeCd;
   switch(mc){
      case EDsCanvasMode.Drop:
         break;
      case EDsCanvasMode.Select:
         break;
      case EDsCanvasMode.Translate:
         t.setVisible(sr != null);
         r.hide();
         s.hide();
         o._templateFace = t;
         break;
      case EDsCanvasMode.Rotation:
         t.hide();
         r.setVisible(sr != null);
         s.hide();
         o._templateFace = r;
         break;
      case EDsCanvasMode.Scale:
         t.hide();
         r.hide();
         s.setVisible(sr != null);
         o._templateFace = s;
         break;
   }
   var st = o._templateFace;
   if(sr && st){
      var d = sr.display();
      var m = st.matrix();
      m.assign(d.matrix());
      m.setScaleAll(o._templateViewScale);
      m.update();
   }
}
MO.FDsProjectPropertyContent_switchMode = function FDsProjectPropertyContent_switchMode(p){
   var o = this;
   o._canvasModeCd = p;
   o.selectRenderable(o._selectRenderable);
}
MO.FDsProjectPropertyContent_switchRotation = function FDsProjectPropertyContent_switchRotation(p){
   this._optionRotation = p;
}
MO.FDsProjectPropertyContent_reloadRegion = function FDsProjectPropertyContent_reloadRegion(region){
   var o = this;
   var resource = region.resource();
   o._cameraMoveRate = resource.moveSpeed();
   o._cameraKeyRotation = resource.rotationKeySpeed();
   o._cameraMouseRotation = resource.rotationMouseSpeed();
}
MO.FDsProjectPropertyContent_loadMeshByGuid = function FDsProjectPropertyContent_loadMeshByGuid(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByGuid(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsProjectPropertyContent_loadMeshByCode = function FDsProjectPropertyContent_loadMeshByCode(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByCode(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsProjectPropertyContent_dispose = function FDsProjectPropertyContent_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsProjectPropertyToolBar = function FDsProjectPropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName             = 'resource.project.PropertyToolBar';
   o._controlInsertButton   = null;
   o._controlUpdateButton   = null;
   o._controlDeleteButton   = null;
   o._controlRotationButton = null;
   o.onBuilded              = MO.FDsProjectPropertyToolBar_onBuilded;
   o.onInsertClick          = MO.FDsProjectPropertyToolBar_onInsertClick;
   o.onUpdateClick          = MO.FDsProjectPropertyToolBar_onUpdateClick;
   o.onDeleteClick          = MO.FDsProjectPropertyToolBar_onDeleteClick;
   o.onRotationClick        = MO.FDsProjectPropertyToolBar_onRotationClick;
   o.construct              = MO.FDsProjectPropertyToolBar_construct;
   o.dispose                = MO.FDsProjectPropertyToolBar_dispose;
   return o;
}
MO.FDsProjectPropertyToolBar_onBuilded = function FDsProjectPropertyToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectPropertyToolBar_onInsertClick = function FDsProjectPropertyToolBar_onInsertClick(event){
}
MO.FDsProjectPropertyToolBar_onUpdateClick = function FDsProjectPropertyToolBar_onUpdateClick(event){
   var o = this;
   var frame = o._workspace._previewContent;
   var item = frame._activeItem;
   var url = '/script/design/mesh.html?guid=' + item._guid;
   window.open(url, '_blank', '');
}
MO.FDsProjectPropertyToolBar_onDeleteClick = function FDsProjectPropertyToolBar_onDeleteClick(event){
}
MO.FDsProjectPropertyToolBar_onRotationClick = function FDsProjectPropertyToolBar_onRotationClick(event){
   var o = this;
   var previewContent = o._workspace._previewContent;
   previewContent.switchRotation(event.checked);
}
MO.FDsProjectPropertyToolBar_construct = function FDsProjectPropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectPropertyToolBar_dispose = function FDsProjectPropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectSceneCatalogContent = function FDsProjectSceneCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiDataTreeView, MO.MListenerSelected);
   o._iconView             = 'design3d.mesh.view';
   o._iconViewNot          = 'design3d.mesh.viewno';
   o._activeSpace          = null;
   o._materials            = null;
   o.onBuild               = MO.FDsProjectSceneCatalogContent_onBuild;
   o.onLoadDisplay         = MO.FDsProjectSceneCatalogContent_onLoadDisplay;
   o.onNodeClick           = MO.FDsProjectSceneCatalogContent_onNodeClick;
   o.onNodeViewClick       = MO.FDsProjectSceneCatalogContent_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsProjectSceneCatalogContent_onNodeViewDoubleClick;
   o.lsnsSelect            = null;
   o.construct             = MO.FDsProjectSceneCatalogContent_construct;
   o.buildTechnique        = MO.FDsProjectSceneCatalogContent_buildTechnique;
   o.buildRegion           = MO.FDsProjectSceneCatalogContent_buildRegion;
   o.buildRenderable       = MO.FDsProjectSceneCatalogContent_buildRenderable;
   o.buildDisplay          = MO.FDsProjectSceneCatalogContent_buildDisplay;
   o.buildSpace            = MO.FDsProjectSceneCatalogContent_buildSpace;
   o.selectObject          = MO.FDsProjectSceneCatalogContent_selectObject;
   o.showObject            = MO.FDsProjectSceneCatalogContent_showObject;
   o.dispose               = MO.FDsProjectSceneCatalogContent_dispose;
   return o;
}
MO.FDsProjectSceneCatalogContent_onBuild = function FDsProjectSceneCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDuiDataTreeView.onBuild.call(o, p);
   o.lsnsClick.register(o, o.onNodeClick);
   o.loadUrl('/cloud.describe.tree.ws?action=query&code=resource.project');
}
MO.FDsProjectSceneCatalogContent_onLoadDisplay = function FDsProjectSceneCatalogContent_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRenderable(n, p);
}
MO.FDsProjectSceneCatalogContent_onNodeClick = function FDsProjectSceneCatalogContent_onNodeClick(t, n){
   var o = this;
   var s = n.dataPropertyGet('linker');
   o.selectObject(s);
}
MO.FDsProjectSceneCatalogContent_onNodeViewClick = function FDsProjectSceneCatalogContent_onNodeViewClick(p){
   var o = this;
   var c = p.treeNodeCell;
   var s = p.treeNode.dataPropertyGet('linker');
   if(MO.Class.isClass(s, MO.FDisplay)){
      if(p.ctrlKey){
         var ds = o._displays;
         for(var i = ds.count() - 1; i >= 0; i--){
            var nd = ds.get(i);
            var d = nd.dataPropertyGet('linker');
            d._visible = false;
            nd.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, MO.FDrawable)){
      if(p.ctrlKey){
         var rs = o._renderables;
         for(var i = rs.count() - 1; i >= 0; i--){
            var nr = rs.get(i);
            var r = nr.dataPropertyGet('linker');
            r._visible = false;
            nr.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, MO.FG3dMaterial)){
      if(p.ctrlKey){
         var ms = o._materials;
         for(var i = ms.count() - 1; i >= 0; i--){
            var nm = ms.get(i);
            var m = nm.dataPropertyGet('linker');
            m._visible = false;
            nm.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
}
MO.FDsProjectSceneCatalogContent_onNodeViewDoubleClick = function FDsProjectSceneCatalogContent_onNodeViewDoubleClick(p){
   var o = this;
   var n = p.treeNode;
   var c = p.treeNodeCell;
   var s = n.dataPropertyGet('linker');
   if(MO.Class.isClass(s, MO.FDisplay)){
      var s = o._displays;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var d = n.dataPropertyGet('linker');
         d._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, MO.FDrawable)){
      var s = o._renderables;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var r = n.dataPropertyGet('linker');
         r._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, MO.FG3dMaterial)){
      var s = o._materials;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var m = n.dataPropertyGet('linker');
         m._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
}
MO.FDsProjectSceneCatalogContent_construct = function FDsProjectSceneCatalogContent_construct(){
   var o = this;
   o.__base.FDuiDataTreeView.construct.call(o);
   o._renderables = new MO.TObjects();
   o._materials = new MO.TObjects();
}
MO.FDsProjectSceneCatalogContent_buildTechnique = function FDsProjectSceneCatalogContent_buildTechnique(n, p){
   var o = this;
   var nt = o.createNode();
   nt.setLabel('Technique');
   nt.setTypeCode('technique');
   nt.dataPropertySet('linker', p);
   n.appendNode(nt);
}
MO.FDsProjectSceneCatalogContent_buildRegion = function FDsProjectSceneCatalogContent_buildRegion(n, p){
   var o = this;
   var nr = o.createNode();
   nr.setLabel('Region');
   nr.setTypeCode('region');
   nr.dataPropertySet('linker', p);
   n.appendNode(nr);
   var nc = o.createNode();
   nc.setLabel('Camera');
   nc.setTypeCode('camera');
   nc.dataPropertySet('linker', p.camera());
   nr.appendNode(nc);
   var nl = o.createNode();
   nl.setLabel('Light');
   nl.setTypeCode('light');
   nl.dataPropertySet('linker', p.directionalLight());
   nr.appendNode(nl);
}
MO.FDsProjectSceneCatalogContent_buildRenderable = function FDsProjectSceneCatalogContent_buildRenderable(n, p){
   var o = this;
   var m = p._renderable._material;
   var dn = o.createNode();
   dn.setTypeCode('material');
   dn.setLabel('Material');
   dn.dataPropertySet('linker', m);
   o._materials.push(dn);
   n.appendNode(dn);
   var r = p._renderable;
   var dn = o.createNode();
   dn.setTypeCode('renderable');
   dn.setLabel('Renderable');
   dn.dataPropertySet('linker', r);
   o._renderables.push(dn);
   n.appendNode(dn);
}
MO.FDsProjectSceneCatalogContent_buildDisplay = function FDsProjectSceneCatalogContent_buildDisplay(n, p){
   var o = this;
   var node = o.createNode();
   node.setTypeCode('display');
   node.setLabel('Mesh');
   node.dataPropertySet('linker', p);
   n.appendNode(node);
   o.buildRenderable(node, p);
}
MO.FDsProjectSceneCatalogContent_buildSpace = function FDsProjectSceneCatalogContent_buildSpace(space){
   var o = this;
   var resource = space.resource();
   o._activeSpace = space;
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel(resource.code());
   node.setNote(resource.label());
   node.dataPropertySet('linker', space);
   o.appendNode(node);
   o.buildTechnique(node, space.technique())
   o.buildRegion(node, space.region());
   o.buildDisplay(node, space._display);
   node.click();
}
MO.FDsProjectSceneCatalogContent_selectObject = function FDsProjectSceneCatalogContent_selectObject(p){
   var o = this;
   if(p != null){
      o.processSelectedListener(p, true);
   }
}
MO.FDsProjectSceneCatalogContent_showObject = function FDsProjectSceneCatalogContent_showObject(p){
   var o = this;
   if(MO.Class.isClass(p, FDsSceneRenderable)){
      var s = o._renderables;
      var c = s.count();
      for(var i = 0; i < c; i++){
         var nr = s.getAt(i);
         var r = nr.dataPropertyGet('linker');
         if(r == p){
            o.processSelectedListener(p, false);
         }
      }
   }
}
MO.FDsProjectSceneCatalogContent_dispose = function FDsProjectSceneCatalogContent_dispose(){
   var o = this;
   o._displays = MO.Lang.Object.dispose(o._displays);
   o._renderables = MO.Lang.Object.dispose(o._renderables);
   o._materials = MO.Lang.Object.dispose(o._materials);
   o.__base.FDuiDataTreeView.dispose.call(o);
}
MO.FDsProjectSceneCatalogToolBar = function FDsProjectSceneCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.project.SceneCatalogToolBar';
   o._canvasModeCd    = MO.EDsCanvasMode.Drop;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsProjectSceneCatalogToolBar_onBuilded;
   o.onModeClick      = MO.FDsProjectSceneCatalogToolBar_onModeClick;
   o.onRotationClick  = MO.FDsProjectSceneCatalogToolBar_onRotationClick;
   o.construct        = MO.FDsProjectSceneCatalogToolBar_construct;
   o.dispose          = MO.FDsProjectSceneCatalogToolBar_dispose;
   return o;
}
MO.FDsProjectSceneCatalogToolBar_onBuilded = function FDsProjectSceneCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectSceneCatalogToolBar_onModeClick = function FDsProjectSceneCatalogToolBar_onModeClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
   o._workspace._canvas.switchMode(p._canvasModeCd);
}
MO.FDsProjectSceneCatalogToolBar_onRotationClick = function FDsProjectSceneCatalogToolBar_onRotationClick(p, v){
   var o = this;
   var c = o._workspace._canvas;
   c.switchRotation(v);
}
MO.FDsProjectSceneCatalogToolBar_construct = function FDsProjectSceneCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectSceneCatalogToolBar_dispose = function FDsProjectSceneCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectCatalogToolBar = function FDsProjectCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName       = 'resource.project.CatalogToolBar';
   o._canvasModeCd    = MO.EDsCanvasMode.Drop;
   o._dropButton      = null;
   o._selectButton    = null;
   o._translateButton = null;
   o._rotationButton  = null;
   o._scaleButton     = null;
   o._lookFrontButton = null;
   o._lookUpButton    = null;
   o._lookLeftButton  = null;
   o._playButton      = null;
   o._viewButton      = null;
   o.onBuilded        = MO.FDsProjectCatalogToolBar_onBuilded;
   o.onModeClick      = MO.FDsProjectCatalogToolBar_onModeClick;
   o.onRotationClick  = MO.FDsProjectCatalogToolBar_onRotationClick;
   o.construct        = MO.FDsProjectCatalogToolBar_construct;
   o.dispose          = MO.FDsProjectCatalogToolBar_dispose;
   return o;
}
MO.FDsProjectCatalogToolBar_onBuilded = function FDsProjectCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsProjectCatalogToolBar_onModeClick = function FDsProjectCatalogToolBar_onModeClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
   o._workspace._canvas.switchMode(p._canvasModeCd);
}
MO.FDsProjectCatalogToolBar_onRotationClick = function FDsProjectCatalogToolBar_onRotationClick(p, v){
   var o = this;
   var c = o._workspace._canvas;
   c.switchRotation(v);
}
MO.FDsProjectCatalogToolBar_construct = function FDsProjectCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectCatalogToolBar_dispose = function FDsProjectCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectSceneDialog = function FDsProjectSceneDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'design3d.project.SceneDialog';
   o._dataModeCd           = null;
   o._controlParentLabel   = null;
   o._controlLabel         = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsProjectSceneDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsProjectSceneDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsProjectSceneDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsProjectSceneDialog_onCancelClick;
   o.construct             = MO.FDsProjectSceneDialog_construct;
   o.setDataCode           = MO.FDsProjectSceneDialog_setDataCode;
   o.setDataLabel          = MO.FDsProjectSceneDialog_setDataLabel;
   o.switchDataMode        = MO.FDsProjectSceneDialog_switchDataMode;
   o.dispose               = MO.FDsProjectSceneDialog_dispose;
   return o;
}
MO.FDsProjectSceneDialog_onBuilded = function FDsProjectSceneDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsProjectSceneDialog_onConfirmLoad = function FDsProjectSceneDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
   var listContent = o._frameSet._sceneListContent;
   listContent.serviceRelist();
}
MO.FDsProjectSceneDialog_onConfirmClick = function FDsProjectSceneDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var code = o._controlCode.get();
   var label = o._controlLabel.get();
   var sceneConsole = MO.Console.find(MO.FDrSceneConsole);
   var connection = null;
   if(o._dataModeCd == MO.EUiDataMode.Insert){
      var scene = MO.Class.create(MO.FDrScene);
      scene._projectGuid = o._projectGuid;
      scene._code = code;
      scene._label = label;
      connection = sceneConsole.doCreate(scene);
      scene.dispose();
   }else{
      throw new MO.TError(o, 'Unknown mode.');
   }
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsProjectSceneDialog_onCancelClick = function FDsProjectSceneDialog_onCancelClick(event){
   this.hide();
}
MO.FDsProjectSceneDialog_construct = function FDsProjectSceneDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsProjectSceneDialog_setDataCode = function FDsProjectSceneDialog_setDataCode(code){
   this._controlCode.set(code);
}
MO.FDsProjectSceneDialog_setDataLabel = function FDsProjectSceneDialog_setDataLabel(label){
   this._controlLabel.set(label);
}
MO.FDsProjectSceneDialog_switchDataMode = function FDsProjectSceneDialog_switchDataMode(modeCd){
   var o = this;
   o._dataModeCd = modeCd;
   if(modeCd == MO.EUiDataMode.Insert){
      o.setLabel('新建场景');
   }else if(modeCd == MO.EUiDataMode.Update){
      o.setLabel('场景属性');
   }
}
MO.FDsProjectSceneDialog_dispose = function FDsProjectSceneDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsProjectSceneListContent = function FDsProjectSceneListContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiListView);
   o._activeItem       = null;
   o._activeGuid       = null;
   o._refreshButton    = null;
   o._saveButton       = null;
   o._runButton        = null;
   o.onBuilded         = MO.FDsProjectSceneListContent_onBuilded;
   o.onServiceLoad     = MO.FDsProjectSceneListContent_onServiceLoad;
   o.construct         = MO.FDsProjectSceneListContent_construct;
   o.doClickItem       = MO.FDsProjectSceneListContent_doClickItem;
   o.doDoubleClickItem = MO.FDsProjectSceneListContent_doDoubleClickItem;
   o.serviceList       = MO.FDsProjectSceneListContent_serviceList;
   o.serviceRelist     = MO.FDsProjectSceneListContent_serviceRelist;
   o.dispose           = MO.FDsProjectSceneListContent_dispose;
   return o;
}
MO.FDsProjectSceneListContent_onBuilded = function FDsProjectSceneListContent_onBuilded(p){
   var o = this;
   o.__base.FDuiListView.onBuilded.call(o, p);
}
MO.FDsProjectSceneListContent_onServiceLoad = function FDsProjectSceneListContent_onServiceLoad(event){
   var o = this;
   var xitems = event.root.findNode('SceneCollection');
   o.clear();
   var xnodes = xitems.nodes();
   var count = xnodes.count();
   for(var i = 0; i < count; i++){
      var xnode = xnodes.getAt(i);
      if(xnode.isName('Scene')){
         var item = o.createItem(MO.FDsProjectSceneListItem);
         item.propertyLoad(xnode);
         item._guid = xnode.get('guid');
         item._code = xnode.get('code');
         item._updateDate = xnode.get('update_date');
         item.setLabel(MO.Lang.String.nvl(xnode.get('label'), xnode.get('code')));
         item.refreshStyle();
         o.push(item);
      }
   }
   MO.Console.find(FDuiDesktopConsole).hide();
}
MO.FDsProjectSceneListContent_construct = function FDsProjectSceneListContent_construct(){
   var o = this;
   o.__base.FDuiListView.construct.call(o);
}
MO.FDsProjectSceneListContent_doClickItem = function FDsProjectSceneListContent_doClickItem(control){
   var o = this;
   o.__base.FDuiListView.doClickItem.call(o, control);
   var guid = control._guid;
   o._activeItem = control;
}
MO.FDsProjectSceneListContent_doDoubleClickItem = function FDsProjectSceneListContent_doDoubleClickItem(control){
   var o = this;
   o.__base.FDuiListView.doDoubleClickItem.call(o, control)
   var guid = control._guid;
   o._activeItem = control;
   o._activeGuid = control._guid;
}
MO.FDsProjectSceneListContent_serviceList = function FDsProjectSceneListContent_serviceList(guid){
   var o = this;
   o._activeGuid = guid;
   MO.Console.find(FDuiDesktopConsole).showLoading();
   var url = '/cloud.solution.project.ws?action=listProject&project_guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   connection.addLoadListener(o, o.onServiceLoad);
   return connection;
}
MO.FDsProjectSceneListContent_serviceRelist = function FDsProjectSceneListContent_serviceRelist(){
   var o = this;
   return o.serviceList(o._activeGuid);
}
MO.FDsProjectSceneListContent_dispose = function FDsProjectSceneListContent_dispose(){
   var o = this;
   o.__base.FDuiListView.dispose.call(o);
}
MO.FDsProjectSceneListItem = function FDsProjectSceneListItem(o){
   o = MO.Class.inherits(this, o, MO.FDuiListViewItem);
   o.onBuild      = MO.FDsProjectSceneListItem_onBuild;
   o.refreshStyle = MO.FDsProjectSceneListItem_refreshStyle;
   return o;
}
MO.FDsProjectSceneListItem_onBuild = function FDsProjectSceneListItem_onBuild(p){
   var o = this;
   o.__base.FDuiListViewItem.onBuild.call(o, p);
   var h = o._hPanel;
   h.style.width = '260px';
   h.style.height = '150px';
}
MO.FDsProjectSceneListItem_refreshStyle = function FDsProjectSceneListItem_refreshStyle(){
   var o = this;
   var url = '/cloud.content.scene.wv?do=preview&guid=' + o._guid;
   o._hForm.style.backgroundImage = 'url("' + url + '")';
}
MO.FDsProjectSceneListToolBar = function FDsProjectSceneListToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName           = 'resource.project.SceneListToolBar';
   o._controlSceneCreate  = null;
   o._controlSceneDelete  = null;
   o.onBuilded            = MO.FDsProjectSceneListToolBar_onBuilded;
   o.onSceneCreateClick   = MO.FDsProjectSceneListToolBar_onSceneCreateClick;
   o.onSceneDeleteLoad    = MO.FDsProjectSceneListToolBar_onSceneDeleteLoad;
   o.onSceneDeleteExecute = MO.FDsProjectSceneListToolBar_onSceneDeleteExecute;
   o.onSceneDeleteClick   = MO.FDsProjectSceneListToolBar_onSceneDeleteClick;
   o.construct            = MO.FDsProjectSceneListToolBar_construct;
   o.dispose              = MO.FDsProjectSceneListToolBar_dispose;
   return o;
}
MO.FDsProjectSceneListToolBar_onBuilded = function FDsProjectSceneListToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlSceneCreate.addClickListener(o, o.onSceneCreateClick);
   o._controlSceneDelete.addClickListener(o, o.onSceneDeleteClick);
}
MO.FDsProjectSceneListToolBar_onSceneCreateClick = function FDsProjectSceneListToolBar_onSceneCreateClick(event){
   var o = this;
   var projectGuid = o._frameSet._activeGuid;
   if(MO.Lang.String.isEmpty(projectGuid)){
      throw new MO.TError(o, 'Project guid is empty.');
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsProjectSceneDialog);
   dialog._frameSet = o._frameSet;
   dialog._projectGuid = projectGuid;
   dialog.setDataCode('');
   dialog.setDataLabel('');
   dialog.switchDataMode(MO.EUiDataMode.Insert);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsProjectSceneListToolBar_onSceneDeleteLoad = function FDsProjectSceneListToolBar_onSceneDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var listContent = o._frameSet._sceneListContent;
   listContent.serviceRelist();
}
MO.FDsProjectSceneListToolBar_onSceneDeleteExecute = function FDsProjectSceneListToolBar_onSceneDeleteExecute(event){
   var o = this;
   if(event.resultCd != MO.EResult.Success){
      return;
   }
   var listContent = o._frameSet._sceneListContent;
   var item = listContent.focusItem();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).doDelete(item._guid);
   connection.addLoadListener(o, o.onSceneDeleteLoad);
}
MO.FDsProjectSceneListToolBar_onSceneDeleteClick = function FDsProjectSceneListToolBar_onSceneDeleteClick(event){
   var o = this;
   var listContent = o._frameSet._sceneListContent;
   var item = listContent.focusItem();
   if(!item){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中场景后，再点击操作。');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前场景？');
   dialog.addResultListener(o, o.onSceneDeleteExecute);
}
MO.FDsProjectSceneListToolBar_construct = function FDsProjectSceneListToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsProjectSceneListToolBar_dispose = function FDsProjectSceneListToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsProjectTabBar = function FDsProjectTabBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiTabBar);
   o._frameName             = 'design3d.project.TabBar';
   o._resourceTypeCd        = 'mesh';
   o._controlProjectButton  = null;
   o._controlResourceButton = null;
   o.onBuilded              = MO.FDsProjectTabBar_onBuilded;
   o.onButtonClick          = MO.FDsProjectTabBar_onButtonClick;
   o.construct              = MO.FDsProjectTabBar_construct;
   o.dispose                = MO.FDsProjectTabBar_dispose;
   return o;
}
MO.FDsProjectTabBar_onBuilded = function FDsProjectTabBar_onBuilded(p){
   var o = this;
   o.__base.FDuiTabBar.onBuilded.call(o, p);
   o._controlProjectButton.addClickListener(o, o.onButtonClick);
   o._controlResourceButton.addClickListener(o, o.onButtonClick);
}
MO.FDsProjectTabBar_onButtonClick = function FDsProjectTabBar_onButtonClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   if(name == 'project'){
      o._workspace.selectFrameSet(MO.EDsFrameSet.ProjectFrameSet);
   }else if(name == 'resource'){
      o._workspace.selectFrameSet(MO.EDsFrameSet.ResourceFrameSet);
   }
}
MO.FDsProjectTabBar_construct = function FDsProjectTabBar_construct(){
   var o = this;
   o.__base.FDuiTabBar.construct.call(o);
}
MO.FDsProjectTabBar_dispose = function FDsProjectTabBar_dispose(){
   var o = this;
   o.__base.FDuiTabBar.dispose.call(o);
}
MO.FDsProjectWorkspace = function FDsProjectWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'design3d.project.Workspace';
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._styleCatalogGround   = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleCatalogToolbar  = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'Catalog_Toolbar'));
   o._styleSearchGround    = MO.Class.register(o, new MO.AStyle('_styleSearchGround', 'Search_Ground'));
   o._styleSearchToolbar   = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'Search_Toolbar'));
   o._stylePropertyGround  = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._stylePropertyToolbar = MO.Class.register(o, new MO.AStyle('_stylePropertyToolbar', 'Property_Toolbar'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._resourceTypeCd       = 'project';
   o._frameToolBar         = null;
   o._frameStatusBar       = null;
   o._frameCatalog         = null;
   o._frameCatalogToolbar  = null;
   o._frameCatalogContent  = null;
   o._frameSearch          = null;
   o._frameSearchToolbar   = null;
   o._frameSearchContent   = null;
   o._framePreview         = null;
   o._framePreviewToolbar  = null;
   o._framePreviewContent  = null;
   o._activeFrameSet       = null;
   o._frameSets            = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsProjectWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsProjectWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsProjectWorkspace_onCatalogSelected;
   o.construct             = MO.FDsProjectWorkspace_construct;
   o.selectFrameSet        = MO.FDsProjectWorkspace_selectFrameSet;
   o.findPropertyFrame     = MO.FDsProjectWorkspace_findPropertyFrame;
   o.switchContent         = MO.FDsProjectWorkspace_switchContent;
   o.load                  = MO.FDsProjectWorkspace_load;
   o.dispose               = MO.FDsProjectWorkspace_dispose;
   return o;
}
MO.FDsProjectWorkspace_onBuilded = function FDsProjectWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   o._frameBody = o.searchControl('bodyFrame');
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   var hTable = MO.Window.Builder.createTable(p);
   hTable.width = '100%';
   var hRow = MO.Window.Builder.appendTableRow(hTable);
   o._hMenuPanel = MO.Window.Builder.appendTableCell(hRow);
   var c = o._tabBar = MO.Class.create(MO.FDsProjectTabBar);
   c._workspace = o;
   c.buildDefine(p);
   var hCell = MO.Window.Builder.appendTableCell(hRow);
   hCell.width = '150px';
   hCell.align = 'right';
   hCell.vAlign = 'bottom';
   hCell.appendChild(c._hPanel);
   o._frameToolBar._hPanel.appendChild(hTable);
   o.selectFrameSet(MO.EDsFrameSet.ProjectFrameSet);
}
MO.FDsProjectWorkspace_onMeshLoad = function FDsProjectWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsProjectWorkspace_onCatalogSelected = function FDsProjectWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsProjectWorkspace_construct = function FDsProjectWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._frameSets = new MO.TDictionary();
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsProjectWorkspace_selectFrameSet = function FDsProjectWorkspace_selectFrameSet(name, guid){
   var o = this;
   var frameSet = o._frameSets.get(name);
   if(!frameSet){
      if(name == MO.EDsFrameSet.ProjectFrameSet){
         var menuBar = MO.Class.create(MO.FDsProjectMenuBar);
         menuBar._workspace = o;
         menuBar.buildDefine(o._hPanel);
         frameSet = MO.Console.find(MO.FFrameConsole).findByClass(o, FDsProjectFrameSet);
         frameSet._workspace = o;
         frameSet._menuBar = menuBar;
         menuBar._frameSet = frameSet;
      }else if(name == MO.EDsFrameSet.ResourceFrameSet){
         var menuBar = MO.Class.create(MO.FDsResourceMenuBar);
         menuBar._workspace = o;
         menuBar.buildDefine(o._hPanel);
         frameSet = MO.Console.find(MO.FFrameConsole).findByClass(o, FDsResourceFrameSet);
         frameSet._workspace = o;
         frameSet._menuBar = menuBar;
         menuBar._frameSet = frameSet;
      }else if(name == MO.EDsFrameSet.MeshFrameSet){
         var menuBar = MO.Class.create(MO.FDsMeshMenuBar);
         menuBar._workspace = o;
         menuBar.buildDefine(o._hPanel);
         frameSet = MO.Console.find(MO.FFrameConsole).findByClass(o, FDsMeshFrameSet);
         frameSet._workspace = o;
         frameSet._menuBar = menuBar;
         menuBar._frameSet = frameSet;
      }else{
         throw new MO.TError('Unknown frameset. (name={1})', name);
      }
      o._frameSets.set(name, frameSet);
   }
   var activeFrameSet = o._activeFrameSet;
   if(activeFrameSet != frameSet){
      if(activeFrameSet){
         o._hMenuPanel.removeChild(activeFrameSet._menuBar._hPanel);
         o._frameBody.remove(activeFrameSet);
      }
      o._hMenuPanel.appendChild(frameSet._menuBar._hPanel);
      o._frameBody.push(frameSet);
      frameSet.psResize();
   }
   o._activeFrameSet = frameSet;
   if(name == MO.EDsFrameSet.ProjectFrameSet){
   }else if(name == MO.EDsFrameSet.ResourceFrameSet){
      frameSet.load();
   }else if(name == MO.EDsFrameSet.MeshFrameSet){
      frameSet.loadByGuid(guid);
   }else{
      throw new TError('Unknown frameset. (name={1})', name);
   }
   return frameSet;
}
MO.FDsProjectWorkspace_findPropertyFrame = function FDsProjectWorkspace_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._framePreview._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsProjectWorkspace_switchContent = function FDsProjectWorkspace_switchContent(typeCd){
   var o = this;
   o._resourceTypeCd = typeCd;
   o._searchContent.serviceSearch(typeCd, '', 40, 0);
}
MO.FDsProjectWorkspace_load = function FDsProjectWorkspace_load(){
   var o = this;
}
MO.FDsProjectWorkspace_dispose = function FDsProjectWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsResourceCatalogContent = function FDsResourceCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiDataTreeView, MO.MListenerSelected);
   o._activeSpace          = null;
   o._materials            = null;
   o.onBuild               = MO.FDsResourceCatalogContent_onBuild;
   o.onLoadDisplay         = MO.FDsResourceCatalogContent_onLoadDisplay;
   o.onNodeClick           = MO.FDsResourceCatalogContent_onNodeClick;
   o.onNodeViewClick       = MO.FDsResourceCatalogContent_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsResourceCatalogContent_onNodeViewDoubleClick;
   o.lsnsSelect            = null;
   o.construct             = MO.FDsResourceCatalogContent_construct;
   o.selectObject          = MO.FDsResourceCatalogContent_selectObject;
   o.showObject            = MO.FDsResourceCatalogContent_showObject;
   o.dispose               = MO.FDsResourceCatalogContent_dispose;
   return o;
}
MO.FDsResourceCatalogContent_onBuild = function FDsResourceCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDuiDataTreeView.onBuild.call(o, p);
   o.addNodeClickListener(o, o.onNodeClick);
   o.loadDefine('resource.catalog');
}
MO.FDsResourceCatalogContent_onLoadDisplay = function FDsResourceCatalogContent_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRenderable(n, p);
}
MO.FDsResourceCatalogContent_onNodeClick = function FDsResourceCatalogContent_onNodeClick(t, n){
   var o = this;
}
MO.FDsResourceCatalogContent_onNodeViewClick = function FDsResourceCatalogContent_onNodeViewClick(p){
   var o = this;
}
MO.FDsResourceCatalogContent_onNodeViewDoubleClick = function FDsResourceCatalogContent_onNodeViewDoubleClick(p){
   var o = this;
}
MO.FDsResourceCatalogContent_construct = function FDsResourceCatalogContent_construct(){
   var o = this;
   o.__base.FDuiDataTreeView.construct.call(o);
   o._renderables = new MO.TObjects();
   o._materials = new MO.TObjects();
}
MO.FDsResourceCatalogContent_selectObject = function FDsResourceCatalogContent_selectObject(p){
   var o = this;
   if(p != null){
      o.processSelectedListener(p, true);
   }
}
MO.FDsResourceCatalogContent_showObject = function FDsResourceCatalogContent_showObject(p){
   var o = this;
}
MO.FDsResourceCatalogContent_dispose = function FDsResourceCatalogContent_dispose(){
   var o = this;
   o.__base.FDuiDataTreeView.dispose.call(o);
}
MO.FDsResourceCatalogToolBar = function FDsResourceCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName                   = 'resource.resource.CatalogToolBar';
   o._controlFolderCreateButton   = null;
   o._controlFolderDeleteButton   = null;
   o._controlFolderPropertyButton  = null;
   o._controlFolderOpenButton     = null;
   o._controlFolderCloseButton    = null;
   o._activeNodeGuid              = null;
   o.onBuilded                    = MO.FDsResourceCatalogToolBar_onBuilded;
   o.onFolderCreateClick          = MO.FDsResourceCatalogToolBar_onFolderCreateClick;
   o.onFolderDeleteLoad           = MO.FDsResourceCatalogToolBar_onFolderDeleteLoad;
   o.onFolderDeleteExcute         = MO.FDsResourceCatalogToolBar_onFolderDeleteExcute;
   o.onFolderDeleteClick          = MO.FDsResourceCatalogToolBar_onFolderDeleteClick;
   o.onFolderPropertyClick        = MO.FDsResourceCatalogToolBar_onFolderPropertyClick;
   o.onFolderOpenClick            = MO.FDsResourceCatalogToolBar_onFolderOpenClick;
   o.onFolderCloseClick           = MO.FDsResourceCatalogToolBar_onFolderCloseClick;
   o.construct                    = MO.FDsResourceCatalogToolBar_construct;
   o.dispose                      = MO.FDsResourceCatalogToolBar_dispose;
   return o;
}
MO.FDsResourceCatalogToolBar_onBuilded = function FDsResourceCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlFolderCreateButton.addClickListener(o, o.onFolderCreateClick);
   o._controlFolderDeleteButton.addClickListener(o, o.onFolderDeleteClick);
   o._controlFolderPropertyButton.addClickListener(o, o.onFolderPropertyClick);
   o._controlFolderOpenButton.addClickListener(o, o.onFolderOpenClick);
   o._controlFolderCloseButton.addClickListener(o, o.onFolderCloseClick);
}
MO.FDsResourceCatalogToolBar_onFolderCreateClick = function FDsResourceCatalogToolBar_onFolderCreateClick(event){
   var o = this;
   var parentGuid = null;
   var parentLabel = null;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(node){
      parentGuid = node.guid();
      parentLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceFolderDialog);
   dialog._workspace = o._workspace;
   dialog._frameSet = o._frameSet;
   dialog._parentGuid = parentGuid;
   dialog.setNodeParentLabel(parentLabel);
   dialog.setNodeLabel('');
   dialog.switchDataMode(MO.EUiDataMode.Insert);
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsResourceCatalogToolBar_onFolderDeleteLoad = function FDsResourceCatalogToolBar_onFolderDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var catalog = o._frameSet._catalogContent;
   var guid = o._activeNodeGuid;
   if(guid){
      var node = catalog.findByGuid(guid);
      node.removeSelf();
   }
   o._activeNodeGuid = null;
}
MO.FDsResourceCatalogToolBar_onFolderDeleteExcute = function FDsResourceCatalogToolBar_onFolderDeleteExcute(event){
   var o = this;
   if(event.resultCd != MO.EResult.Success){
      return;
   }
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   o._activeNodeGuid = node._guid;
   var connection = MO.Console.find(MO.FDrResourceConsole).doFolderDelete(node._guid);
   connection.addLoadListener(o, o.onFolderDeleteLoad);
}
MO.FDsResourceCatalogToolBar_onFolderDeleteClick = function FDsResourceCatalogToolBar_onFolderDeleteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中目录节点后，再点击操作。');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前目录？');
   dialog.addResultListener(o, o.onFolderDeleteExcute);
}
MO.FDsResourceCatalogToolBar_onFolderPropertyClick = function FDsResourceCatalogToolBar_onFolderPropertyClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中目录节点后，再点击操作。');
   }
   var parentLabel = null;
   if(node._parent){
      parentLabel = node._parent.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceFolderDialog);
   dialog._workspace = o._workspace;
   dialog._frameSet = o._frameSet;
   dialog._nodeGuid = node._guid;
   dialog.setNodeParentLabel(parentLabel);
   dialog.setNodeLabel(node.label());
   dialog.switchDataMode(EUiDataMode.Update);
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsResourceCatalogToolBar_onFolderOpenClick = function FDsResourceCatalogToolBar_onFolderOpenClick(event){
}
MO.FDsResourceCatalogToolBar_onFolderCloseClick = function FDsResourceCatalogToolBar_onFolderCloseClick(event){
}
MO.FDsResourceCatalogToolBar_construct = function FDsResourceCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsResourceCatalogToolBar_dispose = function FDsResourceCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsResourceCreateDialog = function FDsResourceCreateDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName        = 'resource.resource.CreateDialog';
   o._nodeGuid         = null;
   o._controlNodeLabel = null;
   o._controlCode      = null;
   o._controlLabel     = null;
   o._controlConfirm   = null;
   o._controlCancel    = null;
   o.onBuilded         = MO.FDsResourceCreateDialog_onBuilded;
   o.onConfirmLoad     = MO.FDsResourceCreateDialog_onConfirmLoad;
   o.onConfirmClick    = MO.FDsResourceCreateDialog_onConfirmClick;
   o.onCancelClick     = MO.FDsResourceCreateDialog_onCancelClick;
   o.construct         = MO.FDsResourceCreateDialog_construct;
   o.setNodeLabel      = MO.FDsResourceCreateDialog_setNodeLabel;
   o.switchMode        = MO.FDsResourceCreateDialog_switchMode;
   o.dispose           = MO.FDsResourceCreateDialog_dispose;
   return o;
}
MO.FDsResourceCreateDialog_onBuilded = function FDsResourceCreateDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlNodeLabel.setEditAble(false);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
}
MO.FDsResourceCreateDialog_onConfirmLoad = function FDsResourceCreateDialog_onConfirmLoad(event){
   var o = this;
   o.hide();
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   if(MO.Console.find(MO.FDuiResultConsole).checkEvent(event)){
      var frame = o._frameSet._listContent;
      frame.serviceResearch();
   }
}
MO.FDsResourceCreateDialog_onConfirmClick = function FDsResourceCreateDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var code = o._controlCode.get();
   var label = o._controlLabel.get();
   var connection = null;
   switch(o._modeCd){
      case MO.EE3sResource.Material:
         var material = MO.Class.create(MO.FDrMaterial);
         material.setCode(code);
         material.setLabel(label);
         connection = MO.Console.find(MO.FDrMaterialConsole).doCreate(material);
         break;
      case MO.EE3sResource.Template:
         var template = MO.Class.create(MO.FDrTemplate);
         template.setCode(code);
         template.setLabel(label);
         connection = MO.Console.find(MO.FDrTemplateConsole).doCreate(template);
         break;
      case MO.EE3sResource.Scene:
         var scene = MO.Class.create(MO.FDrScene);
         scene.setCode(code);
         scene.setLabel(label);
         connection = MO.Console.find(MO.FDrSceneConsole).doCreate(scene);
         break;
      default:
         throw new MO.TError(o, 'Unknown mode. (mode_cd={1})', modeCd);
   }
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsResourceCreateDialog_onCancelClick = function FDsResourceCreateDialog_onCancelClick(event){
   this.hide();
}
MO.FDsResourceCreateDialog_construct = function FDsResourceCreateDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsResourceCreateDialog_setNodeLabel = function FDsResourceCreateDialog_setNodeLabel(label){
   var o = this;
   o._controlNodeLabel.set(label);
}
MO.FDsResourceCreateDialog_switchMode = function FDsResourceCreateDialog_switchMode(modeCd){
   var o = this;
   o._modeCd = modeCd;
   switch(modeCd){
      case MO.EE3sResource.Material:
         o.setLabel('创建材质');
         break;
      case MO.EE3sResource.Template:
         o.setLabel('创建模板');
         break;
      case MO.EE3sResource.Scene:
         o.setLabel('创建场景');
         break;
      default:
         throw new MO.TError(o, 'Unknown mode. (mode_cd={1})', modeCd);
   }
   o._controlCode.set('');
   o._controlLabel.set('');
}
MO.FDsResourceCreateDialog_dispose = function FDsResourceCreateDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsResourceFolderDialog = function FDsResourceFolderDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.resource.FolderDialog';
   o._dataModeCd           = null;
   o._controlParentLabel   = null;
   o._controlLabel         = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsResourceFolderDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsResourceFolderDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsResourceFolderDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsResourceFolderDialog_onCancelClick;
   o.construct             = MO.FDsResourceFolderDialog_construct;
   o.setNodeParentLabel    = MO.FDsResourceFolderDialog_setNodeParentLabel;
   o.setNodeLabel          = MO.FDsResourceFolderDialog_setNodeLabel;
   o.switchDataMode        = MO.FDsResourceFolderDialog_switchDataMode;
   o.dispose               = MO.FDsResourceFolderDialog_dispose;
   return o;
}
MO.FDsResourceFolderDialog_onBuilded = function FDsResourceFolderDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlParentLabel.setEditAble(false);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsResourceFolderDialog_onConfirmLoad = function FDsResourceFolderDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
   o.hide();
   var catalog = o._frameSet._catalogContent;
   if(o._dataModeCd == MO.EUiDataMode.Insert){
      if(o._parentGuid){
         var node = catalog.findByGuid(o._parentGuid);
         catalog.loadNode(node);
      }else{
         catalog.loadService();
      }
   }else{
      var label = o._controlLabel.get();
      var node = catalog.focusNode();
      node.setLabel(label);
   }
}
MO.FDsResourceFolderDialog_onConfirmClick = function FDsResourceFolderDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var label = o._controlLabel.get();
   var resourceConsole = MO.Console.find(MO.FDrResourceConsole);
   var connection = null;
   if(o._dataModeCd == MO.EUiDataMode.Insert){
      connection = resourceConsole.doFolderCreate(o._parentGuid, null, label);
   }else{
      connection = resourceConsole.doFolderUpdate(o._nodeGuid, null, label);
   }
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsResourceFolderDialog_onCancelClick = function FDsResourceFolderDialog_onCancelClick(event){
   this.hide();
}
MO.FDsResourceFolderDialog_construct = function FDsResourceFolderDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsResourceFolderDialog_setNodeParentLabel = function FDsResourceFolderDialog_setNodeParentLabel(label){
   this._controlParentLabel.set(label);
}
MO.FDsResourceFolderDialog_setNodeLabel = function FDsResourceFolderDialog_setNodeLabel(label){
   this._controlLabel.set(label);
}
MO.FDsResourceFolderDialog_switchDataMode = function FDsResourceFolderDialog_switchDataMode(modeCd){
   var o = this;
   o._dataModeCd = modeCd;
   if(modeCd == MO.EUiDataMode.Insert){
      o.setLabel('新建资源目录');
   }else if(modeCd == MO.EUiDataMode.Update){
      o.setLabel('资源目录属性');
   }
}
MO.FDsResourceFolderDialog_dispose = function FDsResourceFolderDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsResourceFrameSet = function FDsResourceFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleListContent     = MO.Class.register(o, new MO.AStyle('_styleListContent', 'List_Content'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   o._resourceTypeCd       = 'picture';
   o._frameCatalog         = null;
   o._frameCatalogToolbar  = null;
   o._frameCatalogContent  = null;
   o._frameSearch          = null;
   o._frameSearchToolbar   = null;
   o._frameSearchContent   = null;
   o._framePreview         = null;
   o._framePreviewToolbar  = null;
   o._framePreviewContent  = null;
   o.onBuilded             = MO.FDsResourceFrameSet_onBuilded;
   o.onCatalogSelected     = MO.FDsResourceFrameSet_onCatalogSelected;
   o.construct             = MO.FDsResourceFrameSet_construct;
   o.switchContent         = MO.FDsResourceFrameSet_switchContent;
   o.load                  = MO.FDsResourceFrameSet_load;
   o.dispose               = MO.FDsResourceFrameSet_dispose;
   return o;
}
MO.FDsResourceFrameSet_onBuilded = function FDsResourceFrameSet_onBuilded(p){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, p);
}
MO.FDsResourceFrameSet_onCatalogSelected = function FDsResourceFrameSet_onCatalogSelected(select, flag){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   o.hidePropertyFrames();
   if(MO.Class.isClass(select, MO.FE3dStage)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dTechnique)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRegion)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dCamera)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dDirectionalLight)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dMeshDisplay)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dMaterial)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dMeshRenderable)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else{
      throw new MO.TError('Unknown select object type. (select={1})', select);
   }
}
MO.FDsResourceFrameSet_construct = function FDsResourceFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
}
MO.FDsResourceFrameSet_switchContent = function FDsResourceFrameSet_switchContent(typeCd){
   var o = this;
   o._resourceTypeCd = typeCd;
   o._listContent.serviceSearch(typeCd, '', '', 40, 0);
}
MO.FDsResourceFrameSet_load = function FDsResourceFrameSet_load(){
   var o = this;
   o._listToolBar.storageLoad();
}
MO.FDsResourceFrameSet_dispose = function FDsResourceFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsResourceImportDialog = function FDsResourceImportDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.resource.ImportDialog';
   o._nodeGuid             = null;
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   o.onBuilded             = MO.FDsResourceImportDialog_onBuilded;
   o.onFileChange          = MO.FDsResourceImportDialog_onFileChange;
   o.onFileLoaded          = MO.FDsResourceImportDialog_onFileLoaded;
   o.onConfirmLoad         = MO.FDsResourceImportDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsResourceImportDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsResourceImportDialog_onCancelClick;
   o.construct             = MO.FDsResourceImportDialog_construct;
   o.setNodeLabel          = MO.FDsResourceImportDialog_setNodeLabel;
   o.switchMode            = MO.FDsResourceImportDialog_switchMode;
   o.dispose               = MO.FDsResourceImportDialog_dispose;
   return o;
}
MO.FDsResourceImportDialog_onBuilded = function FDsResourceImportDialog_onBuilded(p){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, p);
   o._controlNodeLabel.setEditAble(false);
   o._controlFile.addDataChangedListener(o, o.onFileChange);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsResourceImportDialog_onFileChange = function FDsResourceImportDialog_onFileChange(event){
   var o = this;
   var name = o._controlFile.get();
   var code = MO.RFile.name(name);
   if(MO.Lang.String.isEmpty(o._controlCode.get())){
      o._controlCode.set(code);
   }
   if(MO.Lang.String.isEmpty(o._controlLabel.get())){
      o._controlLabel.set(code);
   }
}
MO.FDsResourceImportDialog_onFileLoaded = function FDsResourceImportDialog_onFileLoaded(event){
   var o = this;
   var reader = o._fileReader;
   var code = o._controlCode.get();
   var label = o._controlLabel.get();
   var url = null;
   if(o._modeCd == MO.EE3sResource.Bitmap){
      url = '/cloud.resource.bitmap.wv?do=importData';
   }else if(o._modeCd == MO.EE3sResource.Model){
      url = '/cloud.resource.model.wv?do=importData';
   }else{
      throw new MO.TError(o, 'Type is invalid.');
   }
   if(o._nodeGuid){
      url += '&node_guid=' + o._nodeGuid;
   }
   url += '&code=' + code + '&label=' + label + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
   url = MO.RBrowser.urlEncode(url);
   var connection = MO.Console.find(MO.FHttpConsole).send(url, reader.data());
   connection.addLoadListener(o, o.onConfirmLoad);
   o._fileReader = MO.Lang.Object.dispose(reader);
}
MO.FDsResourceImportDialog_onConfirmLoad = function FDsResourceImportDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   o.hide();
   var frame = o._frameSet._listContent;
   frame.serviceResearch();
}
MO.FDsResourceImportDialog_onConfirmClick = function FDsResourceImportDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var file = o._controlFile._hInput.files[0];
   var reader = o._fileReader = MO.Class.create(MO.FFileReader);
   reader.addLoadListener(o, o.onFileLoaded);
   reader.loadFile(file);
}
MO.FDsResourceImportDialog_onCancelClick = function FDsResourceImportDialog_onCancelClick(event){
   this.hide();
}
MO.FDsResourceImportDialog_construct = function FDsResourceImportDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsResourceImportDialog_setNodeLabel = function FDsResourceImportDialog_setNodeLabel(label){
   var o = this;
   o._controlNodeLabel.set(label);
}
MO.FDsResourceImportDialog_switchMode = function FDsResourceImportDialog_switchMode(modeCd){
   var o = this;
   o._modeCd = modeCd;
   switch(modeCd){
      case MO.EE3sResource.Bitmap:
         o.setLabel('导入图片资源');
         break;
      case MO.EE3sResource.Model:
         o.setLabel('导入模型资源');
         break;
      default:
         throw new TError(o, 'Unknown mode. (mode_cd={1})', modeCd);
   }
   o._controlCode.set('');
   o._controlLabel.set('');
}
MO.FDsResourceImportDialog_dispose = function FDsResourceImportDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsResourceListContent = function FDsResourceListContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiListView);
   o._contentFlag      = null;
   o._contentTypeCd    = MO.EE3sResource.All;
   o._contentSerach    = '';
   o._contentOrder     = '';
   o._contentPageSize  = 40;
   o._contentPageCount = 0;
   o._contentPage      = 0;
   o._activeItem       = null;
   o._activeGuid       = null;
   o._refreshButton    = null;
   o._saveButton       = null;
   o._runButton        = null;
   o.onServiceLoad     = MO.FDsResourceListContent_onServiceLoad;
   o.construct         = MO.FDsResourceListContent_construct;
   o.doClickItem       = MO.FDsResourceListContent_doClickItem;
   o.doDoubleClickItem = MO.FDsResourceListContent_doDoubleClickItem;
   o.serviceSearch     = MO.FDsResourceListContent_serviceSearch;
   o.serviceResearch   = MO.FDsResourceListContent_serviceResearch;
   o.dispose           = MO.FDsResourceListContent_dispose;
   return o;
}
MO.FDsResourceListContent_onServiceLoad = function FDsResourceListContent_onServiceLoad(p){
   var o = this;
   var xitems = p.root.findNode('ResourceCollection');
   var pageSize = xitems.getInteger('page_size');
   var pageCount = xitems.getInteger('page_count');
   var page = xitems.getInteger('page');
   o._frameSet._listToolBar.setNavigator(pageSize, pageCount, page);
   o.clear();
   var xnodes = xitems.nodes();
   var count = xnodes.count();
   for(var i = 0; i < count; i++){
      var xnode = xnodes.getAt(i);
      if(xnode.isName('Resource')){
         var item = o.createItem(MO.FDsResourceListItem);
         item.propertyLoad(xnode);
         item._guid = xnode.get('guid');
         item._typeCd = xnode.get('type_cd');
         item._shareCd = xnode.get('share_cd');
         item._code = xnode.get('code');
         item._updateDate = xnode.get('update_date');
         item.setTypeLabel(item._typeCd);
         item.setLabel(xnode.get('code') + ' - ' + xnode.get('label'));
         item.refreshStyle();
         o.push(item);
      }
   }
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsResourceListContent_construct = function FDsResourceListContent_construct(){
   var o = this;
   o.__base.FDuiListView.construct.call(o);
}
MO.FDsResourceListContent_doClickItem = function FDsResourceListContent_doClickItem(control){
   var o = this;
   o.__base.FDuiListView.doClickItem.call(o, control);
}
MO.FDsResourceListContent_doDoubleClickItem = function FDsResourceListContent_doDoubleClickItem(control){
   var o = this;
   o.__base.FDuiListView.doDoubleClickItem.call(o, control)
   var guid = control._guid;
   o._activeItem = control;
   o._activeGuid = control._guid;
   var workspace = o._frameSet._workspace;
   var typeCd = control._typeCd;
   if(typeCd == MO.EE3sResource.Bitmap){
      workspace.selectFrameSet(MO.EDsFrameSet.PrivateBitmapFrameSet, guid);
   }else if(typeCd == MO.EE3sResource.Material){
      workspace.selectFrameSet(MO.EDsFrameSet.PrivateMaterialFrameSet, guid);
   }else if(typeCd == MO.EE3sResource.Model){
      workspace.selectFrameSet(MO.EDsFrameSet.PrivateModelFrameSet, guid);
   }else if(typeCd == MO.EE3sResource.Template){
      workspace.selectFrameSet(MO.EDsFrameSet.PrivateTemplateFrameSet, guid);
   }else if(typeCd == MO.EE3sResource.Scene){
      workspace.selectFrameSet(MO.EDsFrameSet.PrivateSceneFrameSet, guid);
   }else{
      throw new MO.TError(o, 'Unsupport resource format.');
   }
}
MO.FDsResourceListContent_serviceSearch = function FDsResourceListContent_serviceSearch(typeCd, search, order, pageSize, page, force){
   var o = this;
   if(typeCd == null){
      typeCd = o._contentTypeCd;
   }
   if(search == null){
      search = o._contentSerach;
   }
   if(order == null){
      order = o._contentOrder;
   }
   if(pageSize == null){
      pageSize = o._contentPageSize;
   }
   if(page == null){
      page = o._contentPage;
   }
   if(!force){
      var flag = typeCd + '|' + search + '|' + order + '|' + pageSize + '|' + page;
      if(o._contentFlag == flag){
         return;
      }
   }
   o._contentFlag = flag;
   o._contentTypeCd = typeCd;
   o._contentSerach = search;
   o._contentOrder = order;
   o._contentPageSize = pageSize;
   o._contentPage = page;
   MO.Console.find(MO.FDuiDesktopConsole).showLoading();
   var connection = MO.Console.find(MO.FDrResourceConsole).doList(o._contentTypeCd, o._contentSerach, o._contentOrder, o._contentPageSize, o._contentPage);
   connection.addLoadListener(o, o.onServiceLoad);
}
MO.FDsResourceListContent_serviceResearch = function FDsResourceListContent_serviceResearch(){
   var o = this;
   o.serviceSearch(o._contentTypeCd, o._contentSerach, o._contentOrder, o._contentPageSize, o._contentPage, true);
}
MO.FDsResourceListContent_dispose = function FDsResourceListContent_dispose(){
   var o = this;
   o.__base.FDuiListView.dispose.call(o);
}
MO.FDsResourceListItem = function FDsResourceListItem(o){
   o = MO.Class.inherits(this, o, MO.FDuiListViewItem);
   o._styleTypePanel        = MO.Class.register(o, new MO.AStyle('_styleTypePanel'));
   o._styleTypePrivateLabel = MO.Class.register(o, new MO.AStyle('_styleTypePublicLabel'));
   o._styleTypePublicLabel  = MO.Class.register(o, new MO.AStyle('_styleTypePrivateLabel'));
   o.onBuild         = MO.FDsResourceListItem_onBuild;
   o.setTypeLabel    = MO.FDsResourceListItem_setTypeLabel;
   o.refreshStyle    = MO.FDsResourceListItem_refreshStyle;
   return o;
}
MO.FDsResourceListItem_onBuild = function FDsResourceListItem_onBuild(p){
   var o = this;
   o.__base.FDuiListViewItem.onBuild.call(o, p);
   var h = o._hPanel;
   h.style.width = '200px';
   h.style.height = '150px';
   o._hLine1.className = o.styleName('TypePanel');
   o._hLine1.vAlign = 'top';
   o._hTypeLabel = MO.Window.Builder.appendDiv(o._hLine1, o.styleName('TypePrivateLabel'));
}
MO.FDsResourceListItem_setTypeLabel = function FDsResourceListItem_setTypeLabel(label){
   this._hTypeLabel.innerHTML = label;
}
MO.FDsResourceListItem_refreshStyle = function FDsResourceListItem_refreshStyle(){
   var o = this;
   if(o._shareCd == 'Public'){
      o._hTypeLabel.className = o.styleName('TypePublicLabel');
   }else{
      o._hTypeLabel.className = o.styleName('TypePrivateLabel');
   }
   var url = '/cloud.resource.preview.wv?type_cd=' + o._typeCd + '&guid=' + o._guid + '&update_date=' + o._updateDate;
   o._hForm.style.backgroundImage = 'url("' + url + '")';
}
MO.FDsResourceListToolBar = function FDsResourceListToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar, MO.MUiStorage);
   o._dropButton       = null;
   o._selectButton     = null;
   o._translateButton  = null;
   o._rotationButton   = null;
   o._scaleButton      = null;
   o._lookFrontButton  = null;
   o._lookUpButton     = null;
   o._lookLeftButton   = null;
   o._playButton       = null;
   o._viewButton       = null;
   o.onBuilded         = MO.FDsResourceListToolBar_onBuilded;
   o.onSearchClick     = MO.FDsResourceListToolBar_onSearchClick;
   o.onNavigatorClick  = MO.FDsResourceListToolBar_onNavigatorClick;
   o.onTypeClick       = MO.FDsResourceListToolBar_onTypeClick;
   o.construct         = MO.FDsResourceListToolBar_construct;
   o.makeTypeCd        = MO.FDsResourceListToolBar_makeTypeCd;
   o.setNavigator      = MO.FDsResourceListToolBar_setNavigator;
   o.doNavigator       = MO.FDsResourceListToolBar_doNavigator;
   o.storageLoad       = MO.FDsResourceListToolBar_storageLoad;
   o.dispose           = MO.FDsResourceListToolBar_dispose;
   return o;
}
MO.FDsResourceListToolBar_onBuilded = function FDsResourceListToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlSearchEdit.addClickListener(o, o.onSearchClick);
   o._controlFirstButton.addClickListener(o, o.onNavigatorClick);
   o._controlPriorButton.addClickListener(o, o.onNavigatorClick);
   o._controlNextButton.addClickListener(o, o.onNavigatorClick);
   o._controlLastButton.addClickListener(o, o.onNavigatorClick);
   o._controlTypeAll.addClickListener(o, o.onTypeClick);
   o._controlTypeNone.addClickListener(o, o.onTypeClick);
   o._controlTypeBitmap.addClickListener(o, o.onTypeClick);
   o._controlTypeBitmap.check(true);
   o._controlTypeMaterial.addClickListener(o, o.onTypeClick);
   o._controlTypeMaterial.check(true);
   o._controlTypeModel.addClickListener(o, o.onTypeClick);
   o._controlTypeModel.check(true);
   o._controlTypeTemplate.addClickListener(o, o.onTypeClick);
   o._controlTypeTemplate.check(true);
   o._controlTypeScene.addClickListener(o, o.onTypeClick);
   o._controlTypeScene.check(true);
}
MO.FDsResourceListToolBar_onSearchClick = function FDsResourceListToolBar_onSearchClick(p){
   this.doNavigator(0);
}
MO.FDsResourceListToolBar_onNavigatorClick = function FDsResourceListToolBar_onNavigatorClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._contentPage;
   switch(name){
      case 'firstButton':
         page = 0;
         break;
      case 'priorButton':
         page--;
         break;
      case 'nextButton':
         page++;
         break;
      case 'lastButton':
         page = o._contentPageCount - 1;
         break;
   }
   o.doNavigator(page);
}
MO.FDsResourceListToolBar_onTypeClick = function FDsResourceListToolBar_onTypeClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._contentPage;
   switch(name){
      case 'typeAll':
         o._controlTypeBitmap.check(true);
         o._controlTypeMaterial.check(true);
         o._controlTypeModel.check(true);
         o._controlTypeTemplate.check(true);
         o._controlTypeScene.check(true);
         break;
      case 'typeNone':
         o._controlTypeBitmap.check(false);
         o._controlTypeMaterial.check(false);
         o._controlTypeModel.check(false);
         o._controlTypeTemplate.check(false);
         o._controlTypeScene.check(false);
         break;
      case 'typeBitmap':
         page = 0;
         break;
      case 'typeMaterial':
         page--;
         break;
      case 'typeMesh':
         page++;
         break;
      case 'typeTemplate':
         page = o._contentPageCount - 1;
         break;
      case 'typeScene':
         page = o._contentPageCount - 1;
         break;
   }
   var typeCd = o.makeTypeCd();
   var search = o._controlSearchEdit.text();
   o._frameSet._listContent.serviceSearch(typeCd, search, '', o._contentPageSize, 0)
   o.storageSet('resource_type_cd', typeCd);
   o.storageSet('control_type_bitmap:check', MO.Lang.Boolean.toString(o._controlTypeBitmap.isCheck()))
   o.storageSet('control_type_material:check', MO.Lang.Boolean.toString(o._controlTypeMaterial.isCheck()))
   o.storageSet('control_type_model:check', MO.Lang.Boolean.toString(o._controlTypeModel.isCheck()))
   o.storageSet('control_type_template:check', MO.Lang.Boolean.toString(o._controlTypeTemplate.isCheck()))
   o.storageSet('control_type_scene:check', MO.Lang.Boolean.toString(o._controlTypeScene.isCheck()))
   o.storageUpdate();
}
MO.FDsResourceListToolBar_construct = function FDsResourceListToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsResourceListToolBar_makeTypeCd = function FDsResourceListToolBar_makeTypeCd(){
   var o = this;
   var types = '';
   if(o._controlTypeBitmap.isCheck()){
      types += '|Bitmap';
   }
   if(o._controlTypeMaterial.isCheck()){
      types += '|Material';
   }
   if(o._controlTypeModel.isCheck()){
      types += '|Model';
   }
   if(o._controlTypeTemplate.isCheck()){
      types += '|Template';
   }
   if(o._controlTypeScene.isCheck()){
      types += '|Scene';
   }
   if(types != ''){
      types = types.substring(1);
   }
   if(MO.Lang.String.isEmpty(types)){
      types = 'All';
   }
   return types;
}
MO.FDsResourceListToolBar_setNavigator = function FDsResourceListToolBar_setNavigator(pageSize, pageCount, page){
   var o = this;
   o._contentPageSize = pageSize;
   o._contentPageCount = pageCount;
   o._contentPage = page;
   o._controlPageEdit.setText(page);
}
MO.FDsResourceListToolBar_doNavigator = function FDsResourceListToolBar_doNavigator(page){
   var o = this;
   var typeCd = o.makeTypeCd();
   var search = o._controlSearchEdit.text();
   page = MO.Lang.Integer.toRange(page, 0, o._contentPageCount);
   if((o._contentTypeCd != typeCd) || (o._contentSerach != search) || (o._contentPage != page)){
      o._frameSet._listContent.serviceSearch(typeCd, search, '', o._contentPageSize, page)
   }
   o._contentTypeCd = typeCd;
   o._contentSerach = search;
}
MO.FDsResourceListToolBar_storageLoad = function FDsResourceListToolBar_storageLoad(){
   var o = this;
   o._controlTypeBitmap.check(o.storageGetBoolean('control_type_bitmap:check', true));
   o._controlTypeMaterial.check(o.storageGetBoolean('control_type_material:check', true));
   o._controlTypeModel.check(o.storageGetBoolean('control_type_model:check', true));
   o._controlTypeTemplate.check(o.storageGetBoolean('control_type_template:check', true));
   o._controlTypeScene.check(o.storageGetBoolean('control_type_scene:check', true));
   var typeCd = o.makeTypeCd();
   var types = o.storageGet('resource_type_cd', 'All');
   var search = o._controlSearchEdit.text();
   o._frameSet._listContent.serviceSearch(types, search, '', o._contentPageSize, 0)
}
MO.FDsResourceListToolBar_dispose = function FDsResourceListToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsResourceMenuBar = function FDsResourceMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._controlImportPicture  = null;
   o._controlImportModel    = null;
   o._controlCreateMaterial = null;
   o._controlCreateTemplate = null;
   o._controlCreateScene    = null;
   o._controlDelete         = null;
   o._controlShareOpen      = null;
   o._controlShareClose     = null;
   o.onImportPictureClick   = MO.FDsResourceMenuBar_onImportPictureClick;
   o.onImportModelClick     = MO.FDsResourceMenuBar_onImportModelClick;
   o.onCreateMaterialClick  = MO.FDsResourceMenuBar_onCreateMaterialClick;
   o.onCreateTemplateClick  = MO.FDsResourceMenuBar_onCreateTemplateClick;
   o.onCreateSceneClick     = MO.FDsResourceMenuBar_onCreateSceneClick;
   o.onDeleteLoad           = MO.FDsResourceMenuBar_onDeleteLoad;
   o.onDeleteExecute        = MO.FDsResourceMenuBar_onDeleteExecute;
   o.onDeleteClick          = MO.FDsResourceMenuBar_onDeleteClick;
   o.onShareLoad            = MO.FDsResourceMenuBar_onShareLoad;
   o.onShareClick           = MO.FDsResourceMenuBar_onShareClick;
   o.construct              = MO.FDsResourceMenuBar_construct;
   o.dispose                = MO.FDsResourceMenuBar_dispose;
   return o;
}
MO.FDsResourceMenuBar_onImportPictureClick = function FDsResourceMenuBar_onImportPictureClick(p){
   var o = this;
   var frameSet = o._workspace._activeFrameSet;
   var catalog = frameSet._catalogContent;
   var node = catalog.focusNode();
   var nodeGuid = null;
   var nodeLabel = null;
   if(node){
      nodeGuid = node.guid();
      nodeLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsResourceImportDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog._nodeGuid = nodeGuid;
   dialog.setNodeLabel(nodeLabel);
   dialog.switchMode(MO.EE3sResource.Bitmap);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsResourceMenuBar_onImportModelClick = function FDsResourceMenuBar_onImportModelClick(p){
   var o = this;
   var frameSet = o._workspace._activeFrameSet;
   var catalog = frameSet._catalogContent;
   var node = catalog.focusNode();
   var nodeGuid = null;
   var nodeLabel = null;
   if(node){
      nodeGuid = node.guid();
      nodeLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceImportDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog._nodeGuid = nodeGuid;
   dialog.setNodeLabel(nodeLabel);
   dialog.switchMode(MO.EE3sResource.Model);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsResourceMenuBar_onCreateMaterialClick = function FDsResourceMenuBar_onCreateMaterialClick(){
   var o = this;
   var frameSet = o._workspace._activeFrameSet;
   var catalog = frameSet._catalogContent;
   var node = catalog.focusNode();
   var nodeGuid = null;
   var nodeLabel = null;
   if(node){
      nodeGuid = node.guid();
      nodeLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceCreateDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog._nodeGuid = nodeGuid;
   dialog.setNodeLabel(nodeLabel);
   dialog.switchMode(MO.EE3sResource.Material);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsResourceMenuBar_onCreateTemplateClick = function FDsResourceMenuBar_onCreateTemplateClick(){
   var o = this;
   var frameSet = o._workspace._activeFrameSet;
   var catalog = frameSet._catalogContent;
   var node = catalog.focusNode();
   var nodeGuid = null;
   var nodeLabel = null;
   if(node){
      nodeGuid = node.guid();
      nodeLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceCreateDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog._nodeGuid = nodeGuid;
   dialog.setNodeLabel(nodeLabel);
   dialog.switchMode(MO.EE3sResource.Template);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsResourceMenuBar_onCreateSceneClick = function FDsResourceMenuBar_onCreateSceneClick(){
   var o = this;
   var frameSet = o._workspace._activeFrameSet;
   var catalog = frameSet._catalogContent;
   var node = catalog.focusNode();
   var nodeGuid = null;
   var nodeLabel = null;
   if(node){
      nodeGuid = node.guid();
      nodeLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceCreateDialog);
   dialog._frameSet = o._frameSet;
   dialog._workspace = o._workspace;
   dialog._nodeGuid = nodeGuid;
   dialog.setNodeLabel(nodeLabel);
   dialog.switchMode(MO.EE3sResource.Scene);
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsResourceMenuBar_onDeleteLoad = function FDsResourceMenuBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var frame = o._frameSet._listContent;
   frame.serviceResearch();
}
MO.FDsResourceMenuBar_onDeleteExecute = function FDsResourceMenuBar_onDeleteExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      MO.Console.find(FDuiDesktopConsole).hide();
      return
   }
   var item = o._frameSet._listContent.focusItem();
   var typeCd = item._typeCd;
   var guid = item._guid;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrResourceConsole).doDelete(typeCd, guid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsResourceMenuBar_onDeleteClick = function FDsResourceMenuBar_onDeleteClick(event){
   var o = this;
   var item = o._frameSet._listContent.focusItem();
   if(!item){
      return alert('请选中后再点击删除');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前资源？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsResourceMenuBar_onShareLoad = function FDsResourceMenuBar_onShareLoad(){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsResourceMenuBar_onShareClick = function FDsResourceMenuBar_onShareClick(event){
   var o = this;
   var item = o._frameSet._listContent.focusItem();
   if(!item){
      return alert('请选中后再点击删除');
   }
   var sender = event.sender;
   var name = sender.name();
   var shareCd = null;
   if(name == 'shareOpen'){
      shareCd = 'Public';
   }else{
      shareCd = 'Private';
   }
   var guid = item._guid;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrResourceConsole).doShare(guid, shareCd);
   connection.addLoadListener(o, o.onShareLoad);
}
MO.FDsResourceMenuBar_construct = function FDsResourceMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsResourceMenuBar_dispose = function FDsResourceMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsResourcePropertyContent = function FDsResourcePropertyContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._activeSpace         = null;
   o._canvasModeCd        = MO.EDsCanvasMode.Drop;
   o._canvasMoveCd        = MO.EDsCanvasDrag.Unknown;
   o._optionRotation      = false;
   o._rotation            = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._captureRotation     = null;
   o._dimensional         = null;
   o._selectObject        = null;
   o._selectBoundBox      = null;
   o._selectRenderables   = null;
   o._cameraMoveRate      = 8;
   o._cameraKeyRotation   = 3;
   o._cameraMouseRotation = 0.005;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsResourcePropertyContent_onBuild;
   o.onMouseCaptureStart  = MO.FDsResourcePropertyContent_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsResourcePropertyContent_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsResourcePropertyContent_onMouseCaptureStop;
   o.onEnterFrame         = MO.FDsResourcePropertyContent_onEnterFrame;
   o.onMeshLoad           = MO.FDsResourcePropertyContent_onMeshLoad;
   o.oeResize             = MO.FDsResourcePropertyContent_oeResize;
   o.oeRefresh            = MO.FDsResourcePropertyContent_oeRefresh;
   o.construct            = MO.FDsResourcePropertyContent_construct;
   o.innerSelectDisplay   = MO.FDsResourcePropertyContent_innerSelectDisplay;
   o.innerSelectLayer     = MO.FDsResourcePropertyContent_innerSelectLayer;
   o.selectNone           = MO.FDsResourcePropertyContent_selectNone;
   o.selectDisplay        = MO.FDsResourcePropertyContent_selectDisplay;
   o.selectMaterial       = MO.FDsResourcePropertyContent_selectMaterial;
   o.selectRenderable     = MO.FDsResourcePropertyContent_selectRenderable;
   o.switchRotation       = MO.FDsResourcePropertyContent_switchRotation;
   o.reloadRegion         = MO.FDsResourcePropertyContent_reloadRegion;
   o.loadMeshByGuid       = MO.FDsResourcePropertyContent_loadMeshByGuid;
   o.loadMeshByCode       = MO.FDsResourcePropertyContent_loadMeshByCode;
   o.dispose              = MO.FDsResourcePropertyContent_dispose;
   return o;
}
MO.FDsResourcePropertyContent_onBuild = function FDsResourcePropertyContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsResourcePropertyContent_onMouseCaptureStart = function FDsResourcePropertyContent_onMouseCaptureStart(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var r = o._activeSpace.region();
   var st = MO.Console.find(MO.FG3dTechniqueConsole).find(o._graphicContext, MO.FG3dSelectTechnique);
   var r = st.test(r, p.offsetX, p.offsetY);
   o.selectRenderable(r);
   o._capturePosition.set(p.clientX, p.clientY);
   o._captureRotation.assign(s.camera()._rotation);
   if(r){
      var d = r.display();
      o._captureMatrix.assign(d.matrix());
   }
   o._templateMatrix.identity();
   if(o._templateFace){
      o._templateFaceMatrix.assign(o._templateFace.matrix());
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         if(!r._dragMatrix){
            r._dragMatrix = new MO.SMatrix3d();
         }
         r._dragMatrix.assign(r.matrix());
      }
   }
   RHtml.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}
MO.FDsResourcePropertyContent_onMouseCapture = function FDsResourcePropertyContent_onMouseCapture(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var mc = o._canvasModeCd;
   var mv = o._canvasMoveCd;
   var cm = o._captureMatrix;
   var sm = null;
   var tf = o._templateFace;
   var tm = o._templateMatrix;
   switch(mc){
      case MO.EDsCanvasMode.Drop:
         var c = o._activeSpace.camera();
         var r = c.rotation();
         var cr = o._captureRotation;
         r.x = cr.x - cy * o._cameraMouseRotation;
         r.y = cr.y - cx * o._cameraMouseRotation;
         break;
      case MO.EDsCanvasMode.Select:
         break;
      case MO.EDsCanvasMode.Translate:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.tx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ty = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.tz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Rotation:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.rx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.ry = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.rz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Scale:
         if(tf){
            if(mv == EDsCanvasDrag.X){
               tm.sx = cx / 10;
            }else if(mv == EDsCanvasDrag.Y){
               tm.sy = -cy / 10;
            }else if(mv == EDsCanvasDrag.Z){
               tm.sz = cx / 10;
            }else if(mv == EDsCanvasDrag.All){
               tm.sx = cx / 10;
               tm.sy = cx / 10;
               tm.sz = cx / 10;
            }
         }
         break;
   }
   if(tf){
      tf.matrix().merge(o._templateFaceMatrix, tm);
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         r._matrix.merge(r._dragMatrix, tm);
      }
   }
}
MO.FDsResourcePropertyContent_onMouseCaptureStop = function FDsResourcePropertyContent_onMouseCaptureStop(p){
   var o = this;
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsResourcePropertyContent_onEnterFrame = function FDsResourcePropertyContent_onEnterFrame(){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var st = s.timer();
   var ss = st.spanSecond();
   var c = s.camera();
   var d = o._cameraMoveRate * ss;
   var r = o._cameraKeyRotation * ss;
   var kf = RKeyboard.isPress(EStageKey.Forward);
   var kb = RKeyboard.isPress(EStageKey.Back);
   if(kf && !kb){
      c.doWalk(d);
   }
   if(!kf && kb){
      c.doWalk(-d);
   }
   var kq = RKeyboard.isPress(EStageKey.Up);
   var ke = RKeyboard.isPress(EStageKey.Down);
   if(kq && !ke){
      c.doFly(d);
   }
   if(!kq && ke){
      c.doFly(-d);
   }
   var ka = RKeyboard.isPress(EStageKey.RotationLeft);
   var kd = RKeyboard.isPress(EStageKey.RotationRight);
   if(ka && !kd){
      c.doYaw(r);
   }
   if(!ka && kd){
      c.doYaw(-r);
   }
   var kz = RKeyboard.isPress(EStageKey.RotationUp);
   var kw = RKeyboard.isPress(EStageKey.RotationDown);
   if(kz && !kw){
      c.doPitch(r);
   }
   if(!kz && kw){
      c.doPitch(-r);
   }
   c.update();
   if(o._optionRotation){
      var r = o._rotation;
      var display = o._activeSpace._display;
      var matrix = display.matrix();
      matrix.setRotation(matrix.rx, matrix.ry + r.y, matrix.rz);
      matrix.update();
      r.y = 0.01;
   }
}
MO.FDsResourcePropertyContent_onMeshLoad = function FDsResourcePropertyContent_onMeshLoad(p){
   var o = this;
   var m = o._activeSpace;
   var g = m.region();
   var rc = g.camera();
   rc.setPosition(0, 3, -10);
   rc.lookAt(0, 3, 0);
   rc.update();
   var h = o._hPanel;
   var rp = rc.projection();
   rp.size().set(h.width, h.height);
   rp._angle = 45;
   rp.update();
   var l = g.directionalLight();
   var lc = l.camera();
   lc.setPosition(10, 10, 0);
   lc.lookAt(0, 0, 0);
   lc.update();
   o.processLoadListener(o);
}
MO.FDsResourcePropertyContent_oeResize = function FDsResourcePropertyContent_oeResize(p){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, p);
   var hp = o._hPanel;
   var w = hp.offsetWidth;
   var h = hp.offsetHeight;
   var s = o._activeSpace;
   if(s){
      var cp = s.camera().projection();
      cp.size().set(w, h);
      cp.update();
   }
   return EEventStatus.Stop;
}
MO.FDsResourcePropertyContent_oeRefresh = function FDsResourcePropertyContent_oeRefresh(p){
   return EEventStatus.Stop;
}
MO.FDsResourcePropertyContent_construct = function FDsResourcePropertyContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
   o._selectRenderables = new TObjects();
}
MO.FDsResourcePropertyContent_innerSelectDisplay = function FDsResourcePropertyContent_innerSelectDisplay(p){
   var o = this;
   var s = p.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.getAt(i);
      if(MO.Class.isClass(r, FDsSceneRenderable)){
         o._selectRenderables.push(r);
         r.showBoundBox();
      }
   }
}
MO.FDsResourcePropertyContent_innerSelectLayer = function FDsResourcePropertyContent_innerSelectLayer(p){
   var o = this;
   var s = p.displays();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var d = s.getAt(i);
      o.innerSelectDisplay(d)
   }
}
MO.FDsResourcePropertyContent_selectNone = function FDsResourcePropertyContent_selectNone(){
   var o = this;
   o._selectObject = null;
   var s = o._selectRenderables;
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      r.hideBoundBox();
   }
   o._selectRenderables.clear();
}
MO.FDsResourcePropertyContent_selectDisplay = function FDsResourcePropertyContent_selectDisplay(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   o.innerSelectDisplay(p);
}
MO.FDsResourcePropertyContent_selectMaterial = function FDsResourcePropertyContent_selectMaterial(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   var d = p._display;
   var s = d.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      if(r._materialReference == p){
         o._selectRenderables.push(r);
         r._optionSelected = true;
         r.showBoundBox();
      }
   }
}
MO.FDsResourcePropertyContent_selectRenderable = function FDsResourcePropertyContent_selectRenderable(p){
   var o = this;
   var sr = p;
   if(sr){
      var n = sr._renderable._resource._code;
      switch(n){
         case 'ms_translation_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_x':
            o._canvasMoveCd = EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_y':
            o._canvasMoveCd = EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_z':
            o._canvasMoveCd = EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_all':
            o._canvasMoveCd = EDsCanvasDrag.All;
            o._templateRenderable = sr;
            return;
         default:
            o._canvasMoveCd = EDsCanvasDrag.Unknown;
            o._templateRenderable = null;
      }
   }
   o.selectNone();
   if(p){
      o._selectRenderables.push(p);
      p._optionSelected = true;
      p.showBoundBox();
      o._workspace._catalog.showObject(p);
   }
   var t = o._templateTranslation;
   var r = o._templateRotation;
   var s = o._templateScale;
   var mc = o._canvasModeCd;
   switch(mc){
      case EDsCanvasMode.Drop:
         break;
      case EDsCanvasMode.Select:
         break;
      case EDsCanvasMode.Translate:
         t.setVisible(sr != null);
         r.hide();
         s.hide();
         o._templateFace = t;
         break;
      case EDsCanvasMode.Rotation:
         t.hide();
         r.setVisible(sr != null);
         s.hide();
         o._templateFace = r;
         break;
      case EDsCanvasMode.Scale:
         t.hide();
         r.hide();
         s.setVisible(sr != null);
         o._templateFace = s;
         break;
   }
   var st = o._templateFace;
   if(sr && st){
      var d = sr.display();
      var m = st.matrix();
      m.assign(d.matrix());
      m.setScaleAll(o._templateViewScale);
      m.update();
   }
}
MO.FDsResourcePropertyContent_switchMode = function FDsResourcePropertyContent_switchMode(p){
   var o = this;
   o._canvasModeCd = p;
   o.selectRenderable(o._selectRenderable);
}
MO.FDsResourcePropertyContent_switchRotation = function FDsResourcePropertyContent_switchRotation(p){
   this._optionRotation = p;
}
MO.FDsResourcePropertyContent_reloadRegion = function FDsResourcePropertyContent_reloadRegion(region){
   var o = this;
   var resource = region.resource();
   o._cameraMoveRate = resource.moveSpeed();
   o._cameraKeyRotation = resource.rotationKeySpeed();
   o._cameraMouseRotation = resource.rotationMouseSpeed();
}
MO.FDsResourcePropertyContent_loadMeshByGuid = function FDsResourcePropertyContent_loadMeshByGuid(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByGuid(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsResourcePropertyContent_loadMeshByCode = function FDsResourcePropertyContent_loadMeshByCode(p){
   var o = this;
   var rmc = MO.Console.find(FE3dMeshConsole);
   if(o._activeSpace != null){
      rmc.free(o._activeSpace);
   }
   var space = o._activeSpace = rmc.allocByCode(o, p);
   space.addLoadListener(o, o.onMeshLoad);
   space._layer.pushRenderable(o._dimensional);
   RStage.register('mesh3d', space);
}
MO.FDsResourcePropertyContent_dispose = function FDsResourcePropertyContent_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsResourcePropertyToolBar = function FDsResourcePropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName             = 'resource.resource.PropertyToolBar';
   o._controlInsertButton   = null;
   o._controlUpdateButton   = null;
   o._controlDeleteButton   = null;
   o._controlRotationButton = null;
   o.onBuilded              = MO.FDsResourcePropertyToolBar_onBuilded;
   o.onUpdateClick          = MO.FDsResourcePropertyToolBar_onUpdateClick;
   o.onRotationClick        = MO.FDsResourcePropertyToolBar_onRotationClick;
   o.construct              = MO.FDsResourcePropertyToolBar_construct;
   o.dispose                = MO.FDsResourcePropertyToolBar_dispose;
   return o;
}
MO.FDsResourcePropertyToolBar_onBuilded = function FDsResourcePropertyToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlUpdateButton.addClickListener(o, o.onUpdateClick);
   o._controlRotationButton.addClickListener(o, o.onRotationClick);
}
MO.FDsResourcePropertyToolBar_onUpdateClick = function FDsResourcePropertyToolBar_onUpdateClick(event){
   var o = this;
}
MO.FDsResourcePropertyToolBar_onRotationClick = function FDsResourcePropertyToolBar_onRotationClick(event){
   var o = this;
   var previewContent = o._workspace._previewContent;
   previewContent.switchRotation(event.checked);
}
MO.FDsResourcePropertyToolBar_construct = function FDsResourcePropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsResourcePropertyToolBar_dispose = function FDsResourcePropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsResourceSelectCatalogToolBar = function FDsResourceSelectCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName          = 'resource.resource.SelectCatalogToolBar';
   o._controlFolderOpen  = null;
   o._controlFolderClose = null;
   o._activeNodeGuid     = null;
   o.onBuilded           = MO.FDsResourceSelectCatalogToolBar_onBuilded;
   o.onFolderOpenClick   = MO.FDsResourceSelectCatalogToolBar_onFolderOpenClick;
   o.onFolderCloseClick  = MO.FDsResourceSelectCatalogToolBar_onFolderCloseClick;
   o.construct           = MO.FDsResourceSelectCatalogToolBar_construct;
   o.dispose             = MO.FDsResourceSelectCatalogToolBar_dispose;
   return o;
}
MO.FDsResourceSelectCatalogToolBar_onBuilded = function FDsResourceSelectCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlFolderOpen.addClickListener(o, o.onFolderOpenClick);
   o._controlFolderClose.addClickListener(o, o.onFolderCloseClick);
}
MO.FDsResourceSelectCatalogToolBar_onFolderOpenClick = function FDsResourceSelectCatalogToolBar_onFolderOpenClick(event){
}
MO.FDsResourceSelectCatalogToolBar_onFolderCloseClick = function FDsResourceSelectCatalogToolBar_onFolderCloseClick(event){
}
MO.FDsResourceSelectCatalogToolBar_construct = function FDsResourceSelectCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsResourceSelectCatalogToolBar_dispose = function FDsResourceSelectCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsResourceSelectDialog = function FDsResourceSelectDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.resource.SelectDialog';
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleListContent     = MO.Class.register(o, new MO.AStyle('_styleListContent', 'List_Content'));
   o._dataModeCd           = null;
   o._controlParentLabel   = null;
   o._controlLabel         = null;
   o._controlConfirmButton = null;
   o._controlCancelButton  = null;
   o.onBuilded             = MO.FDsResourceSelectDialog_onBuilded;
   o.onConfirmLoad         = MO.FDsResourceSelectDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsResourceSelectDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsResourceSelectDialog_onCancelClick;
   o.construct             = MO.FDsResourceSelectDialog_construct;
   o.setNodeParentLabel    = MO.FDsResourceSelectDialog_setNodeParentLabel;
   o.setNodeLabel          = MO.FDsResourceSelectDialog_setNodeLabel;
   o.switchDataMode        = MO.FDsResourceSelectDialog_switchDataMode;
   o.dispose               = MO.FDsResourceSelectDialog_dispose;
   return o;
}
MO.FDsResourceSelectDialog_onBuilded = function FDsResourceSelectDialog_onBuilded(event){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, event);
   o._controlConfirm.addClickListener(o, o.onConfirmClick);
   o._controlCancel.addClickListener(o, o.onCancelClick);
   o._frameCatalogToolBar._hPanel.className = o.styleName('Toolbar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameListToolBar._hPanel.className = o.styleName('Toolbar_Ground');
   o._frameListContent._hPanel.className = o.styleName('List_Content');
   var splitterCatalog = o._catalogSplitter = o.searchControl('catalogSpliter');
   splitterCatalog.setAlignCd(EUiAlign.Left);
   splitterCatalog.setSizeHtml(o._frameCatalog._hPanel);
   var control = o._catalogToolbar = MO.Class.create(MO.FDsResourceSelectCatalogToolBar);
   control._workspace = o._workspace;
   control._frameSet = o;
   control.buildDefine(event);
   o._frameCatalogToolBar.push(control);
   var control = o._catalogContent = MO.Class.create(MO.FDsResourceCatalogContent);
   control._workspace = o._workspace;
   control._frameSet = o;
   control.build(event);
   o._frameCatalogContent.push(control);
   var control = o._listToolBar = MO.Class.create(MO.FDsResourceSelectListToolBar);
   control._workspace = o._workspace;
   control._frameSet = o;
   control.buildDefine(event);
   o._frameListToolBar.push(control);
   var control = o._listContent = MO.Class.create(MO.FDsResourceListContent);
   control._workspace = o._workspace;
   control._frameSet = o;
   control.build(event);
   o._frameListContent.push(control);
   o._listContent.serviceSearch();
}
MO.FDsResourceSelectDialog_onConfirmLoad = function FDsResourceSelectDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   o.hide();
   var catalog = o._frameSet._catalogContent;
   if(o._dataModeCd == MO.EUiDataMode.Insert){
      if(o._parentGuid){
         var node = catalog.findByGuid(o._parentGuid);
         catalog.loadNode(node);
      }else{
         catalog.loadService();
      }
   }else{
      var label = o._controlLabel.get();
      var node = catalog.focusNode();
      node.setLabel(label);
   }
}
MO.FDsResourceSelectDialog_onConfirmClick = function FDsResourceSelectDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var label = o._controlLabel.get();
   var resourceConsole = MO.Console.find(MO.FDrResourceConsole);
   var connection = null;
   if(o._dataModeCd == MO.EUiDataMode.Insert){
      connection = resourceConsole.doFolderCreate(o._parentGuid, null, label);
   }else{
      connection = resourceConsole.doFolderUpdate(o._nodeGuid, null, label);
   }
   connection.addLoadListener(o, o.onConfirmLoad);
}
MO.FDsResourceSelectDialog_onCancelClick = function FDsResourceSelectDialog_onCancelClick(event){
   this.hide();
}
MO.FDsResourceSelectDialog_construct = function FDsResourceSelectDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsResourceSelectDialog_setNodeParentLabel = function FDsResourceSelectDialog_setNodeParentLabel(label){
   this._controlParentLabel.set(label);
}
MO.FDsResourceSelectDialog_setNodeLabel = function FDsResourceSelectDialog_setNodeLabel(label){
   this._controlLabel.set(label);
}
MO.FDsResourceSelectDialog_switchDataMode = function FDsResourceSelectDialog_switchDataMode(modeCd){
   var o = this;
   o._dataModeCd = modeCd;
   if(modeCd == MO.EUiDataMode.Insert){
      o.setLabel('新建资源目录');
   }else if(modeCd == MO.EUiDataMode.Update){
      o.setLabel('资源目录属性');
   }
}
MO.FDsResourceSelectDialog_dispose = function FDsResourceSelectDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsResourceSelectListToolBar = function FDsResourceSelectListToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar, MO.MUiStorage);
   o._frameName        = 'resource.resource.SelectListToolBar';
   o._storageCode      = o._frameName;
   o._dropButton       = null;
   o._selectButton     = null;
   o._translateButton  = null;
   o._rotationButton   = null;
   o._scaleButton      = null;
   o._lookFrontButton  = null;
   o._lookUpButton     = null;
   o._lookLeftButton   = null;
   o._playButton       = null;
   o._viewButton       = null;
   o.onBuilded         = MO.FDsResourceSelectListToolBar_onBuilded;
   o.onSearchClick     = MO.FDsResourceSelectListToolBar_onSearchClick;
   o.onNavigatorClick  = MO.FDsResourceSelectListToolBar_onNavigatorClick;
   o.onTypeClick       = MO.FDsResourceSelectListToolBar_onTypeClick;
   o.construct         = MO.FDsResourceSelectListToolBar_construct;
   o.makeTypeCd        = MO.FDsResourceSelectListToolBar_makeTypeCd;
   o.setNavigator      = MO.FDsResourceSelectListToolBar_setNavigator;
   o.doNavigator       = MO.FDsResourceSelectListToolBar_doNavigator;
   o.storageLoad       = MO.FDsResourceSelectListToolBar_storageLoad;
   o.dispose           = MO.FDsResourceSelectListToolBar_dispose;
   return o;
}
MO.FDsResourceSelectListToolBar_onBuilded = function FDsResourceSelectListToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlSearchEdit.addClickListener(o, o.onSearchClick);
   o._controlFirstButton.addClickListener(o, o.onNavigatorClick);
   o._controlPriorButton.addClickListener(o, o.onNavigatorClick);
   o._controlNextButton.addClickListener(o, o.onNavigatorClick);
   o._controlLastButton.addClickListener(o, o.onNavigatorClick);
}
MO.FDsResourceSelectListToolBar_onSearchClick = function FDsResourceSelectListToolBar_onSearchClick(p){
   this.doNavigator(0);
}
MO.FDsResourceSelectListToolBar_onNavigatorClick = function FDsResourceSelectListToolBar_onNavigatorClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._contentPage;
   switch(name){
      case 'firstButton':
         page = 0;
         break;
      case 'priorButton':
         page--;
         break;
      case 'nextButton':
         page++;
         break;
      case 'lastButton':
         page = o._contentPageCount - 1;
         break;
   }
   o.doNavigator(page);
}
MO.FDsResourceSelectListToolBar_onTypeClick = function FDsResourceSelectListToolBar_onTypeClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var page = o._contentPage;
   switch(name){
      case 'typeAll':
         o._controlTypeBitmap.check(true);
         o._controlTypeMaterial.check(true);
         o._controlTypeModel.check(true);
         o._controlTypeTemplate.check(true);
         break;
      case 'typeNone':
         o._controlTypeBitmap.check(false);
         o._controlTypeMaterial.check(false);
         o._controlTypeModel.check(false);
         o._controlTypeTemplate.check(false);
         break;
      case 'typeBitmap':
         page = 0;
         break;
      case 'typeMaterial':
         page--;
         break;
      case 'typeMesh':
         page++;
         break;
      case 'typeTemplate':
         page = o._contentPageCount - 1;
         break;
      case 'typeScene':
         page = o._contentPageCount - 1;
         break;
   }
   var typeCd = o.makeTypeCd();
   var search = o._controlSearchEdit.text();
   o._frameSet._listContent.serviceSearch(typeCd, search, '', o._contentPageSize, 0)
   o.storageSet('resource_type_cd', typeCd);
   o.storageSet('control_type_bitmap:check', MO.Lang.Boolean.toString(o._controlTypeBitmap.isCheck()))
   o.storageSet('control_type_material:check', MO.Lang.Boolean.toString(o._controlTypeMaterial.isCheck()))
   o.storageSet('control_type_model:check', MO.Lang.Boolean.toString(o._controlTypeModel.isCheck()))
   o.storageSet('control_type_template:check', MO.Lang.Boolean.toString(o._controlTypeTemplate.isCheck()))
   o.storageSet('control_type_scene:check', MO.Lang.Boolean.toString(o._controlTypeScene.isCheck()))
   o.storageUpdate();
}
MO.FDsResourceSelectListToolBar_construct = function FDsResourceSelectListToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsResourceSelectListToolBar_makeTypeCd = function FDsResourceSelectListToolBar_makeTypeCd(){
   var o = this;
   var types = '';
   if(o._controlTypeBitmap.isCheck()){
      types += '|Bitmap';
   }
   if(o._controlTypeMaterial.isCheck()){
      types += '|Material';
   }
   if(o._controlTypeModel.isCheck()){
      types += '|Model';
   }
   if(o._controlTypeTemplate.isCheck()){
      types += '|Template';
   }
   if(o._controlTypeScene.isCheck()){
      types += '|Scene';
   }
   if(types != ''){
      types = types.substring(1);
   }
   if(MO.Lang.String.isEmpty(types)){
      types = 'All';
   }
   return 'All';
}
MO.FDsResourceSelectListToolBar_setNavigator = function FDsResourceSelectListToolBar_setNavigator(pageSize, pageCount, page){
   var o = this;
   o._contentPageSize = pageSize;
   o._contentPageCount = pageCount;
   o._contentPage = page;
   o._controlPageEdit.setText(page);
}
MO.FDsResourceSelectListToolBar_doNavigator = function FDsResourceSelectListToolBar_doNavigator(page){
   var o = this;
   var typeCd = o.makeTypeCd();
   var search = o._controlSearchEdit.text();
   page = RInteger.toRange(page, 0, o._contentPageCount);
   if((o._contentTypeCd != typeCd) || (o._contentSerach != search) || (o._contentPage != page)){
      o._frameSet._listContent.serviceSearch(typeCd, search, '', o._contentPageSize, page)
   }
   o._contentTypeCd = typeCd;
   o._contentSerach = search;
}
MO.FDsResourceSelectListToolBar_storageLoad = function FDsResourceSelectListToolBar_storageLoad(){
   var o = this;
   o._controlTypeBitmap.check(o.storageGetBoolean('control_type_bitmap:check', true));
   o._controlTypeMaterial.check(o.storageGetBoolean('control_type_material:check', true));
   o._controlTypeModel.check(o.storageGetBoolean('control_type_model:check', true));
   o._controlTypeTemplate.check(o.storageGetBoolean('control_type_template:check', true));
   o._controlTypeScene.check(o.storageGetBoolean('control_type_scene:check', true));
   var typeCd = o.makeTypeCd();
   var types = o.storageGet('resource_type_cd', 'All');
   var search = o._controlSearchEdit.text();
   o._frameSet._listContent.serviceSearch(types, search, '', o._contentPageSize, 0)
}
MO.FDsResourceSelectListToolBar_dispose = function FDsResourceSelectListToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsResourceTabBar = function FDsResourceTabBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiTabBar);
   o._frameName             = 'design3d.resource.TabBar';
   o._resourceTypeCd        = 'mesh';
   o._controlPictureButton  = null;
   o._controlSoundButton    = null;
   o._controlVidioButton    = null;
   o._controlTextureButton  = null;
   o._controlMaterialButton = null;
   o._controlMeshButton     = null;
   o._controlModelButton    = null;
   o._controlTemplateButton = null;
   o._controlSceneButton    = null;
   o.onBuilded              = MO.FDsResourceTabBar_onBuilded;
   o.onButtonClick          = MO.FDsResourceTabBar_onButtonClick;
   o.construct              = MO.FDsResourceTabBar_construct;
   o.dispose                = MO.FDsResourceTabBar_dispose;
   return o;
}
MO.FDsResourceTabBar_onBuilded = function FDsResourceTabBar_onBuilded(p){
   var o = this;
   o.__base.FDuiTabBar.onBuilded.call(o, p);
   o._controlPictureButton.addClickListener(o, o.onButtonClick);
   o._controlSoundButton.addClickListener(o, o.onButtonClick);
   o._controlVidioButton.addClickListener(o, o.onButtonClick);
   o._controlTextureButton.addClickListener(o, o.onButtonClick);
   o._controlMaterialButton.addClickListener(o, o.onButtonClick);
   o._controlMeshButton.addClickListener(o, o.onButtonClick);
   o._controlModelButton.addClickListener(o, o.onButtonClick);
   o._controlTemplateButton.addClickListener(o, o.onButtonClick);
   o._controlSceneButton.addClickListener(o, o.onButtonClick);
}
MO.FDsResourceTabBar_onButtonClick = function FDsResourceTabBar_onButtonClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   o._resourceTypeCd = name;
}
MO.FDsResourceTabBar_construct = function FDsResourceTabBar_construct(){
   var o = this;
   o.__base.FDuiTabBar.construct.call(o);
}
MO.FDsResourceTabBar_dispose = function FDsResourceTabBar_dispose(){
   var o = this;
   o.__base.FDuiTabBar.dispose.call(o);
}
MO.FDsResourceWorkspace = function FDsResourceWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'resource.resource.Workspace';
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._styleCatalogGround   = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleCatalogToolbar  = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'Catalog_Toolbar'));
   o._styleSearchGround    = MO.Class.register(o, new MO.AStyle('_styleSearchGround', 'Search_Ground'));
   o._styleSearchToolbar   = MO.Class.register(o, new MO.AStyle('_styleCatalogToolbar', 'Search_Toolbar'));
   o._stylePreviewGround   = MO.Class.register(o, new MO.AStyle('_stylePreviewGround', 'Preview_Ground'));
   o._stylePreviewToolbar  = MO.Class.register(o, new MO.AStyle('_stylePreviewToolbar', 'Preview_Toolbar'));
   o._stylePropertyGround  = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._resourceTypeCd       = 'picture';
   o._frameToolBar         = null;
   o._frameStatusBar       = null;
   o._frameCatalog         = null;
   o._frameCatalogToolbar  = null;
   o._frameCatalogContent  = null;
   o._frameSearch          = null;
   o._frameSearchToolbar   = null;
   o._frameSearchContent   = null;
   o._framePreview         = null;
   o._framePreviewToolbar  = null;
   o._framePreviewContent  = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsResourceWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsResourceWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsResourceWorkspace_onCatalogSelected;
   o.construct             = MO.FDsResourceWorkspace_construct;
   o.findPropertyFrame     = MO.FDsResourceWorkspace_findPropertyFrame;
   o.switchContent         = MO.FDsResourceWorkspace_switchContent;
   o.load                  = MO.FDsResourceWorkspace_load;
   o.dispose               = MO.FDsResourceWorkspace_dispose;
   return o;
}
MO.FDsResourceWorkspace_onBuilded = function FDsResourceWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Catalog_Ground');
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   var hTable = MO.Window.Builder.createTable(p);
   hTable.width = '100%';
   var hRow = MO.Window.Builder.appendTableRow(hTable);
   var c = o._toolbar = MO.Class.create(MO.FDsResourceMenuBar);
   c._workspace = o;
   c.buildDefine(p);
   var hCell = MO.Window.Builder.appendTableCell(hRow);
   hCell.appendChild(c._hPanel);
   var c = o._tabBar = MO.Class.create(MO.FDsResourceTabBar);
   c._workspace = o;
   c.buildDefine(p);
   var hCell = MO.Window.Builder.appendTableCell(hRow);
   hCell.width = '450px';
   hCell.align = 'right';
   hCell.vAlign = 'bottom';
   hCell.appendChild(c._hPanel);
   o._frameToolBar._hPanel.appendChild(hTable);
   var frameSet = o._frameSet = MO.Class.create(MO.FDsResourceFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   frameSet.switchContent(o._resourceTypeCd);
}
MO.FDsResourceWorkspace_onMeshLoad = function FDsResourceWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsResourceWorkspace_onCatalogSelected = function FDsResourceWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsResourceWorkspace_construct = function FDsResourceWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsResourceWorkspace_findPropertyFrame = function FDsResourceWorkspace_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._framePreview._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsResourceWorkspace_switchContent = function FDsResourceWorkspace_switchContent(typeCd){
   this._frameSet.switchContent(typeCd);
}
MO.FDsResourceWorkspace_load = function FDsResourceWorkspace_load(){
   var o = this;
}
MO.FDsResourceWorkspace_dispose = function FDsResourceWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsBitmapCanvasContent = function FDsBitmapCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsBitmapCanvas);
   return o;
}
MO.FDsBitmapCanvasToolBar = function FDsBitmapCanvasToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._canvasModeCd      = MO.EDsCanvasMode.Drop;
   o._controlSize1      = null;
   o._controlSize2      = null;
   o._controlSize3      = null;
   o._controlSize4      = null;
   o._controlSizeWidth  = null;
   o._controlSizeHeight = null;
   o.onBuilded          = MO.FDsBitmapCanvasToolBar_onBuilded;
   o.onSizeClick        = MO.FDsBitmapCanvasToolBar_onSizeClick;
   o.construct          = MO.FDsBitmapCanvasToolBar_construct;
   o.dispose            = MO.FDsBitmapCanvasToolBar_dispose;
   return o;
}
MO.FDsBitmapCanvasToolBar_onBuilded = function FDsBitmapCanvasToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsBitmapCanvasToolBar_onSizeClick = function FDsBitmapCanvasToolBar_onSizeClick(event){
   var o = this;
   var button = event.sender;
   var width = '*';
   var height = '*';
   var name = button.name();
   var label = button.label();
   if(name != 'sizeAuto'){
      var size = label.split('x');
      width = parseInt(size[0]);
      height = parseInt(size[1]);
   }
   o._controlSizeWidth.setText(width);
   o._controlSizeHeight.setText(height);
   o._frameSet._canvas.switchSize(width, height);
}
MO.FDsBitmapCanvasToolBar_construct = function FDsBitmapCanvasToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsBitmapCanvasToolBar_dispose = function FDsBitmapCanvasToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsBitmapFrameSet = function FDsBitmapFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   o.onBuilded             = MO.FDsBitmapFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsBitmapFrameSet_onDataLoaded;
   o.construct             = MO.FDsBitmapFrameSet_construct;
   o.loadByGuid            = MO.FDsBitmapFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsBitmapFrameSet_loadByCode;
   o.reload                = MO.FDsBitmapFrameSet_reload;
   o.dispose               = MO.FDsBitmapFrameSet_dispose;
   return o;
}
MO.FDsBitmapFrameSet_onBuilded = function FDsBitmapFrameSet_onBuilded(p){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, p);
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   var spliterProperty = o._spliterProperty;
   spliterProperty.setAlignCd(MO.EUiAlign.Right);
   spliterProperty.setSizeHtml(o._frameProperty._hPanel);
}
MO.FDsBitmapFrameSet_onDataLoaded = function FDsBitmapFrameSet_onDataLoaded(event){
   var o = this;
   debugger
   o._activeSpace = event._activeSpace;
}
MO.FDsBitmapFrameSet_construct = function FDsBitmapFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
}
MO.FDsBitmapFrameSet_loadByGuid = function FDsBitmapFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   var bitmap = o._activeResource = MO.Console.find(MO.FDrBitmapConsole).query(guid);
   var canvas = o._canvasContent;
   canvas.loadByGuid(guid);
   var frame = o.findPropertyFrame(MO.EDsFrame.BitmapPropertyFrame);
   frame.loadObject(bitmap);
}
MO.FDsBitmapFrameSet_loadByCode = function FDsBitmapFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   var connection = MO.Console.find(MO.FDrBitmapConsole).query(code);
   connection.addLoadListener(o, o.onDataLoaded);
}
MO.FDsBitmapFrameSet_reload = function FDsBitmapFrameSet_reload(){
   var o = this;
}
MO.FDsBitmapFrameSet_dispose = function FDsBitmapFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsBitmapImportDialog = function FDsBitmapImportDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.bitmap.ImportDialog';
   o._nodeGuid             = null;
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   o.onBuilded             = MO.FDsBitmapImportDialog_onBuilded;
   o.onFileLoaded          = MO.FDsBitmapImportDialog_onFileLoaded;
   o.onConfirmLoad         = MO.FDsBitmapImportDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsBitmapImportDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsBitmapImportDialog_onCancelClick;
   o.construct             = MO.FDsBitmapImportDialog_construct;
   o.dispose               = MO.FDsBitmapImportDialog_dispose;
   return o;
}
MO.FDsBitmapImportDialog_onBuilded = function FDsBitmapImportDialog_onBuilded(event){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, event);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsBitmapImportDialog_onFileLoaded = function FDsBitmapImportDialog_onFileLoaded(event){
   var o = this;
   var reader = o._fileReader;
   var resource = o._resource;
   var guid = resource.guid();
   var url = '/cloud.resource.bitmap.wv?do=updateData&guid=' + guid + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
   url = RBrowser.urlEncode(url);
   var connection = MO.Console.find(MO.FHttpConsole).send(url, reader.data());
   connection.addLoadListener(o, o.onConfirmLoad);
   o._fileReader = MO.Lang.Object.dispose(reader);
}
MO.FDsBitmapImportDialog_onConfirmLoad = function FDsBitmapImportDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   o.hide();
   o._frameSet.reload();
}
MO.FDsBitmapImportDialog_onConfirmClick = function FDsBitmapImportDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var file = o._controlFile._hInput.files[0];
   var reader = o._fileReader = MO.Class.create(MO.FFileReader);
   reader.addLoadListener(o, o.onFileLoaded);
   reader.loadFile(file);
}
MO.FDsBitmapImportDialog_onCancelClick = function FDsBitmapImportDialog_onCancelClick(event){
   this.hide();
}
MO.FDsBitmapImportDialog_construct = function FDsBitmapImportDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsBitmapImportDialog_dispose = function FDsBitmapImportDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsBitmapMenuBar = function FDsBitmapMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._controlBack    = null;
   o._controlSave    = null;
   o._controlCapture = null;
   o.onBuilded       = MO.FDsBitmapMenuBar_onBuilded;
   o.onSaveLoad      = MO.FDsBitmapMenuBar_onSaveLoad;
   o.onSaveClick     = MO.FDsBitmapMenuBar_onSaveClick;
   o.onImportClick   = MO.FDsBitmapMenuBar_onImportClick;
   o.construct       = MO.FDsBitmapMenuBar_construct;
   o.dispose         = MO.FDsBitmapMenuBar_dispose;
   return o;
}
MO.FDsBitmapMenuBar_onBuilded = function FDsBitmapMenuBar_onBuilded(event){
   var o = this;
   o.__base.FDuiMenuBar.onBuilded.call(o, event);
}
MO.FDsBitmapMenuBar_onSaveLoad = function FDsBitmapMenuBar_onSaveLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsBitmapMenuBar_onSaveClick = function FDsBitmapMenuBar_onSaveClick(event){
   var o = this;
   var bitmap = o._frameSet._activeResource;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrBitmapConsole).doUpdate(bitmap);
   connection.addLoadListener(o, o.onSaveLoad);
}
MO.FDsBitmapMenuBar_onImportClick = function FDsBitmapMenuBar_onImportClick(event){
   var o = this;
   var resource = o._frameSet._activeResource;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsBitmapImportDialog);
   dialog._resource = resource;
   dialog._frameSet = o._frameSet;
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsBitmapMenuBar_construct = function FDsBitmapMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsBitmapMenuBar_dispose = function FDsBitmapMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsBitmapPropertyFrame = function FDsBitmapPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeBitmap      = null;
   o._controlGuid       = null;
   o._controlCode       = null;
   o._controlLabel      = null;
   o._controlSizeWidth  = null;
   o._controlSizeHeight = null;
   o.onBuilded          = MO.FDsBitmapPropertyFrame_onBuilded;
   o.onDataChanged      = MO.FDsBitmapPropertyFrame_onDataChanged;
   o.construct          = MO.FDsBitmapPropertyFrame_construct;
   o.loadObject         = MO.FDsBitmapPropertyFrame_loadObject;
   o.dispose            = MO.FDsBitmapPropertyFrame_dispose;
   return o;
}
MO.FDsBitmapPropertyFrame_construct = function FDsBitmapPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsBitmapPropertyFrame_onBuilded = function FDsBitmapPropertyFrame_onBuilded(p){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, p);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsBitmapPropertyFrame_onDataChanged = function FDsBitmapPropertyFrame_onDataChanged(p){
   var o = this;
   var bitmap = o._activeBitmap;
   bitmap.setCode(o._controlCode.get());
   bitmap.setLabel(o._controlLabel.get());
}
MO.FDsBitmapPropertyFrame_loadObject = function FDsBitmapPropertyFrame_loadObject(bitmap){
   var o = this;
   o._activeBitmap = bitmap;
   o._controlGuid.set(bitmap.guid());
   o._controlCode.set(bitmap.code());
   o._controlLabel.set(bitmap.label());
   o._controlSizeWidth.set(bitmap.sizeWidth());
   o._controlSizeHeight.set(bitmap.sizeHeight());
}
MO.FDsBitmapPropertyFrame_dispose = function FDsBitmapPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsBitmapPropertyToolBar = function FDsBitmapPropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName      = 'resource.bitmap.PropertyToolBar';
   o._controlRefresh = null;
   o.onBuilded       = MO.FDsBitmapPropertyToolBar_onBuilded;
   o.onRefreshClick  = MO.FDsBitmapPropertyToolBar_onRefreshClick;
   o.construct       = MO.FDsBitmapPropertyToolBar_construct;
   o.dispose         = MO.FDsBitmapPropertyToolBar_dispose;
   return o;
}
MO.FDsBitmapPropertyToolBar_onBuilded = function FDsBitmapPropertyToolBar_onBuilded(event){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, event);
   o._controlRefresh.addClickListener(o, o.onRefreshClick);
}
MO.FDsBitmapPropertyToolBar_onRefreshClick = function FDsBitmapPropertyToolBar_onRefreshClick(event){
   var o = this;
}
MO.FDsBitmapPropertyToolBar_construct = function FDsBitmapPropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsBitmapPropertyToolBar_dispose = function FDsBitmapPropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsBitmapWorkspace = function FDsBitmapWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'design2d.bitmap.Workspace';
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleBodyGround      = MO.Class.register(o, new MO.AStyle('_styleBodyGround', 'Body_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._activeSpace          = null;
   o._activeMesh           = null;
   o._framesetMain         = null;
   o._framesetBody         = null;
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameSet             = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsBitmapWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsBitmapWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsBitmapWorkspace_onCatalogSelected;
   o.construct             = MO.FDsBitmapWorkspace_construct;
   o.findPropertyFrame     = MO.FDsBitmapWorkspace_findPropertyFrame;
   o.loadByGuid            = MO.FDsBitmapWorkspace_loadByGuid;
   o.loadByCode            = MO.FDsBitmapWorkspace_loadByCode;
   o.dispose               = MO.FDsBitmapWorkspace_dispose;
   return o;
}
MO.FDsBitmapWorkspace_onBuilded = function FDsBitmapWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Body_Ground');
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   var menuBar = o._menuBar = MO.Class.create(MO.FDsBitmapMenuBar);
   menuBar._workspace = o;
   menuBar.buildDefine(p);
   o._frameToolBar.push(menuBar);
   var frameSet = o._frameSet = MO.Class.create(MO.FDsBitmapFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   menuBar._frameSet = frameSet;
}
MO.FDsBitmapWorkspace_onMeshLoad = function FDsBitmapWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsBitmapWorkspace_onCatalogSelected = function FDsBitmapWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsBitmapWorkspace_construct = function FDsBitmapWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsBitmapWorkspace_findPropertyFrame = function FDsBitmapWorkspace_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._frameProperty._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsBitmapWorkspace_loadByGuid = function FDsBitmapWorkspace_loadByGuid(guid){
   this._frameSet.loadByGuid(guid);
}
MO.FDsBitmapWorkspace_loadByCode = function FDsBitmapWorkspace_loadByCode(code){
   this._frameSet.loadByCode(code);
}
MO.FDsBitmapWorkspace_dispose = function FDsBitmapWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsMaterialCanvasBitmap = function FDsMaterialCanvasBitmap(o){
   o = MO.Class.inherits(this, o, MO.FDsBitmapCanvas);
   return o;
}
MO.FDsMaterialCanvasContent = function FDsMaterialCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._activeResource      = null;
   o._activeMaterial      = null;
   o._capturePosition     = null;
   o._captureCameraPosition = null;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsMaterialCanvasContent_onBuild;
   o.onLoaded             = MO.FDsMaterialCanvasContent_onLoaded;
   o.oeResize             = MO.FDsMaterialCanvasContent_oeResize;
   o.oeRefresh            = MO.FDsMaterialCanvasContent_oeRefresh;
   o.construct            = MO.FDsMaterialCanvasContent_construct;
   o.reloadRegion         = MO.FDsMaterialCanvasContent_reloadRegion;
   o.loadByGuid           = MO.FDsMaterialCanvasContent_loadByGuid;
   o.dispose              = MO.FDsMaterialCanvasContent_dispose;
   return o;
}
MO.FDsMaterialCanvasContent_onBuild = function FDsMaterialCanvasContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
   var hPanel = o._hPanel;
   var space = o._activeSpace = MO.Class.create(MO.FE3dSimpleStage);
   space.linkGraphicContext(o);
   space.selectTechnique(o, MO.FE3dGeneralTechnique);
   space.region().backgroundColor().set(1, 1, 1, 1);
   space.region().linkGraphicContext(o);
   MO.RStage.register('space.material', space);
   var camera = space.camera();
   camera.setPosition(0, 0, -10);
   camera.lookAt(0, 0, 0);
   camera.update();
   var projection = camera.projection();
   projection.size().set(hPanel.width, hPanel.height);
   projection._angle = 45;
   projection.update();
}
MO.FDsMaterialCanvasContent_onLoaded = function FDsMaterialCanvasContent_onLoaded(event){
   var o = this;
   var material = o._activeMaterial = o._activeResource.material();
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsMaterialCanvasContent_oeResize = function FDsMaterialCanvasContent_oeResize(p){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, p);
   var hp = o._hPanel;
   var w = hp.offsetWidth;
   var h = hp.offsetHeight;
   var s = o._activeSpace;
   if(s){
      var cp = s.camera().projection();
      cp.size().set(w, h);
      cp.update();
   }
   return MO.EEventStatus.Stop;
}
MO.FDsMaterialCanvasContent_oeRefresh = function FDsMaterialCanvasContent_oeRefresh(p){
   return MO.EEventStatus.Stop;
}
MO.FDsMaterialCanvasContent_construct = function FDsMaterialCanvasContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureCameraPosition = new MO.SPoint3();
}
MO.FDsMaterialCanvasContent_selectDisplay = function FDsMaterialCanvasContent_selectDisplay(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   o.innerSelectDisplay(p);
}
MO.FDsMaterialCanvasContent_switchMode = function FDsMaterialCanvasContent_switchMode(p){
   var o = this;
   o._canvasModeCd = p;
}
MO.FDsMaterialCanvasContent_reloadRegion = function FDsMaterialCanvasContent_reloadRegion(region){
   var o = this;
   var resource = region.resource();
   o._cameraMoveRate = resource.moveSpeed();
   o._cameraKeyRotation = resource.rotationKeySpeed();
   o._cameraMouseMove = resource.rotationMouseSpeed();
}
MO.FDsMaterialCanvasContent_loadByGuid = function FDsMaterialCanvasContent_loadByGuid(guid){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showLoading();
   var resource = o._activeResource = MO.Console.find(MO.FE3sMaterialConsole).loadByGuid(guid);
   resource.clearLoadListeners();
   resource.addLoadListener(o, o.onLoaded);
}
MO.FDsMaterialCanvasContent_dispose = function FDsMaterialCanvasContent_dispose(){
   var o = this;
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsMaterialCanvasToolBar = function FDsMaterialCanvasToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._controlSize1      = null;
   o._controlSize2      = null;
   o._controlSize3      = null;
   o._controlSize4      = null;
   o._controlSizeWidth  = null;
   o._controlSizeHeight = null;
   o.onBuilded          = MO.FDsMaterialCanvasToolBar_onBuilded;
   o.onSizeClick        = MO.FDsMaterialCanvasToolBar_onSizeClick;
   o.construct          = MO.FDsMaterialCanvasToolBar_construct;
   o.dispose            = MO.FDsMaterialCanvasToolBar_dispose;
   return o;
}
MO.FDsMaterialCanvasToolBar_onBuilded = function FDsMaterialCanvasToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlSize1.addClickListener(o, o.onSizeClick);
   o._controlSize2.addClickListener(o, o.onSizeClick);
   o._controlSize3.addClickListener(o, o.onSizeClick);
   o._controlSize4.addClickListener(o, o.onSizeClick);
   o._controlSizeWidth.setText('*');
   o._controlSizeHeight.setText('*');
}
MO.FDsMaterialCanvasToolBar_onModeClick = function FDsMaterialCanvasToolBar_onModeClick(p){
   var o = this;
}
MO.FDsMaterialCanvasToolBar_onSizeClick = function FDsMaterialCanvasToolBar_onSizeClick(event){
   var o = this;
   var button = event.sender;
   var width = '*';
   var height = '*';
   var name = button.name();
   var label = button.label();
   if(name != 'sizeAuto'){
      var size = label.split('x');
      width = parseInt(size[0]);
      height = parseInt(size[1]);
   }
   o._controlSizeWidth.setText(width);
   o._controlSizeHeight.setText(height);
}
MO.FDsMaterialCanvasToolBar_construct = function FDsMaterialCanvasToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsMaterialCanvasToolBar_dispose = function FDsMaterialCanvasToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsMaterialCatalogContent = function FDsMaterialCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDuiListView);
   o._activeItem       = null;
   o._activeGuid       = null;
   o._refreshButton    = null;
   o._saveButton       = null;
   o._runButton        = null;
   o.onBuilded         = MO.FDsMaterialCatalogContent_onBuilded;
   o.onServiceLoad     = MO.FDsMaterialCatalogContent_onServiceLoad;
   o.construct         = MO.FDsMaterialCatalogContent_construct;
   o.doClickItem       = MO.FDsMaterialCatalogContent_doClickItem;
   o.doDoubleClickItem = MO.FDsMaterialCatalogContent_doDoubleClickItem;
   o.serviceList       = MO.FDsMaterialCatalogContent_serviceList;
   o.dispose           = MO.FDsMaterialCatalogContent_dispose;
   return o;
}
MO.FDsMaterialCatalogContent_onBuilded = function FDsMaterialCatalogContent_onBuilded(p){
   var o = this;
   o.__base.FDuiListView.onBuilded.call(o, p);
}
MO.FDsMaterialCatalogContent_onServiceLoad = function FDsMaterialCatalogContent_onServiceLoad(event){
   var o = this;
   var xitems = event.root.findNode('BitmapCollection');
   o.clear();
   var xnodes = xitems.nodes();
   var count = xnodes.count();
   for(var i = 0; i < count; i++){
      var xnode = xnodes.getAt(i);
      if(xnode.isName('Bitmap')){
         var code = xnode.get('code');
         var item = o.createItem(MO.FDsMaterialCatalogItem);
         item.propertyLoad(xnode);
         item._guid = xnode.get('guid');
         item._linkGuid = xnode.get('link_guid');
         item._code = code;
         item._updateDate = xnode.get('update_date');
         item.setTypeLabel(code);
         item.setLabel(MO.Lang.String.nvl(xnode.get('label'), xnode.get('code')));
         item.refreshStyle();
         o.push(item);
      }
   }
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsMaterialCatalogContent_construct = function FDsMaterialCatalogContent_construct(){
   var o = this;
   o.__base.FDuiListView.construct.call(o);
}
MO.FDsMaterialCatalogContent_doClickItem = function FDsMaterialCatalogContent_doClickItem(control){
   var o = this;
   o.__base.FDuiListView.doClickItem.call(o, control);
}
MO.FDsMaterialCatalogContent_doDoubleClickItem = function FDsMaterialCatalogContent_doDoubleClickItem(control){
   var o = this;
   o.__base.FDuiListView.doDoubleClickItem.call(o, control)
   var guid = control._guid;
   o._activeItem = control;
   o._activeGuid = guid;
   o._frameSet.switchCanvas('Bitmap', guid);
}
MO.FDsMaterialCatalogContent_serviceList = function FDsMaterialCatalogContent_serviceList(guid){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showLoading();
   var url = '/cloud.resource.material.ws?action=listBitmap&guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   connection.addLoadListener(o, o.onServiceLoad);
}
MO.FDsMaterialCatalogContent_dispose = function FDsMaterialCatalogContent_dispose(){
   var o = this;
   o.__base.FDuiListView.dispose.call(o);
}
MO.FDsMaterialCatalogItem = function FDsMaterialCatalogItem(o){
   o = MO.Class.inherits(this, o, MO.FDuiListViewItem);
   o._styleTypePanel = MO.Class.register(o, new MO.AStyle('_styleTypePanel'));
   o._styleTypeLabel = MO.Class.register(o, new MO.AStyle('_styleTypeLabel'));
   o.onBuild         = MO.FDsMaterialCatalogItem_onBuild;
   o.setTypeLabel    = MO.FDsMaterialCatalogItem_setTypeLabel;
   o.refreshStyle    = MO.FDsMaterialCatalogItem_refreshStyle;
   return o;
}
MO.FDsMaterialCatalogItem_onBuild = function FDsMaterialCatalogItem_onBuild(p){
   var o = this;
   o.__base.FDuiListViewItem.onBuild.call(o, p);
   var h = o._hPanel;
   h.style.width = '200px';
   h.style.height = '150px';
   o._hLine1.className = o.styleName('TypePanel');
   o._hLine1.vAlign = 'top';
   o._hTypeLabel = MO.Window.Builder.appendDiv(o._hLine1, o.styleName('TypeLabel'));
}
MO.FDsMaterialCatalogItem_setTypeLabel = function FDsMaterialCatalogItem_setTypeLabel(label){
   this._hTypeLabel.innerHTML = label;
}
MO.FDsMaterialCatalogItem_refreshStyle = function FDsMaterialCatalogItem_refreshStyle(){
   var o = this;
   var url = '/cloud.resource.bitmap.wv?do=preview&guid=' + o._guid + '&update_date=' + o._updateDate;
   o._hForm.style.backgroundImage = 'url("' + url + '")';
}
MO.FDsMaterialCatalogToolBar = function FDsMaterialCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._controlCreate   = null;
   o._controlDelete   = null;
   o._controlMoveUp   = null;
   o._controlMoveDown = null;
   o.onBuilded        = MO.FDsMaterialCatalogToolBar_onBuilded;
   o.onCreateClick    = MO.FDsMaterialCatalogToolBar_onCreateClick;
   o.onDeleteClick    = MO.FDsMaterialCatalogToolBar_onDeleteClick;
   o.onMoveClick      = MO.FDsMaterialCatalogToolBar_onMoveClick;
   o.construct        = MO.FDsMaterialCatalogToolBar_construct;
   o.dispose          = MO.FDsMaterialCatalogToolBar_dispose;
   return o;
}
MO.FDsMaterialCatalogToolBar_onBuilded = function FDsMaterialCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlCreate.addClickListener(o, o.onCreateClick);
   o._controlDelete.addClickListener(o, o.onDeleteClick);
   o._controlMoveUp.addClickListener(o, o.onMoveClick);
   o._controlMoveDown.addClickListener(o, o.onMoveClick);
}
MO.FDsMaterialCatalogToolBar_onCreateClick = function FDsMaterialCatalogToolBar_onCreateClick(p){
   var o = this;
}
MO.FDsMaterialCatalogToolBar_onDeleteClick = function FDsMaterialCatalogToolBar_onDeleteClick(event){
   var o = this;
}
MO.FDsMaterialCatalogToolBar_onMoveClick = function FDsMaterialCatalogToolBar_onMoveClick(event){
   var o = this;
}
MO.FDsMaterialCatalogToolBar_construct = function FDsMaterialCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsMaterialCatalogToolBar_dispose = function FDsMaterialCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsMaterialFrameSet = function FDsMaterialFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._frameCatalog         = null;
   o._frameCatalogToolBar  = null;
   o._frameCatalogContent  = null;
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   o.onBuilded             = MO.FDsMaterialFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsMaterialFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsMaterialFrameSet_onCatalogSelected;
   o.construct             = MO.FDsMaterialFrameSet_construct;
   o.switchCanvas          = MO.FDsMaterialFrameSet_switchCanvas;
   o.loadByGuid            = MO.FDsMaterialFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsMaterialFrameSet_loadByCode;
   o.dispose               = MO.FDsMaterialFrameSet_dispose;
   return o;
}
MO.FDsMaterialFrameSet_onBuilded = function FDsMaterialFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   var spliterCatalog = o._spliterCatalog;
   spliterCatalog.setAlignCd(MO.EUiAlign.Left);
   spliterCatalog.setSizeHtml(o._frameCatalog._hPanel);
   var spliterProperty = o._spliterProperty;
   spliterProperty.setAlignCd(MO.EUiAlign.Right);
   spliterProperty.setSizeHtml(o._frameProperty._hPanel);
   var canvas = o._canvasContent = MO.Class.create(MO.FDsMaterialCanvasContent);
   canvas._frameSet = o;
   canvas._hParent = o._frameCanvasContent._hPanel;
   canvas._hParent.style.scroll = 'auto';
   canvas.build(event);
   var canvas = o._canvasBitmap = MO.Class.create(MO.FDsMaterialCanvasBitmap);
   canvas._frameSet = o;
   canvas._hParent = o._frameCanvasContent._hPanel;
   canvas._hParent.style.scroll = 'auto';
   canvas.build(event);
   o._frameCanvasContent.push(canvas);
}
MO.FDsMaterialFrameSet_onDataLoaded = function FDsMaterialFrameSet_onDataLoaded(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsMaterialFrameSet_onCatalogSelected = function FDsMaterialFrameSet_onCatalogSelected(select, flag){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   o.hidePropertyFrames();
   if(MO.Class.isClass(select, MO.FE3dStage)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dTechnique)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRegion)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dCamera)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dDirectionalLight)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dMeshDisplay)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dMaterial)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dMeshRenderable)){
      var frame = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else{
      throw new MO.TError('Unknown select object type. (select={1})', select);
   }
}
MO.FDsMaterialFrameSet_construct = function FDsMaterialFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
}
MO.FDsMaterialFrameSet_switchCanvas = function FDsMaterialFrameSet_switchCanvas(typeCd, guid){
   var o = this;
   if(typeCd == 'Bitmap'){
      var canvas = o._canvasBitmap;
      canvas.loadByGuid(guid);
   }else{
   }
}
MO.FDsMaterialFrameSet_loadByGuid = function FDsMaterialFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   var resource = o._activeResource = MO.Console.find(MO.FDrMaterialConsole).query(guid);
   o._catalogContent.serviceList(guid);
   var canvas = o._canvasContent;
   canvas.loadByGuid(guid);
   var frame = o.findPropertyFrame(MO.EDsFrame.MaterialPropertyFrame);
   frame.loadObject(resource);
}
MO.FDsMaterialFrameSet_loadByCode = function FDsMaterialFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   o._canvas.loadByCode(code);
}
MO.FDsMaterialFrameSet_dispose = function FDsMaterialFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsMaterialImportDialog = function FDsMaterialImportDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.material.ImportDialog';
   o._modeCd               = null;
   o._nodeGuid             = null;
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   o.onBuilded             = MO.FDsMaterialImportDialog_onBuilded;
   o.onFileLoaded          = MO.FDsMaterialImportDialog_onFileLoaded;
   o.onConfirmLoad         = MO.FDsMaterialImportDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsMaterialImportDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsMaterialImportDialog_onCancelClick;
   o.construct             = MO.FDsMaterialImportDialog_construct;
   o.switchModeCd          = MO.FDsMaterialImportDialog_switchModeCd;
   o.dispose               = MO.FDsMaterialImportDialog_dispose;
   return o;
}
MO.FDsMaterialImportDialog_onBuilded = function FDsMaterialImportDialog_onBuilded(event){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, event);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsMaterialImportDialog_onFileLoaded = function FDsMaterialImportDialog_onFileLoaded(event){
   var o = this;
   var item = o._activeItem;
   var resource = o._frameSet._activeResource;
   var guid = resource.guid();
   var typeCode = o._controlTypeCode.get();
   var code = o._controlCode.get();
   if(MO.Lang.String.isEmpty(code)){
      code = typeCode;
   }
   var label = o._controlLabel.get();
   var url = null;
   var reader = o._fileReader;
   switch(o._modeCd){
      case 'select':
         var linkGuid = item._linkGuid;
         var bitmapGuid = item._guid;
         url = '/cloud.resource.material.wv?do=replaceData&material_guid=' + guid + '&link_guid=' + linkGuid + '&bitmap_guid=' + bitmapGuid + '&code=' + code + '&label=' + label + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
         break;
      case 'import':
         url = '/cloud.resource.material.wv?do=importData&material_guid=' + guid + '&code=' + code + '&label=' + label + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
         break;
      default:
         throw new MO.TError(o, 'Unknown mode. (mode_cd={1})', modeCd);
   }
   url = MO.RBrowser.urlEncode(url);
   var connection = MO.Console.find(MO.FHttpConsole).send(url, reader.data());
   connection.addLoadListener(o, o.onConfirmLoad);
   o._fileReader = MO.Lang.Object.dispose(reader);
}
MO.FDsMaterialImportDialog_onConfirmLoad = function FDsMaterialImportDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   o.hide();
}
MO.FDsMaterialImportDialog_onConfirmClick = function FDsMaterialImportDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var file = o._controlFile._hInput.files[0];
   var reader = o._fileReader = MO.Class.create(MO.FFileReader);
   reader.addLoadListener(o, o.onFileLoaded);
   reader.loadFile(file);
}
MO.FDsMaterialImportDialog_onCancelClick = function FDsMaterialImportDialog_onCancelClick(event){
   this.hide();
}
MO.FDsMaterialImportDialog_construct = function FDsMaterialImportDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsMaterialImportDialog_switchModeCd = function FDsMaterialImportDialog_switchModeCd(modeCd){
   var o = this;
   o._modeCd = modeCd;
   switch(modeCd){
      case 'select':
         o.setLabel('替换位图资源');
         break;
      case 'import':
         o.setLabel('导入位图资源');
         break;
      default:
         throw new MO.TError(o, 'Unknown mode. (mode_cd={1})', modeCd);
   }
   o._controlCode.set('');
   o._controlLabel.set('');
}
MO.FDsMaterialImportDialog_dispose = function FDsMaterialImportDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsMaterialMenuBar = function FDsMaterialMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._controlBack     = null;
   o._controlSave     = null;
   o._controlProperty = null;
   o._controlSelect   = null;
   o._controlImport   = null;
   o._controlCapture  = null;
   o.onBuilded        = MO.FDsMaterialMenuBar_onBuilded;
   o.onBackClick      = MO.FDsMaterialMenuBar_onBackClick;
   o.onSaveLoad       = MO.FDsMaterialMenuBar_onSaveLoad;
   o.onSaveClick      = MO.FDsMaterialMenuBar_onSaveClick;
   o.onPropertyClick  = MO.FDsMaterialMenuBar_onPropertyClick;
   o.onSelectLoad     = MO.FDsMaterialMenuBar_onSelectLoad;
   o.onSelectConfirm  = MO.FDsMaterialMenuBar_onSelectConfirm;
   o.onSelectClick    = MO.FDsMaterialMenuBar_onSelectClick;
   o.onImportClick    = MO.FDsMaterialMenuBar_onImportClick;
   o.onDeleteLoad     = MO.FDsMaterialMenuBar_onDeleteLoad;
   o.onDeleteExecute  = MO.FDsMaterialMenuBar_onDeleteExecute;
   o.onDeleteClick    = MO.FDsMaterialMenuBar_onDeleteClick;
   o.onCaptureLoad    = MO.FDsMaterialMenuBar_onCaptureLoad;
   o.onCaptureClick   = MO.FDsMaterialMenuBar_onCaptureClick;
   o.construct        = MO.FDsMaterialMenuBar_construct;
   o.dispose          = MO.FDsMaterialMenuBar_dispose;
   return o;
}
MO.FDsMaterialMenuBar_onBuilded = function FDsMaterialMenuBar_onBuilded(p){
   var o = this;
   o.__base.FDuiMenuBar.onBuilded.call(o, p);
   o._controlBack.addClickListener(o, o.onBackClick);
   o._controlSave.addClickListener(o, o.onSaveClick);
   o._controlProperty.addClickListener(o, o.onPropertyClick);
   o._controlSelect.addClickListener(o, o.onSelectClick);
   o._controlImport.addClickListener(o, o.onImportClick);
   o._controlDelete.addClickListener(o, o.onDeleteClick);
   o._controlCapture.addClickListener(o, o.onCaptureClick);
}
MO.FDsMaterialMenuBar_onBackClick = function FDsMaterialMenuBar_onBackClick(event){
   var o = this;
}
MO.FDsMaterialMenuBar_onSaveLoad = function FDsMaterialMenuBar_onSaveLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsMaterialMenuBar_onSaveClick = function FDsMaterialMenuBar_onSaveClick(p){
   var o = this;
   var space = o._frameSet._activeSpace;
   var resource = space.resource();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   var connection = MO.Console.find(MO.FE3sMeshConsole).update(xconfig);
   connection.addLoadListener(o, o.onSaveLoad);
}
MO.FDsMaterialMenuBar_onPropertyClick = function FDsMaterialMenuBar_onPropertyClick(event){
   var o = this;
}
MO.FDsMaterialMenuBar_onSelectLoad = function FDsMaterialMenuBar_onSelectLoad(event){
}
MO.FDsMaterialMenuBar_onSelectConfirm = function FDsMaterialMenuBar_onSelectConfirm(event){
}
MO.FDsMaterialMenuBar_onSelectClick = function FDsMaterialMenuBar_onSelectClick(event){
   var o = this;
   var item = o._frameSet._catalogContent.focusItem();
   if(!item){
      return alert('请选中位图');
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsMaterialImportDialog);
   dialog._frameSet = o._frameSet;
   dialog._activeItem = item;
   dialog.switchModeCd('select');
   dialog._controlTypeCode.set(item._code);
   dialog._controlCode.set(item._code);
   dialog._controlLabel.set(item._label);
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsMaterialMenuBar_onImportClick = function FDsMaterialMenuBar_onImportClick(event){
   var o = this;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsMaterialImportDialog);
   dialog._frameSet = o._frameSet;
   dialog.switchModeCd('import');
   dialog._controlCode.set('');
   dialog._controlLabel.set('');
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsMaterialMenuBar_onDeleteLoad = function FDsMaterialMenuBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsMaterialMenuBar_onDeleteExecute = function FDsMaterialMenuBar_onDeleteExecute(event){
   var o = this;
   var item = o._frameSet._catalogContent.focusItem();
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrMaterialConsole).deleteBitmap(item._linkGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsMaterialMenuBar_onDeleteClick = function FDsMaterialMenuBar_onDeleteClick(event){
   var o = this;
   var item = o._frameSet._catalogContent.focusItem();
   if(!item){
      return alert('请选中后再点击删除');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前资源？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsMaterialMenuBar_onCaptureLoad = function FDsMaterialMenuBar_onCaptureLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsMaterialMenuBar_onCaptureClick = function FDsMaterialMenuBar_onCaptureClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = o._frameSet._canvas.capture();
   connection.addLoadListener(o, o.onCaptureLoad);
}
MO.FDsMaterialMenuBar_construct = function FDsMaterialMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsMaterialMenuBar_dispose = function FDsMaterialMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsMaterialPropertyFrame = function FDsMaterialPropertyFrame(o){
   o = MO.Class.inherits(this, o, MO.FDuiForm);
   o._activeResource = null;
   o._controlGuid    = null;
   o._controlCode    = null;
   o._controlLabel   = null;
   o.onBuilded       = MO.FDsMaterialPropertyFrame_onBuilded;
   o.onDataChanged   = MO.FDsMaterialPropertyFrame_onDataChanged;
   o.construct       = MO.FDsMaterialPropertyFrame_construct;
   o.loadObject      = MO.FDsMaterialPropertyFrame_loadObject;
   o.dispose         = MO.FDsMaterialPropertyFrame_dispose;
   return o;
}
MO.FDsMaterialPropertyFrame_construct = function FDsMaterialPropertyFrame_construct(){
   var o = this;
   o.__base.FDuiForm.construct.call(o);
}
MO.FDsMaterialPropertyFrame_onBuilded = function FDsMaterialPropertyFrame_onBuilded(event){
   var o = this;
   o.__base.FDuiForm.onBuilded.call(o, event);
   o._controlCode.addDataChangedListener(o, o.onDataChanged);
   o._controlLabel.addDataChangedListener(o, o.onDataChanged);
}
MO.FDsMaterialPropertyFrame_onDataChanged = function FDsMaterialPropertyFrame_onDataChanged(p){
   var o = this;
   var resource = o._activeResource;
   resource.setCode(o._controlCode.get());
   resource.setLabel(o._controlLabel.get());
}
MO.FDsMaterialPropertyFrame_loadObject = function FDsMaterialPropertyFrame_loadObject(resource){
   var o = this;
   o._activeResource = resource;
   o._controlGuid.set(resource.guid());
   o._controlCode.set(resource.code());
   o._controlLabel.set(resource.label());
}
MO.FDsMaterialPropertyFrame_dispose = function FDsMaterialPropertyFrame_dispose(){
   var o = this;
   o.__base.FDuiForm.dispose.call(o);
}
MO.FDsMaterialPropertyToolBar = function FDsMaterialPropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName      = 'resource.material.PropertyToolBar';
   o._controlRefresh = null;
   o.onBuilded       = MO.FDsMaterialPropertyToolBar_onBuilded;
   o.onRefreshClick  = MO.FDsMaterialPropertyToolBar_onRefreshClick;
   o.construct       = MO.FDsMaterialPropertyToolBar_construct;
   o.dispose         = MO.FDsMaterialPropertyToolBar_dispose;
   return o;
}
MO.FDsMaterialPropertyToolBar_onBuilded = function FDsMaterialPropertyToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlRefresh.addClickListener(o, o.onRefreshClick);
}
MO.FDsMaterialPropertyToolBar_onRefreshClick = function FDsMaterialPropertyToolBar_onRefreshClick(p){
   var o = this;
}
MO.FDsMaterialPropertyToolBar_onSizeClick = function FDsMaterialPropertyToolBar_onSizeClick(event){
   var o = this;
   var button = event.sender;
   var width = '*';
   var height = '*';
   var name = button.name();
   var label = button.label();
   if(name != 'sizeAuto'){
      var size = label.split('x');
      width = parseInt(size[0]);
      height = parseInt(size[1]);
   }
   o._controlSizeWidth.setText(width);
   o._controlSizeHeight.setText(height);
   o._frameSet._canvas.switchSize(width, height);
}
MO.FDsMaterialPropertyToolBar_onRotationChange = function FDsMaterialPropertyToolBar_onRotationChange(event){
   var o = this;
   var canvas = o._frameSet._canvas;
   var visible = o._controlRotationVisible.isCheck();
   var width = RInteger.parse(o._controlRotationWidth.text());
   var height = RInteger.parse(o._controlRotationHeight.text());
   canvas.switchRotation(visible, width, height);
}
MO.FDsMaterialPropertyToolBar_onRotationAutoClick = function FDsMaterialPropertyToolBar_onRotationAutoClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var flipX = false;
   var flipY = false;
   var flipZ = false;
   var rotationX = false;
   var rotationY = false;
   var rotationZ = false;
   switch(name){
      case 'dimensionalAuto':
         break;
      case 'dimensionalFlipX':
         flipX = true;
         break;
      case 'dimensionalFlipY':
         flipY = true;
         break;
      case 'dimensionalFlipZ':
         flipZ = true;
         break;
      case 'dimensionalX':
         rotationX = true;
         break;
      case 'dimensionalY':
         rotationY = true;
         break;
      case 'dimensionalZ':
         rotationZ = true;
         break;
      default:
         throw new MO.TError(o, 'Unknown command.');
   }
   o._frameSet._canvas.viewAutoSize(flipX, flipY, flipZ, rotationX, rotationY, rotationZ);
}
MO.FDsMaterialPropertyToolBar_onRotationClick = function FDsMaterialPropertyToolBar_onRotationClick(event, v){
   var o = this;
   var button = event.sender;
   var canvas = o._frameSet._canvas;
   canvas.switchRotation(button.isCheck());
}
MO.FDsMaterialPropertyToolBar_construct = function FDsMaterialPropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsMaterialPropertyToolBar_dispose = function FDsMaterialPropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsMaterialSelectDialog = function FDsMaterialSelectDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   o._frameName            = 'resource.material.SelectDialog';
   o._nodeGuid             = null;
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   o.onBuilded             = MO.FDsMaterialSelectDialog_onBuilded;
   o.onFileLoaded          = MO.FDsMaterialSelectDialog_onFileLoaded;
   o.onConfirmLoad         = MO.FDsMaterialSelectDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsMaterialSelectDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsMaterialSelectDialog_onCancelClick;
   o.construct             = MO.FDsMaterialSelectDialog_construct;
   o.dispose               = MO.FDsMaterialSelectDialog_dispose;
   return o;
}
MO.FDsMaterialSelectDialog_onBuilded = function FDsMaterialSelectDialog_onBuilded(event){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, event);
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}
MO.FDsMaterialSelectDialog_onFileLoaded = function FDsMaterialSelectDialog_onFileLoaded(event){
   var o = this;
   var reader = o._fileReader;
   var resource = o._resource;
   var guid = resource.guid();
   var url = '/cloud.resource.material.wv?do=importData&guid=' + guid + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
   url = MO.RBrowser.urlEncode(url);
   var connection = MO.Console.find(MO.FHttpConsole).send(url, reader.data());
   connection.addLoadListener(o, o.onConfirmLoad);
   o._fileReader = MO.Lang.Object.dispose(reader);
}
MO.FDsMaterialSelectDialog_onConfirmLoad = function FDsMaterialSelectDialog_onConfirmLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   o.hide();
   o._frameSet.reload();
}
MO.FDsMaterialSelectDialog_onConfirmClick = function FDsMaterialSelectDialog_onConfirmClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var file = o._controlFile._hInput.files[0];
   var reader = o._fileReader = MO.Class.create(MO.FFileReader);
   reader.addLoadListener(o, o.onFileLoaded);
   reader.loadFile(file);
}
MO.FDsMaterialSelectDialog_onCancelClick = function FDsMaterialSelectDialog_onCancelClick(event){
   this.hide();
}
MO.FDsMaterialSelectDialog_construct = function FDsMaterialSelectDialog_construct(){
   var o = this;
   o.__base.FDuiDialog.construct.call(o);
}
MO.FDsMaterialSelectDialog_dispose = function FDsMaterialSelectDialog_dispose(){
   var o = this;
   o.__base.FDuiDialog.dispose.call(o);
}
MO.FDsMaterialWorkspace = function FDsMaterialWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'design2d.bitmap.Workspace';
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleBodyGround      = MO.Class.register(o, new MO.AStyle('_styleBodyGround', 'Body_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._activeSpace          = null;
   o._activeMesh           = null;
   o._framesetMain         = null;
   o._framesetBody         = null;
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameSet             = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsMaterialWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsMaterialWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsMaterialWorkspace_onCatalogSelected;
   o.construct             = MO.FDsMaterialWorkspace_construct;
   o.findPropertyFrame     = MO.FDsMaterialWorkspace_findPropertyFrame;
   o.loadByGuid            = MO.FDsMaterialWorkspace_loadByGuid;
   o.loadByCode            = MO.FDsMaterialWorkspace_loadByCode;
   o.dispose               = MO.FDsMaterialWorkspace_dispose;
   return o;
}
MO.FDsMaterialWorkspace_onBuilded = function FDsMaterialWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Body_Ground');
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   var menuBar = o._menuBar = MO.Class.create(MO.FDsMaterialMenuBar);
   menuBar._workspace = o;
   menuBar.buildDefine(p);
   o._frameToolBar.push(menuBar);
   var frameSet = o._frameSet = MO.Class.create(MO.FDsMaterialFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   menuBar._frameSet = frameSet;
}
MO.FDsMaterialWorkspace_onMeshLoad = function FDsMaterialWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsMaterialWorkspace_onCatalogSelected = function FDsMaterialWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsMaterialWorkspace_construct = function FDsMaterialWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsMaterialWorkspace_findPropertyFrame = function FDsMaterialWorkspace_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._frameProperty._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsMaterialWorkspace_loadByGuid = function FDsMaterialWorkspace_loadByGuid(guid){
   this._frameSet.loadByGuid(guid);
}
MO.FDsMaterialWorkspace_loadByCode = function FDsMaterialWorkspace_loadByCode(code){
   this._frameSet.loadByCode(code);
}
MO.FDsMaterialWorkspace_dispose = function FDsMaterialWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsModelCanvasContent = function FDsModelCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._resourceTypeCd      = MO.EE3sResource.Model;
   o._autoDistance        = null;
   o._autoOutline         = null;
   o._autoMatrix          = null;
   o._optionRotation      = false;
   o._rotation            = null;
   o._capturePosition     = null;
   o._captureMatrix       = null;
   o._captureRotation     = null;
   o._selectObject        = null;
   o._selectBoundBox      = null;
   o._selectRenderables   = null;
   o._templateMatrix      = null;
   o._templateRenderable  = null;
   o._templateFace        = null;
   o._templateTranslation = null;
   o._templateRotation    = null;
   o._templateScale       = null;
   o._templateViewScale   = 0.05;
   o.onBuild              = MO.FDsModelCanvasContent_onBuild;
   o.onMouseCaptureStart  = MO.FDsModelCanvasContent_onMouseCaptureStart;
   o.onMouseCapture       = MO.FDsModelCanvasContent_onMouseCapture;
   o.onMouseCaptureStop   = MO.FDsModelCanvasContent_onMouseCaptureStop;
   o.onDataLoaded         = MO.FDsModelCanvasContent_onDataLoaded;
   o.oeResize             = MO.FDsModelCanvasContent_oeResize;
   o.oeRefresh            = MO.FDsModelCanvasContent_oeRefresh;
   o.construct            = MO.FDsModelCanvasContent_construct;
   o.innerSelectDisplay   = MO.FDsModelCanvasContent_innerSelectDisplay;
   o.innerSelectLayer     = MO.FDsModelCanvasContent_innerSelectLayer;
   o.selectNone           = MO.FDsModelCanvasContent_selectNone;
   o.selectDisplay        = MO.FDsModelCanvasContent_selectDisplay;
   o.selectMaterial       = MO.FDsModelCanvasContent_selectMaterial;
   o.selectRenderable     = MO.FDsModelCanvasContent_selectRenderable;
   o.switchDimensional    = MO.FDsModelCanvasContent_switchDimensional;
   o.switchRotation       = MO.FDsModelCanvasContent_switchRotation;
   o.viewAutoSize         = MO.FDsModelCanvasContent_viewAutoSize;
   o.loadByGuid           = MO.FDsModelCanvasContent_loadByGuid;
   o.loadByCode           = MO.FDsModelCanvasContent_loadByCode;
   o.dispose              = MO.FDsModelCanvasContent_dispose;
   return o;
}
MO.FDsModelCanvasContent_onBuild = function FDsModelCanvasContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsModelCanvasContent_onMouseCaptureStart = function FDsModelCanvasContent_onMouseCaptureStart(event){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var region = space.region();
   var selectTechnique = MO.Console.find(MO.FG3dTechniqueConsole).find(o, MO.FG3dSelectTechnique);
   var renderable = selectTechnique.test(region, event.offsetX, event.offsetY);
   o.selectRenderable(renderable);
   o._capturePosition.set(event.clientX, event.clientY);
   o._captureRotation.assign(space.camera()._rotation);
   if(renderable){
      var display = renderable.display();
      o._captureMatrix.assign(display.matrix());
   }
   o._templateMatrix.identity();
   if(o._templateFace){
      o._templateFaceMatrix.assign(o._templateFace.matrix());
      var selectRenderables = o._selectRenderables;
      for(var i = selectRenderables.count() - 1; i >= 0; i--){
         var selectRenderable = selectRenderables.at(i);
         if(!selectRenderable._dragMatrix){
            selectRenderable._dragMatrix = new MO.SMatrix3d();
         }
         selectRenderable._dragMatrix.assign(selectRenderable.matrix());
      }
   }
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Pointer);
}
MO.FDsModelCanvasContent_onMouseCapture = function FDsModelCanvasContent_onMouseCapture(p){
   var o = this;
   var s = o._activeSpace;
   if(!s){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var mc = o._canvasModeCd;
   var mv = o._canvasMoveCd;
   var cm = o._captureMatrix;
   var sm = null;
   var tf = o._templateFace;
   var tm = o._templateMatrix;
   switch(mc){
      case MO.EDsCanvasMode.Drop:
         var c = o._activeSpace.camera();
         var r = c.rotation();
         var cr = o._captureRotation;
         r.x = cr.x - cy * o._cameraMouseRotation;
         r.y = cr.y - cx * o._cameraMouseRotation;
         break;
      case MO.EDsCanvasMode.Select:
         break;
      case MO.EDsCanvasMode.Translate:
         if(tf){
            if(mv == MO.EDsCanvasDrag.X){
               tm.tx = cx / 10;
            }else if(mv == MO.EDsCanvasDrag.Y){
               tm.ty = -cy / 10;
            }else if(mv == MO.EDsCanvasDrag.Z){
               tm.tz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Rotation:
         if(tf){
            if(mv == MO.EDsCanvasDrag.X){
               tm.rx = cx / 10;
            }else if(mv == MO.EDsCanvasDrag.Y){
               tm.ry = -cy / 10;
            }else if(mv == MO.EDsCanvasDrag.Z){
               tm.rz = cx / 10;
            }
         }
         break;
      case MO.EDsCanvasMode.Scale:
         if(tf){
            if(mv == MO.EDsCanvasDrag.X){
               tm.sx = cx / 10;
            }else if(mv == MO.EDsCanvasDrag.Y){
               tm.sy = -cy / 10;
            }else if(mv == MO.EDsCanvasDrag.Z){
               tm.sz = cx / 10;
            }else if(mv == MO.EDsCanvasDrag.All){
               tm.sx = cx / 10;
               tm.sy = cx / 10;
               tm.sz = cx / 10;
            }
         }
         break;
   }
   if(tf){
      tf.matrix().merge(o._templateFaceMatrix, tm);
      var rs = o._selectRenderables;
      for(var i = rs.count() - 1; i >= 0; i--){
         var r = rs.getAt(i);
         r._matrix.merge(r._dragMatrix, tm);
      }
   }
}
MO.FDsModelCanvasContent_onMouseCaptureStop = function FDsModelCanvasContent_onMouseCaptureStop(p){
   var o = this;
   MO.Window.Html.cursorSet(o._hPanel, MO.EUiCursor.Auto);
}
MO.FDsModelCanvasContent_onDataLoaded = function FDsModelCanvasContent_onDataLoaded(p){
   var o = this;
   var space = o._activeSpace;
   var region = space.region();
   var rc = region.camera();
   rc.setPosition(0, 3, -10);
   rc.lookAt(0, 3, 0);
   rc.update();
   var h = o._hPanel;
   var rp = rc.projection();
   rp.size().set(h.width, h.height);
   rp._angle = 45;
   rp.update();
   var l = region.directionalLight();
   var lc = l.camera();
   lc.setPosition(10, 10, 0);
   lc.lookAt(0, 0, 0);
   lc.update();
   var event = MO.Memory.alloc(MO.SEvent);
   event.sender = o;
   event.space = space;
   o.processLoadListener(event);
   MO.Memory.free(event);
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsModelCanvasContent_oeResize = function FDsModelCanvasContent_oeResize(p){
   var o = this;
   o.__base.FDsCanvas.oeResize.call(o, p);
   var hp = o._hPanel;
   var w = hp.offsetWidth;
   var h = hp.offsetHeight;
   var s = o._activeSpace;
   if(s){
      var cp = s.camera().projection();
      cp.size().set(w, h);
      cp.update();
   }
   return MO.EEventStatus.Stop;
}
MO.FDsModelCanvasContent_oeRefresh = function FDsModelCanvasContent_oeRefresh(p){
   return MO.EEventStatus.Stop;
}
MO.FDsModelCanvasContent_construct = function FDsModelCanvasContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._autoDistance = new MO.SPoint3(6, 6, 6);
   o._autoOutline = new MO.SOutline3d();
   o._autoMatrix = new MO.SMatrix3d();
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._templateMatrix = new MO.SMatrix3d();
   o._templateFaceMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
   o._selectRenderables = new MO.TObjects();
}
MO.FDsModelCanvasContent_innerSelectDisplay = function FDsModelCanvasContent_innerSelectDisplay(p){
   var o = this;
   var s = p.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.getAt(i);
      if(MO.Class.isClass(r, MO.FDsSceneRenderable)){
         o._selectRenderables.push(r);
         r.showBoundBox();
      }
   }
}
MO.FDsModelCanvasContent_innerSelectLayer = function FDsModelCanvasContent_innerSelectLayer(p){
   var o = this;
   var s = p.displays();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var d = s.getAt(i);
      o.innerSelectDisplay(d)
   }
}
MO.FDsModelCanvasContent_selectNone = function FDsModelCanvasContent_selectNone(){
   var o = this;
   o._selectObject = null;
   var s = o._selectRenderables;
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      r.hideBoundBox();
   }
   o._selectRenderables.clear();
}
MO.FDsModelCanvasContent_selectDisplay = function FDsModelCanvasContent_selectDisplay(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   o.innerSelectDisplay(p);
}
MO.FDsModelCanvasContent_selectMaterial = function FDsModelCanvasContent_selectMaterial(p){
   var o = this;
   o.selectNone();
   o._selectObject = p;
   var d = p._display;
   var s = d.renderables();
   var c = s.count();
   for(var i = 0; i < c; i++){
      var r = s.get(i);
      if(r._materialReference == p){
         o._selectRenderables.push(r);
         r._optionSelected = true;
         r.showBoundBox();
      }
   }
}
MO.FDsModelCanvasContent_selectRenderable = function FDsModelCanvasContent_selectRenderable(p){
   var o = this;
   var sr = p;
   if(sr){
      var n = sr._renderable._resource._code;
      switch(n){
         case 'ms_translation_x':
            o._canvasMoveCd = MO.EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_y':
            o._canvasMoveCd = MO.EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_translation_z':
            o._canvasMoveCd = MO.EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_x':
            o._canvasMoveCd = MO.EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_y':
            o._canvasMoveCd = MO.EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_rotation_z':
            o._canvasMoveCd = MO.EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_x':
            o._canvasMoveCd = MO.EDsCanvasDrag.X;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_y':
            o._canvasMoveCd = MO.EDsCanvasDrag.Y;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_z':
            o._canvasMoveCd = MO.EDsCanvasDrag.Z;
            o._templateRenderable = sr;
            return;
         case 'ms_scale_all':
            o._canvasMoveCd = MO.EDsCanvasDrag.All;
            o._templateRenderable = sr;
            return;
         default:
            o._canvasMoveCd = MO.EDsCanvasDrag.Unknown;
            o._templateRenderable = null;
      }
   }
   o.selectNone();
   if(p){
      o._selectRenderables.push(p);
      p._optionSelected = true;
      p.showBoundBox();
      o._frameSet._catalog.showObject(p);
   }
   var t = o._templateTranslation;
   var r = o._templateRotation;
   var s = o._templateScale;
   var mc = o._canvasModeCd;
   switch(mc){
      case MO.EDsCanvasMode.Drop:
         break;
      case MO.EDsCanvasMode.Select:
         break;
      case MO.EDsCanvasMode.Translate:
         t.setVisible(sr != null);
         r.hide();
         s.hide();
         o._templateFace = t;
         break;
      case MO.EDsCanvasMode.Rotation:
         t.hide();
         r.setVisible(sr != null);
         s.hide();
         o._templateFace = r;
         break;
      case MO.EDsCanvasMode.Scale:
         t.hide();
         r.hide();
         s.setVisible(sr != null);
         o._templateFace = s;
         break;
   }
   var st = o._templateFace;
   if(sr && st){
      var d = sr.display();
      var m = st.matrix();
      m.assign(d.matrix());
      m.setScaleAll(o._templateViewScale);
      m.update();
   }
}
MO.FDsModelCanvasContent_switchMode = function FDsModelCanvasContent_switchMode(p){
   var o = this;
   o._canvasModeCd = p;
   o.selectRenderable(o._selectRenderable);
}
MO.FDsModelCanvasContent_switchDimensional = function FDsModelCanvasContent_switchDimensional(visible, width, height){
   var o = this;
   o._dimensional.setVisible(visible);
   var matrix = o._dimensional.matrix();
   if(width > 0){
      matrix.sx = width;
   }
   if(height > 0){
      matrix.sz = height;
   }
   matrix.updateForce();
}
MO.FDsModelCanvasContent_switchRotation = function FDsModelCanvasContent_switchRotation(p){
   this._optionRotation = p;
}
MO.FDsModelCanvasContent_viewAutoSize = function FDsModelCanvasContent_viewAutoSize(flipX, flipY, flipZ, rotationX, rotationY, rotationZ){
   var o = this;
   var outline = o._autoOutline;
   var space = o._activeSpace;
   var display = space.display();
   var displayResource = display.resource();
   var displayMatrix = displayResource.matrix();
   if(rotationX){
      displayMatrix.rx += RConst.PI_2;
   }
   if(rotationY){
      displayMatrix.ry += RConst.PI_2;
   }
   if(rotationZ){
      displayMatrix.rz += RConst.PI_2;
   }
   var matrix = o._autoMatrix.identity();
   matrix.setRotation(displayMatrix.rx, displayMatrix.ry, displayMatrix.rz);
   matrix.update();
   var resourceOutline = displayResource.calculateOutline();
   outline.calculateFrom(resourceOutline, matrix);
   if(flipX){
      displayMatrix.sx = -displayMatrix.sx;
   }
   if(flipY){
      displayMatrix.sy = -displayMatrix.sy;
   }
   if(flipZ){
      displayMatrix.sz = -displayMatrix.sz;
   }
   var autoDistance = o._autoDistance;
   var scaleX = autoDistance.x / outline.distance.x;
   var scaleY = autoDistance.y / outline.distance.y;
   var scaleZ = autoDistance.z / outline.distance.z;
   var scale = RMath.min(scaleX, scaleY, scaleZ);
   scaleX = scale * RMath.sign(displayMatrix.sx)
   scaleY = scale * RMath.sign(displayMatrix.sy)
   scaleZ = scale * RMath.sign(displayMatrix.sz)
   var x = -outline.center.x * scaleX;
   var y = -outline.min.y * scaleY;
   var z = -outline.center.z * scaleZ;
   displayMatrix.setTranslate(x, y, z);
   displayMatrix.setScale(scaleX, scaleY, scaleZ);
   displayMatrix.update();
   display.reloadResource();
}
MO.FDsModelCanvasContent_loadByGuid = function FDsModelCanvasContent_loadByGuid(guid){
   var o = this;
   var space = o._activeSpace;
   var modelConsole = MO.Console.find(MO.FE3dModelConsole);
   if(space){
      modelConsole.free(space);
   }
   space = o._activeSpace = modelConsole.allocByGuid(o, guid);
   if(!space._linked){
      MO.Console.find(MO.FDuiDesktopConsole).showLoading();
      space._layer.pushRenderable(o._dimensional);
      space.addLoadListener(o, o.onDataLoaded);
      space._linked = true;
   }
}
MO.FDsModelCanvasContent_loadByCode = function FDsModelCanvasContent_loadByCode(code){
   var o = this;
}
MO.FDsModelCanvasContent_dispose = function FDsModelCanvasContent_dispose(){
   var o = this;
   o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsModelCanvasToolBar = function FDsModelCanvasToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName                 = 'resource.model.CanvasToolBar';
   o._canvasModeCd              = MO.EDsCanvasMode.Drop;
   o._controlDrop               = null;
   o._controlSize1              = null;
   o._controlSize2              = null;
   o._controlSize3              = null;
   o._controlSize4              = null;
   o._controlSizeWidth          = null;
   o._controlSizeHeight         = null;
   o._controlDimensionalVisible = null;
   o._controlDimensionalWidth   = null;
   o._controlDimensionalHeight  = null;
   o._controlDimensionalAuto    = null;
   o._controlDimensionalFlipX   = null;
   o._controlDimensionalFlipY   = null;
   o._controlDimensionalFlipZ   = null;
   o._controlDimensionalX       = null;
   o._controlDimensionalY       = null;
   o._controlDimensionalZ       = null;
   o._controlRotation           = null;
   o.onBuilded                  = MO.FDsModelCanvasToolBar_onBuilded;
   o.onModeClick                = MO.FDsModelCanvasToolBar_onModeClick;
   o.onSizeClick                = MO.FDsModelCanvasToolBar_onSizeClick;
   o.onDimensionalChange        = MO.FDsModelCanvasToolBar_onDimensionalChange;
   o.onDimensionalAutoClick     = MO.FDsModelCanvasToolBar_onDimensionalAutoClick;
   o.onRotationClick            = MO.FDsModelCanvasToolBar_onRotationClick;
   o.construct                  = MO.FDsModelCanvasToolBar_construct;
   o.dispose                    = MO.FDsModelCanvasToolBar_dispose;
   return o;
}
MO.FDsModelCanvasToolBar_onBuilded = function FDsModelCanvasToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   var control = o._controlDrop;
   control._canvasModeCd = MO.EDsCanvasMode.Drop;
   control.addClickListener(o, o.onModeClick);
   control.check(true);
   o._controlSize1.addClickListener(o, o.onSizeClick);
   o._controlSize2.addClickListener(o, o.onSizeClick);
   o._controlSize3.addClickListener(o, o.onSizeClick);
   o._controlSize4.addClickListener(o, o.onSizeClick);
   o._controlSizeWidth.setText('*');
   o._controlSizeHeight.setText('*');
   o._controlDimensionalVisible.addClickListener(o, o.onDimensionalChange);
   o._controlDimensionalVisible.check(true);
   o._controlDimensionalWidth.addDataChangedListener(o, o.onDimensionalChange);
   o._controlDimensionalWidth.setText(1);
   o._controlDimensionalHeight.addDataChangedListener(o, o.onDimensionalChange);
   o._controlDimensionalHeight.setText(1);
   o._controlDimensionalAuto.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalFlipX.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalFlipY.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalFlipZ.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalX.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalY.addClickListener(o, o.onDimensionalAutoClick);
   o._controlDimensionalZ.addClickListener(o, o.onDimensionalAutoClick);
   o._controlRotation.addClickListener(o, o.onRotationClick);
}
MO.FDsModelCanvasToolBar_onModeClick = function FDsModelCanvasToolBar_onModeClick(p){
   var o = this;
}
MO.FDsModelCanvasToolBar_onSizeClick = function FDsModelCanvasToolBar_onSizeClick(event){
   var o = this;
   var button = event.sender;
   var width = '*';
   var height = '*';
   var name = button.name();
   var label = button.label();
   if(name != 'sizeAuto'){
      var size = label.split('x');
      width = parseInt(size[0]);
      height = parseInt(size[1]);
   }
   o._controlSizeWidth.setText(width);
   o._controlSizeHeight.setText(height);
   o._frameSet._canvasContent.switchSize(width, height);
}
MO.FDsModelCanvasToolBar_onDimensionalChange = function FDsModelCanvasToolBar_onDimensionalChange(event){
   var o = this;
   var canvas = o._frameSet._canvasContent;
   var visible = o._controlDimensionalVisible.isCheck();
   var width = MO.Lang.Integer.parse(o._controlDimensionalWidth.text());
   var height = MO.Lang.Integer.parse(o._controlDimensionalHeight.text());
   canvas.switchDimensional(visible, width, height);
}
MO.FDsModelCanvasToolBar_onDimensionalAutoClick = function FDsModelCanvasToolBar_onDimensionalAutoClick(event){
   var o = this;
   var sender = event.sender;
   var name = sender.name();
   var flipX = false;
   var flipY = false;
   var flipZ = false;
   var rotationX = false;
   var rotationY = false;
   var rotationZ = false;
   switch(name){
      case 'dimensionalAuto':
         break;
      case 'dimensionalFlipX':
         flipX = true;
         break;
      case 'dimensionalFlipY':
         flipY = true;
         break;
      case 'dimensionalFlipZ':
         flipZ = true;
         break;
      case 'dimensionalX':
         rotationX = true;
         break;
      case 'dimensionalY':
         rotationY = true;
         break;
      case 'dimensionalZ':
         rotationZ = true;
         break;
      default:
         throw new MO.TError(o, 'Unknown command.');
   }
   o._frameSet._canvasContent.viewAutoSize(flipX, flipY, flipZ, rotationX, rotationY, rotationZ);
}
MO.FDsModelCanvasToolBar_onRotationClick = function FDsModelCanvasToolBar_onRotationClick(event, v){
   var o = this;
   var button = event.sender;
   var canvas = o._frameSet._canvasContent;
   canvas.switchRotation(button.isCheck());
}
MO.FDsModelCanvasToolBar_construct = function FDsModelCanvasToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsModelCanvasToolBar_dispose = function FDsModelCanvasToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsModelCatalogContent = function FDsModelCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCatalog);
   o._iconView             = 'resource.tools.view';
   o._iconViewNot          = 'resource.tools.viewno';
   o.onBuild               = MO.FDsModelCatalogContent_onBuild;
   o.onLoadDisplay         = MO.FDsModelCatalogContent_onLoadDisplay;
   o.onNodeViewClick       = MO.FDsModelCatalogContent_onNodeViewClick;
   o.onNodeViewDoubleClick = MO.FDsModelCatalogContent_onNodeViewDoubleClick;
   o.lsnsSelect            = null;
   o.construct             = MO.FDsModelCatalogContent_construct;
   o.buildRenderable       = MO.FDsModelCatalogContent_buildRenderable;
   o.buildDisplay          = MO.FDsModelCatalogContent_buildDisplay;
   o.buildSpace            = MO.FDsModelCatalogContent_buildSpace;
   o.selectObject          = MO.FDsModelCatalogContent_selectObject;
   o.showObject            = MO.FDsModelCatalogContent_showObject;
   o.dispose               = MO.FDsModelCatalogContent_dispose;
   return o;
}
MO.FDsModelCatalogContent_onBuild = function FDsModelCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDsCatalog.onBuild.call(o, p);
   o.loadDefine('resource.model');
}
MO.FDsModelCatalogContent_onLoadDisplay = function FDsModelCatalogContent_onLoadDisplay(p){
   var o = this;
   var n = p._linkNode;
   o.buildRenderable(n, p);
}
MO.FDsModelCatalogContent_onNodeViewClick = function FDsModelCatalogContent_onNodeViewClick(p){
   var o = this;
   var c = p.treeNodeCell;
   var s = p.treeNode.dataPropertyGet('linker');
   if(MO.Class.isClass(s, FDisplay)){
      if(p.ctrlKey){
         var ds = o._displays;
         for(var i = ds.count() - 1; i >= 0; i--){
            var nd = ds.get(i);
            var d = nd.dataPropertyGet('linker');
            d._visible = false;
            nd.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
   if(MO.Class.isClass(s, FDrawable)){
      if(p.ctrlKey){
         var rs = o._renderables;
         for(var i = rs.count() - 1; i >= 0; i--){
            var nr = rs.get(i);
            var r = nr.dataPropertyGet('linker');
            r._visible = false;
            nr.cell('view').setIcon(o._iconViewNot);
         }
         s._visible = true;
         c.setIcon(o._iconView);
      }else{
         s._visible = !s._visible;
         c.setIcon(s._visible ? o._iconView : o._iconViewNot);
      }
   }
}
MO.FDsModelCatalogContent_onNodeViewDoubleClick = function FDsModelCatalogContent_onNodeViewDoubleClick(p){
   var o = this;
   var n = p.treeNode;
   var c = p.treeNodeCell;
   var s = n.dataPropertyGet('linker');
   if(MO.Class.isClass(s, MO.FDisplay)){
      var s = o._displays;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var d = n.dataPropertyGet('linker');
         d._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
   if(MO.Class.isClass(s, MO.FDrawable)){
      var s = o._renderables;
      for(var i = s.count() - 1; i >= 0; i--){
         var n = s.get(i);
         var r = n.dataPropertyGet('linker');
         r._visible = true;
         n.cell('view').setIcon(o._iconView);
      }
   }
}
MO.FDsModelCatalogContent_construct = function FDsModelCatalogContent_construct(){
   var o = this;
   o.__base.FDsCatalog.construct.call(o);
   o._renderables = new MO.TObjects();
}
MO.FDsModelCatalogContent_buildRenderable = function FDsModelCatalogContent_buildRenderable(parentNode, geometry){
   var o = this;
   var renderable = geometry._renderable;
   var resource = renderable.resource();
   var code = resource.code();
   var label = resource.label();
   var node = o.createNode();
   node.setTypeCode('renderable');
   node.setLabel(code);
   node.setNote(label);
   node.dataPropertySet('linker', geometry);
   parentNode.appendNode(node);
}
MO.FDsModelCatalogContent_buildDisplay = function FDsModelCatalogContent_buildDisplay(parent, display){
   var o = this;
   var resource = display.resource();
   var shapes = display.shapes();
   var count = shapes.count();
   var displayNode = o.createNode();
   displayNode.setTypeCode('display');
   displayNode.setLabel('Model (' + count + ')');
   displayNode.dataPropertySet('linker', display);
   parent.appendNode(displayNode);
   var material = display.material();
   var materialResource = resource.material();
   var materialNode = o.createNode();
   materialNode.setTypeCode('material');
   materialNode.setLabel('Material');
   materialNode.dataPropertySet('linker', material);
   materialNode.dataPropertySet('resource', materialResource);
   displayNode.appendNode(materialNode);
   for(var i = 0; i < count; i++){
      var shape = shapes.get(i);
      o.buildRenderable(displayNode, shape);
   }
}
MO.FDsModelCatalogContent_buildSpace = function FDsModelCatalogContent_buildSpace(space){
   var o = this;
   o.clearAllNodes();
   var resource = space.resource();
   o.clear();
   var node = o.createNode();
   node.setTypeCode('space');
   node.setLabel(resource.code());
   node.setNote(resource.label());
   node.dataPropertySet('linker', space);
   o.appendNode(node);
   o.buildTechnique(node, space.technique())
   o.buildRegion(node, space.region());
   o.buildDisplay(node, space._display);
   node.click();
}
MO.FDsModelCatalogContent_selectObject = function FDsModelCatalogContent_selectObject(p){
   var o = this;
   if(p != null){
      o.processSelectedListener(p, true);
   }
}
MO.FDsModelCatalogContent_showObject = function FDsModelCatalogContent_showObject(p){
   var o = this;
   if(MO.Class.isClass(p, MO.FDsSceneRenderable)){
      var s = o._renderables;
      var c = s.count();
      for(var i = 0; i < c; i++){
         var nr = s.getAt(i);
         var r = nr.dataPropertyGet('linker');
         if(r == p){
            o.processSelectedListener(p, false);
         }
      }
   }
}
MO.FDsModelCatalogContent_dispose = function FDsModelCatalogContent_dispose(){
   var o = this;
   o._displays = MO.Lang.Object.dispose(o._displays);
   o._renderables = MO.Lang.Object.dispose(o._renderables);
   o._materials = MO.Lang.Object.dispose(o._materials);
   o.__base.FDsCatalog.dispose.call(o);
}
MO.FDsModelCatalogToolBar = function FDsModelCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName             = 'resource.model.CatalogToolBar';
   o._activeNodeGuid        = null;
   o._controlCreateCamera   = null;
   o._controlCreateLayer    = null;
   o._controlCreateSprite   = null;
   o._controlDelete         = null;
   o._controlFolderOpen     = null;
   o._controlFolderClose    = null;
   o.onBuilded              = MO.FDsModelCatalogToolBar_onBuilded;
   o.onCreateCameraClick    = MO.FDsModelCatalogToolBar_onCreateCameraClick;
   o.onCreateLayerClick     = MO.FDsModelCatalogToolBar_onCreateLayerClick;
   o.onCreateSpriteClick    = MO.FDsModelCatalogToolBar_onCreateSpriteClick;
   o.onDeleteLoad           = MO.FDsModelCatalogToolBar_onDeleteLoad;
   o.onDeleteExecute        = MO.FDsModelCatalogToolBar_onDeleteExecute;
   o.onCopyLoad             = MO.FDsModelCatalogToolBar_onCopyLoad;
   o.onCopyExecute          = MO.FDsModelCatalogToolBar_onCopyExecute;
   o.onCopyClick            = MO.FDsModelCatalogToolBar_onCopyClick;
   o.onDeleteClick          = MO.FDsModelCatalogToolBar_onDeleteClick;
   o.onFolderOpenClick      = MO.FDsModelCatalogToolBar_onFolderOpenClick;
   o.onFolderCloseClick     = MO.FDsModelCatalogToolBar_onFolderCloseClick;
   o.construct              = MO.FDsModelCatalogToolBar_construct;
   o.dispose                = MO.FDsModelCatalogToolBar_dispose;
   return o;
}
MO.FDsModelCatalogToolBar_onBuilded = function FDsModelCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlFolderOpen.addClickListener(o, o.onFolderOpenClick);
   o._controlFolderClose.addClickListener(o, o.onFolderCloseClick);
}
MO.FDsModelCatalogToolBar_onCreateCameraClick = function FDsModelCatalogToolBar_onCreateCameraClick(event){
   var o = this;
}
MO.FDsModelCatalogToolBar_onCreateLayerClick = function FDsModelCatalogToolBar_onCreateLayerClick(event){
   var o = this;
}
MO.FDsModelCatalogToolBar_onCreateSpriteClick = function FDsModelCatalogToolBar_onCreateSpriteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return alert('请选中目录节点。');
   }
   var linker = node.dataPropertyGet('linker');
   var layer = null;
   var sprite = null;
   if(MO.Class.isClass(linker, MO.FDisplayLayer)){
      layer = linker;
   }else if(MO.Class.isClass(linker, MO.FE3dSprite)){
      layer = linker.findParent(MO.FDisplayLayer);
      sprite = linker;
   }else{
      return alert('请选中显示层或者精灵节点。');
   }
   var frameSet = o._frameSet;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonSpriteDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = frameSet._activeSpace.resource().guid();
   dialog._layerGuid = layer.resource().guid();
   if(sprite){
      dialog._displayGuid = sprite.resource().guid();
   }else{
      dialog._displayGuid = null;
   }
   if(layer){
      dialog.setLayerLabel(layer.makeLabel());
   }
   if(sprite){
      dialog.setDisplayLabel(sprite.makeLabel());
   }
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsModelCatalogToolBar_onCopyLoad = function FDsModelCatalogToolBar_onCopyLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsModelCatalogToolBar_onCopyExecute = function FDsModelCatalogToolBar_onCopyExecute(event){
   var o = this;
   if(event.resultCd != MO.EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).copyNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsModelCatalogToolBar_onCopyClick = function FDsModelCatalogToolBar_onCopyClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var sprite = null;
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      sprite = linker;
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能复制当前选中的节点.');
   }
   var resource = sprite.resource();
   var parentResource = resource.parent();
   var displayResource = resource.clone();
   parentResource.pushDisplay(displayResource);
   var display = MO.Console.find(MO.FE3dInstanceConsole).create(EE3dInstance.SceneDisplay);
   display.linkGraphicContext(sprite);
   display.loadResource(displayResource);
   MO.Console.find(FE3dSceneConsole).loadDisplay(display);
   var parent = sprite.parent();
   parent.pushDisplay(display);
}
MO.FDsModelCatalogToolBar_onDeleteLoad = function FDsModelCatalogToolBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var catalog = o._frameSet._catalogContent;
   var guid = o._activeNodeGuid;
   if(guid){
      var node = catalog.findByGuid(guid);
      node.removeSelf();
   }
   o._activeNodeGuid = null;
}
MO.FDsModelCatalogToolBar_onDeleteExecute = function FDsModelCatalogToolBar_onDeleteExecute(event){
   var o = this;
   if(event.resultCd != MO.EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).deleteNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsModelCatalogToolBar_onDeleteClick = function FDsModelCatalogToolBar_onDeleteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能删除当前选中的节点.');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前节点？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsModelCatalogToolBar_onFolderOpenClick = function FDsModelCatalogToolBar_onFolderOpenClick(event){
}
MO.FDsModelCatalogToolBar_onFolderCloseClick = function FDsModelCatalogToolBar_onFolderCloseClick(event){
}
MO.FDsModelCatalogToolBar_construct = function FDsModelCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsModelCatalogToolBar_dispose = function FDsModelCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsModelFrameSet = function FDsModelFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._frameCatalog         = null;
   o._frameCatalogToolBar  = null;
   o._frameCatalogContent  = null;
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   o.onBuilded             = MO.FDsModelFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsModelFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsModelFrameSet_onCatalogSelected;
   o.construct             = MO.FDsModelFrameSet_construct;
   o.loadByGuid            = MO.FDsModelFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsModelFrameSet_loadByCode;
   o.dispose               = MO.FDsModelFrameSet_dispose;
   return o;
}
MO.FDsModelFrameSet_onBuilded = function FDsModelFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   var spliter = o._spliterCatalog;
   spliter.setAlignCd(MO.EUiAlign.Left);
   spliter.setSizeHtml(o._frameCatalog._hPanel);
   var spliter = o._spliterProperty;
   spliter.setAlignCd(MO.EUiAlign.Right);
   spliter.setSizeHtml(o._frameProperty._hPanel);
}
MO.FDsModelFrameSet_onDataLoaded = function FDsModelFrameSet_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace = event.space;
   o._catalogContent.buildSpace(space);
}
MO.FDsModelFrameSet_onCatalogSelected = function FDsModelFrameSet_onCatalogSelected(select, flag){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   o.hidePropertyFrames();
   if(MO.Class.isClass(select, MO.FE3dSpace)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonSpacePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dTechnique)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonTechniquePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRegion)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonRegionPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dCamera)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonCameraPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dLight)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonLightPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dModelDisplay)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dMaterial)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dModelRenderable)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonRenderablePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else{
      throw new TError('Unknown select object type. (select={1})', select);
   }
}
MO.FDsModelFrameSet_construct = function FDsModelFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
}
MO.FDsModelFrameSet_loadByGuid = function FDsModelFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._canvasContent.loadByGuid(guid);
}
MO.FDsModelFrameSet_loadByCode = function FDsModelFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   o._canvasContent.loadByCode(code);
}
MO.FDsModelFrameSet_dispose = function FDsModelFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsModelMenuBar = function FDsModelMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._controlSaveButton    = null;
   o._controlCaptureButton = null;
   o.onSaveLoad            = MO.FDsModelMenuBar_onSaveLoad;
   o.onSaveClick           = MO.FDsModelMenuBar_onSaveClick;
   o.onCaptureLoad         = MO.FDsModelMenuBar_onCaptureLoad;
   o.onCaptureClick        = MO.FDsModelMenuBar_onCaptureClick;
   o.construct             = MO.FDsModelMenuBar_construct;
   o.dispose               = MO.FDsModelMenuBar_dispose;
   return o;
}
MO.FDsModelMenuBar_onSaveLoad = function FDsModelMenuBar_onSaveLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsModelMenuBar_onSaveClick = function FDsModelMenuBar_onSaveClick(p){
   var o = this;
   var space = o._frameSet._activeSpace;
   var resource = space.resource();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   var connection = MO.Console.find(MO.FDrModelConsole).update(xconfig);
   connection.addLoadListener(o, o.onSaveLoad);
}
MO.FDsModelMenuBar_onCaptureLoad = function FDsModelMenuBar_onCaptureLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsModelMenuBar_onCaptureClick = function FDsModelMenuBar_onCaptureClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = o._frameSet._canvasContent.capture();
   connection.addLoadListener(o, o.onCaptureLoad);
}
MO.FDsModelMenuBar_construct = function FDsModelMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsModelMenuBar_dispose = function FDsModelMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsModelWorkspace = function FDsModelWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'design3d.mesh.Workspace';
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleBodyGround      = MO.Class.register(o, new MO.AStyle('_styleBodyGround', 'Body_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._activeSpace          = null;
   o._activeMesh           = null;
   o._framesetMain         = null;
   o._framesetBody         = null;
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameSet             = null;
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsModelWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsModelWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsModelWorkspace_onCatalogSelected;
   o.construct             = MO.FDsModelWorkspace_construct;
   o.findPropertyFrame     = MO.FDsModelWorkspace_findPropertyFrame;
   o.loadByGuid            = MO.FDsModelWorkspace_loadByGuid;
   o.loadByCode            = MO.FDsModelWorkspace_loadByCode;
   o.dispose               = MO.FDsModelWorkspace_dispose;
   return o;
}
MO.FDsModelWorkspace_onBuilded = function FDsModelWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Body_Ground');
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   var menuBar = o._menuBar = MO.Class.create(MO.FDsModelMenuBar);
   menuBar._workspace = o;
   menuBar.buildDefine(p);
   o._frameToolBar.push(menuBar);
   var frameSet = o._frameSet = MO.Class.create(MO.FDsModelFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   menuBar._frameSet = frameSet;
}
MO.FDsModelWorkspace_onMeshLoad = function FDsModelWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   o._catalog.buildSpace(o._activeSpace);
}
MO.FDsModelWorkspace_onCatalogSelected = function FDsModelWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dStage)){
      var f = o.findPropertyFrame(EDsFrame.MO.MeshSpacePropertyFrame);
      f.show();
      f.loadObject(space, space);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshTechniquePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRegionPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshCameraPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshLightPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshDisplay)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshDisplayPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FG3dMaterial)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshMaterialPropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else if(MO.Class.isClass(p, MO.FE3dMeshRenderable)){
      var f = o.findPropertyFrame(MO.EDsFrame.MeshRenderablePropertyFrame);
      f.show();
      f.loadObject(space, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsModelWorkspace_construct = function FDsModelWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsModelWorkspace_findPropertyFrame = function FDsModelWorkspace_findPropertyFrame(p){
   var o = this;
   var f = o._propertyFrames.get(p);
   if(!f){
      var fc = MO.Console.find(MO.FFrameConsole);
      f = fc.get(o, p, o._frameProperty._hContainer);
      f._workspace = o;
      o._propertyFrames.set(p, f);
   }
   return f;
}
MO.FDsModelWorkspace_loadByGuid = function FDsModelWorkspace_loadByGuid(guid){
   this._frameSet.loadByGuid(guid);
}
MO.FDsModelWorkspace_loadByCode = function FDsModelWorkspace_loadByCode(code){
   this._frameSet.loadByCode(code);
}
MO.FDsModelWorkspace_dispose = function FDsModelWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
MO.FDsTemplateCanvasContent = function FDsTemplateCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCanvas);
   o._resourceTypeCd     = MO.EE3sResource.Template;
   o._context            = null;
   o._stage              = null;
   o._layer              = null;
   o._rotation           = null;
   o._rotationAble       = false;
   o._capturePosition    = null;
   o._captureMatrix      = null;
   o._captureRotation    = null;
   o._dimensional        = null;
   o._selectBoundBox     = null;
   o.onBuild             = MO.FDsTemplateCanvasContent_onBuild;
   o.onDataLoaded        = MO.FDsTemplateCanvasContent_onDataLoaded;
   o.oeRefresh           = MO.FDsTemplateCanvasContent_oeRefresh;
   o.construct           = MO.FDsTemplateCanvasContent_construct;
   o.loadByGuid          = MO.FDsTemplateCanvasContent_loadByGuid;
   o.loadByCode          = MO.FDsTemplateCanvasContent_loadByCode;
   o.dispose             = MO.FDsTemplateCanvasContent_dispose;
   return o;
}
MO.FDsTemplateCanvasContent_onBuild = function FDsTemplateCanvasContent_onBuild(p){
   var o = this;
   o.__base.FDsCanvas.onBuild.call(o, p);
}
MO.FDsTemplateCanvasContent_onMouseCaptureStart = function FDsTemplateCanvasContent_onMouseCaptureStart(p){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var camera = space.camera();
   o._captureRotation.assign(camera._rotation);
}
MO.FDsTemplateCanvasContent_onMouseCapture = function FDsTemplateCanvasContent_onMouseCapture(p){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var cx = p.clientX - o._capturePosition.x;
   var cy = p.clientY - o._capturePosition.y;
   var d = t.renderables().get(0);
   var m = d.matrix();
   var cm = o._captureMatrix;
   switch(o._toolbar._canvasModeCd){
      case EDsCanvasMode.Drop:
         var c = o._stage.camera();
         var r = c.rotation();
         var cr = o._captureRotation;
         r.x = cr.x + cy * 0.003;
         r.y = cr.y + cx * 0.003;
         break;
      case EDsCanvasMode.Select:
         break;
      case EDsCanvasMode.Translate:
         m.tx = cm.tx + cx / 360 * 3.14;
         m.ty = cm.ty + cy / 360 * 3.14;
         break;
      case EDsCanvasMode.Rotation:
         m.ry = cm.ry + cx * RConst.DEGREE_RATE;
         break;
      case EDsCanvasMode.Scale:
         m.sx = cm.sx + cx / 100;
         m.sy = cm.sy + cx / 100;
         m.sz = cm.sz + cx / 100;
         break;
   }
   m.updateForce();
}
MO.FDsTemplateCanvasContent_onMouseCaptureStop = function FDsTemplateCanvasContent_onMouseCaptureStop(event){
}
MO.FDsTemplateCanvasContent_onDataLoaded = function FDsTemplateCanvasContent_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace;
   var region = space.region();
   var camera = region.camera();
   camera.setPosition(0, 3, -10);
   camera.lookAt(0, 3, 0);
   camera.update();
   var event = new MO.SEvent(o);
   o.processLoadListener(event);
   event.dispose();
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsTemplateCanvasContent_oeRefresh = function FDsTemplateCanvasContent_oeRefresh(p){
   var o = this;
   o.__base.FDsCanvas.oeRefresh.call(o, p);
   return;
   var c = o._graphicContext;
   var w = o._hParent.offsetWidth;
   var h = o._hParent.offsetHeight;
   var hc = o._hPanel;
   hc.width = w;
   hc.height = h;
   var rp = o._stage.camera().projection();
   rp.size().set(w, h);
   rp.update();
   c.setViewport(0, 0, w, h);
   return EEventStatus.Stop;
}
MO.FDsTemplateCanvasContent_construct = function FDsTemplateCanvasContent_construct(){
   var o = this;
   o.__base.FDsCanvas.construct.call(o);
   o._capturePosition = new MO.SPoint2();
   o._captureMatrix = new MO.SMatrix3d();
   o._rotation = new MO.SVector3();
   o._captureRotation = new MO.SVector3();
}
MO.FDsTemplateCanvasContent_loadByGuid = function FDsTemplateCanvasContent_loadByGuid(guid){
   var o = this;
   var space = o._activeSpace;
   var templateConsole = MO.Console.find(MO.FE3dTemplateConsole);
   if(space){
      templateConsole.free(space);
   }
   space = o._activeSpace = templateConsole.allocByGuid(o, guid);
   if(!space._linked){
      MO.Console.find(MO.FDuiDesktopConsole).showLoading();
      space._layer.pushRenderable(o._dimensional);
      space._linked = true;
      space.addLoadListener(o, o.onDataLoaded);
   }
}
MO.FDsTemplateCanvasContent_loadByCode = function FDsTemplateCanvasContent_loadByCode(code){
   var o = this;
   var space = o._activeSpace;
   var templateConsole = MO.Console.find(MO.FE3dTemplateConsole);
   if(space){
      templateConsole.free(space);
   }
   space = o._activeSpace = templateConsole.allocByGuid(o, guid);
   if(!space._linked){
      MO.Console.find(MO.FDuiDesktopConsole).showLoading();
      space._layer.pushRenderable(o._dimensional);
      space.addLoadListener(o, o.onDataLoaded);
      space._linked = true;
   }
}
MO.FDsTemplateCanvasContent_dispose = function FDsTemplateCanvasContent_dispose(){
   var o = this;
  o._rotation = MO.Lang.Object.dispose(o._rotation);
   o.__base.FDsCanvas.dispose.call(o);
}
MO.FDsTemplateCanvasToolBar = function FDsTemplateCanvasToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._refreshButton  = null;
   o._saveButton     = null;
   o._canvasModeCd   = MO.EDsCanvasMode.Drop;
   o.onBuilded       = MO.FDsTemplateCanvasToolBar_onBuilded;
   o.onModeClick     = MO.FDsTemplateCanvasToolBar_onModeClick;
   o.onLookClick     = MO.FDsTemplateCanvasToolBar_onLookClick;
   o.onPlayClick     = MO.FDsTemplateCanvasToolBar_onPlayClick;
   o.onViewClick     = MO.FDsTemplateCanvasToolBar_onViewClick;
   o.construct       = MO.FDsTemplateCanvasToolBar_construct;
   o.dispose         = MO.FDsTemplateCanvasToolBar_dispose;
   return o;
}
MO.FDsTemplateCanvasToolBar_onBuilded = function FDsTemplateCanvasToolBar_onBuilded(event){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, event);
   o._controlModeDrop.addClickListener(o, o.onModeClick);
   o._controlModeSelect.addClickListener(o, o.onModeClick);
   o._controlTranslate.addClickListener(o, o.onModeClick);
   o._controlRotation.addClickListener(o, o.onModeClick);
   o._controlScale.addClickListener(o, o.onModeClick);
   o._controlLookFront.addClickListener(o, o.onLookClick);
   o._controlLookUp.addClickListener(o, o.onLookClick);
   o._controlLookLeft.addClickListener(o, o.onLookClick);
   o._controlPlay.addClickListener(o, o.onPlayClick);
   o._controlView.addClickListener(o, o.onViewClick);
}
MO.FDsTemplateCanvasToolBar_onModeClick = function FDsTemplateCanvasToolBar_onModeClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
}
MO.FDsTemplateCanvasToolBar_onLookClick = function FDsTemplateCanvasToolBar_onLookClick(p){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
}
MO.FDsTemplateCanvasToolBar_onPlayClick = function FDsTemplateCanvasToolBar_onPlayClick(p, v){
   var o = this;
   var c = o._frameSet._canvasContent;
   c._rotationAble = v;
}
MO.FDsTemplateCanvasToolBar_onViewClick = function FDsTemplateCanvasToolBar_onViewClick(event){
   var o = this;
   var checked = event.checked;
   var canvas = o._frameSet._canvasContent;
   canvas.switchRotation(checked);
}
MO.FDsTemplateCanvasToolBar_construct = function FDsTemplateCanvasToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsTemplateCanvasToolBar_dispose = function FDsTemplateCanvasToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsTemplateCatalogContent = function FDsTemplateCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCatalog);
   o.onBuild        = MO.FDsTemplateCatalogContent_onBuild;
   o.onNodeClick    = MO.FDsTemplateCatalogContent_onNodeClick;
   o.construct      = MO.FDsTemplateCatalogContent_construct;
   o.buildTechnique = MO.FDsTemplateCatalogContent_buildTechnique;
   o.buildRegion    = MO.FDsTemplateCatalogContent_buildRegion;
   o.buildMaterial  = MO.FDsTemplateCatalogContent_buildMaterial;
   o.buildDisplay   = MO.FDsTemplateCatalogContent_buildDisplay;
   o.buildSpace     = MO.FDsTemplateCatalogContent_buildSpace;
   o.dispose        = MO.FDsTemplateCatalogContent_dispose;
   return o;
}
MO.FDsTemplateCatalogContent_onBuild = function FDsTemplateCatalogContent_onBuild(p){
   var o = this;
   o.__base.FDsCatalog.onBuild.call(o, p);
   o.loadDefine('resource.template');
}
MO.FDsTemplateCatalogContent_onNodeClick = function FDsTemplateCatalogContent_onNodeClick(event){
   var o = this;
   var node = event.node;
   var linker = node.dataPropertyGet('linker');
   o.selectObject(linker);
}
MO.FDsTemplateCatalogContent_construct = function FDsTemplateCatalogContent_construct(){
   var o = this;
   o.__base.FDsCatalog.construct.call(o);
}
MO.FDsTemplateCatalogContent_buildTechnique = function FDsTemplateCatalogContent_buildTechnique(n, p){
   var o = this;
   var nt = o.createNode();
   nt.setLabel('Technique');
   nt.setTypeCode('technique');
   nt.dataPropertySet('linker', p);
   n.appendNode(nt);
}
MO.FDsTemplateCatalogContent_buildRegion = function FDsTemplateCatalogContent_buildRegion(n, p){
   var o = this;
   var nr = o.createNode();
   nr.setLabel('Region');
   nr.setTypeCode('region');
   nr.dataPropertySet('linker', p);
   n.appendNode(nr);
   var nc = o.createNode();
   nc.setLabel('Camera');
   nc.setTypeCode('camera');
   nc.dataPropertySet('linker', p.camera());
   nr.appendNode(nc);
   var nl = o.createNode();
   nl.setLabel('Light');
   nl.setTypeCode('light');
   nl.dataPropertySet('linker', p.directionalLight());
   nr.appendNode(nl);
}
MO.FDsTemplateCatalogContent_buildMaterial = function FDsTemplateCatalogContent_buildMaterial(parentNode, material){
   var o = this;
   var resource = material.resource();
   var node = o.createNode();
   node.setTypeCode('Material');
   node.setLabel(resource.code());
   node.setNote(resource.label());
   node.dataPropertySet('linker', material);
   parentNode.appendNode(node);
}
MO.FDsTemplateCatalogContent_buildDisplay = function FDsTemplateCatalogContent_buildDisplay(parentNode, display){
   var o = this;
   var resource = display.resource();
   var node = o.createNode();
   node.setTypeCode('Display');
   node.setLabel(MO.Lang.String.nvl(resource.code(), 'Display'));
   node.setNote(resource.label());
   node.dataPropertySet('linker', display);
   parentNode.appendNode(node);
   var renderables = display.renderables();
   var renderableCount = renderables.count();
   if(renderableCount > 0){
      for(var i = 0; i < renderableCount; i++){
         var renderable = renderables.at(i);
         var renderableResource = renderable.resource();
         var renderableNode = o.createNode();
         renderableNode.setTypeCode('Renderable');
         renderableNode.setLabel(renderableResource.code());
         renderableNode.setNote(renderableResource.label());
         renderableNode.dataPropertySet('linker', renderable);
         node.appendNode(renderableNode);
      }
   }
}
MO.FDsTemplateCatalogContent_buildSpace = function FDsTemplateCatalogContent_buildSpace(space){
   var o = this;
   o.clearAllNodes();
   var resource = space.resource();
   var spaceNode = o.createNode();
   spaceNode.setTypeCode('Space');
   spaceNode.setLabel(resource.code());
   spaceNode.setNote(resource.label());
   spaceNode.dataPropertySet('linker', space);
   o.appendNode(spaceNode);
   o.buildTechnique(spaceNode, space.technique())
   o.buildRegion(spaceNode, space.region());
   var materialsNode = o.createNode();
   materialsNode.setTypeCode('Region');
   materialsNode.setLabel('Materials');
   spaceNode.appendNode(materialsNode);
   var materials = space.materials();
   var materialCount = materials.count();
   for(var i = 0; i < materialCount; i++){
      var material = materials.at(i);
      o.buildMaterial(materialsNode, material);
   }
   var displaysNode = o.createNode();
   displaysNode.setTypeCode('Region');
   displaysNode.setLabel('Displays');
   spaceNode.appendNode(displaysNode);
   var displays = space._sprites;
   var displayCount = displays.count();
   for(var i = 0; i < displayCount; i++){
      var display = displays.at(i);
      o.buildDisplay(displaysNode, display);
   }
   spaceNode.click();
}
MO.FDsTemplateCatalogContent_dispose = function FDsTemplateCatalogContent_dispose(){
   var o = this;
   o.__base.FDsCatalog.dispose.call(o);
}
MO.FDsTemplateCatalogToolBar = function FDsTemplateCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName             = 'resource.template.CatalogToolBar';
   o._activeNodeGuid        = null;
   o._controlCreateCamera   = null;
   o._controlCreateLayer    = null;
   o._controlCreateSprite   = null;
   o._controlDelete         = null;
   o._controlFolderOpen     = null;
   o._controlFolderClose    = null;
   o.onBuilded              = MO.FDsTemplateCatalogToolBar_onBuilded;
   o.onCreateCameraClick    = MO.FDsTemplateCatalogToolBar_onCreateCameraClick;
   o.onCreateDisplayClick   = MO.FDsTemplateCatalogToolBar_onCreateDisplayClick;
   o.onDeleteLoad           = MO.FDsTemplateCatalogToolBar_onDeleteLoad;
   o.onDeleteExecute        = MO.FDsTemplateCatalogToolBar_onDeleteExecute;
   o.onCopyLoad             = MO.FDsTemplateCatalogToolBar_onCopyLoad;
   o.onCopyExecute          = MO.FDsTemplateCatalogToolBar_onCopyExecute;
   o.onCopyClick            = MO.FDsTemplateCatalogToolBar_onCopyClick;
   o.onDeleteClick          = MO.FDsTemplateCatalogToolBar_onDeleteClick;
   o.onFolderOpenClick      = MO.FDsTemplateCatalogToolBar_onFolderOpenClick;
   o.onFolderCloseClick     = MO.FDsTemplateCatalogToolBar_onFolderCloseClick;
   o.construct              = MO.FDsTemplateCatalogToolBar_construct;
   o.dispose                = MO.FDsTemplateCatalogToolBar_dispose;
   return o;
}
MO.FDsTemplateCatalogToolBar_onBuilded = function FDsTemplateCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlCreateCamera.addClickListener(o, o.onCreateCameraClick);
   o._controlCreateDisplay.addClickListener(o, o.onCreateDisplayClick);
   o._controlCopy.addClickListener(o, o.onCopyClick);
   o._controlDelete.addClickListener(o, o.onDeleteClick);
   o._controlFolderOpen.addClickListener(o, o.onFolderOpenClick);
   o._controlFolderClose.addClickListener(o, o.onFolderCloseClick);
}
MO.FDsTemplateCatalogToolBar_onCreateCameraClick = function FDsTemplateCatalogToolBar_onCreateCameraClick(event){
   var o = this;
}
MO.FDsTemplateCatalogToolBar_onCreateDisplayClick = function FDsTemplateCatalogToolBar_onCreateDisplayClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonSpriteDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsTemplateCatalogToolBar_onCopyLoad = function FDsTemplateCatalogToolBar_onCopyLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsTemplateCatalogToolBar_onCopyExecute = function FDsTemplateCatalogToolBar_onCopyExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).copyNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsTemplateCatalogToolBar_onCopyClick = function FDsTemplateCatalogToolBar_onCopyClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var sprite = null;
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, FE3dSprite)){
      sprite = linker;
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能复制当前选中的节点.');
   }
   var resource = sprite.resource();
   var parentResource = resource.parent();
   var displayResource = resource.clone();
   parentResource.pushDisplay(displayResource);
   var display = MO.Console.find(MO.FE3dInstanceConsole).create(MO.EE3dInstance.SceneDisplay);
   display.linkGraphicContext(sprite);
   display.loadResource(displayResource);
   MO.Console.find(FE3dSceneConsole).loadDisplay(display);
   var parent = sprite.parent();
   parent.pushDisplay(display);
}
MO.FDsTemplateCatalogToolBar_onDeleteLoad = function FDsTemplateCatalogToolBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var catalog = o._frameSet._catalogContent;
   var guid = o._activeNodeGuid;
   if(guid){
      var node = catalog.findByGuid(guid);
      node.removeSelf();
   }
   o._activeNodeGuid = null;
}
MO.FDsTemplateCatalogToolBar_onDeleteExecute = function FDsTemplateCatalogToolBar_onDeleteExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).deleteNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsTemplateCatalogToolBar_onDeleteClick = function FDsTemplateCatalogToolBar_onDeleteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能删除当前选中的节点.');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前节点？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsTemplateCatalogToolBar_onFolderOpenClick = function FDsTemplateCatalogToolBar_onFolderOpenClick(event){
}
MO.FDsTemplateCatalogToolBar_onFolderCloseClick = function FDsTemplateCatalogToolBar_onFolderCloseClick(event){
}
MO.FDsTemplateCatalogToolBar_construct = function FDsTemplateCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsTemplateCatalogToolBar_dispose = function FDsTemplateCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsTemplateFrameSet = function FDsTemplateFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._frameCatalog         = null;
   o._frameCatalogToolBar  = null;
   o._frameCatalogContent  = null;
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   o.onBuilded             = MO.FDsTemplateFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsTemplateFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsTemplateFrameSet_onCatalogSelected;
   o.construct             = MO.FDsTemplateFrameSet_construct;
   o.loadByGuid            = MO.FDsTemplateFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsTemplateFrameSet_loadByCode;
   o.dispose               = MO.FDsTemplateFrameSet_dispose;
   return o;
}
MO.FDsTemplateFrameSet_onBuilded = function FDsTemplateFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   var spliter = o._spliterCatalog;
   spliter.setAlignCd(MO.EUiAlign.Left);
   spliter.setSizeHtml(o._frameCatalog._hPanel);
   var spliter = o._spliterProperty;
   spliter.setAlignCd(MO.EUiAlign.Right);
   spliter.setSizeHtml(o._frameProperty._hPanel);
}
MO.FDsTemplateFrameSet_onDataLoaded = function FDsTemplateFrameSet_onDataLoaded(event){
   var o = this;
   var canvas = event.sender;
   var space = o._activeSpace = canvas.activeSpace();
   o._catalogContent.buildSpace(space);
}
MO.FDsTemplateFrameSet_onCatalogSelected = function FDsTemplateFrameSet_onCatalogSelected(select, flag){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   o.hidePropertyFrames();
   if(MO.Class.isClass(select, MO.FE3dSpace)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonSpacePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dTechnique)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonTechniquePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRegion)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonRegionPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dCamera)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonCameraPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dDirectionalLight)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonLightPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dTemplateDisplay)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FG3dMaterial)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRenderable)){
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonRenderablePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else{
      throw new MO.TError('Unknown select object type. (select={1})', select);
   }
}
MO.FDsTemplateFrameSet_construct = function FDsTemplateFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
}
MO.FDsTemplateFrameSet_loadByGuid = function FDsTemplateFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._canvasContent.loadByGuid(guid);
}
MO.FDsTemplateFrameSet_loadByCode = function FDsTemplateFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   o._canvasContent.loadByCode(code);
}
MO.FDsTemplateFrameSet_dispose = function FDsTemplateFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsTemplateMenuBar = function FDsTemplateMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._controlSave           = null;
   o._controlCapture        = null;
   o._controlSelectMaterial = null;
   o._controlCreateDisplay  = null;
   o._controlDelete         = null;
   o.onSaveLoad            = MO.FDsTemplateMenuBar_onSaveLoad;
   o.onSaveClick           = MO.FDsTemplateMenuBar_onSaveClick;
   o.onCaptureLoad         = MO.FDsTemplateMenuBar_onCaptureLoad;
   o.onCaptureClick        = MO.FDsTemplateMenuBar_onCaptureClick;
   o.onSelectMaterialClick = MO.FDsTemplateMenuBar_onSelectMaterialClick;
   o.onCreateDisplayClick  = MO.FDsTemplateMenuBar_onCreateDisplayClick;
   o.onDeleteClick         = MO.FDsTemplateMenuBar_onDeleteClick;
   o.construct             = MO.FDsTemplateMenuBar_construct;
   o.dispose               = MO.FDsTemplateMenuBar_dispose;
   return o;
}
MO.FDsTemplateMenuBar_onSaveLoad = function FDsTemplateMenuBar_onSaveLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsTemplateMenuBar_onSaveClick = function FDsTemplateMenuBar_onSaveClick(p){
   var o = this;
   var space = o._frameSet._activeSpace;
   var resource = space.resource();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   var connection = MO.Console.find(MO.FDrTemplateConsole).update(xconfig);
   connection.addLoadListener(o, o.onSaveLoad);
}
MO.FDsTemplateMenuBar_onCaptureLoad = function FDsTemplateMenuBar_onCaptureLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsTemplateMenuBar_onCaptureClick = function FDsTemplateMenuBar_onCaptureClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var canvas = o._frameSet._canvasContent;
   var connection = canvas.capture();
   connection.addLoadListener(o, o.onCaptureLoad);
}
MO.FDsTemplateMenuBar_onSelectMaterialClick = function FDsTemplateMenuBar_onSelectMaterialClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonMaterialDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsTemplateMenuBar_onCreateDisplayClick = function FDsTemplateMenuBar_onCreateDisplayClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonDisplayDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsTemplateMenuBar_onDeleteClick = function FDsTemplateMenuBar_onDeleteClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonDisplayDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsTemplateMenuBar_construct = function FDsTemplateMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsTemplateMenuBar_dispose = function FDsTemplateMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsTemplateToolBar = function FDsTemplateToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._refreshButton = null;
   o._saveButton    = null;
   o.onBuild        = MO.FDsTemplateToolBar_onBuild;
   o.onRefreshClick = MO.FDsTemplateToolBar_onRefreshClick;
   o.onSaveClick    = MO.FDsTemplateToolBar_onSaveClick;
   o.construct      = MO.FDsTemplateToolBar_construct;
   o.dispose        = MO.FDsTemplateToolBar_dispose;
   return o;
}
MO.FDsTemplateToolBar_onBuild = function FDsTemplateToolBar_onBuild(p){
   var o = this;
   o.__base.FDuiToolBar.onBuild.call(o, p);
   var b = o._refreshButton  = MO.Class.create(MO.FDuiToolButton);
   b.setLabel('刷新');
   b.setIcon('design3d.tools.refresh');
   b.build(p);
   b.addClickListener(o, o.onRefreshClick);
   o.push(b);
   var b = o._saveButton = MO.Class.create(MO.FDuiToolButton);
   b.setLabel('保存');
   b.setIcon('design3d.tools.save');
   b.build(p);
   b.addClickListener(o, o.onSaveClick);
   o.push(b);
}
MO.FDsTemplateToolBar_onRefreshClick = function FDsTemplateToolBar_onRefreshClick(p){
   var o = this;
}
MO.FDsTemplateToolBar_onSaveClick = function FDsTemplateToolBar_onSaveClick(p){
   var o = this;
   var t = o._workspace._activeTemplate;
   var rt = t._resource;
   var ts = rt.themes();
   var tc = ts.count();
   var xr = new TXmlNode();
   for(var ti = 0; ti < tc; ti++){
      var t = ts.get(ti);
      var ms = t.materials();
      var mc = ms.count();
      for(var mi = 0; mi < mc; mi++){
         var m = ms.value(mi);
         m.saveConfig(xr.create('Material'));
      }
   }
   MO.Console.find(MO.FE3sTemplateConsole).update(xr);
}
MO.FDsTemplateToolBar_construct = function FDsTemplateToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsTemplateToolBar_dispose = function FDsTemplateToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsTemplateWorkspace = function FDsTemplateWorkspace(o){
   o = MO.Class.inherits(this, o, FDuiWorkspace);
   o._styleToolbarGround    = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleStatusbarGround  = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   o._styleCatalogGround    = MO.Class.register(o, new MO.AStyle('_styleCatalogGround', 'Catalog_Ground'));
   o._styleWorkspaceGround  = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._stylePropertyGround   = MO.Class.register(o, new MO.AStyle('_stylePropertyGround', 'Property_Ground'));
   o._framesetMain          = null;
   o._framesetBody          = null;
   o._frameToolBar          = null;
   o._frameBody             = null;
   o._frameProperty         = null;
   o._frameCatalog          = null;
   o._frameWorkspace        = null;
   o._frameStatusBar        = null;
   o._templatePropertyFrame = null;
   o._themePropertyFrame    = null;
   o._materialPropertyFrame = null;
   o._displayPropertyFrame  = null;
   o.onBuild                = MO.FDsTemplateWorkspace_onBuild;
   o.onTemplateLoad         = MO.FDsTemplateWorkspace_onTemplateLoad;
   o.onCatalogSelected      = MO.FDsTemplateWorkspace_onCatalogSelected;
   o.construct              = MO.FDsTemplateWorkspace_construct;
   o.templatePropertyFrame  = MO.FDsTemplateWorkspace_templatePropertyFrame;
   o.themePropertyFrame     = MO.FDsTemplateWorkspace_themePropertyFrame;
   o.materialPropertyFrame  = MO.FDsTemplateWorkspace_materialPropertyFrame;
   o.displayPropertyFrame   = MO.FDsTemplateWorkspace_displayPropertyFrame;
   o.loadTemplate           = MO.FDsTemplateWorkspace_loadTemplate;
   o.dispose                = MO.FDsTemplateWorkspace_dispose;
   return o;
}
MO.FDsTemplateWorkspace_onBuild = function FDsTemplateWorkspace_onBuild(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuild.call(o, p);
   o._hPanel.style.width = '100%';
   o._hPanel.style.height = '100%';
   var fs = o._framesetMain = MO.Class.create(MO.FDuiFrameSet);
   fs.build(p);
   var f = o._frameToolBar = MO.Class.create(MO.FDuiFramePage);
   f.setHeight(26);
   f.build(p);
   f._hPanel.className = o.styleName('Toolbar_Ground');
   fs.appendFrame(f);
   var f = o._frameBody = MO.Class.create(MO.FDuiFramePage);
   f.build(p);
   fs.appendFrame(f);
   var f = o._frameStatusBar = MO.Class.create(MO.FDuiFramePage);
   f.setHeight(18);
   f.build(p);
   f._hPanel.className = o.styleName('Statusbar_Ground');
   fs.appendFrame(f);
   fs.setPanel(o._hPanel);
   var fs = MO.Class.create(MO.FDuiFrameSet);
   fs._directionCd = MO.EUiDirection.Horizontal;
   fs.build(p);
   var f = o._frameCatalog = MO.Class.create(MO.FDuiFramePage);
   f.setWidth(400);
   f.build(p);
   f._hPanel.className = o.styleName('Catalog_Ground');
   fs.appendFrame(f);
   var sp1 = fs.appendSpliter();
   var f = o._frameWorkspace = MO.Class.create(MO.FDuiFramePage);
   f.build(p);
   f._hPanel.className = o.styleName('Workspace_Ground');
   fs.appendFrame(f);
   var sp2 = fs.appendSpliter();
   var f = o._frameProperty = MO.Class.create(MO.FDuiFramePage);
   f.setWidth(240);
   f.build(p);
   f._hPanel.className = o.styleName('Property_Ground');
   fs.appendFrame(f);
   fs.setPanel(o._frameBody._hPanel);
   sp1._alignCd = EUiAlign.Left;
   sp1._hSize = o._frameCatalog._hPanel;
   sp2._alignCd = EUiAlign.Right;
   sp2._hSize = o._frameStatusBar._hPanel;
   var c = o._catalog = MO.Class.create(MO.FDsTemplateCatalog);
   c._workspace = o;
   c.build(p);
   c.setPanel(o._frameCatalog._hPanel);
   c.addSelectedListener(o, o.onCatalogSelected);
   o.push(c);
   var c = o._toolbar = MO.Class.create(MO.FDsTemplateToolBar);
   c._workspace = o;
   c.build(p);
   c.setPanel(o._frameToolBar._hPanel);
   o.push(c);
   var hf = MO.Window.Builder.appendTable(o._frameWorkspace._hPanel);
   hf.style.width = '100%';
   hf.style.height = '100%';
   var hc = MO.Window.Builder.appendTableRowCell(hf);
   hc.height = 20;
   var c = o._canvasToolbar = MO.Class.create(MO.FDsTemplateCanvasToolBar);
   c._workspace = o;
   c.build(p);
   c.setPanel(hc);
   o.push(c);
   var hc = MO.Window.Builder.appendTableRowCell(hf);
   hc.vAlign = 'top';
   var c = o._canvas = MO.Class.create(MO.FDsTemplateCanvas);
   c.addLoadListener(o, o.onTemplateLoad);
   c._workspace = o;
   c._toolbar = o._canvasToolbar;
   c.build(p);
   c.setPanel(hc);
   o.push(c);
}
MO.FDsTemplateWorkspace_onTemplateLoad = function FDsTemplateWorkspace_onTemplateLoad(p){
   var o = this;
   var t = o._activeTemplate = p._activeTemplate;
   o._catalog.buildTemplate(t);
   o.onCatalogSelected(t);
}
MO.FDsTemplateWorkspace_onCatalogSelected = function FDsTemplateWorkspace_onCatalogSelected(p){
   var o = this;
   var t = o._activeTemplate;
   if(o._templatePropertyFrame){
      o._templatePropertyFrame.hide();
   }
   if(o._themePropertyFrame){
      o._themePropertyFrame.hide();
   }
   if(o._materialPropertyFrame){
      o._materialPropertyFrame.hide();
   }
   if(o._displayPropertyFrame){
      o._displayPropertyFrame.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dTemplate)){
      var f = o.templatePropertyFrame();
      f.show();
      f.loadObject(t);
   }else if(MO.Class.isClass(p, MO.FE3sTemplateTheme)){
      var f = o.themePropertyFrame();
      f.show();
      f.loadObject(t, p);
   }else if(MO.Class.isClass(p, MO.FE3sMaterial)){
      var f = o.materialPropertyFrame();
      f.show();
      f.loadObject(t, p);
   }else if(MO.Class.isClass(p, MO.MG3dRenderable)){
      var f = o.displayPropertyFrame();
      f.show();
      f.loadObject(t, p);
      o._canvas.selectRenderable(p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsTemplateWorkspace_construct = function FDsTemplateWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
}
MO.FDsTemplateWorkspace_templatePropertyFrame = function FDsTemplateWorkspace_templatePropertyFrame(){
   var o = this;
   var f = o._templatePropertyFrame;
   if(!f){
      f = o._templatePropertyFrame = MO.Class.create(MO.FDsTemplatePropertyFrame);
      f._workspace = o;
      f.buildDefine(o._hPanel);
      f.setPanel(o._frameProperty._hPanel);
   }
   return f;
}
MO.FDsTemplateWorkspace_themePropertyFrame = function FDsTemplateWorkspace_themePropertyFrame(){
   var o = this;
   var f = o._themePropertyFrame;
   if(!f){
      var f = o._themePropertyFrame = MO.Class.create(MO.FDsTemplateThemePropertyFrame);
      f._workspace = o;
      f.buildDefine(o._hPanel);
      f.setPanel(o._frameProperty._hPanel);
   }
   return f;
}
MO.FDsTemplateWorkspace_materialPropertyFrame = function FDsTemplateWorkspace_materialPropertyFrame(){
   var o = this;
   var f = o._materialPropertyFrame;
   if(!f){
      f = o._materialPropertyFrame = MO.Class.create(MO.FDsTemplateMaterialPropertyFrame);
      f._workspace = o;
      f.buildDefine(o._hPanel);
      f.setPanel(o._frameProperty._hPanel);
   }
   return f;
}
MO.FDsTemplateWorkspace_displayPropertyFrame = function FDsTemplateWorkspace_displayPropertyFrame(){
   var o = this;
   var f = o._displayPropertyFrame;
   if(!f){
      f = o._displayPropertyFrame = MO.Class.create(MO.FDsTemplateDisplayPropertyFrame);
      f._workspace = o;
      f.buildDefine(o._hPanel);
      f.setPanel(o._frameProperty._hPanel);
   }
   return f;
}
MO.FDsTemplateWorkspace_loadTemplate = function FDsTemplateWorkspace_loadTemplate(p){
   var o = this;
   o._canvas.loadTemplate(p);
}
MO.FDsTemplateWorkspace_dispose = function FDsTemplateWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
}
MO.FDsSceneCanvasContent = function FDsSceneCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsSpaceDesignCanvas);
   o._resourceTypeCd = MO.EE3sResource.Scene;
   o.onDataLoaded    = MO.FDsSceneCanvasContent_onDataLoaded;
   o.load            = MO.FDsSceneCanvasContent_load;
   o.loadByGuid      = MO.FDsSceneCanvasContent_loadByGuid;
   o.loadByCode      = MO.FDsSceneCanvasContent_loadByCode;
   o.dispose         = MO.FDsSceneCanvasContent_dispose;
   return o;
}
MO.FDsSceneCanvasContent_onDataLoaded = function FDsSceneCanvasContent_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace;
   o.reloadRegion()
   var event = MO.Memory.alloc(MO.SEvent);
   event.sender = o;
   event.space = space;
   o.processLoadListener(event);
   MO.Memory.free(event);
   o.refreshSpace();
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsSceneCanvasContent_load = function FDsSceneCanvasContent_load(args){
   var o = this;
   var space = o._activeSpace;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(space){
      sceneConsole.free(space);
   }
   var guid = args.guid;
   if(!MO.Lang.String.isEmpty(guid)){
      space = o._activeSpace = sceneConsole.allocByGuid(o, guid);
   }
   var code = args.code;
   if(!MO.Lang.String.isEmpty(code)){
      space = o._activeSpace = sceneConsole.allocByCode(o, code);
   }
   if(!space._linked){
      MO.Console.find(MO.FDuiDesktopConsole).showLoading();
      space.addLoadListener(o, o.onDataLoaded);
      space._linked = true;
   }
   return space;
}
MO.FDsSceneCanvasContent_loadByGuid = function FDsSceneCanvasContent_loadByGuid(guid){
   var o = this;
   var args = MO.Memory.alloc(MO.SArgs)
   args.guid = guid;
   var space = o.load(args);
   MO.Memory.free(args)
   return space;
}
MO.FDsSceneCanvasContent_loadByCode = function FDsSceneCanvasContent_loadByCode(code){
   var o = this;
   var args = MO.Memory.alloc(MO.SArgs)
   args.code = code;
   var space = o.load(args);
   MO.Memory.free(args)
   return space;
}
MO.FDsSceneCanvasContent_dispose = function FDsSceneCanvasContent_dispose(){
   var o = this;
   o.__base.FDsSpaceDesignCanvas.dispose.call(o);
}
MO.FDsSceneCanvasToolBar = function FDsSceneCanvasToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName         = 'resource.scene.CanvasToolBar';
   o._canvasModeCd      = MO.EDsCanvasMode.Drop;
   o._controlModeDrop   = null;
   o._controlModeSelect = null;
   o._controlTranslate  = null;
   o._controlRotation   = null;
   o._controlScale      = null;
   o._controlLookFront  = null;
   o._controlLookUp     = null;
   o._controlLookLeft   = null;
   o._controlPlay       = null;
   o._controlView       = null;
   o.onBuilded         = MO.FDsSceneCanvasToolBar_onBuilded;
   o.onModeClick       = MO.FDsSceneCanvasToolBar_onModeClick;
   o.onLookClick       = MO.FDsSceneCanvasToolBar_onLookClick;
   o.onPlayClick       = MO.FDsSceneCanvasToolBar_onPlayClick;
   o.onRotationClick   = MO.FDsSceneCanvasToolBar_onRotationClick;
   o.construct         = MO.FDsSceneCanvasToolBar_construct;
   o.dispose           = MO.FDsSceneCanvasToolBar_dispose;
   return o;
}
MO.FDsSceneCanvasToolBar_onBuilded = function FDsSceneCanvasToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   var button = o._controlModeDrop;
   button._canvasModeCd = MO.EDsCanvasMode.Drop;
   button.addClickListener(o, o.onModeClick);
   button.check(true);
   var button = o._controlModeSelect;
   button._canvasModeCd = MO.EDsCanvasMode.Select;
   button.addClickListener(o, o.onModeClick);
   var button = o._controlTranslate;
   button._canvasModeCd = MO.EDsCanvasMode.Translate;
   button.addClickListener(o, o.onModeClick);
   var button = o._controlRotation;
   button._canvasModeCd = MO.EDsCanvasMode.Rotation;
   button.addClickListener(o, o.onModeClick);
   var button = o._controlScale;
   button._canvasModeCd = MO.EDsCanvasMode.Scale;
   button.addClickListener(o, o.onModeClick);
   o._controlLookFront.addClickListener(o, o.onLookClick);
   o._controlLookUp.addClickListener(o, o.onLookClick);
   o._controlLookLeft.addClickListener(o, o.onLookClick);
   o._controlPlay.addClickListener(o, o.onPlayClick);
   o._controlView.addClickListener(o, o.onRotationClick);
}
MO.FDsSceneCanvasToolBar_onModeClick = function FDsSceneCanvasToolBar_onModeClick(event){
   var o = this;
   var sender = event.sender;
   var modeCd = sender._canvasModeCd;
   o._canvasModeCd = modeCd;
   o._frameSet._canvasContent.switchMode(modeCd);
}
MO.FDsSceneCanvasToolBar_onLookClick = function FDsSceneCanvasToolBar_onLookClick(event){
   var o = this;
   o._canvasModeCd = p._canvasModeCd;
}
MO.FDsSceneCanvasToolBar_onPlayClick = function FDsSceneCanvasToolBar_onPlayClick(event){
   var o = this;
   o._frameSet._canvasContent.switchPlay(event.checked);
}
MO.FDsSceneCanvasToolBar_onRotationClick = function FDsSceneCanvasToolBar_onRotationClick(event){
   var o = this;
   o._frameSet._canvasContent.switchMovie(event.checked);
}
MO.FDsSceneCanvasToolBar_construct = function FDsSceneCanvasToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsSceneCanvasToolBar_dispose = function FDsSceneCanvasToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsSceneCatalogContent = function FDsSceneCatalogContent(o){
   o = MO.Class.inherits(this, o, MO.FDsCatalog);
   o._catalogCode    = 'resource.scene';
   o.onBuild         = MO.FDsSceneCatalogContent_onBuild;
   o.onLoadDisplay   = MO.FDsSceneCatalogContent_onLoadDisplay;
   o.construct       = MO.FDsSceneCatalogContent_construct;
   o.buildRenderable = MO.FDsSceneCatalogContent_buildRenderable;
   o.buildDisplay    = MO.FDsSceneCatalogContent_buildDisplay;
   o.buildLayer      = MO.FDsSceneCatalogContent_buildLayer;
   o.buildSpace      = MO.FDsSceneCatalogContent_buildSpace;
   o.dispose         = MO.FDsSceneCatalogContent_dispose;
   return o;
}
MO.FDsSceneCatalogContent_onBuild = function FDsSceneCatalogContent_onBuild(event){
   var o = this;
   var column = MO.Class.create(MO.FDuiTreeColumn);
   column.setName('view');
   o.push(column);
   o.__base.FDsCatalog.onBuild.call(o, event);
   o.loadDefine(o._catalogCode);
}
MO.FDsSceneCatalogContent_onLoadDisplay = function FDsSceneCatalogContent_onLoadDisplay(event){
   var o = this;
   var node = event._linkNode;
   o.buildRenderable(node, event);
}
MO.FDsSceneCatalogContent_construct = function FDsSceneCatalogContent_construct(){
   var o = this;
   o.__base.FDsCatalog.construct.call(o);
}
MO.FDsSceneCatalogContent_buildRenderable = function FDsSceneCatalogContent_buildRenderable(parentNode, sprite){
   var o = this;
   var movies = sprite.movies();
   if(movies){
      var movieCount = movies.count();
      for(var i = 0; i < movieCount; i++){
         var movie = movies.at(i);
         var movieResource = movie.resource();
         var movieNode = o.createNode();
         movieNode.setTypeCode('Movie');
         movieNode.setLabel(movieResource.code());
         movieNode.setNote(movieResource.label());
         movieNode.dataPropertySet('linker', movie);
         parentNode.appendNode(movieNode);
      }
   }
   var materials = sprite.materials();
   if(materials){
      var materialCount = materials.count();
      for(var i = 0; i < materialCount; i++){
         var material = materials.at(i);
         var materialResource = material.resource();
         var materialNode = o.createNode();
         materialNode.setTypeCode('Material');
         materialNode.setLabel(materialResource.code());
         materialNode.setNote(materialResource.label());
         materialNode.dataPropertySet('linker', material);
         o.buildNodeView(materialNode, true);
         parentNode.appendNode(materialNode);
         o._materialNodes.push(materialNode);
      }
   }
   var animations = sprite.animations();
   if(animations){
      var animationCount = animations.count();
      for(var i = 0; i < animationCount; i++){
         var animation = animations.at(i);
         var animationResource = animation.resource();
         var animationNode = o.createNode();
         animationNode.setTypeCode('Animation');
         animationNode.setLabel(animationResource.code());
         animationNode.setNote(animationResource.label());
         animationNode.dataPropertySet('linker', animation);
         parentNode.appendNode(animationNode);
         o.buildNodeView(animationNode, true);
      }
   }
   var renderables = sprite.meshRenderables();
   if(renderables){
      var renderableCount = renderables.count();
      for(var i = 0; i < renderableCount; i++){
         var renderable = renderables.at(i);
         var renderableResource = renderable.resource();
         var modelResource = renderableResource.model();
         var meshResource = renderableResource.mesh();
         var renderableNode = o.createNode();
         renderableNode.setTypeCode('Renderable');
         renderableNode.setLabel(meshResource.code());
         renderableNode.dataPropertySet('linker', renderable);
         o.buildNodeView(renderableNode, true);
         parentNode.appendNode(renderableNode);
         o._renderableNodes.push(renderableNode);
      }
   }
}
MO.FDsSceneCatalogContent_buildDisplay = function FDsSceneCatalogContent_buildDisplay(parentNode, p){
   var o = this;
   var displays = p.displays();
   if(displays){
      var displayCount = displays.count();
      for(var i = 0; i < displayCount; i++){
         var display = displays.at(i);
         var resource = display.resource();
         var displayNode = o.createNode();
         displayNode.setTypeCode('display');
         displayNode.setLabel(resource.code());
         displayNode.setNote(resource.label());
         displayNode.dataPropertySet('linker', display);
         o.buildNodeView(displayNode, true);
         o._displayNodes.push(displayNode);
         parentNode.appendNode(displayNode);
         display.addLoadListener(o, o.onLoadDisplay);
         display._linkNode = displayNode;
      }
   }
}
MO.FDsSceneCatalogContent_buildLayer = function FDsSceneCatalogContent_buildLayer(parentNode, space){
   var o = this;
   var layersNode = o.createNode();
   layersNode.setTypeCode('Layers');
   layersNode.setLabel('Layers');
   layersNode.dataPropertySet('linker', 'layers');
   o.buildNodeView(layersNode, true);
   parentNode.appendNode(layersNode);
   var layers = space.layers();
   var layerCount = layers.count();
   for(var i = 0; i < layerCount; i++){
      var layer = layers.at(i);
      if(MO.Class.isClass(layer, MO.FDisplayUiLayer)){
         continue;
      }
      var layerResource = layer.resource();
      var layerNode = o.createNode();
      layerNode.setTypeCode('Layer');
      layerNode.setLabel('Layer:' + layerResource.code());
      layerNode.dataPropertySet('linker', layer);
      o.buildNodeView(layerNode, true);
      layersNode.appendNode(layerNode);
      o.buildDisplay(layerNode, layer)
   }
}
MO.FDsSceneCatalogContent_buildSpace = function FDsSceneCatalogContent_buildSpace(space){
   var o = this;
   o.clearAllNodes();
   var resource = space.resource();
   var spaceNode = o.createNode();
   spaceNode.setTypeCode('Scene');
   spaceNode.setLabel(resource.code());
   spaceNode.setNote(resource.label());
   spaceNode.dataPropertySet('linker', space);
   o.push(spaceNode);
   o.buildTechnique(spaceNode, space.technique())
   o.buildRegion(spaceNode, space.region());
   o.buildLayer(spaceNode, space);
   spaceNode.click();
}
MO.FDsSceneCatalogContent_dispose = function FDsSceneCatalogContent_dispose(){
   var o = this;
   o.__base.FDsCatalog.dispose.call(o);
}
MO.FDsSceneCatalogToolBar = function FDsSceneCatalogToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._activeNodeGuid        = null;
   o._controlCreateCamera   = null;
   o._controlCreateLayer    = null;
   o._controlCreateSprite   = null;
   o._controlCreateMovie    = null;
   o._controlDelete         = null;
   o._controlFolderOpen     = null;
   o._controlFolderClose    = null;
   o.onBuilded              = MO.FDsSceneCatalogToolBar_onBuilded;
   o.onCreateCameraClick    = MO.FDsSceneCatalogToolBar_onCreateCameraClick;
   o.onCreateLayerClick     = MO.FDsSceneCatalogToolBar_onCreateLayerClick;
   o.onCreateSpriteClick    = MO.FDsSceneCatalogToolBar_onCreateSpriteClick;
   o.onCreateMovieClick     = MO.FDsSceneCatalogToolBar_onCreateMovieClick;
   o.onDeleteLoad           = MO.FDsSceneCatalogToolBar_onDeleteLoad;
   o.onDeleteExecute        = MO.FDsSceneCatalogToolBar_onDeleteExecute;
   o.onCopyLoad             = MO.FDsSceneCatalogToolBar_onCopyLoad;
   o.onCopyExecute          = MO.FDsSceneCatalogToolBar_onCopyExecute;
   o.onCopyClick            = MO.FDsSceneCatalogToolBar_onCopyClick;
   o.onDeleteClick          = MO.FDsSceneCatalogToolBar_onDeleteClick;
   o.onFolderOpenClick      = MO.FDsSceneCatalogToolBar_onFolderOpenClick;
   o.onFolderCloseClick     = MO.FDsSceneCatalogToolBar_onFolderCloseClick;
   o.construct              = MO.FDsSceneCatalogToolBar_construct;
   o.dispose                = MO.FDsSceneCatalogToolBar_dispose;
   return o;
}
MO.FDsSceneCatalogToolBar_onBuilded = function FDsSceneCatalogToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
   o._controlCreateCamera.addClickListener(o, o.onCreateCameraClick);
   o._controlCreateLayer.addClickListener(o, o.onCreateLayerClick);
   o._controlCreateSprite.addClickListener(o, o.onCreateSpriteClick);
   o._controlCreateMovie.addClickListener(o, o.onCreateMovieClick);
   o._controlCopy.addClickListener(o, o.onCopyClick);
   o._controlDelete.addClickListener(o, o.onDeleteClick);
   o._controlFolderOpen.addClickListener(o, o.onFolderOpenClick);
   o._controlFolderClose.addClickListener(o, o.onFolderCloseClick);
}
MO.FDsSceneCatalogToolBar_onCreateCameraClick = function FDsSceneCatalogToolBar_onCreateCameraClick(event){
   var o = this;
}
MO.FDsSceneCatalogToolBar_onCreateLayerClick = function FDsSceneCatalogToolBar_onCreateLayerClick(event){
   var o = this;
}
MO.FDsSceneCatalogToolBar_onCreateSpriteClick = function FDsSceneCatalogToolBar_onCreateSpriteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return alert('请选中目录节点。');
   }
   var linker = node.dataPropertyGet('linker');
   var layer = null;
   var sprite = null;
   if(MO.Class.isClass(linker, MO.FDisplayLayer)){
      layer = linker;
   }else if(MO.Class.isClass(linker, MO.FE3dSprite)){
      layer = linker.findParent(MO.FDisplayLayer);
      sprite = linker;
   }else{
      return alert('请选中显示层或者精灵节点。');
   }
   var frameSet = o._frameSet;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsCommonSpriteDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = frameSet._activeSpace.resource().guid();
   dialog._layerGuid = layer.resource().guid();
   if(sprite){
      dialog._displayGuid = sprite.resource().guid();
   }else{
      dialog._displayGuid = null;
   }
   if(layer){
      dialog.setLayerLabel(layer.makeLabel());
   }
   if(sprite){
      dialog.setDisplayLabel(sprite.makeLabel());
   }
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsSceneCatalogToolBar_onCreateMovieClick = function FDsSceneCatalogToolBar_onCreateMovieClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return alert('请选中目录节点。');
   }
   var linker = node.dataPropertyGet('linker');
   var layer = null;
   var sprite = null;
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      layer = linker.findParent(MO.FDisplayLayer);
      sprite = linker;
   }else{
      return alert('请选中精灵节点。');
   }
   var frameSet = o._frameSet;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsCommonMovieDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = frameSet._activeSpace.resource().guid();
   dialog._layerGuid = layer.resource().guid();
   dialog._displayGuid = sprite.resource().guid();
   if(layer){
      dialog.setLayerLabel(layer.makeLabel());
   }
   if(sprite){
      dialog.setDisplayLabel(sprite.makeLabel());
   }
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsSceneCatalogToolBar_onCopyLoad = function FDsSceneCatalogToolBar_onCopyLoad(event){
   var o = this;
   MO.Console.find(FDuiDesktopConsole).hide();
}
MO.FDsSceneCatalogToolBar_onCopyExecute = function FDsSceneCatalogToolBar_onCopyExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).copyNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsSceneCatalogToolBar_onCopyClick = function FDsSceneCatalogToolBar_onCopyClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var sprite = null;
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      sprite = linker;
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能复制当前选中的节点.');
   }
   var resource = sprite.resource();
   var parentResource = resource.parent();
   var displayResource = resource.clone();
   parentResource.pushDisplay(displayResource);
   var display = MO.Console.find(MO.FE3dInstanceConsole).create(EE3dInstance.SceneDisplay);
   display.linkGraphicContext(sprite);
   display.loadResource(displayResource);
   MO.Console.find(MO.FE3dSceneConsole).loadDisplay(display);
   var parent = sprite.parent();
   parent.pushDisplay(display);
}
MO.FDsSceneCatalogToolBar_onDeleteLoad = function FDsSceneCatalogToolBar_onDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var catalog = o._frameSet._catalogContent;
   var guid = o._activeNodeGuid;
   if(guid){
      var node = catalog.findByGuid(guid);
      node.removeSelf();
   }
   o._activeNodeGuid = null;
}
MO.FDsSceneCatalogToolBar_onDeleteExecute = function FDsSceneCatalogToolBar_onDeleteExecute(event){
   var o = this;
   if(event.resultCd != EResult.Success){
      return;
   }
   var space = o._frameSet._activeSpace;
   var spaceGuid = space.resource().guid();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var connection = MO.Console.find(MO.FDrSceneConsole).deleteNode(spaceGuid, o._activeGuid);
   connection.addLoadListener(o, o.onDeleteLoad);
}
MO.FDsSceneCatalogToolBar_onDeleteClick = function FDsSceneCatalogToolBar_onDeleteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中节点后，再点击操作。');
   }
   o._activeNodeGuid = node.guid();
   var linker = node.dataPropertyGet('linker');
   if(MO.Class.isClass(linker, MO.FE3dSprite)){
      o._activeGuid = linker.resource().guid();
   }else{
      return alert('不能删除当前选中的节点.');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前节点？');
   dialog.addResultListener(o, o.onDeleteExecute);
}
MO.FDsSceneCatalogToolBar_onFolderOpenClick = function FDsSceneCatalogToolBar_onFolderOpenClick(event){
}
MO.FDsSceneCatalogToolBar_onFolderCloseClick = function FDsSceneCatalogToolBar_onFolderCloseClick(event){
}
MO.FDsSceneCatalogToolBar_construct = function FDsSceneCatalogToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsSceneCatalogToolBar_dispose = function FDsSceneCatalogToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsSceneFrameSet = function FDsSceneFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   o._frameCatalog         = null;
   o._frameCatalogToolBar  = null;
   o._frameCatalogContent  = null;
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   o.onBuilded             = MO.FDsSceneFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsSceneFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsSceneFrameSet_onCatalogSelected;
   o.construct             = MO.FDsSceneFrameSet_construct;
   o.loadByGuid            = MO.FDsSceneFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsSceneFrameSet_loadByCode;
   o.dispose               = MO.FDsSceneFrameSet_dispose;
   return o;
}
MO.FDsSceneFrameSet_onBuilded = function FDsSceneFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   var spliter = o._spliterCatalog;
   spliter.setAlignCd(MO.EUiAlign.Left);
   spliter.setSizeHtml(o._frameCatalog._hPanel);
   var spliter = o._spliterProperty;
   spliter.setAlignCd(MO.EUiAlign.Right);
   spliter.setSizeHtml(o._frameProperty._hPanel);
   var sceneConsole = MO.Console.find(MO.FE3dInstanceConsole);
   sceneConsole.register(MO.EE3dInstance.TemplateRenderable, MO.FDsSceneRenderable);
   sceneConsole.register(MO.EE3dInstance.SceneLayer, MO.FDsSceneLayer);
   sceneConsole.register(MO.EE3dInstance.SceneDisplay, MO.FDsSceneDisplay);
   sceneConsole.register(MO.EE3dInstance.SceneRenderable, MO.FDsSceneRenderable);
}
MO.FDsSceneFrameSet_onDataLoaded = function FDsSceneFrameSet_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace = event.space;
   o._catalogContent.buildSpace(space);
}
MO.FDsSceneFrameSet_onCatalogSelected = function FDsSceneFrameSet_onCatalogSelected(select, flag){
   var o = this;
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var canvas = o._canvasContent;
   o.hidePropertyFrames();
   if(select == 'layers'){
      if(flag){
         canvas.selectLayers(select);
      }
   }else if(MO.Class.isClass(select, MO.FE3dSceneLayer)){
      if(flag){
         canvas.selectLayer(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonLayerPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dSceneDisplay)){
      if(flag){
         canvas.selectDisplay(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dSceneMaterial)){
      if(flag){
         canvas.selectMaterial(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRenderable)){
      if(flag){
         canvas.selectRenderable(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonRenderablePropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(!o.selectPropertyFrame(space, select)){
      throw new TError('Unknown select type. (select={1})', select);
   }
}
MO.FDsSceneFrameSet_construct = function FDsSceneFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
   o.registerPropertyFrame(MO.FE3dScene, MO.EDsFrame.CommonSpacePropertyFrame);
   o.registerPropertyFrame(MO.FG3dTechnique, MO.EDsFrame.CommonTechniquePropertyFrame);
   o.registerPropertyFrame(MO.FE3dRegion, MO.EDsFrame.CommonRegionPropertyFrame);
   o.registerPropertyFrame(MO.FE3dCamera, MO.EDsFrame.CommonCameraPropertyFrame);
   o.registerPropertyFrame(MO.FG3dDirectionalLight, MO.EDsFrame.CommonLightPropertyFrame);
   o.registerPropertyFrame(MO.FE3dAnimation, MO.EDsFrame.CommonAnimationPropertyFrame);
   o.registerPropertyFrame(MO.FE3dMovie, MO.EDsFrame.CommonMoviePropertyFrame);
}
MO.FDsSceneFrameSet_loadByGuid = function FDsSceneFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._canvasContent.loadByGuid(guid);
}
MO.FDsSceneFrameSet_loadByCode = function FDsSceneFrameSet_loadByCode(code){
   var o = this;
   o._avtiveCode = code;
   o._canvasContent.loadByCode(code);
}
MO.FDsSceneFrameSet_dispose = function FDsSceneFrameSet_dispose(){
   var o = this;
   o.__base.FDsFrameSet.dispose.call(o);
}
MO.FDsSceneMenuBar = function FDsSceneMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   o._refreshButton        = null;
   o._saveButton           = null;
   o._runButton            = null;
   o.onBuilded             = MO.FDsSceneMenuBar_onBuilded;
   o.onSaveLoad            = MO.FDsSceneMenuBar_onSaveLoad;
   o.onSaveClick           = MO.FDsSceneMenuBar_onSaveClick;
   o.onCaptureLoad         = MO.FDsSceneMenuBar_onCaptureLoad;
   o.onCaptureClick        = MO.FDsSceneMenuBar_onCaptureClick;
   o.onCreateLayerClick    = MO.FDsSceneMenuBar_onCreateLayerClick;
   o.onImportTemplateClick = MO.FDsSceneMenuBar_onImportTemplateClick;
   o.onExecuteClick        = MO.FDsSceneMenuBar_onExecuteClick;
   o.construct             = MO.FDsSceneMenuBar_construct;
   o.dispose               = MO.FDsSceneMenuBar_dispose;
   return o;
}
MO.FDsSceneMenuBar_onBuilded = function FDsSceneMenuBar_onBuilded(p){
   var o = this;
   o.__base.FDuiMenuBar.onBuilded.call(o, p);
}
MO.FDsSceneMenuBar_onSaveLoad = function FDsSceneMenuBar_onSaveLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsSceneMenuBar_onSaveClick = function FDsSceneMenuBar_onSaveClick(p){
   var o = this;
   var space = o._frameSet._activeSpace;
   space.commitResource();
   var resource = space.resource();
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   var connection = MO.Console.find(MO.FDrSceneConsole).update(xconfig);
   connection.addLoadListener(o, o.onSaveLoad);
}
MO.FDsSceneMenuBar_onCaptureLoad = function FDsSceneMenuBar_onCaptureLoad(event){
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}
MO.FDsSceneMenuBar_onCaptureClick = function FDsSceneMenuBar_onCaptureClick(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   var canvasContent = o._frameSet._canvasContent;
   var connection = canvasContent.capture();
   connection.addLoadListener(o, o.onCaptureLoad);
}
MO.FDsSceneMenuBar_onCreateLayerClick = function FDsSceneMenuBar_onCreateLayerClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonLayerDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsSceneMenuBar_onImportTemplateClick = function FDsSceneMenuBar_onImportTemplateClick(){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonTemplateDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}
MO.FDsSceneMenuBar_onExecuteClick = function FDsSceneMenuBar_onExecuteClick(event){
   var o = this;
   var url = 'Space.wa?do=run&guid=' + o._frameSet._activeGuid;
   window.location = url;
}
MO.FDsSceneMenuBar_construct = function FDsSceneMenuBar_construct(){
   var o = this;
   o.__base.FDuiMenuBar.construct.call(o);
}
MO.FDsSceneMenuBar_dispose = function FDsSceneMenuBar_dispose(){
   var o = this;
   o.__base.FDuiMenuBar.dispose.call(o);
}
MO.FDsScenePropertyToolBar = function FDsScenePropertyToolBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiToolBar);
   o._frameName                   = 'resource.scene.PropertyToolBar';
   o._controlRefresh   = null;
   o._activeNodeGuid              = null;
   o.onBuilded                    = MO.FDsScenePropertyToolBar_onBuilded;
   o.onFolderCreateClick          = MO.FDsScenePropertyToolBar_onFolderCreateClick;
   o.onFolderDeleteLoad           = MO.FDsScenePropertyToolBar_onFolderDeleteLoad;
   o.onFolderDeleteExcute         = MO.FDsScenePropertyToolBar_onFolderDeleteExcute;
   o.onFolderDeleteClick          = MO.FDsScenePropertyToolBar_onFolderDeleteClick;
   o.onFolderPropertyClick        = MO.FDsScenePropertyToolBar_onFolderPropertyClick;
   o.onFolderOpenClick            = MO.FDsScenePropertyToolBar_onFolderOpenClick;
   o.onFolderCloseClick           = MO.FDsScenePropertyToolBar_onFolderCloseClick;
   o.construct                    = MO.FDsScenePropertyToolBar_construct;
   o.dispose                      = MO.FDsScenePropertyToolBar_dispose;
   return o;
}
MO.FDsScenePropertyToolBar_onBuilded = function FDsScenePropertyToolBar_onBuilded(p){
   var o = this;
   o.__base.FDuiToolBar.onBuilded.call(o, p);
}
MO.FDsScenePropertyToolBar_onFolderCreateClick = function FDsScenePropertyToolBar_onFolderCreateClick(event){
   var o = this;
   var parentGuid = null;
   var parentLabel = null;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(node){
      parentGuid = node.guid();
      parentLabel = node.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsResourceFolderDialog);
   dialog._workspace = o._workspace;
   dialog._frameSet = o._frameSet;
   dialog._parentGuid = parentGuid;
   dialog.setNodeParentLabel(parentLabel);
   dialog.setNodeLabel('');
   dialog.switchDataMode(EUiDataMode.Insert);
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsScenePropertyToolBar_onFolderDeleteLoad = function FDsScenePropertyToolBar_onFolderDeleteLoad(event){
   var o = this;
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   var catalog = o._frameSet._catalogContent;
   var guid = o._activeNodeGuid;
   if(guid){
      var node = catalog.findByGuid(guid);
      node.removeSelf();
   }
   o._activeNodeGuid = null;
}
MO.FDsScenePropertyToolBar_onFolderDeleteExcute = function FDsScenePropertyToolBar_onFolderDeleteExcute(event){
   var o = this;
   if(event.resultCd != MO.EResult.Success){
      return;
   }
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   MO.Console.find(FDuiDesktopConsole).showUploading();
   o._activeNodeGuid = node._guid;
   var connection = MO.Console.find(MO.FDrResourceConsole).doFolderDelete(node._guid);
   connection.addLoadListener(o, o.onFolderDeleteLoad);
}
MO.FDsScenePropertyToolBar_onFolderDeleteClick = function FDsScenePropertyToolBar_onFolderDeleteClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中目录节点后，再点击操作。');
   }
   var dialog = MO.Console.find(MO.FDuiMessageConsole).showConfirm('请确认是否删除当前目录？');
   dialog.addResultListener(o, o.onFolderDeleteExcute);
}
MO.FDsScenePropertyToolBar_onFolderPropertyClick = function FDsScenePropertyToolBar_onFolderPropertyClick(event){
   var o = this;
   var catalog = o._frameSet._catalogContent;
   var node = catalog.focusNode();
   if(!node){
      return MO.Console.find(MO.FDuiMessageConsole).showInfo('请选中目录节点后，再点击操作。');
   }
   var parentLabel = null;
   if(node._parent){
      parentLabel = node._parent.label();
   }
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(FDsResourceFolderDialog);
   dialog._workspace = o._workspace;
   dialog._frameSet = o._frameSet;
   dialog._nodeGuid = node._guid;
   dialog.setNodeParentLabel(parentLabel);
   dialog.setNodeLabel(node.label());
   dialog.switchDataMode(EUiDataMode.Update);
   dialog.showPosition(EUiPosition.Center);
}
MO.FDsScenePropertyToolBar_onFolderOpenClick = function FDsScenePropertyToolBar_onFolderOpenClick(event){
}
MO.FDsScenePropertyToolBar_onFolderCloseClick = function FDsScenePropertyToolBar_onFolderCloseClick(event){
}
MO.FDsScenePropertyToolBar_construct = function FDsScenePropertyToolBar_construct(){
   var o = this;
   o.__base.FDuiToolBar.construct.call(o);
}
MO.FDsScenePropertyToolBar_dispose = function FDsScenePropertyToolBar_dispose(){
   var o = this;
   o.__base.FDuiToolBar.dispose.call(o);
}
MO.FDsSceneWorkspace = function FDsSceneWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   o._frameName            = 'resource.share.scene.Workspace';
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
   o._propertyFrames       = null;
   o.onBuilded             = MO.FDsSceneWorkspace_onBuilded;
   o.onSceneLoad           = MO.FDsSceneWorkspace_onSceneLoad;
   o.onCatalogSelected     = MO.FDsSceneWorkspace_onCatalogSelected;
   o.construct             = MO.FDsSceneWorkspace_construct;
   o.findPropertyFrame     = MO.FDsSceneWorkspace_findPropertyFrame;
   o.loadScene             = MO.FDsSceneWorkspace_loadScene;
   o.dispose               = MO.FDsSceneWorkspace_dispose;
   return o;
}
MO.FDsSceneWorkspace_onBuilded = function FDsSceneWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   var f = o._frameToolBar = o.searchControl('toolbarFrame');
   f._hPanel.className = o.styleName('Toolbar_Ground');
   var f = o._frameCatalog = o.searchControl('catalogFrame');
   f._hPanel.className = o.styleName('Catalog_Ground');
   var f = o._frameWorkspace = o.searchControl('spaceFrame');
   f._hPanel.className = o.styleName('Workspace_Ground');
   var f = o._frameProperty = o.searchControl('propertyFrame');
   f._hPanel.className = o.styleName('Property_Ground');
   var f = o._frameStatusBar = o.searchControl('statusFrame');
   f._hPanel.className = o.styleName('Statusbar_Ground');
   var f = o._catalogSplitter = o.searchControl('catalogSpliter');
   f.setAlignCd(EUiAlign.Left);
   f.setSizeHtml(o._frameCatalog._hPanel);
   var f = o._propertySpliter = o.searchControl('propertySpliter');
   f.setAlignCd(EUiAlign.Right);
   f.setSizeHtml(o._frameProperty._hPanel);
   var c = o._toolbar = MO.Class.create(MO.FDsSceneMenuBar);
   c._workspace = o;
   c.buildDefine(p);
   o._frameToolBar.push(c);
   var c = o._catalog = MO.Class.create(MO.FDsSceneCatalog);
   c._workspace = o;
   c.build(p);
   c.addSelectedListener(o, o.onCatalogSelected);
   o._frameCatalog.push(c);
   var f = o._canvasToolbarFrame = o.searchControl('canvasToolbarFrame');
   var c = o._canvasToolbar = MO.Class.create(MO.FDsSceneCanvasToolBar);
   c._workspace = o;
   c.buildDefine(p);
   o._canvasToolbarFrame.push(c);
   var f = o._canvasFrame = o.searchControl('canvasFrame');
   var c = o._canvas = MO.Class.create(MO.FDsSceneCanvas);
   c._workspace = o;
   c._toolbar = o._canvasToolbar;
   c.addLoadListener(o, o.onSceneLoad);
   c._hParent = f._hPanel;
   c._hParent.style.backgroundColor = '#000000';
   c.build(p);
   o._canvasFrame.push(c);
}
MO.FDsSceneWorkspace_onSceneLoad = function FDsSceneWorkspace_onSceneLoad(p){
   var o = this;
   var t = o._activeScene = p._activeScene;
   o._catalog.buildScene(t);
}
MO.FDsSceneWorkspace_onCatalogSelected = function FDsSceneWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var s = o._activeScene;
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   if(MO.Class.isClass(p, MO.FE3dScene)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneSpacePropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FG3dTechnique)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneTechniquePropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3dRegion)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneRegionPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3dCamera)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneCameraPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FG3dDirectionalLight)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneLightPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(p == 'layers'){
      if(pc){
         o._canvas.selectLayers(p);
      }
   }else if(MO.Class.isClass(p, MO.FE3dSceneLayer)){
      if(pc){
         o._canvas.selectLayer(p);
      }
      var f = o.findPropertyFrame(MO.EDsFrame.SceneLayerPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3dSceneDisplay)){
      if(pc){
         o._canvas.selectDisplay(p);
      }
      var f = o.findPropertyFrame(MO.EDsFrame.SceneDisplayPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3dSceneMaterial)){
      if(pc){
         o._canvas.selectMaterial(p);
      }
      var f = o.findPropertyFrame(MO.EDsFrame.SceneMaterialPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3rAnimation)){
      var f = o.findPropertyFrame(MO.EDsFrame.SceneAnimationPropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else if(MO.Class.isClass(p, MO.FE3dRenderable)){
      if(pc){
         o._canvas.selectRenderable(p);
      }
      var f = o.findPropertyFrame(MO.EDsFrame.SceneRenderablePropertyFrame);
      f.show();
      f.loadObject(s, p);
   }else{
      throw new MO.TError('Unknown select object type. (value={1})', p);
   }
}
MO.FDsSceneWorkspace_construct = function FDsSceneWorkspace_construct(){
   var o = this;
   o.__base.FDuiWorkspace.construct.call(o);
   o._propertyFrames = new MO.TDictionary();
}
MO.FDsSceneWorkspace_findPropertyFrame = function FDsSceneWorkspace_findPropertyFrame(p){
   var o = this;
   var frame = o._propertyFrames.get(p);
   if(!frame){
      frame = MO.Console.find(MO.FDuiFrameConsole).get(o, p, o._frameProperty._hContainer);
      frame._workspace = o;
      o._propertyFrames.set(p, frame);
   }
   return frame;
}
MO.FDsSceneWorkspace_loadScene = function FDsSceneWorkspace_loadScene(p){
   var o = this;
   o._sceneCode = p;
   o._canvas.loadScene(p);
}
MO.FDsSceneWorkspace_dispose = function FDsSceneWorkspace_dispose(){
   var o = this;
   o.__base.FDuiWorkspace.dispose.call(o);
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
