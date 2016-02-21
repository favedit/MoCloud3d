module sk.graphic.context2d {
   //==========================================================
   // <T>渲染环境。</T>
   //
   // @author maocy
   // @history 141230
   //==========================================================
   export class FG2dContext extends sk.graphic.context.FGraphicContext {
      //..........................................................
      // @attribute
      //_globalScale = MO.Class.register(o, new MO.AGetter('_globalScale'));
      _globalScale: sk.common.math.SSize2 = null;
      //_scale = MO.Class.register(o, new MO.AGetter('_scale'));
      _scale: sk.common.math.SSize2 = null;

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
         // 设置属性
         this._globalScale = new sk.common.math.SSize2(1, 1);
         this._scale = new sk.common.math.SSize2(1, 1);
      }

      //==========================================================
      // <T>关联页面画布标签。</T>
      //
      // @method
      // @param hCanvas:HtmlCanvasTag 页面画布标签
      //==========================================================
      public linkCanvas(hCanvas) {
         this._size.set(hCanvas.width, hCanvas.height);
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放属性
         this._globalScale = sk.common.lang.RObject.dispose(this._globalScale);
         this._scale = sk.common.lang.RObject.dispose(this._scale);
         // 父处理
         super.dispose();
      }
   }
}
