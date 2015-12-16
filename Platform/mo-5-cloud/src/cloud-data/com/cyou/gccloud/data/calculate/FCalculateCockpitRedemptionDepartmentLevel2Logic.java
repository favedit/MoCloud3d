package com.cyou.gccloud.data.calculate;

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
// <T>子分公司赎回统计逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitRedemptionDepartmentLevel2Logic
      extends FLogicTable
{
   // 子分公司赎回统计的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 子分公司赎回统计的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.cockpit.redemption.department.level2", "CL_COK_REDEMPTION_DEPARTMENT_LEVEL2");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段子公司编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LID = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LID");

   // 字段子公司名称的定义。
   public final static SLogicFieldInfo DEPARTMENT_LEVEL2_LABEL = new SLogicFieldInfo("DEPARTMENT_LEVEL2_LABEL");

   // 字段投资总额的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段投资人数的定义。
   public final static SLogicFieldInfo INVESTMENT_PEOPLE = new SLogicFieldInfo("INVESTMENT_PEOPLE");

   // 字段投资人均金额的定义。
   public final static SLogicFieldInfo INVESTMENT_PER_AVG_MONEY = new SLogicFieldInfo("INVESTMENT_PER_AVG_MONEY");

   // 字段赎回总额的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段赎回人数的定义。
   public final static SLogicFieldInfo REDEMPTION_PEOPLE = new SLogicFieldInfo("REDEMPTION_PEOPLE");

   // 字段赎回人均金额的定义。
   public final static SLogicFieldInfo REDEMPTION_PER_AVG_MONEY = new SLogicFieldInfo("REDEMPTION_PER_AVG_MONEY");

   // 字段理财师赎回总额的定义。
   public final static SLogicFieldInfo MARKETER_REDEMPTION_TOTAL = new SLogicFieldInfo("MARKETER_REDEMPTION_TOTAL");

   // 字段理财师赎回人数的定义。
   public final static SLogicFieldInfo MARKETER_REDEMPTION_PEOPLE = new SLogicFieldInfo("MARKETER_REDEMPTION_PEOPLE");

   // 字段理财师人均赎回金额的定义。
   public final static SLogicFieldInfo MARKETER_REDEMPTION_PER_AVG_MONEY = new SLogicFieldInfo("MARKETER_REDEMPTION_PER_AVG_MONEY");

   // 字段参数1的定义。
   public final static SLogicFieldInfo PARAMETER1 = new SLogicFieldInfo("PARAMETER1");

   // 字段参数2的定义。
   public final static SLogicFieldInfo PARAMETER2 = new SLogicFieldInfo("PARAMETER2");

   // 字段参数3的定义。
   public final static SLogicFieldInfo PARAMETER3 = new SLogicFieldInfo("PARAMETER3");

   // 字段日期的定义。
   public final static SLogicFieldInfo RECORD_TIME = new SLogicFieldInfo("RECORD_TIME");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`DEPARTMENT_LEVEL2_LID`,`DEPARTMENT_LEVEL2_LABEL`,`INVESTMENT_TOTAL`,`INVESTMENT_PEOPLE`,`INVESTMENT_PER_AVG_MONEY`,`REDEMPTION_TOTAL`,`REDEMPTION_PEOPLE`,`REDEMPTION_PER_AVG_MONEY`,`MARKETER_REDEMPTION_TOTAL`,`MARKETER_REDEMPTION_PEOPLE`,`MARKETER_REDEMPTION_PER_AVG_MONEY`,`PARAMETER1`,`PARAMETER2`,`PARAMETER3`,`RECORD_TIME`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造子分公司赎回统计逻辑单元。</T>
   //============================================================
   public FCalculateCockpitRedemptionDepartmentLevel2Logic(){
      _name = TABLE.name();
      _classUnit = FCalculateCockpitRedemptionDepartmentLevel2Unit.class;
   }

   //============================================================
   // <T>构造子分公司赎回统计逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateCockpitRedemptionDepartmentLevel2Logic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateCockpitRedemptionDepartmentLevel2Unit.class;
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
      return (T)new FCalculateCockpitRedemptionDepartmentLevel2Unit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit>(FCalculateCockpitRedemptionDepartmentLevel2Unit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateCockpitRedemptionDepartmentLevel2Unit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateCockpitRedemptionDepartmentLevel2Unit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateCockpitRedemptionDepartmentLevel2Unit search(CharSequence whereSql){
      return search(null, FCalculateCockpitRedemptionDepartmentLevel2Unit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateCockpitRedemptionDepartmentLevel2Unit> fetchAll(){
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
   public FCalculateCockpitRedemptionDepartmentLevel2Unit doPrepare(){
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = new FCalculateCockpitRedemptionDepartmentLevel2Unit();
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
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
      cmd.append(",`DEPARTMENT_LEVEL2_LID`");
      cmd.append(",`DEPARTMENT_LEVEL2_LABEL`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`INVESTMENT_PEOPLE`");
      cmd.append(",`INVESTMENT_PER_AVG_MONEY`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`REDEMPTION_PEOPLE`");
      cmd.append(",`REDEMPTION_PER_AVG_MONEY`");
      cmd.append(",`MARKETER_REDEMPTION_TOTAL`");
      cmd.append(",`MARKETER_REDEMPTION_PEOPLE`");
      cmd.append(",`MARKETER_REDEMPTION_PER_AVG_MONEY`");
      cmd.append(",`PARAMETER1`");
      cmd.append(",`PARAMETER2`");
      cmd.append(",`PARAMETER3`");
      cmd.append(",`RECORD_TIME`");
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
      long departmentLevel2Lid = unit.departmentLevel2Lid();
      if(departmentLevel2Lid == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLevel2Lid);
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
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.investmentPeople());
      cmd.append(',');
      cmd.append(unit.investmentPerAvgMoney());
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.redemptionPeople());
      cmd.append(',');
      cmd.append(unit.redemptionPerAvgMoney());
      cmd.append(',');
      cmd.append(unit.marketerRedemptionTotal());
      cmd.append(',');
      cmd.append(unit.marketerRedemptionPeople());
      cmd.append(',');
      cmd.append(unit.marketerRedemptionPerAvgMoney());
      cmd.append(',');
      String parameter1 = unit.parameter1();
      if(RString.isEmpty(parameter1)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(parameter1));
         cmd.append('\'');
      }
      cmd.append(',');
      String parameter2 = unit.parameter2();
      if(RString.isEmpty(parameter2)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(parameter2));
         cmd.append('\'');
      }
      cmd.append(',');
      String parameter3 = unit.parameter3();
      if(RString.isEmpty(parameter3)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(parameter3));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime recordTime = unit.recordTime();
      if(recordTime == null){
         cmd.append("NULL");
      }else if(recordTime.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordTime.format());
         cmd.append("','%Y%m%d%H%i%s')");
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
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
      if(unit.isDepartmentLevel2LidChanged()){
         cmd.append(",`DEPARTMENT_LEVEL2_LID`=");
         long departmentLevel2Lid = unit.departmentLevel2Lid();
         if(departmentLevel2Lid == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLevel2Lid);
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
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isInvestmentPeopleChanged()){
         cmd.append(",`INVESTMENT_PEOPLE`=");
         cmd.append(unit.investmentPeople());
      }
      if(unit.isInvestmentPerAvgMoneyChanged()){
         cmd.append(",`INVESTMENT_PER_AVG_MONEY`=");
         cmd.append(unit.investmentPerAvgMoney());
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isRedemptionPeopleChanged()){
         cmd.append(",`REDEMPTION_PEOPLE`=");
         cmd.append(unit.redemptionPeople());
      }
      if(unit.isRedemptionPerAvgMoneyChanged()){
         cmd.append(",`REDEMPTION_PER_AVG_MONEY`=");
         cmd.append(unit.redemptionPerAvgMoney());
      }
      if(unit.isMarketerRedemptionTotalChanged()){
         cmd.append(",`MARKETER_REDEMPTION_TOTAL`=");
         cmd.append(unit.marketerRedemptionTotal());
      }
      if(unit.isMarketerRedemptionPeopleChanged()){
         cmd.append(",`MARKETER_REDEMPTION_PEOPLE`=");
         cmd.append(unit.marketerRedemptionPeople());
      }
      if(unit.isMarketerRedemptionPerAvgMoneyChanged()){
         cmd.append(",`MARKETER_REDEMPTION_PER_AVG_MONEY`=");
         cmd.append(unit.marketerRedemptionPerAvgMoney());
      }
      if(unit.isParameter1Changed()){
         cmd.append(",`PARAMETER1`=");
         String parameter1 = unit.parameter1();
         if(RString.isEmpty(parameter1)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(parameter1));
            cmd.append('\'');
         }
      }
      if(unit.isParameter2Changed()){
         cmd.append(",`PARAMETER2`=");
         String parameter2 = unit.parameter2();
         if(RString.isEmpty(parameter2)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(parameter2));
            cmd.append('\'');
         }
      }
      if(unit.isParameter3Changed()){
         cmd.append(",`PARAMETER3`=");
         String parameter3 = unit.parameter3();
         if(RString.isEmpty(parameter3)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(parameter3));
            cmd.append('\'');
         }
      }
      if(unit.isRecordTimeChanged()){
         cmd.append(",`RECORD_TIME`=");
         TDateTime recordTime = unit.recordTime();
         if(recordTime == null){
            cmd.append("NULL");
         }else if(recordTime.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordTime.format());
            cmd.append("','%Y%m%d%H%i%s')");
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
      FCalculateCockpitRedemptionDepartmentLevel2Unit unit = (FCalculateCockpitRedemptionDepartmentLevel2Unit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
