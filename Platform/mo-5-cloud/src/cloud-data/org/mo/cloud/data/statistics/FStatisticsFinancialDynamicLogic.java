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
// <T>动态统计表逻辑。</T>
//============================================================
@ASourceMachine
public class FStatisticsFinancialDynamicLogic
      extends FLogicTable
{
   // 动态统计表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("statistics");

   // 动态统计表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("statistics.financial.dynamic", "ST_FIN_DYNAMIC");

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

   // 字段关联投资编号的定义。
   public final static SLogicFieldInfo LINK_INVEST_ID = new SLogicFieldInfo("LINK_INVEST_ID");

   // 字段关联借款编号的定义。
   public final static SLogicFieldInfo LINK_BORROW_ID = new SLogicFieldInfo("LINK_BORROW_ID");

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

   // 字段理财师等级标签的定义。
   public final static SLogicFieldInfo MARKETER_RANK_LABEL = new SLogicFieldInfo("MARKETER_RANK_LABEL");

   // 字段客户编号的定义。
   public final static SLogicFieldInfo CUSTOMER_ID = new SLogicFieldInfo("CUSTOMER_ID");

   // 字段客户关联编号的定义。
   public final static SLogicFieldInfo CUSTOMER_LINK_ID = new SLogicFieldInfo("CUSTOMER_LINK_ID");

   // 字段客户名称的定义。
   public final static SLogicFieldInfo CUSTOMER_LABEL = new SLogicFieldInfo("CUSTOMER_LABEL");

   // 字段用户身份证的定义。
   public final static SLogicFieldInfo CUSTOMER_CARD = new SLogicFieldInfo("CUSTOMER_CARD");

   // 字段用户地区的定义。
   public final static SLogicFieldInfo CUSTOMER_AREA = new SLogicFieldInfo("CUSTOMER_AREA");

   // 字段客户生日年的定义。
   public final static SLogicFieldInfo CUSTOMER_BIRTH = new SLogicFieldInfo("CUSTOMER_BIRTH");

   // 字段客户性别的定义。
   public final static SLogicFieldInfo CUSTOMER_GENDER = new SLogicFieldInfo("CUSTOMER_GENDER");

   // 字段客户电话的定义。
   public final static SLogicFieldInfo CUSTOMER_PHONE = new SLogicFieldInfo("CUSTOMER_PHONE");

   // 字段客户命令类型的定义。
   public final static SLogicFieldInfo CUSTOMER_ACTION_CD = new SLogicFieldInfo("CUSTOMER_ACTION_CD");

   // 字段客户命令时间的定义。
   public final static SLogicFieldInfo CUSTOMER_ACTION_DATE = new SLogicFieldInfo("CUSTOMER_ACTION_DATE");

   // 字段客户命令数值的定义。
   public final static SLogicFieldInfo CUSTOMER_ACTION_AMOUNT = new SLogicFieldInfo("CUSTOMER_ACTION_AMOUNT");

   // 字段客户命令利息的定义。
   public final static SLogicFieldInfo CUSTOMER_ACTION_INTEREST = new SLogicFieldInfo("CUSTOMER_ACTION_INTEREST");

   // 字段客户刷卡时间的定义。
   public final static SLogicFieldInfo CUSTOMER_POS_DATE = new SLogicFieldInfo("CUSTOMER_POS_DATE");

   // 字段投标改变的定义。
   public final static SLogicFieldInfo TENDER_CHANGED = new SLogicFieldInfo("TENDER_CHANGED");

   // 字段前投标编号的定义。
   public final static SLogicFieldInfo TENDER_PRIOR_ID = new SLogicFieldInfo("TENDER_PRIOR_ID");

   // 字段前投标关联编号的定义。
   public final static SLogicFieldInfo TENDER_PRIOR_LINK_ID = new SLogicFieldInfo("TENDER_PRIOR_LINK_ID");

   // 字段前投标模式的定义。
   public final static SLogicFieldInfo TENDER_PRIOR_MODEL = new SLogicFieldInfo("TENDER_PRIOR_MODEL");

   // 字段投标前次年化的定义。
   public final static SLogicFieldInfo TENDER_PRIOR_RATE = new SLogicFieldInfo("TENDER_PRIOR_RATE");

   // 字段投标编号的定义。
   public final static SLogicFieldInfo TENDER_ID = new SLogicFieldInfo("TENDER_ID");

   // 字段投标关联编号的定义。
   public final static SLogicFieldInfo TENDER_LINK_ID = new SLogicFieldInfo("TENDER_LINK_ID");

   // 字段投标类型的定义。
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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LINK_ID`,`LINK_DATE`,`LINK_INVEST_ID`,`LINK_BORROW_ID`,`DEPARTMENT_ID`,`DEPARTMENT_LINK_ID`,`DEPARTMENT_LABEL`,`DEPARTMENT_LEVEL1_ID`,`DEPARTMENT_LEVEL1_LINK_ID`,`DEPARTMENT_LEVEL1_LABEL`,`DEPARTMENT_LEVEL2_ID`,`DEPARTMENT_LEVEL2_LINK_ID`,`DEPARTMENT_LEVEL2_LABEL`,`DEPARTMENT_LEVEL3_ID`,`DEPARTMENT_LEVEL3_LINK_ID`,`DEPARTMENT_LEVEL3_LABEL`,`DEPARTMENT_LEVEL4_ID`,`DEPARTMENT_LEVEL4_LINK_ID`,`DEPARTMENT_LEVEL4_LABEL`,`DEPARTMENT_LEVEL5_ID`,`DEPARTMENT_LEVEL5_LINK_ID`,`DEPARTMENT_LEVEL5_LABEL`,`DEPARTMENT_LEVEL6_ID`,`DEPARTMENT_LEVEL6_LINK_ID`,`DEPARTMENT_LEVEL6_LABEL`,`DEPARTMENT_LEVEL7_ID`,`DEPARTMENT_LEVEL7_LINK_ID`,`DEPARTMENT_LEVEL7_LABEL`,`MARKETER_ID`,`MARKETER_LINK_ID`,`MARKETER_LABEL`,`MARKETER_STATUS_CD`,`MARKETER_RANK_LABEL`,`CUSTOMER_ID`,`CUSTOMER_LINK_ID`,`CUSTOMER_LABEL`,`CUSTOMER_CARD`,`CUSTOMER_AREA`,`CUSTOMER_BIRTH`,`CUSTOMER_GENDER`,`CUSTOMER_PHONE`,`CUSTOMER_ACTION_CD`,`CUSTOMER_ACTION_DATE`,`CUSTOMER_ACTION_AMOUNT`,`CUSTOMER_ACTION_INTEREST`,`CUSTOMER_POS_DATE`,`TENDER_CHANGED`,`TENDER_PRIOR_ID`,`TENDER_PRIOR_LINK_ID`,`TENDER_PRIOR_MODEL`,`TENDER_PRIOR_RATE`,`TENDER_ID`,`TENDER_LINK_ID`,`TENDER_MODEL`,`TENDER_RATE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造动态统计表逻辑单元。</T>
   //============================================================
   public FStatisticsFinancialDynamicLogic(){
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialDynamicUnit.class;
   }

   //============================================================
   // <T>构造动态统计表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FStatisticsFinancialDynamicLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FStatisticsFinancialDynamicUnit.class;
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
      return (T)new FStatisticsFinancialDynamicUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FStatisticsFinancialDynamicUnit>(FStatisticsFinancialDynamicUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialDynamicUnit findByGuid(CharSequence guid){
      return findByGuid(null, FStatisticsFinancialDynamicUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FStatisticsFinancialDynamicUnit search(CharSequence whereSql){
      return search(null, FStatisticsFinancialDynamicUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(int pageSize,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FStatisticsFinancialDynamicUnit> fetchAll(){
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
   public FStatisticsFinancialDynamicUnit doPrepare(){
      FStatisticsFinancialDynamicUnit unit = new FStatisticsFinancialDynamicUnit();
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
      FStatisticsFinancialDynamicUnit unit = (FStatisticsFinancialDynamicUnit)logicUnit;
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
      FStatisticsFinancialDynamicUnit unit = (FStatisticsFinancialDynamicUnit)logicUnit;
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
      cmd.append(",`LINK_INVEST_ID`");
      cmd.append(",`LINK_BORROW_ID`");
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
      cmd.append(",`MARKETER_RANK_LABEL`");
      cmd.append(",`CUSTOMER_ID`");
      cmd.append(",`CUSTOMER_LINK_ID`");
      cmd.append(",`CUSTOMER_LABEL`");
      cmd.append(",`CUSTOMER_CARD`");
      cmd.append(",`CUSTOMER_AREA`");
      cmd.append(",`CUSTOMER_BIRTH`");
      cmd.append(",`CUSTOMER_GENDER`");
      cmd.append(",`CUSTOMER_PHONE`");
      cmd.append(",`CUSTOMER_ACTION_CD`");
      cmd.append(",`CUSTOMER_ACTION_DATE`");
      cmd.append(",`CUSTOMER_ACTION_AMOUNT`");
      cmd.append(",`CUSTOMER_ACTION_INTEREST`");
      cmd.append(",`CUSTOMER_POS_DATE`");
      cmd.append(",`TENDER_CHANGED`");
      cmd.append(",`TENDER_PRIOR_ID`");
      cmd.append(",`TENDER_PRIOR_LINK_ID`");
      cmd.append(",`TENDER_PRIOR_MODEL`");
      cmd.append(",`TENDER_PRIOR_RATE`");
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
      long linkInvestId = unit.linkInvestId();
      if(linkInvestId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(linkInvestId);
      }
      cmd.append(',');
      long linkBorrowId = unit.linkBorrowId();
      if(linkBorrowId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(linkBorrowId);
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
      String marketerRankLabel = unit.marketerRankLabel();
      if(RString.isEmpty(marketerRankLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(marketerRankLabel));
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
      cmd.append(unit.customerActionCd());
      cmd.append(',');
      TDateTime customerActionDate = unit.customerActionDate();
      if(customerActionDate == null){
         cmd.append("NULL");
      }else if(customerActionDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(customerActionDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.customerActionAmount());
      cmd.append(',');
      cmd.append(unit.customerActionInterest());
      cmd.append(',');
      TDateTime customerPosDate = unit.customerPosDate();
      if(customerPosDate == null){
         cmd.append("NULL");
      }else if(customerPosDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(customerPosDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.tenderChanged());
      cmd.append(',');
      long tenderPriorId = unit.tenderPriorId();
      if(tenderPriorId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderPriorId);
      }
      cmd.append(',');
      long tenderPriorLinkId = unit.tenderPriorLinkId();
      if(tenderPriorLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(tenderPriorLinkId);
      }
      cmd.append(',');
      String tenderPriorModel = unit.tenderPriorModel();
      if(RString.isEmpty(tenderPriorModel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(tenderPriorModel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.tenderPriorRate());
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
      FStatisticsFinancialDynamicUnit unit = (FStatisticsFinancialDynamicUnit)logicUnit;
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
      FStatisticsFinancialDynamicUnit unit = (FStatisticsFinancialDynamicUnit)logicUnit;
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
      if(unit.isLinkInvestIdChanged()){
         cmd.append(",`LINK_INVEST_ID`=");
         long linkInvestId = unit.linkInvestId();
         if(linkInvestId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(linkInvestId);
         }
      }
      if(unit.isLinkBorrowIdChanged()){
         cmd.append(",`LINK_BORROW_ID`=");
         long linkBorrowId = unit.linkBorrowId();
         if(linkBorrowId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(linkBorrowId);
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
      if(unit.isMarketerRankLabelChanged()){
         cmd.append(",`MARKETER_RANK_LABEL`=");
         String marketerRankLabel = unit.marketerRankLabel();
         if(RString.isEmpty(marketerRankLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(marketerRankLabel));
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
      if(unit.isCustomerActionCdChanged()){
         cmd.append(",`CUSTOMER_ACTION_CD`=");
         cmd.append(unit.customerActionCd());
      }
      if(unit.isCustomerActionDateChanged()){
         cmd.append(",`CUSTOMER_ACTION_DATE`=");
         TDateTime customerActionDate = unit.customerActionDate();
         if(customerActionDate == null){
            cmd.append("NULL");
         }else if(customerActionDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(customerActionDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isCustomerActionAmountChanged()){
         cmd.append(",`CUSTOMER_ACTION_AMOUNT`=");
         cmd.append(unit.customerActionAmount());
      }
      if(unit.isCustomerActionInterestChanged()){
         cmd.append(",`CUSTOMER_ACTION_INTEREST`=");
         cmd.append(unit.customerActionInterest());
      }
      if(unit.isCustomerPosDateChanged()){
         cmd.append(",`CUSTOMER_POS_DATE`=");
         TDateTime customerPosDate = unit.customerPosDate();
         if(customerPosDate == null){
            cmd.append("NULL");
         }else if(customerPosDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(customerPosDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isTenderChangedChanged()){
         cmd.append(",`TENDER_CHANGED`=");
         cmd.append(unit.tenderChanged());
      }
      if(unit.isTenderPriorIdChanged()){
         cmd.append(",`TENDER_PRIOR_ID`=");
         long tenderPriorId = unit.tenderPriorId();
         if(tenderPriorId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderPriorId);
         }
      }
      if(unit.isTenderPriorLinkIdChanged()){
         cmd.append(",`TENDER_PRIOR_LINK_ID`=");
         long tenderPriorLinkId = unit.tenderPriorLinkId();
         if(tenderPriorLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(tenderPriorLinkId);
         }
      }
      if(unit.isTenderPriorModelChanged()){
         cmd.append(",`TENDER_PRIOR_MODEL`=");
         String tenderPriorModel = unit.tenderPriorModel();
         if(RString.isEmpty(tenderPriorModel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(tenderPriorModel));
            cmd.append('\'');
         }
      }
      if(unit.isTenderPriorRateChanged()){
         cmd.append(",`TENDER_PRIOR_RATE`=");
         cmd.append(unit.tenderPriorRate());
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
      FStatisticsFinancialDynamicUnit unit = (FStatisticsFinancialDynamicUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
