module sk.common.lang {
   //==========================================================
   // <T>数组的操作类。</T>
   //
   // @tool
   // @author maocy
   // @version 141229
   //==========================================================
   export class FArray {
      //..........................................................
      // @attribute
      _length: number = 0;
      _memory: Array<any> = new Array<any>();

      //==========================================================
      // <T>判断数组是否为空。</T>
      //
      // @method
      // @return Boolean 是否为空
      //==========================================================
      public isEmpty() {
         return this._length == 0;
      }

      //==========================================================
      // <T>获得数据长度。</T>
      //
      // @method
      // @return Integer 数据长度
      //==========================================================
      public length() {
         return this._length;
      }

      //==========================================================
      // <T>设置数据长度。</T>
      //
      // @method
      // @param Integer 数据长度
      //==========================================================
      public setLength(length) {
         this._length = length;
      }

      //==========================================================
      // <T>获得数据。</T>
      //
      // @method
      // @return Array 数据
      //==========================================================
      public memory() {
         return this._memory;
      }

      //==========================================================
      // <T>判断数组是否含有指定的对象。</T>
      //
      // @method
      // @param value:Object 对象
      // @return Boolean 是否含有
      //==========================================================
      public contains(value) {
         return this.indexOf(value) != -1;
      }

      //==========================================================
      // <T>查找指定对象在数组中的索引位置，不存在则返回-1。</T>
      //
      // @method
      // @param value:Object 对象
      // @return Integer 索引位置
      //==========================================================
      public indexOf(value) {
         var o = this;
         var count = o._length;
         for (var i = 0; i < count; i++) {
            if (o._memory[i] == value) {
               return i;
            }
         }
         return -1;
      }

      //==========================================================
      // <T>取得指定索引对应的对象。</T>
      //
      // @method
      // @param index:Integer 索引位置
      // @return 当前位置上的对象
      //==========================================================
      public get(index) {
         return ((index >= 0) && (index < this._length)) ? this._memory[index] : null;
      }

      //==========================================================
      // <T>把对象存储在指定的索引处。</T>
      //
      // @method
      // @param index:Integer 索引位置
      // @param value:Object 对象
      //==========================================================
      public set(index, value) {
         var o = this;
         if ((index >= 0) && (index < o._length)) {
            o._memory[index] = value;
         }
      }

      //==========================================================
      // <T>把对象追加到数组的最后位置。</T>
      //
      // @method
      // @param values:Object 对象
      //==========================================================
      public push() {
         var o = this;
         var count = arguments.length;
         for (var i = 0; i < count; i++) {
            o._memory[o._length++] = arguments[i];
         }
      }

      //==========================================================
      // <T>在数组中交换两个索引对应的对象。</T>
      //
      // @method
      // @param left:Integer 第一个对象的索引值
      // @param right:Integer 第二个对象的索引值
      //==========================================================
      public swap(left, right) {
         var o = this;
         var count = o._length;
         if ((left >= 0) && (left < count) && (right >= 0) && (right < count) && (left != right)) {
            var memory = o._memory;
            var value = memory[left];
            memory[left] = memory[right];
            memory[right] = value;
         }
      }

      //==========================================================
      // <T>对数组内容进行排序。</T>
      //
      // @method
      //==========================================================
      public sort() {
         this._memory.sort();
      }

      //==========================================================
      // <T>移除指定索引的存储对象。</T>
      //
      // @method
      // @param index:Integer 索引位置
      // @return Object 被删除的对象
      //==========================================================
      public erase(index) {
         var value = null;
         var count = this._length;
         if ((index >= 0) && (index < count)) {
            value = this._memory[index];
            for (var i = index; i < count; i++) {
               this._memory[i] = this._memory[i + 1];
            }
            this._length--;
         }
         return value;
      }

      //==========================================================
      // <T>移除指定对象的存储对象。</T>
      //
      // @method
      // @param value:Object 指定对象
      //==========================================================
      public remove(value) {
         var o = this;
         var index = 0;
         var memory = o._memory;
         var count = o._length;
         for (var i = 0; i < count; i++) {
            if (memory[i] != value) {
               memory[index++] = memory[i];
            }
         }
         o._length = index;
      }

      //==========================================================
      // <T>将数组内项目为空的位置全部删除。</T>
      //
      // @method
      //==========================================================
      public compress() {
         var o = this;
         var index = 0;
         var count = o._length;
         var memory = o._memory;
         for (var i = 0; i < count; i++) {
            var value = memory[i];
            if (value != null) {
               memory[index++] = value;
            }
         }
         o._length = index;
      }

      //==========================================================
      // <T>清除数组的所有内容。</T>
      //
      // @method
      //==========================================================
      public clear() {
         this._length = 0;
      }

      //==========================================================
      // <T>释放处理。</T>
      //
      // @method
      //==========================================================
      public dispose() {
         var o = this;
         o._length = 0;
         o._memory = null;
      }

      //==========================================================
      // <T>获得数组的内部信息。</T>
      //
      // @method
      // @return String 信息字符串
      //==========================================================
      public dump() {
         var o = this;
         var result: FString = new FString();
         var count = o._length;
         result.append(sk.common.runtime.RRuntime.className(o), ':', count);
         if (count > 0) {
            var memory = o._memory;
            for (var i = 0; i < count; i++) {
               result.append(' [', memory[i], ']');
            }
         }
         return result.flush();
      }
   }
}
