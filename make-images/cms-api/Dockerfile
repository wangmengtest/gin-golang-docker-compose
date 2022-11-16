FROM golang:1.17-alpine AS builder
RUN export GOPROXY=https://goproxy.io,direct
RUN go env -w GOPROXY=https://goproxy.cn,direct
WORKDIR /root/golang_data/gin-skeleton-admin2-backend
COPY  ./code/gin-skeleton-admin2-backend/  /root/golang_data/gin-skeleton-admin2-backend
RUN go mod tidy -compat=1.17
#ADD main.go /root/golang_data/gin-skeleton-admin2-backend/cmd/web
RUN go build cmd/web/main.go

#FROM  alpine:3.14
LABEL MAINTAINER="Ginskeleton <553168431@qq.com>"

ENV exe_file_fullname=main \
    work=/root/golang_data/gin-skeleton-admin2-backend \
    data_dir=/root/golang_data/gin-skeleton-admin2-backend/storage

WORKDIR  $work

COPY  ./conf/     $work
#COPY  ./${exe_file_fullname} $work
VOLUME  $data_dir
# 修改镜像源为国内镜像地址
RUN set -ex \
                && sed   -i   's/http/#http/g'  /etc/apk/repositories  \
                &&  sed   -i  '$ahttp://mirrors.ustc.edu.cn/alpine/v3.14/main'  /etc/apk/repositories   \
                &&  sed   -i  '$ahttp://mirrors.ustc.edu.cn/alpine/v3.14/community'  /etc/apk/repositories  \
                &&  sed   -i  '$ahttps://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/main'  /etc/apk/repositories   \
                &&  sed   -i  '$ahttps://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/community'  /etc/apk/repositories   \
                &&   apk   update  \
                && apk  add --no-cache  --virtual .build-deps \
                  -U tzdata  \
                && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
                && echo "Asia/shanghai" >> /etc/timezone \
                && chmod +x  $work/${exe_file_fullname} \
                &&   apk del .build-deps  \
                &&   echo -e "\033[1;36m 镜像制作完成 \033[0m\n"
EXPOSE 22002
ENTRYPOINT  ./${exe_file_fullname}
