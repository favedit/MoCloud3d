//============================================================
// <T>公告类型。</T>
//
// @version 1.0.1
//============================================================
package com.cyou.gccloud.define.enums.cockpit;

//============================================================
// <T>公告类型枚举定义。</T>
//
// @enum
//============================================================
public class EGcNoticeType
{
   // 枚举名称
   public final static String DefineName = "GcNoticeType";

   // 未知
   public final static int Unknown = 0;

   // 未知字符串
   public final static String UnknownString = "Unknown";

   // 未知标签
   public final static String UnknownLabel = "未知";

   // 公告
   public final static int Notice = 1;

   // 公告字符串
   public final static String NoticeString = "Notice";

   // 公告标签
   public final static String NoticeLabel = "公告";

   // 会议
   public final static int Meeting = 2;

   // 会议字符串
   public final static String MeetingString = "Meeting";

   // 会议标签
   public final static String MeetingLabel = "会议";

   // 监察
   public final static int Monitor = 3;

   // 监察字符串
   public final static String MonitorString = "Monitor";

   // 监察标签
   public final static String MonitorLabel = "监察";

   // 培训
   public final static int Training = 4;

   // 培训字符串
   public final static String TrainingString = "Training";

   // 培训标签
   public final static String TrainingLabel = "培训";

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
         case Notice:
            return NoticeString;
         case Meeting:
            return MeetingString;
         case Monitor:
            return MonitorString;
         case Training:
            return TrainingString;
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
         case Notice:
            return NoticeLabel;
         case Meeting:
            return MeetingLabel;
         case Monitor:
            return MonitorLabel;
         case Training:
            return TrainingLabel;
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
         case NoticeString:
            return Notice;
         case MeetingString:
            return Meeting;
         case MonitorString:
            return Monitor;
         case TrainingString:
            return Training;
         default:
            return 0;
      }
   }
}
