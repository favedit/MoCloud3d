MO.FEaiCockpitTitle = function FEaiCockpitTitle(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'title';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = false;
   o.construct  = MO.FEaiCockpitTitle_construct;
   o.setup      = MO.FEaiCockpitTitle_setup;
   o.process    = MO.FEaiCockpitTitle_process;
   o.dispose    = MO.FEaiCockpitTitle_dispose;
   return o;
}
MO.FEaiCockpitTitle_construct = function FEaiCockpitTitle_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitTitle_setup = function FEaiCockpitTitle_setup(){
   var o = this;
   o.__base.FEaiCockpitModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitTitleSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitTitleView);
}
MO.FEaiCockpitTitle_process = function FEaiCockpitTitle_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitTitle_dispose = function FEaiCockpitTitle_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitTitleMessage = function FEaiCockpitTitleMessage(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._investmentTotle   = MO.Class.register(o, [new MO.AGetter('_investmentTotal'), new MO.APersistence('_investmentTotal', MO.EDataType.Double)]);
   o._currentInvestment = MO.Class.register(o, [new MO.AGetter('_currentInvestment'), new MO.APersistence('_currentInvestment', MO.EDataType.Double)]);
   o._employeeCount     = MO.Class.register(o, [new MO.AGetter('_employeeCount'), new MO.APersistence('_employeeCount', MO.EDataType.Int32)]);
   o._marketerCount     = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   o._subsidiaryCount   = MO.Class.register(o, [new MO.AGetter('_subsidiaryCount'), new MO.APersistence('_subsidiaryCount', MO.EDataType.Int32)]);
   o._wealthCount       = MO.Class.register(o, [new MO.AGetter('_wealthCount'), new MO.APersistence('_wealthCount', MO.EDataType.Int32)]);
   o._workplaceCount    = MO.Class.register(o, [new MO.AGetter('_workplaceCount'), new MO.APersistence('_workplaceCount', MO.EDataType.Int32)]);
   o._thingCount        = MO.Class.register(o, [new MO.AGetter('_thingCount'), new MO.APersistence('_thingCount', MO.EDataType.Int32)]);
   o._unreadCount       = MO.Class.register(o, [new MO.AGetter('_unreadCount'), new MO.APersistence('_unreadCount', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitTitleSnapshot = function FEaiCockpitTitleSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name                 = 'cockpit.forecast.snapshot';
   o._backgroundUri        = '{eai.resource}/cockpit/title/ground.png';
   o._dataTicker           = null;
   o._logoBar              = null;
   o._currentDate          = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onTitleFetch          = MO.FEaiCockpitTitleSnapshot_onTitleFetch;
   o.onPaintBegin          = MO.FEaiCockpitTitleSnapshot_onPaintBegin;
   o.construct             = MO.FEaiCockpitTitleSnapshot_construct;
   o.setup                 = MO.FEaiCockpitTitleSnapshot_setup;
   o.processLogic          = MO.FEaiCockpitTitleSnapshot_processLogic;
   o.freshData             = MO.FEaiCockpitTitleSnapshot_freshData;
   o.drawText              = MO.FEaiCockpitTitleSnapshot_drawText;
   o.dispose               = MO.FEaiCockpitTitleSnapshot_dispose;
   return o;
}
MO.FEaiCockpitTitleSnapshot_onPaintBegin = function FEaiCockpitTitleSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var right = left + width;
   var bottom = top + height;
   var heightRate = height / o._size.height;
   var drawLeft = left + 12;
   var drawRight = right - 12;
   var drawWidth = right - left;
   var topPosition = top + 70;
   var leftPosition = left + 100;
   var frame = o._logoBar;
   var date = o._currentDate;
   date.setNow();
   var dateControl = frame.findComponent('date');
   dateControl.setLabel(date.format('YYYY/MM/DD'));
   var timeControl = frame.findComponent('time');
   timeControl.setLabel(date.format('HH24:MI'));
   if(o._data != null && o._data.employeeCount() != null)
   {
      graphic.setFont('18px Microsoft YaHei');
      o.drawText(graphic, rectangle, ['#ffffff', '集团现有',
                                      '#ffe721', o._data.employeeCount().toString(),
                                      '#ffffff', '名员工，',
                                      '#ffe721', o._data.marketerCount().toString(),
                                      '#ffffff', '名理财师，',
                                      '#ffe721', o._data.subsidiaryCount().toString(),
                                      '#ffffff', '个财富端子公司，',
                                      '#ffe721', o._data.wealthCount().toString(),
                                      '#ffffff', '个财富端分公司']);
   }
   graphic.setFont(o._rowFontStyle);
}
MO.FEaiCockpitTitleSnapshot_drawText = function FEaiCockpitTitleSnapshot_drawText(graphic, rect, data) {
   var left = rect.left;
   var top = rect.left;
   var width = rect.width;
   var height = rect.height;
   var leftPosition = left + 20;
   var topPositon = top + 68;
   var i;
   var len = data.length;
   for(i=0; i < len; i+=2) {
      var color = data[i];
      var text = data[i+1];
      var textWidth = graphic.textWidth(text);
      graphic.drawText(text, leftPosition, topPositon, color);
      leftPosition += textWidth;
   }
}
MO.FEaiCockpitTitleSnapshot_construct = function FEaiCockpitTitleSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(3, 0, 0);
   o._cellSize.set(8, 1);
   o._currentDate = new MO.TDate();
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitTitleMessage);
}
MO.FEaiCockpitTitleSnapshot_setup = function FEaiCockpitTitleSnapshot_setup() {
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var frame = o._logoBar = MO.Console.find(MO.FGuiFrameConsole).get(o, 'eai.chart.cockpit.LogoBar');
   o.push(frame);
}
MO.FEaiCockpitTitleSnapshot_onTitleFetch = function FEaiCockpitTitleSnapshot_onTitleFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      o.freshData();
   }
}
MO.FEaiCockpitTitleSnapshot_freshData = function FEaiCockpitTitleSnapshot_freshData() {
   var o = this;
   var frame = o._logoBar;
   if (o._data.investmentTotal() != null) {
      var investmentTotal = frame.findComponent('investmentTotal');
      investmentTotal.setValue(o._data.investmentTotal().toFixed(0).toString());
      var currentInvestment = frame.findComponent('currentInvestment');
      currentInvestment.setValue(o._data.currentInvestment().toFixed(0).toString());
      var thingCount = frame.findComponent('thing');
      thingCount.setLabel("(" + o._data.thingCount().toString() + ")");
      var unreadCount = frame.findComponent('unread');
      unreadCount.setLabel("(" + o._data.unreadCount().toString() + ")");
   }
}
MO.FEaiCockpitTitleSnapshot_processLogic = function FEaiCockpitTitleSnapshot_processLogic() {
   var o = this;
    o.__base.FEaiCockpitControl.processLogic.call(o);
  if (o._dataTicker.process()) {
      var title = MO.Console.find(MO.FEaiLogicConsole).cockpit().title();
      title.doFetch(o, o.onTitleFetch);
   }
   o.dirty();
}
MO.FEaiCockpitTitleSnapshot_dispose = function FEaiCockpitTitleSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitTitleView = function FEaiCockpitTitleView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitTitleView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitTitleView_onPaintBegin;
   o.construct             = MO.FEaiCockpitTitleView_construct;
   o.setup                 = MO.FEaiCockpitTitleView_setup;
   o.processLogic          = MO.FEaiCockpitTitleView_processLogic;
   o.dispose               = MO.FEaiCockpitTitleView_dispose;
   return o;
}
MO.FEaiCockpitTitleView_onImageLoad = function FEaiCockpitTitleView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitTitleView_onPaintBegin = function FEaiCockpitTitleView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   graphic.drawRectangleImage(o._backgroundImage, rectangle);
}
MO.FEaiCockpitTitleView_construct = function FEaiCockpitTitleView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitTitleView_setup = function FEaiCockpitTitleView_setup(){
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._backgroundImage = imageConsole.load('{eai.resource}/cockpit/title/view.png');
   image.addLoadListener(o, o.onImageLoad);
}
MO.FEaiCockpitTitleView_processLogic = function FEaiCockpitTitleView_processLogic(){
   var o = this;
}
MO.FEaiCockpitTitleView_dispose = function FEaiCockpitTitleView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
