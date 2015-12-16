package org.mo.web.core.webform.control;

import org.mo.com.xml.IXmlObject;

//============================================================
// <T>处理状态控件接口对象的XML节点基类。</T>
//============================================================
public interface XDescProcessStatusFace
      extends
         IXmlObject
{
   // 名称定义
   String NAME = "MDescProcessStatus";

   // 处理级别颜色的名称定义
   String PTY_LEVEL_COLORS = "level_colors";

   // 处理级别图片的名称定义
   String PTY_LEVEL_IMAGES = "level_images";

   // 级别显示起始位置的名称定义
   String PTY_STEP_START = "step_start";

   // 单个级别显示宽度的名称定义
   String PTY_STEP_WIDTH = "step_width";

   // 显示级别的个数的名称定义
   String PTY_STEP_COUNT = "step_count";

   //============================================================
   // <T>获得处理级别颜色的内容。</T>
   //
   // @return 处理级别颜色
   //============================================================
   String getLevelColors();

   //============================================================
   // <T>设置处理级别颜色的内容。</T>
   //
   // @param value 处理级别颜色
   //============================================================
   void setLevelColors(String value);

   //============================================================
   // <T>获得处理级别图片的内容。</T>
   //
   // @return 处理级别图片
   //============================================================
   String getLevelImages();

   //============================================================
   // <T>设置处理级别图片的内容。</T>
   //
   // @param value 处理级别图片
   //============================================================
   void setLevelImages(String value);

   //============================================================
   // <T>获得级别显示起始位置的内容。</T>
   //
   // @return 级别显示起始位置
   //============================================================
   String getStepStart();

   //============================================================
   // <T>设置级别显示起始位置的内容。</T>
   //
   // @param value 级别显示起始位置
   //============================================================
   void setStepStart(String value);

   //============================================================
   // <T>获得单个级别显示宽度的内容。</T>
   //
   // @return 单个级别显示宽度
   //============================================================
   String getStepWidth();

   //============================================================
   // <T>设置单个级别显示宽度的内容。</T>
   //
   // @param value 单个级别显示宽度
   //============================================================
   void setStepWidth(String value);

   //============================================================
   // <T>获得显示级别的个数的内容。</T>
   //
   // @return 显示级别的个数
   //============================================================
   String getStepCount();

   //============================================================
   // <T>设置显示级别的个数的内容。</T>
   //
   // @param value 显示级别的个数
   //============================================================
   void setStepCount(String value);
}
