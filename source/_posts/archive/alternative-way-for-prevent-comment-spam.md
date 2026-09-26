---
title: 另类方法防垃圾评论
tags:
  - AJAX
  - 垃圾评论
  - 异步
id: 862
categories:
  - WordPress
date: 2014-01-27 22:24:28
---

这种方法我称之为“两步验证”，原理就是在用户点击评论框时，异步请求一个网址，然后根据当前的时间戳和预先设置的密钥生成 cookie 存储在客户端中，提交评论的时候验证这个 cookie 是否存在且正确。在用户注册等场合也可以使用这种方法。

这种方法也是[反向图灵测试](https://en.wikipedia.org/wiki/Reverse_Turing_test)的一种，但最大的问题是：任何请求都是可以模拟的，所以这种方法只能防拿着别人写好的垃圾评论机的菜鸟。如果真有人那么蛋疼，专门为这种方法写一个垃圾评论机，是防不住的，这也是我为什么不用 session 而用 cookie 的原因。目前唯一有效的反向图灵测试是复杂的验证码。

代码分为两部分，前端是 javascript，后端是 php，很简单，就不解释了。

<script src="https://gist.github.com/jat001/8639850.js"></script>