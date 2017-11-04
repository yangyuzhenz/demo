let db=require('./db');

//插入数据
exports.insert=(data,cb)=>{
  //sql语句
  let query='insert into posts set ?';
  //执行sql语句
  db.query(query,data,(err)=>{
    if(err){
        return cb(err);
      
      }
      //成功回调
      cb(null);
    
  })
}

//查询所有
exports.findAll=(cb)=>{
  //sql语句
  let query='select * from posts';

  db.query(query,(err,rows)=>{
    if(err){
      return cb(err);
    }
    cb(null,rows);
  })
}
//删除博客
exports.delete=(id,cb)=>{
  let query='delete from posts where id = ?';

  //执行sql
  db.query(query,id,(err)=>{
    if(err){
      //失败回调
      return cb(err);
    console.log(1);
    
    }
    //成功回调
    cb(null);
    console.log(1);
  })
}