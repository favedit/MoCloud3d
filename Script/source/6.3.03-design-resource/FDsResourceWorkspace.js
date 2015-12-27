//==========================================================
// <T>模板工作区域。</T>
//
// @author maocy
// @history 150121
//==========================================================
MO.FDsResourceWorkspace = function FDsResourceWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   //..........................................................
   // @property
   o._frameName            = 'resource.resource.Workspace';
   //..........................................................
   // @style
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
   //..........................................................
   // @attribute
   o._resourceTypeCd       = 'picture';
   // @attribute
   o._frameToolBar         = null;
   o._frameStatusBar       = null;
   // @attribute
   o._frameCatalog         = null;
   o._frameCatalogToolbar  = null;
   o._frameCatalogContent  = null;
   o._frameSearch          = null;
   o._frameSearchToolbar   = null;
   o._frameSearchContent   = null;
   o._framePreview         = null;
   o._framePreviewToolbar  = null;
   o._framePreviewContent  = null;
   // @attribute
   o._propertyFrames       = null;
   //..........................................................
   // @process
   o.onBuilded             = MO.FDsResourceWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsResourceWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsResourceWorkspace_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsResourceWorkspace_construct;
   // @method
   o.findPropertyFrame     = MO.FDsResourceWorkspace_findPropertyFrame;
   // @method
   o.switchContent         = MO.FDsResourceWorkspace_switchContent;
   o.load                  = MO.FDsResourceWorkspace_load;
   // @method
   o.dispose               = MO.FDsResourceWorkspace_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param p:event:TEventProcess 事件处理
//==========================================================
MO.FDsResourceWorkspace_onBuilded = function FDsResourceWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   //..........................................................
   // 设置工具区
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   // 设置目录区
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Catalog_Ground');
   // 设置状态区
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   //..........................................................
   var hTable = MO.Window.Builder.createTable(p);
   hTable.width = '100%';
   var hRow = MO.Window.Builder.appendTableRow(hTable);
   // 设置工具栏
   var c = o._toolbar = MO.Class.create(MO.FDsResourceMenuBar);
   c._workspace = o;
   c.buildDefine(p);
   var hCell = MO.Window.Builder.appendTableCell(hRow);
   hCell.appendChild(c._hPanel);
   // 设置分页栏
   var c = o._tabBar = MO.Class.create(MO.FDsResourceTabBar);
   c._workspace = o;
   c.buildDefine(p);
   var hCell = MO.Window.Builder.appendTableCell(hRow);
   hCell.width = '450px';
   hCell.align = 'right';
   hCell.vAlign = 'bottom';
   hCell.appendChild(c._hPanel);
   //o._frameToolBar.push(c);
   o._frameToolBar._hPanel.appendChild(hTable);
   //..........................................................
   // 创建框架
   var frameSet = o._frameSet = MO.Class.create(MO.FDsResourceFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   //..........................................................
   frameSet.switchContent(o._resourceTypeCd);
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param p:template:FTemplate3d 模板
//==========================================================
MO.FDsResourceWorkspace_onMeshLoad = function FDsResourceWorkspace_onMeshLoad(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   // 加载完成
   o._catalog.buildSpace(o._activeSpace);
}

//==========================================================
// <T>目录对象选择处理。</T>
//
// @method
// @param p:value:Object 对象
//==========================================================
MO.FDsResourceWorkspace_onCatalogSelected = function FDsResourceWorkspace_onCatalogSelected(p, pc){
   var o = this;
   var space = o._activeSpace;
   // 隐藏所有属性面板
   var fs = o._propertyFrames;
   var c = fs.count();
   for(var i = 0; i < c; i++){
      var f = fs.value(i);
      f.hide();
   }
   // 显示选中属性面板
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

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsResourceWorkspace_construct = function FDsResourceWorkspace_construct(){
   var o = this;
   // 父处理
   o.__base.FDuiWorkspace.construct.call(o);
   // 设置属性
   o._propertyFrames = new MO.TDictionary();
}

//==========================================================
// <T>根据名称获得属性页面。</T>
//
// @method
// @return FDuiFrame 页面
//==========================================================
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

//==========================================================
// <T>选择内容。</T>
//
// @method
// @param typeCd:String 内容类型
//==========================================================
MO.FDsResourceWorkspace_switchContent = function FDsResourceWorkspace_switchContent(typeCd){
   this._frameSet.switchContent(typeCd);
}

//==========================================================
// <T>加载处理。</T>
//
// @method
//==========================================================
MO.FDsResourceWorkspace_load = function FDsResourceWorkspace_load(){
   var o = this;
   //o._meshCode = p;
   //o._canvas.load(p);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsResourceWorkspace_dispose = function FDsResourceWorkspace_dispose(){
   var o = this;
   // 父处理
   o.__base.FDuiWorkspace.dispose.call(o);
   // 设置属性
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
