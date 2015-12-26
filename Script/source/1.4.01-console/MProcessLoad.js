//==========================================================
// <T>处理加载对象。</T>
//
// @author maocy
// @history 151226
//==========================================================
MO.MProcessLoad = function MProcessLoad(o){
   o = MO.Class.inherits(this, o);
   //..........................................................
   // @attribute
   o._statusLoading   = MO.Class.register(o, new MO.AGetter('_statusLoading'));
   //..........................................................
   // @method
   o.construct        = MO.MProcessLoad_construct;
   // @method
   o.processLoadBegin = MO.MProcessLoad_processLoadBegin;
   o.processLoad      = MO.Method.emptyTrue;
   o.processLoadEnd   = MO.MProcessLoad_processLoadEnd;
   // @method
   o.dispose          = MO.MProcessLoad_dispose;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.MProcessLoad_construct = function MProcessLoad_construct(){
   var o = this;
}

//==========================================================
// <T>处理加载开始。</T>
//
// @method
//==========================================================
MO.MProcessLoad_processLoadBegin = function MProcessLoad_processLoadBegin(){
   this._statusLoading = true;
}

//==========================================================
// <T>处理加载结束。</T>
//
// @method
//==========================================================
MO.MProcessLoad_processLoadEnd = function MProcessLoad_processLoadEnd(){
   this._statusLoading = false;
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.MProcessLoad_dispose = function MProcessLoad_dispose(){
   var o = this;
}
