import request from '@/utils/request'

// 查询人员列表
function findPerson (req) {
  return request({
    url: '/ehr/control/findPerson',
    method: 'post',
    params: req
  })
}

function deletePerson (req) {
  return request({
    url: '/ehr/control/deletePerson',
    method: 'post',
    params: req
  })
}

// 查询人员信息
function findPersonPartyId (req) {
  const data = {
    partyId: req.partyId
  }
  return request({
    url: '/ehr/control/findPersonPartyId',
    method: 'post',
    params: data
  })
}

// 查询员工关怀
function queryCareSettingInfo (req) {
  return request({
    url: '/ehr/control/queryCareSettingInfo',
    method: 'post',
    params: req
  })
}

// 查询合同模版
function selectContract (req) {
  return request({
    url: '/ehr/control/selectContract',
    method: 'post',
    data: req
  })
}

// 上传合同模版
function addContract (req) {
  return request({
    url: '/ehr/control/addContract',
    method: 'post',
    data: req
  })
}

// 下载合同模版
function downLoadContract (req) {
  return request({
    url: '/ehr/control/downLoadContract',
    method: 'get',
    params: req
  })
}

// 批量上传
function addPersons (req) {
  return request({
    url: '/ehr/control/addPersons',
    method: 'post',
    data: req
  })
}

export default {
  findPerson,
  findPersonPartyId,
  queryCareSettingInfo,
  selectContract,
  addContract,
  downLoadContract,
  addPersons,
  deletePerson
}
