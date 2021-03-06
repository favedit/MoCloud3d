package org.mo.cloud.data.data;

import java.util.Map;

import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RInteger;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>金融成员信息逻辑单元。</T>
//============================================================
@ASourceMachine
public class FDataFinancialMarketerMemberUnit
      extends FLogicUnit
{
   // 存储字段对象标识的定义。
   private long __ouid;

   // 字段对象标识的定义。
   protected long _ouid;

   // 存储字段有效性的定义。
   private boolean __ovld;

   // 字段有效性的定义。
   protected boolean _ovld;

   // 存储字段对象唯一标识的定义。
   private String __guid;

   // 字段对象唯一标识的定义。
   protected String _guid;

   // 存储字段理财师编号的定义。
   private long __marketerId;

   // 字段理财师编号的定义。
   protected long _marketerId;

   // 存储字段成员编号的定义。
   private long __memberId;

   // 字段成员编号的定义。
   protected long _memberId;

   // 存储字段关系类型的定义。
   private int __relationCd;

   // 字段关系类型的定义。
   protected int _relationCd;

   // 存储字段短信联系类型的定义。
   private int __smsContactCd;

   // 字段短信联系类型的定义。
   protected int _smsContactCd;

   // 存储字段推荐开始时间的定义。
   private TDateTime __recommendBeginDate = new TDateTime();

   // 字段推荐开始时间的定义。
   protected TDateTime _recommendBeginDate = new TDateTime();

   // 存储字段推荐结束时间的定义。
   private TDateTime __recommendEndDate = new TDateTime();

   // 字段推荐结束时间的定义。
   protected TDateTime _recommendEndDate = new TDateTime();

   // 存储字段反馈类型的定义。
   private int __feedbackCd;

   // 字段反馈类型的定义。
   protected int _feedbackCd;

   // 存储字段反馈内容的定义。
   private String __feedbackNote;

   // 字段反馈内容的定义。
   protected String _feedbackNote;

   // 存储字段备注的定义。
   private String __note;

   // 字段备注的定义。
   protected String _note;

   // 存储字段创建用户标识的定义。
   private long __createUserId;

   // 字段创建用户标识的定义。
   protected long _createUserId;

   // 存储字段创建日期的定义。
   private TDateTime __createDate = new TDateTime();

   // 字段创建日期的定义。
   protected TDateTime _createDate = new TDateTime();

   // 存储字段更新者标识的定义。
   private long __updateUserId;

   // 字段更新者标识的定义。
   protected long _updateUserId;

   // 存储字段更新时间的定义。
   private TDateTime __updateDate = new TDateTime();

   // 字段更新时间的定义。
   protected TDateTime _updateDate = new TDateTime();

   //============================================================
   // <T>构造金融成员信息逻辑单元。</T>
   //============================================================
   public FDataFinancialMarketerMemberUnit(){
   }

   //============================================================
   // <T>判断对象标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isOuidChanged(){
      return __ouid != _ouid;
   }

   //============================================================
   // <T>获得对象标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long ouid(){
      return _ouid;
   }

   //============================================================
   // <T>设置对象标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setOuid(long value){
      _ouid = value;
   }

   //============================================================
   // <T>判断有效性的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isOvldChanged(){
      return __ovld != _ovld;
   }

   //============================================================
   // <T>获得有效性的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean ovld(){
      return _ovld;
   }

   //============================================================
   // <T>设置有效性的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setOvld(boolean value){
      _ovld = value;
   }

   //============================================================
   // <T>判断对象唯一标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isGuidChanged(){
      return !RString.equals(__guid, _guid);
   }

   //============================================================
   // <T>获得对象唯一标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String guid(){
      return _guid;
   }

   //============================================================
   // <T>设置对象唯一标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setGuid(String value){
      _guid = value;
   }

   //============================================================
   // <T>判断理财师编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMarketerIdChanged(){
      return __marketerId != _marketerId;
   }

   //============================================================
   // <T>获得理财师编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long marketerId(){
      return _marketerId;
   }

   //============================================================
   // <T>获得理财师编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataFinancialMarketerUnit marketer(){
      FDataFinancialMarketerLogic logic = _logicContext.findLogic(FDataFinancialMarketerLogic.class);
      FDataFinancialMarketerUnit unit = logic.find(_marketerId);
      return unit;
   }

   //============================================================
   // <T>设置理财师编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMarketerId(long value){
      _marketerId = value;
   }

   //============================================================
   // <T>判断成员编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isMemberIdChanged(){
      return __memberId != _memberId;
   }

   //============================================================
   // <T>获得成员编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long memberId(){
      return _memberId;
   }

   //============================================================
   // <T>获得成员编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataFinancialMemberUnit member(){
      FDataFinancialMemberLogic logic = _logicContext.findLogic(FDataFinancialMemberLogic.class);
      FDataFinancialMemberUnit unit = logic.find(_memberId);
      return unit;
   }

   //============================================================
   // <T>设置成员编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setMemberId(long value){
      _memberId = value;
   }

   //============================================================
   // <T>判断关系类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRelationCdChanged(){
      return __relationCd != _relationCd;
   }

   //============================================================
   // <T>获得关系类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int relationCd(){
      return _relationCd;
   }

   //============================================================
   // <T>设置关系类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRelationCd(int value){
      _relationCd = value;
   }

   //============================================================
   // <T>判断短信联系类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isSmsContactCdChanged(){
      return __smsContactCd != _smsContactCd;
   }

   //============================================================
   // <T>获得短信联系类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int smsContactCd(){
      return _smsContactCd;
   }

   //============================================================
   // <T>设置短信联系类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setSmsContactCd(int value){
      _smsContactCd = value;
   }

   //============================================================
   // <T>判断推荐开始时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecommendBeginDateChanged(){
      return !__recommendBeginDate.equals(_recommendBeginDate);
   }

   //============================================================
   // <T>获得推荐开始时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recommendBeginDate(){
      return _recommendBeginDate;
   }

   //============================================================
   // <T>设置推荐开始时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecommendBeginDate(TDateTime value){
      _recommendBeginDate = value;
   }

   //============================================================
   // <T>判断推荐结束时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isRecommendEndDateChanged(){
      return !__recommendEndDate.equals(_recommendEndDate);
   }

   //============================================================
   // <T>获得推荐结束时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime recommendEndDate(){
      return _recommendEndDate;
   }

   //============================================================
   // <T>设置推荐结束时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setRecommendEndDate(TDateTime value){
      _recommendEndDate = value;
   }

   //============================================================
   // <T>判断反馈类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isFeedbackCdChanged(){
      return __feedbackCd != _feedbackCd;
   }

   //============================================================
   // <T>获得反馈类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int feedbackCd(){
      return _feedbackCd;
   }

   //============================================================
   // <T>设置反馈类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setFeedbackCd(int value){
      _feedbackCd = value;
   }

   //============================================================
   // <T>判断反馈内容的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isFeedbackNoteChanged(){
      return !RString.equals(__feedbackNote, _feedbackNote);
   }

   //============================================================
   // <T>获得反馈内容的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String feedbackNote(){
      return _feedbackNote;
   }

   //============================================================
   // <T>设置反馈内容的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setFeedbackNote(String value){
      _feedbackNote = value;
   }

   //============================================================
   // <T>判断备注的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isNoteChanged(){
      return !RString.equals(__note, _note);
   }

   //============================================================
   // <T>获得备注的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String note(){
      return _note;
   }

   //============================================================
   // <T>设置备注的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setNote(String value){
      _note = value;
   }

   //============================================================
   // <T>判断创建用户标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCreateUserIdChanged(){
      return __createUserId != _createUserId;
   }

   //============================================================
   // <T>获得创建用户标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long createUserId(){
      return _createUserId;
   }

   //============================================================
   // <T>设置创建用户标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCreateUserId(long value){
      _createUserId = value;
   }

   //============================================================
   // <T>判断创建日期的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCreateDateChanged(){
      return !__createDate.equals(_createDate);
   }

   //============================================================
   // <T>获得创建日期的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime createDate(){
      return _createDate;
   }

   //============================================================
   // <T>设置创建日期的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCreateDate(TDateTime value){
      _createDate = value;
   }

   //============================================================
   // <T>判断更新者标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isUpdateUserIdChanged(){
      return __updateUserId != _updateUserId;
   }

   //============================================================
   // <T>获得更新者标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long updateUserId(){
      return _updateUserId;
   }

   //============================================================
   // <T>设置更新者标识的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setUpdateUserId(long value){
      _updateUserId = value;
   }

   //============================================================
   // <T>判断更新时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isUpdateDateChanged(){
      return !__updateDate.equals(_updateDate);
   }

   //============================================================
   // <T>获得更新时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime updateDate(){
      return _updateDate;
   }

   //============================================================
   // <T>设置更新时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setUpdateDate(TDateTime value){
      _updateDate = value;
   }

   //============================================================
   // <T>根据名称获得内容。</T>
   //
   // @param name 名称
   // @return 内容
   //============================================================
   @Override
   public String get(String name){
      switch(name){
         case "ouid":
            return Long.toString(_ouid);
         case "ovld":
            return RBoolean.toString(_ovld);
         case "guid":
            return _guid;
         case "marketer_id":
            return Long.toString(_marketerId);
         case "member_id":
            return Long.toString(_memberId);
         case "relation_cd":
            return RInteger.toString(_relationCd);
         case "sms_contact_cd":
            return RInteger.toString(_smsContactCd);
         case "recommend_begin_date":
            return _recommendBeginDate.toString();
         case "recommend_end_date":
            return _recommendEndDate.toString();
         case "feedback_cd":
            return RInteger.toString(_feedbackCd);
         case "feedback_note":
            return _feedbackNote;
         case "note":
            return _note;
         case "create_user_id":
            return Long.toString(_createUserId);
         case "create_date":
            return _createDate.toString();
         case "update_user_id":
            return Long.toString(_updateUserId);
         case "update_date":
            return _updateDate.toString();
      }
      return null;
   }

   //============================================================
   // <T>根据名称设置内容。</T>
   //
   // @param name 名称
   // @param value 内容
   //============================================================
   @Override
   public void set(String name,
                   String value){
      switch(name){
         case "ouid":
            _ouid = RLong.parse(value);
            break;
         case "ovld":
            _ovld = RBoolean.parse(value);
            break;
         case "guid":
            _guid = value;
            break;
         case "marketer_id":
            _marketerId = RLong.parse(value);
            break;
         case "member_id":
            _memberId = RLong.parse(value);
            break;
         case "relation_cd":
            _relationCd = RInteger.parse(value);
            break;
         case "sms_contact_cd":
            _smsContactCd = RInteger.parse(value);
            break;
         case "recommend_begin_date":
            _recommendBeginDate.parse(value);
            break;
         case "recommend_end_date":
            _recommendEndDate.parse(value);
            break;
         case "feedback_cd":
            _feedbackCd = RInteger.parse(value);
            break;
         case "feedback_note":
            _feedbackNote = value;
            break;
         case "note":
            _note = value;
            break;
         case "create_user_id":
            _createUserId = RLong.parse(value);
            break;
         case "create_date":
            _createDate.parse(value);
            break;
         case "update_user_id":
            _updateUserId = RLong.parse(value);
            break;
         case "update_date":
            _updateDate.parse(value);
            break;
      }
   }

   //============================================================
   // <T>加载行记录。</T>
   //
   // @param row 行记录
   //============================================================
   @Override
   public void load(FRow row){
      super.load(row);
      for(IStringPair pair : row){
         // 获得名称
         String name = pair.name();
         if(RString.isEmpty(name)){
            throw new FFatalError("Row format is invalid. (row={1})", row.dump());
         }
         // 获得内容
         String value = pair.value();
         // 设置内容
         switch(name){
            case "ouid":
               __ouid = RLong.parse(value);
               _ouid = __ouid;
               break;
            case "ovld":
               __ovld = RBoolean.parse(value);
               _ovld = __ovld;
               break;
            case "guid":
               __guid = value;
               _guid = __guid;
               break;
            case "marketer_id":
               __marketerId = RLong.parse(value);
               _marketerId = __marketerId;
               break;
            case "member_id":
               __memberId = RLong.parse(value);
               _memberId = __memberId;
               break;
            case "relation_cd":
               __relationCd = RInteger.parse(value);
               _relationCd = __relationCd;
               break;
            case "sms_contact_cd":
               __smsContactCd = RInteger.parse(value);
               _smsContactCd = __smsContactCd;
               break;
            case "recommend_begin_date":
               __recommendBeginDate.parse(value);
               _recommendBeginDate.assign(__recommendBeginDate);
               break;
            case "recommend_end_date":
               __recommendEndDate.parse(value);
               _recommendEndDate.assign(__recommendEndDate);
               break;
            case "feedback_cd":
               __feedbackCd = RInteger.parse(value);
               _feedbackCd = __feedbackCd;
               break;
            case "feedback_note":
               __feedbackNote = value;
               _feedbackNote = __feedbackNote;
               break;
            case "note":
               __note = value;
               _note = __note;
               break;
            case "create_user_id":
               __createUserId = RLong.parse(value);
               _createUserId = __createUserId;
               break;
            case "create_date":
               __createDate.parse(value);
               _createDate.assign(__createDate);
               break;
            case "update_user_id":
               __updateUserId = RLong.parse(value);
               _updateUserId = __updateUserId;
               break;
            case "update_date":
               __updateDate.parse(value);
               _updateDate.assign(__updateDate);
               break;
         }
      }
   }

   //============================================================
   // <T>存储行记录。</T>
   //
   // @param row 行记录
   //============================================================
   @Override
   public void save(FRow row){
      super.load(row);
      row.set("ouid", _ouid);
      row.set("ovld", _ovld);
      row.set("guid", _guid);
      row.set("marketerId", _marketerId);
      row.set("memberId", _memberId);
      row.set("relationCd", _relationCd);
      row.set("smsContactCd", _smsContactCd);
      row.set("recommendBeginDate", _recommendBeginDate);
      row.set("recommendEndDate", _recommendEndDate);
      row.set("feedbackCd", _feedbackCd);
      row.set("feedbackNote", _feedbackNote);
      row.set("note", _note);
      row.set("createUserId", _createUserId);
      row.set("createDate", _createDate);
      row.set("updateUserId", _updateUserId);
      row.set("updateDate", _updateDate);
   }

   //============================================================
   // <T>保存对照表。</T>
   //
   // @param map 对照表
   //============================================================
   @Override
   public void saveMap(Map<String, String> map){
      super.saveMap(map);
      map.put("ouid", RLong.toString(_ouid));
      map.put("ovld", RBoolean.toString(_ovld));
      map.put("guid", _guid);
      map.put("marketerId", RLong.toString(_marketerId));
      map.put("memberId", RLong.toString(_memberId));
      map.put("relationCd", RInteger.toString(_relationCd));
      map.put("smsContactCd", RInteger.toString(_smsContactCd));
      map.put("recommendBeginDate", _recommendBeginDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("recommendEndDate", _recommendEndDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("feedbackCd", RInteger.toString(_feedbackCd));
      map.put("feedbackNote", _feedbackNote);
      map.put("note", _note);
      map.put("createUserId", RLong.toString(_createUserId));
      map.put("createDate", _createDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("updateUserId", RLong.toString(_updateUserId));
      map.put("updateDate", _updateDate.format("YYYY-MM-DD HH24:MI:SS"));
   }

   //============================================================
   // <T>反序列化数据到内容。</T>
   //
   // @param input 输入流
   //============================================================
   @Override
   public void unserialize(IDataInput input){
      super.unserialize(input);
      _ouid = input.readInt64();
      _ovld = input.readBoolean();
      _guid = input.readString();
      _marketerId = input.readInt64();
      _memberId = input.readInt64();
      _relationCd = input.readInt32();
      _smsContactCd = input.readInt32();
      _recommendBeginDate.set(input.readInt64());
      _recommendEndDate.set(input.readInt64());
      _feedbackCd = input.readInt32();
      _feedbackNote = input.readString();
      _note = input.readString();
      _createUserId = input.readInt64();
      _createDate.set(input.readInt64());
      _updateUserId = input.readInt64();
      _updateDate.set(input.readInt64());
   }

   //============================================================
   // <T>序列化内容到数据。</T>
   //
   // @param output 输出流
   //============================================================
   @Override
   public void serialize(IDataOutput output){
      super.serialize(output);
      output.writeInt64(_ouid);
      output.writeBoolean(_ovld);
      output.writeString(_guid);
      output.writeInt64(_marketerId);
      output.writeInt64(_memberId);
      output.writeInt32(_relationCd);
      output.writeInt32(_smsContactCd);
      output.writeInt64(_recommendBeginDate.get());
      output.writeInt64(_recommendEndDate.get());
      output.writeInt32(_feedbackCd);
      output.writeString(_feedbackNote);
      output.writeString(_note);
      output.writeInt64(_createUserId);
      output.writeInt64(_createDate.get());
      output.writeInt64(_updateUserId);
      output.writeInt64(_updateDate.get());
   }

   //============================================================
   // <T>复制当前对象。</T>
   //
   // @param unit 对象
   // @return 对象
   //============================================================
   @Override
   public void copy(FLogicUnit logicUnit){
      super.copy(logicUnit);
      FDataFinancialMarketerMemberUnit unit = (FDataFinancialMarketerMemberUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setMarketerId(_marketerId);
      unit.setMemberId(_memberId);
      unit.setRelationCd(_relationCd);
      unit.setSmsContactCd(_smsContactCd);
      unit.recommendBeginDate().assign(_recommendBeginDate);
      unit.recommendEndDate().assign(_recommendEndDate);
      unit.setFeedbackCd(_feedbackCd);
      unit.setFeedbackNote(_feedbackNote);
      unit.setNote(_note);
      unit.setCreateUserId(_createUserId);
      unit.createDate().assign(_createDate);
      unit.setUpdateUserId(_updateUserId);
      unit.updateDate().assign(_updateDate);
   }

   //============================================================
   // <T>克隆当前对象。</T>
   //
   // @return 对象
   //============================================================
   @Override
   public FDataFinancialMarketerMemberUnit clone(){
      FDataFinancialMarketerMemberUnit unit = RClass.newInstance(FDataFinancialMarketerMemberUnit.class);
      copy(unit);
      return unit;
   }
}
