import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 5000, // request timeout
  withCredentials: true
})

// download url
const downloadUrl = (data) => {
  if (!data) return
  let url = window.URL.createObjectURL(new Blob([data]))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  if (data.config.params.type === 'xlsx') {
    link.setAttribute('download', '员工花名册.xlsx')
  } else {
    link.setAttribute('download', '合同模版.doc')
  }
  document.body.appendChild(link)
  link.click()
}

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent//
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    if (response.headers && response.headers['content-type'] === 'application/x-msdownload;charset=utf-8') {
      downloadUrl(response)
      return
    }

    const res = response.data
    if (res && (res.code === 200 || res.code === '200')) {
      return res.data
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
