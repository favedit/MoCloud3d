//==========================================================
// <T>驾驶舱趋势消息。</T>
//
// @class
// @author maocy
// @history 151107
//==========================================================
MO.FEaiCockpitForecastMessageAchievementProblemDatas = function FEaiCockpitForecastMessageAchievementProblemDatas(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   //..........................................................
   // @attribute
   o._datas = MO.Class.register(o, [new MO.AGetter('_datas'), new MO.APersistence('_datas', MO.EDataType.Objects, MO.FEaiCockpitForecastMessageAchievementProblemData)]);
   return o;
}