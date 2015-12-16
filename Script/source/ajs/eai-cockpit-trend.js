MO.FEaiCockpitTrend = function FEaiCockpitTrend(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'trend';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._slideshow  = false;
   o._dataTicker = null;
   o.construct   = MO.FEaiCockpitTrend_construct;
   o.setup       = MO.FEaiCockpitTrend_setup;
   o.process     = MO.FEaiCockpitTrend_process;
   o.dispose     = MO.FEaiCockpitTrend_dispose;
   return o;
}
MO.FEaiCockpitTrend_construct = function FEaiCockpitTrend_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitTrend_setup = function FEaiCockpitTrend_setup(){
   var o = this;
   o.__base.FEaiCockpitModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitTrendSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitTrendView);
}
MO.FEaiCockpitTrend_process = function FEaiCockpitTrend_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitTrend_dispose = function FEaiCockpitTrend_dispose(){
   var o = this;
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitTrendMessage = function FEaiCockpitTrendMessage(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._days = MO.Class.register(o, [new MO.AGetter('_days'), new MO.APersistence('_days', MO.EDataType.Objects, MO.FEaiCockpitTrendMessageDay)]);
   return o;
}
MO.FEaiCockpitTrendMessageDay = function FEaiCockpitTrendMessageDay(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._priorRecordDate          = MO.Class.register(o, [new MO.AGetter('_priorRecordDate'), new MO.APersistence('_priorRecordDate', MO.EDataType.String)]);
   o._priorInvestmentAmount    = MO.Class.register(o, [new MO.AGetter('_priorInvestmentAmount'), new MO.APersistence('_priorInvestmentAmount', MO.EDataType.Double)]);
   o._priorRedemptionAmount    = MO.Class.register(o, [new MO.AGetter('_priorRedemptionAmount'), new MO.APersistence('_priorRedemptionAmount', MO.EDataType.Double)]);
   o._priorNetinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_priorNetinvestmentAmount'), new MO.APersistence('_priorNetinvestmentAmount', MO.EDataType.Double)]);
   o._recordDate               = MO.Class.register(o, [new MO.AGetter('_recordDate'), new MO.APersistence('_recordDate', MO.EDataType.String)]);
   o._investmentAmount         = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   o._redemptionAmount         = MO.Class.register(o, [new MO.AGetter('_redemptionAmount'), new MO.APersistence('_redemptionAmount', MO.EDataType.Double)]);
   o._netinvestmentAmount      = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitTrendSnapshot = function FEaiCockpitTrendSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/trend/ground.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._dataset              = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitTrendSnapshot_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitTrendSnapshot_onPaintBegin;
   o.onFetch               = MO.FEaiCockpitTrendSnapshot_onFetch;
   o.construct             = MO.FEaiCockpitTrendSnapshot_construct;
   o.setup                 = MO.FEaiCockpitTrendSnapshot_setup;
   o.setData               = MO.FEaiCockpitTrendSnapshot_setData;
   o.processLogic          = MO.FEaiCockpitTrendSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitTrendSnapshot_dispose;
   o._dateTextFont         = MO.Class.register(o, new MO.AGetSet('_dateTextFont'));
   return o;
}
MO.FEaiCockpitTrendSnapshot_onImageLoad = function FEaiCockpitTrendSnapshot_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitTrendSnapshot_onPaintBegin = function FEaiCockpitTrendSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitTrendSnapshot_onFetch = function FEaiCockpitTrendSnapshot_onFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o.setData(data);
   }
}
MO.FEaiCockpitTrendSnapshot_construct = function FEaiCockpitTrendSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(11, 2, 0);
   o._cellSize.set(5, 2);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitTrendMessage);
   o._dateTextFont = new MO.SUiFont();
   o._dateTextFont.size = 4;
   o._dateTextFont.bold = false;
   o._dateTextFont.color = '#ffffff';
}
MO.FEaiCockpitTrendSnapshot_setup = function FEaiCockpitTrendSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartLinePainter);
   chart.setLocation(60, 11);
   chart.setSize(520, 218);
   chart.paintRectangle().set(68, 24, 424, 166);
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisX().createDegrees(1, 31);
   chart.axisX().findDegreeByValue(1).setLabel("1");
   chart.axisX().findDegreeByValue(6).setLabel("6");
   chart.axisX().findDegreeByValue(11).setLabel("11");
   chart.axisX().findDegreeByValue(16).setLabel("16");
   chart.axisX().findDegreeByValue(21).setLabel("21");
   chart.axisX().findDegreeByValue(26).setLabel("26");
   chart.axisX().findDegreeByValue(31).setLabel("31");
   chart.axisX().setLabel("(天)");
   chart.axisY().setLabel("(万)");
   chart.axisY().setDivisor(10000);
   chart.axisY().setDegreeLabelGap(6);
   o.push(chart);
   var lineColors = ['#4b5e6f', '#80a861', '#2069a0', '#51c0db', '#68f34e', '#9b1933'];
   var dataset = o._dataset = MO.Class.create(MO.FUiChartDataset);
   for ( var i = 0; i < 6; ++i) {
      var series = MO.Class.create(MO.FUiChartDataSeries);
      series.setLineWidth(3);
      series.setLineColor(lineColors[i]);
      dataset.push(series);
   }
   chart.setDataset(dataset);
}
MO.FEaiCockpitTrendSnapshot_setData = function FEaiCockpitTrendSnapshot_setData(data) {
   var o = this;
   var data = o._data;
   var days = data.days();
   var dataset = o._dataset;
   var serieses = dataset.serieses();
   var dayCount = days.count();
   for(var i = 0; i < 6; ++i) {
      var series = serieses.get(i);
      series.values().clear();
   }
   for(var i = 0; i < dayCount; ++i) {
      var day = days.get(i);
      if(day.priorInvestmentAmount() != 0) serieses.get(0).values().push(day.priorInvestmentAmount());
      if(day.priorRedemptionAmount() != 0) serieses.get(1).values().push(day.priorRedemptionAmount());
      if(day.priorNetinvestmentAmount() != 0) serieses.get(2).values().push(day.priorNetinvestmentAmount());
      if(day.investmentAmount() != 0) serieses.get(3).values().push(day.investmentAmount());
      if(day.redemptionAmount() != 0) serieses.get(4).values().push(day.redemptionAmount());
      if(day.netinvestmentAmount() != 0) serieses.get(5).values().push(day.netinvestmentAmount());
   }
   var yAxis = o._chart.axisY();
   yAxis.createDegreesStandard(dataset.standardCor(8));
   yAxis.formatLabels();
   var zero = yAxis.findDegreeByValue(0);
   if (zero) {
      zero.setLineWidth(2);
      zero.setLineColor("#fec334")
   }
   o.dirty();
}
MO.FEaiCockpitTrendSnapshot_processLogic = function FEaiCockpitTrendSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var trend = MO.Console.find(MO.FEaiLogicConsole).cockpit().trend();
      trend.doFetch(o, o.onFetch);
   }
}
MO.FEaiCockpitTrendSnapshot_dispose = function FEaiCockpitTrendSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitTrendSnapshotLine = function FEaiCockpitTrendSnapshotLine(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o.construct                = MO.FEaiCockpitTrendSnapshotLine_construct;
   o.setup                    = MO.FEaiCockpitTrendSnapshotLine_setup;
   o.onImageLoad              = MO.FEaiCockpitTrendSnapshotLine_onImageLoad;
   o.onPaintBegin             = MO.FEaiCockpitTrendSnapshotLine_onPaintBegin;
   o.dispose                  = MO.FEaiCockpitTrendSnapshotLine_dispose;
   o.setData                  = MO.FEaiCockpitTrendSnapshotLine_setData;
   o.drawLine                 = MO.FEaiCockpitTrendSnapshotLine_drawLine;
   return o;
}
MO.FEaiCockpitTrendSnapshotLine_drawLine = function FEaiCockpitTrendSnapshotLine_drawLine(graphic, rectangle, dataheigt, minValue,maxValue, code, color, lineWidth){
   var o = this;
   var handle = graphic._handle;
   handle.beginPath();
   var units = o._data.days();
   var count = units.count();
   var left = rectangle.left ;
   var top = rectangle.top;
   var width = rectangle.width ;
   var height = dataheigt ;
   var stepWidth = width / count;
   var stepHeight = dataheigt / maxValue;
   for(var n = 0; n < count; n++){
      var unit = units.at(n);
      var x = left + stepWidth * n;
      var y = top + height - stepHeight * unit[code];
      if(n == 0){
         handle.moveTo(x, y);
      }else{
          if(unit[code]!=0)
         handle.lineTo(x, y);
      }
   }
   handle.lineWidth = lineWidth;
   handle.strokeStyle = color;
   handle.stroke();
}
MO.FEaiCockpitTrendSnapshotLine_construct = function FEaiCockpitTrendSnapshotLine_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FEaiCockpitTrendSnapshotLine_setup = function FEaiCockpitTrendSnapshotLine_setup() {
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitTrendSnapshotLine_onImageLoad = function FEaiCockpitTrendSnapshotLine_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitTrendSnapshotLine_onPaintBegin = function FEaiCockpitTrendSnapshotLine_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var data = o._data ;
   var dataheigt = height/2;
   graphic.drawRectangle(left, top, width, height, '#ffffff', 3);
   if(!data){
      return;
   }
   var units = data.days();
   var count = units._count;
   var maxValue =0;
   var minValue =0;
   var maxValueInvest =0;
   var minValueInvest =0;
   for(var i=0;i<count;i++){
      var day = units.at(i);
      maxValueInvest = Math.max(day.priorInvestmentAmount(), maxValueInvest);
      maxValueInvest = Math.max(day.priorRedemptionAmount(), maxValueInvest);
      minValueInvest = Math.min(day.priorNetinvestmentAmount(), minValueInvest);
      maxValueInvest = Math.max(day.investmentAmount(), maxValueInvest);
      maxValueInvest = Math.max(day.redemptionAmount(), maxValueInvest);
      minValueInvest = Math.min(day.netinvestmentAmount(), minValueInvest);
   }
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorInvestmentAmount', '#4b5e6f', 1);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorRedemptionAmount', '#80a861', 1);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorNetinvestmentAmount', '#947b91', 1);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_investmentAmount', '#51c0db', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_redemptionAmount', '#68f34e', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_netinvestmentAmount', '#9b1933', 2);
}
MO.FEaiCockpitTrendSnapshotLine_setData = function FEaiCockpitTrendSnapshotLine_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FEaiCockpitTrendSnapshotLine_dispose = function FEaiCockpitTrendSnapshotLine_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitTrendView = function FEaiCockpitTrendView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/trend/view.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitTrendView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitTrendView_onPaintBegin;
   o.construct             = MO.FEaiCockpitTrendView_construct;
   o.setup                 = MO.FEaiCockpitTrendView_setup;
   o.processLogic          = MO.FEaiCockpitTrendView_processLogic;
   o.dispose               = MO.FEaiCockpitTrendView_dispose;
   return o;
}
MO.FEaiCockpitTrendView_onImageLoad = function FEaiCockpitTrendView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitTrendView_onPaintBegin = function FEaiCockpitTrendView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitTrendView_construct = function FEaiCockpitTrendView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitTrendView_setup = function FEaiCockpitTrendView_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitTrendView_processLogic = function FEaiCockpitTrendView_processLogic(){
   var o = this;
}
MO.FEaiCockpitTrendView_dispose = function FEaiCockpitTrendView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
