//==========================================================
// <T>产品甜甜圈。</T>
//
// @class
// @author sunpeng
// @version 150630
//==========================================================
MO.FEaiChartMktProductCircle = function FEaiChartMktProductCircle(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   //..........................................................
   // @attribute
   o._ready            = false;
   o._circleRadius     = MO.Class.register(o, new MO.AGetSet('_circleRadius'), 10);
   o._trendInfo        = MO.Class.register(o, new MO.AGetSet('_trendInfo'));
   o._TenderBef        = MO.Class.register(o, new MO.AGetSet('_TenderBef'));
   o._FirstLoad        = MO.Class.register(o, new MO.AGetSet('_FirstLoad'));
   o._circleStyle      = MO.Class.register(o, new MO.AGetSet('_circleStyle'));
   o._circleAirRadius  = MO.Class.register(o, new MO.AGetSet('_airRadius'), 7);
   o._circlelColor     = MO.Class.register(o, new MO.AGetSet('_circlelColor'),'#ffffff');
   //o._tatolColor       = MO.Class.register(o, new MO.AGetSet('_circlelColor'),'#ffffff');
   //..........................................................
   // @event
   o.oeUpdate          = MO.FEaiChartMktProductCircle_oeUpdate;
   //..........................................................
   // @method
   o.construct         = MO.FEaiChartMktProductCircle_construct;
  // o.sync              = MO.FEaiChartMktProductCircle_sync;
   // o.drawTrend         = MO.FEaiChartMktProductCircle_drawTrend;
   o.onPaintBegin      = MO.FEaiChartMktProductCircle_onPaintBegin;
   o.on24HDataFetch    = MO.FEaiChartMktProductCircle_on24HDataFetch;  
   o.setCircleStyle    = MO.FEaiChartMktProductCircle_setCircleStyle;
   o.dispose           = MO.FEaiChartMktProductCircle_dispose;
   o.draw              = MO.FEaiChartMktProductCircle_draw;
   return o;
}
MO.FEaiChartMktProductCircle_setCircleStyle  =  function FEaiChartMktProductCircle_setCircleStyle(Radius,color,unit){
  var o = this;
  o.setCircleRadius(o._circleStyle.radius);
  o.setCircleAirRadius(o.__circleStyle.radius*11/15);
  o.setCircleColor(o.__circleStyle.circlelColor);
  o.setTatolColor(o.__circleStyle.tatolColor);
  
}
MO.FEaiChartMktProductCircle_dispose = function FEaiChartMktProductCircle_dispose(){
   var o = this;
   o._trendInfo = MO.Lang.Object.dispose(o._trendInfo);
   o._circleStyle = MO.Lang.Object.dispose(o._circleStyle);
   // 父处理
   o.__base.FGuiControl.dispose.call(o);
}


//==========================================================
// <T>更新时间。</T>
//
// @method
//==========================================================
MO.FEaiChartMktProductCircle_construct = function FEaiChartMktProductCircle_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._trendInfo = MO.Class.create(MO.FEaiLogicInfoTrendUnit);
}


//==========================================================
// <T>更新处理。</T>
//
// @method
// @param event:SEvent 事件信息
//==========================================================
MO.FEaiChartMktProductCircle_oeUpdate = function FEaiChartMktProductCircle_oeUpdate(event) {
   var o = this;
   o.__base.FGuiControl.oeUpdate.call(o, event);
   // 更新内容
   if (o._ready) {
      return;
   } 
   var systemLogic = MO.Console.find(MO.FEaiLogicConsole).system();
   if (systemLogic.testReady()) {
      o._ready = true;
     // o.sync();
   }
   return MO.EEventStatus.Stop;
}


