package org.mo.cloud.data.statistics;

import org.mo.com.data.FSql;
import org.mo.com.data.RSql;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.com.lang.RUuid;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.FLogicTable;
import org.mo.data.logic.FLogicUnit;
import org.mo.data.logic.ILogicContext;
import org.mo.data.logic.SLogicConnectionInfo;
import org.mo.data.logic.SLogicFieldInfo;
import org.mo.data.logic.SLogicTableInfo;

//============================================================
// <T>客户数据统计表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialCustomerAmountLogic
      extends FLogicTable
{
   // 客户数据统计表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 客户数据统计表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.customer.amount", "ST_FIN_CUSTOMER_AMOUNT");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段客户编号的定义。
   public final static SLogicFieldInfo CUSTOMER_ID = new SLogicFieldInfo("CUSTOMER_ID");

   // 字段客户名称的定义。
   public final static SLogicFieldInfo CUSTOMER_LABEL = new SLogicFieldInfo("CUSTOMER_LABEL");

   // 字段客户卡片的定义。
   public final static SLogicFieldInfo CUSTOMER_CARD = new SLogicFieldInfo("CUSTOMER_CARD");

   // 字段客户地区的定义。
   public final static SLogicFieldInfo CUSTOMER_AREA = new SLogicFieldInfo("CUSTOMER_AREA");

   // 字段客户生日的定义。
   public final static SLogicFieldInfo CUSTOMER_BIRTH = new SLogicFieldInfo("CUSTOMER_BIRTH");

   // 字段客户性别的定义。
   public final static SLogicFieldInfo CUSTOMER_GENDER = new SLogicFieldInfo("CUSTOMER_GENDER");

   // 字段客户电话的定义。
   public final static SLogicFieldInfo CUSTOMER_PHONE = new SLogicFieldInfo("CUSTOMER_PHONE");

   // 字段投资总计的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段赎回总计的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段净投总计的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段利息总计的定义。
   public final static SLogicFieldInfo INTEREST_TOTAL = new SLogicFieldInfo("INTEREST_TOTAL");

   // 字段绩效总计的定义。
   public final static SLogicFieldInfo PERFORMANCE_TOTAL = new SLogicFieldInfo("PERFORMANCE_TOTAL");

   // 字段投标编号的定义。
   public final static SLogicFieldInfo TENDER_ID = new SLogicFieldInfo("TENDER_ID");

   // 字段投标模式的定义。
   public final static SLogicFieldInfo TENDER_MODEL = new SLogicFieldInfo("TENDER_MODEL");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`CUSTOMER_ID`,`CUSTOMER_LABEL`,`CUSTOMER_CARD`,`CUSTOMER_AREA`,`CUSTOMER_BIRTH`,`CUSTOMER_GENDER`,`CUSTOMER_PHONE`,`INVESTMENT_TOTAL`,`REDEMPTION_TOTAL`,`NETINVESTMENT_TOTAL`,`INTEREST_TOTAL`,`PERFORMANCE_TOTAL`,`TENDER_ID`,`TENDER_MODEL`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造客户数据统计表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialCustomerAmountLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialCustomerAmountUnit.class;
   }

   //============================================================
   // <T>构造客户数据统计表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialCustomerAmountLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialCustomerAmountUnit.class;
   }

   //============================================================
   // <T>获得数据链接信息。</T>
   //
   // @return 数据链接
   //============================================================
   @Override
   public SLogicConnectionInfo connectionInfo(){
      return CONNECTION;
   }

   //============================================================
   // <T>获得数据集合信息。</T>
   //
   // @return 数据集合链接
   //============================================================
   @Override
   public SLogicTableInfo tableInfo(){
      return TABLE;
   }

   //============================================================
   // <T>获得字段集合字符串。</T>
   //
   // @return 字段集合字符串
   //============================================================
   @Override
   public String fieldsInfo(){
      return FIELDS;
   }

   //============================================================
   // <T>创建一个空数据单元。</T>
   //
   // @return 数据单元
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> T innerCreateUnit(){
      return (T)new FStatisticsFinancialCustomerAmountUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialCustomerAmountUnit>(FStatisticsFinancialCustomerAmountUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialCustomerAmountUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialCustomerAmountUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialCustomerAmountUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialCustomerAmountUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(int pageSize,
                                                                      int page){
      return fetchClass(null, null, null, null, null, pageSize, page);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence whereSql,
                                                                      int pageSize,
                                                                      int page){
      return fetchClass(null, null, whereSql, null, null, pageSize, page);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件命令
   // @param orderSql 排序命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence whereSql,
                                                                      CharSequence orderSql){
      return fetchClass(null, null, whereSql, null, orderSql, -1, 0);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件命令
   // @param orderSql 排序命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence whereSql,
                                                                      CharSequence orderSql,
                                                                      int pageSize,
                                                                      int page){
      return fetchClass(null, null, whereSql, null, orderSql, pageSize, page);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param fields 选取字段
   // @param whereSql 条件命令
   // @param orderSql 排序命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence fields,
                                                                      CharSequence whereSql,
                                                                      CharSequence orderSql,
                                                                      int pageSize,
                                                                      int page){
      return fetchClass(null, fields, whereSql, null, orderSql, pageSize, page);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param fields 选取字段
   // @param whereSql 条件命令
   // @param orderSql 排序命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetch(CharSequence fields,
                                                                      CharSequence whereSql,
                                                                      CharSequence groupSql,
                                                                      CharSequence orderSql,
                                                                      int pageSize,
                                                                      int page){
      return fetchClass(null, fields, whereSql, groupSql, orderSql, pageSize, page);
   }

   //============================================================
   // <T>根据查询命令获得数据单元集合。</T>
   //
   // @param code 代码
   // @param sql 查询命令
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetchSql(CharSequence code,
                                                                         CharSequence sql,
                                                                         int pageSize,
                                                                         int page){
      return fetchSql(null, code, sql, pageSize, page);
   }

   //============================================================
   // <T>获得全部数据单元集合。</T>
   //
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerAmountUnit> fetchAll(){
      // 生成命令
      String code = "null|null|null";
      String sql = makeFetchSql(null, null, null, null, 0, 0);
      // 获得数据
      return fetchSql(null, code, sql, 0, 0);
   }

   //============================================================
   // <T>准备一个数据单元。</T>
   //
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialCustomerAmountUnit doPrepare(){
      FStatisticsFinancialCustomerAmountUnit unit = new FStatisticsFinancialCustomerAmountUnit();
      unit.linkLogicContext(_logicContext);
      doPrepare(unit);
      return unit;
   }

   //============================================================
   // <T>准备一个数据单元。</T>
   //
   // @param logicUnit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult doPrepare(FLogicUnit logicUnit){
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      unit.setOvld(true);
      unit.setGuid(RUuid.makeUniqueId());
      return EResult.Success;
   }

   //============================================================
   // <T>插入一个数据单元。</T>
   //
   // @param logicUnit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult doInsert(FLogicUnit logicUnit){
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      long ouid = unit.ouid();
      // 设置操作用户
      if((unit.createUserId() == 0) || (unit.updateUserId() == 0)){
         long operatorId = currentOperatorId();
         if(unit.createUserId() == 0){
            unit.setCreateUserId(operatorId);
         }
         if(unit.updateUserId() == 0){
            unit.setUpdateUserId(operatorId);
         }
      }
      // 生成命令
      FSql cmd = new FSql("INSERT INTO ");
      cmd.append(_name);
      cmd.append("(");
      if(ouid > 0){
         cmd.append("`OUID`,");
      }
      cmd.append("`OVLD`");
      cmd.append(",`GUID`");
      cmd.append(",`CUSTOMER_ID`");
      cmd.append(",`CUSTOMER_LABEL`");
      cmd.append(",`CUSTOMER_CARD`");
      cmd.append(",`CUSTOMER_AREA`");
      cmd.append(",`CUSTOMER_BIRTH`");
      cmd.append(",`CUSTOMER_GENDER`");
      cmd.append(",`CUSTOMER_PHONE`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`PERFORMANCE_TOTAL`");
      cmd.append(",`TENDER_ID`");
      cmd.append(",`TENDER_MODEL`");
      cmd.append(",`CREATE_USER_ID`");
      cmd.append(",`CREATE_DATE`");
      cmd.append(",`UPDATE_USER_ID`");
      cmd.append(",`UPDATE_DATE`");
      cmd.append(") VALUES(");
      if(ouid > 0){
         cmd.appendLong(ouid);
         cmd.append(',');
      }
      cmd.append(unit.ovld());
      String guid = unit.guid();
      if(RString.isEmpty(guid)){
         guid = RUuid.makeUniqueId();
      }
      cmd.append(',');
      cmd.append('\'');
      cmd.append(guid);
      cmd.append('\'');
      cmd.append(',');
      long customerId = unit.customerId();
      if(customerId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(customerId);
      }
      cmd.append(',');
      String customerLabel = unit.customerLabel();
      if(RString.isEmpty(customerLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      String customerCard = unit.customerCard();
      if(RString.isEmpty(customerCard)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerCard));
         cmd.append('\'');
      }
      cmd.append(',');
      String customerArea = unit.customerArea();
      if(RString.isEmpty(customerArea)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerArea));
         cmd.append('\'');
      }
      cmd.append(',');
      String customerBirth = unit.customerBirth();
      if(RString.isEmpty(customerBirth)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerBirth));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.customerGender());
      cmd.append(',');
      String customerPhone = unit.customerPhone();
      if(RString.isEmpty(customerPhone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerPhone));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      cmd.append(unit.interestTotal());
      cmd.append(',');
      cmd.append(unit.performanceTotal());
      cmd.append(',');
      long tenderId = unit.tenderId();
      if(tenderId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderId);
      }
      cmd.append(',');
      String tenderModel = unit.tenderModel();
      if(RString.isEmpty(tenderModel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(tenderModel));
         cmd.append('\'');
      }
      // 设置更新信息
      cmd.append("," + unit.createUserId());
      if(unit.createDate().isEmpty()){
         cmd.append(",NOW()");
      }else{
         cmd.append(",STR_TO_DATE('");
         cmd.append(unit.createDate().format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append("," + unit.updateUserId());
      if(unit.updateDate().isEmpty()){
         cmd.append(",NOW()");
      }else{
         cmd.append(",STR_TO_DATE('");
         cmd.append(unit.updateDate().format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(')');
      // 执行命令
      String sql = cmd.toString();
      long recordId = innerInsertSql(sql);
      unit.setOuid(recordId);
      // 删除缓冲
      innerDeleteRow(recordId);
      return EResult.Success;
   }

   //============================================================
   // <T>更新一个数据单元。</T>
   //
   // @param logicUnit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult doUpdate(FLogicUnit logicUnit){
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doUpdate(unit, unit.ouid());
   }

   //============================================================
   // <T>更新一个数据单元。</T>
   //
   // @param logicUnit 数据单元
   // @param recordId 记录编号
   // @return 处理结果
   //============================================================
   @Override
   public EResult doUpdate(FLogicUnit logicUnit,
                           long recordId){
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      if(recordId <= 0){
         throw new FFatalError("Record id is empty. (record_id={1})", recordId);
      }
      // 删除缓冲
      innerDeleteRow(recordId);
      // 设置操作用户
      if(unit.updateUserId() == 0){
         long operatorId = currentOperatorId();
         unit.setUpdateUserId(operatorId);
      }
      // 生成命令
      FSql cmd = new FSql("UPDATE ");
      cmd.append(_name);
      cmd.append(" SET OVLD=");
      cmd.append(unit.ovld());
      if(unit.isCustomerIdChanged()){
         cmd.append(",`CUSTOMER_ID`=");
         long customerId = unit.customerId();
         if(customerId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(customerId);
         }
      }
      if(unit.isCustomerLabelChanged()){
         cmd.append(",`CUSTOMER_LABEL`=");
         String customerLabel = unit.customerLabel();
         if(RString.isEmpty(customerLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(customerLabel));
            cmd.append('\'');
         }
      }
      if(unit.isCustomerCardChanged()){
         cmd.append(",`CUSTOMER_CARD`=");
         String customerCard = unit.customerCard();
         if(RString.isEmpty(customerCard)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(customerCard));
            cmd.append('\'');
         }
      }
      if(unit.isCustomerAreaChanged()){
         cmd.append(",`CUSTOMER_AREA`=");
         String customerArea = unit.customerArea();
         if(RString.isEmpty(customerArea)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(customerArea));
            cmd.append('\'');
         }
      }
      if(unit.isCustomerBirthChanged()){
         cmd.append(",`CUSTOMER_BIRTH`=");
         String customerBirth = unit.customerBirth();
         if(RString.isEmpty(customerBirth)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(customerBirth));
            cmd.append('\'');
         }
      }
      if(unit.isCustomerGenderChanged()){
         cmd.append(",`CUSTOMER_GENDER`=");
         cmd.append(unit.customerGender());
      }
      if(unit.isCustomerPhoneChanged()){
         cmd.append(",`CUSTOMER_PHONE`=");
         String customerPhone = unit.customerPhone();
         if(RString.isEmpty(customerPhone)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(customerPhone));
            cmd.append('\'');
         }
      }
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isInterestTotalChanged()){
         cmd.append(",`INTEREST_TOTAL`=");
         cmd.append(unit.interestTotal());
      }
      if(unit.isPerformanceTotalChanged()){
         cmd.append(",`PERFORMANCE_TOTAL`=");
         cmd.append(unit.performanceTotal());
      }
      if(unit.isTenderIdChanged()){
         cmd.append(",`TENDER_ID`=");
         long tenderId = unit.tenderId();
         if(tenderId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderId);
         }
      }
      if(unit.isTenderModelChanged()){
         cmd.append(",`TENDER_MODEL`=");
         String tenderModel = unit.tenderModel();
         if(RString.isEmpty(tenderModel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(tenderModel));
            cmd.append('\'');
         }
      }
      cmd.append(",UPDATE_USER_ID=" + unit.updateUserId() + ",UPDATE_DATE=NOW()");
      cmd.append(" WHERE OUID=");
      cmd.append(recordId);
      // 执行命令
      return innerExecuteSql(cmd);
   }

   //============================================================
   // <T>删除一个数据单元。</T>
   //
   // @param logicUnit 数据单元
   // @return 处理结果
   //============================================================
   @Override
   public EResult doDelete(FLogicUnit logicUnit){
      FStatisticsFinancialCustomerAmountUnit unit = (FStatisticsFinancialCustomerAmountUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
