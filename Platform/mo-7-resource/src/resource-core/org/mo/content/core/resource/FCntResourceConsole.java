package org.mo.content.core.resource;

import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.content.access.data.resource.FGcResourceConsole;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>内容图片控制台。</T>
//============================================================
public class FCntResourceConsole
      extends FGcResourceConsole
      implements
         ICntResourceConsole
{
   //============================================================
   // <T>构造内容图片控制台。</T>
   //============================================================
   public FCntResourceConsole(){
   }

   //============================================================
   // <T>查找预览数据。</T>
   //
   // @param context 逻辑环境
   // @param guid 唯一编号
   // @return 数据
   //============================================================
   @Override
   public byte[] findPreviewData(ILogicContext logicContext,
                                 String guid){
      // 检查参数
      if(RString.isEmpty(guid)){
         throw new FFatalError("Guid is empty.");
      }
      // 获得数据
      FGcStorageContent findStorage = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourcePreview, guid);
      if(findStorage != null){
         return findStorage.data();
      }
      return null;
   }

   //============================================================
   // <T>上传位图预览数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编号
   // @param data 数据
   // @return 处理结果
   //============================================================
   @Override
   public EResult uploadPreviewData(ILogicContext logicContext,
                                    String guid,
                                    byte[] data){
      // 检查参数
      if(RString.isEmpty(guid)){
         throw new FFatalError("Guid is empty.");
      }
      if(data == null){
         throw new FFatalError("Data is empty.");
      }
      // 上传数据
      FGcStorageContent storage = new FGcStorageContent(EGcStorageCatalog.ResourcePreview, guid);
      storage.setData(data);
      _storageConsole.store(EGcStorage.Content, storage);
      return EResult.Success;
   }
}
