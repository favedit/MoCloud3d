//==========================================================
// <T>设计网格3D资源。</T>
//
// @class
// @author maocy
// @version 150331
//==========================================================
MO.FDrMesh = function FDrMesh(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   //..........................................................
   // @attribute
   o._classCode = 'Mesh';
   return o;
}
