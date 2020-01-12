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
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  openid = wxContext.OPENID

  switch (event.action) {
    case 'getRead':
      {
        return getRead(event, context)
      }
    default:
      {
        return
      }
  }
}
/*
  获取已读书架
  @param {String}
*/
async function getRead(event) {
  let res = {
    total: 0,
    list: []
  }
  let userRead = await db.collection('read').where({
    openid
  }).get()
  let userReadIds = userRead.data.filter(ele => ele.status === 1).map(item => item.bookid)
  res.total = userReadIds.length
  let list = await db.collection('books')
    .aggregate()
    .match({
      _id: _.in(userReadIds)
    })
    .group({
      _id: '$parentKind',
      total: $.sum(1),
      cover: $.push('$cover')
    })
    .end()
  res.list = list.list
  return res
}