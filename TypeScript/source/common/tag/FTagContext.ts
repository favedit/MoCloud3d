module sk.common.tag {
   //==========================================================
   // <T>标签环境类。</T>
   //
   // @class
   // @author maocy
   // @version 150114
   //==========================================================
   export class FTagContext extends sk.common.lang.FObject {
      //..........................................................
      // @attribute
      protected _trimLeft = false;
      protected _trimRight = false;
      //protected _attributes = MO.Class.register(o, new MO.AGetter('_attributes'));
      protected _attributes:sk.common.lang.FAttributes = null;
      protected _source = null;

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
         this._attributes = new sk.common.lang.FAttributes();
         this._source = new sk.common.lang.FString();
      }

      //==========================================================
      // <T>收集处理。</T>
      //
      // @method
      //==========================================================
      public instanceAlloc() {
         this._attributes.clear();
      }

      //==========================================================
      // <T>取得属性值。</T>
      //
      // @method
      // @param name:String 名称
      // @param value:String 默认值
      // @return String 内容
      //==========================================================
      public get(name, value) {
         return this._attributes.get(name, value);
      }

      //==========================================================
      // <T>设置属性值。</T>
      //
      // @method
      // @param name:String 名称
      // @param value:String 内容
      //==========================================================
      public set(name, value) {
         this._attributes.set(name, value);
      }

      //==========================================================
      // <T>设置布尔属性值。</T>
      //
      // @method
      // @param name:String 名称
      // @param value:String 内容
      //==========================================================
      public setBoolean(name, value) {
         this._attributes.set(name, sk.common.lang.RBoolean.toString(value));
      }

      //==========================================================
      // <T>获得代码。</T>
      //
      // @method
      // @return TString 代码
      //==========================================================
      public source() {
         return this._source.toString();
      }

      //==========================================================
      // <T>输出文本。</T>
      //
      // @method
      // @param String 文本
      //==========================================================
      public write(p) {
         if (!sk.common.lang.RString.isEmpty(p)) {
            this._source.append(p);
         }
      }

      //==========================================================
      // <T>重置代码内容。</T>
      //
      // @method
      //==========================================================
      public resetSource(p) {
         this._source.clear();
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         this._attributes = sk.common.lang.RObject.dispose(this._attributes);
         this._source = sk.common.lang.RObject.dispose(this._source);
         super.dispose();
      }
   }
}
