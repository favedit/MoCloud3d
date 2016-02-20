module sk.graphic.context {
   //==========================================================
   // <T>渲染环境。</T>
   //
   // @author maocy
   // @history 150107
   //==========================================================
   export class FGraphicContext extends sk.common.lang.FObject {
      //o = MO.Class.inherits(this, o, MO.FObject, MO.MGraphicObject);
      //..........................................................
      // @attribute
      //_size = MO.Class.register(o, new MO.AGetter('_size'));
      _size: sk.common.math.SSize2 = null;
      //_hCanvas = MO.Class.register(o, new MO.AGetter('_hCanvas', 'htmlCanvas'));
      _hCanvas = null;
      //..........................................................
      // @method
      //o.construct = MO.FGraphicContext_construct;
      // @method
      //o.linkCanvas = MO.Method.virtual(o, 'linkCanvas');
      // @method
      //o.dispose = MO.FGraphicContext_dispose;

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
         // 设置属性
         this._size = new sk.common.math.SSize2(1280, 720);
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放属性
         this._size = sk.common.lang.RObject.dispose(this._size);
         this._hCanvas = null;
         // 父处理
         super.dispose();
      }
   }
}