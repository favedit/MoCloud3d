package org.mo.content.core.common;

import org.mo.com.lang.FObject;
import org.mo.web.protocol.context.IWebWriter;

//============================================================
// <T>网络JSONP写出器。</T>
//============================================================
public class FGcJsonpWriter
      extends FObject
      implements
         IWebWriter
{
   //请求返回参数
   private String _jsonpCallback;

   public String jsonpCallback(){
      return _jsonpCallback;
   }

   public void setJsonpCallbadk(String _jsonpCallback){
      this._jsonpCallback = _jsonpCallback;
   }

   //============================================================
   // <T>有参构造_jsonpCallback。</T>
   // @param _jsonpCallback
   // @return content
   //============================================================
   public FGcJsonpWriter(String _jsonpCallback){
      this._jsonpCallback = _jsonpCallback;
   }

   //============================================================
   // <T>无参构造。</T>
   //
   // @return content
   //============================================================
   public FGcJsonpWriter(){
   }

   //============================================================
   // <T>写出内容。</T>
   //
   // @return content
   //============================================================
   @Override
   public String write(String content){
      return _jsonpCallback + "(" + content + ")";
   }
}
