---
title: PHP 中流程控制的替代语法
tags:
  - control structures
  - PHP
  - 替代语法
  - 流程控制
  - 简写
id: 628
categories:
  - 程序员
date: 2013-11-13 13:49:51
---

PHP 提供了一些流程控制的替代语法，包括 `if`，`while`，`for`，`foreach` 和 `switch`。替代语法的基本形式是把左花括号（`{`）换成冒号（`:`），把右花括号（`}`）分别换成 `endif;`，`endwhile;`，`endfor;`，`endforeach;` 以及 `endswitch;`。

```php
<?php
if (0==1) :
    echo 'true';
else :
    echo 'false';

//输出 'false'

foreach ($array as $value) ：
    echo $value . ', ';
endforeach;
?>
```

好吧，这是 PHP 官方文档中的内容，不再废话。不过需要注意的是，如果是 PHP 和 HTML 混合的代码，这种写法会降低可读性，因为大部分编辑器不能很好得高亮 `if (...) : ... endif;` 这样的代码，混合之后，更加难懂。还有一些编辑器对混合代码中的花括号也不能很好得高亮，这种时候只有依靠规范的缩进来增加代码的可读行了。

&nbsp;

如果像上面这个例子，同一控制块中只有一个指令，那么花括号、冒号、`endif;` 等都可以省了。

```php
<?php
if (0==1) echo 'true';
else echo 'false';

foreach ($array as $value) echo $value . ', ';
?>
```

PHP 不像 Python 一样对换行和缩进敏感，所以你如果不想让人类看懂你的代码的话，把所有代码写在一行也是可行的。

&nbsp;

[三元运算符](https://zh.wikipedia.org/wiki/%E6%9D%A1%E4%BB%B6%E8%BF%90%E7%AE%97%E7%AC%A6)（`?:`）是一种更简略的写法。

表达式 `(expr1) ? (expr2) : (expr3)` 在 expr1 求值为 TRUE 时的值为 expr2，在 expr1 求值为 FALSE 时的值为 expr3。

```php
<?php
echo (0==1) ? 'true' : 'false';

//输出 'false'

$v = ('a'=='b') ? 1 : 0;

//$v = 0
?>
```

自 PHP 5.3 起，可以省略三元运算符中间那部分。表达式 `expr1 ?: expr3` 在 expr1 求值为 TRUE 时返回 expr1，否则返回 expr3。

```php
<?php
$a = 1;
echo $a ?: '0';

//输出 '1'
?>
```

三元运算符适合像上面的例子中那样简单的指令，复杂代码不应该使用三元运算符。

&nbsp;

上面这些都是常见的语法，还有一种不常见的语法，虽然能正确执行，但对人类不友好。

```php
<?php
isset($value) and print('true') or print('false');

//存在 $value 输出 'true'，否则输出 'false'

isset($value) and exit('true') or exit('false');
?>
```

这种写法是[短路求值](https://zh.wikipedia.org/wiki/%E7%9F%AD%E8%B7%AF%E6%B1%82%E5%80%BC)，与下面的例子等价，但由于不易理解（还有人说难看），所以不推荐使用。需要注意的是，`echo` 不能用在这种写法中。

```php
<?php
if (isset($valuev)) {
    print('true');
} else {
    print('false');
}

if (isset($valuev)) {
    exit('true');
} else {
    exit('false');
}
?>
```

上面这种写法虽不常见，也不推荐使用，但是下面这种写法却是常见的。

```php
<?php
mysql_query($query) or exit(mysql_error());

//如果 mysql 查询失败则退出当前脚本并返回错误文本
?>
```

这种写法与下面的例子等价。

```php
<?php
if (mysql_query($query)) {
    //pass;
}
else {
    exit(mysql_error());
}
?>
```

同样，`expr1 and expr2` 等价于 `if (expr1) expr2;`。

&nbsp;

写这篇文章的目的就是提醒 PHP 新手，代码不仅是给机器看的，更是给人看的。写出优雅的、人类易读的代码才是一个优秀的程序员。简写虽然方便，但有时候并不适合，如果学习某些程序，追求简写，甚至是不常见的写法，只会给他人和自己阅读代码造成障碍。
