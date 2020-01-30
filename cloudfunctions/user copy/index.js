const cloud = require('wx-server-sdk')
// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
let openid = ''
exports.main = (event, context) => {
  const wxContext = cloud.getWXContext()
  openid = wxContext.OPENID
  switch (event.action) {
    case 'update': {
      return update(event, context)
    }
    default: {
      return
    }
  }
}
/*
  更新用户信息-头像、昵称
  @param {String} id - bookID
*/
async function update(event) {
  return {

  }
}