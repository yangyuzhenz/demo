## 乐淘电商

### 移动端

#### Mui介绍

 - bootstrap 也是一个ui框架  响应式的ui框架  兼容不同终端 可以适配pc端 也可以适配  移动端
 - Mui 是一个ui框架 针对移动端开发的ui框架    只能适配移动端（流式布局）
 - 学习官网 http://dev.dcloud.net.cn/mui/
 - 官方文档 http://dev.dcloud.net.cn/mui/ui/
 - 组件展示 http://dcloud.io/hellomui/
 
 **特点**
 
 - 最接近原生APP体验的高性能前端框架
 - 轻量
     追求性能体验，是我们开始启动MUI项目的首要目标，轻量必然是重要特征；
     MUI不依赖任何第三方JS库，压缩后的JS和CSS文件仅有100+K和60+K
 - 原生UI
     鉴于之前的很多前端框架（特别是响应式布局的框架），UI控件看起来太像网页，没有原生感觉，因此追求原生UI感觉也是我们的重要目标
     MUI以iOS平台UI为基础，补充部分Android平台特有的UI控件
 - 流畅体验
     下拉刷新
     为实现下拉刷新功能，大多H5框架都是通过DIV模拟下拉回弹动画，在低端android手机上，
     DIV动画经常出现卡顿现象（特别是图文列表的情况）； 
     mui通过双webview解决这个DIV的拖动流畅度问题；拖动时，拖动的不是div，
     而是一个完整的webview（子webview），回弹动画使用原生动画
     
     
#### 首页
 - 充当移动端入口静态的
 - 搭建页面主体架子
 
 具体到页面功能：
 1.顶部通栏
 2.轮播图
 3.导航栏
 4.运动生活专区
 5.底部页签
   
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0"/>
    <title>乐淘首页</title>
    <link rel="stylesheet" href="assets/mui/css/mui.css"/>
    <link rel="stylesheet" href="css/common.css"/>
</head>
<body>
    <div class="lt_container">
        <header class="lt_topBar"></header>
        <div class="lt_content">
            1
        </div>
        <footer class="lt_tabBar"></footer>
    </div>
<script src="assets/mui/js/mui.js"></script>
</body>
</html>
```

初始区域滚动插件
```javascript
    /*初始化区域滚动组件 当超过了父容器大小的时候生效*/
    mui('.mui-scroll-wrapper').scroll();
```

初始化轮播图
```javascript
    /*轮播图的初始化*/
    mui('.mui-slider').slider({
        interval:4000
    });
```


### 后台管理端





