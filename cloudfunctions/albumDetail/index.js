// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
const $ = db.command.aggregate
let openid = ''


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  openid = wxContext.OPENID

  switch (event.action) {
    case 'getList': {
      return getList(event, context)
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
async function getList(event) {
  let res = null
  let userRead = await db.collection('read').where({
    openid
  }).get()
  let userReadIds = userRead.data.filter(ele => ele.status === 1).map(item => item.bookid)
  let list = await db.collection('books').where({
    _id: _.in(userReadIds),
    parentKind: event.parentKind
  }).get()
  res = list.data
  return res
}