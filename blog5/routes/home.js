
let express = require('express');

// 处理用户数据
let user = require('../models/user');

// 前台主路由
let home = express.Router();

home.get('/', (req, res) => {
    res.render('home/index', {});
});

home.get('/article', (req, res) => {
    res.render('home/article', {});
});

// 注册
home.get('/register', (req, res) => {
    res.render('home/register', {});
});

// 登录
home.get('/login', (req, res) => {
    res.render('home/login', {});
});

// 注册用户
home.post('/register', (req, res) => {
    // 获取前端传递的表单数据
    // console.log(req.body);

    // 调用模型，插入数据库
    user.insert(req.body, (err) => {
        if(!err) {
            // 数据库插入成功
            // 响应结果（json数据）
            res.json({
                code: 10000,
                msg: '添加成功!'
            });
        }
    });
});

// 登录
home.post('/login', (req, res) => {
    // 获得前端传递的参数
    console.log(req.body);

    // 检测登录（根邮箱和密码）
    user.auth(req.body.email, req.body.pass, (err, row) => {
        if(!err) {

            // 存一个 session
            // 如果 req.session.loginfo 不为
            // false 则认为登录成功
            req.session.loginfo = row;

            // 登录成功
            // 响应结果（json数据）
            res.json({
                code: 10000,
                msg: '登录成功!'
            });
        }
    });
});

module.exports = home;