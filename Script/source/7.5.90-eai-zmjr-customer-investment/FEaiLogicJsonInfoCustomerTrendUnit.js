//==========================================================
// <T>用户投资统计单元。</T>
//
// @class
// @author suiming
// @history 151020
//==========================================================
MO.FEaiLogicJsonInfoCustomerTrendUnit = function FEaiLogicJsonInfoCustomerTrendUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   //..........................................................
   // @attribute
   o._recordDate    = MO.Class.register(o, [new MO.AGetSet('_recordDate'), new MO.APersistence('_recordDate', MO.EDataType.String)]);
   o._investment    = MO.Class.register(o, [new MO.AGetSet('_investment'), new MO.APersistence('_investment', MO.EDataType.Double)]);
   o._customerCount = MO.Class.register(o, [new MO.AGetSet('_customerCount'), new MO.APersistence('_customerCount', MO.EDataType.Uint32)]);
   return o;
}
