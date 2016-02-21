module sk.graphic.context3d {
   //==========================================================
   // <T>渲染材质。</T>
   //
   // @author maocy
   // @history 150107
   //==========================================================
   export class FG3dMaterial extends FG3dBaseMaterial {
      // @attribute
      protected _dirty = true;
      // @attribute
      //_textures = MO.Class.register(o, new MO.AGetter('_textures'))
      protected _textures = null;

      //==========================================================
      // <T>获得纹理集合。</T>
      //
      // @method
      // @return 纹理集合
      //==========================================================
      public setTexture(code, texture) {
         var o = this;
         var textures = o._textures;
         if (!textures) {
            textures = o._textures = new sk.common.lang.FDictionary();
         }
         textures.set(code, texture);
      }

      //==========================================================
      // <T>获得纹理集合。</T>
      //
      // @method
      // @return 纹理集合
      //==========================================================
      public update() {
         this._dirty = true;
      }
   }
}