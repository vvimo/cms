import request from '@/utils/request'

// 字典查询
function findDict (req) {
  return request({
    url: '/dict/findDict',
    method: 'post',
    data: req
  })
}

// 新增字典
function addDict (req) {
  return request({
    url: '/dict/addDict',
    method: 'post',
    data: req
  })
}

// 修改字典
function updateDict (req) {
  return request({
    url: '/dict/updateDict',
    method: 'post',
    data: req
  })
}

// 字典查询明细
function findDictItem (req) {
  return request({
    url: '/dict/findDictItem',
    method: 'post',
    data: req
  })
}

// 新增字典明细
function addDictItem (req) {
  return request({
    url: '/dict/addDictItem',
    method: 'post',
    data: req
  })
}

// 修改字典明细
function updateDictItem (req) {
  return request({
    url: '/dict/updateDictItem',
    method: 'post',
    data: req
  })
}

// 查询全部字典明细
function allFindDictItem (req) {
  return request({
    url: '/dict/allFindDictItem',
    method: 'post',
    data: req
  })
}

export default {
  findDict,
  addDict,
  updateDict,
  findDictItem,
  addDictItem,
  updateDictItem,
  allFindDictItem
}
