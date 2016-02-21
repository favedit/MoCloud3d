module sk.common.device {
   //==========================================================
   // <T>单击事件类。</T>
   //
   // @struct
   // @author maocy
   // @version 150327
   //==========================================================
   export class SClickEvent extends sk.common.lang.SEvent {
      constructor(sender) {
         super(sender);
      }
   }
}