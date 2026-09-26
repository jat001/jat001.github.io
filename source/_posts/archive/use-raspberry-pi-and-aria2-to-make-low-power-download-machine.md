---
title: 使用 Raspberry Pi 和 aria2 打造低功耗下载机
tags:
  - DIY
  - 下载机
  - 树莓派
id: 32
categories:
  - Geek
date: 2013-05-11 23:57:17
---

树莓派（Raspberry Pi）是一款基于 Linux 系统的只有一张信用卡大小的单板机电脑，详细介绍见[维基百科](https://zh.wikipedia.org/wiki/%E6%A0%91%E8%8E%93%E6%B4%BE)。利用树莓派廉价、低功耗、可扩展的特性，我们可以用它打造下载机、开关、小型服务器，甚至是电话。

&nbsp;

一. 准备

*   树莓派，红板（Made in China）比较便宜， 也没发现有什么质量问题

*   4G 以上 SD 卡，推荐 class 10，树莓派支持的 SD 卡[列表](http://elinux.org/RPi_SD_cards)

*   5V 电源，最低 700mA，推荐 1A 以上

*   有源 USB Hub，推荐使用有隔离的，即不能向树莓派反向供电的

*   移动硬盘、网线、USB 键鼠（可选）、HDMI 线或 HDMI 转 DVI 线（可选）

&nbsp;

二. 安装及配置系统

1.  官方的[下载页面](http://www.raspberrypi.org/downloads)提供了四种镜像供选择，我推荐 Linux 初学者使用 Raspbian “wheezy”，有一定经验的 Linux 用户使用 Arch Linux ARM，本文以 Arch Linux ARM 为例。

2.  Windows 下使用 [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) 写入镜像到 SD 卡，Linux 下使用 `dd` 命令写入。[Raspberry Pi](http://elinux.org/RPi_Easy_SD_Card_Setup) 和 [Arch Linux](https://wiki.archlinux.org/index.php/USB_Installation_Media) 的官方 wiki 都有详细说明，不再赘述。

注意：引导在镜像中就已经配置好了，直接把镜像写入 SD 卡中就可以使用，不需要其他操作。

3.  Arch Linux 的官方 wiki 有安装系统的[详细说明](https://wiki.archlinux.org/index.php/Beginners%27_Guide)，这里亦不再赘述。如果只是用 Raspberry Pi 当下载机的话，配置好 ip 就可以了，如果路由器使用 DHCP 自动分配 ip，则插上电源和网线就行了。

4.  为了方便，本文使用 `ssh` 管理 Raspberry Pi。

初次使用你需要以类似 `ssh root@192.168.1.3` 来登录 Raspberry Pi。为了不每次登录时都输入密码，你可以使用 `ssh-keygen -t rsa` 生成密钥对，并把公钥加入到 `~/.ssh/authorized_keys` 中。然后编辑本机上的 `~/.ssh/config`，加入

<pre class="lang:plain " >
Host pi
    HostName 192.168.1.3
    User root
    StrictHostKeyChecking no
    UserKnownHostsFile=/dev/null
</pre>
</p>

然后你就可以使用 `ssh pi` 来登录 Raspberry Pi 了。

5.  编辑 `/etc/pacman.d/mirrorlist`（可选），默认国内用户使用清华大学的源，但那个源经常挂，推荐使用美国加利福尼亚的源。

注意：Arch Linux 和 Arch Linux ARM 的源不一样，不要混用！

6.  配置开机自动登录 root，参见[官方 wiki](https://wiki.archlinux.org/index.php/Automatic_login_to_virtual_console)。

7.  编辑 `/etc/fstab`，实现开机自动挂载移动硬盘，比如

<pre class="lang:plain " >
UUID=000AE1FF0005EA71 /media/System ntfs-3g defaults,nofail 0 0
UUID=000A675F0001C38E /media/Files ntfs-3g defaults,nofail 0 0
</pre>

关于 `fstab` 的详细说明及挂载选项，参见[官方 wiki](https://wiki.archlinux.org/index.php/Fstab)。

&nbsp;

三. 安装及配置 aria2

1.  安装 aria2、nginx 和 git（nginx 和 git 一会要用到），设置 nginx 开机自启动

<pre class="lang:shell ">
pacman -S aria2 nginx git
systemctl enable nginx
</pre>

2.  配置 aria2，编辑 `~/.aria2/aria2.conf`，所有选项见[官方文档](http://aria2.sourceforge.net/manual/en/html/aria2c.html)，以下是一些示例

<pre class="lang:plain ">
# 断点续传
continue=true
# 以后台程序运行
daemon=true
# 下载目录，没有该目录用 mkdir 命令新建，不然会报错
dir=/media/Files/Downloads/
# 开启 rpc 模式
enable-rpc=true
# 关闭文件预分配，建议关闭，不然下个大文件得等半天
file-allocation=none
# 命令行模式下多任务下载
force-sequential=true
# 读取下载进度文件，没有该文件用 touch 命令新建，不然会报错
input-file=/media/Files/Downloads/aria2.session
# 保存日志到文件，没有该文件用 touch 命令新建，不然会报错
log=/var/log/aria2.log
# 日志级别
log-level=notice
# 最大同时下载任务数
max-concurrent-downloads=3
# 同服务器最大连接数
max-connection-per-server=5
# 开启命令行模式下的参数化模式，比如 http://{sv1,sv2,sv3}/foo.iso 或 http://host/image[000-100:2].img
parameterized-uri=true
# YAAW 需要
rpc-allow-origin-all=true
# rpc 模式下，允许从外部访问
rpc-listen-all=true
# 保存 BT 种子和磁力链接的元数据
rpc-save-upload-metadata=true
# 保存下载进度到文件，没有该文件用 touch 命令新建，不然会报错
save-session=/media/Files/Downloads/aria2.session
# 自动保存下载进度到文件的时间
save-session-interval=60
# 单文件最大线程数
split=5
</pre>

3.  配置 aria2 开机自启动，编辑 `~/.bash_profile`

<pre class="lang:shell " >
if [ ! -d "/media/Files/Downloads/" ]; then
    mkdir '/media/Files/Downloads/'
fi
if [ ! -f "/media/Files/Downloads/aria2.session" ]; then
    touch '/media/Files/Downloads/aria2.session'
fi
if [ ! -f "/var/log/aria2.log" ]; then
    touch '/var/log/aria2.log'
fi

aria2=ps -ef | grep 'aria2c' | grep -v 'grep aria2c'
if [ -z "$aria2" ]; then
    /usr/bin/aria2c
fi
</pre>

4.  aria2 本身没有 GUI，为方便使用，我们需要使用基于 rpc 模式的前端。比较好的有 ziahamza 的 [webui-aria2](https://github.com/ziahamza/webui-aria2) 和 binux 的 [yaaw](https://github.com/binux/yaaw)，本文以 webui-aria2 为例。

删除 `/usr/share/nginx/html/`，下载 webui-aria2

<pre class="lang:shell " >
rm -rf /usr/share/nginx/html/
git clone https://github.com/ziahamza/webui-aria2.git /usr/share/nginx/html/
</pre>

现在我们能通过 `http://192.168.1.3/` 访问 webui-aria2 了。

注意：每次升级 nginx 都会修改 `index.html`，不要忘记 `git checkout index.html`。

5.  修改 `Setting` &#8211; `Connection Settings` &#8211; `Aria2 RPC host and port` 中的 `Enter the host:` 为 `192.168.1.3`，成功连接到 aria2。

    [![201305120345](http://bcs.duapp.com/sinosky-blog/2013/05/11/201305120345.png)](http://bcs.duapp.com/sinosky-blog/2013/05/11/201305120345.png "201305120345")
6.  <p>SinoSky 离线下载用户可以参考[这篇文章](http://www.sinosky.org/add-ur-from-sinosky-lixian-to-aria2.html)使用 rpc 模式导出，迅雷会员可以使用 [ThunderLixianExporter](http://binux.github.io/ThunderLixianExporter/) 的 YAAW 导出功能。