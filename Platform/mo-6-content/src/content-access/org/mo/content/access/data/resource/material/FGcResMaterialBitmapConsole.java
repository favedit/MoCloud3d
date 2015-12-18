package org.mo.content.access.data.resource.material;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataResourceMaterialBitmapLogic;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源材质信息控制台。</T>
//============================================================
public class FGcResMaterialBitmapConsole
      extends FAbstractLogicUnitConsole<FDataResourceMaterialBitmapLogic, FGcResMaterialBitmapInfo>
      implements
         IGcResMaterialBitmapConsole
{
   //============================================================
   // <T>构造资源位图信息控制台。</T>
   //============================================================
   public FGcResMaterialBitmapConsole(){
      super(FDataResourceMaterialBitmapLogic.class, FGcResMaterialBitmapInfo.class);
   }

   //============================================================
   // <T>根据材质和格式代码查找位图信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param materialId 材质编号
   // @param formatCode 格式代码
   // @return 位图信息
   //============================================================
   @Override
   public FGcResMaterialBitmapInfo findByFormatCode(ILogicContext logicContext,
                                                    long materialId,
                                                    String formatCode){
      String whereSql = "(" + FDataResourceMaterialBitmapLogic.MATERIAL_ID + "=" + materialId + ")";
      whereSql += " AND (" + FDataResourceMaterialBitmapLogic.FORMAT_CODE + "='" + formatCode + "')";
      FGcResMaterialBitmapInfo bitmapInfo = search(logicContext, whereSql);
      return bitmapInfo;
   }

   //============================================================
   // <T>根据材质编号查找位图信息集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param materialId 材质编号
   // @return 位图信息集合
   //============================================================
   @Override
   public FLogicDataset<FGcResMaterialBitmapInfo> fetchByMaterialId(ILogicContext logicContext,
                                                                    long materialId){
      String whereSql = FDataResourceMaterialBitmapLogic.MATERIAL_ID + "='" + materialId + "'";
      String orderSql = FDataResourceMaterialBitmapLogic.SLOT + " ASC, " + FDataResourceMaterialBitmapLogic.FORMAT_CODE + " ASC";
      FLogicDataset<FGcResMaterialBitmapInfo> dataset = fetch(logicContext, whereSql, orderSql);
      return dataset;
   }
}
