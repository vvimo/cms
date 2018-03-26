import { login, password, userInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'
import crypto from 'crypto'

const md5 = crypto.createHash('md5')

const user = {
  state: {
    roles: '',
    info: {},
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    setting: {
      articlePlatform: []
    },
    serf: ''
  },

  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_SERF: (state, serf) => {
      state.serf = serf
    }
  },

  actions: {
    // 用户名登录
    Login ({ commit }, form) {
      form.password = md5.update(form.password).digest('base64')
      return new Promise((resolve, reject) => {
        login(form).then(response => {
          const data = response
          if (data) {
            commit('SET_TOKEN', data.user_id)
            commit('SET_ROLES', data.role_id)
            setToken(data.user_id)
            resolve(false)
          } else {
            resolve('帐号或密码不准确')
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    UserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        userInfo(state.token).then(response => {
          const data = response
          commit('SET_INFO', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 修改密码
    ChangePassword ({ commit }, form) {
      form.password = md5.update(form.password).digest('base64')
      form.newsPassword = md5.update(form.newsPassword).digest('base64')
      return new Promise((resolve, reject) => {
        password(form).then(response => {
          const data = response
          commit('SET_INFO', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    /* LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles ({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        userInfo(role).then(response => {
          const data = response
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    } */
  }
}

export default user
