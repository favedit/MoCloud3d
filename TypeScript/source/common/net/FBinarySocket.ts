module sk.common.net {
   //==========================================================
   // <T>二进制网络端口。</T>
   //
   // @class
   // @author maocy
   // @history 151007
   //==========================================================
   export class FBinarySocket extends FSocket {

      //==========================================================
      // <T>链接处理。</T>
      //
      // @method
      // @param url:String 网络地址
      //==========================================================
      public connect(url) {
         super.connect(url);
         this._handle.binaryType = "arraybuffer";
      }
   }
}