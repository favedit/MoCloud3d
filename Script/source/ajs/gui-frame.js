MO.FGuiBar = function FGuiBar(o){
   o = MO.Class.inherits(this, o, MO.FGuiFrame);
   return o;
}
MO.FGuiChartTotal = function FGuiChartTotal(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._ready                   = MO.Class.register(o, new MO.AGetSet('_ready'), false);
   o._numImages               = null;
   o._yuanImage               = null;
   o._wanImage                = null;
   o._yiImage                 = null;
   o._imageToLoad             = 0;
   o._value                   = MO.Class.register(o, new MO.AGetter('_value'));
   o._originValue             = '0';
   o._nextValue               = null;
   o._startTick               = 0;
   o._rolling                 = MO.Class.register(o, new MO.AGetSet('_rolling'), false);
   o._rollingDuration         = MO.Class.register(o, new MO.AGetSet('_rollingDuration'), 1000);
   o._rollingPages            = null;
   o._noRolling               = MO.Class.register(o, new MO.AGetSet('_noRolling'), false);
   o.construct                = MO.FGuiChartTotal_construct;
   o.setup                    = MO.FGuiChartTotal_setup;
   o.onImageLoad              = MO.FGuiChartTotal_onImageLoad;
   o.onPaintBegin             = MO.FGuiChartTotal_onPaintBegin;
   o.setValue                 = MO.FGuiChartTotal_setValue;
   o.dispose                  = MO.FGuiChartTotal_dispose;
   return o;
}
MO.FGuiChartTotal_construct = function FGuiChartTotal_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._rollingPages = new MO.TArray();
}
MO.FGuiChartTotal_setup = function FGuiChartTotal_setup() {
   var o = this;
   o._yuanImage = MO.Class.create(MO.FImage);
   o._yuanImage.addLoadListener(o, o.onImageLoad);
   o._yuanImage.loadUrl('{eai.resource}/number/yuan.png');
   o._imageToLoad++;
   o._wanImage = MO.Class.create(MO.FImage);
   o._wanImage.addLoadListener(o, o.onImageLoad);
   o._wanImage.loadUrl('{eai.resource}/number/wan.png');
   o._imageToLoad++;
   o._yiImage = MO.Class.create(MO.FImage);
   o._yiImage.addLoadListener(o, o.onImageLoad);
   o._yiImage.loadUrl('{eai.resource}/number/yi.png');
   o._imageToLoad++;
   o._numImages = new Array(10);
   o._imageToLoad += 10;
   for (var i = 0; i < 10; i++) {
      var img = MO.Class.create(MO.FImage);
      img.addLoadListener(o, o.onImageLoad);
      img.loadUrl('{eai.resource}/number/' + i + '.png');
      o._numImages[i] = img;
   }
}
MO.FGuiChartTotal_onImageLoad = function FGuiChartTotal_onImageLoad() {
   var o = this;
   if (--o._imageToLoad == 0) {
      var canvasSize = MO.Eai.Canvas.logicSize();
      var numImgSize = o._numImages[0]._size;
      var unitImgSize = o._yiImage._size;
      o.setLeft((canvasSize.width - numImgSize.width * 4 - unitImgSize.width) / 2);
      o.setTop((canvasSize.height - unitImgSize.height * 3) / 2);
      o.setWidth(numImgSize.width * 4 + unitImgSize.width);
      o.setHeight(unitImgSize.height * 3);
      o._ready = true;
   }
}
MO.FGuiChartTotal_setValue = function FGuiChartTotal_setValue(value) {
   var o = this;
   if (o._value == value) {
      return;
   }
   if (o._rolling) {
      o._nextValue = o._value;
   }
   o._value = value;
   var originValue = o._originValue;
   var lengthDiff = value.length - originValue.length;
   while (lengthDiff > 0) {
      originValue = '0' + originValue;
      lengthDiff--;
   }
   o._originValue = originValue;
   o._rollingPages.clear();
   o._rollingPages._length = value.length;
   for (var i = 0; i < value.length; i++) {
      var pages = parseInt(value.substring(i, i + 1)) - parseInt(originValue.substring(i, i + 1));
      pages = pages < 0 ? pages + 10 : pages;
      o._rollingPages.set(i, pages);
   }
   o._startTick = MO.Timer.current();
   o._rolling = true;
}
MO.FGuiChartTotal_onPaintBegin = function FGuiChartTotal_onPaintBegin(event) {
   var o = this;
   o.__base.FGuiControl.onPaintBegin.call(o, event);
   if (!o._value) {
      return;
   }
   var graphic = event.graphic;
   var rectangle = event.rectangle;
   var passedTick = MO.Timer.current() - o._startTick;
   if (passedTick > o._rollingDuration || o._noRolling) {
      passedTick = o._rollingDuration;
      o._rolling = false;
   }
   var numImgSize = o._numImages[0]._size;
   var unitImgSize = o._yiImage._size;
   var invesText = o._value;
   var numWidth = numImgSize.width * 4 + unitImgSize.width
   var numLeft = rectangle.left + (rectangle.width - numWidth) / 2;
   var numTop = rectangle.top;
   graphic.store();
   graphic.clip(numLeft, numTop, numWidth, unitImgSize.height);
   numLeft += numImgSize.width;
   for (var i = 0; i < o._value.length; i++) {
      var passedValue = o._rollingPages.get(i) * (passedTick / o._rollingDuration);
      var numString = (parseInt(o._originValue.charAt(i)) + parseInt(passedValue)).toString();
      var currentNum = parseInt(numString.charAt(numString.length - 1));
      var nextNum = currentNum == 9 ? 0 : currentNum + 1;
      var rate = passedValue - parseInt(passedValue);
      graphic.drawImage(o._numImages[currentNum], numLeft, numTop - numImgSize.height * rate, numImgSize.width, numImgSize.height);
      graphic.drawImage(o._numImages[nextNum], numLeft, numTop + numImgSize.height - numImgSize.height * rate, numImgSize.width, numImgSize.height);
      numLeft += numImgSize.width;
      if (i == o._originValue.length - 9) {
         graphic.drawImage(o._yiImage, numLeft, numTop, unitImgSize.width, unitImgSize.height);
         numLeft = rectangle.left + (rectangle.width - numWidth) / 2;
         numTop += unitImgSize.height;
         graphic.restore();
         graphic.store();
         graphic.clip(numLeft, numTop, numWidth, unitImgSize.height);
      }
      else if (i == o._originValue.length - 5) {
         graphic.drawImage(o._wanImage, numLeft, numTop, unitImgSize.width, unitImgSize.height);
         numLeft = rectangle.left + (rectangle.width - numWidth) / 2;
         numTop += unitImgSize.height;
         graphic.restore();
         graphic.store();
         graphic.clip(numLeft, numTop, numWidth, unitImgSize.height);
      }
      else if (i == o._originValue.length - 1) {
         graphic.drawImage(o._yuanImage, numLeft, numTop, unitImgSize.width, unitImgSize.height);
      }
   }
   if (o._rolling == false) {
      o._originValue = o._value;
      o._rollingPages.clear();
   }
}
MO.FGuiChartTotal_dispose = function FGuiChartTotal_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiFiveForceModul = function FGuiFiveForceModul(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o._pointCount              = MO.Class.register(o, new MO.AGetSet('_pointCount'),5);
   o._ratationDegree          = MO.Class.register(o, new MO.AGetSet('_ratationDegree'));
   o._angleLineColor          = MO.Class.register(o, new MO.AGetSet('_angleLineColor'),'#ffffff');
   o._angleLineWidth          = MO.Class.register(o, new MO.AGetSet('_angleLineWidth'),3);
   o._radius                  = MO.Class.register(o, new MO.AGetSet('_radius'),30);
   o._pointZero               = MO.Class.register(o, new MO.AGetSet('_pointZero'));
   o.construct                = MO.FGuiFiveForceModul_construct;
   o.setup                    = MO.FGuiFiveForceModul_setup;
   o.onImageLoad              = MO.FGuiFiveForceModul_onImageLoad;
   o.onPaintBegin             = MO.FGuiFiveForceModul_onPaintBegin;
   o.dispose                  = MO.FGuiFiveForceModul_dispose;
   o.setData                  = MO.FGuiFiveForceModul_setData;
   o._fiveforce               = null;
   return o;
}
MO.FGuiFiveForceModul_construct = function FGuiFiveForceModul_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
   o._ratationDegree = (2*Math.PI)/o._pointCount;
   o._pointZero = new MO.SPoint2(0,0);
}
MO.FGuiFiveForceModul_setup = function FGuiFiveForceModul_setup() {
   var o = this;
   o._fiveforce = o.loadResourceImage('{eai.resource}/cockpit/achievement/optionCilck1.png');
   o._fiveforce.addLoadListener(o,o.onImageLoad);
}
MO.FGuiFiveForceModul_onImageLoad = function FGuiFiveForceModul_onImageLoad() {
   this.dirty();
}
MO.FGuiFiveForceModul_onPaintBegin = function FGuiFiveForceModul_onPaintBegin(event) {
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
   graphic.drawImage(o._fiveforce, 0, 0, width, height);
   var sinr = radius*Math.sin(ratationDegree);
   var cosr = radius*Math.cos(ratationDegree);
   var point1x = 0;
   var point1y = radius;
}
MO.FGuiFiveForceModul_setData = function FGuiFiveForceModul_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FGuiFiveForceModul_dispose = function FGuiFiveForceModul_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiLineChart = function FGuiLineChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o.construct                = MO.FGuiLineChart_construct;
   o.setup                    = MO.FGuiLineChart_setup;
   o.onImageLoad              = MO.FGuiLineChart_onImageLoad;
   o.onPaintBegin             = MO.FGuiLineChart_onPaintBegin;
   o.dispose                  = MO.FGuiLineChart_dispose;
   o.setData                  = MO.FGuiLineChart_setData;
   o.drawLine                 = MO.FGuiLineChart_drawLine;
   return o;
}
MO.FGuiLineChart_drawLine = function FGuiLineChart_drawLine(graphic, rectangle, dataheigt, maxValue, code, color, lineWidth){
   var o = this;
   var handle = graphic._handle;
   handle.beginPath();
   var units = o._data.units();
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
         handle.lineTo(x, y);
      }
   }
   handle.lineWidth = lineWidth;
   handle.strokeStyle = color;
   handle.stroke();
}
MO.FGuiLineChart_construct = function FGuiLineChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FGuiLineChart_setup = function FGuiLineChart_setup() {
   var o = this;
}
MO.FGuiLineChart_onImageLoad = function FGuiLineChart_onImageLoad() {
   this.dirty();
}
MO.FGuiLineChart_onPaintBegin = function FGuiLineChart_onPaintBegin(event) {
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
   if(!data){
      return;
   }
   var units = data.units();
   var count = units._count;
   var maxValue =0;
   var minValue =0;
   for(var i=0;i<count;i++){
      var unit = units.at(i);
      maxValue = Math.max(unit.value(), maxValue);
   }
   o.drawLine(graphic, rectangle, dataheigt, maxValue, '_value', '#ffffff', 2);
}
MO.FGuiLineChart_setData = function FGuiLineChart_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FGuiLineChart_dispose = function FGuiLineChart_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiLineChartData = function FGuiLineChartData(o) {
   o = MO.Class.inherits(this, o, MO.FObject);
   o._labels = MO.Class.register(o, new MO.AGetSet('_labels'));
   o._datas = MO.Class.register(o, new MO.AGetSet('_datas'));
   return o;
}
MO.FGuiLineChartDataSet = function FGuiLineChartDataSet(o) {
   o = MO.Class.inherits(this, o, MO.FObject);
   o._strokeColor = MO.Class.register(o, new MO.AGetSet('_strokeColor'));
   o._pointColor = MO.Class.register(o, new MO.AGetSet('_pointColor'));
   o._pointStrokeColor = MO.Class.register(o, new MO.AGetSet('_pointStrokeColor'));
   o._data = MO.Class.register(o, new MO.AGetSet('_data'));
   return o;
}
MO.FGuiSixLineChart = function FGuiSixLineChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o.construct                = MO.FGuiSixLineChart_construct;
   o.setup                    = MO.FGuiSixLineChart_setup;
   o.onImageLoad              = MO.FGuiSixLineChart_onImageLoad;
   o.onPaintBegin             = MO.FGuiSixLineChart_onPaintBegin;
   o.dispose                  = MO.FGuiSixLineChart_dispose;
   o.setData                  = MO.FGuiSixLineChart_setData;
   o.drawLine                 = MO.FGuiSixLineChart_drawLine;
   return o;
}
MO.FGuiSixLineChart_drawLine = function FGuiSixLineChart_drawLine(graphic, rectangle, dataheigt, minValue,maxValue, code, color, lineWidth){
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
         handle.lineTo(x, y);
      }
   }
   handle.lineWidth = lineWidth;
   handle.strokeStyle = color;
   handle.stroke();
}
MO.FGuiSixLineChart_construct = function FGuiSixLineChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FGuiSixLineChart_setup = function FGuiSixLineChart_setup() {
   var o = this;
}
MO.FGuiSixLineChart_onImageLoad = function FGuiSixLineChart_onImageLoad() {
   this.dirty();
}
MO.FGuiSixLineChart_onPaintBegin = function FGuiSixLineChart_onPaintBegin(event) {
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
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorInvestmentAmount', '#4b5e6f', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorRedemptionAmount', '#80a861', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorNetinvestmentAmount', '#947b91', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_investmentAmount', '#51c0db', 3);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_redemptionAmount', '#68f34e', 3);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_netinvestmentAmount', '#9b1933', 3);
}
MO.FGuiSixLineChart_setData = function FGuiSixLineChart_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FGuiSixLineChart_dispose = function FGuiSixLineChart_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiTableRankChart = function FGuiTableRankChart(o) {
   o = MO.Class.inherits(this, o, MO.FGuiControl);
   o._data                    = null;
   o.construct                = MO.FGuiTableRankChart_construct;
   o.setup                    = MO.FGuiTableRankChart_setup;
   o.onImageLoad              = MO.FGuiTableRankChart_onImageLoad;
   o.onPaintBegin             = MO.FGuiTableRankChart_onPaintBegin;
   o.dispose                  = MO.FGuiTableRankChart_dispose;
   o._background              = null;
   o.setData                  = MO.FGuiTableRankChart_setData;
   o.drawLine                 = MO.FGuiTableRankChart_drawLine;
   return o;
}
MO.FGuiTableRankChart_drawLine = function FGuiTableRankChart_drawLine(graphic, rectangle, dataheigt, minValue,maxValue, code, color, lineWidth){
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
         handle.lineTo(x, y);
      }
   }
   handle.lineWidth = lineWidth;
   handle.strokeStyle = color;
   handle.stroke();
}
MO.FGuiTableRankChart_construct = function FGuiTableRankChart_construct() {
   var o = this;
   o.__base.FGuiControl.construct.call(o);
}
MO.FGuiTableRankChart_setup = function FGuiTableRankChart_setup() {
   var o = this;
   var imageConsole = MO.Console.find(MO.FImageConsole);
   var image = o._background = imageConsole.load('{eai.resource}/cockpit/achievement/NextLogo.png');
   image.addLoadListener(o, o.onImageLoad);
}
MO.FGuiTableRankChart_onImageLoad = function FGuiTableRankChart_onImageLoad() {
   this.dirty();
}
MO.FGuiTableRankChart_onPaintBegin = function FGuiTableRankChart_onPaintBegin(event) {
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
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorInvestmentAmount', '#4b5e6f', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorRedemptionAmount', '#80a861', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_priorNetinvestmentAmount', '#947b91', 2);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_investmentAmount', '#51c0db', 3);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_redemptionAmount', '#68f34e', 3);
   o.drawLine(graphic, rectangle, dataheigt, minValue, maxValueInvest, '_netinvestmentAmount', '#9b1933', 3);
}
MO.FGuiTableRankChart_setData = function FGuiTableRankChart_setData(data) {
   var o = this;
   var data = o._data = data;
}
MO.FGuiTableRankChart_dispose = function FGuiTableRankChart_dispose() {
   var o = this;
   o.__base.FGuiControl.dispose.call(o);
}
MO.FGuiWindow = function FGuiWindow(o){
   o = MO.Class.inherits(this, o, MO.FGuiFrame);
   return o;
}
