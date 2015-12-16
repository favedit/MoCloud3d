package org.mo.cloud.core.queue;

import org.mo.com.lang.FObject;

//============================================================
// <T>消息链接。</T>
//============================================================
public class FJmsConnection
      extends FObject
{
   protected String _passport;

   protected String _password;

   protected String _url;

   public void a(){
      //      // 连接工厂
      //      ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory(USER, PASSWORD, URL);
      //      conn = connectionFactory.createConnection();
      //      // 事务性会话，自动确认消息
      //      session = conn.createSession(false, Session.AUTO_ACKNOWLEDGE);
      //      // 消息的目的地（Queue/Topic）
      //      destination = session.createQueue(SUBJECT);
      //      // destination = session.createTopic(SUBJECT);
      //      // 消息的提供者（生产者）
      //      producer = session.createProducer(destination);
      //      // 不持久化消息
      //      producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
   }
}
