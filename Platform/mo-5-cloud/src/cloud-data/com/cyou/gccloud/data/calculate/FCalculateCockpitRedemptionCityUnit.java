package com.cyou.gccloud.data.calculate;

import java.util.Map;
import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RDouble;
import org.mo.com.lang.RInteger;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>城市赎回统计逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitRedemptionCityUnit
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

   // 存储字段省份代码的定义。
   private String __provinceCode;

   // 字段省份代码的定义。
   protected String _provinceCode;

   // 存储字段省份中文名称的定义。
   private String __provinceLabel;

   // 字段省份中文名称的定义。
   protected String _provinceLabel;

   // 存储字段城市代码的定义。
   private String __cityCode;

   // 字段城市代码的定义。
   protected String _cityCode;

   // 存储字段城市名称的定义。
   private String __cityLabel;

   // 字段城市名称的定义。
   protected String _cityLabel;

   // 存储字段记录时间的定义。
   private TDateTime __recordDate = new TDateTime();

   // 字段记录时间的定义。
   protected TDateTime _recordDate = new TDateTime();

   // 存储字段赎回总额的定义。
   private double __redemptionTotal;

   // 字段赎回总额的定义。
   protected double _redemptionTotal;

   // 存储字段赎回人数的定义。
   private int __redemptionUserCount;

   // 字段赎回人数的定义。
   protected int _redemptionUserCount;

   // 存储字段人均赎回的定义。
   private double __percapitaRedemption;

   // 字段人均赎回的定义。
   protected double _percapitaRedemption;

   // 存储字段统计时间的定义。
   private TDateTime __statisticalTime = new TDateTime();

   // 字段统计时间的定义。
   protected TDateTime _statisticalTime = new TDateTime();

   // 存储字段参数1的定义。
   private String __parameter1;

   // 字段参数1的定义。
   protected String _parameter1;

   // 存储字段参数2的定义。
   private String __parameter2;

   // 字段参数2的定义。
   protected String _parameter2;

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
   // <T>构造城市赎回统计逻辑单元。</T>
   //============================================================
   public FCalculateCockpitRedemptionCityUnit(){
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
   // <T>判断省份代码的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProvinceCodeChanged(){
      return !RString.equals(__provinceCode, _provinceCode);
   }

   //============================================================
   // <T>获得省份代码的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String provinceCode(){
      return _provinceCode;
   }

   //============================================================
   // <T>设置省份代码的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProvinceCode(String value){
      _provinceCode = value;
   }

   //============================================================
   // <T>判断省份中文名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProvinceLabelChanged(){
      return !RString.equals(__provinceLabel, _provinceLabel);
   }

   //============================================================
   // <T>获得省份中文名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String provinceLabel(){
      return _provinceLabel;
   }

   //============================================================
   // <T>设置省份中文名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProvinceLabel(String value){
      _provinceLabel = value;
   }

   //============================================================
   // <T>判断城市代码的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCityCodeChanged(){
      return !RString.equals(__cityCode, _cityCode);
   }

   //============================================================
   // <T>获得城市代码的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String cityCode(){
      return _cityCode;
   }

   //============================================================
   // <T>设置城市代码的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCityCode(String value){
      _cityCode = value;
   }

   //============================================================
   // <T>判断城市名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCityLabelChanged(){
      return !RString.equals(__cityLabel, _cityLabel);
   }

   //============================================================
   // <T>获得城市名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String cityLabel(){
      return _cityLabel;
   }

   //============================================================
   // <T>设置城市名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCityLabel(String value){
      _cityLabel = value;
   }

   //============================================================
   // <T>判断记录时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordDateChanged(){
      return !__recordDate.equals(_recordDate);
   }

   //============================================================
   // <T>获得记录时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordDate(){
      return _recordDate;
   }

   //============================================================
   // <T>设置记录时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordDate(TDateTime value){
      _recordDate = value;
   }

   //============================================================
   // <T>判断赎回总额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionTotalChanged(){
      return __redemptionTotal != _redemptionTotal;
   }

   //============================================================
   // <T>获得赎回总额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionTotal(){
      return _redemptionTotal;
   }

   //============================================================
   // <T>设置赎回总额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionTotal(double value){
      _redemptionTotal = value;
   }

   //============================================================
   // <T>判断赎回人数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionUserCountChanged(){
      return __redemptionUserCount != _redemptionUserCount;
   }

   //============================================================
   // <T>获得赎回人数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int redemptionUserCount(){
      return _redemptionUserCount;
   }

   //============================================================
   // <T>设置赎回人数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionUserCount(int value){
      _redemptionUserCount = value;
   }

   //============================================================
   // <T>判断人均赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPercapitaRedemptionChanged(){
      return __percapitaRedemption != _percapitaRedemption;
   }

   //============================================================
   // <T>获得人均赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double percapitaRedemption(){
      return _percapitaRedemption;
   }

   //============================================================
   // <T>设置人均赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPercapitaRedemption(double value){
      _percapitaRedemption = value;
   }

   //============================================================
   // <T>判断统计时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isStatisticalTimeChanged(){
      return !__statisticalTime.equals(_statisticalTime);
   }

   //============================================================
   // <T>获得统计时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime statisticalTime(){
      return _statisticalTime;
   }

   //============================================================
   // <T>设置统计时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setStatisticalTime(TDateTime value){
      _statisticalTime = value;
   }

   //============================================================
   // <T>判断参数1的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isParameter1Changed(){
      return !RString.equals(__parameter1, _parameter1);
   }

   //============================================================
   // <T>获得参数1的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String parameter1(){
      return _parameter1;
   }

   //============================================================
   // <T>设置参数1的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setParameter1(String value){
      _parameter1 = value;
   }

   //============================================================
   // <T>判断参数2的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isParameter2Changed(){
      return !RString.equals(__parameter2, _parameter2);
   }

   //============================================================
   // <T>获得参数2的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String parameter2(){
      return _parameter2;
   }

   //============================================================
   // <T>设置参数2的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setParameter2(String value){
      _parameter2 = value;
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
         case "province_code":
            return _provinceCode;
         case "province_label":
            return _provinceLabel;
         case "city_code":
            return _cityCode;
         case "city_label":
            return _cityLabel;
         case "record_date":
            return _recordDate.toString();
         case "redemption_total":
            return RDouble.toString(_redemptionTotal);
         case "redemption_user_count":
            return RInteger.toString(_redemptionUserCount);
         case "percapita_redemption":
            return RDouble.toString(_percapitaRedemption);
         case "statistical_time":
            return _statisticalTime.toString();
         case "parameter1":
            return _parameter1;
         case "parameter2":
            return _parameter2;
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
         case "province_code":
            _provinceCode = value;
            break;
         case "province_label":
            _provinceLabel = value;
            break;
         case "city_code":
            _cityCode = value;
            break;
         case "city_label":
            _cityLabel = value;
            break;
         case "record_date":
            _recordDate.parse(value);
            break;
         case "redemption_total":
            _redemptionTotal = RDouble.parse(value);
            break;
         case "redemption_user_count":
            _redemptionUserCount = RInteger.parse(value);
            break;
         case "percapita_redemption":
            _percapitaRedemption = RDouble.parse(value);
            break;
         case "statistical_time":
            _statisticalTime.parse(value);
            break;
         case "parameter1":
            _parameter1 = value;
            break;
         case "parameter2":
            _parameter2 = value;
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
            case "province_code":
               __provinceCode = value;
               _provinceCode = __provinceCode;
               break;
            case "province_label":
               __provinceLabel = value;
               _provinceLabel = __provinceLabel;
               break;
            case "city_code":
               __cityCode = value;
               _cityCode = __cityCode;
               break;
            case "city_label":
               __cityLabel = value;
               _cityLabel = __cityLabel;
               break;
            case "record_date":
               __recordDate.parse(value);
               _recordDate.assign(__recordDate);
               break;
            case "redemption_total":
               __redemptionTotal = RDouble.parse(value);
               _redemptionTotal = __redemptionTotal;
               break;
            case "redemption_user_count":
               __redemptionUserCount = RInteger.parse(value);
               _redemptionUserCount = __redemptionUserCount;
               break;
            case "percapita_redemption":
               __percapitaRedemption = RDouble.parse(value);
               _percapitaRedemption = __percapitaRedemption;
               break;
            case "statistical_time":
               __statisticalTime.parse(value);
               _statisticalTime.assign(__statisticalTime);
               break;
            case "parameter1":
               __parameter1 = value;
               _parameter1 = __parameter1;
               break;
            case "parameter2":
               __parameter2 = value;
               _parameter2 = __parameter2;
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
      row.set("provinceCode", _provinceCode);
      row.set("provinceLabel", _provinceLabel);
      row.set("cityCode", _cityCode);
      row.set("cityLabel", _cityLabel);
      row.set("recordDate", _recordDate);
      row.set("redemptionTotal", _redemptionTotal);
      row.set("redemptionUserCount", _redemptionUserCount);
      row.set("percapitaRedemption", _percapitaRedemption);
      row.set("statisticalTime", _statisticalTime);
      row.set("parameter1", _parameter1);
      row.set("parameter2", _parameter2);
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
      map.put("provinceCode", _provinceCode);
      map.put("provinceLabel", _provinceLabel);
      map.put("cityCode", _cityCode);
      map.put("cityLabel", _cityLabel);
      map.put("recordDate", _recordDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("redemptionTotal", RDouble.toString(_redemptionTotal));
      map.put("redemptionUserCount", RInteger.toString(_redemptionUserCount));
      map.put("percapitaRedemption", RDouble.toString(_percapitaRedemption));
      map.put("statisticalTime", _statisticalTime.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("parameter1", _parameter1);
      map.put("parameter2", _parameter2);
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
      _provinceCode = input.readString();
      _provinceLabel = input.readString();
      _cityCode = input.readString();
      _cityLabel = input.readString();
      _recordDate.set(input.readInt64());
      _redemptionUserCount = input.readInt32();
      _statisticalTime.set(input.readInt64());
      _parameter1 = input.readString();
      _parameter2 = input.readString();
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
      output.writeString(_provinceCode);
      output.writeString(_provinceLabel);
      output.writeString(_cityCode);
      output.writeString(_cityLabel);
      output.writeInt64(_recordDate.get());
      output.writeInt32(_redemptionUserCount);
      output.writeInt64(_statisticalTime.get());
      output.writeString(_parameter1);
      output.writeString(_parameter2);
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setProvinceCode(_provinceCode);
      unit.setProvinceLabel(_provinceLabel);
      unit.setCityCode(_cityCode);
      unit.setCityLabel(_cityLabel);
      unit.recordDate().assign(_recordDate);
      unit.setRedemptionTotal(_redemptionTotal);
      unit.setRedemptionUserCount(_redemptionUserCount);
      unit.setPercapitaRedemption(_percapitaRedemption);
      unit.statisticalTime().assign(_statisticalTime);
      unit.setParameter1(_parameter1);
      unit.setParameter2(_parameter2);
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
   public FCalculateCockpitRedemptionCityUnit clone(){
      FCalculateCockpitRedemptionCityUnit unit = RClass.newInstance(FCalculateCockpitRedemptionCityUnit.class);
      copy(unit);
      return unit;
   }
}
