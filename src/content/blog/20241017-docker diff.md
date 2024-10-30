---
title: "docker diff"
summary: "docker diff 命令说明"
date: "Oct 17 2024"
draft: false
tags:
    - Docker
---
`docker diff`命令是用于比较Docker容器不同版本提交的文件差异。该命令会列出容器内三种文件状态变化，分别是：A（Add，添加）、D（Delete，删除）、C（Change，修改）。

### 使用方法

`docker diff`命令的基本语法如下：

```bash
docker diff CONTAINER
```

其中，`CONTAINER`可以是容器的ID或名称。

### 示例

1. **查看运行中的容器文件变化**

   假设有一个名为`my_container`的正在运行的容器，可以使用以下命令查看其文件变化：

   ```bash
   docker diff my_container
   ```

   如果容器内的某个文件被修改、添加或删除，`docker diff`命令将分别显示`C`、`A`和`D`前缀，后跟文件路径。

2. **查看未运行的容器文件变化**

   如果创建了一个容器但未运行，使用`docker diff`命令将不会显示任何文件变化，因为容器尚未启动，其文件系统尚未被修改。

### 注意事项

* `docker diff`命令仅显示容器文件系统的变化，而不涉及主机文件系统的变化。
* 如果需要同步删除容器内被删除的文件到主机上，可以结合使用`docker diff`命令和脚本或程序来实现。

总之，`docker diff`命令是Docker中一个非常有用的工具，可以帮助用户快速了解容器文件系统的变化情况。