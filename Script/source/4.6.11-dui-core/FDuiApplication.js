//==========================================================
// <T>界面应用。</T>
//
// @class
// @author maocy
// @version 150714
//==========================================================
MO.FDuiApplication = function FDuiApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   //..........................................................
   // @style
   o._activeWorkspace = MO.Class.register(o, new MO.AGetter('_activeWorkspace'));
   o._workspaces      = MO.Class.register(o, new MO.AGetter('_workspaces'));
   //..........................................................
   // @event
   o.onOperationResize = MO.FDuiApplication_onOperationResize;
   o.onProcess         = MO.FDuiApplication_onProcess;
   //..........................................................
   // @method
   o.construct        = MO.FDuiApplication_construct;
   // @method
   o.selectWorkspace  = MO.FDuiApplication_selectWorkspace;
   // @method
   o.dispose          = MO.FDuiApplication_dispose;
   return o;
}

//==========================================================
// <T>操作改变大小处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDuiApplication_onOperationResize = function FDuiApplication_onOperationResize(event){
   var o = this;
   o.__base.FApplication.onOperationResize.call(o, event);
   // 工作空间处理
   var workspace = o._activeWorkspace;
   if(workspace){
      workspace.psResize();
   }
}

//==========================================================
// <T>逻辑事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDuiApplication_onProcess = function FDuiApplication_onProcess(event){
   var o = this;
   o.__base.FApplication.onProcess.call(o, event);
   // 工作空间处理
   var workspace = o._activeWorkspace
   if(workspace){
      workspace.psFrame();
   }
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDuiApplication_construct = function FDuiApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
   // 设置变量
   o._workspaces = new MO.TDictionary();
}

//==========================================================
// <T>增加一个控件。</T>
//
// @method
// @param control:FDuiControl 控件
//==========================================================
MO.FDuiApplication_selectWorkspace = function FDuiApplication_selectWorkspace(clazz){
   var o = this;
   var workspace = o._activeWorkspace = MO.Class.create(clazz);
   return workspace;
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDuiApplication_dispose = function FDuiApplication_dispose(){
   var o = this;
   // 释放变量
   o._workspaces = MO.Lang.Object.dispose(o._workspaces, true);
   // 父处理
   o.__base.FApplication.dispose.call(o);
}
