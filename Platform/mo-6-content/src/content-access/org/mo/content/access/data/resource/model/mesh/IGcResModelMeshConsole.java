package org.mo.content.access.data.resource.model.mesh;

import org.mo.cloud.core.database.IAbstractLogicUnitConsole;
import org.mo.com.lang.EResult;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>3D资源网格控制台接口。</T>
//============================================================
public interface IGcResModelMeshConsole
      extends
         IAbstractLogicUnitConsole<FGcResModelMeshInfo>
{
   //============================================================
   // <T>根据代码查找网格单元。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param code 代码
   // @return 网格信息
   //============================================================
   FGcResModelMeshInfo findByCode(ILogicContext logicContext,
                                  long userId,
                                  long projectId,
                                  String code);

   //============================================================
   // <T>根据用户编号和代码查找网格信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param modelId 模型编号
   // @param code 项目代码
   // @return 网格信息
   //============================================================
   FGcResModelMeshInfo findByModelCode(ILogicContext logicContext,
                                       long userId,
                                       long projectId,
                                       long modelId,
                                       String code);

   //============================================================
   // <T>根据代码查找模型网格单元。</T>
   //
   // @param logicContext 逻辑环境
   // @param code 代码
   // @return 模型网格单元
   //============================================================
   FGcResModelMeshInfo findByModelCode(ILogicContext logicContext,
                                       long modelId,
                                       String code);

   //============================================================
   // <T>根据模型编号和名称查找网格信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param modelId 模型编号
   // @param name 名称
   // @return 网格信息
   //============================================================
   FGcResModelMeshInfo findByName(ILogicContext logicContext,
                                  long userId,
                                  long projectId,
                                  long modelId,
                                  String name);

   //============================================================
   // <T>根据模型编号查找所有网格集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模型编号
   // @return 网格集合
   //============================================================
   FLogicDataset<FGcResModelMeshInfo> fetchByModelId(ILogicContext logicContext,
                                                     long modelId);

   //============================================================
   // <T>根据模型编号删除所有网格集合。</T>
   //
   // @param logicContext 逻辑环境
   // @param modelId 模型编号
   // @return 处理结果
   //============================================================
   EResult doDeleteByModelId(ILogicContext logicContext,
                             long modelId);
}
