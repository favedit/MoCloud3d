package org.mo.cloud.core.database;

import java.sql.Connection;
import org.mo.core.aop.RAop;
import org.mo.data.driver.FSqlMysqlConnection;
import org.mo.data.logic.cache.FLogicCacheChannel;
import org.mo.data.logic.cache.ILogicCacheConsole;
import org.mo.data.logic.cache.ILogicCacheVendor;
import org.mo.eng.cache.ICacheChannel;
import org.mo.eng.cache.ICacheConsole;

//============================================================
// <T>逻辑MySQL数据库链接。</T>
//============================================================
public class FLogicMysqlConnection
      extends FSqlMysqlConnection
      implements
         ILogicCacheVendor
{
   // 内存单元缓冲频道
   protected ICacheConsole _cacheConsole;

   // 内存单元缓冲频道
   protected ICacheChannel _cacheChannel;

   // 逻辑单元缓冲控制台
   protected ILogicCacheConsole _logicCacheConsole;

   // 逻辑单元缓冲频道
   protected FLogicCacheChannel _logicCacheChannel;

   //============================================================
   // <T>构造逻辑MySQL数据库链接。</T>
   //============================================================
   public FLogicMysqlConnection(){
   }

   //============================================================
   // <T>构造逻辑MySQL数据库链接。</T>
   //
   // @param sqlConnection 数据库链接
   //============================================================
   public FLogicMysqlConnection(Connection sqlConnection){
      super(sqlConnection);
   }

   //============================================================
   // <T>获得逻辑单元缓冲频道。</T>
   //
   // @return 逻辑单元缓冲频道
   //============================================================
   @Override
   public FLogicCacheChannel channel(){
      // 收集内存缓冲
      if(_cacheChannel == null){
         if(_cacheConsole == null){
            _cacheConsole = RAop.find(ICacheConsole.class);
         }
         _cacheChannel = _cacheConsole.alloc();
      }
      // 收集逻辑缓冲
      if((_cacheChannel != null) && (_logicCacheChannel == null)){
         if(_logicCacheConsole == null){
            _logicCacheConsole = RAop.find(ILogicCacheConsole.class);
         }
         _logicCacheChannel = _logicCacheConsole.alloc(_cacheChannel);
      }
      return _logicCacheChannel;
   }

   //============================================================
   // <T>释放处理。</T>
   //============================================================
   @Override
   public void free(){
      // 释放内存缓冲
      if(_logicCacheChannel != null){
         _logicCacheConsole.free(_logicCacheChannel);
         _logicCacheChannel = null;
      }
      // 释放逻辑缓冲
      if(_cacheChannel != null){
         _cacheConsole.free(_cacheChannel);
         _cacheChannel = null;
      }
      super.free();
   }
}
