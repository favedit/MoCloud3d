MO.MEaiCockpitMath = function FEaiCockpitDataNotice(o) {
   o = MO.Class.inherits(this, o, MO.RMath);
   o.fetchRound = MO.MEaiCockpitMath_fetchRound ;
   o.fetchlength = MEaiCockpitMath_fetchlength ;
   return o;
}
MO.MEaiCockpitMath_fetchRound =  function  MEaiCockpitMath_fetchRound(MaxValue){
	var o = this ;
	var valueResult = 0 ;
	var MaxValue = MaxValue;
	var roundLength = o.fetchlength(MaxValue);
	var  roundFirst = parseInt(MaxValue.substr(0,1));
	if(roundLength>1){
		var roundSecond = parseInt(MaxValue.substr(1,1));
		if(roundSecond == 0){
			return roundFirst * Math.pow(10,roundLength-1);
		}else{
		var operation = roundSecond < 5 ? 5 : 0;
			if (operation == 5) {
				return (roundFirst + 0.5) * Math.pow(10,roundLength-1);
			}else{
				return (roundFirst + 1) * Math.pow(10,roundLength-1);
			}
		}
	}else{
		if (roundFirst>5) {
			return 10;
		}else{
			return 5;
		}
	}
}
MO.MEaiCockpitMath_fetchlength = function MEaiCockpitMath_fetchlength(value){
	var o = this ;
	var value = value;
	return value.length;
}
MO.FEaiCockpitAchievementModulFiveForceChart = function FEaiCockpitAchievementModulFiveForceChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o._pointCount              = MO.Class.register(o, new MO.AGetSet('_pointCount'),5);
   o._ratationDegree          = MO.Class.register(o, new MO.AGetSet('_ratationDegree'));
   o._angleLineColor          = MO.Class.register(o, new MO.AGetSet('_angleLineColor'),'#ffffff');
   o._angleLineWidth          = MO.Class.register(o, new MO.AGetSet('_angleLineWidth'),3);
   o._radius                  = MO.Class.register(o, new MO.AGetSet('_radius'),30);
   o._pointZero               = MO.Class.register(o, new MO.AGetSet('_pointZero'));
   o.construct                = MO.FEaiCockpitAchievementModulFiveForceChart_construct;
   o.setup                    = MO.FEaiCockpitAchievementModulFiveForceChart_setup;
   o.onImageLoad              = MO.FEaiCockpitAchievementModulFiveForceChart_onImageLoad;
   o.onPaintBegin             = MO.FEaiCockpitAchievementModulFiveForceChart_onPaintBegin;
   o.dispose                  = MO.FEaiCockpitAchievementModulFiveForceChart_dispose;
   o.setData                  = MO.FEaiCockpitAchievementModulFiveForceChart_setData;
   o._fiveforce               = null;
   return o;
}
MO.FEaiCockpitAchievementModulFiveForceChart_construct = function FEaiCockpitAchievementModulFiveForceChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._ratationDegree = (2*Math.PI)/o._pointCount;
   o._pointZero = new MO.SPoint2(0,0);
   o._fiveforce = o.loadResourceImage('{eai.resource}/cockpit/achievement/fiveforce.png');
   o._fiveforce.addLoadListener(o,o.onImageLoad);
}
MO.FEaiCockpitAchievementModulFiveForceChart_setup = function FEaiCockpitAchievementModulFiveForceChart_setup() {
   var o = this;
}
MO.FEaiCockpitAchievementModulFiveForceChart_onImageLoad = function FEaiCockpitAchievementModulFiveForceChart_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitAchievementModulFiveForceChart_onPaintBegin = function FEaiCockpitAchievementModulFiveForceChart_onPaintBegin(event) {
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
   var ctx = graphic._handle;
   var pointCount = o._pointCount;
   var graphHeight = height/pointCount;
   var ratationDegree = o._ratationDegree;
   var graphicLeft = left;
   var graphicTop = top;
   var radius = o._radius;
   var ss= o._fiveforce;
   graphic.drawImage(o._fiveforce, 0, 0, 223, 191);
   var sinr = radius*Math.sin(ratationDegree);
   var cosr = radius*Math.cos(ratationDegree);
   var point1x = 0;
   var point1y = radius;
}
MO.FEaiCockpitAchievementModulFiveForceChart_setData = function FEaiCockpitAchievementModulFiveForceChart_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FEaiCockpitAchievementModulFiveForceChart_dispose = function FEaiCockpitAchievementModulFiveForceChart_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiCockpitAchievement = function FEaiCockpitAchievement(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitLogicModule);
   o._name      = 'achievement';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievement_construct;
   o.setup      = MO.FEaiCockpitAchievement_setup;
   o.process    = MO.FEaiCockpitAchievement_process;
   o.dispose    = MO.FEaiCockpitAchievement_dispose;
   return o;
}
MO.FEaiCockpitAchievement_construct = function FEaiCockpitAchievement_construct(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.construct.call(o);
}
MO.FEaiCockpitAchievement_setup = function FEaiCockpitAchievement_setup(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.setup.call(o);
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementView);
   o.setupModuleManager(MO.FEaiCockpitAchievementModuleManager);
}
MO.FEaiCockpitAchievement_process = function FEaiCockpitAchievement_process(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.process.call(o);
}
MO.FEaiCockpitAchievement_dispose = function FEaiCockpitAchievement_dispose(){
   var o = this;
   o.__base.FEaiCockpitLogicModule.dispose.call(o);
}
MO.FEaiCockpitAchievementBusinessCard = function FEaiCockpitAchievementBusinessCard(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.businessCard';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementBusinessCard_construct;
   o.setup      = MO.FEaiCockpitAchievementBusinessCard_setup;
   o.process    = MO.FEaiCockpitAchievementBusinessCard_process;
   o.dispose    = MO.FEaiCockpitAchievementBusinessCard_dispose;
   return o;
}
MO.FEaiCockpitAchievementBusinessCard_construct = function FEaiCockpitAchievementBusinessCard_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementBusinessCard_setup = function FEaiCockpitAchievementBusinessCard_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementBusinessCardSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementBusinessCardView);
}
MO.FEaiCockpitAchievementBusinessCard_process = function FEaiCockpitAchievementBusinessCard_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementBusinessCard_dispose = function FEaiCockpitAchievementBusinessCard_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementBusinessCardSnapshot = function FEaiCockpitAchievementBusinessCardSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/businessCard.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._font1stRow           = null;
   o._font2ndRow           = null;
   o._businessName         = "";
   o._departmentLeader     = "";
   o._departmentCount      = "";
   o._marketerCount        = "";
   o._investmentCount      = 0;
   o._redemptionCount      = 0;
   o._netinvestmentCount   = 0;
   o._redemptionRate       = "";
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementBusinessCardSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementBusinessCardSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementBusinessCardSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementBusinessCardSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementBusinessCardSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementBusinessCardSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementBusinessCardSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementBusinessCardSnapshot_dispose;
   o.getRMBString          = MO.FEaiCockpitAchievementBusinessCardSnapshot_getRMBString
   o._comingSoonImage      = null;
   return o;
}
 MO.FEaiCockpitAchievementBusinessCardSnapshot_onDataFetch = function FEaiCockpitAchievementBusinessCardSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o._businessName = data.businessName();
      o._departmentLeader = data.departmentLeader();
      o._departmentCount = data.departmentCount();
      o._marketerCount = data.marketerCount();
      o._investmentCount = data.investmentCount();
      o._redemptionCount = data.redemptionCount();
      o._netinvestmentCount = data.netinvestmentCount();
      o._redemptionRate = data.redemptionRate();
      o.dirty();
   }
}
 MO.FEaiCockpitAchievementBusinessCardSnapshot_getRMBString = function FEaiCockpitAchievementBusinessCardSnapshot_getRMBString(rmbCount) {
    rmbCount = Math.round(rmbCount);
    var drawText = "";
    if (rmbCount > 100000000) {
       drawText += Math.floor(rmbCount / 100000000) + "亿";
    }
    if (rmbCount > 10000) {
       drawText += Math.floor(rmbCount / 10000 % 10000) + "万";
    }
    drawText += rmbCount % 10000 + "元";
    return drawText;
 }
