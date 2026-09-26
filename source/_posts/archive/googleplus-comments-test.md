---
title: Google+评论组件测试
tags:
  - comments
  - Google Plus
  - JavaScript
  - 谷歌
id: 39
comment: false
categories:
  - SinoSky
date: 2013-04-29 11:33:06
---

看见 Binux 的[这篇文章](http://blog.binux.me/2013/04/googleplus-comments-test/)，于是移植过来了。

&nbsp;

Google+ 给 Blogger 添加了 Google+ 的评论组件，看起来可以移植到别的地方，于是:

<pre class="lang:html " >
<div id='gpluscomments'></div>
<script src='https://apis.google.com/js/plusone.js' type='text/javascript'></script>
<script>
    gapi.comments.render('gpluscomments', {href: '<?php the_permalink(); ?>', first_party_property: 'BLOGGER', view_type: 'FILTERED_POSTMOD'})
</script>
</pre>

&nbsp;

给离线下载加了个评论，现在你可以尽情吐槽了。对于前端苦逼来说，我已经尽力了……

[![201305030731](http://bcs.duapp.com/sinosky-blog/2013/05/03/201305030731.png)](http://bcs.duapp.com/sinosky-blog/2013/05/03/201305030731.png "201305030731")

&nbsp;

<div id="gpluscomments"></div>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script>
    gapi.comments.render('gpluscomments', {href: 'http://www.sinosky.org/googleplus-comments-test.html', first_party_property: 'BLOGGER', view_type: 'FILTERED_POSTMOD'})
</script></p>