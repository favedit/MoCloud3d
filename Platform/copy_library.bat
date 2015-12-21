@CLS

@SET HOME=%cd%
@SET HOME_SOURCE=%HOME%\library

DEL /Q /F %HOME_SOURCE%\*.jar
CALL D:\Studio\Tools\apache-ant-1.9.6\bin\ant.bat -buildfile %HOME_SOURCE%\build.xml jar

@SET HOME_TARGET=%HOME%\mp-cloud.content\webroot\WEB-INF\lib\
MKDIR %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-common.jar   %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-core.jar     %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-logic.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-web.jar      %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-cloud.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-content.jar  %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-resource.jar %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-lib-lzma.jar %HOME_TARGET%

@SET HOME_TARGET=%HOME%\mp-cloud.editor\webroot\WEB-INF\lib\
MKDIR %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-common.jar   %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-core.jar     %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-logic.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-web.jar      %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-cloud.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-content.jar  %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-resource.jar %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-lib-lzma.jar %HOME_TARGET%

@SET HOME_TARGET=%HOME%\mp-cloud.manage\webroot\WEB-INF\lib\
MKDIR %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-common.jar   %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-core.jar     %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-logic.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-web.jar      %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-cloud.jar    %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-content.jar  %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-resource.jar %HOME_TARGET%
COPY /Y %HOME_SOURCE%\mo-lib-lzma.jar %HOME_TARGET%
