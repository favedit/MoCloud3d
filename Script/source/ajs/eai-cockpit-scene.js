MO.FEaiCockpitDataLayout = function FEaiCockpitDataLayout(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._layouts = MO.Class.register(o, [new MO.AGetter('_layouts'), new MO.APersistence('_layouts', MO.EDataType.Objects, MO.FEaiCockpitDataLayoutUnit)]);
   return o;
}
MO.FEaiCockpitDataLayoutUnit = function FEaiCockpitDataLayoutUnit(o) {
   o = MO.Class.inherits(this, o, MO.FObject, MO.MPersistence);
   o._moduleName = MO.Class.register(o, [new MO.AGetter('_moduleName'), new MO.APersistence('_moduleName', MO.EDataType.String)]);
   o._location   = MO.Class.register(o, [new MO.AGetter('_location'), new MO.APersistence('_location', MO.EDataType.Struct, MO.SValue3, MO.EDataType.Int32)]);
   o._size       = MO.Class.register(o, [new MO.AGetter('_size'), new MO.APersistence('_size', MO.EDataType.Struct, MO.SValue2, MO.EDataType.Int32)]);
   return o;
}
MO.FEaiCockpitGroundPiece = function FEaiCockpitGroundPiece(o) {
   o = MO.Class.inherits(this, o, MO.FObject);
   o._origin                  = MO.Class.register(o, new MO.AGetter('_origin'));
   o._destination             = MO.Class.register(o, new MO.AGetter('_destination'));
   o._playing                 = MO.Class.register(o, new MO.AGetter('_playing'), false);
   o._alpha                   = MO.Class.register(o, new MO.AGetter('_alpha'));
   o._alphaState              = 0;
   o._duration                = 0;
   o._startTime               = 0;
   o._now                     = 0;
   o._rate                    = 0;
   o.construct                = MO.FEaiCockpitGroundPiece_construct;
   o.setup                    = MO.FEaiCockpitGroundPiece_setup;
   o.gotoRelative             = MO.FEaiCockpitGroundPiece_gotoRelative;
   o.nextStep                 = MO.FEaiCockpitGroundPiece_nextStep;
   o.nextAlphaState           = MO.FEaiCockpitGouundPiece_nextAlphaState;
   o.dispose                  = MO.FEaiCockpitGroundPiece_dispose;
}
MO.FEaiCockpitGroundPiece_construct = function FEaiCockpitGroundPiece_construct() {
   var o = this;
   o.__base.FObject.construct.call(o);
   o._origin = new MO.SPoint2(0, 0);
   o._destination = new MO.SPoint2(0, 0);
   o._alpha = 0xff;
}
MO.FEaiCockpitGroundPiece_setup = function FEaiCockpitGroundPiece_setup() {
   var o = this;
   o._destination.set(o._origin.x, o._origin.y);
}
MO.FEaiCockpitGroundPiece_gotoRelative = function FEaiCockpitGroundPiece_gotoRelative(rx, ry, duration) {
   var o = this;
   o._duration = duration;
   o._origin.set(o._destination.x, o._destination.y);
   o._destination.add(rx, ry);
   o._startTime = MO.Timer.current();
   o._rate = 0;
   o._playing = true;
}
MO.FEaiCockpitGroundPiece_nextStep = function FEaiCockpitGroundPiece_nextStep() {
   var o = this;
   var result = new MO.SPoint2(0, 0);
   if(o._playing) {
      var now = o._now = MO.Timer.current();
      var rate = o._rate = (now - o._startTime) / o._duration;
      rate = rate > 1 ? 1 : rate;
      result.x = (o._destination.x - o._origin.x) * rate + o._origin.x;
      result.y = (o._destination.y - o._origin.y) * rate + o._origin.y;
      var alphaState = o._alphaState;
      if (alphaState == 0) {
         o._alpha = (0xff * (1 - rate)).toFixed();
      }else if(alphaState == 1) {
         o._alpha = (0xff * rate).toFixed();
      }
      if(rate == 1) {
         o._playing = false;
         o.nextAlphaState();
      }
   }else {
      result.set(o._destination.x, o._destination.y);
   }
   return result;
}
MO.FEaiCockpitGouundPiece_nextAlphaState = function FEaiCockpitGouundPiece_nextAlphaState() {
   var o = this;
   o._alphaState = (o._alphaState + 1) % 3;
}
MO.FEaiCockpitGroundPiece_dispose = function FEaiCockpitGroundPiece_dispose() {
   var o = this;
   o.__base.FObject.dispose.call(o);
}
MO.FEaiCockpitGroundShape = function FEaiCockpitGroundShape(o) {
   o = MO.Class.inherits(this, o, MO.FE3dRenderable);
   o._texture                 = MO.Class.register(o, new MO.AGetter('_texture'));
   o._url                     = MO.Class.register(o, new MO.AGetter('_url'));
   o._planes                  = null;
   o._vertexPositionBuffer    = null;
   o._vertexCoordBuffer       = null;
   o._indexBuffer             = null;
   o._image                   = null;
   o._size                    = null;
   o._pieceSize               = null;
   o._positionData            = null;
   o._colorData               = null;
   o._pathes                  = null;
   o._vertexCount             = 0;
   o._count                   = 5;
   o.onLoad                   = MO.FEaiCockpitGroundShape_onLoad;
   o.construct                = MO.FEaiCockpitGroundShape_construct;
   o.setup                    = MO.FEaiCockpitGroundShape_setup;
   o.updateAll                = MO.FEaiCockpitGroundShape_updateAll;
   o.process                  = MO.FEaiCockpitGroundShape_process;
   o.getRandomRoundPoint      = MO.FEaiCockpitGroundShape_getRandomRoundPoint;
   o.dispose                  = MO.FEaiCockpitGroundShape_dispose;
   return o;
}
MO.FEaiCockpitGroundShape_onLoad = function FEaiCockpitGroundShape_onLoad(event) {
   var o = this;
   o._texture.upload(o._image);
   o._image = MO.Lang.Object.dispose(o._image);
   o.updateAll();
}
MO.FEaiCockpitGroundShape_construct = function FEaiCockpitGroundShape_construct() {
   var o = this;
   o.__base.FE3dRenderable.construct.call(o);
   o._size = new MO.SSize2(2048 / 120, 1024 / 120);
   o._pieceSize = new MO.SSize2(500 / 120, 500 / 120);
   o._planes = new MO.TArray();
   o._pathes = new MO.TArray();
   o._material = MO.Class.create(MO.FE3dMaterial);
   o._url = '{eai.resource}/cockpit/background/lights.png';
   o.setOptionSelect(false);
}
MO.FEaiCockpitGroundShape_setup = function FEaiCockpitGroundShape_setup() {
   var o = this;
   var context = o._graphicContext;
   var planes = o._planes;
   var count = o._count;
   var size = o._size;
   var sx = size.width;
   var sy = size.height;
   var centerX = sx / 2;
   var centerY = sy / 2;
   var pieceSize = o._pieceSize;
   var px = pieceSize.width;
   var py = pieceSize.height;
   var halfWidth = px / 2;
   var halfHeight = py / 2;
   var vertexCount = o._vertexCount = count * 4;
   var positionIndex = 0;
   var positionData = o._positionData = new Float32Array(3 * vertexCount);
   var coordIndex = 0;
   var coordData = new Float32Array(2 * vertexCount);
   var colorIndex = 0;
   var colorData = o._colorData = new Uint8Array(4 * vertexCount);
   for(var i = 0; i < count; ++i) {
      var plane = MO.Class.create(MO.FE3dPlaneData);
      var cx = i * sx / count + halfWidth - centerX;
      var cy = sy / 2 - centerY;
      plane.setVertexs(cx, cy, halfWidth, halfHeight);
      coordData[coordIndex ++] = i / count;
      coordData[coordIndex ++] = 0;
      coordData[coordIndex ++] = (i + 1) / count;
      coordData[coordIndex ++] = 0;
      coordData[coordIndex ++] = (i + 1) / count;
      coordData[coordIndex ++] = 1;
      coordData[coordIndex ++] = i / count;
      coordData[coordIndex ++] = 1;
      for(var n = 0; n < 4; n++){
         colorData[colorIndex++] = 0xFF;
         colorData[colorIndex++] = 0xFF;
         colorData[colorIndex++] = 0xFF;
         colorData[colorIndex++] = 0xFF;
      }
      var path = MO.Class.create(MO.FEaiCockpitGroundPiece);
      path.origin().set(cx, cy);
      path.setup();
      o._pathes.push(path);
      planes.push(plane);
      positionData.set(plane.vertexs(), i * 12);
   }
   var buffer = o._vertexPositionBuffer = context.createVertexBuffer();
   buffer.setCode('position');
   buffer.setFormatCd(MO.EG3dAttributeFormat.Float3);
   buffer.upload(positionData, 4 * 3, vertexCount);
   o.pushVertexBuffer(buffer);
   var buffer = o._vertexCoordBuffer = context.createVertexBuffer();
   buffer.setCode('coord');
   buffer.setFormatCd(MO.EG3dAttributeFormat.Float2);
   buffer.upload(coordData, 4 * 2, vertexCount);
   o.pushVertexBuffer(buffer);
   var buffer = o._vertexColorBuffer = context.createVertexBuffer();
   buffer.setCode('color');
   buffer.setFormatCd(MO.EG3dAttributeFormat.Byte4Normal);
   buffer.upload(colorData, 4, vertexCount);
   o.pushVertexBuffer(buffer);
   var indexes = new MO.TArray();
   for(var i = 0; i < count; ++i) {
      var offset = i * 4;
      indexes.push(offset, offset + 2, offset + 1);
      indexes.push(offset, offset + 3, offset + 2);
   }
   var buffer = o._indexBuffer = context.createIndexBuffer();
   var indexLength = indexes.length();
   var indexMemory = indexes.memory();
   if(indexLength > 65535) {
      buffer.setStrideCd(MO.EG3dIndexStride.Uint32);
      buffer.upload(new Uint32Array(indexMemory), indexLength);
   }else {
      buffer.upload(new Uint16Array(indexMemory), indexLength);
   }
   o.pushIndexBuffer(buffer);
   var texture = o._texture = context.createFlatTexture();
   texture.setOptionFlipY(true);
   texture.setWrapCd(MO.EG3dSamplerFilter.ClampToEdge, MO.EG3dSamplerFilter.ClampToEdge);
   o.pushTexture(texture, 'diffuse');
   o.update();
   var info = o.material().info();
   info.optionAlpha = true;
   info.optionDepthWrite = false;
   info.effectCode = 'control';
   info.alphaBase = 0;
   o.material()._textures = o._textures;
   if(o._url){
      var image = o._image = MO.Class.create(MO.FImage);
      image.addLoadListener(o, o.onLoad);
      image.loadUrl(o._url);
   }
}
MO.FEaiCockpitGroundShape_updateAll = function FEaiCockpitGroundShape_updateAll() {
   var o = this;
   var planes = o._planes;
   var count = o._count;
   var vertexCount = count * 4;
   var positionData = o._positionData;
   var colorData = o._colorData;
   var colorIndex = 0;
   var pathes = o._pathes;
   for(var i = 0; i < count; ++i) {
      var plane = planes.get(i);
      var path = pathes.get(i);
      var next = path.nextStep();
      plane.move(next.x, next.y, 0);
      if(!path.playing()) {
         var dest = o.getRandomRoundPoint(plane.centerX(), plane.centerY());
         path.gotoRelative(dest.x, dest.y, 8000 + 2000 * Math.random());
      }
      plane.update();
      positionData.set(plane.vertexs(), i * 12);
      for (var n = 0; n < 4; n++) {
         colorData[colorIndex ++] = 0xFF;
         colorData[colorIndex ++] = 0xFF;
         colorData[colorIndex ++] = 0xFF;
         colorData[colorIndex ++] = path.alpha();
      }
   }
   var buffer = o._vertexPositionBuffer;
   buffer.upload(positionData, 4 * 3, vertexCount);
   var buffer = o._vertexColorBuffer;
   buffer.upload(colorData, 4, vertexCount);
}
MO.FEaiCockpitGroundShape_process = function FEaiCockpitGroundShape_process() {
   var o = this;
   o.updateAll();
}
MO.FEaiCockpitGroundShape_getRandomRoundPoint = function FEaiCockpitGroundShape_getRandomRoundPoint(edgeX, edgeY) {
   var o = this;
   var result = new MO.SPoint2();
   var shotest = 1;
   var maxX = o._size.width / 2;
   var maxY = o._size.height / 2;
   var goon = true;
   while(goon) {
      var variable = shotest + 0.5 * Math.random();
      var angle = Math.PI * 2 * Math.random();
      result.x = variable * Math.sin(angle);
      result.y = variable * Math.cos(angle);
      if(result.x + edgeX < maxX && result.x + edgeX > -maxX && result.y + edgeY < maxY && result.y + edgeY > -maxY) {
         goon = false;
      }
   }
   return result;
}
MO.FEaiCockpitGroundShape_dispose = function FEaiCockpitGroundShape_dispose() {
   var o = this;
   o.__base.FE3dRenderable.dispose.call(o);
}
MO.FEaiCockpitScene = function FEaiCockpitScene(o) {
   o = MO.Class.inherits(this, o, MO.FEaiChartScene);
   o._code                   = MO.EEaiScene.Cockpit;
   o._optionMapCountry       = false;
   o._processor              = MO.Class.register(o, new MO.AGetter('_processor'));
   o._processorCurrent       = 0;
   o._ready                  = false;
   o._mapReady               = false;
   o._playing                = false;
   o._lastTick               = 0;
   o._interval               = 10;
   o._statusStart            = false;
   o._statusLayerCount       = 100;
   o._statusLayerLevel       = 100;
   o.onOperationDown         = MO.FEaiCockpitScene_onOperationDown;
   o.onOperationVisibility   = MO.FEaiCockpitScene_onOperationVisibility;
   o.onProcessReady          = MO.FEaiCockpitScene_onProcessReady;
   o.onProcess               = MO.FEaiCockpitScene_onProcess;
   o.onSwitchProcess         = MO.FEaiCockpitScene_onSwitchProcess;
   o.onSwitchComplete        = MO.FEaiCockpitScene_onSwitchComplete;
   o.setup                   = MO.FEaiCockpitScene_setup;
   o.showFace                = MO.FEaiCockpitScene_showFace;
   o.fixMatrix               = MO.FEaiCockpitScene_fixMatrix;
   o.processResize           = MO.FEaiCockpitScene_processResize;
   return o;
}
MO.FEaiCockpitScene_onOperationDown = function FEaiCockpitScene_onOperationDown(event) {
   var o = this;
   var moduleManager = o._moduleManager;
   var modeCd = moduleManager.modeCd();
   var region = o._activeStage.region();
   if(modeCd == MO.EEaiCockpitMode.Logo){
      moduleManager.selectModeCd(MO.EEaiCockpitMode.Main);
      return;
   }
   if(modeCd == MO.EEaiCockpitMode.Module){
      moduleManager.selectModeCd(MO.EEaiCockpitMode.Main);
      return;
   }
   var selectTechnique = MO.Console.find(MO.FG3dTechniqueConsole).find(o, MO.FG3dSelectTechnique);
   var renderable = selectTechnique.test(region, event.offsetX, event.offsetY);
   var module = null;
   if(MO.Class.isClass(renderable, MO.FGuiControlRenderable)){
      var control = renderable.control();
      if(MO.Class.isClass(control, MO.FEaiCockpitControl)){
         module = control.parentModule();
         if(module){
            moduleManager.selectModeCd(MO.EEaiCockpitMode.Module, module)
            return;
         }
      }
   }
   if(modeCd == MO.EEaiCockpitMode.Main){
      moduleManager.selectModeCd(MO.EEaiCockpitMode.Logo)
   }else{
      moduleManager.selectModeCd(MO.EEaiCockpitMode.Main)
   }
}
MO.FEaiCockpitScene_onOperationVisibility = function FEaiCockpitScene_onOperationVisibility(event) {
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
MO.FEaiCockpitScene_onProcessReady = function FEaiCockpitScene_onProcessReady() {
   var o = this;
   o.__base.FEaiChartScene.onProcessReady.call(o);
   o._mapEntity.showCity();
}
MO.FEaiCockpitScene_onProcess = function FEaiCockpitScene_onProcess() {
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
         o.processLoaded();
         o._playing = true;
         o._statusStart = true;
      }
   }
   if (o._playing) {
      var countryEntity = o._countryEntity;
      if (!countryEntity.introAnimeDone()) {
         countryEntity.process();
      }
      o._moduleManager.process();
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
      o._backgroundEffect.process();
   }
}
MO.FEaiCockpitScene_onSwitchProcess = function FEaiCockpitScene_onSwitchProcess(event) {
   var o = this;
}
MO.FEaiCockpitScene_onSwitchComplete = function FEaiCockpitScene_onSwitchComplete(event) {
   var o = this;
}
MO.FEaiCockpitScene_setup = function FEaiCockpitScene_setup() {
   var o = this;
   o.__base.FEaiChartScene.setup.call(o);
   var stage = o._activeStage;
   var camera = stage.camera();
   camera.setPosition(0, 0, -13);
   camera.lookAt(0, 0, 0);
   camera.update();
   var projection = camera.projection();
   projection.setAngle(40);
   projection.update();
   var effectLayer = stage.groundLayerEffect();
   var backgroundEffect = o._backgroundEffect = MO.Class.create(MO.FEaiCockpitGroundShape);
   backgroundEffect.linkGraphicContext(o);
   backgroundEffect.setup();
   effectLayer.push(backgroundEffect);
   var dataLayer = stage.dataLayer();
   var moduleManager = o._moduleManager = MO.Class.create(MO.FEaiCockpitSceneModuleManager);
   moduleManager.linkGraphicContext(o);
   moduleManager.setScene(o);
   moduleManager.setup();
   moduleManager.selectModeCd(MO.EEaiCockpitMode.Logo)
   dataLayer.pushDisplay(moduleManager.display());
   o._guiManager.hide();
   var entityConsole = MO.Console.find(MO.FEaiEntityConsole);
   entityConsole.cityModule().build(o);
   var countryEntity = o._countryEntity = entityConsole.mapModule().loadCountry(o, MO.EEaiConstant.DefaultCountry);
   o._readyLoader.push(countryEntity);
}
MO.FEaiCockpitScene_showFace = function FEaiCockpitScene_showFace() {
   var o = this;
   o._statusStart = true;
   o._playing = true;
   o._mapReady = false;
   o._mapEntity.reset();
   var desktop = o._application.desktop();
   desktop.show();
   o.processResize();
}
MO.FEaiCockpitScene_fixMatrix = function FEaiCockpitScene_fixMatrix(matrix) {
   var o = this;
   var isVertical = MO.Window.Browser.isOrientationVertical()
   if (isVertical) {
      matrix.tx = -14.58;
      matrix.ty = -1.9;
      matrix.tz = 0;
      matrix.setScale(0.14, 0.16, 0.14);
   } else {
      matrix.tx = -34.9;
      matrix.ty = -10.9;
      matrix.tz = 0;
      matrix.setScale(0.28, 0.31, 0.28);
   }
   matrix.update();
}
MO.FEaiCockpitScene_processResize = function FEaiCockpitScene_processResize(){
   var o = this;
   o.__base.FEaiChartScene.processResize.call(o);
   o._moduleManager.processResize();
}
MO.FEaiCockpitSceneModuleManager = function FEaiCockpitSceneModuleManager(o){
   o = MO.Class.inherits(this, o, MO.FEaiCockpitModuleManager);
   o._splashModule        = MO.Class.register(o, new MO.AGetter('_splashModule'));
   o._logoModule          = MO.Class.register(o, new MO.AGetter('_logoModule'));
   o._catalogModule       = MO.Class.register(o, new MO.AGetter('_catalogModule'));
   o._titleModule         = MO.Class.register(o, new MO.AGetter('_titleModule'));
   o._achievementModule   = MO.Class.register(o, new MO.AGetter('_achievementModule'));
   o._noticeModule        = MO.Class.register(o, new MO.AGetter('_noticeModule'));
   o._warningModule       = MO.Class.register(o, new MO.AGetter('_warningModule'));
   o._forecastModule      = MO.Class.register(o, new MO.AGetter('_forecastModule'));
   o._projectModule       = MO.Class.register(o, new MO.AGetter('_projectModule'));
   o._statusModule        = MO.Class.register(o, new MO.AGetter('_statusModule'));
   o._layoutData          = MO.Class.register(o, new MO.AGetter('_layoutData'));
   o._autoPlay            = false;
   o.construct            = MO.FEaiCockpitSceneModuleManager_construct;
   o.setup                = MO.FEaiCockpitSceneModuleManager_setup;
   o.onLayoutFetch        = MO.FEaiCockpitSceneModuleManager_onLayoutFetch;
   o.onSplashEnded        = MO.FEaiCockpitSceneModuleManager_onSplashEnded;
   o.onAutoPlayActionStop = MO.FEaiCockpitSceneModuleManager_onAutoPlayActionStop;
   o.startAutoPlay        = MO.FEaiCockpitSceneModuleManager_startAutoPlay;
   o.selectModeCd         = MO.FEaiCockpitSceneModuleManager_selectModeCd;
   o.process              = MO.FEaiCockpitSceneModuleManager_process;
   o.dispose              = MO.FEaiCockpitSceneModuleManager_dispose;
   return o;
}
MO.FEaiCockpitSceneModuleManager_construct = function FEaiCockpitSceneModuleManager_construct(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.construct.call(o);
   o._layoutData = MO.Class.create(MO.FEaiCockpitDataLayout);
}
MO.FEaiCockpitSceneModuleManager_setup = function FEaiCockpitSceneModuleManager_setup(){
    var o = this;
   o.__base.FEaiCockpitModuleManager.setup.call(o);
   var display = o._display;
   var logoDisplay = o._logoDisplay = MO.Class.create(MO.FE3dDisplay);
   logoDisplay.linkGraphicContext(o);
   display.pushDisplay(logoDisplay);
   var iconDisplay = o._iconDisplay = MO.Class.create(MO.FE3dDisplay);
   iconDisplay.linkGraphicContext(o);
   display.pushDisplay(iconDisplay);
   var cockpit = MO.Console.find(MO.FEaiLogicConsole).cockpit();
   cockpit.doFetchLayout(o, o.onLayoutFetch);
}
MO.FEaiCockpitSceneModuleManager_onLayoutFetch = function FEaiCockpitSceneModuleManager_onLayoutFetch(event) {
   var o = this;
   var content = event.content;
   var data = o._layoutData;
   if(data.unserializeSignBuffer(event.sign, event.content, true) && false){
      var layouts = data.layouts();
      var count = layouts.count();
      for (var i = 0; i < count ; i++) {
         var layout = layouts.at(i);
         var module = MO.Class.createByName(layout.moduleName());
         module.cellLocation().set(layout.location().x, layout.location().y, layout.location().z);
         module.cellSize().set(layout.size().x, layout.size().y);
         module.setModuleManager(o);
         module.linkGraphicContext(o);
         module.setup();
         o.register(module);
      }
   }else{
      o._splashModule = o.createModule(MO.FEaiCockpitSplash);
      o._logoModule = o.createModule(MO.FEaiCockpitLogo);
      o._catalogModule = o.createModule(MO.FEaiCockpitTitle);
      o._titleModule = o.createModule(MO.FEaiCockpitTrend);
      o._achievementModule = o.createModule(MO.FEaiCockpitAchievement);
      o._noticeModule = o.createModule(MO.FEaiCockpitNotice);
      o._warningModule = o.createModule(MO.FEaiCockpitWarning);
      o._forecastModule = o.createModule(MO.FEaiCockpitForecast);
      o._projectModule = o.createModule(MO.FEaiCockpitProject);
      o._statusModule = o.createModule(MO.FEaiCockpitStatus);
   }
   var display = o._display;
   var logoDisplay = o._logoDisplay;
   var iconDisplay = o._iconDisplay;
   var snapshotDisplay = o._snapshotDisplay;
   var viewDisplay = o._viewDisplay;
   var application = o._scene.application();
   var desktop = application.desktop();
   var logicSize = desktop.logicSize();
   var cellWidth = logicSize.width / 16;
   var cellHeight = logicSize.height / 9;
   var modules = o._modules;
   var count = modules.count();
   for (var i = 0; i < count; i++) {
      var module = modules.at(i);
      var typeCd = module.typeCd();
      var snapshot = module.controlSnapshot();
      var snapshotCellSize = snapshot.cellSize();
      snapshot.size().set(cellWidth * snapshotCellSize.width, cellHeight * snapshotCellSize.height);
      var view = module.controlView();
      view.size().assign(logicSize);
      if (typeCd == MO.EEaiCockpitModule.Logo) {
         snapshot.cellLocation().z = 0;
         var renderable = snapshot.makeRenderable();
         renderable.material().info().sortLevel = 10;
         snapshot.updateRenderable();
         snapshot.placeInCell();
         logoDisplay.pushRenderable(renderable);
      } else if (typeCd == MO.EEaiCockpitModule.Logic) {
         var moduleViewDisplay = module.viewDisplay();
         snapshot.cellLocation().z = 5;
         var renderable = snapshot.makeRenderable();
         renderable.material().info().sortLevel = 9;
         snapshot.updateRenderable();
         snapshot.placeInCell();
         snapshotDisplay.pushRenderable(renderable);
         view.cellLocation().z = 10;
         var renderable = view.makeRenderable();
         renderable.material().info().sortLevel = 8;
         view.updateRenderable();
         view.placeInCell();
         viewDisplay.pushRenderable(renderable);
         if(moduleViewDisplay){
            viewDisplay.pushDisplay(moduleViewDisplay);
         }
      }
   }
   var section = MO.Class.create(MO.FTimelineSection);
   var action = MO.Class.create(MO.MTimelineAction);
   action.setDuration(5000);
   action.addActionStopListener(o, o.onSplashEnded);
   section.pushAction(action);
   o._mainTimeline.pushSection(section);
}
MO.FEaiCockpitSceneModuleManager_onSplashEnded = function FEaiCockpitSceneModuleManager_onSplashEnded(context) {
   var o = this;
   o.selectModeCd('main');
}
MO.FEaiCockpitSceneModuleManager_selectModeCd = function FEaiCockpitSceneModuleManager_selectModeCd(modeCd, module){
   var o = this;
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
         if (module.slideshow()){
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
         }else{
            return;
         }
         break;
   }
   o._modeCd = modeCd;
   o._focusModule = module;
}
MO.FEaiCockpitSceneModuleManager_startAutoPlay = function FEaiCockpitSceneModuleManager_startAutoPlay(module) {
   var o = this;
   return;
   var focusView = o._focusView;
   var modules = o._modules;
   var currentIndex = modules.indexOfValue(module);
   for (var i = 1; i < modules.count() ; i++) {
      var nextIndex = currentIndex + i;
      if (nextIndex > modules.count() - 1) {
         nextIndex -= modules.count();
      }
      var nextModule = modules.at(nextIndex);
      if (nextModule.slideshow()) {
         break;
      }
   }
   var currentViewRenderable = module.controlView().renderable();
   var nextViewRenderable = nextModule.controlView().renderable();
   var currentMatrix = currentViewRenderable.matrix();
   var nextMatrix = nextViewRenderable.matrix();
   nextModule.controlView().setVisible(true);
   nextMatrix.setTranslate(-20, 0, -35);
   nextMatrix.update();
   var section = MO.Class.create(MO.FTimelineSection);
   var action = MO.Class.create(MO.FE3dTranslateTimelineAction);
   action.targetTranslate().set(0, 0, 15);
   action.setDelay(5000);
   action.setDuration(1000);
   action.link(currentMatrix);
   section.pushAction(action);
   action = MO.Class.create(MO.FE3dRotateTimelineAction);
   action.targetRotate().set(0, Math.PI * -0.25, 0);
   action.setDelay(5000);
   action.setDuration(1000);
   action.link(currentMatrix);
   section.pushAction(action);
   o._mainTimeline.pushSection(section);
   section = MO.Class.create(MO.FTimelineSection);
   action = MO.Class.create(MO.FE3dTranslateTimelineAction);
   action.targetTranslate().set(200, 0, 350);
   action.setDuration(1000);
   action.link(currentMatrix);
   section.pushAction(action);
   o._mainTimeline.pushSection(section);
   section = MO.Class.create(MO.FTimelineSection);
   action = MO.Class.create(MO.FE3dTranslateTimelineAction);
   action.targetTranslate().set(0, 0, 10);
   action.setDuration(1000);
   action.link(nextMatrix);
   action.addActionStopListener(o, o.onAutoPlayActionStop);
   section.pushAction(action);
   o._mainTimeline.pushSection(section);
}
MO.FEaiCockpitSceneModuleManager_onAutoPlayActionStop = function FEaiCockpitSceneModuleManager_onAutoPlayActionStop(context) {
   var o = this;
   var focusView = o._focusView;
   var currentViewRenderable = focusView.renderable();
   var currentMatrix = currentViewRenderable.matrix();
   var modules = o._modules;
   var currentModule = focusView.parentModule();
   var currentIndex = modules.indexOfValue(currentModule);
   for (var i = 1; i < modules.count() ; i++) {
      var nextIndex = currentIndex + i;
      if (nextIndex > modules.count() - 1) {
         nextIndex -= modules.count();
      }
      var nextModule = modules.at(nextIndex);
      if (nextModule.slideshow()) {
         var nextView = nextModule.controlView()
         var nextMatrix = nextView.renderable().matrix();
         nextMatrix.setTranslate(0, 0, 10);
         nextMatrix.setRotation(0, 0, 0);
         nextMatrix.update();
         break;
      }
   }
   currentMatrix.setTranslate(0, 0, 10);
   currentMatrix.setRotation(0, 0, 0);
   currentMatrix.update();
   focusView.setVisible(false);
   if (o._autoPlay) {
      o._focusView = nextModule.controlView();
      o.startAutoPlay(nextModule);
   }
}
MO.FEaiCockpitSceneModuleManager_process = function FEaiCockpitSceneModuleManager_process(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.process.call(o);
}
MO.FEaiCockpitSceneModuleManager_dispose = function FEaiCockpitSceneModuleManager_dispose(){
   var o = this;
   o.__base.FEaiCockpitModuleManager.dispose.call(o);
}
