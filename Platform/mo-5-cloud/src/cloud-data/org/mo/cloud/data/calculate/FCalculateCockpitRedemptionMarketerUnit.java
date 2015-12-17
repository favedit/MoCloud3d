package org.mo.cloud.data.calculate;

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
// <T>赎回理财师统计逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitRedemptionMarketerUnit
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

   // 存储字段子公司编号的定义。
   private long __departmentLevel2Lid;

   // 字段子公司编号的定义。
   protected long _departmentLevel2Lid;

   // 存储字段子公司名称的定义。
   private String __departmentLevel2Label;

   // 字段子公司名称的定义。
   protected String _departmentLevel2Label;

   // 存储字段分公司编号的定义。
   private long __departmentLevel4Lid;

   // 字段分公司编号的定义。
   protected long _departmentLevel4Lid;

   // 存储字段分公司名称的定义。
   private String __departmentLevel4Label;

   // 字段分公司名称的定义。
   protected String _departmentLevel4Label;

   // 存储字段理财师姓名的定义。
   private String __marketerLabel;

   // 字段理财师姓名的定义。
   protected String _marketerLabel;

   // 存储字段级别的定义。
   private String __marketerLevel;

   // 字段级别的定义。
   protected String _marketerLevel;

   // 存储字段当日赎回的定义。
   private double __currentDayRedemption;

   // 字段当日赎回的定义。
   protected double _currentDayRedemption;

   // 存储字段历史总投资的定义。
   private double __pastInvestmentTotal;

   // 字段历史总投资的定义。
   protected double _pastInvestmentTotal;

   // 存储字段历史总赎回的定义。
   private double __pastRedemptionTotal;

   // 字段历史总赎回的定义。
   protected double _pastRedemptionTotal;

   // 存储字段历史总净投的定义。
   private double __pastNetInvestmentTotal;

   // 字段历史总净投的定义。
   protected double _pastNetInvestmentTotal;

   // 存储字段入职时间的定义。
   private TDateTime __entryDate = new TDateTime();

   // 字段入职时间的定义。
   protected TDateTime _entryDate = new TDateTime();

   // 存储字段参数1的定义。
   private String __parameter1;

   // 字段参数1的定义。
   protected String _parameter1;

   // 存储字段参数2的定义。
   private String __parameter2;

   // 字段参数2的定义。
   protected String _parameter2;

   // 存储字段参数3的定义。
   private String __parameter3;

   // 字段参数3的定义。
   protected String _parameter3;

   // 存储字段日期的定义。
   private TDateTime __recordTime = new TDateTime();

   // 字段日期的定义。
   protected TDateTime _recordTime = new TDateTime();

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
   // <T>构造赎回理财师统计逻辑单元。</T>
   //============================================================
   public FCalculateCockpitRedemptionMarketerUnit(){
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
   // <T>判断子公司编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel2LidChanged(){
      return __departmentLevel2Lid != _departmentLevel2Lid;
   }

   //============================================================
   // <T>获得子公司编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLevel2Lid(){
      return _departmentLevel2Lid;
   }

   //============================================================
   // <T>设置子公司编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel2Lid(long value){
      _departmentLevel2Lid = value;
   }

   //============================================================
   // <T>判断子公司名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel2LabelChanged(){
      return !RString.equals(__departmentLevel2Label, _departmentLevel2Label);
   }

   //============================================================
   // <T>获得子公司名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLevel2Label(){
      return _departmentLevel2Label;
   }

   //============================================================
   // <T>设置子公司名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel2Label(String value){
      _departmentLevel2Label = value;
   }

   //============================================================
   // <T>判断分公司编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel4LidChanged(){
      return __departmentLevel4Lid != _departmentLevel4Lid;
   }

   //============================================================
   // <T>获得分公司编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLevel4Lid(){
      return _departmentLevel4Lid;
   }

   //============================================================
   // <T>设置分公司编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel4Lid(long value){
      _departmentLevel4Lid = value;
   }

   //============================================================
   // <T>判断分公司名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel4LabelChanged(){
      return !RString.equals(__departmentLevel4Label, _departmentLevel4Label);
   }

   //============================================================
   // <T>获得分公司名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLevel4Label(){
      return _departmentLevel4Label;
   }

   //============================================================
   // <T>设置分公司名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel4Label(String value){
      _departmentLevel4Label = value;
   }

   //============================================================
   // <T>判断理财师姓名的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerLabelChanged(){
      return !RString.equals(__marketerLabel, _marketerLabel);
   }

   //============================================================
   // <T>获得理财师姓名的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String marketerLabel(){
      return _marketerLabel;
   }

   //============================================================
   // <T>设置理财师姓名的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerLabel(String value){
      _marketerLabel = value;
   }

   //============================================================
   // <T>判断级别的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerLevelChanged(){
      return !RString.equals(__marketerLevel, _marketerLevel);
   }

   //============================================================
   // <T>获得级别的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String marketerLevel(){
      return _marketerLevel;
   }

   //============================================================
   // <T>设置级别的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerLevel(String value){
      _marketerLevel = value;
   }

   //============================================================
   // <T>判断当日赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCurrentDayRedemptionChanged(){
      return __currentDayRedemption != _currentDayRedemption;
   }

   //============================================================
   // <T>获得当日赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double currentDayRedemption(){
      return _currentDayRedemption;
   }

   //============================================================
   // <T>设置当日赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCurrentDayRedemption(double value){
      _currentDayRedemption = value;
   }

   //============================================================
   // <T>判断历史总投资的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPastInvestmentTotalChanged(){
      return __pastInvestmentTotal != _pastInvestmentTotal;
   }

   //============================================================
   // <T>获得历史总投资的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double pastInvestmentTotal(){
      return _pastInvestmentTotal;
   }

   //============================================================
   // <T>设置历史总投资的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPastInvestmentTotal(double value){
      _pastInvestmentTotal = value;
   }

   //============================================================
   // <T>判断历史总赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPastRedemptionTotalChanged(){
      return __pastRedemptionTotal != _pastRedemptionTotal;
   }

   //============================================================
   // <T>获得历史总赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double pastRedemptionTotal(){
      return _pastRedemptionTotal;
   }

   //============================================================
   // <T>设置历史总赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPastRedemptionTotal(double value){
      _pastRedemptionTotal = value;
   }

   //============================================================
   // <T>判断历史总净投的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPastNetInvestmentTotalChanged(){
      return __pastNetInvestmentTotal != _pastNetInvestmentTotal;
   }

   //============================================================
   // <T>获得历史总净投的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double pastNetInvestmentTotal(){
      return _pastNetInvestmentTotal;
   }

   //============================================================
   // <T>设置历史总净投的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPastNetInvestmentTotal(double value){
      _pastNetInvestmentTotal = value;
   }

   //============================================================
   // <T>判断入职时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isEntryDateChanged(){
      return !__entryDate.equals(_entryDate);
   }

   //============================================================
   // <T>获得入职时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime entryDate(){
      return _entryDate;
   }

   //============================================================
   // <T>设置入职时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setEntryDate(TDateTime value){
      _entryDate = value;
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
   // <T>判断参数3的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isParameter3Changed(){
      return !RString.equals(__parameter3, _parameter3);
   }

   //============================================================
   // <T>获得参数3的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String parameter3(){
      return _parameter3;
   }

   //============================================================
   // <T>设置参数3的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setParameter3(String value){
      _parameter3 = value;
   }

   //============================================================
   // <T>判断日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordTimeChanged(){
      return !__recordTime.equals(_recordTime);
   }

   //============================================================
   // <T>获得日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordTime(){
      return _recordTime;
   }

   //============================================================
   // <T>设置日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordTime(TDateTime value){
      _recordTime = value;
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
         case "department_level2_lid":
            return Long.toString(_departmentLevel2Lid);
         case "department_level2_label":
            return _departmentLevel2Label;
         case "department_level4_lid":
            return Long.toString(_departmentLevel4Lid);
         case "department_level4_label":
            return _departmentLevel4Label;
         case "marketer_label":
            return _marketerLabel;
         case "marketer_level":
            return _marketerLevel;
         case "current_day_redemption":
            return RDouble.toString(_currentDayRedemption);
         case "past_investment_total":
            return RDouble.toString(_pastInvestmentTotal);
         case "past_redemption_total":
            return RDouble.toString(_pastRedemptionTotal);
         case "past_net_investment_total":
            return RDouble.toString(_pastNetInvestmentTotal);
         case "entry_date":
            return _entryDate.toString();
         case "parameter1":
            return _parameter1;
         case "parameter2":
            return _parameter2;
         case "parameter3":
            return _parameter3;
         case "record_time":
            return _recordTime.toString();
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
         case "department_level2_lid":
            _departmentLevel2Lid = RLong.parse(value);
            break;
         case "department_level2_label":
            _departmentLevel2Label = value;
            break;
         case "department_level4_lid":
            _departmentLevel4Lid = RLong.parse(value);
            break;
         case "department_level4_label":
            _departmentLevel4Label = value;
            break;
         case "marketer_label":
            _marketerLabel = value;
            break;
         case "marketer_level":
            _marketerLevel = value;
            break;
         case "current_day_redemption":
            _currentDayRedemption = RDouble.parse(value);
            break;
         case "past_investment_total":
            _pastInvestmentTotal = RDouble.parse(value);
            break;
         case "past_redemption_total":
            _pastRedemptionTotal = RDouble.parse(value);
            break;
         case "past_net_investment_total":
            _pastNetInvestmentTotal = RDouble.parse(value);
            break;
         case "entry_date":
            _entryDate.parse(value);
            break;
         case "parameter1":
            _parameter1 = value;
            break;
         case "parameter2":
            _parameter2 = value;
            break;
         case "parameter3":
            _parameter3 = value;
            break;
         case "record_time":
            _recordTime.parse(value);
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
            case "department_level2_lid":
               __departmentLevel2Lid = RLong.parse(value);
               _departmentLevel2Lid = __departmentLevel2Lid;
               break;
            case "department_level2_label":
               __departmentLevel2Label = value;
               _departmentLevel2Label = __departmentLevel2Label;
               break;
            case "department_level4_lid":
               __departmentLevel4Lid = RLong.parse(value);
               _departmentLevel4Lid = __departmentLevel4Lid;
               break;
            case "department_level4_label":
               __departmentLevel4Label = value;
               _departmentLevel4Label = __departmentLevel4Label;
               break;
            case "marketer_label":
               __marketerLabel = value;
               _marketerLabel = __marketerLabel;
               break;
            case "marketer_level":
               __marketerLevel = value;
               _marketerLevel = __marketerLevel;
               break;
            case "current_day_redemption":
               __currentDayRedemption = RDouble.parse(value);
               _currentDayRedemption = __currentDayRedemption;
               break;
            case "past_investment_total":
               __pastInvestmentTotal = RDouble.parse(value);
               _pastInvestmentTotal = __pastInvestmentTotal;
               break;
            case "past_redemption_total":
               __pastRedemptionTotal = RDouble.parse(value);
               _pastRedemptionTotal = __pastRedemptionTotal;
               break;
            case "past_net_investment_total":
               __pastNetInvestmentTotal = RDouble.parse(value);
               _pastNetInvestmentTotal = __pastNetInvestmentTotal;
               break;
            case "entry_date":
               __entryDate.parse(value);
               _entryDate.assign(__entryDate);
               break;
            case "parameter1":
               __parameter1 = value;
               _parameter1 = __parameter1;
               break;
            case "parameter2":
               __parameter2 = value;
               _parameter2 = __parameter2;
               break;
            case "parameter3":
               __parameter3 = value;
               _parameter3 = __parameter3;
               break;
            case "record_time":
               __recordTime.parse(value);
               _recordTime.assign(__recordTime);
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
      row.set("departmentLevel2Lid", _departmentLevel2Lid);
      row.set("departmentLevel2Label", _departmentLevel2Label);
      row.set("departmentLevel4Lid", _departmentLevel4Lid);
      row.set("departmentLevel4Label", _departmentLevel4Label);
      row.set("marketerLabel", _marketerLabel);
      row.set("marketerLevel", _marketerLevel);
      row.set("currentDayRedemption", _currentDayRedemption);
      row.set("pastInvestmentTotal", _pastInvestmentTotal);
      row.set("pastRedemptionTotal", _pastRedemptionTotal);
      row.set("pastNetInvestmentTotal", _pastNetInvestmentTotal);
      row.set("entryDate", _entryDate);
      row.set("parameter1", _parameter1);
      row.set("parameter2", _parameter2);
      row.set("parameter3", _parameter3);
      row.set("recordTime", _recordTime);
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
      map.put("departmentLevel2Lid", RLong.toString(_departmentLevel2Lid));
      map.put("departmentLevel2Label", _departmentLevel2Label);
      map.put("departmentLevel4Lid", RLong.toString(_departmentLevel4Lid));
      map.put("departmentLevel4Label", _departmentLevel4Label);
      map.put("marketerLabel", _marketerLabel);
      map.put("marketerLevel", _marketerLevel);
      map.put("currentDayRedemption", RDouble.toString(_currentDayRedemption));
      map.put("pastInvestmentTotal", RDouble.toString(_pastInvestmentTotal));
      map.put("pastRedemptionTotal", RDouble.toString(_pastRedemptionTotal));
      map.put("pastNetInvestmentTotal", RDouble.toString(_pastNetInvestmentTotal));
      map.put("entryDate", _entryDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("parameter1", _parameter1);
      map.put("parameter2", _parameter2);
      map.put("parameter3", _parameter3);
      map.put("recordTime", _recordTime.format("YYYY-MM-DD HH24:MI:SS"));
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
      _departmentLevel2Lid = input.readInt64();
      _departmentLevel2Label = input.readString();
      _departmentLevel4Lid = input.readInt64();
      _departmentLevel4Label = input.readString();
      _marketerLabel = input.readString();
      _marketerLevel = input.readString();
      _entryDate.set(input.readInt64());
      _parameter1 = input.readString();
      _parameter2 = input.readString();
      _parameter3 = input.readString();
      _recordTime.set(input.readInt64());
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
      output.writeInt64(_departmentLevel2Lid);
      output.writeString(_departmentLevel2Label);
      output.writeInt64(_departmentLevel4Lid);
      output.writeString(_departmentLevel4Label);
      output.writeString(_marketerLabel);
      output.writeString(_marketerLevel);
      output.writeInt64(_entryDate.get());
      output.writeString(_parameter1);
      output.writeString(_parameter2);
      output.writeString(_parameter3);
      output.writeInt64(_recordTime.get());
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
      FCalculateCockpitRedemptionMarketerUnit unit = (FCalculateCockpitRedemptionMarketerUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentLevel2Lid(_departmentLevel2Lid);
      unit.setDepartmentLevel2Label(_departmentLevel2Label);
      unit.setDepartmentLevel4Lid(_departmentLevel4Lid);
      unit.setDepartmentLevel4Label(_departmentLevel4Label);
      unit.setMarketerLabel(_marketerLabel);
      unit.setMarketerLevel(_marketerLevel);
      unit.setCurrentDayRedemption(_currentDayRedemption);
      unit.setPastInvestmentTotal(_pastInvestmentTotal);
      unit.setPastRedemptionTotal(_pastRedemptionTotal);
      unit.setPastNetInvestmentTotal(_pastNetInvestmentTotal);
      unit.entryDate().assign(_entryDate);
      unit.setParameter1(_parameter1);
      unit.setParameter2(_parameter2);
      unit.setParameter3(_parameter3);
      unit.recordTime().assign(_recordTime);
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
   public FCalculateCockpitRedemptionMarketerUnit clone(){
      FCalculateCockpitRedemptionMarketerUnit unit = RClass.newInstance(FCalculateCockpitRedemptionMarketerUnit.class);
      copy(unit);
      return unit;
   }
}
