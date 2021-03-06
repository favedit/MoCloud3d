package org.mo.content.face.resource.material;

import org.mo.content.core.web.IGcSession;
import org.mo.data.logic.ILogicContext;
import org.mo.web.core.face.AWebLogin;
import org.mo.web.core.servlet.common.IWebServletRequest;
import org.mo.web.core.servlet.common.IWebServletResponse;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>材质数据处理接口。</T>
//============================================================
public interface IMaterialServlet
{
   //============================================================
   // <T>逻辑处理。</T>
   //
   // @param context 页面环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 页面请求
   // @param response 页面应答
   //============================================================
   public void process(IWebContext context,
                       IGcSession session,
                       ILogicContext logicContext,
                       IWebServletRequest request,
                       IWebServletResponse response);

   //============================================================
   // <T>逻辑处理。</T>
   //
   // @param context 页面环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 页面请求
   // @param response 页面应答
   //============================================================
   @AWebLogin
   public void query(IWebContext context,
                     IGcSession session,
                     ILogicContext logicContext,
                     IWebServletRequest request,
                     IWebServletResponse response);

   //============================================================
   // <T>获得数据处理。</T>
   //
   // @param context 页面环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 页面请求
   // @param response 页面应答
   //============================================================
   @AWebLogin
   public void data(IWebContext context,
                    IGcSession session,
                    ILogicContext logicContext,
                    IWebServletRequest request,
                    IWebServletResponse response);

   //============================================================
   // <T>导入数据处理。</T>
   //
   // @param context 页面环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 页面请求
   // @param response 页面应答
   //============================================================
   @AWebLogin
   public void importData(IWebContext context,
                          IGcSession session,
                          ILogicContext logicContext,
                          IWebServletRequest request,
                          IWebServletResponse response);

   //============================================================
   // <T>替换数据处理。</T>
   //
   // @param context 页面环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 页面请求
   // @param response 页面应答
   //============================================================
   @AWebLogin
   public void replaceData(IWebContext context,
                           IGcSession session,
                           ILogicContext logicContext,
                           IWebServletRequest request,
                           IWebServletResponse response);
}
