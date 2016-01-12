package org.mo.cloud.javascript;

import java.io.File;

import org.mo.com.io.RFile;
import org.mo.com.lang.FStrings;
import org.mo.com.lang.RString;

//============================================================
// <T>游戏工具。</T>
//============================================================
public class RFileRenameUtil4
{
   //============================================================
   // <T>启动处理。</T>
   //============================================================
   public static void main(String[] args){
      String sourcePath = "H:/Download/Finish/[国剧] 芈月传 (2015-62.mp4-1280x720-31.3G)";
      FStrings fileNames = RFile.listFiles(sourcePath);
      for(String fileName : fileNames){
         if(fileName.contains("[电影天堂www.dy2018.com]")){
            String targetFileName = RString.replace(fileName, "[电影天堂www.dy2018.com]", "");
            if(!RFile.exists(targetFileName)){
               File file = new File(fileName);
               file.renameTo(new File(targetFileName));
               System.out.println(fileName + " -> " + targetFileName);
            }
         }
      }
   }
}
