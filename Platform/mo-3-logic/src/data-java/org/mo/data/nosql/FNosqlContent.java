package org.mo.data.nosql;

import org.mo.com.io.FByteFile;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.FObject;

//============================================================
// <T>内容对象。</T>
// <P>如果数据大小超出限制，meta包含子数据模块。</P>
//============================================================
public class FNosqlContent
      extends FObject
{
   // 目录
   protected String _catalog;

   // 唯一编码
   protected String _guid;

   // 唯一代码
   protected String _code;

   // 内容类型
   protected String _mime;

   // 内容描述
   protected String _meta;

   // 内容校验
   protected String _hash;

   // 内容数据
   protected byte[] _data;

   //============================================================
   // <T>获得目录。</T>
   //
   // @return 目录
   //============================================================
   public String catalog(){
      return _catalog;
   }

   //============================================================
   // <T>设置目录。</T>
   //
   // @param catalog 目录
   //============================================================
   public void setCatalog(String catalog){
      _catalog = catalog;
   }

   //============================================================
   // <T>获得唯一编码。</T>
   //
   // @return 唯一编码
   //============================================================
   public String guid(){
      return _guid;
   }

   //============================================================
   // <T>设置唯一编码。</T>
   //
   // @param guid 唯一编码
   //============================================================
   public void setGuid(String guid){
      _guid = guid;
   }

   //============================================================
   // <T>获得唯一代码。</T>
   //
   // @return 唯一代码
   //============================================================
   public String code(){
      return _code;
   }

   //============================================================
   // <T>设置唯一代码。</T>
   //
   // @param code 唯一代码
   //============================================================
   public void setCode(String code){
      _code = code;
   }

   //============================================================
   // <T>获得内容类型。</T>
   //
   // @return 内容类型
   //============================================================
   public String mime(){
      return _mime;
   }

   //============================================================
   // <T>设置内容类型。</T>
   //
   // @param mime 内容类型
   //============================================================
   public void setMime(String mime){
      _mime = mime;
   }

   //============================================================
   // <T>获得内容大小。</T>
   //
   // @return 内容大小
   //============================================================
   public int size(){
      int size = 0;
      if(_data != null){
         size = _data.length;
      }
      return size;
   }

   //============================================================
   // <T>获得内容描述。</T>
   //
   // @return 内容描述
   //============================================================
   public String meta(){
      return _meta;
   }

   //============================================================
   // <T>设置内容描述。</T>
   //
   // @param meta 内容描述
   //============================================================
   public void setMeta(String meta){
      _meta = meta;
   }

   //============================================================
   // <T>获得内容校验。</T>
   //
   // @return 内容校验
   //============================================================
   public String hash(){
      return _hash;
   }

   //============================================================
   // <T>设置内容校验。</T>
   //
   // @param hash 内容校验
   //============================================================
   public void setHash(String hash){
      _hash = hash;
   }

   //============================================================
   // <T>获得内容数据。</T>
   //
   // @return 内容数据
   //============================================================
   public byte[] data(){
      return _data;
   }

   //============================================================
   // <T>设置内容数据。</T>
   //
   // @param data 内容数据
   //============================================================
   public void setData(byte[] data){
      _data = data;
   }

   //============================================================
   // <T>加载文件内容。</T>
   //
   // @param fileName 文件名称
   //============================================================
   public void loadFile(String fileName){
      try(FByteFile file = new FByteFile(fileName)){
         int size = file.length();
         if(size > 0){
            _data = file.toArray();
         }else{
            throw new FFatalError("Load file failure. (file_name={1})", fileName);
         }
      }catch(Exception exception){
         throw new FFatalError(exception);
      }
   }

   //============================================================
   // <T>加载文件内容。</T>
   //
   // @param fileName 文件名称
   //============================================================
   public void saveFile(String fileName){
      try(FByteFile file = new FByteFile()){
         file.append(_data);
         file.saveToFile(fileName);
      }catch(Exception exception){
         throw new FFatalError(exception);
      }
   }
}
