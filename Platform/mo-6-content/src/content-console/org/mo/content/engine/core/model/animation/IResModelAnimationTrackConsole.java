package org.mo.content.engine.core.model.animation;

import org.mo.com.lang.EResult;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationTrackInfo;
import org.mo.content.access.data.resource.model.animation.IGcResModelAnimationTrackConsole;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.common.FResTrack;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型动画轨迹控制台接口。</T>
//============================================================
public interface IResModelAnimationTrackConsole
      extends
         IGcResModelAnimationTrackConsole
{
   //============================================================
   // <T>构建轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackInfo 轨迹信息
   // @return 轨迹
   //============================================================
   FResTrack makeTrack(ILogicContext logicContext,
                       FGcResModelAnimationTrackInfo trackInfo);

   //============================================================
   // <T>构建轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackId 轨迹编号
   // @return 轨迹
   //============================================================
   FResTrack makeTrack(ILogicContext logicContext,
                       long trackId);

   //============================================================
   // <T>更新轨迹数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param trackInfo 轨迹信息
   // @param track 轨迹
   // @return 跟踪单元
   //============================================================
   EResult updateResource(ILogicContext logicContext,
                          FGcResModelAnimationTrackInfo trackInfo,
                          FResTrack track);

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
   FGcResModelAnimationTrackInfo importResource(ILogicContext logicContext,
                                                IGcSession session,
                                                FGcResModelInfo modelInfo,
                                                FGcResModelSkeletonInfo skeletonInfo,
                                                FGcResModelAnimationInfo animationInfo,
                                                FResTrack track);
}
