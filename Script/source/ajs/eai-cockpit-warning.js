MO.FEaiCockpitWarning = function FEaiCockpitWarning(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'warning';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitWarning_construct;
   o.setup      = MO.FEaiCockpitWarning_setup;
   o.process    = MO.FEaiCockpitWarning_process;
   o.dispose    = MO.FEaiCockpitWarning_dispose;
   return o;
}
MO.FEaiCockpitWarning_construct = function FEaiCockpitWarning_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitWarning_setup = function FEaiCockpitWarning_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningView);
   o.setupModuleManager(MO.FEaiCockpitWarningModuleManager);
}
MO.FEaiCockpitWarning_process = function FEaiCockpitWarning_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitWarning_dispose = function FEaiCockpitWarning_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicInvestment = function FEaiCockpitWarningLogicInvestment(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Warning.logic.Capita';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitWarningLogicInvestment_construct;
   o.setup       = MO.FEaiCockpitWarningLogicInvestment_setup;
   o.process     = MO.FEaiCockpitWarningLogicInvestment_process;
   o.dispose     = MO.FEaiCockpitWarningLogicInvestment_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicInvestment_construct = function FEaiCockpitWarningLogicInvestment_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitWarningLogicInvestment_setup = function FEaiCockpitWarningLogicInvestment_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningLogicInvestmentSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningLogicInvestmentView);
}
MO.FEaiCockpitWarningLogicInvestment_process = function FEaiCockpitWarningLogicInvestment_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitWarningLogicInvestment_dispose = function FEaiCockpitWarningLogicInvestment_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot = function FEaiCockpitWarningLogicInvestmentSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/warning/boybackground.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitWarningLogicInvestmentSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitWarningLogicInvestmentSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitWarningLogicInvestmentSnapshot_construct;
   o.setup          = MO.FEaiCockpitWarningLogicInvestmentSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitWarningLogicInvestmentSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitWarningLogicInvestmentSnapshot_dispose;
   o._dataTicker    = null;
   o.onDataFetch    = MO.FEaiCockpitWarningLogicInvestmentSnapshot_onDataFetch;
   o._data          = null;
   o._index         = 0;
   o._current       = 0;
   o.setChartData   = MO.FEaiCockpitWarningLogicInvestmentSnapshot_setChartData;
   return o;
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_setChartData = function FEaiCockpitWarningLogicInvestmentSnapshot_setChartData(index){
   var o = this ;
   var data = o._data;
   var dataset = o._chartDataset;
   var serieses = dataset.serieses();
   var series = serieses.get(0);
   series.values().clear();
   var chart = o._chart;
   chart.axisX().degrees().clear();
   var capita = data.capitas().at(index);
   if(!capita)return;
   var items = capita.items();
   var count = items.count();
   for (var i = 0; i < count; i++) {
      var item = items.at(i);
      var label = item.name();
      var value = item.count();
      series.values().push(value);
      var degree = MO.Class.create(MO.FUiChartAxisDegree);
      degree.setLabel(label);
      chart.axisX().pushDegree(degree);
   }
   var axisY = chart.axisY();
   axisY.createDegreesStandard(dataset.standardCor(7));
   axisY.formatLabels();
   o.dirty();
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_onDataFetch = function FEaiCockpitWarningLogicInvestmentSnapshot_onDataFetch(event){
   var o = this ;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
   o._current = o._index%o._data.capitas()._count;
   o.setChartData(o._current);
   }
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_onPaintBegin = function FEaiCockpitWarningLogicInvestmentSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   if(!o._data._capitas){
      return;
   }
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var data = o._data ;
   var capitas = data.capitas();
   var index = o._current;
   var showData = capitas.at(index);
   if(!showData)return;
   graphic.setFont('bold 24px Microsoft YaHei');
   graphic.drawText(showData._date,left+30,top+50,'#ffffff');
   graphic.setFont('bold 14px Microsoft YaHei');
   var textSpan = graphic.textWidth('高');
   graphic.drawTextRectangle(showData._text,left+30,top+80,width-60,height,textSpan+3,'#fee71f');
   graphic.setFont('blod 24px Microsoft YaHei');
   var titleWidth = graphic.textWidth(showData._title);
   graphic.drawText(showData._title,left+width/2-titleWidth/2,top+height-40,'#fee71f');
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_onPaintEnd = function FEaiCockpitWarningLogicInvestmentSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_construct = function FEaiCockpitWarningLogicInvestmentSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 1, 0);
   o._cellSize.set(6, 3);
   o._data = MO.Class.create(MO.FEaiCockpitWarningMessageInvestments);
   o._dataTicker = new MO.TTicker(1000 * 15);
   o._showTicker = new MO.TTicker(1000 * 2);
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_setup = function FEaiCockpitWarningLogicInvestmentSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartBarPainter);
   chart.setLocation(50, 110);
   chart.setSize(720, 140);
   chart.paintRectangle().set(20, 0, 630, 120);
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisY().setOptionShowAxis(false);
   chart.axisY().setOptionShowFirstLine(true);
   chart.axisX().setOptionLabelVertical(true);
   chart.axisY().setLabel("(平均业绩)");
   chart.axisX().font().parse("#ffffff 12px Microsoft YaHei");
   o.push(chart);
   var dataset = o._chartDataset = MO.Class.create(MO.FUiChartDataset);
   var series = MO.Class.create(MO.FUiChartDataSeries);
   series.setOptionShowBorder(false);
   series.setFillGradient([['0', '#20d3de'], ['0.5', '#237394'], ['1.0', '#252f62']]);
   series.setRectWidth(25);
   dataset.push(series);
   chart.setDataset(dataset);
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_processLogic = function FEaiCockpitWarningLogicInvestmentSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   o.dirty();
   if(o._dataTicker.process()){
      var warning = MO.Console.find(MO.FEaiLogicConsole).cockpit().warning();
      warning.fetchCapital(o, o.onDataFetch);
   }
   if(o._showTicker.process()){
         if(o._data.capitas()){
         o._current = o._index%o._data.capitas()._count;
         o._index ++;
         o.setChartData(o._current);
      }
   }
}
MO.FEaiCockpitWarningLogicInvestmentSnapshot_dispose = function FEaiCockpitWarningLogicInvestmentSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningLogicInvestmentView = function FEaiCockpitWarningLogicInvestmentView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitWarningLogicInvestmentView_onPaintBegin;
   o.construct    = MO.FEaiCockpitWarningLogicInvestmentView_construct;
   o.setup        = MO.FEaiCockpitWarningLogicInvestmentView_setup;
   o.processLogic = MO.FEaiCockpitWarningLogicInvestmentView_processLogic;
   o.dispose      = MO.FEaiCockpitWarningLogicInvestmentView_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicInvestmentView_onPaintBegin = function FEaiCockpitWarningLogicInvestmentView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicInvestmentView_construct = function FEaiCockpitWarningLogicInvestmentView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningLogicInvestmentView_setup = function FEaiCockpitWarningLogicInvestmentView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitWarningLogicInvestmentView_processLogic = function FEaiCockpitWarningLogicInvestmentView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicInvestmentView_dispose = function FEaiCockpitWarningLogicInvestmentView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitWarningLogicNewest = function FEaiCockpitWarningLogicNewest(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Warning.logic.newest';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitWarningLogicNewest_construct;
   o.setup       = MO.FEaiCockpitWarningLogicNewest_setup;
   o.process     = MO.FEaiCockpitWarningLogicNewest_process;
   o.dispose     = MO.FEaiCockpitWarningLogicNewest_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicNewest_construct = function FEaiCockpitWarningLogicNewest_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitWarningLogicNewest_setup = function FEaiCockpitWarningLogicNewest_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningLogicNewestSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningLogicNewestView);
}
MO.FEaiCockpitWarningLogicNewest_process = function FEaiCockpitWarningLogicNewest_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitWarningLogicNewest_dispose = function FEaiCockpitWarningLogicNewest_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicNewestSnapshot = function FEaiCockpitWarningLogicNewestSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/warning/newest.png';
   o.onPaintBegin   = MO.FEaiCockpitWarningLogicNewestSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitWarningLogicNewestSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitWarningLogicNewestSnapshot_construct;
   o.setup          = MO.FEaiCockpitWarningLogicNewestSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitWarningLogicNewestSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitWarningLogicNewestSnapshot_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicNewestSnapshot_onPaintBegin = function FEaiCockpitWarningLogicNewestSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicNewestSnapshot_onPaintEnd = function FEaiCockpitWarningLogicNewestSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitWarningLogicNewestSnapshot_construct = function FEaiCockpitWarningLogicNewestSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(14, 1, 0);
   o._cellSize.set(2, 8);
}
MO.FEaiCockpitWarningLogicNewestSnapshot_setup = function FEaiCockpitWarningLogicNewestSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitWarningLogicNewestSnapshot_processLogic = function FEaiCockpitWarningLogicNewestSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicNewestSnapshot_dispose = function FEaiCockpitWarningLogicNewestSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningLogicNewestView = function FEaiCockpitWarningLogicNewestView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitWarningLogicNewestView_onPaintBegin;
   o.construct    = MO.FEaiCockpitWarningLogicNewestView_construct;
   o.setup        = MO.FEaiCockpitWarningLogicNewestView_setup;
   o.processLogic = MO.FEaiCockpitWarningLogicNewestView_processLogic;
   o.dispose      = MO.FEaiCockpitWarningLogicNewestView_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicNewestView_onPaintBegin = function FEaiCockpitWarningLogicNewestView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicNewestView_construct = function FEaiCockpitWarningLogicNewestView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningLogicNewestView_setup = function FEaiCockpitWarningLogicNewestView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitWarningLogicNewestView_processLogic = function FEaiCockpitWarningLogicNewestView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicNewestView_dispose = function FEaiCockpitWarningLogicNewestView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitWarningLogicOptions = function FEaiCockpitWarningLogicOptions(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Warning.logic.options';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitWarningLogicOptions_construct;
   o.setup       = MO.FEaiCockpitWarningLogicOptions_setup;
   o.process     = MO.FEaiCockpitWarningLogicOptions_process;
   o.dispose     = MO.FEaiCockpitWarningLogicOptions_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicOptions_construct = function FEaiCockpitWarningLogicOptions_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitWarningLogicOptions_setup = function FEaiCockpitWarningLogicOptions_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningLogicOptionsSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningLogicOptionsView);
}
MO.FEaiCockpitWarningLogicOptions_process = function FEaiCockpitWarningLogicOptions_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitWarningLogicOptions_dispose = function FEaiCockpitWarningLogicOptions_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot = function FEaiCockpitWarningLogicOptionsSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/warning/options.png';
   o.onPaintBegin   = MO.FEaiCockpitWarningLogicOptionsSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitWarningLogicOptionsSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitWarningLogicOptionsSnapshot_construct;
   o.setup          = MO.FEaiCockpitWarningLogicOptionsSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitWarningLogicOptionsSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitWarningLogicOptionsSnapshot_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_onPaintBegin = function FEaiCockpitWarningLogicOptionsSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_onPaintEnd = function FEaiCockpitWarningLogicOptionsSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_construct = function FEaiCockpitWarningLogicOptionsSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(2, 8);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_setup = function FEaiCockpitWarningLogicOptionsSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_processLogic = function FEaiCockpitWarningLogicOptionsSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicOptionsSnapshot_dispose = function FEaiCockpitWarningLogicOptionsSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningLogicOptionsView = function FEaiCockpitWarningLogicOptionsView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitWarningLogicOptionsView_onPaintBegin;
   o.construct    = MO.FEaiCockpitWarningLogicOptionsView_construct;
   o.setup        = MO.FEaiCockpitWarningLogicOptionsView_setup;
   o.processLogic = MO.FEaiCockpitWarningLogicOptionsView_processLogic;
   o.dispose      = MO.FEaiCockpitWarningLogicOptionsView_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicOptionsView_onPaintBegin = function FEaiCockpitWarningLogicOptionsView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicOptionsView_construct = function FEaiCockpitWarningLogicOptionsView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningLogicOptionsView_setup = function FEaiCockpitWarningLogicOptionsView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitWarningLogicOptionsView_processLogic = function FEaiCockpitWarningLogicOptionsView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicOptionsView_dispose = function FEaiCockpitWarningLogicOptionsView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitWarningLogicRedemption = function FEaiCockpitWarningLogicRedemption(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Warning.logic.Redemption';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitWarningLogicRedemption_construct;
   o.setup       = MO.FEaiCockpitWarningLogicRedemption_setup;
   o.process     = MO.FEaiCockpitWarningLogicRedemption_process;
   o.dispose     = MO.FEaiCockpitWarningLogicRedemption_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicRedemption_construct = function FEaiCockpitWarningLogicRedemption_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitWarningLogicRedemption_setup = function FEaiCockpitWarningLogicRedemption_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningLogicRedemptionSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningLogicRedemptionView);
}
MO.FEaiCockpitWarningLogicRedemption_process = function FEaiCockpitWarningLogicRedemption_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitWarningLogicRedemption_dispose = function FEaiCockpitWarningLogicRedemption_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot = function FEaiCockpitWarningLogicRedemptionSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/warning/boybackground.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitWarningLogicRedemptionSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitWarningLogicRedemptionSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitWarningLogicRedemptionSnapshot_construct;
   o.setup          = MO.FEaiCockpitWarningLogicRedemptionSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitWarningLogicRedemptionSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitWarningLogicRedemptionSnapshot_dispose;
   o._dataTicker    = null;
   o.onDataFetch    = MO.FEaiCockpitWarningLogicRedemptionSnapshot_onDataFetch;
   o._data          = null;
   o._current       = 0;
   o._index         = 0;
   o.setData        = MO.FEaiCockpitWarningLogicRedemptionSnapshot_setData;
   return o;
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_setData = function FEaiCockpitWarningLogicRedemptionSnapshot_setData() {
   var o = this;
   var data = o._data;
   var redemptions = data.redemptions();
   var current = o._current;
   var data  = redemptions.at(current);
   var items = data.items();
   var dataset = o._dataset;
   var serieses = dataset.serieses();
   var itemsCount = items.count();
   var colors = o._lineColors;
   for(var i = 0; i < 2; ++i) {
      var series = serieses.get(i);
      series.values().clear();
   }
   for(var i = 0; i < itemsCount; ++i) {
      var item = items.get(i);
      if(item.invest() != 0) serieses.get(0).values().push(item.invest());
      if(item.redemp() != 0) serieses.get(1).values().push(item.redemp());
   }
   var xAxis = o._chart.axisX();
   xAxis.createDegreesStandard(dataset.standardCor(itemsCount));
   var yAxis = o._chart.axisY();
   yAxis.createDegreesStandard(dataset.standardCor(10));
   yAxis.formatLabels();
   var zero = yAxis.findDegreeByValue(0);
   if (zero) {
      zero.setLineWidth(2);
      zero.setLineColor("#fec334")
   }
   o.dirty();
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_onDataFetch = function FEaiCockpitWarningLogicRedemptionSnapshot_onDataFetch(event){
   var o = this ;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
   if(!data.redemptions)return;
   o.setData();
   o.dirty();
   }
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_onPaintBegin = function FEaiCockpitWarningLogicRedemptionSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   if(!o._data._redemptions){
      return;
   }
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var data = o._data ;
   var capitas = data.redemptions();
   var index = o._current;
   var showData = capitas.at(index);
   if(!showData)return;
   graphic.setFont('bold 24px Microsoft YaHei');
   graphic.drawText(showData._date,left+30,top+50,'#ffffff');
   graphic.setFont('bold 14px Microsoft YaHei');
   var textSpan = graphic.textWidth('高');
   graphic.drawTextRectangle(showData._text,left+30,top+80,width-60,height,textSpan+3,'#fee71f');
   graphic.setFont('blod 24px Microsoft YaHei');
   var titleWidth = graphic.textWidth(showData._title);
   graphic.drawText(showData._title,left+width/2-titleWidth,top+height-40,'#fee71f');
   var span = 40;
   var lineWidth = 33;
   var textspan = 40;
   graphic.drawLine(left+width/2+span,top+height-45,left+width/2+span+lineWidth,top+height-45,'#27ee6f',2);
   var investTitle = '投资';
   graphic.drawText(investTitle,left+width/2+span+textspan,top+height-40,'#ffffff');
   span += 120;
   graphic.drawLine(left+width/2+span,top+height-45,left+width/2+span+lineWidth,top+height-45,'#51a9ff',2);
   var redempTitle = '赎回';
   graphic.drawText(redempTitle,left+width/2+span+textspan,top+height-40,'#ffffff');
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_onPaintEnd = function FEaiCockpitWarningLogicRedemptionSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_construct = function FEaiCockpitWarningLogicRedemptionSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 6, 0);
   o._cellSize.set(6, 3);
   o._dataTicker = new MO.TTicker(1000 * 10);
   o._refreshTicker = new MO.TTicker(1000 * 2);
   o._data = MO.Class.create(MO.FEaiCockpitWarningMessageRedemptions);
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_setup = function FEaiCockpitWarningLogicRedemptionSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartLinePainter);
   chart.setLocation(60,90);
   chart.setSize(720,180);
   chart.paintRectangle().set(30,30,580,160);
   chart.axisX().createDegrees(0,10);
   chart.axisY().setLineWidth(1);
   chart.axisY().setLineColor('#758191');
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisY().setDivisor(10000);
   chart.axisY().setLabel("(万)");
   chart.axisY().setDegreeLabelGap(6);
   o.push(chart);
   var lineColors = o._lineColors = ['#27ee6f', '#51a9ff'];
   var dataset = o._dataset = MO.Class.create(MO.FUiChartDataset);
   for (var i=0;i<2;i++){
      var series = MO.Class.create(MO.FUiChartDataSeries);
      series.setLineWidth(3);
      series.setLineColor(lineColors[i]);
      dataset.push(series);
   }
    chart.setDataset(dataset);
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_processLogic = function FEaiCockpitWarningLogicRedemptionSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   var flag = o.visible();
   o.dirty();
   if(o._dataTicker.process()){
      var warning = MO.Console.find(MO.FEaiLogicConsole).cockpit().warning();
      warning.fetchRedemption(o, o.onDataFetch);
   }
   if(o._refreshTicker.process()){
      if(o._data.redemptions()){
         o._current = o._index%o._data.redemptions()._count;
         o._index ++;
         o.setData();
      }
   }
}
MO.FEaiCockpitWarningLogicRedemptionSnapshot_dispose = function FEaiCockpitWarningLogicRedemptionSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningLogicRedemptionView = function FEaiCockpitWarningLogicRedemptionView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitWarningLogicRedemptionView_onPaintBegin;
   o.construct    = MO.FEaiCockpitWarningLogicRedemptionView_construct;
   o.setup        = MO.FEaiCockpitWarningLogicRedemptionView_setup;
   o.processLogic = MO.FEaiCockpitWarningLogicRedemptionView_processLogic;
   o.dispose      = MO.FEaiCockpitWarningLogicRedemptionView_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicRedemptionView_onPaintBegin = function FEaiCockpitWarningLogicRedemptionView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicRedemptionView_construct = function FEaiCockpitWarningLogicRedemptionView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningLogicRedemptionView_setup = function FEaiCockpitWarningLogicRedemptionView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitWarningLogicRedemptionView_processLogic = function FEaiCockpitWarningLogicRedemptionView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicRedemptionView_dispose = function FEaiCockpitWarningLogicRedemptionView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitWarningLogicSeparation = function FEaiCockpitWarningLogicSeparation(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'Warning.logic.Separation';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitWarningLogicSeparation_construct;
   o.setup       = MO.FEaiCockpitWarningLogicSeparation_setup;
   o.process     = MO.FEaiCockpitWarningLogicSeparation_process;
   o.dispose     = MO.FEaiCockpitWarningLogicSeparation_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicSeparation_construct = function FEaiCockpitWarningLogicSeparation_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitWarningLogicSeparation_setup = function FEaiCockpitWarningLogicSeparation_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitWarningLogicSeparationSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitWarningLogicSeparationView);
}
MO.FEaiCockpitWarningLogicSeparation_process = function FEaiCockpitWarningLogicSeparation_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitWarningLogicSeparation_dispose = function FEaiCockpitWarningLogicSeparation_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitWarningLogicSeparationSnapshot = function FEaiCockpitWarningLogicSeparationSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitWarningLogicSeparationSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitWarningLogicSeparationSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitWarningLogicSeparationSnapshot_construct;
   o.setup          = MO.FEaiCockpitWarningLogicSeparationSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitWarningLogicSeparationSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitWarningLogicSeparationSnapshot_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_onPaintBegin = function FEaiCockpitWarningLogicSeparationSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_onPaintEnd = function FEaiCockpitWarningLogicSeparationSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_construct = function FEaiCockpitWarningLogicSeparationSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 10, 0);
   o._cellSize.set(6, 3);
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_setup = function FEaiCockpitWarningLogicSeparationSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/warning/dimission.png');
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_processLogic = function FEaiCockpitWarningLogicSeparationSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicSeparationSnapshot_dispose = function FEaiCockpitWarningLogicSeparationSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningLogicSeparationView = function FEaiCockpitWarningLogicSeparationView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitWarningLogicSeparationView_onPaintBegin;
   o.construct    = MO.FEaiCockpitWarningLogicSeparationView_construct;
   o.setup        = MO.FEaiCockpitWarningLogicSeparationView_setup;
   o.processLogic = MO.FEaiCockpitWarningLogicSeparationView_processLogic;
   o.dispose      = MO.FEaiCockpitWarningLogicSeparationView_dispose;
   return o;
}
MO.FEaiCockpitWarningLogicSeparationView_onPaintBegin = function FEaiCockpitWarningLogicSeparationView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningLogicSeparationView_construct = function FEaiCockpitWarningLogicSeparationView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningLogicSeparationView_setup = function FEaiCockpitWarningLogicSeparationView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitWarningLogicSeparationView_processLogic = function FEaiCockpitWarningLogicSeparationView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitWarningLogicSeparationView_dispose = function FEaiCockpitWarningLogicSeparationView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitWarningMessage = function FEaiCockpitWarningMessage(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._warningItems = MO.Class.register(o, [new MO.AGetter('_warningItems'), new MO.APersistence('_warningItems', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageItem)]);
   return o;
}
MO.FEaiCockpitWarningMessageFetchPageType = function FEaiCockpitWarningMessageFetchPageType(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._typeString = MO.Class.register(o, [new MO.AGetter('_typeString'), new MO.APersistence('_typeString', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitWarningMessageFetchPageTypes = function FEaiCockpitWarningMessageFetchPageTypes(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._pageType = MO.Class.register(o, [new MO.AGetter('_pageType'), new MO.APersistence('_pageType', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageFetchPageType)]);
   return o;
}
MO.FEaiCockpitWarningMessageInvestment = function FEaiCockpitWarningMessageInvestment(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._date  = MO.Class.register(o, [new MO.AGetter('_date'), new MO.APersistence('_date', MO.EDataType.String)]);
   o._title = MO.Class.register(o, [new MO.AGetter('_title'), new MO.APersistence('_title', MO.EDataType.String)]);
   o._text  = MO.Class.register(o, [new MO.AGetter('_text'), new MO.APersistence('_text', MO.EDataType.String)]);
   o._items = MO.Class.register(o, [new MO.AGetter('_items'), new MO.APersistence('_items', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageInvestmentItem)]);
   return o;
}
MO.FEaiCockpitWarningMessageInvestmentItem = function FEaiCockpitWarningMessageInvestmentItem(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._count  = MO.Class.register(o, [new MO.AGetter('_count'), new MO.APersistence('_count', MO.EDataType.Double)]);
   o._name   = MO.Class.register(o, [new MO.AGetter('_name'), new MO.APersistence('_name', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitWarningMessageInvestments = function FEaiCockpitWarningMessageInvestments(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._capitas = MO.Class.register(o, [new MO.AGetter('_capitas'), new MO.APersistence('_capitas', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageInvestment)]);
   return o;
}
MO.FEaiCockpitWarningMessageItem = function FEaiCockpitWarningMessageItem(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._id      = MO.Class.register(o, [new MO.AGetter('_id'), new MO.APersistence('_id', MO.EDataType.String)]);
   o._message = MO.Class.register(o, [new MO.AGetter('_message'), new MO.APersistence('_message', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitWarningMessageRedemption = function FEaiCockpitWarningMessageRedemption(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._date  = MO.Class.register(o, [new MO.AGetter('_date'), new MO.APersistence('_date', MO.EDataType.String)]);
   o._title = MO.Class.register(o, [new MO.AGetter('_title'), new MO.APersistence('_title', MO.EDataType.String)]);
   o._text  = MO.Class.register(o, [new MO.AGetter('_text'), new MO.APersistence('_text', MO.EDataType.String)]);
   o._items = MO.Class.register(o, [new MO.AGetter('_items'), new MO.APersistence('_items', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageRedemptionItem)]);
   return o;
}
MO.FEaiCockpitWarningMessageRedemptionItem = function FEaiCockpitWarningMessageRedemptionItem(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._date   = MO.Class.register(o, [new MO.AGetter('_date'), new MO.APersistence('_date', MO.EDataType.String)]);
   o._invest  = MO.Class.register(o, [new MO.AGetter('_invest'), new MO.APersistence('_invest', MO.EDataType.Double)]);
   o._redemp  = MO.Class.register(o, [new MO.AGetter('_redemp'), new MO.APersistence('_redemp', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitWarningMessageRedemptions = function FEaiCockpitWarningMessageRedemptions(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._redemptions = MO.Class.register(o, [new MO.AGetter('_redemptions'), new MO.APersistence('_redemptions', MO.EDataType.Objects, MO.FEaiCockpitWarningMessageRedemption)]);
   return o;
}
MO.FEaiCockpitWarningModuleManager = function FEaiCockpitWarningModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._data            = null;
   o._dataTicker      = null;
   o._logic001Module  = MO.Class.register(o, new MO.AGetter('_logic001Module'));
   o._logic002Module  = MO.Class.register(o, new MO.AGetter('_logic002Module'));
   o._logic003Module  = MO.Class.register(o, new MO.AGetter('_logic003Module'));
   o._logic004Module  = MO.Class.register(o, new MO.AGetter('_logic004Module'));
   o._logic005Module  = MO.Class.register(o, new MO.AGetter('_logic005Module'));
   o._logic006Module  = MO.Class.register(o, new MO.AGetter('_logic006Module'));
   o._navigatorModule = null;
   o._autoPlay        = false;
   o.construct        = MO.FEaiCockpitWarningModuleManager_construct;
   o.process          = MO.FEaiCockpitWarningModuleManager_process;
   o.setup            = MO.FEaiCockpitWarningModuleManager_setup;
   o.dispose          = MO.FEaiCockpitWarningModuleManager_dispose;
   o.onDataFetch      = MO.FEaiCockpitWarningModuleManager_onDataFetch;
   o.setData          = MO.FEaiCockpitWarningModuleManager_setData;
   return o;
}
MO.FEaiCockpitWarningModuleManager_construct = function FEaiCockpitWarningModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
   o._dataTicker = new MO.TTicker(1000 * 6);
   o._data = MO.Class.create(MO.FEaiCockpitWarningMessageFetchPageTypes);
}
MO.FEaiCockpitWarningModuleManager_setup = function FEaiCockpitWarningModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   var application = o._scene.application();
   var desktop = application.desktop();
   var logicSize = desktop.logicSize();
   var cellWidth = logicSize.width / 16;
   var cellHeight = logicSize.height / 9;
   var navigator = o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   var options   = o._options = o.createModule(MO.FEaiCockpitWarningLogicOptions);
   var newest    = o._newest  = o.createModule(MO.FEaiCockpitWarningLogicNewest);
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
MO.FEaiCockpitWarningModuleManager_dispose = function FEaiCockpitWarningModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
MO.FEaiCockpitWarningModuleManager_process = function FEaiCockpitWarningModuleManager_process() {
   var o = this;
   o.__base.FEaiCockpitModuleManager.process.call(o, event);
   if (o._dataTicker.process()) {
      var warning = MO.Console.find(MO.FEaiLogicConsole).cockpit().warning();
      warning.fetchWarningPageType(o, o.onDataFetch);
   }
}
MO.FEaiCockpitWarningModuleManager_onDataFetch = function FEaiCockpitWarningModuleManager_onDataFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o.setData(data);
   }
}
MO.FEaiCockpitWarningModuleManager_setData = function FEaiCockpitWarningModuleManager_setData(data) {
   var o = this;
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   var modules = o._modules;
   var count = modules.count();
   for (var i = 0; i < count; i++) {
      var module = modules.at(i);
      if(module._name=='cockpit.logic.navigator')continue;
      if(module._name=='Warning.logic.options')continue;
      if(module._name=='Warning.logic.newest')continue;
      var snapshot = module.controlSnapshot();
      var view = module.controlView();
      snapshot.setVisible(false);
      view.setVisible(false);
   }
   var application = o._scene.application();
   var desktop = application.desktop();
   var logicSize = desktop.logicSize();
   var cellWidth = logicSize.width / 16;
   var cellHeight = logicSize.height / 9;
   var moduleCount = data.pageType().count();
   var module = null;
   for (var i = 0 ; i < moduleCount ; i++) {
      var moduleName = data.pageType().at(i).typeString();
      var newCreate = false;
      var snapshot = null;
      if(moduleName == "eai.service.cockpit.warning.redemption"){
         module = modules.get("Warning.logic.Redemption")
         if(module == null){
            module = o.createModule(MO.FEaiCockpitWarningLogicRedemption);
            newCreate = true;
         }
      }else if (moduleName == "eai.service.cockpit.warning.capita" ){
         module = modules.get("Warning.logic.Capita")
         if(module == null){
            module = o.createModule(MO.FEaiCockpitWarningLogicInvestment);
            newCreate = true;
         }
      }else if( moduleName == "eai.service.cockpit.warning.separation"){
         module = modules.get("Warning.logic.Separation")
         if(module == null){
            module = o.createModule(MO.FEaiCockpitWarningLogicSeparation);
            newCreate = true;
         }
      }
      var snapshot = module.controlSnapshot();;
      var view = module.controlView();
      snapshot.cellLocation().set(2 + 6 * (i % 2), 1 + 3 * Math.floor(i / 2), 0);
      if (newCreate) {
         var typeCd = module.typeCd();
         var snapshotCellSize = snapshot.cellSize();
         snapshot.size().set(cellWidth * snapshotCellSize.width, cellHeight * snapshotCellSize.height);
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
      snapshot.setVisible(true);
      view.setVisible(true);
   }
}
MO.FEaiCockpitWarningSnapshot = function FEaiCockpitWarningSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon           = true;
   o._name                 = 'cockpit.warning.snapshot';
   o._backgroundUri        = '{eai.resource}/cockpit/warning/ground.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._gridControl          = null;
   o._scrollTicker         = null;
   o._scrollTimes          = 0;
   o._scrollPosition       = 0;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitWarningSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitWarningSnapshot_onPaintEnd;
   o.onWarningFetch        = MO.FEaiCockpitWarningSnapshot_onWarningFetch;
   o.construct             = MO.FEaiCockpitWarningSnapshot_construct;
   o.setup                 = MO.FEaiCockpitWarningSnapshot_setup;
   o.setData               = MO.FEaiCockpitWarningSnapshot_setData;
   o.processLogic          = MO.FEaiCockpitWarningSnapshot_processLogic;
   o.nextPosition          = MO.FEaiCockpitWarningSnapshot_nextPosition;
   o.dispose               = MO.FEaiCockpitWarningSnapshot_dispose;
   return o;
}
MO.FEaiCockpitWarningSnapshot_onWarningFetch = function FEaiCockpitWarningSnapshot_onWarningFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      o.setData(data);
   }
}
MO.FEaiCockpitWarningSnapshot_setData = function FEaiCockpitWarningSnapshot_setData(data) {
   var o = this;
   var items = data.warningItems();
   var grid = o._gridControl;
   grid.clearRows();
   var count = items.count();
   count = count > 5 ? 5 : count;
   for (var i = 0; i < count; ++i) {
      var item = items.at(i);
      var row = grid.allocRow();
      row.set('circle', "{eai.resource}/cockpit/warning/point.png");
      row.set('item', item.message());
      grid.pushRow(row);
      o.nextPosition();
   }
   o.dirty();
}
MO.FEaiCockpitWarningSnapshot_onPaintBegin = function FEaiCockpitWarningSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitWarningSnapshot_construct = function FEaiCockpitWarningSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(11, 0, 0);
   o._cellSize.set(5, 2);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._scrollTicker = new MO.TTicker(1000 * 25);
   o._currentDate = new MO.TDate();
   o._data = MO.Class.create(MO.FEaiCockpitWarningMessage);
}
MO.FEaiCockpitWarningSnapshot_setup = function FEaiCockpitWarningSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var grid = o._gridControl = MO.Class.create(MO.FGuiTable);
   grid.setOptionClip(true);
   grid.setLocation(70, 16);
   grid.setSize(500, 194);
   grid.setDisplayHead(false);
   grid.setRowHeight(40);
   grid.setRowLimitCount(5);
   grid.rowFont().size = 20;
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().color = '#ffffff';
   var column = MO.Class.create(MO.FGuiGridColumnPicture);
   column.setName('circle');
   column.setLabel();
   column.setDataName('circle');
   column.setWidth(20);
   column.setPadding(1,1,1,1);
   column.setAlign(MO.EUiAlign.Center);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setTextAlign(MO.EUiAlign.Left);
   column.setName('item');
   column.setDataName('item');
   column.setWidth(400);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
}
MO.FEaiCockpitWarningSnapshot_processLogic = function FEaiCockpitWarningSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()) {
      var warning = MO.Console.find(MO.FEaiLogicConsole).cockpit().warning();
      warning.doFetch(o, o.onWarningFetch);
   }
   if(o._data.warningItems() != null) {
      if(o._scrollTicker.process()) {
         var len = o._data.warningItems().count();
         o._scrollTimes = len > 5 ? 5 : 0;
      }
      if(o._scrollTimes > 0) {
         var items = o._data.warningItems();
         var count = items.count();
         var grid = o._gridControl;
         var item = items.at(o._scrollPosition);
         var row = grid.allocRow();
         row.set('circle', "{eai.resource}/cockpit/warning/point.png");
         row.set('item', item.message());
         grid.insertRow(row);
         o.nextPosition();
         o._scrollTimes --;
      }
   }
   o._gridControl.psUpdate();
}
MO.FEaiCockpitWarningSnapshot_nextPosition = function FEaiCockpitWarningSnapshot_nextPosition() {
   var o = this;
   var count = o._data.warningItems().count();
   o._scrollPosition = o._scrollPosition + 1 >= count ? 0 : o._scrollPosition + 1;
}
MO.FEaiCockpitWarningSnapshot_dispose = function FEaiCockpitWarningSnapshot_dispose() {
   var o = this;
   o._units = MO.Lang.Object.dispose(o._units);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitWarningView = function FEaiCockpitWarningView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitWarningView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitWarningView_onPaintBegin;
   o.construct             = MO.FEaiCockpitWarningView_construct;
   o.setup                 = MO.FEaiCockpitWarningView_setup;
   o.processLogic          = MO.FEaiCockpitWarningView_processLogic;
   o.dispose               = MO.FEaiCockpitWarningView_dispose;
   return o;
}
MO.FEaiCockpitWarningView_onImageLoad = function FEaiCockpitWarningView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitWarningView_onPaintBegin = function FEaiCockpitWarningView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitWarningView_construct = function FEaiCockpitWarningView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitWarningView_setup = function FEaiCockpitWarningView_setup(){
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
}
MO.FEaiCockpitWarningView_processLogic = function FEaiCockpitWarningView_processLogic(){
   var o = this;
}
MO.FEaiCockpitWarningView_dispose = function FEaiCockpitWarningView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
