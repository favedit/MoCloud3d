package org.mo.cloud.data.calculate;

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
// <T>公司业绩逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitAchievementsDepartmentLogic
      extends FLogicTable
{
   // 公司业绩的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 公司业绩的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.cockpit.achievements.department", "CL_COK_ACHIEVEMENTS_DEPARTMENT");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段部门编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_ID = new SLogicFieldInfo("DEPARTMENT_ID");

   // 字段e租宝部门编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_LID = new SLogicFieldInfo("DEPARTMENT_LID");

   // 字段部门名称的定义。
   public final static SLogicFieldInfo DEPARTMENT_LABEL = new SLogicFieldInfo("DEPARTMENT_LABEL");

   // 字段投资总额的定义。
   public final static SLogicFieldInfo INVESTMENT_TOTAL = new SLogicFieldInfo("INVESTMENT_TOTAL");

   // 字段净投总额的定义。
   public final static SLogicFieldInfo NETINVESTMENT_TOTAL = new SLogicFieldInfo("NETINVESTMENT_TOTAL");

   // 字段业绩总额的定义。
   public final static SLogicFieldInfo PERFORMANCE_TOTAL = new SLogicFieldInfo("PERFORMANCE_TOTAL");

   // 字段扩充字段的定义。
   public final static SLogicFieldInfo PROPERTY1 = new SLogicFieldInfo("PROPERTY1");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`DEPARTMENT_ID`,`DEPARTMENT_LID`,`DEPARTMENT_LABEL`,`INVESTMENT_TOTAL`,`NETINVESTMENT_TOTAL`,`PERFORMANCE_TOTAL`,`PROPERTY1`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造公司业绩逻辑单元。</T>
   //============================================================
   public FCalculateCockpitAchievementsDepartmentLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateCockpitAchievementsDepartmentUnit.class;
   }

   //============================================================
   // <T>构造公司业绩逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateCockpitAchievementsDepartmentLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateCockpitAchievementsDepartmentUnit.class;
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
      return (T)new FCalculateCockpitAchievementsDepartmentUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit>(FCalculateCockpitAchievementsDepartmentUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateCockpitAchievementsDepartmentUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateCockpitAchievementsDepartmentUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateCockpitAchievementsDepartmentUnit search(CharSequence whereSql){
      return search(null, FCalculateCockpitAchievementsDepartmentUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateCockpitAchievementsDepartmentUnit> fetchAll(){
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
   public FCalculateCockpitAchievementsDepartmentUnit doPrepare(){
      FCalculateCockpitAchievementsDepartmentUnit unit = new FCalculateCockpitAchievementsDepartmentUnit();
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
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
      cmd.append(",`DEPARTMENT_ID`");
      cmd.append(",`DEPARTMENT_LID`");
      cmd.append(",`DEPARTMENT_LABEL`");
      cmd.append(",`INVESTMENT_TOTAL`");
      cmd.append(",`NETINVESTMENT_TOTAL`");
      cmd.append(",`PERFORMANCE_TOTAL`");
      cmd.append(",`PROPERTY1`");
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
      long departmentId = unit.departmentId();
      if(departmentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentId);
      }
      cmd.append(',');
      long departmentLid = unit.departmentLid();
      if(departmentLid == 0){
         cmd.append("NULL");
      }else{
         cmd.append(departmentLid);
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
      cmd.append(unit.investmentTotal());
      cmd.append(',');
      cmd.append(unit.netinvestmentTotal());
      cmd.append(',');
      cmd.append(unit.performanceTotal());
      cmd.append(',');
      String property1 = unit.property1();
      if(RString.isEmpty(property1)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(property1));
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
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
      if(unit.isDepartmentIdChanged()){
         cmd.append(",`DEPARTMENT_ID`=");
         long departmentId = unit.departmentId();
         if(departmentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentId);
         }
      }
      if(unit.isDepartmentLidChanged()){
         cmd.append(",`DEPARTMENT_LID`=");
         long departmentLid = unit.departmentLid();
         if(departmentLid == 0){
            cmd.append("NULL");
         }else{
            cmd.append(departmentLid);
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
      if(unit.isInvestmentTotalChanged()){
         cmd.append(",`INVESTMENT_TOTAL`=");
         cmd.append(unit.investmentTotal());
      }
      if(unit.isNetinvestmentTotalChanged()){
         cmd.append(",`NETINVESTMENT_TOTAL`=");
         cmd.append(unit.netinvestmentTotal());
      }
      if(unit.isPerformanceTotalChanged()){
         cmd.append(",`PERFORMANCE_TOTAL`=");
         cmd.append(unit.performanceTotal());
      }
      if(unit.isProperty1Changed()){
         cmd.append(",`PROPERTY1`=");
         String property1 = unit.property1();
         if(RString.isEmpty(property1)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(property1));
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
      FCalculateCockpitAchievementsDepartmentUnit unit = (FCalculateCockpitAchievementsDepartmentUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
