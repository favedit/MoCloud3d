package org.mo.content.common;

import org.mo.cloud.logic.data.system.FGcSessionInfo;

public class RRs3Configuration
{
   public static String RootPath = "D:/Microbject/MoCloud3d";

   public static String Config = "application-work.xml";

   //============================================================
   // <T>生成一个会话。</T>
   //============================================================
   public static FGcSessionInfo makeSession(){
      FGcSessionInfo session = new FGcSessionInfo();
      session.setUserId(1);
      return session;
   }
}
