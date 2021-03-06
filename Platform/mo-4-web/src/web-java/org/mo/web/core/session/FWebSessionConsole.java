package org.mo.web.core.session;

import org.mo.com.lang.EResult;
import org.mo.core.aop.face.ALink;
import org.mo.eng.culture.ICultureConsole;
import org.mo.eng.data.common.ISqlContext;
import org.mo.eng.security.IPermissionConsole;
import org.mo.eng.session.FSessionConsole;
import org.mo.eng.session.common.FSession;
import org.mo.eng.session.common.FSessionWorker;
import org.mo.web.core.action.common.FWebCookie;
import org.mo.web.protocol.common.EWebConstants;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>网络线程控制台。</T>
//============================================================
public class FWebSessionConsole
      extends FSessionConsole
      implements
         IWebSessionConsole
{
   // 文化控制台
   @ALink
   protected ICultureConsole _cultureConsole;

   // 权限控制台
   @ALink
   protected IPermissionConsole _permissionConsole;

   //============================================================
   // <T>创建会话对象。</T>
   //
   // @param worker 会话工作器
   // @return 会话对象
   //============================================================
   @Override
   protected FSession createSession(FSessionWorker worker){
      FWebSession session = (FWebSession)super.createSession(worker);
      session.setPermission(_permissionConsole.createPermission());
      session.culture().assign(_cultureConsole.culture());
      return session;
   }

   //============================================================
   // <T>建立线程对象。</T>
   //
   // @param sessionId 线程标识
   // @return 线程对象
   //============================================================
   @Override
   public IWebSession build(String sessionId){
      return sync(IWebSession.class, sessionId);
   }

   //============================================================
   // <T>更新输出内容。</T>
   //
   // @param context 页面对象
   // @param session 会话对象
   //============================================================
   @Override
   public void output(IWebContext context,
                      IWebSession session){
      String sessionId = session.id();
      FWebCookie cookie = new FWebCookie(EWebConstants.SessionId, sessionId, -1);
      context.outputCookies().push(cookie);
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
   public EResult open(IWebContext webContext,
                       ISqlContext sqlContext,
                       IWebSession webSession){
      return EResult.Success;
   }

   //============================================================
   // <T>更新会话对象。</T>
   //
   // @param sqlContext 数据环境
   // @param webSession 会话对象
   // @return 处理结果
   //============================================================
   @Override
   public EResult update(ISqlContext sqlContext,
                         IWebSession webSession){
      return EResult.Success;
   }

   //============================================================
   // <T>关闭会话对象。</T>
   //
   // @param sqlContext 数据环境
   // @param webSession 会话对象
   // @return 处理结果
   //============================================================
   @Override
   public EResult close(ISqlContext sqlContext,
                        IWebSession webSession){
      return EResult.Success;
   }
}
