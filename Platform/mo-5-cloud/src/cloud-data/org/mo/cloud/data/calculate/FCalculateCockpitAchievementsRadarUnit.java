package org.mo.cloud.data.calculate;

import java.util.Map;

import org.mo.com.collections.FRow;
import org.mo.com.io.IDataInput;
import org.mo.com.io.IDataOutput;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.IStringPair;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RDouble;
import org.mo.com.lang.RInteger;
import org.mo.com.lang.RLong;
import org.mo.com.lang.RString;
import org.mo.com.lang.reflect.RClass;
import org.mo.com.lang.type.TDateTime;
import org.mo.core.aop.face.ASourceMachine;
import org.mo.data.logic.FLogicUnit;

//============================================================
// <T>雷达图逻辑单元。</T>
//============================================================
@ASourceMachine
public class FCalculateCockpitAchievementsRadarUnit
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

   // 存储字段部门编号的定义。
   private long __departmentId;

   // 字段部门编号的定义。
   protected long _departmentId;

   // 存储字段e租宝部门编号的定义。
   private long __departmentLid;

   // 字段e租宝部门编号的定义。
   protected long _departmentLid;

   // 存储字段部门名称的定义。
   private String __departmentLabel;

   // 字段部门名称的定义。
   protected String _departmentLabel;

   // 存储字段部门总体评分的定义。
   private double __score;

   // 字段部门总体评分的定义。
   protected double _score;

   // 存储字段业绩的定义。
   private double __performance;

   // 字段业绩的定义。
   protected double _performance;

   // 存储字段人力的定义。
   private int __manpower;

   // 字段人力的定义。
   protected int _manpower;

   // 存储字段人均的定义。
   private double __percapita;

   // 字段人均的定义。
   protected double _percapita;

   // 存储字段任务的定义。
   private double __task;

   // 字段任务的定义。
   protected double _task;

   // 存储字段完成度的定义。
   private double __completionRate;

   // 字段完成度的定义。
   protected double _completionRate;

   // 存储字段趋势的定义。
   private int __trendCd;

   // 字段趋势的定义。
   protected int _trendCd;

   // 存储字段建议的定义。
   private String __advice;

   // 字段建议的定义。
   protected String _advice;

   // 存储字段业绩评分的定义。
   private double __performanceScore;

   // 字段业绩评分的定义。
   protected double _performanceScore;

   // 存储字段人力评分的定义。
   private double __manpowerScore;

   // 字段人力评分的定义。
   protected double _manpowerScore;

   // 存储字段人均评分的定义。
   private double __percapitaScore;

   // 字段人均评分的定义。
   protected double _percapitaScore;

   // 存储字段任务评分的定义。
   private double __taskScore;

   // 字段任务评分的定义。
   protected double _taskScore;

   // 存储字段任务评分的定义。
   private double __trendScore;

   // 字段任务评分的定义。
   protected double _trendScore;

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
   // <T>构造雷达图逻辑单元。</T>
   //============================================================
   public FCalculateCockpitAchievementsRadarUnit(){
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
   // <T>判断部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentIdChanged(){
      return __departmentId != _departmentId;
   }

   //============================================================
   // <T>获得部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentId(){
      return _departmentId;
   }

   //============================================================
   // <T>设置部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentId(long value){
      _departmentId = value;
   }

   //============================================================
   // <T>判断e租宝部门编号的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLidChanged(){
      return __departmentLid != _departmentLid;
   }

   //============================================================
   // <T>获得e租宝部门编号的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public long departmentLid(){
      return _departmentLid;
   }

   //============================================================
   // <T>设置e租宝部门编号的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLid(long value){
      _departmentLid = value;
   }

   //============================================================
   // <T>判断部门名称的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isDepartmentLabelChanged(){
      return !RString.equals(__departmentLabel, _departmentLabel);
   }

   //============================================================
   // <T>获得部门名称的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String departmentLabel(){
      return _departmentLabel;
   }

   //============================================================
   // <T>设置部门名称的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setDepartmentLabel(String value){
      _departmentLabel = value;
   }

   //============================================================
   // <T>判断部门总体评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isScoreChanged(){
      return __score != _score;
   }

   //============================================================
   // <T>获得部门总体评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double score(){
      return _score;
   }

   //============================================================
   // <T>设置部门总体评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setScore(double value){
      _score = value;
   }

   //============================================================
   // <T>判断业绩的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPerformanceChanged(){
      return __performance != _performance;
   }

   //============================================================
   // <T>获得业绩的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double performance(){
      return _performance;
   }

   //============================================================
   // <T>设置业绩的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPerformance(double value){
      _performance = value;
   }

   //============================================================
   // <T>判断人力的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isManpowerChanged(){
      return __manpower != _manpower;
   }

   //============================================================
   // <T>获得人力的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int manpower(){
      return _manpower;
   }

   //============================================================
   // <T>设置人力的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setManpower(int value){
      _manpower = value;
   }

   //============================================================
   // <T>判断人均的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPercapitaChanged(){
      return __percapita != _percapita;
   }

   //============================================================
   // <T>获得人均的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double percapita(){
      return _percapita;
   }

   //============================================================
   // <T>设置人均的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPercapita(double value){
      _percapita = value;
   }

   //============================================================
   // <T>判断任务的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTaskChanged(){
      return __task != _task;
   }

   //============================================================
   // <T>获得任务的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double task(){
      return _task;
   }

   //============================================================
   // <T>设置任务的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTask(double value){
      _task = value;
   }

   //============================================================
   // <T>判断完成度的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isCompletionRateChanged(){
      return __completionRate != _completionRate;
   }

   //============================================================
   // <T>获得完成度的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double completionRate(){
      return _completionRate;
   }

   //============================================================
   // <T>设置完成度的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setCompletionRate(double value){
      _completionRate = value;
   }

   //============================================================
   // <T>判断趋势的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTrendCdChanged(){
      return __trendCd != _trendCd;
   }

   //============================================================
   // <T>获得趋势的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public int trendCd(){
      return _trendCd;
   }

   //============================================================
   // <T>设置趋势的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTrendCd(int value){
      _trendCd = value;
   }

   //============================================================
   // <T>判断建议的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isAdviceChanged(){
      return !RString.equals(__advice, _advice);
   }

   //============================================================
   // <T>获得建议的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public String advice(){
      return _advice;
   }

   //============================================================
   // <T>设置建议的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setAdvice(String value){
      _advice = value;
   }

   //============================================================
   // <T>判断业绩评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPerformanceScoreChanged(){
      return __performanceScore != _performanceScore;
   }

   //============================================================
   // <T>获得业绩评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double performanceScore(){
      return _performanceScore;
   }

   //============================================================
   // <T>设置业绩评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPerformanceScore(double value){
      _performanceScore = value;
   }

   //============================================================
   // <T>判断人力评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isManpowerScoreChanged(){
      return __manpowerScore != _manpowerScore;
   }

   //============================================================
   // <T>获得人力评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double manpowerScore(){
      return _manpowerScore;
   }

   //============================================================
   // <T>设置人力评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setManpowerScore(double value){
      _manpowerScore = value;
   }

   //============================================================
   // <T>判断人均评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isPercapitaScoreChanged(){
      return __percapitaScore != _percapitaScore;
   }

   //============================================================
   // <T>获得人均评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double percapitaScore(){
      return _percapitaScore;
   }

   //============================================================
   // <T>设置人均评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setPercapitaScore(double value){
      _percapitaScore = value;
   }

   //============================================================
   // <T>判断任务评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTaskScoreChanged(){
      return __taskScore != _taskScore;
   }

   //============================================================
   // <T>获得任务评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double taskScore(){
      return _taskScore;
   }

   //============================================================
   // <T>设置任务评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTaskScore(double value){
      _taskScore = value;
   }

   //============================================================
   // <T>判断任务评分的数据是否改变。</T>
   //
   // @return 数据内容
   //============================================================
   public boolean isTrendScoreChanged(){
      return __trendScore != _trendScore;
   }

   //============================================================
   // <T>获得任务评分的数据内容。</T>
   //
   // @return 数据内容
   //============================================================
   public double trendScore(){
      return _trendScore;
   }

   //============================================================
   // <T>设置任务评分的数据内容。</T>
   //
   // @param value 数据内容
   //============================================================
   public void setTrendScore(double value){
      _trendScore = value;
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
         case "department_id":
            return Long.toString(_departmentId);
         case "department_lid":
            return Long.toString(_departmentLid);
         case "department_label":
            return _departmentLabel;
         case "score":
            return RDouble.toString(_score);
         case "performance":
            return RDouble.toString(_performance);
         case "manpower":
            return RInteger.toString(_manpower);
         case "percapita":
            return RDouble.toString(_percapita);
         case "task":
            return RDouble.toString(_task);
         case "completion_rate":
            return RDouble.toString(_completionRate);
         case "trend_cd":
            return RInteger.toString(_trendCd);
         case "advice":
            return _advice;
         case "performance_score":
            return RDouble.toString(_performanceScore);
         case "manpower_score":
            return RDouble.toString(_manpowerScore);
         case "percapita_score":
            return RDouble.toString(_percapitaScore);
         case "task_score":
            return RDouble.toString(_taskScore);
         case "trend_score":
            return RDouble.toString(_trendScore);
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
         case "department_id":
            _departmentId = RLong.parse(value);
            break;
         case "department_lid":
            _departmentLid = RLong.parse(value);
            break;
         case "department_label":
            _departmentLabel = value;
            break;
         case "score":
            _score = RDouble.parse(value);
            break;
         case "performance":
            _performance = RDouble.parse(value);
            break;
         case "manpower":
            _manpower = RInteger.parse(value);
            break;
         case "percapita":
            _percapita = RDouble.parse(value);
            break;
         case "task":
            _task = RDouble.parse(value);
            break;
         case "completion_rate":
            _completionRate = RDouble.parse(value);
            break;
         case "trend_cd":
            _trendCd = RInteger.parse(value);
            break;
         case "advice":
            _advice = value;
            break;
         case "performance_score":
            _performanceScore = RDouble.parse(value);
            break;
         case "manpower_score":
            _manpowerScore = RDouble.parse(value);
            break;
         case "percapita_score":
            _percapitaScore = RDouble.parse(value);
            break;
         case "task_score":
            _taskScore = RDouble.parse(value);
            break;
         case "trend_score":
            _trendScore = RDouble.parse(value);
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
            case "department_id":
               __departmentId = RLong.parse(value);
               _departmentId = __departmentId;
               break;
            case "department_lid":
               __departmentLid = RLong.parse(value);
               _departmentLid = __departmentLid;
               break;
            case "department_label":
               __departmentLabel = value;
               _departmentLabel = __departmentLabel;
               break;
            case "score":
               __score = RDouble.parse(value);
               _score = __score;
               break;
            case "performance":
               __performance = RDouble.parse(value);
               _performance = __performance;
               break;
            case "manpower":
               __manpower = RInteger.parse(value);
               _manpower = __manpower;
               break;
            case "percapita":
               __percapita = RDouble.parse(value);
               _percapita = __percapita;
               break;
            case "task":
               __task = RDouble.parse(value);
               _task = __task;
               break;
            case "completion_rate":
               __completionRate = RDouble.parse(value);
               _completionRate = __completionRate;
               break;
            case "trend_cd":
               __trendCd = RInteger.parse(value);
               _trendCd = __trendCd;
               break;
            case "advice":
               __advice = value;
               _advice = __advice;
               break;
            case "performance_score":
               __performanceScore = RDouble.parse(value);
               _performanceScore = __performanceScore;
               break;
            case "manpower_score":
               __manpowerScore = RDouble.parse(value);
               _manpowerScore = __manpowerScore;
               break;
            case "percapita_score":
               __percapitaScore = RDouble.parse(value);
               _percapitaScore = __percapitaScore;
               break;
            case "task_score":
               __taskScore = RDouble.parse(value);
               _taskScore = __taskScore;
               break;
            case "trend_score":
               __trendScore = RDouble.parse(value);
               _trendScore = __trendScore;
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
      row.set("departmentId", _departmentId);
      row.set("departmentLid", _departmentLid);
      row.set("departmentLabel", _departmentLabel);
      row.set("score", _score);
      row.set("performance", _performance);
      row.set("manpower", _manpower);
      row.set("percapita", _percapita);
      row.set("task", _task);
      row.set("completionRate", _completionRate);
      row.set("trendCd", _trendCd);
      row.set("advice", _advice);
      row.set("performanceScore", _performanceScore);
      row.set("manpowerScore", _manpowerScore);
      row.set("percapitaScore", _percapitaScore);
      row.set("taskScore", _taskScore);
      row.set("trendScore", _trendScore);
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
      map.put("departmentId", RLong.toString(_departmentId));
      map.put("departmentLid", RLong.toString(_departmentLid));
      map.put("departmentLabel", _departmentLabel);
      map.put("score", RDouble.toString(_score));
      map.put("performance", RDouble.toString(_performance));
      map.put("manpower", RInteger.toString(_manpower));
      map.put("percapita", RDouble.toString(_percapita));
      map.put("task", RDouble.toString(_task));
      map.put("completionRate", RDouble.toString(_completionRate));
      map.put("trendCd", RInteger.toString(_trendCd));
      map.put("advice", _advice);
      map.put("performanceScore", RDouble.toString(_performanceScore));
      map.put("manpowerScore", RDouble.toString(_manpowerScore));
      map.put("percapitaScore", RDouble.toString(_percapitaScore));
      map.put("taskScore", RDouble.toString(_taskScore));
      map.put("trendScore", RDouble.toString(_trendScore));
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
      _departmentId = input.readInt64();
      _departmentLid = input.readInt64();
      _departmentLabel = input.readString();
      _manpower = input.readInt32();
      _trendCd = input.readInt32();
      _advice = input.readString();
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
      output.writeInt64(_departmentId);
      output.writeInt64(_departmentLid);
      output.writeString(_departmentLabel);
      output.writeInt32(_manpower);
      output.writeInt32(_trendCd);
      output.writeString(_advice);
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
      FCalculateCockpitAchievementsRadarUnit unit = (FCalculateCockpitAchievementsRadarUnit)logicUnit;
      unit.setOuid(_ouid);
      unit.setOvld(_ovld);
      unit.setGuid(_guid);
      unit.setDepartmentId(_departmentId);
      unit.setDepartmentLid(_departmentLid);
      unit.setDepartmentLabel(_departmentLabel);
      unit.setScore(_score);
      unit.setPerformance(_performance);
      unit.setManpower(_manpower);
      unit.setPercapita(_percapita);
      unit.setTask(_task);
      unit.setCompletionRate(_completionRate);
      unit.setTrendCd(_trendCd);
      unit.setAdvice(_advice);
      unit.setPerformanceScore(_performanceScore);
      unit.setManpowerScore(_manpowerScore);
      unit.setPercapitaScore(_percapitaScore);
      unit.setTaskScore(_taskScore);
      unit.setTrendScore(_trendScore);
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
   public FCalculateCockpitAchievementsRadarUnit clone(){
      FCalculateCockpitAchievementsRadarUnit unit = RClass.newInstance(FCalculateCockpitAchievementsRadarUnit.class);
      copy(unit);
      return unit;
   }
}
