module sk.graphic.context3d {
   //==========================================================
   // <T>渲染投影。</T>
   //
   // @author maocy
   // @history 141230
   //==========================================================
   export class FG3dPerspectiveProjection extends FG3dProjection {
      //============================================================
      // <T>更新矩阵。</T>
      //
      // @method
      //============================================================
      public update() {
         var o = this;
         var size = o._size;
         o._fieldOfView = sk.common.math.RMath.DEGREE_RATE * o._angle;
         sk.common.math.RMatrix.perspectiveFieldOfViewLH(o._matrix, o._fieldOfView, size.width / size.height, o._znear, o._zfar);
      }

      //============================================================
      // <T>根据视截体更新矩阵。</T>
      //
      // @method
      // @param p:frustum:SFrustum 视截体
      //============================================================
      public updateFrustum(p) {
         var o = this;
         o._znear = p.minZ;
         o._zfar = p.maxZ;
         o.update();
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         super.dispose();
      }
   }
}
