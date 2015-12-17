package org.mo.content.access.data.resource.model.animation;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataResourceModelAnimationActionLogic;

//============================================================
// <T>资源模型动画动作控制台。</T>
//============================================================
public class FGcResModelAnimationMovieConsole
      extends FAbstractLogicUnitConsole<FDataResourceModelAnimationActionLogic, FGcResModelAnimationActionInfo>
      implements
         IGcResModelAnimationMovieConsole
{
   //============================================================
   // <T>构造资源模型动画动作控制台。</T>
   //============================================================
   public FGcResModelAnimationMovieConsole(){
      super(FDataResourceModelAnimationActionLogic.class, FGcResModelAnimationActionInfo.class);
   }
}
