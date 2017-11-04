let express=require('express');

let post=require('../models/post');
//主路由
let admin=express.Router();
//后台首页
admin.get('/',(req,res)=>{
  // res.send('后台的a');
  res.render('admin/index',{})
});

admin.get('/repass',(req,res)=>{
  // res.send('后台的a');
  res.render('admin/repass',{})
});

//添加博客页面
admin.get('/add',(req,res)=>{
  res.render('admin/add',{});
});
//添加到文章列表页-----------------get???????
admin.get('/list',(req,res)=>{
  res.render('admin/list',{});
});

//退出登录
admin.get('/logout',(req,res)=>{
  //清空登录信息
  req.session.loginfo=null;
  //跳转到登录页
  res.redirect('/login');
})

//添加博客
admin.post('/add',(req,res)=>{
  //获取表单提交的博客内容
  // console.log(req.body);
      // 当前登录用户即为作者
    // 通过session可以读取到作者的id
    // 然后将id记录在博客文章中
    req.body.uid = req.session.loginfo.id;
  //插入博客内容
  post.insert(req.body,(err)=>{
    if(!err){
      //成功后响应结果
      res.json({
        code:10000,
        msg:'添加成功'
      });
    }
  })
})

//文章列表
admin.get('/list',(req,res)=>{
  console.log(1);
  
  //查询失败
  post.findAll((err,rows)=>{
    if(err){
      //查询失败
      return res.send('数据库错误');

    }
    res.render('admin/list',{posts:rows});
  });
});

//删除博客
admin.get('/delete',(req,res)=>{
  //通过query可以接受get参数
  console.log(req.query);
})

module.exports=admin;