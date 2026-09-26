---
title: 自行编译 Mac 版变色龙，去掉开机等待5秒的错误提示
tags:
  - 变色龙
  - 黑苹果
id: 200
categories:
  - Geek
date: 2013-03-26 17:06:41
---

变色龙（Chameleon）是干什么的我相信玩黑苹果（Hackintosh）的都知道，大部分人用 Chameleon 引导 Mac OS 的时候都会遇到下面的错误提示，本文就教大家怎么去掉这烦人的5秒等待。

<pre class="lang:plain " >
Errors encountered while starting up the computer.
Pausing 5 seconds...
</pre>

&nbsp;

1\. 首先要确保已经安装好 Xcode 和 Command Line Tool，Command Line Tool 在 Xcode &#8211; Preferences (command + ,) 中可以找到。

[![2013-03-26 07.38.36](http://bcs.duapp.com/sinosky-blog/2013/03/25/2013-03-26-07.38.36.png)](http://bcs.duapp.com/sinosky-blog/2013/03/25/2013-03-26-07.38.36.png "2013-03-26 07.38.36")

2\. 获取最新的 Chameleon 源代码，在终端中输入：

<pre class="lang:shell " >
svn co http://forge.voodooprojects.org/svn/chameleon/trunk/
</pre>

3\. 进入 `trunk – i386 – boot2` 文件夹，找到 `boot.c` 文件，用文本编辑程序打开。

4\. 在160行左右找到

<pre class="lang:c " >
if (gErrors) {
printf("Errors encountered while starting up the computer.\n");
printf("Pausing %d seconds...\n", kBootErrorTimeout);
sleep(kBootErrorTimeout);
}
</pre>

注释掉，

<pre class="lang:c " >
/*
if (gErrors) {
printf("Errors encountered while starting up the computer.\n");
printf("Pausing %d seconds...\n", kBootErrorTimeout);
sleep(kBootErrorTimeout);
}
*/
</pre>

[![2013-03-26 7.55.38](http://bcs.duapp.com/sinosky-blog/2013/03/25/2013-03-26-7.55.38.png)](http://bcs.duapp.com/sinosky-blog/2013/03/25/2013-03-26-7.55.38.png "2013-03-26 7.55.38")

5\. 在终端中进入 trunk 文件夹，编译生成开机引导文件（trunk/sym/i386/）。

<pre class="lang:shell " >
cd trunk
make
</pre>

6\. 更新 Chameleon 引导文件，推荐使用 Chameleon Wizard 安装，[下载地址](http://bcs.duapp.com/sinosky-drive/2013/03/19/c35649659af01a682cb03e87395d2a39.zip)。

[![2013-03-26 8.53.55](http://bcs.duapp.com/sinosky-blog/2013/03/26/2013-03-26-8.53.55.png)](http://bcs.duapp.com/sinosky-blog/2013/03/26/2013-03-26-8.53.55.png "2013-03-26 8.53.55")