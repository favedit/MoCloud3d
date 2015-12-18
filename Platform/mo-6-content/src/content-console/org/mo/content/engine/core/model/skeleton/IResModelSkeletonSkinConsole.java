package org.mo.content.engine.core.model.skeleton;

import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonInfo;
import org.mo.content.access.data.resource.model.skeleton.FGcResModelSkeletonSkinInfo;
import org.mo.content.access.data.resource.model.skeleton.IGcResModelSkeletonSkinConsole;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.common.FResSkeletonSkin;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型骨骼蒙皮控制台接口。</T>
//============================================================
public interface IResModelSkeletonSkinConsole
      extends
         IGcResModelSkeletonSkinConsole
{
   //============================================================
   // <T>生成模型骨骼蒙皮对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param meshInfo 网格信息
   // @return 模型骨骼蒙皮对象
   //============================================================
   FResSkeletonSkin makeResource(ILogicContext logicContext,
                                 FGcResModelSkeletonSkinInfo skinInfo);

   //============================================================
   // <T>生成模型骨骼蒙皮对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编码
   // @return 模型骨骼蒙皮对象
   //============================================================
   FResSkeletonSkin makeResource(ILogicContext logicContext,
                                 String guid);

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
   FGcResModelSkeletonSkinInfo insertResource(ILogicContext logicContext,
                                              IGcSession session,
                                              FGcResModelInfo modelInfo,
                                              FGcResModelMeshInfo meshInfo,
                                              FGcResModelSkeletonInfo skeletonInfo,
                                              FResSkeletonSkin skin);

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
   FGcResModelSkeletonSkinInfo updateResource(ILogicContext logicContext,
                                              IGcSession session,
                                              FGcResModelInfo modelInfo,
                                              FGcResModelMeshInfo meshInfo,
                                              FGcResModelSkeletonInfo skeletonInfo,
                                              FGcResModelSkeletonSkinInfo skinInfo,
                                              FResSkeletonSkin skin);

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
   FGcResModelSkeletonSkinInfo importResource(ILogicContext logicContext,
                                              IGcSession session,
                                              FGcResModelInfo modelInfo,
                                              FGcResModelMeshInfo meshInfo,
                                              FGcResModelSkeletonInfo skeletonInfo,
                                              FResSkeletonSkin skin);
}
