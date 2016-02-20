module sk.common.reflect {
   //============================================================
   // <T>属性描述类。</T>
   //
   // @property
   // @param name:String 名称
   // @param linker:String 关联名称
   // @author maocy
   // @version 141231
   //============================================================
   export class AProperty extends AAnnotation {
      //..........................................................
      // @declare
      _inherit = true;
      _annotationCd = EAnnotation.Property;
      //..........................................................
      // @attribute
      _linker = null;
      _force = false;
      //..........................................................
      // @construct
      public constructor(name, linker) {
         super(name);
         var code = null;
         if (linker == null) {
            if (sk.common.lang.RString.startsWith(name, '_')) {
               code = name.substring(1);
            } else {
               code = name;
            }
            code = sk.common.lang.RString.toUnderline(code);
         } else {
            code = linker;
         }
         this._linker = code;
      }

      //============================================================
      // <T>获得代码。</T>
      //
      // @method
      // @return String 代码
      //============================================================
      public code() {
         return this._linker;
      }

      //============================================================
      // <T>构建处理。</T>
      //
      // @method
      // @param v:value:Object 对象
      //============================================================
      public build() {
      }

      //============================================================
      // <T>加载属性值。</T>
      //
      // @method
      // @param v:value:Object 对象
      // @param x:config:TNode 节点
      //============================================================
      public load(v, x) {
         v[this._name] = x.get(this._linker);
      }

      //============================================================
      // <T>存储属性值。</T>
      //
      // @method
      // @param v:value:Object 对象
      // @param x:config:TNode 节点
      //============================================================
      public save(v, x) {
         x.set(this._linker, v[this._name]);
      }

      //============================================================
      // <T>获得字符串。</T>
      //
      // @method
      // @return String 字符串
      //============================================================
      public toString() {
         return '<' + this._annotationCd + ',linker=' + this._linker + '>';
      }
   }
}