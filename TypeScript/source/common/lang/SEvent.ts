module sk.common.lang {

   //==========================================================
   // <T>事件信息类。</T>
   //
   // @struct
   // @author maocy
   // @version 150113
   //==========================================================
   export class SEvent {
      //..........................................................
      // @attribute
      code = null;
      // @attribute
      annotation = null;
      // @attribute
      listener = null;
      sender = null;
      source = null;
      // @attribute
      hEvent = null;
      hSender = null;
      hSource = null;
      //..........................................................
      // @method
      ohProcess = null;
      onProcess = null;
      // @method
      process = null;
      // @method
      //free = sk.common.lang.RObject.fre . RMethod.freeStruct;
      //dispose = sk.common.reflect.RMethod.disposeStruct;

      constructor(sender) {
         this.sender = sender;
      }
   }
}