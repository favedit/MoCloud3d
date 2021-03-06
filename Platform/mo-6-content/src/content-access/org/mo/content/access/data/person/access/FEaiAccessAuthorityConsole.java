package org.mo.content.access.data.person.access;

import org.mo.cloud.core.database.FAbstractLogicUnitConsole;
import org.mo.cloud.data.data.FDataPersonAccessAuthorityLogic;
import org.mo.cloud.data.data.FDataPersonUserEntryUnit;
import org.mo.cloud.define.enums.core.EGcAuthorityAccess;
import org.mo.cloud.define.enums.core.EGcAuthorityResult;
import org.mo.cloud.define.enums.core.EGcAuthorityType;
import org.mo.com.data.FSql;
import org.mo.com.encoding.RSha1;
import org.mo.com.lang.FFatalError;
import org.mo.com.lang.RDateTime;
import org.mo.com.lang.RString;
import org.mo.com.logging.ILogger;
import org.mo.com.logging.RLogger;
import org.mo.content.access.data.person.user.IEaiUserEntryConsole;
import org.mo.core.aop.face.ALink;
import org.mo.core.aop.face.AProperty;
import org.mo.data.logic.ILogicContext;

//============================================================
// <T>数据人员访问授权信息控制台。</T>
//============================================================
public class FEaiAccessAuthorityConsole
      extends FAbstractLogicUnitConsole<FDataPersonAccessAuthorityLogic, FEaiAccessAuthorityInfo>
      implements
         IEaiAccessAuthorityConsole
{
   private static ILogger _logger = RLogger.find(FEaiAccessAuthorityConsole.class);

   @AProperty
   protected boolean _oaLoginEnable;

   @AProperty
   protected String _oaLoginUrl;

   @ALink
   protected IEaiUserEntryConsole _endtryConsole;

   //============================================================
   // <T>构造数据人员访问授权信息控制台。</T>
   //============================================================
   public FEaiAccessAuthorityConsole(){
      super(FDataPersonAccessAuthorityLogic.class, FEaiAccessAuthorityInfo.class);
   }

   //============================================================
   // <T>根据登录账号信息查找授权信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param passport 登录账号
   // @return 授权信息
   //============================================================
   @Override
   public FEaiAccessAuthorityInfo findByPassport(ILogicContext logicContext,
                                                 String passport){
      FEaiAccessAuthorityInfo authority = null;
      if(!RString.isEmpty(passport)){
         FSql whereSql = new FSql(FDataPersonAccessAuthorityLogic.PASSPORT + "={passport}");
         whereSql.bindString("passport", passport);
         authority = search(logicContext, whereSql);
      }
      return authority;
   }

   //============================================================
   // <T>根据主机地址查找授权信息。</T>
   //
   // @param logicContext 逻辑环境
   // @param hostAddress 网络地址
   // @return 授权信息
   //============================================================
   @Override
   public FEaiAccessAuthorityInfo findByHostAddress(ILogicContext logicContext,
                                                    String hostAddress){
      FEaiAccessAuthorityInfo authority = null;
      if(!RString.isEmpty(hostAddress)){
         FSql whereSql = new FSql(FDataPersonAccessAuthorityLogic.HOST_ADDRESS + "={host_address}");
         whereSql.bindString("host_address", hostAddress);
         authority = search(logicContext, whereSql);
      }
      return authority;
   }

   //============================================================
   // <T>请求OA登录接口</T>
   //
   // @param url 接口链接
   // @param passport 用户名
   // @param password 密码
   // @return 登录结果（0：验证成功，1：签名不通过，2：参数不完整，3：用户名或密码错误，98：IP不在白名单中，99：系统异常）
   //============================================================
   @Override
   public String oaLogin(String passport,
                         String password){
      //      //设置参数
      //      String key = "ycjt*&^%$3fyg";
      //      String encodePassport = ThreeDes.encode(key, passport);
      //      String encodePassword = ThreeDes.encode(key, password);
      //      String appDate = String.valueOf(new Date().getTime());
      //      String from = "H5";
      //      String validate = RMd5.encode(encodePassport + encodePassword + appDate + from + key);
      //      // 拼装参数
      //      String parem = null;
      //      try{
      //         parem = "?username=" + URLEncoder.encode(encodePassport, "utf-8") + "&pwd=" + URLEncoder.encode(encodePassword, "utf-8") + "&appDate=" + appDate + "&from=" + from + "&validate=" + validate;
      //      }catch(Exception error){
      //         _logger.error(null, "oaLogin", error, "ROALoginUnit oaLogin", "OA login fail.");
      //      }
      //      _logger.debug(null, "ROALoginUnit oaLogin", "OA login. (url={1})", _oaLoginUrl + parem);
      //      // 发送请求
      //      String result = null;
      //      try(FHttpConnection connection = new FHttpConnection(_oaLoginUrl + parem)){
      //         result = connection.fetch();
      //      }
      //      return RString.trim(result);
      return "0";
   }

   //============================================================
   // <T>根据登录账号信息登录。</T>
   //
   // @param logicContext 逻辑环境
   // @param hostAddress 主机地址
   // @param passport 登录账号
   // @param password 登录密码
   // @return 登录结果
   //============================================================
   @Override
   public int doLogin(ILogicContext logicContext,
                      String passport,
                      String password){
      _logger.debug(this, "doLogin", "Login process. (passport={1}, password={2})", passport, password);
      if(RString.isEmpty(passport) || passport.indexOf("'") > -1 || passport.indexOf("%") > -1 || passport.length() > 18){
         _logger.debug(this, "doLogin", "Login passport illegal. (passport={1})", passport);
         return EGcAuthorityResult.PassportIllegal;
      }
      if(RString.isEmpty(password) || password.indexOf("'") > -1 || password.indexOf("%") > -1 || password.indexOf(";") > -1 || passport.length() > 32){
         _logger.debug(this, "doLogin", "Login password illegal. (password={1})", password);
         return EGcAuthorityResult.PasswordIllegal;
      }
      // 根据账号密码检查设置
      FEaiAccessAuthorityInfo passportAuthority = findByPassport(logicContext, passport);
      if(passportAuthority == null){
         if(_oaLoginEnable){
            // OA用户检测
            String oaLoginResult = oaLogin(passport, password);
            _logger.debug(this, "doLogin", "OA login. (passport={1}, result={2})", passport, oaLoginResult);
            // OA登录失败，从同步表中登录
            if(!oaLoginResult.equals("0")){
               if(entryLogin(logicContext, passport, password)){
                  return EGcAuthorityResult.Success;
               }
            }
            // 0:验证成功，1:签名不通过，3:用户名或密码错误，98:IP不在白名单中
            if(oaLoginResult.equals("0")){
               if(password.length() < 6){
                  _logger.debug(this, "doLogin", "Login password length fial. (password={1})", password);
                  return EGcAuthorityResult.PasswordLengthFail;
               }
               return EGcAuthorityResult.OaSuccess;
            }else if(oaLoginResult.equals("3")){
               return EGcAuthorityResult.OaPasswordInvald;
            }else if(oaLoginResult.equals("98")){
               return EGcAuthorityResult.OaHostInvalid;
            }
         }
         return EGcAuthorityResult.PassportInvalid;
      }
      // 检查密码
      if(!password.equals(passportAuthority.password())){
         return EGcAuthorityResult.PasswordInvalid;
      }
      // 检查权限
      if(passportAuthority.accessCd() != EGcAuthorityAccess.Allow){
         return EGcAuthorityResult.PasswordInvalid;
      }
      // 检查类型
      int typeCd = passportAuthority.typeCd();
      if(typeCd == EGcAuthorityType.Permanent){
         return EGcAuthorityResult.Success;
      }else if(typeCd == EGcAuthorityType.Temporary){
         long current = RDateTime.currentDateTime().get();
         long begin = passportAuthority.beginDate().get();
         long end = passportAuthority.endDate().get();
         _logger.debug(this, "doLogin", "Date span check. (current={1}, begin={2}, end={3})", current, begin, end);
         if((current >= begin) && (current < end)){
            return EGcAuthorityResult.Success;
         }else{
            return EGcAuthorityResult.DateInvalid;
         }
      }else{
         throw new FFatalError("Invalid type.");
      }
   }

   //============================================================
   // <T>请求本系统服务器登录</T>
   //
   // @param url 接口链接
   // @param passport 用户名
   // @param password 密码
   // @return 登录结果（0：验证成功，3：用户名或密码错误，99：系统异常）
   //============================================================
   @Override
   public boolean entryLogin(ILogicContext logicContext,
                             String passport,
                             String password){
      _logger.debug(this, "EntryLogin", "EntryLogin . (passport={1}, password={2})", passport, password);
      FDataPersonUserEntryUnit entry = _endtryConsole.findByPassport(logicContext, passport);
      if(entry == null){
         return false;
      }
      password = RSha1.encode(password);
      if(!password.equals(entry.password())){
         return false;
      }
      return true;
   }

   //============================================================
   // <T>根据登录账号信息登录。</T>
   //
   // @param logicContext 逻辑环境
   // @param hostAddress 主机地址
   // @param passport 登录账号
   // @param password 登录密码
   // @return 登录结果
   //============================================================
   @Override
   public int cockpitDoLogin(ILogicContext logicContext,
                             String passport,
                             String password){
      _logger.debug(this, "doLogin", "Login process. (passport={1}, password={2})", passport, password);
      if(RString.isEmpty(passport) || passport.indexOf("'") > -1 || passport.indexOf("%") > -1 || passport.length() > 18){
         _logger.debug(this, "doLogin", "Login passport illegal. (passport={1})", passport);
         return EGcAuthorityResult.PassportIllegal;
      }
      if(RString.isEmpty(password) || password.indexOf("'") > -1 || password.indexOf("%") > -1 || password.indexOf(";") > -1 || passport.length() > 32){
         _logger.debug(this, "doLogin", "Login password illegal. (password={1})", password);
         return EGcAuthorityResult.PasswordIllegal;
      }
      // 根据账号密码检查设置
      if(_oaLoginEnable){
         // OA用户检测
         String oaLoginResult = oaLogin(passport, password);
         _logger.debug(this, "doLogin", "OA login. (passport={1}, result={2})", passport, oaLoginResult);
         // 0:验证成功，1:签名不通过，3:用户名或密码错误，98:IP不在白名单中
         if(oaLoginResult.equals("0")){
            if(password.length() < 1){
               _logger.debug(this, "doLogin", "Login password length fial. (password={1})", password);
               return EGcAuthorityResult.PasswordLengthFail;
            }
            return EGcAuthorityResult.OaSuccess;
         }else if(oaLoginResult.equals("3")){
            return EGcAuthorityResult.OaPasswordInvald;
         }else if(oaLoginResult.equals("98")){
            return EGcAuthorityResult.OaHostInvalid;
         }
      }
      return EGcAuthorityResult.PassportInvalid;

   }
}
