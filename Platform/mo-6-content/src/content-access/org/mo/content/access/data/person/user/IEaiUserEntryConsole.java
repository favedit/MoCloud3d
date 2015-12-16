package org.mo.content.access.data.person.user;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.data.logic.ILogicContext;

import com.cyou.gccloud.data.data.FDataPersonUserEntryUnit;

//============================================================
// <T>人员入口控制台接口。</T>
//============================================================
public interface IEaiUserEntryConsole
      extends
         IAbstractLogicUnitConsole<FDataPersonUserEntryUnit>
{
   //============================================================
   // <T>根据用户编号获取从各个系统中的用户。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param from 来源
   // @return 获取对象
   //============================================================
   FDataPersonUserEntryUnit findByUserId(ILogicContext logicContext,
                                         long userId,
                                         int from);

   //============================================================
   // <T>根据登录账号信息查找授权信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param passport 登录账号
   // @return 授权信息
   //============================================================
   FDataPersonUserEntryUnit findByPassport(ILogicContext logicContext,
                                           String passport);
}
