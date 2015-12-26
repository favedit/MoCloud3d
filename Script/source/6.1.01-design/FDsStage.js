//==========================================================
// <T>简单三维舞台对象。</T>
//
// @author maocy
// @history 150106
//==========================================================
MO.FDsStage = function FDsStage(o){
   o = MO.Class.inherits(this, o, MO.FE3dStage);
   //..........................................................
   // @attribute
   o._mapLayer    = MO.Class.register(o, new MO.AGetter('_mapLayer'));
   o._spriteLayer = MO.Class.register(o, new MO.AGetter('_spriteLayer'));
   o._faceLayer   = MO.Class.register(o, new MO.AGetter('_faceLayer'));
   //..........................................................
   // @method
   o.construct    = MO.FDsStage_construct;
   // @method
   o.active       = MO.FDsStage_active;
   o.deactive     = MO.FDsStage_deactive;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FDsStage_construct = function FDsStage_construct(){
   var o = this;
   o.__base.FE3dStage.construct.call(o);
   // 创建地图层
   var layer = o._mapLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('MapLayer', layer);
   // 创建精灵层
   var layer = o._spriteLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('SpriteLayer', layer);
   // 创建界面层
   var layer = o._faceLayer = MO.Class.create(MO.FDisplayLayer);
   o.registerLayer('FaceLayer', layer);
}

//==========================================================
// <T>激活处理。</T>
//
// @method
//==========================================================
MO.FDsStage_active = function FDsStage_active(){
   var o = this;
   o.__base.FE3dStage.active.call(o);
}

//==========================================================
// <T>取消激活处理。</T>
//
// @method
//==========================================================
MO.FDsStage_deactive = function FDsStage_deactive(){
   var o = this;
   o.__base.FE3dStage.deactive.call(o);
}
