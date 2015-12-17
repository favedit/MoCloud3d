package org.mo.content.core.resource.animation;

import org.mo.content.engine.core.model.animation.IResModelAnimationConsole;
import org.mo.core.aop.face.ALink;

//============================================================
// <T>模型控制台。</T>
//============================================================
public class FCntAnimationConsole
      implements
         ICntAnimationConsole
{
   // 动画管理接口
   @ALink
   protected IResModelAnimationConsole _animationConsole;
}
