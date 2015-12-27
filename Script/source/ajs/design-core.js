MO.FDsModelRenderable = function FDsModelRenderable(o){
   o = MO.Class.inherits(this, o, MO.FE3dModelRenderable, MO.MDsBoundBox);
   o._optionSelected = false;
   o.filterDrawables = MO.FDsModelRenderable_filterDrawables;
   return o;
}
MO.FDsModelRenderable_filterDrawables = function FDsModelRenderable_filterDrawables(region){
   var o = this;
   var result = o.__base.FE3dSceneDisplayRenderable.filterDrawables.call(o, region);
   if(result){
      if(o._boundVisible){
         region.pushRenderable(o._boundBox);
      }
   }
   return result;
}
MO.FDsSceneDisplay = function FDsSceneDisplay(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneDisplay);
   return o;
}
MO.FDsSceneLayer = function FDsSceneLayer(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneLayer);
   return o;
}
MO.FDsSceneRenderable = function FDsSceneRenderable(o){
   o = MO.Class.inherits(this, o, MO.FE3dSceneDisplayRenderable, MO.MDsBoundBox);
   o._optionSelected = false;
   o.filterDrawables = MO.FDsSceneRenderable_filterDrawables;
   return o;
}
MO.FDsSceneRenderable_filterDrawables = function FDsSceneRenderable_filterDrawables(region){
   var o = this;
   var result = o.__base.FE3dSceneDisplayRenderable.filterDrawables.call(o, region);
   if(result){
      if(o._boundVisible){
         region.pushRenderable(o._boundBox);
      }
   }
   return result;
}
