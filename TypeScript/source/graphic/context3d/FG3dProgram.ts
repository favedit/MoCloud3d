module sk.graphic.context3d {
   //==========================================================
   // <T>渲染程序。</T>
   //
   // @author maocy
   // @history 141230
   //==========================================================
   export class FG3dProgram extends FG3dObject {
      //..........................................................
      // @attribute
      _attributes = null;
      _parameters = null;
      _samplers = null;
      // @attribute
      _vertexShader = null;
      _fragmentShader = null;
      // @method
      //o.vertexShader = MO.Method.virtual(o, 'vertexShader');
      //o.fragmentShader = MO.Method.virtual(o, 'fragmentShader');
      // @method
      //o.upload = MO.Method.virtual(o, 'upload');
      // @method

      //==========================================================
      // <T>判断是否含有属性。</T>
      //
      // @method
      // @return 是否含有
      //==========================================================
      public hasAttribute() {
         var o = this;
         var r = o._attributes;
         return r ? !r.isEmpty() : false;
      }

      //==========================================================
      // <T>注册一个属性。</T>
      //
      // @method
      // @param n:name:String 名称
      // @return 属性
      //==========================================================
      public registerAttribute(n) {
         var o = this;
         var r = sk.common.reflect.RClass.create(FG3dProgramAttribute);
         r._name = n;
         o.attributes().set(n, r);
         return r;
      }

      //==========================================================
      // <T>根据名称查找一个属性。</T>
      //
      // @method
      // @param n:name:String 名称
      // @return 属性
      //==========================================================
      public findAttribute(n) {
         return this._attributes ? this._attributes.get(n) : null;
      }

      //==========================================================
      // <T>获得属性集合。</T>
      //
      // @method
      // @return 属性集合
      //==========================================================
      public attributes() {
         var o = this;
         var r = o._attributes;
         if (r == null) {
            r = o._attributes = new sk.common.lang.FDictionary();
         }
         return r;
      }

      //==========================================================
      // <T>判断是否含有参数。</T>
      //
      // @method
      // @return 是否含有
      //==========================================================
      public hasParameter() {
         var o = this;
         var r = o._parameters;
         return r ? !r.isEmpty() : false;
      }

      //==========================================================
      // <T>注册一个参数。</T>
      //
      // @method
      // @param pn:name:String 名称
      // @param pf:formatCd:EG3dParameterFormat 格式
      // @return 参数
      //==========================================================
      public registerParameter(pn, pf) {
         var o = this;
         var r = sk.common.reflect.RClass.create(FG3dProgramParameter);
         r._name = pn;
         r.formatCd = pf;
         o.parameters().set(pn, r);
         return r;
      }

      //==========================================================
      // <T>根据名称查找一个参数。</T>
      //
      // @method
      // @param n:name:String 名称
      // @return 参数
      //==========================================================
      public findParameter(n) {
         return this._parameters ? this._parameters.get(n) : null;
      }

      //==========================================================
      // <T>获得参数集合。</T>
      //
      // @method
      // @return 参数集合
      //==========================================================
      public parameters() {
         var o = this;
         var r = o._parameters;
         if (r == null) {
            r = o._parameters = new sk.common.lang.FDictionary();
         }
         return r;
      }

      //==========================================================
      // <T>判断是否含有取样。</T>
      //
      // @method
      // @return 是否含有
      //==========================================================
      public hasSampler() {
         var o = this;
         var r = o._samplers;
         return r ? !r.isEmpty() : false;
      }

      //==========================================================
      // <T>注册一个取样器。</T>
      //
      // @method
      // @param pn:name:String 名称
      // @return 参数
      //==========================================================
      public registerSampler(pn) {
         var o = this;
         var r = sk.common.reflect.RClass.create(FG3dProgramSampler);
         r._name = pn;
         o.samplers().set(pn, r);
         return r;
      }

      //==========================================================
      // <T>根据名称查找一个取样器。</T>
      //
      // @method
      // @param n:name:String 名称
      // @return 参数
      //==========================================================
      public findSampler(n) {
         return this._samplers ? this._samplers.get(n) : null;
      }

      //==========================================================
      // <T>获得取样集合。</T>
      //
      // @method
      // @return 取样集合
      //==========================================================
      public samplers() {
         var o = this;
         var r = o._samplers;
         if (r == null) {
            r = o._samplers = new sk.common.lang.FDictionary();
         }
         return r;
      }

      //==========================================================
      // <T>设置属性。</T>
      //
      // @method
      // @param pn:name:String 名称
      // @param pb:buffer:Object 数据
      // @param pf:format:Integer 格式
      //==========================================================
      public setAttribute(pn, pb, pf) {
         var o = this;
         // 获得定义
         var p = o.findAttribute(pn);
         if (p == null) {
            throw new sk.common.lang.FError(o, 'Bind invalid attribute. (name={1})', pn);
         }
         // 设置内容
         o._graphicContext.bindVertexBuffer(p._slot, pb, 0, pf);
      }

      //==========================================================
      // <T>设置参数。</T>
      //
      // @method
      // @param pn:name:String 名称
      // @param pv:value:Object 数据
      // @param pc:count:Integer 个数
      //==========================================================
      public setParameter(pn, pv, pc) {
         var o = this;
         // 获得定义
         var p = o.findParameter(pn);
         if (p == null) {
            throw new sk.common.lang.FError(o, 'Bind invalid parameter. (name={1})', pn);
         }
         // 转换数据
         var d = null;
         var t = pv.constructor;
         if ((t == Float32Array) || (t == sk.common.math.SMatrix3d)) {// || (t == sk.common.math.SPerspectiveMatrix3d)) {
            d = pv;
         } else if (t == sk.common.math.SColor4) {
            d = sk.common.lang.RTypeArray.float4();
            d[0] = pv.red;
            d[1] = pv.green;
            d[2] = pv.blue;
            d[3] = pv.alpha;
         } else if ((t == sk.common.math.SPoint3) || (t == sk.common.math.SVector3)) {
            d = sk.common.lang.RTypeArray.float3();
            d[0] = pv.x;
            d[1] = pv.y;
            d[2] = pv.z;
         } else if ((t == sk.common.math.SPoint4) || (t == sk.common.math.SVector4)) {
            d = sk.common.lang.RTypeArray.float4();
            d[0] = pv.x;
            d[1] = pv.y;
            d[2] = pv.z;
            d[3] = pv.w;
         } else {
            throw new sk.common.lang.FError(o, 'Bind invalid parameter type. (name={1}, type={2})', pn, t);
         }
         // 检查数据变更
         if (p.attachData(d)) {
            // 设置内容
            o._graphicContext.bindConst(null, p._slot, p._formatCd, d, pc);
         }
      }

      //==========================================================
      // <T>设置参数。</T>
      //
      // @method
      // @param pn:name:String 名称
      // @param px:Number X数据
      // @param py:Number Y数据
      // @param pz:Number Z数据
      // @param pw:Number W数据
      //==========================================================
      public setParameter4(pn, px, py, pz, pw) {
         var v = sk.common.lang.RTypeArray.float4();
         v[0] = px;
         v[1] = py;
         v[2] = pz;
         v[3] = pw;
         this.setParameter(pn, v, 1);
      }

      //==========================================================
      // <T>设置取样器。</T>
      //
      // @method
      // @param name:String 名称
      // @param texture:FG3dTexture 纹理
      //==========================================================
      public setSampler(name, texture) {
         var o = this;
         // 获得定义
         var sampler = o.findSampler(name);
         if (!sampler) {
            throw new sk.common.lang.FError(o, 'Bind invalid sampler. (name={1})', name);
         }
         // 设置内容
         o._graphicContext.bindTexture(sampler._slot, sampler._index, texture);
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放属性集合
         this._attributes = sk.common.lang.RObject.dispose(this._attributes, true);
         this._parameters = sk.common.lang.RObject.dispose(this._parameters, true);
         this._samplers = sk.common.lang.RObject.dispose(this._samplers, true);
         // 释放对象
         this._vertexShader = sk.common.lang.RObject.dispose(this._vertexShader);
         this._fragmentShader = sk.common.lang.RObject.dispose(this._fragmentShader);
         // 父处理
         super.dispose();
      }
   }
}