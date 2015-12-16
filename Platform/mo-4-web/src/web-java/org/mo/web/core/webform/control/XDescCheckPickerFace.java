package org.mo.web.core.webform.control;

import org.mo.com.xml.IXmlObject;

//============================================================
// <T>多选下拉列表对象的XML节点基类。</T>
//============================================================
public interface XDescCheckPickerFace
      extends
         IXmlObject
{
   // 名称定义
   String NAME = "MDescCheckPicker";

   // 允许空值的名称定义
   String PTY_EDIT_EMPTY = "edit_empty";

   // 编辑引用的名称定义
   String PTY_EDIT_REFER = "edit_refer";

   // 可输入的名称定义
   String PTY_EDIT_CHECK = "edit_check";

   //============================================================
   // <T>获得允许空值的内容。</T>
   //
   // @return 允许空值
   //============================================================
   Boolean getEditEmpty();

   //============================================================
   // <T>设置允许空值的内容。</T>
   //
   // @param value 允许空值
   //============================================================
   void setEditEmpty(Boolean value);

   //============================================================
   // <T>获得编辑引用的内容。</T>
   //
   // @return 编辑引用
   //============================================================
   String getEditRefer();

   //============================================================
   // <T>设置编辑引用的内容。</T>
   //
   // @param value 编辑引用
   //============================================================
   void setEditRefer(String value);

   //============================================================
   // <T>获得可输入的内容。</T>
   //
   // @return 可输入
   //============================================================
   String getEditCheck();

   //============================================================
   // <T>设置可输入的内容。</T>
   //
   // @param value 可输入
   //============================================================
   void setEditCheck(String value);
}
