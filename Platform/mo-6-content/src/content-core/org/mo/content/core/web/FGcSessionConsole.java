package org.mo.content.core.web;

import org.mo.cloud.core.web.FGcWebSessionConsole;
import org.mo.cloud.logic.data.system.FGcSessionInfo;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.content.access.data.control.role.FEaiControlRoleInfo;
import org.mo.content.access.data.control.role.IEaiControlRoleConsole;
import org.mo.content.access.data.person.FGcUserInfo;
import org.mo.content.access.data.person.IGcUserConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicContext;
import org.mo.eng.data.common.ISqlContext;
import org.mo.web.core.session.IWebSession;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>服务命令处理控制台。</T>
// <P>根据访问的地址，对页面服务执行分发处理。</P>
//============================================================
public class FGcSessionConsole
      extends FGcWebSessionConsole
{
   // 日志输出接口
   protected static ILogger _logger = RLogger.find(FGcSessionConsole.class);

   // 角色控制台
   @ALink
   protected IEaiControlRoleConsole _roleConsole;

   // 用户管理器接口
   @ALink
   protected IGcUserConsole _userConsole;

   //============================================================
   // <T>打开会话对象。</T>
   //
   // @param webContext 网页环境
   // @param sqlContext 数据环境
   // @param webSession 会话对象
   // @return 处理结果
   //============================================================
   @Override
   public EResult open(IWebContext webContext,
                       ISqlContext sqlContext,
                       IWebSession webSession){
      FGcSession session = (FGcSession)webSession;
      FLogicContext logicContext = (FLogicContext)sqlContext;
      // 获得编号
      String sessionCode = session.id();
      if(RString.isEmpty(sessionCode)){
         throw new FFatalError("Session code is empty.");
      }
      String logicCode = session.logicCode();
      if(RString.isEmpty(logicCode)){
         throw new FFatalError("Logic code is empty.");
      }
      String fromCode = session.fromCode();
      if(RString.isEmpty(fromCode)){
         throw new FFatalError("From code is empty.");
      }
      // 获得用户信息
      long userId = session.userId();
      String userLabel = null;
      long roleId = 0;
      String roleCode = null;
      String roleModules = null;
      if(userId > 0){
         FGcUserInfo userInfo = _userConsole.find(logicContext, userId);
         roleId = userInfo.roleId();
         userLabel = userInfo.label();
         // 获得用户权限
         if(roleId != 0){
            FEaiControlRoleInfo roleInfo = _roleConsole.find(logicContext, roleId);
            if(roleInfo != null){
               roleCode = roleInfo.code();
               roleModules = _roleConsole.findRoleModuleCodePack(logicContext, roleId);
            }
         }
      }
      // 获得会话信息
      FGcSessionInfo sessionInfo = _sessionConsole.findByGuid(logicContext, sessionCode);
      // 设置内容
      boolean exists = (sessionInfo != null);
      if(!exists){
         sessionInfo = _sessionConsole.doPrepare(logicContext);
      }
      sessionInfo.setLogicCode(logicCode);
      sessionInfo.setFromCode(fromCode);
      sessionInfo.setSessionCode(sessionCode);
      sessionInfo.setUserId(userId);
      sessionInfo.setUserLabel(userLabel);
      sessionInfo.setRoleId(roleId);
      sessionInfo.setApplicationId(session.applicationId());
      sessionInfo.setRoleCode(roleCode);
      sessionInfo.setLocationLongitude(session.locationLongitude());
      sessionInfo.setLocationLatitude(session.locationLatitude());
      sessionInfo.setRoleModules(roleModules);
      if(!exists){
         _sessionConsole.doInsert(logicContext, sessionInfo);
      }else{
         _sessionConsole.doUpdate(logicContext, sessionInfo);
      }
      // 加载信息
      session.loadInfo(sessionInfo);
      // 输出会话
      output(webContext, session);
      return EResult.Success;
   }

   //============================================================
   // <T>打开会话对象。</T>
   //
   // @param webContext 网页环境
   // @param sqlContext 数据环境
   // @param webSession 会话对象
   // @return 处理结果
   //============================================================
   @Override
   public EResult update(ISqlContext sqlContext,
                         IWebSession webSession){
      FGcSession session = (FGcSession)webSession;
      FLogicContext logicContext = (FLogicContext)sqlContext;
      // 获得编号
      String sessionCode = session.id();
      if(RString.isEmpty(sessionCode)){
         throw new FFatalError("Session code is empty.");
      }
      // 获得用户信息
      long userId = session.userId();
      String userLabel = null;
      long roleId = 0;
      String roleCode = null;
      String roleModules = null;
      if(userId > 0){
         FGcUserInfo userInfo = _userConsole.find(logicContext, userId);
         roleId = userInfo.roleId();
         userLabel = userInfo.label();
         // 获得用户权限
         if(roleId != 0){
            FEaiControlRoleInfo roleInfo = _roleConsole.find(logicContext, roleId);
            if(roleInfo != null){
               roleCode = roleInfo.code();
               roleModules = _roleConsole.findRoleModuleCodePack(logicContext, roleId);
            }
         }
      }
      // 获得会话信息
      FGcSessionInfo sessionInfo = _sessionConsole.findByGuid(logicContext, sessionCode);
      if(sessionInfo == null){
         throw new FFatalError("Session is not exists.");
      }
      // 设置内容
      sessionInfo.setSessionCode(sessionCode);
      sessionInfo.setUserId(userId);
      sessionInfo.setUserLabel(userLabel);
      sessionInfo.setRoleId(roleId);
      sessionInfo.setApplicationId(session.applicationId());
      sessionInfo.setRoleCode(roleCode);
      sessionInfo.setLocationLongitude(session.locationLongitude());
      sessionInfo.setLocationLatitude(session.locationLatitude());
      sessionInfo.setRoleModules(roleModules);
      _sessionConsole.doUpdate(logicContext, sessionInfo);
      // 加载信息
      session.loadInfo(sessionInfo);
      // 输出会话
      return EResult.Success;
   }
}
