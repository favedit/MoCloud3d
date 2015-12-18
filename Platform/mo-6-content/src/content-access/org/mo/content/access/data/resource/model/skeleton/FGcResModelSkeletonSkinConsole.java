package org.mo.content.access.data.resource.model.skeleton;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.mongo.IGcStorageMongoConsole;
import org.mo.cloud.data.data.FDataResourceModelSkeletonSkinLogic;
import org.mo.com.data.FSql;
import org.mo.com.lang.EResult;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼蒙皮控制台。</T>
//============================================================
public class FGcResModelSkeletonSkinConsole
      extends FAbstractLogicUnitConsole<FDataResourceModelSkeletonSkinLogic, FGcResModelSkeletonSkinInfo>
      implements
         IGcResModelSkeletonSkinConsole
{
   // 存储管理接口
   @ALink
   protected IGcStorageMongoConsole _storageConsole;

   //============================================================
   // <T>构造资源模型骨骼蒙皮控制台。</T>
   //============================================================
   public FGcResModelSkeletonSkinConsole(){
      super(FDataResourceModelSkeletonSkinLogic.class, FGcResModelSkeletonSkinInfo.class);
   }

   //============================================================
   // <T>根据用户编号和代码查找蒙皮信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param modelId 模型编号
   // @param skeletonId 骨骼编号
   // @param code 代码
   // @return 蒙皮信息
   //============================================================
   @Override
   public FGcResModelSkeletonSkinInfo findByCode(ILogicContext logicContext,
                                                 long userId,
                                                 long projectId,
                                                 long modelId,
                                                 long skeletonId,
                                                 String code){
      // 生成条件
      FSql whereSql = new FSql("(" + FDataResourceModelSkeletonSkinLogic.USER_ID + "=" + userId + ")");
      if(projectId > 0){
         whereSql.append(" AND (" + FDataResourceModelSkeletonSkinLogic.PROJECT_ID + "=" + projectId + ")");
      }
      whereSql.append(" AND (" + FDataResourceModelSkeletonSkinLogic.MODEL_ID + "=" + modelId + ")");
      whereSql.append(" AND (" + FDataResourceModelSkeletonSkinLogic.SKELETON_ID + "=" + skeletonId + ")");
      whereSql.append(" AND (" + FDataResourceModelSkeletonSkinLogic.CODE + "='" + code + "')");
      // 查询信息
      FGcResModelSkeletonSkinInfo skinInfo = search(logicContext, whereSql);
      return skinInfo;
   }

   //============================================================
   // <T>更新记录后处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult onUpdateAfter(ILogicContext logicContext,
                                FGcResModelSkeletonSkinInfo unit){
      // 废弃临时数据
      String guid = unit.guid();
      _storageConsole.delete(EGcStorage.Content, EGcStorageCatalog.ResourceModelSkeletonSkin, guid);
      // 返回结果
      return EResult.Success;
   }

   //============================================================
   // <T>删除记录后处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult onDeleteAfter(ILogicContext logicContext,
                                FGcResModelSkeletonSkinInfo unit){
      // 废弃临时数据
      String guid = unit.guid();
      _storageConsole.delete(EGcStorage.Content, EGcStorageCatalog.ResourceModelSkeletonSkin, guid);
      // 返回结果
      return EResult.Success;
   }
}
