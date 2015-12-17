package org.mo.content.access.cache.system.session;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.cache.FCacheSystemSessionLogic;
import org.mo.com.lang.EResult;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.content.access.data.control.role.FEaiControlRoleInfo;
import org.mo.content.access.data.control.role.IEaiControlRoleConsole;
import org.mo.content.access.data.person.user.FEaiUserInfo;
import org.mo.content.access.data.person.user.IEaiUserConsole;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>会话信息控制台。</T>
//============================================================
public class FEaiSessionConsole
      extends FAbstractLogicUnitConsole<FCacheSystemSessionLogic, FEaiSessionInfo>
      implements
         IEaiSessionConsole
{
   // 日志输出接口
   private static ILogger _logger = RLogger.find(FEaiSessionConsole.class);

   // 角色控制台
   // @ALink
   protected IEaiControlRoleConsole _roleConsole;

   // 用户控制台
   // @ALink
   protected IEaiUserConsole _userConsole;

   //============================================================
   // <T>构造应用信息控制台。</T>
   //============================================================
   public FEaiSessionConsole(){
      super(FCacheSystemSessionLogic.class, FEaiSessionInfo.class);
   }

   //============================================================
   // <T>关联会话和用户信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param sessionId 会话编号
   // @param userId 用户编号
   // @return 模块集合
   //============================================================
   @Override
   public EResult linkUser(ILogicContext logicContext,
                           long sessionId,
                           long userId){
      // 查找会话
      FEaiSessionInfo sessionInfo = find(logicContext, sessionId);
      if(sessionInfo == null){
         _logger.error(this, "linkUser", "Session is not exists. (session_id={1})", sessionId);
         return EResult.Failure;
      }
      // 查找用户
      FEaiUserInfo userInfo = _userConsole.find(logicContext, userId);
      if(userInfo == null){
         _logger.error(this, "linkUser", "Use is not exists. (user_id={1})", userId);
         return EResult.Failure;
      }
      // 查找角色
      long roleId = userInfo.roleId();
      sessionInfo.setRoleId(roleId);
      sessionInfo.setRoleCode(null);
      sessionInfo.setRoleModules(null);
      if(roleId != 0){
         // 查找角色信息
         FEaiControlRoleInfo roleInfo = _roleConsole.find(logicContext, roleId);
         if(roleInfo != null){
            sessionInfo.setRoleCode(roleInfo.code());
            // 查找角色权限
            String rolePack = _roleConsole.findRoleModuleCodePack(logicContext, roleId);
            sessionInfo.setRoleModules(rolePack);
         }
      }
      // 更新角色
      doUpdate(logicContext, sessionInfo);
      return EResult.Success;
   }
}
