package org.mo.content.resource;

import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.mongo.IGcStorageMongoConsole;
import org.mo.com.logging.RLogger;
import org.mo.content.common.RRs3Configuration;
import org.mo.core.aop.RAop;

public class RMongoDrop
{
   //============================================================
   // <T>导入处理。</T>
   //============================================================
   public static void process() throws Exception{
      IGcStorageMongoConsole console = RAop.find(IGcStorageMongoConsole.class);
      // 删除缓冲
      console.drop(EGcStorageCatalog.CacheBitmapPreview);
      console.drop(EGcStorageCatalog.CacheMaterialPreview);
      console.drop(EGcStorageCatalog.CacheResourceMaterial);
      console.drop(EGcStorageCatalog.CacheResourceMaterialBitmapPack);
      console.drop(EGcStorageCatalog.CacheResourceMesh);
      console.drop(EGcStorageCatalog.CacheResourceModel);
      console.drop(EGcStorageCatalog.CacheResourceTemplate);
      console.drop(EGcStorageCatalog.CacheResourceScene);
      // 删除数据
      console.drop(EGcStorageCatalog.ResourcePreview);
      console.drop(EGcStorageCatalog.ResourceBitmap);
      console.drop(EGcStorageCatalog.ResourceModelMeshStream);
      console.drop(EGcStorageCatalog.ResourceModelSkeletonSkinStream);
      console.drop(EGcStorageCatalog.ResourceModelAnimationTrack);
   }

   //============================================================
   // <T>主函数。</T>
   //============================================================
   public static void main(String[] args) throws Exception{
      String configPath = RRs3Configuration.RootPath + "/MoCloud";
      RAop.configConsole().defineCollection().attributes().set("application", configPath);
      RAop.initialize(configPath + "/mp-cloud-content/src/config/" + RRs3Configuration.Config);
      try{
         process();
      }catch(Exception e){
         RLogger.find(RMongoDrop.class).error(null, "main", e);
      }
      RAop.release();
   }
}
