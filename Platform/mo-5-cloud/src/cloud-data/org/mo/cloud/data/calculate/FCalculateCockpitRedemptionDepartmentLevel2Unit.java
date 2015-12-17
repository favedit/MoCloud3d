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
// <T>子分公司赎回统计逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitRedemptionDepartmentLevel2Unit
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

   // 存储字段投资总额的定义。
   private double __investmentTotal;

   // 字段投资总额的定义。
   protected double _investmentTotal;

   // 存储字段投资人数的定义。
   private int __investmentPeople;

   // 字段投资人数的定义。
   protected int _investmentPeople;

   // 存储字段投资人均金额的定义。
   private double __investmentPerAvgMoney;

   // 字段投资人均金额的定义。
   protected double _investmentPerAvgMoney;

   // 存储字段赎回总额的定义。
   private double __redemptionTotal;

   // 字段赎回总额的定义。
   protected double _redemptionTotal;

   // 存储字段赎回人数的定义。
   private int __redemptionPeople;

   // 字段赎回人数的定义。
   protected int _redemptionPeople;

   // 存储字段赎回人均金额的定义。
   private double __redemptionPerAvgMoney;

   // 字段赎回人均金额的定义。
   protected double _redemptionPerAvgMoney;

   // 存储字段理财师赎回总额的定义。
   private double __marketerRedemptionTotal;

   // 字段理财师赎回总额的定义。
   protected double _marketerRedemptionTotal;

   // 存储字段理财师赎回人数的定义。
   private int __marketerRedemptionPeople;

   // 字段理财师赎回人数的定义。
   protected int _marketerRedemptionPeople;

   // 存储字段理财师人均赎回金额的定义。
   private double __marketerRedemptionPerAvgMoney;

   // 字段理财师人均赎回金额的定义。
   protected double _marketerRedemptionPerAvgMoney;

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
   // <T>构造子分公司赎回统计逻辑单元。</T>
   //============================================================
   public FCalculateCockpitRedemptionDepartmentLevel2Unit(){
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
   // <T>判断投资人数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentPeopleChanged(){
      return __investmentPeople != _investmentPeople;
   }

   //============================================================
   // <T>获得投资人数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int investmentPeople(){
      return _investmentPeople;
   }

   //============================================================
   // <T>设置投资人数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentPeople(int value){
      _investmentPeople = value;
   }

   //============================================================
   // <T>判断投资人均金额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentPerAvgMoneyChanged(){
      return __investmentPerAvgMoney != _investmentPerAvgMoney;
   }

   //============================================================
   // <T>获得投资人均金额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investmentPerAvgMoney(){
      return _investmentPerAvgMoney;
   }

   //============================================================
   // <T>设置投资人均金额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentPerAvgMoney(double value){
      _investmentPerAvgMoney = value;
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
   public boolean isRedemptionPeopleChanged(){
      return __redemptionPeople != _redemptionPeople;
   }

   //============================================================
   // <T>获得赎回人数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int redemptionPeople(){
      return _redemptionPeople;
   }

   //============================================================
   // <T>设置赎回人数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionPeople(int value){
      _redemptionPeople = value;
   }

   //============================================================
   // <T>判断赎回人均金额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionPerAvgMoneyChanged(){
      return __redemptionPerAvgMoney != _redemptionPerAvgMoney;
   }

   //============================================================
   // <T>获得赎回人均金额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionPerAvgMoney(){
      return _redemptionPerAvgMoney;
   }

   //============================================================
   // <T>设置赎回人均金额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionPerAvgMoney(double value){
      _redemptionPerAvgMoney = value;
   }

   //============================================================
   // <T>判断理财师赎回总额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerRedemptionTotalChanged(){
      return __marketerRedemptionTotal != _marketerRedemptionTotal;
   }

   //============================================================
   // <T>获得理财师赎回总额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double marketerRedemptionTotal(){
      return _marketerRedemptionTotal;
   }

   //============================================================
   // <T>设置理财师赎回总额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerRedemptionTotal(double value){
      _marketerRedemptionTotal = value;
   }

   //============================================================
   // <T>判断理财师赎回人数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerRedemptionPeopleChanged(){
      return __marketerRedemptionPeople != _marketerRedemptionPeople;
   }

   //============================================================
   // <T>获得理财师赎回人数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int marketerRedemptionPeople(){
      return _marketerRedemptionPeople;
   }

   //============================================================
   // <T>设置理财师赎回人数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerRedemptionPeople(int value){
      _marketerRedemptionPeople = value;
   }

   //============================================================
   // <T>判断理财师人均赎回金额的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerRedemptionPerAvgMoneyChanged(){
      return __marketerRedemptionPerAvgMoney != _marketerRedemptionPerAvgMoney;
   }

   //============================================================
   // <T>获得理财师人均赎回金额的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double marketerRedemptionPerAvgMoney(){
      return _marketerRedemptionPerAvgMoney;
   }

   //============================================================
   // <T>设置理财师人均赎回金额的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerRedemptionPerAvgMoney(double value){
      _marketerRedemptionPerAvgMoney = value;
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
         case "investment_total":
            return RDouble.toString(_investmentTotal);
         case "investment_people":
            return RInteger.toString(_investmentPeople);
         case "investment_per_avg_money":
            return RDouble.toString(_investmentPerAvgMoney);
         case "redemption_total":
            return RDouble.toString(_redemptionTotal);
         case "redemption_people":
            return RInteger.toString(_redemptionPeople);
         case "redemption_per_avg_money":
            return RDouble.toString(_redemptionPerAvgMoney);
         case "marketer_redemption_total":
            return RDouble.toString(_marketerRedemptionTotal);
         case "marketer_redemption_people":
            return RInteger.toString(_marketerRedemptionPeople);
         case "marketer_redemption_per_avg_money":
            return RDouble.toString(_marketerRedemptionPerAvgMoney);
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
         case "investment_total":
            _investmentTotal = RDouble.parse(value);
            break;
         case "investment_people":
            _investmentPeople = RInteger.parse(value);
            break;
         case "investment_per_avg_money":
            _investmentPerAvgMoney = RDouble.parse(value);
            break;
         case "redemption_total":
            _redemptionTotal = RDouble.parse(value);
            break;
         case "redemption_people":
            _redemptionPeople = RInteger.parse(value);
            break;
         case "redemption_per_avg_money":
            _redemptionPerAvgMoney = RDouble.parse(value);
            break;
         case "marketer_redemption_total":
            _marketerRedemptionTotal = RDouble.parse(value);
            break;
         case "marketer_redemption_people":
            _marketerRedemptionPeople = RInteger.parse(value);
            break;
         case "marketer_redemption_per_avg_money":
            _marketerRedemptionPerAvgMoney = RDouble.parse(value);
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
            case "investment_total":
               __investmentTotal = RDouble.parse(value);
               _investmentTotal = __investmentTotal;
               break;
            case "investment_people":
               __investmentPeople = RInteger.parse(value);
               _investmentPeople = __investmentPeople;
               break;
            case "investment_per_avg_money":
               __investmentPerAvgMoney = RDouble.parse(value);
               _investmentPerAvgMoney = __investmentPerAvgMoney;
               break;
            case "redemption_total":
               __redemptionTotal = RDouble.parse(value);
               _redemptionTotal = __redemptionTotal;
               break;
            case "redemption_people":
               __redemptionPeople = RInteger.parse(value);
               _redemptionPeople = __redemptionPeople;
               break;
            case "redemption_per_avg_money":
               __redemptionPerAvgMoney = RDouble.parse(value);
               _redemptionPerAvgMoney = __redemptionPerAvgMoney;
               break;
            case "marketer_redemption_total":
               __marketerRedemptionTotal = RDouble.parse(value);
               _marketerRedemptionTotal = __marketerRedemptionTotal;
               break;
            case "marketer_redemption_people":
               __marketerRedemptionPeople = RInteger.parse(value);
               _marketerRedemptionPeople = __marketerRedemptionPeople;
               break;
            case "marketer_redemption_per_avg_money":
               __marketerRedemptionPerAvgMoney = RDouble.parse(value);
               _marketerRedemptionPerAvgMoney = __marketerRedemptionPerAvgMoney;
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
      row.set("investmentTotal", _investmentTotal);
      row.set("investmentPeople", _investmentPeople);
      row.set("investmentPerAvgMoney", _investmentPerAvgMoney);
      row.set("redemptionTotal", _redemptionTotal);
      row.set("redemptionPeople", _redemptionPeople);
      row.set("redemptionPerAvgMoney", _redemptionPerAvgMoney);
      row.set("marketerRedemptionTotal", _marketerRedemptionTotal);
      row.set("marketerRedemptionPeople", _marketerRedemptionPeople);
      row.set("marketerRedemptionPerAvgMoney", _marketerRedemptionPerAvgMoney);
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
      map.put("investmentTotal", RDouble.toString(_investmentTotal));
      map.put("investmentPeople", RInteger.toString(_investmentPeople));
      map.put("investmentPerAvgMoney", RDouble.toString(_investmentPerAvgMoney));
      map.put("redemptionTotal", RDouble.toString(_redemptionTotal));
      map.put("redemptionPeople", RInteger.toString(_redemptionPeople));
      map.put("redemptionPerAvgMoney", RDouble.toString(_redemptionPerAvgMoney));
      map.put("marketerRedemptionTotal", RDouble.toString(_marketerRedemptionTotal));
      map.put("marketerRedemptionPeople", RInteger.toString(_marketerRedemptionPeople));
      map.put("marketerRedemptionPerAvgMoney", RDouble.toString(_marketerRedemptionPerAvgMoney));
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
      _investmentPeople = input.readInt32();
      _redemptionPeople = input.readInt32();
      _marketerRedemptionPeople = input.readInt32();
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
      output.writeInt32(_investmentPeople);
      output.writeInt32(_redemptionPeople);
      output.writeInt32(_marketerRedemptionPeople);
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentLevel2Lid(_departmentLevel2Lid);
      unit.setDepartmentLevel2Label(_departmentLevel2Label);
      unit.setInvestmentTotal(_investmentTotal);
      unit.setInvestmentPeople(_investmentPeople);
      unit.setInvestmentPerAvgMoney(_investmentPerAvgMoney);
      unit.setRedemptionTotal(_redemptionTotal);
      unit.setRedemptionPeople(_redemptionPeople);
      unit.setRedemptionPerAvgMoney(_redemptionPerAvgMoney);
      unit.setMarketerRedemptionTotal(_marketerRedemptionTotal);
      unit.setMarketerRedemptionPeople(_marketerRedemptionPeople);
      unit.setMarketerRedemptionPerAvgMoney(_marketerRedemptionPerAvgMoney);
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
   public FCalculateCockpitRedemptionDepartmentLevel2Unit clone(){
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = RClass.newInstance(FCalculateCockpitRedemptionDepartmentLevel2Unit.class);
      copy(unit);
      return unit;
   }
}
