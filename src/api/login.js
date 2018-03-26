import request from '@/utils/request'

export function login (form) {
  return request({
    url: '/login',
    method: 'post',
    data: form
  })
}

export function password (form) {
  return request({
    url: '/password',
    method: 'post',
    data: form
  })
}

export function userInfo (form) {
  return request({
    url: '/user/findUserInfo',
    method: 'post',
    data: {
      userId: form
    }
  })
}
