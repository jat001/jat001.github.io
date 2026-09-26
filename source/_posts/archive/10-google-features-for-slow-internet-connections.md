---
title: Google 为龟速网络准备的十项功能
tags:
  - Chrome
  - 谷歌
  - Google Public DNS
  - Goolge Images
  - JavaScript
  - YouTube
  - YouTube Feather
id: 85
categories:
  - 互联网
date: 2012-08-18 06:53:35
---

如果你的网速很慢或很不稳定，想正常使用 Google 的各项服务将变得异常艰难。以下是 Google 提供的一些备用方案：

1\. Gmail 的基本 HTML 模式 - [https://mail.google.com/mail/h/](https://mail.google.com/mail/h/)。虽然功能不及常规的 Gmail 界面，但也是个五脏俱全的环境，收发邮件毫无压力。该模式只用了极少量的 JavaScript，几乎每次点击都会产生页面跳转，但这些页面加载起来并不困难。因此基本 HTML 界面更适合网速慢的用户。你甚至可以将其设为默认界面。

2\. 在[搜索偏好页面](https://www.google.com/preferences?hl=zh-Hans)禁用 Google Instant。只需选中“从不显示即搜即得结果”并点击“保存”，Google 就不会再随着关键词的输入加载搜索结果了。不过这时 Google 还是会显示搜索建议，如需关闭，可通过[此链接](https://www.google.com/search?complete=0)访问。

3. [YouTube Feather](http://www.youtube.com/feather_beta) 界面提供了“最低延迟的观看体验”。开启后仍然可以播放视频、查看相关视频、订阅用户更新和阅读评论，但这些就是该界面提供的全部功能了。由于网速很慢，最好在分辨率列表中选择“240p”。

4\. 旧版 Google 图像搜索界面更适合龟速网络，需要通过[此链接](https://www.google.com/imghp?sout=1)进入。之所以不建议在网页上切换，是因为“切换到基本版本”的链接在标准版页面的最底部，而标准版会随着页面滚动不断加载新结果……

5\. Chrome 的 click-to-play 功能非常给力，可以按需加载需要插件才能显示的内容。也就是说 Flash、Java 等应用在点击灰色矩形后才会加载。该功能可以替代 FlashBlock 等扩展，并且是 Chrome 的内置功能。启用方法是进入 chrome://chrome/settings/content，选择“插件”中的“click to play”，再点“确定”即可。

6\. Google 的[转换器](http://google.com/gwt/n)可以按移动设备的需求优化页面，不过在计算机上同样可用。只需输入网址，Google 就会显示该页面的压缩版本——小图、简单排版，且没有 JavaScript。

7\. 纯文字版的 Google 网页快照可以直接从 Google 的抓取缓存中提取简化版的页面。虽然可能不是很新的版本，但至少可以快速加载。可以通过网页快照顶部的“纯文字版本”链接进入，也可以直接用下面的网址：

www.google.com/search?strip=1&amp;q=cache:www.domain.com

（用网页 URL 代替 www.domain.com）

8\. Chrome 的 user agent 自定义功能可以伪装成其他浏览器。如果网速非常慢，伪装成智能手机会有明显改观：很多网站提供了轻量级的移动版界面。要自定义 user agent 字符串，可以打开开发工具（Windows/Linux 下：Ctrl+Shift+I，Mac 下：Command-Option-I），点击窗口底部的“设置”按钮，点选“user agent”下的“更改 user agent”，在下拉框中选择“Android 4.0.2 &#8211; Google Nexus”或“iPhone &#8211; iOS 5.0”，并取消选中“更改设备参数”。

9\. 如果你正在使用的 DNS 服务器非常慢，改用 [Google Public DNS](https://developers.google.com/speed/public-dns/) 便成为加快浏览速度简单有效的方法。[Google 解释说](https://developers.google.com/speed/public-dns/)，“DNS 协议是网络基础架构极其重要的一环，它为互联网提供电话簿服务：计算机在访问网站时需要执行 DNS 查询。复杂页面在开始加载前需要执行多次 DNS 查询。计算机每天可能会执行上千次查询。”

10\. 使用支持 [SPDY](http://www.chromium.org/spdy/) 协议的浏览器。该协议“为在万维网低延迟传输内容而设计”。目前 Chrome 和 Firefox 浏览器已经支持 SPDY，而很多 Google 网站也已部署该协议。

如果 Chrome 和 Firefox 都不能满足需求，可以考虑选用为低速连接优化的浏览器 [Opera](http://www.opera.com/) 并打开 [Opera Turbo](http://www.opera.com/browser/turbo/) 模式，该功能可以利用 Opera 的服务器压缩页面及页面内的资源。[Opera 使用 Google 的 WebP 图像格式](http://googlesystem.blogspot.com/2012/07/my.opera.com/chooseopera/blog/on-a-horse-opera-turbo-to-the-rescue)节约流量，同时能展现更优质的画面。Opera Turbo 的平均压缩率可达[约 60%](http://www.opera.com/smw/2010/02/)。Android、Symbian 及 Windows Mobile 平台的 [Opera Mobile 应用](http://www.opera.com/mobile)也提供了 Turbo 模式，另外 [Opera Mini 应用](http://www.opera.com/mini)提供了更高的压缩率（高达 90%）。Opera Mini 支持大多数手机，包括纯功能手机和 iPhone。

Via [GOS

](http://googlesystem.blogspot.com/2012/07/10-google-features-for-slow-internet.html)Pic via[ jfdaily](http://www.jfdaily.com/topic/185055)

Posted on [guao](http://www.guao.hk/posts/10-google-features-for-slow-internet-connections.html)