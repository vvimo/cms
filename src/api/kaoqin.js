import request from '@/utils/request'

export function getKaoqinInfo (req) {
  const data = req
  data.selectItem = ''
  data.viewIndex = data.viewIndex + ''
  data.viewSize = data.viewSize + ''
  return request({
    url: '/ehr/control/attendanceItemFinds',
    method: 'post',
    data: {}
  })
}
