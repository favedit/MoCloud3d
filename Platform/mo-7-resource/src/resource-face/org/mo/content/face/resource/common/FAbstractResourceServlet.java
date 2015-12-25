package org.mo.content.face.resource.common;

import javax.servlet.http.HttpServletResponse;

import org.mo.com.lang.FObject;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.com.net.EMime;
import org.mo.web.core.servlet.common.IWebServletResponse;

//============================================================
// <T>资源底层处理。</T>
//============================================================
public class FAbstractResourceServlet
      extends FObject
{
   // 日志输出接口
   private static ILogger _logger = RLogger.find(FAbstractResourceServlet.class);

   // 缓冲时间
   protected static long CacheTimeout = 3600 * 24 * 7 * 4;

   //============================================================
   // <T>发送二进制数据。</T>
   //
   // @param response 应答内容
   // @param data 数据
   //============================================================
   public void sendBinaryData(IWebServletResponse response,
                              byte[] data){
      // 获得数据长度
      int dataLength = data.length;
      //............................................................
      // 发送数据
      response.setCharacterEncoding("utf-8");
      response.setStatus(HttpServletResponse.SC_OK);
      response.setHeader("Cache-Control", "max-age=" + CacheTimeout);
      response.addHeader("Last-Modified", System.currentTimeMillis());
      response.addHeader("Expires", System.currentTimeMillis() + CacheTimeout * 1000);
      response.setContentType(EMime.Bin.mime());
      response.setContentLength(dataLength);
      response.write(data, 0, dataLength);
      _logger.debug(this, "process", "Send binary data. (length={1})", dataLength);
   }
}
