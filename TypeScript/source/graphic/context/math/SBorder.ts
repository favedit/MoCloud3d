﻿module sk.graphic.context.math {
   //==========================================================
   // <T>边框。</T>
   //
   // @struct
   // @author maocy
   // @version 150611
   //==========================================================
   export class SBorder {
      // @attribute
      public valid: boolean = false;
      public left: SBorderLine = new SBorderLine();
      public top: SBorderLine = new SBorderLine();
      public right: SBorderLine = new SBorderLine();
      public bottom: SBorderLine = new SBorderLine();

      //============================================================
      // <T>解析字符串。</T>
      //
      // @param source:String 字符串
      //============================================================
      public parse(source) {
         var o = this;
         var items = source.split(',')
         if (items.length == 4) {
            o.left.parse(items[0]);
            o.top.parse(items[1]);
            o.right.parse(items[2]);
            o.bottom.parse(items[3]);
         } else {
            throw new sk.common.lang.FError(o, "Parse value failure. (source={1})", source);
         }
      }

      //============================================================
      // <T>获得字符串。</T>
      //
      // @return String 字符串
      //============================================================
      public toString() {
         var o = this;
         return o.left + ',' + o.top + ',' + o.right + ',' + o.bottom;
      }

      //============================================================
      // <T>释放处理。</T>
      //
      // @method
      //============================================================
      public dispose() {
         this.left = sk.common.lang.RObject.dispose(this.left)
         this.top = sk.common.lang.RObject.dispose(this.top)
         this.right = sk.common.lang.RObject.dispose(this.right)
         this.bottom = sk.common.lang.RObject.dispose(this.bottom)
      }
   }
}