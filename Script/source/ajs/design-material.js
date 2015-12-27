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
