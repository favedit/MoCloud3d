package org.mo.content.core.web;

import org.mo.cloud.core.web.FGcWebSession;
import org.mo.cloud.logic.data.system.FGcSessionInfo;
import org.mo.com.lang.RString;
import org.mo.content.access.data.person.FGcUserInfo;
import org.mo.content.core.common.EGcFromCode;

//============================================================
// <T>会话信息。</T>
//============================================================
public class FGcSession
      extends FGcWebSession
      implements
         IGcSession
{
   // 序列化编号
   private static final long serialVersionUID = 1L;

   // 逻辑代码
   protected String _logicCode;

   // 应用编号
   protected long _applicationId;

   // 角色编号
   protected long _roleId;

   // 角色代码
   protected String _roleCode;

   // 角色模块集合
   protected String _roleModules;

   // 角色模块数组
   protected String[] _roleModuleCodes;

   // GPS经度
   protected double _locationLongitude;

   // GPS维度
   protected double _locationLatitude;

   // 项目编号
   protected long _projectId;

   // 用户信息
   protected FGcUserInfo _userInfo;

   // 会话信息
   protected FGcSessionInfo _sessionInfo;

   //============================================================
   // <T>会话信息</T>
   //
   // @return 会话信息
   //============================================================
   public FGcSession(){
      _fromCode = EGcFromCode.Local;
   }

   //============================================================
   // <T>获得逻辑代码</T>
   //
   // @return 逻辑代码
   //============================================================
   @Override
   public String logicCode(){
      return _logicCode;
   }

   //============================================================
   // <T>设置逻辑代码</T>
   //
   // @param logicCode 逻辑代码
   //============================================================
   @Override
   public void setLogicCode(String logicCode){
      _logicCode = logicCode;
   }

   //============================================================
   // <T>获得应用编号。</T>
   //
   // @return 应用编号
   //============================================================
   @Override
   public long applicationId(){
      return _applicationId;
   }

   //============================================================
   // <T>设置应用编号。</T>
   //
   // @param applicationId 应用编号
   //============================================================
   @Override
   public void setApplicationId(long applicationId){
      _applicationId = applicationId;
   }

   //============================================================
   // <T>获得角色编号。</T>
   //
   // @return 角色编号
   //============================================================
   @Override
   public long roleId(){
      return _roleId;
   }

   //============================================================
   // <T>获得角色代码。</T>
   //
   // @return 角色代码
   //============================================================
   @Override
   public String roleCode(){
      return _roleCode;
   }

   //============================================================
   // <T>获得角色模块集合。</T>
   //
   // @return 角色模块集合
   //============================================================
   @Override
   public String roleModules(){
      return _roleModules;
   }

   //============================================================
   // <T>获得角色模块数组。</T>
   //
   // @return 角色模块数组
   //============================================================
   @Override
   public String[] roleModuleCodes(){
      return _roleModuleCodes;
   }

   //============================================================
   // <T>获得GPS经度。</T>
   //
   // @return GPS经度
   //============================================================
   @Override
   public double locationLongitude(){
      return _locationLongitude;
   }

   //============================================================
   // <T>设置GPS经度。</T>
   //
   // @return GPS经度
   //============================================================
   public void setLocationLongitude(double locationLongitude){
      _locationLongitude = locationLongitude;
   }

   //============================================================
   // <T>获得GPS维度。</T>
   //
   // @return GPS维度
   //============================================================
   @Override
   public double locationLatitude(){
      return _locationLatitude;
   }

   //============================================================
   // <T>设置GPS维度。</T>
   //
   // @return GPS维度
   //============================================================
   public void setLocationLatitude(double locationLatitude){
      _locationLatitude = locationLatitude;
   }

   //============================================================
   // <T>获得项目编号。</T>
   //
   // @return 项目编号
   //============================================================
   @Override
   public long projectId(){
      return _projectId;
   }

   //============================================================
   // <T>设置项目编号。</T>
   //
   // @param projectId 项目编号
   //============================================================
   public void setProjectId(long projectId){
      _projectId = projectId;
   }

   //============================================================
   // <T>获得会话信息。</T>
   //
   // @return 会话信息
   //============================================================
   @Override
   public FGcSessionInfo sessionInfo(){
      return _sessionInfo;
   }

   //============================================================
   // <T>加载数据单元信息。</T>
   //
   // @param unit 数据单元
   //============================================================
   @Override
   public void loadInfo(FGcSessionInfo info){
      // 设置会话
      _sessionInfo = info;
      super.loadInfo(info);
      // 加载信息
      _applicationId = info.applicationId();
      _roleId = info.roleId();
      _roleCode = info.roleCode();
      _roleModules = info.roleModules();
      if(_roleModules != null){
         _roleModuleCodes = RString.split(_roleModules, '|');
      }
      _locationLongitude = info.locationLongitude();
      _locationLatitude = info.locationLatitude();
   }

   //============================================================
   // <T>保存会话数据。</T>
   //
   // @param info 会话数据
   //============================================================
   @Override
   public void saveInfo(FGcSessionInfo info){
      super.saveInfo(info);
      // 保存信息
      info.setApplicationId(_applicationId);
   }
}
