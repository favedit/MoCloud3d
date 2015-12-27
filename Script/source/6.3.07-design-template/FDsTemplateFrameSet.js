//==========================================================
// <T>模板框架。</T>
//
// @class
// @author maocy
// @history 150121
//==========================================================
MO.FDsTemplateFrameSet = function FDsTemplateFrameSet(o){
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
   o.onBuilded             = MO.FDsTemplateFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsTemplateFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsTemplateFrameSet_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsTemplateFrameSet_construct;
   // @method
   o.loadByGuid            = MO.FDsTemplateFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsTemplateFrameSet_loadByCode;
   // @method
   o.dispose               = MO.FDsTemplateFrameSet_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param p:event:TEventProcess 事件处理
//==========================================================
MO.FDsTemplateFrameSet_onBuilded = function FDsTemplateFrameSet_onBuilded(event){
   var o = this;
   o.__base.FDsFrameSet.onBuilded.call(o, event);
   //..........................................................
   // 设置样式
   o._frameCatalogToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCatalogContent._hPanel.className = o.styleName('Catalog_Content');
   o._frameCanvasToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._frameCanvasContent._hPanel.className = o.styleName('Canvas_Content');
   o._framePropertyToolBar._hPanel.className = o.styleName('ToolBar_Ground');
   o._framePropertyContent._hPanel.className = o.styleName('Property_Content');
   //..........................................................
   // 设置分割
   var spliter = o._spliterCatalog;
   spliter.setAlignCd(MO.EUiAlign.Left);
   spliter.setSizeHtml(o._frameCatalog._hPanel);
   var spliter = o._spliterProperty;
   spliter.setAlignCd(MO.EUiAlign.Right);
   spliter.setSizeHtml(o._frameProperty._hPanel);
}

//==========================================================
// <T>加载模板处理。</T>
//
// @method
// @param event:FTemplate3d 模板
//==========================================================
MO.FDsTemplateFrameSet_onDataLoaded = function FDsTemplateFrameSet_onDataLoaded(event){
   var o = this;
   var canvas = event.sender;
   var space = o._activeSpace = canvas.activeSpace();
   o._catalogContent.buildSpace(space);
}

//==========================================================
// <T>目录对象选择处理。</T>
//
// @method
// @param select:FObject 选择对象
// @param flag:Boolean 选择标志
//==========================================================
MO.FDsTemplateFrameSet_onCatalogSelected = function FDsTemplateFrameSet_onCatalogSelected(select, flag){
   var o = this;
   // 检查空间
   var space = o._activeSpace;
   if(!space){
      return;
   }
   // 隐藏所有属性面板
   o.hidePropertyFrames();
   // 显示选中属性面板
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

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsTemplateFrameSet_construct = function FDsTemplateFrameSet_construct(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.construct.call(o);
}

//==========================================================
// <T>根据唯一编码加载模板。</T>
//
// @method
// @param guid:String 唯一编码
//==========================================================
MO.FDsTemplateFrameSet_loadByGuid = function FDsTemplateFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._canvasContent.loadByGuid(guid);
}

//==========================================================
// <T>根据代码加载模板。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FDsTemplateFrameSet_loadByCode = function FDsTemplateFrameSet_loadByCode(code){
   var o = this;
   o._activeCode = code;
   o._canvasContent.loadByCode(code);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsTemplateFrameSet_dispose = function FDsTemplateFrameSet_dispose(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.dispose.call(o);
}
