package org.mo.content.core.web;

import org.mo.cloud.core.web.IGcWebSession;
import org.mo.cloud.logic.data.system.FGcSessionInfo;

//============================================================
// <T>网络会话接口。</T>
//============================================================
public interface IGcSession
      extends
         IGcWebSession
{
   //============================================================
   // <T>获得应用编号。</T>
   //
   // @return 应用编号
   //============================================================
   long applicationId();

   //============================================================
   // <T>设置应用编号。</T>
   //
   // @param applicationId 应用编号
   //============================================================
   void setApplicationId(long applicationId);

   //============================================================
   // <T>获得逻辑代码</T>
   //
   // @return 逻辑代码
   //============================================================
   String logicCode();

   //============================================================
   // <T>设置逻辑代码</T>
   //
   // @param logicCode 逻辑代码
   //============================================================
   void setLogicCode(String logicCode);

   //============================================================
   // <T>获得角色编号。</T>
   //
   // @return 角色编号
   //============================================================
   long roleId();

   //============================================================
   // <T>获得角色代码。</T>
   //
   // @return 角色代码
   //============================================================
   String roleCode();

   //============================================================
   // <T>获得角色模块集合。</T>
   //
   // @return 角色模块集合
   //============================================================
   String roleModules();

   //============================================================
   // <T>获得角色模块数组。</T>
   //
   // @return 角色模块数组
   //============================================================
   String[] roleModuleCodes();

   //============================================================
   // <T>获得GPS经度。</T>
   //
   // @return GPS经度
   //============================================================
   double locationLongitude();

   //============================================================
   // <T>获得GPS维度。</T>
   //
   // @return GPS维度
   //============================================================
   double locationLatitude();

   //============================================================
   // <T>获得会话信息。</T>
   //
   // @return 会话信息
   //============================================================
   FGcSessionInfo sessionInfo();
}
