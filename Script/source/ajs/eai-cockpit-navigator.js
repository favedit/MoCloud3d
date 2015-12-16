MO.FEaiCockpitNavigator = function FEaiCockpitNavigator(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name         = 'cockpit.logic.navigator';
   o._typeCd       = MO.EEaiCockpitModule.Logic;
   o._dataTicker   = null;
   o._slideshow    = true;
   o.construct     = MO.FEaiCockpitNavigator_construct;
   o.setup         = MO.FEaiCockpitNavigator_setup;
   o.processResize = MO.FEaiCockpitNavigator_processResize;
   o.process       = MO.FEaiCockpitNavigator_process;
   o.dispose       = MO.FEaiCockpitNavigator_dispose;
   return o;
}
MO.FEaiCockpitNavigator_construct = function FEaiCockpitNavigator_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
   o._dataTicker = new MO.TTicker(1000 * 60);
}
MO.FEaiCockpitNavigator_setup = function FEaiCockpitNavigator_setup(){
   var o = this;
   var snapshot = o._controlSnapshot = MO.Class.create(MO.FEaiCockpitNavigatorSnapshot);
   snapshot.linkGraphicContext(o);
   snapshot.setParentModule(o);
   snapshot.setup();
   var view = o._controlView = MO.Class.create(MO.FEaiCockpitNavigatorView);
   view.linkGraphicContext(o);
   view.setParentModule(o);
   view.setup();
}
MO.FEaiCockpitNavigator_processResize = function FEaiCockpitNavigator_processResize(){
   var o = this;
}
MO.FEaiCockpitNavigator_process = function FEaiCockpitNavigator_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNavigator_dispose = function FEaiCockpitNavigator_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNavigatorSnapshot = function FEaiCockpitNavigatorSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundImage  = null;
   o._logoImage        = null;
   o._achievementImage = null;
   o._forecastImage    = null;
   o._warningImage     = null;
   o._projectImage     = null;
   o._noticeImage      = null;
   o._statusImage      = null;
   o.onPaintBegin      = MO.FEaiCockpitNavigatorSnapshot_onPaintBegin;
   o.onPaintEnd        = MO.FEaiCockpitNavigatorSnapshot_onPaintEnd;
   o.construct         = MO.FEaiCockpitNavigatorSnapshot_construct;
   o.setup             = MO.FEaiCockpitNavigatorSnapshot_setup;
   o.processLogic      = MO.FEaiCockpitNavigatorSnapshot_processLogic;
   o.dispose           = MO.FEaiCockpitNavigatorSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNavigatorSnapshot_onPaintBegin = function FEaiCockpitNavigatorSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   graphic.drawRectangleImage(o._backgroundImage, rectangle);
   graphic.drawImage(o._logoImage, 0, 0, 360, 120);
   var dx = 350;
   var dy = 25;
   var dw = 150;
   graphic.drawImage(o._achievementImage, dx + dw * 0, dy, 143, 79);
   graphic.drawImage(o._forecastImage, dx + dw * 1, dy, 143, 79);
   graphic.drawImage(o._warningImage, dx + dw * 2, dy, 143, 79);
   graphic.drawImage(o._projectImage, dx + dw * 3, dy, 143, 79);
   graphic.drawImage(o._noticeImage, dx + dw * 4, dy, 143, 79);
   graphic.drawImage(o._statusImage, dx + dw * 5, dy, 143, 79);
}
MO.FEaiCockpitNavigatorSnapshot_onPaintEnd = function FEaiCockpitNavigatorSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitNavigatorSnapshot_construct = function FEaiCockpitNavigatorSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 1);
}
MO.FEaiCockpitNavigatorSnapshot_setup = function FEaiCockpitNavigatorSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._backgroundImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/ground.png');
   o._logoImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/logo.png');
   o._achievementImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/achievement.png');
   o._forecastImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/forecast.png');
   o._warningImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/warning.png');
   o._projectImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/project.png');
   o._noticeImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/notice.png');
   o._statusImage = o.loadResourceImage('{eai.resource}/cockpit/navigator/status.png');
}
MO.FEaiCockpitNavigatorSnapshot_processLogic = function FEaiCockpitNavigatorSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitNavigatorSnapshot_dispose = function FEaiCockpitNavigatorSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitNavigatorView = function FEaiCockpitNavigatorView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitNavigatorView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNavigatorView_construct;
   o.setup                 = MO.FEaiCockpitNavigatorView_setup;
   o.processLogic          = MO.FEaiCockpitNavigatorView_processLogic;
   o.dispose               = MO.FEaiCockpitNavigatorView_dispose;
   return o;
}
MO.FEaiCockpitNavigatorView_onPaintBegin = function FEaiCockpitNavigatorView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitNavigatorView_construct = function FEaiCockpitNavigatorView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNavigatorView_setup = function FEaiCockpitNavigatorView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNavigatorView_processLogic = function FEaiCockpitNavigatorView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNavigatorView_dispose = function FEaiCockpitNavigatorView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
