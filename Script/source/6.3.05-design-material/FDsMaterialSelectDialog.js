//==========================================================
// <T>设计材质选择对话框。</T>
//
// @class
// @author maocy
// @history 150428
//==========================================================
MO.FDsMaterialSelectDialog = function FDsMaterialSelectDialog(o){
   o = MO.Class.inherits(this, o, MO.FDuiDialog);
   //..........................................................
   // @property
   o._frameName            = 'resource.material.SelectDialog';
   //..........................................................
   // @attribute
   o._nodeGuid             = null;
   // @attribute
   o._controlPrivateButton = null;
   o._controlTeamButton    = null;
   o._controlShareButton   = null;
   //..........................................................
   // @event
   o.onBuilded             = MO.FDsMaterialSelectDialog_onBuilded;
   // @event
   o.onFileLoaded          = MO.FDsMaterialSelectDialog_onFileLoaded;
   o.onConfirmLoad         = MO.FDsMaterialSelectDialog_onConfirmLoad;
   o.onConfirmClick        = MO.FDsMaterialSelectDialog_onConfirmClick;
   o.onCancelClick         = MO.FDsMaterialSelectDialog_onCancelClick;
   //..........................................................
   // @method
   o.construct             = MO.FDsMaterialSelectDialog_construct;
   // @method
   o.dispose               = MO.FDsMaterialSelectDialog_dispose;
   return o;
}

//==========================================================
// <T>构建完成处理。</T>
//
// @method
// @param event:TEventProcess 事件处理
//==========================================================
MO.FDsMaterialSelectDialog_onBuilded = function FDsMaterialSelectDialog_onBuilded(event){
   var o = this;
   o.__base.FDuiDialog.onBuilded.call(o, event);
   //..........................................................
   // 注册事件
   o._controlConfirmButton.addClickListener(o, o.onConfirmClick);
   o._controlCancelButton.addClickListener(o, o.onCancelClick);
}

//==========================================================
// <T>文件加载完成。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsMaterialSelectDialog_onFileLoaded = function FDsMaterialSelectDialog_onFileLoaded(event){
   var o = this;
   var reader = o._fileReader;
   // 获得参数
   var resource = o._resource;
   var guid = resource.guid();
   // 上传数据
   var url = '/cloud.resource.material.wv?do=importData&guid=' + guid + '&data_length=' + reader.length() + '&file_name=' + reader.fileName();
   url = MO.RBrowser.urlEncode(url);
   // 发送数据
   var connection = MO.Console.find(MO.FHttpConsole).send(url, reader.data());
   connection.addLoadListener(o, o.onConfirmLoad);
   // 释放文件
   o._fileReader = MO.Lang.Object.dispose(reader);
}

//==========================================================
// <T>按键点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsMaterialSelectDialog_onConfirmLoad = function FDsMaterialSelectDialog_onConfirmLoad(event){
   var o = this;
   // 隐藏窗口
   MO.Console.find(MO.FDuiDesktopConsole).hide();
   // 隐藏窗口
   o.hide();
   // 刷新搜索内容
   o._frameSet.reload();
}

//==========================================================
// <T>按键点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsMaterialSelectDialog_onConfirmClick = function FDsMaterialSelectDialog_onConfirmClick(event){
   var o = this;
   // 画面禁止操作
   MO.Console.find(MO.FDuiDesktopConsole).showUploading();
   // 加载文件数据
   var file = o._controlFile._hInput.files[0];
   var reader = o._fileReader = MO.Class.create(MO.FFileReader);
   reader.addLoadListener(o, o.onFileLoaded);
   reader.loadFile(file);
}

//==========================================================
// <T>按键点击处理。</T>
//
// @method
// @param event:SEvent 事件
//==========================================================
MO.FDsMaterialSelectDialog_onCancelClick = function FDsMaterialSelectDialog_onCancelClick(event){
   this.hide();
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsMaterialSelectDialog_construct = function FDsMaterialSelectDialog_construct(){
   var o = this;
   // 父处理
   o.__base.FDuiDialog.construct.call(o);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsMaterialSelectDialog_dispose = function FDsMaterialSelectDialog_dispose(){
   var o = this;
   // 父处理
   o.__base.FDuiDialog.dispose.call(o);
}
