package org.mo.content.face.person;

import org.mo.cloud.core.web.FGcWebSession;
import org.mo.cloud.define.enums.core.EGcAccountFrom;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.content.access.data.person.FGcUserInfo;
import org.mo.content.core.person.IAccountConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.ILogicContext;
import org.mo.web.core.action.common.FWebCookie;
import org.mo.web.core.container.AContainer;
import org.mo.web.core.session.IWebSession;
import org.mo.web.core.session.IWebSessionConsole;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>人员账号逻辑。</T>
//
// @author sunhr
// @version 150328
//============================================================
public class FAccountAction
      implements
         IAccountAction
{
   //用户控制台
   @ALink
   protected IAccountConsole _accountConsole;

   // 会话控制台
   @ALink
   protected IWebSessionConsole _sessionConsole;

   //============================================================
   // <T>注册用户</T>
   //
   // @param context 网络环境
   // @param logicContext 逻辑环境
   // @param page 容器
   // @return 页面
   //============================================================
   @Override
   public String register(IWebContext context,
                          ILogicContext logicContext,
                          FAccountPage page){
      // 获得参数
      String passport = context.parameter("passport");
      String password = context.parameter("password");
      String label = context.parameter("label");
      // 新建记录
      FGcUserInfo user = _accountConsole.doPrepare(logicContext);
      user.setPassport(passport);
      user.setPassword(password);
      user.setLabel(label);
      EResult result = _accountConsole.doRegister(logicContext, user);
      if(result.equals(EResult.Success)){
         page.setResult("注册成功，单击[返回]按扭返回。");
      }else{
         page.setResult("注册失败，请检查注册步骤是否正确。");
      }
      return "account/RegisterResult";
   }

   //============================================================
   // <T>用户登录</T>
   //
   // @param context 网络环境
   // @param sessionContext 会话环境
   // @param logicContext 逻辑环境
   // @param page 容器
   // @return 页面
   //============================================================
   @Override
   public String login(IWebContext context,
                       IWebSession sessionContext,
                       ILogicContext logicContext,
                       @AContainer(name = "page") FAccountPage page){
      FGcWebSession session = (FGcWebSession)sessionContext;
      // 获得参数
      String passport = context.parameter("passport");
      String password = context.parameter("password");
      // 新建记录
      FGcUserInfo user = _accountConsole.doLogin(logicContext, passport, password, EGcAccountFrom.Web);
      if(user == null){
         throw new FFatalError("用户不存在。");
      }
      long userId = user.ouid();
      // 打开用户会话
      session.setFromCode("web");
      session.setUserId(userId);
      _sessionConsole.open(context, logicContext, session);
      // 设置客户端信息
      String sessionGuid = user.sessionGuid();
      context.outputCookies().push(new FWebCookie("session_guid", sessionGuid));
      return "account/LoginSuccess";
   }
}