MO.FEaiCockpitAchievementBusinessCardSnapshot_onPaintBegin = function FEaiCockpitAchievementBusinessCardSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var font1stRow = o._font1stRow;
   var font2ndRow = o._font2ndRow;
   var drawText = "公司名片";
   graphic.setFont(font1stRow.toString());
   graphic.drawText(drawText, 120, 40, font1stRow.color);
   var drawX = 40;
   var drawY = 80;
   var drawText = "名称:             " + o._businessName;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "主管:             " + o._departmentLeader;
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "分公司数:      " + o._departmentCount;
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "理财师数:      " + o._marketerCount;
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "当日投资:      " + o.getRMBString(o._investmentCount);
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "当日赎回:      " + o.getRMBString(o._redemptionCount);
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "当日净投:      " + o.getRMBString(o._netinvestmentCount);
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "赎回率:          " + o._redemptionRate + "%";
   drawY += 35;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
}
MO.FEaiCockpitAchievementBusinessCardSnapshot_onPaintEnd = function FEaiCockpitAchievementBusinessCardSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementBusinessCardSnapshot_construct = function FEaiCockpitAchievementBusinessCardSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(13, 3, 0);
   o._cellSize.set(3, 3);
   o._font1stRow = new MO.SUiFont();
   o._font2ndRow = new MO.SUiFont();
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitMessageAchievementNextBusinessCard);
}
MO.FEaiCockpitAchievementBusinessCardSnapshot_setup = function FEaiCockpitAchievementBusinessCardSnapshot_setup() {
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._font1stRow.parse('#E1DC1E 25px Microsoft YaHei');
   o._font2ndRow.parse('#FFFFFF 20px Microsoft YaHei');
}
MO.FEaiCockpitAchievementBusinessCardSnapshot_processLogic = function FEaiCockpitAchievementBusinessCardSnapshot_processLogic(){
   var o = this;
   if (o._dataTicker.process()) {
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchBusinessCard(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementBusinessCardSnapshot_dispose = function FEaiCockpitAchievementBusinessCardSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
   o._font1stRow = MO.Lang.Object.dispose(o._font1stRow);
   o._font2ndRow = MO.Lang.Object.dispose(o._font2ndRow);
}
MO.FEaiCockpitAchievementBusinessCardView = function FEaiCockpitAchievementBusinessCardView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementBusinessCardView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementBusinessCardView_construct;
   o.setup                 = MO.FEaiCockpitAchievementBusinessCardView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementBusinessCardView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementBusinessCardView_dispose;
   return o;
}
MO.FEaiCockpitAchievementBusinessCardView_onPaintBegin = function FEaiCockpitAchievementBusinessCardView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementBusinessCardView_construct = function FEaiCockpitAchievementBusinessCardView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementBusinessCardView_setup = function FEaiCockpitAchievementBusinessCardView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementBusinessCardView_processLogic = function FEaiCockpitAchievementBusinessCardView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementBusinessCardView_dispose = function FEaiCockpitAchievementBusinessCardView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementDayCurve = function FEaiCockpitAchievementDayCurve(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.dayCurve';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementDayCurve_construct;
   o.setup      = MO.FEaiCockpitAchievementDayCurve_setup;
   o.process    = MO.FEaiCockpitAchievementDayCurve_process;
   o.dispose    = MO.FEaiCockpitAchievementDayCurve_dispose;
   return o;
}
MO.FEaiCockpitAchievementDayCurve_construct = function FEaiCockpitAchievementDayCurve_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementDayCurve_setup = function FEaiCockpitAchievementDayCurve_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementDayCurveSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementDayCurveView);
}
MO.FEaiCockpitAchievementDayCurve_process = function FEaiCockpitAchievementDayCurve_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementDayCurve_dispose = function FEaiCockpitAchievementDayCurve_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementDayCurveSnapshot = function FEaiCockpitAchievementDayCurveSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/achievement/dayCurve.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._backgroundTopImage   = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._redemptionImage      = null;
   o._chart                = null;
   o._dataset              = null;
   o.setData               = MO.FEaiCockpitAchievementDayCurveSnapshot_setData;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onFetchData           = MO.FEaiCockpitAchievementDayCurveSnapshot_onFetchData;
   o.onPaintBegin          = MO.FEaiCockpitAchievementDayCurveSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementDayCurveSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementDayCurveSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementDayCurveSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementDayCurveSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementDayCurveSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementDayCurveSnapshot_dispose;
   return o;
}
 MO.FEaiCockpitAchievementDayCurveSnapshot_onFetchData = function FEaiCockpitAchievementDayCurveSnapshot_onFetchData(event){
   var o = this;
   var content = event.content;
   var daydata = o._dayData;
   daydata.unserializeSignBuffer(event.sign, event.content, true);
   o.setData(daydata);
}
MO.FEaiCockpitAchievementDayCurveSnapshot_onPaintBegin = function FEaiCockpitAchievementDayCurveSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementDayCurveSnapshot_onPaintEnd = function FEaiCockpitAchievementDayCurveSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._redemptionImage,left+width-100,top+20,54,60);
   var title = '当日业绩趋势（H）';
   var titleWidth = graphic.textWidth(title);
   graphic.setFont('bold 16px Microsoft YaHei');
   graphic.drawText(title,left+width/2-titleWidth/2,top+25,'#fee71f');
}
MO.FEaiCockpitAchievementDayCurveSnapshot_construct = function FEaiCockpitAchievementDayCurveSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 3, 0);
   o._cellSize.set(7, 2);
   o._dataTicker = new MO.TTicker(1000 * 10);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._dayData = MO.Class.create(MO.FEaiCockpitAchievementMessageNextDays);
}
MO.FEaiCockpitAchievementDayCurveSnapshot_setup = function FEaiCockpitAchievementDayCurveSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._redemptionImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/redemption.png');
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartLinePainter);
   chart.setLocation(60,11);
   chart.setSize(720,150);
   chart.paintRectangle().set(50,30,580,150);
   chart.axisX().createDegrees(0, 24);
   chart.axisY().setLineWidth(1);
   chart.axisY().setLineColor('#758191');
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisX().findDegreeByValue(0).setLineColor('#889395');
   chart.axisX().findDegreeByValue(0).setLabel("00:00");
   chart.axisX().findDegreeByValue(4).setLabel("04:00");
   chart.axisX().findDegreeByValue(8).setLabel("08:00");
   chart.axisX().findDegreeByValue(12).setLabel("12:00");
   chart.axisX().findDegreeByValue(16).setLabel("16:00");
   chart.axisX().findDegreeByValue(20).setLabel("20:00");
   chart.axisX().findDegreeByValue(24).setLabel("24:00");
   chart.axisX().setLabel("(h)");
   chart.axisY().setLabel("(万)");
   chart.axisY().setDivisor(10000);
   chart.axisY().setDegreeLabelGap(6);
   chart.axisX().setDegreeLabelGap(6);
   o.push(chart);
   var lineColors = ['#4b5e6f', '#80a861', '#2069a0', '#51c0db', '#68f34e', '#9b1933'];
   var dataset = o._dataset = MO.Class.create(MO.FUiChartDataset);
   for (var i=0;i<6;i++){
      var series = MO.Class.create(MO.FUiChartDataSeries);
      series.setLineWidth(3);
      series.setLineColor(lineColors[i]);
      dataset.push(series);
   }
    chart.setDataset(dataset);
}
MO.FEaiCockpitAchievementDayCurveSnapshot_setData = function FEaiCockpitAchievementDayCurveSnapshot_setData(data) {
   var o = this;
   var data = o._dayData;
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
   var arrDegree =  yAxis.degrees();
   yAxis.createDegreesStandard(dataset.standardCor(8));
   yAxis.formatLabels();
   var zero = yAxis.findDegreeByValue(0);
   if (zero) {
      zero.setLineWidth(3);
      zero.setLineColor("#ffe721")
   }
   o.dirty();
}
MO.FEaiCockpitAchievementDayCurveSnapshot_processLogic = function FEaiCockpitAchievementDayCurveSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
         var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
         achievement.doFetchDay(o, o.onFetchData);
   }
}
MO.FEaiCockpitAchievementDayCurveSnapshot_dispose = function FEaiCockpitAchievementDayCurveSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementDayCurveView = function FEaiCockpitAchievementDayCurveView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementDayCurveView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementDayCurveView_construct;
   o.setup                 = MO.FEaiCockpitAchievementDayCurveView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementDayCurveView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementDayCurveView_dispose;
   return o;
}
MO.FEaiCockpitAchievementDayCurveView_onPaintBegin = function FEaiCockpitAchievementDayCurveView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementDayCurveView_construct = function FEaiCockpitAchievementDayCurveView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementDayCurveView_setup = function FEaiCockpitAchievementDayCurveView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementDayCurveView_processLogic = function FEaiCockpitAchievementDayCurveView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementDayCurveView_dispose = function FEaiCockpitAchievementDayCurveView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementHistogram = function FEaiCockpitAchievementHistogram(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.histogram';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementHistogram_construct;
   o.setup      = MO.FEaiCockpitAchievementHistogram_setup;
   o.process    = MO.FEaiCockpitAchievementHistogram_process;
   o.dispose    = MO.FEaiCockpitAchievementHistogram_dispose;
   return o;
}
MO.FEaiCockpitAchievementHistogram_construct = function FEaiCockpitAchievementHistogram_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementHistogram_setup = function FEaiCockpitAchievementHistogram_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementHistogramSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementHistogramView);
}
MO.FEaiCockpitAchievementHistogram_process = function FEaiCockpitAchievementHistogram_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementHistogram_dispose = function FEaiCockpitAchievementHistogram_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementHistogramSnapshot = function FEaiCockpitAchievementHistogramSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/histogram.png';
   o._data                 = null;
   o._chart                = null;
   o._chartDataset         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementHistogramSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementHistogramSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementHistogramSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementHistogramSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementHistogramSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementHistogramSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementHistogramSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementHistogramSnapshot_dispose;
   o.setData               = MO.FEaiCockpitAchievementHistogramSnapshot_setData
   o._comingSoonImage      = null;
   return o;
}
MO.FEaiCockpitAchievementHistogramSnapshot_setData = function FEaiCockpitAchievementHistogramSnapshot_setData(data) {
   var o = this;
   var dataset = o._chartDataset;
   var serieses = dataset.serieses();
   var series = serieses.get(0);
   series.values().clear();
   var chart = o._chart;
   chart.axisX().degrees().clear();
   var items = data.items();
   var count = items.count();
   for (var i = 0; i < count; i++) {
      var item = items.at(i);
      var label = item.label();
      var value = item.amount();
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
   axisY.createDegreesStandard(dataset.standardCor(5));
   axisY.formatLabels();
   o.dirty();
}
 MO.FEaiCockpitAchievementHistogramSnapshot_onDataFetch = function FEaiCockpitAchievementHistogramSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o.setData(data);
   }
}
MO.FEaiCockpitAchievementHistogramSnapshot_onPaintBegin = function FEaiCockpitAchievementHistogramSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementHistogramSnapshot_onPaintEnd = function FEaiCockpitAchievementHistogramSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementHistogramSnapshot_construct = function FEaiCockpitAchievementHistogramSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(7, 6, 0);
   o._cellSize.set(9, 3);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitAchievementMessageHistograms);
}
MO.FEaiCockpitAchievementHistogramSnapshot_setup = function FEaiCockpitAchievementHistogramSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartBarPainter);
   chart.setLocation(30, 30);
   chart.setSize(1030, 320);
   chart.paintRectangle().set(68, 44, 900, 180);
   chart.setTitle("财富端各子公司当月业绩情况");
   chart.titleFont().parse("#fde720 20px Microsoft YaHei");
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisY().setOptionShowAxis(false);
   chart.axisY().setOptionShowFirstLine(true);
   chart.axisX().setOptionLabelVertical(true);
   chart.axisX().setLabel("(子公司)");
   chart.axisX().font().parse("#fee823 12px Microsoft YaHei");
   chart.axisY().setLabel("(千万)");
   chart.axisY().setDivisor(10000000);
   o.push(chart);
   var dataset = o._chartDataset = MO.Class.create(MO.FUiChartDataset);
   var series = MO.Class.create(MO.FUiChartDataSeries);
   series.setOptionShowBorder(false);
   series.setFillGradient([['0', '#20d3de'], ['0.5', '#237394'], ['1.0', '#252f62']]);
   series.setRectWidth(20);
   dataset.push(series);
   chart.setDataset(dataset);
}
MO.FEaiCockpitAchievementHistogramSnapshot_processLogic = function FEaiCockpitAchievementHistogramSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchHistogram(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementHistogramSnapshot_dispose = function FEaiCockpitAchievementHistogramSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementHistogramView = function FEaiCockpitAchievementHistogramView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementHistogramView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementHistogramView_construct;
   o.setup                 = MO.FEaiCockpitAchievementHistogramView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementHistogramView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementHistogramView_dispose;
   return o;
}
MO.FEaiCockpitAchievementHistogramView_onPaintBegin = function FEaiCockpitAchievementHistogramView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementHistogramView_construct = function FEaiCockpitAchievementHistogramView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementHistogramView_setup = function FEaiCockpitAchievementHistogramView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementHistogramView_processLogic = function FEaiCockpitAchievementHistogramView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementHistogramView_dispose = function FEaiCockpitAchievementHistogramView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementImage = function FEaiCockpitAchievementImage(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.image';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementImage_construct;
   o.setup      = MO.FEaiCockpitAchievementImage_setup;
   o.process    = MO.FEaiCockpitAchievementImage_process;
   o.dispose    = MO.FEaiCockpitAchievementImage_dispose;
   return o;
}
MO.FEaiCockpitAchievementImage_construct = function FEaiCockpitAchievementImage_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementImage_setup = function FEaiCockpitAchievementImage_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementImageSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementImageView);
}
MO.FEaiCockpitAchievementImage_process = function FEaiCockpitAchievementImage_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementImage_dispose = function FEaiCockpitAchievementImage_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementImageSnapshot = function FEaiCockpitAchievementImageSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementImageSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementImageSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementImageSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementImageSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementImageSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementImageSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementImageSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementImageSnapshot_dispose;
   o._comingSoonImage      = null;
   return o;
}
 MO.FEaiCockpitAchievementImageSnapshot_onDataFetch = function FEaiCockpitAchievementImageSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
}
MO.FEaiCockpitAchievementImageSnapshot_onPaintBegin = function FEaiCockpitAchievementImageSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._backgroundImages,left,top+35,1908,68);}
MO.FEaiCockpitAchievementImageSnapshot_onPaintEnd = function FEaiCockpitAchievementImageSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementImageSnapshot_construct = function FEaiCockpitAchievementImageSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 2, 0);
   o._cellSize.set(16, 1);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitForecastMessage);
}
MO.FEaiCockpitAchievementImageSnapshot_setup = function FEaiCockpitAchievementImageSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._backgroundImages = o.loadResourceImage('{eai.resource}/cockpit/achievement/investment.png');
}
MO.FEaiCockpitAchievementImageSnapshot_processLogic = function FEaiCockpitAchievementImageSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var forecast = MO.Console.find(MO.FEaiLogicConsole).cockpit().forecast();
      forecast.doFetch(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementImageSnapshot_dispose = function FEaiCockpitAchievementImageSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementImageView = function FEaiCockpitAchievementImageView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementImageView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementImageView_construct;
   o.setup                 = MO.FEaiCockpitAchievementImageView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementImageView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementImageView_dispose;
   return o;
}
MO.FEaiCockpitAchievementImageView_onPaintBegin = function FEaiCockpitAchievementImageView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementImageView_construct = function FEaiCockpitAchievementImageView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementImageView_setup = function FEaiCockpitAchievementImageView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementImageView_processLogic = function FEaiCockpitAchievementImageView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementImageView_dispose = function FEaiCockpitAchievementImageView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementInvestmentRate = function FEaiCockpitAchievementInvestmentRate(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.investmentRate';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementInvestmentRate_construct;
   o.setup      = MO.FEaiCockpitAchievementInvestmentRate_setup;
   o.process    = MO.FEaiCockpitAchievementInvestmentRate_process;
   o.dispose    = MO.FEaiCockpitAchievementInvestmentRate_dispose;
   return o;
}
MO.FEaiCockpitAchievementInvestmentRate_construct = function FEaiCockpitAchievementInvestmentRate_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementInvestmentRate_setup = function FEaiCockpitAchievementInvestmentRate_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementInvestmentRateSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementInvestmentRateView);
}
MO.FEaiCockpitAchievementInvestmentRate_process = function FEaiCockpitAchievementInvestmentRate_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementInvestmentRate_dispose = function FEaiCockpitAchievementInvestmentRate_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot = function FEaiCockpitAchievementInvestmentRateSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/investmentRate.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._rateChart            = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementInvestmentRateSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementInvestmentRateSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementInvestmentRateSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementInvestmentRateSnapshot_construct;
   o.onFetchData           = MO.FEaiCockpitAchievementInvestmentRateSnapshot_onFetchData;
   o.setup                 = MO.FEaiCockpitAchievementInvestmentRateSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementInvestmentRateSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementInvestmentRateSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementInvestmentRateSnapshot_dispose;
   o._comingSoonImage      = null;
   return o;
}
 MO.FEaiCockpitAchievementInvestmentRateSnapshot_onFetchData = function FEaiCockpitAchievementInvestmentRateSnapshot_onFetchData(event){
   var o = this;
   var data = o._data;
   data.unserializeSignBuffer(event.sign, event.content, true);
   var ds = data;
   if(data.investmentAmount()){
      o._rateChart.setData(data);
   }
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_onPaintBegin = function FEaiCockpitAchievementInvestmentRateSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._productImage,left+width-150,top+20,107,178);
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_onPaintEnd = function FEaiCockpitAchievementInvestmentRateSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_construct = function FEaiCockpitAchievementInvestmentRateSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 7, 0);
   o._cellSize.set(7, 2);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitAchievementMessageNextRates);
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_setup = function FEaiCockpitAchievementInvestmentRateSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._productImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/productname.png');
   var rateChart = o._rateChart = MO.Class.create(MO.FEaiCockpitMessageAchievementRateChart);
   rateChart.setLocation(120, 0);
   rateChart.setSize(480, 240);
   o.push(rateChart);
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_processLogic = function FEaiCockpitAchievementInvestmentRateSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchRate(o, o.onFetchData);
   }
   o._rateChart.dirty();
}
MO.FEaiCockpitAchievementInvestmentRateSnapshot_dispose = function FEaiCockpitAchievementInvestmentRateSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementInvestmentRateView = function FEaiCockpitAchievementInvestmentRateView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementInvestmentRateView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementInvestmentRateView_construct;
   o.setup                 = MO.FEaiCockpitAchievementInvestmentRateView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementInvestmentRateView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementInvestmentRateView_dispose;
   return o;
}
MO.FEaiCockpitAchievementInvestmentRateView_onPaintBegin = function FEaiCockpitAchievementInvestmentRateView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementInvestmentRateView_construct = function FEaiCockpitAchievementInvestmentRateView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementInvestmentRateView_setup = function FEaiCockpitAchievementInvestmentRateView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementInvestmentRateView_processLogic = function FEaiCockpitAchievementInvestmentRateView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementInvestmentRateView_dispose = function FEaiCockpitAchievementInvestmentRateView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitMessageAchievement = function FEaiCockpitMessageAchievement(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._investmentTotal     = MO.Class.register(o, [new MO.AGetter('_investmentTotal'), new MO.APersistence('_investmentTotal', MO.EDataType.Double)]);
   o._redemptionTotal     = MO.Class.register(o, [new MO.AGetter('_redemptionTotal'), new MO.APersistence('_redemptionTotal', MO.EDataType.Double)]);
   o._netinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   o._departments         = MO.Class.register(o, [new MO.AGetter('_departments'), new MO.APersistence('_departments', MO.EDataType.Objects, MO.FEaiCockpitMessageAchievementDepartment)]);
   return o;
}
MO.FEaiCockpitMessageAchievementDepartment = function FEaiCockpitMessageAchievementDepartment(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label               = MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._investmentAmount    = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   o._redemptionAmount    = MO.Class.register(o, [new MO.AGetter('_redemptionAmount'), new MO.APersistence('_redemptionAmount', MO.EDataType.Double)]);
   o._netinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   o._marketerCount       = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   o._marketerTotal       = MO.Class.register(o, [new MO.AGetter('_marketerTotal'), new MO.APersistence('_marketerTotal', MO.EDataType.Int32)]);
   o._customerCount       = MO.Class.register(o, [new MO.AGetter('_customerCount'), new MO.APersistence('_customerCount', MO.EDataType.Int32)]);
   o._customerTotal       = MO.Class.register(o, [new MO.AGetter('_customerTotal'), new MO.APersistence('_customerTotal', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitAchievementMessageHistogram = function FEaiCockpitAchievementMessageHistogram(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label = MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._amount = MO.Class.register(o, [new MO.AGetter('_amount'), new MO.APersistence('_amount', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementMessageHistograms = function FEaiCockpitAchievementMessageHistograms(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._items = MO.Class.register(o, [new MO.AGetter('_items'), new MO.APersistence('_items', MO.EDataType.Objects, MO.FEaiCockpitAchievementMessageHistogram)]);
   return o;
}
MO.FEaiCockpitMessageAchievementNextBusinessCard = function FEaiCockpitMessageAchievementNextBusinessCard(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._comingSoon = true;
   o._businessName = MO.Class.register(o, [new MO.AGetter('_businessName'), new MO.APersistence('_businessName', MO.EDataType.String)]);
   o._departmentLeader = MO.Class.register(o, [new MO.AGetter('_departmentLeader'), new MO.APersistence('_departmentLeader', MO.EDataType.String)]);
   o._departmentCount = MO.Class.register(o, [new MO.AGetter('_departmentCount'), new MO.APersistence('_departmentCount', MO.EDataType.Int32)]);
   o._marketerCount = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   o._investmentCount = MO.Class.register(o, [new MO.AGetter('_investmentCount'), new MO.APersistence('_investmentCount', MO.EDataType.Double)]);
   o._redemptionCount = MO.Class.register(o, [new MO.AGetter('_redemptionCount'), new MO.APersistence('_redemptionCount', MO.EDataType.Double)]);
   o._netinvestmentCount = MO.Class.register(o, [new MO.AGetter('_netinvestmentCount'), new MO.APersistence('_netinvestmentCount', MO.EDataType.Double)]);
   o._redemptionRate = MO.Class.register(o, [new MO.AGetter('_redemptionRate'), new MO.APersistence('_redemptionRate', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementMessageNextDay = function FEaiCockpitAchievementMessageNextDay(o){
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
MO.FEaiCockpitAchievementMessageNextDays = function FEaiCockpitAchievementMessageNextDays(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._day = MO.Class.register(o, [new MO.AGetter('_days'), new MO.APersistence('_days', MO.EDataType.Objects, MO.FEaiCockpitAchievementMessageNextDay)]);
   return o;
}
MO.FEaiCockpitAchievementMessageNextMonth = function FEaiCockpitAchievementMessageNextMonth(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._recordDate               = MO.Class.register(o, [new MO.AGetter('_recordDate'), new MO.APersistence('_recordDate', MO.EDataType.String)]);
   o._investmentAmount         = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   o._redemptionAmount         = MO.Class.register(o, [new MO.AGetter('_redemptionAmount'), new MO.APersistence('_redemptionAmount', MO.EDataType.Double)]);
   o._netinvestmentAmount      = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementMessageNextMonths = function FEaiCockpitAchievementMessageNextMonths(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._Month = MO.Class.register(o, [new MO.AGetter('_Month'), new MO.APersistence('_Month', MO.EDataType.Objects, MO.FEaiCockpitAchievementMessageNextMonth)]);
   o._lastMonth = MO.Class.register(o, [new MO.AGetter('_lastMonth'), new MO.APersistence('_lastMonth', MO.EDataType.Objects, MO.FEaiCockpitAchievementMessageNextMonth)]);
   return o;
}
MO.FEaiCockpitMessageAchievementNextRadar = function FEaiCockpitMessageAchievementNextRadar(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._totalScore = MO.Class.register(o, [new MO.AGetter('_totalScore'), new MO.APersistence('_totalScore', MO.EDataType.Double)]);
   o._performance = MO.Class.register(o, [new MO.AGetter('_performance'), new MO.APersistence('_performance', MO.EDataType.Double)]);
   o._manpower = MO.Class.register(o, [new MO.AGetter('_manpower'), new MO.APersistence('_manpower', MO.EDataType.Int32)]);
   o._perCapita = MO.Class.register(o, [new MO.AGetter('_perCapita'), new MO.APersistence('_perCapita', MO.EDataType.Double)]);
   o._task = MO.Class.register(o, [new MO.AGetter('_task'), new MO.APersistence('_task', MO.EDataType.Double)]);
   o._completionRate = MO.Class.register(o, [new MO.AGetter('_completionRate'), new MO.APersistence('_completionRate', MO.EDataType.Double)]);
   o._trendCd = MO.Class.register(o, [new MO.AGetter('_trendCd'), new MO.APersistence('_trendCd', MO.EDataType.Int32)]);
   o._advice = MO.Class.register(o, [new MO.AGetter('_advice'), new MO.APersistence('_advice', MO.EDataType.String)]);
   o._performanceScore = MO.Class.register(o, [new MO.AGetter('_performanceScore'), new MO.APersistence('_performanceScore', MO.EDataType.Double)]);
   o._manpowerScore = MO.Class.register(o, [new MO.AGetter('_manpowerScore'), new MO.APersistence('_manpowerScore', MO.EDataType.Double)]);
   o._percapitaScore = MO.Class.register(o, [new MO.AGetter('_percapitaScore'), new MO.APersistence('_percapitaScore', MO.EDataType.Double)]);
   o._taskScore = MO.Class.register(o, [new MO.AGetter('_taskScore'), new MO.APersistence('_taskScore', MO.EDataType.Double)]);
   o._trendScore = MO.Class.register(o, [new MO.AGetter('_trendScore'), new MO.APersistence('_trendScore', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitMessageAchievementNextRank = function FEaiCockpitMessageAchievementNextRank(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._rank = MO.Class.register(o, [new MO.AGetter('_rank'), new MO.APersistence('_rank', MO.EDataType.String)]);
   return o;
}
MO.FEaiCockpitMessageAchievementNextRanks = function FEaiCockpitMessageAchievementNextRanks(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._achievementRank = MO.Class.register(o, [new MO.AGetter('_achievementRank'), new MO.APersistence('_achievementRank', MO.EDataType.Objects, MO.FEaiCockpitMessageAchievementNextRank)]);
   o._humanRank 	  = MO.Class.register(o, [new MO.AGetter('_humanRank'), new MO.APersistence('_humanRank', MO.EDataType.Objects, MO.FEaiCockpitMessageAchievementNextRank)]);
   o._averageRank	  = MO.Class.register(o, [new MO.AGetter('_averageRank'), new MO.APersistence('_averageRank', MO.EDataType.Objects, MO.FEaiCockpitMessageAchievementNextRank)]);
   return o;
}
MO.FEaiCockpitAchievementMessageNextRate = function FEaiCockpitAchievementMessageNextRate(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._productName          = MO.Class.register(o, [new MO.AGetter('_productName'), new MO.APersistence('_productName', MO.EDataType.String)]);
   o._investmentAmount         = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementMessageNextRates = function FEaiCockpitAchievementMessageNextRates(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._Rates = MO.Class.register(o, [new MO.AGetter('_Rates'), new MO.APersistence('_Rates', MO.EDataType.Objects, MO.FEaiCockpitAchievementMessageNextRate)]);
   o._investmentAmount = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementMessageTitleAchieve = function FEaiCockpitAchievementMessageTitleAchieve(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._investmentAmount    = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   o._redemptionAmount    = MO.Class.register(o, [new MO.AGetter('_redemptionAmount'), new MO.APersistence('_redemptionAmount', MO.EDataType.Double)]);
   o._netinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   o._investmentMonth       = MO.Class.register(o, [new MO.AGetter('_investmentMonth'), new MO.APersistence('_investmentMonth', MO.EDataType.Double)]);
   o._redemptionMonth        = MO.Class.register(o, [new MO.AGetter('_redemptionMonth'), new MO.APersistence('_redemptionMonth', MO.EDataType.Double)]);
   o._netinvestmentMonth     = MO.Class.register(o, [new MO.AGetter('_netinvestmentMonth'), new MO.APersistence('_netinvestmentMonth', MO.EDataType.Double)]);
   return o;
}
MO.FEaiCockpitAchievementModuleManager = function FEaiCockpitAchievementModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._navigatorModule = MO.Class.register(o, new MO.AGetter('_navigatorModule'));
   o._dayModule       = MO.Class.register(o, new MO.AGetter('_dayModule'));
   o._autoPlay        = false;
   o.construct        = MO.FEaiCockpitAchievementModuleManager_construct;
   o.setup            = MO.FEaiCockpitAchievementModuleManager_setup;
   o.dispose          = MO.FEaiCockpitAchievementModuleManager_dispose;
   return o;
}
MO.FEaiCockpitAchievementModuleManager_construct = function FEaiCockpitAchievementModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
}
MO.FEaiCockpitAchievementModuleManager_setup = function FEaiCockpitAchievementModuleManager_setup(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   o._navigatorModule = o.createModule(MO.FEaiCockpitNavigator);
   o._TitleAchievement = o.createModule(MO.FEaiCockpitAchievementTitleAchieve);
   o._TitleRank = o.createModule(MO.FEaiCockpitAchievementTitleRank);
   o._image    = o.createModule(MO.FEaiCockpitAchievementImage);
   o._DayCurve = o.createModule(MO.FEaiCockpitAchievementDayCurve);
   o._MonthCurve = o.createModule(MO.FEaiCockpitAchievementMonthCurve);
   o._Radar = o.createModule(MO.FEaiCockpitAchievementRadar);
   o._InvestmentRate = o.createModule(MO.FEaiCockpitAchievementInvestmentRate);
   o._BusinessCard = o.createModule(MO.FEaiCockpitAchievementBusinessCard);
   o._Histogram = o.createModule(MO.FEaiCockpitAchievementHistogram);
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
MO.FEaiCockpitAchievementModuleManager_dispose = function FEaiCockpitAchievementModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
MO.FEaiCockpitAchievementMonthCurve = function FEaiCockpitAchievementMonthCurve(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.monthCurve';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementMonthCurve_construct;
   o.setup      = MO.FEaiCockpitAchievementMonthCurve_setup;
   o.process    = MO.FEaiCockpitAchievementMonthCurve_process;
   o.dispose    = MO.FEaiCockpitAchievementMonthCurve_dispose;
   return o;
}
MO.FEaiCockpitAchievementMonthCurve_construct = function FEaiCockpitAchievementMonthCurve_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementMonthCurve_setup = function FEaiCockpitAchievementMonthCurve_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementMonthCurveSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementMonthCurveView);
}
MO.FEaiCockpitAchievementMonthCurve_process = function FEaiCockpitAchievementMonthCurve_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementMonthCurve_dispose = function FEaiCockpitAchievementMonthCurve_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementMonthCurveSnapshot = function FEaiCockpitAchievementMonthCurveSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/achievement/dayCurve.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._comingSoonImage      = null;
   o._dataset              = null;
   o._lineColors           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementMonthCurveSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementMonthCurveSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementMonthCurveSnapshot_onPaintEnd;
   o.setData               = MO.FEaiCockpitAchievementMonthCurveSnapshot_setData;
   o.construct             = MO.FEaiCockpitAchievementMonthCurveSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementMonthCurveSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementMonthCurveSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementMonthCurveSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementMonthCurveSnapshot_dispose;
   return o;
}
 MO.FEaiCockpitAchievementMonthCurveSnapshot_onDataFetch = function FEaiCockpitAchievementMonthCurveSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
   var monthData = o._data;
   monthData.unserializeSignBuffer(event.sign, event.content, true);
   var ss = monthData;
   o.setData(monthData);
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_onPaintBegin = function FEaiCockpitAchievementMonthCurveSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_onPaintEnd = function FEaiCockpitAchievementMonthCurveSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   graphic.drawImage(o._redemptionImage,left+width-100,top+20,54,60);
   var title = '当月业绩趋势（天）';
   var titleWidth = graphic.textWidth(title);
   graphic.setFont('bold 16px Microsoft YaHei');
   graphic.drawText(title,left+width/2-titleWidth/2,top+25,'#fee71f');
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_construct = function FEaiCockpitAchievementMonthCurveSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 5, 0);
   o._cellSize.set(7, 2);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitAchievementMessageNextMonths);
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_setup = function FEaiCockpitAchievementMonthCurveSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._redemptionImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/redemption.png');
   var chart = o._chart = MO.Class.create(MO.FGuiChart);
   chart.selectPainter(MO.FGuiChartLinePainter);
   chart.setLocation(60,11);
   chart.setSize(720,150);
   chart.paintRectangle().set(50,30,580,150);
   chart.axisX().createDegrees(1, 31);
   chart.axisY().setLineWidth(1);
   chart.axisY().setLineColor('#758191');
   chart.axisX().setOptionShowAxis(false);
   chart.axisX().setOptionShowFirstLine(true);
   chart.axisX().findDegreeByValue(1).setLabel("1");
   chart.axisX().findDegreeByValue(1).setLineColor("#758191");
   chart.axisX().findDegreeByValue(6).setLabel("6");
   chart.axisX().findDegreeByValue(11).setLabel("11");
   chart.axisX().findDegreeByValue(16).setLabel("16");
   chart.axisX().findDegreeByValue(21).setLabel("21");
   chart.axisX().findDegreeByValue(26).setLabel("26");
   chart.axisX().findDegreeByValue(31).setLabel("31");
   chart.axisY().setDivisor(10000);
   chart.axisX().setLabel("(天)");
   chart.axisY().setLabel("(万)");
   chart.axisY().setDegreeLabelGap(6);
   chart.axisX().setDegreeLabelGap(6);
   o.push(chart);
   var lineColors = o._lineColors = ['#4b5e6f', '#80a861', '#2069a0', '#51c0db', '#68f34e', '#9b1933'];
   var dataset = o._dataset = MO.Class.create(MO.FUiChartDataset);
   for (var i=0;i<6;i++){
      var series = MO.Class.create(MO.FUiChartDataSeries);
      series.setLineWidth(3);
      series.setLineColor(lineColors[i]);
      dataset.push(series);
   }
    chart.setDataset(dataset);
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_setData = function FEaiCockpitAchievementMonthCurveSnapshot_setData(data) {
   var o = this;
   var data = o._data;
   var month = data.Month();
   var lastMonth = data.lastMonth();
   var dataset = o._dataset;
   var serieses = dataset.serieses();
   var monthCount = month.count();
   var lastMonthCount = lastMonth.count();
   var colors = o._lineColors;
   for(var i = 0; i < 6; ++i) {
      var series = serieses.get(i);
      series.values().clear();
   }
   for(var i = 0; i < monthCount; ++i) {
      var day = month.get(i);
      if(day.investmentAmount() != 0) serieses.get(0).values().push(day.investmentAmount());
      if(day.redemptionAmount() != 0) serieses.get(1).values().push(day.redemptionAmount());
      if(day.netinvestmentAmount() != 0) serieses.get(2).values().push(day.netinvestmentAmount());
   }
   for (var i = 0; i <lastMonthCount; i++) {
      var day = lastMonth.get(i);
      if(day.investmentAmount() != 0) serieses.get(3).values().push(day.investmentAmount());
      if(day.redemptionAmount() != 0) serieses.get(4).values().push(day.redemptionAmount());
      if(day.netinvestmentAmount() != 0){
         serieses.get(5).setOptionShowDot(true);
         serieses.get(5).setDotColor(colors[i]);
         serieses.get(5).setDotSize(3);
         serieses.get(5).values().push(day.netinvestmentAmount());
      }
   };
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
MO.FEaiCockpitAchievementMonthCurveSnapshot_processLogic = function FEaiCockpitAchievementMonthCurveSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchMonth(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementMonthCurveSnapshot_dispose = function FEaiCockpitAchievementMonthCurveSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementMonthCurveView = function FEaiCockpitAchievementMonthCurveView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementMonthCurveView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementMonthCurveView_construct;
   o.setup                 = MO.FEaiCockpitAchievementMonthCurveView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementMonthCurveView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementMonthCurveView_dispose;
   return o;
}
MO.FEaiCockpitAchievementMonthCurveView_onPaintBegin = function FEaiCockpitAchievementMonthCurveView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementMonthCurveView_construct = function FEaiCockpitAchievementMonthCurveView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementMonthCurveView_setup = function FEaiCockpitAchievementMonthCurveView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementMonthCurveView_processLogic = function FEaiCockpitAchievementMonthCurveView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementMonthCurveView_dispose = function FEaiCockpitAchievementMonthCurveView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementRadar = function FEaiCockpitAchievementRadar(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.radar';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementRadar_construct;
   o.setup      = MO.FEaiCockpitAchievementRadar_setup;
   o.process    = MO.FEaiCockpitAchievementRadar_process;
   o.dispose    = MO.FEaiCockpitAchievementRadar_dispose;
   return o;
}
MO.FEaiCockpitAchievementRadar_construct = function FEaiCockpitAchievementRadar_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementRadar_setup = function FEaiCockpitAchievementRadar_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementRadarSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementRadarView);
}
MO.FEaiCockpitAchievementRadar_process = function FEaiCockpitAchievementRadar_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementRadar_dispose = function FEaiCockpitAchievementRadar_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementRadarSnapshot = function FEaiCockpitAchievementRadarSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri = '{eai.resource}/cockpit/achievement/radar.png';
   o._comingSoon           = false;
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._font1stRowR          = null;
   o._font1stRowL          = null;
   o._font2ndRow           = null;
   o._font3rdRow           = null;
   o._totalScore           = "";
   o._performance          = 0;
   o._manpower             = "";
   o._perCapita            = "";
   o._task                 = 0;
   o._completionRate       = "";
   o._trendCd              = 0;
   o._advice = "";
   o._performanceScore     = 0;
   o._manpowerScore        = 0;
   o._percapitaScore       = 0;
   o._taskScore            = 0;
   o._trendScore           = 0;
   o._fiveForceImage       = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementRadarSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementRadarSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementRadarSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementRadarSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementRadarSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementRadarSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementRadarSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementRadarSnapshot_dispose;
   o._comingSoonImage      = null;
   return o;
}
 MO.FEaiCockpitAchievementRadarSnapshot_onDataFetch = function FEaiCockpitAchievementRadarSnapshot_onDataFetch(event){
   var o = this;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o._totalScore = data.totalScore();
      o._performance = data.performance();
      o._manpower = data.manpower();
      o._perCapita = data.perCapita();
      o._task = data.task();
      o._completionRate = data.completionRate();
      o._trendCd = data.trendCd();
      o._advice = data.advice();
      o._performanceScore = data.performanceScore();
      o._manpowerScore = data.manpowerScore();
      o._percapitaScore = data.percapitaScore();
      o._taskScore = data.taskScore();
      o._trendScore = data.trendScore();
   }
   o.dirty();
}
MO.FEaiCockpitAchievementRadarSnapshot_onPaintBegin = function FEaiCockpitAchievementRadarSnapshot_onPaintBegin(event) {
   var o = this;
   var data = o._data;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var fiveBaseX =  left + 380;
   var fiveBaseY =  top + 20;
   graphic.drawImage(o._fiveForceImage, fiveBaseX, fiveBaseY);
   var fiveMiddleX = 153;
   var ficeMiddleY = 140;
   var calcX = function(x,point){
      return  fiveBaseX + fiveMiddleX - (fiveMiddleX - x) * point / 100;
   }
   var calcY = function(y,point){
      return fiveBaseY + ficeMiddleY - (ficeMiddleY - y) * point / 100;
   }
   var performanceX = calcX( 153 , o._performanceScore );
   var performanceY = calcY( 19 , o._performanceScore );
   var percapitaX = calcX( 37 , o._percapitaScore );
   var percapitaY = calcY( 106 , o._percapitaScore );
   var tendX = calcX( 82 , o._trendScore );
   var tendY = calcY( 246 , o._trendScore );
   var taskX = calcX( 228 , o._taskScore );
   var taskY = calcY( 240 , o._taskScore );
   var manX = calcX( 274 , o._manpowerScore );
   var manY = calcY( 106 , o._manpowerScore );
   graphic.drawLine(performanceX, performanceY, percapitaX, percapitaY, '#fd86fa', 4);
   graphic.drawLine(percapitaX, percapitaY, tendX, tendY, '#fd86fa', 4);
   graphic.drawLine(tendX, tendY, taskX, taskY, '#fd86fa', 4);
   graphic.drawLine(taskX, taskY, manX, manY, '#fd86fa', 4);
   graphic.drawLine(manX, manY, performanceX, performanceY, '#fd86fa', 4);
   var circleRadius = 5
   graphic.drawCircle(performanceX, performanceY, circleRadius, circleRadius, '#fd86fa', '#fd86fa');
   graphic.drawCircle(percapitaX, percapitaY, circleRadius, circleRadius, '#fd86fa', '#fd86fa');
   graphic.drawCircle(tendX, tendY, circleRadius, circleRadius, '#fd86fa', '#fd86fa');
   graphic.drawCircle(taskX, taskY, circleRadius, circleRadius, '#fd86fa', '#fd86fa');
   graphic.drawCircle(manX, manY, circleRadius, circleRadius, '#fd86fa', '#fd86fa');
   var drawX = left + 20;
   var drawY = top + 60;
   var font1stRowR = o._font1stRowR;
   var font1stRowL = o._font1stRowL;
   var font2ndRow = o._font2ndRow;
   var font3rdRow = o._font3rdRow;
   var drawText = "总体评分:";
   graphic.setFont(font1stRowR.toString());
   graphic.drawText(drawText, drawX, drawY, font1stRowR.color);
   var drawText = o._totalScore;
   graphic.setFont(font1stRowL.toString());
   graphic.drawText(drawText, drawX + 180, drawY, font1stRowL.color);
   var drawText = "业绩:     ";
   var performance = o._performance;
   if(performance > 100000000){
      drawText += Math.floor(performance / 100000000) + "亿";
   }
   if(performance > 10000){
      drawText += Math.floor(performance / 10000 % 10000) + "万";
   }
   drawText += Math.floor(performance % 10000) + "元";
   drawY += 40;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "人力:     " + o._manpower + "人";
   drawY += 40;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "人均:     " + Math.floor(o._perCapita) + "元";
   drawY += 40;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "任务/完成度:     ";
   var task = o._task;
   if (task > 100000000) {
      drawText += Math.floor(task / 100000000) + "亿";
   }
   if (performance < 100000000) {
      drawText += Math.floor(task / 10000) + "万";
   }
   drawText +=  "/" + Math.floor(o._completionRate * 10000) / 100 + "%";
   drawY += 40;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "趋势:     ";
   var trendCd = o._trendCd;
   if(trendCd == 0){
      drawText += "→"
   }else if(trendCd == 1){
      drawText += "↓"
   }else if(trendCd == 2){
      drawText += "→"
   }else if(trendCd == 3){
      drawText += "↑"
   }
   drawY += 50;
   graphic.setFont(font2ndRow.toString());
   graphic.drawText(drawText, drawX, drawY, font2ndRow.color);
   var drawText = "改进建议:" + o._advice;
   drawY += 50;
   graphic.setFont(font3rdRow.toString());
   graphic.drawTextRectangle(drawText, drawX, drawY, 550, 200, 20, font3rdRow.color);
}
MO.FEaiCockpitAchievementRadarSnapshot_onPaintEnd = function FEaiCockpitAchievementRadarSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementRadarSnapshot_construct = function FEaiCockpitAchievementRadarSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(7, 3, 0);
   o._cellSize.set(6, 3);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitMessageAchievementNextRadar);
   o._font1stRowR = new MO.SUiFont();
   o._font1stRowL = new MO.SUiFont();
   o._font2ndRow = new MO.SUiFont();
   o._font3rdRow = new MO.SUiFont();
}
MO.FEaiCockpitAchievementRadarSnapshot_setup = function FEaiCockpitAchievementRadarSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._fiveForceImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/fiveForce.png');
   o._font1stRowR.parse('bold #FFFFFF 28px Microsoft YaHei');
   o._font1stRowL.parse('#FF0B11 46px Microsoft YaHei');
   o._font2ndRow.parse('#FFFFFF 23px Microsoft YaHei');
   o._font3rdRow.parse('#FFFFFF 17px Microsoft YaHei');
}
MO.FEaiCockpitAchievementRadarSnapshot_processLogic = function FEaiCockpitAchievementRadarSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchRadar(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementRadarSnapshot_dispose = function FEaiCockpitAchievementRadarSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o._font1stRowR = MO.Lang.Object.dispose(o._font1stRowR);
   o._font1stRowL = MO.Lang.Object.dispose(o._font1stRowL);
   o._font2ndRow = MO.Lang.Object.dispose(o._font2ndRow);
   o._font3rdRow = MO.Lang.Object.dispose(o._font3rdRow);
   o._fiveForceImage = MO.Lang.Object.dispose(o._fiveForceImage);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementRadarView = function FEaiCockpitAchievementRadarView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementRadarView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementRadarView_construct;
   o.setup                 = MO.FEaiCockpitAchievementRadarView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementRadarView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementRadarView_dispose;
   return o;
}
MO.FEaiCockpitAchievementRadarView_onPaintBegin = function FEaiCockpitAchievementRadarView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementRadarView_construct = function FEaiCockpitAchievementRadarView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementRadarView_setup = function FEaiCockpitAchievementRadarView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementRadarView_processLogic = function FEaiCockpitAchievementRadarView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementRadarView_dispose = function FEaiCockpitAchievementRadarView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementSnapshot = function FEaiCockpitAchievementSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._name                 = 'cockpit.achievement.snapshot';
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/ground.png';
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._rankGroundImage      = null;
   o._firstMarkImage       = null;
   o._secondMarkImage      = null;
   o._thirdMarkImage       = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementSnapshot_onPaintBegin;
   o.onAchievementFetch    = MO.FEaiCockpitAchievementSnapshot_onAchievementFetch;
   o.construct             = MO.FEaiCockpitAchievementSnapshot_construct;
   o.setup                 = MO.FEaiCockpitAchievementSnapshot_setup;
   o.setData               = MO.FEaiCockpitAchievementSnapshot_setData;
   o.processLogic          = MO.FEaiCockpitAchievementSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementSnapshot_dispose;
   return o;
}
MO.FEaiCockpitAchievementSnapshot_onPaintBegin = function FEaiCockpitAchievementSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var top =rectangle.top;
   var left = rectangle.left;
   var width = rectangle.width;
   graphic.drawImage(o._firstMarkImage, 10, 97, 578, 23);
   graphic.drawImage(o._secondMarkImage, 10, 98 + 23, 578, 23);
   graphic.drawImage(o._thirdMarkImage, 10, 99 + 23 + 23, 578, 23);
}
MO.FEaiCockpitAchievementSnapshot_onAchievementFetch = function FEaiCockpitAchievementSnapshot_onAchievementFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if(data.unserializeSignBuffer(event.sign, event.content, true)){
      o.setData(data);
   }
}
MO.FEaiCockpitAchievementSnapshot_construct = function FEaiCockpitAchievementSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(11, 4, 0);
   o._cellSize.set(5, 5);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._currentDate = new MO.TDate();
   o._data = MO.Class.create(MO.FEaiCockpitMessageAchievement);
}
MO.FEaiCockpitAchievementSnapshot_setup = function FEaiCockpitAchievementSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   o._firstMarkImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/first_mark.png');
   o._secondMarkImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/second_mark.png');
   o._thirdMarkImage = o.loadResourceImage('{eai.resource}/cockpit/achievement/third_mark.png');
   var grid = o._gridControl = MO.Class.create(MO.FGuiTable);
   grid.setOptionClip(true);
   grid.setLocation(10, 61);
   grid.setSize(578, 520);
   grid.setHeadHeight(35);
   grid.setHeadBackColor('#4f597d');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 22;
   grid.headFont().color = '#2adae9';
   grid.setRowHeight(23);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.rowFont().color = '#ffffff';
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('label');
   column.setLabel('公司名称');
   column.setTextAlign(MO.EUiAlign.LeftPadding);
   column.setWidth(100);
   column.setDataName('label');
   column.setWidth(160);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnCurrency);
   column.setName('investmentAmount');
   column.setLabel('投资额');
   column.setDataName('investment_amount');
   column.cellPadding().right = 10;
   column.setNormalColor('#ffffff');
   column.setHighColor('#fb8523');
   column.setHighestColor('#edfc2d');
   column.setNegativeColor('#ffffff');
   column.setWidth(140);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('customerCount');
   column.setLabel('投资客户数');
   column.setDataName('customer_count');
   column.setTextAlign(MO.EUiAlign.Right);
   column.setWidth(100);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('level');
   column.setLabel('排名');
   column.setDataName('level');
   column.setTextAlign(MO.EUiAlign.Right);
   column.setWidth(80);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   o.push(grid);
}
MO.FEaiCockpitAchievementSnapshot_setData = function FEaiCockpitAchievementSnapshot_setData(data) {
   var o = this;
   var departments = data.departments();
   var grid = o._gridControl;
   grid.clearRows();
   var count = departments.count();
   for (var i = 0; i < count; i++) {
      var department = departments.at(i);
      var row = grid.allocRow();
      var label = department.label();
      if(label == "上海仁立网络科技有限公司"){
         label = "上海仁立有限公司";
      }else if(label == "安信普华财富投资管理（北京）有限公司"){
         label = "安信普华（北京）";
      }else if(label == "金易融(上海)网络科技有限公司"){
         label = "金易融(上海)";
      }else if(label == "深圳前海智赢商务信息咨询有限公司"){
         label = "深圳前海智赢";
      }
      row.set('label', label);
      row.set('investment_amount', department.investmentAmount().toFixed(0));
      row.set('customer_count', department.customerCount());
      row.set('level', i+1);
      switch(i%3){
      case 0:
      break;
      case 1:
      break;
      case 2:
      break;
      }
      grid.pushRow(row);
   }
   o.dirty();
}
MO.FEaiCockpitAchievementSnapshot_processLogic = function FEaiCockpitAchievementSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetch(o, o.onAchievementFetch);
   }
}
MO.FEaiCockpitAchievementSnapshot_dispose = function FEaiCockpitAchievementSnapshot_dispose() {
   var o = this;
   o._units = MO.Lang.Object.dispose(o._units);
   o._backgroundPadding = MO.Lang.Object.dispose(o._backgroundPadding);
   o._rankGroundImage = MO.Lang.Object.dispose(o._rankGroundImage);
   o._firstMarkImage = MO.Lang.Object.dispose(o._firstMarkImage);;
   o._secondMarkImage = MO.Lang.Object.dispose(o._secondMarkImage);;
   o._thirdMarkImage = MO.Lang.Object.dispose(o._thirdMarkImage);;
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleAchieve = function FEaiCockpitAchievementTitleAchieve(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.titleAmchievement';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementTitleAchieve_construct;
   o.setup      = MO.FEaiCockpitAchievementTitleAchieve_setup;
   o.process    = MO.FEaiCockpitAchievementTitleAchieve_process;
   o.dispose    = MO.FEaiCockpitAchievementTitleAchieve_dispose;
   return o;
}
MO.FEaiCockpitAchievementTitleAchieve_construct = function FEaiCockpitAchievementTitleAchieve_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementTitleAchieve_setup = function FEaiCockpitAchievementTitleAchieve_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementTitleAchieveSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementTitleAchieveView);
}
MO.FEaiCockpitAchievementTitleAchieve_process = function FEaiCockpitAchievementTitleAchieve_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementTitleAchieve_dispose = function FEaiCockpitAchievementTitleAchieve_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot = function FEaiCockpitAchievementTitleAchieveSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/rankleft.png';
   o._data                 = null;
   o._chartData            = null;
   o._chartDataSet         = null;
   o._dataTicker           = null;
   o._gridImage            = null;
   o._listBox              = null;
   o._index                = 0;
   o._page                 = 0;
   o._pageItemsTotal       = 0;
   o._pageMax              = 0;
   o._pageItemsMax         = 8;
   o._rollDuration         = 5000;
   o._rollTicker           = null;
   o._lineChart            = null;
   o._data                 = MO.Class.register(o,new MO.AGetSet('_data'));
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementTitleAchieveSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementTitleAchieveSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementTitleAchieveSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementTitleAchieveSnapshot_construct;
   o.onFetchDayData        = MO.FEaiCockpitAchievementTitleAchieveSnapshot_onFetchDayData;
   o.setup                 = MO.FEaiCockpitAchievementTitleAchieveSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementTitleAchieveSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementTitleAchieveSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementTitleAchieveSnapshot_dispose;
   o._comingSoonImage      = null;
   return o;
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_onFetchDayData = function FEaiCockpitAchievementTitleAchieveSnapshot_onFetchDayData(event){
   var o = this;
   var data  = o._data ;
   data.unserializeSignBuffer(event.sign, event.content, true);
   var logoBar = o._logoBar;
   if(data.investmentAmount()){
      var investmentTotalCount = logoBar.findComponent('investmentTotalCount');
      investmentTotalCount.setValue(parseInt(data.investmentAmount()).toString());
      var redemptionTotalCount = logoBar.findComponent('redemptionTotalCount');
      redemptionTotalCount.setValue(parseInt(data.redemptionAmount()).toString());
      var netinvestmentTotalCount = logoBar.findComponent('netinvestmentTotalCount');
      netinvestmentTotalCount.setValue(parseInt(data.netinvestmentAmount()).toString());
      var investmentTotal = logoBar.findComponent('investmentTotal');
      investmentTotal.setValue(parseInt(data.investmentMonth()).toString());
      var redemptionTotal = logoBar.findComponent('redemptionTotal');
      redemptionTotal.setValue(parseInt(data.redemptionMonth()).toString());
      var netinvestmentTotal = logoBar.findComponent('netinvestmentTotal');
      netinvestmentTotal.setValue(parseInt(data.netinvestmentMonth()).toString());
   }
}
 MO.FEaiCockpitAchievementTitleAchieveSnapshot_onDataFetch = function FEaiCockpitAchievementTitleAchieveSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_onPaintBegin = function FEaiCockpitAchievementTitleAchieveSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_onPaintEnd = function FEaiCockpitAchievementTitleAchieveSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_construct = function FEaiCockpitAchievementTitleAchieveSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(0, 1, 0);
   o._cellSize.set(7, 1);
   o._dataTicker = new MO.TTicker(1000 * 10);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitAchievementMessageTitleAchieve);
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_setup = function FEaiCockpitAchievementTitleAchieveSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var frame = o._logoBar = MO.Console.find(MO.FGuiFrameConsole).get(o, 'eai.chart.cockpit.LogoBarAchievement');
   o.push(frame);
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_processLogic = function FEaiCockpitAchievementTitleAchieveSnapshot_processLogic(){
   var o = this;
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchTitle(o, o.onFetchDayData);
      var data = o._data;
      var logoBar = o._logoBar;
      if(data.investmentAmount()){
      var investmentTotalCount = logoBar.findComponent('investmentTotalCount');
      investmentTotalCount.setValue(parseInt(data.investmentAmount()).toString());
      var redemptionTotalCount = logoBar.findComponent('redemptionTotalCount');
      redemptionTotalCount.setValue(parseInt(data.redemptionAmount()).toString());
      var netinvestmentTotalCount = logoBar.findComponent('netinvestmentTotalCount');
      netinvestmentTotalCount.setValue(parseInt(data.netinvestmentAmount()).toString());
      var investmentTotal = logoBar.findComponent('investmentTotal');
      investmentTotal.setValue(parseInt(data.investmentMonth()).toString());
      var redemptionTotal = logoBar.findComponent('redemptionTotal');
      redemptionTotal.setValue(parseInt(data.redemptionMonth()).toString());
      var netinvestmentTotal = logoBar.findComponent('netinvestmentTotal');
      netinvestmentTotal.setValue(parseInt(data.netinvestmentMonth()).toString());
      }
   }
   o.dirty();
}
MO.FEaiCockpitAchievementTitleAchieveSnapshot_dispose = function FEaiCockpitAchievementTitleAchieveSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleAchieveView = function FEaiCockpitAchievementTitleAchieveView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementTitleAchieveView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementTitleAchieveView_construct;
   o.setup                 = MO.FEaiCockpitAchievementTitleAchieveView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementTitleAchieveView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementTitleAchieveView_dispose;
   return o;
}
MO.FEaiCockpitAchievementTitleAchieveView_onPaintBegin = function FEaiCockpitAchievementTitleAchieveView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementTitleAchieveView_construct = function FEaiCockpitAchievementTitleAchieveView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementTitleAchieveView_setup = function FEaiCockpitAchievementTitleAchieveView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementTitleAchieveView_processLogic = function FEaiCockpitAchievementTitleAchieveView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementTitleAchieveView_dispose = function FEaiCockpitAchievementTitleAchieveView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleRank = function FEaiCockpitAchievementTitleRank(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModule);
   o._name      = 'achievement.titleRank';
   o._typeCd    = MO.EEaiCockpitModule.Logic;
   o._slideshow = true;
   o.construct  = MO.FEaiCockpitAchievementTitleRank_construct;
   o.setup      = MO.FEaiCockpitAchievementTitleRank_setup;
   o.process    = MO.FEaiCockpitAchievementTitleRank_process;
   o.dispose    = MO.FEaiCockpitAchievementTitleRank_dispose;
   return o;
}
MO.FEaiCockpitAchievementTitleRank_construct = function FEaiCockpitAchievementTitleRank_construct(){
   var o = this;
   o.__base.FEaiCockpitModule.construct.call(o);
}
MO.FEaiCockpitAchievementTitleRank_setup = function FEaiCockpitAchievementTitleRank_setup(){
   var o = this;
   o._controlSnapshot = o.createControl(MO.FEaiCockpitAchievementTitleRankSnapshot);
   o._controlView = o.createControl(MO.FEaiCockpitAchievementTitleRankView);
}
MO.FEaiCockpitAchievementTitleRank_process = function FEaiCockpitAchievementTitleRank_process(){
   var o = this;
   o.__base.FEaiCockpitModule.process.call(o);
}
MO.FEaiCockpitAchievementTitleRank_dispose = function FEaiCockpitAchievementTitleRank_dispose(){
   var o = this;
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o.__base.FEaiCockpitModule.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleRankSnapshot = function FEaiCockpitAchievementTitleRankSnapshot(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControl);
   o._backgroundUri        = '{eai.resource}/cockpit/achievement/rankright.png';
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
   o._rollTicker           = null;
   o._lineChart            = null;
   o._gridControl          = null; //表格控件
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onDataFetch           = MO.FEaiCockpitAchievementTitleRankSnapshot_onDataFetch;
   o.onPaintBegin          = MO.FEaiCockpitAchievementTitleRankSnapshot_onPaintBegin;
   o.onPaintEnd            = MO.FEaiCockpitAchievementTitleRankSnapshot_onPaintEnd;
   o.construct             = MO.FEaiCockpitAchievementTitleRankSnapshot_construct;
   o.setData               = MO.FEaiCockpitAchievementTitleRankSnapshot_setData;
   o.setup                 = MO.FEaiCockpitAchievementTitleRankSnapshot_setup;
   o.roll                  = MO.FEaiCockpitAchievementTitleRankSnapshot_roll;
   o.processLogic          = MO.FEaiCockpitAchievementTitleRankSnapshot_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementTitleRankSnapshot_dispose;
   o._comingSoonImage      = null;
   return o;
}
MO.FEaiCockpitAchievementTitleRankSnapshot_onDataFetch = function FEaiCockpitAchievementTitleRankSnapshot_onDataFetch(event){
   var o = this;
   var content = event.content;
   var data = o._data;
   if (data.unserializeSignBuffer(event.sign, event.content, true)) {
      o.setData(data);
   }
}
MO.FEaiCockpitAchievementTitleRankSnapshot_setData = function FEaiCockpitAchievementTitleRankSnapshot_setData(data) {
   var o = this;
   var achievementRank = data.achievementRank();
   var humanRank = data.humanRank();
   var averageRank = data.averageRank();
   if (achievementRank.count() < 3 || humanRank.count() < 3 || averageRank.count() < 3){
      return;
   }
   var grid = o._gridControl;
   grid.clearRows();
   row = grid.allocRow();
   row.set('corporateName', "第一名");
   row.set('firstName', achievementRank.at(0).rank());
   row.set('secondName', humanRank.at(0).rank());
   row.set('thirdName', averageRank.at(0).rank());
   grid.pushRow(row);
   row = grid.allocRow();
   row.set('corporateName', "第二名");
   row.set('firstName', achievementRank.at(1).rank());
   row.set('secondName', humanRank.at(1).rank());
   row.set('thirdName', averageRank.at(1).rank());
   grid.pushRow(row);
   row = grid.allocRow();
   row.set('corporateName', "第三名");
   row.set('firstName', achievementRank.at(2).rank());
   row.set('secondName', humanRank.at(2).rank());
   row.set('thirdName', averageRank.at(2).rank());
   grid.pushRow(row);
   o.dirty();
}
MO.FEaiCockpitAchievementTitleRankSnapshot_onPaintBegin = function FEaiCockpitAchievementTitleRankSnapshot_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintBegin.call(o, event);
}
MO.FEaiCockpitAchievementTitleRankSnapshot_onPaintEnd = function FEaiCockpitAchievementTitleRankSnapshot_onPaintEnd(event) {
   var o = this;
   o.__base.FEaiCockpitControl.onPaintEnd.call(o, event);
}
MO.FEaiCockpitAchievementTitleRankSnapshot_construct = function FEaiCockpitAchievementTitleRankSnapshot_construct() {
   var o = this;
   o.__base.FEaiCockpitControl.construct.call(o);
   o._cellLocation.set(7, 1, 0);
   o._cellSize.set(9, 1);
   o._dataTicker = new MO.TTicker(1000 * 60);
   o._rollTicker = new MO.TTicker(o._rollDuration);
   o._data = MO.Class.create(MO.FEaiCockpitMessageAchievementNextRanks);
}
MO.FEaiCockpitAchievementTitleRankSnapshot_setup = function FEaiCockpitAchievementTitleRankSnapshot_setup(){
   var o = this;
   o.__base.FEaiCockpitControl.setup.call(o);
   var grid = o._gridControl = MO.Class.create(MO.FGuiTable);
   grid.setOptionClip(true);
   grid.setLocation(60, 14);
   grid.setSize(900, 120);
   grid.setHeadHeight(18);
   grid.setHeadBackColor('rgba(255,0,0,0)');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 18;
   grid.headFont().color = '#ffffff';
   grid.setRowHeight(23);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.rowFont().color = '#ffffff';
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('corporateName');
   column.setLabel('');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setDataName('corporateName');
   column.setWidth(200);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('firstName');
   column.setLabel('业绩');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(230);
   column.setDataName('firstName');
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('secondName');
   column.setLabel('人力');
   column.setDataName('secondName');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(230);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('thirdName');
   column.setLabel('人均');
   column.setDataName('thirdName');
   column.setTextAlign(MO.EUiAlign.Center);
   column.setWidth(230);
   column.setPadding(0, 0, 0, 0);
   grid.pushColumn(column);
   grid.clearRows();
   row = grid.allocRow();
   row.set('corporateName', "业绩:");
   grid.pushRow(row);
   row = grid.allocRow();
   row.set('corporateName', "人力:");
   grid.pushRow(row);
   row = grid.allocRow();
   row.set('corporateName', "人均:");
   grid.pushRow(row);
   o.push(grid);
}
MO.FEaiCockpitAchievementTitleRankSnapshot_processLogic = function FEaiCockpitAchievementTitleRankSnapshot_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControl.processLogic.call(o);
   if(o._dataTicker.process()){
      var achievement = MO.Console.find(MO.FEaiLogicConsole).cockpit().achievement();
      achievement.doFetchRank(o, o.onDataFetch);
   }
}
MO.FEaiCockpitAchievementTitleRankSnapshot_dispose = function FEaiCockpitAchievementTitleRankSnapshot_dispose() {
   var o = this;
   o._data = MO.Lang.Object.dispose(o._data);
   o.__base.FEaiCockpitControl.dispose.call(o);
}
MO.FEaiCockpitAchievementTitleRankView = function FEaiCockpitAchievementTitleRankView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementTitleRankView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementTitleRankView_construct;
   o.setup                 = MO.FEaiCockpitAchievementTitleRankView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementTitleRankView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementTitleRankView_dispose;
   return o;
}
MO.FEaiCockpitAchievementTitleRankView_onPaintBegin = function FEaiCockpitAchievementTitleRankView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementTitleRankView_construct = function FEaiCockpitAchievementTitleRankView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementTitleRankView_setup = function FEaiCockpitAchievementTitleRankView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementTitleRankView_processLogic = function FEaiCockpitAchievementTitleRankView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementTitleRankView_dispose = function FEaiCockpitAchievementTitleRankView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitAchievementView = function FEaiCockpitAchievementView(o) {
   o = MO.Class.inherits(this, o, MO.FEaiCockpitControlView);
   o._data                 = null;
   o._dataTicker           = null;
   o._backgroundImage      = null;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onPaintBegin          = MO.FEaiCockpitAchievementView_onPaintBegin;
   o.construct             = MO.FEaiCockpitAchievementView_construct;
   o.setup                 = MO.FEaiCockpitAchievementView_setup;
   o.processLogic          = MO.FEaiCockpitAchievementView_processLogic;
   o.dispose               = MO.FEaiCockpitAchievementView_dispose;
   return o;
}
MO.FEaiCockpitAchievementView_onPaintBegin = function FEaiCockpitAchievementView_onPaintBegin(event) {
   var o = this;
   o.__base.FEaiCockpitControlView.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
}
MO.FEaiCockpitAchievementView_construct = function FEaiCockpitAchievementView_construct() {
   var o = this;
   o.__base.FEaiCockpitControlView.construct.call(o);
   o._cellLocation.set(0, 0, 0);
   o._cellSize.set(16, 9);
}
MO.FEaiCockpitAchievementView_setup = function FEaiCockpitAchievementView_setup(){
   var o = this;
   o.__base.FEaiCockpitControlView.setup.call(o);
}
MO.FEaiCockpitAchievementView_processLogic = function FEaiCockpitAchievementView_processLogic(){
   var o = this;
   o.__base.FEaiCockpitControlView.processLogic.call(o);
}
MO.FEaiCockpitAchievementView_dispose = function FEaiCockpitAchievementView_dispose() {
   var o = this;
   o.__base.FEaiCockpitControlView.dispose.call(o);
}
MO.FEaiCockpitMessageAchievement = function FEaiCockpitMessageAchievement(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._investmentTotal     = MO.Class.register(o, [new MO.AGetter('_investmentTotal'), new MO.APersistence('_investmentTotal', MO.EDataType.Double)]);
   o._redemptionTotal     = MO.Class.register(o, [new MO.AGetter('_redemptionTotal'), new MO.APersistence('_redemptionTotal', MO.EDataType.Double)]);
   o._netinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   o._departments         = MO.Class.register(o, [new MO.AGetter('_departments'), new MO.APersistence('_departments', MO.EDataType.Objects, MO.FEaiCockpitMessageAchievementDepartment)]);
   return o;
}
MO.FEaiCockpitMessageAchievementDepartment = function FEaiCockpitMessageAchievementDepartment(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._label               = MO.Class.register(o, [new MO.AGetter('_label'), new MO.APersistence('_label', MO.EDataType.String)]);
   o._investmentAmount    = MO.Class.register(o, [new MO.AGetter('_investmentAmount'), new MO.APersistence('_investmentAmount', MO.EDataType.Double)]);
   o._redemptionAmount    = MO.Class.register(o, [new MO.AGetter('_redemptionAmount'), new MO.APersistence('_redemptionAmount', MO.EDataType.Double)]);
   o._netinvestmentAmount = MO.Class.register(o, [new MO.AGetter('_netinvestmentAmount'), new MO.APersistence('_netinvestmentAmount', MO.EDataType.Double)]);
   o._marketerCount       = MO.Class.register(o, [new MO.AGetter('_marketerCount'), new MO.APersistence('_marketerCount', MO.EDataType.Int32)]);
   o._marketerTotal       = MO.Class.register(o, [new MO.AGetter('_marketerTotal'), new MO.APersistence('_marketerTotal', MO.EDataType.Int32)]);
   o._customerCount       = MO.Class.register(o, [new MO.AGetter('_customerCount'), new MO.APersistence('_customerCount', MO.EDataType.Int32)]);
   o._customerTotal       = MO.Class.register(o, [new MO.AGetter('_customerTotal'), new MO.APersistence('_customerTotal', MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitMessageAchievementRateChart = function FEaiCockpitMessageAchievementRateChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o.construct                = MO.FEaiCockpitMessageAchievementRateChart_construct;
   o.setup                    = MO.FEaiCockpitMessageAchievementRateChart_setup;
   o.onImageLoad              = MO.FEaiCockpitMessageAchievementRateChart_onImageLoad;
   o.onPaintBegin             = MO.FEaiCockpitMessageAchievementRateChart_onPaintBegin;
   o.dispose                  = MO.FEaiCockpitMessageAchievementRateChart_dispose;
   o.setData                  = MO.FEaiCockpitMessageAchievementRateChart_setData;
   o.drawLine                 = MO.FEaiCockpitMessageAchievementRateChart_drawLine;
   return o;
}
MO.FEaiCockpitMessageAchievementRateChart_drawLine = function FEaiCockpitMessageAchievementRateChart_drawLine(graphic, rectangle, dataheigt, minValue,maxValue, code, color, lineWidth){
   var o = this;
   var handle = graphic._handle;
   handle.beginPath();
   var units = o._data.days();
   var count = units.count();
   var left = rectangle.left + 140;
   var top = rectangle.top;
   var width = rectangle.width - 180;
   var height = dataheigt ;
   var stepWidth = width / count;
   var stepHeight = dataheigt / maxValue;
   for(var n = 0; n < count; n++){
      var unit = units.at(n);
      var x = left + stepWidth * n;
      var y = top + height - stepHeight * unit[code]+35;
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
MO.FEaiCockpitMessageAchievementRateChart_construct = function FEaiCockpitMessageAchievementRateChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FEaiCockpitMessageAchievementRateChart_setup = function FEaiCockpitMessageAchievementRateChart_setup() {
   var o = this;
}
MO.FEaiCockpitMessageAchievementRateChart_onImageLoad = function FEaiCockpitMessageAchievementRateChart_onImageLoad() {
   this.dirty();
}
MO.FEaiCockpitMessageAchievementRateChart_onPaintBegin = function FEaiCockpitMessageAchievementRateChart_onPaintBegin(event) {
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
   var data = o._data;
   var pointX = left + width/2;
   var pointY = top + height/2;
   if(!data){
      return;
   }
   var radius = height* 15/48;
   var handle = graphic._handle;
   var rates = data.Rates();
   var count = rates._count;
   var startDegree = 0;
   var endDegree = 0;
   var textX =0;
   var textY =0;
   var textradius = radius+40;
   var textDegree = 0;
   var title = '当月产品总规模以及占比';
   var titleWidth = graphic.textWidth(title);
   graphic.setFont('bold 16px Microsoft YaHei');
   graphic.drawText(title,left+width/2,top+25,'#fee71f');
   for (var i = 0; i < count; i++) {
      var item = rates.at(i);
      var investmentAmount = item.investmentAmount();
      var amount = data.investmentAmount();
      startDegree = endDegree;
      endDegree = startDegree+2 * Math.PI * investmentAmount/amount;
      textDegree = Math.PI * investmentAmount/amount + startDegree;
      var ssss = textradius*Math.sin(textDegree);
      if(textDegree<Math.PI/2){
         textX = pointX+textradius*Math.cos(textDegree);
         textY = pointY+textradius*Math.sin(textDegree);
      }else if(textDegree<=Math.PI){
         textX = pointX-Math.abs(textradius*Math.cos(textDegree));
         textY = pointY+Math.abs(textradius*Math.sin(textDegree));
      }else if(textDegree<=Math.PI*1.5){
         textX = pointX-Math.abs(textradius*Math.cos(textDegree)-20);
         textY = pointY-Math.abs(textradius*Math.sin(textDegree))+20;
      }else if(textDegree<Math.PI*2){
         textX = pointX+Math.abs(textradius*Math.cos(textDegree)-10);
         textY = pointY-Math.abs(textradius*Math.sin(textDegree)+20);
      }
      graphic.setFont('bold 12px Microsoft YaHei');
      var text = Math.round(investmentAmount/amount*100) +'%';
      graphic.drawText(text,textX,textY,'#ffffff');
      handle.beginPath();
      switch(item.productName()){
         case 'e租年享':
         handle.fillStyle = '#eeb041';
         break;
         case 'e租年丰':
         handle.fillStyle = '#499aec';
         break;
         case 'e租财富':
         handle.fillStyle = '#d796fe';
         break;
         case 'e租富享':
         handle.fillStyle = '#91ecdb';
         break;
         case 'e租富盈':
         handle.fillStyle = '#eb7374';
         break;
         case 'e租稳赢':
         handle.fillStyle = '#8551e2';
         break;
         default :
         handle.fillStyle = '#ffffff';
         break;
      }
      graphic.drawText(text,textX,textY,handle.fillStyle);
      handle.moveTo(pointX,pointY);
      handle.arc(pointX,pointY,radius,startDegree,endDegree);
      handle.fill();
   }
}
MO.FEaiCockpitMessageAchievementRateChart_setData = function FEaiCockpitMessageAchievementRateChart_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FEaiCockpitMessageAchievementRateChart_dispose = function FEaiCockpitMessageAchievementRateChart_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
