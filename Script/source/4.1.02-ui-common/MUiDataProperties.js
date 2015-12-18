//==========================================================
// <T>数据属性集合接口。</T>
//
// @face
// @author maocy
// @version 150202
//==========================================================
MO.MUiDataProperties = function MUiDataProperties(o){
   o = MO.Class.inherits(this, o);
   //..........................................................
   // @attribute
   o._dataProperties = null;
   //..........................................................
   // @method
   o.dataProperties  = MO.MUiDataProperties_dataProperties;
   o.dataPropertyGet = MO.MUiDataProperties_dataPropertyGet;
   o.dataPropertySet = MO.MUiDataProperties_dataPropertySet;
   return o;
}

//==========================================================
// <T>获得数据属性集合。</T>
//
// @return TDictionary 属性集合
//==========================================================
MO.MUiDataProperties_dataProperties = function MUiDataProperties_dataProperties(){
   var o = this;
   var properties = o._dataProperties;
   if(properties == null){
      properties = o._dataProperties = new MO.TDictionary();
   }
   return properties;
}

//==========================================================
// <T>获得数据属性。</T>
//
// @param name:String 名称
// @return Object 内容
//==========================================================
MO.MUiDataProperties_dataPropertyGet = function MUiDataProperties_dataPropertyGet(name){
   var o = this;
   var properties = o._dataProperties;
   return properties ? properties.get(name) : null;
}

//==========================================================
// <T>设置数据属性。</T>
//
// @param name:String 名称
// @param value:Object 内容
//==========================================================
MO.MUiDataProperties_dataPropertySet = function MUiDataProperties_dataPropertySet(name, value){
   var o = this;
   var properties = o.dataProperties();
   properties.set(name, value);
}
