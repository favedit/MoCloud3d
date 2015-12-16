MO.EEaiCockpitLayer = new function EEaiCockpitLayer(){
   var o = this;
   o.Logo     = 'logo';
   o.Icon     = 'icon';
   o.Snapshot = 'snapshot';
   o.View     = 'view';
   return o;
}
MO.EEaiCockpitMode = new function EEaiCockpitMode(){
   var o = this;
   o.Logo   = 'logo';
   o.Main   = 'main';
   o.Icon   = 'icon';
   o.Module = 'module';
   return o;
}
MO.EEaiCockpitModule = new function EEaiCockpitModule(){
   var o = this;
   o.Logo  = 'logo';
   o.Logic = 'logic';
   return o;
}
MO.EEaiCockpitModuleStatus = new function EEaiCockpitModuleStatus(){
   var o = this;
   o.Preview  = 'preview';
   o.Snapshot = 'snapshot';
   o.View     = 'view';
   return o;
}
MO.FEaiCockpitControl = function FEaiCockpitControl(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._parentModule      = MO.Class.register(o, new MO.AGetSet('_parentModule'));
   o._cellLocation      = MO.Class.register(o, new MO.AGetter('_cellLocation'));
   o._cellSize          = MO.Class.register(o, new MO.AGetter('_cellSize'));
   o._optionBackground  = MO.Class.register(o, new MO.AGetSet('_optionBackground'), true);
   o._backgroundUri     = MO.Class.register(o, new MO.AGetter('_backgroundUri'));
   o._backgroundPadding = null;
   o._backgroundImage   = null;
   o._comingSoonImage   = null;
   o._comingSoon        = MO.Class.register(o, new MO.AGetSet('_comingSoon'));
   o._comingSoonBottom  = MO.Class.register(o, new MO.AGetSet('_comingSoonBottom'), 0);
   o._comingSoonRight   = MO.Class.register(o, new MO.AGetSet('_comingSoonRight'), 0);
   o.onPaintBegin       = MO.FEaiCockpitControl_onPaintBegin
   o.onPaintEnd         = MO.FEaiCockpitControl_onPaintEnd;
   o.construct          = MO.FEaiCockpitControl_construct;
   o.setup              = MO.FEaiCockpitControl_setup;
   o.placeInCell        = MO.FEaiCockpitControl_placeInCell;
   o.processLogic       = MO.FEaiCockpitControl_processLogic;
   o.dispose            = MO.FEaiCockpitControl_dispose;
   return o;
}
MO.FEaiCockpitControl_onPaintBegin = function FEaiCockpitControl_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var backgroundImage = o._backgroundImage;
   if(o._optionBackground && backgroundImage){
      var backgroundPadding = o._backgroundPadding;
      if(backgroundPadding){
         graphic.drawGridImage(backgroundImage, rectangle.left, rectangle.top, rectangle.width, rectangle.height, backgroundPadding);
      }else{
         graphic.drawRectangleImage(backgroundImage, rectangle);
      }
   }
}
MO.FEaiCockpitControl_onPaintEnd = function FEaiCockpitControl_onPaintEnd(event) {
   var o = this;
   o.__base.FGuiControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   if (o._comingSoon) {
      var comingSoonImage = o._comingSoonImage;
      if (comingSoonImage) {
         graphic.drawImage(o._comingSoonImage, rectangle.left + rectangle.width - o._comingSoonRight - 247 + 36, rectangle.top + rectangle.height - o._comingSoonBottom - 217 + 56, 247, 217);
      }
   }
}
MO.FEaiCockpitControl_construct = function FEaiCockpitControl_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._cellLocation = new MO.SPoint3();
   o._cellSize = new MO.SSize2();
}
MO.FEaiCockpitControl_setup = function FEaiCockpitControl_setup(){
   var o = this;
   var backgroundUri = o._backgroundUri;
   if(backgroundUri){
      o._backgroundImage = o.loadResourceImage(backgroundUri);
   }
   o._comingSoonImage = o.loadResourceImage('{eai.resource}/cockpit/coming_soon.png');
}
MO.FEaiCockpitControl_placeInCell = function FEaiCockpitControl_placeInCell(){
   var o = this;
   o._parentModule.parentModuleManager().placeCellControl(o);
}
MO.FEaiCockpitControl_processLogic = function FEaiCockpitControl_processLogic(){
   var o = this;
   o.psUpdate();
}
MO.FEaiCockpitControl_dispose = function FEaiCockpitControl_dispose() {
   var o = this;
   o._backgroundImage = MO.Lang.Object.dispose(o._backgroundImage);
   o._comingSoonImage = MO.Lang.Object.dispose(o._comingSoonImage);
   o._cellLocation = MO.Lang.Object.dispose(o._cellLocation);
   o._cellSize = MO.Lang.Object.dispose(o._cellSize);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitControlView = function FEaiCockpitControlView(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o.construct = MO.FEaiCockpitControlView_construct;
   o.setup     = MO.FEaiCockpitControlView_setup;
   o.dispose   = MO.FEaiCockpitControlView_dispose;
   return o;
}
MO.FEaiCockpitControlView_construct = function FEaiCockpitControlView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitControlView_setup = function FEaiCockpitControlView_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._scene = o._parentModule.parentModuleManager().scene();
}
MO.FEaiCockpitControlView_dispose = function FEaiCockpitControlView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitLogicModule = function FEaiCockpitLogicModule(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._moduleManager = MO.Class.register(o, new MO.AGetter('_moduleManager'));
   o.construct      = MO.FEaiCockpitLogicModule_construct;
   o.setupModuleManager = MO.FEaiCockpitLogicModule_setupModuleManager;
   o.process        = MO.FEaiCockpitLogicModule_process;
   o.dispose        = MO.FEaiCockpitLogicModule_dispose;
   return o;
}
MO.FEaiCockpitLogicModule_construct = function FEaiCockpitLogicModule_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitLogicModule_setupModuleManager = function FEaiCockpitLogicModule_setupModuleManager(clazz){
   var o = this;
   var moduleManager = o._moduleManager = MO.Class.create(clazz);
   moduleManager.linkGraphicContext(o);
   moduleManager.setParentModuleManager(o._parentModuleManager);
   moduleManager.setup();
   o._viewDisplay.pushDisplay(moduleManager.display());
}
MO.FEaiCockpitLogicModule_process = function FEaiCockpitLogicModule_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
   var moduleManager = o._moduleManager;
   if(moduleManager){
      moduleManager.process();
   }
}
MO.FEaiCockpitLogicModule_dispose = function FEaiCockpitLogicModule_dispose(){
   var o = this;
   o._moduleManager = MO.Lang.Obejct.dispose(o._moduleManager);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitModule = function FEaiCockpitModule(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MGraphicObject, MO.MProcessReady, MO.MListener);
   o._scene               = MO.Class.register(o, new MO.AGetSet('_scene'));
   o._parentModule        = MO.Class.register(o, new MO.AGetSet('_parentModule'));
   o._parentModuleManager = MO.Class.register(o, new MO.AGetSet('_parentModuleManager'));
   o._name                = MO.Class.register(o, new MO.AGetSet('_name'));
   o._typeCd              = MO.Class.register(o, new MO.AGetSet('_typeCd'));
   o._slideshow           = MO.Class.register(o, new MO.AGetSet('_slideshow'), false);
   o._cellLocation        = MO.Class.register(o, new MO.AGetter('_cellLocation'));
   o._cellSize            = MO.Class.register(o, new MO.AGetter('_cellSize'));
   o._controls            = MO.Class.register(o, new MO.AGetter('_controls'));
   o._snapshotDisplay     = MO.Class.register(o, new MO.AGetter('_snapshotDisplay'));
   o._controlSnapshot     = MO.Class.register(o, new MO.AGetter('_controlSnapshot'));
   o._viewDisplay         = MO.Class.register(o, new MO.AGetter('_viewDisplay'));
   o._controlView         = MO.Class.register(o, new MO.AGetter('_controlView'));
   o._statusCd            = MO.Class.register(o, new MO.AGetter('_statusCd'), MO.EEaiCockpitModuleStatus.Snapshot);
   o.construct            = MO.FEaiCockpitModule_construct;
   o.setup                = MO.FEaiCockpitModule_setup;
   o.createControl        = MO.FEaiCockpitModule_createControl;
   o.showView             = MO.FEaiCockpitModule_showView;
   o.processResize        = MO.FEaiCockpitModule_processResize;
   o.process              = MO.FEaiCockpitModule_process;
   o.dispose              = MO.FEaiCockpitModule_dispose;
   return o;
}
MO.FEaiCockpitModule_construct = function FEaiCockpitModule_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._cellLocation = new MO.SPoint2();
   o._cellSize = new MO.SSize2();
}
MO.FEaiCockpitModule_setup = function FEaiCockpitModule_setup(){
   var o = this;
   var snapshotDisplay = o._snapshotDisplay = MO.Class.create(MO.FE3dDisplayContainer);
   snapshotDisplay.linkGraphicContext(o);
   var viewDisplay = o._viewDisplay = MO.Class.create(MO.FE3dDisplayContainer);
   viewDisplay.linkGraphicContext(o);
}
MO.FEaiCockpitModule_createControl = function FEaiCockpitModule_createControl(clazz){
   var o = this;
   var control = MO.Class.create(clazz);
   control.linkGraphicContext(o);
   control.setParentModule(o);
   control.setup();
   return control;
}
MO.FEaiCockpitModule_showView = function FEaiCockpitModule_showView(visible){
   var o = this;
   var view = o.controlView();
   view.setVisible(visible);
   var moduleManager = o._moduleManager;
   if(moduleManager){
      var snapshotDisplay = moduleManager.snapshotDisplay();
      var viewDisplay = moduleManager.viewDisplay();
      if(visible){
         snapshotDisplay.setVisible(true);
         viewDisplay.setVisible(false);
      }else{
         snapshotDisplay.setVisible(false);
         viewDisplay.setVisible(false);
      }
   }
}
MO.FEaiCockpitModule_processResize = function FEaiCockpitModule_processResize(){
   var o = this;
}
MO.FEaiCockpitModule_process = function FEaiCockpitModule_process(){
   var o = this;
   o._controlSnapshot.processLogic();
   o._controlView.processLogic();
}
MO.FEaiCockpitModule_dispose = function FEaiCockpitModule_dispose(){
   var o = this;
   o._cellLocation = MO.Lang.Object.dispose(o._cellLocation);
   o._cellSize = MO.Lang.Object.dispose(o._cellSize);
   o.__base.FObject.dispose.call(o);
}
MO.FEaiCockpitModuleManager = function FEaiCockpitModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MGraphicObject, MO.MListener);
   o._parentModuleManager       = MO.Class.register(o, new MO.AGetSet('_parentModuleManager'));
   o._scene                     = MO.Class.register(o, new MO.AGetSet('_scene'));
   o._modeCd                    = MO.Class.register(o, new MO.AGetSet('_modeCd'));
   o._mainTimeline              = MO.Class.register(o, new MO.AGetter('_mainTimeline'));
   o._cellCount                 = MO.Class.register(o, new MO.AGetter('_cellCount'));
   o._modules                   = MO.Class.register(o, new MO.AGetter('_modules'));
   o._display                   = MO.Class.register(o, new MO.AGetter('_display'));
   o._snapshotDisplay           = MO.Class.register(o, new MO.AGetter('_snapshotDisplay'));
   o._viewDisplay               = MO.Class.register(o, new MO.AGetter('_viewDisplay'));
   o._focusModule               = MO.Class.register(o, new MO.AGetter('_focusModule'));
   o.construct                  = MO.FEaiCockpitModuleManager_construct;
   o.setup                      = MO.FEaiCockpitModuleManager_setup;
   o.register                   = MO.FEaiCockpitModuleManager_register;
   o.unregister                 = MO.FEaiCockpitModuleManager_unregister;
   o.createModule               = MO.FEaiCockpitModuleManager_createModule;
   o.calculateCellControlMatrix = MO.FEaiCockpitModuleManager_calculateCellControlMatrix;
   o.placeCellControl           = MO.FEaiCockpitModuleManager_placeCellControl;
   o.selectModuleView           = MO.FEaiCockpitModuleManager_selectModuleView;
   o.processResize              = MO.FEaiCockpitModuleManager_processResize;
   o.process                    = MO.FEaiCockpitModuleManager_process;
   o.dispose                    = MO.FEaiCockpitModuleManager_dispose;
   return o;
}
MO.FEaiCockpitModuleManager_construct = function FEaiCockpitModuleManager_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._mainTimeline = MO.Class.create(MO.FMainTimeline);
   o._cellCount = new MO.SSize3(16, 9, 1);
   o._modules = new MO.TDictionary();
}
MO.FEaiCockpitModuleManager_setup = function FEaiCockpitModuleManager_setup(){
   var o = this;
   if(!o._scene && o._parentModuleManager){
      o._scene = o._parentModuleManager.scene();
   }
   var display = o._display = MO.Class.create(MO.FE3dDisplayContainer);
   display.linkGraphicContext(o);
   var snapshotDisplay = o._snapshotDisplay = MO.Class.create(MO.FE3dDisplay);
   snapshotDisplay.linkGraphicContext(o);
   display.pushDisplay(snapshotDisplay);
   var viewDisplay = o._viewDisplay = MO.Class.create(MO.FE3dDisplayContainer);
   viewDisplay.linkGraphicContext(o);
   display.pushDisplay(viewDisplay);
}
MO.FEaiCockpitModuleManager_register = function FEaiCockpitModuleManager_register(module){
   var o = this;
   var name = module.name();
   MO.Assert.debugNotEmpty(name);
   o._modules.set(name, module);
}
MO.FEaiCockpitModuleManager_unregister = function FEaiCockpitModuleManager_unregister(module){
   var o = this;
   var name = module.name();
   MO.Assert.debugNotEmpty(name);
   o._modules.remove(name);
}
MO.FEaiCockpitModuleManager_createModule = function FEaiCockpitModuleManager_createModule(clazz, name) {
   var o = this;
   var module = MO.Class.create(clazz);
   module.linkGraphicContext(o);
   module.setParentModuleManager(o);
   module.setup();
   if (name != null && name != undefined) {
      module.setName(name);
   }
   o.register(module);
   return module;
}
MO.FEaiCockpitModuleManager_calculateCellControlMatrix = function FEaiCockpitModuleManager_calculateCellControlMatrix(control, matrix) {
   var o = this;
   var cellCount = o._cellCount;
   var centerX = cellCount.width * 0.5;
   var centerY = cellCount.height * 0.5;
   var centerZ = cellCount.deep * 0.5;
   var location = control.cellLocation();
   var size = control.cellSize();
   var x1 = location.x - centerX;
   var y1 = centerY - location.y;
   var x2 = x1 + size.width;
   var y2 = y1 - size.height;
   var z = location.z;
   var sx = (x2 - x1) * 0.5;
   var sy = (y1 - y2) * 0.5;
   matrix.tx = x1 + sx;
   matrix.ty = y1 - sy;
   matrix.tz = z;
   matrix.sx = sx;
   matrix.sy = sy;
   matrix.updateForce();
}
MO.FEaiCockpitModuleManager_placeCellControl = function FEaiCockpitModuleManager_placeCellControl(control){
   var o = this;
   var renderable = control.makeRenderable();
   var matrix = renderable.matrix();
   o.calculateCellControlMatrix(control, matrix);
}
MO.FEaiCockpitModuleManager_selectModuleView = function FEaiCockpitModuleManager_selectModuleView(module){
   var o = this;
   o._focusModule = module;
   var modules = o._modules;
   var count = modules.count();
   for(var i = 0; i < count; i++){
      var findModule = modules.at(i);
      if(findModule == module){
         findModule.showView(true);
      }else{
         findModule.showView(false);
      }
   }
}
MO.FEaiCockpitModuleManager_processResize = function FEaiCockpitModuleManager_processResize(){
   var o = this;
   var modules = o._modules;
   var count = modules.count();
   for(var i = 0; i < count; i++){
      var module = modules.at(i);
      module.processResize();
   }
}
MO.FEaiCockpitModuleManager_process = function FEaiCockpitModuleManager_process(){
   var o = this;
   o._mainTimeline.process();
   var modules = o._modules;
   var count = modules.count();
   for(var i = 0; i < count; i++){
      var module = modules.at(i);
      module.process();
   }
}
MO.FEaiCockpitModuleManager_dispose = function FEaiCockpitModuleManager_dispose(){
   var o = this;
   o._snapshotDisplay = MO.Lang.Object.dispose(o._snapshotDisplay);
   o._viewDisplay = MO.Lang.Object.dispose(o._viewDisplay);
   o._display = MO.Lang.Object.dispose(o._display);
   o._modules = MO.Lang.Object.dispose(o._modules, true);
   o._cellCount = MO.Lang.Object.dispose(o._cellCount);
   o._mainTimeline = MO.Lang.Object.dispose(o._mainTimeline);
   o.__base.FObject.dispose.call(o);
}
