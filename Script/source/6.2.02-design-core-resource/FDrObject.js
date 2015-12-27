//==========================================================
// <T>设计资源对象。</T>
//
// @class
// @author maocy
// @history 150131
//==========================================================
MO.FDrObject = function FDrObject(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   //..........................................................
   // @attribute
   o._guid       = MO.Class.register(o, new MO.AGetSet('_guid'));
   o._code       = MO.Class.register(o, new MO.AGetSet('_code'));
   o._label      = MO.Class.register(o, new MO.AGetSet('_label'));
   //..........................................................
   // @method
   o.unserialize = MO.FDrObject_unserialize;
   o.saveConfig  = MO.FDrObject_saveConfig;
   return o;
}

//==========================================================
// <T>从输入流里反序列化数据内容</T>
//
// @param p:input:FByteStream 数据流
//==========================================================
MO.FDrObject_unserialize = function FDrObject_unserialize(p){
   var o = this;
   o._guid = p.readString();
   o._code = p.readString();
   o._label = p.readString();
}

//==========================================================
// <T>数据内容存储到配置节点中。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrObject_saveConfig = function FDrObject_saveConfig(xconfig){
   var o = this;
   // 存储属性
   xconfig.setNvl('guid', o._guid);
   xconfig.setNvl('code', o._code);
   xconfig.setNvl('label', o._label);
}
