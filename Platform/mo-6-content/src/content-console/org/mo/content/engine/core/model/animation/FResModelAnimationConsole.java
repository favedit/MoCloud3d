package org.mo.content.engine.core.model.animation;

import org.mo.cloud.data.data.FDataResourceModelAnimationTrackLogic;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationConsole;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationTrackInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.engine.core.model.skeleton.IResModelSkeletonConsole;
import org.mo.content.resource.common.FResAnimation;
import org.mo.content.resource.common.FResTrack;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型动画控制台。</T>
//============================================================
public class FResModelAnimationConsole
      extends FGcResModelAnimationConsole
      implements
         IResModelAnimationConsole
{
   // 资源模型动画轨迹控制台
   @ALink
   protected IResModelSkeletonConsole _skeletonConsole;

   // 资源模型动画轨迹控制台
   @ALink
   protected IResModelAnimationTrackConsole _modelAnimationTrackConsole;

   //============================================================
   // <T>构建动画处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param animationInfo 动画信息
   // @return 动画
   //============================================================
   @Override
   public FResAnimation makeAnimation(ILogicContext logicContext,
                                      FGcResModelAnimationInfo animationInfo){
      long animationId = animationInfo.ouid();
      // 获得骨骼信息
      FResAnimation animation = new FResAnimation();
      animation.loadUnit(animationInfo);
      // 查找骨骼信息
      long skeletonId = animationInfo.skeletonId();
      if(skeletonId != 0){
         FGcResModelSkeletonInfo skeletonInfo = _skeletonConsole.find(logicContext, skeletonId);
         animation.setSkeletonGuid(skeletonInfo.guid());
      }
      // 获得跟踪集合
      String whereSql = FDataResourceModelAnimationTrackLogic.ANIMATION_ID + "=" + animationId;
      FLogicDataset<FGcResModelAnimationTrackInfo> trackInfos = _dataModelAnimationTrackConsole.fetch(logicContext, whereSql);
      if(!trackInfos.isEmpty()){
         for(FGcResModelAnimationTrackInfo trackInfo : trackInfos){
            FResTrack track = _modelAnimationTrackConsole.makeTrack(logicContext, trackInfo);
            animation.pushTrack(track);
         }
      }
      // 打包数据
      animation.pack();
      return animation;
   }

   //============================================================
   // <T>构建蒙皮处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编号
   // @return 蒙皮
   //============================================================
   @Override
   public FResAnimation makeAnimation(ILogicContext logicContext,
                                      long animationId){
      FGcResModelAnimationInfo animationInfo = get(logicContext, animationId);
      return makeAnimation(logicContext, animationInfo);
   }

   //============================================================
   // <T>导入动画。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param skeletonInfo 骨骼信息
   // @param animation 动画
   // @return 处理结果
   //============================================================
   @Override
   public FGcResModelAnimationInfo importAnimation(ILogicContext logicContext,
                                                   IGcSession session,
                                                   FGcResModelInfo modelInfo,
                                                   FGcResModelSkeletonInfo skeletonInfo,
                                                   FResAnimation animation){
      long userId = session.userId();
      long projectId = session.projectId();
      long modelId = modelInfo.ouid();
      long skeletonId = 0;
      if(skeletonInfo != null){
         skeletonId = skeletonInfo.ouid();
      }
      //............................................................
      // 新建动画信息
      FGcResModelAnimationInfo animationInfo = doPrepare(logicContext);
      animationInfo.setUserId(userId);
      animationInfo.setProjectId(projectId);
      animationInfo.setModelId(modelId);
      animationInfo.setSkeletonId(skeletonId);
      animation.saveUnit(animationInfo);
      doInsert(logicContext, animationInfo);
      //............................................................
      // 新建蒙皮集合
      for(FResTrack track : animation.tracks()){
         _modelAnimationTrackConsole.importResource(logicContext, session, modelInfo, skeletonInfo, animationInfo, track);
      }
      return animationInfo;
   }
}
