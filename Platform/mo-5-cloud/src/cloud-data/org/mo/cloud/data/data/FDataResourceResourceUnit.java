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
// <T>资源信息表逻辑单元。</T>
//============================================================
@ASourceMachine
public class FDataResourceResourceUnit
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

   // 存储字段全局唯一标识的定义。
   private String __guid;

   // 字段全局唯一标识的定义。
   protected String _guid;

   // 存储字段用户编号的定义。
   private long __userId;

   // 字段用户编号的定义。
   protected long _userId;

   // 存储字段项目编号的定义。
   private long __projectId;

   // 字段项目编号的定义。
   protected long _projectId;

   // 存储字段目录编号的定义。
   private long __catalogId;

   // 字段目录编号的定义。
   protected long _catalogId;

   // 存储字段资源类型的定义。
   private int __resourceCd;

   // 字段资源类型的定义。
   protected int _resourceCd;

   // 存储字段代码的定义。
   private String __code;

   // 字段代码的定义。
   protected String _code;

   // 存储字段名称的定义。
   private String __label;

   // 字段名称的定义。
   protected String _label;

   // 存储字段关键字的定义。
   private String __keywords;

   // 字段关键字的定义。
   protected String _keywords;

   // 存储字段分享类型的定义。
   private int __shareCd;

   // 字段分享类型的定义。
   protected int _shareCd;

   // 存储字段是否有预览的定义。
   private boolean __hasPreview;

   // 字段是否有预览的定义。
   protected boolean _hasPreview;

   // 存储字段图标地址的定义。
   private String __iconUrl;

   // 字段图标地址的定义。
   protected String _iconUrl;

   // 存储字段数据大小的定义。
   private int __dataSize;

   // 字段数据大小的定义。
   protected int _dataSize;

   // 存储字段数据校验的定义。
   private String __dataHash;

   // 字段数据校验的定义。
   protected String _dataHash;

   // 存储字段描述的定义。
   private String __description;

   // 字段描述的定义。
   protected String _description;

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
   // <T>构造资源信息表逻辑单元。</T>
   //============================================================
   public FDataResourceResourceUnit(){
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
   // <T>判断全局唯一标识的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isGuidChanged(){
      return !RString.equals(__guid, _guid);
   }

   //============================================================
   // <T>获得全局唯一标识的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String guid(){
      return _guid;
   }

   //============================================================
   // <T>设置全局唯一标识的数据内容。</T>
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
   // <T>判断项目编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isProjectIdChanged(){
      return __projectId != _projectId;
   }

   //============================================================
   // <T>获得项目编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long projectId(){
      return _projectId;
   }

   //============================================================
   // <T>获得项目编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataSolutionProjectUnit project(){
      FDataSolutionProjectLogic logic = _logicContext.findLogic(FDataSolutionProjectLogic.class);
      FDataSolutionProjectUnit unit = logic.find(_projectId);
      return unit;
   }

   //============================================================
   // <T>设置项目编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setProjectId(long value){
      _projectId = value;
   }

   //============================================================
   // <T>判断目录编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCatalogIdChanged(){
      return __catalogId != _catalogId;
   }

   //============================================================
   // <T>获得目录编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long catalogId(){
      return _catalogId;
   }

   //============================================================
   // <T>获得目录编号的数据单元。</T>
   //
   // @return 数据内容
   //============================================================
   public FDataResourceCatalogUnit catalog(){
      FDataResourceCatalogLogic logic = _logicContext.findLogic(FDataResourceCatalogLogic.class);
      FDataResourceCatalogUnit unit = logic.find(_catalogId);
      return unit;
   }

   //============================================================
   // <T>设置目录编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCatalogId(long value){
      _catalogId = value;
   }

   //============================================================
   // <T>判断资源类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isResourceCdChanged(){
      return __resourceCd != _resourceCd;
   }

   //============================================================
   // <T>获得资源类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int resourceCd(){
      return _resourceCd;
   }

   //============================================================
   // <T>设置资源类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setResourceCd(int value){
      _resourceCd = value;
   }

   //============================================================
   // <T>判断代码的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCodeChanged(){
      return !RString.equals(__code, _code);
   }

   //============================================================
   // <T>获得代码的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String code(){
      return _code;
   }

   //============================================================
   // <T>设置代码的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCode(String value){
      _code = value;
   }

   //============================================================
   // <T>判断名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLabelChanged(){
      return !RString.equals(__label, _label);
   }

   //============================================================
   // <T>获得名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String label(){
      return _label;
   }

   //============================================================
   // <T>设置名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLabel(String value){
      _label = value;
   }

   //============================================================
   // <T>判断关键字的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isKeywordsChanged(){
      return !RString.equals(__keywords, _keywords);
   }

   //============================================================
   // <T>获得关键字的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String keywords(){
      return _keywords;
   }

   //============================================================
   // <T>设置关键字的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setKeywords(String value){
      _keywords = value;
   }

   //============================================================
   // <T>判断分享类型的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isShareCdChanged(){
      return __shareCd != _shareCd;
   }

   //============================================================
   // <T>获得分享类型的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int shareCd(){
      return _shareCd;
   }

   //============================================================
   // <T>设置分享类型的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setShareCd(int value){
      _shareCd = value;
   }

   //============================================================
   // <T>判断是否有预览的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isHasPreviewChanged(){
      return __hasPreview != _hasPreview;
   }

   //============================================================
   // <T>获得是否有预览的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean hasPreview(){
      return _hasPreview;
   }

   //============================================================
   // <T>设置是否有预览的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setHasPreview(boolean value){
      _hasPreview = value;
   }

   //============================================================
   // <T>判断图标地址的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isIconUrlChanged(){
      return !RString.equals(__iconUrl, _iconUrl);
   }

   //============================================================
   // <T>获得图标地址的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String iconUrl(){
      return _iconUrl;
   }

   //============================================================
   // <T>设置图标地址的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setIconUrl(String value){
      _iconUrl = value;
   }

   //============================================================
   // <T>判断数据大小的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDataSizeChanged(){
      return __dataSize != _dataSize;
   }

   //============================================================
   // <T>获得数据大小的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int dataSize(){
      return _dataSize;
   }

   //============================================================
   // <T>设置数据大小的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDataSize(int value){
      _dataSize = value;
   }

   //============================================================
   // <T>判断数据校验的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDataHashChanged(){
      return !RString.equals(__dataHash, _dataHash);
   }

   //============================================================
   // <T>获得数据校验的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String dataHash(){
      return _dataHash;
   }

   //============================================================
   // <T>设置数据校验的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDataHash(String value){
      _dataHash = value;
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
         case "user_id":
            return Long.toString(_userId);
         case "project_id":
            return Long.toString(_projectId);
         case "catalog_id":
            return Long.toString(_catalogId);
         case "resource_cd":
            return RInteger.toString(_resourceCd);
         case "code":
            return _code;
         case "label":
            return _label;
         case "keywords":
            return _keywords;
         case "share_cd":
            return RInteger.toString(_shareCd);
         case "has_preview":
            return RBoolean.toString(_hasPreview);
         case "icon_url":
            return _iconUrl;
         case "data_size":
            return RInteger.toString(_dataSize);
         case "data_hash":
            return _dataHash;
         case "description":
            return _description;
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
         case "user_id":
            _userId = RLong.parse(value);
            break;
         case "project_id":
            _projectId = RLong.parse(value);
            break;
         case "catalog_id":
            _catalogId = RLong.parse(value);
            break;
         case "resource_cd":
            _resourceCd = RInteger.parse(value);
            break;
         case "code":
            _code = value;
            break;
         case "label":
            _label = value;
            break;
         case "keywords":
            _keywords = value;
            break;
         case "share_cd":
            _shareCd = RInteger.parse(value);
            break;
         case "has_preview":
            _hasPreview = RBoolean.parse(value);
            break;
         case "icon_url":
            _iconUrl = value;
            break;
         case "data_size":
            _dataSize = RInteger.parse(value);
            break;
         case "data_hash":
            _dataHash = value;
            break;
         case "description":
            _description = value;
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
            case "user_id":
               __userId = RLong.parse(value);
               _userId = __userId;
               break;
            case "project_id":
               __projectId = RLong.parse(value);
               _projectId = __projectId;
               break;
            case "catalog_id":
               __catalogId = RLong.parse(value);
               _catalogId = __catalogId;
               break;
            case "resource_cd":
               __resourceCd = RInteger.parse(value);
               _resourceCd = __resourceCd;
               break;
            case "code":
               __code = value;
               _code = __code;
               break;
            case "label":
               __label = value;
               _label = __label;
               break;
            case "keywords":
               __keywords = value;
               _keywords = __keywords;
               break;
            case "share_cd":
               __shareCd = RInteger.parse(value);
               _shareCd = __shareCd;
               break;
            case "has_preview":
               __hasPreview = RBoolean.parse(value);
               _hasPreview = __hasPreview;
               break;
            case "icon_url":
               __iconUrl = value;
               _iconUrl = __iconUrl;
               break;
            case "data_size":
               __dataSize = RInteger.parse(value);
               _dataSize = __dataSize;
               break;
            case "data_hash":
               __dataHash = value;
               _dataHash = __dataHash;
               break;
            case "description":
               __description = value;
               _description = __description;
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
      row.set("userId", _userId);
      row.set("projectId", _projectId);
      row.set("catalogId", _catalogId);
      row.set("resourceCd", _resourceCd);
      row.set("code", _code);
      row.set("label", _label);
      row.set("keywords", _keywords);
      row.set("shareCd", _shareCd);
      row.set("hasPreview", _hasPreview);
      row.set("iconUrl", _iconUrl);
      row.set("dataSize", _dataSize);
      row.set("dataHash", _dataHash);
      row.set("description", _description);
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
      map.put("userId", RLong.toString(_userId));
      map.put("projectId", RLong.toString(_projectId));
      map.put("catalogId", RLong.toString(_catalogId));
      map.put("resourceCd", RInteger.toString(_resourceCd));
      map.put("code", _code);
      map.put("label", _label);
      map.put("keywords", _keywords);
      map.put("shareCd", RInteger.toString(_shareCd));
      map.put("hasPreview", RBoolean.toString(_hasPreview));
      map.put("iconUrl", _iconUrl);
      map.put("dataSize", RInteger.toString(_dataSize));
      map.put("dataHash", _dataHash);
      map.put("description", _description);
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
      _userId = input.readInt64();
      _projectId = input.readInt64();
      _catalogId = input.readInt64();
      _resourceCd = input.readInt32();
      _code = input.readString();
      _label = input.readString();
      _keywords = input.readString();
      _shareCd = input.readInt32();
      _hasPreview = input.readBoolean();
      _iconUrl = input.readString();
      _dataSize = input.readInt32();
      _dataHash = input.readString();
      _description = input.readString();
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
      output.writeInt64(_userId);
      output.writeInt64(_projectId);
      output.writeInt64(_catalogId);
      output.writeInt32(_resourceCd);
      output.writeString(_code);
      output.writeString(_label);
      output.writeString(_keywords);
      output.writeInt32(_shareCd);
      output.writeBoolean(_hasPreview);
      output.writeString(_iconUrl);
      output.writeInt32(_dataSize);
      output.writeString(_dataHash);
      output.writeString(_description);
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
      FDataResourceResourceUnit unit = (FDataResourceResourceUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setUserId(_userId);
      unit.setProjectId(_projectId);
      unit.setCatalogId(_catalogId);
      unit.setResourceCd(_resourceCd);
      unit.setCode(_code);
      unit.setLabel(_label);
      unit.setKeywords(_keywords);
      unit.setShareCd(_shareCd);
      unit.setHasPreview(_hasPreview);
      unit.setIconUrl(_iconUrl);
      unit.setDataSize(_dataSize);
      unit.setDataHash(_dataHash);
      unit.setDescription(_description);
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
   public FDataResourceResourceUnit clone(){
      FDataResourceResourceUnit unit = RClass.newInstance(FDataResourceResourceUnit.class);
      copy(unit);
      return unit;
   }
}