MO.FEaiChartMktProductCircle_draw = function FEaiChartMktProductCircle_draw(context) {
    var o = this;
    if(!o._ready){
      return;
   }
   if(!o._trendInfo){
     return;
   }
    var graphic = context.graphic;
    var rectangle = context.rectangle;
    var productRadius = o.circleRadius();
    var airRadius     = o.circleAirRadius();
    var circle_x = rectangle.left+rectangle.width/30+productRadius;
    var top = rectangle.top;
    var bottom = rectangle.top + rectangle.height;
    var circle_y = rectangle.top +rectangle.productRadius;
    var textColor = '';
    textColor = o.circlelColor();
    graphic._handle.beginPath();
    graphic._handle.arc(circle_x,circle_y, productRadius,0*Math.PI,2*Math.PI);
    graphic._handle.closePath();
    graphic._handle.strokeStyle = textColor;
    graphic._handle.stroke();
    graphic._handle.beginPath();
    graphic._handle.arc(circle_x,circle_y, airRadius,0*Math.PI,2*Math.PI,false);
    graphic._handle.closePath();
    graphic._handle.strokeStyle = textColor;
    graphic._handle.stroke();
    graphic._handle.beginPath();
    graphic._handle.arc(circle_x,circle_y, productRadius,0*Math.PI-Math.PI/2,2*Math.PI*tendRate-Math.PI/2,false);
    graphic._handle.arc(circle_x,circle_y, airRadius,2*Math.PI*tendRate-Math.PI/2,0*Math.PI-Math.PI/2,true);
    graphic._handle.closePath();
    graphic._handle.fillStyle = textColor;
    graphic._handle.fill();


    textPx = 'px Microsoft YaHei';
    textSize = 28;
    textPx = textSize + textPx
    graphic.setFont(textPx);
    //产品投资比例
    lable = persentRate+'%';
    productText_w = graphic.textWidth(lable)/2;
    graphic.drawText(lable, circle_x-productText_w, top+productRadius+productInterval+i*(2*productRadius+productInterval)+textSize/2,'#FFFFFF');
    yearRate = (unit.rate()).toFixed(2);;
    productText = unit.label();
    //graphic.setFont('blod 480px Microsoft YaHei');
    graphic.drawText(productText, text_x, circle_y, textColor);
    yearRate =  '年化利率 :' + yearRate +'%';
    graphic.setFont('20px Microsoft YaHei');
    graphic.drawText(yearRate, text_x, circle_y, '#FFFFFF');
    tatolLable = (unit.invesmentTotal()/100000000).toFixed(2);
    lable = '总计:'+"   "+tatolLable+'亿';
    graphic.drawText(lable,text_x, circle_y, '#FFFFFF');
    dayLable  = unit.invesmentDay()/100000000;
    lable = '当日:'+"    "+dayLable+'亿';
    graphic.drawText(lable,text_x, circle_y, '#FFFFFF');


}
//==========================================================
// <T>前绘制处理。</T>
//
// @method
//==========================================================
MO.FEaiChartMktProductCircle_onPaintBegin = function FEaiChartMktProductCircle_onPaintBegin(event) {
   var o = this;
   if (!o._ready || !units) {
      return;
   }
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var top = rectangle.top;
   var bottom = rectangle.top + rectangle.height;

   var decoLeft = rectangle.left + 5;
   var decoRight = rectangle.left + rectangle.width - 5;

    var unit = o._trendInfo
    var units =  o._trendInfo.units();

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
    var circle_x = decoLeft+rectangle.width/2;
    var text_x   = decoLeft+rectangle.width*2/3;
    var text_interval = rectangle.height/36;
    var productText_w = 0;
    var productText_h = 0;
    var textSize = 0 ;
    var textPx = '';
    var textColor = '';
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
          textColor = "#10d19c";
          break;
          case 2:
          textColor = "#7b47d7";
          break;
          case 3:
          textColor = "#ea3256";
          break;
          case 4:
          textColor = "#ff6817";
          break;
          case 5:
          textColor = '#ffeb4a';
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
         textSize = 28;
         textPx = textSize + textPx
         graphic.setFont(textPx);
         //产品投资比例
         lable = persentRate+'%';
         productText_w = graphic.textWidth(lable)/2;
         //productText_h = graphic.textHight(lable)/2;
         graphic.drawText(lable, circle_x-productText_w, top+productRadius+productInterval+i*(2*productRadius+productInterval)+textSize/2,'#FFFFFF');
         yearRate = (unit.rate()).toFixed(2);;
         productText = unit.label();
         //graphic.setFont('blod 480px Microsoft YaHei');
         graphic.drawText(productText, text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)-text_interval*2, textColor);
         yearRate =  '年化利率 :' + yearRate +'%';
         graphic.setFont('20px Microsoft YaHei');
         graphic.drawText(yearRate, text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval), '#FFFFFF');
         tatolLable = (unit.invesmentTotal()/100000000).toFixed(2);
         lable = '总计:'+"   "+tatolLable+'亿';
         graphic.drawText(lable,text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)+text_interval, '#FFFFFF');
         dayLable  = unit.invesmentDay()/100000000;
         lable = '当日:'+"    "+dayLable+'亿';
         graphic.drawText(lable,text_x, top+productRadius+productInterval+i*(2*productRadius+productInterval)+text_interval*2, '#FFFFFF');

     }
   }


}

