package org.mo.content.access.data.control.role;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataControlRoleUnit;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>数据控制角色控制台接口。</T>
//============================================================
public interface IEaiControlRoleConsole
      extends
         IAbstractLogicUnitConsole<FEaiControlRoleInfo>
{
   //============================================================
   // <T>根据角色编号查找授权的所有模块集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块集合
   //============================================================
   FLogicDataset<FEaiControlModuleInfo> findRoleModules(ILogicContext logicContext,
                                                        long roleId);

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块代码集合
   //============================================================
   String[] findRoleModuleCodes(ILogicContext logicContext,
                                long roleId);

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码打包。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块代码打包
   //============================================================
   String findRoleModuleCodePack(ILogicContext logicContext,
                                 long roleId);

   //============================================================
   // <T>根据角色代码获取此对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param code 角色对象
   // @return 对象
   //============================================================
   FDataControlRoleUnit findByCode(ILogicContext logicContext,
                                   String code);
}
