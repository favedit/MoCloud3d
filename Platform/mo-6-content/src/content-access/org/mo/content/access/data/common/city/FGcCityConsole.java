package org.mo.content.access.data.common.city;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataCommonCityLogic;

//============================================================
// <T>城市信息控制台。</T>
//============================================================
public class FGcCityConsole
      extends FAbstractLogicUnitConsole<FDataCommonCityLogic, FGcCityInfo>
      implements
         IGcCityConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FCountryConsole.class);

   //============================================================
   // <T>构造城市信息控制台。</T>
   //============================================================
   public FGcCityConsole(){
      super(FDataCommonCityLogic.class, FGcCityInfo.class);
   }
}
