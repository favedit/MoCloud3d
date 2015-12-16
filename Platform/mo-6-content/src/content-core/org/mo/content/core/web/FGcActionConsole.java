package org.mo.content.core.web;

import org.mo.cloud.core.message.IGcMessageConsole;
import org.mo.cloud.logic.data.system.IGcSessionConsole;
import org.mo.core.aop.face.ALink;
import org.mo.web.core.action.FActionConsole;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>服务命令处理控制台。</T>
// <P>根据访问的地址，对页面服务执行分发处理。</P>
//============================================================
public class FGcActionConsole
      extends FActionConsole
{
   // 头标志
   public final static String HeadSession = "session_guid";

   // 消息控制台
   @ALink
   protected IGcMessageConsole _gcMessageConsole;

   // 会话控制台
   @ALink
   protected IGcSessionConsole _gcSessionConsole;

   //============================================================
   // <T>构造服务命令处理控制台。</T>
   //============================================================
   public FGcActionConsole(){
   }

   //============================================================
   // <T>查找指定类对应的参数信息。</T>
   //
   // @param clazz 类对象
   // @param name 名称
   // @return 参数信息
   //============================================================
   @Override
   protected Object findTypeParameter(IWebContext context,
                                      Class<?> clazz){
      if(clazz == IGcSession.class){
         return context.session();
      }
      return super.findTypeParameter(context, clazz);
   }
}
