### ginskeleton-admin2 基于 docker-compose 的部署方案

### 介绍
- 1.适合生产环境部署
- 2.基于 `docker-compose` 制作

### 前言
- 首先, 使用本方案需要您熟悉 docker-compose 知识.，略显复杂..
- 其次, 本方案的起始点不是源码开始，而是基于编译好的可执行程序开始制作部署方案，供开发者参考使用.
- 最后, 如果是互联网项目，其实从源码到生产环境整个网络在大部分情况下，都是畅通的，建议结合 `ci/cd` 部署方案一键构建

### 使用指南

#### 1.制作镜像
- 1.1 `make-images` 目录都是需要需要制作的镜像模板, 使用自带的模板您可以快速制作对应版本的 `go` 程序的镜像, 具体制作步骤请参考 `make-images/cms-api` 目录内的 `readme.md` .
- 1.2 `go` 开发的应用会随着业务开展，需求深入，版本不停地更新迭代，因此每一次制作镜像，意味着都是一次版本升级.


#### 2.编排容器
- 2.1 `docker-compose-files` 目录为需要编排的容器配置.

```code  

# 切换到 docker-compose-files 目录,  env 文件可以设置每个服务的版本号，docker-compose.yml 为具体的容器编排.

# 一次性启动服务，如果有些服务已经启动，会自动忽略
docker-compose  up -d

# 查看运行的所有服务，列表信息还有容器名、服务名、端口、运行状态等
docker-compose  ps -a  

#停止一个服务
docker-compose  stop  服务名

#启动一个服务
docker-compose  start  服务名


#重启一个服务
docker-compose  restart  服务名

# 如果某个子项目需要更新： 停止服务（参考前文命令） ——> 删除服务（命令如下） ——> 启动服务（参考下一条命令）
#删除服务
docker-compose  rm  服务名

```

####  启动以后运行效果
```code
[root@iZuf64h5335buga7hhg5knZ /home/wwwroot/ginskeleton-admin2-docker-compose/docker-compose-files]#docker-compose ps  -a
NAME                     COMMAND                  SERVICE                      STATUS              PORTS
gs-admin2-cms-api-v1.0   "/bin/sh -c ./${exe_…"   gs2_admin_cms_api            running             0.0.0.0:22002->22002/tcp
nginx-proxy-cms-api      "nginx -g 'daemon of…"   backend-cms-api-nginxproxy   running             0.0.0.0:22001->80/tcp
nginx-proxy-cms-ui       "nginx -g 'daemon of…"   backend-cms-ui-nginxproxy    running             0.0.0.0:22003->80/tcp
redis626                 "docker-entrypoint.s…"   redis626                     running             0.0.0.0:6380->6379/tcp


```

#### 4.避坑指南
```coe
#  1. redis启动时会报两个警告，消除redis警告的设置如下

vim  /etc/sysctl.conf   ，追加以下参数，保存，重启redis服务即可，该知识涉及到服务器参数调优，其他linux系统参数调优请自行百度：
net.core.somaxconn= 1024
vm.overcommit_memory=1

# 2.刷新使配置生效
sysctl -p

```

