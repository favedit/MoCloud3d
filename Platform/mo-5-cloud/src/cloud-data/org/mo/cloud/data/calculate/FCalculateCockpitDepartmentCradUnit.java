package org.mo.cloud.data.calculate;

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
// <T>公司名片逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitDepartmentCradUnit
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

   // 存储字段部门编号的定义。
   private long __departmentId;

   // 字段部门编号的定义。
   protected long _departmentId;

   // 存储字段e租宝部门编号的定义。
   private long __departmentLid;

   // 字段e租宝部门编号的定义。
   protected long _departmentLid;

   // 存储字段部门名称的定义。
   private String __departmentLabel;

   // 字段部门名称的定义。
   protected String _departmentLabel;

   // 存储字段主管的定义。
   private String __supervisor;

   // 字段主管的定义。
   protected String _supervisor;

   // 存储字段分公司数的定义。
   private int __departmentCount;

   // 字段分公司数的定义。
   protected int _departmentCount;

   // 存储字段理财师数的定义。
   private int __marketerCount;

   // 字段理财师数的定义。
   protected int _marketerCount;

   // 存储字段当日投资的定义。
   private double __investmentDay;

   // 字段当日投资的定义。
   protected double _investmentDay;

   // 存储字段当日赎回的定义。
   private double __redemptionDay;

   // 字段当日赎回的定义。
   protected double _redemptionDay;

   // 存储字段当日净投的定义。
   private double __netinvestmentDay;

   // 字段当日净投的定义。
   protected double _netinvestmentDay;

   // 存储字段赎回率的定义。
   private double __redemptionRate;

   // 字段赎回率的定义。
   protected double _redemptionRate;

   // 存储字段扩充属性的定义。
   private String __property;

   // 字段扩充属性的定义。
   protected String _property;

   // 存储字段备注的定义。
   private String __note;

   // 字段备注的定义。
   protected String _note;

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
   // <T>构造公司名片逻辑单元。</T>
   //============================================================
   public FCalculateCockpitDepartmentCradUnit(){
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
   // <T>判断部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentIdChanged(){
      return __departmentId != _departmentId;
   }

   //============================================================
   // <T>获得部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentId(){
      return _departmentId;
   }

   //============================================================
   // <T>设置部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentId(long value){
      _departmentId = value;
   }

   //============================================================
   // <T>判断e租宝部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLidChanged(){
      return __departmentLid != _departmentLid;
   }

   //============================================================
   // <T>获得e租宝部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLid(){
      return _departmentLid;
   }

   //============================================================
   // <T>设置e租宝部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLid(long value){
      _departmentLid = value;
   }

   //============================================================
   // <T>判断部门名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLabelChanged(){
      return !RString.equals(__departmentLabel, _departmentLabel);
   }

   //============================================================
   // <T>获得部门名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLabel(){
      return _departmentLabel;
   }

   //============================================================
   // <T>设置部门名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLabel(String value){
      _departmentLabel = value;
   }

   //============================================================
   // <T>判断主管的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isSupervisorChanged(){
      return !RString.equals(__supervisor, _supervisor);
   }

   //============================================================
   // <T>获得主管的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String supervisor(){
      return _supervisor;
   }

   //============================================================
   // <T>设置主管的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setSupervisor(String value){
      _supervisor = value;
   }

   //============================================================
   // <T>判断分公司数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentCountChanged(){
      return __departmentCount != _departmentCount;
   }

   //============================================================
   // <T>获得分公司数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int departmentCount(){
      return _departmentCount;
   }

   //============================================================
   // <T>设置分公司数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentCount(int value){
      _departmentCount = value;
   }

   //============================================================
   // <T>判断理财师数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerCountChanged(){
      return __marketerCount != _marketerCount;
   }

   //============================================================
   // <T>获得理财师数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int marketerCount(){
      return _marketerCount;
   }

   //============================================================
   // <T>设置理财师数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerCount(int value){
      _marketerCount = value;
   }

   //============================================================
   // <T>判断当日投资的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentDayChanged(){
      return __investmentDay != _investmentDay;
   }

   //============================================================
   // <T>获得当日投资的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investmentDay(){
      return _investmentDay;
   }

   //============================================================
   // <T>设置当日投资的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentDay(double value){
      _investmentDay = value;
   }

   //============================================================
   // <T>判断当日赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionDayChanged(){
      return __redemptionDay != _redemptionDay;
   }

   //============================================================
   // <T>获得当日赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionDay(){
      return _redemptionDay;
   }

   //============================================================
   // <T>设置当日赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionDay(double value){
      _redemptionDay = value;
   }

   //============================================================
   // <T>判断当日净投的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNetinvestmentDayChanged(){
      return __netinvestmentDay != _netinvestmentDay;
   }

   //============================================================
   // <T>获得当日净投的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double netinvestmentDay(){
      return _netinvestmentDay;
   }

   //============================================================
   // <T>设置当日净投的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNetinvestmentDay(double value){
      _netinvestmentDay = value;
   }

   //============================================================
   // <T>判断赎回率的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionRateChanged(){
      return __redemptionRate != _redemptionRate;
   }

   //============================================================
   // <T>获得赎回率的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionRate(){
      return _redemptionRate;
   }

   //============================================================
   // <T>设置赎回率的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionRate(double value){
      _redemptionRate = value;
   }

   //============================================================
   // <T>判断扩充属性的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPropertyChanged(){
      return !RString.equals(__property, _property);
   }

   //============================================================
   // <T>获得扩充属性的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String property(){
      return _property;
   }

   //============================================================
   // <T>设置扩充属性的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProperty(String value){
      _property = value;
   }

   //============================================================
   // <T>判断备注的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNoteChanged(){
      return !RString.equals(__note, _note);
   }

   //============================================================
   // <T>获得备注的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String note(){
      return _note;
   }

   //============================================================
   // <T>设置备注的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNote(String value){
      _note = value;
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
         case "department_id":
            return Long.toString(_departmentId);
         case "department_lid":
            return Long.toString(_departmentLid);
         case "department_label":
            return _departmentLabel;
         case "supervisor":
            return _supervisor;
         case "department_count":
            return RInteger.toString(_departmentCount);
         case "marketer_count":
            return RInteger.toString(_marketerCount);
         case "investment_day":
            return RDouble.toString(_investmentDay);
         case "redemption_day":
            return RDouble.toString(_redemptionDay);
         case "netinvestment_day":
            return RDouble.toString(_netinvestmentDay);
         case "redemption_rate":
            return RDouble.toString(_redemptionRate);
         case "property":
            return _property;
         case "note":
            return _note;
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
         case "department_id":
            _departmentId = RLong.parse(value);
            break;
         case "department_lid":
            _departmentLid = RLong.parse(value);
            break;
         case "department_label":
            _departmentLabel = value;
            break;
         case "supervisor":
            _supervisor = value;
            break;
         case "department_count":
            _departmentCount = RInteger.parse(value);
            break;
         case "marketer_count":
            _marketerCount = RInteger.parse(value);
            break;
         case "investment_day":
            _investmentDay = RDouble.parse(value);
            break;
         case "redemption_day":
            _redemptionDay = RDouble.parse(value);
            break;
         case "netinvestment_day":
            _netinvestmentDay = RDouble.parse(value);
            break;
         case "redemption_rate":
            _redemptionRate = RDouble.parse(value);
            break;
         case "property":
            _property = value;
            break;
         case "note":
            _note = value;
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
            case "department_id":
               __departmentId = RLong.parse(value);
               _departmentId = __departmentId;
               break;
            case "department_lid":
               __departmentLid = RLong.parse(value);
               _departmentLid = __departmentLid;
               break;
            case "department_label":
               __departmentLabel = value;
               _departmentLabel = __departmentLabel;
               break;
            case "supervisor":
               __supervisor = value;
               _supervisor = __supervisor;
               break;
            case "department_count":
               __departmentCount = RInteger.parse(value);
               _departmentCount = __departmentCount;
               break;
            case "marketer_count":
               __marketerCount = RInteger.parse(value);
               _marketerCount = __marketerCount;
               break;
            case "investment_day":
               __investmentDay = RDouble.parse(value);
               _investmentDay = __investmentDay;
               break;
            case "redemption_day":
               __redemptionDay = RDouble.parse(value);
               _redemptionDay = __redemptionDay;
               break;
            case "netinvestment_day":
               __netinvestmentDay = RDouble.parse(value);
               _netinvestmentDay = __netinvestmentDay;
               break;
            case "redemption_rate":
               __redemptionRate = RDouble.parse(value);
               _redemptionRate = __redemptionRate;
               break;
            case "property":
               __property = value;
               _property = __property;
               break;
            case "note":
               __note = value;
               _note = __note;
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
      row.set("departmentId", _departmentId);
      row.set("departmentLid", _departmentLid);
      row.set("departmentLabel", _departmentLabel);
      row.set("supervisor", _supervisor);
      row.set("departmentCount", _departmentCount);
      row.set("marketerCount", _marketerCount);
      row.set("investmentDay", _investmentDay);
      row.set("redemptionDay", _redemptionDay);
      row.set("netinvestmentDay", _netinvestmentDay);
      row.set("redemptionRate", _redemptionRate);
      row.set("property", _property);
      row.set("note", _note);
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
      map.put("departmentId", RLong.toString(_departmentId));
      map.put("departmentLid", RLong.toString(_departmentLid));
      map.put("departmentLabel", _departmentLabel);
      map.put("supervisor", _supervisor);
      map.put("departmentCount", RInteger.toString(_departmentCount));
      map.put("marketerCount", RInteger.toString(_marketerCount));
      map.put("investmentDay", RDouble.toString(_investmentDay));
      map.put("redemptionDay", RDouble.toString(_redemptionDay));
      map.put("netinvestmentDay", RDouble.toString(_netinvestmentDay));
      map.put("redemptionRate", RDouble.toString(_redemptionRate));
      map.put("property", _property);
      map.put("note", _note);
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
      _departmentId = input.readInt64();
      _departmentLid = input.readInt64();
      _departmentLabel = input.readString();
      _supervisor = input.readString();
      _departmentCount = input.readInt32();
      _marketerCount = input.readInt32();
      _property = input.readString();
      _note = input.readString();
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
      output.writeInt64(_departmentId);
      output.writeInt64(_departmentLid);
      output.writeString(_departmentLabel);
      output.writeString(_supervisor);
      output.writeInt32(_departmentCount);
      output.writeInt32(_marketerCount);
      output.writeString(_property);
      output.writeString(_note);
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
      FCalculateCockpitDepartmentCradUnit unit = (FCalculateCockpitDepartmentCradUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentId(_departmentId);
      unit.setDepartmentLid(_departmentLid);
      unit.setDepartmentLabel(_departmentLabel);
      unit.setSupervisor(_supervisor);
      unit.setDepartmentCount(_departmentCount);
      unit.setMarketerCount(_marketerCount);
      unit.setInvestmentDay(_investmentDay);
      unit.setRedemptionDay(_redemptionDay);
      unit.setNetinvestmentDay(_netinvestmentDay);
      unit.setRedemptionRate(_redemptionRate);
      unit.setProperty(_property);
      unit.setNote(_note);
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
   public FCalculateCockpitDepartmentCradUnit clone(){
      FCalculateCockpitDepartmentCradUnit unit = RClass.newInstance(FCalculateCockpitDepartmentCradUnit.class);
      copy(unit);
      return unit;
   }
}
