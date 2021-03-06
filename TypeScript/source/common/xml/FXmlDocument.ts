﻿module sk.common.xml {
   //==========================================================
   // <T>配置文档。</T>
   //
   // @tool
   // @author maocy
   // @version 150104
   //==========================================================
   export class FXmlDocument extends sk.common.lang.FObject {
      // @attribute
      protected _root: FXmlNode = null;

      //==========================================================
      // <T>创建一个节点对象。</T>
      //
      // @method
      // @param n:name:String 节点名称
      // @param a:attributes:TAttributes 节点属性
      // @param v:value:String 节点名称
      // @return TXmlNode 节点对象
      //==========================================================
      public create(n, a, v) {
         var r: any = new FXmlNode();
         r._name = n;
         r._attributes = a;
         r._value = v;
         return r;
      }

      //==========================================================
      // <T>获得文档的根节点。</T>
      // <P>如果文档的根节点不存在，则创建一个新的根节点。</P>
      //
      // @method
      // @return TXmlNode 根节点
      //==========================================================
      public root() {
         var o = this;
         var r: any = o._root;
         if (!r) {
            r = o._root = new FXmlNode();
            r._name = 'Configuration';
         }
         return r;
      }

      //==========================================================
      // <T>设置文档的根节点。</T>
      //
      // @method
      // @param p:node:TXmlNode 根节点
      //==========================================================
      public setRoot(p) {
         var o = this;
         if (!o._root) {
            o._root = p;
         } else {
            throw new sk.common.lang.FError(o, 'Root node is already exists.');
         }
      }

      //==========================================================
      // <T>获得配置字符串。</T>
      //
      // @method
      // @return String 配置字符串
      //==========================================================
      public xml() {
         var xml = new sk.common.lang.FString();
         xml.append("<?xml version='1.0' encoding='UTF-8'?>");
         this.root().innerXml(xml, 0);
         return xml.flush();
      }

      //==========================================================
      // <T>获得内部调试信息。</T>
      //
      // @method
      // @return String 调试信息
      //==========================================================
      public dump() {
         var o = this;
         var r = new sk.common.lang.FString();
         r.appendLine(sk.common.reflect.RClass.name(o));
         o.root().dump(r);
         return r.flush();
      }
   }
}