package org.mo.cloud.data.calculate;

import java.util.Map;

import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RInteger;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>排行榜逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateFinancialRanklistItemUnit
      extends FLogicUnit
{
   // 存储字段对象标识的定义。
   private long __ouid;

   // 字段对象标识的定义。
   protected long _ouid;

   // 存储字段有效性的定义。
   private boolean __ovld;

   // 字段有效性的定义。
   protected boolean _ovld;

   // 存储字段对象唯一标识的定义。
   private String __guid;

   // 字段对象唯一标识的定义。
   protected String _guid;

   // 存储字段代码的定义。
   private String __code;

   // 字段代码的定义。
   protected String _code;

   // 存储字段英文名称的定义。
   private String __name;

   // 字段英文名称的定义。
   protected String _name;

   // 存储字段中文名称的定义。
   private String __label;

   // 字段中文名称的定义。
   protected String _label;

   // 存储字段排名的定义。
   private int __rankOrder;

   // 字段排名的定义。
   protected int _rankOrder;

   // 存储字段排行榜类型的定义。
   private long __ranklistId;

   // 字段排行榜类型的定义。
   protected long _ranklistId;

   // 存储字段属性1的定义。
   private String __property1;

   // 字段属性1的定义。
   protected String _property1;

   // 存储字段属性2的定义。
   private String __property2;

   // 字段属性2的定义。
   protected String _property2;

   // 存储字段创建用户标识的定义。
   private long __createUserId;

   // 字段创建用户标识的定义。
   protected long _createUserId;

   // 存储字段创建日期的定义。
   private TDateTime __createDate = new TDateTime();

   // 字段创建日期的定义。
   protected TDateTime _createDate = new TDateTime();

   // 存储字段更新者标识的定义。
   private long __updateUserId;

   // 字段更新者标识的定义。
   protected long _updateUserId;

   // 存储字段更新时间的定义。
   private TDateTime __updateDate = new TDateTime();

   // 字段更新时间的定义。
   protected TDateTime _updateDate = new TDateTime();

   //============================================================
   // <T>构造排行榜逻辑单元。</T>
   //============================================================
   public FCalculateFinancialRanklistItemUnit(){
   }

   //============================================================
   // <T>判断对象标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isOuidChanged(){
      return __ouid != _ouid;
   }

   //============================================================
   // <T>获得对象标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long ouid(){
      return _ouid;
   }

   //============================================================
   // <T>设置对象标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setOuid(long value){
      _ouid = value;
   }

   //============================================================
   // <T>判断有效性的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isOvldChanged(){
      return __ovld != _ovld;
   }

   //============================================================
   // <T>获得有效性的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean ovld(){
      return _ovld;
   }

   //============================================================
   // <T>设置有效性的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setOvld(boolean value){
      _ovld = value;
   }

   //============================================================
   // <T>判断对象唯一标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isGuidChanged(){
      return !RString.equals(__guid, _guid);
   }

   //============================================================
   // <T>获得对象唯一标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String guid(){
      return _guid;
   }

   //============================================================
   // <T>设置对象唯一标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setGuid(String value){
      _guid = value;
   }

   //============================================================
   // <T>判断代码的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCodeChanged(){
      return !RString.equals(__code, _code);
   }

   //============================================================
   // <T>获得代码的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String code(){
      return _code;
   }

   //============================================================
   // <T>设置代码的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCode(String value){
      _code = value;
   }

   //============================================================
   // <T>判断英文名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNameChanged(){
      return !RString.equals(__name, _name);
   }

   //============================================================
   // <T>获得英文名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String name(){
      return _name;
   }

   //============================================================
   // <T>设置英文名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setName(String value){
      _name = value;
   }

   //============================================================
   // <T>判断中文名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLabelChanged(){
      return !RString.equals(__label, _label);
   }

   //============================================================
   // <T>获得中文名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String label(){
      return _label;
   }

   //============================================================
   // <T>设置中文名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLabel(String value){
      _label = value;
   }

   //============================================================
   // <T>判断排名的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRankOrderChanged(){
      return __rankOrder != _rankOrder;
   }

   //============================================================
   // <T>获得排名的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int rankOrder(){
      return _rankOrder;
   }

   //============================================================
   // <T>设置排名的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRankOrder(int value){
      _rankOrder = value;
   }

   //============================================================
   // <T>判断排行榜类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRanklistIdChanged(){
      return __ranklistId != _ranklistId;
   }

   //============================================================
   // <T>获得排行榜类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long ranklistId(){
      return _ranklistId;
   }

   //============================================================
   // <T>设置排行榜类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRanklistId(long value){
      _ranklistId = value;
   }

   //============================================================
   // <T>判断属性1的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProperty1Changed(){
      return !RString.equals(__property1, _property1);
   }

   //============================================================
   // <T>获得属性1的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String property1(){
      return _property1;
   }

   //============================================================
   // <T>设置属性1的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProperty1(String value){
      _property1 = value;
   }

   //============================================================
   // <T>判断属性2的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProperty2Changed(){
      return !RString.equals(__property2, _property2);
   }

   //============================================================
   // <T>获得属性2的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String property2(){
      return _property2;
   }

   //============================================================
   // <T>设置属性2的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProperty2(String value){
      _property2 = value;
   }

   //============================================================
   // <T>判断创建用户标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCreateUserIdChanged(){
      return __createUserId != _createUserId;
   }

   //============================================================
   // <T>获得创建用户标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long createUserId(){
      return _createUserId;
   }

   //============================================================
   // <T>设置创建用户标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCreateUserId(long value){
      _createUserId = value;
   }

   //============================================================
   // <T>判断创建日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCreateDateChanged(){
      return !__createDate.equals(_createDate);
   }

   //============================================================
   // <T>获得创建日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime createDate(){
      return _createDate;
   }

   //============================================================
   // <T>设置创建日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCreateDate(TDateTime value){
      _createDate = value;
   }

   //============================================================
   // <T>判断更新者标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isUpdateUserIdChanged(){
      return __updateUserId != _updateUserId;
   }

   //============================================================
   // <T>获得更新者标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long updateUserId(){
      return _updateUserId;
   }

   //============================================================
   // <T>设置更新者标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setUpdateUserId(long value){
      _updateUserId = value;
   }

   //============================================================
   // <T>判断更新时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isUpdateDateChanged(){
      return !__updateDate.equals(_updateDate);
   }

   //============================================================
   // <T>获得更新时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime updateDate(){
      return _updateDate;
   }

   //============================================================
   // <T>设置更新时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setUpdateDate(TDateTime value){
      _updateDate = value;
   }

   //============================================================
   // <T>根据名称获得内容。</T>
   //
   // @param name 名称
   // @return 内容
   //============================================================
   @Override
   public String get(String name){
      switch(name){
         case "ouid":
            return Long.toString(_ouid);
         case "ovld":
            return RBoolean.toString(_ovld);
         case "guid":
            return _guid;
         case "code":
            return _code;
         case "name":
            return _name;
         case "label":
            return _label;
         case "rank_order":
            return RInteger.toString(_rankOrder);
         case "ranklist_id":
            return Long.toString(_ranklistId);
         case "property1":
            return _property1;
         case "property2":
            return _property2;
         case "create_user_id":
            return Long.toString(_createUserId);
         case "create_date":
            return _createDate.toString();
         case "update_user_id":
            return Long.toString(_updateUserId);
         case "update_date":
            return _updateDate.toString();
      }
      return null;
   }

   //============================================================
   // <T>根据名称设置内容。</T>
   //
   // @param name 名称
   // @param value 内容
   //============================================================
   @Override
   public void set(String name,
                   String value){
      switch(name){
         case "ouid":
            _ouid = RLong.parse(value);
            break;
         case "ovld":
            _ovld = RBoolean.parse(value);
            break;
         case "guid":
            _guid = value;
            break;
         case "code":
            _code = value;
            break;
         case "name":
            _name = value;
            break;
         case "label":
            _label = value;
            break;
         case "rank_order":
            _rankOrder = RInteger.parse(value);
            break;
         case "ranklist_id":
            _ranklistId = RLong.parse(value);
            break;
         case "property1":
            _property1 = value;
            break;
         case "property2":
            _property2 = value;
            break;
         case "create_user_id":
            _createUserId = RLong.parse(value);
            break;
         case "create_date":
            _createDate.parse(value);
            break;
         case "update_user_id":
            _updateUserId = RLong.parse(value);
            break;
         case "update_date":
            _updateDate.parse(value);
            break;
      }
   }

   //============================================================
   // <T>加载行记录。</T>
   //
   // @param row 行记录
   //============================================================
   @Override
   public void load(FRow row){
      super.load(row);
      for(IStringPair pair : row){
         // 获得名称
         String name = pair.name();
         if(RString.isEmpty(name)){
            throw new FFatalError("Row format is invalid. (row={1})", row.dump());
         }
         // 获得内容
         String value = pair.value();
         // 设置内容
         switch(name){
            case "ouid":
               __ouid = RLong.parse(value);
               _ouid = __ouid;
               break;
            case "ovld":
               __ovld = RBoolean.parse(value);
               _ovld = __ovld;
               break;
            case "guid":
               __guid = value;
               _guid = __guid;
               break;
            case "code":
               __code = value;
               _code = __code;
               break;
            case "name":
               __name = value;
               _name = __name;
               break;
            case "label":
               __label = value;
               _label = __label;
               break;
            case "rank_order":
               __rankOrder = RInteger.parse(value);
               _rankOrder = __rankOrder;
               break;
            case "ranklist_id":
               __ranklistId = RLong.parse(value);
               _ranklistId = __ranklistId;
               break;
            case "property1":
               __property1 = value;
               _property1 = __property1;
               break;
            case "property2":
               __property2 = value;
               _property2 = __property2;
               break;
            case "create_user_id":
               __createUserId = RLong.parse(value);
               _createUserId = __createUserId;
               break;
            case "create_date":
               __createDate.parse(value);
               _createDate.assign(__createDate);
               break;
            case "update_user_id":
               __updateUserId = RLong.parse(value);
               _updateUserId = __updateUserId;
               break;
            case "update_date":
               __updateDate.parse(value);
               _updateDate.assign(__updateDate);
               break;
         }
      }
   }

   //============================================================
   // <T>存储行记录。</T>
   //
   // @param row 行记录
   //============================================================
   @Override
   public void save(FRow row){
      super.load(row);
      row.set("ouid", _ouid);
      row.set("ovld", _ovld);
      row.set("guid", _guid);
      row.set("code", _code);
      row.set("name", _name);
      row.set("label", _label);
      row.set("rankOrder", _rankOrder);
      row.set("ranklistId", _ranklistId);
      row.set("property1", _property1);
      row.set("property2", _property2);
      row.set("createUserId", _createUserId);
      row.set("createDate", _createDate);
      row.set("updateUserId", _updateUserId);
      row.set("updateDate", _updateDate);
   }

   //============================================================
   // <T>保存对照表。</T>
   //
   // @param map 对照表
   //============================================================
   @Override
   public void saveMap(Map<String, String> map){
      super.saveMap(map);
      map.put("ouid", RLong.toString(_ouid));
      map.put("ovld", RBoolean.toString(_ovld));
      map.put("guid", _guid);
      map.put("code", _code);
      map.put("name", _name);
      map.put("label", _label);
      map.put("rankOrder", RInteger.toString(_rankOrder));
      map.put("ranklistId", RLong.toString(_ranklistId));
      map.put("property1", _property1);
      map.put("property2", _property2);
      map.put("createUserId", RLong.toString(_createUserId));
      map.put("createDate", _createDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("updateUserId", RLong.toString(_updateUserId));
      map.put("updateDate", _updateDate.format("YYYY-MM-DD HH24:MI:SS"));
   }

   //============================================================
   // <T>反序列化数据到内容。</T>
   //
   // @param input 输入流
   //============================================================
   @Override
   public void unserialize(IDataInput input){
      super.unserialize(input);
      _ouid = input.readInt64();
      _ovld = input.readBoolean();
      _guid = input.readString();
      _code = input.readString();
      _name = input.readString();
      _label = input.readString();
      _rankOrder = input.readInt32();
      _ranklistId = input.readInt64();
      _property1 = input.readString();
      _property2 = input.readString();
      _createUserId = input.readInt64();
      _createDate.set(input.readInt64());
      _updateUserId = input.readInt64();
      _updateDate.set(input.readInt64());
   }

   //============================================================
   // <T>序列化内容到数据。</T>
   //
   // @param output 输出流
   //============================================================
   @Override
   public void serialize(IDataOutput output){
      super.serialize(output);
      output.writeInt64(_ouid);
      output.writeBoolean(_ovld);
      output.writeString(_guid);
      output.writeString(_code);
      output.writeString(_name);
      output.writeString(_label);
      output.writeInt32(_rankOrder);
      output.writeInt64(_ranklistId);
      output.writeString(_property1);
      output.writeString(_property2);
      output.writeInt64(_createUserId);
      output.writeInt64(_createDate.get());
      output.writeInt64(_updateUserId);
      output.writeInt64(_updateDate.get());
   }

   //============================================================
   // <T>复制当前对象。</T>
   //
   // @param unit 对象
   // @return 对象
   //============================================================
   @Override
   public void copy(FLogicUnit logicUnit){
      super.copy(logicUnit);
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setCode(_code);
      unit.setName(_name);
      unit.setLabel(_label);
      unit.setRankOrder(_rankOrder);
      unit.setRanklistId(_ranklistId);
      unit.setProperty1(_property1);
      unit.setProperty2(_property2);
      unit.setCreateUserId(_createUserId);
      unit.createDate().assign(_createDate);
      unit.setUpdateUserId(_updateUserId);
      unit.updateDate().assign(_updateDate);
   }

   //============================================================
   // <T>克隆当前对象。</T>
   //
   // @return 对象
   //============================================================
   @Override
   public FCalculateFinancialRanklistItemUnit clone(){
      FCalculateFinancialRanklistItemUnit unit = RClass.newInstance(FCalculateFinancialRanklistItemUnit.class);
      copy(unit);
      return unit;
   }
}
