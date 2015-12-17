package org.mo.content.engine.core.bitmap;

import org.mo.cloud.core.storage.EGcStorage;
import org.mo.cloud.core.storage.EGcStorageCatalog;
import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.io.RFile;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.com.net.EMime;
import org.mo.com.xml.FXmlDocument;
import org.mo.content.access.data.resource.bitmap.FGcResBitmapConsole;
import org.mo.content.access.data.resource.bitmap.FGcResBitmapInfo;
import org.mo.content.core.web.IGcSession;
import org.mo.content.resource.texture.FResTexture;
import org.mo.content.resource.texture.FResTextureBitmap;
import org.mo.data.logic.ILogicContext;
import org.mo.eng.image.FImage;

//============================================================
// <T>资源模型控制台。</T>
//============================================================
public class FResBitmapConsole
      extends FGcResBitmapConsole
      implements
         IResBitmapConsole
{
   // 日志输出接口
   private static ILogger _logger = RLogger.find(FResBitmapConsole.class);

   //============================================================
   // <T>生成位图数据。</T>
   //
   // @param logicContext 逻辑环境
   // @param guid 唯一编号
   // @return 数据
   //============================================================
   @Override
   public byte[] makeViewData(ILogicContext logicContext,
                              String guid){
      // 获得数据
      FGcStorageContent storage = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourceBitmap, guid);
      return storage.data();
   }

   //============================================================
   // <T>生成位图预览数据。</T>
   //
   // @param context 逻辑环境
   // @param guid 唯一编号
   // @return 数据
   //============================================================
   public byte[] makePreview(ILogicContext context,
                             String guid){
      // 获得数据
      FGcStorageContent storage = _storageConsole.find(EGcStorage.Content, EGcStorageCatalog.ResourceBitmap, guid);
      byte[] imageData = storage.data();
      // 生成预览图
      byte[] data = null;
      synchronized(FImage.class){
         try(FImage image = new FImage(imageData)){
            image.resizeScale(200, 150, true);
            data = image.toBytes("jpg");
         }catch(Exception e){
            throw new FFatalError(e);
         }
      }
      // 返回数据
      return data;
   }

   //============================================================
   // <T>生成位图数据。</T>
   //
   // @param context 逻辑环境
   // @param guid 唯一编号
   // @return 数据
   //============================================================
   @Override
   public byte[] makePreviewData(ILogicContext logicContext,
                                 String guid){
      //............................................................
      // 查找数据
      FGcStorageContent findStorage = _storageConsole.find(EGcStorage.Cache, EGcStorageCatalog.BitmapPreview, guid);
      if(findStorage != null){
         return findStorage.data();
      }
      //............................................................
      // 生成模型
      byte[] data = makePreview(logicContext, guid);
      // 存储数据
      FGcStorageContent storage = new FGcStorageContent(EGcStorageCatalog.BitmapPreview, guid);
      storage.setData(data);
      _storageConsole.store(EGcStorage.Cache, storage);
      // 返回数据
      return data;
   }

   //============================================================
   // <T>更新资源处理。</T>
   //
   // @param logicContext 逻辑环境
   // @param bitmapInfo 位图信息
   // @param bitmap 位图
   // @return 处理结果
   //============================================================
   @Override
   public EResult updateResource(ILogicContext logicContext,
                                 FGcResBitmapInfo bitmapInfo,
                                 FImage bitmap){
      // 获得信息
      String guid = bitmapInfo.guid();
      String code = bitmapInfo.code();
      String label = bitmapInfo.label();
      byte[] data = bitmap.toBytes("jpeg");
      // 设置数据
      bitmapInfo.setSizeWidth(bitmap.width());
      bitmapInfo.setSizeHeight(bitmap.height());
      // 存储数据
      FGcStorageContent content = new FGcStorageContent(EGcStorageCatalog.ResourceBitmap, guid);
      content.setCode(code);
      content.setLabel(label);
      content.setMime(EMime.Jpg.mime());
      content.setData(data);
      _storageConsole.store(EGcStorage.Content, content);
      // 存储内容
      bitmapInfo.setDataSize(content.size());
      bitmapInfo.setDataHash(content.hash());
      doUpdate(logicContext, bitmapInfo);
      return EResult.Success;
   }

   //============================================================
   // <T>导入资源。</T>
   //
   // @param logicContext 逻辑环境
   // @param session 会话信息
   // @param path 路径
   // @return 处理结果
   //============================================================
   @Override
   public EResult importResource(ILogicContext logicContext,
                                 IGcSession session,
                                 String path){
      long userId = session.userId();
      long projectId = session.projectId();
      path = RFile.format(path);
      //............................................................
      // 导入配置信息
      FResTexture texture = new FResTexture();
      String configFile = RFile.makeFilename(path, "config.xml");
      FXmlDocument xdocument = new FXmlDocument();
      xdocument.loadFile(configFile);
      texture.importConfig(xdocument.root());
      String textureCode = texture.code();
      String textureLabel = texture.label();
      //............................................................
      for(FResTextureBitmap bitmap : texture.bitmaps()){
         // 检查文件
         String bitmapCode = bitmap.code();
         String fileExtension = "jpg";
         String bitmapFile = RFile.makeFilename(path, bitmapCode + "." + fileExtension);
         if(!RFile.exists(bitmapFile)){
            throw new FFatalError("Bitmap file is not exists. (file_name={1})", bitmapFile);
         }
         String code = textureCode + "|" + bitmapCode;
         // 新建位图
         FGcResBitmapInfo bitmapInfo = findByCode(logicContext, userId, projectId, code);
         boolean exists = (bitmapInfo != null);
         if(!exists){
            bitmapInfo = doPrepare(logicContext);
            bitmapInfo.setUserId(userId);
            bitmapInfo.setProjectId(projectId);
            bitmapInfo.setCode(code);
         }
         bitmapInfo.setLabel(textureLabel);
         bitmapInfo.setFormatCode(bitmapCode);
         bitmapInfo.setMimeCode(EMime.Jpg.mime());
         if(exists){
            doUpdate(logicContext, bitmapInfo);
         }else{
            doInsert(logicContext, bitmapInfo);
         }
         // 上传位图数据
         try(FImage image = new FImage()){
            image.loadFile(bitmapFile);
            updateResource(logicContext, bitmapInfo, image);
         }catch(Exception exception){
            throw new FFatalError(exception);
         }
      }
      _logger.debug(this, "importResource", "Import bitmap success. (path={1})", path);
      return EResult.Success;
   }
}
