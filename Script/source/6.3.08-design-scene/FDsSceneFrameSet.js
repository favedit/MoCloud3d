//==========================================================
// <T>场景框架。</T>
//
// @class
// @author maocy
// @history 150121
//==========================================================
MO.FDsSceneFrameSet = function FDsSceneFrameSet(o){
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
   o.onBuilded             = MO.FDsSceneFrameSet_onBuilded;
   o.onDataLoaded          = MO.FDsSceneFrameSet_onDataLoaded;
   o.onCatalogSelected     = MO.FDsSceneFrameSet_onCatalogSelected;
   //..........................................................
   // @method
   o.construct             = MO.FDsSceneFrameSet_construct;
   // @method
   o.loadByGuid            = MO.FDsSceneFrameSet_loadByGuid;
   o.loadByCode            = MO.FDsSceneFrameSet_loadByCode;
   // @method
   o.dispose               = MO.FDsSceneFrameSet_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param event:TEventProcess 事件处理
//==========================================================
MO.FDsSceneFrameSet_onBuilded = function FDsSceneFrameSet_onBuilded(event){
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
   //..........................................................
   // 设置实例工厂
   var sceneConsole = MO.Console.find(MO.FE3dInstanceConsole);
   sceneConsole.register(MO.EE3dInstance.TemplateRenderable, MO.FDsSceneRenderable);
   sceneConsole.register(MO.EE3dInstance.SceneLayer, MO.FDsSceneLayer);
   sceneConsole.register(MO.EE3dInstance.SceneDisplay, MO.FDsSceneDisplay);
   sceneConsole.register(MO.EE3dInstance.SceneRenderable, MO.FDsSceneRenderable);
}

//==========================================================
// <T>加载数据处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDsSceneFrameSet_onDataLoaded = function FDsSceneFrameSet_onDataLoaded(event){
   var o = this;
   // 加载完成
   var space = o._activeSpace = event.space;
   o._catalogContent.buildSpace(space);
}

//==========================================================
// <T>目录对象选择处理。</T>
//
// @method
// @param select:FObject 选择对象
// @param flag:Boolean 选择标志
//==========================================================
MO.FDsSceneFrameSet_onCatalogSelected = function FDsSceneFrameSet_onCatalogSelected(select, flag){
   var o = this;
   // 检查空间
   var space = o._activeSpace;
   if(!space){
      return;
   }
   var canvas = o._canvasContent;
   // 隐藏所有属性面板
   o.hidePropertyFrames();
   // 显示选中属性面板
   if(select == 'layers'){
      // 选中显示层集合
      if(flag){
         canvas.selectLayers(select);
      }
   }else if(MO.Class.isClass(select, MO.FE3dSceneLayer)){
      // 选中显示层
      if(flag){
         canvas.selectLayer(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonLayerPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dSceneDisplay)){
      // 选中显示对象
      if(flag){
         canvas.selectDisplay(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonDisplayPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dSceneMaterial)){
      // 选中材质
      if(flag){
         canvas.selectMaterial(select);
      }
      var frame = o.findPropertyFrame(MO.EDsFrame.CommonMaterialPropertyFrame);
      frame.show();
      frame.loadObject(space, select);
   }else if(MO.Class.isClass(select, MO.FE3dRenderable)){
      // 选中渲染对象
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

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsSceneFrameSet_construct = function FDsSceneFrameSet_construct(){
   var o = this;
   o.__base.FDsFrameSet.construct.call(o);
   // 注册属性页面
   o.registerPropertyFrame(MO.FE3dScene, MO.EDsFrame.CommonSpacePropertyFrame);
   o.registerPropertyFrame(MO.FG3dTechnique, MO.EDsFrame.CommonTechniquePropertyFrame);
   o.registerPropertyFrame(MO.FE3dRegion, MO.EDsFrame.CommonRegionPropertyFrame);
   o.registerPropertyFrame(MO.FE3dCamera, MO.EDsFrame.CommonCameraPropertyFrame);
   o.registerPropertyFrame(MO.FG3dDirectionalLight, MO.EDsFrame.CommonLightPropertyFrame);
   o.registerPropertyFrame(MO.FE3dAnimation, MO.EDsFrame.CommonAnimationPropertyFrame);
   o.registerPropertyFrame(MO.FE3dMovie, MO.EDsFrame.CommonMoviePropertyFrame);
}

//==========================================================
// <T>根据唯一编码加载场景。</T>
//
// @method
// @param guid:String 唯一编码
//==========================================================
MO.FDsSceneFrameSet_loadByGuid = function FDsSceneFrameSet_loadByGuid(guid){
   var o = this;
   o._activeGuid = guid;
   o._canvasContent.loadByGuid(guid);
}

//==========================================================
// <T>根据代码加载场景。</T>
//
// @method
// @param code:String 代码
//==========================================================
MO.FDsSceneFrameSet_loadByCode = function FDsSceneFrameSet_loadByCode(code){
   var o = this;
   o._avtiveCode = code;
   o._canvasContent.loadByCode(code);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsSceneFrameSet_dispose = function FDsSceneFrameSet_dispose(){
   var o = this;
   // 父处理
   o.__base.FDsFrameSet.dispose.call(o);
}
