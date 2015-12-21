package org.mo.content.face.resource.bitmap;

import org.mo.content.core.web.IGcSession;
import org.mo.data.logic.ILogicContext;
import org.mo.web.core.face.AWebLogin;
import org.mo.web.core.servlet.common.IWebServletRequest;
import org.mo.web.core.servlet.common.IWebServletResponse;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>图片数据接口。</T>
//============================================================
@AWebLogin
public interface IBitmapServlet
{
   //============================================================
   // <T>获得数据处理。</T>
   //
   // @param context 网页环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   void view(IWebContext context,
             IGcSession session,
             ILogicContext logicContext,
             IWebServletRequest request,
             IWebServletResponse response);

   //============================================================
   // <T>获得预览数据处理。</T>
   //
   // @param context 网页环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   void preview(IWebContext context,
                IGcSession session,
                ILogicContext logicContext,
                IWebServletRequest request,
                IWebServletResponse response);

   //============================================================
   // <T>导入数据处理。</T>
   //
   // @param context 网页环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   void importData(IWebContext context,
                   IGcSession session,
                   ILogicContext logicContext,
                   IWebServletRequest request,
                   IWebServletResponse response);

   //============================================================
   // <T>更新数据处理。</T>
   //
   // @param context 网页环境
   // @param session 会话信息
   // @param logicContext 逻辑环境
   // @param request 请求内容
   // @param response 应答内容
   //============================================================
   void updateData(IWebContext context,
                   IGcSession session,
                   ILogicContext logicContext,
                   IWebServletRequest request,
                   IWebServletResponse response);
}
