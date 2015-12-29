//==========================================================
// <T>属性页面定义。</T>
//
// @author maocy
// @history 151229
//==========================================================
MO.SDsPropertyFrame = function SDsPropertyFrame(){
   var o = this;
   //..........................................................
   // @attribute
   o.clazz   = null;
   o.name    = null;
   // @attribute
   o.frame   = null;
   //..........................................................
   // @method
   o.dispose = MO.Method.disposeStruct;
   return o;
}
