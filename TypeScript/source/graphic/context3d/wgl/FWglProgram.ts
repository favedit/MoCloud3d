module sk.graphic.context3d.wgl {
   //==========================================================
   // <T>WebGL渲染程序。</T>
   //
   // @author maocy
   // @history 141230
   //==========================================================
   export class FWglProgram extends sk.graphic.context3d.FG3dProgram {
      // @attribute
      protected _handle = null;

      //==========================================================
      // <T>配置处理。</T>
      //
      // @method
      //==========================================================
      public setup() {
         var graphic = this._graphicContext;
         this._handle = graphic._handle.createProgram();
      }

      //==========================================================
      // <T>获得顶点渲染器。</T>
      //
      // @method
      // @return FVertexShader 顶点渲染器
      //==========================================================
      public vertexShader() {
         var o = this;
         var shader = o._vertexShader;
         if (!shader) {
            shader = o._vertexShader = sk.common.reflect.RClass.create(FWglVertexShader);
            shader.linkGraphicContext(o);
            shader.setup();
         }
         return shader;
      }

      //==========================================================
      // <T>获得像素渲染器。</T>
      //
      // @method
      // @return FFragmentShader 顶点渲染器
      //==========================================================
      public fragmentShader() {
         var o = this;
         var shader = o._fragmentShader;
         if (!shader) {
            shader = o._fragmentShader = sk.common.reflect.RClass.create(FWglFragmentShader);
            shader.linkGraphicContext(o);
            shader.setup();
         }
         return shader;
      }

      //==========================================================
      // <T>上传内容处理。</T>
      //
      // @method
      // @param shaderCd:EG3dShader 渲染程序类型
      // @param source:String 渲染代码
      //==========================================================
      public upload(shaderCd, source) {
         var o = this;
         if (shaderCd == sk.graphic.context3d.EG3dShader.Vertex) {
            o.vertexShader().upload(source);
         } else if (shaderCd == sk.graphic.context3d.EG3dShader.Fragment) {
            o.fragmentShader().upload(source);
         } else {
            throw new Error('Unknown type');
         }
      }

      //==========================================================
      // <T>构建内容处理。</T>
      //
      // @method
      //==========================================================
      public build() {
         var o = this;
         var context = o._graphicContext;
         var g = context._handle;
         var pn = o._handle;
         // 设置顶点渲染器
         var vertexShader = o.vertexShader();
         g.attachShader(pn, vertexShader._handle);
         var result = context.checkError("attachShader", "Attach shader failure. (program_id=%d, shader_id=%d)", pn, vertexShader._handle);
         if (!result) {
            return result;
         }
         // 设置顶点渲染器
         var fragmentShader = o.fragmentShader();
         g.attachShader(pn, fragmentShader._handle);
         var result = context.checkError("attachShader", "Attach shader failure. (program_id=%d, shader_id=%d)", pn, fragmentShader._handle);
         if (!result) {
            return result;
         }
         // 设置属性集合
         if (o.hasAttribute()) {
            var attributes = o.attributes();
            var ac = attributes.count();
            for (var n = 0; n < ac; n++) {
               var attribute = attributes.at(n);
               var attributeName = attribute.name();
               g.bindAttribLocation(pn, n, attributeName);
               result = context.checkError("bindAttribLocation", "Bind attribute location. (program_id=%d, slot=%d, name=%s)", pn, n, attributeName);
               if (!result) {
                  return result;
               }
            }
         }
      }

      //==========================================================
      // <T>关联内容处理。</T>
      //
      // @method
      //==========================================================
      public link() {
         var o = this;
         var context = o._graphicContext;
         var g = context._handle;
         var result = false;
         // 关联处理
         var pn = o._handle;
         g.linkProgram(pn);
         // 获得结果
         var pr = g.getProgramParameter(pn, g.LINK_STATUS);
         if (!pr) {
            var pi = g.getProgramInfoLog(pn);
            sk.common.lang.RLogger.fatal(this, null, "Link program failure. (status={1}, reason={2})", pr, pi);
            // 释放程序
            g.deleteProgram(o._handle);
            o._handle = null;
            return false;
         }
         //............................................................
         // 校验程序
         g.validateProgram(pn);
         // 获得结果
         var pr = g.getProgramParameter(pn, g.VALIDATE_STATUS);
         if (!pr) {
            var pi = g.getProgramInfoLog(pn);
            //MO.Logger.fatal(this, null, "Validate program failure. (reason={1})", pi);
            // 释放程序
            //g.deleteProgram(o._handle);
            //o._handle = null;
            //return false;
         }
         //............................................................
         // 结束处理
         g.finish();
         result = context.checkError("finish", "Finish program link faliure. (program_id={1})", pn);
         if (!result) {
            return result;
         }
         //............................................................
         // 关联常量集合
         if (o.hasParameter()) {
            var count = o._parameters.count();
            for (var n = 0; n < count; n++) {
               var parameter = o._parameters.at(n);
               var handle = g.getUniformLocation(pn, parameter.name());
               result = context.checkError("getUniformLocation", "Find parameter slot. (program_id=%d, name=%s, slot=%d)", pn, parameter.name(), handle);
               if (!result) {
                  return result;
               }
               parameter._slot = handle;
               if (handle != null) {
                  parameter._statusUsed = true;
               }
            }
         }
         // 关联属性集合
         if (o.hasAttribute()) {
            var count = o._attributes.count();
            for (var n = 0; n < count; n++) {
               var attribute = o._attributes.at(n);
               var handle = g.getAttribLocation(pn, attribute.name());
               result = context.checkError("getAttribLocation", "Find attribute slot. (program_id=%d, name=%s, slot=%d)", pn, attribute.name(), handle);
               if (!result) {
                  return result;
               }
               attribute._slot = handle;
               if (handle != -1) {
                  attribute._statusUsed = true;
               }
            }
         }
         // 关联取样器集合
         if (o.hasSampler()) {
            var count = o._samplers.count();
            for (var n = 0; n < count; n++) {
               var sampler = o._samplers.at(n);
               var handle = g.getUniformLocation(pn, sampler.name());
               result = context.checkError("getUniformLocation", "Find sampler slot. (program_id=%d, name=%s, slot=%d)", pn, sampler.name(), handle);
               if (!result) {
                  return result;
               }
               sampler._slot = handle;
               if (handle != null) {
                  sampler._statusUsed = true;
               }
            }
            var si = 0;
            for (var n = 0; n < count; n++) {
               var sampler = o._samplers.value(n);
               if (sampler._statusUsed) {
                  sampler._index = si++;
               }
            }
         }
         return result;
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         var o = this;
         var context = o._graphicContext;
         // 释放对象
         var handle = o._handle;
         if (handle) {
            context._handle.deleteProgram(handle);
            o._handle = null;
         }
         // 父处理
         super.dispose();
      }
   }
}
