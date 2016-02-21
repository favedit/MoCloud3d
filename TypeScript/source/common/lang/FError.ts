﻿module sk.common.lang {
   //==========================================================
   // <T>错误处理类。</T>
   //
   // @tool
   // @param po:sender:Object 发送者
   // @param pm:message:String 信息
   // @param pp:parameters:Object[] 参数集合
   // @author maocy
   // @version 150101
   //==========================================================
   export class FError {
      constructor(po: any, pm: string, ...pp: Array<any>) {
         //..........................................................
         // @construct
         var r: FString = new FString();
         // 建立函数调用信息
         var f = FError.caller;
         var s = new FString();
         var t = new Array();
         while (f) {
            if (RArray.contains(t, f)) {
               break;
            }
            t.push(f);
            f = f.caller;
         }
         var c = t.length;
         for (var n = 0; n < c; n++) {
            f = t[n];
            if (n > 0) {
               s.appendLine();
            }
            s.append('   ' + (c - n) + ': ' + sk.common.reflect.RMethod.name(f));
         }
         // 建立描述参数信息
         var a = arguments;
         var c = a.length;
         for (var n = 2; n < c; n++) {
            var v = a[n];
            var vs = null;
            if (typeof (v) == 'function') {
               vs = sk.common.reflect.RMethod.name(v);
            } else {
               vs = v;
            }
            pm = pm.replace('{' + (n - 1) + '}', vs);
         }
         r.appendLine(pm);
         r.appendLine('------------------------------------------------------------');
         r.append(s);
         var info = r.flush();
         alert(info);
         //throw new Error(info);
      }
   }

}