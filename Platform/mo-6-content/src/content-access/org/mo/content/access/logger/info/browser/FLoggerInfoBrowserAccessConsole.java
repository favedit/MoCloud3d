package org.mo.content.access.logger.info.browser;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;

import com.cyou.gccloud.data.logger.FLoggerInfoBrowserAccessLogic;

//============================================================
// <T>日志信息浏览器访问控制台。</T>
//============================================================
public class FLoggerInfoBrowserAccessConsole
      extends FAbstractLogicUnitConsole<FLoggerInfoBrowserAccessLogic, FLoggerInfoBrowserAccess>
      implements
         ILoggerInfoBrowserAccessConsole
{
   //============================================================
   // <T>构造日志信息浏览器访问控制台。</T>
   //============================================================
   public FLoggerInfoBrowserAccessConsole(){
      super(FLoggerInfoBrowserAccessLogic.class, FLoggerInfoBrowserAccess.class);
   }
}
