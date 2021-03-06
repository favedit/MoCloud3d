//==========================================================
// <T>设计场景资源控制台。</T>
//
// @class
// @author maocy
// @version 150411
//==========================================================
MO.FDrSceneConsole = function FDrSceneConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   //..........................................................
   // @attribute
   o._serviceCode = 'cloud.resource.scene';
   //..........................................................
   // @method
   o.createCamera = MO.FDrSceneConsole_createCamera;
   o.createLayer  = MO.FDrSceneConsole_createLayer;
   o.createSprite = MO.FDrSceneConsole_createSprite;
   o.createMovie  = MO.FDrSceneConsole_createMovie;
   o.copyNode     = MO.FDrSceneConsole_copyNode;
   o.deleteNode   = MO.FDrSceneConsole_deleteNode;
   o.update       = MO.FDrSceneConsole_update;
   return o;
}

//==========================================================
// <T>插入相机处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrSceneConsole_createCamera = function FDrSceneConsole_createCamera(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createCamera');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>插入显示层处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrSceneConsole_createLayer = function FDrSceneConsole_createLayer(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createLayer');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>插入精灵处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrSceneConsole_createSprite = function FDrSceneConsole_createSprite(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createSprite');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>插入动画处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrSceneConsole_createMovie = function FDrSceneConsole_createMovie(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMovie');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}

//==========================================================
// <T>复制节点处理。</T>
//
// @param sceneGuid:String 场景唯一编号
// @param nodeGuid:String 节点唯一编号
//==========================================================
MO.FDrSceneConsole_copyNode = function FDrSceneConsole_copyNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('copyNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}

//==========================================================
// <T>删除节点处理。</T>
//
// @param sceneGuid:String 场景唯一编号
// @param nodeGuid:String 节点唯一编号
//==========================================================
MO.FDrSceneConsole_deleteNode = function FDrSceneConsole_deleteNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('deleteNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}

//==========================================================
// <T>更新处理。</T>
//
// @param xconfig:TXmlNode 配置节点
//==========================================================
MO.FDrSceneConsole_update = function FDrSceneConsole_update(xconfig){
   var o = this;
   // 生成地址
   var url = o.makeServiceUrl('updateContent') + '&date=' + MO.Lang.Date.format();
   // 发送数据
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
