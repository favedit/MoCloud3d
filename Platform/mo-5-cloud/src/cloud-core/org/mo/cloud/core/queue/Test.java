package org.mo.cloud.core.queue;

import javax.jms.JMSException;

public class Test
{

   public static void main(String[] args) throws JMSException, Exception{
      JmsSender sender = new JmsSender();
      JmsReceiver receiver = new JmsReceiver();

      sender.sendMessage("bytes");
      sender.close();

      receiver.receiveMessage();
      receiver.close();

   }
}
