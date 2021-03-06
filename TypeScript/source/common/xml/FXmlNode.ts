﻿module sk.common.xml {
   //==========================================================
   // <T>节点工具类。</T>
   //
   // @tool
   // @author maocy
   // @version 150104
   //==========================================================
   export class FXmlNode extends FNode {

      constructor(name: string = null) {
         super(name);
      }

      //==========================================================
      // <T>创建一个新的节点,并把这个节点放到父节点里。</T>
      //
      // @method
      // @param name:String 名称
      // @param attribtues:TAttributes 属性集合
      // @return TNode 返回新建的节点
      //==========================================================
      public create(name, attribtues) {
         var o = this;
         var xnode: any = new FXmlNode();
         xnode._name = name;
         xnode._attributes = attribtues;
         if (!sk.common.reflect.RClass.isClass(attribtues, sk.common.lang.FAttributes)) {
            var a = arguments;
            var len = a.length;
            for (var n = 1; n < len; n += 2) {
               if (n + 1 < len) {
                  xnode.set(a[n], a[n + 1]);
               } else {
                  xnode.setValue(a[n]);
               }
            }
         }
         o.push(xnode);
         return xnode;
      }

      //==========================================================
      // <T>构建配置文本。</T>
      //
      // @method
      // @param s:string:String 字符串对象
      // @param l:level:Integer 层级
      // @return String 构建成xml格式的字符串
      //==========================================================
      public innerXml(s, l) {
         var o: any = this;
         s.appendRepeat('   ', l);
         s.append('<', o._name);
         var as = o._attributes;
         if (as) {
            var ac = as.count();
            for (var n = 0; n < ac; n++) {
               s.append(' ', as.name(n), '="');
               RXml.buildText(s, as.value(n));
               s.append('"');
            }
         }
         if (!o._nodes && (o._value == null)) {
            s.append('/');
         }
         s.append('>\n');
         var ns = o._nodes;
         if (ns) {
            var c = ns.count();
            for (var n = 0; n < c; n++) {
               ns.get(n).innerXml(s, l + 1);
            }
         }
         RXml.buildText(s, o._value)
         if (o._nodes || o._value != null) {
            s.appendRepeat('   ', l);
            s.append('</', o._name, '>');
            s.append('\n');
         }
         return s;
      }

      //==========================================================
      // <T>构建配置文本。</T>
      //
      // @method
      // @return String 配置文本
      //==========================================================
      public xml() {
         var xml = new sk.common.lang.FString();
         this.innerXml(xml, 0);
         return xml.flush();
      }

      //==========================================================
      // <T>将构建成xml格式的字符串对象转换为字符串。</T>
      //
      // @method
      // @return String 字符串
      //==========================================================
      public toString() {
         return this.xml().toString();
      }
   }
}