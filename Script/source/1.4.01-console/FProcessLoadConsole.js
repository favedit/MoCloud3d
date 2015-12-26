//==========================================================
// <T>处理加载控制台。</T>
//
// @console
// @author maocy
// @history 151226
//==========================================================
MO.FProcessLoadConsole = function FProcessLoadConsole(o){
   o = MO.Class.inherits(this, o, MO.FConsole);
   //..........................................................
   // @attribute
   o._scopeCd    = MO.EScope.Local;
   // @attribute
   o._looper     = null;
   // @attribute
   o._thread     = null;
   o._interval   = 100;
   //..........................................................
   // @event
   o.onProcess   = MO.FProcessLoadConsole_onProcess;
   //..........................................................
   // @method
   o.construct   = MO.FProcessLoadConsole_construct;
   // @method
   o.push        = MO.FProcessLoadConsole_push;
   // @method
   o.dispose     = MO.FProcessLoadConsole_dispose;
   return o;
}

//==========================================================
// <T>逻辑处理。</T>
//
// @method
//==========================================================
MO.FProcessLoadConsole_onProcess = function FProcessLoadConsole_onProcess(){
   var o = this;
   var looper = o._looper;
   looper.record();
   while(looper.next()){
      var item = looper.current();
      // 开始处理
      if(!item.statusLoading()){
         item.processLoadBegin();
      }
      // 逻辑处理
      if(item.processLoad()){
         looper.removeCurrent();
         // 处理完成
         item.processLoadEnd();
      }
   }
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FProcessLoadConsole_construct = function FProcessLoadConsole_construct(){
   var o = this;
   o.__base.FConsole.construct.call(o);
   // 设置属性
   o._looper = new MO.TLooper();
   // 创建线程
   var thread = o._thread = MO.Class.create(MO.FThread);
   thread.setInterval(o._interval);
   thread.addProcessListener(o, o.onProcess);
   MO.Console.find(MO.FThreadConsole).start(thread);
}

//==========================================================
// <T>增加一个加载处理器。</T>
//
// @method
// @param load:MProcessLoad 进度处理器
//==========================================================
MO.FProcessLoadConsole_push = function FProcessLoadConsole_push(load){
   this._looper.push(load);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FProcessLoadConsole_dispose = function FProcessLoadConsole_dispose(){
   var o = this;
   o.__base.FConsole.dispose.call(o);
}
