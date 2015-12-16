package com.cyou.gccloud.data.data;

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
// <T>人员用户信息逻辑。</T>
//============================================================
@ASourceMachine
public class FDataPersonUserLogic
      extends FLogicTable
{
   // 人员用户信息的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 人员用户信息的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.person.user", "DT_PSN_USER");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段状态的定义。
   public final static SLogicFieldInfo STATUS_CD = new SLogicFieldInfo("STATUS_CD");

   // 字段帐号的定义。
   public final static SLogicFieldInfo PASSPORT = new SLogicFieldInfo("PASSPORT");

   // 字段密码的定义。
   public final static SLogicFieldInfo PASSWORD = new SLogicFieldInfo("PASSWORD");

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段名称的定义。
   public final static SLogicFieldInfo NAME = new SLogicFieldInfo("NAME");

   // 字段真实名称的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段图标地址的定义。
   public final static SLogicFieldInfo ICON_URL = new SLogicFieldInfo("ICON_URL");

   // 字段联系手机的定义。
   public final static SLogicFieldInfo CONTACT_PHONE = new SLogicFieldInfo("CONTACT_PHONE");

   // 字段联系手机验证的定义。
   public final static SLogicFieldInfo CONTACT_PHONE_VERIFY_CD = new SLogicFieldInfo("CONTACT_PHONE_VERIFY_CD");

   // 字段联系邮件的定义。
   public final static SLogicFieldInfo CONTACT_MAIL = new SLogicFieldInfo("CONTACT_MAIL");

   // 字段联系邮件验证的定义。
   public final static SLogicFieldInfo CONTACT_MAIL_VERIFY_CD = new SLogicFieldInfo("CONTACT_MAIL_VERIFY_CD");

   // 字段身份证号的定义。
   public final static SLogicFieldInfo ID_CARD = new SLogicFieldInfo("ID_CARD");

   // 字段身份证号验证的定义。
   public final static SLogicFieldInfo ID_CARD_VERIFY_CD = new SLogicFieldInfo("ID_CARD_VERIFY_CD");

   // 字段用户权限状态的定义。
   public final static SLogicFieldInfo ROLE_CD = new SLogicFieldInfo("ROLE_CD");

   // 字段角色编号的定义。
   public final static SLogicFieldInfo ROLE_ID = new SLogicFieldInfo("ROLE_ID");

   // 字段等级标签的定义。
   public final static SLogicFieldInfo RANK_LABEL = new SLogicFieldInfo("RANK_LABEL");

   // 字段部门标签集合的定义。
   public final static SLogicFieldInfo DEPARTMENT_LABELS = new SLogicFieldInfo("DEPARTMENT_LABELS");

   // 字段描述的定义。
   public final static SLogicFieldInfo DESCRIPTION = new SLogicFieldInfo("DESCRIPTION");

   // 字段内容的定义。
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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`STATUS_CD`,`PASSPORT`,`PASSWORD`,`CODE`,`NAME`,`LABEL`,`ICON_URL`,`CONTACT_PHONE`,`CONTACT_PHONE_VERIFY_CD`,`CONTACT_MAIL`,`CONTACT_MAIL_VERIFY_CD`,`ID_CARD`,`ID_CARD_VERIFY_CD`,`ROLE_CD`,`ROLE_ID`,`RANK_LABEL`,`DEPARTMENT_LABELS`,`DESCRIPTION`,`CONTENT`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造人员用户信息逻辑单元。</T>
   //============================================================
   public FDataPersonUserLogic(){
      _name = TABLE.name();
      _classUnit = FDataPersonUserUnit.class;
   }

   //============================================================
   // <T>构造人员用户信息逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataPersonUserLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataPersonUserUnit.class;
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
      return (T)new FDataPersonUserUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataPersonUserUnit>(FDataPersonUserUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataPersonUserUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataPersonUserUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataPersonUserUnit search(CharSequence whereSql){
      return search(null, FDataPersonUserUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataPersonUserUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataPersonUserUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataPersonUserUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataPersonUserUnit> fetchAll(){
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
   public FDataPersonUserUnit doPrepare(){
      FDataPersonUserUnit unit = new FDataPersonUserUnit();
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
      FDataPersonUserUnit unit = (FDataPersonUserUnit)logicUnit;
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
      FDataPersonUserUnit unit = (FDataPersonUserUnit)logicUnit;
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
      cmd.append(",`STATUS_CD`");
      cmd.append(",`PASSPORT`");
      cmd.append(",`PASSWORD`");
      cmd.append(",`CODE`");
      cmd.append(",`NAME`");
      cmd.append(",`LABEL`");
      cmd.append(",`ICON_URL`");
      cmd.append(",`CONTACT_PHONE`");
      cmd.append(",`CONTACT_PHONE_VERIFY_CD`");
      cmd.append(",`CONTACT_MAIL`");
      cmd.append(",`CONTACT_MAIL_VERIFY_CD`");
      cmd.append(",`ID_CARD`");
      cmd.append(",`ID_CARD_VERIFY_CD`");
      cmd.append(",`ROLE_CD`");
      cmd.append(",`ROLE_ID`");
      cmd.append(",`RANK_LABEL`");
      cmd.append(",`DEPARTMENT_LABELS`");
      cmd.append(",`DESCRIPTION`");
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
      cmd.append(unit.statusCd());
      cmd.append(',');
      String passport = unit.passport();
      if(RString.isEmpty(passport)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(passport));
         cmd.append('\'');
      }
      cmd.append(',');
      String password = unit.password();
      if(RString.isEmpty(password)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(password));
         cmd.append('\'');
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
      String iconUrl = unit.iconUrl();
      if(RString.isEmpty(iconUrl)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(iconUrl));
         cmd.append('\'');
      }
      cmd.append(',');
      String contactPhone = unit.contactPhone();
      if(RString.isEmpty(contactPhone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(contactPhone));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.contactPhoneVerifyCd());
      cmd.append(',');
      String contactMail = unit.contactMail();
      if(RString.isEmpty(contactMail)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(contactMail));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.contactMailVerifyCd());
      cmd.append(',');
      String idCard = unit.idCard();
      if(RString.isEmpty(idCard)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(idCard));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.idCardVerifyCd());
      cmd.append(',');
      cmd.append(unit.roleCd());
      cmd.append(',');
      long roleId = unit.roleId();
      if(roleId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(roleId);
      }
      cmd.append(',');
      String rankLabel = unit.rankLabel();
      if(RString.isEmpty(rankLabel)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(rankLabel));
         cmd.append('\'');
      }
      cmd.append(',');
      String departmentLabels = unit.departmentLabels();
      if(RString.isEmpty(departmentLabels)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(departmentLabels));
         cmd.append('\'');
      }
      cmd.append(',');
      String description = unit.description();
      if(RString.isEmpty(description)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(description));
         cmd.append('\'');
      }
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
      FDataPersonUserUnit unit = (FDataPersonUserUnit)logicUnit;
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
      FDataPersonUserUnit unit = (FDataPersonUserUnit)logicUnit;
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
      if(unit.isStatusCdChanged()){
         cmd.append(",`STATUS_CD`=");
         cmd.append(unit.statusCd());
      }
      if(unit.isPassportChanged()){
         cmd.append(",`PASSPORT`=");
         String passport = unit.passport();
         if(RString.isEmpty(passport)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(passport));
            cmd.append('\'');
         }
      }
      if(unit.isPasswordChanged()){
         cmd.append(",`PASSWORD`=");
         String password = unit.password();
         if(RString.isEmpty(password)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(password));
            cmd.append('\'');
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
      if(unit.isIconUrlChanged()){
         cmd.append(",`ICON_URL`=");
         String iconUrl = unit.iconUrl();
         if(RString.isEmpty(iconUrl)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(iconUrl));
            cmd.append('\'');
         }
      }
      if(unit.isContactPhoneChanged()){
         cmd.append(",`CONTACT_PHONE`=");
         String contactPhone = unit.contactPhone();
         if(RString.isEmpty(contactPhone)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(contactPhone));
            cmd.append('\'');
         }
      }
      if(unit.isContactPhoneVerifyCdChanged()){
         cmd.append(",`CONTACT_PHONE_VERIFY_CD`=");
         cmd.append(unit.contactPhoneVerifyCd());
      }
      if(unit.isContactMailChanged()){
         cmd.append(",`CONTACT_MAIL`=");
         String contactMail = unit.contactMail();
         if(RString.isEmpty(contactMail)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(contactMail));
            cmd.append('\'');
         }
      }
      if(unit.isContactMailVerifyCdChanged()){
         cmd.append(",`CONTACT_MAIL_VERIFY_CD`=");
         cmd.append(unit.contactMailVerifyCd());
      }
      if(unit.isIdCardChanged()){
         cmd.append(",`ID_CARD`=");
         String idCard = unit.idCard();
         if(RString.isEmpty(idCard)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(idCard));
            cmd.append('\'');
         }
      }
      if(unit.isIdCardVerifyCdChanged()){
         cmd.append(",`ID_CARD_VERIFY_CD`=");
         cmd.append(unit.idCardVerifyCd());
      }
      if(unit.isRoleCdChanged()){
         cmd.append(",`ROLE_CD`=");
         cmd.append(unit.roleCd());
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
      if(unit.isRankLabelChanged()){
         cmd.append(",`RANK_LABEL`=");
         String rankLabel = unit.rankLabel();
         if(RString.isEmpty(rankLabel)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(rankLabel));
            cmd.append('\'');
         }
      }
      if(unit.isDepartmentLabelsChanged()){
         cmd.append(",`DEPARTMENT_LABELS`=");
         String departmentLabels = unit.departmentLabels();
         if(RString.isEmpty(departmentLabels)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(departmentLabels));
            cmd.append('\'');
         }
      }
      if(unit.isDescriptionChanged()){
         cmd.append(",`DESCRIPTION`=");
         String description = unit.description();
         if(RString.isEmpty(description)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(description));
            cmd.append('\'');
         }
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
      FDataPersonUserUnit unit = (FDataPersonUserUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
