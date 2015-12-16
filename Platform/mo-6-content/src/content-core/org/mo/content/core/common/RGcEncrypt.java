package org.mo.content.core.common;

import java.security.MessageDigest;

import org.mo.com.lang.FFatalError;

public class RGcEncrypt
{

   // ============================================================
   // <T>用SHA-1编码用户名<T>
   // @return 处理结果
   // ============================================================
   public static String encNameBySha(String name){
      try{
         MessageDigest sha = MessageDigest.getInstance("SHA");
         byte[] byteArray = name.getBytes("UTF-8");
         byte[] shaBytes = sha.digest(byteArray);
         StringBuffer hexValue = new StringBuffer();
         int a = shaBytes.length;
         for(int i = 0; i < a; i++){
            int val = (shaBytes[i]) & 0xff;
            if(val < 16){
               hexValue.append("0");
            }
            hexValue.append(Integer.toHexString(val));
         }
         return hexValue.toString();
      }catch(Exception exception){
         throw new FFatalError(exception);
      }
   }

   // ============================================================
   // <T>16字符串转换为字节数组<T>
   // @return 处理结果
   // ============================================================
   public static byte charToByte(char c){
      return (byte)"0123456789ABCDEF".indexOf(c);
   }

   // ============================================================
   // <T>16字符串转换为字节数组<T>
   // @return 处理结果
   // ============================================================
   public static byte[] HexStringToByteArray(String hexString){
      if(hexString == null || hexString.equals("")){
         return new byte[]{};
      }
      if(hexString.length() == 1 || hexString.length() % 2 != 0){
         hexString = "0" + hexString;
      }
      hexString = hexString.toUpperCase();
      int length = hexString.length() / 2;
      char[] hexChars = hexString.toCharArray();
      byte[] d = new byte[length];
      for(int i = 0; i < length; i++){
         int pos = i * 2;
         d[i] = (byte)(charToByte(hexChars[pos]) << 4 | charToByte(hexChars[pos + 1]));
      }
      return d;
   }

   // ============================================================
   // <T>解密已经加密的密码<T>
   // @return 处理结果
   // ============================================================
   public static String decodePwd(String name,
                                  byte[] tokenBytes){
      try{
         String shaName = encNameBySha(name);
         byte[] keyBytes = shaName.getBytes("UTF-8");
         int tokenBytesLength = tokenBytes.length;
         for(int i = 0; i < tokenBytesLength; i++){
            tokenBytes[i] = (byte)(tokenBytes[i] ^ keyBytes[i % 16]);
         }
         String pwd = new String(tokenBytes, "UTF-8");
         return pwd;
      }catch(Exception exception){
         throw new FFatalError(exception);
      }
   }
}
