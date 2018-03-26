import request from '@/utils/request'

export function getMenu () {
  return request({
    url: '/menu/menu',
    method: 'post'
  })
}

export function getNav (serf) {
  const data = {
    serf
  }
  return request({
    url: '/menu/nav',
    method: 'post',
    data
  })
}
