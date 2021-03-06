package org.mo.cloud.data.statistics;

import org.mo.com.data.FSql;
import org.mo.com.lang.EResult;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RString;
import org.mo.com.lang.RUuid;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicDataset;
import org.mo.data.logic.FLogicTable;
import org.mo.data.logic.FLogicUnit;
import org.mo.data.logic.ILogicContext;
import org.mo.data.logic.SLogicConnectionInfo;
import org.mo.data.logic.SLogicFieldInfo;
import org.mo.data.logic.SLogicTableInfo;

//============================================================
// <T>动态阶段表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialPhaseLogic
      extends FLogicTable
{
   // 动态阶段表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 动态阶段表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.phase", "ST_FIN_PHASE");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段记录年的定义。
   public final static SLogicFieldInfo RECORD_YEAR = new SLogicFieldInfo("RECORD_YEAR");

   // 字段记录月的定义。
   public final static SLogicFieldInfo RECORD_MONTH = new SLogicFieldInfo("RECORD_MONTH");

   // 字段记录周的定义。
   public final static SLogicFieldInfo RECORD_WEEK = new SLogicFieldInfo("RECORD_WEEK");

   // 字段记录日的定义。
   public final static SLogicFieldInfo RECORD_DAY = new SLogicFieldInfo("RECORD_DAY");

   // 字段记录小时的定义。
   public final static SLogicFieldInfo RECORD_HOUR = new SLogicFieldInfo("RECORD_HOUR");

   // 字段记录日期的定义。
   public final static SLogicFieldInfo RECORD_DATE = new SLogicFieldInfo("RECORD_DATE");

   // 字段关联编号的定义。
   public final static SLogicFieldInfo LINK_ID = new SLogicFieldInfo("LINK_ID");

   // 字段关联日期的定义。
   public final static SLogicFieldInfo LINK_DATE = new SLogicFieldInfo("LINK_DATE");

   // 字段命令时间的定义。
   public final static SLogicFieldInfo ACTION_DATE = new SLogicFieldInfo("ACTION_DATE");

   // 字段部门数量的定义。
   public final static SLogicFieldInfo DEPARTMENT_COUNT = new SLogicFieldInfo("DEPARTMENT_COUNT");

   // 字段部门总计的定义。
   public final static SLogicFieldInfo DEPARTMENT_TOTAL = new SLogicFieldInfo("DEPARTMENT_TOTAL");

   // 字段理财师数量的定义。
   public final static SLogicFieldInfo MARKETER_COUNT = new SLogicFieldInfo("MARKETER_COUNT");

   // 字段理财师总计的定义。
   public final static SLogicFieldInfo MARKETER_TOTAL = new SLogicFieldInfo("MARKETER_TOTAL");

   // 字段客户数量的定义。
   public final static SLogicFieldInfo CUSTOMER_COUNT = new SLogicFieldInfo("CUSTOMER_COUNT");

   // 字段客户总数的定义。
   public final static SLogicFieldInfo CUSTOMER_TOTAL = new SLogicFieldInfo("CUSTOMER_TOTAL");

   // 字段成员数量的定义。
   public final static SLogicFieldInfo MEMBER_COUNT = new SLogicFieldInfo("MEMBER_COUNT");

   // 字段用户总数的定义。
   public final static SLogicFieldInfo MEMBER_TOTAL = new SLogicFieldInfo("MEMBER_TOTAL");

   // 字段投资金额的定义。
   public final static SLogicFieldInfo INVESTMENT = new SLogicFieldInfo("INVESTMENT");

   // 字段投资总金额的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段投资次数的定义。
   public final static SLogicFieldInfo INVESTMENT_NUMBER = new SLogicFieldInfo("INVESTMENT_NUMBER");

   // 字段投资总次数的定义。
   public final static SLogicFieldInfo INVESTMENT_NUMBER_TOTAL = new SLogicFieldInfo("INVESTMENT_NUMBER_TOTAL");

   // 字段投资用户数的定义。
   public final static SLogicFieldInfo INVESTMENT_USER = new SLogicFieldInfo("INVESTMENT_USER");

   // 字段投资用户总数的定义。
   public final static SLogicFieldInfo INVESTMENT_USER_TOTAL = new SLogicFieldInfo("INVESTMENT_USER_TOTAL");

   // 字段赎回金额的定义。
   public final static SLogicFieldInfo REDEMPTION = new SLogicFieldInfo("REDEMPTION");

   // 字段赎回总金额的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段赎回次数的定义。
   public final static SLogicFieldInfo REDEMPTION_NUMBER = new SLogicFieldInfo("REDEMPTION_NUMBER");

   // 字段赎回总次数的定义。
   public final static SLogicFieldInfo REDEMPTION_NUMBER_TOTAL = new SLogicFieldInfo("REDEMPTION_NUMBER_TOTAL");

   // 字段赎回用户数的定义。
   public final static SLogicFieldInfo REDEMPTION_USER = new SLogicFieldInfo("REDEMPTION_USER");

   // 字段赎回用户总数的定义。
   public final static SLogicFieldInfo REDEMPTION_USER_TOTAL = new SLogicFieldInfo("REDEMPTION_USER_TOTAL");

   // 字段净投金额的定义。
   public final static SLogicFieldInfo NETINVESTMENT = new SLogicFieldInfo("NETINVESTMENT");

   // 字段净投总金额的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段利息金额的定义。
   public final static SLogicFieldInfo INTEREST = new SLogicFieldInfo("INTEREST");

   // 字段利息总金额的定义。
   public final static SLogicFieldInfo INTEREST_TOTAL = new SLogicFieldInfo("INTEREST_TOTAL");

   // 字段绩效的定义。
   public final static SLogicFieldInfo PERFORMANCE = new SLogicFieldInfo("PERFORMANCE");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`RECORD_YEAR`,`RECORD_MONTH`,`RECORD_WEEK`,`RECORD_DAY`,`RECORD_HOUR`,`RECORD_DATE`,`LINK_ID`,`LINK_DATE`,`ACTION_DATE`,`DEPARTMENT_COUNT`,`DEPARTMENT_TOTAL`,`MARKETER_COUNT`,`MARKETER_TOTAL`,`CUSTOMER_COUNT`,`CUSTOMER_TOTAL`,`MEMBER_COUNT`,`MEMBER_TOTAL`,`INVESTMENT`,`INVESTMENT_TOTAL`,`INVESTMENT_NUMBER`,`INVESTMENT_NUMBER_TOTAL`,`INVESTMENT_USER`,`INVESTMENT_USER_TOTAL`,`REDEMPTION`,`REDEMPTION_TOTAL`,`REDEMPTION_NUMBER`,`REDEMPTION_NUMBER_TOTAL`,`REDEMPTION_USER`,`REDEMPTION_USER_TOTAL`,`NETINVESTMENT`,`NETINVESTMENT_TOTAL`,`INTEREST`,`INTEREST_TOTAL`,`PERFORMANCE`,`PERFORMANCE_TOTAL`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造动态阶段表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialPhaseLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialPhaseUnit.class;
   }

   //============================================================
   // <T>构造动态阶段表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialPhaseLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialPhaseUnit.class;
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
      return (T)new FStatisticsFinancialPhaseUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialPhaseUnit>(FStatisticsFinancialPhaseUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialPhaseUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialPhaseUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialPhaseUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialPhaseUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialPhaseUnit> fetchAll(){
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
   public FStatisticsFinancialPhaseUnit doPrepare(){
      FStatisticsFinancialPhaseUnit unit = new FStatisticsFinancialPhaseUnit();
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
      FStatisticsFinancialPhaseUnit unit = (FStatisticsFinancialPhaseUnit)logicUnit;
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
      FStatisticsFinancialPhaseUnit unit = (FStatisticsFinancialPhaseUnit)logicUnit;
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
      cmd.append(",`RECORD_YEAR`");
      cmd.append(",`RECORD_MONTH`");
      cmd.append(",`RECORD_WEEK`");
      cmd.append(",`RECORD_DAY`");
      cmd.append(",`RECORD_HOUR`");
      cmd.append(",`RECORD_DATE`");
      cmd.append(",`LINK_ID`");
      cmd.append(",`LINK_DATE`");
      cmd.append(",`ACTION_DATE`");
      cmd.append(",`DEPARTMENT_COUNT`");
      cmd.append(",`DEPARTMENT_TOTAL`");
      cmd.append(",`MARKETER_COUNT`");
      cmd.append(",`MARKETER_TOTAL`");
      cmd.append(",`CUSTOMER_COUNT`");
      cmd.append(",`CUSTOMER_TOTAL`");
      cmd.append(",`MEMBER_COUNT`");
      cmd.append(",`MEMBER_TOTAL`");
      cmd.append(",`INVESTMENT`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`INVESTMENT_NUMBER`");
      cmd.append(",`INVESTMENT_NUMBER_TOTAL`");
      cmd.append(",`INVESTMENT_USER`");
      cmd.append(",`INVESTMENT_USER_TOTAL`");
      cmd.append(",`REDEMPTION`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`REDEMPTION_NUMBER`");
      cmd.append(",`REDEMPTION_NUMBER_TOTAL`");
      cmd.append(",`REDEMPTION_USER`");
      cmd.append(",`REDEMPTION_USER_TOTAL`");
      cmd.append(",`NETINVESTMENT`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`INTEREST`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`PERFORMANCE`");
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
      TDateTime recordYear = unit.recordYear();
      if(recordYear == null){
         cmd.append("NULL");
      }else if(recordYear.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordYear.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recordMonth = unit.recordMonth();
      if(recordMonth == null){
         cmd.append("NULL");
      }else if(recordMonth.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordMonth.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recordWeek = unit.recordWeek();
      if(recordWeek == null){
         cmd.append("NULL");
      }else if(recordWeek.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordWeek.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recordDay = unit.recordDay();
      if(recordDay == null){
         cmd.append("NULL");
      }else if(recordDay.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordDay.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recordHour = unit.recordHour();
      if(recordHour == null){
         cmd.append("NULL");
      }else if(recordHour.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordHour.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recordDate = unit.recordDate();
      if(recordDate == null){
         cmd.append("NULL");
      }else if(recordDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      long linkId = unit.linkId();
      if(linkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(linkId);
      }
      cmd.append(',');
      TDateTime linkDate = unit.linkDate();
      if(linkDate == null){
         cmd.append("NULL");
      }else if(linkDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(linkDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime actionDate = unit.actionDate();
      if(actionDate == null){
         cmd.append("NULL");
      }else if(actionDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(actionDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.departmentCount());
      cmd.append(',');
      cmd.append(unit.departmentTotal());
      cmd.append(',');
      cmd.append(unit.marketerCount());
      cmd.append(',');
      cmd.append(unit.marketerTotal());
      cmd.append(',');
      cmd.append(unit.customerCount());
      cmd.append(',');
      cmd.append(unit.customerTotal());
      cmd.append(',');
      cmd.append(unit.memberCount());
      cmd.append(',');
      cmd.append(unit.memberTotal());
      cmd.append(',');
      cmd.append(unit.investment());
      cmd.append(',');
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.investmentNumber());
      cmd.append(',');
      cmd.append(unit.investmentNumberTotal());
      cmd.append(',');
      cmd.append(unit.investmentUser());
      cmd.append(',');
      cmd.append(unit.investmentUserTotal());
      cmd.append(',');
      cmd.append(unit.redemption());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.redemptionNumber());
      cmd.append(',');
      cmd.append(unit.redemptionNumberTotal());
      cmd.append(',');
      cmd.append(unit.redemptionUser());
      cmd.append(',');
      cmd.append(unit.redemptionUserTotal());
      cmd.append(',');
      cmd.append(unit.netinvestment());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      cmd.append(unit.interest());
      cmd.append(',');
      cmd.append(unit.interestTotal());
      cmd.append(',');
      cmd.append(unit.performance());
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
      FStatisticsFinancialPhaseUnit unit = (FStatisticsFinancialPhaseUnit)logicUnit;
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
      FStatisticsFinancialPhaseUnit unit = (FStatisticsFinancialPhaseUnit)logicUnit;
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
      if(unit.isRecordYearChanged()){
         cmd.append(",`RECORD_YEAR`=");
         TDateTime recordYear = unit.recordYear();
         if(recordYear == null){
            cmd.append("NULL");
         }else if(recordYear.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordYear.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecordMonthChanged()){
         cmd.append(",`RECORD_MONTH`=");
         TDateTime recordMonth = unit.recordMonth();
         if(recordMonth == null){
            cmd.append("NULL");
         }else if(recordMonth.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordMonth.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecordWeekChanged()){
         cmd.append(",`RECORD_WEEK`=");
         TDateTime recordWeek = unit.recordWeek();
         if(recordWeek == null){
            cmd.append("NULL");
         }else if(recordWeek.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordWeek.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecordDayChanged()){
         cmd.append(",`RECORD_DAY`=");
         TDateTime recordDay = unit.recordDay();
         if(recordDay == null){
            cmd.append("NULL");
         }else if(recordDay.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordDay.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecordHourChanged()){
         cmd.append(",`RECORD_HOUR`=");
         TDateTime recordHour = unit.recordHour();
         if(recordHour == null){
            cmd.append("NULL");
         }else if(recordHour.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordHour.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecordDateChanged()){
         cmd.append(",`RECORD_DATE`=");
         TDateTime recordDate = unit.recordDate();
         if(recordDate == null){
            cmd.append("NULL");
         }else if(recordDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isLinkIdChanged()){
         cmd.append(",`LINK_ID`=");
         long linkId = unit.linkId();
         if(linkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(linkId);
         }
      }
      if(unit.isLinkDateChanged()){
         cmd.append(",`LINK_DATE`=");
         TDateTime linkDate = unit.linkDate();
         if(linkDate == null){
            cmd.append("NULL");
         }else if(linkDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(linkDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isActionDateChanged()){
         cmd.append(",`ACTION_DATE`=");
         TDateTime actionDate = unit.actionDate();
         if(actionDate == null){
            cmd.append("NULL");
         }else if(actionDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(actionDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isDepartmentCountChanged()){
         cmd.append(",`DEPARTMENT_COUNT`=");
         cmd.append(unit.departmentCount());
      }
      if(unit.isDepartmentTotalChanged()){
         cmd.append(",`DEPARTMENT_TOTAL`=");
         cmd.append(unit.departmentTotal());
      }
      if(unit.isMarketerCountChanged()){
         cmd.append(",`MARKETER_COUNT`=");
         cmd.append(unit.marketerCount());
      }
      if(unit.isMarketerTotalChanged()){
         cmd.append(",`MARKETER_TOTAL`=");
         cmd.append(unit.marketerTotal());
      }
      if(unit.isCustomerCountChanged()){
         cmd.append(",`CUSTOMER_COUNT`=");
         cmd.append(unit.customerCount());
      }
      if(unit.isCustomerTotalChanged()){
         cmd.append(",`CUSTOMER_TOTAL`=");
         cmd.append(unit.customerTotal());
      }
      if(unit.isMemberCountChanged()){
         cmd.append(",`MEMBER_COUNT`=");
         cmd.append(unit.memberCount());
      }
      if(unit.isMemberTotalChanged()){
         cmd.append(",`MEMBER_TOTAL`=");
         cmd.append(unit.memberTotal());
      }
      if(unit.isInvestmentChanged()){
         cmd.append(",`INVESTMENT`=");
         cmd.append(unit.investment());
      }
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isInvestmentNumberChanged()){
         cmd.append(",`INVESTMENT_NUMBER`=");
         cmd.append(unit.investmentNumber());
      }
      if(unit.isInvestmentNumberTotalChanged()){
         cmd.append(",`INVESTMENT_NUMBER_TOTAL`=");
         cmd.append(unit.investmentNumberTotal());
      }
      if(unit.isInvestmentUserChanged()){
         cmd.append(",`INVESTMENT_USER`=");
         cmd.append(unit.investmentUser());
      }
      if(unit.isInvestmentUserTotalChanged()){
         cmd.append(",`INVESTMENT_USER_TOTAL`=");
         cmd.append(unit.investmentUserTotal());
      }
      if(unit.isRedemptionChanged()){
         cmd.append(",`REDEMPTION`=");
         cmd.append(unit.redemption());
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isRedemptionNumberChanged()){
         cmd.append(",`REDEMPTION_NUMBER`=");
         cmd.append(unit.redemptionNumber());
      }
      if(unit.isRedemptionNumberTotalChanged()){
         cmd.append(",`REDEMPTION_NUMBER_TOTAL`=");
         cmd.append(unit.redemptionNumberTotal());
      }
      if(unit.isRedemptionUserChanged()){
         cmd.append(",`REDEMPTION_USER`=");
         cmd.append(unit.redemptionUser());
      }
      if(unit.isRedemptionUserTotalChanged()){
         cmd.append(",`REDEMPTION_USER_TOTAL`=");
         cmd.append(unit.redemptionUserTotal());
      }
      if(unit.isNetinvestmentChanged()){
         cmd.append(",`NETINVESTMENT`=");
         cmd.append(unit.netinvestment());
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isInterestChanged()){
         cmd.append(",`INTEREST`=");
         cmd.append(unit.interest());
      }
      if(unit.isInterestTotalChanged()){
         cmd.append(",`INTEREST_TOTAL`=");
         cmd.append(unit.interestTotal());
      }
      if(unit.isPerformanceChanged()){
         cmd.append(",`PERFORMANCE`=");
         cmd.append(unit.performance());
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
      FStatisticsFinancialPhaseUnit unit = (FStatisticsFinancialPhaseUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
