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
// <T>计算客户产品信息逻辑。</T>
//============================================================
@ASourceMachine
public class FCalculateFinancialCustomerProductLogic
      extends FLogicTable
{
   // 计算客户产品信息的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("calculate");

   // 计算客户产品信息的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("calculate.financial.customer.product", "CL_FIN_CUSTOMER_PRODUCT");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段成员编号的定义。
   public final static SLogicFieldInfo MEMBER_ID = new SLogicFieldInfo("MEMBER_ID");

   // 字段成员关联编号的定义。
   public final static SLogicFieldInfo MEMBER_LINK_ID = new SLogicFieldInfo("MEMBER_LINK_ID");

   // 字段期间日期的定义。
   public final static SLogicFieldInfo PERIOD_DATE = new SLogicFieldInfo("PERIOD_DATE");

   // 字段产品代码的定义。
   public final static SLogicFieldInfo PRODUCT_CODE = new SLogicFieldInfo("PRODUCT_CODE");

   // 字段浏览量的定义。
   public final static SLogicFieldInfo VIEW_COUNT = new SLogicFieldInfo("VIEW_COUNT");

   // 字段最后浏览时间的定义。
   public final static SLogicFieldInfo LAST_VIEW_DATE = new SLogicFieldInfo("LAST_VIEW_DATE");

   // 字段创建用户标识的定义。
   public final static SLogicFieldInfo CREATE_USER_ID = new SLogicFieldInfo("CREATE_USER_ID");

   // 字段创建日期的定义。
   public final static SLogicFieldInfo CREATE_DATE = new SLogicFieldInfo("CREATE_DATE");

   // 字段更新者标识的定义。
   public final static SLogicFieldInfo UPDATE_USER_ID = new SLogicFieldInfo("UPDATE_USER_ID");

   // 字段更新时间的定义。
   public final static SLogicFieldInfo UPDATE_DATE = new SLogicFieldInfo("UPDATE_DATE");

   // 字段集合的定义。
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`MEMBER_ID`,`MEMBER_LINK_ID`,`PERIOD_DATE`,`PRODUCT_CODE`,`VIEW_COUNT`,`LAST_VIEW_DATE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造计算客户产品信息逻辑单元。</T>
   //============================================================
   public FCalculateFinancialCustomerProductLogic(){
      _name = TABLE.name();
      _classUnit = FCalculateFinancialCustomerProductUnit.class;
   }

   //============================================================
   // <T>构造计算客户产品信息逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FCalculateFinancialCustomerProductLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FCalculateFinancialCustomerProductUnit.class;
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
      return (T)new FCalculateFinancialCustomerProductUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FCalculateFinancialCustomerProductUnit>(FCalculateFinancialCustomerProductUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FCalculateFinancialCustomerProductUnit findByGuid(CharSequence guid){
      return findByGuid(null, FCalculateFinancialCustomerProductUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FCalculateFinancialCustomerProductUnit search(CharSequence whereSql){
      return search(null, FCalculateFinancialCustomerProductUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(int pageSize,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FCalculateFinancialCustomerProductUnit> fetchAll(){
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
   public FCalculateFinancialCustomerProductUnit doPrepare(){
      FCalculateFinancialCustomerProductUnit unit = new FCalculateFinancialCustomerProductUnit();
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
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
      cmd.append(",`MEMBER_ID`");
      cmd.append(",`MEMBER_LINK_ID`");
      cmd.append(",`PERIOD_DATE`");
      cmd.append(",`PRODUCT_CODE`");
      cmd.append(",`VIEW_COUNT`");
      cmd.append(",`LAST_VIEW_DATE`");
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
      long memberId = unit.memberId();
      if(memberId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(memberId);
      }
      cmd.append(',');
      long memberLinkId = unit.memberLinkId();
      if(memberLinkId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(memberLinkId);
      }
      cmd.append(',');
      TDateTime periodDate = unit.periodDate();
      if(periodDate == null){
         cmd.append("NULL");
      }else if(periodDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(periodDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      String productCode = unit.productCode();
      if(RString.isEmpty(productCode)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(productCode));
         cmd.append('\'');
      }
      cmd.append(',');
      cmd.append(unit.viewCount());
      cmd.append(',');
      TDateTime lastViewDate = unit.lastViewDate();
      if(lastViewDate == null){
         cmd.append("NULL");
      }else if(lastViewDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(lastViewDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
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
      if(unit.isMemberIdChanged()){
         cmd.append(",`MEMBER_ID`=");
         long memberId = unit.memberId();
         if(memberId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(memberId);
         }
      }
      if(unit.isMemberLinkIdChanged()){
         cmd.append(",`MEMBER_LINK_ID`=");
         long memberLinkId = unit.memberLinkId();
         if(memberLinkId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(memberLinkId);
         }
      }
      if(unit.isPeriodDateChanged()){
         cmd.append(",`PERIOD_DATE`=");
         TDateTime periodDate = unit.periodDate();
         if(periodDate == null){
            cmd.append("NULL");
         }else if(periodDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(periodDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isProductCodeChanged()){
         cmd.append(",`PRODUCT_CODE`=");
         String productCode = unit.productCode();
         if(RString.isEmpty(productCode)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(productCode));
            cmd.append('\'');
         }
      }
      if(unit.isViewCountChanged()){
         cmd.append(",`VIEW_COUNT`=");
         cmd.append(unit.viewCount());
      }
      if(unit.isLastViewDateChanged()){
         cmd.append(",`LAST_VIEW_DATE`=");
         TDateTime lastViewDate = unit.lastViewDate();
         if(lastViewDate == null){
            cmd.append("NULL");
         }else if(lastViewDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(lastViewDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
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
      FCalculateFinancialCustomerProductUnit unit = (FCalculateFinancialCustomerProductUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
