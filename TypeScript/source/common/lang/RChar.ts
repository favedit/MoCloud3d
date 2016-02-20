﻿module sk.common.lang {
   //==========================================================
   // <T>字符管理类。</T>
   //
   // @reference
   // @author maocy
   // @version 141229
   //==========================================================
   export class RChar {
      //==========================================================
      // <T>将一个数字转换为字符</T>
      //
      // @method
      // @param n:number:Number 数字
      // @return 字符
      //==========================================================
      public static parse(n) {
         return String.fromCharCode(n);
      }

      //==========================================================
      // <T>将一个数字转换为字符</T>
      //
      // @method
      // @param value:Integer 数字
      // @return 字符
      //==========================================================
      public static toString(value) {
         return value;
      }
   }
}