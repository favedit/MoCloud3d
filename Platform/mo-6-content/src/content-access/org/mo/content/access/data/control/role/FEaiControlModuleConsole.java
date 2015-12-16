package org.mo.content.access.data.control.role;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;

import com.cyou.gccloud.data.data.FDataControlModuleLogic;

//============================================================
// <T>数据控件角色控制台。</T>
//============================================================
public class FEaiControlModuleConsole
      extends FAbstractLogicUnitConsole<FDataControlModuleLogic, FEaiControlModuleInfo>
      implements
         IEaiControlModuleConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FDataControlRoleConsole.class);

   //============================================================
   // <T>构造数据控件角色控制台。</T>
   //============================================================
   public FEaiControlModuleConsole(){
      super(FDataControlModuleLogic.class, FEaiControlModuleInfo.class);
   }
}
