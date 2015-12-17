package org.mo.cloud.data.calculate;

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
// <T>城市赎回统计逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitRedemptionCityLogic
      extends FLogicTable
{
   // 城市赎回统计的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 城市赎回统计的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.cockpit.redemption.city", "CL_COK_REDEMPTION_CITY");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段省份代码的定义。
   public final static SLogicFieldInfo PROVINCE_CODE = new SLogicFieldInfo("PROVINCE_CODE");

   // 字段省份中文名称的定义。
   public final static SLogicFieldInfo PROVINCE_LABEL = new SLogicFieldInfo("PROVINCE_LABEL");

   // 字段城市代码的定义。
   public final static SLogicFieldInfo CITY_CODE = new SLogicFieldInfo("CITY_CODE");

   // 字段城市名称的定义。
   public final static SLogicFieldInfo CITY_LABEL = new SLogicFieldInfo("CITY_LABEL");

   // 字段记录时间的定义。
   public final static SLogicFieldInfo RECORD_DATE = new SLogicFieldInfo("RECORD_DATE");

   // 字段赎回总额的定义。
   public final static SLogicFieldInfo REDEMPTION_TOTAL = new SLogicFieldInfo("REDEMPTION_TOTAL");

   // 字段赎回人数的定义。
   public final static SLogicFieldInfo REDEMPTION_USER_COUNT = new SLogicFieldInfo("REDEMPTION_USER_COUNT");

   // 字段人均赎回的定义。
   public final static SLogicFieldInfo PERCAPITA_REDEMPTION = new SLogicFieldInfo("PERCAPITA_REDEMPTION");

   // 字段统计时间的定义。
   public final static SLogicFieldInfo STATISTICAL_TIME = new SLogicFieldInfo("STATISTICAL_TIME");

   // 字段参数1的定义。
   public final static SLogicFieldInfo PARAMETER1 = new SLogicFieldInfo("PARAMETER1");

   // 字段参数2的定义。
   public final static SLogicFieldInfo PARAMETER2 = new SLogicFieldInfo("PARAMETER2");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`PROVINCE_CODE`,`PROVINCE_LABEL`,`CITY_CODE`,`CITY_LABEL`,`RECORD_DATE`,`REDEMPTION_TOTAL`,`REDEMPTION_USER_COUNT`,`PERCAPITA_REDEMPTION`,`STATISTICAL_TIME`,`PARAMETER1`,`PARAMETER2`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造城市赎回统计逻辑单元。</T>
   //============================================================
   public FCalculateCockpitRedemptionCityLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateCockpitRedemptionCityUnit.class;
   }

   //============================================================
   // <T>构造城市赎回统计逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateCockpitRedemptionCityLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateCockpitRedemptionCityUnit.class;
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
      return (T)new FCalculateCockpitRedemptionCityUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateCockpitRedemptionCityUnit>(FCalculateCockpitRedemptionCityUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateCockpitRedemptionCityUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateCockpitRedemptionCityUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateCockpitRedemptionCityUnit search(CharSequence whereSql){
      return search(null, FCalculateCockpitRedemptionCityUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateCockpitRedemptionCityUnit> fetchAll(){
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
   public FCalculateCockpitRedemptionCityUnit doPrepare(){
      FCalculateCockpitRedemptionCityUnit unit = new FCalculateCockpitRedemptionCityUnit();
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
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
      cmd.append(",`PROVINCE_CODE`");
      cmd.append(",`PROVINCE_LABEL`");
      cmd.append(",`CITY_CODE`");
      cmd.append(",`CITY_LABEL`");
      cmd.append(",`RECORD_DATE`");
      cmd.append(",`REDEMPTION_TOTAL`");
      cmd.append(",`REDEMPTION_USER_COUNT`");
      cmd.append(",`PERCAPITA_REDEMPTION`");
      cmd.append(",`STATISTICAL_TIME`");
      cmd.append(",`PARAMETER1`");
      cmd.append(",`PARAMETER2`");
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
      String provinceCode = unit.provinceCode();
      if(RString.isEmpty(provinceCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(provinceCode));
         cmd.append('\'');
      }
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
      String cityCode = unit.cityCode();
      if(RString.isEmpty(cityCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(cityCode));
         cmd.append('\'');
      }
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
      TDateTime recordDate = unit.recordDate();
      if(recordDate == null){
         cmd.append("NULL");
      }else if(recordDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recordDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.redemptionTotal());
      cmd.append(',');
      cmd.append(unit.redemptionUserCount());
      cmd.append(',');
      cmd.append(unit.percapitaRedemption());
      cmd.append(',');
      TDateTime statisticalTime = unit.statisticalTime();
      if(statisticalTime == null){
         cmd.append("NULL");
      }else if(statisticalTime.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(statisticalTime.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
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
      if(unit.isProvinceCodeChanged()){
         cmd.append(",`PROVINCE_CODE`=");
         String provinceCode = unit.provinceCode();
         if(RString.isEmpty(provinceCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(provinceCode));
            cmd.append('\'');
         }
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
      if(unit.isCityCodeChanged()){
         cmd.append(",`CITY_CODE`=");
         String cityCode = unit.cityCode();
         if(RString.isEmpty(cityCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(cityCode));
            cmd.append('\'');
         }
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
      if(unit.isRecordDateChanged()){
         cmd.append(",`RECORD_DATE`=");
         TDateTime recordDate = unit.recordDate();
         if(recordDate == null){
            cmd.append("NULL");
         }else if(recordDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recordDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRedemptionTotalChanged()){
         cmd.append(",`REDEMPTION_TOTAL`=");
         cmd.append(unit.redemptionTotal());
      }
      if(unit.isRedemptionUserCountChanged()){
         cmd.append(",`REDEMPTION_USER_COUNT`=");
         cmd.append(unit.redemptionUserCount());
      }
      if(unit.isPercapitaRedemptionChanged()){
         cmd.append(",`PERCAPITA_REDEMPTION`=");
         cmd.append(unit.percapitaRedemption());
      }
      if(unit.isStatisticalTimeChanged()){
         cmd.append(",`STATISTICAL_TIME`=");
         TDateTime statisticalTime = unit.statisticalTime();
         if(statisticalTime == null){
            cmd.append("NULL");
         }else if(statisticalTime.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(statisticalTime.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
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
      FCalculateCockpitRedemptionCityUnit unit = (FCalculateCockpitRedemptionCityUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
