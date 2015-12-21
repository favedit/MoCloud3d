package org.mo.util.common;

import org.mo.com.lang.RDateTime;
import org.mo.com.lang.type.TDateTime;

public class RSha1Maker
{
   public static void main(String[] args){
      TDateTime current = RDateTime.parseDateTime("20151124");
      current.truncateWeek();
      //current.truncateWeekMonday();
      System.out.println(current.format());
      //      // 设置日历
      //      Calendar calendar = Calendar.getInstance();
      //      calendar.setTimeZone(RDateTime.DEFAULT_TIMEZONE);
      //      calendar.setTime(new Date(current.get()));
      //      // 格式化字符串
      //      System.out.println("DAY_OF_WEEK = " + calendar.get(Calendar.DAY_OF_WEEK));
      //      System.out.println("DAY_OF_WEEK_IN_MONTH = " + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
      //      //System.out.println(RSha1.encode("sha1"));
   }
}
