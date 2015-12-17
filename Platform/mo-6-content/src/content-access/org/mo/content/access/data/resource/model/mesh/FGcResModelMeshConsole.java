package org.mo.content.access.data.resource.model.mesh;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.mongo.IGcStorageMongoConsole;
import org.mo.cloud.data.data.FDataResourceModelMeshLogic;
import org.mo.com.data.FSql;
import org.mo.com.data.RSql;
import org.mo.com.lang.EResult;
import org.mo.content.access.data.resource.IGcResourceConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>3D资源网格控制台。</T>
//============================================================
public class FGcResModelMeshConsole
      extends FAbstractLogicUnitConsole<FDataResourceModelMeshLogic, FGcResModelMeshInfo>
      implements
         IGcResModelMeshConsole
{
   // 存储管理接口
   @ALink
   protected IGcStorageMongoConsole _storageConsole;

   // 资源管理器
   @ALink
   protected IGcResourceConsole _resourceConsole;

   //============================================================
   // <T>构造3D资源网格控制台。</T>
   //============================================================
   public FGcResModelMeshConsole(){
      super(FDataResourceModelMeshLogic.class, FGcResModelMeshInfo.class);
   }

   //============================================================
   // <T>根据代码查找网格单元。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param code 代码
   // @return 网格信息
   //============================================================
   @Override
   public FGcResModelMeshInfo findByCode(ILogicContext logicContext,
                                         long userId,
                                         long projectId,
                                         String code){
      // 生成条件
      FSql whereSql = new FSql("(" + FDataResourceModelMeshLogic.USER_ID + "=" + userId + ")");
      if(projectId > 0){
         whereSql.append(" AND (" + FDataResourceModelMeshLogic.PROJECT_ID + "=" + projectId + ")");
      }
      whereSql.append(" AND (" + FDataResourceModelMeshLogic.CODE + "='" + code + "')");
      // 查询信息
      FGcResModelMeshInfo meshInfo = search(logicContext, whereSql);
      return meshInfo;
   }

   //============================================================
   // <T>根据用户编号和代码查找网格信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param modelId 模型编号
   // @param code 项目代码
   // @return 网格信息
   //============================================================
   @Override
   public FGcResModelMeshInfo findByModelCode(ILogicContext logicContext,
                                              long userId,
                                              long projectId,
                                              long modelId,
                                              String code){
      // 生成条件
      FSql whereSql = new FSql("(" + FDataResourceModelMeshLogic.USER_ID + "=" + userId + ")");
      if(projectId > 0){
         whereSql.append(" AND (" + FDataResourceModelMeshLogic.PROJECT_ID + "=" + projectId + ")");
      }
      whereSql.append(" AND (" + FDataResourceModelMeshLogic.MODEL_ID + "=" + modelId + ")");
      whereSql.append(" AND (" + FDataResourceModelMeshLogic.CODE + "='" + code + "')");
      // 查询信息
      FGcResModelMeshInfo meshInfo = search(logicContext, whereSql);
      return meshInfo;
   }

   //============================================================
   // <T>根据代码查找模型网格单元。</T>
   //
   // @param logicContext 逻辑环境
   // @param code 代码
   // @return 模型网格单元
   //============================================================
   @Override
   public FGcResModelMeshInfo findByModelCode(ILogicContext logicContext,
                                              long modelId,
                                              String code){
      String whereSql = "(" + FDataResourceModelMeshLogic.MODEL_ID + "=" + modelId + ")";
      whereSql += " AND (" + FDataResourceModelMeshLogic.CODE + "='" + RSql.formatValue(code) + "')";
      FGcResModelMeshInfo meshInfo = search(logicContext, whereSql);
      return meshInfo;
   }

   //============================================================
   // <T>根据模型编号查找所有网格集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模型编号
   // @return 网格集合
   //============================================================
   @Override
   public FLogicDataset<FGcResModelMeshInfo> fetchByModelId(ILogicContext logicContext,
                                                            long modelId){
      String whereSql = FDataResourceModelMeshLogic.MODEL_ID + "=" + modelId;
      String orderBy = FDataResourceModelMeshLogic.SORT_INDEX + " ASC";
      // 查询集合
      FDataResourceModelMeshLogic logic = findLogic(logicContext);
      FLogicDataset<FGcResModelMeshInfo> dataset = logic.fetchClass(FGcResModelMeshInfo.class, whereSql, orderBy);
      return dataset;
   }

   //============================================================
   // <T>根据模型编号删除所有网格集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模型编号
   // @return 处理结果
   //============================================================
   @Override
   public EResult doDeleteByModelId(ILogicContext logicContext,
                                    long modelId){
      String whereSql = FDataResourceModelMeshLogic.MODEL_ID + "=" + modelId;
      // 查询集合
      FDataResourceModelMeshLogic logic = findLogic(logicContext);
      FLogicDataset<FGcResModelMeshInfo> dataset = logic.fetchClass(FGcResModelMeshInfo.class, whereSql);
      if(dataset != null){
         for(FGcResModelMeshInfo modelMesh : dataset){
            doDelete(logicContext, modelMesh);
         }
      }
      return EResult.Success;
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
                                FGcResModelMeshInfo unit){
      // 废弃临时数据
      String guid = unit.guid();
      _storageConsole.delete(EGcStorage.Cache, EGcStorageCatalog.ResourceModelMesh, guid);
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
                                FGcResModelMeshInfo unit){
      // 废弃临时数据
      String guid = unit.guid();
      _storageConsole.delete(EGcStorage.Cache, EGcStorageCatalog.ResourceModelMesh, guid);
      // 返回结果
      return EResult.Success;
   }
}
