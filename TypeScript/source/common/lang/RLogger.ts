module sk.common.lang {
   //==========================================================
   // <T>日志工具类。</T>
   //
   // @reference
   // @author maocy
   // @version 141229
   //==========================================================
   export class RLogger {
      //..........................................................
      // @attribute
      private static _labelLength: number = 40;
      //..........................................................
      // @listener
      private static _logger: SLogger = new SLogger();
      private static lsnsOutput: FListeners = new FListeners();

      //==========================================================
      // <T>输出日志信息。</T>
      //
      // @method
      // @param sender:Object 发送者
      // @param message:String 消息
      //==========================================================
      public static output(sender, message) {
         var o = this;
         var logger: any = o._logger;
         logger.sender = sender
         logger.message = message;
         o.lsnsOutput.process(logger);
      }

      //==========================================================
      //<T>显示一个调试信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static debug(owner, message, params) {
         var o = this;
         // 获得函数名称
         var name = null;
         var caller = RLogger.debug.caller;
         if (caller) {
            name = sk.common.reflect.RMethod.name(caller);
         } else if ((arguments as any).caller) {
            name = sk.common.reflect.RMethod.name((arguments as any).caller[0]);
         }
         if (name == null) {
            name = 'unknown';
         } else {
            name = name.replace('_', '.');
         }
         if (owner && owner.hashCode) {
            name += '@' + owner.hashCode();
         }
         //..........................................................
         var result = new FString();
         result.append(RDate.format('yymmdd-hh24miss.ms'));
         result.append('|D [' + RString.rpad(name, o._labelLength) + '] ');
         // 格式化参数
         var count = arguments.length;
         for (var n = 2; n < count; n++) {
            var parameter = arguments[n];
            var value = '';
            if (parameter != null) {
               if (typeof (parameter) == 'function') {
                  value = sk.common.reflect.RMethod.name(parameter);
               } else {
                  value = parameter.toString();
               }
            }
            message = message.replace('{' + (n - 1) + '}', value);
         }
         result.append(message);
         //..........................................................
         o.output(owner, result.flush());
      }

      //==========================================================
      //<T>显示一个提示信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static info(owner, message, params) {
         var o = this;
         // 获得函数名称
         var name = null;
         var caller = RLogger.info.caller;
         if (caller) {
            name = sk.common.reflect.RMethod.name(caller);
         } else if ((arguments as any).caller) {
            name = sk.common.reflect.RMethod.name((arguments as any).caller[0]);
         }
         if (name == null) {
            name = 'unknown';
         } else {
            name = name.replace('_', '.');
         }
         if (owner && owner.hashCode) {
            name += '@' + owner.hashCode();
         }
         //..........................................................
         var result = new FString();
         result.append(RDate.format('yymmdd-hh24miss.ms'));
         result.append('|I [' + RString.rpad(name, o._labelLength) + '] ');
         // 格式化参数
         var c = arguments.length;
         for (var n = 2; n < c; n++) {
            var parameter = arguments[n];
            var value = '';
            if (parameter != null) {
               if (typeof (parameter) == 'function') {
                  value = sk.common.reflect.RMethod.name(parameter);
               } else {
                  value = parameter.toString();
               }
            }
            message = message.replace('{' + (n - 1) + '}', value);
         }
         result.append(message);
         //..........................................................
         o.output(owner, result.flush());
      }

      //==========================================================
      // <T>显示一个警告信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static warn(owner, message, params) {
         var o = this;
         // 获得函数名称
         var name = null;
         var caller = RLogger.warn.caller;
         if (caller) {
            name = sk.common.reflect.RMethod.name(caller);
         } else if ((arguments as any).caller) {
            name = sk.common.reflect.RMethod.name((arguments as any).caller[0]);
         }
         if (name == null) {
            name = 'unknown';
         } else {
            name = name.replace('_', '.');
         }
         if (owner && owner.hashCode) {
            name += '@' + owner.hashCode();
         }
         //..........................................................
         var result = new FString();
         result.append(RDate.format('yymmdd-hh24miss.ms'));
         result.append('|W [' + RString.rpad(name, o._labelLength) + '] ');
         // 格式化参数
         var count = arguments.length;
         for (var n = 2; n < count; n++) {
            var parameter = arguments[n];
            var value = '';
            if (parameter != null) {
               if (typeof (parameter) == 'function') {
                  value = sk.common.reflect.RMethod.name(parameter);
               } else {
                  value = parameter.toString();
               }
            }
            message = message.replace('{' + (n - 1) + '}', value);
         }
         result.append(message);
         //..........................................................
         o.output(owner, result.flush());
      }

      //==========================================================
      // <T>显示一个错误信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static error(owner, message, params) {
         var o = this;
         // 获得函数名称
         var name = null;
         var caller = RLogger.error.caller;
         if (caller) {
            name = sk.common.reflect.RMethod.name(caller);
         } else if ((arguments as any).caller) {
            name = sk.common.reflect.RMethod.name((arguments as any).caller[0]);
         }
         if (name == null) {
            name = 'unknown';
         } else {
            name = name.replace('_', '.');
         }
         if (owner && owner.hashCode) {
            name += '@' + owner.hashCode();
         }
         //..........................................................
         var result = new FString();
         result.append(RDate.format('yymmdd-hh24miss.ms'));
         result.append('|E [' + RString.rpad(name, o._labelLength) + '] ');
         // 格式化参数
         var c = arguments.length;
         for (var n = 2; n < c; n++) {
            var parameter = arguments[n];
            var value = '';
            if (parameter != null) {
               if (typeof (parameter) == 'function') {
                  value = sk.common.reflect.RMethod.name(parameter);
               } else {
                  value = parameter.toString();
               }
            }
            message = message.replace('{' + (n - 1) + '}', value);
         }
         result.append(message);
         //..........................................................
         o.output(owner, result.flush());
      }

      //==========================================================
      // <T>显示一个例外信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param error:Object 例外对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static fatal(owner: any, error: any, message: string, ...params: Array<any>) {
         var o = this;
         // 建立函数调用关系的堆栈
         var stack = new FString();
         var stacks = new Array();
         var caller = RLogger.fatal.caller;
         while (caller) {
            if (RArray.contains(stacks, caller)) {
               break;
            }
            stacks.push(caller);
            caller = caller.caller;
         }
         var count = stacks.length;
         for (var i = 0; i < count; i++) {
            caller = stacks[i];
            if (i > 0) {
               stack.appendLine();
            }
            stack.append('   ' + (count - i) + ': ' + sk.common.reflect.RMethod.name(caller));
         }
         // 建立消息信息
         var result = new FString();
         //result.appendLine(RContext.get('RMessage:fatal'));
         result.appendLine(RString.repeat('-', 60));
         result.append(sk.common.reflect.RClass.dump(owner), ': ');
         if (message) {
            var count = arguments.length;
            for (var i = 3; i < count; i++) {
               var parameter = arguments[i];
               if ('function' == typeof (parameter)) {
                  parameter = sk.common.reflect.RMethod.name(parameter);
               }
               message = message.replace('{' + (i - 2) + '}', parameter);
            }
         }
         result.appendLine(message);
         result.appendLine(RString.repeat('-', 60));
         result.appendLine('Stack:');
         result.append(stack.flush());
         var text = result.flush();
         o.output(owner, text);
         // 显示信息
         if (sk.common.runtime.RRuntime.isPlatformPc() && !sk.common.runtime.RRuntime.isRelease()) {
            throw new Error(text);
         }
      }

      //==========================================================
      //<T>显示一个弹出信息。</T>
      //
      // @method
      // @param owner:Object 消息对象
      // @param message:String 消息内容
      // @param params:Object... 消息参数列表
      //==========================================================
      public static show(sf, message, params) {
         var o = this;
         // 获得函数名称
         var name = null;
         var caller = RLogger.show.caller;
         if (caller) {
            name = sk.common.reflect.RMethod.name(caller);
         } else if ((arguments as any).caller) {
            name = sk.common.reflect.RMethod.name((arguments as any).caller[0]);
         }
         if (name == null) {
            name = 'unknown';
         } else {
            name = name.replace('_', '.');
         }
         //if ((owner as any).hashCode) {
         //   name += '@' + owner.hashCode();
         //}
         //..........................................................
         var result = new FString();
         result.append(RDate.format('yymmdd-hh24miss.ms'));
         result.append('|I [' + RString.rpad(name, o._labelLength) + '] ');
         // 格式化参数
         var count = arguments.length;
         for (var n = 2; n < count; n++) {
            var parameter = arguments[n];
            var value = '';
            if (parameter != null) {
               if (typeof (parameter) == 'function') {
                  value = sk.common.reflect.RMethod.name(parameter);
               } else {
                  value = parameter.toString();
               }
            }
            message = message.replace('{' + (n - 1) + '}', value);
         }
         result.append(message);
         //..........................................................
         alert(result.flush());
      }
   }
}
