import request from '@/utils/request'

/**
 * 查询全部打开地点
 * @param serviceName: appAttendAddressList
 *
 * 获取可查询调休小时
 * @param serviceName: getChangeRestLeftHoursSum
 * @param serchCondition > partyId
 *
 * 获取补签次数
 * @param serviceName: attendSignCount
 * @param serchCondition > partyId + currentMonth
 *
 * 获取上下班时间
 * @param serviceName: findWorkTimeTotal
 * @param serchCondition > ruleId + startTime + endTime
 */
function searchGeneralService (req) {
  return request({
    url: '/ehr/control/searchGeneralService',
    method: 'post',
    data: req
  })
}

export default {
  searchGeneralService
}
