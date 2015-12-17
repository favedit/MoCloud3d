package org.mo.cloud.core.storage.mongo;

import org.mo.cloud.core.storage.FGcStorageContent;
import org.mo.com.console.FConsole;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FDictionary;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.core.aop.face.AProperty;
import org.mo.data.nosql.mongodb.FMongodbConnection;
import org.mo.data.nosql.mongodb.IMongodbConnection;

//============================================================
// <T>存储控制台。</T>
//============================================================
public class FGcStorageMongoConsole
      extends FConsole
      implements
         IGcStorageMongoConsole
{
   // 日志输出接口
   // private final static ILogger _logger = RLogger.find(FGcStorageMongoConsole.class);

   // 允许标志
   @AProperty
   protected boolean _enable;

   // 存储主机
   @AProperty
   protected String _storageHost;

   // 存储端口
   @AProperty
   protected int _storagePort;

   // 存储名称
   @AProperty
   protected String _storageName;

   // 存储名称
   @AProperty
   protected String _storagePath;

   // 数据库
   protected FDictionary<IMongodbConnection> _connections = new FDictionary<IMongodbConnection>(IMongodbConnection.class);

   //============================================================
   // <T>查找一个链接。</T>
   //
   // @param databaseName 库名称
   // @return 链接
   //============================================================
   public synchronized IMongodbConnection findConnection(String databaseName){
      IMongodbConnection connection = _connections.find(databaseName);
      if(connection == null){
         connection = new FMongodbConnection();
         connection.connect(_storageHost, _storagePort, databaseName);
         _connections.set(databaseName, connection);
      }
      return connection;
   }

   //============================================================
   // <T>保存一个存储信息。</T>
   //
   // @param databaseName 库名称
   // @param catalog 集合分类
   // @param guid 唯一编号
   // @return 查找结果
   //============================================================
   @Override
   public FGcStorageContent find(String databaseName,
                                 String catalog,
                                 String guid){
      IMongodbConnection connection = findConnection(databaseName);
      FGcStorageContent content = connection.findContent(FGcStorageContent.class, catalog, guid);
      return content;
   }

   //============================================================
   // <T>保存一个存储信息。</T>
   //
   // @param databaseName 库名称
   // @param storage 存储信息
   // @return 处理结果
   //============================================================
   @Override
   public boolean store(String databaseName,
                        FGcStorageContent content){
      IMongodbConnection connection = findConnection(databaseName);
      boolean result = connection.storeContent(content);
      return result;
   }

   //============================================================
   // <T>删除一个存储信息。</T>
   //
   // @param databaseName 库名称
   // @param catalog 集合分类
   // @param guid 唯一编号
   // @return 处理结果
   //============================================================
   @Override
   public boolean delete(String databaseName,
                         String catalog,
                         String guid){
      IMongodbConnection connection = findConnection(databaseName);
      boolean result = connection.deleteContent(catalog, guid);
      return result;
   }

   //============================================================
   // <T>删除一个存储集合。</T>
   //
   // @param databaseName 库名称
   // @param catalog 集合分类
   // @return 处理结果
   //============================================================
   @Override
   public boolean drop(String databaseName,
                       String catalog){
      // 检查参数
      if(RString.isEmpty(catalog)){
         throw new FFatalError("Parameter catalog is empty.");
      }
      //............................................................
      //      IMongodbConnection connection = findConnection(databaseName);
      //      // 删除集合
      //      if(_database.collectionExists(catalog)){
      //         DBCollection collection = _database.getCollection(catalog);
      //         collection.drop();
      //         _logger.debug(this, "drop", "Drop data collection. (name={1})", catalog);
      //         return true;
      //      }else{
      //         _logger.debug(this, "drop", "Data collection is not exists. (name={1})", catalog);
      //         return false;
      //      }
      return false;
   }

   //============================================================
   // <T>导出一个存储内容为文件。</T>
   //
   // @param catalog 分类名称
   // @param guid 唯一编号
   // @param formatName 格式名称
   // @param path 存储路径
   // @return 处理结果
   //============================================================
   @Override
   public EResult exportFile(String catalog,
                             String guid,
                             String formatName,
                             String path){
      //      // 获得集合
      //      DBCollection collection = _database.getCollection(catalog);
      //      // 查找内容
      //      DBObject search = new BasicDBObject("guid", guid);
      //      // 获得数据
      //      DBObject item = collection.findOne(search);
      //      if(item == null){
      //         _logger.warn(this, "exportFile", "Data is not found. (catalog={1}, guid={2})", catalog, guid);
      //      }else{
      //         // 存储内容
      //         byte[] data = (byte[])item.get("data");
      //         if(data != null){
      //            String fileName = path + "/" + guid + "." + formatName;
      //            try(FByteFile file = new FByteFile()){
      //               file.assign(data, 0, data.length);
      //               file.saveToFile(fileName);
      //            }
      //         }
      //      }
      return EResult.Success;
   }

   //============================================================
   // <T>导入一个文件为存储内容。</T>
   //
   // @param catalog 分类名称
   // @param guid 唯一编号
   // @param formatName 格式名称
   // @param path 存储路径
   // @return 处理结果
   //============================================================
   @Override
   public EResult importFile(String catalog,
                             String guid,
                             String formatName,
                             String fileName){
      //      // 获得集合
      //      DBCollection collection = _database.getCollection(catalog);
      //      // 查找内容
      //      DBObject search = new BasicDBObject("guid", guid);
      //      // 存储内容
      //      if(RFile.exists(fileName)){
      //         try(FByteFile file = new FByteFile(fileName)){
      //            // 新建数据
      //            DBObject item = new BasicDBObject();
      //            item.put("guid", guid);
      //            item.put("type", formatName);
      //            item.put("data", file.toArray());
      //            // 更新处理
      //            collection.update(search, item, true, false);
      //         }
      //      }else{
      //         _logger.warn(this, "importFile", "Data file is not found. (catalog={1}, guid={2}, file_name={3})", catalog, guid, fileName);
      //      }
      return EResult.Success;
   }

   //============================================================
   // <T>初始化处理。</T>
   //============================================================
   public void initialize(){
   }

   //============================================================
   // <T>释放处理。</T>
   //============================================================
   public void release(){
   }
}
