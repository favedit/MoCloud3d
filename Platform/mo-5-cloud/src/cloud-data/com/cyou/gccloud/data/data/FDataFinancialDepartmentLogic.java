package com.cyou.gccloud.data.data;

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
// <T>金融部门信息逻辑。</T>
//============================================================
@ASourceMachine
public class FDataFinancialDepartmentLogic
      extends FLogicTable
{
   // 金融部门信息的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 金融部门信息的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.financial.department", "DT_FIN_DEPARTMENT");

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

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段名称的定义。
   public final static SLogicFieldInfo NAME = new SLogicFieldInfo("NAME");

   // 字段名称的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段所属公司编号的定义。
   public final static SLogicFieldInfo DEPARTMENT_ID = new SLogicFieldInfo("DEPARTMENT_ID");

   // 字段所属公司名称的定义。
   public final static SLogicFieldInfo DEPARTMENT_LABEL = new SLogicFieldInfo("DEPARTMENT_LABEL");

   // 字段所属区域编号的定义。
   public final static SLogicFieldInfo REGION_ID = new SLogicFieldInfo("REGION_ID");

   // 字段区域名称的定义。
   public final static SLogicFieldInfo REGION_LABEL = new SLogicFieldInfo("REGION_LABEL");

   // 字段级别的定义。
   public final static SLogicFieldInfo LEVEL = new SLogicFieldInfo("LEVEL");

   // 字段负责人编号的定义。
   public final static SLogicFieldInfo LEADER_ID = new SLogicFieldInfo("LEADER_ID");

   // 字段负责人标签的定义。
   public final static SLogicFieldInfo LEADER_LABEL = new SLogicFieldInfo("LEADER_LABEL");

   // 字段负责人电话的定义。
   public final static SLogicFieldInfo LEADER_PHONE = new SLogicFieldInfo("LEADER_PHONE");

   // 字段省份标签编号的定义。
   public final static SLogicFieldInfo PROVINCE_ID = new SLogicFieldInfo("PROVINCE_ID");

   // 字段省份标签的定义。
   public final static SLogicFieldInfo PROVINCE_LABEL = new SLogicFieldInfo("PROVINCE_LABEL");

   // 字段城市编号的定义。
   public final static SLogicFieldInfo CITY_ID = new SLogicFieldInfo("CITY_ID");

   // 字段城市标签的定义。
   public final static SLogicFieldInfo CITY_LABEL = new SLogicFieldInfo("CITY_LABEL");

   // 字段详细地址的定义。
   public final static SLogicFieldInfo DETAIL_ADDRESS = new SLogicFieldInfo("DETAIL_ADDRESS");

   // 字段位置经度的定义。
   public final static SLogicFieldInfo LOCATION_LONGITUDE = new SLogicFieldInfo("LOCATION_LONGITUDE");

   // 字段位置维度的定义。
   public final static SLogicFieldInfo LOCATION_LATITUDE = new SLogicFieldInfo("LOCATION_LATITUDE");

   // 字段部门电话的定义。
   public final static SLogicFieldInfo DEPARTMENT_PHONE = new SLogicFieldInfo("DEPARTMENT_PHONE");

   // 字段建立日期的定义。
   public final static SLogicFieldInfo BUILD_DATE = new SLogicFieldInfo("BUILD_DATE");

   // 字段备注信息的定义。
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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`LINK_PARENT_ID`,`LINK_ID`,`CODE`,`NAME`,`LABEL`,`DEPARTMENT_ID`,`DEPARTMENT_LABEL`,`REGION_ID`,`REGION_LABEL`,`LEVEL`,`LEADER_ID`,`LEADER_LABEL`,`LEADER_PHONE`,`PROVINCE_ID`,`PROVINCE_LABEL`,`CITY_ID`,`CITY_LABEL`,`DETAIL_ADDRESS`,`LOCATION_LONGITUDE`,`LOCATION_LATITUDE`,`DEPARTMENT_PHONE`,`BUILD_DATE`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造金融部门信息逻辑单元。</T>
   //============================================================
   public FDataFinancialDepartmentLogic(){
      _name = TABLE.name();
      _classUnit = FDataFinancialDepartmentUnit.class;
   }

   //============================================================
   // <T>构造金融部门信息逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataFinancialDepartmentLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataFinancialDepartmentUnit.class;
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
      return (T)new FDataFinancialDepartmentUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataFinancialDepartmentUnit>(FDataFinancialDepartmentUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataFinancialDepartmentUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataFinancialDepartmentUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataFinancialDepartmentUnit search(CharSequence whereSql){
      return search(null, FDataFinancialDepartmentUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataFinancialDepartmentUnit> fetchAll(){
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
   public FDataFinancialDepartmentUnit doPrepare(){
      FDataFinancialDepartmentUnit unit = new FDataFinancialDepartmentUnit();
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
      FDataFinancialDepartmentUnit unit = (FDataFinancialDepartmentUnit)logicUnit;
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
      FDataFinancialDepartmentUnit unit = (FDataFinancialDepartmentUnit)logicUnit;
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
      cmd.append(",`CODE`");
      cmd.append(",`NAME`");
      cmd.append(",`LABEL`");
      cmd.append(",`DEPARTMENT_ID`");
      cmd.append(",`DEPARTMENT_LABEL`");
      cmd.append(",`REGION_ID`");
      cmd.append(",`REGION_LABEL`");
      cmd.append(",`LEVEL`");
      cmd.append(",`LEADER_ID`");
      cmd.append(",`LEADER_LABEL`");
      cmd.append(",`LEADER_PHONE`");
      cmd.append(",`PROVINCE_ID`");
      cmd.append(",`PROVINCE_LABEL`");
      cmd.append(",`CITY_ID`");
      cmd.append(",`CITY_LABEL`");
      cmd.append(",`DETAIL_ADDRESS`");
      cmd.append(",`LOCATION_LONGITUDE`");
      cmd.append(",`LOCATION_LATITUDE`");
      cmd.append(",`DEPARTMENT_PHONE`");
      cmd.append(",`BUILD_DATE`");
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
      String code = unit.code();
      if(RString.isEmpty(code)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(code));
         cmd.append('\'');
      }
      cmd.append(',');
      String name = unit.name();
      if(RString.isEmpty(name)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(name));
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
      cmd.append(unit.departmentId());
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
      cmd.append(unit.regionId());
      cmd.append(',');
      String regionLabel = unit.regionLabel();
      if(RString.isEmpty(regionLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(regionLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.level());
      cmd.append(',');
      long leaderId = unit.leaderId();
      if(leaderId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(leaderId);
      }
      cmd.append(',');
      String leaderLabel = unit.leaderLabel();
      if(RString.isEmpty(leaderLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(leaderLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      String leaderPhone = unit.leaderPhone();
      if(RString.isEmpty(leaderPhone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(leaderPhone));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.provinceId());
      cmd.append(',');
      String provinceLabel = unit.provinceLabel();
      if(RString.isEmpty(provinceLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(provinceLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.cityId());
      cmd.append(',');
      String cityLabel = unit.cityLabel();
      if(RString.isEmpty(cityLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(cityLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      String detailAddress = unit.detailAddress();
      if(RString.isEmpty(detailAddress)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(detailAddress));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.locationLongitude());
      cmd.append(',');
      cmd.append(unit.locationLatitude());
      cmd.append(',');
      String departmentPhone = unit.departmentPhone();
      if(RString.isEmpty(departmentPhone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentPhone));
         cmd.append('\'');
      }
      cmd.append(',');
      TDateTime buildDate = unit.buildDate();
      if(buildDate == null){
         cmd.append("NULL");
      }else if(buildDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(buildDate.format());
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
      FDataFinancialDepartmentUnit unit = (FDataFinancialDepartmentUnit)logicUnit;
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
      FDataFinancialDepartmentUnit unit = (FDataFinancialDepartmentUnit)logicUnit;
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
      if(unit.isNameChanged()){
         cmd.append(",`NAME`=");
         String name = unit.name();
         if(RString.isEmpty(name)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(name));
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
      if(unit.isDepartmentIdChanged()){
         cmd.append(",`DEPARTMENT_ID`=");
         cmd.append(unit.departmentId());
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
      if(unit.isRegionIdChanged()){
         cmd.append(",`REGION_ID`=");
         cmd.append(unit.regionId());
      }
      if(unit.isRegionLabelChanged()){
         cmd.append(",`REGION_LABEL`=");
         String regionLabel = unit.regionLabel();
         if(RString.isEmpty(regionLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(regionLabel));
            cmd.append('\'');
         }
      }
      if(unit.isLevelChanged()){
         cmd.append(",`LEVEL`=");
         cmd.append(unit.level());
      }
      if(unit.isLeaderIdChanged()){
         cmd.append(",`LEADER_ID`=");
         long leaderId = unit.leaderId();
         if(leaderId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(leaderId);
         }
      }
      if(unit.isLeaderLabelChanged()){
         cmd.append(",`LEADER_LABEL`=");
         String leaderLabel = unit.leaderLabel();
         if(RString.isEmpty(leaderLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(leaderLabel));
            cmd.append('\'');
         }
      }
      if(unit.isLeaderPhoneChanged()){
         cmd.append(",`LEADER_PHONE`=");
         String leaderPhone = unit.leaderPhone();
         if(RString.isEmpty(leaderPhone)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(leaderPhone));
            cmd.append('\'');
         }
      }
      if(unit.isProvinceIdChanged()){
         cmd.append(",`PROVINCE_ID`=");
         cmd.append(unit.provinceId());
      }
      if(unit.isProvinceLabelChanged()){
         cmd.append(",`PROVINCE_LABEL`=");
         String provinceLabel = unit.provinceLabel();
         if(RString.isEmpty(provinceLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(provinceLabel));
            cmd.append('\'');
         }
      }
      if(unit.isCityIdChanged()){
         cmd.append(",`CITY_ID`=");
         cmd.append(unit.cityId());
      }
      if(unit.isCityLabelChanged()){
         cmd.append(",`CITY_LABEL`=");
         String cityLabel = unit.cityLabel();
         if(RString.isEmpty(cityLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(cityLabel));
            cmd.append('\'');
         }
      }
      if(unit.isDetailAddressChanged()){
         cmd.append(",`DETAIL_ADDRESS`=");
         String detailAddress = unit.detailAddress();
         if(RString.isEmpty(detailAddress)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(detailAddress));
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
      if(unit.isDepartmentPhoneChanged()){
         cmd.append(",`DEPARTMENT_PHONE`=");
         String departmentPhone = unit.departmentPhone();
         if(RString.isEmpty(departmentPhone)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentPhone));
            cmd.append('\'');
         }
      }
      if(unit.isBuildDateChanged()){
         cmd.append(",`BUILD_DATE`=");
         TDateTime buildDate = unit.buildDate();
         if(buildDate == null){
            cmd.append("NULL");
         }else if(buildDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(buildDate.format());
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
      FDataFinancialDepartmentUnit unit = (FDataFinancialDepartmentUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
