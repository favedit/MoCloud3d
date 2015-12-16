package com.cyou.gccloud.data.calculate;

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
// <T>计算客户产品信息逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateFinancialCustomerProductUnit
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

   // 存储字段成员编号的定义。
   private long __memberId;

   // 字段成员编号的定义。
   protected long _memberId;

   // 存储字段成员关联编号的定义。
   private long __memberLinkId;

   // 字段成员关联编号的定义。
   protected long _memberLinkId;

   // 存储字段期间日期的定义。
   private TDateTime __periodDate = new TDateTime();

   // 字段期间日期的定义。
   protected TDateTime _periodDate = new TDateTime();

   // 存储字段产品代码的定义。
   private String __productCode;

   // 字段产品代码的定义。
   protected String _productCode;

   // 存储字段浏览量的定义。
   private int __viewCount;

   // 字段浏览量的定义。
   protected int _viewCount;

   // 存储字段最后浏览时间的定义。
   private TDateTime __lastViewDate = new TDateTime();

   // 字段最后浏览时间的定义。
   protected TDateTime _lastViewDate = new TDateTime();

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
   // <T>构造计算客户产品信息逻辑单元。</T>
   //============================================================
   public FCalculateFinancialCustomerProductUnit(){
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
   // <T>判断成员编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMemberIdChanged(){
      return __memberId != _memberId;
   }

   //============================================================
   // <T>获得成员编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long memberId(){
      return _memberId;
   }

   //============================================================
   // <T>设置成员编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMemberId(long value){
      _memberId = value;
   }

   //============================================================
   // <T>判断成员关联编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMemberLinkIdChanged(){
      return __memberLinkId != _memberLinkId;
   }

   //============================================================
   // <T>获得成员关联编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long memberLinkId(){
      return _memberLinkId;
   }

   //============================================================
   // <T>设置成员关联编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMemberLinkId(long value){
      _memberLinkId = value;
   }

   //============================================================
   // <T>判断期间日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPeriodDateChanged(){
      return !__periodDate.equals(_periodDate);
   }

   //============================================================
   // <T>获得期间日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime periodDate(){
      return _periodDate;
   }

   //============================================================
   // <T>设置期间日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPeriodDate(TDateTime value){
      _periodDate = value;
   }

   //============================================================
   // <T>判断产品代码的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProductCodeChanged(){
      return !RString.equals(__productCode, _productCode);
   }

   //============================================================
   // <T>获得产品代码的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String productCode(){
      return _productCode;
   }

   //============================================================
   // <T>设置产品代码的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProductCode(String value){
      _productCode = value;
   }

   //============================================================
   // <T>判断浏览量的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isViewCountChanged(){
      return __viewCount != _viewCount;
   }

   //============================================================
   // <T>获得浏览量的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int viewCount(){
      return _viewCount;
   }

   //============================================================
   // <T>设置浏览量的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setViewCount(int value){
      _viewCount = value;
   }

   //============================================================
   // <T>判断最后浏览时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLastViewDateChanged(){
      return !__lastViewDate.equals(_lastViewDate);
   }

   //============================================================
   // <T>获得最后浏览时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime lastViewDate(){
      return _lastViewDate;
   }

   //============================================================
   // <T>设置最后浏览时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLastViewDate(TDateTime value){
      _lastViewDate = value;
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
         case "member_id":
            return Long.toString(_memberId);
         case "member_link_id":
            return Long.toString(_memberLinkId);
         case "period_date":
            return _periodDate.toString();
         case "product_code":
            return _productCode;
         case "view_count":
            return RInteger.toString(_viewCount);
         case "last_view_date":
            return _lastViewDate.toString();
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
         case "member_id":
            _memberId = RLong.parse(value);
            break;
         case "member_link_id":
            _memberLinkId = RLong.parse(value);
            break;
         case "period_date":
            _periodDate.parse(value);
            break;
         case "product_code":
            _productCode = value;
            break;
         case "view_count":
            _viewCount = RInteger.parse(value);
            break;
         case "last_view_date":
            _lastViewDate.parse(value);
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
            case "member_id":
               __memberId = RLong.parse(value);
               _memberId = __memberId;
               break;
            case "member_link_id":
               __memberLinkId = RLong.parse(value);
               _memberLinkId = __memberLinkId;
               break;
            case "period_date":
               __periodDate.parse(value);
               _periodDate.assign(__periodDate);
               break;
            case "product_code":
               __productCode = value;
               _productCode = __productCode;
               break;
            case "view_count":
               __viewCount = RInteger.parse(value);
               _viewCount = __viewCount;
               break;
            case "last_view_date":
               __lastViewDate.parse(value);
               _lastViewDate.assign(__lastViewDate);
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
      row.set("memberId", _memberId);
      row.set("memberLinkId", _memberLinkId);
      row.set("periodDate", _periodDate);
      row.set("productCode", _productCode);
      row.set("viewCount", _viewCount);
      row.set("lastViewDate", _lastViewDate);
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
      map.put("memberId", RLong.toString(_memberId));
      map.put("memberLinkId", RLong.toString(_memberLinkId));
      map.put("periodDate", _periodDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("productCode", _productCode);
      map.put("viewCount", RInteger.toString(_viewCount));
      map.put("lastViewDate", _lastViewDate.format("YYYY-MM-DD HH24:MI:SS"));
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
      _memberId = input.readInt64();
      _memberLinkId = input.readInt64();
      _periodDate.set(input.readInt64());
      _productCode = input.readString();
      _viewCount = input.readInt32();
      _lastViewDate.set(input.readInt64());
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
      output.writeInt64(_memberId);
      output.writeInt64(_memberLinkId);
      output.writeInt64(_periodDate.get());
      output.writeString(_productCode);
      output.writeInt32(_viewCount);
      output.writeInt64(_lastViewDate.get());
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setMemberId(_memberId);
      unit.setMemberLinkId(_memberLinkId);
      unit.periodDate().assign(_periodDate);
      unit.setProductCode(_productCode);
      unit.setViewCount(_viewCount);
      unit.lastViewDate().assign(_lastViewDate);
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
   public FCalculateFinancialCustomerProductUnit clone(){
      FCalculateFinancialCustomerProductUnit unit = RClass.newInstance(FCalculateFinancialCustomerProductUnit.class);
      copy(unit);
      return unit;
   }
}
