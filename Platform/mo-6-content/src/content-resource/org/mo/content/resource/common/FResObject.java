package org.mo.content.resource.common;

import org.mo.com.io.FByteStream;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.FObject;
import org.mo.com.lang.RString;
import org.mo.com.lang.RUuid;
import org.mo.com.xml.FXmlNode;

//============================================================
// <T>资源对象。</T>
//============================================================
public class FResObject
      extends FObject
{
   // 类型
   protected String _type;

   // 编号
   protected long _ouid;

   // 唯一编号
   protected String _guid;

   // 代码
   protected String _code;

   // 标签
   protected String _label;

   //============================================================
   // <T>构造资源对象。</T>
   //============================================================
   public FResObject(){
   }

   //============================================================
   // <T>获得类型名称。</T>
   //
   // @return 类型名称
   //============================================================
   public String type(){
      return _type;
   }

   //============================================================
   // <T>获得编号。</T>
   //
   // @return 编号
   //============================================================
   public long ouid(){
      return _ouid;
   }

   //============================================================
   // <T>设置编号。</T>
   //
   // @param ouid 编号
   //============================================================
   public void setOuid(long ouid){
      _ouid = ouid;
   }

   //============================================================
   // <T>获得唯一编号。</T>
   //
   // @return 唯一编号
   //============================================================
   public String guid(){
      return _guid;
   }

   //============================================================
   // <T>设置唯一编号。</T>
   //
   // @param guid 唯一编号
   //============================================================
   public void setGuid(String guid){
      _guid = guid;
   }

   //============================================================
   // <T>获得代码。</T>
   //
   // @return 代码
   //============================================================
   public String code(){
      return _code;
   }

   //============================================================
   // <T>设置代码。</T>
   //
   // @param code 代码
   //============================================================
   public void setCode(String code){
      _code = code;
   }

   //============================================================
   // <T>获得标签。</T>
   //
   // @return 标签
   //============================================================
   public String label(){
      return _label;
   }

   //============================================================
   // <T>设置标签。</T>
   //
   // @param label 标签
   //============================================================
   public void setLabel(String label){
      _label = label;
   }

   //============================================================
   // <T>接收资源数据。</T>
   //
   // @param resource 资源
   //============================================================
   public void assignInfo(FResObject resrouce){
      _code = resrouce._code;
      _label = resrouce._label;
   }

   //============================================================
   // <T>生成唯一编号。</T>
   //
   // @return 唯一编号
   //============================================================
   public String makeGuid(){
      if(RString.isEmpty(_guid)){
         _guid = RUuid.makeUniqueId();
      }
      return _guid;
   }

   //============================================================
   // <T>序列化数据到输出流。</T>
   //
   // @param output 输出流
   //============================================================
   public void serialize(IDataOutput output){
      output.writeString(_type);
      output.writeString(_guid);
      output.writeString(_code);
      output.writeString(_label);
   }

   //============================================================
   // <T>序列化数据到输出流。</T>
   //
   // @param output 输出流
   //============================================================
   public void storageSerialize(IDataOutput output){
      output.writeString(_type);
      output.writeString(makeGuid());
      output.writeString(_code);
      output.writeString(_label);
   }

   //============================================================
   // <T>从输入流反序列化数据。</T>
   //
   // @param input 输入流
   //============================================================
   public void storageUnserialize(IDataInput input){
      String type = input.readString();
      if(!_type.equals(type)){
         throw new FFatalError("Unserialize failure. (inner_type={1}, type={2})", _type, type);
      }
      _guid = input.readString();
      _code = input.readString();
      _label = input.readString();
   }

   //============================================================
   // <T>从配置节点中加载数据信息。</T>
   //
   // @param xconfig 配置信息
   //============================================================
   public void loadConfig(FXmlNode xconfig){
      // 读取属性
      _guid = xconfig.get("guid");
      _code = xconfig.get("code", null);
      _label = xconfig.get("label", null);
   }

   //============================================================
   // <T>从配置节点中合并数据信息。</T>
   //
   // @param xconfig 配置信息
   //============================================================
   public void mergeConfig(FXmlNode xconfig){
      // 读取属性
      _code = xconfig.get("code");
      _label = xconfig.get("label");
   }

   //============================================================
   // <T>从配置信息中导入配置。</T>
   //
   // @param xconfig 配置信息
   //============================================================
   public void importConfig(FXmlNode xconfig){
      // 读取属性
      _code = xconfig.get("code");
      _label = xconfig.get("label");
   }

   //============================================================
   // <T>存储数据信息到配置节点中。</T>
   //
   // @param xconfig 配置信息
   //============================================================
   public void saveConfig(FXmlNode xconfig){
      // 设置名称
      xconfig.setName(_type);
      xconfig.set("guid", makeGuid());
      xconfig.set("code", _code);
      xconfig.set("label", _label);
   }

   //============================================================
   // <T>获得字节数据。</T>
   //
   // @return 字节数据
   //============================================================
   public byte[] toBytes(){
      FByteStream stream = new FByteStream();
      serialize(stream);
      return stream.toArray();
   }

   //============================================================
   // <T>获得字节数据。</T>
   //
   // @return 字节数据
   //============================================================
   public byte[] toStorageBytes(){
      FByteStream stream = new FByteStream();
      storageSerialize(stream);
      return stream.toArray();
   }

   //============================================================
   // <T>设置存储字节数据。</T>
   //
   // @param data 字节数据
   //============================================================
   public void setStorageBytes(byte[] data){
      FByteStream stream = new FByteStream(data);
      storageUnserialize(stream);
   }
}
