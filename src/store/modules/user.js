import storage from 'store'
// import { getInfo, logout } from '@/api/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'
// import { welcome } from '@/utils/util'
import md5 from 'md5'
import { Login, loginCode, Logout, UserInfo } from '@/api/pageApi'
// import md5 from 'md5'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    hasGetInfo: false,
    password: '',
    account: '',
    info: {},
    AAndP: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_HAS_GET_INFO: (state, hasGetInfo) => {
      state.hasGetInfo = hasGetInfo
    },
    RESET_INFO: (state) => {
      state.token = ''
      state.name = ''
      state.info = {}
      state.hasGetInfo = false
      state.welcome = ''
      state.avatar = ''
      storage.remove(ACCESS_TOKEN)
    },
    SET_PASSWORD: (state, password) => {
      state.password = password
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    }
  },

  actions: {
    // 登录
    loginPassword({ commit }, logInfo) {
      const { mobile, password, keepLogin } = logInfo
      return new Promise((resolve, reject) => {
        const pass = md5(password)
        Login({
          mobile: mobile,
          password: pass,
          keepLogin: keepLogin
        }).then(async response => {
          console.log('loginuser',response)
          const { data } = response
          // console.log('data', data)
          let time = 2 * 60 * 60 * 1000
          if (keepLogin) {
            time = 7 * 24 * 60 * 60 * 1000
          }
          // storage.set(ACCESS_TOKEN, data['accessToken'], time)
          storage.set(ACCESS_TOKEN, data['accessToken'], time)
          commit('SET_TOKEN', data['accessToken'])
          // commit('SET_HASLOGIN', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    LoginCaptcha ({ commit }, logInfo) {
      const { mobile, code, keepLogin } = logInfo
      return new Promise((resolve, reject) => {
        loginCode({
          mobile: mobile,
          code: code,
          keepLogin: keepLogin
        }).then(async response => {
          const { data } = response
          // console.log('data', data)
          let time = 2 * 60 * 60 * 1000
          if (keepLogin) {
            time = 7 * 24 * 60 * 60 * 1000
          }
          storage.set(ACCESS_TOKEN, data['accessToken'], time)
          commit('SET_TOKEN', data['accessToken'])
          commit('SET_HASLOGIN', true)
          resolve(true)
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        UserInfo().then(response => {
          // console.log('用户信息', response.data)
          const { name, mobile, avatar, birth, gender, email, address, brief, id } = response.data
          const info = { name, mobile, avatar, birth, gender, email, address, brief, id }
          // 调整一下字段的名称
          info.avatar = response.data.photoFileId
          console.log('拿到了用户的个人信息', info)
          commit('SET_INFO', info)
          commit('SET_HAS_GET_INFO', true)
          resolve(true)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 储存用户信息
    SetInfo ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_PASSWORD', data.password)
        commit('SET_ACCOUNT', data.account)
        resolve(data)
      })
    },
    // 登出
    Logout ({ commit }) {
      return new Promise((resolve) => {
        Logout().then(() => {
          commit('RESET_INFO')
          resolve()
        }).catch(() => {
          commit('RESET_INFO')
          resolve()
        })
      })
    },

    // 信息失效
    ResetToken ({ commit }) {
      return new Promise(resolve => {
        commit('RESET_INFO')
        resolve()
      })
    }
  }
}

export default user
