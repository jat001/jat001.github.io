---
title: Google 对 Chrome 与 YouTube 实行新的限制
tags:
  - 谷歌
  - Windows
  - YouTube
id: 662
categories:
  - 互联网
date: 2013-11-29 08:08:59
---

很久没有在 YouTube 上看到喜欢的视频了，今天偶然发现一段不错的短片，兴起准备下载下来与好友分享。谁知，不查不注意，一查才发现 Google 在 11 月份做了很多大动作。

照以往惯例，下载 YouTube 影片少说也要多装个 Chrome 插件（多则还需要下载桌面版程序）。众所周知，能够“窃取” YouTube 影片地址的插件绝不可能老老实实地扔在 Chrome 在线商店里，只有第三方 CRX 文件才有如此威能。正当我打开插件开发者网站准备下载单独提供的 CRX 文件时，大大的红字几乎充满了整个屏幕：“Windows 版 Google Chrome 即将全面禁止非 Chrome Web Store 来源的第三方插件！”呜呼，这个是个重磅新闻。第一次 Google 对 Chrome 做“安全改动”之后，Chrome 便不能直接“点击安装”第三方插件了；而后不久，Chrome 的安全系数再次得到加强，直接把 CRX 文件扔进 Chrome 数据目录的插件会在下一次 Chrome 运行时以黄色感叹号标出，并提示用户立即卸载……本以为插件战争就此告一段落，可惜不然，本月 13 日 Google 宣布：自 2014 年 1 月开始，Windows 版 Google Chrome 浏览器仅允许用户安装来自 Chrome Web Store 的第三方插件，所有以本地文件导入、注册表指向等方式安装的 CRX 格式插件均会停止工作！

这还没完……

失去了插件这个方便快捷的强力帮手，我们还有在线视频地址解析网站不是？抱着另外一线希望，我只得尝试在线解析后下载。效果不错，很快高清片源的下载地址便暴露出来，令人有些不解的是，1920 × 1080 的资源出现了两个下载地址，分别标注的是 (Audio Only) 和 (Video Only)，这是在搞什么？先不管了，能够正常下载到就是好事，大不了再合并嘛……不一会儿我就得到了两个同名文件，后缀分别是 MP4 和 M4A，看起来很不错的样子；播放一下，效果绝赞。现在，只要找个工具把这两个文件合并一下，马上就可以发给好友分享了。首选工具是 MKV Toolnix，MKV 可是大名鼎鼎的“全兼容”容器，所有热门资源几乎都可以不经转换无损封装进 MKV，对付 MP4 和 M4A 肯定不在话下。岂不知，奇怪的事情开始一个接一个地发生，无论是 MP4 还是 M4A 文件，MKV Toolnix 始终提示“所选文件不存在可播放的轨道”。

[![MKV 错误提示](http://bcs.duapp.com/sinosky-blog/2013/11/28/Track-Not-Found.png)](http://bcs.duapp.com/sinosky-blog/2013/11/28/Track-Not-Found.png)

&nbsp;

好吧，看来 MKV Toolnix 还真有挑剔的时候。第二个尝试的工具是 Bink Video Tools，各种大型游戏的过场动画都是使用这个工具封装成 BIK 文件的，也是比较流行的格式之一。选中文件，正方形“Bink it!”按钮点下去，剩下的应该就是等待了。可惜，Bink Video Tool 也没能弄懂 Google 对 YouTube 到底做了些什么，我只得到了：

[![Bink Video 错误提示](http://bcs.duapp.com/sinosky-blog/2013/11/28/Error-Opening.png)](http://bcs.duapp.com/sinosky-blog/2013/11/28/Error-Opening.png)

&nbsp;

我很不解，明明播放时好好的，Windows 也能够给出影片缩略图（这说明没有使用什么特别的格式），为什么就是不能合并呢？

[![Windows Explorer 缩略图](http://bcs.duapp.com/sinosky-blog/2013/11/28/File.png)](http://bcs.duapp.com/sinosky-blog/2013/11/28/File.png)

最终乱找了一番，发现 Google 在 10 月底、11 月初附近的时间开始在 YouTube 上试行叫做 adaptive bitrate streaming 的串流方法。目前，所有 1080p 高清分辨率的影片均以这种方式串流，用户不仅在下载时会得到音、视频分离的同名文件，进行播放、解码时也会遇到各种问题。庆幸的是，YouTube 在线观看并没有受到影响。不知，这是不是 Google 有意而为之呢？