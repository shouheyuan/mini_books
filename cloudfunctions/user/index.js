// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
let openid = ''

// 云函数入口函数
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
  @param {Object} userinfo - 用户信息
*/
async function update(event) {
  return { code: 200}
  let p = null
  let user = await db.collection('user').doc(openid).get()
  let data = event.userinfo
  console.log(event)
  return false
  data['openid'] = openid
  let user = await db.collection('user')
    .where({
      openid
    })
    .get()
  let isGet = !!user.data.length
  // 查到了
  if (isGet) {
    p = db.collection('user')
      .where({
        openid
      }).update({
        data
      })
  } else {
    p = db.collection('user').add({
      data
    })
  }
  let res = await p.then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })

  return res
}