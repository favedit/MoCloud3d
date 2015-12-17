package org.mo.content.engine.core.model;

import org.mo.content.access.data.resource.model.FGcResModelInfo;
import org.mo.content.access.data.resource.model.mesh.FGcResModelMeshInfo;
import org.mo.content.access.data.resource.model.mesh.IGcResModelMeshConsole;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.model.FResModelMesh;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源模型网格控制台接口。</T>
//============================================================
public interface IResModelMeshConsole
      extends
         IGcResModelMeshConsole
{
   //============================================================
   // <T>生成模型网格对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param meshInfo 网格信息
   // @return 模型网格对象
   //============================================================
   FResModelMesh makeResource(ILogicContext logicContext,
                              FGcResModelMeshInfo meshInfo);

   //============================================================
   // <T>生成模型网格对象。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编码
   // @return 模型网格对象
   //============================================================
   FResModelMesh makeResource(ILogicContext logicContext,
                              String guid);

   //============================================================
   // <T>新建资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   FGcResModelMeshInfo insertResource(ILogicContext logicContext,
                                      IGcSession session,
                                      FGcResModelInfo modelInfo,
                                      FResModelMesh mesh);

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
   FGcResModelMeshInfo updateResource(ILogicContext logicContext,
                                      IGcSession session,
                                      FGcResModelInfo modelInfo,
                                      FGcResModelMeshInfo meshInfo,
                                      FResModelMesh mesh);

   //============================================================
   // <T>导入资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param modelInfo 模型信息
   // @param mesh 网格数据
   // @return 网格信息
   //============================================================
   FGcResModelMeshInfo importResource(ILogicContext logicContext,
                                      IGcSession session,
                                      FGcResModelInfo modelInfo,
                                      FResModelMesh mesh);
}
