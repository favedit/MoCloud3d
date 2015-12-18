package org.mo.content.engine.core.model.skeleton;

import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonSkinConsole;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonSkinInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.common.FResSkeletonSkin;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼蒙皮控制台。</T>
//============================================================
public class FResModelSkeletonSkinConsole
      extends FGcResModelSkeletonSkinConsole
      implements
         IResModelSkeletonSkinConsole
{
   //============================================================
   // <T>生成模型骨骼蒙皮对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param meshInfo 网格信息
   // @return 模型骨骼蒙皮对象
   //============================================================
   @Override
   public FResSkeletonSkin makeResource(ILogicContext logicContext,
                                        FGcResModelSkeletonSkinInfo skinInfo){
      String guid = skinInfo.guid();
      // 设置数据
      FGcStorageContent content = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourceModelSkeletonSkin, guid);
      // 创建场景
      FResSkeletonSkin skin = new FResSkeletonSkin();
      skin.setStorageBytes(content.data());
      skin.loadUnit(skinInfo);
      return skin;
   }

   //============================================================
   // <T>生成模型骨骼蒙皮对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编码
   // @return 模型骨骼蒙皮对象
   //============================================================
   @Override
   public FResSkeletonSkin makeResource(ILogicContext logicContext,
                                        String guid){
      // 检查参数
      if(RString.isEmpty(guid)){
         throw new FFatalError("Model mesh guid is null.");
      }
      // 查找信息
      FGcResModelSkeletonSkinInfo skinInfo = findByGuid(logicContext, guid);
      if(skinInfo == null){
         throw new FFatalError("Model mesh is not exists. (guid={1})", guid);
      }
      return makeResource(logicContext, skinInfo);
   }

   //============================================================
   // <T>上传存储信息。</T>
   //
   // @param skinInfo 模型骨骼蒙皮信息
   // @param mesh 蒙皮数据
   //============================================================
   public void uploadStorage(FGcResModelSkeletonSkinInfo skinInfo,
                             FResSkeletonSkin skin){
      // 获得信息
      String guid = skinInfo.guid();
      String code = skinInfo.code();
      String label = skinInfo.label();
      // 存储数据
      FGcStorageContent content = new FGcStorageContent(EGcStorageCatalog.ResourceModelSkeletonSkin, guid);
      content.setCode(code);
      content.setLabel(label);
      content.setData(skin.toStorageBytes());
      _storageConsole.store(EGcStorage.Content, content);
   }

   //============================================================
   // <T>新建资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param meshInfo 网格信息
   // @param skeletonInfo 骨骼信息
   // @return 蒙皮信息
   //============================================================
   @Override
   public FGcResModelSkeletonSkinInfo insertResource(ILogicContext logicContext,
                                                     IGcSession session,
                                                     FGcResModelInfo modelInfo,
                                                     FGcResModelMeshInfo meshInfo,
                                                     FGcResModelSkeletonInfo skeletonInfo,
                                                     FResSkeletonSkin skin){
      // 获得参数
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      long meshId = meshInfo.ouid();
      String meshCode = meshInfo.code();
      String meshLabel = meshInfo.label();
      long skeletonId = skeletonInfo.ouid();
      //............................................................
      // 新建网格
      FGcResModelSkeletonSkinInfo skinInfo = doPrepare(logicContext);
      skinInfo.setUserId(userId);
      skinInfo.setProjectId(projectId);
      skinInfo.setModelId(modelId);
      skinInfo.setMeshId(meshId);
      skinInfo.setSkeletonId(skeletonId);
      skin.saveUnit(skinInfo);
      skinInfo.setCode(meshCode);
      skinInfo.setLabel(meshLabel);
      doInsert(logicContext, skinInfo);
      // 存储数据
      skin.setGuid(skinInfo.guid());
      uploadStorage(skinInfo, skin);
      // 返回网格信息
      return skinInfo;
   }

   //============================================================
   // <T>更新资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param meshInfo 网格信息
   // @param skeletonInfo 骨骼信息
   // @param skinInfo 蒙皮信息
   // @param mesh 网格数据
   // @return 蒙皮信息
   //============================================================
   @Override
   public FGcResModelSkeletonSkinInfo updateResource(ILogicContext logicContext,
                                                     IGcSession session,
                                                     FGcResModelInfo modelInfo,
                                                     FGcResModelMeshInfo meshInfo,
                                                     FGcResModelSkeletonInfo skeletonInfo,
                                                     FGcResModelSkeletonSkinInfo SkinInfo,
                                                     FResSkeletonSkin skin){
      // 获得网格信息
      if(skeletonInfo == null){
         throw new FFatalError("Mesh info is empty.");
      }
      //............................................................
      // 存储数据
      skin.setGuid(skeletonInfo.guid());
      uploadStorage(SkinInfo, skin);
      // 更新网格
      skin.saveUnit(SkinInfo);
      doUpdate(logicContext, SkinInfo);
      // 返回网格单元
      return SkinInfo;
   }

   //============================================================
   // <T>导入资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param meshInfo 网格信息
   // @param skeletonInfo 骨骼信息
   // @param skin 蒙皮数据
   // @return 蒙皮信息
   //============================================================
   @Override
   public FGcResModelSkeletonSkinInfo importResource(ILogicContext logicContext,
                                                     IGcSession session,
                                                     FGcResModelInfo modelInfo,
                                                     FGcResModelMeshInfo meshInfo,
                                                     FGcResModelSkeletonInfo skeletonInfo,
                                                     FResSkeletonSkin skin){
      // 获得参数
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      long skeletonId = skeletonInfo.ouid();
      String code = skin.code();
      //............................................................
      // 查找网格信息
      FGcResModelSkeletonSkinInfo skinInfo = findByCode(logicContext, userId, projectId, modelId, skeletonId, code);
      if(skinInfo == null){
         // 新建网格信息
         insertResource(logicContext, session, modelInfo, meshInfo, skeletonInfo, skin);
      }else{
         // 更新网格信息
         updateResource(logicContext, session, modelInfo, meshInfo, skeletonInfo, skinInfo, skin);
      }
      //............................................................
      // 返回网格单元
      return skinInfo;
   }
}
