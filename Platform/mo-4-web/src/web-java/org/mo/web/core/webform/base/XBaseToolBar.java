package org.mo.web.core.webform.base;

import org.mo.com.lang.FMultiString;
import org.mo.com.lang.RBoolean;
import org.mo.com.lang.RString;
import org.mo.com.lang.face.AName;
import org.mo.com.xml.EXmlConfig;
import org.mo.com.xml.FXmlNode;
import org.mo.com.xml.FXmlObject;
import org.mo.com.xml.IXmlObject;
import org.mo.web.core.webform.control.XControlFace;

//============================================================
// <T>工具栏对象的XML节点基类。</T>
//============================================================
public abstract class XBaseToolBar
      extends FXmlObject
      implements
         XControlFace
{
   // 名称定义
   public static final String NAME = "ToolBar";

   //============================================================
   // <T>获得名称定义。</T>
   //
   // @return 名称定义
   //============================================================
   public String name(){
      return NAME;
   }

   //============================================================
   // <T>判断是否指定名称。</T>
   //
   // @param name 名称
   // @return 是否指定
   //============================================================
   public static boolean isName(String name){
      return NAME.equals(name);
   }

   //============================================================
   // <T>判断是否指定实例。</T>
   //
   // @param xobject 对象
   // @return 是否指定
   //============================================================
   public static boolean isInstance(IXmlObject xobject){
      return NAME.equals(xobject.name());
   }

   // 名称的名称定义
   public static final String PTY_NAME = "name";

   // 标签的名称定义
   public static final String PTY_LABEL = "label";

   // 有效性的名称定义
   public static final String PTY_IS_VALID = "is_valid";

   // 注释的名称定义
   public static final String PTY_NOTE = "note";

   // 显示模式的名称定义
   public static final String PTY_DISP_MODE = "disp_mode";

   // 显示设置的名称定义
   public static final String PTY_DISP_CONFIG = "disp_config";

   // 查询的名称定义
   public static final String PTY_DISP_FETCH = "disp_fetch";

   // 搜索显示的名称定义
   public static final String PTY_DISP_SEARCH = "disp_search";

   // 选取显示的名称定义
   public static final String PTY_DISP_PICKER = "disp_picker";

   // LOV显示的名称定义
   public static final String PTY_DISP_LOV = "disp_lov";

   // 放大显示的名称定义
   public static final String PTY_DISP_ZOOM = "disp_zoom";

   // 列表显示的名称定义
   public static final String PTY_DISP_LIST = "disp_list";

   // 显示显示的名称定义
   public static final String PTY_DISP_DISPLAY = "disp_display";

   // 新建显示的名称定义
   public static final String PTY_DISP_INSERT = "disp_insert";

   // 更新显示的名称定义
   public static final String PTY_DISP_UPDATE = "disp_update";

   // 删除显示的名称定义
   public static final String PTY_DISP_DELETE = "disp_delete";

   // 自动调整的名称定义
   public static final String PTY_DISP_AUTO = "disp_auto";

   // 可变大小的名称定义
   public static final String PTY_DISP_SIZE = "disp_size";

   // 可被拖拽的名称定义
   public static final String PTY_DISP_DRAG = "disp_drag";

   // 印刷显示的名称定义
   public static final String PTY_DISP_PRINT = "disp_print";

   // 左空余的名称定义
   public static final String PTY_PAD_LEFT = "pad_left";

   // 上空余的名称定义
   public static final String PTY_PAD_TOP = "pad_top";

   // 下空余的名称定义
   public static final String PTY_PAD_BOTTOM = "pad_bottom";

   // 右空余的名称定义
   public static final String PTY_PAD_RIGHT = "pad_right";

   // 左位置的名称定义
   public static final String PTY_LEFT = "left";

   // 上位置的名称定义
   public static final String PTY_TOP = "top";

   // 右位置的名称定义
   public static final String PTY_RIGHT = "right";

   // 下位置的名称定义
   public static final String PTY_BOTTOM = "bottom";

   // 宽度的名称定义
   public static final String PTY_WIDTH = "width";

   // 高度的名称定义
   public static final String PTY_HEIGHT = "height";

   // 无回行的名称定义
   public static final String PTY_NOWRAP = "nowrap";

   // 状态栏提示的名称定义
   public static final String PTY_HINT = "hint";

   // 控件样式的名称定义
   public static final String PTY_STYLE_REFER = "style_refer";

   // 标签样式的名称定义
   public static final String PTY_STYLE_LABEL = "style_label";

   // 编辑样式的名称定义
   public static final String PTY_STYLE_EDIT = "style_edit";

   // 版本的名称定义
   public static final String PTY_VERSION = "version";

   // 是否合并工具栏的名称定义
   public static final String PTY_IS_MERGE = "is_merge";

   // 名称的定义
   @AName("name")
   protected String _name;

   // 标签的定义
   @AName("label")
   protected FMultiString _label = new FMultiString();

   // 有效性的定义
   @AName("is_valid")
   protected Boolean _isValid = Boolean.FALSE;

   // 注释的定义
   @AName("note")
   protected FMultiString _note = new FMultiString();

   // 查询的定义
   @AName("disp_fetch")
   protected Boolean _dispFetch = Boolean.FALSE;

   // 搜索显示的定义
   @AName("disp_search")
   protected Boolean _dispSearch = Boolean.FALSE;

   // 选取显示的定义
   @AName("disp_picker")
   protected Boolean _dispPicker = Boolean.FALSE;

   // LOV显示的定义
   @AName("disp_lov")
   protected Boolean _dispLov = Boolean.FALSE;

   // 放大显示的定义
   @AName("disp_zoom")
   protected Boolean _dispZoom = Boolean.FALSE;

   // 列表显示的定义
   @AName("disp_list")
   protected Boolean _dispList = Boolean.FALSE;

   // 显示显示的定义
   @AName("disp_display")
   protected Boolean _dispDisplay = Boolean.FALSE;

   // 新建显示的定义
   @AName("disp_insert")
   protected Boolean _dispInsert = Boolean.FALSE;

   // 更新显示的定义
   @AName("disp_update")
   protected Boolean _dispUpdate = Boolean.FALSE;

   // 删除显示的定义
   @AName("disp_delete")
   protected Boolean _dispDelete = Boolean.FALSE;

   // 自动调整的定义
   @AName("disp_auto")
   protected Boolean _dispAuto = Boolean.FALSE;

   // 可变大小的定义
   @AName("disp_size")
   protected Boolean _dispSize = Boolean.FALSE;

   // 可被拖拽的定义
   @AName("disp_drag")
   protected Boolean _dispDrag = Boolean.FALSE;

   // 印刷显示的定义
   @AName("disp_print")
   protected Boolean _dispPrint = Boolean.FALSE;

   // 左空余的定义
   @AName("pad_left")
   protected String _padLeft;

   // 上空余的定义
   @AName("pad_top")
   protected String _padTop;

   // 下空余的定义
   @AName("pad_bottom")
   protected String _padBottom;

   // 右空余的定义
   @AName("pad_right")
   protected String _padRight;

   // 左位置的定义
   @AName("left")
   protected String _left;

   // 上位置的定义
   @AName("top")
   protected String _top;

   // 右位置的定义
   @AName("right")
   protected String _right;

   // 下位置的定义
   @AName("bottom")
   protected String _bottom;

   // 宽度的定义
   @AName("width")
   protected String _width;

   // 高度的定义
   @AName("height")
   protected String _height;

   // 无回行的定义
   @AName("nowrap")
   protected Boolean _nowrap = Boolean.FALSE;

   // 状态栏提示的定义
   @AName("hint")
   protected String _hint;

   // 控件样式的定义
   @AName("style_refer")
   protected String _styleRefer;

   // 标签样式的定义
   @AName("style_label")
   protected String _styleLabel;

   // 编辑样式的定义
   @AName("style_edit")
   protected String _styleEdit;

   // 版本的定义
   @AName("version")
   protected String _version;

   // 是否合并工具栏的定义
   @AName("is_merge")
   protected Boolean _isMerge = Boolean.FALSE;

   //============================================================
   // <T>获得名称的内容。</T>
   //
   // @return 名称
   //============================================================
   public String getName(){
      return _name;
   }

   //============================================================
   // <T>设置名称的内容。</T>
   //
   // @param value 名称
   //============================================================
   public void setName(String value){
      _name = value;
   }

   //============================================================
   // <T>获得标签的内容。</T>
   //
   // @return 标签
   //============================================================
   public String getLabel(){
      return _label.get();
   }

   //============================================================
   // <T>设置标签的内容。</T>
   //
   // @param value 标签
   //============================================================
   public void setLabel(String value){
      _label.set(value);
   }

   //============================================================
   // <T>获得有效性的内容。</T>
   //
   // @return 有效性
   //============================================================
   public Boolean getIsValid(){
      return _isValid;
   }

   //============================================================
   // <T>设置有效性的内容。</T>
   //
   // @param value 有效性
   //============================================================
   public void setIsValid(Boolean value){
      _isValid = value;
   }

   //============================================================
   // <T>获得注释的内容。</T>
   //
   // @return 注释
   //============================================================
   public String getNote(){
      return _note.get();
   }

   //============================================================
   // <T>设置注释的内容。</T>
   //
   // @param value 注释
   //============================================================
   public void setNote(String value){
      _note.set(value);
   }

   //============================================================
   // <T>获得显示模式的内容。</T>
   //
   // @return 显示模式
   //============================================================
   public abstract String getDispMode();

   //============================================================
   // <T>设置显示模式的内容。</T>
   //
   // @param value 显示模式
   //============================================================
   public abstract void setDispMode(String value);

   //============================================================
   // <T>获得显示设置的内容。</T>
   //
   // @return 显示设置
   //============================================================
   public abstract String getDispConfig();

   //============================================================
   // <T>设置显示设置的内容。</T>
   //
   // @param value 显示设置
   //============================================================
   public abstract void setDispConfig(String value);

   //============================================================
   // <T>获得查询的内容。</T>
   //
   // @return 查询
   //============================================================
   public Boolean getDispFetch(){
      return _dispFetch;
   }

   //============================================================
   // <T>设置查询的内容。</T>
   //
   // @param value 查询
   //============================================================
   public void setDispFetch(Boolean value){
      _dispFetch = value;
   }

   //============================================================
   // <T>获得搜索显示的内容。</T>
   //
   // @return 搜索显示
   //============================================================
   public Boolean getDispSearch(){
      return _dispSearch;
   }

   //============================================================
   // <T>设置搜索显示的内容。</T>
   //
   // @param value 搜索显示
   //============================================================
   public void setDispSearch(Boolean value){
      _dispSearch = value;
   }

   //============================================================
   // <T>获得选取显示的内容。</T>
   //
   // @return 选取显示
   //============================================================
   public Boolean getDispPicker(){
      return _dispPicker;
   }

   //============================================================
   // <T>设置选取显示的内容。</T>
   //
   // @param value 选取显示
   //============================================================
   public void setDispPicker(Boolean value){
      _dispPicker = value;
   }

   //============================================================
   // <T>获得LOV显示的内容。</T>
   //
   // @return LOV显示
   //============================================================
   public Boolean getDispLov(){
      return _dispLov;
   }

   //============================================================
   // <T>设置LOV显示的内容。</T>
   //
   // @param value LOV显示
   //============================================================
   public void setDispLov(Boolean value){
      _dispLov = value;
   }

   //============================================================
   // <T>获得放大显示的内容。</T>
   //
   // @return 放大显示
   //============================================================
   public Boolean getDispZoom(){
      return _dispZoom;
   }

   //============================================================
   // <T>设置放大显示的内容。</T>
   //
   // @param value 放大显示
   //============================================================
   public void setDispZoom(Boolean value){
      _dispZoom = value;
   }

   //============================================================
   // <T>获得列表显示的内容。</T>
   //
   // @return 列表显示
   //============================================================
   public Boolean getDispList(){
      return _dispList;
   }

   //============================================================
   // <T>设置列表显示的内容。</T>
   //
   // @param value 列表显示
   //============================================================
   public void setDispList(Boolean value){
      _dispList = value;
   }

   //============================================================
   // <T>获得显示显示的内容。</T>
   //
   // @return 显示显示
   //============================================================
   public Boolean getDispDisplay(){
      return _dispDisplay;
   }

   //============================================================
   // <T>设置显示显示的内容。</T>
   //
   // @param value 显示显示
   //============================================================
   public void setDispDisplay(Boolean value){
      _dispDisplay = value;
   }

   //============================================================
   // <T>获得新建显示的内容。</T>
   //
   // @return 新建显示
   //============================================================
   public Boolean getDispInsert(){
      return _dispInsert;
   }

   //============================================================
   // <T>设置新建显示的内容。</T>
   //
   // @param value 新建显示
   //============================================================
   public void setDispInsert(Boolean value){
      _dispInsert = value;
   }

   //============================================================
   // <T>获得更新显示的内容。</T>
   //
   // @return 更新显示
   //============================================================
   public Boolean getDispUpdate(){
      return _dispUpdate;
   }

   //============================================================
   // <T>设置更新显示的内容。</T>
   //
   // @param value 更新显示
   //============================================================
   public void setDispUpdate(Boolean value){
      _dispUpdate = value;
   }

   //============================================================
   // <T>获得删除显示的内容。</T>
   //
   // @return 删除显示
   //============================================================
   public Boolean getDispDelete(){
      return _dispDelete;
   }

   //============================================================
   // <T>设置删除显示的内容。</T>
   //
   // @param value 删除显示
   //============================================================
   public void setDispDelete(Boolean value){
      _dispDelete = value;
   }

   //============================================================
   // <T>获得自动调整的内容。</T>
   //
   // @return 自动调整
   //============================================================
   public Boolean getDispAuto(){
      return _dispAuto;
   }

   //============================================================
   // <T>设置自动调整的内容。</T>
   //
   // @param value 自动调整
   //============================================================
   public void setDispAuto(Boolean value){
      _dispAuto = value;
   }

   //============================================================
   // <T>获得可变大小的内容。</T>
   //
   // @return 可变大小
   //============================================================
   public Boolean getDispSize(){
      return _dispSize;
   }

   //============================================================
   // <T>设置可变大小的内容。</T>
   //
   // @param value 可变大小
   //============================================================
   public void setDispSize(Boolean value){
      _dispSize = value;
   }

   //============================================================
   // <T>获得可被拖拽的内容。</T>
   //
   // @return 可被拖拽
   //============================================================
   public Boolean getDispDrag(){
      return _dispDrag;
   }

   //============================================================
   // <T>设置可被拖拽的内容。</T>
   //
   // @param value 可被拖拽
   //============================================================
   public void setDispDrag(Boolean value){
      _dispDrag = value;
   }

   //============================================================
   // <T>获得印刷显示的内容。</T>
   //
   // @return 印刷显示
   //============================================================
   public Boolean getDispPrint(){
      return _dispPrint;
   }

   //============================================================
   // <T>设置印刷显示的内容。</T>
   //
   // @param value 印刷显示
   //============================================================
   public void setDispPrint(Boolean value){
      _dispPrint = value;
   }

   //============================================================
   // <T>获得左空余的内容。</T>
   //
   // @return 左空余
   //============================================================
   public String getPadLeft(){
      return _padLeft;
   }

   //============================================================
   // <T>设置左空余的内容。</T>
   //
   // @param value 左空余
   //============================================================
   public void setPadLeft(String value){
      _padLeft = value;
   }

   //============================================================
   // <T>获得上空余的内容。</T>
   //
   // @return 上空余
   //============================================================
   public String getPadTop(){
      return _padTop;
   }

   //============================================================
   // <T>设置上空余的内容。</T>
   //
   // @param value 上空余
   //============================================================
   public void setPadTop(String value){
      _padTop = value;
   }

   //============================================================
   // <T>获得下空余的内容。</T>
   //
   // @return 下空余
   //============================================================
   public String getPadBottom(){
      return _padBottom;
   }

   //============================================================
   // <T>设置下空余的内容。</T>
   //
   // @param value 下空余
   //============================================================
   public void setPadBottom(String value){
      _padBottom = value;
   }

   //============================================================
   // <T>获得右空余的内容。</T>
   //
   // @return 右空余
   //============================================================
   public String getPadRight(){
      return _padRight;
   }

   //============================================================
   // <T>设置右空余的内容。</T>
   //
   // @param value 右空余
   //============================================================
   public void setPadRight(String value){
      _padRight = value;
   }

   //============================================================
   // <T>获得左位置的内容。</T>
   //
   // @return 左位置
   //============================================================
   public String getLeft(){
      return _left;
   }

   //============================================================
   // <T>设置左位置的内容。</T>
   //
   // @param value 左位置
   //============================================================
   public void setLeft(String value){
      _left = value;
   }

   //============================================================
   // <T>获得上位置的内容。</T>
   //
   // @return 上位置
   //============================================================
   public String getTop(){
      return _top;
   }

   //============================================================
   // <T>设置上位置的内容。</T>
   //
   // @param value 上位置
   //============================================================
   public void setTop(String value){
      _top = value;
   }

   //============================================================
   // <T>获得右位置的内容。</T>
   //
   // @return 右位置
   //============================================================
   public String getRight(){
      return _right;
   }

   //============================================================
   // <T>设置右位置的内容。</T>
   //
   // @param value 右位置
   //============================================================
   public void setRight(String value){
      _right = value;
   }

   //============================================================
   // <T>获得下位置的内容。</T>
   //
   // @return 下位置
   //============================================================
   public String getBottom(){
      return _bottom;
   }

   //============================================================
   // <T>设置下位置的内容。</T>
   //
   // @param value 下位置
   //============================================================
   public void setBottom(String value){
      _bottom = value;
   }

   //============================================================
   // <T>获得宽度的内容。</T>
   //
   // @return 宽度
   //============================================================
   public String getWidth(){
      return _width;
   }

   //============================================================
   // <T>设置宽度的内容。</T>
   //
   // @param value 宽度
   //============================================================
   public void setWidth(String value){
      _width = value;
   }

   //============================================================
   // <T>获得高度的内容。</T>
   //
   // @return 高度
   //============================================================
   public String getHeight(){
      return _height;
   }

   //============================================================
   // <T>设置高度的内容。</T>
   //
   // @param value 高度
   //============================================================
   public void setHeight(String value){
      _height = value;
   }

   //============================================================
   // <T>获得无回行的内容。</T>
   //
   // @return 无回行
   //============================================================
   public Boolean getNowrap(){
      return _nowrap;
   }

   //============================================================
   // <T>设置无回行的内容。</T>
   //
   // @param value 无回行
   //============================================================
   public void setNowrap(Boolean value){
      _nowrap = value;
   }

   //============================================================
   // <T>获得状态栏提示的内容。</T>
   //
   // @return 状态栏提示
   //============================================================
   public String getHint(){
      return _hint;
   }

   //============================================================
   // <T>设置状态栏提示的内容。</T>
   //
   // @param value 状态栏提示
   //============================================================
   public void setHint(String value){
      _hint = value;
   }

   //============================================================
   // <T>获得控件样式的内容。</T>
   //
   // @return 控件样式
   //============================================================
   public String getStyleRefer(){
      return _styleRefer;
   }

   //============================================================
   // <T>设置控件样式的内容。</T>
   //
   // @param value 控件样式
   //============================================================
   public void setStyleRefer(String value){
      _styleRefer = value;
   }

   //============================================================
   // <T>获得标签样式的内容。</T>
   //
   // @return 标签样式
   //============================================================
   public String getStyleLabel(){
      return _styleLabel;
   }

   //============================================================
   // <T>设置标签样式的内容。</T>
   //
   // @param value 标签样式
   //============================================================
   public void setStyleLabel(String value){
      _styleLabel = value;
   }

   //============================================================
   // <T>获得编辑样式的内容。</T>
   //
   // @return 编辑样式
   //============================================================
   public String getStyleEdit(){
      return _styleEdit;
   }

   //============================================================
   // <T>设置编辑样式的内容。</T>
   //
   // @param value 编辑样式
   //============================================================
   public void setStyleEdit(String value){
      _styleEdit = value;
   }

   //============================================================
   // <T>获得版本的内容。</T>
   //
   // @return 版本
   //============================================================
   public String getVersion(){
      return _version;
   }

   //============================================================
   // <T>设置版本的内容。</T>
   //
   // @param value 版本
   //============================================================
   public void setVersion(String value){
      _version = value;
   }

   //============================================================
   // <T>获得是否合并工具栏的内容。</T>
   //
   // @return 是否合并工具栏
   //============================================================
   public Boolean getIsMerge(){
      return _isMerge;
   }

   //============================================================
   // <T>设置是否合并工具栏的内容。</T>
   //
   // @param value 是否合并工具栏
   //============================================================
   public void setIsMerge(Boolean value){
      _isMerge = value;
   }

   //============================================================
   // <T>内部获得内容置信息。</T>
   //
   // @param name 名称
   // @return 内容
   //============================================================
   public String innerGet(String name){
      if(RString.isEmpty(name)){
         return null;
      }else if(PTY_NAME.equalsIgnoreCase(name)){
         return getName();
      }else if(PTY_LABEL.equalsIgnoreCase(name)){
         return getLabel();
      }else if(PTY_IS_VALID.equalsIgnoreCase(name)){
         return RBoolean.toString(getIsValid());
      }else if(PTY_NOTE.equalsIgnoreCase(name)){
         return getNote();
      }else if(PTY_DISP_MODE.equalsIgnoreCase(name)){
         return getDispMode();
      }else if(PTY_DISP_CONFIG.equalsIgnoreCase(name)){
         return getDispConfig();
      }else if(PTY_DISP_FETCH.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispFetch());
      }else if(PTY_DISP_SEARCH.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispSearch());
      }else if(PTY_DISP_PICKER.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispPicker());
      }else if(PTY_DISP_LOV.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispLov());
      }else if(PTY_DISP_ZOOM.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispZoom());
      }else if(PTY_DISP_LIST.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispList());
      }else if(PTY_DISP_DISPLAY.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispDisplay());
      }else if(PTY_DISP_INSERT.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispInsert());
      }else if(PTY_DISP_UPDATE.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispUpdate());
      }else if(PTY_DISP_DELETE.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispDelete());
      }else if(PTY_DISP_AUTO.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispAuto());
      }else if(PTY_DISP_SIZE.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispSize());
      }else if(PTY_DISP_DRAG.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispDrag());
      }else if(PTY_DISP_PRINT.equalsIgnoreCase(name)){
         return RBoolean.toString(getDispPrint());
      }else if(PTY_PAD_LEFT.equalsIgnoreCase(name)){
         return getPadLeft();
      }else if(PTY_PAD_TOP.equalsIgnoreCase(name)){
         return getPadTop();
      }else if(PTY_PAD_BOTTOM.equalsIgnoreCase(name)){
         return getPadBottom();
      }else if(PTY_PAD_RIGHT.equalsIgnoreCase(name)){
         return getPadRight();
      }else if(PTY_LEFT.equalsIgnoreCase(name)){
         return getLeft();
      }else if(PTY_TOP.equalsIgnoreCase(name)){
         return getTop();
      }else if(PTY_RIGHT.equalsIgnoreCase(name)){
         return getRight();
      }else if(PTY_BOTTOM.equalsIgnoreCase(name)){
         return getBottom();
      }else if(PTY_WIDTH.equalsIgnoreCase(name)){
         return getWidth();
      }else if(PTY_HEIGHT.equalsIgnoreCase(name)){
         return getHeight();
      }else if(PTY_NOWRAP.equalsIgnoreCase(name)){
         return RBoolean.toString(getNowrap());
      }else if(PTY_HINT.equalsIgnoreCase(name)){
         return getHint();
      }else if(PTY_STYLE_REFER.equalsIgnoreCase(name)){
         return getStyleRefer();
      }else if(PTY_STYLE_LABEL.equalsIgnoreCase(name)){
         return getStyleLabel();
      }else if(PTY_STYLE_EDIT.equalsIgnoreCase(name)){
         return getStyleEdit();
      }else if(PTY_VERSION.equalsIgnoreCase(name)){
         return getVersion();
      }else if(PTY_IS_MERGE.equalsIgnoreCase(name)){
         return RBoolean.toString(getIsMerge());
      }
      return null;
   }

   //============================================================
   // <T>内部设置内容置信息。</T>
   //
   // @param name 名称
   // @param value 内容
   //============================================================
   public void innerSet(String name,
                        String value){
      if(RString.isEmpty(name)){
         return;
      }else if(PTY_NAME.equalsIgnoreCase(name)){
         setName(value);
      }else if(PTY_LABEL.equalsIgnoreCase(name)){
         setLabel(value);
      }else if(PTY_IS_VALID.equalsIgnoreCase(name)){
         setIsValid(RBoolean.parse(value));
      }else if(PTY_NOTE.equalsIgnoreCase(name)){
         setNote(value);
      }else if(PTY_DISP_MODE.equalsIgnoreCase(name)){
         setDispMode(value);
      }else if(PTY_DISP_CONFIG.equalsIgnoreCase(name)){
         setDispConfig(value);
      }else if(PTY_DISP_FETCH.equalsIgnoreCase(name)){
         setDispFetch(RBoolean.parse(value));
      }else if(PTY_DISP_SEARCH.equalsIgnoreCase(name)){
         setDispSearch(RBoolean.parse(value));
      }else if(PTY_DISP_PICKER.equalsIgnoreCase(name)){
         setDispPicker(RBoolean.parse(value));
      }else if(PTY_DISP_LOV.equalsIgnoreCase(name)){
         setDispLov(RBoolean.parse(value));
      }else if(PTY_DISP_ZOOM.equalsIgnoreCase(name)){
         setDispZoom(RBoolean.parse(value));
      }else if(PTY_DISP_LIST.equalsIgnoreCase(name)){
         setDispList(RBoolean.parse(value));
      }else if(PTY_DISP_DISPLAY.equalsIgnoreCase(name)){
         setDispDisplay(RBoolean.parse(value));
      }else if(PTY_DISP_INSERT.equalsIgnoreCase(name)){
         setDispInsert(RBoolean.parse(value));
      }else if(PTY_DISP_UPDATE.equalsIgnoreCase(name)){
         setDispUpdate(RBoolean.parse(value));
      }else if(PTY_DISP_DELETE.equalsIgnoreCase(name)){
         setDispDelete(RBoolean.parse(value));
      }else if(PTY_DISP_AUTO.equalsIgnoreCase(name)){
         setDispAuto(RBoolean.parse(value));
      }else if(PTY_DISP_SIZE.equalsIgnoreCase(name)){
         setDispSize(RBoolean.parse(value));
      }else if(PTY_DISP_DRAG.equalsIgnoreCase(name)){
         setDispDrag(RBoolean.parse(value));
      }else if(PTY_DISP_PRINT.equalsIgnoreCase(name)){
         setDispPrint(RBoolean.parse(value));
      }else if(PTY_PAD_LEFT.equalsIgnoreCase(name)){
         setPadLeft(value);
      }else if(PTY_PAD_TOP.equalsIgnoreCase(name)){
         setPadTop(value);
      }else if(PTY_PAD_BOTTOM.equalsIgnoreCase(name)){
         setPadBottom(value);
      }else if(PTY_PAD_RIGHT.equalsIgnoreCase(name)){
         setPadRight(value);
      }else if(PTY_LEFT.equalsIgnoreCase(name)){
         setLeft(value);
      }else if(PTY_TOP.equalsIgnoreCase(name)){
         setTop(value);
      }else if(PTY_RIGHT.equalsIgnoreCase(name)){
         setRight(value);
      }else if(PTY_BOTTOM.equalsIgnoreCase(name)){
         setBottom(value);
      }else if(PTY_WIDTH.equalsIgnoreCase(name)){
         setWidth(value);
      }else if(PTY_HEIGHT.equalsIgnoreCase(name)){
         setHeight(value);
      }else if(PTY_NOWRAP.equalsIgnoreCase(name)){
         setNowrap(RBoolean.parse(value));
      }else if(PTY_HINT.equalsIgnoreCase(name)){
         setHint(value);
      }else if(PTY_STYLE_REFER.equalsIgnoreCase(name)){
         setStyleRefer(value);
      }else if(PTY_STYLE_LABEL.equalsIgnoreCase(name)){
         setStyleLabel(value);
      }else if(PTY_STYLE_EDIT.equalsIgnoreCase(name)){
         setStyleEdit(value);
      }else if(PTY_VERSION.equalsIgnoreCase(name)){
         setVersion(value);
      }else if(PTY_IS_MERGE.equalsIgnoreCase(name)){
         setIsMerge(RBoolean.parse(value));
      }
   }

   //============================================================
   // <T>加载设置信息。</T>
   //
   // @param config 设置信息
   // @param type 类型
   //============================================================
   public void loadConfig(FXmlNode config,
                          EXmlConfig type){
      super.loadConfig(config, type);
      if(EXmlConfig.Full == type){
         if(config.contains("name")){
            setName(config.get(PTY_NAME));
         }
         if(config.contains("label")){
            _label.unpack(config.get(PTY_LABEL));
         }
         if(config.contains("is_valid")){
            setIsValid(RBoolean.parse(config.get(PTY_IS_VALID)));
         }
         if(config.contains("note")){
            _note.unpack(config.get(PTY_NOTE));
         }
         if(config.contains("disp_fetch")){
            setDispFetch(RBoolean.parse(config.get(PTY_DISP_FETCH)));
         }
         if(config.contains("disp_search")){
            setDispSearch(RBoolean.parse(config.get(PTY_DISP_SEARCH)));
         }
         if(config.contains("disp_picker")){
            setDispPicker(RBoolean.parse(config.get(PTY_DISP_PICKER)));
         }
         if(config.contains("disp_lov")){
            setDispLov(RBoolean.parse(config.get(PTY_DISP_LOV)));
         }
         if(config.contains("disp_zoom")){
            setDispZoom(RBoolean.parse(config.get(PTY_DISP_ZOOM)));
         }
         if(config.contains("disp_list")){
            setDispList(RBoolean.parse(config.get(PTY_DISP_LIST)));
         }
         if(config.contains("disp_display")){
            setDispDisplay(RBoolean.parse(config.get(PTY_DISP_DISPLAY)));
         }
         if(config.contains("disp_insert")){
            setDispInsert(RBoolean.parse(config.get(PTY_DISP_INSERT)));
         }
         if(config.contains("disp_update")){
            setDispUpdate(RBoolean.parse(config.get(PTY_DISP_UPDATE)));
         }
         if(config.contains("disp_delete")){
            setDispDelete(RBoolean.parse(config.get(PTY_DISP_DELETE)));
         }
         if(config.contains("disp_auto")){
            setDispAuto(RBoolean.parse(config.get(PTY_DISP_AUTO)));
         }
         if(config.contains("disp_size")){
            setDispSize(RBoolean.parse(config.get(PTY_DISP_SIZE)));
         }
         if(config.contains("disp_drag")){
            setDispDrag(RBoolean.parse(config.get(PTY_DISP_DRAG)));
         }
         if(config.contains("disp_print")){
            setDispPrint(RBoolean.parse(config.get(PTY_DISP_PRINT)));
         }
         if(config.contains("pad_left")){
            setPadLeft(config.get(PTY_PAD_LEFT));
         }
         if(config.contains("pad_top")){
            setPadTop(config.get(PTY_PAD_TOP));
         }
         if(config.contains("pad_bottom")){
            setPadBottom(config.get(PTY_PAD_BOTTOM));
         }
         if(config.contains("pad_right")){
            setPadRight(config.get(PTY_PAD_RIGHT));
         }
         if(config.contains("left")){
            setLeft(config.get(PTY_LEFT));
         }
         if(config.contains("top")){
            setTop(config.get(PTY_TOP));
         }
         if(config.contains("right")){
            setRight(config.get(PTY_RIGHT));
         }
         if(config.contains("bottom")){
            setBottom(config.get(PTY_BOTTOM));
         }
         if(config.contains("width")){
            setWidth(config.get(PTY_WIDTH));
         }
         if(config.contains("height")){
            setHeight(config.get(PTY_HEIGHT));
         }
         if(config.contains("nowrap")){
            setNowrap(RBoolean.parse(config.get(PTY_NOWRAP)));
         }
         if(config.contains("hint")){
            setHint(config.get(PTY_HINT));
         }
         if(config.contains("style_refer")){
            setStyleRefer(config.get(PTY_STYLE_REFER));
         }
         if(config.contains("style_label")){
            setStyleLabel(config.get(PTY_STYLE_LABEL));
         }
         if(config.contains("style_edit")){
            setStyleEdit(config.get(PTY_STYLE_EDIT));
         }
         if(config.contains("version")){
            setVersion(config.get(PTY_VERSION));
         }
         if(config.contains("is_merge")){
            setIsMerge(RBoolean.parse(config.get(PTY_IS_MERGE)));
         }
      }else if(EXmlConfig.Simple == type){
         if(config.contains("name")){
            setName(config.get(PTY_NAME));
         }
         if(config.contains("label")){
            setLabel(config.get(PTY_LABEL));
         }
         if(config.contains("note")){
            setNote(config.get(PTY_NOTE));
         }
         if(config.contains("disp_mode")){
            setDispMode(config.get(PTY_DISP_MODE));
         }
         if(config.contains("disp_config")){
            setDispConfig(config.get(PTY_DISP_CONFIG));
         }
         if(config.contains("disp_fetch")){
            setDispFetch(RBoolean.parse(config.get(PTY_DISP_FETCH)));
         }
         if(config.contains("pad_left")){
            setPadLeft(config.get(PTY_PAD_LEFT));
         }
         if(config.contains("pad_top")){
            setPadTop(config.get(PTY_PAD_TOP));
         }
         if(config.contains("pad_bottom")){
            setPadBottom(config.get(PTY_PAD_BOTTOM));
         }
         if(config.contains("pad_right")){
            setPadRight(config.get(PTY_PAD_RIGHT));
         }
         if(config.contains("left")){
            setLeft(config.get(PTY_LEFT));
         }
         if(config.contains("top")){
            setTop(config.get(PTY_TOP));
         }
         if(config.contains("right")){
            setRight(config.get(PTY_RIGHT));
         }
         if(config.contains("bottom")){
            setBottom(config.get(PTY_BOTTOM));
         }
         if(config.contains("width")){
            setWidth(config.get(PTY_WIDTH));
         }
         if(config.contains("height")){
            setHeight(config.get(PTY_HEIGHT));
         }
         if(config.contains("nowrap")){
            setNowrap(RBoolean.parse(config.get(PTY_NOWRAP)));
         }
         if(config.contains("hint")){
            setHint(config.get(PTY_HINT));
         }
         if(config.contains("style_label")){
            setStyleLabel(config.get(PTY_STYLE_LABEL));
         }
         if(config.contains("style_edit")){
            setStyleEdit(config.get(PTY_STYLE_EDIT));
         }
         if(config.contains("version")){
            setVersion(config.get(PTY_VERSION));
         }
         if(config.contains("is_merge")){
            setIsMerge(RBoolean.parse(config.get(PTY_IS_MERGE)));
         }
      }else if(EXmlConfig.Value == type){
         if(config.contains("name")){
            setName(config.get(PTY_NAME));
         }
         if(config.contains("label")){
            setLabel(config.get(PTY_LABEL));
         }
         if(config.contains("is_valid")){
            setIsValid(RBoolean.parse(config.get(PTY_IS_VALID)));
         }
         if(config.contains("note")){
            setNote(config.get(PTY_NOTE));
         }
         if(config.contains("disp_mode")){
            setDispMode(config.get(PTY_DISP_MODE));
         }
         if(config.contains("disp_config")){
            setDispConfig(config.get(PTY_DISP_CONFIG));
         }
         if(config.contains("disp_fetch")){
            setDispFetch(RBoolean.parse(config.get(PTY_DISP_FETCH)));
         }
         if(config.contains("disp_search")){
            setDispSearch(RBoolean.parse(config.get(PTY_DISP_SEARCH)));
         }
         if(config.contains("disp_picker")){
            setDispPicker(RBoolean.parse(config.get(PTY_DISP_PICKER)));
         }
         if(config.contains("disp_lov")){
            setDispLov(RBoolean.parse(config.get(PTY_DISP_LOV)));
         }
         if(config.contains("disp_zoom")){
            setDispZoom(RBoolean.parse(config.get(PTY_DISP_ZOOM)));
         }
         if(config.contains("disp_list")){
            setDispList(RBoolean.parse(config.get(PTY_DISP_LIST)));
         }
         if(config.contains("disp_display")){
            setDispDisplay(RBoolean.parse(config.get(PTY_DISP_DISPLAY)));
         }
         if(config.contains("disp_insert")){
            setDispInsert(RBoolean.parse(config.get(PTY_DISP_INSERT)));
         }
         if(config.contains("disp_update")){
            setDispUpdate(RBoolean.parse(config.get(PTY_DISP_UPDATE)));
         }
         if(config.contains("disp_delete")){
            setDispDelete(RBoolean.parse(config.get(PTY_DISP_DELETE)));
         }
         if(config.contains("disp_auto")){
            setDispAuto(RBoolean.parse(config.get(PTY_DISP_AUTO)));
         }
         if(config.contains("disp_size")){
            setDispSize(RBoolean.parse(config.get(PTY_DISP_SIZE)));
         }
         if(config.contains("disp_drag")){
            setDispDrag(RBoolean.parse(config.get(PTY_DISP_DRAG)));
         }
         if(config.contains("disp_print")){
            setDispPrint(RBoolean.parse(config.get(PTY_DISP_PRINT)));
         }
         if(config.contains("pad_left")){
            setPadLeft(config.get(PTY_PAD_LEFT));
         }
         if(config.contains("pad_top")){
            setPadTop(config.get(PTY_PAD_TOP));
         }
         if(config.contains("pad_bottom")){
            setPadBottom(config.get(PTY_PAD_BOTTOM));
         }
         if(config.contains("pad_right")){
            setPadRight(config.get(PTY_PAD_RIGHT));
         }
         if(config.contains("left")){
            setLeft(config.get(PTY_LEFT));
         }
         if(config.contains("top")){
            setTop(config.get(PTY_TOP));
         }
         if(config.contains("right")){
            setRight(config.get(PTY_RIGHT));
         }
         if(config.contains("bottom")){
            setBottom(config.get(PTY_BOTTOM));
         }
         if(config.contains("width")){
            setWidth(config.get(PTY_WIDTH));
         }
         if(config.contains("height")){
            setHeight(config.get(PTY_HEIGHT));
         }
         if(config.contains("nowrap")){
            setNowrap(RBoolean.parse(config.get(PTY_NOWRAP)));
         }
         if(config.contains("hint")){
            setHint(config.get(PTY_HINT));
         }
         if(config.contains("style_refer")){
            setStyleRefer(config.get(PTY_STYLE_REFER));
         }
         if(config.contains("style_label")){
            setStyleLabel(config.get(PTY_STYLE_LABEL));
         }
         if(config.contains("style_edit")){
            setStyleEdit(config.get(PTY_STYLE_EDIT));
         }
         if(config.contains("version")){
            setVersion(config.get(PTY_VERSION));
         }
         if(config.contains("is_merge")){
            setIsMerge(RBoolean.parse(config.get(PTY_IS_MERGE)));
         }
      }else if(EXmlConfig.Default == type){
         if(RString.isEmpty(getPadLeft())){
            if(config.contains("pad_left")){
               setPadLeft(config.get(PTY_PAD_LEFT));
            }
         }
         if(RString.isEmpty(getPadTop())){
            if(config.contains("pad_top")){
               setPadTop(config.get(PTY_PAD_TOP));
            }
         }
         if(RString.isEmpty(getPadBottom())){
            if(config.contains("pad_bottom")){
               setPadBottom(config.get(PTY_PAD_BOTTOM));
            }
         }
         if(RString.isEmpty(getPadRight())){
            if(config.contains("pad_right")){
               setPadRight(config.get(PTY_PAD_RIGHT));
            }
         }
         if(RString.isEmpty(getLeft())){
            if(config.contains("left")){
               setLeft(config.get(PTY_LEFT));
            }
         }
         if(RString.isEmpty(getTop())){
            if(config.contains("top")){
               setTop(config.get(PTY_TOP));
            }
         }
         if(RString.isEmpty(getRight())){
            if(config.contains("right")){
               setRight(config.get(PTY_RIGHT));
            }
         }
         if(RString.isEmpty(getBottom())){
            if(config.contains("bottom")){
               setBottom(config.get(PTY_BOTTOM));
            }
         }
         if(RString.isEmpty(getWidth())){
            if(config.contains("width")){
               setWidth(config.get(PTY_WIDTH));
            }
         }
         if(RString.isEmpty(getHeight())){
            if(config.contains("height")){
               setHeight(config.get(PTY_HEIGHT));
            }
         }
         if(RString.isEmpty(getStyleLabel())){
            if(config.contains("style_label")){
               setStyleLabel(config.get(PTY_STYLE_LABEL));
            }
         }
         if(RString.isEmpty(getStyleEdit())){
            if(config.contains("style_edit")){
               setStyleEdit(config.get(PTY_STYLE_EDIT));
            }
         }
         if(RString.isEmpty(getVersion())){
            if(config.contains("version")){
               setVersion(config.get(PTY_VERSION));
            }
         }
      }
   }

   //============================================================
   // <T>保存设置信息。</T>
   //
   // @param config 设置信息
   // @param type 类型
   //============================================================
   public void saveConfig(FXmlNode config,
                          EXmlConfig type){
      config.setName(NAME);
      super.saveConfig(config, type);
      if(EXmlConfig.Full == type){
         if(RString.isNotEmpty(getName())){
            config.set(PTY_NAME, getName());
         }
         String label = _label.pack().toString();
         if(RString.isNotEmpty(label)){
            config.set(PTY_LABEL, label);
         }
         if(RBoolean.parse(getIsValid())){
            config.set(PTY_IS_VALID, RBoolean.toString(getIsValid()));
         }
         String note = _note.pack().toString();
         if(RString.isNotEmpty(note)){
            config.set(PTY_NOTE, note);
         }
         if(RBoolean.parse(getDispFetch())){
            config.set(PTY_DISP_FETCH, RBoolean.toString(getDispFetch()));
         }
         if(RBoolean.parse(getDispSearch())){
            config.set(PTY_DISP_SEARCH, RBoolean.toString(getDispSearch()));
         }
         if(RBoolean.parse(getDispPicker())){
            config.set(PTY_DISP_PICKER, RBoolean.toString(getDispPicker()));
         }
         if(RBoolean.parse(getDispLov())){
            config.set(PTY_DISP_LOV, RBoolean.toString(getDispLov()));
         }
         if(RBoolean.parse(getDispZoom())){
            config.set(PTY_DISP_ZOOM, RBoolean.toString(getDispZoom()));
         }
         if(RBoolean.parse(getDispList())){
            config.set(PTY_DISP_LIST, RBoolean.toString(getDispList()));
         }
         if(RBoolean.parse(getDispDisplay())){
            config.set(PTY_DISP_DISPLAY, RBoolean.toString(getDispDisplay()));
         }
         if(RBoolean.parse(getDispInsert())){
            config.set(PTY_DISP_INSERT, RBoolean.toString(getDispInsert()));
         }
         if(RBoolean.parse(getDispUpdate())){
            config.set(PTY_DISP_UPDATE, RBoolean.toString(getDispUpdate()));
         }
         if(RBoolean.parse(getDispDelete())){
            config.set(PTY_DISP_DELETE, RBoolean.toString(getDispDelete()));
         }
         if(RBoolean.parse(getDispAuto())){
            config.set(PTY_DISP_AUTO, RBoolean.toString(getDispAuto()));
         }
         if(RBoolean.parse(getDispSize())){
            config.set(PTY_DISP_SIZE, RBoolean.toString(getDispSize()));
         }
         if(RBoolean.parse(getDispDrag())){
            config.set(PTY_DISP_DRAG, RBoolean.toString(getDispDrag()));
         }
         if(RBoolean.parse(getDispPrint())){
            config.set(PTY_DISP_PRINT, RBoolean.toString(getDispPrint()));
         }
         if(RString.isNotEmpty(getPadLeft())){
            config.set(PTY_PAD_LEFT, getPadLeft());
         }
         if(RString.isNotEmpty(getPadTop())){
            config.set(PTY_PAD_TOP, getPadTop());
         }
         if(RString.isNotEmpty(getPadBottom())){
            config.set(PTY_PAD_BOTTOM, getPadBottom());
         }
         if(RString.isNotEmpty(getPadRight())){
            config.set(PTY_PAD_RIGHT, getPadRight());
         }
         if(RString.isNotEmpty(getLeft())){
            config.set(PTY_LEFT, getLeft());
         }
         if(RString.isNotEmpty(getTop())){
            config.set(PTY_TOP, getTop());
         }
         if(RString.isNotEmpty(getRight())){
            config.set(PTY_RIGHT, getRight());
         }
         if(RString.isNotEmpty(getBottom())){
            config.set(PTY_BOTTOM, getBottom());
         }
         if(RString.isNotEmpty(getWidth())){
            config.set(PTY_WIDTH, getWidth());
         }
         if(RString.isNotEmpty(getHeight())){
            config.set(PTY_HEIGHT, getHeight());
         }
         if(RBoolean.parse(getNowrap())){
            config.set(PTY_NOWRAP, RBoolean.toString(getNowrap()));
         }
         if(RString.isNotEmpty(getHint())){
            config.set(PTY_HINT, getHint());
         }
         if(RString.isNotEmpty(getStyleRefer())){
            config.set(PTY_STYLE_REFER, getStyleRefer());
         }
         if(RString.isNotEmpty(getStyleLabel())){
            config.set(PTY_STYLE_LABEL, getStyleLabel());
         }
         if(RString.isNotEmpty(getStyleEdit())){
            config.set(PTY_STYLE_EDIT, getStyleEdit());
         }
         if(RString.isNotEmpty(getVersion())){
            config.set(PTY_VERSION, getVersion());
         }
         if(RBoolean.parse(getIsMerge())){
            config.set(PTY_IS_MERGE, RBoolean.toString(getIsMerge()));
         }
      }else if(EXmlConfig.Simple == type){
         if(RString.isNotEmpty(getName())){
            config.set(PTY_NAME, getName());
         }
         if(RString.isNotEmpty(getLabel())){
            config.set(PTY_LABEL, getLabel());
         }
         if(RString.isNotEmpty(getNote())){
            config.set(PTY_NOTE, getNote());
         }
         if(RString.isNotEmpty(getDispMode())){
            config.set(PTY_DISP_MODE, getDispMode());
         }
         if(RString.isNotEmpty(getDispConfig())){
            config.set(PTY_DISP_CONFIG, getDispConfig());
         }
         if(RBoolean.parse(getDispFetch())){
            config.set(PTY_DISP_FETCH, RBoolean.toString(getDispFetch()));
         }
         if(RString.isNotEmpty(getPadLeft())){
            config.set(PTY_PAD_LEFT, getPadLeft());
         }
         if(RString.isNotEmpty(getPadTop())){
            config.set(PTY_PAD_TOP, getPadTop());
         }
         if(RString.isNotEmpty(getPadBottom())){
            config.set(PTY_PAD_BOTTOM, getPadBottom());
         }
         if(RString.isNotEmpty(getPadRight())){
            config.set(PTY_PAD_RIGHT, getPadRight());
         }
         if(RString.isNotEmpty(getLeft())){
            config.set(PTY_LEFT, getLeft());
         }
         if(RString.isNotEmpty(getTop())){
            config.set(PTY_TOP, getTop());
         }
         if(RString.isNotEmpty(getRight())){
            config.set(PTY_RIGHT, getRight());
         }
         if(RString.isNotEmpty(getBottom())){
            config.set(PTY_BOTTOM, getBottom());
         }
         if(RString.isNotEmpty(getWidth())){
            config.set(PTY_WIDTH, getWidth());
         }
         if(RString.isNotEmpty(getHeight())){
            config.set(PTY_HEIGHT, getHeight());
         }
         if(RBoolean.parse(getNowrap())){
            config.set(PTY_NOWRAP, RBoolean.toString(getNowrap()));
         }
         if(RString.isNotEmpty(getHint())){
            config.set(PTY_HINT, getHint());
         }
         if(RString.isNotEmpty(getStyleLabel())){
            config.set(PTY_STYLE_LABEL, getStyleLabel());
         }
         if(RString.isNotEmpty(getStyleEdit())){
            config.set(PTY_STYLE_EDIT, getStyleEdit());
         }
         if(RString.isNotEmpty(getVersion())){
            config.set(PTY_VERSION, getVersion());
         }
         if(RBoolean.parse(getIsMerge())){
            config.set(PTY_IS_MERGE, RBoolean.toString(getIsMerge()));
         }
      }else if(EXmlConfig.Value == type){
         String sName = getName();
         if(RString.isNotEmpty(sName)){
            config.set(PTY_NAME, sName);
         }
         String sLabel = getLabel();
         if(RString.isNotEmpty(sLabel)){
            config.set(PTY_LABEL, sLabel);
         }
         Boolean bIsValid = getIsValid();
         if(RBoolean.parse(bIsValid)){
            config.set(PTY_IS_VALID, RBoolean.toString(bIsValid));
         }
         String sNote = getNote();
         if(RString.isNotEmpty(sNote)){
            config.set(PTY_NOTE, sNote);
         }
         String sDispMode = getDispMode();
         if(RString.isNotEmpty(sDispMode)){
            config.set(PTY_DISP_MODE, sDispMode);
         }
         String sDispConfig = getDispConfig();
         if(RString.isNotEmpty(sDispConfig)){
            config.set(PTY_DISP_CONFIG, sDispConfig);
         }
         Boolean bDispFetch = getDispFetch();
         if(RBoolean.parse(bDispFetch)){
            config.set(PTY_DISP_FETCH, RBoolean.toString(bDispFetch));
         }
         Boolean bDispSearch = getDispSearch();
         if(RBoolean.parse(bDispSearch)){
            config.set(PTY_DISP_SEARCH, RBoolean.toString(bDispSearch));
         }
         Boolean bDispPicker = getDispPicker();
         if(RBoolean.parse(bDispPicker)){
            config.set(PTY_DISP_PICKER, RBoolean.toString(bDispPicker));
         }
         Boolean bDispLov = getDispLov();
         if(RBoolean.parse(bDispLov)){
            config.set(PTY_DISP_LOV, RBoolean.toString(bDispLov));
         }
         Boolean bDispZoom = getDispZoom();
         if(RBoolean.parse(bDispZoom)){
            config.set(PTY_DISP_ZOOM, RBoolean.toString(bDispZoom));
         }
         Boolean bDispList = getDispList();
         if(RBoolean.parse(bDispList)){
            config.set(PTY_DISP_LIST, RBoolean.toString(bDispList));
         }
         Boolean bDispDisplay = getDispDisplay();
         if(RBoolean.parse(bDispDisplay)){
            config.set(PTY_DISP_DISPLAY, RBoolean.toString(bDispDisplay));
         }
         Boolean bDispInsert = getDispInsert();
         if(RBoolean.parse(bDispInsert)){
            config.set(PTY_DISP_INSERT, RBoolean.toString(bDispInsert));
         }
         Boolean bDispUpdate = getDispUpdate();
         if(RBoolean.parse(bDispUpdate)){
            config.set(PTY_DISP_UPDATE, RBoolean.toString(bDispUpdate));
         }
         Boolean bDispDelete = getDispDelete();
         if(RBoolean.parse(bDispDelete)){
            config.set(PTY_DISP_DELETE, RBoolean.toString(bDispDelete));
         }
         Boolean bDispAuto = getDispAuto();
         if(RBoolean.parse(bDispAuto)){
            config.set(PTY_DISP_AUTO, RBoolean.toString(bDispAuto));
         }
         Boolean bDispSize = getDispSize();
         if(RBoolean.parse(bDispSize)){
            config.set(PTY_DISP_SIZE, RBoolean.toString(bDispSize));
         }
         Boolean bDispDrag = getDispDrag();
         if(RBoolean.parse(bDispDrag)){
            config.set(PTY_DISP_DRAG, RBoolean.toString(bDispDrag));
         }
         Boolean bDispPrint = getDispPrint();
         if(RBoolean.parse(bDispPrint)){
            config.set(PTY_DISP_PRINT, RBoolean.toString(bDispPrint));
         }
         String sPadLeft = getPadLeft();
         if(RString.isNotEmpty(sPadLeft)){
            config.set(PTY_PAD_LEFT, sPadLeft);
         }
         String sPadTop = getPadTop();
         if(RString.isNotEmpty(sPadTop)){
            config.set(PTY_PAD_TOP, sPadTop);
         }
         String sPadBottom = getPadBottom();
         if(RString.isNotEmpty(sPadBottom)){
            config.set(PTY_PAD_BOTTOM, sPadBottom);
         }
         String sPadRight = getPadRight();
         if(RString.isNotEmpty(sPadRight)){
            config.set(PTY_PAD_RIGHT, sPadRight);
         }
         String sLeft = getLeft();
         if(RString.isNotEmpty(sLeft)){
            config.set(PTY_LEFT, sLeft);
         }
         String sTop = getTop();
         if(RString.isNotEmpty(sTop)){
            config.set(PTY_TOP, sTop);
         }
         String sRight = getRight();
         if(RString.isNotEmpty(sRight)){
            config.set(PTY_RIGHT, sRight);
         }
         String sBottom = getBottom();
         if(RString.isNotEmpty(sBottom)){
            config.set(PTY_BOTTOM, sBottom);
         }
         String sWidth = getWidth();
         if(RString.isNotEmpty(sWidth)){
            config.set(PTY_WIDTH, sWidth);
         }
         String sHeight = getHeight();
         if(RString.isNotEmpty(sHeight)){
            config.set(PTY_HEIGHT, sHeight);
         }
         Boolean bNowrap = getNowrap();
         if(RBoolean.parse(bNowrap)){
            config.set(PTY_NOWRAP, RBoolean.toString(bNowrap));
         }
         String sHint = getHint();
         if(RString.isNotEmpty(sHint)){
            config.set(PTY_HINT, sHint);
         }
         String sStyleRefer = getStyleRefer();
         if(RString.isNotEmpty(sStyleRefer)){
            config.set(PTY_STYLE_REFER, sStyleRefer);
         }
         String sStyleLabel = getStyleLabel();
         if(RString.isNotEmpty(sStyleLabel)){
            config.set(PTY_STYLE_LABEL, sStyleLabel);
         }
         String sStyleEdit = getStyleEdit();
         if(RString.isNotEmpty(sStyleEdit)){
            config.set(PTY_STYLE_EDIT, sStyleEdit);
         }
         String sVersion = getVersion();
         if(RString.isNotEmpty(sVersion)){
            config.set(PTY_VERSION, sVersion);
         }
         Boolean bIsMerge = getIsMerge();
         if(RBoolean.parse(bIsMerge)){
            config.set(PTY_IS_MERGE, RBoolean.toString(bIsMerge));
         }
      }else if(EXmlConfig.Default == type){
         String sPadLeft = getPadLeft();
         if(RString.isNotEmpty(sPadLeft)){
            config.set(PTY_PAD_LEFT, sPadLeft);
         }
         String sPadTop = getPadTop();
         if(RString.isNotEmpty(sPadTop)){
            config.set(PTY_PAD_TOP, sPadTop);
         }
         String sPadBottom = getPadBottom();
         if(RString.isNotEmpty(sPadBottom)){
            config.set(PTY_PAD_BOTTOM, sPadBottom);
         }
         String sPadRight = getPadRight();
         if(RString.isNotEmpty(sPadRight)){
            config.set(PTY_PAD_RIGHT, sPadRight);
         }
         String sLeft = getLeft();
         if(RString.isNotEmpty(sLeft)){
            config.set(PTY_LEFT, sLeft);
         }
         String sTop = getTop();
         if(RString.isNotEmpty(sTop)){
            config.set(PTY_TOP, sTop);
         }
         String sRight = getRight();
         if(RString.isNotEmpty(sRight)){
            config.set(PTY_RIGHT, sRight);
         }
         String sBottom = getBottom();
         if(RString.isNotEmpty(sBottom)){
            config.set(PTY_BOTTOM, sBottom);
         }
         String sWidth = getWidth();
         if(RString.isNotEmpty(sWidth)){
            config.set(PTY_WIDTH, sWidth);
         }
         String sHeight = getHeight();
         if(RString.isNotEmpty(sHeight)){
            config.set(PTY_HEIGHT, sHeight);
         }
         String sStyleLabel = getStyleLabel();
         if(RString.isNotEmpty(sStyleLabel)){
            config.set(PTY_STYLE_LABEL, sStyleLabel);
         }
         String sStyleEdit = getStyleEdit();
         if(RString.isNotEmpty(sStyleEdit)){
            config.set(PTY_STYLE_EDIT, sStyleEdit);
         }
         String sVersion = getVersion();
         if(RString.isNotEmpty(sVersion)){
            config.set(PTY_VERSION, sVersion);
         }
      }
   }
}
