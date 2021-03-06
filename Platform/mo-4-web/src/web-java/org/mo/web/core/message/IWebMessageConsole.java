package org.mo.web.core.message;

//============================================================
// <T>消息控制台接口。</T>
//============================================================
public interface IWebMessageConsole
{
   //============================================================
   // <T>获得信息消息页面。</T>
   //============================================================
   String infoMessage();

   //============================================================
   // <T>获得警告消息页面。</T>
   //============================================================
   String warnMessage();

   //============================================================
   // <T>获得错误消息页面。</T>
   //============================================================
   String errorMessage();

   //============================================================
   // <T>获得崩溃消息页面。</T>
   //============================================================
   String fatalMessage();

   //============================================================
   // <T>获得会话错误消息页面。</T>
   //============================================================
   String pageSession();

   //============================================================
   // <T>获得未登录消息页面。</T>
   //============================================================
   String pageLogin();

   //============================================================
   // <T>获得超时消息页面。</T>
   //============================================================
   String pageTimeout();

   //============================================================
   // <T>获得权限消息页面。</T>
   //============================================================
   String pageAuthority();
}
