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
// <T>资源信息表逻辑。</T>
//============================================================
@ASourceMachine
public class FDataResourceResourceLogic
      extends FLogicTable
{
   // 资源信息表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 资源信息表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.resource.resource", "DT_RES_RESOURCE");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段全局唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段用户编号的定义。
   public final static SLogicFieldInfo USER_ID = new SLogicFieldInfo("USER_ID");

   // 字段项目编号的定义。
   public final static SLogicFieldInfo PROJECT_ID = new SLogicFieldInfo("PROJECT_ID");

   // 字段类型编号的定义。
   public final static SLogicFieldInfo TYPE_ID = new SLogicFieldInfo("TYPE_ID");

   // 字段目录编号的定义。
   public final static SLogicFieldInfo CATALOG_ID = new SLogicFieldInfo("CATALOG_ID");

   // 字段资源类型的定义。
   public final static SLogicFieldInfo RESOURCE_CD = new SLogicFieldInfo("RESOURCE_CD");

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段名称的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段分享类型的定义。
   public final static SLogicFieldInfo SHARE_CD = new SLogicFieldInfo("SHARE_CD");

   // 字段图标地址的定义。
   public final static SLogicFieldInfo ICON_URL = new SLogicFieldInfo("ICON_URL");

   // 字段是否有预览的定义。
   public final static SLogicFieldInfo HAS_PREVIEW = new SLogicFieldInfo("HAS_PREVIEW");

   // 字段描述的定义。
   public final static SLogicFieldInfo DESCRIPTION = new SLogicFieldInfo("DESCRIPTION");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`USER_ID`,`PROJECT_ID`,`TYPE_ID`,`CATALOG_ID`,`RESOURCE_CD`,`CODE`,`LABEL`,`SHARE_CD`,`ICON_URL`,`HAS_PREVIEW`,`DESCRIPTION`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造资源信息表逻辑单元。</T>
   //============================================================
   public FDataResourceResourceLogic(){
      _name = TABLE.name();
      _classUnit = FDataResourceResourceUnit.class;
   }

   //============================================================
   // <T>构造资源信息表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataResourceResourceLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataResourceResourceUnit.class;
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
      return (T)new FDataResourceResourceUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataResourceResourceUnit>(FDataResourceResourceUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataResourceResourceUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataResourceResourceUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataResourceResourceUnit search(CharSequence whereSql){
      return search(null, FDataResourceResourceUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataResourceResourceUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataResourceResourceUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataResourceResourceUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataResourceResourceUnit> fetchAll(){
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
   public FDataResourceResourceUnit doPrepare(){
      FDataResourceResourceUnit unit = new FDataResourceResourceUnit();
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
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
      cmd.append(",`USER_ID`");
      cmd.append(",`PROJECT_ID`");
      cmd.append(",`TYPE_ID`");
      cmd.append(",`CATALOG_ID`");
      cmd.append(",`RESOURCE_CD`");
      cmd.append(",`CODE`");
      cmd.append(",`LABEL`");
      cmd.append(",`SHARE_CD`");
      cmd.append(",`ICON_URL`");
      cmd.append(",`HAS_PREVIEW`");
      cmd.append(",`DESCRIPTION`");
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
      long userId = unit.userId();
      if(userId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(userId);
      }
      cmd.append(',');
      long projectId = unit.projectId();
      if(projectId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(projectId);
      }
      cmd.append(',');
      long typeId = unit.typeId();
      if(typeId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(typeId);
      }
      cmd.append(',');
      long catalogId = unit.catalogId();
      if(catalogId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(catalogId);
      }
      cmd.append(',');
      cmd.append(unit.resourceCd());
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
      String label = unit.label();
      if(RString.isEmpty(label)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(label));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.shareCd());
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
      cmd.append(unit.hasPreview());
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
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
      if(unit.isUserIdChanged()){
         cmd.append(",`USER_ID`=");
         long userId = unit.userId();
         if(userId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(userId);
         }
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
      if(unit.isTypeIdChanged()){
         cmd.append(",`TYPE_ID`=");
         long typeId = unit.typeId();
         if(typeId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(typeId);
         }
      }
      if(unit.isCatalogIdChanged()){
         cmd.append(",`CATALOG_ID`=");
         long catalogId = unit.catalogId();
         if(catalogId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(catalogId);
         }
      }
      if(unit.isResourceCdChanged()){
         cmd.append(",`RESOURCE_CD`=");
         cmd.append(unit.resourceCd());
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
      if(unit.isShareCdChanged()){
         cmd.append(",`SHARE_CD`=");
         cmd.append(unit.shareCd());
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
      if(unit.isHasPreviewChanged()){
         cmd.append(",`HAS_PREVIEW`=");
         cmd.append(unit.hasPreview());
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
