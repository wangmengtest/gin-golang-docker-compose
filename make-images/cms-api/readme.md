### 构建镜像命名
```code   

# 1. vim  打开 Dockerfile 文件，修改go可执行文件名以及版本号，使 Dockerfile 中的版本与外部编译后的文件名对应
# 例如：外部文件名： gs-admin2-cms-api-v1.0.00.linux64 , Dockefile 第 4 行 exe_file_fullname=gs-admin2-cms-api-v1.0.00.linux64


#构建镜像, 需要注意的是 -t 后面设置镜像名称的是
docker  build  -f  ./Dockerfile   -t  gs_admin2/cms_api:v1.0  .



# 启动一个测试容器
docker  run --name  test-cms-api  -p  22002:22002   -d  gs_admin2/cms_api:v1.0

```
