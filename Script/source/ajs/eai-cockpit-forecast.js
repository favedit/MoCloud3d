MO.FEaiCockpitForecast = function FEaiCockpitForecast(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'forecast';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitForecast_construct;
   o.setup      = MO.FEaiCockpitForecast_setup;
   o.process    = MO.FEaiCockpitForecast_process;
   o.dispose    = MO.FEaiCockpitForecast_dispose;
   return o;
}
MO.FEaiCockpitForecast_construct = function FEaiCockpitForecast_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitForecast_setup = function FEaiCockpitForecast_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastView);
   o.setupModuleManager(MO.FEaiCockpitForecastModuleManager);
}
MO.FEaiCockpitForecast_process = function FEaiCockpitForecast_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitForecast_dispose = function FEaiCockpitForecast_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitForecastAchievementProblem = function FEaiCockpitForecastAchievementProblem(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.problem.010';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastAchievementProblem_construct;
   o.setup       = MO.FEaiCockpitForecastAchievementProblem_setup;
   o.process     = MO.FEaiCockpitForecastAchievementProblem_process;
   o.dispose     = MO.FEaiCockpitForecastAchievementProblem_dispose;
   return o;
}
MO.FEaiCockpitForecastAchievementProblem_construct = function FEaiCockpitForecastAchievementProblem_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastAchievementProblem_setup = function FEaiCockpitForecastAchievementProblem_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastAchievementProblemSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastAchievementProblemView);
}
MO.FEaiCockpitForecastAchievementProblem_process = function FEaiCockpitForecastAchievementProblem_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastAchievementProblem_dispose = function FEaiCockpitForecastAchievementProblem_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastAchievementProblemSnapshot = function FEaiCockpitForecastAchievementProblemSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._dataTicker    = null;
   o._titleImage    = null;
   o._tableImage    = null;
   o._chart         = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastAchievementProblemSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastAchievementProblemSnapshot_onPaintEnd;
   o.onDataFetch    = MO.FEaiCockpitForecastAchievementProblemSnapshot_onDataFetch;
   o._data          = MO.Class.register(o, new MO.AGetSet('_data'));;
   o.construct      = MO.FEaiCockpitForecastAchievementProblemSnapshot_construct;
   o.setup          = MO.FEaiCockpitForecastAchievementProblemSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastAchievementProblemSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastAchievementProblemSnapshot_dispose;
   o.refreshData    = MO.FEaiCockpitForecastAchievementProblemSnapshot_refreshData;
   o.refreshChartData   = MO.FEaiCockpitForecastAchievementProblemSnapshot_refreshChartData;
   return o;
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_refreshChartData = function FEaiCockpitForecastAchievementProblemSnapshot_refreshChartData(event){
   var o = this;
   var data = o._data;
   var dataset = o._chartDataset;
   var serieses = dataset.serieses();
   var series = serieses.get(0);
   series.values().clear();
   var chart = o._chart;
   chart.axisX().degrees().clear();
   var items = data.datas();
   if(!items){
      return;
   }
   var count = items.count();
   for (var i = 0; i < count; i++) {
      var item = items.at(i);
      var label = item.departmentLable();
         switch(label){
         case '合作—德聚公司':
         label = '合作—德';
         break;
         case "上海聚汇通":
         label = '上海聚汇';
         break;
         case "上海仁立网络科技有限公司":
         label = '上海仁立';
         break;
         case "卓信至诚公司":
         label = '卓信至诚';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "多元营销事业部":
         label = '多元营销';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "金易融(上海)网络科技有限公司":
         label = '金易融';
         break;
         case "赛杰思公司":
         label = '赛杰思';
         break;
         case "安信普华财富投资管理（北京）有限公司":
         label = '安信普华';
         break;
         case "在线营销事业部":
         label = '在线营销';
         break;
         case "深圳前海志赢商务信息咨询有限公司":
         label = '深圳前海';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "融泰公司（安徽）":
         label = '融泰公司';
         break;
         case "汇仕达金融渠道部":
         label = '汇仕达';
         break;
         case "深圳前海智赢商务信息咨询有限公司":
         label = '深圳前海';
         break;
         default:
         break;
      }
      var value = item.noMarketer();
      series.values().push(value);
      var degree = MO.Class.create(MO.FUiChartAxisDegree);
      degree.setLabel(label);
      chart.axisX().pushDegree(degree);
   }
   var axisY = chart.axisY();
   axisY.createDegreesStandard(dataset.standardCor(2));
   axisY.formatLabels();
   o.dirty();
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_onDataFetch = function FEaiCockpitForecastAchievementProblemSnapshot_onDataFetch(event){
   var o = this;
   var data = o._data;
   data.unserializeSignBuffer(event.sign, event.content, true);
   if(data){
    o.refreshData(data);
    o.refreshChartData(data);
   }
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_refreshData = function FEaiCockpitForecastAchievementProblemSnapshot_refreshData(data) {
    var o = this;
    var datas = data.datas();
    if (!datas||datas._count==0) {
       return;
    }
    var grid = o._gridControl;
    grid.clearRows();
    for(var i=0;i<3;i++){
    row = grid.allocRow();
    row.set('departmentLable', datas.at(i).departmentLable().toString());
    row.set('marketerTotal',  parseInt(datas.at(i).marketerTotal()).toString());
    row.set('noAchieveMarketer',  parseInt(datas.at(i).noMarketer()).toString());
    row.set('rate',  parseInt((datas.at(i).Rate()*100)).toString());
    row.set('noAchieveYear',  parseInt(datas.at(i).noAchYear()).toString());
    grid.pushRow(row);
    }
    o.dirty();
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_onPaintBegin = function FEaiCockpitForecastAchievementProblemSnapshot_onPaintBegin(event){
   var o = this;
   var data  = o._data ;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
    graphic.drawImage(o._titleImage, left + 15 , top + 6);
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_onPaintEnd = function FEaiCockpitForecastAchievementProblemSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_construct = function FEaiCockpitForecastAchievementProblemSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 5, 0);
   o._cellSize.set(6, 4);
   o._dataTicker = new MO.TTicker(1000 * 10);
   o._data = MO.Class.create(MO.FEaiCockpitForecastMessageAchievementProblemDatas);
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_setup = function FEaiCockpitForecastAchievementProblemSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._titleImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/noInvestment_title.png');
   o._tableImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/grid_title.png');
   var grid = o._gridControl = MO.Class.create(MO.FGuiGridControl);
   grid.setOptionClip(false);
   grid.setLocation(0, 320);
   grid.setSize(100, 100);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right | MO.EUiAnchor.Bottom);
   grid.setLeft(20);
   grid.setRight(20);
   grid.setBottom(20);
   grid.setHeadHeight(35);
   grid.setHeadBackgroundUri('{eai.resource}/cockpit/forecast/grid_title.png');
   grid.setHeadBackColor('rgba(255,255,255,0)');
   grid.setOuterLineColor('#567a74');
   grid.setOuterLineThickness(1);
   grid.setInnerLineColor('#567a74');
   grid.setInnerLineThickness(1);
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 20;
   grid.headFont().color = '#20f2ff';
   grid.headFont().bold = true;
   grid.setRowHeight(35);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.setBackColor('rgba(0,0,0,0.3)');
   grid.setup();
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('departmentLable');
   column.setLabel('公司');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setDataName('departmentLable');
   column.setWidth(90);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('marketerTotal');
   column.setLabel('理财师人数');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(40);
   column.setDataName('marketerTotal');
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('noAchieveMarketer');
   column.setLabel('无业绩人数');
   column.setDataName('noAchieveMarketer');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(50);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('rate');
   column.setLabel('占比');
   column.setDataName('rate');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(30);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('noAchieveYear');
   column.setLabel('一年无业绩人数');
   column.setDataName('noAchieveYear');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(70);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   o.push(grid);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartBarPainter);
   chart.setLocation(30, 60);
   chart.setSize(720, 200);
   chart.paintRectangle().set(20, 0, 600, 180);
   chart.axisX().setOptionShowAxis(false);
   chart.axisY().setOptionShowAxis(false);
   chart.axisY().setOptionShowLabel(false);
   chart.axisY().setOptionShowFirstLine(true);
   chart.axisX().setOptionLabelVertical(true);
   chart.axisX().font().parse("#fee823 16px Microsoft YaHei");
   chart.axisY().setDivisor(10000000);
   o.push(chart);
   var dataset = o._chartDataset = MO.Class.create(MO.FUiChartDataset);
   var series = MO.Class.create(MO.FUiChartDataSeries);
   series.setOptionShowBorder(false);
   series.setFillGradient([['0', '#20d3de'], ['0.5', '#237394'], ['1.0', '#252f62']]);
   series.setRectWidth(25);
   dataset.push(series);
   chart.setDataset(dataset);
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_processLogic = function FEaiCockpitForecastAchievementProblemSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if(o._dataTicker.process()){
      var forecast = MO.Console.find(MO.FEaiLogicConsole).cockpit().forecast();
      forecast.doFetchAchievementProblem(o, o.onDataFetch);
   }
}
MO.FEaiCockpitForecastAchievementProblemSnapshot_dispose = function FEaiCockpitForecastAchievementProblemSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastAchievementProblemView = function FEaiCockpitForecastAchievementProblemView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastAchievementProblemView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastAchievementProblemView_construct;
   o.setup        = MO.FEaiCockpitForecastAchievementProblemView_setup;
   o.processLogic = MO.FEaiCockpitForecastAchievementProblemView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastAchievementProblemView_dispose;
   return o;
}
MO.FEaiCockpitForecastAchievementProblemView_onPaintBegin = function FEaiCockpitForecastAchievementProblemView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastAchievementProblemView_construct = function FEaiCockpitForecastAchievementProblemView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastAchievementProblemView_setup = function FEaiCockpitForecastAchievementProblemView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastAchievementProblemView_processLogic = function FEaiCockpitForecastAchievementProblemView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastAchievementProblemView_dispose = function FEaiCockpitForecastAchievementProblemView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastCatalog = function FEaiCockpitForecastCatalog(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.catalog';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastCatalog_construct;
   o.setup       = MO.FEaiCockpitForecastCatalog_setup;
   o.process     = MO.FEaiCockpitForecastCatalog_process;
   o.dispose     = MO.FEaiCockpitForecastCatalog_dispose;
   return o;
}
MO.FEaiCockpitForecastCatalog_construct = function FEaiCockpitForecastCatalog_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastCatalog_setup = function FEaiCockpitForecastCatalog_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastCatalogSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastCatalogView);
}
MO.FEaiCockpitForecastCatalog_process = function FEaiCockpitForecastCatalog_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastCatalog_dispose = function FEaiCockpitForecastCatalog_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastCatalogSnapshot = function FEaiCockpitForecastCatalogSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/catalog.png';
   o.onPaintBegin   = MO.FEaiCockpitForecastCatalogSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastCatalogSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastCatalogSnapshot_construct;
   o.setup          = MO.FEaiCockpitForecastCatalogSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastCatalogSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastCatalogSnapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastCatalogSnapshot_onPaintBegin = function FEaiCockpitForecastCatalogSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastCatalogSnapshot_onPaintEnd = function FEaiCockpitForecastCatalogSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastCatalogSnapshot_construct = function FEaiCockpitForecastCatalogSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(2, 8);
}
MO.FEaiCockpitForecastCatalogSnapshot_setup = function FEaiCockpitForecastCatalogSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitForecastCatalogSnapshot_processLogic = function FEaiCockpitForecastCatalogSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastCatalogSnapshot_dispose = function FEaiCockpitForecastCatalogSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastCatalogView = function FEaiCockpitForecastCatalogView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastCatalogView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastCatalogView_construct;
   o.setup        = MO.FEaiCockpitForecastCatalogView_setup;
   o.processLogic = MO.FEaiCockpitForecastCatalogView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastCatalogView_dispose;
   return o;
}
MO.FEaiCockpitForecastCatalogView_onPaintBegin = function FEaiCockpitForecastCatalogView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastCatalogView_construct = function FEaiCockpitForecastCatalogView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastCatalogView_setup = function FEaiCockpitForecastCatalogView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastCatalogView_processLogic = function FEaiCockpitForecastCatalogView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastCatalogView_dispose = function FEaiCockpitForecastCatalogView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastIndex = function FEaiCockpitForecastIndex(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.index';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastIndex_construct;
   o.setup       = MO.FEaiCockpitForecastIndex_setup;
   o.process     = MO.FEaiCockpitForecastIndex_process;
   o.dispose     = MO.FEaiCockpitForecastIndex_dispose;
   return o;
}
MO.FEaiCockpitForecastIndex_construct = function FEaiCockpitForecastIndex_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastIndex_setup = function FEaiCockpitForecastIndex_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastIndexSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastIndexView);
}
MO.FEaiCockpitForecastIndex_process = function FEaiCockpitForecastIndex_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastIndex_dispose = function FEaiCockpitForecastIndex_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastIndexData = function FEaiCockpitForecastIndexData(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._registercount     = MO.Class.register(o, [new MO.AGetter('_registercount'), new MO.APersistence('_registercount', MO.EDataType.Int32)]);
   o._investmenttotal   = MO.Class.register(o, [new MO.AGetter('_investmenttotal'), new MO.APersistence('_investmenttotal', MO.EDataType.Double)]);
   o._weekinvestment    = MO.Class.register(o, [new MO.AGetter('_weekinvestment'), new MO.APersistence('_weekinvestment', MO.EDataType.Double)]);
   o._entrycount        = MO.Class.register(o, [new MO.AGetter('_entrycount'), new MO.APersistence('_entrycount', MO.EDataType.Int32)]);
   o._workplacecount    = MO.Class.register(o, [new MO.AGetter('_workplacecount'), new MO.APersistence('_workplacecount', MO.EDataType.Int32)]);
   o._investmentcount   = MO.Class.register(o, [new MO.AGetter('_investmentcount'), new MO.APersistence('_investmentcount', MO.EDataType.Int32)]);
   o._averageinvestment = MO.Class.register(o, [new MO.AGetter('_averageinvestment'), new MO.APersistence('_averageinvestment', MO.EDataType.Double)]);
   o._weekredemption    = MO.Class.register(o, [new MO.AGetter('_weekredemption'), new MO.APersistence('_weekredemption', MO.EDataType.Double)]);
   o._leavecount        = MO.Class.register(o, [new MO.AGetter('_leavecount'), new MO.APersistence('_leavecount', MO.EDataType.Int32)]);
   o._wealthcompany     = MO.Class.register(o, [new MO.AGetter('_wealthcompany'), new MO.APersistence('_wealthcompany', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitForecastIndexSnapshot = function FEaiCockpitForecastIndexSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/index.png';
   o._data          = null;
   o._dataTicker    = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastIndexSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastIndexSnapshot_onPaintEnd;
   o.onIndexFetch   = MO.FEaiCockpitForecastIndexSnapshot_onIndexFetch;
   o.construct      = MO.FEaiCockpitForecastIndexSnapshot_construct;
   o.setup          = MO.FEaiCockpitForecastIndexSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastIndexSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastIndexSnapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastIndexSnapshot_onPaintBegin = function FEaiCockpitForecastIndexSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.setFont('16px Microsoft YaHei');
   if (o._data != null && o._data.registercount() != null)
   {
      graphic.drawText("今日新增注册用户:", left + 20, top + 99, "#ffffff");
      graphic.drawText(o._data.registercount(), left + 161, top + 99, "#ffe721");
      graphic.drawText("本周总投资:", left + 20, top + 139, "#ffffff");
      graphic.drawText(o._data.investmenttotal() + "亿", left + 107, top + 139, "#ffe721");
      graphic.drawText("未来一周赎回:", left + 20, top + 179, "#ffffff");
      graphic.drawText(o._data.weekinvestment() + "亿", left + 125, top + 179, "#ffe721");
      graphic.drawText("本月入职人数:", left + 20, top + 219, "#ffffff");
      graphic.drawText(o._data.entrycount() , left + 125, top + 219, "#ffe721");
      graphic.drawText("本月新增职场:", left + 20, top + 259, "#ffffff");
      graphic.drawText(o._data.workplacecount() + "个", left + 125, top + 259, "#ffe721");
      graphic.drawText("本日新增投资用户:", left + 20, top + 299, "#ffffff");
      graphic.drawText(o._data.investmentcount() + "人", left + 161, top + 299, "#ffe721");
      graphic.drawText("本周人均投资额:", left + 20, top + 339, "#ffffff");
      graphic.drawText(o._data.averageinvestment() + "元", left + 143, top + 339, "#ffe721");
      graphic.drawText("未来一周赎回:", left + 20, top + 379, "#ffffff");
      graphic.drawText(o._data.weekredemption() + "亿", left + 125, top + 379, "#ffe721");
      graphic.drawText("本月离职人数:", left + 20, top + 419, "#ffffff");
      graphic.drawText(o._data.leavecount() + "人", left + 125, top + 419, "#ffe721");
      graphic.drawText("本月新增财富端公司:", left + 20, top + 459, "#ffffff");
      graphic.drawText(o._data.wealthcompany() + "个", left + 179, top + 459, "#ffe721");
   }
}
MO.FEaiCockpitForecastIndexSnapshot_onPaintEnd = function FEaiCockpitForecastIndexSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastIndexSnapshot_construct = function FEaiCockpitForecastIndexSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(14, 1, 0);
   o._cellSize.set(2, 5);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._data = MO.Class.create(MO.FEaiCockpitForecastIndexData);
}
MO.FEaiCockpitForecastIndexSnapshot_setup = function FEaiCockpitForecastIndexSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitForecastIndexSnapshot_onIndexFetch = function FEaiCockpitForecastIndexSnapshot_onIndexFetch(event) {
   var o = this;
   var data = o._data;
   data.unserializeSignBuffer(event.sign, event.content, true);
}
MO.FEaiCockpitForecastIndexSnapshot_processLogic = function FEaiCockpitForecastIndexSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if (o._dataTicker.process()) {
      var index = MO.Console.find(MO.FEaiLogicConsole).cockpit().forecast();
      index.doFetchExponentForecast(o, o.onIndexFetch);
   }
   o.dirty();
}
MO.FEaiCockpitForecastIndexSnapshot_dispose = function FEaiCockpitForecastIndexSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastIndexView = function FEaiCockpitForecastIndexView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastIndexView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastIndexView_construct;
   o.setup        = MO.FEaiCockpitForecastIndexView_setup;
   o.processLogic = MO.FEaiCockpitForecastIndexView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastIndexView_dispose;
   return o;
}
MO.FEaiCockpitForecastIndexView_onPaintBegin = function FEaiCockpitForecastIndexView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastIndexView_construct = function FEaiCockpitForecastIndexView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastIndexView_setup = function FEaiCockpitForecastIndexView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastIndexView_processLogic = function FEaiCockpitForecastIndexView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastIndexView_dispose = function FEaiCockpitForecastIndexView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastListBoxItem = function FEaiCockpitForecastListBoxItem(o) {
   o = MO.Class.inherits(this, o, MO.FGuiListBoxItem);
   o._data        = null;
   o._isSelected  = MO.Class.register(o, new MO.AGetSet('_isSelected'), false);
   o._font1stRowW = null;
   o._font1stRowY = null;
   o._font2ndRowW = null;
   o._font2ndRowY = null;
   o.construct    = MO.FEaiCockpitForecastListBoxItem_construct;
   o.setup        = MO.FEaiCockpitForecastListBoxItem_setup;
   o.draw         = MO.FEaiCockpitForecastListBoxItem_draw;
   o.dispose      = MO.FEaiCockpitForecastListBoxItem_dispose;
   return o;
}
MO.FEaiCockpitForecastListBoxItem_construct = function FEaiCockpitForecastListBoxItem_construct() {
   var o = this;
   o.__base.FGuiListBoxItem.construct.call(o);
   o._font1stRowW = new MO.SUiFont();
   o._font1stRowY = new MO.SUiFont();
   o._font2ndRowW = new MO.SUiFont();
   o._font2ndRowY = new MO.SUiFont();
}
MO.FEaiCockpitForecastListBoxItem_setup = function FEaiCockpitForecastListBoxItem_setup(data){
   var o = this;
   o._data = data;
   o._font1stRowW.parse('bold #FFFFFF 18px Microsoft YaHei');
   o._font1stRowY.parse('bold #FFFFFF 18px Microsoft YaHei');
   o._font2ndRowW.parse('bold #FFEC3B 17px Microsoft YaHei');
   o._font2ndRowY.parse('bold #FFEC3B 17px Microsoft YaHei');
}
MO.FEaiCockpitForecastListBoxItem_draw = function FEaiCockpitForecastListBoxItem_draw(graphic, rectangle){
   var o = this;
   var data = o._data;
   var dataLabel = data.label();
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var drawX = left + 26;
   var drawY = top + 34;
   var font1stRowW = o.isSelected() ? o._font2ndRowW : o._font1stRowW;
   var font1stRowY = o.isSelected() ? o._font2ndRowY : o._font1stRowY;
   var drawText = '● ';
   var textWidth = 0;
   graphic.setFont(font1stRowW.toString());
   graphic.drawText(drawText, drawX, drawY, font1stRowW.color);
   textWidth = graphic.textWidth(drawText);
   drawX += textWidth;
   graphic.setFont(font1stRowY.toString());
   graphic.drawText(dataLabel, drawX, drawY, font1stRowY.color);
   drawX = 580;
}
MO.FEaiCockpitForecastListBoxItem_dispose = function FEaiCockpitForecastListBoxItem_dispose(){
   var o = this;
   o._bgImageNormal = MO.Lang.Object.dispose(o._bgImageNormal);
   o._bgImageSelected = MO.Lang.Object.dispose(o._bgImageSelected);
   o._pbarBgImage = MO.Lang.Object.dispose(o._pbarBgImage);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic001 = function FEaiCockpitForecastLogic001(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.001';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic001_construct;
   o.setup       = MO.FEaiCockpitForecastLogic001_setup;
   o.process     = MO.FEaiCockpitForecastLogic001_process;
   o.dispose     = MO.FEaiCockpitForecastLogic001_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic001_construct = function FEaiCockpitForecastLogic001_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic001_setup = function FEaiCockpitForecastLogic001_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic001Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic001View);
}
MO.FEaiCockpitForecastLogic001_process = function FEaiCockpitForecastLogic001_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic001_dispose = function FEaiCockpitForecastLogic001_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic001Snapshot = function FEaiCockpitForecastLogic001Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic001Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic001Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic001Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic001Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic001Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic001Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic001Snapshot_onPaintBegin = function FEaiCockpitForecastLogic001Snapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic001Snapshot_onPaintEnd = function FEaiCockpitForecastLogic001Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic001Snapshot_construct = function FEaiCockpitForecastLogic001Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 1, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic001Snapshot_setup = function FEaiCockpitForecastLogic001Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic1.png');
}
MO.FEaiCockpitForecastLogic001Snapshot_processLogic = function FEaiCockpitForecastLogic001Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic001Snapshot_dispose = function FEaiCockpitForecastLogic001Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic001View = function FEaiCockpitForecastLogic001View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic001View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic001View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic001View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic001View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic001View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic001View_onPaintBegin = function FEaiCockpitForecastLogic001View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic001View_construct = function FEaiCockpitForecastLogic001View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic001View_setup = function FEaiCockpitForecastLogic001View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic001View_processLogic = function FEaiCockpitForecastLogic001View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic001View_dispose = function FEaiCockpitForecastLogic001View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic003 = function FEaiCockpitForecastLogic003(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.003';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic003_construct;
   o.setup       = MO.FEaiCockpitForecastLogic003_setup;
   o.process     = MO.FEaiCockpitForecastLogic003_process;
   o.dispose     = MO.FEaiCockpitForecastLogic003_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic003_construct = function FEaiCockpitForecastLogic003_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic003_setup = function FEaiCockpitForecastLogic003_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic003Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic003View);
}
MO.FEaiCockpitForecastLogic003_process = function FEaiCockpitForecastLogic003_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic003_dispose = function FEaiCockpitForecastLogic003_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic003Snapshot = function FEaiCockpitForecastLogic003Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic003Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic003Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic003Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic003Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic003Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic003Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic003Snapshot_onPaintBegin = function FEaiCockpitForecastLogic003Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic003Snapshot_onPaintEnd = function FEaiCockpitForecastLogic003Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic003Snapshot_construct = function FEaiCockpitForecastLogic003Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 17, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic003Snapshot_setup = function FEaiCockpitForecastLogic003Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic3.png');
}
MO.FEaiCockpitForecastLogic003Snapshot_processLogic = function FEaiCockpitForecastLogic003Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic003Snapshot_dispose = function FEaiCockpitForecastLogic003Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic003View = function FEaiCockpitForecastLogic003View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic003View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic003View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic003View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic003View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic003View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic003View_onPaintBegin = function FEaiCockpitForecastLogic003View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic003View_construct = function FEaiCockpitForecastLogic003View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic003View_setup = function FEaiCockpitForecastLogic003View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic003View_processLogic = function FEaiCockpitForecastLogic003View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic003View_dispose = function FEaiCockpitForecastLogic003View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic004 = function FEaiCockpitForecastLogic004(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.004';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic004_construct;
   o.setup       = MO.FEaiCockpitForecastLogic004_setup;
   o.process     = MO.FEaiCockpitForecastLogic004_process;
   o.dispose     = MO.FEaiCockpitForecastLogic004_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic004_construct = function FEaiCockpitForecastLogic004_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic004_setup = function FEaiCockpitForecastLogic004_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic004Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic004View);
}
MO.FEaiCockpitForecastLogic004_process = function FEaiCockpitForecastLogic004_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic004_dispose = function FEaiCockpitForecastLogic004_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic004Snapshot = function FEaiCockpitForecastLogic004Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic004Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic004Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic004Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic004Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic004Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic004Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic004Snapshot_onPaintBegin = function FEaiCockpitForecastLogic004Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic004Snapshot_onPaintEnd = function FEaiCockpitForecastLogic004Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic004Snapshot_construct = function FEaiCockpitForecastLogic004Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 17, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic004Snapshot_setup = function FEaiCockpitForecastLogic004Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic4.png');
}
MO.FEaiCockpitForecastLogic004Snapshot_processLogic = function FEaiCockpitForecastLogic004Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic004Snapshot_dispose = function FEaiCockpitForecastLogic004Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic004View = function FEaiCockpitForecastLogic004View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic004View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic004View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic004View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic004View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic004View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic004View_onPaintBegin = function FEaiCockpitForecastLogic004View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic004View_construct = function FEaiCockpitForecastLogic004View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic004View_setup = function FEaiCockpitForecastLogic004View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic004View_processLogic = function FEaiCockpitForecastLogic004View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic004View_dispose = function FEaiCockpitForecastLogic004View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic005 = function FEaiCockpitForecastLogic005(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.005';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic005_construct;
   o.setup       = MO.FEaiCockpitForecastLogic005_setup;
   o.process     = MO.FEaiCockpitForecastLogic005_process;
   o.dispose     = MO.FEaiCockpitForecastLogic005_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic005_construct = function FEaiCockpitForecastLogic005_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic005_setup = function FEaiCockpitForecastLogic005_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic005Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic005View);
}
MO.FEaiCockpitForecastLogic005_process = function FEaiCockpitForecastLogic005_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic005_dispose = function FEaiCockpitForecastLogic005_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic005Snapshot = function FEaiCockpitForecastLogic005Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic005Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic005Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic005Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic005Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic005Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic005Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic005Snapshot_onPaintBegin = function FEaiCockpitForecastLogic005Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic005Snapshot_onPaintEnd = function FEaiCockpitForecastLogic005Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic005Snapshot_construct = function FEaiCockpitForecastLogic005Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 9, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic005Snapshot_setup = function FEaiCockpitForecastLogic005Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic5.png');
}
MO.FEaiCockpitForecastLogic005Snapshot_processLogic = function FEaiCockpitForecastLogic005Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic005Snapshot_dispose = function FEaiCockpitForecastLogic005Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic005View = function FEaiCockpitForecastLogic005View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic005View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic005View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic005View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic005View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic005View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic005View_onPaintBegin = function FEaiCockpitForecastLogic005View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic005View_construct = function FEaiCockpitForecastLogic005View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic005View_setup = function FEaiCockpitForecastLogic005View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic005View_processLogic = function FEaiCockpitForecastLogic005View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic005View_dispose = function FEaiCockpitForecastLogic005View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic006 = function FEaiCockpitForecastLogic006(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.006';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic006_construct;
   o.setup       = MO.FEaiCockpitForecastLogic006_setup;
   o.process     = MO.FEaiCockpitForecastLogic006_process;
   o.dispose     = MO.FEaiCockpitForecastLogic006_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic006_construct = function FEaiCockpitForecastLogic006_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic006_setup = function FEaiCockpitForecastLogic006_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic006Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic006View);
}
MO.FEaiCockpitForecastLogic006_process = function FEaiCockpitForecastLogic006_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic006_dispose = function FEaiCockpitForecastLogic006_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic006Snapshot = function FEaiCockpitForecastLogic006Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic006Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic006Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic006Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic006Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic006Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic006Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic006Snapshot_onPaintBegin = function FEaiCockpitForecastLogic006Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic006Snapshot_onPaintEnd = function FEaiCockpitForecastLogic006Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic006Snapshot_construct = function FEaiCockpitForecastLogic006Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 9, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic006Snapshot_setup = function FEaiCockpitForecastLogic006Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic6.png');
}
MO.FEaiCockpitForecastLogic006Snapshot_processLogic = function FEaiCockpitForecastLogic006Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic006Snapshot_dispose = function FEaiCockpitForecastLogic006Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic006View = function FEaiCockpitForecastLogic006View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic006View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic006View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic006View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic006View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic006View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic006View_onPaintBegin = function FEaiCockpitForecastLogic006View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic006View_construct = function FEaiCockpitForecastLogic006View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic006View_setup = function FEaiCockpitForecastLogic006View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic006View_processLogic = function FEaiCockpitForecastLogic006View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic006View_dispose = function FEaiCockpitForecastLogic006View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic007 = function FEaiCockpitForecastLogic007(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.007';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic007_construct;
   o.setup       = MO.FEaiCockpitForecastLogic007_setup;
   o.process     = MO.FEaiCockpitForecastLogic007_process;
   o.dispose     = MO.FEaiCockpitForecastLogic007_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic007_construct = function FEaiCockpitForecastLogic007_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic007_setup = function FEaiCockpitForecastLogic007_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic007Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic007View);
}
MO.FEaiCockpitForecastLogic007_process = function FEaiCockpitForecastLogic007_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic007_dispose = function FEaiCockpitForecastLogic007_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic007Snapshot = function FEaiCockpitForecastLogic007Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic007Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic007Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic007Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic007Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic007Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic007Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic007Snapshot_onPaintBegin = function FEaiCockpitForecastLogic007Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic007Snapshot_onPaintEnd = function FEaiCockpitForecastLogic007Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic007Snapshot_construct = function FEaiCockpitForecastLogic007Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 13, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic007Snapshot_setup = function FEaiCockpitForecastLogic007Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic7.png');
}
MO.FEaiCockpitForecastLogic007Snapshot_processLogic = function FEaiCockpitForecastLogic007Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic007Snapshot_dispose = function FEaiCockpitForecastLogic007Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic007View = function FEaiCockpitForecastLogic007View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic007View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic007View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic007View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic007View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic007View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic007View_onPaintBegin = function FEaiCockpitForecastLogic007View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic007View_construct = function FEaiCockpitForecastLogic007View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic007View_setup = function FEaiCockpitForecastLogic007View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic007View_processLogic = function FEaiCockpitForecastLogic007View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic007View_dispose = function FEaiCockpitForecastLogic007View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic008 = function FEaiCockpitForecastLogic008(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.008';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic008_construct;
   o.setup       = MO.FEaiCockpitForecastLogic008_setup;
   o.process     = MO.FEaiCockpitForecastLogic008_process;
   o.dispose     = MO.FEaiCockpitForecastLogic008_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic008_construct = function FEaiCockpitForecastLogic008_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic008_setup = function FEaiCockpitForecastLogic008_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic008Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic008View);
}
MO.FEaiCockpitForecastLogic008_process = function FEaiCockpitForecastLogic008_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic008_dispose = function FEaiCockpitForecastLogic008_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic008Snapshot = function FEaiCockpitForecastLogic008Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._contImage     = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic008Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic008Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic008Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic008Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic008Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic008Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic008Snapshot_onPaintBegin = function FEaiCockpitForecastLogic008Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   graphic.drawImage(o._contImage, left, top);
}
MO.FEaiCockpitForecastLogic008Snapshot_onPaintEnd = function FEaiCockpitForecastLogic008Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic008Snapshot_construct = function FEaiCockpitForecastLogic008Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 13, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic008Snapshot_setup = function FEaiCockpitForecastLogic008Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._contImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/logic8.png');
}
MO.FEaiCockpitForecastLogic008Snapshot_processLogic = function FEaiCockpitForecastLogic008Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic008Snapshot_dispose = function FEaiCockpitForecastLogic008Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic008View = function FEaiCockpitForecastLogic008View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic008View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic008View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic008View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic008View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic008View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic008View_onPaintBegin = function FEaiCockpitForecastLogic008View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic008View_construct = function FEaiCockpitForecastLogic008View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic008View_setup = function FEaiCockpitForecastLogic008View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic008View_processLogic = function FEaiCockpitForecastLogic008View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic008View_dispose = function FEaiCockpitForecastLogic008View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogic009 = function FEaiCockpitForecastLogic009(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.009';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogic009_construct;
   o.setup       = MO.FEaiCockpitForecastLogic009_setup;
   o.process     = MO.FEaiCockpitForecastLogic009_process;
   o.dispose     = MO.FEaiCockpitForecastLogic009_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic009_construct = function FEaiCockpitForecastLogic009_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogic009_setup = function FEaiCockpitForecastLogic009_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogic009Snapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogic009View);
}
MO.FEaiCockpitForecastLogic009_process = function FEaiCockpitForecastLogic009_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogic009_dispose = function FEaiCockpitForecastLogic009_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogic009Snapshot = function FEaiCockpitForecastLogic009Snapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o.onPaintBegin   = MO.FEaiCockpitForecastLogic009Snapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastLogic009Snapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastLogic009Snapshot_construct;
   o.setup          = MO.FEaiCockpitForecastLogic009Snapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastLogic009Snapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastLogic009Snapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic009Snapshot_onPaintBegin = function FEaiCockpitForecastLogic009Snapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic009Snapshot_onPaintEnd = function FEaiCockpitForecastLogic009Snapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogic009Snapshot_construct = function FEaiCockpitForecastLogic009Snapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 17, 0);
   o._cellSize.set(6, 4);
}
MO.FEaiCockpitForecastLogic009Snapshot_setup = function FEaiCockpitForecastLogic009Snapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitForecastLogic009Snapshot_processLogic = function FEaiCockpitForecastLogic009Snapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic009Snapshot_dispose = function FEaiCockpitForecastLogic009Snapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastLogic009View = function FEaiCockpitForecastLogic009View(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogic009View_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogic009View_construct;
   o.setup        = MO.FEaiCockpitForecastLogic009View_setup;
   o.processLogic = MO.FEaiCockpitForecastLogic009View_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogic009View_dispose;
   return o;
}
MO.FEaiCockpitForecastLogic009View_onPaintBegin = function FEaiCockpitForecastLogic009View_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogic009View_construct = function FEaiCockpitForecastLogic009View_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogic009View_setup = function FEaiCockpitForecastLogic009View_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogic009View_processLogic = function FEaiCockpitForecastLogic009View_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogic009View_dispose = function FEaiCockpitForecastLogic009View_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastLogicOwnVote = function FEaiCockpitForecastLogicOwnVote(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.logic.002';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastLogicOwnVote_construct;
   o.setup       = MO.FEaiCockpitForecastLogicOwnVote_setup;
   o.process     = MO.FEaiCockpitForecastLogicOwnVote_process;
   o.dispose     = MO.FEaiCockpitForecastLogicOwnVote_dispose;
   return o;
}
MO.FEaiCockpitForecastLogicOwnVote_construct = function FEaiCockpitForecastLogicOwnVote_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastLogicOwnVote_setup = function FEaiCockpitForecastLogicOwnVote_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastLogicOwnVoteSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastLogicOwnVoteView);
}
MO.FEaiCockpitForecastLogicOwnVote_process = function FEaiCockpitForecastLogicOwnVote_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastLogicOwnVote_dispose = function FEaiCockpitForecastLogicOwnVote_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastLogicOwnVoteData   = function FEaiCockpitForecastLogicOwnVoteData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._investmentSelf = MO.Class.register(o, [new MO.AGetter('_investmentSelf'),new MO.APersistence('_investmentSelf',MO.EDataType.Objects, MO.FEaiCockpitForecastLogicOwnVoteDataUnit)]);
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteDataUnit = function FEaiCockpitForecastLogicOwnVoteDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._department      	 = MO.Class.register(o, [new MO.AGetter('_department'), new MO.APersistence('_department', MO.EDataType.String)]);
   o._rmarketerId     	 = MO.Class.register(o, [new MO.AGetter('_rmarketerId'), new MO.APersistence('_rmarketerId', MO.EDataType.Uint64)]);
   o._investmentCount    = MO.Class.register(o, [new MO.AGetter('_investmentCount'), new MO.APersistence('_investmentCount', MO.EDataType.Int32)]);
   o._investmentTotal    = MO.Class.register(o, [new MO.AGetter('_investmentTotal'), new MO.APersistence('_investmentTotal', MO.EDataType.Double)]);
   o._redemptionTotal    = MO.Class.register(o, [new MO.AGetter('_redemptionTotal'), new MO.APersistence('_redemptionTotal', MO.EDataType.Double)]);
   o._netinvestmentTotal = MO.Class.register(o, [new MO.AGetter('_netinvestmentTotal'), new MO.APersistence('_netinvestmentTotal', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteHistogramData   = function FEaiCockpitForecastLogicOwnVoteHistogramData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._histogram = MO.Class.register(o, [new MO.AGetter('_histogram'),new MO.APersistence('_histogram',MO.EDataType.Objects, MO.FEaiCockpitForecastLogicOwnVoteHistogramDataUnit)]);
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteHistogramDataUnit = function FEaiCockpitForecastLogicOwnVoteHistogramDataUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._department    = MO.Class.register(o, [new MO.AGetter('_department'), new MO.APersistence('_department', MO.EDataType.String)]);
   o._marketerCount = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot = function FEaiCockpitForecastLogicOwnVoteSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri  = '{eai.resource}/cockpit/forecast/logic.png';
   o._titleImage     = null;
   o._gridTitle      = null;
   o._dataTicker     = null;
   o._largeInvests   = null;
   o._chart          = null;
   o._chartDataset   = null;
   o._investmentDate = MO.Class.register(o, new MO.AGetter('_investmentDate'));
   o._histogram      = MO.Class.register(o, new MO.AGetter('_histogram'));
   o.onPaintBegin    = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintBegin;
   o.onPaintEnd      = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintEnd;
   o.construct       = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_construct;
   o.setup           = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_setup;
   o.updateView      = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_updateView;
   o.updateHistogram = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_updateHistogram;
   o.processLogic    = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_processLogic;
   o.dispose         = MO.FEaiCockpitForecastLogicOwnVoteSnapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintBegin = function FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._titleImage, left + 15,top + 6);
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintEnd = function FEaiCockpitForecastLogicOwnVoteSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_construct = function FEaiCockpitForecastLogicOwnVoteSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(8, 1, 0);
   o._cellSize.set(6, 4);
   o._investmentDate = MO.Class.create(MO.FEaiCockpitForecastLogicOwnVoteData);
   o._histogram = MO.Class.create(MO.FEaiCockpitForecastLogicOwnVoteHistogramData);
   o._dataTicker = new MO.TTicker(1000 * 60 );
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_setup = function FEaiCockpitForecastLogicOwnVoteSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._titleImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/investment_title.png');
   o._gridTitle = o.loadResourceImage('{eai.resource}/cockpit/forecast/grid_title.png');
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartBarPainter);
   chart.setLocation(10, 35);
   chart.setSize(600, 200);
   chart.paintRectangle().set(50, 44, 580, 160);
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisY().setOptionShowAxis(false);
   chart.axisY().setOptionShowFirstLine(true);
   chart.axisX().setOptionLabelVertical(true);
   chart.axisX().setLabel("(子公司)");
   chart.axisX().font().parse("#fee823 12px Microsoft YaHei");
   chart.axisY().setLabel("(人数)");
   o.push(chart);
   var dataset = o._chartDataset = MO.Class.create(MO.FUiChartDataset);
   var series = MO.Class.create(MO.FUiChartDataSeries);
   series.setOptionShowBorder(false);
   series.setFillColor('#245b82');
   series.setRectWidth(30);
   dataset.push(series);
   chart.setDataset(dataset);
   var grid = o._gridRank = MO.Class.create(MO.FGuiGridControl);
   grid.setOptionClip(false);
   grid.setLocation(0, 320);
   grid.setSize(100, 100);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right | MO.EUiAnchor.Bottom);
   grid.setLeft(20);
   grid.setRight(20);
   grid.setBottom(20);
   grid.setHeadHeight(35);
   grid.setHeadBackgroundUri('{eai.resource}/cockpit/forecast/grid_title.png');
   grid.setHeadBackColor('rgba(255,255,255,0)');
   grid.setOuterLineColor('#567a74');
   grid.setOuterLineThickness(1);
   grid.setInnerLineColor('#567a74');
   grid.setInnerLineThickness(1);
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 20;
   grid.headFont().color = '#20f2ff';
   grid.headFont().bold = true;
   grid.setRowHeight(35);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.setBackColor('rgba(0,0,0,0.3)');
   grid.setup();
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('department');
   column.setLabel('所属公司');
   column.setDataName('department_data');
   column.setWidth(31);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('rmarketer');
   column.setLabel('理财师编号');
   column.setDataName('rmarketer_data');
   column.setWidth(20);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('investmentCount');
   column.setLabel('投资次数');
   column.setDataName('investment_ount');
   column.setWidth(15);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('investmentTotal');
   column.setLabel('投资额(万)');
   column.setDataName('investment_total');
   column.setWidth(18);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('redemptionTotal');
   column.setLabel('赎回额(万)');
   column.setDataName('redemption_total');
   column.setWidth(18);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('netinvestmentTotal');
   column.setLabel('净投额(万)');
   column.setDataName('netinvestment_total');
   column.setWidth(19);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
   var statistics = MO.Console.find(MO.FEaiLogicConsole).cockpit().forecast();
   if (o._dataTicker.process()){
      statistics.doFetchOwnVote(o, o.updateView);
      statistics.doFetchOwnVoteHistogram(o, o.updateHistogram);
   }
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_updateView = function FEaiCockpitForecastLogicOwnVoteSnapshot_updateView(event){
   var o = this;
   var content = event.content;
   var investmentDate = o._investmentDate;
   investmentDate.unserializeSignBuffer(event.sign, event.content, true);
   o._largeInvests = investmentDate.investmentSelf();
   var largeInvests = o._largeInvests;
   var grid = o._gridRank;
   grid.clearRows();
   var count = largeInvests.count();
   if( count != null){
      for (var i = 0; i < largeInvests.count(); i++) {
         var largeInvest = largeInvests.at(i);
         if (i < 3) {
            var row = grid.allocRow();
            row.set('department_data',largeInvest.department());
            row.set('rmarketer_data',largeInvest.rmarketerId());
            row.set('investment_ount',largeInvest.investmentCount());
            var investmentTotal = largeInvest.investmentTotal();
            row.set('investment_total',(investmentTotal / 10000 ).toFixed(1));
            var redemptionTotal = largeInvest.redemptionTotal();
            row.set('redemption_total',(redemptionTotal / 10000 ).toFixed(1));
            var netinvestmentTotal = largeInvest.netinvestmentTotal();
            row.set('netinvestment_total',(netinvestmentTotal / 10000 ).toFixed(1));
            grid.pushRow(row);
         }
      }
   }
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_updateHistogram = function FEaiCockpitForecastLogicOwnVoteSnapshot_updateHistogram(event){
   var o = this;
   var content = event.content;
   var histogramDate = o._histogram;
   histogramDate.unserializeSignBuffer(event.sign, event.content, true);
   var histograms = histogramDate.histogram();
   var count = histograms.count();
   var dataset = o._chartDataset;
   var serieses = dataset.serieses();
   var series = serieses.get(0);
   var chart = o._chart;
   series.values().clear();
   series.setFillGradient([['0', '#20d3de'], ['0.5', '#237394'], ['1.0', '#252f62']]);
   for (var i = 0; i < count; i++) {
         var histogram = histograms.at(i);
         var value = histogram.marketerCount();
         series.values().push(value);
         var label = histogram.department();
         switch(label){
            case '合作—德聚公司':
               label = '合作—德';
               break;
            case "上海聚汇通":
               label = '上海聚汇';
               break;
            case "上海仁立网络科技有限公司":
               label = '上海仁立';
               break;
            case "卓信至诚公司":
               label = '卓信至诚';
               break;
            case "深圳钰诚财富":
               label = '深圳钰诚';
               break;
            case "多元营销事业部":
               label = '多元营销';
               break;
            case "深圳钰诚财富":
               label = '深圳钰诚';
               break;
            case "金易融(上海)网络科技有限公司":
               label = '金易融';
               break;
            case "赛杰思公司":
               label = '赛杰思';
               break;
            case "安信普华财富投资管理（北京）有限公司":
               label = '安信普华';
               break;
            case "在线营销事业部":
               label = '在线营销';
               break;
            case "深圳前海志赢商务信息咨询有限公司":
               label = '深圳前海';
               break;
            case "深圳钰诚财富":
               label = '深圳钰诚';
               break;
            case "融泰公司（安徽）":
               label = '融泰公司';
               break;
            case "汇仕达金融渠道部":
               label = '汇仕达';
               break;
            case "深圳前海智赢商务信息咨询有限公司":
               label = '深圳前海';
               break;
            default:
               break;
         }
         var degree = MO.Class.create(MO.FUiChartAxisDegree);
         degree.setLabel(label);
         chart.axisX().pushDegree(degree);
         var axisY = chart.axisY();
         axisY.createDegreesStandard(dataset.standardCor(5));
         axisY.formatLabels();
   };
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_processLogic = function FEaiCockpitForecastLogicOwnVoteSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastLogicOwnVoteSnapshot_dispose = function FEaiCockpitForecastLogicOwnVoteSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
}
MO.FEaiCockpitForecastLogicOwnVoteView = function FEaiCockpitForecastLogicOwnVoteView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastLogicOwnVoteView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastLogicOwnVoteView_construct;
   o.setup        = MO.FEaiCockpitForecastLogicOwnVoteView_setup;
   o.processLogic = MO.FEaiCockpitForecastLogicOwnVoteView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastLogicOwnVoteView_dispose;
   return o;
}
MO.FEaiCockpitForecastLogicOwnVoteView_onPaintBegin = function FEaiCockpitForecastLogicOwnVoteView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastLogicOwnVoteView_construct = function FEaiCockpitForecastLogicOwnVoteView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastLogicOwnVoteView_setup = function FEaiCockpitForecastLogicOwnVoteView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastLogicOwnVoteView_processLogic = function FEaiCockpitForecastLogicOwnVoteView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastLogicOwnVoteView_dispose = function FEaiCockpitForecastLogicOwnVoteView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastMessage = function FEaiCockpitForecastMessage(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._items = MO.Class.register(o, [new MO.AGetter('_items'), new MO.APersistence('_items', MO.EDataType.Objects, MO.FEaiCockpitForecastMessageItem)]);
   return o;
}
MO.FEaiCockpitForecastMessageAchievementProblemData = function FEaiCockpitForecastMessageAchievementProblemData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._departmentLable          = MO.Class.register(o, [new MO.AGetter('_departmentLable'), new MO.APersistence('_departmentLable', MO.EDataType.String)]);
   o._marketerTotal            = MO.Class.register(o, [new MO.AGetter('_marketerTotal'), new MO.APersistence('_marketerTotal', MO.EDataType.Int32)]);
   o._noMarketer               = MO.Class.register(o, [new MO.AGetter('_noMarketer'), new MO.APersistence('_noMarketer', MO.EDataType.Int32)]);
   o._Rate                     = MO.Class.register(o, [new MO.AGetter('_Rate'), new MO.APersistence('_Rate', MO.EDataType.Double)]);
   o._noAchYear                = MO.Class.register(o, [new MO.AGetter('_noAchYear'), new MO.APersistence('_noAchYear',MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitForecastMessageAchievementProblemDatas = function FEaiCockpitForecastMessageAchievementProblemDatas(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._datas = MO.Class.register(o, [new MO.AGetter('_datas'), new MO.APersistence('_datas', MO.EDataType.Objects, MO.FEaiCockpitForecastMessageAchievementProblemData)]);
   return o;
}
MO.FEaiCockpitForecastMessageItem = function FEaiCockpitForecastMessageItem(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label = MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._units = MO.Class.register(o, [new MO.AGetter('_units'), new MO.APersistence('_units', MO.EDataType.Objects, MO.FEaiCockpitForecastMessageItemUnit)]);
   return o;
}
MO.FEaiCockpitForecastMessageItemUnit = function FEaiCockpitForecastMessageItemUnit(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._value = MO.Class.register(o, [new MO.AGetter('_value'),  new MO.APersistence('_value', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitForecastMessageUniqueData = function FEaiCockpitForecastMessageUniqueData(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._departmentLable          = MO.Class.register(o, [new MO.AGetter('_departmentLable'), new MO.APersistence('_departmentLable', MO.EDataType.String)]);
   o._averageTime              = MO.Class.register(o, [new MO.AGetter('_averageTime'), new MO.APersistence('_averageTime',MO.EDataType.Double)]);
   o._marketerCount            = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   o._Rate                     = MO.Class.register(o, [new MO.AGetter('_Rate'), new MO.APersistence('_Rate', MO.EDataType.Double)]);
   o._customerInvestment       = MO.Class.register(o, [new MO.AGetter('_customerInvestment'), new MO.APersistence('_customerInvestment', MO.EDataType.Double)]);
   o._averageAchievement       = MO.Class.register(o, [new MO.AGetter('_averageAchievement'), new MO.APersistence('_averageAchievement', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitForecastMessageUniqueDataDatas = function FEaiCockpitForecastMessageUniqueDataDatas(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._datas = MO.Class.register(o, [new MO.AGetter('_datas'), new MO.APersistence('_datas', MO.EDataType.Objects, MO.FEaiCockpitForecastMessageUniqueData)]);
   return o;
}
MO.FEaiCockpitForecastModuleManager = function FEaiCockpitForecastModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._switchVector = MO.Class.register(o, new MO.AGetter('_switchVector'));;
   o._navigatorModule         = MO.Class.register(o, new MO.AGetter('_navigatorModule'));
   o._catalogModule           = MO.Class.register(o, new MO.AGetter('_catalogModule'));
   o._logic001Module          = MO.Class.register(o, new MO.AGetter('_logic001Module'));
   o._logicOwnVoteModule      = MO.Class.register(o, new MO.AGetter('_logicOwnVoteModule'));
   o._logic003Module          = MO.Class.register(o, new MO.AGetter('_logic003Module'));
   o._logic004Module          = MO.Class.register(o, new MO.AGetter('_logic004Module'));
   o._logic005Module          = MO.Class.register(o, new MO.AGetter('_logic005Module'));
   o._logic006Module          = MO.Class.register(o, new MO.AGetter('_logic006Module'));
   o._logic007Module          = MO.Class.register(o, new MO.AGetter('_logic007Module'));
   o._logic008Module          = MO.Class.register(o, new MO.AGetter('_logic008Module'));
   o._logic009Module          = MO.Class.register(o, new MO.AGetter('_logic009Module'));
   o._logic010Module          = MO.Class.register(o, new MO.AGetter('_logic010Module'));
   o._tipModule               = MO.Class.register(o, new MO.AGetter('_tipModule'));
   o._indexModule             = MO.Class.register(o, new MO.AGetter('_indexModule'));
   o._autoPlay                = false;
   o._leftArray               = null;
   o._rightArray              = null;
   o._targetMatrix            = null;
   o._slideShowTicker         = null;
   o.construct                = MO.FEaiCockpitForecastModuleManager_construct;
   o.process                  = MO.FEaiCockpitForecastModuleManager_process;
   o.setup                    = MO.FEaiCockpitForecastModuleManager_setup;
   o.slideShow                = MO.FEaiCockpitForecastModuleManager_slideShow;
   o.createSlideShowAnimation = MO.FEaiCockpitForecastModuleManager_createSlideShowAnimation;
   o.onOneSlideDone           = MO.FEaiCockpitSceneModuleManager_onOneSlideDone;
   o.dispose                  = MO.FEaiCockpitForecastModuleManager_dispose;
   return o;
}
MO.FEaiCockpitForecastModuleManager_construct = function FEaiCockpitForecastModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
   o._leftArray = new MO.TObjects();
   o._rightArray = new MO.TObjects();
   o._targetMatrix = new MO.SMatrix3d();
   o._slideShowTicker = new MO.TTicker(10000);
}
MO.FEaiCockpitForecastModuleManager_setup = function FEaiCockpitForecastModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   o._catalogModule = o.createModule(MO.FEaiCockpitForecastCatalog);
   o._logic001Module = o.createModule(MO.FEaiCockpitForecastLogic001);
   o._logicOwnVoteModule = o.createModule(MO.FEaiCockpitForecastLogicOwnVote);
   o._logic003Module = o.createModule(MO.FEaiCockpitForecastLogic003);
   o._logic004Module = o.createModule(MO.FEaiCockpitForecastLogic004);
   o._logic005Module = o.createModule(MO.FEaiCockpitForecastLogic005);
   o._logic006Module = o.createModule(MO.FEaiCockpitForecastLogic006);
   o._logic007Module = o.createModule(MO.FEaiCockpitForecastLogic007);
   o._logic008Module = o.createModule(MO.FEaiCockpitForecastLogic008);
   o._logic009Module = o.createModule(MO.FEaiCockpitForecastUniqueCustomer);
   o._logic010Module = o.createModule(MO.FEaiCockpitForecastAchievementProblem);
   o._tipModule = o.createModule(MO.FEaiCockpitForecastTip);
   o._indexModule = o.createModule(MO.FEaiCockpitForecastIndex);
   var switchVector = o._switchVector = new MO.TObjects();
   switchVector.push(o._logic001Module.controlSnapshot());
   switchVector.push(o._logicOwnVoteModule.controlSnapshot());
   switchVector.push(o._logic003Module.controlSnapshot());
   switchVector.push(o._logic004Module.controlSnapshot());
   switchVector.push(o._logic005Module.controlSnapshot());
   switchVector.push(o._logic006Module.controlSnapshot());
   switchVector.push(o._logic007Module.controlSnapshot());
   switchVector.push(o._logic008Module.controlSnapshot());
   switchVector.push(o._logic009Module.controlSnapshot());
   switchVector.push(o._logic010Module.controlSnapshot());
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
   var leftArray = o._leftArray;
   leftArray.push(o._logic001Module.controlSnapshot());
   leftArray.push(o._logic003Module.controlSnapshot());
   leftArray.push(o._logic005Module.controlSnapshot());
   leftArray.push(o._logic007Module.controlSnapshot());
   leftArray.push(o._logic009Module.controlSnapshot());
   var rightArray = o._rightArray;
   rightArray.push(o._logicOwnVoteModule.controlSnapshot());
   rightArray.push(o._logic004Module.controlSnapshot());
   rightArray.push(o._logic006Module.controlSnapshot());
   rightArray.push(o._logic008Module.controlSnapshot());
   rightArray.push(o._logic010Module.controlSnapshot());
   var cellLocationY = 1;
   var count = leftArray.count();
   for (var i = 0; i < count; i++) {
      var snapshot = leftArray.at(i);
      snapshot.cellLocation().y = cellLocationY;
      snapshot.placeInCell();
      cellLocationY += snapshot.cellSize().height;
}
   var cellLocationY = 1;
   var count = rightArray.count();
   for (var i = 0; i < count; i++) {
      var snapshot = rightArray.at(i);
      snapshot.cellLocation().y = cellLocationY;
      snapshot.placeInCell();
      cellLocationY += snapshot.cellSize().height;
   }
}
MO.FEaiCockpitForecastModuleManager_process = function FEaiCockpitForecastModuleManager_process() {
   var o = this;
   o.__base.FEaiCockpitModuleManager.process.call(o);
   if (o._slideShowTicker.process()) {
      o.slideShow();
   }
}
MO.FEaiCockpitForecastModuleManager_slideShow = function FEaiCockpitForecastModuleManager_slideShow() {
   var o = this;
   var section = MO.Class.create(MO.FTimelineSection);
   section.addSectionStopListener(o, o.onOneSlideDone);
   o.createSlideShowAnimation(o._leftArray, section);
   o.createSlideShowAnimation(o._rightArray, section);
   o._mainTimeline.pushSection(section);
}
MO.FEaiCockpitForecastModuleManager_createSlideShowAnimation = function FEaiCockpitForecastModuleManager_createSlideShowAnimation(snapshotArray, section) {
   var o = this;
   var targetMatrix = o._targetMatrix;
   var count = snapshotArray.count();
   var previousSnapshot = snapshotArray.at(0);
   var previousCellLocationY = previousSnapshot.cellLocation().y;
   var previousMatrix = previousSnapshot.renderable().matrix();
   var action = MO.Class.create(MO.FE3dRotateTimelineAction);
   action.targetRotate().set(Math.PI * 0.42, 0, 0);
   action.setDuration(2000);
   action.link(previousMatrix);
   section.pushAction(action);
   var action = MO.Class.create(MO.FE3dTranslateTimelineAction);
   action.targetTranslate().set(previousMatrix.tx, previousMatrix.ty + 2, previousMatrix.tz);
   action.setDuration(2000);
   action.link(previousMatrix);
   section.pushAction(action);
   for (var i = 1; i < count; i++) {
      var snapshot = snapshotArray.at(i);
      var cly = snapshot.cellLocation().y;
      snapshot.cellLocation().y = previousCellLocationY;
      previousCellLocationY = cly;
      o.calculateCellControlMatrix(snapshot, targetMatrix);
      var currentMatrix = snapshot.renderable().matrix();
      var action = MO.Class.create(MO.FE3dTranslateTimelineAction);
      action.targetTranslate().set(targetMatrix.tx, targetMatrix.ty, targetMatrix.tz);
      action.setDuration(2000);
      action.link(currentMatrix);
      section.pushAction(action);
   }
   previousSnapshot.cellLocation().y = previousCellLocationY;
}
MO.FEaiCockpitSceneModuleManager_onOneSlideDone = function FEaiCockpitSceneModuleManager_onOneSlideDone(event) {
   var o = this;
   var leftArray = o._leftArray;
   var rightArray = o._rightArray;
   var snapshot = leftArray.shift();
   leftArray.push(snapshot);
   snapshot.renderable().matrix().rx = 0;
   snapshot.renderable().matrix().updateForce();
   var count = leftArray.count();
   for (var i = 0; i < count; i++) {
      var snapshot = leftArray.at(i);
      snapshot.placeInCell();
   }
   var snapshot = rightArray.shift();
   rightArray.push(snapshot);
   snapshot.renderable().matrix().rx = 0;
   snapshot.renderable().matrix().updateForce();
   var count = rightArray.count();
   for (var i = 0; i < count; i++) {
      var snapshot = rightArray.at(i);
      snapshot.placeInCell();
   }
}
MO.FEaiCockpitForecastModuleManager_dispose = function FEaiCockpitForecastModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
   o._leftArray = MO.Lang.Object.dispose(o._leftArray);
   o._rightArray = MO.Lang.Object.dispose(o._rightArray);
   o._targetMatrix = MO.Lang.Object.dispose(o._targetMatrix);
}
MO.FEaiCockpitForecastSnapshot = function FEaiCockpitForecastSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon           = false;
   o._name                 = 'cockpit.forecast.snapshot';
   o._backgroundUri        = '{eai.resource}/cockpit/forecast/ground.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker = null;
   o._switchDuration       = 5000;
   o._switchTicker         = null;
   o._lineChart            = null;
   o._switchCounter           = 0;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitForecastSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitForecastSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitForecastSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitForecastSnapshot_construct;
   o.setup                 = MO.FEaiCockpitForecastSnapshot_setup;
   o.setData               = MO.FEaiCockpitForecastSnapshot_setData;
   o.roll                  = MO.FEaiCockpitForecastSnapshot_roll;
   o.nextPage              = MO.FEaiCockpitForecastSnapshot_nextPage;
   o.processLogic          = MO.FEaiCockpitForecastSnapshot_processLogic;
   o.selectedIndex         = MO.FEaiCockpitForecastSnapshot_selectedIndex;
   o.showChart             = MO.FEaiCockpitForecastSnapshot_showChart;
   o.switch                = MO.FEaiCockpitForecastSnapshot_switch;
   o.dispose               = MO.FEaiCockpitForecastSnapshot_dispose;
   return o;
}
 MO.FEaiCockpitForecastSnapshot_onDataFetch = function FEaiCockpitForecastSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      var items = data.items();
      var count = items._count;
      for (var i=0;i<count;i++){
         var item = items.at(i);
         var units = item.units();
         var len = units._count;
         for(var j=0;j<len;j++){
            var unit = units[j];
         }
      }
      o.setData();
   }
}
MO.FEaiCockpitForecastSnapshot_onPaintBegin = function FEaiCockpitForecastSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var parentModule = o.parentModule();
   var moduleManager = parentModule.moduleManager();
   var switchVector = moduleManager.switchVector();
   var showSnapshot = switchVector.at(o._switchCounter % switchVector.count());
   if (showSnapshot) {
         showSnapshot.setComingSoonRight(13);
         showSnapshot.setComingSoonBottom(13);
         showSnapshot.setOptionBackground(false);
         showSnapshot.paintGraphic(graphic, 120, 3, 720,480);
         showSnapshot.setOptionBackground(true);
         showSnapshot.setComingSoonBottom(0);
         showSnapshot.setComingSoonRight(0);
   }
}
MO.FEaiCockpitForecastSnapshot_switch = function FEaiCockpitForecastSnapshot_switch() {
   var o = this;
   o._switchCounter += 1;
   o.dirty();
}
MO.FEaiCockpitForecastSnapshot_construct = function FEaiCockpitForecastSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(3, 1, 0);
   o._cellSize.set(8, 4);
   o._switchTicker = new MO.TTicker(o._switchDuration);
}
MO.FEaiCockpitForecastSnapshot_setup = function FEaiCockpitForecastSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitForecastSnapshot_setData = function FEaiCockpitForecastSnapshot_setData(){
   var o = this;
   var data = o._data;
   var count = data.items().count();
   o._pageMax = Math.ceil(count / o._pageItemsMax);
   if(o._listBox.items().count() == 0) o.roll();
   return;
}
MO.FEaiCockpitForecastSnapshot_roll = function FEaiCockpitForecastSnapshot_roll() {
}
MO.FEaiCockpitForecastSnapshot_nextPage = function FEaiCockpitForecastSnapshot_nextPage() {
}
MO.FEaiCockpitForecastSnapshot_selectedIndex = function FEaiCockpitForecastSnapshot_selectedIndex() {
   var o = this;
   return (o._page - 1) * o._pageItemsMax + o._index - 1;
}
MO.FEaiCockpitForecastSnapshot_processLogic = function FEaiCockpitForecastSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if (o._switchTicker.process()) {
       o.switch();
   }
}
MO.FEaiCockpitForecastSnapshot_showChart = function FEaiCockpitForecastSnapshot_showChart() {
   var o = this;
   var index = o.selectedIndex();
   var data = o._data;
   var items = data.items();
   var count = items._count;
   var item = items.at(index);
   o._lineChart.setData(item);
}
MO.FEaiCockpitForecastSnapshot_dispose = function FEaiCockpitForecastSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastTip = function FEaiCockpitForecastTip(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.tip';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastTip_construct;
   o.setup       = MO.FEaiCockpitForecastTip_setup;
   o.process     = MO.FEaiCockpitForecastTip_process;
   o.dispose     = MO.FEaiCockpitForecastTip_dispose;
   return o;
}
MO.FEaiCockpitForecastTip_construct = function FEaiCockpitForecastTip_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastTip_setup = function FEaiCockpitForecastTip_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastTipSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastTipView);
}
MO.FEaiCockpitForecastTip_process = function FEaiCockpitForecastTip_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastTip_dispose = function FEaiCockpitForecastTip_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastTipSnapshot = function FEaiCockpitForecastTipSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._comingSoon    = true;
   o._backgroundUri = '{eai.resource}/cockpit/forecast/tip.png';
   o.onPaintBegin   = MO.FEaiCockpitForecastTipSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastTipSnapshot_onPaintEnd;
   o.construct      = MO.FEaiCockpitForecastTipSnapshot_construct;
   o.setup          = MO.FEaiCockpitForecastTipSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastTipSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastTipSnapshot_dispose;
   return o;
}
MO.FEaiCockpitForecastTipSnapshot_onPaintBegin = function FEaiCockpitForecastTipSnapshot_onPaintBegin(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastTipSnapshot_onPaintEnd = function FEaiCockpitForecastTipSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastTipSnapshot_construct = function FEaiCockpitForecastTipSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(14, 6, 0);
   o._cellSize.set(2, 3);
}
MO.FEaiCockpitForecastTipSnapshot_setup = function FEaiCockpitForecastTipSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
}
MO.FEaiCockpitForecastTipSnapshot_processLogic = function FEaiCockpitForecastTipSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
}
MO.FEaiCockpitForecastTipSnapshot_dispose = function FEaiCockpitForecastTipSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastTipView = function FEaiCockpitForecastTipView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastTipView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastTipView_construct;
   o.setup        = MO.FEaiCockpitForecastTipView_setup;
   o.processLogic = MO.FEaiCockpitForecastTipView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastTipView_dispose;
   return o;
}
MO.FEaiCockpitForecastTipView_onPaintBegin = function FEaiCockpitForecastTipView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastTipView_construct = function FEaiCockpitForecastTipView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastTipView_setup = function FEaiCockpitForecastTipView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastTipView_processLogic = function FEaiCockpitForecastTipView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastTipView_dispose = function FEaiCockpitForecastTipView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastUniqueCustomer = function FEaiCockpitForecastUniqueCustomer(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name       = 'forecast.uniqueCustomer.01';
   o._typeCd     = MO.EEaiCockpitModule.Logic;
   o._dataTicker = null;
   o._slideshow  = true;
   o.construct   = MO.FEaiCockpitForecastUniqueCustomer_construct;
   o.setup       = MO.FEaiCockpitForecastUniqueCustomer_setup;
   o.process     = MO.FEaiCockpitForecastUniqueCustomer_process;
   o.dispose     = MO.FEaiCockpitForecastUniqueCustomer_dispose;
   return o;
}
MO.FEaiCockpitForecastUniqueCustomer_construct = function FEaiCockpitForecastUniqueCustomer_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitForecastUniqueCustomer_setup = function FEaiCockpitForecastUniqueCustomer_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitForecastUniqueCustomerSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitForecastUniqueCustomerView);
}
MO.FEaiCockpitForecastUniqueCustomer_process = function FEaiCockpitForecastUniqueCustomer_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitForecastUniqueCustomer_dispose = function FEaiCockpitForecastUniqueCustomer_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot = function FEaiCockpitForecastUniqueCustomerSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/forecast/logic.png';
   o._dataTicker    = null;
   o._titleImage    = null;
   o._tableImage    = null;
   o._chart         = null;
   o.onPaintBegin   = MO.FEaiCockpitForecastUniqueCustomerSnapshot_onPaintBegin;
   o.onPaintEnd     = MO.FEaiCockpitForecastUniqueCustomerSnapshot_onPaintEnd;
   o.onDataFetch    = MO.FEaiCockpitForecastUniqueCustomerSnapshot_onDataFetch;
   o._data          = MO.Class.register(o, new MO.AGetSet('_data'));;
   o.construct      = MO.FEaiCockpitForecastUniqueCustomerSnapshot_construct;
   o.setup          = MO.FEaiCockpitForecastUniqueCustomerSnapshot_setup;
   o.processLogic   = MO.FEaiCockpitForecastUniqueCustomerSnapshot_processLogic;
   o.dispose        = MO.FEaiCockpitForecastUniqueCustomerSnapshot_dispose;
   o.refreshData    = MO.FEaiCockpitForecastUniqueCustomerSnapshot_refreshData;
   o.refreshChartData   = MO.FEaiCockpitForecastUniqueCustomerSnapshot_refreshChartData;
   return o;
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_refreshChartData = function FEaiCockpitForecastUniqueCustomerSnapshot_refreshChartData(event){
   var o = this;
   var data = o._data;
   var dataset = o._chartDataset;
   var serieses = dataset.serieses();
   var series = serieses.get(0);
   series.values().clear();
   var chart = o._chart;
   chart.axisX().degrees().clear();
   var items = data.datas();
   var count = items.count();
   for (var i = 0; i < count; i++) {
      var item = items.at(i);
      var label = item.departmentLable();
      var value = item.averageAchievement();
         switch(label){
         case '合作—德聚公司':
         label = '合作—德';
         break;
         case "上海聚汇通":
         label = '上海聚汇';
         break;
         case "上海仁立网络科技有限公司":
         label = '上海仁立';
         break;
         case "卓信至诚公司":
         label = '卓信至诚';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "多元营销事业部":
         label = '多元营销';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "金易融(上海)网络科技有限公司":
         label = '金易融';
         break;
         case "赛杰思公司":
         label = '赛杰思';
         break;
         case "安信普华财富投资管理（北京）有限公司":
         label = '安信普华';
         break;
         case "在线营销事业部":
         label = '在线营销';
         break;
         case "深圳前海志赢商务信息咨询有限公司":
         label = '深圳前海';
         break;
         case "深圳钰诚财富":
         label = '深圳钰诚';
         break;
         case "融泰公司（安徽）":
         label = '融泰公司';
         break;
         case "汇仕达金融渠道部":
         label = '汇仕达';
         break;
         case "深圳前海智赢商务信息咨询有限公司":
         label = '深圳前海';
         break;
         default:
         break;
      }
      series.values().push(value);
      var degree = MO.Class.create(MO.FUiChartAxisDegree);
      degree.setLabel(label);
      chart.axisX().pushDegree(degree);
   }
   var axisY = chart.axisY();
   axisY.createDegreesStandard(dataset.standardCor(3));
   axisY.formatLabels();
   o.dirty();
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_onDataFetch = function FEaiCockpitForecastUniqueCustomerSnapshot_onDataFetch(event) {
   var o = this;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
    o.refreshData(data);
    o.refreshChartData(data);
   }
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_refreshData = function FEaiCockpitForecastUniqueCustomerSnapshot_refreshData(data) {
    var o = this;
    var datas = data.datas();
    if (!datas) {
       return;
    }
    var grid = o._gridControl;
    grid.clearRows();
    for(var i=0;i<3;i++){
    row = grid.allocRow();
    row.set('departmentLable', datas.at(i).departmentLable().toString());
    row.set('averageTime',  parseInt(datas.at(i).averageTime()).toString());
    row.set('markerterCount',  parseInt(datas.at(i).marketerCount()).toString());
    row.set('rate',  parseInt((datas.at(i).Rate()*100)).toString());
    row.set('customerInvestment',  parseInt(datas.at(i).customerInvestment()).toString());
    row.set('averageAchievement',  parseInt(datas.at(i).averageAchievement()).toString());
    grid.pushRow(row);
    }
    o.dirty();
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_onPaintBegin = function FEaiCockpitForecastUniqueCustomerSnapshot_onPaintBegin(event){
   var o = this;
   var data  = o._data ;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._titleImage, left + 15 , top + 6 );
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_onPaintEnd = function FEaiCockpitForecastUniqueCustomerSnapshot_onPaintEnd(event){
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_construct = function FEaiCockpitForecastUniqueCustomerSnapshot_construct(){
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(2, 5, 0);
   o._cellSize.set(6, 4);
   o._dataTicker = new MO.TTicker(1000 * 10);
   o._data = MO.Class.create(MO.FEaiCockpitForecastMessageUniqueDataDatas);
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_setup = function FEaiCockpitForecastUniqueCustomerSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._titleImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/uniquecustomer.png');
   o._tableImage = o.loadResourceImage('{eai.resource}/cockpit/forecast/grid_title.png');
   var grid = o._gridControl = MO.Class.create(MO.FGuiGridControl);
   grid.setOptionClip(false);
   grid.setLocation(0, 320);
   grid.setSize(100, 100);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right | MO.EUiAnchor.Bottom);
   grid.setLeft(20);
   grid.setRight(20);
   grid.setBottom(20);
   grid.setHeadHeight(35);
   grid.setHeadBackgroundUri('{eai.resource}/cockpit/forecast/grid_title.png');
   grid.setHeadBackColor('rgba(255,255,255,0)');
   grid.setOuterLineColor('#567a74');
   grid.setOuterLineThickness(1);
   grid.setInnerLineColor('#567a74');
   grid.setInnerLineThickness(1);
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 20;
   grid.headFont().color = '#20f2ff';
   grid.headFont().bold = true;
   grid.setRowHeight(35);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.setBackColor('rgba(0,0,0,0.3)');
   grid.setup();
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('departmentLable');
   column.setLabel('公司');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setDataName('departmentLable');
   column.setWidth(70);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('averageTime');
   column.setLabel('在职时间');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(60);
   column.setDataName('averageTime');
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('markerterCount');
   column.setLabel('人数');
   column.setDataName('markerterCount');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(30);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('rate');
   column.setLabel('占比');
   column.setDataName('rate');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(20);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('customerInvestment');
   column.setLabel('客户总投资');
   column.setDataName('customerInvestment');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(65);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('averageAchievement');
   column.setLabel('人均业绩');
   column.setDataName('averageAchievement');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(65);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   o.push(grid);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartBarPainter);
   chart.setLocation(30, 60);
   chart.setSize(720, 200);
   chart.paintRectangle().set(20, 0, 600, 180);
   chart.axisX().setOptionShowAxis(false);
   chart.axisY().setOptionShowAxis(false);
   chart.axisY().setOptionShowLabel(false);
   chart.axisY().setOptionShowFirstLine(true);
   chart.axisX().setOptionLabelVertical(true);
   chart.axisX().font().parse("#fee823 16px Microsoft YaHei");
   chart.axisY().setDivisor(10000000);
   o.push(chart);
   var dataset = o._chartDataset = MO.Class.create(MO.FUiChartDataset);
   var series = MO.Class.create(MO.FUiChartDataSeries);
   series.setOptionShowBorder(false);
   series.setFillGradient([['0', '#20d3de'], ['0.5', '#237394'], ['1.0', '#252f62']]);
   series.setRectWidth(25);
   dataset.push(series);
   chart.setDataset(dataset);
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_processLogic = function FEaiCockpitForecastUniqueCustomerSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if(o._dataTicker.process()){
      var forecast = MO.Console.find(MO.FEaiLogicConsole).cockpit().forecast();
      forecast.doFetchUniqueCustomer(o, o.onDataFetch);
   }
}
MO.FEaiCockpitForecastUniqueCustomerSnapshot_dispose = function FEaiCockpitForecastUniqueCustomerSnapshot_dispose(){
   var o = this;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitForecastUniqueCustomerView = function FEaiCockpitForecastUniqueCustomerView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o.onPaintBegin = MO.FEaiCockpitForecastUniqueCustomerView_onPaintBegin;
   o.construct    = MO.FEaiCockpitForecastUniqueCustomerView_construct;
   o.setup        = MO.FEaiCockpitForecastUniqueCustomerView_setup;
   o.processLogic = MO.FEaiCockpitForecastUniqueCustomerView_processLogic;
   o.dispose      = MO.FEaiCockpitForecastUniqueCustomerView_dispose;
   return o;
}
MO.FEaiCockpitForecastUniqueCustomerView_onPaintBegin = function FEaiCockpitForecastUniqueCustomerView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
}
MO.FEaiCockpitForecastUniqueCustomerView_construct = function FEaiCockpitForecastUniqueCustomerView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastUniqueCustomerView_setup = function FEaiCockpitForecastUniqueCustomerView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastUniqueCustomerView_processLogic = function FEaiCockpitForecastUniqueCustomerView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastUniqueCustomerView_dispose = function FEaiCockpitForecastUniqueCustomerView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitForecastView = function FEaiCockpitForecastView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitForecastView_onPaintBegin;
   o.construct             = MO.FEaiCockpitForecastView_construct;
   o.setup                 = MO.FEaiCockpitForecastView_setup;
   o.processLogic          = MO.FEaiCockpitForecastView_processLogic;
   o.dispose               = MO.FEaiCockpitForecastView_dispose;
   return o;
}
MO.FEaiCockpitForecastView_onPaintBegin = function FEaiCockpitForecastView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitForecastView_construct = function FEaiCockpitForecastView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitForecastView_setup = function FEaiCockpitForecastView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitForecastView_processLogic = function FEaiCockpitForecastView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitForecastView_dispose = function FEaiCockpitForecastView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
