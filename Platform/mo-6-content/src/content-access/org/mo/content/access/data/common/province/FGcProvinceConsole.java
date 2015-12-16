package org.mo.content.access.data.common.province;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;

import com.cyou.gccloud.data.data.FDataCommonProvinceLogic;

//============================================================
// <T>省份信息控制台。</T>
//============================================================
public class FGcProvinceConsole
      extends FAbstractLogicUnitConsole<FDataCommonProvinceLogic, FGcProvinceInfo>
      implements
         IGcProvinceConsole
{
   // 日志输出接口
   // private static ILogger _logger = RLogger.find(FCountryConsole.class);

   //============================================================
   // <T>构造省份信息控制台。</T>
   //============================================================
   public FGcProvinceConsole(){
      super(FDataCommonProvinceLogic.class, FGcProvinceInfo.class);
   }
}
