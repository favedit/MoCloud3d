//==========================================================
// <T>场景画板内容。</T>
//
// @class
// @author maocy
// @history 150428
//==========================================================
MO.FDsSceneCanvasContent = function FDsSceneCanvasContent(o){
   o = MO.Class.inherits(this, o, MO.FDsSpaceDesignCanvas);
   //..........................................................
   // @attribute
   o._resourceTypeCd = MO.EE3sResource.Scene;
   //..........................................................
   // @event
   o.onDataLoaded    = MO.FDsSceneCanvasContent_onDataLoaded;
   //..........................................................
   // @method
   o.load            = MO.FDsSceneCanvasContent_load;
   o.loadByGuid      = MO.FDsSceneCanvasContent_loadByGuid;
   o.loadByCode      = MO.FDsSceneCanvasContent_loadByCode;
   // @method
   o.dispose         = MO.FDsSceneCanvasContent_dispose;
   return o;
}

//==========================================================
// <T>加载数据处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDsSceneCanvasContent_onDataLoaded = function FDsSceneCanvasContent_onDataLoaded(event){
   var o = this;
   var space = o._activeSpace;
   //var context = o._graphicContext;
   //space._layer.pushRenderable(o._dimensional);
   // 创建界面层
   //var l = MO.Class.create(FDisplayUiLayer);
   //l.selectTechnique(c, FG3dControlTechnique);
   //l.pushDisplay(o._templateTranslation);
   //l.pushDisplay(o._templateRotation);
   //l.pushDisplay(o._templateScale);
   //s.registerLayer('ui', l);
   o.reloadRegion()
   // 加载完成事件
   var event = MO.Memory.alloc(MO.SEvent);
   event.sender = o;
   event.space = space;
   o.processLoadListener(event);
   MO.Memory.free(event);
   // 刷新空间
   o.refreshSpace();
   // 隐藏处理
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}

//==========================================================
// <T>根据唯一编号加载场景。</T>
//
// @method
// @param args:SArgs 参数
// @return FE3dSpace 空间对象
//==========================================================
MO.FDsSceneCanvasContent_load = function FDsSceneCanvasContent_load(args){
   var o = this;
   // 释放场景
   var space = o._activeSpace;
   var sceneConsole = MO.Console.find(MO.FE3dSceneConsole);
   if(space){
      sceneConsole.free(space);
   }
   // 收集一个显示模板
   var guid = args.guid;
   if(!MO.Lang.String.isEmpty(guid)){
      space = o._activeSpace = sceneConsole.allocByGuid(o, guid);
   }
   var code = args.code;
   if(!MO.Lang.String.isEmpty(code)){
      space = o._activeSpace = sceneConsole.allocByCode(o, code);
   }
   // 关联场景
   if(!space._linked){
      // 显示加载进度
      MO.Console.find(MO.FDuiDesktopConsole).showLoading();
      // 设置事件
      space.addLoadListener(o, o.onDataLoaded);
      space._linked = true;
   }
   return space;
}

//==========================================================
// <T>根据唯一编号加载场景。</T>
//
// @method
// @param guid:String 唯一编号
// @return FE3dSpace 空间对象
//==========================================================
MO.FDsSceneCanvasContent_loadByGuid = function FDsSceneCanvasContent_loadByGuid(guid){
   var o = this;
   var args = MO.Memory.alloc(MO.SArgs)
   args.guid = guid;
   var space = o.load(args);
   MO.Memory.free(args)
   return space;
}

//==========================================================
// <T>根据代码加载场景。</T>
//
// @method
// @param code:String 代码
// @return FE3dSpace 空间对象
//==========================================================
MO.FDsSceneCanvasContent_loadByCode = function FDsSceneCanvasContent_loadByCode(code){
   var o = this;
   var args = MO.Memory.alloc(MO.SArgs)
   args.code = code;
   var space = o.load(args);
   MO.Memory.free(args)
   return space;
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsSceneCanvasContent_dispose = function FDsSceneCanvasContent_dispose(){
   var o = this;
   o.__base.FDsSpaceDesignCanvas.dispose.call(o);
}
