MO.FEaiCockpitDataNotice = function FEaiCockpitDataNotice(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._notices = MO.Class.register(o, [new MO.AGetter('_notices'), new MO.APersistence('_notices', MO.EDataType.Objects, MO.FEaiCockpitDataNoticeUnit)]);
   return o;
}
MO.FEaiCockpitDataNoticeUnit = function FEaiCockpitDataNoticeUnit(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label       = MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._userName    = MO.Class.register(o, [new MO.AGetter('_userName'), new MO.APersistence('_userName', MO.EDataType.String)]);
   o._publishDate = MO.Class.register(o, [new MO.AGetter('_publishDate'), new MO.APersistence('_publishDate', MO.EDataType.String)]);
   o._viewCount   = MO.Class.register(o, [new MO.AGetter('_viewCount'), new MO.APersistence('_viewCount', MO.EDataType.Int32)]);
   o._urgencyLevel = MO.Class.register(o, [new MO.AGetter('_urgencyLevel'), new MO.APersistence('_urgencyLevel', MO.EDataType.Int32)]);
   o._userCount = MO.Class.register(o, [new MO.AGetter('_userCount'), new MO.APersistence('_userCount', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitNotice = function FEaiCockpitNotice(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'notice';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNotice_construct;
   o.setup      = MO.FEaiCockpitNotice_setup;
   o.process    = MO.FEaiCockpitNotice_process;
   o.dispose    = MO.FEaiCockpitNotice_dispose;
   return o;
}
MO.FEaiCockpitNotice_construct = function FEaiCockpitNotice_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitNotice_setup = function FEaiCockpitNotice_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeView);
   o.setupModuleManager(MO.FEaiCockpitNoticeModuleManager);
}
MO.FEaiCockpitNotice_process = function FEaiCockpitNotice_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitNotice_dispose = function FEaiCockpitNotice_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitNoticeDynamic = function FEaiCockpitNoticeDynamic(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'notice.dynamic';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNoticeDynamic_construct;
   o.setup      = MO.FEaiCockpitNoticeDynamic_setup;
   o.process    = MO.FEaiCockpitNoticeDynamic_process;
   o.dispose    = MO.FEaiCockpitNoticeDynamic_dispose;
   return o;
}
MO.FEaiCockpitNoticeDynamic_construct = function FEaiCockpitNoticeDynamic_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitNoticeDynamic_setup = function FEaiCockpitNoticeDynamic_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeDynamicSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeDynamicView);
}
MO.FEaiCockpitNoticeDynamic_process = function FEaiCockpitNoticeDynamic_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNoticeDynamic_dispose = function FEaiCockpitNoticeDynamic_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNoticeDynamicData   = function FEaiCockpitNoticeDynamicData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._noticeDynamic = MO.Class.register(o, [new MO.AGetter('_noticeDynamic'),new MO.APersistence('_noticeDynamic',MO.EDataType.Objects, MO.FEaiCockpitNoticeDynamicDataUnit)]);
   return o;
}
MO.FEaiCockpitNoticeDynamicDataUnit = function FEaiCockpitNoticeDynamicDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._valueCount = MO.Class.register(o, [new MO.AGetter('_valueCount'), new MO.APersistence('_valueCount', MO.EDataType.Int32)]);
   o._department = MO.Class.register(o, [new MO.AGetter('_department'), new MO.APersistence('_department', MO.EDataType.String)]);
   o._readName   = MO.Class.register(o, [new MO.AGetter('_readName'), new MO.APersistence('_readName', MO.EDataType.String)]);
   o._readDate   = MO.Class.register(o, [new MO.AGetter('_readDate'), new MO.APersistence('_readDate', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitNoticeDynamicNewestData   = function FEaiCockpitNoticeDynamicNewestData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._noticePrograss   = MO.Class.register(o, [new MO.AGetter('_noticePrograss'),new MO.APersistence('_noticePrograss',MO.EDataType.Objects, MO.FEaiCockpitNoticeDynamicNewestDataUnit)]);
   return o;
}
MO.FEaiCockpitNoticeDynamicNewestDataUnit = function FEaiCockpitNoticeDynamicNewestDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._valueCount      = MO.Class.register(o, [new MO.AGetter('_valueCount'), new MO.APersistence('_valueCount', MO.EDataType.Int32)]);
   o._department      = MO.Class.register(o, [new MO.AGetter('_department'), new MO.APersistence('_department', MO.EDataType.String)]);
   o._readprogress    = MO.Class.register(o, [new MO.AGetter('_readprogress'), new MO.APersistence('_readprogress', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitNoticeDynamicSnapshot = function FEaiCockpitNoticeDynamicSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/notice/notice_dynamic_bg.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._fontTop              = null;
   o._fontContent          = null;
   o._dynamics             = null;
   o._readDynamics         = null;
   o._dynamicData          = MO.Class.register(o, new MO.AGetter('_dynamicData'));
   o._dynamicSerialization = MO.Class.register(o, new MO.AGetter('_dynamicSerialization'));
   o._readSerialization    = MO.Class.register(o, new MO.AGetter('_readSerialization'));
   o.onPaintBegin          = MO.FEaiCockpitNoticeDynamicSnapshot_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeDynamicSnapshot_construct;
   o.setup                 = MO.FEaiCockpitNoticeDynamicSnapshot_setup;
   o.refreshDynamic        = MO.FEaiCockpitNoticeDynamicSnapshot_refreshDynamic;
   o.refreshRead           = MO.FEaiCockpitNoticeDynamicSnapshot_refreshRead;
   o.processLogic          = MO.FEaiCockpitNoticeDynamicSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeDynamicSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeDynamicSnapshot_onPaintBegin = function FEaiCockpitNoticeDynamicSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o,event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var fontTop = o._fontTop;
   graphic.setFont(fontTop.toString());
   graphic.drawText("号令动态", left + 55, top + 50, fontTop.color);
   graphic.drawText("最新号令阅读情况", left + 600, top + 50, fontTop.color);
   var fontContent = o._fontContent;
   graphic.setFont(fontContent.toString());
   var dynamicCount = o._dynamics.count();
   var dynamicData = o._dynamicData;
   if (dynamicCount > 0){
   for (var i = 0; i < dynamicCount; i++) {
         var dynamic = o._dynamics.at(i)
         dynamicData.parse(dynamic.readDate());
         console.log();
         graphic.drawText(dynamic.department() + dynamic.readName() + "查看了号令", left + 55, top + 80 + 35*i, fontContent.color);
         graphic.drawText(dynamicData.format('hh24:mi'), left+500, top+75+35*i, fontContent.color);
      }
   }
   var readCount = o._readDynamics.count();
   if (readCount >0){
      for (var i = 0; i < readCount; i++) {
            var readDynamic = o._readDynamics.at(i);
            var progress = readDynamic.readprogress();
            graphic.drawText(readDynamic.department() + "阅读量" + progress*100 + "%", left + 600, top + 80 + 35*i, fontContent.color);
            graphic.drawText("短信提醒", left+1100, top+75+35*i, '#1366A3');
         }
   }
}
MO.FEaiCockpitNoticeDynamicSnapshot_refreshDynamic = function FEaiCockpitNoticeDynamicSnapshot_refreshDynamic(event) {
   var o = this;
   var content = event.content;
   var noticeDynamic = o._dynamicSerialization;
   noticeDynamic.unserializeSignBuffer(event.sign, event.content, true);
   o._dynamics = noticeDynamic.noticeDynamic();
}
MO.FEaiCockpitNoticeDynamicSnapshot_refreshRead = function FEaiCockpitNoticeDynamicSnapshot_refreshRead(event) {
   var o = this;
   var content = event.content;
   var readDynamic = o._readSerialization;
   readDynamic.unserializeSignBuffer(event.sign, event.content, true);
   o._readDynamics = readDynamic.noticePrograss();
}
MO.FEaiCockpitNoticeDynamicSnapshot_construct = function FEaiCockpitNoticeDynamicSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(7, 7, 0);
   o._cellSize.set(9, 2);
   o._dynamicSerialization = MO.Class.create(MO.FEaiCockpitNoticeDynamicData);
   o._readSerialization    = MO.Class.create(MO.FEaiCockpitNoticeDynamicNewestData);
   o._dynamicData          = new MO.TDate();
   o._fontTop              = new MO.SUiFont();
   o._dynamics             = new MO.TObjects();
   o._readDynamics         = new MO.TObjects();
   o._fontContent          = new MO.SUiFont();
   o._dataTicker           = new MO.TTicker(1000 * 60 );
}
MO.FEaiCockpitNoticeDynamicSnapshot_setup = function FEaiCockpitNoticeDynamicSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._fontTop.parse('#FFCC00 25px Microsoft YaHei');
   o._fontContent.parse('#FFFFFF 21px Microsoft YaHei');
   var statistics = MO.Console.find(MO.FEaiLogicConsole).cockpit().notice();
   if (o._dataTicker.process()){
      statistics.doFetchDynamic(o, o.refreshDynamic);
      statistics.doFetchRead(o, o.refreshRead);
   }
}
MO.FEaiCockpitNoticeDynamicSnapshot_processLogic = function FEaiCockpitNoticeDynamicSnapshot_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeDynamicSnapshot_dispose = function FEaiCockpitNoticeDynamicSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
}
MO.FEaiCockpitNoticeDynamicView = function FEaiCockpitNoticeDynamicView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeDynamicView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeDynamicView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeDynamicView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeDynamicView_construct;
   o.setup                 = MO.FEaiCockpitNoticeDynamicView_setup;
   o.draw                  = MO.FEaiCockpitNoticeDynamicView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeDynamicView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeDynamicView_dispose;
   return o;
}
MO.FEaiCockpitNoticeDynamicView_onImageLoad = function FEaiCockpitNoticeDynamicView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeDynamicView_onPaintBegin = function FEaiCockpitNoticeDynamicView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitNoticeDynamicView_construct = function FEaiCockpitNoticeDynamicView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNoticeDynamicView_setup = function FEaiCockpitNoticeDynamicView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNoticeDynamicView_processLogic = function FEaiCockpitNoticeDynamicView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeDynamicView_dispose = function FEaiCockpitNoticeDynamicView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitNoticeListBoxItem = function FEaiCockpitNoticeListBoxItem(o) {
   o = MO.Class.inherits(this, o, MO.FGuiListBoxItem);
   o._noticeUnit           = null;
   o._isSelected           = MO.Class.register(o, new MO.AGetSet('_isSelected'), false);
   o._pbarBgImage          = null;
   o._pbarFillImage        = null;
   o._font1stRowW          = null;
   o._font1stRowY          = null;
   o._font2ndRowW          = null;
   o._font2ndRowY          = null;
   o._formatDate           = null;
   o.construct       = MO.FEaiCockpitNoticeListBoxItem_construct;
   o.loadData        = MO.FEaiCockpitNoticeListBoxItem_loadData;
   o.draw            = MO.FEaiCockpitNoticeListBoxItem_draw;
   o.onImageLoad     = MO.FEaiCockpitNoticeListBoxItem_onImageLoad;
   o.dispose         = MO.FEaiCockpitNoticeListBoxItem_dispose;
   return o;
}
MO.FEaiCockpitNoticeListBoxItem_onImageLoad = function FEaiCockpitNoticeListBoxItem_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeListBoxItem_construct = function FEaiCockpitNoticeListBoxItem_construct() {
   var o = this;
   o.__base.FGuiListBoxItem.construct.call(o);
   o._font1stRowW = new MO.SUiFont();
   o._font1stRowY = new MO.SUiFont();
   o._font2ndRowW = new MO.SUiFont();
   o._font2ndRowY = new MO.SUiFont();
   o._formatDate = new MO.TDate();
}
MO.FEaiCockpitNoticeListBoxItem_loadData = function FEaiCockpitNoticeListBoxItem_loadData(noticeUnit) {
   var o = this;
   o._noticeUnit = noticeUnit;
   o._font1stRowW.parse('bold #FFFFFF 24px Microsoft YaHei');
   o._font1stRowY.parse('bold #FFEC3B 24px Microsoft YaHei');
   o._font2ndRowW.parse('bold #FFFFFF 22px Microsoft YaHei');
   o._font2ndRowY.parse('bold #FFEC3B 22px Microsoft YaHei');
   o._pbarBgImage = o._listBox.loadResourceImage('{eai.resource}/cockpit/notice/progress_bar_bg.png');
   o._pbarFillImage = o._listBox.loadResourceImage('{eai.resource}/cockpit/notice/progress_bar_fill.png');
   o._degreeImportantImage = o._listBox.loadResourceImage('{eai.resource}/cockpit/notice/degree_important.png');
   o._degreeUrgentImage = o._listBox.loadResourceImage('{eai.resource}/cockpit/notice/degree_urgent.png');
   o._degreeNormalImage = o._listBox.loadResourceImage('{eai.resource}/cockpit/notice/degree_normal.png');
}
MO.FEaiCockpitNoticeListBoxItem_draw = function FEaiCockpitNoticeListBoxItem_draw(graphic, rectangle, rate) {
   var o = this;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var drawX = left + 40;
   var drawY = top + 34;
   if (rate == null || rate == undefined) {
      rate = 1;
   }
   var font1stRowW = o._font1stRowW;
   var font1stRowY = o._font1stRowY;
   var font2ndRowW = o._font2ndRowW;
   var font2ndRowY = o._font2ndRowY;
   var noticeUnit = o._noticeUnit;
   var percent = noticeUnit.viewCount() / noticeUnit.userCount();
   if (percent > 100) {
       percent = 100;
   }
   drawText = noticeUnit.label();
   graphic.setFont(font2ndRowW.toString());
   graphic.drawText(drawText, drawX, drawY, font1stRowW.color);
   textWidth = graphic.textWidth(drawText);
   drawX = 410;
   drawText = noticeUnit.publishDate();
   var formatDate = o._formatDate;
   formatDate.parseAuto(drawText);
   drawText = formatDate.format('YYYY-MM-DD')
   graphic.setFont(font2ndRowW.toString());
   graphic.drawText(drawText, drawX, drawY, font1stRowW.color);
   textWidth = graphic.textWidth(drawText);
   drawX = 560;
   drawY -= 16;
   graphic.drawImage(o._pbarBgImage, drawX, drawY, 199, 13);
   var clipWidth = 199 * percent * rate * 0.01;
   var clipHeight = 21;
   graphic._handle.save();
   graphic._handle.rect(drawX, drawY, clipWidth, 13)
   graphic._handle.clip();
   graphic.drawImage(o._pbarFillImage, drawX, drawY, 199, 13);
   graphic._handle.restore();
   var urgencyLevel = noticeUnit.urgencyLevel();
   var urgencyImage = null;
   if (urgencyLevel == 1) {
       urgencyImage = o._degreeNormalImage;
   } else if (urgencyLevel == 2) {
       urgencyImage = o._degreeImportantImage;
   } else if (urgencyLevel == 3) {
       urgencyImage = o._degreeUrgentImage;
   }
   if (urgencyImage) {
      graphic.drawImage(urgencyImage, drawX + 260, drawY - 10, 63, 37);
   }
}
MO.FEaiCockpitNoticeListBoxItem_dispose = function FEaiCockpitNoticeListBoxItem_dispose(){
   var o = this;
   o._noticeUnit = MO.Lang.Object.dispose(o._noticeUnit);
   o._pbarBgImage = MO.Lang.Object.dispose(o._pbarBgImage);
   o._pbarFillImage = MO.Lang.Object.dispose(o._pbarFillImage);
   o._font1stRowW = MO.Lang.Object.dispose(o._font1stRowW);
   o._font1stRowY = MO.Lang.Object.dispose(o._font1stRowY);
   o._font2ndRowW = MO.Lang.Object.dispose(o._font2ndRowW);
   o._font2ndRowY = MO.Lang.Object.dispose(o._font2ndRowY);
   o._formatDate = MO.Lang.Object.dispose(o._formatDate);
   o._degreeImportantImage = MO.Lang.Object.dispose(o._degreeImportantImage);
   o._degreeUrgentImage = MO.Lang.Object.dispose(o._degreeUrgentImage);
   o._degreeNormalImage = MO.Lang.Object.dispose(o._degreeNormalImage);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitNoticeMap = function FEaiCockpitNoticeMap(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'notice.map';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNoticeMap_construct;
   o.setup      = MO.FEaiCockpitNoticeMap_setup;
   o.process    = MO.FEaiCockpitNoticeMap_process;
   o.dispose    = MO.FEaiCockpitNoticeMap_dispose;
   return o;
}
MO.FEaiCockpitNoticeMap_construct = function FEaiCockpitNoticeMap_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitNoticeMap_setup = function FEaiCockpitNoticeMap_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeMapSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeMapView);
}
MO.FEaiCockpitNoticeMap_process = function FEaiCockpitNoticeMap_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNoticeMap_dispose = function FEaiCockpitNoticeMap_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNoticeMapSnapshot = function FEaiCockpitNoticeMapSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon           = true;
   o._backgroundUri        = '{eai.resource}/cockpit/notice/map/ground.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._groundImage          = null;
   o._mapImage             = null;
   o._fontTop              = null;
   o.onImageLoad           = MO.FEaiCockpitNoticeMapSnapshot_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeMapSnapshot_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeMapSnapshot_construct;
   o.setup                 = MO.FEaiCockpitNoticeMapSnapshot_setup;
   o.processLogic          = MO.FEaiCockpitNoticeMapSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeMapSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeMapSnapshot_onPaintBegin = function FEaiCockpitNoticeMapSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o,event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var scale = 516/671;
   graphic.drawImage(o._mapImage, left+width*1.5/9,top+height/6*0.5,width*2/3,width*2/3*scale);
}
MO.FEaiCockpitNoticeMapSnapshot_construct = function FEaiCockpitNoticeMapSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(7, 1, 0);
   o._cellSize.set(9, 6);
}
MO.FEaiCockpitNoticeMapSnapshot_setup = function FEaiCockpitNoticeMapSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._mapImage = o.loadResourceImage('{eai.resource}/cockpit/notice/map/map.png');
}
MO.FEaiCockpitNoticeMapSnapshot_processLogic = function FEaiCockpitNoticeMapSnapshot_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeMapSnapshot_dispose = function FEaiCockpitNoticeMapSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitNoticeMapView = function FEaiCockpitNoticeMapView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeMapView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeMapView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeMapView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeMapView_construct;
   o.setup                 = MO.FEaiCockpitNoticeMapView_setup;
   o.draw                  = MO.FEaiCockpitNoticeMapView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeMapView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeMapView_dispose;
   return o;
}
MO.FEaiCockpitNoticeMapView_onImageLoad = function FEaiCockpitNoticeMapView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeMapView_onPaintBegin = function FEaiCockpitNoticeMapView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitNoticeMapView_construct = function FEaiCockpitNoticeMapView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNoticeMapView_setup = function FEaiCockpitNoticeMapView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNoticeMapView_processLogic = function FEaiCockpitNoticeMapView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeMapView_dispose = function FEaiCockpitNoticeMapView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitNoticeModuleManager = function FEaiCockpitNoticeModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._catalogModule   = MO.Class.register(o, new MO.AGetter('_catalogModule'));
   o._scoreModule     = MO.Class.register(o, new MO.AGetter('_scoreModule'));
   o._statusCd        = 0;
   o._autoPlay        = false;
   o.construct        = MO.FEaiCockpitNoticeModuleManager_construct;
   o.setup            = MO.FEaiCockpitNoticeModuleManager_setup;
   o.dispose          = MO.FEaiCockpitNoticeModuleManager_dispose;
   return o;
}
MO.FEaiCockpitNoticeModuleManager_construct = function FEaiCockpitNoticeModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
}
MO.FEaiCockpitNoticeModuleManager_setup = function FEaiCockpitNoticeModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   o._mapModule = o.createModule(MO.FEaiCockpitNoticeMap);
   o._userModule = o.createModule(MO.FEaiCockpitNoticeUser);
   o._newsetModule = o.createModule(MO.FEaiCockpitNoticeNewest);
   o._tableModule = o.createModule(MO.FEaiCockpitNoticeTable);
   o._dynamicModule = o.createModule(MO.FEaiCockpitNoticeDynamic);
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
MO.FEaiCockpitNoticeModuleManager_selectModeCd = function FEaiCockpitNoticeModuleManager_selectModeCd(modeCd, module){
   var o = this;
   debugger
   var moveSpeed = 16;
   var logoDisplay = o._logoDisplay;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   var stage = o._scene.activeStage();
   var camera = stage.camera();
   var modules = o._modules;
   var moduleCount = modules.count();
   switch(modeCd){
      case MO.EEaiCockpitMode.Logo:
         logoDisplay.setVisible(true);
         snapshotDisplay.setVisible(false);
         viewDisplay.setVisible(false);
         var action = MO.Class.create(MO.FE3dCameraTimelineAction);
         action.setSpeed(moveSpeed);
         action.link(camera);
         action.targetPosition().set(0, 0, -13);
         o._mainTimeline.pushAction(action);
         break;
      case MO.EEaiCockpitMode.Main:
         o._autoPlay = false;
         o._mainTimeline.clear();
         logoDisplay.setVisible(false);
         snapshotDisplay.setVisible(true);
         viewDisplay.setVisible(false);
         var action = MO.Class.create(MO.FE3dCameraTimelineAction);
         action.setSpeed(moveSpeed);
         action.link(camera);
         action.targetPosition().set(0, 0, -7.6);
         o._mainTimeline.pushAction(action);
         break;
      case MO.EEaiCockpitMode.Icon:
         break;
      case MO.EEaiCockpitMode.Module:
         if (module.slideshow()) {
            logoDisplay.setVisible(false);
            snapshotDisplay.setVisible(false);
            viewDisplay.setVisible(true);
            o.selectModuleView(module);
            var action = MO.Class.create(MO.FE3dCameraTimelineAction);
            action.setSpeed(moveSpeed);
            action.link(camera);
            action.targetPosition().set(0, 0, -3);
            o._mainTimeline.pushAction(action);
            o._autoPlay = true;
            o.startAutoPlay(module);
            break;
         }
         else {
            return;
         }
   }
   o._modeCd = modeCd;
   o._focusModule = module;
}
MO.FEaiCockpitNoticeModuleManager_dispose = function FEaiCockpitNoticeModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
MO.FEaiCockpitNoticeNewest = function FEaiCockpitNoticeNewest(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'notice.newest';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNoticeNewest_construct;
   o.setup      = MO.FEaiCockpitNoticeNewest_setup;
   o.process    = MO.FEaiCockpitNoticeNewest_process;
   o.dispose    = MO.FEaiCockpitNoticeNewest_dispose;
   return o;
}
MO.FEaiCockpitNoticeNewest_construct = function FEaiCockpitNoticeNewest_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitNoticeNewest_setup = function FEaiCockpitNoticeNewest_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeNewestSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeNewestView);
}
MO.FEaiCockpitNoticeNewest_process = function FEaiCockpitNoticeNewest_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNoticeNewest_dispose = function FEaiCockpitNoticeNewest_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNoticeNewestData = function FEaiCockpitNoticeNewestData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._title         = MO.Class.register(o, [new MO.AGetter('_title'), new MO.APersistence('_title', MO.EDataType.String)]);
   o._publisher     = MO.Class.register(o, [new MO.AGetter('_publisher'), new MO.APersistence('_publisher', MO.EDataType.String)]);
   o._noticeData    = MO.Class.register(o, [new MO.AGetter('_noticeData'), new MO.APersistence('_noticeData', MO.EDataType.String)]);
   o._readprogress  = MO.Class.register(o, [new MO.AGetter('_readprogress'), new MO.APersistence('_readprogress', MO.EDataType.Double)]);
   o._noticeContent = MO.Class.register(o, [new MO.AGetter('_noticeContent'), new MO.APersistence('_noticeContent', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitNoticeNewestSnapshot = function FEaiCockpitNoticeNewestSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/notice/newest/new_notice_bg.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._fontTitle            = null;
   o._fontMiddle           = null;
   o._title                = "";
   o._publisher            = null;
   o._noticeData           = null;
   o._readprogress         = null;
   o._noticeContent        = null;
   o._pbarBgImage          = null;
   o._pbarFillImage        = null;
   o._publishDate          = MO.Class.register(o, new MO.AGetter('_publishDate'));
   o._newestNotice         = MO.Class.register(o, new MO.AGetter('_newestNotice'));
   o.onImageLoad           = MO.FEaiCockpitNoticeNewestSnapshot_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeNewestSnapshot_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeNewestSnapshot_construct;
   o.renovateView          = MO.FEaiCockpitNoticeNewestSnapshot_renovateView;
   o.setup                 = MO.FEaiCockpitNoticeNewestSnapshot_setup;
   o.processLogic          = MO.FEaiCockpitNoticeNewestSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeNewestSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeNewestSnapshot_onPaintBegin = function FEaiCockpitNoticeNewestSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o,event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._publisherImage, left + 55,top + 20,180,40);
   var fontTitle = o._fontTitle;
   graphic.setFont(fontTitle.toString());
   var title = o._title;
   if (typeof (title) == "string" && title.length > 0){
      if (title.length > 13){
         title = title.substring(0,10) + '...';
      }
      var fontMiddle = o._fontMiddle;
      graphic.setFont(fontMiddle.toString());
      graphic.drawText(title, left + 300, top + 47, fontTitle.color);
      graphic.drawImage(o._newNoticeImage, left + 700,top + 20,48,50);
      graphic.drawText("发布人:" + o._publisher, left+55, top+100, fontMiddle.color);
      graphic.drawText("发布时间:" + o._publishDate.format('YYYY-MM-DD'), left + 250, top + 100, fontMiddle.color);
      graphic.drawText("阅读进度:", left + 500, top + 100, fontMiddle.color);
      graphic.drawImage(o._pbarBgImage, left + 600, top + 85, 199, 13);
      var clipWidth = 199 *o._readprogress;
      var clipHeight = 13;
      graphic._handle.save();
      graphic._handle.rect(left+600, top+85, clipWidth, 13)
      graphic._handle.clip();
      graphic.drawImage(o._pbarFillImage, left + 600, top + 85, 199, 13);
      graphic._handle.restore();
      graphic.setFont(fontTitle.toString());
      graphic.drawTextRectangle(o._noticeContent, left + 55, top + 160, 750, 200,27,fontTitle.color);
   }
}
MO.FEaiCockpitNoticeNewestSnapshot_renovateView = function FEaiCockpitNoticeNewestSnapshot_renovateView(event) {
   var o = this;
   var content = event.content;
   var newestNotice = o._newestNotice;
   newestNotice.unserializeSignBuffer(event.sign, event.content, true);
   o._title = newestNotice.title();
   o._publisher = newestNotice.publisher();
   o._noticeData = newestNotice.noticeData();
   o._publishDate.parse(o._noticeData);
   o._readprogress = newestNotice.readprogress();
   o._noticeContent = newestNotice.noticeContent();
}
MO.FEaiCockpitNoticeNewestSnapshot_construct = function FEaiCockpitNoticeNewestSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._publishDate = new MO.TDate();
   o._fontTitle = new MO.SUiFont();
   o._fontMiddle = new MO.SUiFont();
   o._dataTicker = new MO.TTicker(1000 * 60 );
   o._newestNotice = MO.Class.create(MO.FEaiCockpitNoticeNewestData);
   o._cellLocation.set(0, 2, 0);
   o._cellSize.set(7, 3);
}
MO.FEaiCockpitNoticeNewestSnapshot_setup = function FEaiCockpitNoticeNewestSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._publisherImage = o.loadResourceImage('{eai.resource}/cockpit/notice/newest/release_notice.png');
   o._newNoticeImage = o.loadResourceImage('{eai.resource}/cockpit/notice/newest/new.png');
   o._fontTitle.parse('#FFFFFF 25px Microsoft YaHei');
   o._fontMiddle.parse('#FFFFFF 20px Microsoft YaHei');
   var pbarBgImage = o._pbarBgImage = o.loadResourceImage('{eai.resource}/cockpit/notice/table/progress_bar_bg.png');
   var pbarFillImage = o._pbarFillImage = o.loadResourceImage('{eai.resource}/cockpit/notice/table/progress_bar_fill.png');
   var statistics = MO.Console.find(MO.FEaiLogicConsole).cockpit().notice();
   if(o._dataTicker.process()){
      statistics.doFetchNewest(o, o.renovateView);
   }
}
MO.FEaiCockpitNoticeNewestSnapshot_processLogic = function FEaiCockpitNoticeNewestSnapshot_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeNewestSnapshot_dispose = function FEaiCockpitNoticeNewestSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
}
MO.FEaiCockpitNoticeNewestView = function FEaiCockpitNoticeNewestView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeNewestView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeNewestView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeNewestView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeNewestView_construct;
   o.setup                 = MO.FEaiCockpitNoticeNewestView_setup;
   o.draw                  = MO.FEaiCockpitNoticeNewestView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeNewestView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeNewestView_dispose;
   return o;
}
MO.FEaiCockpitNoticeNewestView_onImageLoad = function FEaiCockpitNoticeNewestView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeNewestView_onPaintBegin = function FEaiCockpitNoticeNewestView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitNoticeNewestView_construct = function FEaiCockpitNoticeNewestView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNoticeNewestView_setup = function FEaiCockpitNoticeNewestView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNoticeNewestView_processLogic = function FEaiCockpitNoticeNewestView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeNewestView_dispose = function FEaiCockpitNoticeNewestView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitNoticeSnapshot = function FEaiCockpitNoticeSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._noticeData    = null;
   o._dataTicker    = null;
   o._noticeListBox = null;
   o._bgImage       = null;
   o._titleImage    = null;
   o._action        = null;
   o.onFetchData  = MO.FEaiCockpitNoticeSnapshot_onFetchData;
   o.onPaintBegin   = MO.FEaiCockpitNoticeSnapshot_onPaintBegin;
   o.oeUpdate       = MO.FEaiCockpitNoticeSnapshot_oeUpdate;
   o.construct      = MO.FEaiCockpitNoticeSnapshot_construct;
   o.setup          = MO.FEaiCockpitNoticeSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitNoticeSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitNoticeSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeSnapshot_onFetchData = function FEaiCockpitNoticeSnapshot_onFetchData(event) {
   var o = this;
   var content = event.content;
   var listBox = o._noticeListBox;
   var data = o._noticeData;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      var notices = o._noticeData.notices();
      var count = notices.count();
      listBox.clear();
      for (var i = 0; i < count; i++) {
         var noticeItem = listBox.createItem(MO.FEaiCockpitNoticeListBoxItem);
         noticeItem.setSize(880, 50);
         noticeItem.loadData(notices.at(i));
      }
      listBox.setStartTick(MO.Timer.current());
      listBox.setAnimationPlaying(true);
      o.dirty();
   }
}
MO.FEaiCockpitNoticeSnapshot_onPaintBegin = function FEaiCockpitNoticeSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._bgImage, left, top, width, height);
   graphic._handle.save();
   graphic._handle.rect(30, 10, 900, 480);
   graphic._handle.clip();
   var titleImage = o._titleImage;
   var rate = o._action.rate();
   graphic.drawImage(titleImage, 30, 8 - rate*57, 901, 49);
   var listBox = o._noticeListBox;
   listBox.setLocation(30, 50 - rate * 57);
   graphic._handle.restore();
}
MO.FEaiCockpitNoticeSnapshot_oeUpdate = function FEaiCockpitNoticeSnapshot_oeUpdate(event) {
   var o = this;
   o.__base.FEaiCockpitControl.oeUpdate.call(o, event);
   if (event.isAfter()) {
       return MO.EEventStatus.Continue;
   }
   o._mainTimeline.process();
   return MO.EEventStatus.Continue;
}
MO.FEaiCockpitNoticeSnapshot_construct = function FEaiCockpitNoticeSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(3, 5, 0);
   o._cellSize.set(8, 2);
   o._noticeData = MO.Class.create(MO.FEaiCockpitDataNotice);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._mainTimeline = MO.Class.create(MO.FMainTimeline);
}
MO.FEaiCockpitNoticeSnapshot_setup = function FEaiCockpitNoticeSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._bgImage = o.loadResourceImage('{eai.resource}/cockpit/notice/ground.png');
   o._titleImage = o.loadResourceImage('{eai.resource}/cockpit/notice/title.png');
   var listBox = o._noticeListBox = MO.Class.create(MO.FGuiListBox);
   listBox.setDisplayCount(4);
   listBox.setGap(5);
   listBox.setPadding(12, 12, 12, 12);
   listBox.setLocation(30, 50);
   listBox.setSize(900, 120 * 4);
   o.push(listBox);
   var section = MO.Class.create(MO.FTimelineSection);
   var action = o._action = MO.Class.create(MO.FEaiCockpitNoticeTimelineAction);
   action.setMainControl(o);
   action.setDelay(15000);
   action.setDuration(2000);
   section.pushAction(action);
   o._mainTimeline.pushSection(section);
}
MO.FEaiCockpitNoticeSnapshot_processLogic = function FEaiCockpitNoticeSnapshot_processLogic() {
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if (o._dataTicker.process()) {
      var notice = MO.Console.find(MO.FEaiLogicConsole).cockpit().notice();
      notice.doFetch(o, o.onFetchData);
   }
   if (o._noticeListBox.animationPlaying()) {
      o.dirty();
   }
}
MO.FEaiCockpitNoticeSnapshot_dispose = function FEaiCockpitNoticeSnapshot_dispose() {
    var o = this;
   o._titleImage = MO.Lang.Object.dispose(o._titleImage);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitNoticeTable = function FEaiCockpitNoticeTable(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'notice.table';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNoticeTable_construct;
   o.setup      = MO.FEaiCockpitNoticeTable_setup;
   o.process    = MO.FEaiCockpitNoticeTable_process;
   o.dispose    = MO.FEaiCockpitNoticeTable_dispose;
   return o;
}
MO.FEaiCockpitNoticeTable_construct = function FEaiCockpitNoticeTable_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitNoticeTable_setup = function FEaiCockpitNoticeTable_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeTableSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeTableView);
}
MO.FEaiCockpitNoticeTable_process = function FEaiCockpitNoticeTable_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNoticeTable_dispose = function FEaiCockpitNoticeTable_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNoticeTableData  = function FEaiCockpitNoticeTableData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._subordinate = MO.Class.register(o, [new MO.AGetter('_subordinate'), new MO.APersistence('_subordinate', MO.EDataType.Int32)]);
   o._noticeList  = MO.Class.register(o, [new MO.AGetter('_noticeList'), new MO.APersistence('_noticeList', MO.EDataType.Objects, MO.FEaiCockpitNoticeTableDataUnit)]);
   return o;
}
MO.FEaiCockpitNoticeTableDataUnit = function FEaiCockpitNoticeTableDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._valueCount      = MO.Class.register(o, [new MO.AGetter('_valueCount'), new MO.APersistence('_valueCount', MO.EDataType.Int32)]);
   o._noticeType      = MO.Class.register(o, [new MO.AGetter('_noticeType'), new MO.APersistence('_noticeType', MO.EDataType.Int32)]);
   o._title           = MO.Class.register(o, [new MO.AGetter('_title'), new MO.APersistence('_title', MO.EDataType.String)]);
   o._date            = MO.Class.register(o, [new MO.AGetter('_date'), new MO.APersistence('_date', MO.EDataType.String)]);
   o._readCount       = MO.Class.register(o, [new MO.AGetter('_readCount'), new MO.APersistence('_readCount', MO.EDataType.Int32)]);
   o._important		  = MO.Class.register(o, [new MO.AGetter('_important'), new MO.APersistence('_important', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitNoticeTableSnapshot = function FEaiCockpitNoticeTableSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/notice/table/notice_list_bg.png';
   o._data          = null;
   o._dataTicker    = null;
   o._gridRank      = null;
   o.onFetchData    = MO.FEaiCockpitNoticeTableSnapshot_onFetchData;
   o.construct      = MO.FEaiCockpitNoticeTableSnapshot_construct;
   o.setup          = MO.FEaiCockpitNoticeTableSnapshot_setup;
   o.setData        = MO.FEaiCockpitNoticeTableSnapshot_setData;
   o.processLogic   = MO.FEaiCockpitNoticeTableSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitNoticeTableSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeTableSnapshot_onFetchData = function FEaiCockpitNoticeTableSnapshot_onFetchData(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      o.setData(data);
   }
}
MO.FEaiCockpitNoticeTableSnapshot_construct = function FEaiCockpitNoticeTableSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 5, 0);
   o._cellSize.set(7, 4);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data  = MO.Class.create(MO.FEaiCockpitNoticeTableData);
}
MO.FEaiCockpitNoticeTableSnapshot_setup = function FEaiCockpitNoticeTableSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var grid = o._gridRank = MO.Class.create(MO.FGuiGridControl);
   grid.setOptionClip(false);
   grid.setLocation(20, 20);
   grid.setSize(800, 700);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
   grid.setLeft(20);
   grid.setRight(20);
   grid.setHeadHeight(40);
   grid.setHeadBackColor('rgba(0,0,0,0)');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 22;
   grid.headFont().color = '#00B2F2';
   grid.setRowHeight(40);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 22;
   grid.rowFont().color = '#59FDE9';
   var column = MO.Class.create(MO.FGuiGridColumnPicture);
   column.setName('typeImages');
   column.setLabel();
   column.setDataName('type_images');
   column.setWidth(20);
   column.setPadding(1, 1, 1, 1);
   column.setAlign(MO.EUiAlign.Center);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('titleData');
   column.setLabel('标题');
   column.setDataName('title_data');
   column.setWidth(150);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnDate);
   column.setName('recordDate');
   column.setLabel('发布时间');
   column.setDataName('record_date');
   column.setDateFormat('YYYY-MM-DD');
   column.setWidth(50);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnProgressBar);
   column.setName('prograssData');
   column.setLabel('查看进度');
   column.setDataName('prograss_data');
   column.setAlign(MO.EUiAlign.Center);
   column.setMaxValue(100);
   column.setDrawScale(1);
   column.setup('{eai.resource}/cockpit/notice/table/progress_bar_bg.png', '{eai.resource}/cockpit/notice/table/progress_bar_fill.png');
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnPicture);
   column.setName('degreeImages');
   column.setLabel('紧急程度');
   column.setDataName('degree_images');
   column.setWidth(40);
   column.setPadding(1, 1, 1, 1);
   column.setAlign(MO.EUiAlign.Center);
   grid.pushColumn(column);
   o.push(grid);
}
MO.FEaiCockpitNoticeTableSnapshot_setData = function FEaiCockpitNoticeTableSnapshot_setData(data){
   var o = this;
   var grid = o._gridRank;
   grid.clearRows();
   var subordinateCount = data.subordinate()
   var noticeUnits = data.noticeList();
   var count = noticeUnits.count();
   for(var i = 0; i < count; i++){
      var unit = noticeUnits.at(i);
      var row = grid.allocRow();
      var progress = parseInt(unit.readCount() / subordinateCount * 100);
      row.set('type_images', '{eai.resource}/cockpit/notice/table/notice_type_' + unit.noticeType() + '.png');
      row.set('title_data', unit.title());
      row.set('record_date', unit.date());
      row.set('prograss_data', progress);
      row.set('degree_images','{eai.resource}/cockpit/notice/table/notice_im_' + unit.important() + '.png');
      grid.pushRow(row);
   }
}
MO.FEaiCockpitNoticeTableSnapshot_processLogic = function FEaiCockpitNoticeTableSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   var statistics = MO.Console.find(MO.FEaiLogicConsole).cockpit().notice();
   if(o._dataTicker.process()){
      statistics.doFetchList(o, o.onFetchData);
   }
}
MO.FEaiCockpitNoticeTableSnapshot_dispose = function FEaiCockpitNoticeTableSnapshot_dispose() {
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitNoticeTableView = function FEaiCockpitNoticeTableView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeTableView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeTableView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeTableView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeTableView_construct;
   o.setup                 = MO.FEaiCockpitNoticeTableView_setup;
   o.draw                  = MO.FEaiCockpitNoticeTableView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeTableView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeTableView_dispose;
   return o;
}
MO.FEaiCockpitNoticeTableView_onImageLoad = function FEaiCockpitNoticeTableView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeTableView_onPaintBegin = function FEaiCockpitNoticeTableView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitNoticeTableView_construct = function FEaiCockpitNoticeTableView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNoticeTableView_setup = function FEaiCockpitNoticeTableView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNoticeTableView_processLogic = function FEaiCockpitNoticeTableView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeTableView_dispose = function FEaiCockpitNoticeTableView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitNoticeTimelineAction = function FEaiCockpitNoticeTimelineAction(o) {
    o = MO.Class.inherits(this, o, MO.MTimelineAction);
    o._code = 'timeline';
    o._control = MO.Class.register(o, new MO.AGetter('_control'));
    o._rate = MO.Class.register(o, new MO.AGetter('_rate'));
    o._mainControl = MO.Class.register(o, new MO.ASetter('_mainControl'));
    o.onStart = MO.FEaiCockpitNoticeTimelineAction_onStart;
    o.onProcess = MO.FEaiCockpitNoticeTimelineAction_onProcess;
    o.onStop = MO.FEaiCockpitNoticeTimelineAction_onStop;
    o.construct = MO.FEaiCockpitNoticeTimelineAction_construct;
    o.dispose = MO.FEaiCockpitNoticeTimelineAction_dispose;
    return o;
}
MO.FEaiCockpitNoticeTimelineAction_onStart = function FEaiCockpitNoticeTimelineAction_onStart(context) {
    var o = this;
    var startEvent = o._eventActionStop;
    startEvent.context = context;
    startEvent.action = o;
    o.__base.MTimelineAction.onStart.call(o, context);
}
MO.FEaiCockpitNoticeTimelineAction_onProcess = function FEaiCockpitNoticeTimelineAction_onProcess(context) {
    var o = this;
    o.__base.MTimelineAction.onProcess.call(o, context);
    var rate = context.currentTick / o.duration();
    if (rate >= 1) {
        rate = 1;
    }
    o._rate = rate;
    o._mainControl.dirty();
}
MO.FEaiCockpitNoticeTimelineAction_onStop = function FEaiCockpitNoticeTimelineAction_onStop(context) {
    var o = this;
    var stopEvent = o._eventActionStop;
    stopEvent.context = context;
    stopEvent.action = o;
    o.__base.MTimelineAction.onStop.call(o, context);
}
MO.FEaiCockpitNoticeTimelineAction_construct = function FEaiCockpitNoticeTimelineAction_construct() {
    var o = this;
    o.__base.MTimelineAction.construct.call(o);
}
MO.FEaiCockpitNoticeTimelineAction_setTargetControl = function FEaiCockpitNoticeTimelineAction_setTargetControl() {
    var o = this;
}
MO.FEaiCockpitNoticeTimelineAction_dispose = function FEaiCockpitNoticeTimelineAction_dispose() {
    var o = this;
    o.__base.MTimelineAction.dispose.call(o);
}
MO.FEaiCockpitNoticeUser = function FEaiCockpitNoticeUser(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'notice.user';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitNoticeUser_construct;
   o.setup      = MO.FEaiCockpitNoticeUser_setup;
   o.process    = MO.FEaiCockpitNoticeUser_process;
   o.dispose    = MO.FEaiCockpitNoticeUser_dispose;
   return o;
}
MO.FEaiCockpitNoticeUser_construct = function FEaiCockpitNoticeUser_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitNoticeUser_setup = function FEaiCockpitNoticeUser_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitNoticeUserSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitNoticeUserView);
}
MO.FEaiCockpitNoticeUser_process = function FEaiCockpitNoticeUser_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitNoticeUser_dispose = function FEaiCockpitNoticeUser_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitNoticeUserData = function FEaiCockpitNoticeUserData(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label =           MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._total =           MO.Class.register(o, [new MO.AGetter('_total'), new MO.APersistence('_total', MO.EDataType.Int32)]);
   o._positionLabel =   MO.Class.register(o, [new MO.AGetter('_positionLabel'), new MO.APersistence('_positionLabel', MO.EDataType.String)]);
   o._publishDate =     MO.Class.register(o, [new MO.AGetter('_publishDate'), new MO.APersistence('_publishDate', MO.EDataType.String)]);
   o._userCount =       MO.Class.register(o, [new MO.AGetter('_userCount'), new MO.APersistence('_userCount', MO.EDataType.Int32)]);
   o._readprocess =     MO.Class.register(o, [new MO.AGetter('_readprocess'), new MO.APersistence('_readprocess', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitNoticeUserSnapshot = function FEaiCockpitNoticeUserSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/notice/user_bg.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._fontTop              = null;
   o._userInfoDate         = null;
   o.onPaintBegin          = MO.FEaiCockpitNoticeUserSnapshot_onPaintBegin;
   o.onUserFetch           = MO.FEaiCockpitNoticeUserSnapshot_onUserFetch;
   o.construct             = MO.FEaiCockpitNoticeUserSnapshot_construct;
   o.setup                 = MO.FEaiCockpitNoticeUserSnapshot_setup;
   o.processLogic          = MO.FEaiCockpitNoticeUserSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeUserSnapshot_dispose;
   return o;
}
MO.FEaiCockpitNoticeUserSnapshot_onPaintBegin = function FEaiCockpitNoticeUserSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var scale = 120 / 840;
   if (o._data != null && o._data.publishDate() != null && o._data.label() != "") {
      o._userInfoDate.parse(o._data.publishDate());
      graphic.setFont('21px Microsoft YaHei');
      graphic.drawText("姓名：", left + 89, top + 33, "#ffffff");
      graphic.drawText(o._data.label(), left + 153, top + 33, "#ffe721");
      graphic.drawText("发布号令：" + o._data.total() + "条", left + 498, top + 33, "#ffffff");
      graphic.drawText("职位：" + o._data.positionLabel(), left + 89, top + 66, "#ffffff");
      graphic.drawText("最新发布：" + o._userInfoDate.format("YYYY-MM-DD"), left + 498, top + 66, "#ffffff");
      graphic.drawText("下属人数：" + o._data.userCount() + "人", left + 89, top + 99, "#ffffff");
      graphic.drawText("阅读进度：" + o._data.readprocess() + "%", left + 498, top + 99, "#ffffff");
   }
   else {
      graphic.setFont('21px Microsoft YaHei');
      graphic.drawText("姓名：王之焕", left + 89, top + 33, "#ffffff");
      graphic.drawText("王之焕", left + 153, top + 33, "#ffe721");
      graphic.drawText("发布号令：23条", left + 498, top + 33, "#ffffff");
      graphic.drawText("职位：集团首席运营官", left + 89, top + 66, "#ffffff");
      graphic.drawText("最新发布：2015-11-05", left + 498, top + 66, "#ffffff");
      graphic.drawText("下属人数：3580人", left + 89, top + 99, "#ffffff");
      graphic.drawText("阅读进度：80%", left + 498, top + 99, "#ffffff");
   }
}
MO.FEaiCockpitNoticeUserSnapshot_construct = function FEaiCockpitNoticeUserSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(7, 1);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitNoticeUserData);
}
MO.FEaiCockpitNoticeUserSnapshot_setup = function FEaiCockpitNoticeUserSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._userInfoDate = new MO.TDate();
}
MO.FEaiCockpitNoticeUserSnapshot_onUserFetch = function FEaiCockpitNoticeUserSnapshot_onUserFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   data.unserializeSignBuffer(event.sign, event.content, true);
}
MO.FEaiCockpitNoticeUserSnapshot_processLogic = function FEaiCockpitNoticeUserSnapshot_processLogic(){
   var o = this;
   if (o._dataTicker.process()) {
      var title = MO.Console.find(MO.FEaiLogicConsole).cockpit().notice();
      title.doFetchUserInfo(o, o.onUserFetch);
   }
   o.dirty();
}
MO.FEaiCockpitNoticeUserSnapshot_dispose = function FEaiCockpitNoticeUserSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitNoticeUserView = function FEaiCockpitNoticeUserView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeUserView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeUserView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeUserView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeUserView_construct;
   o.setup                 = MO.FEaiCockpitNoticeUserView_setup;
   o.draw                  = MO.FEaiCockpitNoticeUserView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeUserView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeUserView_dispose;
   return o;
}
MO.FEaiCockpitNoticeUserView_onImageLoad = function FEaiCockpitNoticeUserView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeUserView_onPaintBegin = function FEaiCockpitNoticeUserView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitNoticeUserView_construct = function FEaiCockpitNoticeUserView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitNoticeUserView_setup = function FEaiCockpitNoticeUserView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitNoticeUserView_processLogic = function FEaiCockpitNoticeUserView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeUserView_dispose = function FEaiCockpitNoticeUserView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitNoticeView = function FEaiCockpitNoticeView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._fontTop              = null;
   o._noticeDynamicInfo    = MO.Class.register(o, new MO.AGetter('_noticeDynamicInfo'));
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._mainLineWidth        = MO.Class.register(o, new MO.AGetSet('_mainLineWidth'), 5);
   o.textFun               = MO.FEaiCockpitNoticeView_textFun;
   o.onImageLoad           = MO.FEaiCockpitNoticeView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitNoticeView_onPaintBegin;
   o.construct             = MO.FEaiCockpitNoticeView_construct;
   o.setup                 = MO.FEaiCockpitNoticeView_setup;
   o.draw                  = MO.FEaiCockpitNoticeView_draw;
   o.processLogic          = MO.FEaiCockpitNoticeView_processLogic;
   o.dispose               = MO.FEaiCockpitNoticeView_dispose;
   return o;
}
MO.FEaiCockpitNoticeView_textFun = function FEaiCockpitNoticeView_textFun(event) {
   var o = this;
}
MO.FEaiCockpitNoticeView_onImageLoad = function FEaiCockpitNoticeView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitNoticeView_onPaintBegin = function FEaiCockpitNoticeView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var right = left + width;
   var bottom = top + height;
   return;
   var scale = 69 / 243 ;
   var posY = top+20;
   graphic.drawImage(o._logoImage, left+120,posY,width*0.15,width*0.15*scale);
   posY = posY+width*0.15*scale+20;
   graphic.drawLine(0,posY,width,top+width*0.15*scale+40 ,'#ff0000', o._mainLineWidth);
   var scale = 56 / 758 ;
   graphic.drawImage(o._topBar, width / 16*5,top+20,width / 8*3,width / 8*3*scale);
   var fontTop = o._fontTop;
   var drawText = ['项目','号令','业绩','仪表','预警','预言'];
   for (var i = 0; i < drawText.length; i++) {
      graphic.setFont(fontTop.toString());
      graphic.drawText(drawText[i], width / 16*(5+i)+35, top+45+width / 8*3*scale, fontTop.color);
   };
}
MO.FEaiCockpitNoticeView_construct = function FEaiCockpitNoticeView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
   o._fontTop= new MO.SUiFont();
}
MO.FEaiCockpitNoticeView_setup = function FEaiCockpitNoticeView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._logoImage = imageConsole.load('{eai,resource}/cockpit/notice/logo.png');
   image.addLoadListener(o, o.onImageLoad);
   var image = o._topBar = imageConsole.load('{eai,resource}/cockpit/notice/top_bar.png');
   image.addLoadListener(o, o.onImageLoad);
   o._fontTop.parse('#FFFFFF 25px Microsoft YaHei');
}
MO.FEaiCockpitNoticeView_draw = function FEaiCockpitNoticeView_draw(graphic, rectangle, rate) {
}
MO.FEaiCockpitNoticeView_processLogic = function FEaiCockpitNoticeView_processLogic(){
   var o = this;
}
MO.FEaiCockpitNoticeView_dispose = function FEaiCockpitNoticeView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
