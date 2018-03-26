import request from '@/utils/request'

// 考勤详细查询
function post (url, req) {
  console.log(url)
  console.log(req)
  return request({
    url: url + '',
    method: 'post',
    params: req
  })
}

export default {
  post
}
