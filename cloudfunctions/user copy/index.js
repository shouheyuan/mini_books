const cloud = require('wx-server-sdk')
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
let openid = ''
// 初始化 cloud
cloud.init()

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

