package org.mo.content.engine.core.model.animation;

import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationTrackConsole;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationTrackInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.engine.core.model.IResModelMeshConsole;
import org.mo.content.resource.common.FResTrack;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型动画轨迹控制台。</T>
//============================================================
public class FResModelAnimationTrackConsole
      extends FGcResModelAnimationTrackConsole
      implements
         IResModelAnimationTrackConsole
{
   // 资源模型网格控制台
   @ALink
   protected IResModelMeshConsole _meshConsole;

   //============================================================
   // <T>构建轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackInfo 轨迹信息
   // @return 轨迹
   //============================================================
   @Override
   public FResTrack makeTrack(ILogicContext logicContext,
                              FGcResModelAnimationTrackInfo trackInfo){
      String guid = trackInfo.guid();
      // 设置属性
      FResTrack track = new FResTrack();
      track.loadUnit(trackInfo);
      // 读取数据
      FGcStorageContent resource = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourceModelAnimationTrack, guid);
      track.loadData(resource.data());
      return track;
   }

   //============================================================
   // <T>构建轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackId 轨迹编号
   // @return 轨迹
   //============================================================
   @Override
   public FResTrack makeTrack(ILogicContext logicContext,
                              long trackId){
      FGcResModelAnimationTrackInfo trackInfo = get(logicContext, trackId);
      return makeTrack(logicContext, trackInfo);
   }

   //============================================================
   // <T>更新轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackInfo 轨迹信息
   // @param track 轨迹
   // @return 跟踪单元
   //============================================================
   @Override
   public EResult updateResource(ILogicContext logicContext,
                                 FGcResModelAnimationTrackInfo trackInfo,
                                 FResTrack track){
      String guid = trackInfo.guid();
      // 新建跟踪
      trackInfo.setFrameTick(track.frameTick());
      trackInfo.setFrameCount(track.frameCount());
      trackInfo.setFrameTotal(track.frameTick() * track.frameCount());
      doUpdate(logicContext, trackInfo);
      // 存储数据
      FGcStorageContent resource = new FGcStorageContent(EGcStorageCatalog.ResourceModelAnimationTrack, guid);
      resource.setData(track.saveData());
      _storageConsole.store(EGcStorage.Content, resource);
      // 返回结果
      return EResult.Success;
   }

   //============================================================
   // <T>导入动画跟踪。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param skeletonInfo 骨骼信息
   // @param animationInfo 动画信息
   // @param track 跟踪
   // @return 跟踪信息
   //============================================================
   @Override
   public FGcResModelAnimationTrackInfo importResource(ILogicContext logicContext,
                                                       IGcSession session,
                                                       FGcResModelInfo modelInfo,
                                                       FGcResModelSkeletonInfo skeletonInfo,
                                                       FGcResModelAnimationInfo animationInfo,
                                                       FResTrack track){
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      String modelCode = modelInfo.code();
      long skeletonId = 0;
      if(skeletonInfo != null){
         skeletonId = skeletonInfo.ouid();
      }
      long animationId = animationInfo.ouid();
      //............................................................
      // 新建蒙皮集合
      // 查找关联网格信息
      long meshId = 0;
      String meshCode = track.meshCode();
      if(!RString.isEmpty(meshCode)){
         FGcResModelMeshInfo meshInfo = _meshConsole.findByName(logicContext, userId, projectId, modelId, meshCode);
         if(meshInfo == null){
            throw new FFatalError("Model mesh is not found. (model_code={1}, mesh_code={2})", modelCode, meshCode);
         }
         meshId = meshInfo.ouid();
      }
      // 新建轨迹信息
      FGcResModelAnimationTrackInfo trackInfo = doPrepare(logicContext);
      trackInfo.setUserId(session.userId());
      trackInfo.setProjectId(session.projectId());
      trackInfo.setModelId(modelId);
      trackInfo.setMeshId(meshId);
      trackInfo.setSkeletonId(skeletonId);
      trackInfo.setAnimationId(animationId);
      doInsert(logicContext, trackInfo);
      // 更新轨迹数据
      updateResource(logicContext, trackInfo, track);
      return trackInfo;
   }
}
