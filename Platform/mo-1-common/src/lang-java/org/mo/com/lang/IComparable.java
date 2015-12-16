package org.mo.com.lang;

//============================================================
// <T>两个对象间的内容进行比较接口。</T>
//============================================================
public interface IComparable<V>
{
   //============================================================
   // <T>当前对象和指定对象进行内容的比较。</T>
   // <P>
   //    结果有三种
   //       -1: 本身内容小于指定对象
   //        0: 本身内容等于指定对象
   //        1: 本身内容大于指定对象
   // </P>
   //
   // @param item 被比较的对象
   // @param params 比较时带的参数对象
   // @return 比较结果
   //============================================================
   int compare(V item,
               Object... params);
}
