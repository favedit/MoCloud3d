package org.mo.content.resource;

import org.mo.data.nosql.mongodb.FMongodbConnection;

public class RMongoTest
{
   public static void main(String[] args){
      // 创建链接
      FMongodbConnection connection = new FMongodbConnection();
      connection.connect("192.168.153.129", 27017, "test");
      // 写入
      //      FNosqlContent content = new FNosqlContent();
      //      content.setCatalog("movie");
      //      content.setGuid(RUuid.makeUniqueId());
      //      content.setCode("test");
      //      content.loadFile("H:/Download/Finish/[Cartoon] 牙狼-紅蓮之月/[光の影字幕组][牙狼-紅蓮之月][01][陰陽][x264_AAC][720p][TVrip][MKV].mkv");
      //      connection.storeContent(content);
      // 读取
      //      FNosqlContent content = connection.findContent("movie", "10ABA581D1DB436AAC5317D6B0256F92");
      //      content.saveFile("D:/test.mkv");
      // 删除
      connection.deleteContent("movie", "10ABA581D1DB436AAC5317D6B0256F92");
      //      FByteFile file1 = new FByteFile("D:/test.mkv");
      //      FByteFile file2 = new FByteFile("H:/Download/Finish/[Cartoon] 牙狼-紅蓮之月/[光の影字幕组][牙狼-紅蓮之月][01][陰陽][x264_AAC][720p][TVrip][MKV].mkv");
      //      System.out.println(RByte.compare(file1.toArray(), file2.toArray()));
      System.out.println("Success");
   }

}
