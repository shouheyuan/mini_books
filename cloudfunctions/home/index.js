// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case 'getList': {
      return getList(event, context)
    }
    default: {
      return
    }
  }
}
async function getList(event) {
  let res = null
  let {
    kind,
    page,
    pageSize
  } = event
  let data = {}
  if (kind !== 1) {
    data['parentKind'] = kind
  }
  // 
  res = await db.collection('books').where(data).orderBy('read', 'desc').skip(page * pageSize).limit(pageSize).get()
  return res
}