import request from '@/utils/request'

// 考勤详细查询
function findAttendanceItems (req) {
  const data = {
    viewIndex: req.viewIndex + '',
    viewSize: req.viewIndex + '',
    partyIdSend: req.partyIdSend,
    selectItem: '', // req.selectItem
    startDate: req.startDate, // Y
    endDate: req.endDate, // Y
    attendanceDaliyDate: req.attendanceDaliyDate,
    partyIdFrom: req.partyIdFrom
  }
  return request({
    url: '/ehr/control/findAttendanceItems',
    method: 'post',
    params: data
  })
}

// 新增考勤地点
function insertAttendanceAddress (req) {
  const data = {
    addressName: req.addressName, // Y
    addressCity: req.addressCity, // Y
    attendanceRuleId: req.attendanceRuleId, // Y
    locationAppX: req.locationAppX, // Y
    locationAppY: req.locationAppY, // Y
    locationAppErrorMargin: req.locationAppErrorMargin
  }
  return request({
    url: '/ehr/control/insertAttendanceAddress',
    method: 'post',
    params: data
  })
}

// 查询考勤地点
function findAttendanceAddress (req) {
  const data = {
    viewIndex: req.viewIndex,
    viewSize: req.viewSize,
    addressName: req.addressName,
    attendanceName: req.attendanceName
  }
  return request({
    url: '/ehr/control/findAttendanceAddress',
    method: 'post',
    params: data
  })
}

// 删除考勤地点
function deleteAttendanceAddress (req) {
  const data = {
    attendanceAddressId: req.attendanceAddressId // Y
  }
  return request({
    url: '/ehr/control/deleteAttendanceAddress',
    method: 'post',
    params: data
  })
}

// 修改考勤地点
function updateAttendanceAddress (req) {
  const data = {
    attendanceAddId: req.attendanceAddId, // Y
    addressName: req.addressName, // Y
    addressCity: req.addressCity, // Y
    attendanceRuleId: req.attendanceRuleId, // Y
    locationAppX: req.locationAppX, // Y
    locationAppY: req.locationAppY, // Y
    locationAppErrorMargin: req.locationAppErrorMargin
  }
  return request({
    url: '/ehr/control/updateAttendanceAddress',
    method: 'post',
    params: data
  })
}

// 新增考勤规则
function insertAttendanceRule (req) {
  const data = {
    formalStartTime: req.formalStartTime, // Y
    formalEndTime: req.formalEndTime, // Y
    lunchStartTime: req.lunchStartTime, // Y
    lunchEndTime: req.lunchEndTime, // Y
    otStartTime: req.otStartTime,
    otEndTime: req.otEndTime,
    attendanceName: req.attendanceName, // Y
    specialOtStartTime: req.specialOtStartTime,
    specialOtEndTime: req.specialOtEndTime,
    floatTimeAfter: req.floatTimeAfter,
    floatTimeBefore: req.floatTimeBefore
  }
  return request({
    url: '/ehr/control/insertAttendanceRule',
    method: 'post',
    params: data
  })
}

// 补签申请
function attendSignApply (req) {
  const data = {
    attendanceType: req.attendanceType, // Y
    partyId: req.partyId, // Y
    attendanceExceptionId: req.attendanceExceptionId, // Y
    workStartTime: req.workStartTime, // Y
    workEndTime: req.workEndTime, // Y
    exceptionDate: req.exceptionDate, // Y
    signCause: req.signCause, // Y
    signSystemCause: req.signSystemCause, // Y
    ruleId: req.ruleId, // Y
    examinePartyId: req.examinePartyId, // Y
    otherSignContent: req.otherSignContent, // Y
    attendanceAddId: req.attendanceAddId // Y
  }
  return request({
    url: '/ehr/control/attendSignApply',
    method: 'post',
    params: data
  })
}

export default {
  findAttendanceItems,
  insertAttendanceAddress,
  findAttendanceAddress,
  deleteAttendanceAddress,
  updateAttendanceAddress,
  insertAttendanceRule,
  attendSignApply
}
