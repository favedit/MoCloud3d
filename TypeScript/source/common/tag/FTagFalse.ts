module sk.common.tag {
   //==========================================================
   // <T>标签判断非类。</T>
   //
   // @class
   // @author maocy
   // @version 150114
   //==========================================================
   export class FTagFalse extends FTag {
      // @attribute
      _trimLeft = true;
      _source = null;

      //==========================================================
      // <T>开始处理。</T>
      //
      // @method
      // @param p:context:FTagContext 环境
      // @return EResult 处理结果
      //==========================================================
      public onBegin(p) {
         var o = this;
         var v = p.get(o._source);
         return sk.common.lang.RBoolean.parse(v) ? sk.common.lang.EResult.Skip : sk.common.lang.EResult.Continue;
      }

      //==========================================================
      // <T>设置属性值。</T>
      //
      // @method
      // @param n:name:String 名称
      // @param v:level:Integer 内容
      //==========================================================
      public set(n, v) {
         var o = this;
         switch (n) {
            case 'source':
               o._source = v;
               return;
         }
         super.set(n, v);
      }

      //==========================================================
      //<T>获得字符串。</T>
      //
      // @method
      // @return String 字符串
      //==========================================================
      public toString() {
         var o = this;
         return 'source=' + o._source;
      }
   }
}