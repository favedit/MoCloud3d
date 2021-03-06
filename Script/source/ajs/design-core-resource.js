MO.FDrAbsResourceConsole = function FDrAbsResourceConsole(o){
   o = MO.Class.inherits(this, o, MO.FConsole);
   o._scopeCd       = MO.EScope.Local;
   o._serviceCode   = null;
   o._classUnit     = null;
   o._resources     = null;
   o.construct      = MO.FDrAbsResourceConsole_construct;
   o.makeServiceUrl = MO.FDrAbsResourceConsole_makeServiceUrl;
   o.loadResource   = MO.FDrAbsResourceConsole_loadResource;
   o.doList         = MO.FDrAbsResourceConsole_doList;
   o.doQuery        = MO.FDrAbsResourceConsole_doQuery;
   o.doCreate       = MO.FDrAbsResourceConsole_doCreate;
   o.doUpdate       = MO.FDrAbsResourceConsole_doUpdate;
   o.doDelete       = MO.FDrAbsResourceConsole_doDelete;
   return o;
}
MO.FDrAbsResourceConsole_construct = function FDrAbsResourceConsole_construct(){
   var o = this;
   o.__base.FConsole.construct.call(o);
   o._resources = new MO.TDictionary();
}
MO.FDrAbsResourceConsole_makeServiceUrl = function FDrAbsResourceConsole_makeServiceUrl(action){
   var o = this;
   var url = MO.Window.Browser.hostPath('/' + o._serviceCode + '.ws?action=' + action);
   if(MO.Runtime.isDebug()){
      url += '&date=' + MO.Lang.Date.format();
   }
   return url;
}
MO.FDrAbsResourceConsole_loadResource = function FDrAbsResourceConsole_loadResource(xconfig){
   var o = this;
   var guid = xconfig.get('guid');
   var resource = o._resources.get(guid);
   if(!resource){
      resource = MO.Class.create(o._classUnit);
      o._resources.set(guid, resource);
   }
   resource.loadConfig(xconfig);
   return resource;
}
MO.FDrAbsResourceConsole_doList = function FDrAbsResourceConsole_doList(search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=list';
   if(!MO.Lang.String.isEmpty(search)){
      url += '&search=' + search;
   }
   if(!MO.Lang.String.isEmpty(order)){
      url += '&order=' + order;
   }
   if(pageSize >= 0){
      url += '&page_size=' + pageSize;
   }
   if(page >= 0){
      url += '&page=' + page;
   }
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrAbsResourceConsole_doQuery = function FDrAbsResourceConsole_doQuery(guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrAbsResourceConsole_doCreate = function FDrAbsResourceConsole_doCreate(resource){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'create');
   var xdata = xroot.create(resource.classCode());
   resource.saveConfig(xdata);
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._serviceCode + '.ws', xdocument);
   return connection;
}
MO.FDrAbsResourceConsole_doUpdate = function FDrAbsResourceConsole_doUpdate(resource){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'update');
   var xdata = xroot.create(resource.classCode());
   resource.saveConfig(xdata);
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._serviceCode + '.ws', xdocument);
   return connection;
}
MO.FDrAbsResourceConsole_doDelete = function FDrAbsResourceConsole_doDelete(guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=delete&guid=' + guid;
   var connection = MO.Console.find(MO.FXmlConsole).sendAsync(url);
   return connection;
}
MO.FDrBitmap = function FDrBitmap(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode    = 'Bitmap';
   o._sizeWidth    = MO.Class.register(o, new MO.AGetSet('_sizeWidth'), 0);
   o._sizeHeight   = MO.Class.register(o, new MO.AGetSet('_sizeHeight'), 0);
   o.loadConfig    = MO.FDrBitmap_loadConfig;
   o.saveConfig    = MO.FDrBitmap_saveConfig;
   return o;
}
MO.FDrBitmap_loadConfig = function FDrBitmap_loadConfig(xconfig){
   var o = this;
   o.__base.FDrResource.loadConfig.call(o, xconfig);
   o._sizeWidth = xconfig.getInteger('size_width');
   o._sizeHeight = xconfig.getInteger('size_height');
}
MO.FDrBitmap_saveConfig = function FDrBitmap_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.set('size_width', o._sizeWidth);
   xconfig.set('size_height', o._sizeHeight);
}
MO.FDrBitmapConsole = function FDrBitmapConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.bitmap';
   o._classUnit   = MO.FDrBitmap;
   o.query        = MO.FDrBitmapConsole_query;
   o.update       = MO.FDrBitmapConsole_update;
   return o;
}
MO.FDrBitmapConsole_query = function FDrBitmapConsole_query(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   var xroot = MO.Console.find(MO.FXmlConsole).sendSync(url);
   var nodeCount = xroot.nodeCount();
   for(var n = 0; n < nodeCount; n++){
      var xbitmap = xroot.node(n);
      if(xbitmap.isName('Bitmap')){
         o.loadResource(xbitmap);
      }
   }
   return o._resources.get(guid);
}
MO.FDrBitmapConsole_update = function FDrBitmapConsole_update(xconfig){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=update';
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrMaterial = function FDrMaterial(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Material';
   o.loadConfig = MO.FDrMaterial_loadConfig;
   o.saveConfig = MO.FDrMaterial_saveConfig;
   return o;
}
MO.FDrMaterial_loadConfig = function FDrMaterial_loadConfig(xconfig){
   var o = this;
   o.__base.FDrResource.loadConfig.call(o, xconfig);
}
MO.FDrMaterial_saveConfig = function FDrMaterial_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
}
MO.FDrMaterialConsole = function FDrMaterialConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.material';
   o._classUnit   = MO.FDrMaterial;
   o.query        = MO.FDrMaterialConsole_query;
   o.update       = MO.FDrMaterialConsole_update;
   o.deleteBitmap = MO.FDrMaterialConsole_deleteBitmap;
   return o;
}
MO.FDrMaterialConsole_query = function FDrMaterialConsole_query(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=query&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   var xroot = MO.Console.find(MO.FXmlConsole).sendSync(url);
   var nodeCount = xroot.nodeCount();
   for(var n = 0; n < nodeCount; n++){
      var xbitmap = xroot.node(n);
      if(xbitmap.isName('Material')){
         o.loadResource(xbitmap);
      }
   }
   return o._resources.get(guid);
}
MO.FDrMaterialConsole_update = function FDrMaterialConsole_update(xconfig){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=update';
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrMaterialConsole_deleteBitmap = function FDrMaterialConsole_deleteBitmap(guid){
   var o = this;
   var uri = '/' + o._serviceCode + '.ws?action=deleteBitmap&guid=' + guid;
   var url = MO.Window.Browser.hostPath(uri);
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrMesh = function FDrMesh(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Mesh';
   return o;
}
MO.FDrMeshConsole = function FDrMeshConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.mesh';
   o.update       = MO.FDrMeshConsole_update;
   return o;
}
MO.FDrMeshConsole_update = function FDrMeshConsole_update(config){
   var o = this;
   var url = MO.RBrowser.hostPath('/' + o._serviceCode + '.ws?action=update&date=' + RDate.format());
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, config);
}
MO.FDrModel = function FDrModel(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Model';
   return o;
}
MO.FDrModelConsole = function FDrModelConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.model';
   o.update       = MO.FDrModelConsole_update;
   return o;
}
MO.FDrModelConsole_update = function FDrModelConsole_update(config){
   var o = this;
   var url = MO.RBrowser.hostPath('/' + o._serviceCode + '.ws?action=updateContent&date=' + RDate.format());
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, config);
}
MO.FDrObject = function FDrObject(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._guid       = MO.Class.register(o, new MO.AGetSet('_guid'));
   o._code       = MO.Class.register(o, new MO.AGetSet('_code'));
   o._label      = MO.Class.register(o, new MO.AGetSet('_label'));
   o.unserialize = MO.FDrObject_unserialize;
   o.saveConfig  = MO.FDrObject_saveConfig;
   return o;
}
MO.FDrObject_unserialize = function FDrObject_unserialize(p){
   var o = this;
   o._guid = p.readString();
   o._code = p.readString();
   o._label = p.readString();
}
MO.FDrObject_saveConfig = function FDrObject_saveConfig(xconfig){
   var o = this;
   xconfig.setNvl('guid', o._guid);
   xconfig.setNvl('code', o._code);
   xconfig.setNvl('label', o._label);
}
MO.FDrProject = function FDrProject(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode   = 'Project';
   o._projectGuid = null;
   o.saveConfig   = MO.FDrProject_saveConfig;
   return o;
}
MO.FDrProject_saveConfig = function FDrProject_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.setNvl('project_guid', o._projectGuid);
}
MO.FDrProjectConsole = function FDrProjectConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.solution.project';
   return o;
}
MO.FDrResource = function FDrResource(o){
   o = MO.Class.inherits(this, o, MO.FDrObject);
   o._classCode = MO.Class.register(o, new MO.AGetter('_classCode'));
   o.loadConfig = MO.FDrResource_loadConfig;
   o.saveConfig = MO.FDrResource_saveConfig;
   return o;
}
MO.FDrResource_loadConfig = function FDrResource_loadConfig(xconfig){
   var o = this;
   o._guid = xconfig.get('guid');
   o._code = xconfig.get('code');
   o._label = xconfig.get('label');
}
MO.FDrResource_saveConfig = function FDrResource_saveConfig(xconfig){
   var o = this;
   xconfig.setName(o._classCode);
   xconfig.set('guid', o._guid);
   xconfig.set('code', o._code);
   xconfig.set('label', o._label);
}
MO.FDrResourceConsole = function FDrResourceConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode   = 'cloud.resource';
   o._catalogCode   = 'cloud.resource.catalog';
   o._resources     = null;
   o.construct      = MO.FDrResourceConsole_construct;
   o.doList         = MO.FDrResourceConsole_doList;
   o.doShare        = MO.FDrResourceConsole_doShare;
   o.doDelete       = MO.FDrResourceConsole_doDelete;
   o.doListShare    = MO.FDrResourceConsole_doListShare;
   o.doFolderCreate = MO.FDrResourceConsole_doFolderCreate;
   o.doFolderUpdate = MO.FDrResourceConsole_doFolderUpdate;
   o.doFolderDelete = MO.FDrResourceConsole_doFolderDelete;
   return o;
}
MO.FDrResourceConsole_construct = function FDrResourceConsole_construct(){
   var o = this;
   o.__base.FDrAbsResourceConsole.construct.call(o);
   o._resources = new MO.TDictionary();
}
MO.FDrResourceConsole_doList = function FDrResourceConsole_doList(typeCd, search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=list&type_cd=' + typeCd + '&serach=' + search + '&order=' + order + '&page_size=' + pageSize + '&page=' + page;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doShare = function FDrResourceConsole_doShare(guid, shareCd){
   var o = this;
   var url = o.makeServiceUrl('share') + '&guid=' + guid + '&share_cd=' + shareCd;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doDelete = function FDrResourceConsole_doDelete(typeCd, guid){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=delete&type_cd=' + typeCd + '&guid=' + guid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doListShare = function FDrResourceConsole_doListShare(typeCd, search, order, pageSize, page){
   var o = this;
   var url = '/' + o._serviceCode + '.ws?action=listShare&type_cd=' + typeCd + '&serach=' + search + '&order=' + order + '&page_size=' + pageSize + '&page=' + page;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrResourceConsole_doFolderCreate = function FDrResourceConsole_doFolderCreate(parentGuid, code, label){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'create');
   var xfolder = xroot.create('Folder');
   xfolder.set('parent_guid', parentGuid);
   xfolder.set('code', code);
   xfolder.set('label', label);
   return MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._catalogCode + '.ws', xdocument);
}
MO.FDrResourceConsole_doFolderUpdate = function FDrResourceConsole_doFolderUpdate(guid, code, label){
   var o = this;
   var xdocument = new MO.TXmlDocument();
   var xroot = xdocument.root();
   xroot.set('action', 'update');
   var xfolder = xroot.create('Folder');
   xfolder.set('guid', guid);
   xfolder.set('code', code);
   xfolder.set('label', label);
   return MO.Console.find(MO.FXmlConsole).sendAsync('/' + o._catalogCode + '.ws', xdocument);
}
MO.FDrResourceConsole_doFolderDelete = function FDrResourceConsole_doFolderDelete(guid){
   var o = this;
   var url = '/' + o._catalogCode + '.ws?action=delete&guid=' + guid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrScene = function FDrScene(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode   = 'Scene';
   o._projectGuid = null;
   o.saveConfig   = MO.FDrScene_saveConfig;
   return o;
}
MO.FDrScene_saveConfig = function FDrScene_saveConfig(xconfig){
   var o = this;
   o.__base.FDrResource.saveConfig.call(o, xconfig);
   xconfig.setNvl('project_guid', o._projectGuid);
}
MO.FDrSceneConsole = function FDrSceneConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode = 'cloud.resource.scene';
   o.createCamera = MO.FDrSceneConsole_createCamera;
   o.createLayer  = MO.FDrSceneConsole_createLayer;
   o.createSprite = MO.FDrSceneConsole_createSprite;
   o.createMovie  = MO.FDrSceneConsole_createMovie;
   o.copyNode     = MO.FDrSceneConsole_copyNode;
   o.deleteNode   = MO.FDrSceneConsole_deleteNode;
   o.update       = MO.FDrSceneConsole_update;
   return o;
}
MO.FDrSceneConsole_createCamera = function FDrSceneConsole_createCamera(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createCamera');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createLayer = function FDrSceneConsole_createLayer(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createLayer');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createSprite = function FDrSceneConsole_createSprite(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createSprite');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_createMovie = function FDrSceneConsole_createMovie(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMovie');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrSceneConsole_copyNode = function FDrSceneConsole_copyNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('copyNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrSceneConsole_deleteNode = function FDrSceneConsole_deleteNode(sceneGuid, nodeGuid){
   var o = this;
   var url = o.makeServiceUrl('deleteNode') + '&space_guid=' + sceneGuid + '&node_guid=' + nodeGuid;
   return MO.Console.find(MO.FXmlConsole).sendAsync(url);
}
MO.FDrSceneConsole_update = function FDrSceneConsole_update(xconfig){
   var o = this;
   var url = o.makeServiceUrl('updateContent') + '&date=' + MO.Lang.Date.format();
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplate = function FDrTemplate(o){
   o = MO.Class.inherits(this, o, MO.FDrResource);
   o._classCode = 'Template';
   return o;
}
MO.FDrTemplateConsole = function FDrTemplateConsole(o){
   o = MO.Class.inherits(this, o, MO.FDrAbsResourceConsole);
   o._serviceCode   = 'cloud.resource.template';
   o.selectMaterial = MO.FDrTemplateConsole_selectMaterial;
   o.createDisplay  = MO.FDrTemplateConsole_createDisplay;
   o.update         = MO.FDrTemplateConsole_update;
   return o;
}
MO.FDrTemplateConsole_selectMaterial = function FDrTemplateConsole_selectMaterial(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createMaterial');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplateConsole_createDisplay = function FDrTemplateConsole_createDisplay(xconfig){
   var o = this;
   var url = o.makeServiceUrl('createDisplay');
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
MO.FDrTemplateConsole_update = function FDrTemplateConsole_update(xconfig){
   var o = this;
   var url = o.makeServiceUrl('updateContent') + '&date=' + MO.Lang.Date.format();
   return MO.Console.find(MO.FXmlConsole).sendAsync(url, xconfig);
}
