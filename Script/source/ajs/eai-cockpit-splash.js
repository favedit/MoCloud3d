MO.FEaiCockpitSplash = function FEaiCockpitSplash(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name     = 'splash';
   o._typeCd   = MO.EEaiCockpitModule.Logo;
   o.construct = MO.FEaiCockpitSplash_construct;
   o.setup     = MO.FEaiCockpitSplash_setup;
   o.process   = MO.FEaiCockpitSplash_process;
   o.dispose   = MO.FEaiCockpitSplash_dispose;
   return o;
}
MO.FEaiCockpitSplash_construct = function FEaiCockpitSplash_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitSplash_setup = function FEaiCockpitSplash_setup(){
   var o = this;
   o.__base.FEaiCockpitModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitSplashSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitSplashView);
}
MO.FEaiCockpitSplash_process = function FEaiCockpitSplash_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitSplash_dispose = function FEaiCockpitSplash_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitSplashSnapshot = function FEaiCockpitSplashSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name          = 'cockpit.splash.snapshot';
   o._backgroundUri = '{eai.resource}/cockpit/splash/ground.png';
   o.onPaintBegin   = MO.FEaiCockpitSplashSnapshot_onPaintBegin;
   o.construct      = MO.FEaiCockpitSplashSnapshot_construct;
   o.setup          = MO.FEaiCockpitSplashSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitSplashSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitSplashSnapshot_dispose;
   return o;
}
MO.FEaiCockpitSplashSnapshot_onPaintBegin = function FEaiCockpitSplashSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitSplashSnapshot_construct = function FEaiCockpitSplashSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitSplashSnapshot_setup = function FEaiCockpitSplashSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitSplashSnapshot_processLogic = function FEaiCockpitSplashSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitSplashSnapshot_dispose = function FEaiCockpitSplashSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitSplashView = function FEaiCockpitSplashView(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name          = 'cockpit.splash.view';
   o.onPaintBegin   = MO.FEaiCockpitSplashView_onPaintBegin;
   o.construct      = MO.FEaiCockpitSplashView_construct;
   o.setup          = MO.FEaiCockpitSplashView_setup;
   o.processLogic   = MO.FEaiCockpitSplashView_processLogic;
   o.dispose        = MO.FEaiCockpitSplashView_dispose;
   return o;
}
MO.FEaiCockpitSplashView_onPaintBegin = function FEaiCockpitSplashView_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitSplashView_construct = function FEaiCockpitSplashView_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 8);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitSplashView_setup = function FEaiCockpitSplashView_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitSplashView_processLogic = function FEaiCockpitSplashView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitSplashView_dispose = function FEaiCockpitSplashView_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
