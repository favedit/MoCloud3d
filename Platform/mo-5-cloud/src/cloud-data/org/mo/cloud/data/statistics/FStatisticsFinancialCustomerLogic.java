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
// <T>客户统计表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialCustomerLogic
      extends FLogicTable
{
   // 客户统计表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 客户统计表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.customer", "ST_FIN_CUSTOMER");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段关联编号的定义。
   public final static SLogicFieldInfo LINK_ID = new SLogicFieldInfo("LINK_ID");

   // 字段关联时间的定义。
   public final static SLogicFieldInfo LINK_DATE = new SLogicFieldInfo("LINK_DATE");

   // 字段关联类型的定义。
   public final static SLogicFieldInfo LINK_CD = new SLogicFieldInfo("LINK_CD");

   // 字段数据编号的定义。
   public final static SLogicFieldInfo DATA_ID = new SLogicFieldInfo("DATA_ID");

   // 字段部门编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_ID = new SLogicFieldInfo("DEPARTMENT_ID");

   // 字段部门关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LINK_ID");

   // 字段部门名称的定义。
   public final static SLogicFieldInfo DEPARTMENT_LABEL = new SLogicFieldInfo("DEPARTMENT_LABEL");

   // 字段部门级别1编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL1_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL1_ID");

   // 字段部门级别1关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL1_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL1_LINK_ID");

   // 字段部门级别1标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL1_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL1_LABEL");

   // 字段部门级别2编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL2_ID");

   // 字段部门级别2关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LINK_ID");

   // 字段部门级别2标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LABEL");

   // 字段部门级别3编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL3_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL3_ID");

   // 字段部门级别3关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL3_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL3_LINK_ID");

   // 字段部门级别3标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL3_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL3_LABEL");

   // 字段部门级别4编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL4_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL4_ID");

   // 字段部门级别4关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL4_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL4_LINK_ID");

   // 字段部门级别4标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL4_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL4_LABEL");

   // 字段部门级别5编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL5_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL5_ID");

   // 字段部门级别5关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL5_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL5_LINK_ID");

   // 字段部门级别5标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL5_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL5_LABEL");

   // 字段部门级别6编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL6_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL6_ID");

   // 字段部门级别6关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL6_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL6_LINK_ID");

   // 字段部门级别6标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL6_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL6_LABEL");

   // 字段部门级别7编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL7_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL7_ID");

   // 字段部门级别7关联编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL7_LINK_ID = new SLogicFieldInfo("DEPARTMENT_LEVEL7_LINK_ID");

   // 字段部门级别7标签的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL7_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL7_LABEL");

   // 字段理财师编号的定义。
   public final static SLogicFieldInfo MARKETER_ID = new SLogicFieldInfo("MARKETER_ID");

   // 字段理财师关联编号的定义。
   public final static SLogicFieldInfo MARKETER_LINK_ID = new SLogicFieldInfo("MARKETER_LINK_ID");

   // 字段理财师名称的定义。
   public final static SLogicFieldInfo MARKETER_LABEL = new SLogicFieldInfo("MARKETER_LABEL");

   // 字段理财师状态的定义。
   public final static SLogicFieldInfo MARKETER_STATUS_CD = new SLogicFieldInfo("MARKETER_STATUS_CD");

   // 字段标签的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段身份证号的定义。
   public final static SLogicFieldInfo CARD = new SLogicFieldInfo("CARD");

   // 字段卡片地区的定义。
   public final static SLogicFieldInfo CARD_AREA = new SLogicFieldInfo("CARD_AREA");

   // 字段卡片生日的定义。
   public final static SLogicFieldInfo CARD_BIRTH = new SLogicFieldInfo("CARD_BIRTH");

   // 字段卡片性别的定义。
   public final static SLogicFieldInfo CARD_GENDER = new SLogicFieldInfo("CARD_GENDER");

   // 字段电话号码的定义。
   public final static SLogicFieldInfo PHONE = new SLogicFieldInfo("PHONE");

   // 字段电话城市编号的定义。
   public final static SLogicFieldInfo PHONE_CITY_ID = new SLogicFieldInfo("PHONE_CITY_ID");

   // 字段电话城市代码的定义。
   public final static SLogicFieldInfo PHONE_CITY_CODE = new SLogicFieldInfo("PHONE_CITY_CODE");

   // 字段注册时间的定义。
   public final static SLogicFieldInfo REGISTER_DATE = new SLogicFieldInfo("REGISTER_DATE");

   // 字段首次投资时间的定义。
   public final static SLogicFieldInfo INVESTMENT_FIRST_DATE = new SLogicFieldInfo("INVESTMENT_FIRST_DATE");

   // 字段投资最后日期的定义。
   public final static SLogicFieldInfo INVESTMENT_LAST_DATE = new SLogicFieldInfo("INVESTMENT_LAST_DATE");

   // 字段投资次数的定义。
   public final static SLogicFieldInfo INVESTMENT_NUMBER = new SLogicFieldInfo("INVESTMENT_NUMBER");

   // 字段投资总计的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段投资级别的定义。
   public final static SLogicFieldInfo INVESTMENT_LEVEL_CD = new SLogicFieldInfo("INVESTMENT_LEVEL_CD");

   // 字段首次赎回时间的定义。
   public final static SLogicFieldInfo REDEMPTION_FIRST_DATE = new SLogicFieldInfo("REDEMPTION_FIRST_DATE");

   // 字段赎回最后时间的定义。
   public final static SLogicFieldInfo REDEMPTION_LAST_DATE = new SLogicFieldInfo("REDEMPTION_LAST_DATE");

   // 字段赎回次数的定义。
   public final static SLogicFieldInfo REDEMPTION_NUMBER = new SLogicFieldInfo("REDEMPTION_NUMBER");

   // 字段赎回总计的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段赎回级别的定义。
   public final static SLogicFieldInfo REDEMPTION_LEVEL_CD = new SLogicFieldInfo("REDEMPTION_LEVEL_CD");

   // 字段净投总计的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段净投级别的定义。
   public final static SLogicFieldInfo NETINVESTMENT_LEVEL_CD = new SLogicFieldInfo("NETINVESTMENT_LEVEL_CD");

   // 字段利息总计的定义。
   public final static SLogicFieldInfo INTEREST_TOTAL = new SLogicFieldInfo("INTEREST_TOTAL");

   // 字段绩效总计的定义。
   public final static SLogicFieldInfo PERFORMANCE_TOTAL = new SLogicFieldInfo("PERFORMANCE_TOTAL");

   // 字段最低投标编号的定义。
   public final static SLogicFieldInfo TENDER_LOWER_ID = new SLogicFieldInfo("TENDER_LOWER_ID");

   // 字段最低投标关联编号的定义。
   public final static SLogicFieldInfo TENDER_LOWER_LINK_ID = new SLogicFieldInfo("TENDER_LOWER_LINK_ID");

   // 字段最低投标模式的定义。
   public final static SLogicFieldInfo TENDER_LOWER_MODEL = new SLogicFieldInfo("TENDER_LOWER_MODEL");

   // 字段最低投标年化的定义。
   public final static SLogicFieldInfo TENDER_LOWER_RATE = new SLogicFieldInfo("TENDER_LOWER_RATE");

   // 字段投标编号的定义。
   public final static SLogicFieldInfo TENDER_ID = new SLogicFieldInfo("TENDER_ID");

   // 字段投标关联编号的定义。
   public final static SLogicFieldInfo TENDER_LINK_ID = new SLogicFieldInfo("TENDER_LINK_ID");

   // 字段投标模式的定义。
   public final static SLogicFieldInfo TENDER_MODEL = new SLogicFieldInfo("TENDER_MODEL");

   // 字段投标年化的定义。
   public final static SLogicFieldInfo TENDER_RATE = new SLogicFieldInfo("TENDER_RATE");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LINK_ID`,`LINK_DATE`,`LINK_CD`,`DATA_ID`,`DEPARTMENT_ID`,`DEPARTMENT_LINK_ID`,`DEPARTMENT_LABEL`,`DEPARTMENT_LEVEL1_ID`,`DEPARTMENT_LEVEL1_LINK_ID`,`DEPARTMENT_LEVEL1_LABEL`,`DEPARTMENT_LEVEL2_ID`,`DEPARTMENT_LEVEL2_LINK_ID`,`DEPARTMENT_LEVEL2_LABEL`,`DEPARTMENT_LEVEL3_ID`,`DEPARTMENT_LEVEL3_LINK_ID`,`DEPARTMENT_LEVEL3_LABEL`,`DEPARTMENT_LEVEL4_ID`,`DEPARTMENT_LEVEL4_LINK_ID`,`DEPARTMENT_LEVEL4_LABEL`,`DEPARTMENT_LEVEL5_ID`,`DEPARTMENT_LEVEL5_LINK_ID`,`DEPARTMENT_LEVEL5_LABEL`,`DEPARTMENT_LEVEL6_ID`,`DEPARTMENT_LEVEL6_LINK_ID`,`DEPARTMENT_LEVEL6_LABEL`,`DEPARTMENT_LEVEL7_ID`,`DEPARTMENT_LEVEL7_LINK_ID`,`DEPARTMENT_LEVEL7_LABEL`,`MARKETER_ID`,`MARKETER_LINK_ID`,`MARKETER_LABEL`,`MARKETER_STATUS_CD`,`LABEL`,`CARD`,`CARD_AREA`,`CARD_BIRTH`,`CARD_GENDER`,`PHONE`,`PHONE_CITY_ID`,`PHONE_CITY_CODE`,`REGISTER_DATE`,`INVESTMENT_FIRST_DATE`,`INVESTMENT_LAST_DATE`,`INVESTMENT_NUMBER`,`INVESTMENT_TOTAL`,`INVESTMENT_LEVEL_CD`,`REDEMPTION_FIRST_DATE`,`REDEMPTION_LAST_DATE`,`REDEMPTION_NUMBER`,`REDEMPTION_TOTAL`,`REDEMPTION_LEVEL_CD`,`NETINVESTMENT_TOTAL`,`NETINVESTMENT_LEVEL_CD`,`INTEREST_TOTAL`,`PERFORMANCE_TOTAL`,`TENDER_LOWER_ID`,`TENDER_LOWER_LINK_ID`,`TENDER_LOWER_MODEL`,`TENDER_LOWER_RATE`,`TENDER_ID`,`TENDER_LINK_ID`,`TENDER_MODEL`,`TENDER_RATE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造客户统计表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialCustomerLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialCustomerUnit.class;
   }

   //============================================================
   // <T>构造客户统计表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialCustomerLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialCustomerUnit.class;
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
      return (T)new FStatisticsFinancialCustomerUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialCustomerUnit>(FStatisticsFinancialCustomerUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialCustomerUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialCustomerUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialCustomerUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialCustomerUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialCustomerUnit> fetchAll(){
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
   public FStatisticsFinancialCustomerUnit doPrepare(){
      FStatisticsFinancialCustomerUnit unit = new FStatisticsFinancialCustomerUnit();
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
      FStatisticsFinancialCustomerUnit unit = (FStatisticsFinancialCustomerUnit)logicUnit;
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
      FStatisticsFinancialCustomerUnit unit = (FStatisticsFinancialCustomerUnit)logicUnit;
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
      cmd.append(",`LINK_CD`");
      cmd.append(",`DATA_ID`");
      cmd.append(",`DEPARTMENT_ID`");
      cmd.append(",`DEPARTMENT_LINK_ID`");
      cmd.append(",`DEPARTMENT_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL1_ID`");
      cmd.append(",`DEPARTMENT_LEVEL1_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL1_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL2_ID`");
      cmd.append(",`DEPARTMENT_LEVEL2_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL2_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL3_ID`");
      cmd.append(",`DEPARTMENT_LEVEL3_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL3_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL4_ID`");
      cmd.append(",`DEPARTMENT_LEVEL4_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL4_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL5_ID`");
      cmd.append(",`DEPARTMENT_LEVEL5_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL5_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL6_ID`");
      cmd.append(",`DEPARTMENT_LEVEL6_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL6_LABEL`");
      cmd.append(",`DEPARTMENT_LEVEL7_ID`");
      cmd.append(",`DEPARTMENT_LEVEL7_LINK_ID`");
      cmd.append(",`DEPARTMENT_LEVEL7_LABEL`");
      cmd.append(",`MARKETER_ID`");
      cmd.append(",`MARKETER_LINK_ID`");
      cmd.append(",`MARKETER_LABEL`");
      cmd.append(",`MARKETER_STATUS_CD`");
      cmd.append(",`LABEL`");
      cmd.append(",`CARD`");
      cmd.append(",`CARD_AREA`");
      cmd.append(",`CARD_BIRTH`");
      cmd.append(",`CARD_GENDER`");
      cmd.append(",`PHONE`");
      cmd.append(",`PHONE_CITY_ID`");
      cmd.append(",`PHONE_CITY_CODE`");
      cmd.append(",`REGISTER_DATE`");
      cmd.append(",`INVESTMENT_FIRST_DATE`");
      cmd.append(",`INVESTMENT_LAST_DATE`");
      cmd.append(",`INVESTMENT_NUMBER`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`INVESTMENT_LEVEL_CD`");
      cmd.append(",`REDEMPTION_FIRST_DATE`");
      cmd.append(",`REDEMPTION_LAST_DATE`");
      cmd.append(",`REDEMPTION_NUMBER`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`REDEMPTION_LEVEL_CD`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`NETINVESTMENT_LEVEL_CD`");
      cmd.append(",`INTEREST_TOTAL`");
      cmd.append(",`PERFORMANCE_TOTAL`");
      cmd.append(",`TENDER_LOWER_ID`");
      cmd.append(",`TENDER_LOWER_LINK_ID`");
      cmd.append(",`TENDER_LOWER_MODEL`");
      cmd.append(",`TENDER_LOWER_RATE`");
      cmd.append(",`TENDER_ID`");
      cmd.append(",`TENDER_LINK_ID`");
      cmd.append(",`TENDER_MODEL`");
      cmd.append(",`TENDER_RATE`");
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
      cmd.append(unit.linkCd());
      cmd.append(',');
      long dataId = unit.dataId();
      if(dataId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(dataId);
      }
      cmd.append(',');
      long departmentId = unit.departmentId();
      if(departmentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentId);
      }
      cmd.append(',');
      long departmentLinkId = unit.departmentLinkId();
      if(departmentLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLinkId);
      }
      cmd.append(',');
      String departmentLabel = unit.departmentLabel();
      if(RString.isEmpty(departmentLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel1Id = unit.departmentLevel1Id();
      if(departmentLevel1Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel1Id);
      }
      cmd.append(',');
      long departmentLevel1LinkId = unit.departmentLevel1LinkId();
      if(departmentLevel1LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel1LinkId);
      }
      cmd.append(',');
      String departmentLevel1Label = unit.departmentLevel1Label();
      if(RString.isEmpty(departmentLevel1Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel1Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel2Id = unit.departmentLevel2Id();
      if(departmentLevel2Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel2Id);
      }
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
      long departmentLevel3Id = unit.departmentLevel3Id();
      if(departmentLevel3Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel3Id);
      }
      cmd.append(',');
      long departmentLevel3LinkId = unit.departmentLevel3LinkId();
      if(departmentLevel3LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel3LinkId);
      }
      cmd.append(',');
      String departmentLevel3Label = unit.departmentLevel3Label();
      if(RString.isEmpty(departmentLevel3Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel3Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel4Id = unit.departmentLevel4Id();
      if(departmentLevel4Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel4Id);
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
      long departmentLevel5Id = unit.departmentLevel5Id();
      if(departmentLevel5Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel5Id);
      }
      cmd.append(',');
      long departmentLevel5LinkId = unit.departmentLevel5LinkId();
      if(departmentLevel5LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel5LinkId);
      }
      cmd.append(',');
      String departmentLevel5Label = unit.departmentLevel5Label();
      if(RString.isEmpty(departmentLevel5Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel5Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel6Id = unit.departmentLevel6Id();
      if(departmentLevel6Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel6Id);
      }
      cmd.append(',');
      long departmentLevel6LinkId = unit.departmentLevel6LinkId();
      if(departmentLevel6LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel6LinkId);
      }
      cmd.append(',');
      String departmentLevel6Label = unit.departmentLevel6Label();
      if(RString.isEmpty(departmentLevel6Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel6Label));
         cmd.append('\'');
      }
      cmd.append(',');
      long departmentLevel7Id = unit.departmentLevel7Id();
      if(departmentLevel7Id == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel7Id);
      }
      cmd.append(',');
      long departmentLevel7LinkId = unit.departmentLevel7LinkId();
      if(departmentLevel7LinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel7LinkId);
      }
      cmd.append(',');
      String departmentLevel7Label = unit.departmentLevel7Label();
      if(RString.isEmpty(departmentLevel7Label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLevel7Label));
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
      cmd.append(unit.marketerStatusCd());
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
      String card = unit.card();
      if(RString.isEmpty(card)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(card));
         cmd.append('\'');
      }
      cmd.append(',');
      String cardArea = unit.cardArea();
      if(RString.isEmpty(cardArea)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(cardArea));
         cmd.append('\'');
      }
      cmd.append(',');
      String cardBirth = unit.cardBirth();
      if(RString.isEmpty(cardBirth)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(cardBirth));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.cardGender());
      cmd.append(',');
      String phone = unit.phone();
      if(RString.isEmpty(phone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(phone));
         cmd.append('\'');
      }
      cmd.append(',');
      long phoneCityId = unit.phoneCityId();
      if(phoneCityId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(phoneCityId);
      }
      cmd.append(',');
      String phoneCityCode = unit.phoneCityCode();
      if(RString.isEmpty(phoneCityCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(phoneCityCode));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime registerDate = unit.registerDate();
      if(registerDate == null){
         cmd.append("NULL");
      }else if(registerDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(registerDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime investmentFirstDate = unit.investmentFirstDate();
      if(investmentFirstDate == null){
         cmd.append("NULL");
      }else if(investmentFirstDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(investmentFirstDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
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
      cmd.append(unit.investmentNumber());
      cmd.append(',');
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.investmentLevelCd());
      cmd.append(',');
      TDateTime redemptionFirstDate = unit.redemptionFirstDate();
      if(redemptionFirstDate == null){
         cmd.append("NULL");
      }else if(redemptionFirstDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(redemptionFirstDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
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
      cmd.append(unit.redemptionNumber());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.redemptionLevelCd());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      cmd.append(unit.netinvestmentLevelCd());
      cmd.append(',');
      cmd.append(unit.interestTotal());
      cmd.append(',');
      cmd.append(unit.performanceTotal());
      cmd.append(',');
      long tenderLowerId = unit.tenderLowerId();
      if(tenderLowerId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderLowerId);
      }
      cmd.append(',');
      long tenderLowerLinkId = unit.tenderLowerLinkId();
      if(tenderLowerLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderLowerLinkId);
      }
      cmd.append(',');
      String tenderLowerModel = unit.tenderLowerModel();
      if(RString.isEmpty(tenderLowerModel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(tenderLowerModel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.tenderLowerRate());
      cmd.append(',');
      long tenderId = unit.tenderId();
      if(tenderId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderId);
      }
      cmd.append(',');
      long tenderLinkId = unit.tenderLinkId();
      if(tenderLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderLinkId);
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
      cmd.append(',');
      cmd.append(unit.tenderRate());
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
      FStatisticsFinancialCustomerUnit unit = (FStatisticsFinancialCustomerUnit)logicUnit;
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
      FStatisticsFinancialCustomerUnit unit = (FStatisticsFinancialCustomerUnit)logicUnit;
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
      if(unit.isDepartmentIdChanged()){
         cmd.append(",`DEPARTMENT_ID`=");
         long departmentId = unit.departmentId();
         if(departmentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentId);
         }
      }
      if(unit.isDepartmentLinkIdChanged()){
         cmd.append(",`DEPARTMENT_LINK_ID`=");
         long departmentLinkId = unit.departmentLinkId();
         if(departmentLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLinkId);
         }
      }
      if(unit.isDepartmentLabelChanged()){
         cmd.append(",`DEPARTMENT_LABEL`=");
         String departmentLabel = unit.departmentLabel();
         if(RString.isEmpty(departmentLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLabel));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel1IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL1_ID`=");
         long departmentLevel1Id = unit.departmentLevel1Id();
         if(departmentLevel1Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel1Id);
         }
      }
      if(unit.isDepartmentLevel1LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL1_LINK_ID`=");
         long departmentLevel1LinkId = unit.departmentLevel1LinkId();
         if(departmentLevel1LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel1LinkId);
         }
      }
      if(unit.isDepartmentLevel1LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL1_LABEL`=");
         String departmentLevel1Label = unit.departmentLevel1Label();
         if(RString.isEmpty(departmentLevel1Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel1Label));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel2IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL2_ID`=");
         long departmentLevel2Id = unit.departmentLevel2Id();
         if(departmentLevel2Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel2Id);
         }
      }
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
      if(unit.isDepartmentLevel3IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL3_ID`=");
         long departmentLevel3Id = unit.departmentLevel3Id();
         if(departmentLevel3Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel3Id);
         }
      }
      if(unit.isDepartmentLevel3LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL3_LINK_ID`=");
         long departmentLevel3LinkId = unit.departmentLevel3LinkId();
         if(departmentLevel3LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel3LinkId);
         }
      }
      if(unit.isDepartmentLevel3LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL3_LABEL`=");
         String departmentLevel3Label = unit.departmentLevel3Label();
         if(RString.isEmpty(departmentLevel3Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel3Label));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel4IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL4_ID`=");
         long departmentLevel4Id = unit.departmentLevel4Id();
         if(departmentLevel4Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel4Id);
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
      if(unit.isDepartmentLevel5IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL5_ID`=");
         long departmentLevel5Id = unit.departmentLevel5Id();
         if(departmentLevel5Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel5Id);
         }
      }
      if(unit.isDepartmentLevel5LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL5_LINK_ID`=");
         long departmentLevel5LinkId = unit.departmentLevel5LinkId();
         if(departmentLevel5LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel5LinkId);
         }
      }
      if(unit.isDepartmentLevel5LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL5_LABEL`=");
         String departmentLevel5Label = unit.departmentLevel5Label();
         if(RString.isEmpty(departmentLevel5Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel5Label));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel6IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL6_ID`=");
         long departmentLevel6Id = unit.departmentLevel6Id();
         if(departmentLevel6Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel6Id);
         }
      }
      if(unit.isDepartmentLevel6LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL6_LINK_ID`=");
         long departmentLevel6LinkId = unit.departmentLevel6LinkId();
         if(departmentLevel6LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel6LinkId);
         }
      }
      if(unit.isDepartmentLevel6LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL6_LABEL`=");
         String departmentLevel6Label = unit.departmentLevel6Label();
         if(RString.isEmpty(departmentLevel6Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel6Label));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLevel7IdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL7_ID`=");
         long departmentLevel7Id = unit.departmentLevel7Id();
         if(departmentLevel7Id == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel7Id);
         }
      }
      if(unit.isDepartmentLevel7LinkIdChanged()){
         cmd.append(",`DEPARTMENT_LEVEL7_LINK_ID`=");
         long departmentLevel7LinkId = unit.departmentLevel7LinkId();
         if(departmentLevel7LinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel7LinkId);
         }
      }
      if(unit.isDepartmentLevel7LabelChanged()){
         cmd.append(",`DEPARTMENT_LEVEL7_LABEL`=");
         String departmentLevel7Label = unit.departmentLevel7Label();
         if(RString.isEmpty(departmentLevel7Label)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLevel7Label));
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
      if(unit.isMarketerStatusCdChanged()){
         cmd.append(",`MARKETER_STATUS_CD`=");
         cmd.append(unit.marketerStatusCd());
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
      if(unit.isCardChanged()){
         cmd.append(",`CARD`=");
         String card = unit.card();
         if(RString.isEmpty(card)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(card));
            cmd.append('\'');
         }
      }
      if(unit.isCardAreaChanged()){
         cmd.append(",`CARD_AREA`=");
         String cardArea = unit.cardArea();
         if(RString.isEmpty(cardArea)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(cardArea));
            cmd.append('\'');
         }
      }
      if(unit.isCardBirthChanged()){
         cmd.append(",`CARD_BIRTH`=");
         String cardBirth = unit.cardBirth();
         if(RString.isEmpty(cardBirth)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(cardBirth));
            cmd.append('\'');
         }
      }
      if(unit.isCardGenderChanged()){
         cmd.append(",`CARD_GENDER`=");
         cmd.append(unit.cardGender());
      }
      if(unit.isPhoneChanged()){
         cmd.append(",`PHONE`=");
         String phone = unit.phone();
         if(RString.isEmpty(phone)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(phone));
            cmd.append('\'');
         }
      }
      if(unit.isPhoneCityIdChanged()){
         cmd.append(",`PHONE_CITY_ID`=");
         long phoneCityId = unit.phoneCityId();
         if(phoneCityId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(phoneCityId);
         }
      }
      if(unit.isPhoneCityCodeChanged()){
         cmd.append(",`PHONE_CITY_CODE`=");
         String phoneCityCode = unit.phoneCityCode();
         if(RString.isEmpty(phoneCityCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(phoneCityCode));
            cmd.append('\'');
         }
      }
      if(unit.isRegisterDateChanged()){
         cmd.append(",`REGISTER_DATE`=");
         TDateTime registerDate = unit.registerDate();
         if(registerDate == null){
            cmd.append("NULL");
         }else if(registerDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(registerDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isInvestmentFirstDateChanged()){
         cmd.append(",`INVESTMENT_FIRST_DATE`=");
         TDateTime investmentFirstDate = unit.investmentFirstDate();
         if(investmentFirstDate == null){
            cmd.append("NULL");
         }else if(investmentFirstDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(investmentFirstDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
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
      if(unit.isInvestmentNumberChanged()){
         cmd.append(",`INVESTMENT_NUMBER`=");
         cmd.append(unit.investmentNumber());
      }
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isInvestmentLevelCdChanged()){
         cmd.append(",`INVESTMENT_LEVEL_CD`=");
         cmd.append(unit.investmentLevelCd());
      }
      if(unit.isRedemptionFirstDateChanged()){
         cmd.append(",`REDEMPTION_FIRST_DATE`=");
         TDateTime redemptionFirstDate = unit.redemptionFirstDate();
         if(redemptionFirstDate == null){
            cmd.append("NULL");
         }else if(redemptionFirstDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(redemptionFirstDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
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
      if(unit.isRedemptionNumberChanged()){
         cmd.append(",`REDEMPTION_NUMBER`=");
         cmd.append(unit.redemptionNumber());
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isRedemptionLevelCdChanged()){
         cmd.append(",`REDEMPTION_LEVEL_CD`=");
         cmd.append(unit.redemptionLevelCd());
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isNetinvestmentLevelCdChanged()){
         cmd.append(",`NETINVESTMENT_LEVEL_CD`=");
         cmd.append(unit.netinvestmentLevelCd());
      }
      if(unit.isInterestTotalChanged()){
         cmd.append(",`INTEREST_TOTAL`=");
         cmd.append(unit.interestTotal());
      }
      if(unit.isPerformanceTotalChanged()){
         cmd.append(",`PERFORMANCE_TOTAL`=");
         cmd.append(unit.performanceTotal());
      }
      if(unit.isTenderLowerIdChanged()){
         cmd.append(",`TENDER_LOWER_ID`=");
         long tenderLowerId = unit.tenderLowerId();
         if(tenderLowerId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderLowerId);
         }
      }
      if(unit.isTenderLowerLinkIdChanged()){
         cmd.append(",`TENDER_LOWER_LINK_ID`=");
         long tenderLowerLinkId = unit.tenderLowerLinkId();
         if(tenderLowerLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderLowerLinkId);
         }
      }
      if(unit.isTenderLowerModelChanged()){
         cmd.append(",`TENDER_LOWER_MODEL`=");
         String tenderLowerModel = unit.tenderLowerModel();
         if(RString.isEmpty(tenderLowerModel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(tenderLowerModel));
            cmd.append('\'');
         }
      }
      if(unit.isTenderLowerRateChanged()){
         cmd.append(",`TENDER_LOWER_RATE`=");
         cmd.append(unit.tenderLowerRate());
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
      if(unit.isTenderLinkIdChanged()){
         cmd.append(",`TENDER_LINK_ID`=");
         long tenderLinkId = unit.tenderLinkId();
         if(tenderLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderLinkId);
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
      if(unit.isTenderRateChanged()){
         cmd.append(",`TENDER_RATE`=");
         cmd.append(unit.tenderRate());
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
      FStatisticsFinancialCustomerUnit unit = (FStatisticsFinancialCustomerUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
