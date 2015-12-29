//==========================================================
// <T>设计应用。</T>
//
// @class
// @author maocy
// @version 151229
//==========================================================
MO.FDsApplication = function FDsApplication(o){
   o = MO.Class.inherits(this, o, MO.FDuiApplication);
   //..........................................................
   // @method
   o.construct  = MO.FDsApplication_construct;
   o.initialize = MO.FDsApplication_initialize;
   o.dispose    = MO.FDsApplication_dispose;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsApplication_construct = function FDsApplication_construct(){
   var o = this;
   o.__base.FDuiApplication.construct.call(o);
}

//==========================================================
// <T>配置处理。</T>
//
// @method
//==========================================================
MO.FDsApplication_initialize = function FDsApplication_initialize(){
   var o = this;
   o.__base.FDuiApplication.initialize.call(o);
   // 设置处理
   MO.Engine3d.setup();
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FDsApplication_dispose = function FDsApplication_dispose(){
   var o = this;
   o.__base.FDuiApplication.dispose.call(o);
}
