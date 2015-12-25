//==========================================================
// <T>进度处理控制台。</T>
//
// @console
// @author maocy
// @history 151223
//==========================================================
MO.FProgressConsole = function FProgressConsole(o){
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
   o.onProcess   = MO.FProgressConsole_onProcess;
   //..........................................................
   // @method
   o.construct   = MO.FProgressConsole_construct;
   // @method
   o.push        = MO.FProgressConsole_push;
   // @method
   o.dispose     = MO.FProgressConsole_dispose;
   return o;
}

//==========================================================
// <T>逻辑处理。</T>
//
// @method
//==========================================================
MO.FProgressConsole_onProcess = function FProgressConsole_onProcess(){
   var o = this;
   var looper = o._looper;
   looper.record();
   while(looper.next()){
      var item = looper.current();
      if(item.processLoad()){
         looper.removeCurrent();
      }
   }
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FProgressConsole_construct = function FProgressConsole_construct(){
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
// <T>增加一个进度处理器。</T>
//
// @method
// @param progress:MProgress 进度处理器
//==========================================================
MO.FProgressConsole_push = function FProgressConsole_push(progress){
   o._looper.push(progress);
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FProgressConsole_dispose = function FProgressConsole_dispose(){
   var o = this;
   o.__base.FConsole.dispose.call(o);
}
