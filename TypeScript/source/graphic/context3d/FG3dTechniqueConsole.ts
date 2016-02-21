module sk.graphic.context3d {
   //==========================================================
   // <T>技术管理器。</T>
   //
   // @author maocy
   // @history 150107
   //==========================================================
   export class FG3dTechniqueConsole extends sk.core.FConsole {
      // @attribute
      protected _scopeCd = sk.common.lang.EScope.Local;
      //o._techniques = MO.Class.register(o, new MO.AGetter('_techniques'));
      protected _techniques: sk.common.lang.FDictionary = new sk.common.lang.FDictionary();

      //==========================================================
      // <T>根据类名称或对象获得技术器。</T>
      //
      // @method
      // @param context:FG3dContext 环境对象
      // @param clazz:Function 类对象
      // @return FG3dTechnique 效果器
      //==========================================================
      public find(context, clazz) {
         var o = this;
         // 获得环境
         if (!sk.common.reflect.RClass.isClass(context, sk.graphic.context.FGraphicContext)) {
            context = context.graphicContext();
         }
         if (!sk.common.reflect.RClass.isClass(context, sk.graphic.context.FGraphicContext)) {
            throw new sk.common.lang.FError(o, 'Unknown context.');
         }
         // 查找技术
         var code = context.hashCode() + '|' + sk.common.reflect.RClass.name(clazz);
         var techniques = o._techniques;
         var technique = techniques.get(code);
         if (!technique) {
            // 创建技术
            technique = sk.common.reflect.RClass.create(clazz);
            technique.linkGraphicContext(context);
            technique.setup();
            var techniqueCode = technique.code();
            // 设置过程集合
            var passes = technique.passes();
            var passCount = passes.count();
            for (var i = 0; i < passCount; i++) {
               var pass = passes.at(i);
               var passCode = pass.code();
               pass.setFullCode(techniqueCode + '.' + passCode);
            }
            // 存储技术
            techniques.set(code, technique);
         }
         return technique;
      }
   }
}