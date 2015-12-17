package org.mo.cloud.data.cache;

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
// <T>系统会话表逻辑。</T>
//============================================================
@ASourceMachine
public class FCacheSystemSessionLogic
      extends FLogicTable
{
   // 系统会话表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("cache");

   // 系统会话表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("cache.system.session", "CC_SYS_SESSION");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段逻辑代码的定义。
   public final static SLogicFieldInfo LOGIC_CODE = new SLogicFieldInfo("LOGIC_CODE");

   // 字段来源方式的定义。
   public final static SLogicFieldInfo FROM_CD = new SLogicFieldInfo("FROM_CD");

   // 字段来源代码的定义。
   public final static SLogicFieldInfo FROM_CODE = new SLogicFieldInfo("FROM_CODE");

   // 字段会话代码的定义。
   public final static SLogicFieldInfo SESSION_CODE = new SLogicFieldInfo("SESSION_CODE");

   // 字段用户编号的定义。
   public final static SLogicFieldInfo USER_ID = new SLogicFieldInfo("USER_ID");

   // 字段角色标签的定义。
   public final static SLogicFieldInfo USER_LABEL = new SLogicFieldInfo("USER_LABEL");

   // 字段角色编号的定义。
   public final static SLogicFieldInfo ROLE_ID = new SLogicFieldInfo("ROLE_ID");

   // 字段角色代码的定义。
   public final static SLogicFieldInfo ROLE_CODE = new SLogicFieldInfo("ROLE_CODE");

   // 字段角色模块集合的定义。
   public final static SLogicFieldInfo ROLE_MODULES = new SLogicFieldInfo("ROLE_MODULES");

   // 字段位置经度的定义。
   public final static SLogicFieldInfo LOCATION_LONGITUDE = new SLogicFieldInfo("LOCATION_LONGITUDE");

   // 字段位置纬度的定义。
   public final static SLogicFieldInfo LOCATION_LATITUDE = new SLogicFieldInfo("LOCATION_LATITUDE");

   // 字段项目编号的定义。
   public final static SLogicFieldInfo PROJECT_ID = new SLogicFieldInfo("PROJECT_ID");

   // 字段应用编号的定义。
   public final static SLogicFieldInfo APPLICATION_ID = new SLogicFieldInfo("APPLICATION_ID");

   // 字段参数集合的定义。
   public final static SLogicFieldInfo PARAMETERS = new SLogicFieldInfo("PARAMETERS");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LOGIC_CODE`,`FROM_CD`,`FROM_CODE`,`SESSION_CODE`,`USER_ID`,`USER_LABEL`,`ROLE_ID`,`ROLE_CODE`,`ROLE_MODULES`,`LOCATION_LONGITUDE`,`LOCATION_LATITUDE`,`PROJECT_ID`,`APPLICATION_ID`,`PARAMETERS`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造系统会话表逻辑单元。</T>
   //============================================================
   public FCacheSystemSessionLogic(){
      _name = TABLE.name();
      _classUnit = FCacheSystemSessionUnit.class;
   }

   //============================================================
   // <T>构造系统会话表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCacheSystemSessionLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCacheSystemSessionUnit.class;
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
      return (T)new FCacheSystemSessionUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCacheSystemSessionUnit>(FCacheSystemSessionUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCacheSystemSessionUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCacheSystemSessionUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCacheSystemSessionUnit search(CharSequence whereSql){
      return search(null, FCacheSystemSessionUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCacheSystemSessionUnit> fetch(int pageSize,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCacheSystemSessionUnit> fetchAll(){
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
   public FCacheSystemSessionUnit doPrepare(){
      FCacheSystemSessionUnit unit = new FCacheSystemSessionUnit();
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
      FCacheSystemSessionUnit unit = (FCacheSystemSessionUnit)logicUnit;
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
      FCacheSystemSessionUnit unit = (FCacheSystemSessionUnit)logicUnit;
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
      cmd.append(",`LOGIC_CODE`");
      cmd.append(",`FROM_CD`");
      cmd.append(",`FROM_CODE`");
      cmd.append(",`SESSION_CODE`");
      cmd.append(",`USER_ID`");
      cmd.append(",`USER_LABEL`");
      cmd.append(",`ROLE_ID`");
      cmd.append(",`ROLE_CODE`");
      cmd.append(",`ROLE_MODULES`");
      cmd.append(",`LOCATION_LONGITUDE`");
      cmd.append(",`LOCATION_LATITUDE`");
      cmd.append(",`PROJECT_ID`");
      cmd.append(",`APPLICATION_ID`");
      cmd.append(",`PARAMETERS`");
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
      String logicCode = unit.logicCode();
      if(RString.isEmpty(logicCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(logicCode));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.fromCd());
      cmd.append(',');
      String fromCode = unit.fromCode();
      if(RString.isEmpty(fromCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(fromCode));
         cmd.append('\'');
      }
      cmd.append(',');
      String sessionCode = unit.sessionCode();
      if(RString.isEmpty(sessionCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(sessionCode));
         cmd.append('\'');
      }
      cmd.append(',');
      long userId = unit.userId();
      if(userId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(userId);
      }
      cmd.append(',');
      String userLabel = unit.userLabel();
      if(RString.isEmpty(userLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(userLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      long roleId = unit.roleId();
      if(roleId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(roleId);
      }
      cmd.append(',');
      String roleCode = unit.roleCode();
      if(RString.isEmpty(roleCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(roleCode));
         cmd.append('\'');
      }
      cmd.append(',');
      String roleModules = unit.roleModules();
      if(RString.isEmpty(roleModules)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(roleModules));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.locationLongitude());
      cmd.append(',');
      cmd.append(unit.locationLatitude());
      cmd.append(',');
      long projectId = unit.projectId();
      if(projectId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(projectId);
      }
      cmd.append(',');
      long applicationId = unit.applicationId();
      if(applicationId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(applicationId);
      }
      cmd.append(',');
      String parameters = unit.parameters();
      if(RString.isEmpty(parameters)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(parameters));
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
      FCacheSystemSessionUnit unit = (FCacheSystemSessionUnit)logicUnit;
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
      FCacheSystemSessionUnit unit = (FCacheSystemSessionUnit)logicUnit;
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
      if(unit.isLogicCodeChanged()){
         cmd.append(",`LOGIC_CODE`=");
         String logicCode = unit.logicCode();
         if(RString.isEmpty(logicCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(logicCode));
            cmd.append('\'');
         }
      }
      if(unit.isFromCdChanged()){
         cmd.append(",`FROM_CD`=");
         cmd.append(unit.fromCd());
      }
      if(unit.isFromCodeChanged()){
         cmd.append(",`FROM_CODE`=");
         String fromCode = unit.fromCode();
         if(RString.isEmpty(fromCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(fromCode));
            cmd.append('\'');
         }
      }
      if(unit.isSessionCodeChanged()){
         cmd.append(",`SESSION_CODE`=");
         String sessionCode = unit.sessionCode();
         if(RString.isEmpty(sessionCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(sessionCode));
            cmd.append('\'');
         }
      }
      if(unit.isUserIdChanged()){
         cmd.append(",`USER_ID`=");
         long userId = unit.userId();
         if(userId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(userId);
         }
      }
      if(unit.isUserLabelChanged()){
         cmd.append(",`USER_LABEL`=");
         String userLabel = unit.userLabel();
         if(RString.isEmpty(userLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(userLabel));
            cmd.append('\'');
         }
      }
      if(unit.isRoleIdChanged()){
         cmd.append(",`ROLE_ID`=");
         long roleId = unit.roleId();
         if(roleId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(roleId);
         }
      }
      if(unit.isRoleCodeChanged()){
         cmd.append(",`ROLE_CODE`=");
         String roleCode = unit.roleCode();
         if(RString.isEmpty(roleCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(roleCode));
            cmd.append('\'');
         }
      }
      if(unit.isRoleModulesChanged()){
         cmd.append(",`ROLE_MODULES`=");
         String roleModules = unit.roleModules();
         if(RString.isEmpty(roleModules)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(roleModules));
            cmd.append('\'');
         }
      }
      if(unit.isLocationLongitudeChanged()){
         cmd.append(",`LOCATION_LONGITUDE`=");
         cmd.append(unit.locationLongitude());
      }
      if(unit.isLocationLatitudeChanged()){
         cmd.append(",`LOCATION_LATITUDE`=");
         cmd.append(unit.locationLatitude());
      }
      if(unit.isProjectIdChanged()){
         cmd.append(",`PROJECT_ID`=");
         long projectId = unit.projectId();
         if(projectId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(projectId);
         }
      }
      if(unit.isApplicationIdChanged()){
         cmd.append(",`APPLICATION_ID`=");
         long applicationId = unit.applicationId();
         if(applicationId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(applicationId);
         }
      }
      if(unit.isParametersChanged()){
         cmd.append(",`PARAMETERS`=");
         String parameters = unit.parameters();
         if(RString.isEmpty(parameters)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(parameters));
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
      FCacheSystemSessionUnit unit = (FCacheSystemSessionUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
