package org.mo.content.access.data.person.user;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.content.access.data.control.role.FEaiControlModuleInfo;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>用户信息控制台接口。</T>
//============================================================
public interface IEaiUserConsole
      extends
         IAbstractLogicUnitConsole<FEaiUserInfo>
{
   //============================================================
   // <T>根据用户编号查找授权的所有模块集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块集合
   //============================================================
   FLogicDataset<FEaiControlModuleInfo> findRoleModules(ILogicContext logicContext,
                                                        long userId);

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块代码集合
   //============================================================
   String[] findRoleModuleCodes(ILogicContext logicContext,
                                long userId);

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码打包。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块代码打包
   //============================================================
   String findRoleModuleCodePack(ILogicContext logicContext,
                                 long userId);

   // ============================================================
   // <T>根据帐号查找数据</T>
   //
   // @param sqlContext 链接对象
   // @param passport 帐号
   // @return 模块数据
   // ============================================================
   FEaiUserInfo findByPassport(ILogicContext logicContext,
                               String passport);
}
