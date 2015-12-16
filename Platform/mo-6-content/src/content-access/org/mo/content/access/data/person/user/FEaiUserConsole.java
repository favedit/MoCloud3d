package org.mo.content.access.data.person.user;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.com.data.FSql;
import org.mo.com.lang.RString;
import org.mo.content.access.data.control.role.FEaiControlModuleInfo;
import org.mo.content.access.data.control.role.IEaiControlRoleConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

import com.cyou.gccloud.data.data.FDataPersonUserLogic;

//============================================================
// <T>用户信息控制台。</T>
//============================================================
public class FEaiUserConsole
      extends FAbstractLogicUnitConsole<FDataPersonUserLogic, FEaiUserInfo>
      implements
         IEaiUserConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FCountryConsole.class);

   // 角色控制台
   @ALink
   protected IEaiControlRoleConsole _roleConsole;

   //============================================================
   // <T>构造应用信息控制台。</T>
   //============================================================
   public FEaiUserConsole(){
      super(FDataPersonUserLogic.class, FEaiUserInfo.class);
   }

   //============================================================
   // <T>根据用户编号查找授权的所有模块集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块集合
   //============================================================
   @Override
   public FLogicDataset<FEaiControlModuleInfo> findRoleModules(ILogicContext logicContext,
                                                               long userId){
      // 检查参数
      if(userId == 0){
         return null;
      }
      // 获得用户
      FEaiUserInfo userInfo = find(logicContext, userId);
      if(userInfo == null){
         return null;
      }
      long roleId = userInfo.roleId();
      // 获得角色集合
      FLogicDataset<FEaiControlModuleInfo> dataset = _roleConsole.findRoleModules(logicContext, roleId);
      return dataset;
   }

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块代码集合
   //============================================================
   @Override
   public String[] findRoleModuleCodes(ILogicContext logicContext,
                                       long userId){
      // 检查参数
      if(userId == 0){
         return null;
      }
      // 获得用户
      FEaiUserInfo userInfo = find(logicContext, userId);
      if(userInfo == null){
         return null;
      }
      long roleId = userInfo.roleId();
      // 获得角色集合
      String[] codes = _roleConsole.findRoleModuleCodes(logicContext, roleId);
      return codes;
   }

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码打包。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @return 模块代码打包
   //============================================================
   @Override
   public String findRoleModuleCodePack(ILogicContext logicContext,
                                        long userId){
      // 检查参数
      if(userId == 0){
         return null;
      }
      // 获得用户
      FEaiUserInfo userInfo = find(logicContext, userId);
      if(userInfo == null){
         return null;
      }
      long roleId = userInfo.roleId();
      // 获得角色打包
      String codePack = _roleConsole.findRoleModuleCodePack(logicContext, roleId);
      return codePack;
   }

   // ============================================================
   // <T>根据帐号查找数据</T>
   //
   // @param sqlContext 链接对象
   // @param passport 帐号
   // @return 模块数据
   // ============================================================
   @Override
   public FEaiUserInfo findByPassport(ILogicContext logicContext,
                                      String passport){
      FSql whereSql = new FSql();
      whereSql.append(FDataPersonUserLogic.OVLD, " = ", 1);
      if(!RString.isEmpty(passport)){
         whereSql.append(" AND ", FDataPersonUserLogic.PASSPORT, " = '", passport, "'");
      }
      FEaiUserInfo unit = search(logicContext, whereSql);
      return unit;
   }
}
