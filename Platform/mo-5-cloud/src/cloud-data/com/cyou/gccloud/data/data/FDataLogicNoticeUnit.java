package com.cyou.gccloud.data.data;

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
// <T>业务公告表逻辑单元。</T>
//============================================================
@ASourceMachine
public class FDataLogicNoticeUnit
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

   // 存储字段用户编号的定义。
   private long __userId;

   // 字段用户编号的定义。
   protected long _userId;

   // 存储字段资讯标题的定义。
   private String __label;

   // 字段资讯标题的定义。
   protected String _label;

   // 存储字段类型的定义。
   private int __typeCd;

   // 字段类型的定义。
   protected int _typeCd;

   // 存储字段是否显示的定义。
   private int __displayCd;

   // 字段是否显示的定义。
   protected int _displayCd;

   // 存储字段排序值的定义。
   private int __displayOrder;

   // 字段排序值的定义。
   protected int _displayOrder;

   // 存储字段重要性的定义。
   private int __importantCd;

   // 字段重要性的定义。
   protected int _importantCd;

   // 存储字段阅后即焚的定义。
   private int __destroyCd;

   // 字段阅后即焚的定义。
   protected int _destroyCd;

   // 存储字段开始时间的定义。
   private TDateTime __beginDate = new TDateTime();

   // 字段开始时间的定义。
   protected TDateTime _beginDate = new TDateTime();

   // 存储字段结束时间的定义。
   private TDateTime __endDate = new TDateTime();

   // 字段结束时间的定义。
   protected TDateTime _endDate = new TDateTime();

   // 存储字段发布时间的定义。
   private TDateTime __publishDate = new TDateTime();

   // 字段发布时间的定义。
   protected TDateTime _publishDate = new TDateTime();

   // 存储字段外链状态的定义。
   private int __linkCd;

   // 字段外链状态的定义。
   protected int _linkCd;

   // 存储字段外链地址的定义。
   private String __linkUrl;

   // 字段外链地址的定义。
   protected String _linkUrl;

   // 存储字段描述的定义。
   private String __description;

   // 字段描述的定义。
   protected String _description;

   // 存储字段资讯内容的定义。
   private String __content;

   // 字段资讯内容的定义。
   protected String _content;

   // 存储字段浏览次数的定义。
   private int __viewCount;

   // 字段浏览次数的定义。
   protected int _viewCount;

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
   // <T>构造业务公告表逻辑单元。</T>
   //============================================================
   public FDataLogicNoticeUnit(){
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
   // <T>判断用户编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isUserIdChanged(){
      return __userId != _userId;
   }

   //============================================================
   // <T>获得用户编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long userId(){
      return _userId;
   }

   //============================================================
   // <T>获得用户编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataPersonUserUnit user(){
      FDataPersonUserLogic logic = _logicContext.findLogic(FDataPersonUserLogic.class);
      FDataPersonUserUnit unit = logic.find(_userId);
      return unit;
   }

   //============================================================
   // <T>设置用户编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setUserId(long value){
      _userId = value;
   }

   //============================================================
   // <T>判断资讯标题的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLabelChanged(){
      return !RString.equals(__label, _label);
   }

   //============================================================
   // <T>获得资讯标题的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String label(){
      return _label;
   }

   //============================================================
   // <T>设置资讯标题的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLabel(String value){
      _label = value;
   }

   //============================================================
   // <T>判断类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTypeCdChanged(){
      return __typeCd != _typeCd;
   }

   //============================================================
   // <T>获得类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int typeCd(){
      return _typeCd;
   }

   //============================================================
   // <T>设置类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTypeCd(int value){
      _typeCd = value;
   }

   //============================================================
   // <T>判断是否显示的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDisplayCdChanged(){
      return __displayCd != _displayCd;
   }

   //============================================================
   // <T>获得是否显示的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int displayCd(){
      return _displayCd;
   }

   //============================================================
   // <T>设置是否显示的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDisplayCd(int value){
      _displayCd = value;
   }

   //============================================================
   // <T>判断排序值的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDisplayOrderChanged(){
      return __displayOrder != _displayOrder;
   }

   //============================================================
   // <T>获得排序值的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int displayOrder(){
      return _displayOrder;
   }

   //============================================================
   // <T>设置排序值的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDisplayOrder(int value){
      _displayOrder = value;
   }

   //============================================================
   // <T>判断重要性的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isImportantCdChanged(){
      return __importantCd != _importantCd;
   }

   //============================================================
   // <T>获得重要性的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int importantCd(){
      return _importantCd;
   }

   //============================================================
   // <T>设置重要性的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setImportantCd(int value){
      _importantCd = value;
   }

   //============================================================
   // <T>判断阅后即焚的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDestroyCdChanged(){
      return __destroyCd != _destroyCd;
   }

   //============================================================
   // <T>获得阅后即焚的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int destroyCd(){
      return _destroyCd;
   }

   //============================================================
   // <T>设置阅后即焚的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDestroyCd(int value){
      _destroyCd = value;
   }

   //============================================================
   // <T>判断开始时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isBeginDateChanged(){
      return !__beginDate.equals(_beginDate);
   }

   //============================================================
   // <T>获得开始时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime beginDate(){
      return _beginDate;
   }

   //============================================================
   // <T>设置开始时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setBeginDate(TDateTime value){
      _beginDate = value;
   }

   //============================================================
   // <T>判断结束时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isEndDateChanged(){
      return !__endDate.equals(_endDate);
   }

   //============================================================
   // <T>获得结束时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime endDate(){
      return _endDate;
   }

   //============================================================
   // <T>设置结束时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setEndDate(TDateTime value){
      _endDate = value;
   }

   //============================================================
   // <T>判断发布时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPublishDateChanged(){
      return !__publishDate.equals(_publishDate);
   }

   //============================================================
   // <T>获得发布时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime publishDate(){
      return _publishDate;
   }

   //============================================================
   // <T>设置发布时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPublishDate(TDateTime value){
      _publishDate = value;
   }

   //============================================================
   // <T>判断外链状态的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLinkCdChanged(){
      return __linkCd != _linkCd;
   }

   //============================================================
   // <T>获得外链状态的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int linkCd(){
      return _linkCd;
   }

   //============================================================
   // <T>设置外链状态的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLinkCd(int value){
      _linkCd = value;
   }

   //============================================================
   // <T>判断外链地址的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLinkUrlChanged(){
      return !RString.equals(__linkUrl, _linkUrl);
   }

   //============================================================
   // <T>获得外链地址的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String linkUrl(){
      return _linkUrl;
   }

   //============================================================
   // <T>设置外链地址的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLinkUrl(String value){
      _linkUrl = value;
   }

   //============================================================
   // <T>判断描述的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDescriptionChanged(){
      return !RString.equals(__description, _description);
   }

   //============================================================
   // <T>获得描述的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String description(){
      return _description;
   }

   //============================================================
   // <T>设置描述的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDescription(String value){
      _description = value;
   }

   //============================================================
   // <T>判断资讯内容的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isContentChanged(){
      return !RString.equals(__content, _content);
   }

   //============================================================
   // <T>获得资讯内容的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String content(){
      return _content;
   }

   //============================================================
   // <T>设置资讯内容的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setContent(String value){
      _content = value;
   }

   //============================================================
   // <T>判断浏览次数的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isViewCountChanged(){
      return __viewCount != _viewCount;
   }

   //============================================================
   // <T>获得浏览次数的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int viewCount(){
      return _viewCount;
   }

   //============================================================
   // <T>设置浏览次数的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setViewCount(int value){
      _viewCount = value;
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
         case "user_id":
            return Long.toString(_userId);
         case "label":
            return _label;
         case "type_cd":
            return RInteger.toString(_typeCd);
         case "display_cd":
            return RInteger.toString(_displayCd);
         case "display_order":
            return RInteger.toString(_displayOrder);
         case "important_cd":
            return RInteger.toString(_importantCd);
         case "destroy_cd":
            return RInteger.toString(_destroyCd);
         case "begin_date":
            return _beginDate.toString();
         case "end_date":
            return _endDate.toString();
         case "publish_date":
            return _publishDate.toString();
         case "link_cd":
            return RInteger.toString(_linkCd);
         case "link_url":
            return _linkUrl;
         case "description":
            return _description;
         case "content":
            return _content;
         case "view_count":
            return RInteger.toString(_viewCount);
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
         case "user_id":
            _userId = RLong.parse(value);
            break;
         case "label":
            _label = value;
            break;
         case "type_cd":
            _typeCd = RInteger.parse(value);
            break;
         case "display_cd":
            _displayCd = RInteger.parse(value);
            break;
         case "display_order":
            _displayOrder = RInteger.parse(value);
            break;
         case "important_cd":
            _importantCd = RInteger.parse(value);
            break;
         case "destroy_cd":
            _destroyCd = RInteger.parse(value);
            break;
         case "begin_date":
            _beginDate.parse(value);
            break;
         case "end_date":
            _endDate.parse(value);
            break;
         case "publish_date":
            _publishDate.parse(value);
            break;
         case "link_cd":
            _linkCd = RInteger.parse(value);
            break;
         case "link_url":
            _linkUrl = value;
            break;
         case "description":
            _description = value;
            break;
         case "content":
            _content = value;
            break;
         case "view_count":
            _viewCount = RInteger.parse(value);
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
            case "user_id":
               __userId = RLong.parse(value);
               _userId = __userId;
               break;
            case "label":
               __label = value;
               _label = __label;
               break;
            case "type_cd":
               __typeCd = RInteger.parse(value);
               _typeCd = __typeCd;
               break;
            case "display_cd":
               __displayCd = RInteger.parse(value);
               _displayCd = __displayCd;
               break;
            case "display_order":
               __displayOrder = RInteger.parse(value);
               _displayOrder = __displayOrder;
               break;
            case "important_cd":
               __importantCd = RInteger.parse(value);
               _importantCd = __importantCd;
               break;
            case "destroy_cd":
               __destroyCd = RInteger.parse(value);
               _destroyCd = __destroyCd;
               break;
            case "begin_date":
               __beginDate.parse(value);
               _beginDate.assign(__beginDate);
               break;
            case "end_date":
               __endDate.parse(value);
               _endDate.assign(__endDate);
               break;
            case "publish_date":
               __publishDate.parse(value);
               _publishDate.assign(__publishDate);
               break;
            case "link_cd":
               __linkCd = RInteger.parse(value);
               _linkCd = __linkCd;
               break;
            case "link_url":
               __linkUrl = value;
               _linkUrl = __linkUrl;
               break;
            case "description":
               __description = value;
               _description = __description;
               break;
            case "content":
               __content = value;
               _content = __content;
               break;
            case "view_count":
               __viewCount = RInteger.parse(value);
               _viewCount = __viewCount;
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
      row.set("userId", _userId);
      row.set("label", _label);
      row.set("typeCd", _typeCd);
      row.set("displayCd", _displayCd);
      row.set("displayOrder", _displayOrder);
      row.set("importantCd", _importantCd);
      row.set("destroyCd", _destroyCd);
      row.set("beginDate", _beginDate);
      row.set("endDate", _endDate);
      row.set("publishDate", _publishDate);
      row.set("linkCd", _linkCd);
      row.set("linkUrl", _linkUrl);
      row.set("description", _description);
      row.set("content", _content);
      row.set("viewCount", _viewCount);
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
      map.put("userId", RLong.toString(_userId));
      map.put("label", _label);
      map.put("typeCd", RInteger.toString(_typeCd));
      map.put("displayCd", RInteger.toString(_displayCd));
      map.put("displayOrder", RInteger.toString(_displayOrder));
      map.put("importantCd", RInteger.toString(_importantCd));
      map.put("destroyCd", RInteger.toString(_destroyCd));
      map.put("beginDate", _beginDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("endDate", _endDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("publishDate", _publishDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("linkCd", RInteger.toString(_linkCd));
      map.put("linkUrl", _linkUrl);
      map.put("description", _description);
      map.put("content", _content);
      map.put("viewCount", RInteger.toString(_viewCount));
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
      _userId = input.readInt64();
      _label = input.readString();
      _typeCd = input.readInt32();
      _displayCd = input.readInt32();
      _displayOrder = input.readInt32();
      _importantCd = input.readInt32();
      _destroyCd = input.readInt32();
      _beginDate.set(input.readInt64());
      _endDate.set(input.readInt64());
      _publishDate.set(input.readInt64());
      _linkCd = input.readInt32();
      _linkUrl = input.readString();
      _description = input.readString();
      _content = input.readString();
      _viewCount = input.readInt32();
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
      output.writeInt64(_userId);
      output.writeString(_label);
      output.writeInt32(_typeCd);
      output.writeInt32(_displayCd);
      output.writeInt32(_displayOrder);
      output.writeInt32(_importantCd);
      output.writeInt32(_destroyCd);
      output.writeInt64(_beginDate.get());
      output.writeInt64(_endDate.get());
      output.writeInt64(_publishDate.get());
      output.writeInt32(_linkCd);
      output.writeString(_linkUrl);
      output.writeString(_description);
      output.writeString(_content);
      output.writeInt32(_viewCount);
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
      FDataLogicNoticeUnit unit = (FDataLogicNoticeUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setUserId(_userId);
      unit.setLabel(_label);
      unit.setTypeCd(_typeCd);
      unit.setDisplayCd(_displayCd);
      unit.setDisplayOrder(_displayOrder);
      unit.setImportantCd(_importantCd);
      unit.setDestroyCd(_destroyCd);
      unit.beginDate().assign(_beginDate);
      unit.endDate().assign(_endDate);
      unit.publishDate().assign(_publishDate);
      unit.setLinkCd(_linkCd);
      unit.setLinkUrl(_linkUrl);
      unit.setDescription(_description);
      unit.setContent(_content);
      unit.setViewCount(_viewCount);
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
   public FDataLogicNoticeUnit clone(){
      FDataLogicNoticeUnit unit = RClass.newInstance(FDataLogicNoticeUnit.class);
      copy(unit);
      return unit;
   }
}
