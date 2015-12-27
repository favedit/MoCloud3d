//==========================================================
// <T>资源框架。</T>
//
// @author maocy
// @history 150121
//==========================================================
MO.FDsResourceFrameSet = function FDsResourceFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   //..........................................................
   // @style
   o._styleToolbarGround   = MO.Class.register(o, new MO.AStyle('_styleToolbarGround', 'Toolbar_Ground'));
   o._styleCatalogContent  = MO.Class.register(o, new MO.AStyle('_styleCatalogContent', 'Catalog_Content'));
   o._styleListContent     = MO.Class.register(o, new MO.AStyle('_styleListContent', 'List_Content'));
   o._stylePropertyContent = MO.Class.register(o, new MO.AStyle('_stylePropertyContent', 'Property_Content'));
   //..........................................................
   // @attribute
   o._resourceTypeCd       = 'picture';
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
   //..........................................................
   // @process
   o.onBuilded             = MO.FDsResourceFrameSet_onBuilded;
   o.onCatalogSelected     = MO.FDsResourceFrameSet_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsResourceFrameSet_construct;
   // @method
   o.switchContent         = MO.FDsResourceFrameSet_switchContent;
   o.load                  = MO.FDsResourceFrameSet_load;
   // @method
   o.dispose               = MO.FDsResourceFrameSet_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param p:event:TEventProcess 事件处理
//==========================================================
MO.FDsResourceFrameSet_onBuilded = function FDsResourceFrameSet_onBuilded(p){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, p);
}

//==========================================================
// <T>目录对象选择处理。</T>
//
// @method
// @param select:FObject 选择对象
// @param flag:Boolean 选择标志
//==========================================================
MO.FDsResourceFrameSet_onCatalogSelected = function FDsResourceFrameSet_onCatalogSelected(select, flag){
   var o = this;
   // 检查空间
   var space = o._activeSpace;
   if(!space){
      return;
   }
   // 隐藏所有属性面板
   o.hidePropertyFrames();
   // 显示选中属性面板
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

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsResourceFrameSet_construct = function FDsResourceFrameSet_construct(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.construct.call(o);
}

//==========================================================
// <T>选择内容。</T>
//
// @method
// @param typeCd:String 内容类型
//==========================================================
MO.FDsResourceFrameSet_switchContent = function FDsResourceFrameSet_switchContent(typeCd){
   var o = this;
   o._resourceTypeCd = typeCd;
   o._listContent.serviceSearch(typeCd, '', '', 40, 0);
}

//==========================================================
// <T>加载处理。</T>
//
// @method
//==========================================================
MO.FDsResourceFrameSet_load = function FDsResourceFrameSet_load(){
   var o = this;
   o._listToolBar.storageLoad();
   //var typeCd = o._listToolBar.storageGet('resource_type_cd', 'All')
   //o.switchContent(typeCd);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsResourceFrameSet_dispose = function FDsResourceFrameSet_dispose(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.dispose.call(o);
}
