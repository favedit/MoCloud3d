//==========================================================
// <T>模板工作区域。</T>
//
// @author maocy
// @history 150121
//==========================================================
MO.FDsMaterialFrameSet = function FDsMaterialFrameSet(o){
   o = MO.Class.inherits(this, o, MO.FDsFrameSet);
   //..........................................................
   // @attribute
   o._frameCatalog         = null;
   o._frameCatalogToolBar  = null;
   o._frameCatalogContent  = null;
   o._frameCanvas          = null;
   o._frameCanvasToolBar   = null;
   o._frameCanvasContent   = null;
   o._frameProperty        = null;
   o._framePropertyToolBar = null;
   o._framePropertyContent = null;
   //..........................................................
   // @process
   o.onBuilded             = MO.FDsMaterialFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsMaterialFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsMaterialFrameSet_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsMaterialFrameSet_construct;
   // @method
   o.switchCanvas          = MO.FDsMaterialFrameSet_switchCanvas;
   o.loadByGuid            = MO.FDsMaterialFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsMaterialFrameSet_loadByCode;
   // @method
   o.dispose               = MO.FDsMaterialFrameSet_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param event:TEventProcess 事件处理
//==========================================================
MO.FDsMaterialFrameSet_onBuilded = function FDsMaterialFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   //..........................................................
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   //..........................................................
   // 设置分割
   var spliterCatalog = o._spliterCatalog;
   spliterCatalog.setAlignCd(MO.EUiAlign.Left);
   spliterCatalog.setSizeHtml(o._frameCatalog._hPanel);
   var spliterProperty = o._spliterProperty;
   spliterProperty.setAlignCd(MO.EUiAlign.Right);
   spliterProperty.setSizeHtml(o._frameProperty._hPanel);
   //..........................................................
   // 设置画板内容
   var canvas = o._canvasContent = MO.Class.create(MO.FDsMaterialCanvasContent);
   canvas._frameSet = o;
   canvas._hParent = o._frameCanvasContent._hPanel;
   canvas._hParent.style.scroll = 'auto';
   //canvas._hParent.style.backgroundColor = '#333333';
   //canvas.addLoadListener(o, o.onDataLoaded);
   canvas.build(event);
   // 设置画板内容
   var canvas = o._canvasBitmap = MO.Class.create(MO.FDsMaterialCanvasBitmap);
   canvas._frameSet = o;
   canvas._hParent = o._frameCanvasContent._hPanel;
   canvas._hParent.style.scroll = 'auto';
   //canvas._hParent.style.backgroundColor = '#333333';
   //canvas.addLoadListener(o, o.onDataLoaded);
   canvas.build(event);
   o._frameCanvasContent.push(canvas);
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param p:template:FTemplate3d 模板
//==========================================================
MO.FDsMaterialFrameSet_onDataLoaded = function FDsMaterialFrameSet_onDataLoaded(p){
   var o = this;
   o._activeSpace = p._activeSpace;
   // 加载完成
   o._catalog.buildSpace(o._activeSpace);
}

//==========================================================
// <T>目录对象选择处理。</T>
//
// @method
// @param select:FObject 选择对象
// @param flag:Boolean 选择标志
//==========================================================
MO.FDsMaterialFrameSet_onCatalogSelected = function FDsMaterialFrameSet_onCatalogSelected(select, flag){
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
MO.FDsMaterialFrameSet_construct = function FDsMaterialFrameSet_construct(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.construct.call(o);
}

//==========================================================
// <T>切换画板。</T>
//
// @method
//==========================================================
MO.FDsMaterialFrameSet_switchCanvas = function FDsMaterialFrameSet_switchCanvas(typeCd, guid){
   var o = this;
   if(typeCd == 'Bitmap'){
      var canvas = o._canvasBitmap;
      canvas.loadByGuid(guid);
      //o._frameCanvasContent.push(canvas);
   }else{
      //o._frameCanvasContent.push(o._canvasContent);
   }
}

//==========================================================
// <T>根据唯一编码加载网格模板。</T>
//
// @method
// @param guid:String 唯一编码
//==========================================================
MO.FDsMaterialFrameSet_loadByGuid = function FDsMaterialFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   // 获得资源信息
   var resource = o._activeResource = MO.Console.find(MO.FDrMaterialConsole).query(guid);
   // 加载目录
   o._catalogContent.serviceList(guid);
   // 加载画板
   var canvas = o._canvasContent;
   canvas.loadByGuid(guid);
   // 加载属性
   var frame = o.findPropertyFrame(MO.EDsFrame.MaterialPropertyFrame);
   frame.loadObject(resource);
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
//==========================================================
MO.FDsMaterialFrameSet_loadByCode = function FDsMaterialFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   o._canvas.loadByCode(code);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsMaterialFrameSet_dispose = function FDsMaterialFrameSet_dispose(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.dispose.call(o);
}
