MO.MUiChart = function MUiChart(o){
   o = MO.Class.inherits(this, o);
   o._dataset  = MO.Class.register(o, new MO.AGetSet('_dataset'));
   o.construct = MO.MUiChart_construct;
   o.dispose   = MO.MUiChart_dispose;
   return o;
}
MO.MUiChart_construct = function MUiChart_construct(){
   var o = this;
}
MO.MUiChart_dispose = function MUiChart_dispose(){
   var o = this;
}
MO.FUiChartAxis = function FUiChartAxis(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._degrees                 = MO.Class.register(o, new MO.AGetter('_degrees'));
   o._optionShowAxis          = MO.Class.register(o, new MO.AGetSet('_optionShowAxis'), true);
   o._optionShowLabel         = MO.Class.register(o, new MO.AGetSet('_optionShowLabel'), true);
   o._optionShowFirstLine     = MO.Class.register(o, new MO.AGetSet('_optionShowFirstLine'), false);
   o._font                    = MO.Class.register(o, new MO.AGetter('_font'));
   o._lineWidth               = MO.Class.register(o, new MO.AGetSet('_lineWidth'), 1);;
   o._lineColor               = MO.Class.register(o, new MO.AGetSet('_lineColor'), '#FFFFFF');
   o._divisor                 = MO.Class.register(o, new MO.AGetSet('_divisor'), 1);
   o._degreeLabelGap          = MO.Class.register(o, new MO.AGetSet('_degreeLabelGap'), 2);
   o._label                   = MO.Class.register(o, new MO.AGetSet('_label'), "");
   o._labelFont               = MO.Class.register(o, new MO.AGetSet('_labelFont'));
   o._optionLabelVertical     = MO.Class.register(o, new MO.AGetSet('_optionLabelVertical'), false);
   o.construct                = MO.FUiChartAxis_construct;
   o.pushDegree               = MO.FUiChartAxis_pushDegree;
   o.createDegrees            = MO.FUiChartAxis_createDegrees;
   o.createDegreesStandard    = MO.FUiChartAxis_createDegreesStandard;
   o.findDegreeByValue        = MO.FUiChartAxis_findDegreeByValue;
   o.formatLabels             = MO.FUiChartAxis_formatLabels;
   o.dispose                  = MO.FUiChartAxis_dispose;
   return o;
}
MO.FUiChartAxis_construct = function FUiChartAxis_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._degrees = new MO.TObjects();
   o._font = new MO.SUiFont();
   o._labelFont = new MO.SUiFont();
}
MO.FUiChartAxis_pushDegree = function FUiChartAxis_pushDegree(degree) {
   var o = this;
   degree.setAxis
   o._degrees.push(degree);
}
MO.FUiChartAxis_createDegrees = function FUiChartAxis_createDegrees(start, end) {
   var o = this;
   for(var i = start; i <= end; ++i) {
      var degree = MO.Class.create(MO.FUiChartAxisDegree);
      degree.setValue(i);
      o._degrees.push(degree);
   }
}
MO.FUiChartAxis_createDegreesStandard = function FUiChartAxis_createDegreesStandard(data) {
   var o = this;
   var max = data[0];
   var min = data[1];
   var cor = data[2];
   o._degrees.clear();
   var step = (max - min) / cor;
   for( var i = 0; i <= cor; ++i) {
      var degree = MO.Class.create(MO.FUiChartAxisDegree);
      var value = min + step * i;
      degree.setValue(value);
      o._degrees.push(degree);
   }
}
MO.FUiChartAxis_findDegreeByValue = function FUiChartAxis_findDegreeByValue(value) {
   var o = this;
   var result;
   var degrees = o._degrees;
   var count = degrees.count();
   while(--count > -1) {
      var degree = degrees.get(count);
      if(degree.value() == value) {
         result = degree;
         break;
      }
   }
   return result;
}
MO.FUiChartAxis_formatLabels = function FUiChartAxis_formatLabels() {
   var o = this;
   var degrees = o._degrees;
   var count = degrees.count();
   for(var i = 0; i < count; ++i) {
      var degree = degrees.get(i);
      var value = degree.value();
      degree.setLabel((value / o._divisor).toFixed().toString());
   }
}
MO.FUiChartAxis_dispose = function FUiChartAxis_dispose(){
   var o = this;
   o._degrees = MO.Lang.Object.dispose(o._degrees);
   o.__base.FObject.dispose.call(o);
}
MO.FUiChartAxisDegree = function FUiChartAxisDegree(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._axis     = MO.Class.register(o, new MO.AGetSet('_axis'));
   o._value    = MO.Class.register(o, new MO.AGetSet('_value'));
   o._label    = MO.Class.register(o, new MO.AGetSet('_label'), "");
   o._optionShowAxis          = MO.Class.register(o, new MO.AGetSet('_optionShowAxis'), true);
   o._optionShowLabel         = MO.Class.register(o, new MO.AGetSet('_optionShowLabel'), true);
   o._font                    = MO.Class.register(o, new MO.AGetter('_font'));
   o._lineWidth               = MO.Class.register(o, new MO.AGetSet('_lineWidth'));
   o._lineColor               = MO.Class.register(o, new MO.AGetSet('_lineColor'));
   o.construct = MO.FUiChartAxisDegree_construct;
   o.dispose   = MO.FUiChartAxisDegree_dispose;
   return o;
}
MO.FUiChartAxisDegree_construct = function FUiChartAxisDegree_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
}
MO.FUiChartAxisDegree_dispose = function FUiChartAxisDegree_dispose(){
   var o = this;
   o._axis = null;
   o._value = null;
   o.__base.FObject.dispose.call(o);
}
MO.FUiChartDataSeries = function FUiChartDataSeries(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._dataset           = MO.Class.register(o, new MO.AGetSet('_dataset'));
   o._values            = MO.Class.register(o, new MO.AGetSet('_values'));
   o._lineColor         = MO.Class.register(o, new MO.AGetSet('_lineColor'), '#FFFFFF');
   o._lineWidth         = MO.Class.register(o, new MO.AGetSet('_lineWidth'), 1);
   o._rectWidth         = MO.Class.register(o, new MO.AGetSet('_rectWidth'), 10);
   o._rectMargin        = MO.Class.register(o, new MO.AGetSet('_rectMargin'), 4);
   o._fillColor         = MO.Class.register(o, new MO.AGetSet('_fillColor'), '#FFFFFF');
   o._fillGradient      = MO.Class.register(o, new MO.AGetSet('_fillGradient'));
   o._optionShowBorder  = MO.Class.register(o, new MO.AGetSet('_optionShowBorder'), true);
   o._dotSize           = MO.Class.register(o, new MO.AGetSet('_dotSize'), 1);
   o._dotColor          = MO.Class.register(o, new MO.AGetSet('_dotColor'), '#FFFFFF');
   o._optionShowDot     = MO.Class.register(o, new MO.AGetSet('_optionShowDot'), false);
   o.construct          = MO.FUiChartDataSeries_construct;
   o.dispose            = MO.FUiChartDataSeries_dispose;
   return o;
}
MO.FUiChartDataSeries_construct = function FUiChartDataSeries_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._values = new MO.TObjects();
}
MO.FUiChartAxis_dispose = function FUiChartAxis_dispose(){
   var o = this;
   o._values = MO.Lang.Object.dispose(o._values);
   o.__base.FObject.dispose.call(o);
}
MO.FUiChartDataset = function FUiChartDataset(o){
   o = MO.Class.inherits(this, o, MO.FObject);
   o._serieses                = MO.Class.register(o, new MO.AGetter('_serieses'));
   o.construct                = MO.FUiChartDataset_construct;
   o.push                     = MO.FUiChartDataset_push;
   o.maxValue                 = MO.FUiChartDataset_maxValue;
   o.minValue                 = MO.FUiChartDataset_minValue;
   o.standardCor              = MO.FUiChartDataset_standardCor;
   o.dispose                  = MO.FUiChartDataset_dispose;
   return o;
}
MO.FUiChartDataset_construct = function FUiChartDataset_construct(){
   var o = this;
   o.__base.FObject.construct.call(o);
   o._serieses = new MO.TObjects();
}
MO.FUiChartDataset_push = function FUiChartDataset_push(data) {
   var o = this;
   data.setDataset(o);
   o._serieses.push(data);
}
MO.FUiChartDataset_maxValue = function FUiChartDataset_maxValue() {
   var o = this;
   var serieses = o._serieses;
   var count = serieses.count();
   var result = Number.NEGATIVE_INFINITY;
   for(var i = 0; i < count; ++i) {
      var series = serieses.get(i);
      var values = series.values();
      var valueCount = values.count();
      for (var v = 0; v < valueCount; ++v) {
         var value = values.get(v);
         result = result < value ? value : result;
      }
   }
   return result;
}
MO.FUiChartDataset_minValue = function FUiChartDataset_minValue() {
   var o = this;
   var serieses = o._serieses;
   var count = serieses.count();
   var result = Number.POSITIVE_INFINITY;
   for(var i = 0; i < count; ++i) {
      var series = serieses.get(i);
      var values = series.values();
      var valueCount = values.count();
      for (var v = 0; v < valueCount; ++v) {
         var value = values.get(v);
         result = result > value ? value : result;
      }
   }
   return result;
}
MO.FUiChartDataset_standardCor = function FUiChartDataset_standardCor(corCount) {
   var o = this;
   var result = new MO.TArray();
   var corMax = o.maxValue();
   var corMin = o.minValue();
   var corNumber = corCount;
   var corStep = (corMax - corMin) / corNumber;
   var temp, tmpStep, tmpNumber, extraNumber;
   if(Math.pow(10, parseInt(Math.log(corStep) / Math.log(10))) == corStep) {
      temp = Math.pow(10, parseInt(Math.log(corStep) / Math.log(10)));
   }else {
      temp = Math.pow(10, (parseInt(Math.log(corStep) / Math.log(10)) + 1));
   }
   tmpStep = (corStep / temp).toFixed(6);
   if(tmpStep >= 0 && tmpStep <= 0.1) {
      tmpStep = 0.1;
   }else if ( tmpStep >= 0.100001 && tmpStep <= 0.2) {
      tmpStep = 0.2;
   }else if ( tmpStep >= 0.200001 && tmpStep <= 0.25) {
      tmpStep = 0.25;
   }else if ( tmpStep >= 0.250001 && tmpStep <= 0.5) {
      tmpStep = 0.5;
   }else {
      tmpStep = 1;
   }
   tmpStep = tmpStep * temp;
   if(parseInt(corMin / tmpStep) != (corMin / tmpStep)) {
      if(corMin < 0) {
         corMin = (-1) * Math.ceil(Math.abs(corMin / tmpStep)) * tmpStep;
      }else {
         corMin = parseInt(Math.abs(corMin / tmpStep)) * tmpStep;
      }
   }
   if(parseInt(corMax / tmpStep) != (corMax / tmpStep)) {
      corMax = parseInt(corMax / tmpStep + 1) * tmpStep;
   }
   tmpNumber = (corMax - corMin) / tmpStep;
   if(tmpNumber < corNumber) {
      extraNumber = corNumber - tmpNumber;
      tmpNumber = corNumber;
      if(extraNumber % 2 == 0) {
         corMax = corMax + tmpStep * parseInt(extraNumber / 2);
      }else {
         corMax = corMax + tmpStep * parseInt(extraNumber / 2 + 1);
      }
      corMin = corMin - tmpStep * parseInt(extraNumber / 2);
   }
   corNumber = tmpNumber;
   return [corMax, corMin, corNumber];
}
MO.FUiChartDataset_dispose = function FUiChartDataset_dispose(){
   var o = this;
   o._serieses = MO.Lang.Object.dispose(o._serieses);
   o.__base.FObject.dispose.call(o);
}
