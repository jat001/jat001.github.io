---
title: Mp3Tag 教程
tags:
  - Amazon
  - ID3
  - MP3
  - Mp3Tag
  - Mp3Tag使用方法
  - Tag
  - 库
  - 管理
  - 音乐文件
  - 音乐标签
id: 104
categories:
  - 应用软件
date: 2012-11-18 12:43:05
---

虽然常见的音频播放器如千千静听、foobar2000已经具有简单的音乐标签编辑功能，但是有时候仍然不能满足我们的需求。下面我们一起来学习如何使用 Mp3Tag 对音乐标签进行编辑和管理。

### 1\. 下载安装 Mp3Tag

访问 [Mp3Tag 官网下载页面](http://www.mp3tag.de/en/download.html)，下载 Mp3Tag 最新版本。

运行 Mp3Tag 安装程序，首先选择安装程序的语言，选择简体中文 Chinese (Simplified)。此后的安装过程较为简单，需要注意的是在选择安装组件设置处可以勾选最后一项 Explorer Context Menu，这样我们就可以在资源管理器右键菜单中使用 Mp3Tag 选项快速打开需要编辑标签的文件或文件夹。

### 2\. 初始设置

启动 Mp3Tag 之后，我们会发现 Mp3Tag 仍然是英文界面，首先我们设置一下界面语言。

点击 Tools 菜单，选择 Options 选项，然后在弹出的 Options 对话框中选择 Languages 类别，在右侧语言列表中选择“Simpl. Chinese 简体中文”，点击 OK 确定。Mp3Tag 会提示需要重新启动程序，确认之后重新启动即可。

“工欲善其事，必先利其器”，现在我们对 Mp3Tag 进行一些初始设置。

点击工具菜单，选择选项，或者按下 Ctrl + O 快捷键组合，启动 Mp3Tag 选项设置。

首先选择“标签”类别，勾选“使用光标移动键或鼠标单击时保存标签”，这样在切换不同音乐文件时可以自动保存音乐标签。

然后选择“标签”类别中的“Mpeg”子类别，推荐大家参照下图设置，将 MP3 标签保存为 ID3v2.3 格式。因为 ID3v2.3 UTF-16 是目前兼容性最佳的 MP3 标签格式，主流音频播放器及 Windows 7的库都支持 ID3v2.3 标签，在 Linux 系统中也不会出现乱码问题。

![mp3tag-tutorial-01](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-01.png "mp3tag-tutorial-01")

现在选择“标签面板”类别，如果大家对 Mp3Tag 主界面左侧的标签面板可编辑的标签字段感到不满意的话，可以在此添加。

设置完毕，点击确定即可。

### 3\. 基本使用

首先我们学习如何直接使用 Mp3Tag 编辑音乐标签，点击文件菜单中的“改变工作目录”“添加目录”或者“打开播放列表或Cuesheet”可以将需要编辑的音乐文件添加到 Mp3Tag 中，Mp3Tag 支持一下常见音频格式：

*   Advanced Audio Coding (aac)
*   Free Lossless Audio Codec (flac)
*   Monkey’s Audio (ape)
*   Mpeg Layer 3 (mp3)
*   MPEG-4 (mp4 / m4a / m4b / iTunes compatible)
*   Musepack (mpc)
*   Ogg Vorbis (ogg)
*   OptimFROG (ofr)
*   OptimFROG DualStream (ofs)
*   Speex (spx)
*   Tom’s Audio Kompressor (tak)
*   True Audio (tta)
*   Windows Media Audio (wma)
*   WavPack (wv)

Mp3Tag 主界面如下图所示，左侧为标签面板，在此可对音乐标签进行手动编辑，右侧为文件列表，在此可以选择不同的音频文件（如果打开的是 cue 文件的话，那么此处便为不同的音轨）。

![mp3tag-tutorial-02](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-02.png "mp3tag-tutorial-02")

首先在右侧文件列表选择需要编辑标签的文件（可以选择多个文件进行编辑），然后在左侧标签面板就可以对音乐标签进行编辑了，按下 Tab 键可以切换不同的标签字段。如果之前勾选了“使用光标移动键或鼠标单击时保存标签”选项，在编辑完毕之后就可以按下 Ctrl + N 切换到下一个文件，Mp3Tag 会提示已经保存标签，按下回车键确认即可继续编辑。需要特别注意的是如果之前没有勾选“使用光标移动键或鼠标单击时保存标签”选项的话，Mp3Tag 是不会在切换音乐文件时自动保存标签的，因此所做的修改会全部丢失！

现在我们来学习如何实现标签和文件名之间的转换，这也是我们经常要用到的功能。

首先是从标签到文件名的转换，首先选择需要转换的文件，然后点击转换菜单中的“标签 – 文件名”选项，弹出如下图所示的对话框。

![mp3tag-tutorial-03](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-03.png "mp3tag-tutorial-03")

在格式串文本框中填入符合自己需要的格式串，可以控制转换后的文件名，右侧的黑色小箭头可以选择常用字段，下面是一些常见字段的含义：

*   %album%：专辑
*   %artist%：艺术家
*   %genre%：流派
*   %title%：标题
*   %track%：音轨
*   %year%：年代

格式串文本框下方可以预览转换之后的的文件名，设置完毕之后点击确定，Mp3Tag 会提示对多少个文件名进行了修改。

然后是从文件名到标签的转换，首先选择需要转换的文件，然后点击转换菜单中的“文件名 – 标签”选项，弹出如下图所示的对话框。

![mp3tag-tutorial-04](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-04.png "mp3tag-tutorial-04")

与“标签 – 文件名”类似，此处我们也需要填入格式串，格式串文本框下方可以预览转换之后的标签，设置完毕之后点击确定，Mp3Tag 会提示推导出多少文件的标签。

Mp3Tag 还可以实现从文件名到文件名的转换，但是该功能并不常用，此处不再赘述。

### 3\. 连线获取音乐标签

如果有收集整张专辑的习惯，那么使用 Mp3Tag 可以在网络上获取音乐标签，而无需手动输入，非常方便。

Mp3Tag 内置了 freedb、Amazon、discogs 和 MusicBrainz 几个标签数据源，通常而言，使用 freedb 和 Amazon 可以找到许多流行的欧美音乐标签信息，其他两个标签数据源并不常用，可以不予理会。

使用内置标签数据源非常方便。对于 Amazon.com 来说，选择整张专辑的音乐文件，然后选择“标签数据源”菜单中的“Amazon.com”，然后在弹出的对话框中输入搜索关键词（请尽量精确输入），输入完毕之后点击下一步，稍等片刻就会弹出搜索结果列表，选择相应专辑之后点击下一步，进入如下图所示的调整标签信息对话框。

![mp3tag-tutorial-05](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-05.png "mp3tag-tutorial-05")

此处需要调整音轨，也就是把文件和相应的音轨对应起来，在文件列表中用鼠标拖动文件与标签信息相对应即可。因为默认排列的方式是按文件名排列，如果原来的音乐文件有音轨信息，首先使用“标签 – 文件名”将文件名转换成以音轨序号开始的形式就可以省去这一步骤。调整完毕后点击确定即可。

对于 freedb 来说，情况略有不用，选择文件之后点击“标签数据源”菜单中的“freedb”，此时会弹出如下图所示的对话框，选择默认的“根据选定的文件查找信息”即可，点击确定，如果可以找到相应专辑的话稍等片刻就会进入“调整标签信息”对话框，调整方法与上文所述一致。

![mp3tag-tutorial-06](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-06.png "mp3tag-tutorial-06")

如果内置的标签数据源不能满足需求的话，可以添加标签数据源。下面我推荐几个不错的标签数据源：freedb 日本語、豆瓣和 Amazon.co.jp。下面我们来看看如何添加标签数据源：

freedb 日本語属于 freedb 类服务，添加方法与其他标签数据源不同，点击工具菜单，选择选项，或者按下 Ctrl + O 快捷键组合，启动 Mp3Tag 选项设置。选择“标签数据源”类别下的“freedb”子类别，将“地址”文本框修改为freedbtest.dyndns.org，点击确定即可。

![mp3tag-tutorial-07](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-07.png "mp3tag-tutorial-07")

需要注意的是原有的 freedb 服务器会被替换，而 freedb 日本語的服务器上以日语音乐信息为主。如果要恢复到原有的话请点击端口文本框右侧的“当前Internet上可用的freedb服务器列表”按钮即可恢复。

freedb 日本語的使用方法与 freedb 一致，选择“标签数据源”菜单中的“freedb”即可。

豆瓣、Amazon.co.jp 则都是从相应网站抓取标签。添加方法非常简单，首先下载对应的标签数据源文件（.src），然后将其复制到 %appdata%\Mp3tag\data\sources 目录下，如在笔者的电脑上为 C:\Users\Terry Chen\AppData\Roaming\Mp3tag\data\sources（运行豆瓣插件压缩包中的 OpenSourcesDirectory.bat 可以快速打开此目录），重新启动 Mp3tag 即可在标签数据源菜单中选用，使用方法与 Amazon.com 一致。

[豆瓣标签数据源插件下载地址](http://code.google.com/p/cunfe/)

[Amazon.co.jp 标签数据源插件下载地址](http://forums.mp3tag.de/index.php?showtopic=3319)

### 4\. 从文本转换标签

对于一些专辑，我们虽然可以在网络上搜索到相关专辑信息（例如歌手的官方网站），但是在标签数据源中却搜索不到，那么我们就需要手动修改了。不过利用“标签列表文件 – 标签”的转换功能，我们可以很方便实现从文本文件到标签的转换。

首先为了在创建标签文件时更为方便，首先我们需要将音乐文件名进行转换。标签列表文件中是通过文件名将音乐文件与标签信息对应起来的，所以应该将音乐文件名转换为比较简单的形式，推荐大家使用数字作为文件名，如 01.flac 等。

然后开始创建标签列表文件，在标签列表文件中，每一行代表着一个单独的文件，标签列表文件的写法没有硬性要求，此后在转换时通过指定格式串识别，需要注意的是每一行都必须有对应的文件名，不同字段的信息请使用文件名中的非法字符进行分割，如 / * | 等等，以避免与文件名混淆。同一个标签列表文件中必须按照相同的格式编写，例如可以按照“%_filename_ext%|%title%”的格式串编写，下面是以 Eagles 的专辑 Hotel California 为例编写的标签列表文件：

> 01.FLAC|Hotel California
>
> 02.FLAC|New Kid in Town
>
> 03.FLAC|Life in the Fast Lane
>
> 04.FLAC|Wasted Time
>
> 05.FLAC|Wasted Time (Reprise)
>
> 06.FLAC|Victim of Love
>
> 07.FLAC|Pretty Maids All in a Row
>
> 08.FLAC|Try and Love Again
>
> 09.FLAC|The Last Resort

标签列表文件看似复杂，实际编写很简单。我们既可以利用记事本中的替换功能，也可以使用 Excel 编写。

最后进入 Mp3Tag，导入相关音乐文件，按下 Ctrl + S 快捷键组合全选，然后点击转换菜单中的“文件名 – 标签”选项，弹出如下图所示的对话框。

![mp3tag-tutorial-08](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-08.png "mp3tag-tutorial-08")

在“文件名”文本框中填入标签列表文件的路径，或者点击右侧按钮浏览。在“格式串”文本框中输入相应的格式串，如“%_filename_ext%|%title%”，其中“%_filename_ext%”是指文件名，需要手动输入或复制，无法在右侧菜单中选择；“|”则是分隔符，可自行选择其他无法在文件名中使用的特殊符号；“%title%”则是相应的字段，可在右侧菜单中选择。

设置完毕之后点击确定，即可开始转换，完成之后 Mp3Tag 会提示多少文件成功转换。

### 5\. 动作

Mp3Tag 内置了强大的动作功能，可以帮助我们快速进行一些自定义操作。

点击“动作”菜单，选择“动作组”，弹出“动作组”对话框，在此处我们可以自定义常见的动作，从而可以快速执行一些重复操作。

![mp3tag-tutorial-09](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-09.png "mp3tag-tutorial-09")

Mp3Tag 已经内置了三个动作组，Case conversion、CD-R 和 Standard，作为动作组的实例，双击相应动作组我们可以查看具体动作组进行了什么样的动作，例如，Case conversion 就包含了将所有以(-_开头的字段转换为大小写混合的动作。

动作组列表右侧的按钮可以对动作组进行管理，我们可以点击新建动作组按钮，输入动作组名称，然后自定义自己的动作组。

![mp3tag-tutorial-10](//www.sinosky.org/uploads/2012/terrychen.info_wp-content_uploads_mp3tag-tutorial-10.png "mp3tag-tutorial-10")

自定义动作组的对话框与管理动作组的的对话框有些类似，我们可以在此新建适合自己需要的动作，下面介绍Mp3Tag 支持的动作类型：

*   大小写转换：

对指定的标签字段（如 ARTISIT、TITLE 等等）、文件名（_FILENAME）甚至字段名称（_FIELDNAME）进行大小写转换。

支持大写字母、小写字母、大小写混合和句子四种模式，下面用例子说明其区别：

大写字母：

AIR – MOON SAFARI – 03 – ALL I NEED.MP3

小写字母：

air – moon safari – 03 – all i need.mp3

大小写混合：

Air – Moon Safari – 03 – All I Need.mp3

句子：

Air – moon safari – 03 – all i need.mp3
*   转换代码页：

如果在 Mp3Tag 中音乐标签显示乱码的话，可以尝试进行代码页转换，只要选择相应的字段及原始代码页（如 Chinese (Traditional) – 中文(繁體)）即可。
*   导出：

导出标签信息，较不常用，不多加介绍。
*   导出唱片封面到文件：

将音乐文件中内嵌的唱片封面导出到相应文件，可以指定文件名的具体格式，支持 %artist% 和 %album% 等字段的使用。
*   格式化值：

使用自定义格式串格式化某个字段的值，也可以用于将某个字段的值复制到另一个字段中。

例如，将字段设置为 ENCODEDBY，将格式串设置为 %comment%，就可以将 COMMENT 字段复制到 ENCODEDBY 字段。
*   猜测值：

如果目前某个字段包含了两个字段的信息，如标题字段的格式为“Artist / Title”，我们就可以将源设置为“%title%”，将猜测模式设置为“%artist% / %title%”进行分割。
*   从文件导入唱片封面：

从相应文件导入唱片封面，可以指定文件名的具体格式进行导入，支持 %artist% 和 %album% 等字段的使用。
*   导入文本文件：

从文本文件中导入相应字段的内容，注意此处只能导入一个字段的内容，可以指定文件名的具体格式进行导入，支持 %artist% 和 %album% 等字段的使用。

例如，在文件目录中有对应名称的歌词文件，在字段处选择 UNSYNCEDLYRICS，在文件名处输入 %title%.lrc 就可实现内嵌歌词。

注：由于不同的播放器字段支持比较混乱，如果 UNSYNCEDLYRICS 无法显示歌词的话请尝试使用 LYRICS 字段。
*   合并重复的字段：

将重复的字段进行合并，利用格式串进行设置，较不常用，不多加介绍。
*   删除重复的字段：

删除重复的字段，只留下最后一个字段的内容，较不常用，不多加介绍。
*   清除字段：

清除指定的字段，可键入多个字段，例如使用 COMMENT;PICTUR 清除备注和图片。
*   清除多余的字段：

清除指定字段之外的字段，可键入多个字段，例如使用 ALBUM;ARTIST;COMMENT;GENRE;TRACK;YEAR 清除专辑、艺术家、备注、流派、音轨和年代之外的所有字段。
*   替换：

将制定字段中的特定词语替换为另外的词语，可以指定全字匹配和区分大小写。
*   根据正则表达式替换：

使用正则表达式进行匹配替换，具体用法可参见[Replace with regular expression](http://help.mp3tag.de/options_format.html#regexp)。
*   使用分隔符拆分字段：

如果目前某个字段包含了多个信息，就可以指定相应字段和分隔符，拆分为多个字段。

在一个动作组中可以设置多个动作，设置完成之后选择相应文件，选择动作菜单中的相应动作组，就可以执行自定义动作了。

上面就是使用 Mp3Tag 的主要方法了，善用 Mp3Tag，我们可以更好地管理我们的音乐文件，和 Windows 7 的新特性[库](http://terrychen.info/digging-into-windows7-library/)配合更是如虎添翼。

### 参考资料：

*   [Mp3tag Help](http://help.mp3tag.de/)

&nbsp;

Posted on [http://terrychen.info/mp3tag-tutorial/](http://terrychen.info/mp3tag-tutorial/)