// 创建 express 的服务器实例
const express = require('express');
const http = require('http');
const url = require('url');
// 1. 导入 WebSocket 模块
const WebSocket = require('ws');
// 处理时间的模块
let moment = require('moment');
const app = express();
// 普通的http 请求的  交给express 处理   WebSocket  请求 交给Websocket处理
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
//  转义html 防止xss 攻击   
var escapeHtml = require('escape-html');
//  托管静态资源
app.use(express.static('views'))
app.use(express.static('node_modules'))

//定义全局变量  获取实时的人数 
let count = 0;
//  监听 webSocket 服务器的请求
wss.on('connection', function connection(ws, req) {
    count++;
    const location = url.parse(req.url, true);
    // 获取每个客户端的页面id
    const ip = req.connection.remoteAddress;
    // ws.send('欢迎进入聊天室' + ip)
    // 发送系统消息  客户端通过ws。onmessage  接收
    wss.broadcast('系统消息', '欢迎进入聊天室' + ip, 1)
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        // 监听 message，接收客户端发过来的消息
    ws.on('message', function incoming(message) {
        //打印客户端发送过来的消息 
        console.log('received: %s', message);
        //接收从客户端传过来的消息   通过解构赋值获取到name 和msg
        let { name, msg } = JSON.parse(message)
            // wss.clients.forEach((client) => {
            //   通过循环事件 向每个客户端发送消息
            //         client.send(JSON.stringify({
            //             name: name,
            //             msg: msg,
            //             time: moment(new Date()).format('YY-MM-DD HH:mm:ss'),
            //             count: count
            //         }));
            //     })
        wss.broadcast(name, msg, 2)


    });

    ws.on('close', () => {
        //客户端断开后    讲 count 减一
        count--
    })

});



// Broadcast to all.   广播到所有的客户端
wss.broadcast = function broadcast(name, msg, type) {
    //type 1 系统消息  type  2  用户消息 

    type = type ? type : 1;
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            //向 每个客户端  发送消息 
            client.send(JSON.stringify({
                name: name,
                msg: escapeHtml(msg),
                time: moment(new Date()).format('YY-MM-DD HH:mm:ss'),
                count: count,
                type: type
            }));
        }
    });
};

server.listen('3002', '192.168.179.90', function listening() {
    console.log('Listening on %d', server.address().port);
});