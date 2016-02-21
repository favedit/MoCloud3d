module sk.graphic.context3d {
   //==========================================================
   // <T>渲染投影。</T>
   //
   // @author maocy
   // @history 141230
   //==========================================================
   export class FG3dProjection extends sk.common.lang.FObject {
      // @attribute
      //_matrix      = MO.Class.register(o, new MO.AGetter('_matrix'));
      protected _matrix: sk.common.math.SMatrix3d = new sk.common.math.SMatrix3d();
      // @attribute
      //o._size        = MO.Class.register(o, new MO.AGetter('_size'));
      protected _size: sk.common.math.SSize2 = new sk.common.math.SSize2();
      //o._angle       = MO.Class.register(o, new MO.AGetSet('_angle'), 60.0);
      protected _angle: number = 60;
      //o._fieldOfView = MO.Class.register(o, new MO.AGetSet('_fieldOfView'), 0);
      protected _fieldOfView = 0;
      //o._znear       = MO.Class.register(o, new MO.AGetSet('_znear'), 0.1);
      protected _znear: number = 0.1;
      //o._zfar        = MO.Class.register(o, new MO.AGetSet('_zfar'), 200);
      protected _zfar: number = 200;
      //o._zoom        = MO.Class.register(o, new MO.AGetSet('_zoom'), 1);

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
      }

      //==========================================================
      // <T>获得距离。</T>
      //
      // @method
      // @return Number 距离
      //==========================================================
      public distance() {
         return this._zfar - this._znear;
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放属性
         this._matrix = sk.common.lang.RObject.dispose(this._matrix);
         this._size = sk.common.lang.RObject.dispose(this._size);
         // 父处理
         super.dispose();
      }
   }
}