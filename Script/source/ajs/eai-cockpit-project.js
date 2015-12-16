MO.FEaiCockpitProject = function FEaiCockpitProject(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'project';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitProject_construct;
   o.setup      = MO.FEaiCockpitProject_setup;
   o.process    = MO.FEaiCockpitProject_process;
   o.dispose    = MO.FEaiCockpitProject_dispose;
   return o;
}
MO.FEaiCockpitProject_construct = function FEaiCockpitProject_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitProject_setup = function FEaiCockpitProject_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitProjectSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitProjectView);
   o.setupModuleManager(MO.FEaiCockpitProjectModuleManager);
}
MO.FEaiCockpitProject_process = function FEaiCockpitProject_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitProject_dispose = function FEaiCockpitProject_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitProjectContent = function FEaiCockpitProjectContent(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Project.Content';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitProjectContent_construct;
   o.setup       = MO.FEaiCockpitProjectContent_setup;
   o.process     = MO.FEaiCockpitProjectContent_process;
   o.dispose     = MO.FEaiCockpitProjectContent_dispose;
   return o;
}
MO.FEaiCockpitProjectContent_construct = function FEaiCockpitProjectContent_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitProjectContent_setup = function FEaiCockpitProjectContent_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitProjectContentSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitProjectContentView);
}
MO.FEaiCockpitProjectContent_process = function FEaiCockpitProjectContent_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitProjectContent_dispose = function FEaiCockpitProjectContent_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitProjectContentData = function FEaiCockpitProjectContentData(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._contents = MO.Class.register(o, [new MO.AGetter('_contents'), new MO.APersistence('_contents', MO.EDataType.Objects, MO.FEaiCockpitProjectContentDataUnit)]);
   return o;
}
MO.FEaiCockpitProjectContentDataMarqueeUnit = function FEaiCockpitProjectContentDataMarqueeUnit(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._marquee = MO.Class.register(o, [new MO.AGetter('_marquee'), new MO.APersistence('_marquee', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitProjectContentDataUnit = function FEaiCockpitProjectContentDataUnit(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._name         = MO.Class.register(o, [new MO.AGetter('_name'), new MO.APersistence('_name', MO.EDataType.String)]);
   o._uname        = MO.Class.register(o, [new MO.AGetter('_uname'), new MO.APersistence('_uname', MO.EDataType.String)]);
   o._priority     = MO.Class.register(o, [new MO.AGetter('_priority'), new MO.APersistence('_priority', MO.EDataType.Int32)]);
   o._start        = MO.Class.register(o, [new MO.AGetter('_start'), new MO.APersistence('_start', MO.EDataType.String)]);
   o._end          = MO.Class.register(o, [new MO.AGetter('_end'), new MO.APersistence('_end', MO.EDataType.String)]);
   o._timeProgress = MO.Class.register(o, [new MO.AGetter('_timeProgress'), new MO.APersistence('_timeProgress', MO.EDataType.Double)]);
   o._proProgress  = MO.Class.register(o, [new MO.AGetter('_proProgress'), new MO.APersistence('_proProgress', MO.EDataType.Double)]);
   o._marquees     = MO.Class.register(o, [new MO.AGetter('_marquees'), new MO.APersistence('_marquees', MO.EDataType.Objects, MO.FEaiCockpitProjectContentDataMarqueeUnit)]);
   return o;
}
MO.FEaiCockpitProjectContentSnapshot = function FEaiCockpitProjectContentSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/project/content_bg.png';
   o._escImage      = null;
   o._linetImage    = null;
   o._process       = null;
   o._processbg     = null;
   o._processtime   = null;
   o._level         = null;
   o._level2        = null;
   o._data          = null;
   o._ok            = null;
   o._nook          = null;
   o._gridRank      = null;
   o.onPaintBegin   = MO.FEaiCockpitProjectContentSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitProjectContentSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitProjectContentSnapshot_construct;
   o.setup          = MO.FEaiCockpitProjectContentSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitProjectContentSnapshot_processLogic;
   o.setDatas       = MO.FEaiCockpitProjectContentSnapshot_setDatas;
   o.dispose        = MO.FEaiCockpitProjectContentSnapshot_dispose;
   return o;
}
MO.FEaiCockpitProjectContentSnapshot_onPaintBegin = function FEaiCockpitProjectContentSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._escImage, left + 421, top + 24);
   graphic.drawImage(o._lineImage, left + 26, top + 269);
   if (o._data != null) {
      graphic.setFont('bold 26px Microsoft YaHei');
      graphic.drawText(o._data.name(), left + 22, top + 50, "rgb(255,231,34)");
      graphic.setFont('24px Microsoft YaHei');
      graphic.drawText("责任人：" + o._data.uname(), left + 22, top + 100, "rgb(255,255,255)");
      graphic.setFont('20px Microsoft YaHei');
      graphic.drawText("优先级", left + 255, top + 100, "rgb(255,255,255)");
      graphic.drawImage(o._data.priority() > 0 ? o._level : o._level2, left + 325, top + 86);
      graphic.drawImage(o._data.priority() > 1 ? o._level : o._level2, left + 352, top + 86);
      graphic.drawImage(o._data.priority() > 2 ? o._level : o._level2, left + 379, top + 86);
      graphic.drawImage(o._data.priority() > 3 ? o._level : o._level2, left + 406, top + 86);
      graphic.drawImage(o._data.priority() > 4 ? o._level : o._level2, left + 433, top + 86);
      graphic.setFont('24px Microsoft YaHei');
      graphic.drawText("时间进度", left + 22, top + 160, "rgb(255,255,255)");
      graphic.drawText("项目进度", left + 22, top + 234, "rgb(255,255,255)");
      graphic.drawImage(o._processbg, left + 123, top + 143);
      graphic.drawImage(o._processbg, left + 123, top + 218);
      graphic.drawImage(o._processtime, left + 123, top + 143, 320 * o._data.timeProgress(), 20);
      graphic.drawImage(o._process, left + 123, top + 218, 320 * o._data.proProgress(), 20);
      graphic.setFont('18px Microsoft YaHei');
      graphic.drawText(o._data.start(), left + 129, top + 160, "rgb(255,255,255)");
      graphic.drawText(o._data.end(), left + 333, top + 160, "rgb(255,255,255)");
      graphic.drawText(Math.floor(o._data.proProgress() * 100) + "％", left + 267, top + 234, "rgb(255,255,255)");
      graphic.setFont('14px Microsoft YaHei');
   }
}
MO.FEaiCockpitProjectContentSnapshot_onPaintEnd = function FEaiCockpitProjectContentSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitProjectContentSnapshot_construct = function FEaiCockpitProjectContentSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(4, 3);
}
MO.FEaiCockpitProjectContentSnapshot_setup = function FEaiCockpitProjectContentSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._escImage    = o.loadResourceImage('{eai.resource}/cockpit/project/esc.png');
   o._lineImage   = o.loadResourceImage('{eai.resource}/cockpit/project/line.png');
   o._process     = o.loadResourceImage('{eai.resource}/cockpit/project/process.png');
   o._processbg   = o.loadResourceImage('{eai.resource}/cockpit/project/processbg.png');
   o._processtime = o.loadResourceImage('{eai.resource}/cockpit/project/processtime.png');
   o._level       = o.loadResourceImage('{eai.resource}/cockpit/project/level.png');
   o._level2      = o.loadResourceImage('{eai.resource}/cockpit/project/level2.png');
   o._ok          = o.loadResourceImage('{eai.resource}/cockpit/project/ok.png');
   o._nook        = o.loadResourceImage('{eai.resource}/cockpit/project/nook.png');
   o._gridRank = MO.Class.create(MO.FGuiTable);
   var grid = o._gridRank;
   grid.setOptionClip(true);
   grid.setLocation(0, 223);
   grid.setSize(466, 120);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
   grid.setLeft(2);
   grid.setRight(2);
   grid.setHeadHeight(50);
   grid.setHeadBackColor('rgba(0,0,0,0)');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 14;
   grid.headFont().color = '#FFFFFF';
   grid.setRowHeight(37);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 14;
   grid.rowFont().color = '#FFFFFF';
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('stringData');
   column.setLabel("");
   column.setDataName('string_data');
   column.setWidth(50);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
}
MO.FEaiCockpitProjectContentSnapshot_processLogic = function FEaiCockpitProjectContentSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitProjectContentSnapshot_setDatas = function FEaiCockpitProjectContentSnapshot_setDatas(data) {
   var o = this;
   o._data = data;
   for (var i = 0; i < o._data.marquees().count() ; i++) {
      var grid = o._gridRank;
      var row = grid.allocRow();
      row.set('string_data', o._data.marquees().at(i).marquee());
      grid.insertRow(row);
   }
   o.dirty();
}
MO.FEaiCockpitProjectContentSnapshot_dispose = function FEaiCockpitProjectContentSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitProjectContentView = function FEaiCockpitProjectContentView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitProjectContentView_onPaintBegin;
   o.construct    = MO.FEaiCockpitProjectContentView_construct;
   o.setup        = MO.FEaiCockpitProjectContentView_setup;
   o.processLogic = MO.FEaiCockpitProjectContentView_processLogic;
   o.dispose      = MO.FEaiCockpitProjectContentView_dispose;
   return o;
}
MO.FEaiCockpitProjectContentView_onPaintBegin = function FEaiCockpitProjectContentView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitProjectContentView_construct = function FEaiCockpitProjectContentView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitProjectContentView_setup = function FEaiCockpitProjectContentView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitProjectContentView_processLogic = function FEaiCockpitProjectContentView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitProjectContentView_dispose = function FEaiCockpitProjectContentView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitProjectDynamic = function FEaiCockpitProjectDynamic(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Project.Dynamic';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitProjectDynamic_construct;
   o.setup       = MO.FEaiCockpitProjectDynamic_setup;
   o.process     = MO.FEaiCockpitProjectDynamic_process;
   o.dispose     = MO.FEaiCockpitProjectDynamic_dispose;
   return o;
}
MO.FEaiCockpitProjectDynamic_construct = function FEaiCockpitProjectDynamic_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitProjectDynamic_setup = function FEaiCockpitProjectDynamic_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitProjectDynamicSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitProjectDynamicView);
}
MO.FEaiCockpitProjectDynamic_process = function FEaiCockpitProjectDynamic_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitProjectDynamic_dispose = function FEaiCockpitProjectDynamic_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitProjectDynamicSnapshot = function FEaiCockpitProjectDynamicSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/project/dynamic.png';
   o.onPaintBegin   = MO.FEaiCockpitProjectDynamicSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitProjectDynamicSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitProjectDynamicSnapshot_construct;
   o.setup          = MO.FEaiCockpitProjectDynamicSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitProjectDynamicSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitProjectDynamicSnapshot_dispose;
   return o;
}
MO.FEaiCockpitProjectDynamicSnapshot_onPaintBegin = function FEaiCockpitProjectDynamicSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitProjectDynamicSnapshot_onPaintEnd = function FEaiCockpitProjectDynamicSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitProjectDynamicSnapshot_construct = function FEaiCockpitProjectDynamicSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(12, 1, 0);
   o._cellSize.set(4, 8);
}
MO.FEaiCockpitProjectDynamicSnapshot_setup = function FEaiCockpitProjectDynamicSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitProjectDynamicSnapshot_processLogic = function FEaiCockpitProjectDynamicSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitProjectDynamicSnapshot_dispose = function FEaiCockpitProjectDynamicSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitProjectDynamicView = function FEaiCockpitProjectDynamicView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitProjectDynamicView_onPaintBegin;
   o.construct    = MO.FEaiCockpitProjectDynamicView_construct;
   o.setup        = MO.FEaiCockpitProjectDynamicView_setup;
   o.processLogic = MO.FEaiCockpitProjectDynamicView_processLogic;
   o.dispose      = MO.FEaiCockpitProjectDynamicView_dispose;
   return o;
}
MO.FEaiCockpitProjectDynamicView_onPaintBegin = function FEaiCockpitProjectDynamicView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitProjectDynamicView_construct = function FEaiCockpitProjectDynamicView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitProjectDynamicView_setup = function FEaiCockpitProjectDynamicView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitProjectDynamicView_processLogic = function FEaiCockpitProjectDynamicView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitProjectDynamicView_dispose = function FEaiCockpitProjectDynamicView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitProjectListBoxItem = function FEaiCockpitProjectListBoxItem(o) {
   o = MO.Class.inherits(this, o, MO.FGuiListBoxItem);
   o._unit                 = null;
   o._bgImage              = null;
   o._pbarTimeBgImage = null;
   o._pbarTimeIconImage = null;
   o._pbarProjectBgImage = null;
   o._pbarProjectIconImage = null;
   o._indicatorLightOff_0  = null;
   o._indicatorLightOff_1  = null;
   o._indicatorLightOff_2  = null;
   o._indicatorLightOn_0   = null;
   o._indicatorLightOn_1   = null;
   o._indicatorLightOn_2   = null;
   o._fontTitle            = null;
   o._fontSponsor          = null;
   o._font2ndRow           = null;
   o._fontProgress         = null;
   o.construct       = MO.FEaiCockpitProjectListBoxItem_construct;
   o.setup           = MO.FEaiCockpitProjectListBoxItem_setup;
   o.draw            = MO.FEaiCockpitProjectListBoxItem_draw;
   o.onImageLoad     = MO.FEaiCockpitProjectListBoxItem_onImageLoad;
   o.dispose         = MO.FEaiCockpitProjectListBoxItem_dispose;
   return o;
}
MO.FEaiCockpitProjectListBoxItem_onImageLoad = function FEaiCockpitProjectListBoxItem_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitProjectListBoxItem_construct = function FEaiCockpitProjectListBoxItem_construct() {
   var o = this;
   o.__base.FGuiListBoxItem.construct.call(o);
   o._fontTitle = new MO.SUiFont();
   o._fontSponsor = new MO.SUiFont();
   o._font2ndRow = new MO.SUiFont();
   o._fontProgress = new MO.SUiFont();
}
MO.FEaiCockpitProjectListBoxItem_setup = function FEaiCockpitProjectListBoxItem_setup(unit) {
   var o = this;
   o._unit = unit;
   o._fontTitle.parse('bold #FFEC3B 21px Microsoft YaHei');
   o._fontSponsor.parse('#FFFFFF 18px Microsoft YaHei');
   o._font2ndRow.parse('#FFFFFF 15px Microsoft YaHei');
   o._fontProgress.parse('#FFFFFF 17px Microsoft YaHei');
   var imageConsole = MO.Console.find(MO.FImageConsole);
   o._bgImage = imageConsole.load('{eai.resource}/cockpit/project/item_bg.png');
   o._pbarTimeBgImage = imageConsole.load('{eai.resource}/cockpit/project/pgbar_time_bg.png');
   o._pbarTimeIconImage = imageConsole.load('{eai.resource}/cockpit/project/pgbar_time_icon.png');
   o._pbarProjectBgImage = imageConsole.load('{eai.resource}/cockpit/project/pgbar_project_bg.png');
   o._pbarProjectIconImage = imageConsole.load('{eai.resource}/cockpit/project/pgbar_project_icon.png');
   o._indicatorLightOff_0 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_off_0.png');
   o._indicatorLightOff_1 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_off_1.png');
   o._indicatorLightOff_2 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_off_2.png');
   o._indicatorLightOn_0 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_on_0.png');
   o._indicatorLightOn_1 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_on_1.png');
   o._indicatorLightOn_2 = imageConsole.load('{eai.resource}/cockpit/project/pg_light_on_2.png');
   o._bgImage.addLoadListener(o, o.onImageLoad);
   o._pbarTimeBgImage.addLoadListener(o, o.onImageLoad);
   o._pbarTimeIconImage.addLoadListener(o, o.onImageLoad);
   o._pbarProjectBgImage.addLoadListener(o, o.onImageLoad);
   o._pbarProjectIconImage.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOff_0.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOff_1.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOff_2.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOn_0.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOn_1.addLoadListener(o, o.onImageLoad);
   o._indicatorLightOn_2.addLoadListener(o, o.onImageLoad);
}
MO.FEaiCockpitProjectListBoxItem_draw = function FEaiCockpitProjectListBoxItem_draw(graphic, rectangle, rate) {
   var o = this;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var drawX = left + 10;
   var drawY = top + 26;
   if (rate == null || rate == undefined) {
      rate = 1;
   }
   var fontTitle = o._fontTitle;
   var fontSponsor = o._fontSponsor;
   var font2ndRow = o._font2ndRow;
   var fontProgress = o._fontProgress;
   var unit = o._unit;
   var textWidth = 0;
   var drawText = unit.name();
   graphic.setFont(fontTitle.toString());
   graphic.drawText(drawText, drawX, drawY, fontTitle.color);
   drawText = unit.uname();
   textWidth = graphic.textWidth(drawText);
   drawX = left + width - textWidth
   drawY -= 2;
   graphic.setFont(fontSponsor.toString());
   graphic.drawText(drawText, drawX, drawY, fontSponsor.color);
   drawX = left + 12;
   drawY += 28;
   drawText = '优先级';
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   textWidth = graphic.textWidth(drawText);
   drawX += textWidth;
   drawX += 10;
   var bakDrawX = drawX;
   drawY -= 10;
   graphic.drawImage(o._indicatorLightOff_0, drawX, drawY, 12, 12);
   drawX += 20;
   graphic.drawImage(o._indicatorLightOff_1, drawX, drawY, 12, 12);
   drawX += 20;
   graphic.drawImage(o._indicatorLightOff_2, drawX, drawY, 12, 12);
   bakDrawX += unit.priority() * 20;
   graphic.drawImage(o['_indicatorLightOn_' + unit.priority()], bakDrawX, drawY, 12, 12);
   drawX = 190;
   drawY += 10;
   drawText = '状态指示灯';
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   textWidth = graphic.textWidth(drawText);
   drawX += textWidth;
   drawX += 10;
   var bakDrawX = drawX;
   drawY -= 10;
   graphic.drawImage(o._indicatorLightOff_0, drawX, drawY, 12, 12);
   drawX += 20;
   graphic.drawImage(o._indicatorLightOff_1, drawX, drawY, 12, 12);
   drawX += 20;
   graphic.drawImage(o._indicatorLightOff_2, drawX, drawY, 12, 12);
   bakDrawX += unit.status() * 20;
   graphic.drawImage(o['_indicatorLightOn_' + unit.status()], bakDrawX, drawY, 12, 12);
   drawX = left + 10;
   drawY += 41;
   drawText = '时间进度';
   graphic.setFont(fontProgress.toString());
   graphic.drawText(drawText, drawX, drawY, fontProgress.color);
   textWidth = graphic.textWidth(drawText);
   drawX += textWidth + 10;
   drawY -= 8;
   graphic.drawImage(o._pbarTimeBgImage, drawX, drawY, 205, 6);
   var clipWidth = 172 * unit.timeProgress() * 0.01 * rate;
   var clipHeight = 21;
   graphic.drawImage(o._pbarTimeIconImage, drawX - 10 + clipWidth, drawY - 7, 43, 19);
   graphic._handle.restore();
   drawText = parseInt(unit.timeProgress() * rate) + '%';
   graphic.setFont(font2ndRow.toString());
   textWidth = graphic.textWidth(drawText);
   if (drawText == "100%") {
      graphic.drawText(drawText, drawX - 10 + clipWidth + 3, drawY + 8, font2ndRow.color);
   } else {
      graphic.drawText(drawText, drawX - 10 + clipWidth + 5, drawY + 8, font2ndRow.color);
   }
   drawX = left + 10;
   drawY += 30;
   drawText = '项目进度';
   graphic.setFont(fontProgress.toString());
   graphic.drawText(drawText, drawX, drawY + 10, fontProgress.color);
   textWidth = graphic.textWidth(drawText);
   drawX += textWidth + 10;
   graphic.drawImage(o._pbarProjectBgImage, drawX, drawY + 3, 205, 6);
   var clipWidth = 172 * unit.proProgress() * 0.01 * rate;
   var clipHeight = 21;
   graphic.drawImage(o._pbarProjectIconImage, drawX - 10 + clipWidth, drawY - 4, 43, 19);
   graphic._handle.restore();
   drawText = parseInt(unit.proProgress() * rate) + '%';
   graphic.setFont(font2ndRow.toString());
   textWidth = graphic.textWidth(drawText);
   if (drawText == "100%") {
      graphic.drawText(drawText, drawX - 10 + clipWidth + 3, drawY + 12, font2ndRow.color);
   } else {
      graphic.drawText(drawText, drawX - 10 + clipWidth + 5, drawY + 12, font2ndRow.color);
   }
}
MO.FEaiCockpitProjectListBoxItem_dispose = function FEaiCockpitProjectListBoxItem_dispose(){
   var o = this;
   o._unit = MO.Lang.Object.dispose(o._unit);
   o._bgImage = MO.Lang.Object.dispose(o._bgImage);
   o._pbarTimeBgImage = MO.Lang.Object.dispose(o._pbarTimeBgImage);
   o._pbarTimeIconImage = MO.Lang.Object.dispose(o._pbarTimeIconImage);
   o._pbarProjectBgImage = MO.Lang.Object.dispose(o._pbarProjectBgImage);
   o._pbarProjectIconImage = MO.Lang.Object.dispose(o._pbarProjectIconImage);
   o._indicatorLightOff_0 = MO.Lang.Object.dispose(o._indicatorLightOff_0);
   o._indicatorLightOff_1 = MO.Lang.Object.dispose(o._indicatorLightOff_1);
   o._indicatorLightOff_2 = MO.Lang.Object.dispose(o._indicatorLightOff_2);
   o._indicatorLightOn_0 = MO.Lang.Object.dispose(o._indicatorLightOn_0);
   o._indicatorLightOn_1 = MO.Lang.Object.dispose(o._indicatorLightOn_1);
   o._indicatorLightOn_2 = MO.Lang.Object.dispose(o._indicatorLightOn_2);
   o._fontTitle = MO.Lang.Object.dispose(o._fontTitle);
   o._fontSponsor = MO.Lang.Object.dispose(o._fontSponsor);
   o._font2ndRow = MO.Lang.Object.dispose(o._font2ndRow);
   o._fontProgress = MO.Lang.Object.dispose(o._fontProgress);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitProjectMessage = function FEaiCockpitProjectMessage(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._projects = MO.Class.register(o, [new MO.AGetter('_projects'), new MO.APersistence('_projects', MO.EDataType.Objects, MO.FEaiCockpitProjectMessageUnit)]);
   return o;
}
MO.FEaiCockpitProjectMessageUnit = function FEaiCockpitProjectMessageUnit(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._name         = MO.Class.register(o, [new MO.AGetter('_name'), new MO.APersistence('_name', MO.EDataType.String)]);
   o._uname        = MO.Class.register(o, [new MO.AGetter('_uname'), new MO.APersistence('_uname', MO.EDataType.String)]);
   o._priority     = MO.Class.register(o, [new MO.AGetter('_priority'), new MO.APersistence('_priority', MO.EDataType.Int32)]);
   o._status       = MO.Class.register(o, [new MO.AGetter('_status'), new MO.APersistence('_status', MO.EDataType.Int32)]);
   o._timeKey      = MO.Class.register(o, [new MO.AGetter('_timeKey'), new MO.APersistence('_timeKey', MO.EDataType.String)]);
   o._timeProgress = MO.Class.register(o, [new MO.AGetter('_timeProgress'), new MO.APersistence('_timeProgress', MO.EDataType.Int32)]);
   o._proKey       = MO.Class.register(o, [new MO.AGetter('_proKey'), new MO.APersistence('_proKey', MO.EDataType.String)]);
   o._proProgress  = MO.Class.register(o, [new MO.AGetter('_proProgress'), new MO.APersistence('_proProgress', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitProjectModuleManager = function FEaiCockpitProjectModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._catalogModule   = MO.Class.register(o, new MO.AGetter('_catalogModule'));
   o._scoreModule     = MO.Class.register(o, new MO.AGetter('_scoreModule'));
   o._data            = null;
   o._dataTicker      = null;
   o._statusCd        = 0;
   o._autoPlay        = false;
   o._contmodues      = null;
   o.onDataFetch      = MO.FEaiCockpitProjectModuleManager_onDataFetch;
   o.construct        = MO.FEaiCockpitProjectModuleManager_construct;
   o.setup            = MO.FEaiCockpitProjectModuleManager_setup;
   o.process          = MO.FEaiCockpitProjectModuleManager_processLogic;
   o.dispose          = MO.FEaiCockpitProjectModuleManager_dispose;
   return o;
}
MO.FEaiCockpitProjectModuleManager_onDataFetch = function FEaiCockpitProjectModuleManager_onDataFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      var modules = o._modules;
      var count = data.contents().count();
      for (var i = 0; i < (count > 9 ? 9 : count) ; i++) {
         o._contmodues[i].controlSnapshot().setDatas(data.contents().at(i));
         o._contmodues[i].controlSnapshot().setVisible(true);
         o._contmodues[i].controlView().setVisible(true);
      }
   }
}
MO.FEaiCockpitProjectModuleManager_construct = function FEaiCockpitProjectModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitProjectContentData);
}
MO.FEaiCockpitProjectModuleManager_setup = function FEaiCockpitProjectModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   o._contmodues = new Array();
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   for (var i = 0; i < 9; i++) {
      var tempmodule = o.createModule(MO.FEaiCockpitProjectContent, "Project.Content" + i);
      tempmodule.controlSnapshot().cellLocation().set(0 + (i % 3) * 4, 1 + Math.floor(i / 3) * 3, 0);
      tempmodule.controlSnapshot().setVisible(false);
      tempmodule.controlView().setVisible(false);
      o._contmodues.push(tempmodule);
   }
   o._projectDynamicModule = o.createModule(MO.FEaiCockpitProjectDynamic);
   var application = o._scene.application();
   var desktop = application.desktop();
   var logicSize = desktop.logicSize();
   var cellWidth = logicSize.width / 16;
   var cellHeight = logicSize.height / 9;
   var modules = o._modules;
   var count = modules.count();
   for(var i = 0; i < count; i++){
      var module = modules.at(i);
      var typeCd = module.typeCd();
      var snapshot = module.controlSnapshot();
      var snapshotCellSize = snapshot.cellSize();
      snapshot.size().set(cellWidth * snapshotCellSize.width, cellHeight * snapshotCellSize.height);
      var view = module.controlView();
      view.size().assign(logicSize);
      snapshot.cellLocation().z = 10;
      var renderable = snapshot.makeRenderable();
      renderable.material().info().sortLevel = 7;
      snapshot.updateRenderable();
      snapshot.placeInCell();
      snapshotDisplay.pushRenderable(renderable);
      view.cellLocation().z = 15;
      var renderable = view.makeRenderable();
      renderable.material().info().sortLevel = 6;
      view.updateRenderable();
      view.placeInCell();
      viewDisplay.pushRenderable(renderable);
   }
}
MO.FEaiCockpitProjectModuleManager_processLogic = function FEaiCockpitProjectModuleManager_processLogic(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.process.call(o);
   if (o._dataTicker.process()) {
      var project = MO.Console.find(MO.FEaiLogicConsole).cockpit().project();
      project.doFetchContents(o, o.onDataFetch);
   }
}
MO.FEaiCockpitProjectModuleManager_dispose = function FEaiCockpitProjectModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
MO.FEaiCockpitProjectSnapshot = function FEaiCockpitProjectSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name                 = 'cockpit.project.snapshot';
   o._backgroundUri        = '{eai.resource}/cockpit/project/ground.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._listBox              = null;
   o._backgroundImage      = null;
   o._backgroundPadding    = null;
   o._startFlag            = true;
   o.onDataFetch           = MO.FEaiCockpitProjectSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitProjectSnapshot_onPaintBegin;
   o.construct             = MO.FEaiCockpitProjectSnapshot_construct;
   o.setup                 = MO.FEaiCockpitProjectSnapshot_setup;
   o.processLogic          = MO.FEaiCockpitProjectSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitProjectSnapshot_dispose;
   return o;
}
MO.FEaiCockpitProjectSnapshot_onDataFetch = function FEaiCockpitProjectSnapshot_onDataFetch(event) {
   var o = this;
   var content = event.content;
   var listBox = o._listBox;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      var projects = data.projects();
      var count = projects.count();
      listBox.clear();
      for (var i = 0; i < count ; i++) {
         var item = MO.Class.create(MO.FEaiCockpitProjectListBoxItem);
         item.setup(projects.at(i));
         item.setSize(320, 120);
         listBox.push(item);
      }
      listBox.setStartTick(MO.Timer.current());
      if(o._startFlag) {
         listBox.setAnimationPlaying(true);
         o._startFlag = false;
      }else {
         listBox.setAnimationPlaying(false);
      }
      o.dirty();
   }
}
MO.FEaiCockpitProjectSnapshot_onPaintBegin = function FEaiCockpitProjectSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitProjectSnapshot_construct = function FEaiCockpitProjectSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(3, 6);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitProjectMessage);
}
MO.FEaiCockpitProjectSnapshot_setup = function FEaiCockpitProjectSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var listBox = o._listBox = MO.Class.create(MO.FGuiListBox);
   listBox.setDisplayCount(5);
   listBox.setLocation(20, 55);
   listBox.setSize(330, 660);
   listBox.setGap(10);
   o.push(listBox);
}
MO.FEaiCockpitProjectSnapshot_processLogic = function FEaiCockpitProjectSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if (o._dataTicker.process()) {
      var project = MO.Console.find(MO.FEaiLogicConsole).cockpit().project();
      project.doFetch(o, o.onDataFetch);
   }
   if (o._listBox.animationPlaying()) {
      o.dirty();
   }
}
MO.FEaiCockpitProjectSnapshot_dispose = function FEaiCockpitProjectSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitProjectView = function FEaiCockpitProjectView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name          = 'cockpit.project.view';
   o.onPaintBegin   = MO.FEaiCockpitProjectView_onPaintBegin;
   o.construct      = MO.FEaiCockpitProjectView_construct;
   o.setup          = MO.FEaiCockpitProjectView_setup;
   o.processLogic   = MO.FEaiCockpitProjectView_processLogic;
   o.dispose        = MO.FEaiCockpitProjectView_dispose;
   return o;
}
MO.FEaiCockpitProjectView_onPaintBegin = function FEaiCockpitProjectView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitProjectView_construct = function FEaiCockpitProjectView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitProjectView_setup = function FEaiCockpitProjectView_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitProjectView_processLogic = function FEaiCockpitProjectView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitProjectView_dispose = function FEaiCockpitProjectView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
