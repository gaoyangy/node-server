const db = require('../config/sql')
module.exports = new class User{
  findOne(pram) {
    return new Promise((resolve, reject)=> {
      db.query(`select * from user where name = '${pram.name}'`, (error, result)=> {
        resolve(result)
      })
    })
  }
}()