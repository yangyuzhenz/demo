
/*做进度条使用的*/
//configure 配置
NProgress.configure({
    //禁止光圈的显示.
    showSpinner:false
});
/*查找文档.  */
NProgress.start(); //开启进度条.

//页面加载完毕，去结束这个进度条.
window.onload=function(){
    //结束的时候调用.
     NProgress.done();
}









