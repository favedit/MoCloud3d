//==========================================================
// <T>事件信息类。</T>
//
// @struct
// @author maocy
// @version 150113
//==========================================================
MO.SEvent = function SEvent(sender){
   var o = this;
   //..........................................................
   // @attribute
   o.code       = null;
   // @attribute
   o.annotation = null;
   // @attribute
   o.listener   = null;
   o.sender     = sender;
   o.source     = null;
   // @attribute
   o.hEvent     = null;
   o.hSender    = null;
   o.hSource    = null;
   //..........................................................
   // @method
   o.ohProcess  = null;
   o.onProcess  = null;
   // @method
   o.process    = null;
   // @method
   o.free       = MO.Method.disposeStruct;
   o.dispose    = MO.Method.disposeStruct;
   return o;
}
