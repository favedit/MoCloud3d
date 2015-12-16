package org.mo.cloud.core.web;

import org.mo.cloud.logic.data.system.FGcSessionInfo;
import org.mo.web.core.session.IWebSession;

//============================================================
// <T>网络会话接口。</T>
//============================================================
public interface IGcWebSession
      extends
         IWebSession
{
   //============================================================
   // <T>记录编号。</T>
   //
   // @return 记录编号
   //============================================================
   long recordId();

   //============================================================
   // <T>获得用户编号。</T>
   //
   // @return 用户编号
   //============================================================
   long userId();

   //============================================================
   // <T>设置用户编号。</T>
   //
   // @param userId 用户编号
   //============================================================
   void setUserId(long userId);

   //============================================================
   // <T>获得用户标签。</T>
   //
   // @return 用户标签
   //============================================================
   String userLabel();

   //============================================================
   // <T>设置用户标签。</T>
   //
   // @param userLabel 用户标签
   //============================================================
   void setUserLabel(String userLabel);

   //============================================================
   // <T>获得会话信息。</T>
   //
   // @return 会话信息
   //============================================================
   FGcSessionInfo sessionInfo();
}
