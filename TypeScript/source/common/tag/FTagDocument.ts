﻿module sk.common.tag {
   //==========================================================
   // <T>配置文档。</T>
   //
   // @tool
   // @author maocy
   // @version 150104
   //==========================================================
   export class FTagDocument extends sk.common.lang.FObject {
      // @attribute
      //_space = MO.Class.register(o, MO.AGetSet('_space'));
      protected _space: string = null;
      //_root = MO.Class.register(o, MO.AGetter('_root'));
      protected _root: FTag = null;

      public root(): FTag {
         return this._root;
      }

      //==========================================================
      // <T>创建一个标签对象。</T>
      //
      // @method
      // @param p:name:String 名称
      // @return FTag 标签
      //==========================================================
      public create(p) {
         var o = this;
         // 获得名称
         var sn = o._space + '_';
         var n = null;
         if (sk.common.lang.RString.startsWith(p, sn)) {
            n = p.substring(sn.length);
         } else {
            n = p;
         }
         // 创建节点
         var t = null;
         switch (n) {
            case 'source':
               t = sk.common.reflect.RClass.create(FTag);
               break;
            case 'write':
               t = sk.common.reflect.RClass.create(FTagWrite);
               break;
            case 'true':
               t = sk.common.reflect.RClass.create(FTagTrue);
               break;
            case 'false':
               t = sk.common.reflect.RClass.create(FTagFalse);
               break;
            case 'equals':
               t = sk.common.reflect.RClass.create(FTagEquals);
               break;
            case 'notEquals':
               t = sk.common.reflect.RClass.create(FTagNotEquals);
               break;
            default:
               throw new sk.common.lang.FError(o, 'Unknown tag type. (name={1})', n);
         }
         return t;
      }

      //===========================================================
      // 遍历构建XML节点树
      //
      // @method
      // @param pn:node:TXmlNode 父节点
      // @param pe:element:XmlElement 页面元素
      // @see RXml.fromText
      // @see TXmlDoc.create
      //===========================================================
      public loadNode(pn, pe) {
         var o = this;
         // 创建节点
         var x = o.create(pe.nodeName);
         if (pn) {
            pn.push(x);
         } else {
            o._root = x;
         }
         // 建立属性集合
         var eas = pe.attributes;
         if (eas) {
            var c = eas.length;
            for (var i = 0; i < c; i++) {
               var ea = eas[i];
               if (ea.nodeName) {
                  x.set(ea.nodeName, sk.common.xml.RXml.formatText(ea.value));
               }
            }
         }
         // 建立标签集合
         var ens = pe.childNodes
         if (ens) {
            var c = ens.length;
            for (var i = 0; i < c; i++) {
               var en = ens[i];
               switch (en.nodeType) {
                  case sk.common.xml.ENodeType.Text:
                     var xt = sk.common.reflect.RClass.create(FTagText);
                     xt.setText(en.nodeValue);
                     x.push(xt);
                     break;
                  case sk.common.xml.ENodeType.Data:
                     var xt = sk.common.reflect.RClass.create(FTagText);
                     xt.setText(en.data);
                     x.push(xt);
                     break;
                  case sk.common.xml.ENodeType.Node:
                     o.loadNode(x, en);
                     break;
               }
            }
         }
      }

      //==========================================================
      // <T>加载来源。</T>
      //
      // @method
      // @param p:source:String 来源
      //==========================================================
      public load(p) {
         var o = this;
         // 格式化代码
         var s = '<source>' + p + '</source>'
         s = s.replace(new RegExp('<' + o._space + ':', 'g'), '<' + o._space + '_');
         s = s.replace(new RegExp('</' + o._space + ':', 'g'), '</' + o._space + '_');
         s = s.replace(new RegExp(' & ', 'g'), ' &amp; ');
         s = s.replace(new RegExp(' < ', 'g'), ' &lt; ');
         s = s.replace(new RegExp(' > ', 'g'), ' &gt; ');
         // 解析内容
         var xr = sk.common.xml.RXml.formatText(s);
         o.loadNode(null, xr.firstChild);
      }

      //==========================================================
      // <T>解析处理。</T>
      //
      // @method
      // @param p:context:FTagContext 环境
      //==========================================================
      public parse(p) {
         var o = this;
         // 解析处理
         p.resetSource();
         o._root.parse(p);
         return p.source();
      }

      //==========================================================
      // <T>获得运行信息。</T>
      //
      // @method
      // @return String 运行信息
      //==========================================================
      public dump() {
         var r = new sk.common.lang.FString();
         r.appendLine(sk.common.reflect.RClass.dump(this));
         //r.appendLine(this.root().dump(r));
         return r.toString();
      }
   }
}