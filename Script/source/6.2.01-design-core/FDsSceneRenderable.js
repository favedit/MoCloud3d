 //==========================================================
// <T>场景渲染对象。</T>
//
// @class
// @author maocy
// @history 150215
//==========================================================
MO.FDsSceneRenderable = function FDsSceneRenderable(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneDisplayRenderable, MO.MDsBoundBox);
   //..........................................................
   // @attribute
   o._optionSelected = false;
   o.filterDrawables = MO.FDsSceneRenderable_filterDrawables;
   return o;
}

//==========================================================
// <T>过滤渲染集合。</T>
//
// @method
// @param region:FRegion 渲染区域
//==========================================================
MO.FDsSceneRenderable_filterDrawables = function FDsSceneRenderable_filterDrawables(region){
   var o = this;
   var result = o.__base.FE3dSceneDisplayRenderable.filterDrawables.call(o, region);
   if(result){
      // 增加边框
      if(o._boundVisible){
         region.pushRenderable(o._boundBox);
      }
   }
   return result;
}
