import request from '@/utils/request'

// 查询人员列表
function selectDictItem (req) {
  const data = {
    dictCode: req.dictCode
  }
  return request({
    url: '/ehr/control/selectDictItem',
    method: 'post',
    params: data
  })
}

// 待办查询
function findTaskAgents (req) {
  return request({
    url: '/ehr/control/findTaskAgents',
    method: 'post',
    params: req
  })
}

function findPublicApprove (req) {
  return request({
    url: '/ehr/control/findPublicApprove',
    method: 'post',
    params: req
  })
}

// 通用 (申请/复核/审核/审批)
function addGeneralForm (req) {
  return request({
    url: '/ehr/control/addGeneralForm',
    method: 'post',
    data: req
  })
}

// 合同 (申请/复核)
function addGeneralFileForm (req) {
  return request({
    url: '/ehr/control/addGeneralFileForm',
    method: 'post',
    data: req
  })
}

// 合同复核 查看合同
function flowUpLoadContract (req) {
  return request({
    url: '/ehr/control/flowUpLoadContract',
    method: 'post',
    data: req,
    responseType: 'blob'
  })
}

export default {
  selectDictItem,
  findTaskAgents,
  findPublicApprove,
  addGeneralForm,
  addGeneralFileForm,
  flowUpLoadContract
}
