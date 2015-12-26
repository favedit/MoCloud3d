//==========================================================
// <T>工作空间应用。</T>
//
// @class
// @author maocy
// @version 150714
//==========================================================
MO.FDuiWorkspaceApplication = function FDuiWorkspaceApplication(o){
   o = MO.Class.inherits(this, o, MO.FApplication);
   //..........................................................
   // @style
   o._workspaces      = MO.Class.register(o, new MO.AGetter('_workspaces'));
   o._activeWorkspace = MO.Class.register(o, new MO.AGetter('_activeWorkspace'));
   //..........................................................
   // @event
   o.onProcess        = MO.FDuiWorkspaceApplication_onProcess;
   //..........................................................
   // @method
   o.construct        = MO.FDuiWorkspaceApplication_construct;
   o.initialize       = MO.FDuiWorkspaceApplication_initialize;
   // @method
   o.selectWorkspace  = MO.FDuiWorkspaceApplication_selectWorkspace;
   // @method
   o.dispose          = MO.FDuiWorkspaceApplication_dispose;
   return o;
}

//==========================================================
// <T>逻辑事件处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FDuiWorkspaceApplication_onProcess = function FDuiWorkspaceApplication_onProcess(){
   var o = this;
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
MO.FDuiWorkspaceApplication_construct = function FDuiWorkspaceApplication_construct(){
   var o = this;
   o.__base.FApplication.construct.call(o);
   // 设置变量
   o._workspaces = new MO.TDictionary();
}

//==========================================================
// <T>配置处理。</T>
//
// @method
//==========================================================
MO.FDuiWorkspaceApplication_initialize = function FDuiWorkspaceApplication_initialize(){
   var o = this;
   o.__base.FApplication.initialize.call(o);
   // 设置处理
   MO.RE3dEngine.setup();
}

//==========================================================
// <T>增加一个控件。</T>
//
// @method
// @param control:FDuiControl 控件
//==========================================================
MO.FDuiWorkspaceApplication_selectWorkspace = function FDuiWorkspaceApplication_selectWorkspace(clazz){
   var o = this;
   var workspace = o._activeWorkspace = MO.Class.create(clazz);
   return workspace;
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDuiWorkspaceApplication_dispose = function FDuiWorkspaceApplication_dispose(){
   var o = this;
   // 释放变量
   o._workspaces = MO.Lang.Object.dispose(o._workspaces, true);
   // 父处理
   o.__base.FApplication.dispose.call(o);
}
