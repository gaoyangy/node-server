const axios = require('axios')
const instance = axios.create({
  timeout: 5000,
  headers: {'Authorization': 'APPCODE cce07fbbc82547b788ca079aef87edcf'}
});
module.exports = instance