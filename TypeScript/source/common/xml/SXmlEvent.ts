module sk.common.xml {
   //==========================================================
   // <T>配置事件信息类。</T>
   //
   // @struct
   // @author maocy
   // @version 150120
   //==========================================================
   export class SXmlEvent extends sk.common.lang.SEvent {
      //..........................................................
      // @attribute
      connection = null;
      document = null;
      root = null;
   }
}