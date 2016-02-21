module sk.graphic.context3d {
   //==========================================================
   // <T>渲染目标。</T>
   //
   // @author maocy
   // @history 150116
   //==========================================================
   export class FG3dRenderTarget extends FG3dObject {
      // @attribute
      //o._size = MO.Class.register(o, new MO.AGetter('_size'));
      protected _size: sk.common.math.SSize2 = new sk.common.math.SSize2();
      //o._color = MO.Class.register(o, new MO.AGetter('_color'));
      protected _color: sk.common.math.SColor4 = new sk.common.math.SColor4(0, 0, 0, 1);
      protected _textures: sk.common.lang.FObjects = new sk.common.lang.FObjects();

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
      }

      //==========================================================
      // <T>设置质量类型。</T>
      //
      // @method
      // @return qualityCd 质量类型
      //==========================================================
      public setQualityCd(qualityCd) {
         var o = this;
         var size = o._size;
         /*switch (qualityCd) {
            case MO.EGraphicQuality.Highest:
               size.set(4096, 4096);
               break;
            case MO.EGraphicQuality.High:
               size.set(2048, 2048);
               break;
            case MO.EGraphicQuality.Middle:
               size.set(1024, 1024);
               break;
            case MO.EGraphicQuality.Low:
               size.set(512, 512);
               break;
            case MO.EGraphicQuality.Lowest:
               size.set(256, 256);
               break;
            default:
               size.set(64, 64);
         }*/
      }

      //==========================================================
      // <T>获得纹理集合。</T>
      //
      // @method
      // @return TObjects 纹理集合
      //==========================================================
      public textures() {
         var o = this;
         var textures = o._textures;
         if (!textures) {
            textures = o._textures = new sk.common.lang.FObjects();
         }
         return textures;
      }

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         this._size = sk.common.lang.RObject.dispose(this._size);
         this._color = sk.common.lang.RObject.dispose(this._color);
         this._textures = sk.common.lang.RObject.dispose(this._textures);
         // 父处理
         super.dispose();
      }
   }
}