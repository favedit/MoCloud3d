package org.mo.content.access.data.system.application.version;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataSystemVersionLogic;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>版本信息控制台。</T>
//============================================================
public class FEaiVersionConsole
      extends FAbstractLogicUnitConsole<FDataSystemVersionLogic, FEaiVersionInfo>
      implements
         IEaiVersionConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FCountryConsole.class);

   //============================================================
   // <T>构造版本信息控制台。</T>
   //============================================================
   public FEaiVersionConsole(){
      super(FDataSystemVersionLogic.class, FEaiVersionInfo.class);
   }

   //============================================================
   // <T>查找最后一个版本信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param applicationId 应用编号
   // @return 版本信息
   //============================================================
   @Override
   public FEaiVersionInfo findLastVersion(ILogicContext logicContext,
                                          long applicationId){
      String whereSql = FDataSystemVersionLogic.APPLICATION_ID + "=" + applicationId;
      FEaiVersionInfo info = search(logicContext, whereSql, "NUMBER DESC");
      return info;
   }

   //============================================================
   // <T>根据应用编号获得版本集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param applicationId 应用编号
   // @return 版本集合
   //============================================================
   @Override
   public FLogicDataset<FEaiVersionInfo> fetchVersions(ILogicContext logicContext,
                                                       long applicationId){
      String whereSql = FDataSystemVersionLogic.APPLICATION_ID + "=" + applicationId;
      FLogicDataset<FEaiVersionInfo> infos = fetch(logicContext, whereSql);
      return infos;
   }
}
