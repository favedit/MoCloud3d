package org.mo.util.common;

import org.mo.com.lang.RUuid;

public class RGuidMaker
{
   public static void main(String[] args){
      while(true){
         String guid = RUuid.simpleUuid();
         if(guid.contains("[")){
            continue;
         }
         if(guid.contains("]")){
            continue;
         }
         System.out.println(guid);
         break;
      }
      //System.out.println(RUuid.simpleUuid());
      //System.out.println(RMd5.encode("admin"));
      //System.out.println(RSha1.encode("admin"));
   }
}
