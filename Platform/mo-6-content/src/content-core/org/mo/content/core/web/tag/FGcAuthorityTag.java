package org.mo.content.core.web.tag;

import org.mo.com.lang.RString;
import org.mo.content.core.web.FGcSession;
import org.mo.web.tag.common.FAbstractTag;

//============================================================
// <T>权限标签。</T>
//============================================================
public class FGcAuthorityTag
      extends FAbstractTag
{
   // 来源
   protected String _source;

   // 角色
   protected String _role;

   // 模块
   protected String _module;

   //============================================================
   // <T>设置来源。</T>
   //
   // @param role 来源
   //============================================================
   public void setSource(String source){
      _source = source;
   }

   //============================================================
   // <T>设置角色。</T>
   //
   // @param role 角色
   //============================================================
   public void setRole(String role){
      _role = role;
   }

   //============================================================
   // <T>设置模块。</T>
   //
   // @param module 模块
   //============================================================
   public void setModule(String module){
      _module = module;
   }

   //============================================================
   // <T>标签开始处理。</T>
   //============================================================
   @Override
   public int onStart(){
      if(RString.isEmpty(_source)){
         // 检查会话
         FGcSession session = (FGcSession)_context.session();
         if(session == null){
            return SKIP_BODY;
         }
         // 检查角色代码
         if(!RString.isEmpty(_role)){
            if(!_role.equals(session.roleCode())){
               return SKIP_BODY;
            }
         }
         // 检查角色代码
         if(!RString.isEmpty(_module)){
            boolean roleExists = false;
            String roleModules = "|" + session.roleModules() + "|";
            String[] moduleCodes = RString.split(_module, '|');
            for(String moduleCode : moduleCodes){
               if(!RString.isEmpty(moduleCode)){
                  if(roleModules.contains("|" + moduleCode + "|")){
                     roleExists = true;
                     break;
                  }
               }
            }
            if(!roleExists){
               return SKIP_BODY;
            }
         }
      }else{
         if(RString.isEmpty(_module)){
            return SKIP_BODY;
         }
         String modules = "|" + _context.parseString(_source) + "|";
         if(!modules.contains("|" + _module + "|")){
            return SKIP_BODY;
         }
      }
      // 返回成功
      return EVAL_BODY_INCLUDE;
   }

   //============================================================
   // <T>标签结束处理。</T>
   //============================================================
   @Override
   public int onEnd(){
      return EVAL_PAGE;
   }

}
