//==========================================================
// <T>模板工作区域。</T>
//
// @author maocy
// @history 150121
//==========================================================
MO.FDsBitmapWorkspace = function FDsBitmapWorkspace(o){
   o = MO.Class.inherits(this, o, MO.FDuiWorkspace);
   //..........................................................
   // @property
   o._frameName            = 'design2d.bitmap.Workspace';
   //..........................................................
   // @style
   o._styleWorkspaceGround = MO.Class.register(o, new MO.AStyle('_styleWorkspaceGround', 'Workspace_Ground'));
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleBodyGround      = MO.Class.register(o, new MO.AStyle('_styleBodyGround', 'Body_Ground'));
   o._styleStatusbarGround = MO.Class.register(o, new MO.AStyle('_styleStatusbarGround', 'Statusbar_Ground'));
   //..........................................................
   // @attribute
   o._activeSpace          = null;
   o._activeMesh           = null;
   // @attribute
   o._framesetMain         = null;
   o._framesetBody         = null;
   // @attribute
   o._frameToolBar         = null;
   o._frameBody            = null;
   o._frameProperty        = null;
   o._frameSet             = null;
   // @attribute
   o._propertyFrames       = null;
   //..........................................................
   // @process
   o.onBuilded             = MO.FDsBitmapWorkspace_onBuilded;
   o.onMeshLoad            = MO.FDsBitmapWorkspace_onMeshLoad;
   o.onCatalogSelected     = MO.FDsBitmapWorkspace_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsBitmapWorkspace_construct;
   // @method
   o.findPropertyFrame     = MO.FDsBitmapWorkspace_findPropertyFrame;
   // @method
   o.loadByGuid            = MO.FDsBitmapWorkspace_loadByGuid;
   o.loadByCode            = MO.FDsBitmapWorkspace_loadByCode;
   // @method
   o.dispose               = MO.FDsBitmapWorkspace_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param p:event:TEventProcess 事件处理
//==========================================================
MO.FDsBitmapWorkspace_onBuilded = function FDsBitmapWorkspace_onBuilded(p){
   var o = this;
   o.__base.FDuiWorkspace.onBuilded.call(o, p);
   //..........................................................
   // 设置工具区
   var frame = o._frameToolBar = o.searchControl('toolbarFrame');
   frame._hPanel.className = o.styleName('Toolbar_Ground');
   // 设置属性区
   var frame = o._frameBody = o.searchControl('bodyFrame');
   frame._hPanel.className = o.styleName('Body_Ground');
   // 设置状态区
   var frame = o._frameStatusBar = o.searchControl('statusFrame');
   frame._hPanel.className = o.styleName('Statusbar_Ground');
   //..........................................................
   // 设置工具栏
   var menuBar = o._menuBar = MO.Class.create(MO.FDsBitmapMenuBar);
   menuBar._workspace = o;
   menuBar.buildDefine(p);
   o._frameToolBar.push(menuBar);
   //..........................................................
   // 创建框架
   var frameSet = o._frameSet = MO.Class.create(MO.FDsBitmapFrameSet);
   frameSet._workspace = o;
   frameSet.buildDefine(p);
   o._frameBody.push(frameSet);
   // 设置关联
   menuBar._frameSet = frameSet;
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param p:template:FTemplate3d 模板
//==========================================================
MO.FDsBitmapWorkspace_onMeshLoad = function FDsBitmapWorkspace_onMeshLoad(p){
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
MO.FDsBitmapWorkspace_onCatalogSelected = function FDsBitmapWorkspace_onCatalogSelected(p, pc){
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
MO.FDsBitmapWorkspace_construct = function FDsBitmapWorkspace_construct(){
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

//==========================================================
// <T>根据唯一编号加载网格。</T>
//
// @method
// @param guid 唯一编号
//==========================================================
MO.FDsBitmapWorkspace_loadByGuid = function FDsBitmapWorkspace_loadByGuid(guid){
   this._frameSet.loadByGuid(guid);
}

//==========================================================
// <T>根据代码加载网格。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FDsBitmapWorkspace_loadByCode = function FDsBitmapWorkspace_loadByCode(code){
   this._frameSet.loadByCode(code);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsBitmapWorkspace_dispose = function FDsBitmapWorkspace_dispose(){
   var o = this;
   // 父处理
   o.__base.FDuiWorkspace.dispose.call(o);
   // 设置属性
   o._propertyFrames.dispose();
   o._propertyFrames = null;
}
