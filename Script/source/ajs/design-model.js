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
