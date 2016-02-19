module sk.common.lang {
   //==========================================================
   // <T>监听器集合管理的工具类。</T>
   //
   // @tool
   // @author maocy
   // @version 141229
   //==========================================================
   export class FListeners extends FObject {
      // @attribute
      protected _listeners = null;

      //==========================================================
      // <T>判断是否为空。</T>
      //
      // @method
      // @return Boolean 是否为空
      //==========================================================
      public isEmpty() {
         var listeners = this._listeners;
         return listeners ? listeners.isEmpty() : true;
      }

      //==========================================================
      // <T>查找一个监听器。</T>
      //
      // @method
      // @param owner:Object 处理对象
      // @param callback:Function 处理函数
      // @return TListener 监听器
      //==========================================================
      public find(owner, callback): FListener {
         var listeners = this._listeners;
         if (listeners) {
            var count = listeners.count();
            for (var i = 0; i < count; i++) {
               var listener = listeners.at(i);
               if ((listener._owner === owner) && (listener._callback === callback)) {
                  return listener;
               }
            }
         }
         return null;
      }

      //==========================================================
      // <T>注册一个监听器。</T>
      //
      // @method
      // @param owner:Object 处理对象
      // @param callback:Function 处理函数
      // @return TListener 监听器
      //==========================================================
      public register(owner, callback) {
         var o = this;
         // 检查是否已经注册
         var listener: FListener = o.find(owner, callback);
         if (listener) {
            throw new FError(o, 'Listener is already register. (owner={1}, process={2})', owner, callback);
         }
         // 注册监听器
         listener = new FListener();
         listener._owner = owner;
         listener._callback = callback;
         o.push(listener);
         // 返回监听器
         return listener;
      }

      //==========================================================
      // <T>注销一个监听器。</T>
      //
      // @method
      // @param owner:Object 处理对象
      // @param callback:Function 处理函数
      //==========================================================
      public unregister(owner, callback) {
         var o = this;
         // 检查是否已经注册
         var listener = o.find(owner, callback);
         if (!listener) {
            throw new FError(o, 'Listener is not register. (owner={1}, process={2})', owner, callback);
         }
         // 注销监听器
         o.remove(listener);
         // 返回监听器
         listener.dispose();
      }

      //==========================================================
      // <T>添加一个监听器对象到当前管理器内。</T>
      //
      // @method
      // @param listener:TListener 监听器对象
      //==========================================================
      public push(listener) {
         var o = this;
         // 检查参数
         if (!listener) {
            throw new FError(o, 'Listener is null.');
         }
         if (!listener._callback) {
            throw new FError(o, 'Listener process is null.');
         }
         // 增加监听器
         var listeners = o._listeners;
         if (!listeners) {
            listeners = o._listeners = new FObjects();
         }
         listeners.push(listener);
      }

      //==========================================================
      // <T>移除一个监听器对象到当前管理器内。</T>
      //
      // @method
      // @param listener:TListener 监听器对象
      //==========================================================
      public remove(listener) {
         var o = this;
         // 检查参数
         if (!listener) {
            throw new FError(o, 'Listener is null.');
         }
         // 移除监听器
         o._listeners.remove(listener);
      }

      //==========================================================
      // <T>向所有监视器发出调用处理。</T>
      //
      // @method
      // @param ps:sender:Object 发出对象
      // @param p1:parameter1:Object 参数1
      // @param p2:parameter2:Object 参数2
      // @param p3:parameter3:Object 参数3
      // @param p4:parameter4:Object 参数4
      // @param p5:parameter5:Object 参数5
      //==========================================================
      public process(ps, p1: any = null, p2: any = null, p3: any = null, p4: any = null, p5: any = null) {
         var listeners = this._listeners;
         if (listeners) {
            var count = listeners.count();
            for (var i = 0; i < count; i++) {
               listeners.at(i).process(ps, p1, p2, p3, p4, p5);
            }
         }
      }

      //==========================================================
      // <T>清空处理。</T>
      //==========================================================
      public clear() {
         var listeners = this._listeners;
         if (listeners) {
            listeners.clear();
         }
      }

      //============================================================
      // <T>释放处理。</T>
      //
      // @method
      //============================================================
      public dispose() {
         var o = this;
         var listeners = o._listeners;
         if (listeners) {
            for (var i = listeners.count() - 1; i >= 0; i--) {
               listeners.at(i).dispose();
            }
            o._listeners = RObject.dispose(listeners);
         }
         RObject.free(o);
      }

      //==========================================================
      // <T>获得运行信息。</T>
      //
      // @method
      // @return String 运行信息
      //==========================================================
      public dump() {
         var result = new FString();
         result.append(RClass.name(this));
         var listeners = this._listeners;
         var count = listeners.count();
         for (var i = 0; i < count; i++) {
            result.append('\n   ' + listeners.at(i));
         }
         return result.flush();
      }
   }
}