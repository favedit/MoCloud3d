package org.mo.content.common;

import org.mo.content.core.web.FGcSession;

public class RRs3Configuration
{
   public static String RootPath = "D:/Microbject/MoCloud3d";

   public static String Config = "application-work.xml";

   //============================================================
   // <T>生成一个会话。</T>
   //============================================================
   public static FGcSession makeSession(){
      FGcSession session = new FGcSession();
      session.setUserId(1);
      return session;
   }
}
