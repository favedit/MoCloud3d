module sk.common.lang {
   //===========================================================
   // <T>结果枚举。</T>
   //
   // @enum
   // @author maocy
   // @version 150114
   //===========================================================
   export class EResult {
      // @attribute Integer 成功
      public static Success = 0;
      // @attribute Integer 继续
      public static Continue = 1;
      // @attribute Integer 跳过
      public static Skip = 2;
      // @attribute Integer 停止
      public static Finish = 3;
      // @attribute Integer 失败
      public static Failure = -1;
      // @attribute Integer 取消
      public static Cancel = -2;
   }
}