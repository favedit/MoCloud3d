module sk.graphic.context2d {
   //==========================================================
   // <T>渲染对象。</T>
   //
   // @author maocy
   // @history 150212
   //==========================================================
   export class FG2dObject {
      //o = MO.Class.inherits(this, o, MO.FObject, MO.MGraphicObject);

      //==========================================================
      // <T>配置处理。</T>
      //
      // @method
      //==========================================================
      public setup() {
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         var o = this;
         //o.__base.MGraphicObject.dispose.call(o);
         //o.__base.FObject.dispose.call(o);
      }
   }