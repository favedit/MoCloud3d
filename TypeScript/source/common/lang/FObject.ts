module sk.common.lang {
   //==========================================================
   // <T>所有可继承对象的基类。</T>
   // <P>支持类的判断、获取内部运行信息的功能。</P>
   //
   // @class
   // @author maocy
   // @version 141230
   //==========================================================
   export class FObject {
      // 类对象
      __class: any = null;
      // 哈希值
      __hash: number = 0;
      // 释放标志 
      __dispose: boolean = false;

      //==========================================================
      // <T>构建当前对象的实例。</T>
      //
      // @method
      //==========================================================
      public construct(): void {
         this.__dispose = false;
      }

      //==========================================================
      // <T>获取哈希值。</T>
      //
      // @method
      // @return Integer 哈希值
      //==========================================================
      public hashCode(): number {
         var o = this;
         var hash = o.__hash;
         if (!hash) {
            //hash = o.__hash = MO.RObject.nextId();
         }
         return hash;
      }

      //==========================================================
      // <T>获取当前实例的信息。</T>
      //
      // @method
      // @return String 信息字符串
      //==========================================================
      public toString(): string {
         //return MO.Class.dump(this);
         return null;
      }

      //==========================================================
      // <T>释放当前实例。</T>
      //
      // @method
      //==========================================================
      public dispose(flag: boolean = false): void {
         var o = this;
         //MO.Lang.Object.free(o);
         o.__dispose = true;
      }
   }
}