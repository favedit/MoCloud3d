module sk.common.lang {
   //==========================================================
   // <T>监听器的工具类。</T>
   //
   // @tool
   // @author maocy
   // @version 141229
   //==========================================================
   export class FListener {
      //..........................................................
      // @attribute
      _owner: any = null;
      _callback: Function = null;

      //==========================================================
      // <T>监听器的工具类。</T>
      // <P>响应处理时最多可以带5个参数。</P>
      //
      // @method
      // @param sender:发出对象
      // @param parameter1:Object 参数1
      // @param parameter2:Object 参数2
      // @param parameter3:Object 参数3
      // @param parameter4:Object 参数4
      // @param parameter5:Object 参数5
      //==========================================================
      public process(sender, parameter1, parameter2, parameter3, parameter4, parameter5) {
         var o = this;
         var owner = o._owner ? o._owner : o;
         //try{
         o._callback.call(owner, sender, parameter1, parameter2, parameter3, parameter4, parameter5);
         //}catch(error){
         //   MO.Logger.fatal(o, error, 'Listener process failure. (owner={1})', owner);
         //}
      }

      //==========================================================
      // <T>获得字符串信息。</T>
      //
      // @method
      // @return String 字符串信息
      //==========================================================
      public toString() {
         var o = this;
         return sk.common.reflect.RClass.name(o) + '(owner=' + sk.common.reflect.RClass.name(o._owner) + ', callback=' + sk.common.reflect.RMethod.name(o._callback) + ')';
      }

      //============================================================
      // <T>释放处理。</T>
      //
      // @method
      //============================================================
      public dispose() {
         var o = this;
         o._owner = null;
         o._callback = null;
         RObject.free(o);
      }
   }
}
