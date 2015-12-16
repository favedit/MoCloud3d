package org.mo.data.logic.cache;

//============================================================
// <T>逻辑单元缓冲提供商接口。</T>
//============================================================
public interface ILogicUnitCacheVendor
{
   //============================================================
   // <T>获得逻辑单元缓冲频道。</T>
   //
   // @return 逻辑单元缓冲频道
   //============================================================
   FLogicUnitCacheChannel channel();
}
