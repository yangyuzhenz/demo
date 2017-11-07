//检测用户是否登录的
$.ajax({
    url:"/employee/checkRootLogin",
    type:"get",
    success:function(data){
        if(data.success!=true){
            //说明没有登录，我要跳转到登录页面.
            window.location.href="login.html";
        }
    }
});
//退出登录
$(".login_out_bot").on("click",function(){
    //您确定要退出系统吗 ,提示.
    //window.confirm  bootstrap 里面没有提示框, amaze ui 跟bootstrap 差不多，它里面有这种框.
    var flag=window.confirm("您确认要退出系统吗?");

    if(flag){
        $.ajax({
            url:"/employee/employeeLogout",
            type:"get",
            success:function(data){
                if(data.success){
                    //登出了之后去那个页面.
                    window.location.href="login.html";
                }
            }
        })
    }
});
/*导航栏的切换.*/
$(".navs ul").prev("a").on("click",function(){
    $(this).next().slideToggle();
});
