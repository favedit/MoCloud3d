package org.mo.content.access.logger.person.user;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.logger.FLoggerPersonUserAccessLogic;

//============================================================
// <T>日志人员用户访问控制台。</T>
//============================================================
public class FLoggerPersonUserAccessConsole
      extends FAbstractLogicUnitConsole<FLoggerPersonUserAccessLogic, FLoggerPersonUserAccess>
      implements
         ILoggerPersonUserAccessConsole
{
   //============================================================
   // <T>构造日志人员用户访问控制台。</T>
   //============================================================
   public FLoggerPersonUserAccessConsole(){
      super(FLoggerPersonUserAccessLogic.class, FLoggerPersonUserAccess.class);
   }
}
