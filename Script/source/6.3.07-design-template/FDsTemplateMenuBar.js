//==========================================================
// <T>模板菜单栏。</T>
//
// @class
// @author maocy
// @history 150416
//==========================================================
MO.FDsTemplateMenuBar = function FDsTemplateMenuBar(o){
   o = MO.Class.inherits(this, o, MO.FDuiMenuBar);
   //..........................................................
   // @attribute
   o._controlSave           = null;
   o._controlCapture        = null;
   o._controlSelectMaterial = null;
   o._controlCreateDisplay  = null;
   o._controlDelete         = null;
   //..........................................................
   // @event
   o.onSaveLoad            = MO.FDsTemplateMenuBar_onSaveLoad;
   o.onSaveClick           = MO.FDsTemplateMenuBar_onSaveClick;
   o.onCaptureLoad         = MO.FDsTemplateMenuBar_onCaptureLoad;
   o.onCaptureClick        = MO.FDsTemplateMenuBar_onCaptureClick;
   o.onSelectMaterialClick = MO.FDsTemplateMenuBar_onSelectMaterialClick;
   o.onCreateDisplayClick  = MO.FDsTemplateMenuBar_onCreateDisplayClick;
   o.onDeleteClick         = MO.FDsTemplateMenuBar_onDeleteClick;
   //..........................................................
   // @method
   o.construct             = MO.FDsTemplateMenuBar_construct;
   // @method
   o.dispose               = MO.FDsTemplateMenuBar_dispose;
   return o;
}

//==========================================================
// <T>保存按键加载处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onSaveLoad = function FDsTemplateMenuBar_onSaveLoad(event){
   // 解除画面锁定
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}

//==========================================================
// <T>保存按键处理。</T>
//
// @method
// @param p:event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onSaveClick = function FDsTemplateMenuBar_onSaveClick(p){
   var o = this;
   var space = o._frameSet._activeSpace;
   var resource = space.resource();
   // 画面禁止操作
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   // 存储配置
   var xconfig = new MO.TXmlNode();
   resource.saveConfig(xconfig);
   // 更新处理
   var connection = MO.Console.find(MO.FDrTemplateConsole).update(xconfig);
   connection.addLoadListener(o, o.onSaveLoad);
}

//==========================================================
// <T>捕捉图像加载处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onCaptureLoad = function FDsTemplateMenuBar_onCaptureLoad(event){
   // 解除画面锁定
   MO.Console.find(MO.FDuiDesktopConsole).hide();
}

//==========================================================
// <T>捕捉图像处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onCaptureClick = function FDsTemplateMenuBar_onCaptureClick(event){
   var o = this;
   // 画面禁止操作
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   // 上传数据
   var canvas = o._frameSet._canvasContent;
   var connection = canvas.capture();
   connection.addLoadListener(o, o.onCaptureLoad);
}

//==========================================================
// <T>新建点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onSelectMaterialClick = function FDsTemplateMenuBar_onSelectMaterialClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   // 显示对话框
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonMaterialDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}

//==========================================================
// <T>新建点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onCreateDisplayClick = function FDsTemplateMenuBar_onCreateDisplayClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   // 显示对话框
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonDisplayDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setSpace(space);
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}

//==========================================================
// <T>删除点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsTemplateMenuBar_onDeleteClick = function FDsTemplateMenuBar_onDeleteClick(event){
   var o = this;
   var frameSet = o._frameSet;
   var space = frameSet._activeSpace;
   // 显示对话框
   var dialog = MO.Console.find(MO.FDuiWindowConsole).find(MO.FDsCommonDisplayDialog);
   dialog._frameSet = frameSet;
   dialog._spaceGuid = space.resource().guid();
   dialog.setContentCode('');
   dialog.setContentLabel('');
   dialog.showPosition(MO.EUiPosition.Center);
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsTemplateMenuBar_construct = function FDsTemplateMenuBar_construct(){
   var o = this;
   // 父处理
   o.__base.FDuiMenuBar.construct.call(o);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsTemplateMenuBar_dispose = function FDsTemplateMenuBar_dispose(){
   var o = this;
   // 父处理
   o.__base.FDuiMenuBar.dispose.call(o);
}
