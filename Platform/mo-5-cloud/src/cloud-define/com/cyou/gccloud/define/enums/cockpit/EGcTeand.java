//============================================================
// <T>趋势。</T>
//
// @version 1.0.1
//============================================================
package com.cyou.gccloud.define.enums.cockpit;

//============================================================
// <T>趋势枚举定义。</T>
//
// @enum
//============================================================
public class EGcTeand
{
   // 枚举名称
   public final static String DefineName = "GcTeand";

   // 未知
   public final static int Unknown = 0;

   // 未知字符串
   public final static String UnknownString = "Unknown";

   // 未知标签
   public final static String UnknownLabel = "未知";

   // 下降
   public final static int Down = 1;

   // 下降字符串
   public final static String DownString = "Down";

   // 下降标签
   public final static String DownLabel = "下降";

   // 平稳
   public final static int Steady = 2;

   // 平稳字符串
   public final static String SteadyString = "Steady";

   // 平稳标签
   public final static String SteadyLabel = "平稳";

   // 上行
   public final static int Ascending = 3;

   // 上行字符串
   public final static String AscendingString = "Ascending";

   // 上行标签
   public final static String AscendingLabel = "上行";

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
         case Down:
            return DownString;
         case Steady:
            return SteadyString;
         case Ascending:
            return AscendingString;
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
         case Down:
            return DownLabel;
         case Steady:
            return SteadyLabel;
         case Ascending:
            return AscendingLabel;
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
         case DownString:
            return Down;
         case SteadyString:
            return Steady;
         case AscendingString:
            return Ascending;
         default:
            return 0;
      }
   }
}
