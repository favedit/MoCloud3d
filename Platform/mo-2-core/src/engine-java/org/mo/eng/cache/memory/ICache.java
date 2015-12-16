package org.mo.eng.cache.memory;

public interface ICache
{
   Object instance();

   long lastUsed();

   void refresh();

   void setInstance(Object instance);

   void setTimeout(long timeout);

   boolean testTimeout(long time);

   long timeout();
}
