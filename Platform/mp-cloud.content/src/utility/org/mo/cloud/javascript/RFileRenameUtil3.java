package org.mo.cloud.javascript;

import java.io.File;

import org.mo.com.io.RDirectory;
import org.mo.com.io.RFile;
import org.mo.com.lang.FStrings;
import org.mo.com.lang.RString;

//============================================================
// <T>游戏工具。</T>
//============================================================
public class RFileRenameUtil3
{
   //============================================================
   // <T>启动处理。</T>
   //============================================================
   public static void main(String[] args){
      String sourcePath = "N:/[Temp]";
      FStrings fileNames = RDirectory.listDirectory(sourcePath, true);
      for(String fileName : fileNames){
         if(fileName.contains("\\! ")){
            String targetFileName = RString.replace(fileName, "\\! ", "\\");
            if(!RFile.exists(targetFileName)){
               File file = new File(fileName);
               file.renameTo(new File(targetFileName));
               System.out.println(fileName + " -> " + targetFileName);
            }
         }
      }
   }
}
