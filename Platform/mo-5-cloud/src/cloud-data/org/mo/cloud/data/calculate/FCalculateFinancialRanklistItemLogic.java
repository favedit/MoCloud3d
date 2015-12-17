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
// <T>排行榜逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateFinancialRanklistItemLogic
      extends FLogicTable
{
   // 排行榜的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 排行榜的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.financial.ranklist.item", "CL_FIN_RANKLIST_ITEM");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段代码的定义。
   public final static SLogicFieldInfo CODE = new SLogicFieldInfo("CODE");

   // 字段英文名称的定义。
   public final static SLogicFieldInfo NAME = new SLogicFieldInfo("NAME");

   // 字段中文名称的定义。
   public final static SLogicFieldInfo LABEL = new SLogicFieldInfo("LABEL");

   // 字段排名的定义。
   public final static SLogicFieldInfo RANK_ORDER = new SLogicFieldInfo("RANK_ORDER");

   // 字段排行榜类型的定义。
   public final static SLogicFieldInfo RANKLIST_ID = new SLogicFieldInfo("RANKLIST_ID");

   // 字段属性1的定义。
   public final static SLogicFieldInfo PROPERTY1 = new SLogicFieldInfo("PROPERTY1");

   // 字段属性2的定义。
   public final static SLogicFieldInfo PROPERTY2 = new SLogicFieldInfo("PROPERTY2");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`CODE`,`NAME`,`LABEL`,`RANK_ORDER`,`RANKLIST_ID`,`PROPERTY1`,`PROPERTY2`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造排行榜逻辑单元。</T>
   //============================================================
   public FCalculateFinancialRanklistItemLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateFinancialRanklistItemUnit.class;
   }

   //============================================================
   // <T>构造排行榜逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateFinancialRanklistItemLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateFinancialRanklistItemUnit.class;
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
      return (T)new FCalculateFinancialRanklistItemUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateFinancialRanklistItemUnit>(FCalculateFinancialRanklistItemUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateFinancialRanklistItemUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateFinancialRanklistItemUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateFinancialRanklistItemUnit search(CharSequence whereSql){
      return search(null, FCalculateFinancialRanklistItemUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateFinancialRanklistItemUnit> fetchAll(){
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
   public FCalculateFinancialRanklistItemUnit doPrepare(){
      FCalculateFinancialRanklistItemUnit unit = new FCalculateFinancialRanklistItemUnit();
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
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
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
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
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
      cmd.append(",`CODE`");
      cmd.append(",`NAME`");
      cmd.append(",`LABEL`");
      cmd.append(",`RANK_ORDER`");
      cmd.append(",`RANKLIST_ID`");
      cmd.append(",`PROPERTY1`");
      cmd.append(",`PROPERTY2`");
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
      cmd.append(unit.rankOrder());
      cmd.append(',');
      long ranklistId = unit.ranklistId();
      if(ranklistId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(ranklistId);
      }
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
      String property2 = unit.property2();
      if(RString.isEmpty(property2)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(property2));
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
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
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
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
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
      if(unit.isRankOrderChanged()){
         cmd.append(",`RANK_ORDER`=");
         cmd.append(unit.rankOrder());
      }
      if(unit.isRanklistIdChanged()){
         cmd.append(",`RANKLIST_ID`=");
         long ranklistId = unit.ranklistId();
         if(ranklistId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(ranklistId);
         }
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
      if(unit.isProperty2Changed()){
         cmd.append(",`PROPERTY2`=");
         String property2 = unit.property2();
         if(RString.isEmpty(property2)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(property2));
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
      FCalculateFinancialRanklistItemUnit unit = (FCalculateFinancialRanklistItemUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
