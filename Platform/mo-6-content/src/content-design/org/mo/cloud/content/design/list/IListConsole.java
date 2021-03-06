package org.mo.cloud.content.design.list;

import org.mo.cloud.content.design.common.IContentConsole;
import org.mo.cloud.content.design.configuration.FContentObject;
import org.mo.cloud.content.design.list.common.XList;
import org.mo.cloud.content.design.persistence.EPersistenceMode;

//============================================================
// <T>列表控制台接口。</T>
//============================================================
public interface IListConsole
      extends
         IContentConsole
{
   //============================================================
   // <T>获得列表集合。</T>
   //
   // @param storgeName 存储名称
   // @return 列表集合
   //============================================================
   XList[] list(String storgeName);

   //============================================================
   // <T>根据名称获得列表。</T>
   //
   // @param storgeName 存储名称
   // @param listName 列表名称
   // @return 列表
   //============================================================
   XList find(String storgeName,
              String listName,
              EPersistenceMode modeCd);

   //============================================================
   // <T>根据名称获得列表定义。</T>
   //
   // @param storgeName 存储名称
   // @param listName 表单名称
   // @param modeCd 模式类型
   // @return 表单
   //============================================================
   FContentObject findDefine(String storgeName,
                             String listName,
                             EPersistenceMode modeCd);

   //============================================================
   // <T>新建列表配置。</T>
   //
   // @param storgeName 存储名称
   // @param contentObject 配置对象
   //============================================================
   void insert(String storgeName,
               FContentObject contentObject);

   //============================================================
   // <T>更新列表配置。</T>
   //
   // @param storgeName 存储名称
   // @param contentObject 配置对象
   //============================================================
   void update(String storgeName,
               FContentObject contentObject);

   //============================================================
   // <T>删除列表配置。</T>
   //
   // @param storgeName 存储名称
   // @param contentObject 配置对象
   //============================================================
   void delete(String storgeName,
               FContentObject contentObject);
}
