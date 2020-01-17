// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
let openid = ''

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  openid = wxContext.OPENID
  switch (event.action) {
    case 'update': {
      return update(event, context)
    }
    case 'isAuth': {
      return isAuth(event, context)
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
  let p = null
  let data = event.userinfo
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
    return res = {
      code: 200,
      msg: '更新成功'
    }
  }).catch(err => {
    return res = {
      code: 202,
      msg: '更新失败'
    }
  })
  return res
}

/*
  判断是否授权
  @param {String} - 
*/
async function isAuth(event) {
  let user = await db.collection('user').where({
    openid
  }).get()
  return !!(user && user.data && user.data.length && user.data[0].nickName && user.data[0].avatarUrl)
}