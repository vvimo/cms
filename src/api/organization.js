import request from '@/utils/request'

// 查询结构列表
function getOrganizationTree (req) {
  return request({
    url: '/ehr/control/getOrganizationTree',
    method: 'post',
    params: req
  })
}

// 新增结构列表
function newOrganizationInfo (req) {
  return request({
    url: '/ehr/control/newOrganizationInfo',
    method: 'post',
    params: req
  })
}

export default {
  getOrganizationTree,
  newOrganizationInfo
}
