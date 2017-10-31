
let db = require('./db');

// 插入数据
exports.insert = (data, cb) => {
    // sql 语句
    let query = 'insert into posts set ?';
    // 执行 sql 语句
    db.query(query, data, (err) => {
        if(err) {
            // 失败回调
            return cb(err);
        }
        // 成功回调
        cb(null);
    })

}

// 查询所有
exports.findAll = (cb) => {
    // sql 语句
    let query = 'select * from posts';

    // 执行 sql 语句
    db.query(query, (err, rows) => {
        if(err) {
            // 失败回调
            return cb(err);
        }

        // 成功回调
        cb(null, rows);
    });
}

// 删除
exports.delete = (id, cb) => {
    // sql 语句
    let query = 'delete from posts where id = ?';

    // 执行 sql 
    db.query(query, id, (err) => {
        if(err) {
            // 失败回调
            return cb(err);
        }

        // 成功回调
        cb(null);
    })
}
