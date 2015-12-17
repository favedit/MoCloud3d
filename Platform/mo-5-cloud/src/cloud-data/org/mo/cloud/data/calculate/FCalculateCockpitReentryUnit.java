package org.mo.cloud.data.calculate;

import java.util.Map;

import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>离职再入职逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitReentryUnit
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

   // 存储字段员工编号的定义。
   private long __employeeId;

   // 字段员工编号的定义。
   protected long _employeeId;

   // 存储字段e租宝员工编号的定义。
   private long __employeeLid;

   // 字段e租宝员工编号的定义。
   protected long _employeeLid;

   // 存储字段员工名称的定义。
   private String __employeeLabel;

   // 字段员工名称的定义。
   protected String _employeeLabel;

   // 存储字段离职部门编号的定义。
   private long __leaveDepartmentId;

   // 字段离职部门编号的定义。
   protected long _leaveDepartmentId;

   // 存储字段e租宝离职部门编号的定义。
   private long __leaveDepartmentLid;

   // 字段e租宝离职部门编号的定义。
   protected long _leaveDepartmentLid;

   // 存储字段离职部门名称的定义。
   private String __leaveDepartmentLabel;

   // 字段离职部门名称的定义。
   protected String _leaveDepartmentLabel;

   // 存储字段离职时间的定义。
   private TDateTime __leaveDepartmentDate = new TDateTime();

   // 字段离职时间的定义。
   protected TDateTime _leaveDepartmentDate = new TDateTime();

   // 存储字段入职部门编号的定义。
   private long __reentryDepartmentId;

   // 字段入职部门编号的定义。
   protected long _reentryDepartmentId;

   // 存储字段e租宝再入职部门编号的定义。
   private long __reentryDepartmentLid;

   // 字段e租宝再入职部门编号的定义。
   protected long _reentryDepartmentLid;

   // 存储字段再入职部门名称的定义。
   private String __reentryDepartmentLabel;

   // 字段再入职部门名称的定义。
   protected String _reentryDepartmentLabel;

   // 存储字段再入职时间的定义。
   private TDateTime __reentryDepartmentDate = new TDateTime();

   // 字段再入职时间的定义。
   protected TDateTime _reentryDepartmentDate = new TDateTime();

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
   // <T>构造离职再入职逻辑单元。</T>
   //============================================================
   public FCalculateCockpitReentryUnit(){
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
   // <T>判断员工编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isEmployeeIdChanged(){
      return __employeeId != _employeeId;
   }

   //============================================================
   // <T>获得员工编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long employeeId(){
      return _employeeId;
   }

   //============================================================
   // <T>设置员工编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setEmployeeId(long value){
      _employeeId = value;
   }

   //============================================================
   // <T>判断e租宝员工编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isEmployeeLidChanged(){
      return __employeeLid != _employeeLid;
   }

   //============================================================
   // <T>获得e租宝员工编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long employeeLid(){
      return _employeeLid;
   }

   //============================================================
   // <T>设置e租宝员工编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setEmployeeLid(long value){
      _employeeLid = value;
   }

   //============================================================
   // <T>判断员工名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isEmployeeLabelChanged(){
      return !RString.equals(__employeeLabel, _employeeLabel);
   }

   //============================================================
   // <T>获得员工名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String employeeLabel(){
      return _employeeLabel;
   }

   //============================================================
   // <T>设置员工名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setEmployeeLabel(String value){
      _employeeLabel = value;
   }

   //============================================================
   // <T>判断离职部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLeaveDepartmentIdChanged(){
      return __leaveDepartmentId != _leaveDepartmentId;
   }

   //============================================================
   // <T>获得离职部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long leaveDepartmentId(){
      return _leaveDepartmentId;
   }

   //============================================================
   // <T>设置离职部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLeaveDepartmentId(long value){
      _leaveDepartmentId = value;
   }

   //============================================================
   // <T>判断e租宝离职部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLeaveDepartmentLidChanged(){
      return __leaveDepartmentLid != _leaveDepartmentLid;
   }

   //============================================================
   // <T>获得e租宝离职部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long leaveDepartmentLid(){
      return _leaveDepartmentLid;
   }

   //============================================================
   // <T>设置e租宝离职部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLeaveDepartmentLid(long value){
      _leaveDepartmentLid = value;
   }

   //============================================================
   // <T>判断离职部门名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLeaveDepartmentLabelChanged(){
      return !RString.equals(__leaveDepartmentLabel, _leaveDepartmentLabel);
   }

   //============================================================
   // <T>获得离职部门名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String leaveDepartmentLabel(){
      return _leaveDepartmentLabel;
   }

   //============================================================
   // <T>设置离职部门名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLeaveDepartmentLabel(String value){
      _leaveDepartmentLabel = value;
   }

   //============================================================
   // <T>判断离职时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isLeaveDepartmentDateChanged(){
      return !__leaveDepartmentDate.equals(_leaveDepartmentDate);
   }

   //============================================================
   // <T>获得离职时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime leaveDepartmentDate(){
      return _leaveDepartmentDate;
   }

   //============================================================
   // <T>设置离职时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setLeaveDepartmentDate(TDateTime value){
      _leaveDepartmentDate = value;
   }

   //============================================================
   // <T>判断入职部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isReentryDepartmentIdChanged(){
      return __reentryDepartmentId != _reentryDepartmentId;
   }

   //============================================================
   // <T>获得入职部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long reentryDepartmentId(){
      return _reentryDepartmentId;
   }

   //============================================================
   // <T>设置入职部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setReentryDepartmentId(long value){
      _reentryDepartmentId = value;
   }

   //============================================================
   // <T>判断e租宝再入职部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isReentryDepartmentLidChanged(){
      return __reentryDepartmentLid != _reentryDepartmentLid;
   }

   //============================================================
   // <T>获得e租宝再入职部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long reentryDepartmentLid(){
      return _reentryDepartmentLid;
   }

   //============================================================
   // <T>设置e租宝再入职部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setReentryDepartmentLid(long value){
      _reentryDepartmentLid = value;
   }

   //============================================================
   // <T>判断再入职部门名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isReentryDepartmentLabelChanged(){
      return !RString.equals(__reentryDepartmentLabel, _reentryDepartmentLabel);
   }

   //============================================================
   // <T>获得再入职部门名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String reentryDepartmentLabel(){
      return _reentryDepartmentLabel;
   }

   //============================================================
   // <T>设置再入职部门名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setReentryDepartmentLabel(String value){
      _reentryDepartmentLabel = value;
   }

   //============================================================
   // <T>判断再入职时间的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isReentryDepartmentDateChanged(){
      return !__reentryDepartmentDate.equals(_reentryDepartmentDate);
   }

   //============================================================
   // <T>获得再入职时间的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public TDateTime reentryDepartmentDate(){
      return _reentryDepartmentDate;
   }

   //============================================================
   // <T>设置再入职时间的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setReentryDepartmentDate(TDateTime value){
      _reentryDepartmentDate = value;
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
         case "employee_id":
            return Long.toString(_employeeId);
         case "employee_lid":
            return Long.toString(_employeeLid);
         case "employee_label":
            return _employeeLabel;
         case "leave_department_id":
            return Long.toString(_leaveDepartmentId);
         case "leave_department_lid":
            return Long.toString(_leaveDepartmentLid);
         case "leave_department_label":
            return _leaveDepartmentLabel;
         case "leave_department_date":
            return _leaveDepartmentDate.toString();
         case "reentry_department_id":
            return Long.toString(_reentryDepartmentId);
         case "reentry_department_lid":
            return Long.toString(_reentryDepartmentLid);
         case "reentry_department_label":
            return _reentryDepartmentLabel;
         case "reentry_department_date":
            return _reentryDepartmentDate.toString();
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
         case "employee_id":
            _employeeId = RLong.parse(value);
            break;
         case "employee_lid":
            _employeeLid = RLong.parse(value);
            break;
         case "employee_label":
            _employeeLabel = value;
            break;
         case "leave_department_id":
            _leaveDepartmentId = RLong.parse(value);
            break;
         case "leave_department_lid":
            _leaveDepartmentLid = RLong.parse(value);
            break;
         case "leave_department_label":
            _leaveDepartmentLabel = value;
            break;
         case "leave_department_date":
            _leaveDepartmentDate.parse(value);
            break;
         case "reentry_department_id":
            _reentryDepartmentId = RLong.parse(value);
            break;
         case "reentry_department_lid":
            _reentryDepartmentLid = RLong.parse(value);
            break;
         case "reentry_department_label":
            _reentryDepartmentLabel = value;
            break;
         case "reentry_department_date":
            _reentryDepartmentDate.parse(value);
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
            case "employee_id":
               __employeeId = RLong.parse(value);
               _employeeId = __employeeId;
               break;
            case "employee_lid":
               __employeeLid = RLong.parse(value);
               _employeeLid = __employeeLid;
               break;
            case "employee_label":
               __employeeLabel = value;
               _employeeLabel = __employeeLabel;
               break;
            case "leave_department_id":
               __leaveDepartmentId = RLong.parse(value);
               _leaveDepartmentId = __leaveDepartmentId;
               break;
            case "leave_department_lid":
               __leaveDepartmentLid = RLong.parse(value);
               _leaveDepartmentLid = __leaveDepartmentLid;
               break;
            case "leave_department_label":
               __leaveDepartmentLabel = value;
               _leaveDepartmentLabel = __leaveDepartmentLabel;
               break;
            case "leave_department_date":
               __leaveDepartmentDate.parse(value);
               _leaveDepartmentDate.assign(__leaveDepartmentDate);
               break;
            case "reentry_department_id":
               __reentryDepartmentId = RLong.parse(value);
               _reentryDepartmentId = __reentryDepartmentId;
               break;
            case "reentry_department_lid":
               __reentryDepartmentLid = RLong.parse(value);
               _reentryDepartmentLid = __reentryDepartmentLid;
               break;
            case "reentry_department_label":
               __reentryDepartmentLabel = value;
               _reentryDepartmentLabel = __reentryDepartmentLabel;
               break;
            case "reentry_department_date":
               __reentryDepartmentDate.parse(value);
               _reentryDepartmentDate.assign(__reentryDepartmentDate);
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
      row.set("employeeId", _employeeId);
      row.set("employeeLid", _employeeLid);
      row.set("employeeLabel", _employeeLabel);
      row.set("leaveDepartmentId", _leaveDepartmentId);
      row.set("leaveDepartmentLid", _leaveDepartmentLid);
      row.set("leaveDepartmentLabel", _leaveDepartmentLabel);
      row.set("leaveDepartmentDate", _leaveDepartmentDate);
      row.set("reentryDepartmentId", _reentryDepartmentId);
      row.set("reentryDepartmentLid", _reentryDepartmentLid);
      row.set("reentryDepartmentLabel", _reentryDepartmentLabel);
      row.set("reentryDepartmentDate", _reentryDepartmentDate);
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
      map.put("employeeId", RLong.toString(_employeeId));
      map.put("employeeLid", RLong.toString(_employeeLid));
      map.put("employeeLabel", _employeeLabel);
      map.put("leaveDepartmentId", RLong.toString(_leaveDepartmentId));
      map.put("leaveDepartmentLid", RLong.toString(_leaveDepartmentLid));
      map.put("leaveDepartmentLabel", _leaveDepartmentLabel);
      map.put("leaveDepartmentDate", _leaveDepartmentDate.format("YYYY-MM-DD HH24:MI:SS"));
      map.put("reentryDepartmentId", RLong.toString(_reentryDepartmentId));
      map.put("reentryDepartmentLid", RLong.toString(_reentryDepartmentLid));
      map.put("reentryDepartmentLabel", _reentryDepartmentLabel);
      map.put("reentryDepartmentDate", _reentryDepartmentDate.format("YYYY-MM-DD HH24:MI:SS"));
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
      _employeeId = input.readInt64();
      _employeeLid = input.readInt64();
      _employeeLabel = input.readString();
      _leaveDepartmentId = input.readInt64();
      _leaveDepartmentLid = input.readInt64();
      _leaveDepartmentLabel = input.readString();
      _leaveDepartmentDate.set(input.readInt64());
      _reentryDepartmentId = input.readInt64();
      _reentryDepartmentLid = input.readInt64();
      _reentryDepartmentLabel = input.readString();
      _reentryDepartmentDate.set(input.readInt64());
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
      output.writeInt64(_employeeId);
      output.writeInt64(_employeeLid);
      output.writeString(_employeeLabel);
      output.writeInt64(_leaveDepartmentId);
      output.writeInt64(_leaveDepartmentLid);
      output.writeString(_leaveDepartmentLabel);
      output.writeInt64(_leaveDepartmentDate.get());
      output.writeInt64(_reentryDepartmentId);
      output.writeInt64(_reentryDepartmentLid);
      output.writeString(_reentryDepartmentLabel);
      output.writeInt64(_reentryDepartmentDate.get());
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
      FCalculateCockpitReentryUnit unit = (FCalculateCockpitReentryUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setEmployeeId(_employeeId);
      unit.setEmployeeLid(_employeeLid);
      unit.setEmployeeLabel(_employeeLabel);
      unit.setLeaveDepartmentId(_leaveDepartmentId);
      unit.setLeaveDepartmentLid(_leaveDepartmentLid);
      unit.setLeaveDepartmentLabel(_leaveDepartmentLabel);
      unit.leaveDepartmentDate().assign(_leaveDepartmentDate);
      unit.setReentryDepartmentId(_reentryDepartmentId);
      unit.setReentryDepartmentLid(_reentryDepartmentLid);
      unit.setReentryDepartmentLabel(_reentryDepartmentLabel);
      unit.reentryDepartmentDate().assign(_reentryDepartmentDate);
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
   public FCalculateCockpitReentryUnit clone(){
      FCalculateCockpitReentryUnit unit = RClass.newInstance(FCalculateCockpitReentryUnit.class);
      copy(unit);
      return unit;
   }
}
