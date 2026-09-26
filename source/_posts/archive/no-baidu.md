---
title: 净化互联网环境，从不用百度开始！
tags:
  - 搜索
  - 搜索引擎
  - 百度
id: 196
categories:
  - SinoSky
date: 2013-02-25 17:01:57
---

百度做过什么，我想大部分人都知道，经过慎重考虑，我决定在博客上加入如下代码：

<pre class="lang:html ">
<div id="nobaiduDialog" style="background-color:#fff;border-radius:15px;display:none;padding:20px;min-width:450px;min-height:180px;">
    [](javascript: easyDialog.close(); "关闭")
    ![](//www.sinosky.org/static/nobaidu.jpg)

        检测到你还在使用百度这个搜索引擎，

        做为一个程序员，这是一种自暴自弃！

        [净化互联网环境，从不用百度开始！](//www.sinosky.org/no-baidu.html)

</div>

<script type="text/javascript" src="//www.sinosky.org/wp-content/themes/inove/js/easydialog.min.js"></script>

<script type="text/javascript">
var url=document.referrer;
if (url && url.search("http://")>-1) {
    var refurl = url.match(/:\/\/(.[^/]+)/)[1];
    if (refurl.indexOf("baidu.com")>-1) {
        easyDialog.open({
            container : 'nobaiduDialog',
        });
    }
};
</script>
</pre>

效果如下：

[![Snap1](http://1-ps.googleusercontent.com/x/www.sinosky.org/bcs.duapp.com/sinosky-blog/2013/02/25/515x250xSnap11.png.pagespeed.ic.8CagK4iS5w.jpg)](http://bcs.duapp.com/sinosky-blog/2013/02/25/Snap11.png "Snap1")

作为一个小站长，我肯定干不过百度，但我仍然要这么做。如果你觉得我有病，欢迎来喷我；如果你支持我的做法，请在你的网站上也加入上面的代码。