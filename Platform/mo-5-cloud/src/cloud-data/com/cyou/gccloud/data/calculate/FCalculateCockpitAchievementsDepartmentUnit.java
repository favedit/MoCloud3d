package com.cyou.gccloud.data.calculate;

import java.util.Map;
import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RDouble;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>公司业绩逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitAchievementsDepartmentUnit
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

   // 存储字段投资总额的定义。
   private double __investmentTotal;

   // 字段投资总额的定义。
   protected double _investmentTotal;

   // 存储字段净投总额的定义。
   private double __netinvestmentTotal;

   // 字段净投总额的定义。
   protected double _netinvestmentTotal;

   // 存储字段业绩总额的定义。
   private double __performanceTotal;

   // 字段业绩总额的定义。
   protected double _performanceTotal;

   // 存储字段扩充字段的定义。
   private String __property1;

   // 字段扩充字段的定义。
   protected String _property1;

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
   // <T>构造公司业绩逻辑单元。</T>
   //============================================================
   public FCalculateCockpitAchievementsDepartmentUnit(){
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
   // <T>判断投资总额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentTotalChanged(){
      return __investmentTotal != _investmentTotal;
   }

   //============================================================
   // <T>获得投资总额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investmentTotal(){
      return _investmentTotal;
   }

   //============================================================
   // <T>设置投资总额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentTotal(double value){
      _investmentTotal = value;
   }

   //============================================================
   // <T>判断净投总额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNetinvestmentTotalChanged(){
      return __netinvestmentTotal != _netinvestmentTotal;
   }

   //============================================================
   // <T>获得净投总额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double netinvestmentTotal(){
      return _netinvestmentTotal;
   }

   //============================================================
   // <T>设置净投总额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNetinvestmentTotal(double value){
      _netinvestmentTotal = value;
   }

   //============================================================
   // <T>判断业绩总额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPerformanceTotalChanged(){
      return __performanceTotal != _performanceTotal;
   }

   //============================================================
   // <T>获得业绩总额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double performanceTotal(){
      return _performanceTotal;
   }

   //============================================================
   // <T>设置业绩总额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPerformanceTotal(double value){
      _performanceTotal = value;
   }

   //============================================================
   // <T>判断扩充字段的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProperty1Changed(){
      return !RString.equals(__property1, _property1);
   }

   //============================================================
   // <T>获得扩充字段的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String property1(){
      return _property1;
   }

   //============================================================
   // <T>设置扩充字段的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProperty1(String value){
      _property1 = value;
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
         case "investment_total":
            return RDouble.toString(_investmentTotal);
         case "netinvestment_total":
            return RDouble.toString(_netinvestmentTotal);
         case "performance_total":
            return RDouble.toString(_performanceTotal);
         case "property1":
            return _property1;
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
         case "investment_total":
            _investmentTotal = RDouble.parse(value);
            break;
         case "netinvestment_total":
            _netinvestmentTotal = RDouble.parse(value);
            break;
         case "performance_total":
            _performanceTotal = RDouble.parse(value);
            break;
         case "property1":
            _property1 = value;
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
            case "investment_total":
               __investmentTotal = RDouble.parse(value);
               _investmentTotal = __investmentTotal;
               break;
            case "netinvestment_total":
               __netinvestmentTotal = RDouble.parse(value);
               _netinvestmentTotal = __netinvestmentTotal;
               break;
            case "performance_total":
               __performanceTotal = RDouble.parse(value);
               _performanceTotal = __performanceTotal;
               break;
            case "property1":
               __property1 = value;
               _property1 = __property1;
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
      row.set("investmentTotal", _investmentTotal);
      row.set("netinvestmentTotal", _netinvestmentTotal);
      row.set("performanceTotal", _performanceTotal);
      row.set("property1", _property1);
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
      map.put("investmentTotal", RDouble.toString(_investmentTotal));
      map.put("netinvestmentTotal", RDouble.toString(_netinvestmentTotal));
      map.put("performanceTotal", RDouble.toString(_performanceTotal));
      map.put("property1", _property1);
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
      _property1 = input.readString();
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
      output.writeString(_property1);
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentId(_departmentId);
      unit.setDepartmentLid(_departmentLid);
      unit.setDepartmentLabel(_departmentLabel);
      unit.setInvestmentTotal(_investmentTotal);
      unit.setNetinvestmentTotal(_netinvestmentTotal);
      unit.setPerformanceTotal(_performanceTotal);
      unit.setProperty1(_property1);
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
   public FCalculateCockpitAchievementsDepartmentUnit clone(){
      FCalculateCockpitAchievementsDepartmentUnit unit = RClass.newInstance(FCalculateCockpitAchievementsDepartmentUnit.class);
      copy(unit);
      return unit;
   }
}
