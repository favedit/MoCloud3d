MO.SBezierCurve = function SBezierCurve(){
   var o                   = this;
   o.startPoint            = null;
   o.endPoint              = null;
   o.scp                   = null;
   o.ecp                   = null;
   o.__ax                  = 0;
   o.__bx                  = 0;
   o.__cx                  = 0;
   o.__ay                  = 0;
   o.__by                  = 0;
   o.__cy                  = 0;
   o.calcCoefficient       = MO.SBezierCurve_calcCoefficient;
   o.pointAt               = MO.SBezierCurve_pointAt;
   o.tangentAt             = MO.SBezierCurve_tangentAt;
   o.assign                = MO.SBezierCurve_assign;
   o.dispose               = MO.SBezierCurve_dispose;
   return o;
}
MO.SBezierCurve_calcCoefficient = function SBezierCurve_calcCoefficient() {
   var o = this;
   var cp0 = o.startPoint;
   var cp1 = o.scp;
   var cp2 = o.ecp;
   var cp3 = o.endPoint;
   var cx = 3.0 * (cp1.x - cp0.x);
   var bx = 3.0 * (cp2.x - cp1.x) - cx;
   var ax = cp3.x - cp0.x - cx - bx;
   var cy = 3.0 * (cp1.y - cp0.y);
   var by = 3.0 * (cp2.y - cp1.y) - cy;
   var ay = cp3.y - cp0.y - cy - by;
   o.__cx = cx;
   o.__bx = bx;
   o.__ax = ax;
   o.__cy = cy;
   o.__by = by;
   o.__ay = ay;
}
MO.SBezierCurve_pointAt = function SBezierCurve_pointAt(t, result) {
   var o = this;
   var tSquared = t * t;
   var tCubed = tSquared * t;
   result.x = (o.__ax * tCubed) + (o.__bx * tSquared) + (o.__cx * t) + o.startPoint.x;
   result.y = (o.__ay * tCubed) + (o.__by * tSquared) + (o.__cy * t) + o.startPoint.y;
}
MO.SBezierCurve_tangentAt = function SBezierCurve_tangentAt(t, sPoint, ePoint) {
   var o = this;
   var cp0 = o.startPoint;
   var cp1 = o.scp;
   var cp2 = o.ecp;
   var cp3 = o.endPoint;
   sPoint.x = cp0.x + (cp1.x - cp0.x) * t;
   sPoint.y = cp0.y + (cp1.y - cp0.y) * t;
   ePoint.x = cp2.x + (cp3.x - cp2.x) * t;
   ePoint.y = cp2.y + (cp3.y - cp2.y) * t;
}
MO.SBezierCurve_assign = function SBezierCurve_assign(s) {
   var o = this;
   o.startPoint.assign(s.startPoint);
   o.endPoint.assign(s.endPoint);
   o.scp.assign(s.scp);
   o.ecp.assign(s.ecp);
   o.calcCoefficient();
}
MO.SBezierCurve_dispose = function SBezierCurve_dispose(){
   var o = this;
   o.startPoint = MO.Lang.Object.dispose(o.startPoint);
   o.endPoint = MO.Lang.Object.dispose(o.endPoint);
   o.scp = MO.Lang.Object.dispose(o.scp);
   o.ecp = MO.Lang.Object.dispose(o.ecp);
}
MO.SEaiChartMktCustomerV2TransferCurveStyle = function SEaiChartMktCustomerV2TransferCurveStyle(){
   var o             = this;
   o.lineWidth       = 5;
   o.pointFillStyle  = '#45adbd';
   o.flarePointStyle = '#16a6fd';
   o.arcStepHeight   = 200;
   o.arcDirection    = MO.EUiDock.Right;
   o.flowPeriod      = 2000;
   o.showDuration    = 10000;
   o.arcAngle        = 1;
   o.assign          = MO.SEaiChartMktCustomerV2TransferCurveStyle_assign;
   o.dispose         = MO.SEaiChartMktCustomerV2TransferCurveStyle_dispose;
   return o;
}
MO.SEaiChartMktCustomerV2TransferCurveStyle_assign = function SEaiChartMktCustomerV2TransferCurveStyle_assign(s) {
   var o = this;
   o.lineWidth = s.lineWidth;
   o.flareColor = s.flareColor;
   o.lineColor = s.lineColor;
   o.arcStepHeight = s.arcStepHeight;
   o.arcDirection = s.arcDirection;
}
MO.SEaiChartMktCustomerV2TransferCurveStyle_dispose = function SEaiChartMktCustomerV2TransferCurveStyle_dispose(){
   var o = this;
}
MO.FEaiChartMktCustomerV2CurvesCanvas = function FEaiChartMktCustomerV2CurvesCanvas(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._ready                = MO.Class.register(o, new MO.AGetter('_ready'), false);
   o._tenderInfo           = MO.Class.register(o, new MO.AGetter('_tenderInfo'));
   o._ringDict             = null;
   o._curveDict            = null;
   o._segmentLooper        = null;
   o._segmentPool          = null;
   o._pCodeDrawYMap        = null;
   o._curveStyle           = null;
   o._curveDisplayDuration = 10000;
   o.construct             = MO.FEaiChartMktCustomerV2CurvesCanvas_construct;
   o.onPaintBegin          = MO.FEaiChartMktCustomerV2CurvesCanvas_onPaintBegin;
   o.oeUpdate              = MO.FEaiChartMktCustomerV2CurvesCanvas_oeUpdate;
   o.testAnimating         = MO.FEaiChartMktCustomerV2CurvesCanvas_testAnimating;
   o.updateTenderUnits     = MO.FEaiChartMktCustomerV2CurvesCanvas_updateTenderUnits;
   o.pushUnit              = MO.FEaiChartMktCustomerV2CurvesCanvas_pushUnit;
   o.dispose               = MO.FEaiChartMktCustomerV2CurvesCanvas_dispose;
   return o;
}
MO.FEaiChartMktCustomerV2CurvesCanvas_construct = function FEaiChartMktCustomerV2CurvesCanvas_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._tenderInfo = MO.Class.create(MO.FEaiLogicInfoTender);
   o._ringDict = new MO.TDictionary();
   o._curveDict = new MO.TDictionary();
   o._segmentLooper = new MO.TLooper();
   o._segmentPool = MO.Class.create(MO.FObjectPool);
   o._pCodeDrawYMap = new MO.TMap();
   o._curveStyle = new MO.SEaiChartMktCustomerV2TransferCurveStyle();
}
MO.FEaiChartMktCustomerV2CurvesCanvas_testAnimating = function FEaiChartMktCustomerV2CurvesCanvas_testAnimating() {
   var o = this;
   var currenSegment = null;
   var segmentLooper = o._segmentLooper;
   segmentLooper.record();
   while (segmentLooper.next()) {
      var currenSegment = segmentLooper.current();
      if (currenSegment.finished()) {
         var currenUnit = currenSegment.unit();
         var ring = o._ringDict.get(currenUnit.modelCode());
         var tenderUnit = ring.tenderUnit();
         tenderUnit._invesmentDay += currenUnit.investment();
         tenderUnit._invesmentTotal += currenUnit.investment();
         tenderUnit._tenderInvesment += currenUnit.investment();
         if (tenderUnit.tenderInvesment() > tenderUnit.tenderTotal()) {
            tenderUnit._tenderInvesment = tenderUnit.tenderTotal();
         }
         ring.setStartTick(MO.Timer.current());
         segmentLooper.removeCurrent();
         o._segmentPool.free(currenSegment);
      }
   }
   if (segmentLooper.count() > 0) {
      o.dirty();
      return;
   }
   var curveDict = o._curveDict;
   var count = curveDict.count();
   for (var i = 0; i < count; i++) {
      var curve = curveDict.valueAt(i);
      if (curve.isActive()) {
         o.dirty();
         return;
      }
   }
}
MO.FEaiChartMktCustomerV2CurvesCanvas_oeUpdate = function FEaiChartMktCustomerV2CurvesCanvas_oeUpdate() {
   var o = this;
   o.testAnimating();
}
MO.FEaiChartMktCustomerV2CurvesCanvas_updateTenderUnits = function FEaiChartMktCustomerV2CurvesCanvas_updateTenderUnits() {
   var o = this;
   var units = o._tenderInfo.units();
   var count = units.count();
   var ringDict = o._ringDict;
   var pCodeDrawYMap = o._pCodeDrawYMap;
   if (!o._ready) {
      for (var i = 0; i < count; i++) {
         var unit = units.at(i);
         var ring = MO.Class.create(MO.FEaiChartMktCustomerV2Ring);
         ring.setSize(200, 80);
         ring.setLocation(10, 10 + i * (80 + 15));
         ring.setTenderUnit(unit);
         ringDict.set(unit.code(), ring);
         o.push(ring);
         pCodeDrawYMap.set(unit.code(), 10 + i * (80 + 15) + ring.outerRadius());
      }
      o._ready = true;
   }
   else {
      for (var i = 0; i < count; i++) {
         var unit = units.at(i);
         var ring = ringDict.valueAt(i);
         ring.updateTenderUnit(unit);
      }
   }
}
MO.FEaiChartMktCustomerV2CurvesCanvas_pushUnit = function FEaiChartMktCustomerV2CurvesCanvas_pushUnit(unit) {
   var o = this;
   if (unit == undefined || unit == null) {
      return;
   }
   var currentPCode = unit.modelCode();
   var previousPCode = unit.modelPriorCode();
   var drawYMap = o._pCodeDrawYMap;
   var startY = drawYMap.get(previousPCode, null);
   var endY = drawYMap.get(currentPCode, null);
   if (!endY) {
      return;
   }
   var clientRectangle = o.clientRectangle();
   var segment = null;
   var segmentPool = o._segmentPool;
   if (segmentPool.hasFree()) {
      segment = segmentPool.alloc();
   } else {
      segment = MO.Class.create(MO.FEaiChartMktCustomerV2TenderSegment);
   }
   segment.setup(unit.calculateX - clientRectangle.left, unit.calculateY - clientRectangle.top, 200, endY, unit.calculateColor);
   segment.setUnit(unit);
   o._segmentLooper.push(segment);
   if (currentPCode == previousPCode || currentPCode == null || previousPCode == null || currentPCode == undefined || previousPCode == undefined) {
      return;
   }
   if (currentPCode.length > 0 && previousPCode.length > 0) {
      var curveDict = o._curveDict;
      var key = currentPCode + currentPCode;
      var curve = curveDict.get(key, null);
      if (curve == null) {
         curve = MO.Class.create(MO.FEaiChartMktCustomerV2TransferCurve);
         curve.setCurveStyle(o._curveStyle);
         curve.setup(0, startY, 0, endY);
         curveDict.set(key, curve);
      }
      else {
         curve.startTick = MO.Timer.current();
      }
      curve.setIsActive(true);
   }
}
MO.FEaiChartMktCustomerV2CurvesCanvas_onPaintBegin = function FEaiChartMktCustomerV2CurvesCanvas_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var right = left + width;
   var bottom = top + height;
   var drawPosition = top;
   var heightRate = height / o._size.height;
   var drawLeft = left + 12;
   var drawRight = right - 12;
   var drawWidth = right - left;
   var hCenter = rectangle.left + rectangle.width / 2;
   var vCenter = rectangle.top + rectangle.height / 2;
   var curveDict = o._curveDict;
   var count = curveDict.count();
   var currentTick = MO.Timer.current();
   var curveDisplayDuration = o._curveDisplayDuration;
   for (var i = 0; i < count; i++) {
      var curve = curveDict.valueAt(i);
      if (currentTick - curve._startTick <= curveDisplayDuration) {
         curve.draw(event);
      }
   }
   var segmentLooper = o._segmentLooper;
   segmentLooper.record();
   while (segmentLooper.next() != null) {
      var segment = segmentLooper.current();
      segment.draw(event);
   }
}
MO.FEaiChartMktCustomerV2CurvesCanvas_dispose = function FEaiChartMktCustomerV2CurvesCanvas_dispose(){
   var o = this;
   o._ringArray = MO.Lang.Object.dispose(o._ringArray);
   o._curveDict = MO.Lang.Object.dispose(o._curveDict);
   o._segmentLooper = MO.Lang.Object.dispose(o._segmentLooper);
   o._pCodeDrawYMap = MO.Lang.Object.dispose(o._pCodeDrawYMap);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiChartMktCustomerV2Doughnut = function FEaiChartMktCustomerV2Doughnut(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._ready            = false;
   o._circleRadius     = MO.Class.register(o, new MO.AGetSet('_circleRadius'), 10);
   o._trendInfo        = MO.Class.register(o, new MO.AGetSet('_trendInfo'));
   o._trendInfos       = MO.Class.register(o, new MO.AGetSet('_trendInfos'));
   o._TenderBef        = MO.Class.register(o, new MO.AGetSet('_TenderBef'));
   o._FirstLoad        = MO.Class.register(o, new MO.AGetSet('_FirstLoad'));
   o._circleStyle      = MO.Class.register(o, new MO.AGetSet('_circleStyle'));
   o._circleAirRadius  = MO.Class.register(o, new MO.AGetSet('_airRadius'), 7);
   o._circlelColor     = MO.Class.register(o, new MO.AGetSet('_circlelColor'),'#ffffff');
   o.oeUpdate          = MO.FEaiChartMktCustomerV2Doughnut_oeUpdate;
   o.construct         = MO.FEaiChartMktCustomerV2Doughnut_construct;
   o.onPaintBegin      = MO.FEaiChartMktCustomerV2Doughnut_onPaintBegin;
   o.on24HDataFetch    = MO.FEaiChartMktCustomerV2Doughnut_on24HDataFetch;
   o.setCircleStyle    = MO.FEaiChartMktCustomerV2Doughnut_setCircleStyle;
   o.dispose           = MO.FEaiChartMktCustomerV2Doughnut_dispose;
   o.draw              = MO.FEaiChartMktCustomerV2Doughnut_draw;
   o._backgroundImage  = null;
   o._backgroundPadding = MO.Class.register(o, new MO.AGetSet('_backgroundPadding'));
   return o;
}
MO.FEaiChartMktCustomerV2Doughnut_setCircleStyle  =  function FEaiChartMktCustomerV2Doughnut_setCircleStyle(Radius,color,unit){
  var o = this;
  o.setCircleRadius(o._circleStyle.radius);
  o.setCircleAirRadius(o._circleStyle.radius*11/15);
  o.setCircleColor(o._circleStyle.circlelColor);
  o.setTatolColor(o._circleStyle.tatolColor);
}
MO.FEaiChartMktCustomerV2Doughnut_dispose = function FEaiChartMktCustomerV2Doughnut_dispose(){
   var o = this;
   o._trendInfo = MO.Lang.Object.dispose(o._trendInfo);
   o._trendInfos = MO.Lang.Object.dispose(o._trendInfos);
   o._circleStyle = MO.Lang.Object.dispose(o._circleStyle);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiChartMktCustomerV2Doughnut_construct = function FEaiChartMktCustomerV2Doughnut_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._trendInfo = MO.Class.create(MO.FEaiLogicInfoTender);
   o._TenderBef ={};
   o._FirstLoad ={};
    for (var i =0;i<6;i++ ){
      o._TenderBef[i]=i;
      o.FirstLoad[i]=true;
    }
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._backgroundImage = imageConsole.load('{eai.resource}/live/doughnutbg.png');
   o._backgroundPadding = new MO.SPadding(20, 20, 20, 20);
   this.dirty();
}
MO.FEaiChartMktCustomerV2Doughnut_oeUpdate = function FEaiChartMktCustomerV2Doughnut_oeUpdate(event) {
   var o = this;
   o.__base.FGuiControl.oeUpdate.call(o, event);
   if (o._ready) {
      return;
   }
   var systemLogic = MO.Console.find(MO.FEaiLogicConsole).system();
   if (systemLogic.testReady()) {
      o._ready = true;
   }
   return MO.EEventStatus.Stop;
}
MO.FEaiChartMktCustomerV2Doughnut_onPaintBegin = function FEaiChartMktCustomerV2Doughnut_onPaintBegin(event) {
   var o = this;
    var unit = o._trendInfo
    var units =  o._trendInfo.units();
   if (!o._ready||!units ) {
      return;
   }
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var top = rectangle.top;
   var bottom = rectangle.top + rectangle.height;
   var decoLeft = rectangle.left + 5;
   var decoRight = rectangle.left + rectangle.width - 5;
   var width = rectangle.width;
   var height = rectangle.height;
    var productRadius = rectangle.height/units.count()*5/12;
    var airRadius     = rectangle.height/units.count()* 11/36;
    var productInterval = rectangle.height/units.count()*1/9;
    var tendRate =0;
    var unitsCount = units.count();
    var BefCount =0;
    var tenderInvesment=0;
    var tenderTotal=0;
    var persentRate=0;
    var lable='' ;
    var productText ='';
    var yearRate = '';
    var dayLable ='';
    var tatolLable = '';
    var FirstLoad = o._FirstLoad;
    var circle_x = decoLeft+rectangle.width*17/24;
    var text_x   = decoLeft+rectangle.width*1/10;
    var text_interval = rectangle.height/36;
    var productText_w = 0;
    var productText_h = 0;
    var textSize = 0 ;
    var textPx = '';
    var textColor = '';
    graphic.drawGridImage(o._backgroundImage, decoLeft, top, width, height-15, o._backgroundPadding);
    if(units){
    for(var i=0;i<unitsCount;i++){
        var unit = units.get(i);
         BefCount = o._TenderBef[i];
         tenderInvesment = unit.tenderInvesment();
         tenderTotal = unit.tenderTotal();
         if(BefCount>= tenderInvesment){
             BefCount = tenderInvesment;
             o._TenderBef[i] =BefCount;
         }else{
              if(FirstLoad[i]){
                BefCount = tenderInvesment ;
                FirstLoad[i] = false;
              }else{
                  if(tenderInvesment-BefCount>10000000){
                   BefCount  += 10000000;
                  }else if(tenderInvesment-BefCount>1000000){
                    BefCount += 1000000;
                  }else if(tenderInvesment-BefCount>100000){
                    BefCount += 100000;
                  }else if(tenderInvesment-BefCount>10000){
                    BefCount += 10000;
                  }
              }
             o._TenderBef[i] =BefCount;
         }
         switch(i){
          case 0:
          textColor = "#00c6ed";
          break;
          case 1:
          textColor = "#00c6ed";
          break;
          case 2:
          textColor = "#00c6ed";
          break;
          case 3:
          textColor = "#00c6ed";
          break;
          case 4:
          textColor = "#00c6ed";
          break;
          case 5:
          textColor = '#00c6ed';
          break;
         }
         tendRate = BefCount/tenderTotal;
         persentRate = ((tenderInvesment/tenderTotal).toFixed(2)*100).toFixed(0);
         graphic._handle.beginPath();
         graphic._handle.arc(circle_x,top+productRadius+productInterval+i*(2*productRadius+productInterval), productRadius,0*Math.PI,2*Math.PI);
         graphic._handle.closePath();
         graphic._handle.strokeStyle = textColor;
         graphic._handle.stroke();
         graphic._handle.beginPath();
         graphic._handle.arc(circle_x,top+productRadius+productInterval+i*(2*productRadius+productInterval), airRadius,0*Math.PI,2*Math.PI,false);
         graphic._handle.closePath();
         graphic._handle.strokeStyle = textColor;
         graphic._handle.stroke();
         graphic._handle.beginPath();
         graphic._handle.arc(circle_x,top+productRadius+productInterval+i*(2*productRadius+productInterval), productRadius,0*Math.PI-Math.PI/2,2*Math.PI*tendRate-Math.PI/2,false);
         graphic._handle.arc(circle_x,top+productRadius+productInterval+i*(2*productRadius+productInterval), airRadius,2*Math.PI*tendRate-Math.PI/2,0*Math.PI-Math.PI/2,true);
         graphic._handle.closePath();
         graphic._handle.fillStyle = textColor;
         graphic._handle.fill();
         textPx = 'px Microsoft YaHei';
         textSize = 20;
         textPx = textSize + textPx
         graphic.setFont(textPx);
         lable = persentRate+'%';
         productText_w = graphic.textWidth(lable)/2;
         graphic.drawText(lable, circle_x-productText_w, top+productRadius+productInterval+i*(2*productRadius+productInterval)+textSize/2,'#ffeb4a');
         yearRate = (unit.rate()).toFixed(2);;
         productText = unit.label();
         graphic.drawText(productText, text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)-text_interval*2+20, '#ffeb4a');
         var projectLabel = '项目: ' + unit.project();
         graphic.setFont('13px Microsoft YaHei');
         graphic.drawText(projectLabel, text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)+12, '#FFFFFF');
         yearRate =  '年化: ' + yearRate +'%';
         graphic.setFont('13px Microsoft YaHei');
         graphic.drawText(yearRate, text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)+33, '#FFFFFF');
     }
   }
}
MO.FEaiChartMktCustomerV2Processor = function FEaiChartMktCustomerV2Processor(o){
   o = MO.Class.inherits(this, o, MO.FObject, MO.MGraphicObject, MO.MListener);
   o._dateSetup               = false;
   o._lastDate                = MO.Class.register(o, new MO.AGetter('_lastDate'));
   o._lastRecordId            = 0;
   o._scene                   = MO.Class.register(o, new MO.AGetSet('_scene'));
   o._beginDate               = MO.Class.register(o, new MO.AGetter('_beginDate'));
   o._endDate                 = MO.Class.register(o, new MO.AGetter('_endDate'));
   o._24HBeginDate            = MO.Class.register(o, new MO.AGetter('_24HBeginDate'));
   o._24HEndDate              = MO.Class.register(o, new MO.AGetter('_24HEndDate'));
   o._invementDayCurrent      = MO.Class.register(o, new MO.AGetter('_invementDayCurrent'), 0);
   o._redemptionDayCurrent    = MO.Class.register(o, new MO.AGetter('_redemptionDayCurrent'), 0);
   o._netinvestmentDayCurrent = MO.Class.register(o, new MO.AGetter('_netinvestmentDayCurrent'), 0);
   o._interestDayCurrent      = MO.Class.register(o, new MO.AGetter('_interestDayCurrent'), 0);
   o._performanceDayCurrent   = MO.Class.register(o, new MO.AGetter('_performanceDayCurrent'), 0);
   o._customerDayCurrent      = MO.Class.register(o, new MO.AGetter('_customerDayCurrent'), 0);
   o._invementDay             = MO.Class.register(o, new MO.AGetter('_invementDay'), 0);
   o._invementTotalCurrent    = MO.Class.register(o, new MO.AGetter('_invementTotalCurrent'), 0);
   o._invementTotal           = MO.Class.register(o, new MO.AGetter('_invementTotal'), 0);
   o._dynamicInfo             = MO.Class.register(o, new MO.AGetter('_dynamicInfo'));
   o._intervalMinute          = 1;
   o._mapEntity               = MO.Class.register(o, new MO.AGetSet('_mapEntity'));
   o._display                 = MO.Class.register(o, new MO.AGetter('_display'));
   o._rankUnits               = MO.Class.register(o, new MO.AGetter('_rankUnits'));
   o._units                   = MO.Class.register(o, new MO.AGetter('_units'));
   o._tableCount              = 40;
   o._tableInterval           = 1000;
   o._tableTick               = 1;
   o._dataTicker              = null;
   o._unitPool                = null;
   o._autios                  = null;
   o._eventDataChanged        = null;
   o._listenersDataChanged    = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o._event24HDataChanged     = null;
   o._listeners24HDataChanged = MO.Class.register(o, new MO.AListener('_listeners24HDataChanged', '24H' + MO.EEvent.DataChanged));
   o._listenersCurvesChanged  = MO.Class.register(o, new MO.AListener('_listenersCurvesChanged', 'CurvesChanged'));
   o.onDynamicData            = MO.FEaiChartMktCustomerV2Processor_onDynamicData;
   o.on24HDataFetch           = MO.FEaiChartMktCustomerV2Processor_on24HDataFetch;
   o.construct                = MO.FEaiChartMktCustomerV2Processor_construct;
   o.allocUnit                = MO.FEaiChartMktCustomerV2Processor_allocUnit;
   o.allocShape               = MO.FEaiChartMktCustomerV2Processor_allocShape;
   o.setup                    = MO.FEaiChartMktCustomerV2Processor_setup;
   o.calculateCurrent         = MO.FEaiChartMktCustomerV2Processor_calculateCurrent;
   o.focusEntity              = MO.FEaiChartMktCustomerV2Processor_focusEntity;
   o.process                  = MO.FEaiChartMktCustomerV2Processor_process;
   o.dispose                  = MO.FEaiChartMktCustomerV2Processor_dispose;
   o.onDoughnutData           = MO.FEaiChartMktCustomerV2Processor_onDoughnutData;
   o.onTrenderData            = MO.FEaiChartMktCustomerV2Processor_onTrenderData;
   return o;
}
MO.FEaiChartMktCustomerV2Processor_onTrenderData = function FEaiChartMktCustomerV2Processor_onTrenderData(event){
   var o = this;
   var eventData = event;
   o.processCurvesChangedListener(event);
}
MO.FEaiChartMktCustomerV2Processor_on24HDataFetch = function FEaiChartMktCustomerV2Processor_on24HDataFetch(event) {
   var o = this;
   event.beginDate = o._24HBeginDate;
   event.endDate = o._24HEndDate;
   o.process24HDataChangedListener(event);
}
MO.FEaiChartMktCustomerV2Processor_onDynamicData = function FEaiChartMktCustomerV2Processor_onDynamicData(event){
   var o = this;
   var content = event.content;
   var lastDate = o._lastDate;
   var dynamicInfo = o._dynamicInfo;
   dynamicInfo.unserializeSignBuffer(event.sign, event.content, true);
   var rankUnits = o._rankUnits;
   rankUnits.assign(dynamicInfo.rankUnits());
   var units = o._units;
   var dynamicUnits = dynamicInfo.units();
   var unitCount = dynamicUnits.count();
   var dynamicUnitCount = 0;
   var lastDateValue = lastDate.format();
   for (var i = 0; i < unitCount; i++) {
      var unit = dynamicUnits.get(i);
      var recordId = unit.recordId()
      if(recordId > o._lastRecordId){
         units.push(unit);
         dynamicUnitCount++;
      };
   };
   if(dynamicUnitCount){
      o._tableInterval = 1000 * 60 * o._intervalMinute / unitCount;
      var lastUnit = units.last();
      lastDate.parseAuto(lastUnit.recordDate());
      o._lastRecordId = lastUnit.recordId();
   }else{
      o._tableInterval = 1000 * 60 * o._intervalMinute;
   }
   o._tableTick = 0;
   MO.Logger.info(o, 'Load dynamic data. (unit_count={1}, dynamic_unit_count={2})', unitCount, dynamicUnitCount);
   var changeEvent = o._eventDataChanged;
   changeEvent.rankUnits = rankUnits;
   changeEvent.unit = null;
   changeEvent.investment1w = dynamicInfo.investment1w();
   changeEvent.investment10w = dynamicInfo.investment10w();
   changeEvent.investment50w = dynamicInfo.investment50w();
   changeEvent.investment100w = dynamicInfo.investment100w();
   changeEvent.investment500w = dynamicInfo.investment500w();
   changeEvent.investment1000w = dynamicInfo.investment1000w();
   o.processDataChangedListener(changeEvent);
}
MO.FEaiChartMktCustomerV2Processor_construct = function FEaiChartMktCustomerV2Processor_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._beginDate = new MO.TDate();
   o._endDate = new MO.TDate();
   o._24HBeginDate = new MO.TDate();
   o._24HEndDate = new MO.TDate();
   o._units = new MO.TObjects();
   o._lastDate = new MO.TDate();
   o._tableTicker = new MO.TTicker(1000 * o._tableInterval);
   o._autios = new Object();
   o._dataTicker = new MO.TTicker(1000 * 60 * o._intervalMinute);
   o._dynamicInfo = MO.Class.create(MO.FEaiLogicInfoCustomerDynamic);
   o._rankUnits = new MO.TObjects();
   o._unitPool = MO.Class.create(MO.FObjectPool);
   o._eventDataChanged = new MO.SEvent(o);
   o._event24HDataChanged = new MO.SEvent(o);
   o._cityLocationPosition = new MO.SPoint3();
   o._cityScreenPosition = new MO.SPoint2();
}
MO.FEaiChartMktCustomerV2Processor_allocUnit = function FEaiChartMktCustomerV2Processor_allocUnit(){
   var o = this;
   var unit = o._unitPool.alloc();
   if(!unit){
      unit = MO.Class.create(MO.FEaiChartMktCustomerDynamicUnit);
   }
   return unit;
}
MO.FEaiChartMktCustomerV2Processor_setup = function FEaiChartMktCustomerV2Processor_setup(){
   var o = this;
   var audioConsole = MO.Console.find(MO.FAudioConsole);
   for(var i = 1; i <= 5; i++){
      o._autios[i] = audioConsole.load('{eai.resource}/currency/' + i + '.mp3');
   }
   var display = o._display = MO.Class.create(MO.FE3dDisplay);
   display.linkGraphicContext(o);
}
MO.FEaiChartMktCustomerV2Processor_calculateCurrent = function FEaiChartMktCustomerV2Processor_calculateCurrent(){
   var o = this;
   var info = o._dynamicInfo;
   var investmentCurrent = info.investmentCount();
   var investmentTotalCurrent = info.investmentTotal();
   var units = o._units;
   var count = units.count();
   for(var i = 0; i < count; i++){
      var unit = units.at(i);
      investmentCurrent -= unit.investment();
      investmentTotalCurrent -= unit.investment();
   }
   o._invementTotalCurrent = investmentTotalCurrent;
   o._invementDayCurrent = investmentCurrent;
}
MO.FEaiChartMktCustomerV2Processor_focusEntity = function FEaiChartMktCustomerV2Processor_focusEntity(unit){
   var o = this;
   var scene = o._scene;
   var display = o._display;
   var mapEntity = o._mapEntity;
   var desktop = scene.application().desktop();
   var stage = scene.activeStage();
   var camera = stage.camera();
   var desktopSize = desktop.size();
   var sizeScale = desktop.sizeScale();
   var calculateX = 0;
   var calculateY = 0;
   var calculateColor = 0;
   var inputPosition = o._cityLocationPosition;
   var outputPosition = o._cityScreenPosition;
   var card = unit.card();
   var cityEntity = MO.Console.find(MO.FEaiEntityConsole).cityModule().findByCard(card);
   if(cityEntity){
      var investment = unit.investment();
      var level = MO.Console.find(MO.FEaiLogicConsole).statistics().calculateAmountLevel(investment);
      var provinceCode = cityEntity.data().provinceCode();
      var provinceEntity = MO.Console.find(MO.FEaiEntityConsole).provinceModule().findByCode(provinceCode);
      if(provinceEntity){
         provinceEntity.doInvestment(level, investment);
      }
      cityEntity.addInvestmentTotal(level, investment);
      calculateColor = cityEntity.targetColor();
      stage.calculateScreenPosition(outputPosition, cityEntity.location(), display.matrix());
      calculateX = outputPosition.x * sizeScale;
      calculateY = outputPosition.y * sizeScale;
      if(mapEntity){
         o._mapEntity.upload();
      }
      var autio = o._autios[level];
      if(autio){
         autio.play(0);
      }
   }
   var changedEvent = o._eventDataChanged;
   changedEvent.rankUnits = o._rankUnits;
   changedEvent.unit = unit;
   unit.calculateX = calculateX;
   unit.calculateY = calculateY;
   unit.calculateColor = calculateColor;
   o.processDataChangedListener(changedEvent);
}
MO.FEaiChartMktCustomerV2Processor_process = function FEaiChartMktCustomerV2Processor_process(){
   var o = this;
   var system = MO.Console.find(MO.FEaiLogicConsole).system();
   if(!system.testReady()){
      return;
   }
   var systemDate = system.currentDate();
   systemDate.truncMinute();
   if(!o._dateSetup){
      o._endDate.assign(systemDate);
      o._endDate.addMinute(-o._intervalMinute);
      o._lastDate.assign(o._endDate);
      o._lastDate.truncDay(1);
      o._dateSetup = true;
   }
   if(o._dataTicker.process()){
      var statistics = MO.Console.find(MO.FEaiLogicConsole).statistics();
      var beginDate = o._beginDate;
      var endDate = o._endDate;
      var lastDate = o._lastDate;
      beginDate.assign(lastDate);
      beginDate.assign(endDate);
      endDate.assign(systemDate);
      statistics.marketer().doCustomerDynamic(o, o.onDynamicData, beginDate.format(), endDate.format());
      beginDate.assign(endDate);
      var beginDate24H = o._24HBeginDate;
      beginDate24H.assign(systemDate);
      beginDate24H.truncMinute(15);
      beginDate24H.addDay(-1);
      var endDate24H = o._24HEndDate;
      endDate24H.assign(systemDate);
      endDate24H.truncMinute(15);
      statistics.marketer().doCustomerTrend(o, o.on24HDataFetch, beginDate24H.format(), endDate24H.format());
      statistics.marketer().doCustomerTender(o, o.onTrenderData);
   }
   var currentTick = MO.Timer.current();
   if(currentTick - o._tableTick > o._tableInterval){
      var units = o._units;
      if(!units.isEmpty()){
         var unit = units.shift();
         o.focusEntity(unit);
      }
      o.calculateCurrent();
      o._tableTick = currentTick;
   }
   if (o._mapEntity != null) {
      o._mapEntity.process();
   }
   var dynamicInfo = MO.Desktop.application().dynamicInfo();
   dynamicInfo._investmentEntityCount = o._units.count();
   dynamicInfo._investmentPoolItemCount = o._unitPool.items().count();
   dynamicInfo._investmentPoolFreeCount = o._unitPool.frees().count();
}
MO.FEaiChartMktCustomerV2Processor_dispose = function FEaiChartMktCustomerV2Processor_dispose(){
   var o = this;
   o._units = MO.Lang.Object.dispose(o._units);
   o._dataTicker = MO.Lang.Object.dispose(o._dataTicker);
   o._eventDataChanged = MO.Lang.Object.dispose(o._eventDataChanged);
   o.__base.FObject.dispose.call(o);
}
MO.FEaiChartMktCustomerV2Ring = function FEaiChartMktCustomerV2Ring(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._tenderUnit      = MO.Class.register(o, new MO.AGetSet('_tenderUnit'));
   o._outerRadius     = MO.Class.register(o, new MO.AGetSet('_outerRadius'), 40);
   o._innerRadius     = MO.Class.register(o, new MO.AGetSet('_innerRadius'), 30);
   o._ringNormalColor = MO.Class.register(o, new MO.AGetSet('_ringNormalColor'));
   o._ringGlowColor   = MO.Class.register(o, new MO.AGetSet('_ringGlowColor'));
   o._ringDrawColor   = MO.Class.register(o, new MO.AGetSet('_ringDrawColor'));
   o._startTick       = MO.Class.register(o, new MO.AGetSet('_startTick'), 0);
   o._glowDuration    = MO.Class.register(o, new MO.AGetSet('_glowDuration'), 200);
   o._fadeDuration    = MO.Class.register(o, new MO.AGetSet('_fadeDuration'), 2500);
   o.construct        = MO.FEaiChartMktCustomerV2Ring_construct;
   o.onPaintBegin     = MO.FEaiChartMktCustomerV2Ring_onPaintBegin;
   o.dispose          = MO.FEaiChartMktCustomerV2Ring_dispose;
   o.updateTenderUnit = MO.FEaiChartMktCustomerV2Ring_updateTenderUnit;
   return o;
}
MO.FEaiChartMktCustomerV2Ring_construct = function FEaiChartMktCustomerV2Ring_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._ringNormalColor = new MO.SColor4(0, 0.4903, 0.7687, 1);
   o._ringGlowColor = new MO.SColor4(0, 1, 0.8706, 1);
   o._ringDrawColor = new MO.SColor4();
}
MO.FEaiChartMktCustomerV2Ring_onPaintBegin = function FEaiChartMktCustomerV2Ring_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var unit = o._tenderUnit;
   if (!unit) {
      return;
   }
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var top = rectangle.top;
   var bottom = rectangle.bott + rectangle.height;
   var width = rectangle.width;
   var height = rectangle.height;
   var right = rectangle.right();
   var outerRadius = o._outerRadius;
   var innerRadius = o._innerRadius;
   var drawX = rectangle.left;
   var drawY = rectangle.top;
   var textWidth = 0;
   drawX += 5;
   drawY += 25;
   graphic.setFont('20px Microsoft YaHei');
   graphic.drawText(unit.label(), drawX, drawY, '#ffeb4a');
   drawY += 22;
   var textProject = '项目：' + unit.project();
   graphic.setFont('13px Microsoft YaHei');
   graphic.drawText(textProject, drawX, drawY, '#FFFFFF');
   drawY += 22;
   var textYearRate = (unit.rate()).toFixed(2);
   textYearRate = '年化: ' + textYearRate + '%';
   graphic.setFont('13px Microsoft YaHei');
   graphic.drawText(textYearRate, drawX, drawY, '#FFFFFF');
   var percentage = unit.tenderInvesment() / unit.tenderTotal();
   var textPercentage = (percentage.toFixed(2) * 100).toFixed(0);
   textPercentage += '%';
   graphic.setFont('20px Microsoft YaHei');
   textWidth = graphic.textWidth(textPercentage);
   drawX = right - outerRadius - textWidth / 2;
   drawY = top + outerRadius + 8;
   graphic.drawText(textPercentage, drawX, drawY, '#ffeb4a');
   drawX = right - outerRadius;
   drawY = top + outerRadius;
   var ringNormalColor = o._ringNormalColor;
   var ringGlowColor = o._ringGlowColor;
   var ringDrawColor = o._ringDrawColor;
   var rate = 0;
   var passedTick = MO.Timer.current() - o._startTick;
   var glowDuration = o._glowDuration;
   var fadeDuration = o._fadeDuration;
   if (passedTick < glowDuration) {
      rate = passedTick / glowDuration;
      ringDrawColor.red = ringNormalColor.red + (ringGlowColor.red - ringNormalColor.red) * rate;
      ringDrawColor.green = ringNormalColor.green + (ringGlowColor.green - ringNormalColor.green) * rate;
      ringDrawColor.blue = ringNormalColor.blue + (ringGlowColor.blue - ringNormalColor.blue) * rate;
   }
   else if ((passedTick - glowDuration) < fadeDuration) {
      rate = (passedTick - glowDuration) / fadeDuration;
      ringDrawColor.red = ringGlowColor.red - (ringGlowColor.red - ringNormalColor.red) * rate;
      ringDrawColor.green = ringGlowColor.green - (ringGlowColor.green - ringNormalColor.green) * rate;
      ringDrawColor.blue = ringGlowColor.blue - (ringGlowColor.blue - ringNormalColor.blue) * rate;
   }
   else {
      ringDrawColor.assign(ringNormalColor);
   }
   graphic._handle.lineWidth = 2;
   graphic._handle.beginPath();
   graphic._handle.arc(drawX, drawY, outerRadius, 0 * Math.PI, 2 * Math.PI);
   graphic._handle.closePath();
   graphic._handle.strokeStyle = ringNormalColor.toRGBAString();
   graphic._handle.stroke();
   graphic._handle.beginPath();
   graphic._handle.arc(drawX, drawY, innerRadius, 0 * Math.PI, 2 * Math.PI, false);
   graphic._handle.closePath();
   graphic._handle.strokeStyle = ringNormalColor.toRGBAString();
   graphic._handle.stroke();
   graphic._handle.beginPath();
   graphic._handle.arc(drawX, drawY, outerRadius, 0 * Math.PI - Math.PI / 2, 2 * Math.PI * percentage - Math.PI / 2, false);
   graphic._handle.arc(drawX, drawY, innerRadius, 2 * Math.PI * percentage - Math.PI / 2, 0 * Math.PI - Math.PI / 2, true);
   graphic._handle.closePath();
   graphic._handle.fillStyle = ringDrawColor.toRGBAString();
   graphic._handle.fill();
}
MO.FEaiChartMktCustomerV2Ring_updateTenderUnit = function FEaiChartMktCustomerV2Ring_updateTenderUnit(unit) {
   var o = this;
   var currentUnit = o._tenderUnit;
   if (currentUnit.project() != unit.project()) {
      currentUnit._project = unit.project();
      currentUnit._rate = unit.rate();
      currentUnit._tenderInvesment = unit.tenderInvesment();
      currentUnit._tenderTotal = unit.tenderTotal();
   }
}
MO.FEaiChartMktCustomerV2Ring_dispose = function FEaiChartMktCustomerV2Ring_dispose() {
   var o = this;
   o._tenderUnit = MO.Lang.Object.dispose(o._tenderUnit);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiChartMktCustomerV2Scene = function FEaiChartMktCustomerV2Scene(o) {
   o = MO.Class.inherits(this, o, MO.FEaiChartScene);
   o._code                   = MO.EEaiScene.ChartCustomer;
   o._processor              = MO.Class.register(o, new MO.AGetter('_processor'));
   o._processorCurrent       = 0;
   o._ready                  = false;
   o._mapReady               = false;
   o._playing                = false;
   o._lastTick               = 0;
   o._interval               = 10;
   o._logoBar                = null;
   o._timeline               = null;
   o._liveTable              = null;
   o._curvesCanvas           = null;
   o._statusStart            = false;
   o._statusLayerCount       = 100;
   o._statusLayerLevel       = 100;
   o.onOperationDown         = MO.FEaiChartMktCustomerV2Scene_onOperationDown;
   o.onInvestmentDataChanged = MO.FEaiChartMktCustomerV2Scene_onInvestmentDataChanged;
   o.on24HDataChanged        = MO.FEaiChartMktCustomerV2Scene_on24HDataChanged;
   o.onOperationVisibility   = MO.FEaiChartMktCustomerV2Scene_onOperationVisibility;
   o.onProcessReady          = MO.FEaiChartMktCustomerV2Scene_onProcessReady;
   o.onProcess               = MO.FEaiChartMktCustomerV2Scene_onProcess;
   o.onSwitchProcess         = MO.FEaiChartMktCustomerV2Scene_onSwitchProcess;
   o.onSwitchComplete        = MO.FEaiChartMktCustomerV2Scene_onSwitchComplete;
   o.setup                   = MO.FEaiChartMktCustomerV2Scene_setup;
   o.showFace                = MO.FEaiChartMktCustomerV2Scene_showFace;
   o.fixMatrix               = MO.FEaiChartMktCustomerV2Scene_fixMatrix;
   o.processResize           = MO.FEaiChartMktCustomerV2Scene_processResize;
   o.onCurvesChanged         = MO.FEaiChartMktCustomerV2Scene_onCurvesChanged;
   return o;
}
MO.FEaiChartMktCustomerV2Scene_onOperationDown = function FEaiChartMktCustomerV2Scene_onOperationDown(event) {
   var o = this;
   o._countryEntity._startTime = 0;
}
MO.FEaiChartMktCustomerV2Scene_on24HDataChanged = function FEaiChartMktCustomerV2Scene_on24HDataChanged(event) {
   var o = this;
   var timeline = o._timeline;
   timeline.startTime().assign(event.beginDate);
   timeline.endTime().assign(event.endDate);
   timeline.trendInfo().unserializeSignBuffer(event.sign, event.content, true);
   timeline.dirty();
}
MO.FEaiChartMktCustomerV2Scene_onCurvesChanged = function FEaiChartMktCustomerV2Scene_onCurvesChanged(event) {
   var o = this;
   o._curvesCanvas.tenderInfo().unserializeSignBuffer(event.sign, event.content, true);
   o._curvesCanvas.updateTenderUnits()
}
MO.FEaiChartMktCustomerV2Scene_onInvestmentDataChanged = function FEaiChartMktCustomerV2Scene_onInvestmentDataChanged(event) {
   var o = this;
   var unit = event.unit;
   var table = o._liveTable;
   table.setRankUnits(event.rankUnits);
   table._rankdata = event;
   table.pushUnit(unit);
   table.dirty();
   o._curvesCanvas.pushUnit(unit);
}
MO.FEaiChartMktCustomerV2Scene_onOperationVisibility = function FEaiChartMktCustomerV2Scene_onOperationVisibility(event) {
   var o = this;
   o.__base.FEaiChartScene.onOperationVisibility.call(o, event);
   if (event.visibility) {
      o._groundAutio.play();
      o._countryEntity._audioMapEnter._hAudio.muted = false;
   } else {
      o._groundAutio.pause();
      o._countryEntity._audioMapEnter._hAudio.muted = true;
   }
}
MO.FEaiChartMktCustomerV2Scene_onProcessReady = function FEaiChartMktCustomerV2Scene_onProcessReady() {
   var o = this;
   o.__base.FEaiChartScene.onProcessReady.call(o);
   o._mapEntity.showCity();
}
MO.FEaiChartMktCustomerV2Scene_onProcess = function FEaiChartMktCustomerV2Scene_onProcess() {
   var o = this;
   o.__base.FEaiChartScene.onProcess.call(o);
   if (!o._statusStart) {
      if (MO.Window.Browser.capability().soundConfirm) {
         var iosPlay = document.getElementById('id_ios_play');
         if (iosPlay) {
            MO.Window.Html.visibleSet(iosPlay, true);
         }
         var hLoading = document.getElementById('id_loading');
         if (hLoading) {
            document.body.removeChild(hLoading);
         }
      } else {
         var hLoading = document.getElementById('id_loading');
         if (hLoading) {
            hLoading.style.opacity = o._statusLayerLevel / o._statusLayerCount;
            o._statusLayerLevel--;
         }
         o._statusLayerLevel--;
      }
      if (o._statusLayerLevel <= 0) {
         if (hLoading) {
            document.body.removeChild(hLoading);
         }
         var countryEntity = o._countryEntity;
         countryEntity.start();
         o._mapEntity.showCountry(countryEntity);
         o.processLoaded();
         o._playing = true;
         o._statusStart = true;
      }
   }
   if (o._playing) {
      var countryEntity = o._countryEntity;
      if (!countryEntity.introAnimeDone()) {
         countryEntity.process();
         return;
      }
      if (!o._mapReady) {
         o._guiManager.show();
         var alphaAction = MO.Class.create(MO.FGuiActionAlpha);
         alphaAction.setAlphaBegin(0);
         alphaAction.setAlphaEnd(1);
         alphaAction.setAlphaInterval(0.01);
         alphaAction.push(o._guiManager);
         o._guiManager.mainTimeline().pushAction(alphaAction);
         o._mapReady = true;
      }
      o._processor.process();
      var logoBar = o._logoBar;
      var processor = o._processor;
      if(processor.invementDayCurrent() > 0){
         var investmentTotal = logoBar.findComponent('investmentTotal');
         investmentTotal.setValue(parseInt(processor.invementTotalCurrent()).toString());
         var investmentDay = logoBar.findComponent('investmentDay');
         investmentDay.setValue(parseInt(processor.invementDayCurrent()).toString());
      }
      if (o._nowTicker.process()) {
         var bar = o._logoBar;
         var date = o._nowDate;
         date.setNow();
         var dateControl = bar.findComponent('date');
         dateControl.setLabel(date.format('YYYY/MM/DD'));
         var timeControl = bar.findComponent('time');
         timeControl.setLabel(date.format('HH24:MI'));
      }
   }
}
MO.FEaiChartMktCustomerV2Scene_onSwitchProcess = function FEaiChartMktCustomerV2Scene_onSwitchProcess(event) {
   var o = this;
}
MO.FEaiChartMktCustomerV2Scene_onSwitchComplete = function FEaiChartMktCustomerV2Scene_onSwitchComplete(event) {
   var o = this;
}
MO.FEaiChartMktCustomerV2Scene_setup = function FEaiChartMktCustomerV2Scene_setup() {
   var o = this;
   o.__base.FEaiChartScene.setup.call(o);
   var dataLayer = o._activeStage.dataLayer();
   var frame = o._logoBar = MO.Console.find(MO.FGuiFrameConsole).get(o, 'eai.chart.customer.LogoBarV2');
   o._guiManager.register(frame);
   var invement = o._processor = MO.Class.create(MO.FEaiChartMktCustomerV2Processor);
   invement.linkGraphicContext(o);
   invement.setScene(o);
   invement.setMapEntity(o._mapEntity);
   invement.setup();
   invement.addDataChangedListener(o, o.onInvestmentDataChanged);
   invement.add24HDataChangedListener(o, o.on24HDataChanged);
   invement.addCurvesChangedListener(o,o.onCurvesChanged);
   var display = invement.display();
   o.fixMatrix(display.matrix());
   dataLayer.push(display);
   var stage = o.activeStage();
   var timeline = o._timeline = MO.Class.create(MO.FEaiChartMktCustomerV2Timeline);
   timeline.setName('Timeline');
   timeline.linkGraphicContext(o);
   timeline.build();
   o._guiManager.register(timeline);
   var liveTable = o._liveTable = MO.Class.create(MO.FEaiChartMktCustomerV2Table);
   liveTable.setName('LiveTable');
   liveTable.linkGraphicContext(o);
   liveTable.setup();
   liveTable.build();
   o._guiManager.register(liveTable);
   var curves =  o._curvesCanvas = MO.Class.create(MO.FEaiChartMktCustomerV2CurvesCanvas);
   curves.setName('curves');
   curves.linkGraphicContext(o);
   curves.build();
   o._guiManager.register(curves);
   o._guiManager.hide();
   var entityConsole = MO.Console.find(MO.FEaiEntityConsole);
   entityConsole.cityModule().build(o);
   var countryEntity = o._countryEntity = entityConsole.mapModule().loadCountry(o, MO.EEaiConstant.DefaultCountry);
   o._readyLoader.push(countryEntity);
}
MO.FEaiChartMktCustomerV2Scene_showFace = function FEaiChartMktCustomerV2Scene_showFace() {
   var o = this;
   o._statusStart = true;
   o._playing = true;
   o._mapReady = false;
   o._mapEntity.reset();
   var desktop = o._application.desktop();
   desktop.show();
   o.processResize();
}
MO.FEaiChartMktCustomerV2Scene_fixMatrix = function FEaiChartMktCustomerV2Scene_fixMatrix(matrix) {
   var o = this;
   var isVertical = MO.Window.Browser.isOrientationVertical()
   if (isVertical) {
      matrix.tx = -14.58;
      matrix.ty = -1.9;
      matrix.tz = 0;
      matrix.setScale(0.14, 0.16, 0.14);
   } else {
      matrix.tx = -30.2;
      matrix.ty = -9.5;
      matrix.tz = 0;
      matrix.setScale(0.26, 0.28, 0.26);
   }
   matrix.update();
}
MO.FEaiChartMktCustomerV2Scene_processResize = function FEaiChartMktCustomerV2Scene_processResize() {
   var o = this;
   o.__base.FEaiChartScene.processResize.call(o);
   var isVertical = MO.Window.Browser.isOrientationVertical();
   var logoBar = o._logoBar;
   if (isVertical) {
      logoBar.setLocation(8, 8);
      logoBar.setScale(0.85, 0.85);
   } else {
      logoBar.setLocation(5, 5);
      logoBar.setScale(0.9, 0.9);
   }
   var control = o._southSea;
   if (isVertical) {
      control.setDockCd(MO.EUiDock.RightTop);
      control.setTop(570);
      control.setRight(80);
   } else {
      control.setDockCd(MO.EUiDock.RightBottom);
      control.setRight(650);
      control.setBottom(300);
   }
   var timeline = o._timeline;
   if (isVertical) {
      timeline.setDockCd(MO.EUiDock.Bottom);
      timeline.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
      timeline.setLeft(10);
      timeline.setRight(10);
      timeline.setBottom(920);
      timeline.setHeight(250);
   } else {
      timeline.setDockCd(MO.EUiDock.Bottom);
      timeline.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
      timeline.setLeft(0);
      timeline.setBottom(0);
      timeline.setRight(630);
      timeline.setHeight(250);
   }
   var liveTable = o._liveTable;
   if (isVertical) {
      liveTable.setDockCd(MO.EUiDock.Bottom);
      liveTable.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Top | MO.EUiAnchor.Right);
      liveTable.setLeft(10);
      liveTable.setRight(10);
      liveTable.setBottom(10);
      liveTable.setHeight(900);
   } else {
      liveTable.setDockCd(MO.EUiDock.Right);
      liveTable.setAnchorCd(MO.EUiAnchor.All);
      liveTable.setTop(10);
      liveTable.setRight(15);
      liveTable.setBottom(10);
      liveTable.setWidth(610);
   }
   var curvesCanvas = o._curvesCanvas;
   if (isVertical) {
      curvesCanvas.setDockCd(MO.EUiDock.Bottom);
      curvesCanvas.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Top | MO.EUiAnchor.Right);
      curvesCanvas.setLeft(10);
      curvesCanvas.setRight(10);
      curvesCanvas.setBottom(10);
      curvesCanvas.setHeight(900);
   } else {
      curvesCanvas.setDockCd(MO.EUiDock.Left);
      curvesCanvas.setAnchorCd(MO.EUiAnchor.Top | MO.EUiAnchor.Bottom | MO.EUiAnchor.Left | MO.EUiAnchor.Right);
      curvesCanvas.setLeft(0);
      curvesCanvas.setRight(620);
      curvesCanvas.setTop(220);
      curvesCanvas.setBottom(260);
   }
   o.fixMatrix(o._processor.display().matrix());
}
MO.FEaiChartMktCustomerV2Table = function FEaiChartMktCustomerV2Table(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._currentDate          = null;
   o._rank                 = MO.Class.register(o, new MO.AGetter('_rank'));
   o._rankLogoImage        = null;
   o._rankTitleImage       = null;
   o._rankLineImage        = null;
   o._rankLinePadding      = null;
   o._rank1Image           = null;
   o._rank2Image           = null;
   o._rank3Image           = null;
   o._backgroundImage      = null;
   o._backgroundPadding    = null;
   o._tableCount           = 0;
   o._units                = null;
   o._lineScroll           = 0;
   o._listenersDataChanged = MO.Class.register(o, new MO.AListener('_listenersDataChanged', MO.EEvent.DataChanged));
   o.onImageLoad           = MO.FEaiChartMktCustomerV2Table_onImageLoad;
   o.onPaintBegin          = MO.FEaiChartMktCustomerV2Table_onPaintBegin;
   o.construct             = MO.FEaiChartMktCustomerV2Table_construct;
   o.setup                 = MO.FEaiChartMktCustomerV2Table_setup;
   o.setRankUnits          = MO.FEaiChartMktCustomerV2Table_setRankUnits;
   o.pushUnit              = MO.FEaiChartMktCustomerV2Table_pushUnit;
   o.drawRow               = MO.FEaiChartMktCustomerV2Table_drawRow;
   o.dispose               = MO.FEaiChartMktCustomerV2Table_dispose;
   o._rankdata             = null;
   return o;
}
MO.FEaiChartMktCustomerV2Table_onImageLoad = function FEaiChartMktCustomerV2Table_onImageLoad() {
   this.dirty();
}
MO.FEaiChartMktCustomerV2Table_onPaintBegin = function FEaiChartMktCustomerV2Table_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var right = left + width;
   var bottom = top + height;
   var drawPosition = top;
   var heightRate = height / o._size.height;
   var drawLeft = left + 12;
   var drawRight = right - 12;
   var drawWidth = right - left;
   graphic.drawGridImage(o._backgroundImage, left, top+50, width, height-50, o._backgroundPadding);
   graphic.setFont(o._rowFontStyle);
    var tableTop = top + o._rankStart;
   graphic.drawGridImage(o._rankLineImage , left + 6, tableTop + o._rankTitleStart-45, width - 28, o._rankHeight+40, o._rankLinePadding);
   graphic.drawGridImage(o._rankTitleImage, left +width/2-157, tableTop - 100, 314, 40 , o._rankLinePadding);
   var valuse = o._rankdata;
   if(!valuse.investment1w||!valuse.investment10w||!valuse.investment50w||!valuse.investment100w||!valuse.investment500w||!valuse.investment1000w){
   var value1 = 0;
   var value10 = 0;
   var value50 = 0;
   var value100 =0;
   var value500 = 0;
   var value1000 = 0;
   }else{
   var value1 = valuse.investment1w;
   var value10 = valuse.investment10w;
   var value50 = valuse.investment50w;
   var value100 = valuse.investment100w;
   var value500 = valuse.investment500w;
   var value1000 = valuse.investment1000w;
   }
   var fixX = 10;
   var maxTitleText = '1000';
   var titleText = '1';
   var span = 2;
   var titleWidth = graphic.textWidth(maxTitleText);
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+30 - fixX;
   var high =(tableTop + o._rankTitleStart)+(o._rankHeight+105)*1/2;
   var pointY = high;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   var titleFontText = '万元:';
   var span = 2;
   pointX += beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = value1 ;
   pointX += beforeWidth+20;
   graphic.drawText(titleFontText,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   var titleText = '100';
   pointY +=30 ;
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+30 - fixX;
   var pointY = high+30;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   pointX += beforeWidth;
   titleFontText = '万元:';
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   afterWidth =graphic.textWidth(value1);
   beforeWidth = graphic.textWidth(titleFontText);
   var span = afterWidth-graphic.textWidth(value100);
   pointX += beforeWidth+span+20;
   graphic.drawText(value100,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(value100);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   var titleText = '10';
   var span = 2;
   var titleWidth = graphic.textWidth(maxTitleText);
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+width*11/32 - fixX+10;
   var high =(tableTop + o._rankTitleStart)+(o._rankHeight+105)*1/2;
   var pointY = high;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   var titleFontText = '万元:';
   var span = 2;
   pointX += beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = value10 ;
   pointX += beforeWidth+20;
   graphic.drawText(titleFontText,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   var titleText = '500';
   pointY +=30 ;
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+width*11/32 - fixX+10;
   var pointY = high+30;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   pointX += beforeWidth;
   titleFontText = '万元:';
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   afterWidth =graphic.textWidth(value10);
   beforeWidth = graphic.textWidth(titleFontText);
   var span = afterWidth-graphic.textWidth(value500);
   pointX += beforeWidth+span+20;
   graphic.drawText(value500,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(value500);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   var titleText = '50';
   var span = 2;
   var titleWidth = graphic.textWidth(maxTitleText);
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+width*11/16 - fixX;
   var high =(tableTop + o._rankTitleStart)+(o._rankHeight+105)*1/2;
   var pointY = high;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   var titleFontText = '万元:';
   var span = 2;
   pointX += beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = value50 ;
   pointX += beforeWidth+20;
   graphic.drawText(titleFontText,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(titleFontText);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   var titleText = '1000';
   pointY +=30 ;
   var spanWidth = graphic.textWidth(titleText);
   var pointX = titleWidth-spanWidth+left+span+width*11/16 - fixX;
   var pointY = high+30;
   graphic.drawText(titleText,pointX,pointY,'#FDEF01');
   var beforeWidth =  graphic.textWidth(titleText);
   pointX += beforeWidth;
   titleFontText = '万元:';
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
   afterWidth =graphic.textWidth(value50);
   beforeWidth = graphic.textWidth(titleFontText);
   var span = afterWidth-graphic.textWidth(value1000);
   pointX += beforeWidth+span+20;
   graphic.drawText(value1000,pointX,pointY,'#ff8f39');
   beforeWidth = graphic.textWidth(value1000);
   titleFontText = '人';
   pointX  +=beforeWidth;
   graphic.drawText(titleFontText,pointX,pointY,'#59FDE9');
}
MO.FEaiChartMktCustomerV2Table_construct = function FEaiChartMktCustomerV2Table_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._units = new MO.TObjects();
   o._currentDate = new MO.TDate();
   o._rankLinePadding = new MO.SPadding(40,0, 40,0);
   o._backgroundPadding = new MO.SPadding(20, 100, 90, 200);
   o._rankdata = new MO.SEvent(o);
}
MO.FEaiChartMktCustomerV2Table_setup = function FEaiChartMktCustomerV2Table_setup() {
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._logoImage = imageConsole.load('{eai.resource}/live/company.png');
   image.addLoadListener(o, o.onImageLoad);
   var image = o._backgroundImage = imageConsole.load('{eai.resource}/live/gridv2.png');
   image.addLoadListener(o, o.onImageLoad);
   var image = o._rankTitleImage = imageConsole.load('{eai.resource}/live/tank-titlev2.png');
   image.addLoadListener(o, o.onImageLoad);
   var image = o._rankLineImage = imageConsole.load('{eai.resource}/live/rank2.png');
   image.addLoadListener(o, o.onImageLoad);
   var grid = o._gridRank = MO.Class.create(MO.FGuiGridControl);
   grid.setOptionClip(false);
   grid.setDisplayHead(false);
   grid.setLocation(0,92);
   grid.setSize(800, 700);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right);
   grid.setLeft(9);
   grid.setRight(29);
   grid.setHeadHeight(40);
   grid.setHeadBackColor('#122A46');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 20;
   grid.headFont().color = '#00B2F2';
   grid.setRowHeight(40);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 20;
   grid.rowFont().color = '#59FDE9';
   var column = MO.Class.create(MO.FGuiGridColumnPicture);
   column.setName('rank');
   column.setLabel();
   column.setDataName('image');
   column.setWidth(110);
   column.setPadding(1, 1, 1, 1);
   column.setAlign(MO.EUiAlign.Center);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('customer_city');
   column.setLabel('');
   column.setDataName('customer_city');
   column.setWidth(100);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('label_phone');
   column.setLabel('');
   column.setDataName('label_phone');
   column.setWidth(160);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnCurrency);
   column.setName('investment');
   column.setLabel('');
   column.setDataName('investment');
   column.setNormalColor('#59FDE9');
   column.setHighColor('#FDEF01');
   column.setLowerColor('#EB6C03');
   column.setNegativeColor('#FF0000');
   column.cellPadding().right = 40;
   column.setWidth(160);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
   var grid = o._gridControl = MO.Class.create(MO.FGuiTable);
   grid.setOptionClip(true);
   grid.setLocation(50, 332);
   grid.setSize(800, 700);
   grid.setAnchorCd(MO.EUiAnchor.Left | MO.EUiAnchor.Right | MO.EUiAnchor.Bottom);
   grid.setLeft(9);
   grid.setTop(332);
   grid.setRight(25);
   grid.setBottom(20);
   grid.setHeadHeight(35);
   grid.setHeadBackColor('#122A46');
   grid.headFont().font = 'Microsoft YaHei';
   grid.headFont().size = 17;
   grid.headFont().color = '#00B2F2';
   grid.setRowHeight(32);
   grid.rowFont().font = 'Microsoft YaHei';
   grid.rowFont().size = 18;
   grid.rowFont().color = '#59FDE9';
   var column = MO.Class.create(MO.FGuiGridColumnDate);
   column.setName('recordDate');
   column.setLabel('时间');
   column.setDataName('record_date');
   column.setDateFormat('HH24:MI:SS');
   column.setWidth(140);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('customerCity');
   column.setLabel('城市');
   column.setDataName('customer_city');
   column.setWidth(180);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('customerInfo');
   column.setLabel('用户-手机');
   column.setDataName('customer_info');
   column.setWidth(140);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnCurrency);
   column.setName('investmentAmount');
   column.setOptionDecimal(false);
   column.setLabel('投资额');
   column.setDataName('investment_amount');
   column.cellPadding().right = 10;
   column.setNormalColor('#59FDE9');
   column.setHighColor('#FDEF01');
   column.setLowerColor('#EB6C03');
   column.setNegativeColor('#FF0000');
   column.setWidth(160);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnText);
   column.setName('modelLabel');
   column.setLabel('投资产品');
   column.setDataName('model_label');
   column.setWidth(120);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnCurrency);
   column.setName('investmentGain');
   column.setOptionDecimal(false);
   column.setLabel('年化');
   column.setDataName('investment_gain');
   column.setNormalColor('#59FDE9');
   column.setHighColor('#FDEF01');
   column.setLowerColor('#EB6C03');
   column.setNegativeColor('#FF0000');
   column.setWidth(100);
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   var column = MO.Class.create(MO.FGuiGridColumnCurrency);
   column.setName('bankGain');
   column.setOptionDecimal(false);
   column.setLabel('银行');
   column.setDataName('bank_gain');
   column.setNormalColor('#59FDE9');
   column.setHighColor('#FDEF01');
   column.setLowerColor('#EB6C03');
   column.setNegativeColor('#FF0000');
   column.setWidth(100);
   column.cellPadding().right = 10;
   column.setPadding(1, 1, 1, 1);
   grid.pushColumn(column);
   o.push(grid);
   o._headFontStyle = 'bold 32px Microsoft YaHei';
   var isVertical = MO.Window.Browser.isOrientationVertical()
   if (isVertical) {
      o._tableCount = 11;
      o._rankStart = 100;
      o._rankTitleStart = -5;
      o._rankHeight = 249;
      o._rankRowHeight = 50;
      o._rankIconStart = 22;
      o._rankTextStart = 8;
      o._rankRowUp = 36;
      o._rankRowDown = 68;
      o._headStart = 352;
      o._headTextTop = 37;
      o._headHeight = 54;
      o._rowStart = 418;
      o._rowTextTop = 0;
      o._rowFontStyle = '36px Microsoft YaHei';
   } else {
      o._tableCount = 19;
      o._rankStart = 110;
      o._rankTitleStart = 0;
      o._rankHeight = 219;
      o._rankRowHeight = 40;
      o._rankIconStart = 25;
      o._rankTextStart = 0;
      o._rankRowUp = 32;
      o._rankRowDown = 51;
      o._headStart = 336;
      o._headTextTop = 27;
      o._headHeight = 40;
      o._rowFontStyle = '16px Microsoft YaHei';
      o._rowStart = 384;
   }
}
MO.FEaiChartMktCustomerV2Table_setRankUnits = function FEaiChartMktCustomerV2Table_setRankUnits(units) {
   var o = this;
   var grid = o._gridRank;
   grid.clearRows();
   var count = units.count();
   for (var i = 0; i < count; i++) {
      var unit = units.at(i);
      var row = grid.allocRow();
      var card = unit.card();
      var city = MO.Console.find(MO.FEaiResourceConsole).cityModule().findByCard(card);
      var cityLabel = '';
      if (city) {
         cityLabel = city.label();
      }
      row.set('image', '{eai.resource}/live/' + (i + 1) + '.png');
      row.set('customer_city', cityLabel);
      row.set('label_phone', unit.label() + " - " + unit.phone());
      row.set('investment', unit.investment());
      grid.pushRow(row);
   }
}
MO.FEaiChartMktCustomerV2Table_pushUnit = function FEaiChartMktCustomerV2Table_pushUnit(unit) {
   var o = this;
   if (!unit) {
      return null;
   }
   var card = unit.card();
   var city = MO.Console.find(MO.FEaiResourceConsole).cityModule().findByCard(card);
   var cityLabel = '';
   if (city) {
      cityLabel = city.label();
   }
   var grid = o._gridControl;
   var row = grid.allocRow();
   row.set('record_date', unit.recordDate());
   row.set('customer_city', cityLabel);
   row.set('customer_info', unit.label() + ' - ' + unit.phone());
   row.set('model_label', unit.modelLabel());
   row.set('investment_amount', parseInt(unit.investment()));
   row.set('investment_gain', parseInt(unit.gain()));
   row.set('bank_gain', parseInt(unit.bankGain()));
   grid.insertRow(row);
   var entities = o._units;
   entities.unshift(unit);
   o._lineScroll -= o._rowHeight;
   if (entities.count() > o._tableCount) {
      entities.pop();
   }
}
MO.FEaiChartMktCustomerV2Table_dispose = function FEaiChartMktCustomerV2Table_dispose() {
   var o = this;
   o._units = MO.Lang.Object.dispose(o._units);
   o._backgroundPadding = MO.Lang.Object.dispose(o._backgroundPadding);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FEaiChartMktCustomerV2TenderSegment = function FEaiChartMktCustomerV2TenderSegment(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MGuiSize);
   o._unit              = MO.Class.register(o, new MO.AGetSet('_unit'));
   o._startPoint        = null;
   o._endPoint          = null;
   o._segmentColorRed   = 0;
   o._segmentColorGreen = 0;
   o._segmentColorBlue  = 0;
   o._segmentLength     = MO.Class.register(o, new MO.AGetSet('_segmentLength'), 200);
   o._startTick         = MO.Class.register(o, new MO.AGetSet('_startTick'));
   o._duration          = MO.Class.register(o, new MO.AGetSet('_duration'), 5000);
   o._finished          = MO.Class.register(o, new MO.AGetSet('_finished'), false);
   o.construct          = MO.FEaiChartMktCustomerV2TenderSegment_construct;
   o.setup              = MO.FEaiChartMktCustomerV2TenderSegment_setup;
   o.draw               = MO.FEaiChartMktCustomerV2TenderSegment_draw;
   o.dispose            = MO.FEaiChartMktCustomerV2TenderSegment_dispose;
   return o;
}
MO.FEaiChartMktCustomerV2TenderSegment_construct = function FEaiChartMktCustomerV2TenderSegment_construct() {
   var o = this;
   o.__base.FObject.construct.call(o);
   o.__base.MGuiSize.construct.call(o);
}
MO.FEaiChartMktCustomerV2TenderSegment_setup = function FEaiChartMktCustomerV2TenderSegment_setup(startX, startY, endX, endY, color) {
   var o = this;
   var startPoint = o._startPoint;
   var endPoint = o._endPoint;
   if (!startPoint || !endPoint) {
      startPoint = o._startPoint = new MO.SPoint2(startX, startY);
      endPoint = o._endPoint = new MO.SPoint2(endX, endY);
   }
   else {
      startPoint.set(startX, startY);
      endPoint.set(endX, endY);
   }
   o._segmentColorRed = parseInt(255 * color.red);
   o._segmentColorGreen = parseInt(255 * color.green);
   o._segmentColorBlue = parseInt(255 * color.blue);
   o._startTick = MO.Timer.current();
   o._finished = false;
}
MO.FEaiChartMktCustomerV2TenderSegment_draw = function FEaiChartMktCustomerV2TenderSegment_draw(context) {
   var o = this;
   if (o._finished) {
      return;
   }
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var startPoint = o._startPoint;
   var endPoint = o._endPoint;
   var startX = rectangle.left + startPoint.x;
   var startY = rectangle.top + startPoint.y;
   var endX = rectangle.left + endPoint.x;
   var endY = rectangle.top + endPoint.y;
   var currentTick = MO.Timer.current() - o._startTick;
   var rate = currentTick / o._duration;
   var opcity = 1;
   if (rate > 1) {
      opcity = 1 - (rate - 1) * 20;
   }
   if (rate > 1.05) {
      o._finished = true;
   }
   var drawX = startX + (endX - startX) * rate;
   var drawY = startY + (endY - startY) * rate;
   var segmentLength = o._segmentLength;
   var lengthX = segmentLength * (startX - endX) / (Math.abs(endX - startX) + Math.abs(endY - startY));
   var lengthY = segmentLength * (startY - endY) / (Math.abs(endX - startX) + Math.abs(endY - startY));
   var drawToX = drawX + lengthX;
   var drawToY = drawY + lengthY;
   if(!o._unit.calculateColor){
      return;
   }
   var red = o._segmentColorRed;
   var green = o._segmentColorGreen;
   var blue = o._segmentColorBlue;
   var gradient = graphic._handle.createLinearGradient(drawX, drawY, drawToX, drawToY);
   gradient.addColorStop('0', 'rgba(' + red + ',' + green + ',' + blue + ',' + opcity + ')');
   gradient.addColorStop('1.0', 'rgba(' + red + ',' + green + ',' + blue + ',' + '0)');
   drawX = drawX < endX ? endX : drawX;
   drawToX = drawToX > startX ? startX : drawToX;
   if (startY > endY) {
      drawY = drawY < endY ? endY : drawY;
      drawToY = drawToY > startY ? startY : drawToY;
   }
   else {
      drawY = drawY > endY ? endY : drawY;
      drawToY = drawToY < startY ? startY : drawToY;
   }
   graphic.drawLine(drawX, drawY, drawToX, drawToY, gradient, 4);
}
MO.FEaiChartMktCustomerV2TenderSegment_dispose = function FEaiChartMktCustomerV2TenderSegment_dispose() {
   var o = this;
   o._unit.calculateColor = null;
   o._unit = MO.Lang.Object.dispose(o._unit);
   o._startPoint = MO.Lang.Object.dispose(o._startPoint);
   o._endPoint = MO.Lang.Object.dispose(o._endPoint);
   o.__base.MGuiSize.dispose.call(o);
   o.__base.FObject.dispose.call(o);
}
MO.FEaiChartMktCustomerV2Timeline = function FEaiChartMktCustomerV2Timeline(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._startTime = MO.Class.register(o, new MO.AGetSet('_startTime'));
   o._endTime = MO.Class.register(o, new MO.AGetSet('_endTime'));
   o._trendInfo = MO.Class.register(o, new MO.AGetSet('_trendInfo'));
   o._ready = false;
   o._investmentTotal = 0;
   o._baseHeight = 5;
   o._backgroundImage= null;
   o._backgroundPadding=null;
   o._degreeLineHeight = MO.Class.register(o, new MO.AGetSet('_degreeLineHeight'), 10);
   o._triangleWidth = MO.Class.register(o, new MO.AGetSet('_triangleWidth'), 10);
   o._triangleHeight = MO.Class.register(o, new MO.AGetSet('_triangleHeight'), 12);
   o._decoLineGap = MO.Class.register(o, new MO.AGetSet('_decoLineGap'), 10);
   o._decoLineWidth = MO.Class.register(o, new MO.AGetSet('_decoLineWidth'), 10);
   o.oeUpdate = MO.FEaiChartMktCustomerV2Timeline_oeUpdate;
   o.construct = MO.FEaiChartMktCustomerV2Timeline_construct;
   o.sync = MO.FEaiChartMktCustomerV2Timeline_sync;
   o.drawTrend = MO.FEaiChartMktCustomerV2Timeline_drawTrend;
   o.onPaintBegin = MO.FEaiChartMktCustomerV2Timeline_onPaintBegin;
   o.on24HDataFetch = MO.FEaiChartMktCustomerV2Timeline_on24HDataFetch;
   return o;
}
MO.FEaiChartMktCustomerV2Timeline_construct = function FEaiChartMktCustomerV2Timeline_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._startTime = new MO.TDate();
   o._endTime = new MO.TDate();
   o._trendInfo = MO.Class.create(MO.FEaiLogicInfoCustomerTrend);
   var imageConsole = MO.Console.find(MO.FImageConsole);
   o._backgroundImage = imageConsole.load('{eai.resource}/live/timelineTextbg.png');
   o._backgroundPadding = new MO.SPadding(20, 20, 20, 20);
   this.dirty();
}
MO.FEaiChartMktCustomerV2Timeline_oeUpdate = function FEaiChartMktCustomerV2Timeline_oeUpdate(event) {
   var o = this;
   o.__base.FGuiControl.oeUpdate.call(o, event);
   if (o._ready) {
      return;
   }
   var systemLogic = MO.Console.find(MO.FEaiLogicConsole).system();
   if (systemLogic.testReady()) {
      o._ready = true;
   }
   return MO.EEventStatus.Stop;
}
MO.FEaiChartMktCustomerV2Timeline_drawTrend = function FEaiChartMktCustomerV2Timeline_drawTrend(graphic, propertyName, dataLeft, dataTop, dataRight, dataBottom, dataHeight, bakTime, timeSpan, maxAmount, bottomColor, topColor) {
   var o = this;
   var startTime = o._startTime;
   var units = o._trendInfo.units();
   var count = units.count();
   var unitFirst = units.first();
   var handle = graphic._handle;
   handle.lineCap = 'round';
   var pixPer10k = dataHeight * 10000 / maxAmount;
   var amount = unitFirst[propertyName];
   var lastX = dataLeft;
   var lastY = dataBottom - amount / 10000 * pixPer10k;
   handle.beginPath();
   handle.moveTo(lastX, lastY);
   var rateResource = MO.Console.find(MO.FEaiResourceConsole).rateModule().find(MO.EEaiRate.Investment);
   for (var i = 1; i < count; i++) {
      var unit = units.get(i);
      var value = unit[propertyName];
      startTime.parseAuto(unit.recordDate());
      startTime.refresh();
      var degreeSpan = startTime.date.getTime() - bakTime;
      var x = dataLeft + (dataRight - dataLeft) * (degreeSpan / timeSpan);
      var y = dataBottom - value / 10000 * pixPer10k;
      y -= o._baseHeight;
      handle.lineTo(x, y);
   }
   var hexColor = MO.Lang.Hex.format(rateResource.findRate(0));
   var bottomColor = '#' + hexColor.substring(2);
   var opBottomColor = 'rgba(' + MO.Lang.Hex.parse(hexColor.substring(2, 4)) + ',' + MO.Lang.Hex.parse(hexColor.substring(4, 6)) + ',' + MO.Lang.Hex.parse(hexColor.substring(6, 8)) + ',' + '0.5)';
   var hexColor = MO.Lang.Hex.format(rateResource.findRate(1));
   var topColor = '#' + hexColor.substring(2);
   var opTopColor = 'rgba(' + MO.Lang.Hex.parse(hexColor.substring(2, 4)) + ',' + MO.Lang.Hex.parse(hexColor.substring(4, 6)) + ',' + MO.Lang.Hex.parse(hexColor.substring(6, 8)) + ',' + '0.5)';
   var gradient = graphic.createLinearGradient(0, dataBottom, 0, dataTop);
   gradient.addColorStop('0', bottomColor);
   gradient.addColorStop('1', topColor);
   var opGradient = graphic.createLinearGradient(0, dataBottom, 0, dataTop);
   opGradient.addColorStop('0', opBottomColor);
   opGradient.addColorStop('1', opTopColor);
   handle.strokeStyle = gradient;
   handle.lineWidth = 4;
   handle.stroke();
   handle.fillStyle = opGradient;
   handle.lineTo(x, dataBottom);
   handle.lineTo(dataLeft, dataBottom);
   handle.lineTo(dataLeft, lastY);
   handle.fill();
}
MO.FEaiChartMktCustomerV2Timeline_onPaintBegin = function FEaiChartMktCustomerV2Timeline_onPaintBegin(event) {
   var o = this;
   if (!o._ready) {
      return;
   }
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var trendInfo = o._trendInfo;
   graphic.setFont('22px Microsoft YaHei');
   var textWidth = graphic.textWidth('投资总计：');
   var investmentTotalText = MO.Lang.Float.unitFormat(trendInfo.investmentTotal(), 0, 0, 2, 0, 10000, '万');
   var investmentTotalWidth = graphic.textWidth(investmentTotalText);
   var imageWidth = investmentTotalWidth + textWidth;
   var top = rectangle.top+20;
   var bottom = rectangle.top + rectangle.height;
   var middle = bottom - 50;
   var decoLeft = rectangle.left +imageWidth+20;
   var decoRight = rectangle.left + rectangle.width - 12;
   var decoLineMargin = o.triangleWidth() + o.decoLineGap();
   graphic.drawTriangle(decoLeft, middle, decoLeft + o.triangleWidth(), middle + o.triangleHeight() / 2, decoLeft + o.triangleWidth(), middle - o.triangleHeight() / 2, 1, '#F8CB3D', '#F8CB3D');
   graphic.drawTriangle(decoRight, middle, decoRight - o.triangleWidth(), middle + o.triangleHeight() / 2, decoRight - o.triangleWidth(), middle - o.triangleHeight() / 2, 1, '#F8CB3D', '#F8CB3D');
   graphic.drawLine(decoLeft + decoLineMargin, middle, decoLeft + decoLineMargin + o.decoLineWidth(), middle, '#F8CB3D', 3);
   graphic.drawLine(decoRight - decoLineMargin, middle, decoRight - decoLineMargin - o.decoLineWidth(), middle, '#F8CB3D', 3);
   var dataLeft = decoLeft + decoLineMargin + o.decoLineWidth();
   var dataRight = decoRight - decoLineMargin - o.decoLineWidth();
   var dataTop = top + 90;
   var dataBottom = bottom - 50;
   var dataHeight = dataBottom - dataTop+80;
    graphic.drawLine(dataLeft, middle, dataRight, middle, '#F8CB3D', 3);
    var startTime = o.startTime();
    var endTime = o.endTime();
    var timeSpan = endTime.date.getTime() - startTime.date.getTime();
    var bakTime = startTime.date.getTime();
   var trendInfo = o._trendInfo;
   var units = trendInfo.units();
   if (!units) {
      return;
   }
   if (units.isEmpty()) {
      return;
   }
   var unitFirst = units.first();
   var maxAmount = 0;
   var count = units.count();
   for (var i = 0; i < count; i++) {
      var unit = units.get(i);
      var investment = unit.investment();
      if (investment > maxAmount) {
         maxAmount = investment;
      }
   }
   var lastHour = -1;
   var hourInves = 0;
   var maxHourInves = 0;
   startTime.parseAuto(unitFirst.recordDate());
   startTime.refresh();
   lastHour = startTime.date.getHours();
   for (var i = 0; i < count; i++) {
      var unit = units.get(i);
      startTime.parseAuto(unit.recordDate());
      startTime.refresh();
      var hour = startTime.date.getHours();
      if (lastHour == hour) {
         hourInves += unit.investment();
      } else {
         if (hourInves > maxHourInves) {
            maxHourInves = hourInves;
            hourInves = 0;
         }
         lastHour = hour;
      }
   }
   decoLeft = decoLeft - imageWidth  ;
   top = top + rectangle.height -220 ;
   graphic.setFont('24px Microsoft YaHei');
   graphic.drawText("24H数据曲线", decoLeft+20, top+5, '#54F0FF');
   graphic.setFont('17px Microsoft YaHei');
   var image = o._backgroundImage;
   var padding = o._backgroundPadding;
   var rowStart = top +30;
   var rowHeight = 25;
   graphic.drawImage(image,decoLeft,top-30,226,207);
   var textWidth = graphic.textWidth('投资总计的：');
   var monthInvestmentTotal = (trendInfo.monthInvestmentTotal()/10000).toFixed(2);
   var monthInvestmentWidth = graphic.textWidth(monthInvestmentTotal);
   var investmentTotalText = (trendInfo.investmentTotal()/10000).toFixed(2);
   investmentTotalText +='万';
   var investmentTotalWidth = graphic.textWidth(investmentTotalText);
   var investmentMaxText = (maxHourInves/10000).toFixed(2);
   investmentMaxText +='万';
   var investmentMaxWidth = graphic.textWidth(investmentMaxText);
   var investmentAvgText = (trendInfo.investmentTotal()/10000/24).toFixed(2);
   investmentAvgText +='万';
   var investmentAvgWidth = graphic.textWidth(investmentAvgText);
   var maxWidth = monthInvestmentWidth;
   decoLeft = decoLeft+10;
   graphic.drawText('24H总额：', decoLeft, rowStart + rowHeight * 0+ 5, '#00CFFF');
   if(investmentTotalText.length>3){
      var high = investmentTotalText.substring(0, investmentTotalText.length - 8);
      var middle = investmentTotalText.substring(investmentTotalText.length - 8, investmentTotalText.length - 3);
      var low = investmentTotalText.substring(investmentTotalText.length - 3, investmentTotalText.length);
      var highWidth = graphic.textWidth(high);
      var middleWidth = graphic.textWidth(middle);
      var lowWidth = graphic.textWidth(low);
      graphic.drawText(high, decoLeft + textWidth + maxWidth - investmentTotalWidth, rowStart + rowHeight * 0+5, '#FDEF01');
      graphic.drawText(middle, decoLeft + textWidth + maxWidth - investmentTotalWidth+highWidth, rowStart + rowHeight * 0+5, '#ff8f39');
      graphic.drawText(low, decoLeft + textWidth + maxWidth - investmentTotalWidth+highWidth+middleWidth, rowStart + rowHeight * 0+5, '#00B5FF');
   }else{
      graphic.drawText(investmentTotalText, decoLeft + textWidth + maxWidth - investmentTotalWidth, rowStart + rowHeight * 0+5, '#00B5FF');
   }
   graphic.drawText('小时峰值：', decoLeft, rowStart + rowHeight * 1 + 5, '#00CFFF');
   if(investmentMaxText.length>3){
      var high = investmentMaxText.substring(0, investmentMaxText.length - 8);
      var middle = investmentMaxText.substring(investmentMaxText.length - 8, investmentMaxText.length - 3);
      var low = investmentMaxText.substring(investmentMaxText.length - 3, investmentMaxText.length);
      var highWidth = graphic.textWidth(high);
      var middleWidth = graphic.textWidth(middle);
      var lowWidth = graphic.textWidth(low);
      graphic.drawText(high,  decoLeft + textWidth + maxWidth - investmentMaxWidth, rowStart + rowHeight * 1 + 5, '#FDEF01');
      graphic.drawText(middle, decoLeft + textWidth + maxWidth - investmentMaxWidth+highWidth, rowStart + rowHeight * 1+5, '#ff8f39');
      graphic.drawText(low, decoLeft + textWidth + maxWidth - investmentMaxWidth+highWidth+middleWidth, rowStart + rowHeight * 1 + 5, '#00B5FF');
   }else{
      graphic.drawText(investmentMaxText, decoLeft + textWidth + maxWidth - investmentMaxWidth, rowStart + rowHeight * 1 + 5, '#00B5FF');
   }
   graphic.drawText('小时均值：', decoLeft, rowStart + rowHeight * 2 + 5, '#00CFFF');
   if(investmentAvgText.length>3){
      var high = investmentAvgText.substring(0, investmentAvgText.length - 8);
      var middle = investmentAvgText.substring(investmentAvgText.length - 8, investmentAvgText.length - 3);
      var low = investmentAvgText.substring(investmentAvgText.length - 3, investmentAvgText.length);
      var highWidth = graphic.textWidth(high);
      var middleWidth = graphic.textWidth(middle);
      var lowWidth = graphic.textWidth(low);
      graphic.drawText(high,   decoLeft + textWidth + maxWidth - investmentAvgWidth, rowStart + rowHeight * 2 + 5, '#FDEF01');
      graphic.drawText(middle, decoLeft + textWidth + maxWidth - investmentAvgWidth+highWidth, rowStart + rowHeight * 2+5, '#ff8f39');
      graphic.drawText(low,  decoLeft + textWidth + maxWidth - investmentAvgWidth+highWidth+middleWidth, rowStart + rowHeight * 2 + 5, '#00B5FF');
   }else{
      graphic.drawText('小时均值：', decoLeft, rowStart + rowHeight * 2 + 5, '#00CFFF');
      graphic.drawText(investmentAvgText, decoLeft + textWidth + maxWidth - investmentAvgWidth, rowStart + rowHeight * 2 + 5, '#00B5FF');
   }
   var weekInvestmentTotal = (trendInfo.weekInvestmentTotal()/10000).toFixed(2);
   weekInvestmentTotal +='万'
   var weekInvestmentWidth = graphic.textWidth(weekInvestmentTotal);
   graphic.drawText('本周总值：', decoLeft, rowStart + rowHeight * 3 + 5, '#00CFFF');
   if(weekInvestmentTotal.length>3){
      var high = weekInvestmentTotal.substring(0, weekInvestmentTotal.length - 8);
      var middle = weekInvestmentTotal.substring(weekInvestmentTotal.length - 8, weekInvestmentTotal.length - 3);
      var low = weekInvestmentTotal.substring(weekInvestmentTotal.length - 3, weekInvestmentTotal.length);
      var highWidth = graphic.textWidth(high);
      var middleWidth = graphic.textWidth(middle);
      var lowWidth = graphic.textWidth(low);
      graphic.drawText(high,   decoLeft + textWidth + maxWidth - weekInvestmentWidth, rowStart + rowHeight * 3 + 5, '#FDEF01');
      graphic.drawText(middle, decoLeft + textWidth + maxWidth - weekInvestmentWidth+highWidth, rowStart + rowHeight * 3+5, '#ff8f39');
      graphic.drawText(low,  decoLeft + textWidth + maxWidth - weekInvestmentWidth+highWidth+middleWidth, rowStart + rowHeight * 3 + 5, '#00B5FF');
   }else{
      graphic.drawText(weekInvestmentTotal, decoLeft + textWidth + maxWidth - weekInvestmentWidth, rowStart + rowHeight * 3 + 5, '#00B5FF');
   }
   var monthInvestmentTotal = (trendInfo.monthInvestmentTotal()/10000).toFixed(2);
   monthInvestmentTotal +='万';
   var monthInvestmentWidth = graphic.textWidth(monthInvestmentTotal);
   graphic.drawText('本月总额：', decoLeft, rowStart + rowHeight * 4+ 5, '#00CFFF');
   if(monthInvestmentTotal.length>3){
      var high = monthInvestmentTotal.substring(0, monthInvestmentTotal.length - 8);
      var middle = monthInvestmentTotal.substring(monthInvestmentTotal.length - 8, monthInvestmentTotal.length-3);
      var low = monthInvestmentTotal.substring(monthInvestmentTotal.length - 3, monthInvestmentTotal.length);
      var highWidth = graphic.textWidth(high);
      var middleWidth = graphic.textWidth(middle);
      var lowWidth = graphic.textWidth(low);
      graphic.drawText(high,   decoLeft + textWidth + maxWidth - monthInvestmentWidth, rowStart + rowHeight * 4 + 5, '#FDEF01');
      graphic.drawText(middle, decoLeft + textWidth + maxWidth - monthInvestmentWidth+highWidth, rowStart + rowHeight * 4+5, '#ff8f39');
      graphic.drawText(low,  decoLeft + textWidth + maxWidth - monthInvestmentWidth+highWidth+middleWidth, rowStart + rowHeight * 4 + 5, '#00B5FF');
   }else{
      graphic.drawText(monthInvestmentTotal, decoLeft + textWidth + maxWidth - monthInvestmentWidth, rowStart + rowHeight * 4 + 5, '#00B5FF');
   }
   startTime.date.setTime(bakTime);
   startTime.refresh();
   var text;
   var drawText = false;
   var textWidth = 0;
   graphic.setFont('bold 18px Microsoft YaHei');
   var middle = bottom - 50;
   while (!startTime.isAfter(endTime)) {
      var span = startTime.date.getTime() - bakTime;
      var x = dataLeft + (dataRight - dataLeft) * (span / timeSpan);
      graphic.drawLine(x, middle - o.degreeLineHeight(), x, middle, '#FFFFFF', 1);
      text = startTime.format('HH24:MI');
      startTime.addHour(1);
      startTime.truncHour();
      drawText = !drawText;
      if (drawText) {
         textWidth = graphic.textWidth(text);
         graphic.drawText(text, x - textWidth / 2, middle + 20, '#59FDE9');
      }
   }
   graphic.drawLine(dataRight, middle - o.degreeLineHeight(), dataRight, middle, '#FFFFFF', 1);
   var endText = endTime.format('HH24:MI');
   o.drawTrend(graphic, '_investment', dataLeft, dataTop, dataRight, dataBottom, dataHeight, bakTime, timeSpan, maxAmount, '#FF8800', '#FF0000');
   startTime.date.setTime(bakTime);
   startTime.refresh();
}
MO.FEaiChartMktCustomerV2TransferCurve = function FEaiChartMktCustomerV2TransferCurve(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MGuiSize);
   o._curveStyle = MO.Class.register(o, new MO.AGetSet('_curveStyle'));
   o._curveData = MO.Class.register(o, new MO.AGetSet('_curveData'));
   o._arcLevel = 1;
   o._startTick = MO.Class.register(o, new MO.AGetSet('_startTick'));
   o._isActive = MO.Class.register(o, new MO.AGetSet('_isActive'), false);
   o._drawPoint = null;
   o._sTangentPoint = null;
   o._eTangentPoint = null;
   o._tangentVector = null;
   o.construct = MO.FEaiChartMktCustomerV2TransferCurve_construct;
   o.setup = MO.FEaiChartMktCustomerV2TransferCurve_setup;
   o.draw = MO.FEaiChartMktCustomerV2TransferCurve_draw;
   o.dispose = MO.FEaiChartMktCustomerV2TransferCurve_dispose;
   return o;
}
MO.FEaiChartMktCustomerV2TransferCurve_construct = function FEaiChartMktCustomerV2TransferCurve_construct() {
   var o = this;
   o.__base.FObject.construct.call(o);
   o.__base.MGuiSize.construct.call(o);
   o._drawPoint = new MO.SPoint2(0, 0);
   o._sTangentPoint = new MO.SPoint2(0, 0);
   o._eTangentPoint = new MO.SPoint2(0, 0);
   o._stPoint3 = new MO.SPoint3(0, 0, 0);
   o._etPoint3 = new MO.SPoint3(0, 0, 0);
   o._tangentVector = new MO.SVector3(0, 0, 0);
}
MO.FEaiChartMktCustomerV2TransferCurve_setup = function FEaiChartMktCustomerV2TransferCurve_setup(startX, startY, endX, endY) {
   var o = this;
   var startPoint = new MO.SPoint2(startX, startY);
   var endPoint = new MO.SPoint2(endX, endY);
   var distX = (endPoint.x - startPoint.x) * 0.5;
   var distY = (endPoint.y - startPoint.y) * 0.5;
   var cpXC = (startPoint.x + endPoint.x) * 0.5;
   var cpYC = (startPoint.y + endPoint.y) * 0.5;
   var cpX1;
   var cpX2;
   var cpY1;
   var cpY2;
   var style = o._curveStyle;
   switch (style.arcDirection) {
      case MO.EGuiArcDirection.Left:
         cpXC -= style.arcStepHeight * o._arcLevel;
         cpX1 = cpX2 = cpXC;
         cpY1 = cpY2 = cpYC;
         cpY1 -= distY * style.arcAngle;
         cpY2 += distY * style.arcAngle;
         break;
      case MO.EGuiArcDirection.Top:
         cpYC -= style.arcStepHeight * o._arcLevel;
         cpY1 = cpY2 = cpYC;
         cpX1 = cpX2 = cpXC;
         cpX1 -= distX * style.arcAngle;
         cpX2 += distX * style.arcAngle;
         break;
      case MO.EGuiArcDirection.Right:
         cpXC += style.arcStepHeight * o._arcLevel;
         cpX1 = cpX2 = cpXC;
         cpY1 = cpY2 = cpYC;
         cpY1 -= distY * style.arcAngle;
         cpY2 += distY * style.arcAngle;
         break;
      case MO.EGuiArcDirection.Bottom:
         cpYC += style.arcStepHeight * o._arcLevel;
         cpY1 = cpY2 = cpYC;
         cpX1 = cpX2 = cpXC;
         cpX1 -= distX * style.arcAngle;
         cpX2 += distX * style.arcAngle;
         break;
      case MO.EGuiArcDirection.Liner:
      default:
         break;
   }
   var curveData = o._curveData = new MO.SBezierCurve();
   curveData.startPoint = startPoint;
   curveData.endPoint = endPoint;
   curveData.scp = new MO.SPoint2(cpX1, cpY1);
   curveData.ecp = new MO.SPoint2(cpX2, cpY2);
   curveData.calcCoefficient();
   o._startTick = MO.Timer.current();
}
MO.FEaiChartMktCustomerV2TransferCurve_draw = function FEaiChartMktCustomerV2TransferCurve_draw(context) {
   var o = this;
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var style = o._curveStyle;
   var curveData = o._curveData;
   var startPoint = curveData.startPoint;
   var endPoint = curveData.endPoint;
   var scp = curveData.scp;
   var ecp = curveData.ecp;
   var startX = rectangle.left + startPoint.x;
   var startY = rectangle.top + startPoint.y;
   var endX = rectangle.left + endPoint.x;
   var endY = rectangle.top + endPoint.y;
   var scpX = rectangle.left + scp.x;
   var scpY = rectangle.top + scp.y;
   var ecpX = rectangle.left + ecp.x;
   var ecpY = rectangle.top + ecp.y;
   graphic._handle.beginPath();
   graphic._handle.moveTo(startX, startY);
   graphic._handle.bezierCurveTo(scpX, scpY, ecpX, ecpY, endX, endY);
   graphic._handle.lineWidth = style.lineWidth;
   graphic._handle.strokeStyle = style.flarePointStyle;
   graphic._handle.stroke();
   var currentTick = MO.Timer.current() - o._startTick;
   var round = currentTick / style.flowPeriod;
   var t = round - parseInt(round);
   var drawPoint = o._drawPoint;
   curveData.pointAt(t, drawPoint);
   drawPoint.x += rectangle.left;
   drawPoint.y += rectangle.top;
   var pointFillStyle = graphic._handle.createRadialGradient(drawPoint.x, drawPoint.y, 0, drawPoint.x, drawPoint.y, 10);
   pointFillStyle.addColorStop("0", 'rgba(255, 0, 0, 1.0');
   pointFillStyle.addColorStop("1", 'rgba(255, 0, 0, 0');
   var stPoint = o._sTangentPoint;
   var etPoint = o._eTangentPoint;
   curveData.tangentAt(t, stPoint, etPoint);
   var stPoint3 = o._stPoint3;
   var etPoint3 = o._etPoint3;
   stPoint3.set(stPoint.x, stPoint.y, 0);
   etPoint3.set(etPoint.x, etPoint.y, 0);
   var tangentVector = o._tangentVector.direction(stPoint3, etPoint3);
   tangentVector.normalize();
   var tailPoint = new MO.SPoint2();
   curveData.pointAt(t - 0.1, tailPoint);
   tailPoint.x += rectangle.left;
   tailPoint.y += rectangle.top;
   var flareFillStyle = graphic._handle.createRadialGradient(drawPoint.x, drawPoint.y, 0, tailPoint.x, tailPoint.y, 100);
   flareFillStyle.addColorStop("0", 'rgba(255, 156, 0, 1.0');
   flareFillStyle.addColorStop("1", 'rgba(251, 107, 0, 0');
   graphic._handle.save();
   graphic._handle.beginPath();
   graphic._handle.moveTo(startX - 2, startY);
   graphic._handle.bezierCurveTo(scpX - 2, scpY, ecpX - 2, ecpY, endX - 2, endY);
   graphic._handle.lineTo(endX + 2, endY);
   graphic._handle.bezierCurveTo(ecpX + 2, ecpY, scpX + 2, scpY, startX + 2, startY);
   graphic._handle.closePath();
   graphic._handle.clip();
   graphic.drawCircle(drawPoint.x, drawPoint.y, 100, 0, '', flareFillStyle);
   graphic._handle.restore();
}
MO.FEaiChartMktCustomerV2TransferCurve_dispose = function FEaiChartMktCustomerV2TransferCurve_dispose() {
   var o = this;
   o._curveStyle = MO.Lang.Object.dispose(o._curveStyle);
   o.__base.FGuiControl.dispose.call(o);
}
