package org.mo.cloud.core.storage;

import org.mo.com.io.FByteFile;
import org.mo.com.io.RFile;
import org.mo.com.lang.FAttributes;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.data.nosql.FNosqlContent;

//============================================================
// <T>存储信息。</T>
//============================================================
public class FGcStorageContent
      extends FNosqlContent
{
   // 日志输出接口
   private final static ILogger _logger = RLogger.find(FGcStorageContent.class);

   // 原始名称
   protected String _origin;

   // 扩展名
   protected String _extension;

   // 网络地址
   protected String _uri;

   // 网络地址
   protected String _url;

   //============================================================
   // <T>构造存储信息。</T>
   //============================================================
   public FGcStorageContent(){
   }

   //============================================================
   // <T>构造存储信息。</T>
   //
   // @param pack 打包字符串
   //============================================================
   public FGcStorageContent(String pack){
      unpack(pack);
   }

   //============================================================
   // <T>构造存储信息。</T>
   //
   // @param pack 打包字符串
   //============================================================
   public FGcStorageContent(String catalog,
                            String guid){
      _catalog = catalog;
      _guid = guid;
   }

   //============================================================
   // <T>构造存储信息。</T>
   //
   // @param catalog 分类
   // @param file 文件
   //============================================================
   //   public FGcStorageContent(String catalog,
   //                            File file){
   //      // 加载文件
   //      String fileName = file.getAbsolutePath();
   //      loadFile(fileName);
   //      // 设置属性
   //      _catalog = catalog;
   //      _date = RDateTime.format("YYYYMMDD");
   //      _code = RUuid.makeUniqueIdLower();
   //      _name = RUuid.makeUniqueIdLower();
   //      _origin = file.getName();
   //      _extension = RFile.extension(file);
   //      if(!RString.isEmpty(_extension)){
   //         _name += "." + _extension;
   //      }
   //   }
   //
   //   //============================================================
   //   // <T>构造存储信息。</T>
   //   //
   //   // @param catalog 分类
   //   // @param file 文件
   //   //============================================================
   //   public FGcStorageContent(String catalog,
   //                            FWebUploadFile file){
   //      // 加载文件
   //      loadFile(file.uploadName());
   //      // 设置属性
   //      _catalog = catalog;
   //      _date = RDateTime.format("YYYYMMDD");
   //      _code = RUuid.makeUniqueIdLower();
   //      _name = RUuid.makeUniqueIdLower();
   //      _origin = file.fileName();
   //      _mime = file.contentType();
   //      _extension = RFile.extension(file.fileName());
   //      if(!RString.isEmpty(_extension)){
   //         _name += "." + _extension;
   //      }
   //   }
   //
   //   //============================================================
   //   // <T>构造存储信息。</T>
   //   //
   //   // @param catalog 分类
   //   // @param code 代码
   //   // @param file 文件
   //   //============================================================
   //   public FGcStorageContent(String catalog,
   //                            String code,
   //                            FWebUploadFile file){
   //      // 加载文件
   //      loadFile(file.uploadName());
   //      // 设置属性
   //      _catalog = catalog;
   //      _date = RDateTime.format("YYYYMMDD");
   //      _code = code;
   //      _name = RUuid.makeUniqueIdLower();
   //      _origin = file.fileName();
   //      _mime = file.contentType();
   //      _extension = RFile.extension(file.fileName());
   //      if(!RString.isEmpty(_extension)){
   //         _name += "." + _extension;
   //      }
   //   }

   //============================================================
   // <T>获得原始名称。</T>
   //
   // @return 原始名称
   //============================================================
   public String origin(){
      return _origin;
   }

   //============================================================
   // <T>设置原始名称。</T>
   //
   // @param origin 原始名称
   //============================================================
   public void setOrigin(String origin){
      _origin = origin;
   }

   //============================================================
   // <T>获得扩展名。</T>
   //
   // @return 扩展名
   //============================================================
   public String extension(){
      return _extension;
   }

   //============================================================
   // <T>设置扩展名。</T>
   //
   // @param extension 扩展名
   //============================================================
   public void setExtension(String extension){
      _extension = extension;
   }

   //============================================================
   // <T>获得网络地址。</T>
   //
   // @return 网络地址
   //============================================================
   public String uri(){
      return _uri;
   }

   //============================================================
   // <T>设置网络地址。</T>
   //
   // @param url 网络地址
   //============================================================
   public void setUri(String uri){
      _uri = uri;
   }

   //============================================================
   // <T>获得网络地址。</T>
   //
   // @return 网络地址
   //============================================================
   public String url(){
      return _url;
   }

   //============================================================
   // <T>设置网络地址。</T>
   //
   // @param url 网络地址
   //============================================================
   public void setUrl(String url){
      _url = url;
   }

   //============================================================
   // <T>设置网络地址。</T>
   //
   // @param url 网络地址
   //============================================================
   @Override
   public void loadFile(String fileName){
      // 检查文件存在性
      if(!RFile.exists(fileName)){
         throw new FFatalError("File is not exists. (file_name={1})", fileName);
      }
      // 设置名称
      if(RString.isEmpty(_name)){
         _name = RFile.name(fileName);
      }
      // 设置扩展
      if(RString.isEmpty(_extension)){
         _extension = RFile.extension(fileName);
      }
      // 加载文件
      try(FByteFile file = new FByteFile(fileName)){
         _data = file.toArray();
      }catch(Exception exception){
         _logger.error(this, "loadFile", exception);
      }
   }

   //============================================================
   // <T>打包处理。</T>
   //
   // @return 打包字符串
   //============================================================
   public String pack(){
      FAttributes map = new FAttributes();
      map.setNvl("catalog", _catalog);
      map.setNvl("date", _date);
      map.setNvl("code", _code);
      map.setNvl("name", _name);
      map.setNvl("origin", _origin);
      map.setNvl("mime", _mime);
      map.setNvl("size", _size);
      if(map.isEmpty()){
         return null;
      }
      return map.pack();
   }

   //============================================================
   // <T>解包处理。</T>
   //
   // @param pack 打包字符串
   //============================================================
   public void unpack(String pack){
      // 清空内容
      _catalog = null;
      _date = null;
      _code = null;
      _name = null;
      _origin = null;
      _mime = null;
      _size = 0;
      // 解析内容
      if(!RString.isEmpty(pack)){
         try{
            // 解压数据
            FAttributes map = new FAttributes();
            map.unpack(pack);
            // 获得内容
            _catalog = map.get("catalog", null);
            _date = map.get("date", null);
            _code = map.get("code", null);
            _name = map.get("name", null);
            _origin = map.get("origin", null);
            _mime = map.get("mime", null);
            _size = map.getInt("size");
         }catch(Throwable throwable){
            _logger.error(this, "unpack", throwable);
         }
      }
   }
}
