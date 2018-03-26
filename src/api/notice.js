import request from '@/utils/request'

// 获取最近公共列表
function findNoticeList (req) {
  return request({
    url: '/ehr/control/findNoticeList',
    method: 'post',
    params: req
  })
}

// 查询公共列表
function searchLoginNoticeInfo (req) {
  return request({
    url: '/ehr/control/searchLoginNoticeInfo',
    method: 'post',
    params: req
  })
}

export default {
  findNoticeList,
  searchLoginNoticeInfo
}
