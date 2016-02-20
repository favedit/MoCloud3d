//==========================================================
// <T>方向光源。</T>
//
// @author maocy
// @history 141230
//==========================================================
MO.FG3dDirectionalLight = function FG3dDirectionalLight(o){
   o = MO.Class.inherits(this, o, MO.FG3dLight);
   //..........................................................
   // @attribute
   o._camera      = MO.Class.register(o, new MO.AGetter('_camera'));
   o._viewport    = MO.Class.register(o, new MO.AGetter('_viewport'));
   o._direction   = MO.Class.register(o, new MO.AGetter('_direction'));
   // @attribute
   o._classCamera = MO.FG3dCamera;
   //..........................................................
   // @method
   o.construct    = MO.FG3dDirectionalLight_construct;
   o.dispose      = MO.FG3dDirectionalLight_dispose;
   return o;
}

//==========================================================
// <T>构造处理。</T>
//
// @method
//==========================================================
MO.FG3dDirectionalLight_construct = function FG3dDirectionalLight_construct(){
   var o = this;
   o.__base.FG3dLight.construct.call(o);
   // 设置属性
   o._camera = MO.Class.create(o._classCamera);
   o._direction = new MO.SVector3();
}

//==========================================================
// <T>释放处理。</T>
//
// @method
//==========================================================
MO.FG3dDirectionalLight_dispose = function FG3dDirectionalLight_dispose(){
   var o = this;
   // 释放属性
   o._camera = MO.Lang.Object.dispose(o._camera);
   o._direction = MO.Lang.Object.dispose(o._direction);
   // 父处理
   o.__base.FG3dLight.dispose.call(o);
}
