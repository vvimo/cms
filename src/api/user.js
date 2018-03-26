import request from '@/utils/request'

/**
 * 修改个人信息
 * @param form
 */
function updateUserInfo (req) {
  return request({
    url: '/user/updateUserInfo',
    method: 'post',
    data: req
  })
}

export default {
  updateUserInfo
}
