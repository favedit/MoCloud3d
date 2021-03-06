package org.mo.cloud.data.statistics;

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
// <T>统计产品阶段表逻辑单元。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialProductPhaseUnit
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

   // 存储字段记录年的定义。
   private TDateTime __recordYear = new TDateTime();

   // 字段记录年的定义。
   protected TDateTime _recordYear = new TDateTime();

   // 存储字段记录月的定义。
   private TDateTime __recordMonth = new TDateTime();

   // 字段记录月的定义。
   protected TDateTime _recordMonth = new TDateTime();

   // 存储字段记录周的定义。
   private TDateTime __recordWeek = new TDateTime();

   // 字段记录周的定义。
   protected TDateTime _recordWeek = new TDateTime();

   // 存储字段记录日的定义。
   private TDateTime __recordDay = new TDateTime();

   // 字段记录日的定义。
   protected TDateTime _recordDay = new TDateTime();

   // 存储字段记录小时的定义。
   private TDateTime __recordHour = new TDateTime();

   // 字段记录小时的定义。
   protected TDateTime _recordHour = new TDateTime();

   // 存储字段记录日期的定义。
   private TDateTime __recordDate = new TDateTime();

   // 字段记录日期的定义。
   protected TDateTime _recordDate = new TDateTime();

   // 存储字段产品编号的定义。
   private long __productId;

   // 字段产品编号的定义。
   protected long _productId;

   // 存储字段代码的定义。
   private String __code;

   // 字段代码的定义。
   protected String _code;

   // 存储字段客户总数的定义。
   private int __customerCount;

   // 字段客户总数的定义。
   protected int _customerCount;

   // 存储字段客户总数的定义。
   private int __customerTotal;

   // 字段客户总数的定义。
   protected int _customerTotal;

   // 存储字段投资用户数的定义。
   private int __investmentUserCount;

   // 字段投资用户数的定义。
   protected int _investmentUserCount;

   // 存储字段投资次数的定义。
   private int __investmentCount;

   // 字段投资次数的定义。
   protected int _investmentCount;

   // 存储字段投资的定义。
   private double __investment;

   // 字段投资的定义。
   protected double _investment;

   // 存储字段投资总计的定义。
   private double __investmentTotal;

   // 字段投资总计的定义。
   protected double _investmentTotal;

   // 存储字段赎回用户数的定义。
   private int __redemptionUserCount;

   // 字段赎回用户数的定义。
   protected int _redemptionUserCount;

   // 存储字段赎回次数的定义。
   private int __redemptionCount;

   // 字段赎回次数的定义。
   protected int _redemptionCount;

   // 存储字段赎回的定义。
   private double __redemption;

   // 字段赎回的定义。
   protected double _redemption;

   // 存储字段赎回总计的定义。
   private double __redemptionTotal;

   // 字段赎回总计的定义。
   protected double _redemptionTotal;

   // 存储字段利息的定义。
   private double __interest;

   // 字段利息的定义。
   protected double _interest;

   // 存储字段利息总计的定义。
   private double __interestTotal;

   // 字段利息总计的定义。
   protected double _interestTotal;

   // 存储字段净投的定义。
   private double __netinvestment;

   // 字段净投的定义。
   protected double _netinvestment;

   // 存储字段净投总数的定义。
   private double __netinvestmentTotal;

   // 字段净投总数的定义。
   protected double _netinvestmentTotal;

   // 存储字段业绩的定义。
   private double __performance;

   // 字段业绩的定义。
   protected double _performance;

   // 存储字段业绩总额的定义。
   private double __performanceTotal;

   // 字段业绩总额的定义。
   protected double _performanceTotal;

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
   // <T>构造统计产品阶段表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialProductPhaseUnit(){
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
   // <T>判断记录年的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordYearChanged(){
      return !__recordYear.equals(_recordYear);
   }

   //============================================================
   // <T>获得记录年的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordYear(){
      return _recordYear;
   }

   //============================================================
   // <T>设置记录年的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordYear(TDateTime value){
      _recordYear = value;
   }

   //============================================================
   // <T>判断记录月的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordMonthChanged(){
      return !__recordMonth.equals(_recordMonth);
   }

   //============================================================
   // <T>获得记录月的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordMonth(){
      return _recordMonth;
   }

   //============================================================
   // <T>设置记录月的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordMonth(TDateTime value){
      _recordMonth = value;
   }

   //============================================================
   // <T>判断记录周的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordWeekChanged(){
      return !__recordWeek.equals(_recordWeek);
   }

   //============================================================
   // <T>获得记录周的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordWeek(){
      return _recordWeek;
   }

   //============================================================
   // <T>设置记录周的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordWeek(TDateTime value){
      _recordWeek = value;
   }

   //============================================================
   // <T>判断记录日的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordDayChanged(){
      return !__recordDay.equals(_recordDay);
   }

   //============================================================
   // <T>获得记录日的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordDay(){
      return _recordDay;
   }

   //============================================================
   // <T>设置记录日的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordDay(TDateTime value){
      _recordDay = value;
   }

   //============================================================
   // <T>判断记录小时的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordHourChanged(){
      return !__recordHour.equals(_recordHour);
   }

   //============================================================
   // <T>获得记录小时的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordHour(){
      return _recordHour;
   }

   //============================================================
   // <T>设置记录小时的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordHour(TDateTime value){
      _recordHour = value;
   }

   //============================================================
   // <T>判断记录日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecordDateChanged(){
      return !__recordDate.equals(_recordDate);
   }

   //============================================================
   // <T>获得记录日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recordDate(){
      return _recordDate;
   }

   //============================================================
   // <T>设置记录日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecordDate(TDateTime value){
      _recordDate = value;
   }

   //============================================================
   // <T>判断产品编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProductIdChanged(){
      return __productId != _productId;
   }

   //============================================================
   // <T>获得产品编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long productId(){
      return _productId;
   }

   //============================================================
   // <T>设置产品编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProductId(long value){
      _productId = value;
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
   // <T>判断客户总数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerCountChanged(){
      return __customerCount != _customerCount;
   }

   //============================================================
   // <T>获得客户总数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int customerCount(){
      return _customerCount;
   }

   //============================================================
   // <T>设置客户总数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerCount(int value){
      _customerCount = value;
   }

   //============================================================
   // <T>判断客户总数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerTotalChanged(){
      return __customerTotal != _customerTotal;
   }

   //============================================================
   // <T>获得客户总数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int customerTotal(){
      return _customerTotal;
   }

   //============================================================
   // <T>设置客户总数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerTotal(int value){
      _customerTotal = value;
   }

   //============================================================
   // <T>判断投资用户数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentUserCountChanged(){
      return __investmentUserCount != _investmentUserCount;
   }

   //============================================================
   // <T>获得投资用户数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int investmentUserCount(){
      return _investmentUserCount;
   }

   //============================================================
   // <T>设置投资用户数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentUserCount(int value){
      _investmentUserCount = value;
   }

   //============================================================
   // <T>判断投资次数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentCountChanged(){
      return __investmentCount != _investmentCount;
   }

   //============================================================
   // <T>获得投资次数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int investmentCount(){
      return _investmentCount;
   }

   //============================================================
   // <T>设置投资次数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentCount(int value){
      _investmentCount = value;
   }

   //============================================================
   // <T>判断投资的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentChanged(){
      return __investment != _investment;
   }

   //============================================================
   // <T>获得投资的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investment(){
      return _investment;
   }

   //============================================================
   // <T>设置投资的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestment(double value){
      _investment = value;
   }

   //============================================================
   // <T>判断投资总计的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentTotalChanged(){
      return __investmentTotal != _investmentTotal;
   }

   //============================================================
   // <T>获得投资总计的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investmentTotal(){
      return _investmentTotal;
   }

   //============================================================
   // <T>设置投资总计的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentTotal(double value){
      _investmentTotal = value;
   }

   //============================================================
   // <T>判断赎回用户数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionUserCountChanged(){
      return __redemptionUserCount != _redemptionUserCount;
   }

   //============================================================
   // <T>获得赎回用户数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int redemptionUserCount(){
      return _redemptionUserCount;
   }

   //============================================================
   // <T>设置赎回用户数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionUserCount(int value){
      _redemptionUserCount = value;
   }

   //============================================================
   // <T>判断赎回次数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionCountChanged(){
      return __redemptionCount != _redemptionCount;
   }

   //============================================================
   // <T>获得赎回次数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int redemptionCount(){
      return _redemptionCount;
   }

   //============================================================
   // <T>设置赎回次数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionCount(int value){
      _redemptionCount = value;
   }

   //============================================================
   // <T>判断赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionChanged(){
      return __redemption != _redemption;
   }

   //============================================================
   // <T>获得赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemption(){
      return _redemption;
   }

   //============================================================
   // <T>设置赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemption(double value){
      _redemption = value;
   }

   //============================================================
   // <T>判断赎回总计的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionTotalChanged(){
      return __redemptionTotal != _redemptionTotal;
   }

   //============================================================
   // <T>获得赎回总计的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionTotal(){
      return _redemptionTotal;
   }

   //============================================================
   // <T>设置赎回总计的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionTotal(double value){
      _redemptionTotal = value;
   }

   //============================================================
   // <T>判断利息的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInterestChanged(){
      return __interest != _interest;
   }

   //============================================================
   // <T>获得利息的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double interest(){
      return _interest;
   }

   //============================================================
   // <T>设置利息的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInterest(double value){
      _interest = value;
   }

   //============================================================
   // <T>判断利息总计的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInterestTotalChanged(){
      return __interestTotal != _interestTotal;
   }

   //============================================================
   // <T>获得利息总计的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double interestTotal(){
      return _interestTotal;
   }

   //============================================================
   // <T>设置利息总计的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInterestTotal(double value){
      _interestTotal = value;
   }

   //============================================================
   // <T>判断净投的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNetinvestmentChanged(){
      return __netinvestment != _netinvestment;
   }

   //============================================================
   // <T>获得净投的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double netinvestment(){
      return _netinvestment;
   }

   //============================================================
   // <T>设置净投的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNetinvestment(double value){
      _netinvestment = value;
   }

   //============================================================
   // <T>判断净投总数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNetinvestmentTotalChanged(){
      return __netinvestmentTotal != _netinvestmentTotal;
   }

   //============================================================
   // <T>获得净投总数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double netinvestmentTotal(){
      return _netinvestmentTotal;
   }

   //============================================================
   // <T>设置净投总数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNetinvestmentTotal(double value){
      _netinvestmentTotal = value;
   }

   //============================================================
   // <T>判断业绩的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPerformanceChanged(){
      return __performance != _performance;
   }

   //============================================================
   // <T>获得业绩的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double performance(){
      return _performance;
   }

   //============================================================
   // <T>设置业绩的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPerformance(double value){
      _performance = value;
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
         case "record_year":
            return _recordYear.toString();
         case "record_month":
            return _recordMonth.toString();
         case "record_week":
            return _recordWeek.toString();
         case "record_day":
            return _recordDay.toString();
         case "record_hour":
            return _recordHour.toString();
         case "record_date":
            return _recordDate.toString();
         case "product_id":
            return Long.toString(_productId);
         case "code":
            return _code;
         case "customer_count":
            return RInteger.toString(_customerCount);
         case "customer_total":
            return RInteger.toString(_customerTotal);
         case "investment_user_count":
            return RInteger.toString(_investmentUserCount);
         case "investment_count":
            return RInteger.toString(_investmentCount);
         case "investment":
            return RDouble.toString(_investment);
         case "investment_total":
            return RDouble.toString(_investmentTotal);
         case "redemption_user_count":
            return RInteger.toString(_redemptionUserCount);
         case "redemption_count":
            return RInteger.toString(_redemptionCount);
         case "redemption":
            return RDouble.toString(_redemption);
         case "redemption_total":
            return RDouble.toString(_redemptionTotal);
         case "interest":
            return RDouble.toString(_interest);
         case "interest_total":
            return RDouble.toString(_interestTotal);
         case "netinvestment":
            return RDouble.toString(_netinvestment);
         case "netinvestment_total":
            return RDouble.toString(_netinvestmentTotal);
         case "performance":
            return RDouble.toString(_performance);
         case "performance_total":
            return RDouble.toString(_performanceTotal);
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
         case "record_year":
            _recordYear.parse(value);
            break;
         case "record_month":
            _recordMonth.parse(value);
            break;
         case "record_week":
            _recordWeek.parse(value);
            break;
         case "record_day":
            _recordDay.parse(value);
            break;
         case "record_hour":
            _recordHour.parse(value);
            break;
         case "record_date":
            _recordDate.parse(value);
            break;
         case "product_id":
            _productId = RLong.parse(value);
            break;
         case "code":
            _code = value;
            break;
         case "customer_count":
            _customerCount = RInteger.parse(value);
            break;
         case "customer_total":
            _customerTotal = RInteger.parse(value);
            break;
         case "investment_user_count":
            _investmentUserCount = RInteger.parse(value);
            break;
         case "investment_count":
            _investmentCount = RInteger.parse(value);
            break;
         case "investment":
            _investment = RDouble.parse(value);
            break;
         case "investment_total":
            _investmentTotal = RDouble.parse(value);
            break;
         case "redemption_user_count":
            _redemptionUserCount = RInteger.parse(value);
            break;
         case "redemption_count":
            _redemptionCount = RInteger.parse(value);
            break;
         case "redemption":
            _redemption = RDouble.parse(value);
            break;
         case "redemption_total":
            _redemptionTotal = RDouble.parse(value);
            break;
         case "interest":
            _interest = RDouble.parse(value);
            break;
         case "interest_total":
            _interestTotal = RDouble.parse(value);
            break;
         case "netinvestment":
            _netinvestment = RDouble.parse(value);
            break;
         case "netinvestment_total":
            _netinvestmentTotal = RDouble.parse(value);
            break;
         case "performance":
            _performance = RDouble.parse(value);
            break;
         case "performance_total":
            _performanceTotal = RDouble.parse(value);
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
            case "record_year":
               __recordYear.parse(value);
               _recordYear.assign(__recordYear);
               break;
            case "record_month":
               __recordMonth.parse(value);
               _recordMonth.assign(__recordMonth);
               break;
            case "record_week":
               __recordWeek.parse(value);
               _recordWeek.assign(__recordWeek);
               break;
            case "record_day":
               __recordDay.parse(value);
               _recordDay.assign(__recordDay);
               break;
            case "record_hour":
               __recordHour.parse(value);
               _recordHour.assign(__recordHour);
               break;
            case "record_date":
               __recordDate.parse(value);
               _recordDate.assign(__recordDate);
               break;
            case "product_id":
               __productId = RLong.parse(value);
               _productId = __productId;
               break;
            case "code":
               __code = value;
               _code = __code;
               break;
            case "customer_count":
               __customerCount = RInteger.parse(value);
               _customerCount = __customerCount;
               break;
            case "customer_total":
               __customerTotal = RInteger.parse(value);
               _customerTotal = __customerTotal;
               break;
            case "investment_user_count":
               __investmentUserCount = RInteger.parse(value);
               _investmentUserCount = __investmentUserCount;
               break;
            case "investment_count":
               __investmentCount = RInteger.parse(value);
               _investmentCount = __investmentCount;
               break;
            case "investment":
               __investment = RDouble.parse(value);
               _investment = __investment;
               break;
            case "investment_total":
               __investmentTotal = RDouble.parse(value);
               _investmentTotal = __investmentTotal;
               break;
            case "redemption_user_count":
               __redemptionUserCount = RInteger.parse(value);
               _redemptionUserCount = __redemptionUserCount;
               break;
            case "redemption_count":
               __redemptionCount = RInteger.parse(value);
               _redemptionCount = __redemptionCount;
               break;
            case "redemption":
               __redemption = RDouble.parse(value);
               _redemption = __redemption;
               break;
            case "redemption_total":
               __redemptionTotal = RDouble.parse(value);
               _redemptionTotal = __redemptionTotal;
               break;
            case "interest":
               __interest = RDouble.parse(value);
               _interest = __interest;
               break;
            case "interest_total":
               __interestTotal = RDouble.parse(value);
               _interestTotal = __interestTotal;
               break;
            case "netinvestment":
               __netinvestment = RDouble.parse(value);
               _netinvestment = __netinvestment;
               break;
            case "netinvestment_total":
               __netinvestmentTotal = RDouble.parse(value);
               _netinvestmentTotal = __netinvestmentTotal;
               break;
            case "performance":
               __performance = RDouble.parse(value);
               _performance = __performance;
               break;
            case "performance_total":
               __performanceTotal = RDouble.parse(value);
               _performanceTotal = __performanceTotal;
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
      row.set("recordYear", _recordYear);
      row.set("recordMonth", _recordMonth);
      row.set("recordWeek", _recordWeek);
      row.set("recordDay", _recordDay);
      row.set("recordHour", _recordHour);
      row.set("recordDate", _recordDate);
      row.set("productId", _productId);
      row.set("code", _code);
      row.set("customerCount", _customerCount);
      row.set("customerTotal", _customerTotal);
      row.set("investmentUserCount", _investmentUserCount);
      row.set("investmentCount", _investmentCount);
      row.set("investment", _investment);
      row.set("investmentTotal", _investmentTotal);
      row.set("redemptionUserCount", _redemptionUserCount);
      row.set("redemptionCount", _redemptionCount);
      row.set("redemption", _redemption);
      row.set("redemptionTotal", _redemptionTotal);
      row.set("interest", _interest);
      row.set("interestTotal", _interestTotal);
      row.set("netinvestment", _netinvestment);
      row.set("netinvestmentTotal", _netinvestmentTotal);
      row.set("performance", _performance);
      row.set("performanceTotal", _performanceTotal);
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
      map.put("recordYear", _recordYear.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recordMonth", _recordMonth.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recordWeek", _recordWeek.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recordDay", _recordDay.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recordHour", _recordHour.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recordDate", _recordDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("productId", RLong.toString(_productId));
      map.put("code", _code);
      map.put("customerCount", RInteger.toString(_customerCount));
      map.put("customerTotal", RInteger.toString(_customerTotal));
      map.put("investmentUserCount", RInteger.toString(_investmentUserCount));
      map.put("investmentCount", RInteger.toString(_investmentCount));
      map.put("investment", RDouble.toString(_investment));
      map.put("investmentTotal", RDouble.toString(_investmentTotal));
      map.put("redemptionUserCount", RInteger.toString(_redemptionUserCount));
      map.put("redemptionCount", RInteger.toString(_redemptionCount));
      map.put("redemption", RDouble.toString(_redemption));
      map.put("redemptionTotal", RDouble.toString(_redemptionTotal));
      map.put("interest", RDouble.toString(_interest));
      map.put("interestTotal", RDouble.toString(_interestTotal));
      map.put("netinvestment", RDouble.toString(_netinvestment));
      map.put("netinvestmentTotal", RDouble.toString(_netinvestmentTotal));
      map.put("performance", RDouble.toString(_performance));
      map.put("performanceTotal", RDouble.toString(_performanceTotal));
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
      _recordYear.set(input.readInt64());
      _recordMonth.set(input.readInt64());
      _recordWeek.set(input.readInt64());
      _recordDay.set(input.readInt64());
      _recordHour.set(input.readInt64());
      _recordDate.set(input.readInt64());
      _productId = input.readInt64();
      _code = input.readString();
      _customerCount = input.readInt32();
      _customerTotal = input.readInt32();
      _investmentUserCount = input.readInt32();
      _investmentCount = input.readInt32();
      _redemptionUserCount = input.readInt32();
      _redemptionCount = input.readInt32();
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
      output.writeInt64(_recordYear.get());
      output.writeInt64(_recordMonth.get());
      output.writeInt64(_recordWeek.get());
      output.writeInt64(_recordDay.get());
      output.writeInt64(_recordHour.get());
      output.writeInt64(_recordDate.get());
      output.writeInt64(_productId);
      output.writeString(_code);
      output.writeInt32(_customerCount);
      output.writeInt32(_customerTotal);
      output.writeInt32(_investmentUserCount);
      output.writeInt32(_investmentCount);
      output.writeInt32(_redemptionUserCount);
      output.writeInt32(_redemptionCount);
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
      FStatisticsFinancialProductPhaseUnit unit = (FStatisticsFinancialProductPhaseUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.recordYear().assign(_recordYear);
      unit.recordMonth().assign(_recordMonth);
      unit.recordWeek().assign(_recordWeek);
      unit.recordDay().assign(_recordDay);
      unit.recordHour().assign(_recordHour);
      unit.recordDate().assign(_recordDate);
      unit.setProductId(_productId);
      unit.setCode(_code);
      unit.setCustomerCount(_customerCount);
      unit.setCustomerTotal(_customerTotal);
      unit.setInvestmentUserCount(_investmentUserCount);
      unit.setInvestmentCount(_investmentCount);
      unit.setInvestment(_investment);
      unit.setInvestmentTotal(_investmentTotal);
      unit.setRedemptionUserCount(_redemptionUserCount);
      unit.setRedemptionCount(_redemptionCount);
      unit.setRedemption(_redemption);
      unit.setRedemptionTotal(_redemptionTotal);
      unit.setInterest(_interest);
      unit.setInterestTotal(_interestTotal);
      unit.setNetinvestment(_netinvestment);
      unit.setNetinvestmentTotal(_netinvestmentTotal);
      unit.setPerformance(_performance);
      unit.setPerformanceTotal(_performanceTotal);
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
   public FStatisticsFinancialProductPhaseUnit clone(){
      FStatisticsFinancialProductPhaseUnit unit = RClass.newInstance(FStatisticsFinancialProductPhaseUnit.class);
      copy(unit);
      return unit;
   }
}
