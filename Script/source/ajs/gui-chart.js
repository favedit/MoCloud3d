MO.FGuiChart = function FGuiChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl, MO.MUiChart);
   o._painter        = MO.Class.register(o, new MO.AGetter('_painter'));
   o._paintRectangle = MO.Class.register(o, new MO.AGetter('_paintRectangle'));
   o._axisX          = MO.Class.register(o, new MO.AGetter('_axisX'));
   o._axisY          = MO.Class.register(o, new MO.AGetter('_axisY'));
   o._title          = MO.Class.register(o, new MO.AGetSet('_title'));
   o._titleFont      = MO.Class.register(o, new MO.AGetter('_titleFont'));
   o._titleGap       = MO.Class.register(o, new MO.AGetSet('_titleGap'), 2);
   o._paintContext   = null;
   o.onPaintBegin    = MO.FGuiChart_onPaintBegin;
   o.construct       = MO.FGuiChart_construct;
   o.selectPainter   = MO.FGuiChart_selectPainter;
   o.dispose         = MO.FGuiChart_dispose;
   return o;
}
MO.FGuiChart_onPaintBegin = function FGuiChart_onPaintBegin(event) {
   var o = this;
   event.dataset = o._dataset;
   event.axisX = o._axisX;
   event.axisY = o._axisY;
   event.paintRectangle = o._paintRectangle;
   event.title = o._title;
   event.titleFont = o._titleFont;
   event.titleGap = o._titleGap;
   o._painter.draw(event);
}
MO.FGuiChart_construct = function FGuiChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o.__base.MUiChart.construct.call(o);
   o._paintContext = new MO.SGuiGridPaintContext();
   o._paintRectangle = new MO.SRectangle();
   o._axisX = MO.Class.create(MO.FUiChartAxis);
   o._axisY = MO.Class.create(MO.FUiChartAxis);
   o._titleFont = new MO.SUiFont();
}
MO.FGuiChart_selectPainter = function FGuiChart_selectPainter(clazz){
   var o = this;
   var painter = o._painter = MO.Class.create(clazz);
   painter.setChart(o);
}
MO.FGuiChart_dispose = function FGuiChart_dispose() {
   var o = this;
   o._paintContext = MO.Lang.Object.dispose(o._paintContext);
   o.__base.MUiChart.dispose.call(o);
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiChartBarPainter = function FGuiChartBarPainter(o) {
   o = MO.Class.inherits(this, o, MO.FGuiChartPainter);
   o.onPaintBegin  = MO.FGuiChartBarPainter_onPaintBegin;
   o.construct     = MO.FGuiChartBarPainter_construct;
   o.draw          = MO.FGuiChartBarPainter_draw;
   o.drawAxis      = MO.FGuiChartBarPainter_drawAxis;
   o.drawLine      = MO.FGuiChartBarPainter_drawLine;
   o.drawTitle     = MO.FGuiChartBarPainter_drawTitle;
   o.dispose       = MO.FGuiChartBarPainter_dispose;
   return o;
}
MO.FGuiChartBarPainter_construct = function FGuiChartBarPainter_construct() {
   var o = this;
   o.__base.FGuiChartPainter.construct.call(o);
}
MO.FGuiChartBarPainter_draw = function FGuiChartBarPainter_draw(context){
   var o = this;
   o.__base.FGuiChartPainter.draw.call(o);
   var dataset = context.dataset;
   o.drawTitle(context);
   o.drawAxis(context);
   if(dataset) {
      var serieses = dataset.serieses();
      var seriesCount = serieses.count();
      for(var i = 0; i < seriesCount; ++i) {
         var series = serieses.at(i);
         o.drawLine(context, series);
      }
   }
}
MO.FGuiChartBarPainter_drawTitle = function FGuiChartBarPainter_drawTitle(context) {
   var o = this;
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var dataset = context.dataset;
   var paintRectangle = context.paintRectangle;
   var axisX = context.axisX;
   var axisY = context.axisY;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var title = context.title;
   if(title == null || title == "") return;
   var titleFont = context.titleFont;
   var titleGap = context.titleGap;
   var titleWidth = graphic.textWidth(title);
   graphic.setFont(titleFont);
   graphic.drawText(title, pLeft + pWidth / 2 - titleWidth / 2, pTop - titleFont.size - titleGap, titleFont.color);
}
MO.FGuiChartBarPainter_drawAxis = function FGuiChartBarPainter_drawAxis(context) {
   var o = this;
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var dataset = context.dataset;
   var paintRectangle = context.paintRectangle;
   var axisX = context.axisX;
   var axisY = context.axisY;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var xDegrees = axisX.degrees();
   var yDegrees = axisY.degrees();
   var xCount = xDegrees.count();
   var yCount = yDegrees.count();
   if(xCount == 0 || yCount == 0) return;
   var stepHeight = pHeight / (yCount - 1);
   var stepWidth = pWidth / (xCount + 1);
   var yGap = axisY.degreeLabelGap();
   var xGap = axisX.degreeLabelGap();
   var xFont = axisX.font();
   var yFont = axisY.font();
   var xShowFirstLine = axisX.optionShowFirstLine();
   var yShowFirstLine = axisY.optionShowFirstLine();
   var xLabelVertical = axisX.optionLabelVertical();
   for( var i = 0; i < yCount; ++i) {
      var y = pTop + pHeight - stepHeight * i;
      var degree = yDegrees.get(i);
      var label = degree.label();
      var lineWidth = degree.lineWidth() == null ? axisY.lineWidth() : degree.lineWidth();
      var lineColor = degree.lineColor() == null ? axisY.lineColor() : degree.lineColor();
      if(axisY.optionShowAxis() || (yShowFirstLine && i == 0)) {
         graphic.beginPath();
         graphic.moveTo(pLeft, y);
         graphic.lineTo(pLeft + pWidth, y);
         graphic.drawShape(lineWidth, lineColor);
      }
      if(axisY.optionShowLabel()) {
         graphic.setFont(yFont.toString());
         var textWidth = graphic.textWidth(label);
         graphic.drawText(label, pLeft - yGap - textWidth, y, yFont.color);
      }
   }
   var yLabel = axisY.label();
   var yLabelFont = axisY.labelFont();
   if(yLabel && yLabel != "") {
      graphic.drawText(yLabel, pLeft, pTop - yLabelFont.size / 2, yLabelFont.color);
   }
   for( var i = 0; i <= xCount + 1; ++i) {
      var x = pLeft + stepWidth * i;
      if(i == 0 || i > xCount) {
         var lineWidth = axisX.lineWidth();
         var lineColor = axisX.lineColor();
      }else {
         var degree = xDegrees.get(i-1);
         var lineWidth = degree.lineWidth() == null ? axisX.lineWidth() : degree.lineWidth();
         var lineColor = degree.lineColor() == null ? axisX.lineColor() : degree.lineColor();
      }
      if(axisX.optionShowAxis() || (xShowFirstLine && i == 0)) {
         graphic.beginPath();
         graphic.moveTo(x, pTop);
         graphic.lineTo(x, pTop + pHeight);
         graphic.drawShape(lineWidth, lineColor);
      }
      if(i > 0 && i <= xCount && axisX.optionShowLabel()) {
         var label = degree.label();
         var x = pLeft + stepWidth * i;
         var textWidth = graphic.textWidth(label);
         if(xLabelVertical) {
            graphic.drawTextVertical(label, x - xFont.size / 2, pTop + pHeight + xGap + xFont.size, xFont);
         }else {
            graphic.drawText(label, x - textWidth / 2, pTop + pHeight + xGap + xFont.size, xFont.color);
         }
      }
   }
   var xLabel = axisX.label();
   var xLabelFont = axisX.labelFont();
   if(xLabel && xLabel != "") {
      graphic.setFont(xLabelFont);
      graphic.drawText(xLabel, pLeft + pWidth, pTop + pHeight, xLabelFont.color);
   }
}
MO.FGuiChartBarPainter_drawLine = function FGuiChartBarPainter_drawLine(context, series) {
   var o = this;
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var dataset = context.dataset;
   var paintRectangle = context.paintRectangle;
   var axisX = context.axisX;
   var axisY = context.axisY;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var xDegrees = axisX.degrees();
   var yDegrees = axisY.degrees();
   var xCount = xDegrees.count();
   var yCount = yDegrees.count();
   if(xCount == 0 || yCount == 0) return;
   var maxValue = yDegrees.get(yCount - 1).value();
   var minValue = yDegrees.get(0).value();
   var stepHeight = pHeight / (maxValue - minValue);
   var stepWidth = pWidth / (xCount + 1);
   var lineWidth = series.lineWidth();
   var lineColor = series.lineColor();
   var rectWidth = series.rectWidth();
   var fillColor = series.fillColor();
   var fillType = fillColor;
   var fillGradient = series.fillGradient();
   var optionShowBorder = series.optionShowBorder();
   var values = series.values();
   var valueCount = values.count();
   if(fillGradient != null) {
      var len = fillGradient.length;
      var gradient = graphic.createLinearGradient(0, pTop, 0, pHeight);
      for( var i = 0; i < len; ++i) {
         var array = fillGradient[i];
         gradient.addColorStop(array[0], array[1]);
      }
      fillType = gradient;
   }
   for(var i = 0; i < valueCount; ++i) {
      var value = values.at(i);
      var x = pLeft + stepWidth * (i+1) - rectWidth / 2;
      var y = pTop + (maxValue - value) * stepHeight;
      var h = (value - minValue) * stepHeight - 1;
      graphic.fillRectangle(x, y, rectWidth, h, fillType);
      if(optionShowBorder) {
         graphic.beginPath();
         graphic.moveTo(x, pTop + pHeight);
         graphic.lineTo(x, y);
         graphic.lineTo(x + rectWidth, y);
         graphic.lineTo(x + rectWidth, pTop + pHeight);
         graphic.drawShape(lineWidth, lineColor);
         graphic.endPath();
      }
   }
}
MO.FGuiChartBarPainter_dispose = function FGuiChartBarPainter_dispose() {
   var o = this;
   o.__base.FGuiChartPainter.dispose.call(o);
}
MO.FGuiChartLinePainter = function FGuiChartLinePainter(o) {
   o = MO.Class.inherits(this, o, MO.FGuiChartPainter);
   o.onPaintBegin = MO.FGuiChartLinePainter_onPaintBegin;
   o.construct    = MO.FGuiChartLinePainter_construct;
   o.drawAxis     = MO.FGuiChartLinePainter_drawAxis;
   o.drawLine     = MO.FGuiChartLinePainter_drawLine;
   o.drawTitle    = MO.FGuiChartLinePainter_drawTitle;
   o.draw         = MO.FGuiChartLinePainter_draw;
   o.dispose      = MO.FGuiChartLinePainter_dispose;
   return o;
}
MO.FGuiChartLinePainter_construct = function FGuiChartLinePainter_construct() {
   var o = this;
   o.__base.FGuiChartPainter.construct.call(o);
}
MO.FGuiChartLinePainter_drawTitle = function FGuiChartLinePainter_drawTitle(context) {
   var o = this;
   var graphic = context.graphic;
   var rectangle = context.rectangle;
   var dataset = context.dataset;
   var paintRectangle = context.paintRectangle;
   var axisX = context.axisX;
   var axisY = context.axisY;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var title = context.title;
   if(title == null || title == "") return;
   var titleFont = context.titleFont;
   var titleGap = context.titleGap;
   var titleWidth = graphic.textWidth(title);
   graphic.setFont(titleFont);
   graphic.drawText(title, pLeft + pWidth / 2 - titleWidth / 2, pTop - titleFont.size - titleGap, titleFont.color);
}
MO.FGuiChartLinePainter_drawAxis = function FGuiChartLinePainter_drawAxis(context){
   var o = this;
   var graphic = context.graphic;
   var dataset = context.dataset;
   var rectangle = context.rectangle;
   var paintRectangle = context.paintRectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var xAxis = context.axisX;
   var yAxis = context.axisY;
   var xDegrees = xAxis.degrees();
   var yDegrees = yAxis.degrees();
   var yCorCount = yAxis.degrees().count();
   var xCorCount = xAxis.degrees().count();
   if(yCorCount == 0 || xCorCount == 0) return;
   var stepHeight = pHeight / (yCorCount - 1);
   var stepWidth = pWidth / (xCorCount - 1);
   var yGap = yAxis.degreeLabelGap();
   var xGap = xAxis.degreeLabelGap();
   var yFont = yAxis.font();
   var xFont = xAxis.font();
   var xShowFirstLine = xAxis.optionShowFirstLine();
   var yShowFirstLine = yAxis.optionShowFirstLine();
   var xLabelVertical = xAxis.optionLabelVertical();
   for( var i = 0; i < yCorCount; ++i) {
      var y = pTop + pHeight - stepHeight * i;
      var degree = yDegrees.get(i);
      var label = degree.label();
      var lineWidth = degree.lineWidth() == null ? yAxis.lineWidth() : degree.lineWidth();
      var lineColor = degree.lineColor() == null ? yAxis.lineColor() : degree.lineColor();
      if(yAxis.optionShowAxis() || (yShowFirstLine && i == 0)) {
         graphic.beginPath();
         graphic.moveTo(pLeft, y);
         graphic.lineTo(pLeft + pWidth, y);
         graphic.drawShape(lineWidth, lineColor);
      }
      if(yAxis.optionShowLabel()) {
         graphic.setFont(yFont.toString());
         var textWidth = graphic.textWidth(label);
         graphic.drawText(label, pLeft - yGap - textWidth, y, yFont.color);
      }
   }
   var yLabel = yAxis.label();
   var yLabelFont = yAxis.labelFont();
   if(yLabel && yLabel != "") {
      graphic.drawText(yLabel, pLeft, pTop - yLabelFont.size / 2, yLabelFont.color);
   }
   for( var i = 0; i < xCorCount; ++i) {
      var x = pLeft + stepWidth * i;
      var degree = xDegrees.get(i);
      var label = degree.label();
      var lineWidth = degree.lineWidth() == null ? xAxis.lineWidth() : degree.lineWidth();
      var lineColor = degree.lineColor() == null ? xAxis.lineColor() : degree.lineColor();
      if(xAxis.optionShowAxis() || (xShowFirstLine && i == 0)) {
         graphic.beginPath();
         graphic.moveTo(x, pTop);
         graphic.lineTo(x, pTop + pHeight);
         graphic.drawShape(lineWidth, lineColor);
      }
      if(xAxis.optionShowLabel()) {
         var x = pLeft + stepWidth * i;
         var textWidth = graphic.textWidth(label);
         if(xLabelVertical) {
            graphic.drawTextVertical(label, x - xFont.size / 2, pTop + pHeight + xGap + xFont.size, xFont);
         }else {
            graphic.drawText(label, x - textWidth / 2, pTop + pHeight + xGap + xFont.size, xFont.color);
         }
      }
   }
   var xLabel = xAxis.label();
   var xLabelFont = xAxis.labelFont();
   if(xLabel && xLabel != "") {
      graphic.drawText(xLabel, pLeft + pWidth, pTop + pHeight, xLabelFont.color);
   }
}
MO.FGuiChartLinePainter_drawLine = function FGuiChartLinePainter_drawLine(context, series){
   var o = this;
   var graphic = context.graphic;
   var dataset = context.dataset;
   var rectangle = context.rectangle;
   var paintRectangle = context.paintRectangle;
   var left = rectangle.left;
   var top = rectangle.top;
   var width = rectangle.width;
   var height = rectangle.height;
   var pLeft = left + paintRectangle.left;
   var pTop = top + paintRectangle.top;
   var pWidth = paintRectangle.width;
   var pHeight = paintRectangle.height;
   var yAxis = context.axisY;
   var xAxis = context.axisX;
   var yDegrees = yAxis.degrees();
   var xDegrees = xAxis.degrees();
   var yCount = yDegrees.count();
   var xCount = xDegrees.count();
   if(xCount == 0 || yCount == 0) return;
   var maxValue = yDegrees.get(yCount - 1).value();
   var minValue = yDegrees.get(0).value();
   var lineColor = series.lineColor();
   var lineWidth = series.lineWidth();
   graphic.beginPath();
   graphic.setLineJoin("round");
   var values = series.values();
   var optionShowDot = series.optionShowDot();
   var dotSize = series.dotSize();
   var dotColor = series.dotColor();
   var count = values.count();
   var stepWidth = pWidth / (xCount - 1);
   var stepHeight = pHeight / (maxValue - minValue);
   for(var n = 0; n < count; ++n){
      var value = values.at(n);
      var x = pLeft + stepWidth * n;
      var y = pTop + (maxValue - value) * stepHeight;
      if(n == 0){
         graphic.moveTo(x, y);
      }else{
         graphic.lineTo(x, y);
      }
   }
   graphic.drawShape(lineWidth, lineColor);
   if(optionShowDot) {
      for( var n = 0; n < count; ++n) {
         var value = values.at(n);
         var x = pLeft + stepWidth * n;
         var y = pTop + (maxValue - value) * stepHeight;
         graphic.drawCircle(x, y, dotSize, 1, dotColor, dotColor);
      }
   }
}
MO.FGuiChartLinePainter_draw = function FGuiChartLinePainter_draw(context){
   var o = this;
   o.__base.FGuiChartPainter.draw.call(o);
   var dataset = context.dataset;
   o.drawTitle(context);
   o.drawAxis(context);
   if(dataset){
      var serieses = dataset.serieses();
      var seriesCount = serieses.count();
      for(var i = 0; i < seriesCount; i++){
         var series = serieses.at(i);
         o.drawLine(context, series);
      }
   }
}
MO.FGuiChartLinePainter_dispose = function FGuiChartLinePainter_dispose() {
   var o = this;
   o.__base.FGuiChartPainter.dispose.call(o);
}
MO.FGuiChartPainter = function FGuiChartPainter(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._chart    = MO.Class.register(o, new MO.AGetSet('_chart'));
   o.construct = MO.FGuiChartPainter_construct;
   o.draw      = MO.FGuiChartPainter_draw;
   o.dispose   = MO.FGuiChartPainter_dispose;
   return o;
}
MO.FGuiChartPainter_construct = function FGuiChartPainter_construct(){
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FGuiChartPainter_draw = function FGuiChartPainter_draw(context){
   var o = this;
}
MO.FGuiChartPainter_dispose = function FGuiChartPainter_dispose(){
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiChartPiePainter = function FGuiChartPiePainter(o) {
   o = MO.Class.inherits(this, o, MO.FGuiChartPainter);
   o._paintContext = null;
   o.onPaintBegin  = MO.FGuiChartPiePainter_onPaintBegin;
   o.construct     = MO.FGuiChartPiePainter_construct;
   o.draw          = MO.FGuiChartPiePainter_draw;
   o.dispose       = MO.FGuiChartPiePainter_dispose;
   return o;
}
MO.FGuiChartPiePainter_construct = function FGuiChartPiePainter_construct() {
   var o = this;
   o.__base.FGuiChartPainter.construct.call(o);
   o._paintContext = new MO.SGuiGridPaintContext();
}
MO.FGuiChartPiePainter_draw = function FGuiChartPiePainter_draw(context){
   var o = this;
   o.__base.FGuiChartPainter.draw.call(o);
}
MO.FGuiChartPiePainter_dispose = function FGuiChartPiePainter_dispose() {
   var o = this;
   o._paintContext = MO.Lang.Object.dispose(o._paintContext);
   o.__base.FGuiChartPainter.dispose.call(o);
}
