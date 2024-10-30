---
title: 部署你的 Astro 站点至 Vercel
summary: 使用自己的域名，部署你的 Astro 站点至 Vercel 方案。
date: Oct 27 2024
draft: false
tags:
  - Astro
---

1. **部署后效果展示**
请访问   [秋云博客]( https://blog.qiuyun.cc) 查看部署效果

2. **首先你得有一个 Astro 项目**
比如说一个 Astro 构建的博客：[秋云博客 Github 地址](https://github.com/qiuqyCN/astro-sphere-blog)

3. **给项目添加 Vercel 适配器(网站使用的是静态页面，故跳过此步骤)**
在 Astro 项目根目录打开终端，执行如下命令：

```bash
npx astro add vercel
```

详情参考地址：https://docs.astro.build/zh-cn/guides/deploy/vercel/

4. **登录 Vercel **

![](image-20241027095554261.png)

5. **选择需要导入的项目**

![](image-20241027095936092.png)

6. **安装部署命令直接使用默认的即可**

![](image-20241027103203652.png)

7. **添加域名**

![](image-20241027105455032.png)

8. **给域名添加CNAME解析**
我这使用的是阿里云，在阿里云域名解析处添加如下记录

![](image-20241027114127040.png)

![](image-20241029092356243.png)

![](image-20241029092551274.png)

9. **完成后的效果**
![](image-20241029092811971.png)






