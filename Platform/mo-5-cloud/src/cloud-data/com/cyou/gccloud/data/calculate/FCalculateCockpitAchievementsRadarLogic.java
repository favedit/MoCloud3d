package com.cyou.gccloud.data.calculate;

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
// <T>雷达图逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitAchievementsRadarLogic
      extends FLogicTable
{
   // 雷达图的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 雷达图的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.cockpit.achievements.radar", "CL_COK_ACHIEVEMENTS_RADAR");

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

   // 字段部门总体评分的定义。
   public final static SLogicFieldInfo SCORE = new SLogicFieldInfo("SCORE");

   // 字段业绩的定义。
   public final static SLogicFieldInfo PERFORMANCE = new SLogicFieldInfo("PERFORMANCE");

   // 字段人力的定义。
   public final static SLogicFieldInfo MANPOWER = new SLogicFieldInfo("MANPOWER");

   // 字段人均的定义。
   public final static SLogicFieldInfo PERCAPITA = new SLogicFieldInfo("PERCAPITA");

   // 字段任务的定义。
   public final static SLogicFieldInfo TASK = new SLogicFieldInfo("TASK");

   // 字段完成度的定义。
   public final static SLogicFieldInfo COMPLETION_RATE = new SLogicFieldInfo("COMPLETION_RATE");

   // 字段趋势的定义。
   public final static SLogicFieldInfo TREND_CD = new SLogicFieldInfo("TREND_CD");

   // 字段建议的定义。
   public final static SLogicFieldInfo ADVICE = new SLogicFieldInfo("ADVICE");

   // 字段业绩评分的定义。
   public final static SLogicFieldInfo PERFORMANCE_SCORE = new SLogicFieldInfo("PERFORMANCE_SCORE");

   // 字段人力评分的定义。
   public final static SLogicFieldInfo MANPOWER_SCORE = new SLogicFieldInfo("MANPOWER_SCORE");

   // 字段人均评分的定义。
   public final static SLogicFieldInfo PERCAPITA_SCORE = new SLogicFieldInfo("PERCAPITA_SCORE");

   // 字段任务评分的定义。
   public final static SLogicFieldInfo TASK_SCORE = new SLogicFieldInfo("TASK_SCORE");

   // 字段任务评分的定义。
   public final static SLogicFieldInfo TREND_SCORE = new SLogicFieldInfo("TREND_SCORE");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`DEPARTMENT_ID`,`DEPARTMENT_LID`,`DEPARTMENT_LABEL`,`SCORE`,`PERFORMANCE`,`MANPOWER`,`PERCAPITA`,`TASK`,`COMPLETION_RATE`,`TREND_CD`,`ADVICE`,`PERFORMANCE_SCORE`,`MANPOWER_SCORE`,`PERCAPITA_SCORE`,`TASK_SCORE`,`TREND_SCORE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造雷达图逻辑单元。</T>
   //============================================================
   public FCalculateCockpitAchievementsRadarLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateCockpitAchievementsRadarUnit.class;
   }

   //============================================================
   // <T>构造雷达图逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateCockpitAchievementsRadarLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateCockpitAchievementsRadarUnit.class;
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
      return (T)new FCalculateCockpitAchievementsRadarUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateCockpitAchievementsRadarUnit>(FCalculateCockpitAchievementsRadarUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateCockpitAchievementsRadarUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateCockpitAchievementsRadarUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateCockpitAchievementsRadarUnit search(CharSequence whereSql){
      return search(null, FCalculateCockpitAchievementsRadarUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateCockpitAchievementsRadarUnit> fetchAll(){
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
   public FCalculateCockpitAchievementsRadarUnit doPrepare(){
      FCalculateCockpitAchievementsRadarUnit unit = new FCalculateCockpitAchievementsRadarUnit();
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
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
      cmd.append(",`SCORE`");
      cmd.append(",`PERFORMANCE`");
      cmd.append(",`MANPOWER`");
      cmd.append(",`PERCAPITA`");
      cmd.append(",`TASK`");
      cmd.append(",`COMPLETION_RATE`");
      cmd.append(",`TREND_CD`");
      cmd.append(",`ADVICE`");
      cmd.append(",`PERFORMANCE_SCORE`");
      cmd.append(",`MANPOWER_SCORE`");
      cmd.append(",`PERCAPITA_SCORE`");
      cmd.append(",`TASK_SCORE`");
      cmd.append(",`TREND_SCORE`");
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
      cmd.append(unit.score());
      cmd.append(',');
      cmd.append(unit.performance());
      cmd.append(',');
      cmd.append(unit.manpower());
      cmd.append(',');
      cmd.append(unit.percapita());
      cmd.append(',');
      cmd.append(unit.task());
      cmd.append(',');
      cmd.append(unit.completionRate());
      cmd.append(',');
      cmd.append(unit.trendCd());
      cmd.append(',');
      String advice = unit.advice();
      if(RString.isEmpty(advice)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(advice));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.performanceScore());
      cmd.append(',');
      cmd.append(unit.manpowerScore());
      cmd.append(',');
      cmd.append(unit.percapitaScore());
      cmd.append(',');
      cmd.append(unit.taskScore());
      cmd.append(',');
      cmd.append(unit.trendScore());
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
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
      if(unit.isScoreChanged()){
         cmd.append(",`SCORE`=");
         cmd.append(unit.score());
      }
      if(unit.isPerformanceChanged()){
         cmd.append(",`PERFORMANCE`=");
         cmd.append(unit.performance());
      }
      if(unit.isManpowerChanged()){
         cmd.append(",`MANPOWER`=");
         cmd.append(unit.manpower());
      }
      if(unit.isPercapitaChanged()){
         cmd.append(",`PERCAPITA`=");
         cmd.append(unit.percapita());
      }
      if(unit.isTaskChanged()){
         cmd.append(",`TASK`=");
         cmd.append(unit.task());
      }
      if(unit.isCompletionRateChanged()){
         cmd.append(",`COMPLETION_RATE`=");
         cmd.append(unit.completionRate());
      }
      if(unit.isTrendCdChanged()){
         cmd.append(",`TREND_CD`=");
         cmd.append(unit.trendCd());
      }
      if(unit.isAdviceChanged()){
         cmd.append(",`ADVICE`=");
         String advice = unit.advice();
         if(RString.isEmpty(advice)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(advice));
            cmd.append('\'');
         }
      }
      if(unit.isPerformanceScoreChanged()){
         cmd.append(",`PERFORMANCE_SCORE`=");
         cmd.append(unit.performanceScore());
      }
      if(unit.isManpowerScoreChanged()){
         cmd.append(",`MANPOWER_SCORE`=");
         cmd.append(unit.manpowerScore());
      }
      if(unit.isPercapitaScoreChanged()){
         cmd.append(",`PERCAPITA_SCORE`=");
         cmd.append(unit.percapitaScore());
      }
      if(unit.isTaskScoreChanged()){
         cmd.append(",`TASK_SCORE`=");
         cmd.append(unit.taskScore());
      }
      if(unit.isTrendScoreChanged()){
         cmd.append(",`TREND_SCORE`=");
         cmd.append(unit.trendScore());
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
