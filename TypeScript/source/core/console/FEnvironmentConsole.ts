module sk.core.console {
   //==========================================================
   // <T>环境控制台。</T>
   //
   // @console
   // @author maocy
   // @version 150606
   //==========================================================
   export class FEnvironmentConsole extends sk.core.FConsole {
      //..........................................................
      // @attribute
      _scopeCd = sk.common.lang.EScope.Local;
      // @attribute
      //_environments = MO.Class.register(o, new MO.AGetSet('_environments'));
      _environments: sk.common.lang.FDictionary = new sk.common.lang.FDictionary();

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      public constructor() {
         super();
      }

      //==========================================================
      // <T>注册一个环境。</T>
      //
      // @method
      // @param environment:FEnvironment 环境
      //==========================================================
      public register(environment) {
         var o = this;
         var name = environment.name();
         sk.common.runtime.RAssert.debugNotEmpty(name);
         o._environments.set(name, environment);
      }

      //==========================================================
      // <T>注册一个环境内容。</T>
      //
      // @method
      // @param name:String 名称
      // @param value:String 内容
      // @return FEnvironment 环境
      //==========================================================
      public registerValue(name, value) {
         sk.common.runtime.RAssert.debugNotEmpty(name);
         var environment = sk.common.reflect.RClass.create(FEnvironment);
         environment.set(name, value);
         this._environments.set(name, environment);
         return environment;
      }

      //==========================================================
      // <T>根据名称查找一个环境。</T>
      //
      // @method
      // @param name:String 名称
      // @return FEnvironment 环境
      //==========================================================
      public find(name) {
         return this._environments.get(name);
      }

      //==========================================================
      // <T>根据名称查找一个环境内容。</T>
      //
      // @method
      // @param name:String 名称
      // @return String 环境内容
      //==========================================================
      public findValue(name) {
         var o = this;
         var value = null;
         var environment = o._environments.get(name);
         if (environment) {
            value = environment.value();
         }
         return value;
      }

      //==========================================================
      // <T>解析内容。</T>
      //
      // @method
      // @param value:String 内容
      // @return String 解析内容
      //==========================================================
      public parse(value) {
         var o = this;
         sk.common.runtime.RAssert.debugNotEmpty(value);
         var result = value;
         var environments = o._environments;
         var count = environments.count();
         for (var i = 0; i < count; i++) {
            var environment = environments.at(i);
            result = sk.common.lang.RString.replace(result, '{' + environment.name() + '}', environment.value());
         }
         return result;
      }

      //==========================================================
      // <T>解析网络内容。</T>
      //
      // @method
      // @param value:String 内容
      // @return String 解析内容
      //==========================================================
      public parseUrl(value) {
         var o = this;
         var result = null;
         //var version = MO.Runtime.version();
         var url = o.parse(value);
         if (url.indexOf('?') != -1) {
            //result = url + '&' + version;
         } else {
            //result = url + '?' + version;
         }
         return result;
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         // 释放处理
         this._environments = sk.common.lang.RObject.dispose(this._environments);
         // 父处理
         super.dispose();
      }
   }
}