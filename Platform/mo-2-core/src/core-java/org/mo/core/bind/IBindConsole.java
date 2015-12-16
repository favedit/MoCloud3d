package org.mo.core.bind;

//============================================================
// <T>绑定控制台接口。</T>
//============================================================
public interface IBindConsole
{
   //============================================================
   // <T>是否存在关联的绑定信息。</T>
   //
   // @return 是否存在
   //============================================================
   boolean exists();

   //============================================================
   // <T>是否含有指定类关联的信息。</T>
   //
   // @param clazz 类对象
   // @return 是否含有
   //============================================================
   boolean contains(Class<?> clazz);

   //============================================================
   // <T>查找类对应的内容对象。</T>
   //
   // @param clazz 类对象
   // @return 内容对象
   //============================================================
   <V> V find(Class<V> clazz);

   //============================================================
   // <T>获得类对应的内容对象。</T>
   //
   // @param clazz 类对象
   // @return 内容对象
   //============================================================
   <V> V get(Class<V> clazz);

   //============================================================
   // <T>绑定类对应的内容对象。</T>
   //
   // @param clazz 类对象
   // @return 对象
   //============================================================
   <T> T bind(Class<T> clazz);

   //============================================================
   // <T>绑定类对应的内容对象。</T>
   //
   // @param clazz 类对象
   // @param item 内容对象
   //============================================================
   void bind(Class<?> clazz,
             Object item);

   //============================================================
   // <T>解除绑定类对应的内容对象。</T>
   //
   // @param clazz 类对象
   // @return 内容对象
   //============================================================
   <V> void unbind(Class<V> clazz);

   //============================================================
   // <T>移除关联的所有内容对象。</T>
   //============================================================
   void remove();

   //============================================================
   // <T>清空所有内容对象。</T>
   //============================================================
   void clear();
}
