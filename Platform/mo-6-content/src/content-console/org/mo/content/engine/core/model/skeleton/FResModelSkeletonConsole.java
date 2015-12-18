package org.mo.content.engine.core.model.skeleton;

import org.mo.cloud.data.data.FDataResourceModelSkeletonSkinLogic;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonConsole;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonSkinInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.engine.core.model.IResModelMeshConsole;
import org.mo.content.resource.common.FResSkeleton;
import org.mo.content.resource.common.FResSkeletonSkin;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼控制台。</T>
//============================================================
public class FResModelSkeletonConsole
      extends FGcResModelSkeletonConsole
      implements
         IResModelSkeletonConsole
{
   // 数据流控制台
   @ALink
   protected IResModelMeshConsole _modelMeshConsole;

   // 数据流控制台
   @ALink
   protected IResModelSkeletonSkinConsole _skeletonSkinConsole;

   //============================================================
   // <T>构建骨骼对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模块编号
   // @param skeletonId 骨骼编号
   // @return 骨骼对象
   //============================================================
   @Override
   public FResSkeleton makeSkeleton(ILogicContext logicContext,
                                    long modelId,
                                    long skeletonId){
      FResSkeleton skeleton = new FResSkeleton();
      // 获得骨骼信息
      FGcResModelSkeletonInfo skeletonInfo = find(logicContext, skeletonId);
      if(skeletonInfo == null){
         throw new FFatalError("Skeleton is not exists. (skeleton_id={1})", skeletonId);
      }
      skeleton.loadUnit(skeletonInfo);
      // 获得蒙皮集合
      FLogicDataset<FGcResModelSkeletonSkinInfo> skinInfos = _skeletonSkinConsole.fetch(logicContext, FDataResourceModelSkeletonSkinLogic.SKELETON_ID + "=" + skeletonId);
      for(FGcResModelSkeletonSkinInfo skinInfo : skinInfos){
         // 创建蒙皮
         FResSkeletonSkin skin = _skeletonSkinConsole.makeResource(logicContext, skinInfo);
         // 查找网格唯一编号
         FGcResModelMeshInfo meshInfo = _modelMeshConsole.find(logicContext, skinInfo.meshId());
         skin.setMeshGuid(meshInfo.guid());
         // 增加蒙皮
         skeleton.pushSkin(skin);
      }
      return skeleton;
   }

   //============================================================
   // <T>导入骨骼。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param fileName 文件名称
   // @return 处理结果
   //============================================================
   @Override
   public EResult importSkeleton(ILogicContext logicContext,
                                 IGcSession session,
                                 FGcResModelInfo modelInfo,
                                 FResSkeleton skeleton){
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      String modelCode = modelInfo.code();
      //............................................................
      // 新建骨骼信息
      FGcResModelSkeletonInfo skeletonInfo = doPrepare(logicContext);
      skeletonInfo.setUserId(userId);
      skeletonInfo.setProjectId(projectId);
      skeletonInfo.setModelId(modelId);
      skeleton.saveUnit(skeletonInfo);
      doInsert(logicContext, skeletonInfo);
      //............................................................
      // 新建蒙皮集合
      for(FResSkeletonSkin skin : skeleton.skins()){
         String meshCode = skin.code();
         FGcResModelMeshInfo meshInfo = _modelMeshConsole.findByName(logicContext, userId, projectId, modelId, meshCode);
         if(meshInfo == null){
            throw new FFatalError("Mesh is not exists. (model_code={1}, mesh_code={2})", modelCode, meshCode);
         }
         _skeletonSkinConsole.importResource(logicContext, session, modelInfo, meshInfo, skeletonInfo, skin);
      }
      return EResult.Success;
   }
}
