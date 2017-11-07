/*引入包*/
var gulp=require("gulp");

//引入插件
var cssmin=require("gulp-cssmin")

//引入压缩js 的插件
var jsmin=require("gulp-uglify");

/*引入插件*/
var htmlmin=require("gulp-htmlmin");


/*我就可以去创建任务,怎么去创建任务 task 通过这个方法*/
/*
* 1:任务的名称
* 2:任务的动作
* */
gulp.task("cssmin",function(){
      //执行任务，执行具体的任务，都是交给gulp 插件.
      //使用插件去执行任务了.
      //我要压缩那些css 文件
      //压缩了之后放在那里。 这些流程都是  gulp 分配 pipe 管道，通道的意思的意思
      gulp.src("./public/manage/less/*.css")
          .pipe(cssmin())  //压缩
          //放在哪个位置，我要存放的目标位置.
          .pipe(gulp.dest("./release/css"))
});

//创建压缩js 的任务
gulp.task("jsmin",function(){
         gulp.src("./public/manage/assets/jquery/jquery.js")
             .pipe(jsmin())
             .pipe(gulp.dest("./release/js"));
});

gulp.task("htmlmin",function(){
       gulp.src("./public/manage/*.html")
           .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
           .pipe(gulp.dest("./release/htmlmin"))
});
