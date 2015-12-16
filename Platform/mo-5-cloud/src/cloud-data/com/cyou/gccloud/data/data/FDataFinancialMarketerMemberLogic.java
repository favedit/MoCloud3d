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
// <T>金融成员信息逻辑。</T>
//============================================================
@ASourceMachine
public class FDataFinancialMarketerMemberLogic
      extends FLogicTable
{
   // 金融成员信息的定义。
   public final static SLogicConnectionInfo CONNECTION = new SLogicConnectionInfo("data");

   // 金融成员信息的定义。
   public final static SLogicTableInfo TABLE = new SLogicTableInfo("data.financial.marketer.member", "DT_FIN_MARKETER_MEMBER");

   // 字段对象标识的定义。
   public final static SLogicFieldInfo OUID = new SLogicFieldInfo("OUID");

   // 字段有效性的定义。
   public final static SLogicFieldInfo OVLD = new SLogicFieldInfo("OVLD");

   // 字段对象唯一标识的定义。
   public final static SLogicFieldInfo GUID = new SLogicFieldInfo("GUID");

   // 字段理财师编号的定义。
   public final static SLogicFieldInfo MARKETER_ID = new SLogicFieldInfo("MARKETER_ID");

   // 字段成员编号的定义。
   public final static SLogicFieldInfo MEMBER_ID = new SLogicFieldInfo("MEMBER_ID");

   // 字段关系类型的定义。
   public final static SLogicFieldInfo RELATION_CD = new SLogicFieldInfo("RELATION_CD");

   // 字段短信联系类型的定义。
   public final static SLogicFieldInfo SMS_CONTACT_CD = new SLogicFieldInfo("SMS_CONTACT_CD");

   // 字段推荐开始时间的定义。
   public final static SLogicFieldInfo RECOMMEND_BEGIN_DATE = new SLogicFieldInfo("RECOMMEND_BEGIN_DATE");

   // 字段推荐结束时间的定义。
   public final static SLogicFieldInfo RECOMMEND_END_DATE = new SLogicFieldInfo("RECOMMEND_END_DATE");

   // 字段反馈类型的定义。
   public final static SLogicFieldInfo FEEDBACK_CD = new SLogicFieldInfo("FEEDBACK_CD");

   // 字段反馈内容的定义。
   public final static SLogicFieldInfo FEEDBACK_NOTE = new SLogicFieldInfo("FEEDBACK_NOTE");

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
   public final static String FIELDS = "`OUID`,`OVLD`,`GUID`,`MARKETER_ID`,`MEMBER_ID`,`RELATION_CD`,`SMS_CONTACT_CD`,`RECOMMEND_BEGIN_DATE`,`RECOMMEND_END_DATE`,`FEEDBACK_CD`,`FEEDBACK_NOTE`,`NOTE`,`CREATE_USER_ID`,`CREATE_DATE`,`UPDATE_USER_ID`,`UPDATE_DATE`";

   //============================================================
   // <T>构造金融成员信息逻辑单元。</T>
   //============================================================
   public FDataFinancialMarketerMemberLogic(){
      _name = TABLE.name();
      _classUnit = FDataFinancialMarketerMemberUnit.class;
   }

   //============================================================
   // <T>构造金融成员信息逻辑单元。</T>
   //
   // @param context 逻辑环境
   //============================================================
   public FDataFinancialMarketerMemberLogic(ILogicContext context){
      super(context);
      _name = TABLE.name();
      _classUnit = FDataFinancialMarketerMemberUnit.class;
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
      return (T)new FDataFinancialMarketerMemberUnit();
   }

   //============================================================
   // <T>创建一个空数据集合。</T>
   //
   // @return 数据集合
   //============================================================
   @Override
   @SuppressWarnings("unchecked")
   protected <T extends FLogicUnit> FLogicDataset<T> innerCreateDataset(){
      return (FLogicDataset<T>)new FLogicDataset<FDataFinancialMarketerMemberUnit>(FDataFinancialMarketerMemberUnit.class, _logicContext);
   }

   //============================================================
   // <T>根据唯一编号获得一个数据单元。</T>
   //
   // @param guid 唯一编号
   // @return 数据单元
   //============================================================
   public FDataFinancialMarketerMemberUnit findByGuid(CharSequence guid){
      return findByGuid(null, FDataFinancialMarketerMemberUnit.class, guid);
   }

   //============================================================
   // <T>根据条件获得一个数据单元。</T>
   //
   // @param whereSql 条件
   // @return 数据单元
   //============================================================
   public FDataFinancialMarketerMemberUnit search(CharSequence whereSql){
      return search(null, FDataFinancialMarketerMemberUnit.class, whereSql);
   }

   //============================================================
   // <T>根据条件获得数据单元集合。</T>
   //
   // @param whereSql 条件
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence whereSql){
      return fetchClass(null, null, whereSql, null, null, -1, 0);
   }

   //============================================================
   // <T>获得数据单元集合。</T>
   //
   // @param pageSize 分页大小
   // @param page 分页号码
   // @return 数据单元集合
   //============================================================
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(int pageSize,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence whereSql,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetch(CharSequence fields,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetchSql(CharSequence code,
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
   public FLogicDataset<FDataFinancialMarketerMemberUnit> fetchAll(){
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
   public FDataFinancialMarketerMemberUnit doPrepare(){
      FDataFinancialMarketerMemberUnit unit = new FDataFinancialMarketerMemberUnit();
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
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
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
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
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
      cmd.append(",`MARKETER_ID`");
      cmd.append(",`MEMBER_ID`");
      cmd.append(",`RELATION_CD`");
      cmd.append(",`SMS_CONTACT_CD`");
      cmd.append(",`RECOMMEND_BEGIN_DATE`");
      cmd.append(",`RECOMMEND_END_DATE`");
      cmd.append(",`FEEDBACK_CD`");
      cmd.append(",`FEEDBACK_NOTE`");
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
      long marketerId = unit.marketerId();
      if(marketerId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(marketerId);
      }
      cmd.append(',');
      long memberId = unit.memberId();
      if(memberId == 0){
         cmd.append("NULL");
      }else{
         cmd.append(memberId);
      }
      cmd.append(',');
      cmd.append(unit.relationCd());
      cmd.append(',');
      cmd.append(unit.smsContactCd());
      cmd.append(',');
      TDateTime recommendBeginDate = unit.recommendBeginDate();
      if(recommendBeginDate == null){
         cmd.append("NULL");
      }else if(recommendBeginDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recommendBeginDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      TDateTime recommendEndDate = unit.recommendEndDate();
      if(recommendEndDate == null){
         cmd.append("NULL");
      }else if(recommendEndDate.isEmpty()){
         cmd.append("NULL");
      }else{
         cmd.append("STR_TO_DATE('");
         cmd.append(recommendEndDate.format());
         cmd.append("','%Y%m%d%H%i%s')");
      }
      cmd.append(',');
      cmd.append(unit.feedbackCd());
      cmd.append(',');
      String feedbackNote = unit.feedbackNote();
      if(RString.isEmpty(feedbackNote)){
         cmd.append("NULL");
      }else{
         cmd.append('\'');
         cmd.append(RSql.formatValue(feedbackNote));
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
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
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
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
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
      if(unit.isMarketerIdChanged()){
         cmd.append(",`MARKETER_ID`=");
         long marketerId = unit.marketerId();
         if(marketerId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(marketerId);
         }
      }
      if(unit.isMemberIdChanged()){
         cmd.append(",`MEMBER_ID`=");
         long memberId = unit.memberId();
         if(memberId == 0){
            cmd.append("NULL");
         }else{
            cmd.append(memberId);
         }
      }
      if(unit.isRelationCdChanged()){
         cmd.append(",`RELATION_CD`=");
         cmd.append(unit.relationCd());
      }
      if(unit.isSmsContactCdChanged()){
         cmd.append(",`SMS_CONTACT_CD`=");
         cmd.append(unit.smsContactCd());
      }
      if(unit.isRecommendBeginDateChanged()){
         cmd.append(",`RECOMMEND_BEGIN_DATE`=");
         TDateTime recommendBeginDate = unit.recommendBeginDate();
         if(recommendBeginDate == null){
            cmd.append("NULL");
         }else if(recommendBeginDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recommendBeginDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isRecommendEndDateChanged()){
         cmd.append(",`RECOMMEND_END_DATE`=");
         TDateTime recommendEndDate = unit.recommendEndDate();
         if(recommendEndDate == null){
            cmd.append("NULL");
         }else if(recommendEndDate.isEmpty()){
            cmd.append("NULL");
         }else{
            cmd.append("STR_TO_DATE('");
            cmd.append(recommendEndDate.format());
            cmd.append("','%Y%m%d%H%i%s')");
         }
      }
      if(unit.isFeedbackCdChanged()){
         cmd.append(",`FEEDBACK_CD`=");
         cmd.append(unit.feedbackCd());
      }
      if(unit.isFeedbackNoteChanged()){
         cmd.append(",`FEEDBACK_NOTE`=");
         String feedbackNote = unit.feedbackNote();
         if(RString.isEmpty(feedbackNote)){
            cmd.append("NULL");
         }else{
            cmd.append('\'');
            cmd.append(RSql.formatValue(feedbackNote));
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
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
      // 检查参数
      if(unit == null){
         throw new FFatalError("Logic unit is null.");
      }
      // 更新处理
      return doDelete(unit, unit.ouid());
   }
}
