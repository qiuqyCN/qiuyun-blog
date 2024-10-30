---
title: "Portainer安装"
summary: "如何通过Docker安装Portainer？"
date: "Oct 15 2024"
draft: false
tags:
    - Docker
    - Portainer
---
Portainer是一个开源的、基于Web的Docker管理界面，它允许用户通过简单的Web界面来管理Docker容器、镜像、网络和卷等。以下是安装Portainer的详细步骤：

### 一、前提条件

1. **已安装Docker**：确保系统中已经安装了Docker，可以通过运行`docker --version`来检查Docker是否已安装及其版本。
2. **系统资源**：确保系统具有足够的CPU、内存和存储空间来运行Portainer。
3. **网络连接**：确保系统可以正常连接到互联网，以便从Docker Hub拉取Portainer镜像。

### 二、安装步骤

1. **搜索Portainer镜像**

	* 打开终端或命令行界面。
	* 输入命令`docker search portainer`来搜索Portainer镜像。在搜索结果中，你会看到两个版本：`portainer/portainer`（早期版本，已不再更新）和`portainer/portainer-ce`（新版本，推荐使用）。

2. **拉取Portainer镜像**

	* 输入命令`docker pull portainer/portainer-ce`来拉取Portainer的社区版（CE）镜像。

3. **创建数据卷（可选）**

	* 为了持久化存储Portainer的配置和数据，可以创建一个Docker数据卷。输入命令`docker volume create portainer_data`来创建一个名为`portainer_data`的数据卷。

4. **启动Portainer容器**

	* 使用以下命令启动Portainer容器：
	```bash
	docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /dockerData/portainer:/data --name portainer portainer/portainer-ce
	```
	* 其中：
		+ `-d`：表示以守护进程模式运行容器。
		+ `-p 9000:9000`：将容器的9000端口映射到宿主机的9000端口（可以根据需要更改端口号）。
		+ `--restart=always`：确保容器在Docker启动时自动重启。
		+ `-v /var/run/docker.sock:/var/run/docker.sock`：将Docker守护进程的套接字挂载到容器中，以便Portainer可以控制Docker。
		+ `-v /dockerData/portainer:/data`：将宿主机的目录（这里为`/dockerData/portainer`，可以根据需要更改）挂载到容器中，用于保存Portainer的配置和数据。如果之前创建了数据卷，可以将其替换为`-v portainer_data:/data`。
		+ `--name portainer`：为容器指定一个名称（这里为`portainer`，可以根据需要更改）。
		+ `portainer/portainer-ce`：指定要使用的Portainer镜像。

5. **验证Portainer容器**

	* 输入命令`docker ps`来检查Portainer容器是否成功启动。在输出结果中，你应该能看到名为`portainer`的容器正在运行。

6. **访问Portainer界面**

	* 打开浏览器，输入`http://<你的IP地址>:9000`（将`<你的IP地址>`替换为你的服务器IP地址或域名）。
	* 首次访问时，你需要设置管理员账号和密码。设置完成后，登录到Portainer界面。

7. **配置Portainer**

	* 在Portainer界面中，你可以选择要管理的Docker环境（本地或远程）。
	* 根据需要添加、删除或修改容器、镜像、网络和卷等。

### 三、注意事项

1. **端口冲突**：如果9000端口已被其他服务占用，你需要更改Portainer容器的端口映射。
2. **数据持久化**：为了确保Portainer的配置和数据在容器重启后不会丢失，建议使用数据卷或挂载宿主机目录来持久化存储。
3. **安全性**：确保你的Portainer界面只可通过受信任的网络访问，并设置强密码来保护管理员账号。

通过以上步骤，你应该能够成功安装并配置Portainer，从而方便地管理你的Docker环境。