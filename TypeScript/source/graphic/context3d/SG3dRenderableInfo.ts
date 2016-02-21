module sk.graphic.context3d {
   //==========================================================
   // <T>可渲染对象信息。</T>
   //
   // @class
   // @author maocy
   // @history 150212
   //==========================================================
   export class SG3dRenderableInfo {
      // @attribute 代码
      public effect = null;
      public layout = null;
      public material = null;

      //==========================================================
      // <T>重置处理。</T>
      //
      // @method
      //==========================================================
      public reset() {
         var o = this;
         o.effect = null;
         o.layout = sk.common.lang.RObject.dispose(o.layout);
      }
   }
}