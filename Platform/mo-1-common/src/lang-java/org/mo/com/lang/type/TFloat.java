package org.mo.com.lang.type;

//============================================================
// <T>浮点数据。</T>
//
// @history 130220 创建
//============================================================
public class TFloat
      extends MType
{
   // 存储内容
   private float _value;

   //============================================================
   // <T>构造浮点数据。</T>
   //============================================================
   public TFloat(){
   }

   //============================================================
   // <T>构造浮点数据。</T>
   //
   // @param value 字节
   //============================================================
   public TFloat(float value){
      _value = value;
   }

   //============================================================
   // <T>获得浮点数据内容。</T>
   //
   // @return 浮点数据内容
   //============================================================
   public float get(){
      return _value;
   }

   //============================================================
   // <T>设置浮点数据内容。</T>
   //
   // @param value 浮点数据内容
   //============================================================
   public void set(float value){
      _value = value;
   }
}
