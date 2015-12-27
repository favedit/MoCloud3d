//==========================================================
// <T>设计项目资源控制台。</T>
//
// @class
// @author maocy
// @version 150331
//==========================================================
MO.FDrProjectConsole = function FDrProjectConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   // @attribute
   o._serviceCode = 'cloud.solution.project';
   return o;
}
