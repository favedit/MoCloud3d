//==========================================================
// <T>参数。</T>
//
// @struct
// @author maocy
// @version 151229
//==========================================================
MO.SArgs = function SArgs(){
   var o = this;
   //..........................................................
   // @method
   o.free    = MO.Method.freeStruct;
   o.dispose = MO.Method.disposeStruct;
   return o;
}
