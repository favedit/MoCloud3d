package org.mo.content.access.data.resource.bitmap;

import org.mo.cloud.data.data.FDataResourceBitmapUnit;

//============================================================
// <T>资源位图信息。</T>
//============================================================
public class FGcResBitmapInfo
      extends FDataResourceBitmapUnit
{
   // 目录编号
   protected long _catalogId;

   // 关键字
   protected String _keywords;

   // 数据大小
   protected int _dataSize;

   // 数据校验
   protected String _dataHash;

   //============================================================
   // <T>获得目录编号。</T>
   //
   // @return 目录编号
   //============================================================
   public long catalogId(){
      return _catalogId;
   }

   //============================================================
   // <T>设置目录编号。</T>
   //
   // @param catalogId 目录编号
   //============================================================
   public void setCatalogId(long catalogId){
      _catalogId = catalogId;
   }

   //============================================================
   // <T>获得关键字。</T>
   //
   // @return 关键字
   //============================================================
   public String keywords(){
      return _keywords;
   }

   //============================================================
   // <T>设置关键字。</T>
   //
   // @param dataHash 关键字
   //============================================================
   public void setKeywords(String keywords){
      _keywords = keywords;
   }

   //============================================================
   // <T>获得数据大小。</T>
   //
   // @return 数据大小
   //============================================================
   public int dataSize(){
      return _dataSize;
   }

   //============================================================
   // <T>设置数据大小。</T>
   //
   // @param dataSize 数据大小
   //============================================================
   public void setDataSize(int dataSize){
      _dataSize = dataSize;
   }

   //============================================================
   // <T>获得数据校验。</T>
   //
   // @return 数据校验
   //============================================================
   public String dataHash(){
      return _dataHash;
   }

   //============================================================
   // <T>设置数据校验。</T>
   //
   // @param dataHash 数据校验
   //============================================================
   public void setDataHash(String dataHash){
      _dataHash = dataHash;
   }

   //============================================================
   // <T>测试尺寸是否有效。</T>
   //
   // @return 是否有效
   //============================================================
   public boolean testSizeValid(){
      if(_sizeWidth == 0){
         return false;
      }
      if(_sizeHeight == 0){
         return false;
      }
      return true;
   }

   //============================================================
   // <T>设置尺寸。</T>
   //
   // @param width 宽度
   // @param height 高度
   //============================================================
   public void setSize(int width,
                       int height){
      _sizeWidth = width;
      _sizeHeight = height;
   }
}
