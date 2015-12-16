//============================================================
// <T>是否匿名。</T>
//
// @version 1.0.1
//============================================================
package com.cyou.gccloud.define.enums.core;

//============================================================
// <T>是否匿名枚举定义。</T>
//
// @enum
//============================================================
public class EGcAnonymous
{
   // 枚举名称
   public final static String DefineName = "GcAnonymous";

   // 未知
   public final static int Unknown = 0;

   // 未知字符串
   public final static String UnknownString = "Unknown";

   // 未知标签
   public final static String UnknownLabel = "未知";

   // 匿名
   public final static int Anonymous = 1;

   // 匿名字符串
   public final static String AnonymousString = "Anonymous";

   // 匿名标签
   public final static String AnonymousLabel = "匿名";

   // 真名
   public final static int Autonym = 2;

   // 真名字符串
   public final static String AutonymString = "Autonym";

   // 真名标签
   public final static String AutonymLabel = "真名";

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
         case Anonymous:
            return AnonymousString;
         case Autonym:
            return AutonymString;
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
         case Anonymous:
            return AnonymousLabel;
         case Autonym:
            return AutonymLabel;
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
         case AnonymousString:
            return Anonymous;
         case AutonymString:
            return Autonym;
         default:
            return 0;
      }
   }
}
