module sk.common.reflect {
   //==========================================================
   // <T>关联描述类。</T>
   //
   // @property
   // @param name:String 名称
   // @param linker:String 关联名称
   // @author maocy
   // @version 141231
   //==========================================================
   export class ALinker {
      inherit = true;
      annotation = EAnnotation.Linker;
      name = null;
      linker = null;

      constructor(name, linker) {
         this.name = name;
         this.linker = linker;
      }
   }
}