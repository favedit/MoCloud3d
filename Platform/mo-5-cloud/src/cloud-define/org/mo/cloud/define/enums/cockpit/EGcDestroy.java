//============================================================
// <T>阅后即焚。</T>
//
// @version 1.0.1
//============================================================
package org.mo.cloud.define.enums.cockpit;

//============================================================
// <T>阅后即焚枚举定义。</T>
//
// @enum
//============================================================
public class EGcDestroy
{
   // 枚举名称
   public final static String DefineName = "GcDestroy";

   // 未知
   public final static int Unknown = 0;

   // 未知字符串
   public final static String UnknownString = "Unknown";

   // 未知标签
   public final static String UnknownLabel = "未知";

   // 是
   public final static int Yes = 1;

   // 是字符串
   public final static String YesString = "Yes";

   // 是标签
   public final static String YesLabel = "是";

   // 否
   public final static int No = 2;

   // 否字符串
   public final static String NoString = "No";

   // 否标签
   public final static String NoLabel = "否";

   //============================================================
   // <T>是否含有指定内容</T>
   //
   // @param value 内容
   // @return 是否含有
   //============================================================
   public static boolean contains(int value){
      String result = format(value);
      return !result.equals("Unknown");
   }

   //============================================================
   // <T>是否含有指定内容</T>
   //
   // @param value 内容
   // @return 是否含有
   //============================================================
   public static boolean contains(String value){
      int result = parse(value);
      return (result != 0);
   }

   //============================================================
   // <T>格式化数字为字符串。<T>
   //
   // @param value 内容
   // @return 字符串
   //============================================================
   public static String format(int value){
      switch(value){
         case Unknown:
            return UnknownString;
         case Yes:
            return YesString;
         case No:
            return NoString;
         default:
            return "Unknown";
      }
   }

   //============================================================
   // <T>格式化数字为字符串。<T>
   //
   // @param value 内容
   // @return 字符串
   //============================================================
   public static String formatLabel(int value){
      switch(value){
         case Unknown:
            return UnknownLabel;
         case Yes:
            return YesLabel;
         case No:
            return NoLabel;
         default:
            return "Unknown";
      }
   }

   //============================================================
   // <T>解析数字为字符串</T>
   //
   // @param value 内容
   // @return 字符串
   //============================================================
   public static int parse(String value){
      switch(value){
         case UnknownString:
            return Unknown;
         case YesString:
            return Yes;
         case NoString:
            return No;
         default:
            return 0;
      }
   }
}
