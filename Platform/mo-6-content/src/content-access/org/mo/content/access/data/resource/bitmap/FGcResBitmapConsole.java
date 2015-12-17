package org.mo.content.access.data.resource.bitmap;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.mongo.IGcStorageMongoConsole;
import org.mo.cloud.data.data.FDataResourceBitmapLogic;
import org.mo.cloud.define.enums.core.EGcResource;
import org.mo.com.data.FSql;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.content.access.data.resource.FGcResourceInfo;
import org.mo.content.access.data.resource.IGcResourceConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>资源位图信息控制台。</T>
//============================================================
public class FGcResBitmapConsole
      extends FAbstractLogicUnitConsole<FDataResourceBitmapLogic, FGcResBitmapInfo>
      implements
         IGcResBitmapConsole
{
   // 存储控制台
   @ALink
   protected IGcStorageMongoConsole _storageConsole;

   // 资源管理器
   @ALink
   protected IGcResourceConsole _dataResourceConsole;

   //============================================================
   // <T>构造资源位图信息控制台。</T>
   //============================================================
   public FGcResBitmapConsole(){
      super(FDataResourceBitmapLogic.class, FGcResBitmapInfo.class);
   }

   //============================================================
   // <T>根据资源编号查找位图信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param resourceId 资源编号
   // @return 位图信息
   //============================================================
   @Override
   public FGcResBitmapInfo findByResourceId(ILogicContext logicContext,
                                            long resourceId){
      String whereSql = FDataResourceBitmapLogic.RESOURCE_ID + "=" + resourceId;
      FGcResBitmapInfo bitmap = search(logicContext, whereSql);
      return bitmap;
   }

   //============================================================
   // <T>根据资源唯一编号查找位图信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param resourceGuid 资源唯一编号
   // @return 位图信息
   //============================================================
   @Override
   public FGcResBitmapInfo findByResourceGuid(ILogicContext logicContext,
                                              String resourceGuid){
      FGcResBitmapInfo bitmap = null;
      FGcResourceInfo resource = _dataResourceConsole.findByGuid(logicContext, resourceGuid);
      if(resource != null){
         long resourceId = resource.ouid();
         bitmap = findByResourceId(logicContext, resourceId);
      }
      return bitmap;
   }

   //============================================================
   // <T>根据代码查找位图信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param userId 用户编号
   // @param projectId 项目编号
   // @param code 代码
   // @return 位图信息
   //============================================================
   @Override
   public FGcResBitmapInfo findByCode(ILogicContext logicContext,
                                      long userId,
                                      long projectId,
                                      String code){
      // 生成条件
      FSql whereSql = new FSql("(" + FDataResourceBitmapLogic.USER_ID + "=" + userId + ")");
      if(projectId > 0){
         whereSql.append(" AND (" + FDataResourceBitmapLogic.PROJECT_ID + "=" + projectId + ")");
      }
      whereSql.append(" AND (" + FDataResourceBitmapLogic.CODE + "='" + code + "')");
      // 查询信息
      FGcResBitmapInfo bitmap = search(logicContext, whereSql);
      return bitmap;
   }

   //============================================================
   // <T>新建记录前处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @param oldUnit 原始数据单元
   // @return 处理结果
   //============================================================
   @Override
   protected EResult onInsertBefore(ILogicContext logicContext,
                                    FGcResBitmapInfo bitmapInfo){
      // 检查用户编号
      long userId = bitmapInfo.userId();
      if(userId == 0){
         throw new FFatalError("User id is empty.");
      }
      // 创建资源对象
      FGcResourceInfo resourceInfo = _dataResourceConsole.doPrepare(logicContext);
      resourceInfo.setGuid(bitmapInfo.guid());
      resourceInfo.setUserId(userId);
      resourceInfo.setProjectId(bitmapInfo.projectId());
      resourceInfo.setCatalogId(bitmapInfo.catalogId());
      resourceInfo.setResourceCd(EGcResource.Bitmap);
      resourceInfo.setKeywords(bitmapInfo.keywords());
      resourceInfo.setDataSize(bitmapInfo.dataSize());
      resourceInfo.setDataHash(bitmapInfo.dataHash());
      resourceInfo.setCode(bitmapInfo.code());
      resourceInfo.setLabel(bitmapInfo.label());
      _dataResourceConsole.doInsert(logicContext, resourceInfo);
      // 设置资源信息
      bitmapInfo.setResourceId(resourceInfo.ouid());
      return EResult.Success;
   }

   //============================================================
   // <T>新建记录前处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @param oldUnit 原始数据单元
   // @return 处理结果
   //============================================================
   @Override
   protected EResult onUpdateBefore(ILogicContext logicContext,
                                    FGcResBitmapInfo bitmapInfo,
                                    FGcResBitmapInfo bitmapInfoOld){
      // 修改关联资源
      long resourceId = bitmapInfo.resourceId();
      FGcResourceInfo resourceInfo = _dataResourceConsole.find(logicContext, resourceId);
      resourceInfo.setCatalogId(bitmapInfo.catalogId());
      resourceInfo.setCode(bitmapInfo.code());
      resourceInfo.setLabel(bitmapInfo.label());
      resourceInfo.setKeywords(bitmapInfo.keywords());
      resourceInfo.setDataSize(bitmapInfo.dataSize());
      resourceInfo.setDataHash(bitmapInfo.dataHash());
      _dataResourceConsole.doUpdate(logicContext, resourceInfo);
      return EResult.Success;
   }

   //============================================================
   // <T>删除记录前处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   protected EResult onDeleteBefore(ILogicContext logicContext,
                                    FGcResBitmapInfo bitmapInfo){
      // 删除位图数据
      String guid = bitmapInfo.guid();
      _storageConsole.delete(EGcStorage.Cache, EGcStorageCatalog.CacheBitmapPreview, guid);
      _storageConsole.delete(EGcStorage.Content, EGcStorageCatalog.ResourceBitmap, guid);
      // 返回结果
      return EResult.Success;
   }

   //============================================================
   // <T>删除记录后处理</T>
   //
   // @param logicContext 逻辑环境
   // @param unit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   protected EResult onDeleteAfter(ILogicContext logicContext,
                                   FGcResBitmapInfo bitmapInfo){
      // 删除关联资源
      long resourceId = bitmapInfo.resourceId();
      _dataResourceConsole.doDelete(logicContext, resourceId);
      // 返回结果
      return EResult.Success;
   }
}
