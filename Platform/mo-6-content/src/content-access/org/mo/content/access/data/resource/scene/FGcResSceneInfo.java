package org.mo.content.access.data.resource.scene;

import org.mo.cloud.data.data.FDataResourceSceneUnit;

//============================================================
// <T>3D资源场景。</T>
//============================================================
public class FGcResSceneInfo
      extends FDataResourceSceneUnit
{
   // 目录编号
   private long _catalogId;

   //============================================================
   // <T>获得目录编号。</T>
   //
   // @return 目录编号
   //============================================================
   public long catalogId(){
      return _catalogId;
   }

   //============================================================
   // <T>设置目录编号。</T>
   //
   // @param catalogId 目录编号
   //============================================================
   public void setCatalogId(long catalogId){
      _catalogId = catalogId;
   }
}
