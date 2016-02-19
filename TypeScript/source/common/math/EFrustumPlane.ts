﻿module sk.common.math {
   //===========================================================
   // <T>视截体平面类型枚举。</T>
   //
   // @enum
   // @author maocy
   // @version 141229
   //===========================================================
   export enum EFrustumPlane {
      // 近平面
      Near = 0,
      // 远平面
      Far = 1,
      // 左平面
      Left = 2,
      // 右平面
      Right = 3,
      // 上平面
      Top = 4,
      // 下平面
      Bottom = 5,
      // 平面总数
      Count = 6,
   }
}