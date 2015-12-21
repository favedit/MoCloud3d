package org.mo.content.face.resource.model;

import org.mo.content.core.web.IGcSession;
import org.mo.data.logic.ILogicContext;
import org.mo.web.core.face.AWebLogin;
import org.mo.web.core.servlet.common.IWebServletRequest;
import org.mo.web.core.servlet.common.IWebServletResponse;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>上传处理接口。</T>
//============================================================
public interface IModelServlet
{
   //============================================================
   // <T>逻辑处理。</T>
   //
   // @param context 网络环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   public void process(IWebContext context,
                       IGcSession session,
                       ILogicContext logicContext,
                       IWebServletRequest request,
                       IWebServletResponse response);

   //============================================================
   // <T>逻辑处理。</T>
   //
   // @param context 网络环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   @AWebLogin
   public void importData(IWebContext context,
                          IGcSession session,
                          ILogicContext logicContext,
                          IWebServletRequest request,
                          IWebServletResponse response);
}
