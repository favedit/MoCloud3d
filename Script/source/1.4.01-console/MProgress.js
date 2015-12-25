//==========================================================
// <T>进度处理对象。</T>
//
// @author maocy
// @history 151223
//==========================================================
MO.MProgress = function MProgress(o){
   o = MO.Class.inherits(this, o);
   //..........................................................
   // @attribute
   //..........................................................
   // @method
   o.construct       = MO.MProgress_construct;
   // @method
   o.processProgress = MO.Method.emptyTrue;
   // @method
   o.dispose         = MO.MProgress_dispose;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.MProgress_construct = function MProgress_construct(){
   var o = this;
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.MProgress_dispose = function MProgress_dispose(){
   var o = this;
}
