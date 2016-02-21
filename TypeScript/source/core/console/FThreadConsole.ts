module sk.core.console {
   //==========================================================
   // <T>线程控制台。</T>
   //
   // @console
   // @author maocy
   // @version 150105
   //==========================================================
   export class FThreadConsole extends sk.core.FConsole {
      // @attribute
      protected _scopeCd = sk.common.lang.EScope.Global;
      // @attribute
      protected _active:boolean = true;
      protected _requestFlag:boolean = false;
      protected _interval:number = 5;
      //_threads = MO.Class.register(o, new MO.AGetter('_threads'));
      protected _threads:sk.common.lang.FObjects = new sk.common.lang.FObjects();
      //..........................................................
      // @html
      protected _hIntervalId = null;

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
         // 设置回调
         //var flag = o._requestFlag = MO.Window.requestAnimationFrame(o.ohInterval);
         //if(!flag){
         //o._hIntervalId = MO.Window.htmlWindow().setInterval(o.ohInterval, o._interval);
         //}
      }

      //==========================================================
      // <T>间隔回调处理。</T>
      //
      // @method
      //==========================================================
      public ohInterval() {
         //var threadConsole = MO.Console.find(MO.FThreadConsole);
         // MO.Logger.debug(threadConsole, 'Frame start ----------------------------');
         //threadConsole.processAll();
      }

      //==========================================================
      // <T>增加一个新线程。</T>
      //
      // @method
      // @param thread:FThread 线程
      //==========================================================
      public push(thread) {
         this._threads.push(thread);
      }

      //==========================================================
      // <T>启动一个新线程。</T>
      //
      // @method
      // @param thread:FThread 线程
      //==========================================================
      public start(thread) {
         thread.start();
         this._threads.push(thread);
      }

      //==========================================================
      // <T>处理一个线程,。</T>
      //
      // @method
      // @param thread:FThread 线程
      //==========================================================
      public process(thread) {
         var o = this;
         if (thread) {
            var statusCd = thread.statusCd();
            switch (statusCd) {
               case EThreadStatus.Sleep:
                  break;
               case EThreadStatus.Active:
                  thread.process(o._interval);
                  break;
               case EThreadStatus.Finish:
                  o._threads.remove(thread);
                  thread.dispose();
                  break;
            }
         }
      }

      //==========================================================
      // <T>处理所有线程,。</T>
      //
      // @method
      //==========================================================
      public processAll() {
         var o = this;
         // 激活处理
         if (o._active) {
            var threads = o._threads;
            var count = threads.count();
            //try{
            for (var i = 0; i < count; i++) {
               var thread = threads.at(i);
               o.process(thread);
            }
            //}catch(error){
            //   MO.Logger.fatal(o, error, 'Thread process failure. (thread_count={1})', count);
            //}
         }
         // 安装下一帧处理
         if (o._requestFlag) {
            //MO.Window.requestAnimationFrame(o.ohInterval);
         }
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放属性
         if (this._requestFlag) {
            //MO.Window.cancelRequestAnimationFrame(o.ohInterval);
         } else {
            //var hIntervalId = o._hIntervalId;
            //if (hIntervalId) {
               //MO.Window.htmlWindow().clearInterval(hIntervalId);
               //o._hIntervalId = null;
            //}
         }
         //o._threads = MO.Lang.Object.dispose(o._threads);
         // 父处理
         super.dispose();
      }
   }
}
