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
// <T>客户数据统计表逻辑单元。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialCustomerAmountUnit
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

   // 存储字段客户编号的定义。
   private long __customerId;

   // 字段客户编号的定义。
   protected long _customerId;

   // 存储字段客户名称的定义。
   private String __customerLabel;

   // 字段客户名称的定义。
   protected String _customerLabel;

   // 存储字段客户卡片的定义。
   private String __customerCard;

   // 字段客户卡片的定义。
   protected String _customerCard;

   // 存储字段客户地区的定义。
   private String __customerArea;

   // 字段客户地区的定义。
   protected String _customerArea;

   // 存储字段客户生日的定义。
   private String __customerBirth;

   // 字段客户生日的定义。
   protected String _customerBirth;

   // 存储字段客户性别的定义。
   private int __customerGender;

   // 字段客户性别的定义。
   protected int _customerGender;

   // 存储字段客户电话的定义。
   private String __customerPhone;

   // 字段客户电话的定义。
   protected String _customerPhone;

   // 存储字段投资总计的定义。
   private double __investmentTotal;

   // 字段投资总计的定义。
   protected double _investmentTotal;

   // 存储字段赎回总计的定义。
   private double __redemptionTotal;

   // 字段赎回总计的定义。
   protected double _redemptionTotal;

   // 存储字段净投总计的定义。
   private double __netinvestmentTotal;

   // 字段净投总计的定义。
   protected double _netinvestmentTotal;

   // 存储字段利息总计的定义。
   private double __interestTotal;

   // 字段利息总计的定义。
   protected double _interestTotal;

   // 存储字段绩效总计的定义。
   private double __performanceTotal;

   // 字段绩效总计的定义。
   protected double _performanceTotal;

   // 存储字段投标编号的定义。
   private long __tenderId;

   // 字段投标编号的定义。
   protected long _tenderId;

   // 存储字段投标模式的定义。
   private String __tenderModel;

   // 字段投标模式的定义。
   protected String _tenderModel;

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
   // <T>构造客户数据统计表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialCustomerAmountUnit(){
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
   // <T>设置客户编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerId(long value){
      _customerId = value;
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
   // <T>判断客户卡片的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerCardChanged(){
      return !RString.equals(__customerCard, _customerCard);
   }

   //============================================================
   // <T>获得客户卡片的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String customerCard(){
      return _customerCard;
   }

   //============================================================
   // <T>设置客户卡片的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerCard(String value){
      _customerCard = value;
   }

   //============================================================
   // <T>判断客户地区的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerAreaChanged(){
      return !RString.equals(__customerArea, _customerArea);
   }

   //============================================================
   // <T>获得客户地区的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String customerArea(){
      return _customerArea;
   }

   //============================================================
   // <T>设置客户地区的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerArea(String value){
      _customerArea = value;
   }

   //============================================================
   // <T>判断客户生日的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerBirthChanged(){
      return !RString.equals(__customerBirth, _customerBirth);
   }

   //============================================================
   // <T>获得客户生日的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String customerBirth(){
      return _customerBirth;
   }

   //============================================================
   // <T>设置客户生日的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerBirth(String value){
      _customerBirth = value;
   }

   //============================================================
   // <T>判断客户性别的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerGenderChanged(){
      return __customerGender != _customerGender;
   }

   //============================================================
   // <T>获得客户性别的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int customerGender(){
      return _customerGender;
   }

   //============================================================
   // <T>设置客户性别的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerGender(int value){
      _customerGender = value;
   }

   //============================================================
   // <T>判断客户电话的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCustomerPhoneChanged(){
      return !RString.equals(__customerPhone, _customerPhone);
   }

   //============================================================
   // <T>获得客户电话的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String customerPhone(){
      return _customerPhone;
   }

   //============================================================
   // <T>设置客户电话的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCustomerPhone(String value){
      _customerPhone = value;
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
   // <T>判断净投总计的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNetinvestmentTotalChanged(){
      return __netinvestmentTotal != _netinvestmentTotal;
   }

   //============================================================
   // <T>获得净投总计的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double netinvestmentTotal(){
      return _netinvestmentTotal;
   }

   //============================================================
   // <T>设置净投总计的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNetinvestmentTotal(double value){
      _netinvestmentTotal = value;
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
   // <T>判断绩效总计的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPerformanceTotalChanged(){
      return __performanceTotal != _performanceTotal;
   }

   //============================================================
   // <T>获得绩效总计的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double performanceTotal(){
      return _performanceTotal;
   }

   //============================================================
   // <T>设置绩效总计的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPerformanceTotal(double value){
      _performanceTotal = value;
   }

   //============================================================
   // <T>判断投标编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTenderIdChanged(){
      return __tenderId != _tenderId;
   }

   //============================================================
   // <T>获得投标编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long tenderId(){
      return _tenderId;
   }

   //============================================================
   // <T>设置投标编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTenderId(long value){
      _tenderId = value;
   }

   //============================================================
   // <T>判断投标模式的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTenderModelChanged(){
      return !RString.equals(__tenderModel, _tenderModel);
   }

   //============================================================
   // <T>获得投标模式的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String tenderModel(){
      return _tenderModel;
   }

   //============================================================
   // <T>设置投标模式的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTenderModel(String value){
      _tenderModel = value;
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
         case "customer_id":
            return Long.toString(_customerId);
         case "customer_label":
            return _customerLabel;
         case "customer_card":
            return _customerCard;
         case "customer_area":
            return _customerArea;
         case "customer_birth":
            return _customerBirth;
         case "customer_gender":
            return RInteger.toString(_customerGender);
         case "customer_phone":
            return _customerPhone;
         case "investment_total":
            return RDouble.toString(_investmentTotal);
         case "redemption_total":
            return RDouble.toString(_redemptionTotal);
         case "netinvestment_total":
            return RDouble.toString(_netinvestmentTotal);
         case "interest_total":
            return RDouble.toString(_interestTotal);
         case "performance_total":
            return RDouble.toString(_performanceTotal);
         case "tender_id":
            return Long.toString(_tenderId);
         case "tender_model":
            return _tenderModel;
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
         case "customer_id":
            _customerId = RLong.parse(value);
            break;
         case "customer_label":
            _customerLabel = value;
            break;
         case "customer_card":
            _customerCard = value;
            break;
         case "customer_area":
            _customerArea = value;
            break;
         case "customer_birth":
            _customerBirth = value;
            break;
         case "customer_gender":
            _customerGender = RInteger.parse(value);
            break;
         case "customer_phone":
            _customerPhone = value;
            break;
         case "investment_total":
            _investmentTotal = RDouble.parse(value);
            break;
         case "redemption_total":
            _redemptionTotal = RDouble.parse(value);
            break;
         case "netinvestment_total":
            _netinvestmentTotal = RDouble.parse(value);
            break;
         case "interest_total":
            _interestTotal = RDouble.parse(value);
            break;
         case "performance_total":
            _performanceTotal = RDouble.parse(value);
            break;
         case "tender_id":
            _tenderId = RLong.parse(value);
            break;
         case "tender_model":
            _tenderModel = value;
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
            case "customer_id":
               __customerId = RLong.parse(value);
               _customerId = __customerId;
               break;
            case "customer_label":
               __customerLabel = value;
               _customerLabel = __customerLabel;
               break;
            case "customer_card":
               __customerCard = value;
               _customerCard = __customerCard;
               break;
            case "customer_area":
               __customerArea = value;
               _customerArea = __customerArea;
               break;
            case "customer_birth":
               __customerBirth = value;
               _customerBirth = __customerBirth;
               break;
            case "customer_gender":
               __customerGender = RInteger.parse(value);
               _customerGender = __customerGender;
               break;
            case "customer_phone":
               __customerPhone = value;
               _customerPhone = __customerPhone;
               break;
            case "investment_total":
               __investmentTotal = RDouble.parse(value);
               _investmentTotal = __investmentTotal;
               break;
            case "redemption_total":
               __redemptionTotal = RDouble.parse(value);
               _redemptionTotal = __redemptionTotal;
               break;
            case "netinvestment_total":
               __netinvestmentTotal = RDouble.parse(value);
               _netinvestmentTotal = __netinvestmentTotal;
               break;
            case "interest_total":
               __interestTotal = RDouble.parse(value);
               _interestTotal = __interestTotal;
               break;
            case "performance_total":
               __performanceTotal = RDouble.parse(value);
               _performanceTotal = __performanceTotal;
               break;
            case "tender_id":
               __tenderId = RLong.parse(value);
               _tenderId = __tenderId;
               break;
            case "tender_model":
               __tenderModel = value;
               _tenderModel = __tenderModel;
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
      row.set("customerId", _customerId);
      row.set("customerLabel", _customerLabel);
      row.set("customerCard", _customerCard);
      row.set("customerArea", _customerArea);
      row.set("customerBirth", _customerBirth);
      row.set("customerGender", _customerGender);
      row.set("customerPhone", _customerPhone);
      row.set("investmentTotal", _investmentTotal);
      row.set("redemptionTotal", _redemptionTotal);
      row.set("netinvestmentTotal", _netinvestmentTotal);
      row.set("interestTotal", _interestTotal);
      row.set("performanceTotal", _performanceTotal);
      row.set("tenderId", _tenderId);
      row.set("tenderModel", _tenderModel);
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
      map.put("customerId", RLong.toString(_customerId));
      map.put("customerLabel", _customerLabel);
      map.put("customerCard", _customerCard);
      map.put("customerArea", _customerArea);
      map.put("customerBirth", _customerBirth);
      map.put("customerGender", RInteger.toString(_customerGender));
      map.put("customerPhone", _customerPhone);
      map.put("investmentTotal", RDouble.toString(_investmentTotal));
      map.put("redemptionTotal", RDouble.toString(_redemptionTotal));
      map.put("netinvestmentTotal", RDouble.toString(_netinvestmentTotal));
      map.put("interestTotal", RDouble.toString(_interestTotal));
      map.put("performanceTotal", RDouble.toString(_performanceTotal));
      map.put("tenderId", RLong.toString(_tenderId));
      map.put("tenderModel", _tenderModel);
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
      _customerId = input.readInt64();
      _customerLabel = input.readString();
      _customerCard = input.readString();
      _customerArea = input.readString();
      _customerBirth = input.readString();
      _customerGender = input.readInt32();
      _customerPhone = input.readString();
      _tenderId = input.readInt64();
      _tenderModel = input.readString();
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
      output.writeInt64(_customerId);
      output.writeString(_customerLabel);
      output.writeString(_customerCard);
      output.writeString(_customerArea);
      output.writeString(_customerBirth);
      output.writeInt32(_customerGender);
      output.writeString(_customerPhone);
      output.writeInt64(_tenderId);
      output.writeString(_tenderModel);
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
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setCustomerId(_customerId);
      unit.setCustomerLabel(_customerLabel);
      unit.setCustomerCard(_customerCard);
      unit.setCustomerArea(_customerArea);
      unit.setCustomerBirth(_customerBirth);
      unit.setCustomerGender(_customerGender);
      unit.setCustomerPhone(_customerPhone);
      unit.setInvestmentTotal(_investmentTotal);
      unit.setRedemptionTotal(_redemptionTotal);
      unit.setNetinvestmentTotal(_netinvestmentTotal);
      unit.setInterestTotal(_interestTotal);
      unit.setPerformanceTotal(_performanceTotal);
      unit.setTenderId(_tenderId);
      unit.setTenderModel(_tenderModel);
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
   public FStatisticsFinancialCustomerAmountUnit clone(){
      FStatisticsFinancialCustomerAmountUnit unit = RClass.newInstance(FStatisticsFinancialCustomerAmountUnit.class);
      copy(unit);
      return unit;
   }
}
