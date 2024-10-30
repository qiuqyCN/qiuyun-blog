---
title: "SpringBoot项目的Linux通用启动脚本"
summary: "SpringBoot项目的Linux通用启动脚本，包含启动/重启/停止/查看状态。"
date: "Sep 24 2024"
draft: false
tags:
    - Linux
    - Spring Boot
---
以下是一个简单的启动脚本示例：

```bash
#!/bin/bash
# 定义应用程序的名称
APP_NAME="自动测试项目"
# 定义应用程序的jar文件路径
APP_JAR_PATH="/data/auto_test/jar/auto-test-web-1.0.0.jar"
#项目环境，比如我的是开发环境是sit，生成环境是prd
ENV=dev
# 设置Java环境变量
JAVA_HOME="/usr/lib/jvm/java-8-openjdk"
JAVA_OPTS="-Xmx2048m -Xms1024m"
 
#使用说明，用来提示输入参数
usage() {
    echo "使用方法: 脚本名.sh [start|stop|restart|status]"
    echo "使用方法: ./脚本名.sh start 是启动"
    echo "使用方法: ./脚本名.sh stop 是停止"
    echo "使用方法: ./脚本名.sh status 是查看输出运行状态"
    echo "使用方法: ./脚本名.sh restart 是重启"
    exit 1
}
 
#检查程序是否在运行
is_exist(){
  pid=`ps -ef|grep $APP_JAR_PATH|grep -v grep|awk '{print $2}' `
  #如果不存在返回1，存在返回0
  if [ -z "${pid}" ]; then
   return 1
  else
    return 0
  fi
}
 
#启动方法
start(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is already running. pid=${pid} ."
  else
    nohup  $JAVA_HOME/bin/java $JAVA_OPTS -Dspring.profiles.active=$ENV -jar $APP_JAR_PATH > /dev/null 2>&1 &
    echo "${APP_NAME} start success"
  fi
}
 
#停止方法
stop(){
  is_exist
  if [ $? -eq "0" ]; then
    kill -9 $pid
  else
    echo "${APP_NAME} is not running"
  fi
}
 
#输出运行状态
status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is running. Pid is ${pid}"
  else
    echo "${APP_NAME} is NOT running."
  fi
}
 
#重启
restart(){
  stop
  start
}
 
#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac

```

#### 使用脚本：

1. 将上述内容保存为start-stop-restart.sh文件。
2. 赋予脚本执行权限：chmod +x start-stop-restart.sh。
3. 运行脚本：
	- 启动：./start-stop-restart.sh start
	- 停止：./start-stop-restart.sh stop
	- 重启：./start-stop-restart.sh restart
	- 查看状态：./start-stop-restart.sh status

#### 注意：

- 确保JAVA_HOME指向正确的Java安装路径。
- 根据你的应用程序需求调整JAVA_OPTS。
- 如果你的应用程序使用了外部配置文件，确保在启动命令中包含--spring.config.location参数指向正确的配置文件路径。
- 这个脚本使用ps和grep来查找进程ID，这可能不是最可靠的方法，因为它依赖于jar文件的路径。如果可能，使用更可靠的方法来获取PID，例如检查一个PID文件。
- 在stop函数中，kill命令默认发送SIGTERM信号。如果需要，你可以指定其他信号，例如kill -9 $PID来强制停止。