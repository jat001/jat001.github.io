---
title: 分享几个 Linux 启动脚本
tags:
  - Bash
  - Shell
  - Startup
  - 启动
  - 脚本
id: 642
categories:
  - Linux
date: 2013-11-22 17:41:55
---

一些自用的启动脚本，放在 `/etc/init.d` 中，格式都一样，只不过启动命令有些不同。

你需要使用 `chkconfig`, `sysv-rc-conf` 或 `update-rc.d` 添加它们到系统服务中。

不要忘了更改文件权限为 755（`-rwxr-xr-x`）、所有者为 root、群组为 root。

你也可能需要更改程序路径、配置文件路径、日志文件路径或 pid 文件路径。

&nbsp;

[项目地址](https://github.com/jat001/startup-script)

&nbsp;

使用脚本启动程序要 5-6 秒，不是因为程序需要 5-6 秒才能启动，只是为了保证程序能正常运行。

像没有配置文件这种错误进程可能会马上退出，并返回正确的状态码；但如果配置文件有错误，或者因为其他原因，无法正常启动，可能就无法得知进程已经退出。

所以这里用 5-6 秒的时间，保证程序能正常启动。当然，如果程序在这以后发生错误，就无法得知了。

&nbsp;

一些程序有 daemon 并自己产生日志文件和 pid 文件，所以不需要所以其他命令；而一些程序没有 daemon，脚本使用 `nohup command &` 使之在后台运行，使用 `$!` 获取 pid。

不过像 aria2 这样的奇葩程序，有 daemon 模式却不产生 pid 文件，只有使用 `pidof` 等命令获取了。

&nbsp;

如果存在 pid 文件，但相应的进程却不存在，脚本会删除 pid 文件，并告知用户程序未运行。

&nbsp;

再附送个 Windows 下的 sslocal，用 vbs 隐藏 cmd。

<script src="https://gist.github.com/jat001/7596027.js"></script>