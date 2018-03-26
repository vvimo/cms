import request from '@/utils/request'

// 请假申请列表
function findAttendVacationApplyList (req) {
  return request({
    url: '/attendance/control/findAttendVacationApplyList',
    method: 'post',
    params: {
      partyId: '615571',
      currentPage: '1',
      pageSize: '5',
      pageCount: '1',
      jsoncallback: 'dataJson'
    }
  })
}

function findOneAttendVacationApply (req) {
  let data = {
    vacationRecordId: req.vacationRecordId,
    jsoncallback: 'dataJson'
  }
  return request({
    url: '/attendance/control/findOneAttendVacationApply',
    method: 'post',
    params: data
  })
}

// 请假申请
function findVacationByPartyIdAndVacationTypeId () {
  return request({
    url: '/attendance/control/findVacationByPartyIdAndVacationTypeId',
    method: 'post',
    params: {
      vacationTypeId: '10006',
      partyId: '615571',
      rand: '1519715873327',
      jsoncallback: 'dataJson'
    }
  })
}

function findAttendAddress () {
  return request({
    url: '/humanres/control/findAttendAddress',
    method: 'post',
    params: {
      partyId: '615571',
      exceptionDate: ''
    }
  })
}

function getApprovalPartyList () {
  return request({
    url: '/humanres/control/getApprovalPartyList',
    method: 'post',
    params: {
      partyId: '615571'
    }
  })
}

function findAddressByCity (req) {
  let data = {
    addressCity: req.addressCity
  }
  return request({
    url: '/humanres/control/findAddressByCity',
    method: 'post',
    params: data
  })
}

function findRevokeApplyList () {
  return request({
    url: '/attendance/control/findRevokeApplyList',
    method: 'post',
    params: {
      partyId: '615571',
      currentPage: '1',
      pageSize: '5',
      pageCount: '1',
      undoType: '1',
      jsoncallback: 'dataJson'
    }
  })
}

function queryChangeRestDate(req) {
  let data = {
    startDate: req.startDate,
    endDate: req.endDate,
    startTime: req.startTime,
    endTime: req.endTime,
    partyId: req.partyId,
    vacationType: req.vacationType
  }
  return request({
    url: '/attendance/control/queryChangeRestDate',
    method: 'post',
    params: data
  })
}

function attendLeaveApply(req) {
  let data = {
    vacationTypeId: req.vacationTypeId,
    vacationFromDate: req.vacationFromDate,
    vacationThruDate: req.vacationThruDate,
    fromDateHour: req.fromDateHour,
    thruDateHour: req.thruDateHour,
    totalWorkTime: req.totalWorkTime,
    urgentContact: req.urgentContact,
    tempPartyId: req.tempPartyId,
    leaveAndChangeApprovalParytyId: req.leaveAndChangeApprovalParytyId,
    leaveAndChangeAttendanceRuleId: req.leaveAndChangeAttendanceRuleId,
    marriedDate: req.marriedDate,
    childrenDate: req.childrenDate,
    inCompanyFlg: req.inCompanyFlg,
    affixFilePath: req.affixFilePath,
    deathRelative: req.deathRelative,
    deathDate: req.deathDate,
    description: req.description,
    partyId: req.partyId
  }
  return request({
    url: '/attendance/control/attendLeaveApply',
    method: 'post',
    params: data
  })
}

/* 加班 */
function findOverTimeApplyList (req) {
  let data = {
    partyId: req.partyId,
    viewIndex: req.viewIndex,
    viewSize: req.viewSize,
    viewCount: req.viewCount
  }
  return request({
    url: '/attendance/control/findOverTimeApplyList',
    method: 'post',
    params: data
  })
}



export default {
  findAttendVacationApplyList,
  findOneAttendVacationApply,
  findVacationByPartyIdAndVacationTypeId,
  findAttendAddress,
  getApprovalPartyList,
  findAddressByCity,
  findRevokeApplyList,
  queryChangeRestDate,
  attendLeaveApply
}
