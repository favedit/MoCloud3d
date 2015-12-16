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
// <T>共通城市手机关联表逻辑。</T>
//============================================================
@ASourceMachine
public class FDataCommonCityMobileLogic
      extends FLogicTable
{
   // 共通城市手机关联表的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 共通城市手机关联表的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.common.city.mobile", "DT_COM_CITY_MOBILE");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段手机号码的定义。
   public final static SLogicFieldInfo PHONE = new SLogicFieldInfo("PHONE");

   // 字段省份的定义。
   public final static SLogicFieldInfo PROVINCE = new SLogicFieldInfo("PROVINCE");

   // 字段城市的定义。
   public final static SLogicFieldInfo CITY = new SLogicFieldInfo("CITY");

   // 字段运营商的定义。
   public final static SLogicFieldInfo OPERATORS = new SLogicFieldInfo("OPERATORS");

   // 字段是否下架的定义。
   public final static SLogicFieldInfo STOCK = new SLogicFieldInfo("STOCK");

   // 字段数量的定义。
   public final static SLogicFieldInfo AMOUNT = new SLogicFieldInfo("AMOUNT");

   // 字段最大价格的定义。
   public final static SLogicFieldInfo MAX_PRICE = new SLogicFieldInfo("MAX_PRICE");

   // 字段最小价格的定义。
   public final static SLogicFieldInfo MIN_PRICE = new SLogicFieldInfo("MIN_PRICE");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`PHONE`,`PROVINCE`,`CITY`,`OPERATORS`,`STOCK`,`AMOUNT`,`MAX_PRICE`,`MIN_PRICE`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造共通城市手机关联表逻辑单元。</T>
   //============================================================
   public FDataCommonCityMobileLogic(){
      _name = TABLE.name();
      _classUnit = FDataCommonCityMobileUnit.class;
   }

   //============================================================
   // <T>构造共通城市手机关联表逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataCommonCityMobileLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataCommonCityMobileUnit.class;
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
      return (T)new FDataCommonCityMobileUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataCommonCityMobileUnit>(FDataCommonCityMobileUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataCommonCityMobileUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataCommonCityMobileUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataCommonCityMobileUnit search(CharSequence whereSql){
      return search(null, FDataCommonCityMobileUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataCommonCityMobileUnit> fetchAll(){
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
   public FDataCommonCityMobileUnit doPrepare(){
      FDataCommonCityMobileUnit unit = new FDataCommonCityMobileUnit();
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
      FDataCommonCityMobileUnit unit = (FDataCommonCityMobileUnit)logicUnit;
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
      FDataCommonCityMobileUnit unit = (FDataCommonCityMobileUnit)logicUnit;
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
      cmd.append(",`PHONE`");
      cmd.append(",`PROVINCE`");
      cmd.append(",`CITY`");
      cmd.append(",`OPERATORS`");
      cmd.append(",`STOCK`");
      cmd.append(",`AMOUNT`");
      cmd.append(",`MAX_PRICE`");
      cmd.append(",`MIN_PRICE`");
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
      String phone = unit.phone();
      if(RString.isEmpty(phone)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(phone));
         cmd.append('\'');
      }
      cmd.append(',');
      String province = unit.province();
      if(RString.isEmpty(province)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(province));
         cmd.append('\'');
      }
      cmd.append(',');
      String city = unit.city();
      if(RString.isEmpty(city)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(city));
         cmd.append('\'');
      }
      cmd.append(',');
      String operators = unit.operators();
      if(RString.isEmpty(operators)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(operators));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.stock());
      cmd.append(',');
      cmd.append(unit.amount());
      cmd.append(',');
      cmd.append(unit.maxPrice());
      cmd.append(',');
      cmd.append(unit.minPrice());
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
      FDataCommonCityMobileUnit unit = (FDataCommonCityMobileUnit)logicUnit;
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
      FDataCommonCityMobileUnit unit = (FDataCommonCityMobileUnit)logicUnit;
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
      if(unit.isProvinceChanged()){
         cmd.append(",`PROVINCE`=");
         String province = unit.province();
         if(RString.isEmpty(province)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(province));
            cmd.append('\'');
         }
      }
      if(unit.isCityChanged()){
         cmd.append(",`CITY`=");
         String city = unit.city();
         if(RString.isEmpty(city)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(city));
            cmd.append('\'');
         }
      }
      if(unit.isOperatorsChanged()){
         cmd.append(",`OPERATORS`=");
         String operators = unit.operators();
         if(RString.isEmpty(operators)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(operators));
            cmd.append('\'');
         }
      }
      if(unit.isStockChanged()){
         cmd.append(",`STOCK`=");
         cmd.append(unit.stock());
      }
      if(unit.isAmountChanged()){
         cmd.append(",`AMOUNT`=");
         cmd.append(unit.amount());
      }
      if(unit.isMaxPriceChanged()){
         cmd.append(",`MAX_PRICE`=");
         cmd.append(unit.maxPrice());
      }
      if(unit.isMinPriceChanged()){
         cmd.append(",`MIN_PRICE`=");
         cmd.append(unit.minPrice());
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
      FDataCommonCityMobileUnit unit = (FDataCommonCityMobileUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
