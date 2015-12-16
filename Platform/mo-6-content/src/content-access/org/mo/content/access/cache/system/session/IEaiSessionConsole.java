package org.mo.content.access.cache.system.session;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.com.lang.EResult;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>会话信息控制台接口。</T>
//============================================================
public interface IEaiSessionConsole
      extends
         IAbstractLogicUnitConsole<FEaiSessionInfo>
{
   //============================================================
   // <T>关联会话和用户信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param sessionId 会话编号
   // @param userId 用户编号
   // @return 模块集合
   //============================================================
   EResult linkUser(ILogicContext logicContext,
                    long sessionId,
                    long userId);
}
