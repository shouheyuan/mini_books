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
    case 'getDetail': {
      return getDetail(event, context)
    }
    case 'setRead': {
      return setRead(event, context)
    }
    default: {
      return
    }
  }
}
/*
  获取图书详情
  @param {String} id - bookID
*/
async function getDetail(event) {
  let res = null
  let {
    bookid
  } = event
  res = await db.collection('books').doc(bookid).get()
  // 查询是否已收藏
  let data = await db.collection('read').where({
    openid,
    bookid,
    status: 1
  }).get()
  res['data']['isRead'] = data.data.length
  return res
}

/*
  设置已读状态
  @param {String} id - bookID
*/
async function setRead(event) {
  let p = null
  let num = null //要更新的阅读数
  let {
    bookid
  } = event
  let readBook = await db.collection('read').where({
    bookid,
    openid
  }).get()
  let isGet = readBook.data.length
  // 没查到
  if (!isGet) {
    p = db.collection('read').add({
      data: {
        bookid,
        openid,
        status: 1,
        update: Date.now()
      }
    }).then(() => {
      num = 1
    })
  } else {
    let status = readBook.data[0]['status'] === 0 ? 1 : 0
    let id = readBook.data[0]['_id']
    p = db.collection('read').doc(id).update({
      data: {
        bookid,
        openid,
        status,
        update: Date.now()
      }
    }).then(() => {
      num = status === 0 ? -1 : 1
    })
  }
  let res = await p.then(async res => {
    // 更新成功，给当前bookid加一条阅读记录
    // 根据收藏状态(添加/取消)来更新书的阅读数量
    await db.collection('books').doc(bookid).update({
      data: {
        read: _.inc(num)
      }
    })
    return res = {
      code: 200,
      msg: '更新成功'
    }
  }).catch(err => {
    // 更新失败
    return res = {
      code: 202,
      msg: '更新失败'
    }
  })
  return res
}