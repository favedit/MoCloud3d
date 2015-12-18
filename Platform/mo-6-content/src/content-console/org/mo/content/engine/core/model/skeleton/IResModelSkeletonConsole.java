package org.mo.content.engine.core.model.skeleton;

import org.mo.com.lang.EResult;
import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.skeleton.IGcResModelSkeletonConsole;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.common.FResSkeleton;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼控制台接口。</T>
//============================================================
public interface IResModelSkeletonConsole
      extends
         IGcResModelSkeletonConsole
{
   //============================================================
   // <T>构建骨骼对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模块编号
   // @param skeletonId 骨骼编号
   // @return 骨骼对象
   //============================================================
   FResSkeleton makeSkeleton(ILogicContext logicContext,
                             long modelId,
                             long skeletonId);

   //============================================================
   // <T>新建一个蒙皮。</T>
   //
   // @param logicContext 逻辑环境
   // @param skeletonId 骨骼编号
   // @param skin 蒙皮
   // @return 蒙皮单元
   //============================================================
   //   FGcResModelSkeletonSkinInfo insertSkin(ILogicContext logicContext,
   //                                          IGcSession session,
   //                                          FGcResModelInfo modelInfo,
   //                                          FGcResModelMeshInfo meshInfo,
   //                                          FGcResModelSkeletonInfo skeletonInfo,
   //                                          FResSkeletonSkin skin);

   //============================================================
   // <T>导入骨骼。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模块信息
   // @param skeleton 骨骼信息
   // @return 处理结果
   //============================================================
   EResult importSkeleton(ILogicContext logicContext,
                          IGcSession session,
                          FGcResModelInfo modelInfo,
                          FResSkeleton skeleton);
}
