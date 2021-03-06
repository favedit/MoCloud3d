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
// <T>部门统计表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialDepartmentLogic
      extends FLogicTable
{
   // 部门统计表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 部门统计表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.department", "ST_FIN_DEPARTMENT");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段关联父编号的定义。
   public final static SLogicFieldInfo LINK_PARENT_ID = new SLogicFieldInfo("LINK_PARENT_ID");

   // 字段关联编号的定义。
   public final static SLogicFieldInfo LINK_ID = new SLogicFieldInfo("LINK_ID");

   // 字段关联时间的定义。
   public final static SLogicFieldInfo LINK_DATE = new SLogicFieldInfo("LINK_DATE");

   // 字段关联类型的定义。
   public final static SLogicFieldInfo LINK_CD = new SLogicFieldInfo("LINK_CD");

   // 字段数据编号的定义。
   public final static SLogicFieldInfo DATA_ID = new SLogicFieldInfo("DATA_ID");

   // 字段父编号的定义。
   public final static SLogicFieldInfo PARENT_ID = new SLogicFieldInfo("PARENT_ID");

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段标签的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段当前级别的定义。
   public final static SLogicFieldInfo LEVEL = new SLogicFieldInfo("LEVEL");

   // 字段级别1编号的定义。
   public final static SLogicFieldInfo LEVEL1_ID = new SLogicFieldInfo("LEVEL1_ID");

   // 字段级别1关联编号的定义。
   public final static SLogicFieldInfo LEVEL1_LINK_ID = new SLogicFieldInfo("LEVEL1_LINK_ID");

   // 字段级别1标签的定义。
   public final static SLogicFieldInfo LEVEL1_LABEL = new SLogicFieldInfo("LEVEL1_LABEL");

   // 字段级别2编号的定义。
   public final static SLogicFieldInfo LEVEL2_ID = new SLogicFieldInfo("LEVEL2_ID");

   // 字段级别2关联编号的定义。
   public final static SLogicFieldInfo LEVEL2_LINK_ID = new SLogicFieldInfo("LEVEL2_LINK_ID");

   // 字段级别2标签的定义。
   public final static SLogicFieldInfo LEVEL2_LABEL = new SLogicFieldInfo("LEVEL2_LABEL");

   // 字段级别3编号的定义。
   public final static SLogicFieldInfo LEVEL3_ID = new SLogicFieldInfo("LEVEL3_ID");

   // 字段级别3关联编号的定义。
   public final static SLogicFieldInfo LEVEL3_LINK_ID = new SLogicFieldInfo("LEVEL3_LINK_ID");

   // 字段级别3标签的定义。
   public final static SLogicFieldInfo LEVEL3_LABEL = new SLogicFieldInfo("LEVEL3_LABEL");

   // 字段级别4编号的定义。
   public final static SLogicFieldInfo LEVEL4_ID = new SLogicFieldInfo("LEVEL4_ID");

   // 字段级别4关联编号的定义。
   public final static SLogicFieldInfo LEVEL4_LINK_ID = new SLogicFieldInfo("LEVEL4_LINK_ID");

   // 字段级别4标签的定义。
   public final static SLogicFieldInfo LEVEL4_LABEL = new SLogicFieldInfo("LEVEL4_LABEL");

   // 字段级别5编号的定义。
   public final static SLogicFieldInfo LEVEL5_ID = new SLogicFieldInfo("LEVEL5_ID");

   // 字段级别5关联编号的定义。
   public final static SLogicFieldInfo LEVEL5_LINK_ID = new SLogicFieldInfo("LEVEL5_LINK_ID");

   // 字段级别5标签的定义。
   public final static SLogicFieldInfo LEVEL5_LABEL = new SLogicFieldInfo("LEVEL5_LABEL");

   // 字段级别6编号的定义。
   public final static SLogicFieldInfo LEVEL6_ID = new SLogicFieldInfo("LEVEL6_ID");

   // 字段级别6关联编号的定义。
   public final static SLogicFieldInfo LEVEL6_LINK_ID = new SLogicFieldInfo("LEVEL6_LINK_ID");

   // 字段级别6标签的定义。
   public final static SLogicFieldInfo LEVEL6_LABEL = new SLogicFieldInfo("LEVEL6_LABEL");

   // 字段级别7编号的定义。
   public final static SLogicFieldInfo LEVEL7_ID = new SLogicFieldInfo("LEVEL7_ID");

   // 字段级别7关联编号的定义。
   public final static SLogicFieldInfo LEVEL7_LINK_ID = new SLogicFieldInfo("LEVEL7_LINK_ID");

   // 字段级别7标签的定义。
   public final static SLogicFieldInfo LEVEL7_LABEL = new SLogicFieldInfo("LEVEL7_LABEL");

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

   // 字段理财师总计的定义。
   public final static SLogicFieldInfo MARKETER_TOTAL = new SLogicFieldInfo("MARKETER_TOTAL");

   // 字段客户总计的定义。
   public final static SLogicFieldInfo CUSTOMER_TOTAL = new SLogicFieldInfo("CUSTOMER_TOTAL");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LINK_PARENT_ID`,`LINK_ID`,`LINK_DATE`,`LINK_CD`,`DATA_ID`,`PARENT_ID`,`CODE`,`LABEL`,`LEVEL`,`LEVEL1_ID`,`LEVEL1_LINK_ID`,`LEVEL1_LABEL`,`LEVEL2_ID`,`LEVEL2_LINK_ID`,`LEVEL2_LABEL`,`LEVEL3_ID`,`LEVEL3_LINK_ID`,`LEVEL3_LABEL`,`LEVEL4_ID`,`LEVEL4_LINK_ID`,`LEVEL4_LABEL`,`LEVEL5_ID`,`LEVEL5_LINK_ID`,`LEVEL5_LABEL`,`LEVEL6_ID`,`LEVEL6_LINK_ID`,`LEVEL6_LABEL`,`LEVEL7_ID`,`LEVEL7_LINK_ID`,`LEVEL7_LABEL`,`INVESTMENT_TOTAL`,`REDEMPTION_TOTAL`,`NETINVESTMENT_TOTAL`,`INTEREST_TOTAL`,`PERFORMANCE_TOTAL`,`MARKETER_TOTAL`,`CUSTOMER_TOTAL`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造部门统计表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialDepartmentLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialDepartmentUnit.class;
   }

   //============================================================
   // <T>构造部门统计表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialDepartmentLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialDepartmentUnit.class;
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
      return (T)new FStatisticsFinancialDepartmentUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialDepartmentUnit>(FStatisticsFinancialDepartmentUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialDepartmentUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialDepartmentUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialDepartmentUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialDepartmentUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialDepartmentUnit> fetchAll(){
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
   public FStatisticsFinancialDepartmentUnit doPrepare(){
      FStatisticsFinancialDepartmentUnit unit = new FStatisticsFinancialDepartmentUnit();
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
      FStatisticsFinancialDepartmentUnit unit = (FStatisticsFinancialDepartmentUnit)logicUnit;
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
      FStatisticsFinancialDepartmentUnit unit = (FStatisticsFinancialDepartmentUnit)logicUnit;
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
      cmd.append(",`LINK_PARENT_ID`");
      cmd.append(",`LINK_ID`");
      cmd.append(",`LINK_DATE`");
      cmd.append(",`LINK_CD`");
      cmd.append(",`DATA_ID`");
      cmd.append(",`PARENT_ID`");
      cmd.append(",`CODE`");
      cmd.append(",`LABEL`");
      cmd.append(",`LEVEL`");
      cmd.append(",`LEVEL1_ID`");
      cmd.append(",`LEVEL1_LINK_ID`");
      cmd.append(",`LEVEL1_LABEL`");
      cmd.append(",`LEVEL2_ID`");
      cmd.append(",`LEVEL2_LINK_ID`");
      cmd.append(",`LEVEL2_LABEL`");
      cmd.append(",`LEVEL3_ID`");
      cmd.append(",`LEVEL3_LINK_ID`");
      cmd.append(",`LEVEL3_LABEL`");
      cmd.append(",`LEVEL4_ID`");
      cmd.append(",`LEVEL4_LINK_ID`");
      cmd.append(",`LEVEL4_LABEL`");
      cmd.append(",`LEVEL5_ID`");
      cmd.append(",`LEVEL5_LINK_ID`");
      cmd.append(",`LEVEL5_LABEL`");
      cmd.append(",`LEVEL6_ID`");
      cmd.append(",`LEVEL6_LINK_ID`");
      cmd.append(",`LEVEL6_LABEL`");
      cmd.append(",`LEVEL7_ID`");
      cmd.append(",`LEVEL7_LINK_ID`");
      cmd.append(",`LEVEL7_LABEL`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`PERFORMANCE_TOTAL`");
      cmd.append(",`MARKETER_TOTAL`");
      cmd.append(",`CUSTOMER_TOTAL`");
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
      long linkParentId = unit.linkParentId();
      if(linkParentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(linkParentId);
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
      cmd.append(unit.linkCd());
      cmd.append(',');
      long dataId = unit.dataId();
      if(dataId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(dataId);
      }
      cmd.append(',');
      long parentId = unit.parentId();
      if(parentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(parentId);
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
      String label = unit.label();
      if(RString.isEmpty(label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(label));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.level());
      cmd.append(',');
      long level1Id = unit.level1Id();
      if(level1Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level1Id);
      }
      cmd.append(',');
      long level1LinkId = unit.level1LinkId();
      if(level1LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level1LinkId);
      }
      cmd.append(',');
      String level1Label = unit.level1Label();
      if(RString.isEmpty(level1Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level1Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level2Id = unit.level2Id();
      if(level2Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level2Id);
      }
      cmd.append(',');
      long level2LinkId = unit.level2LinkId();
      if(level2LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level2LinkId);
      }
      cmd.append(',');
      String level2Label = unit.level2Label();
      if(RString.isEmpty(level2Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level2Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level3Id = unit.level3Id();
      if(level3Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level3Id);
      }
      cmd.append(',');
      long level3LinkId = unit.level3LinkId();
      if(level3LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level3LinkId);
      }
      cmd.append(',');
      String level3Label = unit.level3Label();
      if(RString.isEmpty(level3Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level3Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level4Id = unit.level4Id();
      if(level4Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level4Id);
      }
      cmd.append(',');
      long level4LinkId = unit.level4LinkId();
      if(level4LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level4LinkId);
      }
      cmd.append(',');
      String level4Label = unit.level4Label();
      if(RString.isEmpty(level4Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level4Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level5Id = unit.level5Id();
      if(level5Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level5Id);
      }
      cmd.append(',');
      long level5LinkId = unit.level5LinkId();
      if(level5LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level5LinkId);
      }
      cmd.append(',');
      String level5Label = unit.level5Label();
      if(RString.isEmpty(level5Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level5Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level6Id = unit.level6Id();
      if(level6Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level6Id);
      }
      cmd.append(',');
      long level6LinkId = unit.level6LinkId();
      if(level6LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level6LinkId);
      }
      cmd.append(',');
      String level6Label = unit.level6Label();
      if(RString.isEmpty(level6Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level6Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long level7Id = unit.level7Id();
      if(level7Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level7Id);
      }
      cmd.append(',');
      long level7LinkId = unit.level7LinkId();
      if(level7LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(level7LinkId);
      }
      cmd.append(',');
      String level7Label = unit.level7Label();
      if(RString.isEmpty(level7Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(level7Label));
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
      cmd.append(unit.marketerTotal());
      cmd.append(',');
      cmd.append(unit.customerTotal());
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
      FStatisticsFinancialDepartmentUnit unit = (FStatisticsFinancialDepartmentUnit)logicUnit;
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
      FStatisticsFinancialDepartmentUnit unit = (FStatisticsFinancialDepartmentUnit)logicUnit;
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
      if(unit.isLinkParentIdChanged()){
         cmd.append(",`LINK_PARENT_ID`=");
         long linkParentId = unit.linkParentId();
         if(linkParentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(linkParentId);
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
      if(unit.isLinkCdChanged()){
         cmd.append(",`LINK_CD`=");
         cmd.append(unit.linkCd());
      }
      if(unit.isDataIdChanged()){
         cmd.append(",`DATA_ID`=");
         long dataId = unit.dataId();
         if(dataId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(dataId);
         }
      }
      if(unit.isParentIdChanged()){
         cmd.append(",`PARENT_ID`=");
         long parentId = unit.parentId();
         if(parentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(parentId);
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
      if(unit.isLevelChanged()){
         cmd.append(",`LEVEL`=");
         cmd.append(unit.level());
      }
      if(unit.isLevel1IdChanged()){
         cmd.append(",`LEVEL1_ID`=");
         long level1Id = unit.level1Id();
         if(level1Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level1Id);
         }
      }
      if(unit.isLevel1LinkIdChanged()){
         cmd.append(",`LEVEL1_LINK_ID`=");
         long level1LinkId = unit.level1LinkId();
         if(level1LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level1LinkId);
         }
      }
      if(unit.isLevel1LabelChanged()){
         cmd.append(",`LEVEL1_LABEL`=");
         String level1Label = unit.level1Label();
         if(RString.isEmpty(level1Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level1Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel2IdChanged()){
         cmd.append(",`LEVEL2_ID`=");
         long level2Id = unit.level2Id();
         if(level2Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level2Id);
         }
      }
      if(unit.isLevel2LinkIdChanged()){
         cmd.append(",`LEVEL2_LINK_ID`=");
         long level2LinkId = unit.level2LinkId();
         if(level2LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level2LinkId);
         }
      }
      if(unit.isLevel2LabelChanged()){
         cmd.append(",`LEVEL2_LABEL`=");
         String level2Label = unit.level2Label();
         if(RString.isEmpty(level2Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level2Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel3IdChanged()){
         cmd.append(",`LEVEL3_ID`=");
         long level3Id = unit.level3Id();
         if(level3Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level3Id);
         }
      }
      if(unit.isLevel3LinkIdChanged()){
         cmd.append(",`LEVEL3_LINK_ID`=");
         long level3LinkId = unit.level3LinkId();
         if(level3LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level3LinkId);
         }
      }
      if(unit.isLevel3LabelChanged()){
         cmd.append(",`LEVEL3_LABEL`=");
         String level3Label = unit.level3Label();
         if(RString.isEmpty(level3Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level3Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel4IdChanged()){
         cmd.append(",`LEVEL4_ID`=");
         long level4Id = unit.level4Id();
         if(level4Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level4Id);
         }
      }
      if(unit.isLevel4LinkIdChanged()){
         cmd.append(",`LEVEL4_LINK_ID`=");
         long level4LinkId = unit.level4LinkId();
         if(level4LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level4LinkId);
         }
      }
      if(unit.isLevel4LabelChanged()){
         cmd.append(",`LEVEL4_LABEL`=");
         String level4Label = unit.level4Label();
         if(RString.isEmpty(level4Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level4Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel5IdChanged()){
         cmd.append(",`LEVEL5_ID`=");
         long level5Id = unit.level5Id();
         if(level5Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level5Id);
         }
      }
      if(unit.isLevel5LinkIdChanged()){
         cmd.append(",`LEVEL5_LINK_ID`=");
         long level5LinkId = unit.level5LinkId();
         if(level5LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level5LinkId);
         }
      }
      if(unit.isLevel5LabelChanged()){
         cmd.append(",`LEVEL5_LABEL`=");
         String level5Label = unit.level5Label();
         if(RString.isEmpty(level5Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level5Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel6IdChanged()){
         cmd.append(",`LEVEL6_ID`=");
         long level6Id = unit.level6Id();
         if(level6Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level6Id);
         }
      }
      if(unit.isLevel6LinkIdChanged()){
         cmd.append(",`LEVEL6_LINK_ID`=");
         long level6LinkId = unit.level6LinkId();
         if(level6LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level6LinkId);
         }
      }
      if(unit.isLevel6LabelChanged()){
         cmd.append(",`LEVEL6_LABEL`=");
         String level6Label = unit.level6Label();
         if(RString.isEmpty(level6Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level6Label));
            cmd.append('\'');
         }
      }
      if(unit.isLevel7IdChanged()){
         cmd.append(",`LEVEL7_ID`=");
         long level7Id = unit.level7Id();
         if(level7Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level7Id);
         }
      }
      if(unit.isLevel7LinkIdChanged()){
         cmd.append(",`LEVEL7_LINK_ID`=");
         long level7LinkId = unit.level7LinkId();
         if(level7LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(level7LinkId);
         }
      }
      if(unit.isLevel7LabelChanged()){
         cmd.append(",`LEVEL7_LABEL`=");
         String level7Label = unit.level7Label();
         if(RString.isEmpty(level7Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(level7Label));
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
      if(unit.isMarketerTotalChanged()){
         cmd.append(",`MARKETER_TOTAL`=");
         cmd.append(unit.marketerTotal());
      }
      if(unit.isCustomerTotalChanged()){
         cmd.append(",`CUSTOMER_TOTAL`=");
         cmd.append(unit.customerTotal());
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
      FStatisticsFinancialDepartmentUnit unit = (FStatisticsFinancialDepartmentUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
