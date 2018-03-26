import request from '@/utils/request'

/**
  * 加班
  */

// 列表查询
function findOverTimeApplyList (req) {
  let data = {
    partyId: req.partyId,
    viewIndex: req.viewIndex,
    viewSize: req.viewSize
  }
  return request({
    url: '/ehr/control/findOverTimeApplyList',
    method: 'post',
    params: data
  })
}

// 申请
function OverTimeApply (req) {
  let data = {
    overTimeFromDate: req.overTimeFromDate,
    overTimeToDate: req.overTimeToDate,
    totalOverTimeBase: req.totalOverTimeBase,
    totalOverTimeWeek: req.totalOverTimeWeek,
    projectName: req.projectName,
    projectId: req.projectId,
    opportunityName: req.opportunityName,
    opportunityId: req.opportunityId,
    reason: req.reason,
    specialOTFlgId: req.specialOTFlgId,
    handler: req.handler,
    partyId: req.partyId
  }
  return request({
    url: '/ehr/control/OverTimeApply',
    method: 'post',
    params: data
  })
}

export default {
  findOverTimeApplyList,
  OverTimeApply
}
