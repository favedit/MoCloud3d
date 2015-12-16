MO.FEaiCockpitStatus = function FEaiCockpitStatus(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'status';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitStatus_construct;
   o.setup      = MO.FEaiCockpitStatus_setup;
   o.process    = MO.FEaiCockpitStatus_process;
   o.dispose    = MO.FEaiCockpitStatus_dispose;
   return o;
}
MO.FEaiCockpitStatus_construct = function FEaiCockpitStatus_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitStatus_setup = function FEaiCockpitStatus_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitStatusSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitStatusView);
   o.setupModuleManager(MO.FEaiCockpitStatusModuleManager);
}
MO.FEaiCockpitStatus_process = function FEaiCockpitStatus_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitStatus_dispose = function FEaiCockpitStatus_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitStatusLogicDashboard = function FEaiCockpitStatusLogicDashboard(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.FinishMonth';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitStatusLogicDashboard_construct;
   o.setup       = MO.FEaiCockpitStatusLogicDashboard_setup;
   o.process     = MO.FEaiCockpitStatusLogicDashboard_process;
   o.dispose     = MO.FEaiCockpitStatusLogicDashboard_dispose;
   return o;
}
MO.FEaiCockpitStatusLogicDashboard_construct = function FEaiCockpitStatusLogicDashboard_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitStatusLogicDashboard_setup = function FEaiCockpitStatusLogicDashboard_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitStatusLogicDashboardSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitStatusLogicDashboardView);
}
MO.FEaiCockpitStatusLogicDashboard_process = function FEaiCockpitStatusLogicDashboard_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitStatusLogicDashboard_dispose = function FEaiCockpitStatusLogicDashboard_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitStatusLogicDashboardSnapshot = function FEaiCockpitStatusLogicDashboardSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri   = '{eai.resource}/cockpit/status/subpage_bg.png';
   o._dashboard       = null;
   o._gridRank        = null;
   o._colorTypeImage  = null;
   o._tableImage      = null;
   o._fontTopText     = null;
   o._fontMiddleText  = null;
   o._dataTicker      = null;
   o._data            = null;
   o._index           = 0;
   o.onPaintBegin     = MO.FEaiCockpitStatusLogicDashboardSnapshot_onPaintBegin;
   o.onPaintEnd       = MO.FEaiCockpitStatusLogicDashboardSnapshot_onPaintEnd;
   o.construct        = MO.FEaiCockpitStatusLogicDashboardSnapshot_construct;
   o.setData          = MO.FEaiCockpitStatusLogicDashboardSnapshot_setData;
   o.drawText         = MO.FEaiCockpitStatusLogicDashboardSnapshot_drawText;
   o.pushUnit         = MO.FEaiCockpitStatusLogicDashboardSnapshot_pushUnit;
   o.setup            = MO.FEaiCockpitStatusLogicDashboardSnapshot_setup;
   o.processLogic     = MO.FEaiCockpitStatusLogicDashboardSnapshot_processLogic;
   o.dispose          = MO.FEaiCockpitStatusLogicDashboardSnapshot_dispose;
   return o;
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_onPaintBegin = function FEaiCockpitStatusLogicDashboardSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o,event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._colorTypeImage, left + 275,top + 20);
   graphic.drawImage(o._tableImage, left + 15,top + 275);
   graphic.setFont("23px Microsoft YaHei");
   graphic.drawText(o._fontTopText, left + 20, top + 50, "rgb(255,255,255)");
   graphic.setFont("17px Microsoft YaHei");
   graphic.drawText(o._fontMiddleText, left + 20, top + 270,"rgb(255,255,255)");
   var data = o._data;
   var dashboard = o._dashboard;
   if (data){
      dashboard.setData(data.finishRate());
      graphic.setFont("Microsoft YaHei");
      var text = data.monthData().last().monthLabel();
      graphic.drawText(text, left + 40, top + 445, "rgb(255,255,255)");
      var text = data.monthData().last().lastMonth();
      var textLenght = text.toString().length;
      graphic.drawText(text, left + 170 - textLenght/2*9 , top + 445,"rgb(255,255,255)");
      var text = data.monthData().last().thisMonth();
      var textLenght = text.toString().length;
      graphic.drawText(text, left + 325- textLenght/2*9, top + 445,"rgb(255,255,255)");
      var text = data.monthData().last().dayRatio();
      var textLenght = text.toString().length;
      graphic.drawText(text + "%", left + 425- textLenght/2*9, top + 445,"rgb(255,255,255)");
   }
   var grid = o._gridRank;
   grid.setOptionClip(true);
   grid.setLocation(10, 270);
   grid.setSize(400, 150);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
   grid.setLeft(20);
   grid.setRight(20);
   grid.setHeadHeight(40);
   grid.setHeadBackColor('rgba(0,0,0,0)');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 18;
   grid.headFont().color = '#FFFFFF';
   grid.setRowHeight(35);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.rowFont().color = '#FFFFFF';
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('timeData');
   if (data) {
     column.setLabel(data.titleFirst());
   }
   column.setDataName('time_data');
   column.setWidth(70);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('lastMonth');
   if (data) {
     column.setLabel(data.titleSecond());
   }
   column.setDataName('last_month');
   column.setWidth(140);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('thisMonth');
   if (data) {
     column.setLabel(data.titleThird());
   }
   column.setDataName('this_month');
   column.setWidth(140);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('dayRatio');
   if (data) {
     column.setLabel(data.titleFourth());
   }
   column.setDataName('day_ratio');
   column.setWidth(50);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_onPaintEnd = function FEaiCockpitStatusLogicDashboardSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_construct = function FEaiCockpitStatusLogicDashboardSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(1, 1, 0);
   o._cellSize.set(4, 4);
   o._dataTicker = new MO.TTicker(1000 * 2 );
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_setup = function FEaiCockpitStatusLogicDashboardSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._colorTypeImage = o.loadResourceImage('{eai.resource}/cockpit/status/color_type.png');
   o._tableImage = o.loadResourceImage('{eai.resource}/cockpit/status/table_title.png');
   var dashboard = o._dashboard = MO.Class.create(MO.FEaiCockpitStatusSnapshotDashboard);
   dashboard.setLocation(100, 80);
   dashboard.setTextVisible(true);
   o.push(dashboard);
   o._gridRank = MO.Class.create(MO.FGuiTable);
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_drawText = function FEaiCockpitStatusLogicDashboardSnapshot_drawText(topText,middleText){
   var o = this;
   o._fontTopText = topText;
   o._fontMiddleText = middleText;
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_setData = function FEaiCockpitStatusLogicDashboardSnapshot_setData(data){
   var o = this;
   o._data = data;
   o.dirty();
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_pushUnit = function FEaiCockpitStatusLogicDashboardSnapshot_pushUnit(index){
   var o = this;
   var grid = o._gridRank;
   var row = grid.allocRow();
   if (o._data) {
      var tableData = o._data.monthData();
      var index = index%(tableData.count()-1);
      var rowData = tableData.at(index);
      row.set('time_data', rowData.monthLabel());
      row.set('last_month', rowData.lastMonth());
      row.set('this_month', rowData.thisMonth());
      row.set('day_ratio', rowData.dayRatio() + "%");
      grid.insertRow(row);
   }
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_processLogic = function FEaiCockpitStatusLogicDashboardSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if (o._dataTicker.process()){
      o.pushUnit(o._index);
      o._index++;
   }
}
MO.FEaiCockpitStatusLogicDashboardSnapshot_dispose = function FEaiCockpitStatusLogicDashboardSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitStatusLogicDashboardView = function FEaiCockpitStatusLogicDashboardView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitStatusLogicDashboardView_onPaintBegin;
   o.construct    = MO.FEaiCockpitStatusLogicDashboardView_construct;
   o.setup        = MO.FEaiCockpitStatusLogicDashboardView_setup;
   o.processLogic = MO.FEaiCockpitStatusLogicDashboardView_processLogic;
   o.dispose      = MO.FEaiCockpitStatusLogicDashboardView_dispose;
   return o;
}
MO.FEaiCockpitStatusLogicDashboardView_onPaintBegin = function FEaiCockpitStatusLogicDashboardView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitStatusLogicDashboardView_construct = function FEaiCockpitStatusLogicDashboardView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitStatusLogicDashboardView_setup = function FEaiCockpitStatusLogicDashboardView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitStatusLogicDashboardView_processLogic = function FEaiCockpitStatusLogicDashboardView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitStatusLogicDashboardView_dispose = function FEaiCockpitStatusLogicDashboardView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitStatusLogicEntryRateData  = function FEaiCockpitStatusLogicEntryRateData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicEntryRateDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicEntryRateDataUnit  = function FEaiCockpitStatusLogicEntryRateDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishInvestmentRateData  = function FEaiCockpitStatusLogicFinishInvestmentRateData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicFinishInvestmentRateDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishInvestmentRateDataUnit = function FEaiCockpitStatusLogicFinishInvestmentRateDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishMonthData  = function FEaiCockpitStatusLogicFinishMonthData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicFinishMonthDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishMonthDataUnit = function FEaiCockpitStatusLogicFinishMonthDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishPerformanceData  = function FEaiCockpitStatusLogicFinishPerformanceData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicFinishPerformanceDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicFinishPerformanceDataUnit = function FEaiCockpitStatusLogicFinishPerformanceDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicInvestmentRateData = function FEaiCockpitStatusLogicInvestmentRateData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicInvestmentRateDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicInvestmentRateDataUnit = function FEaiCockpitStatusLogicInvestmentRateDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicLeaveOfficeData = function FEaiCockpitStatusLogicLeaveOfficeData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicLeaveOfficeDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicLeaveOfficeDataUnit = function FEaiCockpitStatusLogicLeaveOfficeDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicLiabilitiesRateData = function FEaiCockpitStatusLogicLiabilitiesRateData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicLiabilitiesRateDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicLiabilitiesRateDataUnit = function FEaiCockpitStatusLogicLiabilitiesRateDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusLogicPlanTargetData  = function FEaiCockpitStatusLogicPlanTargetData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._finishRate  = MO.Class.register(o, [new MO.AGetter('_finishRate'), new MO.APersistence('_finishRate', MO.EDataType.Int32)]);
   o._titleFirst  = MO.Class.register(o, [new MO.AGetter('_titleFirst'), new MO.APersistence('_titleFirst', MO.EDataType.String)]);
   o._titleSecond = MO.Class.register(o, [new MO.AGetter('_titleSecond'), new MO.APersistence('_titleSecond', MO.EDataType.String)]);
   o._titleThird  = MO.Class.register(o, [new MO.AGetter('_titleThird'), new MO.APersistence('_titleThird', MO.EDataType.String)]);
   o._titleFourth = MO.Class.register(o, [new MO.AGetter('_titleFourth'), new MO.APersistence('_titleFourth', MO.EDataType.String)]);
   o._monthData   = MO.Class.register(o, [new MO.AGetter('_monthData'),new MO.APersistence('_monthData',MO.EDataType.Objects, MO.FEaiCockpitStatusLogicPlanTargetDataUnit)]);
   return o;
}
MO.FEaiCockpitStatusLogicPlanTargetDataUnit = function FEaiCockpitStatusLogicPlanTargetDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._monthLabel = MO.Class.register(o, [new MO.AGetter('_monthLabel'), new MO.APersistence('_monthLabel', MO.EDataType.String)]);
   o._lastMonth  = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Double)]);
   o._thisMonth  = MO.Class.register(o, [new MO.AGetter('_thisMonth'), new MO.APersistence('_thisMonth', MO.EDataType.Double)]);
   o._dayRatio   = MO.Class.register(o, [new MO.AGetter('_dayRatio'), new MO.APersistence('_dayRatio', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitStatusMessage = function FEaiCockpitStatusMessage(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._turnoverPercent    = MO.Class.register(o, [new MO.AGetter('_turnoverPercent'), new MO.APersistence('_turnoverPercent', MO.EDataType.String)]);
   o._perPercent         = MO.Class.register(o, [new MO.AGetter('_perPercent'), new MO.APersistence('_perPercent', MO.EDataType.String)]);
   o._inOutPercent       = MO.Class.register(o, [new MO.AGetter('_inOutPercent'), new MO.APersistence('_inOutPercent', MO.EDataType.String)]);
   o._performancePercent = MO.Class.register(o, [new MO.AGetter('_performancePercent'), new MO.APersistence('_performancePercent', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitStatusModuleManager = function FEaiCockpitStatusModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._statusCd                       = 0;
   o._autoPlay                       = false;
   o._snapshotArray                  = null;
   o._finishMonthDate                = MO.Class.register(o, new MO.AGetter('_finishMonthDate'));
   o._plannedTargetDate              = MO.Class.register(o, new MO.AGetter('_plannedTargetDate'));
   o._finishInvestmentDate           = MO.Class.register(o, new MO.AGetter('_finishInvestmentDate'));
   o._finishPerformanceDate          = MO.Class.register(o, new MO.AGetter('_finishPerformanceDate'));
   o._entryRateDate                  = MO.Class.register(o, new MO.AGetter('_entryRateDate'));
   o._leaveOfficeDate                = MO.Class.register(o, new MO.AGetter('_leaveOfficeDate'));
   o._investmentRatetDate            = MO.Class.register(o, new MO.AGetter('_investmentRatetDate'));
   o._liabilitiesDate                = MO.Class.register(o, new MO.AGetter('_liabilitiesDate'));
   o.construct                       = MO.FEaiCockpitStatusModuleManager_construct;
   o.setup                           = MO.FEaiCockpitStatusModuleManager_setup;
   o.updateFinishMonthSnapshot       = MO.FEaiCockpitStatusModuleManager_updateFinishMonthSnapshot;
   o.updatePlannedTargetSnapshot     = MO.FEaiCockpitStatusModuleManager_updatePlannedTargetSnapshot;
   o.updateFinishInvestmentSnapshot  = MO.FEaiCockpitStatusModuleManager_updateFinishInvestmentSnapshot;
   o.updateFinishPerformanceSnapshot = MO.FEaiCockpitStatusModuleManager_updateFinishPerformanceSnapshot;
   o.updateEntryRateSnapshot         = MO.FEaiCockpitStatusModuleManager_updateEntryRateSnapshot;
   o.updateLeaveOfficeSnapshot       = MO.FEaiCockpitStatusModuleManager_updateLeaveOfficeSnapshot;
   o.updateInvestmentRatetSnapshot   = MO.FEaiCockpitStatusModuleManager_updateInvestmentRatetSnapshot;
   o.updateLiabilitiesSnapshot       = MO.FEaiCockpitStatusModuleManager_updateLiabilitiesSnapshot;
   o.process                         = MO.FEaiCockpitStatusModuleManager_processLogic;
   o.dispose                         = MO.FEaiCockpitStatusModuleManager_dispose;
   return o;
}
MO.FEaiCockpitStatusModuleManager_construct = function FEaiCockpitStatusModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
   o._snapshotArray = new MO.TObjects();
   o._finishMonthDate = MO.Class.create(MO.FEaiCockpitStatusLogicFinishMonthData);
   o._plannedTargetDate = MO.Class.create(MO.FEaiCockpitStatusLogicPlanTargetData);
   o._finishInvestmentDate = MO.Class.create(MO.FEaiCockpitStatusLogicFinishInvestmentRateData);
   o._finishPerformanceDate = MO.Class.create(MO.FEaiCockpitStatusLogicFinishPerformanceData);
   o._entryRateDate = MO.Class.create(MO.FEaiCockpitStatusLogicEntryRateData);
   o._leaveOfficeDate = MO.Class.create(MO.FEaiCockpitStatusLogicLeaveOfficeData);
   o._investmentRatetDate = MO.Class.create(MO.FEaiCockpitStatusLogicInvestmentRateData);
   o._liabilitiesDate = MO.Class.create(MO.FEaiCockpitStatusLogicLiabilitiesRateData);
}
MO.FEaiCockpitStatusModuleManager_processLogic = function FEaiCockpitStatusModuleManager_processLogic(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.process.call(o);
}
MO.FEaiCockpitStatusModuleManager_updateFinishMonthSnapshot = function FEaiCockpitStatusModuleManager_updateFinishMonthSnapshot(event){
   var o = this;
   var content = event.content;
   var investmentDate = o._finishMonthDate;
   investmentDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(0).setData(investmentDate);
}
MO.FEaiCockpitStatusModuleManager_updatePlannedTargetSnapshot = function FEaiCockpitStatusModuleManager_updatePlannedTargetSnapshot(event){
   var o = this;
   var content = event.content;
   var plannedTargetDate = o._plannedTargetDate;
   plannedTargetDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(1).setData(plannedTargetDate);
}
MO.FEaiCockpitStatusModuleManager_updateFinishInvestmentSnapshot = function FEaiCockpitStatusModuleManager_updateFinishInvestmentSnapshot(event){
   var o = this;
   var content = event.content;
   var finishInvestmentDate = o._finishInvestmentDate;
   finishInvestmentDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(2).setData(finishInvestmentDate);
}
MO.FEaiCockpitStatusModuleManager_updateFinishPerformanceSnapshot = function FEaiCockpitStatusModuleManager_updateFinishPerformanceSnapshot(event){
   var o = this;
   var content = event.content;
   var finishPerformanceDate = o._finishPerformanceDate;
   finishPerformanceDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(3).setData(finishPerformanceDate);
}
MO.FEaiCockpitStatusModuleManager_updateEntryRateSnapshot = function FEaiCockpitStatusModuleManager_updateEntryRateSnapshot(event){
   var o = this;
   var content = event.content;
   var entryRateDate = o._entryRateDate;
   entryRateDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(4).setData(entryRateDate);
}
MO.FEaiCockpitStatusModuleManager_updateLeaveOfficeSnapshot = function FEaiCockpitStatusModuleManager_updateLeaveOfficeSnapshot(event){
   var o = this;
   var content = event.content;
   var leaveOfficeDate = o._leaveOfficeDate;
   leaveOfficeDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(5).setData(leaveOfficeDate);
}
MO.FEaiCockpitStatusModuleManager_updateInvestmentRatetSnapshot = function FEaiCockpitStatusModuleManager_updateInvestmentRatetSnapshot(event){
   var o = this;
   var content = event.content;
   var investmentRatetDate = o._investmentRatetDate;
   investmentRatetDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(6).setData(investmentRatetDate);
}
MO.FEaiCockpitStatusModuleManager_updateLiabilitiesSnapshot = function FEaiCockpitStatusModuleManager_updateLiabilitiesSnapshot(event){
   var o = this;
   var content = event.content;
   var liabilitiesDate = o._liabilitiesDate;
   liabilitiesDate.unserializeSignBuffer(event.sign, event.content, true);
   o._snapshotArray.at(7).setData(liabilitiesDate);
}
MO.FEaiCockpitStatusModuleManager_setup = function FEaiCockpitStatusModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   var statistics = MO.Console.find(MO.FEaiLogicConsole).cockpit().status();
   statistics.doFetchFinishMonth(o, o.updateFinishMonthSnapshot);
   statistics.doFetchPlannedTarget(o, o.updatePlannedTargetSnapshot);
   statistics.doFetchFinishInvestmentRate(o, o.updateFinishInvestmentSnapshot);
   statistics.doFetchfinishPerformanceRate(o, o.updateFinishPerformanceSnapshot);
   statistics.doFetchEntryRate(o, o.updateEntryRateSnapshot);
   statistics.doFetchLeaveOfficeRate(o, o.updateLeaveOfficeSnapshot);
   statistics.doFetchInvestmentRate(o, o.updateInvestmentRatetSnapshot);
   statistics.doFetchLiabilitiesTotalRate(o, o.updateLiabilitiesSnapshot);
   var moduleTitle = [
      "总投完成率",
      "业绩完成率",
      "稳赢在初次投资中的占比",
      "年享在再次投资中的占比",
      "入职率",
      "离职率",
      "投入产出比",
      "资产负债率"]
   var middleTitle = [
      "本年（今日）总投目标完成度做比较：",
      "本年（今日）业绩目标完成度做比较：",
      "本年（今日）总投完成度预定目标做比较：",
      "本年（今日）月度完成度做比较：",
      "本年（今日）入职人员与预定目标完成度做比较：",
      "本年（今日）离职人员与预估做比较：",
      "本年（每一季）投资金额与往年（每一季）做比较：",
      "本年（每一季）负债金额与往年（每一季）做比较："]
   o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   var snapshotArray = o._snapshotArray;
   for (var i = 0; i < 8; i++) {
         var status = o.createModule(MO.FEaiCockpitStatusLogicDashboard,"status"+i);
         var snapshot = status.controlSnapshot();
         snapshotArray.push(snapshot);
         snapshot.drawText(moduleTitle[i],middleTitle[i]);
         snapshot.cellLocation().set( 4 * (i % 4), 1 + 4 * Math.floor(i / 4), 0);
   };
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
MO.FEaiCockpitStatusModuleManager_selectModeCd = function FEaiCockpitStatusModuleManager_selectModeCd(modeCd, module){
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
MO.FEaiCockpitStatusModuleManager_dispose = function FEaiCockpitStatusModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
MO.FEaiCockpitStatusSnapshot = function FEaiCockpitStatusSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon      = true;
   o._rotateProcess   = 0;
   o._startFlag       = true;
   o._name            = 'cockpit.status.snapshot';
   o._backgroundUri   = '{eai.resource}/cockpit/status/ground.png';
   o._rotateSpeed     = 0.01;
   o.onStatusFetch    = MO.FEaiCockpitStatusSnapshot_onStatusFetch;
   o.onPaintBegin     = MO.FEaiCockpitStatusSnapshot_onPaintBegin;
   o.onPaintEnd       = MO.FEaiCockpitStatusSnapshot_onPaintEnd;
   o.construct        = MO.FEaiCockpitStatusSnapshot_construct;
   o.setup            = MO.FEaiCockpitStatusSnapshot_setup;
   o.processLogic     = MO.FEaiCockpitStatusSnapshot_processLogic;
   o.dispose          = MO.FEaiCockpitStatusSnapshot_dispose;
   return o;
}
MO.FEaiCockpitStatusSnapshot_onStatusFetch = function FEaiCockpitStatusSnapshot_onStatusFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._data;
   data.unserializeSignBuffer(event.sign, event.content, true);
   if(o._startFlag) {
      o._rotateProcess = 0;
      o._startFlag = false;
   }else {
      o._rotateProcess = 0.99;
   }
}
MO.FEaiCockpitStatusSnapshot_onPaintBegin = function FEaiCockpitStatusSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitStatusSnapshot_construct = function FEaiCockpitStatusSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 7, 0);
   o._cellSize.set(11, 2);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._currentDate = new MO.TDate();
   o._data = MO.Class.create(MO.FEaiCockpitStatusMessage);
}
MO.FEaiCockpitStatusSnapshot_setup = function FEaiCockpitStatusSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var dashboardY = 30;
   var dashboard = o._turnoverDashboard = MO.Class.create(MO.FEaiCockpitStatusSnapshotDashboard);
   dashboard.setLocation(60, dashboardY);
   dashboard.setTextPre("集团当月离职情况");
   o.push(dashboard);
   var dashboard = o._perDashboard = MO.Class.create(MO.FEaiCockpitStatusSnapshotDashboard);
   dashboard.setLocation(364, dashboardY);
   dashboard.setTextPre("理财师人均业绩");
   o.push(dashboard);
   var dashboard = o._inOutDashboard = MO.Class.create(MO.FEaiCockpitStatusSnapshotDashboard);
   dashboard.setLocation(668, dashboardY);
   dashboard.setTextPre("职场良性度");
   o.push(dashboard);
   var dashboard = o._performanceDashboard = MO.Class.create(MO.FEaiCockpitStatusSnapshotDashboard);
   dashboard.setLocation(972, dashboardY);
   dashboard.setTextPre("业绩完成度");
   o.push(dashboard);
}
MO.FEaiCockpitStatusSnapshot_processLogic = function FEaiCockpitStatusSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if(o._dataTicker.process()) {
      var status = MO.Console.find(MO.FEaiLogicConsole).cockpit().status();
      status.doFetch(o, o.onStatusFetch);
   }
   if(o._rotateProcess < 1) {
      var turnover = o._data.turnoverPercent() == null ? 0 : parseInt(o._data.turnoverPercent());
      var per = o._data.perPercent() == null ? 0 : parseInt(o._data.perPercent());
      var inOut = o._data.inOutPercent() == null ? 0 : parseInt(o._data.inOutPercent());
      var performance = o._data.performancePercent() == null ? 0 : parseInt(o._data.performancePercent());
      o._rotateProcess += o._rotateSpeed;
      o._turnoverDashboard.setData(turnover * o._rotateProcess);
      o._perDashboard.setData(per * o._rotateProcess);
      o._inOutDashboard.setData(inOut * o._rotateProcess);
      o._performanceDashboard.setData(performance * o._rotateProcess);
   }
}
MO.FEaiCockpitStatusSnapshot_dispose = function FEaiCockpitStatusSnapshot_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitStatusSnapshotDashboard = function FEaiCockpitStatusSnapshotDashboard(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data              = 0;
   o._textPre           = MO.Class.register(o, [new MO.APtyString('_textPre'), new MO.AGetSet('_textPre')], "");
   o._dashboardImage    = null;
   o._dashboardUri      = '{eai.resource}/cockpit/status/dashboard.png'
   o._circleImage       = null;
   o._circleRect        = null;
   o._textVisible       = null;
   o.construct          = MO.FEaiCockpitStatusSnapshotDashboard_construct;
   o.onImageLoad        = MO.FEaiCockpitStatusSnapshotDashboard_onImageLoad;
   o.setData            = MO.FEaiCockpitStatusSnapshotDashboard_setData;
   o.setTextVisible     = MO.FEaiCockpitStatusSnapshotDashboard_setTextVisible;
   o.setDashboardImage  = MO.FEaiCockpitStatusSnapshotDashboard_setDashboardImage;
   o.onPaintBegin       = MO.FEaiCockpitStatusSnapshotDashboard_onPaintBegin;
   o.dispose            = MO.FEaiCockpitStatusSnapshotDashboard_dispose;
   return o;
}
MO.FEaiCockpitStatusSnapshotDashboard_construct = function FEaiCockpitStatusSnapshotDashboard_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o.setSize(512, 512);
   o._circleRect = new MO.SRectangle();
   o._dashboardImage = o.loadResourceImage(o._dashboardUri);
   o._dashboardImage.addLoadListener(o, o.onImageLoad);
   o._circleImage = o.loadResourceImage('{eai.resource}/cockpit/status/circle.png');
   o._circleImage.addLoadListener(o, o.onImageLoad);
}
MO.FEaiCockpitStatusSnapshotDashboard_onImageLoad = function FEaiCockpitStatusSnapshotDashboard_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitStatusSnapshotDashboard_setData = function FEaiCockpitStatusSnapshotDashboard_setData(data) {
   var o = this;
   o._data = data;
   o.dirty();
}
MO.FEaiCockpitStatusSnapshotDashboard_setTextVisible = function FEaiCockpitStatusSnapshotDashboard_setTextVisible(data) {
   var o = this;
   o._textVisible = data;
}
MO.FEaiCockpitStatusSnapshotDashboard_setDashboardImage = function FEaiCockpitStatusSnapshotDashboard_setDashboardImage(data) {
   var o = this;
   o._dashboardUri = data;
   o._dashboardImage = o.loadResourceImage(o._dashboardUri);
}
MO.FEaiCockpitStatusSnapshotDashboard_onPaintBegin = function FEaiCockpitStatusSnapshotDashboard_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var imageScale = 1.0;
   var lineWidth = 4;
   var dashboardWidth = 272 * imageScale;
   var dashboardHeight = 147 * imageScale;
   var lineLen = 118 * imageScale;
   var colorCircleRadius = 90 * imageScale;
   var centerX = left + dashboardWidth/2 * imageScale;
   var centerY = top + (dashboardHeight - 10) * imageScale;
   var textY = top + (dashboardHeight + 28) * imageScale;
   var maxRadian = Math.PI * 1.00;
   var radianOffset = (maxRadian - Math.PI) / 2;
   var circleImageWidth = 25 * imageScale;
   var circleImageHeight = 25 * imageScale;
   var data = o._data;
   var reddata = parseInt(255 * data / 120 * 2);
   reddata = reddata > 255 ? 255 : reddata;
   var red = reddata.toString(16);
   if(red.length == 1) red = "0" + red;
   graphic.drawImage(o._dashboardImage, left, top, dashboardWidth, dashboardHeight);
   var radian = data / 100 * maxRadian - radianOffset;
   var toX = -lineLen * Math.cos(radian) + centerX;
   var toY = -lineLen * Math.sin(radian) + centerY;
   graphic.setShadow("2", "2", "5", "#000000");
   graphic.drawLine(centerX - 4, centerY, toX, toY, "#FF2E1B", lineWidth);
   graphic.drawLine(centerX + 4, centerY, toX, toY, "#FF2E1B", lineWidth);
   graphic.clearShadow();
   graphic.drawImage(o._circleImage, centerX - circleImageWidth / 2, centerY - circleImageHeight / 2, circleImageWidth, circleImageHeight);
   var color = '#ffe721';
   graphic.setFont('bold 24px Microsoft YaHei');
   graphic.setShadow("1", "1", "5", "#000000");
   var visible = o._textVisible;
   if (visible != true){
      var text = o._textPre + "(" + data.toFixed(1).toString() + "%)";
      var textWidth = graphic.textWidth(text);
      var textLeft = centerX - textWidth/2;
      graphic.drawText(text, textLeft, textY, color);
   }
   graphic.clearShadow();
}
MO.FEaiCockpitStatusSnapshotDashboard_dispose = function FEaiCockpitStatusSnapshotDashboard_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
   o._circleRect.dispose();
}
MO.FEaiCockpitStatusView = function FEaiCockpitStatusView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name                 = 'cockpit.forecast.snapshot';
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiCockpitStatusView_onImageLoad;
   o.onPaintBegin          = MO.FEaiCockpitStatusView_onPaintBegin;
   o.construct             = MO.FEaiCockpitStatusView_construct;
   o.setup                 = MO.FEaiCockpitStatusView_setup;
   o.processLogic          = MO.FEaiCockpitStatusView_processLogic;
   o.dispose               = MO.FEaiCockpitStatusView_dispose;
   return o;
}
MO.FEaiCockpitStatusView_onImageLoad = function FEaiCockpitStatusView_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitStatusView_onPaintBegin = function FEaiCockpitStatusView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitStatusView_construct = function FEaiCockpitStatusView_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitStatusView_setup = function FEaiCockpitStatusView_setup(){
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
}
MO.FEaiCockpitStatusView_processLogic = function FEaiCockpitStatusView_processLogic(){
   var o = this;
}
MO.FEaiCockpitStatusView_dispose = function FEaiCockpitStatusView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
