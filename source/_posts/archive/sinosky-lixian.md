---
title: SinoSky 离线下载上线
tags:
  - Lixian
  - 离线下载
  - 迅雷
id: 115
categories:
  - SinoSky
date: 2013-03-09 13:05:41
---

SinoSky 离线下载 是一个基于迅雷离线服务的资源分享/下载网站，说白了就是免费的迅雷离线下载，支持迅雷、 IDM、aria2、wget 等下载工具。

&nbsp;

本服务非破解，用的是我自己的会员账号，由于每个账号同时下载的数量有限制，所以不可能供太多人使用。又由于迅雷在离线下载接口中加入了与gcid(文件全局id),uid(用户id),ti(任务id)和文件大小相关的验证码，导致不同用户的下载链接都不相同，所以无法通过账户分担方式均衡负载。

总而言之，这是一个小范围的项目，用的人多了就会关闭注册。想要长期稳定使用，请去买迅雷会员。

&nbsp;

网址：[http://dl.sinosky.org](http://dl.sinosky.org)，<del>你也可以通过 https 访问：[https://dl.sinosky.org](https://dl.sinosky.org) (程序运行在 OpenShift 上，所以证书是颁发给 *.rhcloud.com 的)，</del>免费的 CDN 不支持 https，凑活着用吧。

&nbsp;

注意：

1\. 使用浏览器下载文件需要安装跨站 Cookie 脚本，详见网站左边的说明，使用下载工具下载![](file:///C:\Users\Jat\AppData\Local\Temp\SGTpbq\2124\00076232.gif)不需要安装。

2\. 本站不支持 Internet Explorer，使用 IE 访问者送蓝屏一张。

3. <span style="color: #ff0000;">**不要**使用迅雷下载文件</span>，迅雷不支持 cookie 导入，Windows 下推荐使用 IDM，Linux 和 Mac OS 下推荐使用 aria2