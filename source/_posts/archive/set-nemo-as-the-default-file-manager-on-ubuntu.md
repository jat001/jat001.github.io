---
title: 使用 Nemo 替代 Ubuntu 自带的文件管理器
tags:
  - Nautilus
  - Nemo
  - Ubuntu
  - 文件管理器
id: 815
categories:
  - 小技巧
date: 2014-01-17 16:37:36
---

Nautilus 是 Ubuntu 下默认的文件管理器，为什么要替换它呢？如果你用过 Ubuntu 13.04 或 13.10，我想你就不会问这个问题了，真是“谁用谁知道”。

Nemo 虽然没有 Windows 下的 Total Commander 那么强大，但作为一个文件管理器已经足够了，而且能与 GNOME 完美结合。

[![Screenshot_of_Nemo_(file_manager)](/uploads/2014/01/Screenshot_of_Nemo_file_manager.png)](/uploads/2014/01/Screenshot_of_Nemo_file_manager.png)

&nbsp;

首先，安装需要的程序，dconf 是一个编辑系统配置（主要是桌面环境）的程序。

<pre class="lang:sh">
sudo apt-get install dconf-tools nemo
</pre>

如果你需要使用 Ubuntu 自带的归档管理器——File Roller，不要忘了把 nemo-fileroller 也装上。

然后禁用 Nautilus 绘制桌面图标：

<pre class="lang:sh">
gsettings set org.gnome.desktop.background show-desktop-icons false
</pre>

当然，你也可以使用 dconf-editor 来修改。

[![2014-01-17 16:22:05的屏幕截图](/uploads/2014/01/2014-01-17-162205的屏幕截图.png)](/uploads/2014/01/2014-01-17-162205的屏幕截图.png)

Nemo 默认开启了绘制桌面图标，这时候打开它就应该可以了。如果你想使用 Nautilus 来绘制桌面图标，而不是 Nemo 的话：

<pre class="lang:sh">
gsettings set org.nemo.desktop show-desktop-icons false
gsettings set org.gnome.desktop.background show-desktop-icons true
</pre>

这样做以后，会使用 Nautilus 来打开桌面上的文件夹，而不是 Nemo。

最后，把 Nemo 设置成默认的文件管理器。

<pre class="lang:sh">
xdg-mime default nemo.desktop inode/directory application/x-gnome-saved-search
</pre>

&nbsp;

如果你想让 Nautilus 重新成为默认的文件管理器的话，首先按照上面的说明使 Nautilus 来绘制桌面图标。

然后使用如下的命令设置 Nautilus 为默认的文件管理器。

<pre class="lang:sh">
xdg-mime default nautilus.desktop inode/directory application/x-gnome-saved-search
</pre>

最后卸载 Nemo 就可以了。

<pre class="lang:sh">
sudo apt-get purge nemo
</pre>