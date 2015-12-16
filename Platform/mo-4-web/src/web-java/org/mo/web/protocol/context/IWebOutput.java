package org.mo.web.protocol.context;

import org.mo.com.xml.FXmlNode;

//============================================================
// <T>网页配置输出器接口。</T>
//============================================================
public interface IWebOutput
      extends
         IWebDataOutput
{
   //============================================================
   // <T>获得设置节点。</T>
   //
   // @return 设置节点
   //============================================================
   FXmlNode config();

   //============================================================
   // <T>设置名称。</T>
   //
   // @param name 名称
   //============================================================
   void setName(String name);

   //============================================================
   // <T>设置属性内容。</T>
   //
   // @param name 名称
   // @param value 内容
   //============================================================
   void set(String name,
            String value);
}
