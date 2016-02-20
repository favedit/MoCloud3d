module sk.core {
   //==========================================================
   // <T>后台服务基类。</T>
   //
   // @reference
   // @author maocy
   // @version 141231
   //==========================================================
   export class FConsole extends sk.common.lang.FObject {
      //..........................................................
      // @attribute
      //protected _scopeCd = MO.Class.register(o, new MO.AGetter('_scopeCd'), MO.EScope.Global);
      protected _scopeCd = sk.common.lang.EScope.Global;
      // @attribute
      protected _statusSetup: boolean = false;
      //..........................................................
      // @event
      public onSetup: Function = sk.common.reflect.RMethod.empty;

      //==========================================================
      // <T>配置处理。</T>
      //
      // @method
      //==========================================================
      public setup() {
         var o = this;
         if (!o._statusSetup) {
            o.onSetup();
            o._statusSetup = true;
         }
      }
   }
}