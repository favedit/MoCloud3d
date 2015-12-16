package org.mo.content.face.resource.mesh;

import org.mo.cloud.logic.data.resource.IGcResourceCatalogConsole;
import org.mo.cloud.logic.data.resource.IGcResourceConsole;
import org.mo.cloud.logic.data.resource.model.mesh.IGcResModelMeshConsole;
import org.mo.cloud.logic.data.system.FGcSessionInfo;
import org.mo.com.lang.FObject;
import org.mo.content.core.resource.model.ICntModelMeshConsole;
import org.mo.content.engine.core.model.IResModelMeshConsole;
import org.mo.core.aop.face.ALink;
import org.mo.data.logic.ILogicContext;
import org.mo.web.core.servlet.common.IWebServletRequest;
import org.mo.web.core.servlet.common.IWebServletResponse;
import org.mo.web.protocol.context.IWebContext;

//============================================================
// <T>上传处理。</T>
//============================================================
public class FMeshServlet
      extends FObject
      implements
         IMeshServlet
{
   // 日志输出接口
   //private static ILogger _logger = RLogger.find(FMeshServlet.class);

   // 数据缓冲大小
   protected static int BufferLength = 1024 * 64;

   // 缓冲时间
   protected static long CacheTimeout = 3600 * 24 * 7 * 4;

   // 数据网格控制台
   @ALink
   protected IGcResourceCatalogConsole _dataCatalogConsole;

   // 数据资源控制台
   @ALink
   protected IGcResourceConsole _dataResourceConsole;

   // 数据网格控制台
   @ALink
   protected IGcResModelMeshConsole _dataMeshConsole;

   // 资源网格接口
   @ALink
   protected IResModelMeshConsole _meshConsole;

   // 资源网格接口
   @ALink
   protected ICntModelMeshConsole _c3MeshConsole;

   //============================================================
   // <T>逻辑处理。</T>
   // <P>catalog:分类</P>
   // <P>date:日期</P>
   // <P>code:代码</P>
   // <P>version:版本</P>
   // <P>type:类型，没有的话，存储为 bin</P>
   // <P>size:大小</P>
   // <P>存储位置：\{catalog}\{date:yyyymmdd}\{code}\{version}.{type}</P>
   //
   // @param context 环境
   // @param request 请求
   // @param response 应答
   //============================================================
   @Override
   public void process(IWebContext context,
                       ILogicContext logicContext,
                       IWebServletRequest request,
                       IWebServletResponse response){
      //      // 检查参数
      //      String guid = context.parameter("guid");
      //      String code = context.parameter("code");
      //      if(RString.isEmpty(guid) && RString.isEmpty(code)){
      //         throw new FFatalError("Mesh guid and code is empty.");
      //      }
      //      // 获得唯一编号
      //      String meshGuid = null;
      //      if(RString.isEmpty(guid)){
      //         FGcResModelMeshInfo unit = _dataMeshConsole.findByFullCode(logicContext, code);
      //         if(unit == null){
      //            unit = _dataMeshConsole.findByCode(logicContext, code);
      //         }
      //         if(unit != null){
      //            meshGuid = unit.guid();
      //         }else{
      //            throw new FFatalError("process", "Model guid is not exists. (code={1})", code);
      //         }
      //      }else{
      //         FGcResourceInfo resource = _dataResourceConsole.findByGuid(logicContext, guid);
      //         FGcResModelMeshInfo mesh = _dataMeshConsole.findByResourceId(logicContext, resource.ouid());
      //         meshGuid = mesh.guid();
      //      }
      //............................................................
      //      // 生成数据
      //      byte[] data = _meshConsole.makeMeshData(logicContext, meshGuid);
      //      if(data == null){
      //         throw new FFatalError("process", "Model is not exists. (guid={1}, code={2})", guid, code);
      //      }
      //      int dataLength = data.length;
      //      //............................................................
      //      // 发送数据
      //      _logger.debug(this, "process", "Send model data. (length={1})", dataLength);
      //      response.setCharacterEncoding("utf-8");
      //      response.setStatus(HttpServletResponse.SC_OK);
      //      response.setHeader("Cache-Control", "max-age=" + CacheTimeout);
      //      response.addHeader("Last-Modified", System.currentTimeMillis());
      //      response.addHeader("Expires", System.currentTimeMillis() + CacheTimeout * 1000);
      //      response.setContentType(EMime.Bin.mime());
      //      response.setContentLength(dataLength);
      //      response.write(data, 0, dataLength);
   }

   //============================================================
   // <T>逻辑处理。</T>
   //
   // @param context 网络环境
   // @param logicContext 逻辑环境
   // @param session 会话
   // @param request 请求
   // @param response 应答
   //============================================================
   @Override
   public void importData(IWebContext context,
                          ILogicContext logicContext,
                          FGcSessionInfo session,
                          IWebServletRequest request,
                          IWebServletResponse response){
      //      // 检查参数
      //      String nodeGuid = context.parameter("node_guid");
      //      String code = context.parameter("code");
      //      if(RString.isEmpty(code)){
      //         throw new FFatalError("Mesh code is empty.");
      //      }
      //      String label = context.parameter("label");
      //      if(RString.isEmpty(label)){
      //         throw new FFatalError("Mesh label is empty.");
      //      }
      //      int dataLength = context.parameterAsInteger("data_length");
      //      if((dataLength <= 0) || (dataLength > RInteger.SIZE_64M)){
      //         throw new FFatalError("Mesh data length is invalid.");
      //      }
      //      String fileName = context.parameter("file_name");
      //      if(RString.isEmpty(fileName)){
      //         throw new FFatalError("Mesh file name is empty.");
      //      }
      //      String extension = RFile.extension(fileName);
      //      long userId = session.userId();
      //      long projectId = session.projectId();
      //      // 获得节点编号
      //      long catalogId = 0;
      //      if(!RString.isEmpty(nodeGuid)){
      //         FGcResourceCatalogInfo catalog = _dataCatalogConsole.findByGuid(logicContext, nodeGuid);
      //         if(catalog == null){
      //            throw new FFatalError("Catalog is not exists.");
      //         }
      //         catalogId = catalog.ouid();
      //      }
      //      // 导入数据
      //      if("ply".equals(extension)){
      //      }else if("obj".equals(extension)){
      //      }else if("stl".equals(extension)){
      //      }else{
      //         throw new FFatalError("Unknown file format.");
      //      }
      //      // 读取数据
      //      FByteFile file = new FByteFile(dataLength);
      //      file.loadStream(request.inputStream());
      //      // 导入数据
      //      File tempFile = null;
      //      try{
      //         // 生成临时文件
      //         tempFile = File.createTempFile("rs3_msh_", ".bin");
      //         file.saveToFile(tempFile.getAbsolutePath());
      //         // 加载PHY模型文件 
      //         if("ply".equals(extension)){
      //            FPlyFile plyFile = new FPlyFile();
      //            plyFile.loadFile(tempFile.getAbsolutePath(), "utf-8");
      //            // 创建模型
      //            FGcRs3MeshInfo mesh = _c3MeshConsole.doPrepare(logicContext);
      //            mesh.setUserId(userId);
      //            mesh.setProjectId(projectId);
      //            mesh.setCatalogId(catalogId);
      //            mesh.setCode(code);
      //            mesh.setLabel(label);
      //            _c3MeshConsole.createMesh(logicContext, mesh);
      //            // 导入模型
      //            _meshConsole.importMeshPly(logicContext, mesh.guid(), plyFile);
      //         }
      //         // 加载OBJ模型文件 
      //         else if("obj".equals(extension)){
      //            FObjFile objFile = new FObjFile();
      //            objFile.loadFile(tempFile.getAbsolutePath(), "utf-8");
      //            // 创建模型
      //            FGcRs3MeshInfo mesh = _c3MeshConsole.doPrepare(logicContext);
      //            mesh.setUserId(userId);
      //            mesh.setProjectId(projectId);
      //            mesh.setCatalogId(catalogId);
      //            mesh.setCode(code);
      //            mesh.setLabel(label);
      //            _c3MeshConsole.createMesh(logicContext, mesh);
      //            // 导入模型
      //            _meshConsole.importMeshObj(logicContext, mesh.guid(), objFile);
      //         }
      //         // 加载STL模型文件 
      //         else if("stl".equals(extension)){
      //            //            FStlFile stlFile = new FStlFile();
      //            //            stlFile.loadFile(tempFile.getAbsolutePath(), "utf-8");
      //            //            // 创建模型
      //            //            FGcRs3MeshInfo mesh = _c3MeshConsole.doPrepare(logicContext);
      //            //            mesh.setUserId(userId);
      //            //            mesh.setProjectId(projectId);
      //            //            mesh.setCatalogId(catalogId);
      //            //            mesh.setCode(code);
      //            //            mesh.setLabel(label);
      //            //            _c3MeshConsole.createMesh(logicContext, mesh);
      //            //            // 导入模型
      //            //            _meshConsole.importMeshObj(logicContext, mesh.guid(), stlFile);
      //         }else{
      //            throw new FFatalError("Unknown file format.");
      //         }
      //      }catch(Exception e){
      //         throw new FFatalError(e);
      //      }finally{
      //         // 删除临时文件
      //         if(tempFile != null){
      //            tempFile.delete();
      //         }
      //         file.close();
      //      }
      //      //............................................................
      //      // 发送数据
      //      _logger.debug(this, "process", "Send model data. (length={1})", dataLength);
      //      response.setCharacterEncoding("utf-8");
      //      response.setStatus(HttpServletResponse.SC_OK);
      //      response.setHeader("Cache-Control", "max-age=" + CacheTimeout);
      //      response.addHeader("Last-Modified", System.currentTimeMillis());
      //      response.addHeader("Expires", System.currentTimeMillis() + CacheTimeout * 1000);
      //      response.setContentType(EMime.Bin.mime());
      //      response.setContentLength(0);
   }
}
