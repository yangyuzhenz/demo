
// 引入 express 框架
let express = require('express');

// 创建服务器实例
let app = express();
//hkjhg

// 监听端口
app.listen(3000);

// 设置模板引擎
app.set('view engine', 'xtpl');
// 设置模板目录
app.set('views', './views');
// 设置静态资源目录
app.use(express.static('public'));

// 路由
app.get('/', (req, res) => {
    res.render('index', {});
});

// 路由
app.get('/doc', (req, res) => {
    res.render('doc', {});
});

// 路由
app.get('/blog', (req, res) => {
    res.render('blog', {});
});