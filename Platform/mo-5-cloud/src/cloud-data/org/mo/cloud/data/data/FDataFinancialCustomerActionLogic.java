package org.mo.cloud.data.data;

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
// <T>金融客户行为记录逻辑。</T>
//============================================================
@ASourceMachine
public class FDataFinancialCustomerActionLogic
      extends FLogicTable
{
   // 金融客户行为记录的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 金融客户行为记录的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.financial.customer.action", "DT_FIN_CUSTOMER_ACTION");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段部门2编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LINK_ID");

   // 字段部门2标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LABEL");

   // 字段部门4编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL4_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL4_LINK_ID");

   // 字段部门4标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL4_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL4_LABEL");

   // 字段理财师编号的定义。
   public final static SLogicFieldInfo MARKETER_ID = new SLogicFieldInfo("MARKETER_ID");

   // 字段理财师关联编号的定义。
   public final static SLogicFieldInfo MARKETER_LINK_ID = new SLogicFieldInfo("MARKETER_LINK_ID");

   // 字段理财师名称的定义。
   public final static SLogicFieldInfo MARKETER_LABEL = new SLogicFieldInfo("MARKETER_LABEL");

   // 字段客户编号的定义。
   public final static SLogicFieldInfo CUSTOMER_ID = new SLogicFieldInfo("CUSTOMER_ID");

   // 字段客户关联编号的定义。
   public final static SLogicFieldInfo CUSTOMER_LINK_ID = new SLogicFieldInfo("CUSTOMER_LINK_ID");

   // 字段客户名称的定义。
   public final static SLogicFieldInfo CUSTOMER_LABEL = new SLogicFieldInfo("CUSTOMER_LABEL");

   // 字段客户行为状态的定义。
   public final static SLogicFieldInfo ACTION_CD = new SLogicFieldInfo("ACTION_CD");

   // 字段记录日期的定义。
   public final static SLogicFieldInfo RECORD_DATE = new SLogicFieldInfo("RECORD_DATE");

   // 字段投资总额的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段今日投资的定义。
   public final static SLogicFieldInfo INVESTMENT_DAY_TOTAL = new SLogicFieldInfo("INVESTMENT_DAY_TOTAL");

   // 字段投资次数的定义。
   public final static SLogicFieldInfo INVESTMENT_NUMBER = new SLogicFieldInfo("INVESTMENT_NUMBER");

   // 字段最后投资日期的定义。
   public final static SLogicFieldInfo INVESTMENT_LAST_DATE = new SLogicFieldInfo("INVESTMENT_LAST_DATE");

   // 字段赎回总额的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段今日赎回的定义。
   public final static SLogicFieldInfo REDEMPTION_DAY_TOTAL = new SLogicFieldInfo("REDEMPTION_DAY_TOTAL");

   // 字段赎回次数的定义。
   public final static SLogicFieldInfo REDEMPTION_NUMBER = new SLogicFieldInfo("REDEMPTION_NUMBER");

   // 字段最后赎回日期的定义。
   public final static SLogicFieldInfo REDEMPTION_LAST_DATE = new SLogicFieldInfo("REDEMPTION_LAST_DATE");

   // 字段净投总额的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段行为内容的定义。
   public final static SLogicFieldInfo CONTENT = new SLogicFieldInfo("CONTENT");

   // 字段备注的定义。
   public final static SLogicFieldInfo NOTE = new SLogicFieldInfo("NOTE");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`DEPARTMENT_LEVEL2_LINK_ID`,`DEPARTMENT_LEVEL2_LABEL`,`DEPARTMENT_LEVEL4_LINK_ID`,`DEPARTMENT_LEVEL4_LABEL`,`MARKETER_ID`,`MARKETER_LINK_ID`,`MARKETER_LABEL`,`CUSTOMER_ID`,`CUSTOMER_LINK_ID`,`CUSTOMER_LABEL`,`ACTION_CD`,`RECORD_DATE`,`INVESTMENT_TOTAL`,`INVESTMENT_DAY_TOTAL`,`INVESTMENT_NUMBER`,`INVESTMENT_LAST_DATE`,`REDEMPTION_TOTAL`,`REDEMPTION_DAY_TOTAL`,`REDEMPTION_NUMBER`,`REDEMPTION_LAST_DATE`,`NETINVESTMENT_TOTAL`,`CONTENT`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造金融客户行为记录逻辑单元。</T>
   //============================================================
   public FDataFinancialCustomerActionLogic(){
      _name = TABLE.name();
      _classUnit = FDataFinancialCustomerActionUnit.class;
   }

   //============================================================
   // <T>构造金融客户行为记录逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataFinancialCustomerActionLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataFinancialCustomerActionUnit.class;
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
      return (T)new FDataFinancialCustomerActionUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataFinancialCustomerActionUnit>(FDataFinancialCustomerActionUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataFinancialCustomerActionUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataFinancialCustomerActionUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataFinancialCustomerActionUnit search(CharSequence whereSql){
      return search(null, FDataFinancialCustomerActionUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataFinancialCustomerActionUnit> fetchAll(){
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
   public FDataFinancialCustomerActionUnit doPrepare(){
      FDataFinancialCustomerActionUnit unit = new FDataFinancialCustomerActionUnit();
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
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
      cmd.append(",`DEPARTMENT_LEVEL2_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL2_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL4_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL4_LABEL`");
      cmd.append(",`MARKETER_ID`");
      cmd.append(",`MARKETER_LINK_ID`");
      cmd.append(",`MARKETER_LABEL`");
      cmd.append(",`CUSTOMER_ID`");
      cmd.append(",`CUSTOMER_LINK_ID`");
      cmd.append(",`CUSTOMER_LABEL`");
      cmd.append(",`ACTION_CD`");
      cmd.append(",`RECORD_DATE`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`INVESTMENT_DAY_TOTAL`");
      cmd.append(",`INVESTMENT_NUMBER`");
      cmd.append(",`INVESTMENT_LAST_DATE`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`REDEMPTION_DAY_TOTAL`");
      cmd.append(",`REDEMPTION_NUMBER`");
      cmd.append(",`REDEMPTION_LAST_DATE`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`CONTENT`");
      cmd.append(",`NOTE`");
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
      long departmentLevel2LinkId = unit.departmentLevel2LinkId();
      if(departmentLevel2LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel2LinkId);
      }
      cmd.append(',');
      String departmentLevel2Label = unit.departmentLevel2Label();
      if(RString.isEmpty(departmentLevel2Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel2Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel4LinkId = unit.departmentLevel4LinkId();
      if(departmentLevel4LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel4LinkId);
      }
      cmd.append(',');
      String departmentLevel4Label = unit.departmentLevel4Label();
      if(RString.isEmpty(departmentLevel4Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel4Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long marketerId = unit.marketerId();
      if(marketerId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(marketerId);
      }
      cmd.append(',');
      long marketerLinkId = unit.marketerLinkId();
      if(marketerLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(marketerLinkId);
      }
      cmd.append(',');
      String marketerLabel = unit.marketerLabel();
      if(RString.isEmpty(marketerLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(marketerLabel));
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
      String customerLabel = unit.customerLabel();
      if(RString.isEmpty(customerLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(customerLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.actionCd());
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
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.investmentDayTotal());
      cmd.append(',');
      cmd.append(unit.investmentNumber());
      cmd.append(',');
      TDateTime investmentLastDate = unit.investmentLastDate();
      if(investmentLastDate == null){
         cmd.append("NULL");
      }else if(investmentLastDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(investmentLastDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.redemptionDayTotal());
      cmd.append(',');
      cmd.append(unit.redemptionNumber());
      cmd.append(',');
      TDateTime redemptionLastDate = unit.redemptionLastDate();
      if(redemptionLastDate == null){
         cmd.append("NULL");
      }else if(redemptionLastDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(redemptionLastDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      String content = unit.content();
      if(RString.isEmpty(content)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(content));
         cmd.append('\'');
      }
      cmd.append(',');
      String note = unit.note();
      if(RString.isEmpty(note)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(note));
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
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
      if(unit.isDepartmentLevel2LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL2_LINK_ID`=");
         long departmentLevel2LinkId = unit.departmentLevel2LinkId();
         if(departmentLevel2LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel2LinkId);
         }
      }
      if(unit.isDepartmentLevel2LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL2_LABEL`=");
         String departmentLevel2Label = unit.departmentLevel2Label();
         if(RString.isEmpty(departmentLevel2Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel2Label));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel4LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL4_LINK_ID`=");
         long departmentLevel4LinkId = unit.departmentLevel4LinkId();
         if(departmentLevel4LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel4LinkId);
         }
      }
      if(unit.isDepartmentLevel4LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL4_LABEL`=");
         String departmentLevel4Label = unit.departmentLevel4Label();
         if(RString.isEmpty(departmentLevel4Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel4Label));
            cmd.append('\'');
         }
      }
      if(unit.isMarketerIdChanged()){
         cmd.append(",`MARKETER_ID`=");
         long marketerId = unit.marketerId();
         if(marketerId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(marketerId);
         }
      }
      if(unit.isMarketerLinkIdChanged()){
         cmd.append(",`MARKETER_LINK_ID`=");
         long marketerLinkId = unit.marketerLinkId();
         if(marketerLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(marketerLinkId);
         }
      }
      if(unit.isMarketerLabelChanged()){
         cmd.append(",`MARKETER_LABEL`=");
         String marketerLabel = unit.marketerLabel();
         if(RString.isEmpty(marketerLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(marketerLabel));
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
      if(unit.isActionCdChanged()){
         cmd.append(",`ACTION_CD`=");
         cmd.append(unit.actionCd());
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
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isInvestmentDayTotalChanged()){
         cmd.append(",`INVESTMENT_DAY_TOTAL`=");
         cmd.append(unit.investmentDayTotal());
      }
      if(unit.isInvestmentNumberChanged()){
         cmd.append(",`INVESTMENT_NUMBER`=");
         cmd.append(unit.investmentNumber());
      }
      if(unit.isInvestmentLastDateChanged()){
         cmd.append(",`INVESTMENT_LAST_DATE`=");
         TDateTime investmentLastDate = unit.investmentLastDate();
         if(investmentLastDate == null){
            cmd.append("NULL");
         }else if(investmentLastDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(investmentLastDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isRedemptionDayTotalChanged()){
         cmd.append(",`REDEMPTION_DAY_TOTAL`=");
         cmd.append(unit.redemptionDayTotal());
      }
      if(unit.isRedemptionNumberChanged()){
         cmd.append(",`REDEMPTION_NUMBER`=");
         cmd.append(unit.redemptionNumber());
      }
      if(unit.isRedemptionLastDateChanged()){
         cmd.append(",`REDEMPTION_LAST_DATE`=");
         TDateTime redemptionLastDate = unit.redemptionLastDate();
         if(redemptionLastDate == null){
            cmd.append("NULL");
         }else if(redemptionLastDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(redemptionLastDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isContentChanged()){
         cmd.append(",`CONTENT`=");
         String content = unit.content();
         if(RString.isEmpty(content)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(content));
            cmd.append('\'');
         }
      }
      if(unit.isNoteChanged()){
         cmd.append(",`NOTE`=");
         String note = unit.note();
         if(RString.isEmpty(note)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(note));
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
      FDataFinancialCustomerActionUnit unit = (FDataFinancialCustomerActionUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
