package org.mo.content.engine.core.model.animation;

import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.animation.FGcResModelAnimationInfo;
import org.mo.content.access.data.resource.model.animation.IGcResModelAnimationConsole;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.common.FResAnimation;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型动画控制台接口。</T>
//============================================================
public interface IResModelAnimationConsole
      extends
         IGcResModelAnimationConsole
{
   //============================================================
   // <T>构建动画处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param animationInfo 动画信息
   // @return 动画
   //============================================================
   FResAnimation makeAnimation(ILogicContext logicContext,
                               FGcResModelAnimationInfo animationInfo);

   //============================================================
   // <T>构建动画处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param animationId 动画编号
   // @return 动画
   //============================================================
   FResAnimation makeAnimation(ILogicContext logicContext,
                               long animationId);

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
   FGcResModelAnimationInfo importAnimation(ILogicContext logicContext,
                                            IGcSession session,
                                            FGcResModelInfo modelInfo,
                                            FGcResModelSkeletonInfo skeletonInfo,
                                            FResAnimation animation);
}
