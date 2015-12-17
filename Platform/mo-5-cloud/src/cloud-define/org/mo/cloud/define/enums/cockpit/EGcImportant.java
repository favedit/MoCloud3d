//============================================================
// <T>重要性。</T>
//
// @version 1.0.1
//============================================================
package org.mo.cloud.define.enums.cockpit;

//============================================================
// <T>重要性枚举定义。</T>
//
// @enum
//============================================================
public class EGcImportant
{
   // 枚举名称
   public final static String DefineName = "GcImportant";

   // 未知
   public final static int Unknown = 0;

   // 未知字符串
   public final static String UnknownString = "Unknown";

   // 未知标签
   public final static String UnknownLabel = "未知";

   // 一般
   public final static int General = 1;

   // 一般字符串
   public final static String GeneralString = "General";

   // 一般标签
   public final static String GeneralLabel = "一般";

   // 重要
   public final static int Important = 2;

   // 重要字符串
   public final static String ImportantString = "Important";

   // 重要标签
   public final static String ImportantLabel = "重要";

   // 紧急
   public final static int Urgency = 3;

   // 紧急字符串
   public final static String UrgencyString = "Urgency";

   // 紧急标签
   public final static String UrgencyLabel = "紧急";

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
         case General:
            return GeneralString;
         case Important:
            return ImportantString;
         case Urgency:
            return UrgencyString;
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
         case General:
            return GeneralLabel;
         case Important:
            return ImportantLabel;
         case Urgency:
            return UrgencyLabel;
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
         case GeneralString:
            return General;
         case ImportantString:
            return Important;
         case UrgencyString:
            return Urgency;
         default:
            return 0;
      }
   }
}
