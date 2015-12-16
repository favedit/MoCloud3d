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
// <T>离职再入职逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitReentryLogic
      extends FLogicTable
{
   // 离职再入职的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 离职再入职的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.cockpit.reentry", "CL_COK_REENTRY");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段员工编号的定义。
   public final static SLogicFieldInfo EMPLOYEE_ID = new SLogicFieldInfo("EMPLOYEE_ID");

   // 字段e租宝员工编号的定义。
   public final static SLogicFieldInfo EMPLOYEE_LID = new SLogicFieldInfo("EMPLOYEE_LID");

   // 字段员工名称的定义。
   public final static SLogicFieldInfo EMPLOYEE_LABEL = new SLogicFieldInfo("EMPLOYEE_LABEL");

   // 字段离职部门编号的定义。
   public final static SLogicFieldInfo LEAVE_DEPARTMENT_ID = new SLogicFieldInfo("LEAVE_DEPARTMENT_ID");

   // 字段e租宝离职部门编号的定义。
   public final static SLogicFieldInfo LEAVE_DEPARTMENT_LID = new SLogicFieldInfo("LEAVE_DEPARTMENT_LID");

   // 字段离职部门名称的定义。
   public final static SLogicFieldInfo LEAVE_DEPARTMENT_LABEL = new SLogicFieldInfo("LEAVE_DEPARTMENT_LABEL");

   // 字段离职时间的定义。
   public final static SLogicFieldInfo LEAVE_DEPARTMENT_DATE = new SLogicFieldInfo("LEAVE_DEPARTMENT_DATE");

   // 字段入职部门编号的定义。
   public final static SLogicFieldInfo REENTRY_DEPARTMENT_ID = new SLogicFieldInfo("REENTRY_DEPARTMENT_ID");

   // 字段e租宝再入职部门编号的定义。
   public final static SLogicFieldInfo REENTRY_DEPARTMENT_LID = new SLogicFieldInfo("REENTRY_DEPARTMENT_LID");

   // 字段再入职部门名称的定义。
   public final static SLogicFieldInfo REENTRY_DEPARTMENT_LABEL = new SLogicFieldInfo("REENTRY_DEPARTMENT_LABEL");

   // 字段再入职时间的定义。
   public final static SLogicFieldInfo REENTRY_DEPARTMENT_DATE = new SLogicFieldInfo("REENTRY_DEPARTMENT_DATE");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`EMPLOYEE_ID`,`EMPLOYEE_LID`,`EMPLOYEE_LABEL`,`LEAVE_DEPARTMENT_ID`,`LEAVE_DEPARTMENT_LID`,`LEAVE_DEPARTMENT_LABEL`,`LEAVE_DEPARTMENT_DATE`,`REENTRY_DEPARTMENT_ID`,`REENTRY_DEPARTMENT_LID`,`REENTRY_DEPARTMENT_LABEL`,`REENTRY_DEPARTMENT_DATE`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造离职再入职逻辑单元。</T>
   //============================================================
   public FCalculateCockpitReentryLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateCockpitReentryUnit.class;
   }

   //============================================================
   // <T>构造离职再入职逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateCockpitReentryLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateCockpitReentryUnit.class;
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
      return (T)new FCalculateCockpitReentryUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateCockpitReentryUnit>(FCalculateCockpitReentryUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateCockpitReentryUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateCockpitReentryUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateCockpitReentryUnit search(CharSequence whereSql){
      return search(null, FCalculateCockpitReentryUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateCockpitReentryUnit> fetchAll(){
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
   public FCalculateCockpitReentryUnit doPrepare(){
      FCalculateCockpitReentryUnit unit = new FCalculateCockpitReentryUnit();
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
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
      cmd.append(",`EMPLOYEE_ID`");
      cmd.append(",`EMPLOYEE_LID`");
      cmd.append(",`EMPLOYEE_LABEL`");
      cmd.append(",`LEAVE_DEPARTMENT_ID`");
      cmd.append(",`LEAVE_DEPARTMENT_LID`");
      cmd.append(",`LEAVE_DEPARTMENT_LABEL`");
      cmd.append(",`LEAVE_DEPARTMENT_DATE`");
      cmd.append(",`REENTRY_DEPARTMENT_ID`");
      cmd.append(",`REENTRY_DEPARTMENT_LID`");
      cmd.append(",`REENTRY_DEPARTMENT_LABEL`");
      cmd.append(",`REENTRY_DEPARTMENT_DATE`");
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
      long employeeId = unit.employeeId();
      if(employeeId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(employeeId);
      }
      cmd.append(',');
      long employeeLid = unit.employeeLid();
      if(employeeLid == 0){
         cmd.append("NULL");
      }else{
         cmd.append(employeeLid);
      }
      cmd.append(',');
      String employeeLabel = unit.employeeLabel();
      if(RString.isEmpty(employeeLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(employeeLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      long leaveDepartmentId = unit.leaveDepartmentId();
      if(leaveDepartmentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(leaveDepartmentId);
      }
      cmd.append(',');
      long leaveDepartmentLid = unit.leaveDepartmentLid();
      if(leaveDepartmentLid == 0){
         cmd.append("NULL");
      }else{
         cmd.append(leaveDepartmentLid);
      }
      cmd.append(',');
      String leaveDepartmentLabel = unit.leaveDepartmentLabel();
      if(RString.isEmpty(leaveDepartmentLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(leaveDepartmentLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime leaveDepartmentDate = unit.leaveDepartmentDate();
      if(leaveDepartmentDate == null){
         cmd.append("NULL");
      }else if(leaveDepartmentDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(leaveDepartmentDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      long reentryDepartmentId = unit.reentryDepartmentId();
      if(reentryDepartmentId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(reentryDepartmentId);
      }
      cmd.append(',');
      long reentryDepartmentLid = unit.reentryDepartmentLid();
      if(reentryDepartmentLid == 0){
         cmd.append("NULL");
      }else{
         cmd.append(reentryDepartmentLid);
      }
      cmd.append(',');
      String reentryDepartmentLabel = unit.reentryDepartmentLabel();
      if(RString.isEmpty(reentryDepartmentLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(reentryDepartmentLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime reentryDepartmentDate = unit.reentryDepartmentDate();
      if(reentryDepartmentDate == null){
         cmd.append("NULL");
      }else if(reentryDepartmentDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(reentryDepartmentDate.format());
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
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
      if(unit.isEmployeeIdChanged()){
         cmd.append(",`EMPLOYEE_ID`=");
         long employeeId = unit.employeeId();
         if(employeeId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(employeeId);
         }
      }
      if(unit.isEmployeeLidChanged()){
         cmd.append(",`EMPLOYEE_LID`=");
         long employeeLid = unit.employeeLid();
         if(employeeLid == 0){
            cmd.append("NULL");
         }else{
            cmd.append(employeeLid);
         }
      }
      if(unit.isEmployeeLabelChanged()){
         cmd.append(",`EMPLOYEE_LABEL`=");
         String employeeLabel = unit.employeeLabel();
         if(RString.isEmpty(employeeLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(employeeLabel));
            cmd.append('\'');
         }
      }
      if(unit.isLeaveDepartmentIdChanged()){
         cmd.append(",`LEAVE_DEPARTMENT_ID`=");
         long leaveDepartmentId = unit.leaveDepartmentId();
         if(leaveDepartmentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(leaveDepartmentId);
         }
      }
      if(unit.isLeaveDepartmentLidChanged()){
         cmd.append(",`LEAVE_DEPARTMENT_LID`=");
         long leaveDepartmentLid = unit.leaveDepartmentLid();
         if(leaveDepartmentLid == 0){
            cmd.append("NULL");
         }else{
            cmd.append(leaveDepartmentLid);
         }
      }
      if(unit.isLeaveDepartmentLabelChanged()){
         cmd.append(",`LEAVE_DEPARTMENT_LABEL`=");
         String leaveDepartmentLabel = unit.leaveDepartmentLabel();
         if(RString.isEmpty(leaveDepartmentLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(leaveDepartmentLabel));
            cmd.append('\'');
         }
      }
      if(unit.isLeaveDepartmentDateChanged()){
         cmd.append(",`LEAVE_DEPARTMENT_DATE`=");
         TDateTime leaveDepartmentDate = unit.leaveDepartmentDate();
         if(leaveDepartmentDate == null){
            cmd.append("NULL");
         }else if(leaveDepartmentDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(leaveDepartmentDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isReentryDepartmentIdChanged()){
         cmd.append(",`REENTRY_DEPARTMENT_ID`=");
         long reentryDepartmentId = unit.reentryDepartmentId();
         if(reentryDepartmentId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(reentryDepartmentId);
         }
      }
      if(unit.isReentryDepartmentLidChanged()){
         cmd.append(",`REENTRY_DEPARTMENT_LID`=");
         long reentryDepartmentLid = unit.reentryDepartmentLid();
         if(reentryDepartmentLid == 0){
            cmd.append("NULL");
         }else{
            cmd.append(reentryDepartmentLid);
         }
      }
      if(unit.isReentryDepartmentLabelChanged()){
         cmd.append(",`REENTRY_DEPARTMENT_LABEL`=");
         String reentryDepartmentLabel = unit.reentryDepartmentLabel();
         if(RString.isEmpty(reentryDepartmentLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(reentryDepartmentLabel));
            cmd.append('\'');
         }
      }
      if(unit.isReentryDepartmentDateChanged()){
         cmd.append(",`REENTRY_DEPARTMENT_DATE`=");
         TDateTime reentryDepartmentDate = unit.reentryDepartmentDate();
         if(reentryDepartmentDate == null){
            cmd.append("NULL");
         }else if(reentryDepartmentDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(reentryDepartmentDate.format());
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
