package org.mo.cloud.data.statistics;

import org.mo.com.data.FSql;
import org.mo.com.data.RSql;
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
// <T>动态投标表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialTenderLogic
      extends FLogicTable
{
   // 动态投标表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 动态投标表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.tender", "ST_FIN_TENDER");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段关联编号的定义。
   public final static SLogicFieldInfo LINK_ID = new SLogicFieldInfo("LINK_ID");

   // 字段记录时间的定义。
   public final static SLogicFieldInfo LINK_DATE = new SLogicFieldInfo("LINK_DATE");

   // 字段分组编号的定义。
   public final static SLogicFieldInfo GROUP_NUMBER = new SLogicFieldInfo("GROUP_NUMBER");

   // 字段标题的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段开始日期的定义。
   public final static SLogicFieldInfo BEGIN_DATE = new SLogicFieldInfo("BEGIN_DATE");

   // 字段结束日期的定义。
   public final static SLogicFieldInfo END_DATE = new SLogicFieldInfo("END_DATE");

   // 字段产品比率的定义。
   public final static SLogicFieldInfo PRODUCT_RATE = new SLogicFieldInfo("PRODUCT_RATE");

   // 字段预借状态的定义。
   public final static SLogicFieldInfo BORROW_STATUS = new SLogicFieldInfo("BORROW_STATUS");

   // 字段借款类型的定义。
   public final static SLogicFieldInfo BORROW_MODEL = new SLogicFieldInfo("BORROW_MODEL");

   // 字段借款期限的定义。
   public final static SLogicFieldInfo BORROW_DURATION = new SLogicFieldInfo("BORROW_DURATION");

   // 字段借款金额的定义。
   public final static SLogicFieldInfo BORROW_MONEY = new SLogicFieldInfo("BORROW_MONEY");

   // 字段借款利率的定义。
   public final static SLogicFieldInfo BORROW_INEREST = new SLogicFieldInfo("BORROW_INEREST");

   // 字段借款利率的定义。
   public final static SLogicFieldInfo BORROW_INEREST_RATE = new SLogicFieldInfo("BORROW_INEREST_RATE");

   // 字段借款信息的定义。
   public final static SLogicFieldInfo BORROW_INFO = new SLogicFieldInfo("BORROW_INFO");

   // 字段推荐类型的定义。
   public final static SLogicFieldInfo RECOMMEND_CD = new SLogicFieldInfo("RECOMMEND_CD");

   // 字段项目信息的定义。
   public final static SLogicFieldInfo PROJECT_INFO = new SLogicFieldInfo("PROJECT_INFO");

   // 字段企业信息的定义。
   public final static SLogicFieldInfo COMPANY_INFO = new SLogicFieldInfo("COMPANY_INFO");

   // 字段保障信息的定义。
   public final static SLogicFieldInfo SAFEGUARD_INFO = new SLogicFieldInfo("SAFEGUARD_INFO");

   // 字段抵押信息的定义。
   public final static SLogicFieldInfo MORTGAGE_INFO = new SLogicFieldInfo("MORTGAGE_INFO");

   // 字段投标开始日期的定义。
   public final static SLogicFieldInfo INVESTMENT_BEGIN_DATE = new SLogicFieldInfo("INVESTMENT_BEGIN_DATE");

   // 字段结束日期的定义。
   public final static SLogicFieldInfo INVESTMENT_END_DATE = new SLogicFieldInfo("INVESTMENT_END_DATE");

   // 字段投资次数的定义。
   public final static SLogicFieldInfo INVESTMENT_COUNT = new SLogicFieldInfo("INVESTMENT_COUNT");

   // 字段投资用户数的定义。
   public final static SLogicFieldInfo INVESTMENT_USER_COUNT = new SLogicFieldInfo("INVESTMENT_USER_COUNT");

   // 字段净投总计的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段赎回开始日期的定义。
   public final static SLogicFieldInfo REDEMPTION_BEGIN_DATE = new SLogicFieldInfo("REDEMPTION_BEGIN_DATE");

   // 字段赎回结束日期的定义。
   public final static SLogicFieldInfo REDEMPTION_END_DATE = new SLogicFieldInfo("REDEMPTION_END_DATE");

   // 字段赎回次数的定义。
   public final static SLogicFieldInfo REDEMPTION_COUNT = new SLogicFieldInfo("REDEMPTION_COUNT");

   // 字段赎回用户数的定义。
   public final static SLogicFieldInfo REDEMPTION_USER_COUNT = new SLogicFieldInfo("REDEMPTION_USER_COUNT");

   // 字段赎回总计的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段利息的定义。
   public final static SLogicFieldInfo INTEREST_TOTAL = new SLogicFieldInfo("INTEREST_TOTAL");

   // 字段净投总数的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LINK_ID`,`LINK_DATE`,`GROUP_NUMBER`,`LABEL`,`BEGIN_DATE`,`END_DATE`,`PRODUCT_RATE`,`BORROW_STATUS`,`BORROW_MODEL`,`BORROW_DURATION`,`BORROW_MONEY`,`BORROW_INEREST`,`BORROW_INEREST_RATE`,`BORROW_INFO`,`RECOMMEND_CD`,`PROJECT_INFO`,`COMPANY_INFO`,`SAFEGUARD_INFO`,`MORTGAGE_INFO`,`INVESTMENT_BEGIN_DATE`,`INVESTMENT_END_DATE`,`INVESTMENT_COUNT`,`INVESTMENT_USER_COUNT`,`INVESTMENT_TOTAL`,`REDEMPTION_BEGIN_DATE`,`REDEMPTION_END_DATE`,`REDEMPTION_COUNT`,`REDEMPTION_USER_COUNT`,`REDEMPTION_TOTAL`,`INTEREST_TOTAL`,`NETINVESTMENT_TOTAL`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造动态投标表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialTenderLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialTenderUnit.class;
   }

   //============================================================
   // <T>构造动态投标表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialTenderLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialTenderUnit.class;
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
      return (T)new FStatisticsFinancialTenderUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialTenderUnit>(FStatisticsFinancialTenderUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialTenderUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialTenderUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialTenderUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialTenderUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialTenderUnit> fetchAll(){
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
   public FStatisticsFinancialTenderUnit doPrepare(){
      FStatisticsFinancialTenderUnit unit = new FStatisticsFinancialTenderUnit();
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
      FStatisticsFinancialTenderUnit unit = (FStatisticsFinancialTenderUnit)logicUnit;
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
      FStatisticsFinancialTenderUnit unit = (FStatisticsFinancialTenderUnit)logicUnit;
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
      cmd.append(",`LINK_ID`");
      cmd.append(",`LINK_DATE`");
      cmd.append(",`GROUP_NUMBER`");
      cmd.append(",`LABEL`");
      cmd.append(",`BEGIN_DATE`");
      cmd.append(",`END_DATE`");
      cmd.append(",`PRODUCT_RATE`");
      cmd.append(",`BORROW_STATUS`");
      cmd.append(",`BORROW_MODEL`");
      cmd.append(",`BORROW_DURATION`");
      cmd.append(",`BORROW_MONEY`");
      cmd.append(",`BORROW_INEREST`");
      cmd.append(",`BORROW_INEREST_RATE`");
      cmd.append(",`BORROW_INFO`");
      cmd.append(",`RECOMMEND_CD`");
      cmd.append(",`PROJECT_INFO`");
      cmd.append(",`COMPANY_INFO`");
      cmd.append(",`SAFEGUARD_INFO`");
      cmd.append(",`MORTGAGE_INFO`");
      cmd.append(",`INVESTMENT_BEGIN_DATE`");
      cmd.append(",`INVESTMENT_END_DATE`");
      cmd.append(",`INVESTMENT_COUNT`");
      cmd.append(",`INVESTMENT_USER_COUNT`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`REDEMPTION_BEGIN_DATE`");
      cmd.append(",`REDEMPTION_END_DATE`");
      cmd.append(",`REDEMPTION_COUNT`");
      cmd.append(",`REDEMPTION_USER_COUNT`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
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
      cmd.append(unit.groupNumber());
      cmd.append(',');
      String label = unit.label();
      if(RString.isEmpty(label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(label));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime beginDate = unit.beginDate();
      if(beginDate == null){
         cmd.append("NULL");
      }else if(beginDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(beginDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime endDate = unit.endDate();
      if(endDate == null){
         cmd.append("NULL");
      }else if(endDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(endDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.productRate());
      cmd.append(',');
      cmd.append(unit.borrowStatus());
      cmd.append(',');
      String borrowModel = unit.borrowModel();
      if(RString.isEmpty(borrowModel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(borrowModel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.borrowDuration());
      cmd.append(',');
      cmd.append(unit.borrowMoney());
      cmd.append(',');
      cmd.append(unit.borrowInerest());
      cmd.append(',');
      cmd.append(unit.borrowInerestRate());
      cmd.append(',');
      String borrowInfo = unit.borrowInfo();
      if(RString.isEmpty(borrowInfo)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(borrowInfo));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.recommendCd());
      cmd.append(',');
      String projectInfo = unit.projectInfo();
      if(RString.isEmpty(projectInfo)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(projectInfo));
         cmd.append('\'');
      }
      cmd.append(',');
      String companyInfo = unit.companyInfo();
      if(RString.isEmpty(companyInfo)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(companyInfo));
         cmd.append('\'');
      }
      cmd.append(',');
      String safeguardInfo = unit.safeguardInfo();
      if(RString.isEmpty(safeguardInfo)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(safeguardInfo));
         cmd.append('\'');
      }
      cmd.append(',');
      String mortgageInfo = unit.mortgageInfo();
      if(RString.isEmpty(mortgageInfo)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(mortgageInfo));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime investmentBeginDate = unit.investmentBeginDate();
      if(investmentBeginDate == null){
         cmd.append("NULL");
      }else if(investmentBeginDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(investmentBeginDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime investmentEndDate = unit.investmentEndDate();
      if(investmentEndDate == null){
         cmd.append("NULL");
      }else if(investmentEndDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(investmentEndDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.investmentCount());
      cmd.append(',');
      cmd.append(unit.investmentUserCount());
      cmd.append(',');
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      TDateTime redemptionBeginDate = unit.redemptionBeginDate();
      if(redemptionBeginDate == null){
         cmd.append("NULL");
      }else if(redemptionBeginDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(redemptionBeginDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime redemptionEndDate = unit.redemptionEndDate();
      if(redemptionEndDate == null){
         cmd.append("NULL");
      }else if(redemptionEndDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(redemptionEndDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.redemptionCount());
      cmd.append(',');
      cmd.append(unit.redemptionUserCount());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.interestTotal());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
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
      FStatisticsFinancialTenderUnit unit = (FStatisticsFinancialTenderUnit)logicUnit;
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
      FStatisticsFinancialTenderUnit unit = (FStatisticsFinancialTenderUnit)logicUnit;
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
      if(unit.isGroupNumberChanged()){
         cmd.append(",`GROUP_NUMBER`=");
         cmd.append(unit.groupNumber());
      }
      if(unit.isLabelChanged()){
         cmd.append(",`LABEL`=");
         String label = unit.label();
         if(RString.isEmpty(label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(label));
            cmd.append('\'');
         }
      }
      if(unit.isBeginDateChanged()){
         cmd.append(",`BEGIN_DATE`=");
         TDateTime beginDate = unit.beginDate();
         if(beginDate == null){
            cmd.append("NULL");
         }else if(beginDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(beginDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isEndDateChanged()){
         cmd.append(",`END_DATE`=");
         TDateTime endDate = unit.endDate();
         if(endDate == null){
            cmd.append("NULL");
         }else if(endDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(endDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isProductRateChanged()){
         cmd.append(",`PRODUCT_RATE`=");
         cmd.append(unit.productRate());
      }
      if(unit.isBorrowStatusChanged()){
         cmd.append(",`BORROW_STATUS`=");
         cmd.append(unit.borrowStatus());
      }
      if(unit.isBorrowModelChanged()){
         cmd.append(",`BORROW_MODEL`=");
         String borrowModel = unit.borrowModel();
         if(RString.isEmpty(borrowModel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(borrowModel));
            cmd.append('\'');
         }
      }
      if(unit.isBorrowDurationChanged()){
         cmd.append(",`BORROW_DURATION`=");
         cmd.append(unit.borrowDuration());
      }
      if(unit.isBorrowMoneyChanged()){
         cmd.append(",`BORROW_MONEY`=");
         cmd.append(unit.borrowMoney());
      }
      if(unit.isBorrowInerestChanged()){
         cmd.append(",`BORROW_INEREST`=");
         cmd.append(unit.borrowInerest());
      }
      if(unit.isBorrowInerestRateChanged()){
         cmd.append(",`BORROW_INEREST_RATE`=");
         cmd.append(unit.borrowInerestRate());
      }
      if(unit.isBorrowInfoChanged()){
         cmd.append(",`BORROW_INFO`=");
         String borrowInfo = unit.borrowInfo();
         if(RString.isEmpty(borrowInfo)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(borrowInfo));
            cmd.append('\'');
         }
      }
      if(unit.isRecommendCdChanged()){
         cmd.append(",`RECOMMEND_CD`=");
         cmd.append(unit.recommendCd());
      }
      if(unit.isProjectInfoChanged()){
         cmd.append(",`PROJECT_INFO`=");
         String projectInfo = unit.projectInfo();
         if(RString.isEmpty(projectInfo)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(projectInfo));
            cmd.append('\'');
         }
      }
      if(unit.isCompanyInfoChanged()){
         cmd.append(",`COMPANY_INFO`=");
         String companyInfo = unit.companyInfo();
         if(RString.isEmpty(companyInfo)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(companyInfo));
            cmd.append('\'');
         }
      }
      if(unit.isSafeguardInfoChanged()){
         cmd.append(",`SAFEGUARD_INFO`=");
         String safeguardInfo = unit.safeguardInfo();
         if(RString.isEmpty(safeguardInfo)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(safeguardInfo));
            cmd.append('\'');
         }
      }
      if(unit.isMortgageInfoChanged()){
         cmd.append(",`MORTGAGE_INFO`=");
         String mortgageInfo = unit.mortgageInfo();
         if(RString.isEmpty(mortgageInfo)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(mortgageInfo));
            cmd.append('\'');
         }
      }
      if(unit.isInvestmentBeginDateChanged()){
         cmd.append(",`INVESTMENT_BEGIN_DATE`=");
         TDateTime investmentBeginDate = unit.investmentBeginDate();
         if(investmentBeginDate == null){
            cmd.append("NULL");
         }else if(investmentBeginDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(investmentBeginDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isInvestmentEndDateChanged()){
         cmd.append(",`INVESTMENT_END_DATE`=");
         TDateTime investmentEndDate = unit.investmentEndDate();
         if(investmentEndDate == null){
            cmd.append("NULL");
         }else if(investmentEndDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(investmentEndDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isInvestmentCountChanged()){
         cmd.append(",`INVESTMENT_COUNT`=");
         cmd.append(unit.investmentCount());
      }
      if(unit.isInvestmentUserCountChanged()){
         cmd.append(",`INVESTMENT_USER_COUNT`=");
         cmd.append(unit.investmentUserCount());
      }
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isRedemptionBeginDateChanged()){
         cmd.append(",`REDEMPTION_BEGIN_DATE`=");
         TDateTime redemptionBeginDate = unit.redemptionBeginDate();
         if(redemptionBeginDate == null){
            cmd.append("NULL");
         }else if(redemptionBeginDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(redemptionBeginDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRedemptionEndDateChanged()){
         cmd.append(",`REDEMPTION_END_DATE`=");
         TDateTime redemptionEndDate = unit.redemptionEndDate();
         if(redemptionEndDate == null){
            cmd.append("NULL");
         }else if(redemptionEndDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(redemptionEndDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRedemptionCountChanged()){
         cmd.append(",`REDEMPTION_COUNT`=");
         cmd.append(unit.redemptionCount());
      }
      if(unit.isRedemptionUserCountChanged()){
         cmd.append(",`REDEMPTION_USER_COUNT`=");
         cmd.append(unit.redemptionUserCount());
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
      FStatisticsFinancialTenderUnit unit = (FStatisticsFinancialTenderUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
