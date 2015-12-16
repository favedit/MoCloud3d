package org.mo.content.access.data.control.role;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.com.data.FSql;
import org.mo.com.lang.FStrings;
import org.mo.com.lang.RString;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

import com.cyou.gccloud.data.data.FDataControlRoleLogic;
import com.cyou.gccloud.data.data.FDataControlRoleModuleLogic;
import com.cyou.gccloud.data.data.FDataControlRoleModuleUnit;
import com.cyou.gccloud.data.data.FDataControlRoleUnit;
import com.cyou.gccloud.define.enums.core.EGcControlRoleModuleValid;

//============================================================
// <T>数据控制角色控制台。</T>
//============================================================
public class FEaiControlRoleConsole
      extends FAbstractLogicUnitConsole<FDataControlRoleLogic, FEaiControlRoleInfo>
      implements
         IEaiControlRoleConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FDataControlRoleConsole.class);

   // 模块控制台
   @ALink
   protected IEaiControlModuleConsole _moduleConsole;

   //============================================================
   // <T>构造数据控制角色控制台。</T>
   //============================================================
   public FEaiControlRoleConsole(){
      super(FDataControlRoleLogic.class, FEaiControlRoleInfo.class);
   }

   //============================================================
   // <T>根据角色编号查找授权的所有模块集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块集合
   //============================================================
   @Override
   public FLogicDataset<FEaiControlModuleInfo> findRoleModules(ILogicContext logicContext,
                                                               long roleId){
      // 检查参数
      if(roleId == 0){
         return null;
      }
      // 查找角色模块集合
      FDataControlRoleModuleLogic roleModuleLogic = logicContext.findLogic(FDataControlRoleModuleLogic.class);
      FSql whereSql = new FSql("ROLE_ID={role_id}");
      whereSql.bindLong("role_id", roleId);
      FLogicDataset<FDataControlRoleModuleUnit> moduleDataset = roleModuleLogic.fetch(whereSql);
      FLogicDataset<FEaiControlModuleInfo> dataset = null;
      if(!moduleDataset.isEmpty()){
         // 查询模块信息
         dataset = new FLogicDataset<FEaiControlModuleInfo>(FEaiControlModuleInfo.class);
         for(FDataControlRoleModuleUnit roleModuleUnit : moduleDataset){
            long moduleId = roleModuleUnit.moduleId();
            FEaiControlModuleInfo moduleInfo = _moduleConsole.find(logicContext, moduleId);
            if(moduleInfo != null){
               moduleInfo.setViewValidCd(roleModuleUnit.viewValidCd());
               moduleInfo.setInsertValidCd(roleModuleUnit.insertValidCd());
               moduleInfo.setUpdateValidCd(roleModuleUnit.updateValidCd());
               moduleInfo.setDeleteValidCd(roleModuleUnit.deleteValidCd());
               dataset.push(moduleInfo);
            }
         }
      }
      return dataset;
   }

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块代码集合
   //============================================================
   @Override
   public String[] findRoleModuleCodes(ILogicContext logicContext,
                                       long roleId){
      String[] roleCodes = null;
      // 获得用户权限
      if(roleId != 0){
         FLogicDataset<FEaiControlModuleInfo> dataset = findRoleModules(logicContext, roleId);
         if(dataset != null){
            if(!dataset.isEmpty()){
               FStrings moduleCodes = new FStrings();
               for(FEaiControlModuleInfo moduleInfo : dataset){
                  if(moduleInfo.viewValidCd() == EGcControlRoleModuleValid.Valid){
                     String moduleCode = moduleInfo.code();
                     moduleCodes.push(moduleCode);
                  }
               }
               roleCodes = moduleCodes.toObjects();
            }
         }
      }
      // 返回内容
      return roleCodes;
   }

   //============================================================
   // <T>根据角色编号查找授权的所有模块代码打包。</T>
   //
   // @param logicContext 逻辑环境
   // @param roleId 角色编号
   // @return 模块代码打包
   //============================================================
   @Override
   public String findRoleModuleCodePack(ILogicContext logicContext,
                                        long roleId){
      String roleCodes = null;
      // 获得用户权限
      if(roleId != 0){
         FLogicDataset<FEaiControlModuleInfo> dataset = findRoleModules(logicContext, roleId);
         if(dataset != null){
            if(!dataset.isEmpty()){
               FStrings moduleCodes = new FStrings();
               for(FEaiControlModuleInfo moduleInfo : dataset){
                  if(moduleInfo.viewValidCd() == EGcControlRoleModuleValid.Valid){
                     String moduleCode = moduleInfo.code();
                     moduleCodes.push(moduleCode);
                  }
               }
               roleCodes = moduleCodes.join('|');
            }
         }
      }
      // 返回内容
      return roleCodes;
   }

   //============================================================
   // <T>根据角色代码获取此对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param code 角色对象
   // @return 对象
   //============================================================
   @Override
   public FDataControlRoleUnit findByCode(ILogicContext logicContext,
                                          String code){
      StringBuffer whereSql = new StringBuffer();
      if(!RString.isEmpty(code)){
         whereSql.append(FDataControlRoleLogic.CODE).append("='").append(code + "'");
      }
      FDataControlRoleUnit role = search(logicContext, whereSql);
      return role;
   }
}
