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
// <T>统计产品客户表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialProductCustomerLogic
      extends FLogicTable
{
   // 统计产品客户表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 统计产品客户表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.product.customer", "ST_FIN_PRODUCT_CUSTOMER");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段产品编号的定义。
   public final static SLogicFieldInfo PRODUCT_ID = new SLogicFieldInfo("PRODUCT_ID");

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段客户编号的定义。
   public final static SLogicFieldInfo CUSTOMER_ID = new SLogicFieldInfo("CUSTOMER_ID");

   // 字段顾客关联编号的定义。
   public final static SLogicFieldInfo CUSTOMER_LINK_ID = new SLogicFieldInfo("CUSTOMER_LINK_ID");

   // 字段投资次数的定义。
   public final static SLogicFieldInfo INVESTMENT_COUNT = new SLogicFieldInfo("INVESTMENT_COUNT");

   // 字段投资总计的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段赎回次数的定义。
   public final static SLogicFieldInfo REDEMPTION_COUNT = new SLogicFieldInfo("REDEMPTION_COUNT");

   // 字段赎回总计的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段利息总计的定义。
   public final static SLogicFieldInfo INTEREST_TOTAL = new SLogicFieldInfo("INTEREST_TOTAL");

   // 字段净投总计的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段绩效总计的定义。
   public final static SLogicFieldInfo PERFORMANCE_TOTAL = new SLogicFieldInfo("PERFORMANCE_TOTAL");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`PRODUCT_ID`,`CODE`,`CUSTOMER_ID`,`CUSTOMER_LINK_ID`,`INVESTMENT_COUNT`,`INVESTMENT_TOTAL`,`REDEMPTION_COUNT`,`REDEMPTION_TOTAL`,`INTEREST_TOTAL`,`NETINVESTMENT_TOTAL`,`PERFORMANCE_TOTAL`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造统计产品客户表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialProductCustomerLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialProductCustomerUnit.class;
   }

   //============================================================
   // <T>构造统计产品客户表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialProductCustomerLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialProductCustomerUnit.class;
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
      return (T)new FStatisticsFinancialProductCustomerUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialProductCustomerUnit>(FStatisticsFinancialProductCustomerUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialProductCustomerUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialProductCustomerUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialProductCustomerUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialProductCustomerUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialProductCustomerUnit> fetchAll(){
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
   public FStatisticsFinancialProductCustomerUnit doPrepare(){
      FStatisticsFinancialProductCustomerUnit unit = new FStatisticsFinancialProductCustomerUnit();
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
      FStatisticsFinancialProductCustomerUnit unit = (FStatisticsFinancialProductCustomerUnit)logicUnit;
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
      FStatisticsFinancialProductCustomerUnit unit = (FStatisticsFinancialProductCustomerUnit)logicUnit;
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
      cmd.append(",`PRODUCT_ID`");
      cmd.append(",`CODE`");
      cmd.append(",`CUSTOMER_ID`");
      cmd.append(",`CUSTOMER_LINK_ID`");
      cmd.append(",`INVESTMENT_COUNT`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`REDEMPTION_COUNT`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`PERFORMANCE_TOTAL`");
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
      long productId = unit.productId();
      if(productId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(productId);
      }
      cmd.append(',');
      String code = unit.code();
      if(RString.isEmpty(code)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(code));
         cmd.append('\'');
      }
      cmd.append(',');
      long customerId = unit.customerId();
      if(customerId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(customerId);
      }
      cmd.append(',');
      long customerLinkId = unit.customerLinkId();
      if(customerLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(customerLinkId);
      }
      cmd.append(',');
      cmd.append(unit.investmentCount());
      cmd.append(',');
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.redemptionCount());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.interestTotal());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      cmd.append(unit.performanceTotal());
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
      FStatisticsFinancialProductCustomerUnit unit = (FStatisticsFinancialProductCustomerUnit)logicUnit;
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
      FStatisticsFinancialProductCustomerUnit unit = (FStatisticsFinancialProductCustomerUnit)logicUnit;
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
      if(unit.isProductIdChanged()){
         cmd.append(",`PRODUCT_ID`=");
         long productId = unit.productId();
         if(productId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(productId);
         }
      }
      if(unit.isCodeChanged()){
         cmd.append(",`CODE`=");
         String code = unit.code();
         if(RString.isEmpty(code)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(code));
            cmd.append('\'');
         }
      }
      if(unit.isCustomerIdChanged()){
         cmd.append(",`CUSTOMER_ID`=");
         long customerId = unit.customerId();
         if(customerId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(customerId);
         }
      }
      if(unit.isCustomerLinkIdChanged()){
         cmd.append(",`CUSTOMER_LINK_ID`=");
         long customerLinkId = unit.customerLinkId();
         if(customerLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(customerLinkId);
         }
      }
      if(unit.isInvestmentCountChanged()){
         cmd.append(",`INVESTMENT_COUNT`=");
         cmd.append(unit.investmentCount());
      }
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isRedemptionCountChanged()){
         cmd.append(",`REDEMPTION_COUNT`=");
         cmd.append(unit.redemptionCount());
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isInterestTotalChanged()){
         cmd.append(",`INTEREST_TOTAL`=");
         cmd.append(unit.interestTotal());
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isPerformanceTotalChanged()){
         cmd.append(",`PERFORMANCE_TOTAL`=");
         cmd.append(unit.performanceTotal());
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
      FStatisticsFinancialProductCustomerUnit unit = (FStatisticsFinancialProductCustomerUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
