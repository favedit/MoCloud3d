package org.mo.content.access.data.system.application.version;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>版本信息控制台接口。</T>
//============================================================
public interface IEaiVersionConsole
      extends
         IAbstractLogicUnitConsole<FEaiVersionInfo>
{
   //============================================================
   // <T>查找最后一个版本信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param applicationId 应用编号
   // @return 版本信息
   //============================================================
   FEaiVersionInfo findLastVersion(ILogicContext logicContext,
                                   long applicationId);

   //============================================================
   // <T>根据应用编号获得版本集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param applicationId 应用编号
   // @return 版本集合
   //============================================================
   FLogicDataset<FEaiVersionInfo> fetchVersions(ILogicContext logicContext,
                                                long applicationId);
}
