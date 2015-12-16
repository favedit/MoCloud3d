package com.cyou.gccloud.data.data;

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
// <T>金融客户行为记录逻辑单元。</T>
//============================================================
@ASourceMachine
public class FDataFinancialCustomerActionUnit
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

   // 存储字段部门2编号的定义。
   private long __departmentLevel2LinkId;

   // 字段部门2编号的定义。
   protected long _departmentLevel2LinkId;

   // 存储字段部门2标签的定义。
   private String __departmentLevel2Label;

   // 字段部门2标签的定义。
   protected String _departmentLevel2Label;

   // 存储字段部门4编号的定义。
   private long __departmentLevel4LinkId;

   // 字段部门4编号的定义。
   protected long _departmentLevel4LinkId;

   // 存储字段部门4标签的定义。
   private String __departmentLevel4Label;

   // 字段部门4标签的定义。
   protected String _departmentLevel4Label;

   // 存储字段理财师编号的定义。
   private long __marketerId;

   // 字段理财师编号的定义。
   protected long _marketerId;

   // 存储字段理财师关联编号的定义。
   private long __marketerLinkId;

   // 字段理财师关联编号的定义。
   protected long _marketerLinkId;

   // 存储字段理财师名称的定义。
   private String __marketerLabel;

   // 字段理财师名称的定义。
   protected String _marketerLabel;

   // 存储字段客户编号的定义。
   private long __customerId;

   // 字段客户编号的定义。
   protected long _customerId;

   // 存储字段客户关联编号的定义。
   private long __customerLinkId;

   // 字段客户关联编号的定义。
   protected long _customerLinkId;

   // 存储字段客户名称的定义。
   private String __customerLabel;

   // 字段客户名称的定义。
   protected String _customerLabel;

   // 存储字段客户行为状态的定义。
   private int __actionCd;

   // 字段客户行为状态的定义。
   protected int _actionCd;

   // 存储字段记录日期的定义。
   private TDateTime __recordDate = new TDateTime();

   // 字段记录日期的定义。
   protected TDateTime _recordDate = new TDateTime();

   // 存储字段投资总额的定义。
   private double __investmentTotal;

   // 字段投资总额的定义。
   protected double _investmentTotal;

   // 存储字段今日投资的定义。
   private double __investmentDayTotal;

   // 字段今日投资的定义。
   protected double _investmentDayTotal;

   // 存储字段投资次数的定义。
   private int __investmentNumber;

   // 字段投资次数的定义。
   protected int _investmentNumber;

   // 存储字段最后投资日期的定义。
   private TDateTime __investmentLastDate = new TDateTime();

   // 字段最后投资日期的定义。
   protected TDateTime _investmentLastDate = new TDateTime();

   // 存储字段赎回总额的定义。
   private double __redemptionTotal;

   // 字段赎回总额的定义。
   protected double _redemptionTotal;

   // 存储字段今日赎回的定义。
   private double __redemptionDayTotal;

   // 字段今日赎回的定义。
   protected double _redemptionDayTotal;

   // 存储字段赎回次数的定义。
   private int __redemptionNumber;

   // 字段赎回次数的定义。
   protected int _redemptionNumber;

   // 存储字段最后赎回日期的定义。
   private TDateTime __redemptionLastDate = new TDateTime();

   // 字段最后赎回日期的定义。
   protected TDateTime _redemptionLastDate = new TDateTime();

   // 存储字段净投总额的定义。
   private double __netinvestmentTotal;

   // 字段净投总额的定义。
   protected double _netinvestmentTotal;

   // 存储字段行为内容的定义。
   private String __content;

   // 字段行为内容的定义。
   protected String _content;

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
   // <T>构造金融客户行为记录逻辑单元。</T>
   //============================================================
   public FDataFinancialCustomerActionUnit(){
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
   // <T>判断部门2编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel2LinkIdChanged(){
      return __departmentLevel2LinkId != _departmentLevel2LinkId;
   }

   //============================================================
   // <T>获得部门2编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLevel2LinkId(){
      return _departmentLevel2LinkId;
   }

   //============================================================
   // <T>设置部门2编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel2LinkId(long value){
      _departmentLevel2LinkId = value;
   }

   //============================================================
   // <T>判断部门2标签的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel2LabelChanged(){
      return !RString.equals(__departmentLevel2Label, _departmentLevel2Label);
   }

   //============================================================
   // <T>获得部门2标签的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLevel2Label(){
      return _departmentLevel2Label;
   }

   //============================================================
   // <T>设置部门2标签的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel2Label(String value){
      _departmentLevel2Label = value;
   }

   //============================================================
   // <T>判断部门4编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel4LinkIdChanged(){
      return __departmentLevel4LinkId != _departmentLevel4LinkId;
   }

   //============================================================
   // <T>获得部门4编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLevel4LinkId(){
      return _departmentLevel4LinkId;
   }

   //============================================================
   // <T>设置部门4编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel4LinkId(long value){
      _departmentLevel4LinkId = value;
   }

   //============================================================
   // <T>判断部门4标签的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLevel4LabelChanged(){
      return !RString.equals(__departmentLevel4Label, _departmentLevel4Label);
   }

   //============================================================
   // <T>获得部门4标签的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLevel4Label(){
      return _departmentLevel4Label;
   }

   //============================================================
   // <T>设置部门4标签的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLevel4Label(String value){
      _departmentLevel4Label = value;
   }

   //============================================================
   // <T>判断理财师编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerIdChanged(){
      return __marketerId != _marketerId;
   }

   //============================================================
   // <T>获得理财师编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long marketerId(){
      return _marketerId;
   }

   //============================================================
   // <T>设置理财师编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerId(long value){
      _marketerId = value;
   }

   //============================================================
   // <T>判断理财师关联编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerLinkIdChanged(){
      return __marketerLinkId != _marketerLinkId;
   }

   //============================================================
   // <T>获得理财师关联编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long marketerLinkId(){
      return _marketerLinkId;
   }

   //============================================================
   // <T>设置理财师关联编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerLinkId(long value){
      _marketerLinkId = value;
   }

   //============================================================
   // <T>判断理财师名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerLabelChanged(){
      return !RString.equals(__marketerLabel, _marketerLabel);
   }

   //============================================================
   // <T>获得理财师名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String marketerLabel(){
      return _marketerLabel;
   }

   //============================================================
   // <T>设置理财师名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerLabel(String value){
      _marketerLabel = value;
   }

   //============================================================
   // <T>判断客户编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerIdChanged(){
      return __customerId != _customerId;
   }

   //============================================================
   // <T>获得客户编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long customerId(){
      return _customerId;
   }

   //============================================================
   // <T>获得客户编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataFinancialCustomerUnit customer(){
      FDataFinancialCustomerLogic logic = _logicContext.findLogic(FDataFinancialCustomerLogic.class);
      FDataFinancialCustomerUnit unit = logic.find(_customerId);
      return unit;
   }

   //============================================================
   // <T>设置客户编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerId(long value){
      _customerId = value;
   }

   //============================================================
   // <T>判断客户关联编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerLinkIdChanged(){
      return __customerLinkId != _customerLinkId;
   }

   //============================================================
   // <T>获得客户关联编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long customerLinkId(){
      return _customerLinkId;
   }

   //============================================================
   // <T>设置客户关联编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerLinkId(long value){
      _customerLinkId = value;
   }

   //============================================================
   // <T>判断客户名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerLabelChanged(){
      return !RString.equals(__customerLabel, _customerLabel);
   }

   //============================================================
   // <T>获得客户名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String customerLabel(){
      return _customerLabel;
   }

   //============================================================
   // <T>设置客户名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerLabel(String value){
      _customerLabel = value;
   }

   //============================================================
   // <T>判断客户行为状态的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isActionCdChanged(){
      return __actionCd != _actionCd;
   }

   //============================================================
   // <T>获得客户行为状态的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int actionCd(){
      return _actionCd;
   }

   //============================================================
   // <T>设置客户行为状态的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setActionCd(int value){
      _actionCd = value;
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
   // <T>判断今日投资的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentDayTotalChanged(){
      return __investmentDayTotal != _investmentDayTotal;
   }

   //============================================================
   // <T>获得今日投资的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double investmentDayTotal(){
      return _investmentDayTotal;
   }

   //============================================================
   // <T>设置今日投资的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentDayTotal(double value){
      _investmentDayTotal = value;
   }

   //============================================================
   // <T>判断投资次数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentNumberChanged(){
      return __investmentNumber != _investmentNumber;
   }

   //============================================================
   // <T>获得投资次数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int investmentNumber(){
      return _investmentNumber;
   }

   //============================================================
   // <T>设置投资次数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentNumber(int value){
      _investmentNumber = value;
   }

   //============================================================
   // <T>判断最后投资日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isInvestmentLastDateChanged(){
      return !__investmentLastDate.equals(_investmentLastDate);
   }

   //============================================================
   // <T>获得最后投资日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime investmentLastDate(){
      return _investmentLastDate;
   }

   //============================================================
   // <T>设置最后投资日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setInvestmentLastDate(TDateTime value){
      _investmentLastDate = value;
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
   // <T>判断今日赎回的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionDayTotalChanged(){
      return __redemptionDayTotal != _redemptionDayTotal;
   }

   //============================================================
   // <T>获得今日赎回的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double redemptionDayTotal(){
      return _redemptionDayTotal;
   }

   //============================================================
   // <T>设置今日赎回的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionDayTotal(double value){
      _redemptionDayTotal = value;
   }

   //============================================================
   // <T>判断赎回次数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionNumberChanged(){
      return __redemptionNumber != _redemptionNumber;
   }

   //============================================================
   // <T>获得赎回次数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int redemptionNumber(){
      return _redemptionNumber;
   }

   //============================================================
   // <T>设置赎回次数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionNumber(int value){
      _redemptionNumber = value;
   }

   //============================================================
   // <T>判断最后赎回日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRedemptionLastDateChanged(){
      return !__redemptionLastDate.equals(_redemptionLastDate);
   }

   //============================================================
   // <T>获得最后赎回日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime redemptionLastDate(){
      return _redemptionLastDate;
   }

   //============================================================
   // <T>设置最后赎回日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRedemptionLastDate(TDateTime value){
      _redemptionLastDate = value;
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
   // <T>判断行为内容的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isContentChanged(){
      return !RString.equals(__content, _content);
   }

   //============================================================
   // <T>获得行为内容的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String content(){
      return _content;
   }

   //============================================================
   // <T>设置行为内容的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setContent(String value){
      _content = value;
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
         case "department_level2_link_id":
            return Long.toString(_departmentLevel2LinkId);
         case "department_level2_label":
            return _departmentLevel2Label;
         case "department_level4_link_id":
            return Long.toString(_departmentLevel4LinkId);
         case "department_level4_label":
            return _departmentLevel4Label;
         case "marketer_id":
            return Long.toString(_marketerId);
         case "marketer_link_id":
            return Long.toString(_marketerLinkId);
         case "marketer_label":
            return _marketerLabel;
         case "customer_id":
            return Long.toString(_customerId);
         case "customer_link_id":
            return Long.toString(_customerLinkId);
         case "customer_label":
            return _customerLabel;
         case "action_cd":
            return RInteger.toString(_actionCd);
         case "record_date":
            return _recordDate.toString();
         case "investment_total":
            return RDouble.toString(_investmentTotal);
         case "investment_day_total":
            return RDouble.toString(_investmentDayTotal);
         case "investment_number":
            return RInteger.toString(_investmentNumber);
         case "investment_last_date":
            return _investmentLastDate.toString();
         case "redemption_total":
            return RDouble.toString(_redemptionTotal);
         case "redemption_day_total":
            return RDouble.toString(_redemptionDayTotal);
         case "redemption_number":
            return RInteger.toString(_redemptionNumber);
         case "redemption_last_date":
            return _redemptionLastDate.toString();
         case "netinvestment_total":
            return RDouble.toString(_netinvestmentTotal);
         case "content":
            return _content;
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
         case "department_level2_link_id":
            _departmentLevel2LinkId = RLong.parse(value);
            break;
         case "department_level2_label":
            _departmentLevel2Label = value;
            break;
         case "department_level4_link_id":
            _departmentLevel4LinkId = RLong.parse(value);
            break;
         case "department_level4_label":
            _departmentLevel4Label = value;
            break;
         case "marketer_id":
            _marketerId = RLong.parse(value);
            break;
         case "marketer_link_id":
            _marketerLinkId = RLong.parse(value);
            break;
         case "marketer_label":
            _marketerLabel = value;
            break;
         case "customer_id":
            _customerId = RLong.parse(value);
            break;
         case "customer_link_id":
            _customerLinkId = RLong.parse(value);
            break;
         case "customer_label":
            _customerLabel = value;
            break;
         case "action_cd":
            _actionCd = RInteger.parse(value);
            break;
         case "record_date":
            _recordDate.parse(value);
            break;
         case "investment_total":
            _investmentTotal = RDouble.parse(value);
            break;
         case "investment_day_total":
            _investmentDayTotal = RDouble.parse(value);
            break;
         case "investment_number":
            _investmentNumber = RInteger.parse(value);
            break;
         case "investment_last_date":
            _investmentLastDate.parse(value);
            break;
         case "redemption_total":
            _redemptionTotal = RDouble.parse(value);
            break;
         case "redemption_day_total":
            _redemptionDayTotal = RDouble.parse(value);
            break;
         case "redemption_number":
            _redemptionNumber = RInteger.parse(value);
            break;
         case "redemption_last_date":
            _redemptionLastDate.parse(value);
            break;
         case "netinvestment_total":
            _netinvestmentTotal = RDouble.parse(value);
            break;
         case "content":
            _content = value;
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
            case "department_level2_link_id":
               __departmentLevel2LinkId = RLong.parse(value);
               _departmentLevel2LinkId = __departmentLevel2LinkId;
               break;
            case "department_level2_label":
               __departmentLevel2Label = value;
               _departmentLevel2Label = __departmentLevel2Label;
               break;
            case "department_level4_link_id":
               __departmentLevel4LinkId = RLong.parse(value);
               _departmentLevel4LinkId = __departmentLevel4LinkId;
               break;
            case "department_level4_label":
               __departmentLevel4Label = value;
               _departmentLevel4Label = __departmentLevel4Label;
               break;
            case "marketer_id":
               __marketerId = RLong.parse(value);
               _marketerId = __marketerId;
               break;
            case "marketer_link_id":
               __marketerLinkId = RLong.parse(value);
               _marketerLinkId = __marketerLinkId;
               break;
            case "marketer_label":
               __marketerLabel = value;
               _marketerLabel = __marketerLabel;
               break;
            case "customer_id":
               __customerId = RLong.parse(value);
               _customerId = __customerId;
               break;
            case "customer_link_id":
               __customerLinkId = RLong.parse(value);
               _customerLinkId = __customerLinkId;
               break;
            case "customer_label":
               __customerLabel = value;
               _customerLabel = __customerLabel;
               break;
            case "action_cd":
               __actionCd = RInteger.parse(value);
               _actionCd = __actionCd;
               break;
            case "record_date":
               __recordDate.parse(value);
               _recordDate.assign(__recordDate);
               break;
            case "investment_total":
               __investmentTotal = RDouble.parse(value);
               _investmentTotal = __investmentTotal;
               break;
            case "investment_day_total":
               __investmentDayTotal = RDouble.parse(value);
               _investmentDayTotal = __investmentDayTotal;
               break;
            case "investment_number":
               __investmentNumber = RInteger.parse(value);
               _investmentNumber = __investmentNumber;
               break;
            case "investment_last_date":
               __investmentLastDate.parse(value);
               _investmentLastDate.assign(__investmentLastDate);
               break;
            case "redemption_total":
               __redemptionTotal = RDouble.parse(value);
               _redemptionTotal = __redemptionTotal;
               break;
            case "redemption_day_total":
               __redemptionDayTotal = RDouble.parse(value);
               _redemptionDayTotal = __redemptionDayTotal;
               break;
            case "redemption_number":
               __redemptionNumber = RInteger.parse(value);
               _redemptionNumber = __redemptionNumber;
               break;
            case "redemption_last_date":
               __redemptionLastDate.parse(value);
               _redemptionLastDate.assign(__redemptionLastDate);
               break;
            case "netinvestment_total":
               __netinvestmentTotal = RDouble.parse(value);
               _netinvestmentTotal = __netinvestmentTotal;
               break;
            case "content":
               __content = value;
               _content = __content;
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
      row.set("departmentLevel2LinkId", _departmentLevel2LinkId);
      row.set("departmentLevel2Label", _departmentLevel2Label);
      row.set("departmentLevel4LinkId", _departmentLevel4LinkId);
      row.set("departmentLevel4Label", _departmentLevel4Label);
      row.set("marketerId", _marketerId);
      row.set("marketerLinkId", _marketerLinkId);
      row.set("marketerLabel", _marketerLabel);
      row.set("customerId", _customerId);
      row.set("customerLinkId", _customerLinkId);
      row.set("customerLabel", _customerLabel);
      row.set("actionCd", _actionCd);
      row.set("recordDate", _recordDate);
      row.set("investmentTotal", _investmentTotal);
      row.set("investmentDayTotal", _investmentDayTotal);
      row.set("investmentNumber", _investmentNumber);
      row.set("investmentLastDate", _investmentLastDate);
      row.set("redemptionTotal", _redemptionTotal);
      row.set("redemptionDayTotal", _redemptionDayTotal);
      row.set("redemptionNumber", _redemptionNumber);
      row.set("redemptionLastDate", _redemptionLastDate);
      row.set("netinvestmentTotal", _netinvestmentTotal);
      row.set("content", _content);
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
      map.put("departmentLevel2LinkId", RLong.toString(_departmentLevel2LinkId));
      map.put("departmentLevel2Label", _departmentLevel2Label);
      map.put("departmentLevel4LinkId", RLong.toString(_departmentLevel4LinkId));
      map.put("departmentLevel4Label", _departmentLevel4Label);
      map.put("marketerId", RLong.toString(_marketerId));
      map.put("marketerLinkId", RLong.toString(_marketerLinkId));
      map.put("marketerLabel", _marketerLabel);
      map.put("customerId", RLong.toString(_customerId));
      map.put("customerLinkId", RLong.toString(_customerLinkId));
      map.put("customerLabel", _customerLabel);
      map.put("actionCd", RInteger.toString(_actionCd));
      map.put("recordDate", _recordDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("investmentTotal", RDouble.toString(_investmentTotal));
      map.put("investmentDayTotal", RDouble.toString(_investmentDayTotal));
      map.put("investmentNumber", RInteger.toString(_investmentNumber));
      map.put("investmentLastDate", _investmentLastDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("redemptionTotal", RDouble.toString(_redemptionTotal));
      map.put("redemptionDayTotal", RDouble.toString(_redemptionDayTotal));
      map.put("redemptionNumber", RInteger.toString(_redemptionNumber));
      map.put("redemptionLastDate", _redemptionLastDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("netinvestmentTotal", RDouble.toString(_netinvestmentTotal));
      map.put("content", _content);
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
      _departmentLevel2LinkId = input.readInt64();
      _departmentLevel2Label = input.readString();
      _departmentLevel4LinkId = input.readInt64();
      _departmentLevel4Label = input.readString();
      _marketerId = input.readInt64();
      _marketerLinkId = input.readInt64();
      _marketerLabel = input.readString();
      _customerId = input.readInt64();
      _customerLinkId = input.readInt64();
      _customerLabel = input.readString();
      _actionCd = input.readInt32();
      _recordDate.set(input.readInt64());
      _investmentNumber = input.readInt32();
      _investmentLastDate.set(input.readInt64());
      _redemptionNumber = input.readInt32();
      _redemptionLastDate.set(input.readInt64());
      _content = input.readString();
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
      output.writeInt64(_departmentLevel2LinkId);
      output.writeString(_departmentLevel2Label);
      output.writeInt64(_departmentLevel4LinkId);
      output.writeString(_departmentLevel4Label);
      output.writeInt64(_marketerId);
      output.writeInt64(_marketerLinkId);
      output.writeString(_marketerLabel);
      output.writeInt64(_customerId);
      output.writeInt64(_customerLinkId);
      output.writeString(_customerLabel);
      output.writeInt32(_actionCd);
      output.writeInt64(_recordDate.get());
      output.writeInt32(_investmentNumber);
      output.writeInt64(_investmentLastDate.get());
      output.writeInt32(_redemptionNumber);
      output.writeInt64(_redemptionLastDate.get());
      output.writeString(_content);
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentLevel2LinkId(_departmentLevel2LinkId);
      unit.setDepartmentLevel2Label(_departmentLevel2Label);
      unit.setDepartmentLevel4LinkId(_departmentLevel4LinkId);
      unit.setDepartmentLevel4Label(_departmentLevel4Label);
      unit.setMarketerId(_marketerId);
      unit.setMarketerLinkId(_marketerLinkId);
      unit.setMarketerLabel(_marketerLabel);
      unit.setCustomerId(_customerId);
      unit.setCustomerLinkId(_customerLinkId);
      unit.setCustomerLabel(_customerLabel);
      unit.setActionCd(_actionCd);
      unit.recordDate().assign(_recordDate);
      unit.setInvestmentTotal(_investmentTotal);
      unit.setInvestmentDayTotal(_investmentDayTotal);
      unit.setInvestmentNumber(_investmentNumber);
      unit.investmentLastDate().assign(_investmentLastDate);
      unit.setRedemptionTotal(_redemptionTotal);
      unit.setRedemptionDayTotal(_redemptionDayTotal);
      unit.setRedemptionNumber(_redemptionNumber);
      unit.redemptionLastDate().assign(_redemptionLastDate);
      unit.setNetinvestmentTotal(_netinvestmentTotal);
      unit.setContent(_content);
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
   public FDataFinancialCustomerActionUnit clone(){
      FDataFinancialCustomerActionUnit unit = RClass.newInstance(FDataFinancialCustomerActionUnit.class);
      copy(unit);
      return unit;
   }
}
