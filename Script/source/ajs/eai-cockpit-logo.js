MO.FEaiCockpitLogo = function FEaiCockpitLogo(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name     = 'logo';
   o._typeCd   = MO.EEaiCockpitModule.Logic;
   o.construct = MO.FEaiCockpitLogo_construct;
   o.setup     = MO.FEaiCockpitLogo_setup;
   o.process   = MO.FEaiCockpitLogo_process;
   o.dispose   = MO.FEaiCockpitLogo_dispose;
   return o;
}
MO.FEaiCockpitLogo_construct = function FEaiCockpitLogo_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitLogo_setup = function FEaiCockpitLogo_setup(){
   var o = this;
   o.__base.FEaiCockpitModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitLogoSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitLogoView);
}
MO.FEaiCockpitLogo_process = function FEaiCockpitLogo_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitLogo_dispose = function FEaiCockpitLogo_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitLogoSnapshot = function FEaiCockpitLogoSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name          = 'cockpit.logo.snapshot';
   o._backgroundUri = '{eai.resource}/cockpit/logo/ground.png';
   o.onPaintBegin   = MO.FEaiCockpitLogoSnapshot_onPaintBegin;
   o.construct      = MO.FEaiCockpitLogoSnapshot_construct;
   o.setup          = MO.FEaiCockpitLogoSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitLogoSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitLogoSnapshot_dispose;
   return o;
}
MO.FEaiCockpitLogoSnapshot_onPaintBegin = function FEaiCockpitLogoSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitLogoSnapshot_construct = function FEaiCockpitLogoSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(3, 1);
}
MO.FEaiCockpitLogoSnapshot_setup = function FEaiCockpitLogoSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitLogoSnapshot_processLogic = function FEaiCockpitLogoSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitLogoSnapshot_dispose = function FEaiCockpitLogoSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitLogoView = function FEaiCockpitLogoView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitLogoView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitLogoView_onPaintBegin;
   o.construct             = MO.FEaiCockpitLogoView_construct;
   o.setup                 = MO.FEaiCockpitLogoView_setup;
   o.processLogic          = MO.FEaiCockpitLogoView_processLogic;
   o.dispose               = MO.FEaiCockpitLogoView_dispose;
   return o;
}
MO.FEaiCockpitLogoView_onImageLoad = function FEaiCockpitLogoView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitLogoView_onPaintBegin = function FEaiCockpitLogoView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   graphic.drawRectangleImage(o._backgroundImage, rectangle);
}
MO.FEaiCockpitLogoView_construct = function FEaiCockpitLogoView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitLogoView_setup = function FEaiCockpitLogoView_setup(){
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._backgroundImage = imageConsole.load('{eai.resource}/cockpit/logo/view.png');
   image.addLoadListener(o, o.onImageLoad);
}
MO.FEaiCockpitLogoView_processLogic = function FEaiCockpitLogoView_processLogic(){
   var o = this;
}
MO.FEaiCockpitLogoView_dispose = function FEaiCockpitLogoView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
