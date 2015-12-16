package org.mo.content.access.data.system.application;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.com.lang.EResult;
import org.mo.content.access.data.system.application.version.FEaiVersionInfo;
import org.mo.content.access.data.system.application.version.IEaiVersionConsole;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

import com.cyou.gccloud.data.data.FDataSystemApplicationLogic;

//============================================================
// <T>应用信息控制台。</T>
//============================================================
public class FEaiApplicationConsole
      extends FAbstractLogicUnitConsole<FDataSystemApplicationLogic, FEaiApplicationInfo>
      implements
         IEaiApplicationConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FCountryConsole.class);

   // @ALink
   protected IEaiVersionConsole _versionConsole;

   //============================================================
   // <T>构造应用信息控制台。</T>
   //============================================================
   public FEaiApplicationConsole(){
      super(FDataSystemApplicationLogic.class, FEaiApplicationInfo.class);
   }

   //============================================================
   // <T>删除记录前处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   protected EResult onDeleteBefore(ILogicContext logicContext,
                                    FEaiApplicationInfo unit){
      long applicationId = unit.ouid();
      // 删除所有版本集合
      FLogicDataset<FEaiVersionInfo> versionInfos = _versionConsole.fetchVersions(logicContext, applicationId);
      for(FEaiVersionInfo versionInfo : versionInfos){
         _versionConsole.doDelete(logicContext, versionInfo);
      }
      return EResult.Success;
   }
}
