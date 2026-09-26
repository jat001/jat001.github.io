---
title: 晒晒我的黑苹果配置
tags:
  - Mac
  - Mac OS
  - Macintosh
  - 黑苹果
id: 245
categories:
  - Geek
date: 2013-04-06 19:20:57
---

黑苹果（Hackintosh），是指在非苹果生产或非苹果授权生产的普通 x86 架构 PC 上安装 Mac OS 的行为，而这样安装上去的 Mac OS 就被称为 Hackintosh，与白苹果——在苹果机（Macintosh）上面安装原版 Mac 系统相对。

黑苹果更多的是研究技术的乐趣，对于工作/学习需要的人来说，我更推荐买苹果机。黑苹果最大的遗憾就是不能享受苹果原装配件（虽然我不知道到底有什么好的），对于伸手党，黑苹果不适合你。

对于初学者，我推荐远景的这篇[帖子](http://bbs.pcbeta.com/viewthread-1064870-1-1.html)，从引导到系统，从安装到驱动，基本上很全了，下面提到的所有帖子、驱动和软件，这个向导帖中都有。另外，请善用搜索引擎，如果在中文的论坛中找不到想要的内容，可以试试用英文搜索，国外的相关论坛已经很成熟了，当然，国内的诸如远景黑苹果讨论区等也很成熟。

&nbsp;

下面晒晒我的黑苹果配置及驱动，从使用角度来说已经完美，仅供参考，只写了重要的。

CPU： Intel Core i5-2300 （系统自带，另需 [AppleIntelCPUPowerManagement](http://bbs.pcbeta.com/viewthread-1056182-1-1.html)）

主板： 华硕 P8P67 

显卡： NVIDIA GeForce GTS 450 （系统自带，需 SMBios.plist，不然会黑屏，附上我的，**请先确认配置与我的相近**）

<pre class="lang:xml " >
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>SMbiosdate</key>
	<string>04/22/11</string>
	<key>SMbiosvendor</key>
	<string>Apple Inc.</string>
	<key>SMbiosversion</key>
	<string>IM121.88Z.0047.B0A.1104221555</string>
	<key>SMboardproduct</key>
	<string>Mac-942B5BF58194151B</string>
	<key>SMfamily</key>
	<string>iMac</string>
	<key>SMmanufacturer</key>
	<string>Apple Inc.</string>
	<key>SMproductname</key>
	<string>iMac12,1</string>
	<key>SMserial</key>
	<string>C02J16Y5DHJT</string>
	<key>SMsystemversion</key>
	<string>1.0</string>
</dict>
</plist>
</pre>

板载网卡： [RealtekRTL81xx](http://bbs.pcbeta.com/viewthread-797733-1-1.html)

板载声卡： [VoodooHDA](http://bbs.pcbeta.com/viewthread-1272596-1-1.html) （我实在听不出原生驱动与仿冒驱动有什么区别，可能我耳朵背吧……有能力的可以参考 [Realtek ALC892声卡驱动之路](http://bbs.pcbeta.com/viewthread-927098-1-1.html)）

USB 3.0： [GenericUSBXHCI](http://bbs.pcbeta.com/viewthread-1303194-1-1.html)

&nbsp;

系统我推荐使用[懒人版](http://bbs.pcbeta.com/viewthread-1295195-1-1.html)（帖子2楼的教学比较适合新手，推荐阅读），千万不要使用各种整合镜像。要成功引导和使用，你还需要[变色龙](http://bbs.pcbeta.com/viewthread-971434-1-1.html)和[FakeSMC](http://bbs.pcbeta.com/viewthread-1082609-1-1.html)。

关于 org.chameleon.Boot.plist 和 SMBios.plist，推荐阅读紫米的这个[帖子](http://bbs.pcbeta.com/viewthread-798366-1-1.html)。

常用的软件还有 [硬盘安装助手](http://bbs.pcbeta.com/viewthread-1023083-1-1.html)（往硬盘中写入安装镜像，Windows）、[Chameleon Wizard](http://bbs.pcbeta.com/viewthread-1282608-1-1.html)（安装、更新引导，org.chameleon.Boot.plist 和 SMBios.plist 修改等，Mac OS）、[Kext Wizard](http://bbs.pcbeta.com/viewthread-853346-1-1.html)（安装、更新驱动，修复系统权限，清空驱动缓存等，Mac OS）。至于 Windows 下读写 HFS+、Mac OS 下读写 NTFS等，向导帖中都有，不再赘述。

&nbsp;

本文只是抛砖引玉，安装黑苹果遇到的问题可能远不止这些，也没有涉及到修改 DSDT，如果配置比较特殊，可能只有自行修改 DSDT 才能解决，不过黑苹果的乐趣不就是这些吗？