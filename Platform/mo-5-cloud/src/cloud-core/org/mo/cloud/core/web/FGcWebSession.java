package org.mo.cloud.core.web;

import org.mo.cloud.logic.data.system.FGcSessionInfo;
import org.mo.web.core.session.FWebSession;

//============================================================
// <T>会话信息。</T>
//============================================================
public class FGcWebSession
      extends FWebSession
      implements
         IGcWebSession
{
   // 序列化编号
   private static final long serialVersionUID = 1L;

   // 记录编号
   protected long _recordId;

   // 用户编号
   protected long _userId;

   // 用户标签
   protected String _userLabel;

   //============================================================
   // <T>记录编号。</T>
   //
   // @return 记录编号
   //============================================================
   @Override
   public long recordId(){
      return _recordId;
   }

   //============================================================
   // <T>获得用户编号。</T>
   //
   // @return 用户编号
   //============================================================
   @Override
   public long userId(){
      return _userId;
   }

   //============================================================
   // <T>设置用户编号。</T>
   //
   // @param userId 用户编号
   //============================================================
   public void setUserId(long userId){
      _userId = userId;
   }

   //============================================================
   // <T>获得用户标签。</T>
   //
   // @return 用户标签
   //============================================================
   @Override
   public String userLabel(){
      return _userLabel;
   }

   //============================================================
   // <T>设置用户标签。</T>
   //
   // @param userLabel 用户标签
   //============================================================
   public void setUserLabel(String userLabel){
      _userLabel = userLabel;
   }

   //============================================================
   // <T>获得用户信息。</T>
   //
   // @return 用户信息
   //============================================================
   //   public FGcUserInfo userInfo(){
   //      return _userInfo;
   //   }

   //============================================================
   // <T>加载会话数据。</T>
   //
   // @param info 会话数据
   //============================================================
   public void loadInfo(FGcSessionInfo info){
      // 加载信息
      _recordId = info.ouid();
      _id = info.guid();
      _fromCode = info.fromCode();
      _userId = info.userId();
      _userLabel = info.userLabel();
   }

   //============================================================
   // <T>保存会话数据。</T>
   //
   // @param info 会话数据
   //============================================================
   public void saveInfo(FGcSessionInfo info){
      // 保存信息
      info.setFromCode(_fromCode);
      info.setUserId(_userId);
      info.setUserLabel(_userLabel);
   }
}
