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
    case 'search': {
      return search(event, context)
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
async function search(event) {
  let userRead = await db.collection('read').where({
    openid
  }).get()
  let userReadIds = userRead.data.filter(ele => ele.status === 1).map(item => item.bookid)
  let search = await db.collection('books').where({
    name: {
      $regex: event.keyword,
      $options: 'i'
    }
  }).limit(20).get()
  let searchData = search.data
  let user_list = []
  let other_list = []
  searchData.forEach(ele => {
    // 找到了
    if (userReadIds.indexOf(ele._id) !== -1) {
      user_list.push(ele)
    } else {
      other_list.push(ele)
    }
  })
  return {
    user_list,
    other_list
  }
}