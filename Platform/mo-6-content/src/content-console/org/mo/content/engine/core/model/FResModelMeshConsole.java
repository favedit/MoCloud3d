package org.mo.content.engine.core.model;

import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshConsole;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.model.FResModelMesh;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型网格控制台。</T>
//============================================================
public class FResModelMeshConsole
      extends FGcResModelMeshConsole
      implements
         IResModelMeshConsole
{
   //============================================================
   // <T>生成模型网格对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param meshInfo 网格信息
   // @return 模型网格对象
   //============================================================
   @Override
   public FResModelMesh makeResource(ILogicContext logicContext,
                                     FGcResModelMeshInfo meshInfo){
      String guid = meshInfo.guid();
      // 设置数据
      FGcStorageContent content = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourceModelMesh, guid);
      // 创建场景
      FResModelMesh mesh = new FResModelMesh();
      mesh.setStorageBytes(content.data());
      mesh.loadUnit(meshInfo);
      return mesh;
   }

   //============================================================
   // <T>生成模型网格对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编码
   // @return 模型网格对象
   //============================================================
   @Override
   public FResModelMesh makeResource(ILogicContext logicContext,
                                     String guid){
      // 检查参数
      if(RString.isEmpty(guid)){
         throw new FFatalError("Model mesh guid is null.");
      }
      // 查找信息
      FGcResModelMeshInfo meshInfo = findByGuid(logicContext, guid);
      if(meshInfo == null){
         throw new FFatalError("Model mesh is not exists. (guid={1})", guid);
      }
      return makeResource(logicContext, meshInfo);
   }

   //============================================================
   // <T>上传存储信息。</T>
   //
   // @param modelInfo 模型信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   public void uploadStorage(FGcResModelMeshInfo meshInfo,
                             FResModelMesh mesh){
      // 获得信息
      String guid = meshInfo.guid();
      String code = meshInfo.code();
      String label = meshInfo.label();
      // 存储数据
      FGcStorageContent content = new FGcStorageContent(EGcStorageCatalog.ResourceModelMesh, guid);
      content.setCode(code);
      content.setLabel(label);
      content.setData(mesh.toStorageBytes());
      _storageConsole.store(EGcStorage.Content, content);
   }

   //============================================================
   // <T>新建资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   @Override
   public FGcResModelMeshInfo insertResource(ILogicContext logicContext,
                                             IGcSession session,
                                             FGcResModelInfo modelInfo,
                                             FResModelMesh mesh){
      // 获得参数
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      //............................................................
      // 新建网格
      FGcResModelMeshInfo meshInfo = doPrepare(logicContext);
      meshInfo.setUserId(userId);
      meshInfo.setProjectId(projectId);
      meshInfo.setModelId(modelId);
      mesh.saveUnit(meshInfo);
      doInsert(logicContext, meshInfo);
      // 存储数据
      mesh.setGuid(meshInfo.guid());
      uploadStorage(meshInfo, mesh);
      // 返回网格信息
      return meshInfo;
   }

   //============================================================
   // <T>更新资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param meshInfo 网格信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   @Override
   public FGcResModelMeshInfo updateResource(ILogicContext logicContext,
                                             IGcSession session,
                                             FGcResModelInfo modelInfo,
                                             FGcResModelMeshInfo meshInfo,
                                             FResModelMesh mesh){
      // 获得网格信息
      if(meshInfo == null){
         throw new FFatalError("Mesh info is empty.");
      }
      //............................................................
      // 存储数据
      mesh.setGuid(meshInfo.guid());
      uploadStorage(meshInfo, mesh);
      // 更新网格
      mesh.saveUnit(meshInfo);
      doUpdate(logicContext, meshInfo);
      // 返回网格单元
      return meshInfo;
   }

   //============================================================
   // <T>导入资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   @Override
   public FGcResModelMeshInfo importResource(ILogicContext logicContext,
                                             IGcSession session,
                                             FGcResModelInfo modelInfo,
                                             FResModelMesh mesh){
      // 获得参数
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      String code = mesh.code();
      //............................................................
      // 查找网格信息
      FGcResModelMeshInfo meshInfo = findByModelCode(logicContext, userId, projectId, modelId, code);
      if(meshInfo == null){
         // 新建网格信息
         insertResource(logicContext, session, modelInfo, mesh);
      }else{
         // 更新网格信息
         updateResource(logicContext, session, modelInfo, meshInfo, mesh);
      }
      //............................................................
      // 返回网格单元
      return meshInfo;
   }
}
