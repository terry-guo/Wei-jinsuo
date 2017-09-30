# Wei-jinsuo
微金所项目，用bootstrap进行响应式开发

## 1 bootstrap初始化模版

	<!DOCTYPE html>
	<html lang="zh-CN">
	<head>
    <!--设置编码 gbk gb2312 utf-8-->
    <meta charset="utf-8">
    <!--
       告诉IE浏览器以最新的 解析器  去解析当前的页面，
            content="IE=edge"中的edge代表是最新的解析器。
            content="IE=10" 代表指定使用IE-10的解析器
    	-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
        兼容移动设备（视口）
    	-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>01-Bootstrap基本模板</title>

    <!-- 引入Bootstrap -->
    <link href="bootstrap/dist/css/bootstrap.css" rel="stylesheet">

    <!--
       如果IE浏览器版本小于9，将使用下面两个库()：
           html5shiv：让版本小于9的IE浏览器，也能够使用h5的标签
           respond： 让版本小于9的IE浏览器，也能够使用C3的样式
   	 -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
	
	</head>
	<body>
	
	<h1>你好，世界！</h1>
	
	<!-- Bootstrap这个个框架依赖jQuery; jquery从1.9版本开始不再兼任ie9以下浏览器 -->
	<script src="jquery/jquery-3.2.0.js"></script>
	
	<script src="bootstrap/dist/js/bootstrap.js"></script>
	
	</body>
	</html>


## 2 微金所项目结构

	├─ /weijinsuo/ ··················· 项目根目录
	└─┬─ /css/ ······················· 项目CSS文件
	  ├─ /fonts/ ······················ 使用到的字体文件
	  ├─ /img/ ······················· 使用到的图片文件
	  ├─ /js/ ························ 自己的JS脚本
	  ├─ /lib/ ······················· 第三方类库
	  ├─ /favicon.ico ················ 站点图标
	  └─ /index.html ················· 入口文件

