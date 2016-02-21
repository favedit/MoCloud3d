module sk.graphic.context3d {
   //==========================================================
   // <T>基础渲染材质。</T>
   //
   // @author maocy
   // @history 150107
   //==========================================================
   export class FG3dBaseMaterial extends sk.common.lang.FObject {
      // @attribute 名称
      protected _name: string = null;
      // @attribute 材质信息
      //_info = MO.Class.register(o, new MO.AGetter('_info'));
      protected _info = new SG3dMaterialInfo();

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
      }

      //==========================================================
      // <T>接收数据。</T>
      //
      // @method
      // @param info:SG3dMaterialInfo 材质信息
      //==========================================================
      public assignInfo(info) {
         this._info.assign(info);
      }

      //==========================================================
      // <T>接收材质信息。</T>
      //
      // @method
      // @param material:SG3dMaterialInfo 材质信息
      //==========================================================
      public assign(material) {
         this._info.assign(material.info());
      }

      //==========================================================
      // <T>计算材质信息。</T>
      //
      // @method
      // @param material:SG3dMaterialInfo 材质信息
      //==========================================================
      public calculate(material) {
         this._info.calculate(material.info());
      }
   }
}