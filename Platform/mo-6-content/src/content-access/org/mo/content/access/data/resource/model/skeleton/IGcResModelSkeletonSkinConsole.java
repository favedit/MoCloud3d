package org.mo.content.access.data.resource.model.skeleton;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼蒙皮控制台接口。</T>
//============================================================
public interface IGcResModelSkeletonSkinConsole
      extends
         IAbstractLogicUnitConsole<FGcResModelSkeletonSkinInfo>
{
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
   FGcResModelSkeletonSkinInfo findByCode(ILogicContext logicContext,
                                          long userId,
                                          long projectId,
                                          long modelId,
                                          long skeletonId,
                                          String code);
}
