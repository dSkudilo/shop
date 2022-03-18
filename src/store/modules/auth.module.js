import axios from 'axios'
import baseAxios from '@/axios/db'

const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USER_KEY = 'shop-user'

export default {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      refreshToken: localStorage.getItem(REFRESH_KEY),
      expiresDate: new Date(localStorage.getItem(EXPIRES_KEY)),
      user: JSON.parse(localStorage.getItem(USER_KEY)) ?? {}
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    setToken (state, { refreshToken, idToken, expiresIn = '3600' }) {
      const expiresDate = new Date(new Date().getTime() + Number(expiresIn) * 1000)
      state.token = idToken
      state.refreshToken = refreshToken
      state.expiresDate = expiresDate
      localStorage.setItem(TOKEN_KEY, idToken)
      localStorage.setItem(REFRESH_KEY, refreshToken)
      localStorage.setItem(EXPIRES_KEY, expiresDate.toString())
    },
    logout (state) {
      state.token = null
      state.refreshToken = null
      state.expiresDate = null
      state.user = {}
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(REFRESH_KEY)
      localStorage.removeItem(EXPIRES_KEY)
      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {
    async login ({ commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', data)
        await dispatch('getUser', data.localId)
      } catch (error) {
        dispatch('setMessage', {
          value: 'Email или пароль не совпадают !',
          type: 'danger'
        }, { root: true })
        throw Error
      }
    },
    async signUp ({ commit, dispatch }, payload) {
      console.log(payload)
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', data)
        await dispatch('createUser', {
          ...data, ...payload
        })
        dispatch('setMessage', {
          value: 'Регистрация прошла успешно !',
          type: 'primary'
        }, { root: true })
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        }, { root: true })
        throw Error
      }
    },
    async createUser ({ commit }, payload) {
      const { data } = await baseAxios.put(`/users/${payload.localId}.json`, {
        role: 'user',
        email: payload.email,
        name: payload.name,
        secondName: payload.secondName
      })
      commit('setUser', { ...data, id: payload.localId })
    },
    async getUser ({ commit, dispatch }, userId) {
      try {
        const { data } = await baseAxios.get(`/users/${userId}.json`)
        commit('setUser', { ...data, id: userId })
        dispatch('setMessage', {
          value: 'Добро пожаловать ' + data.email + ' !',
          type: 'primary'
        }, { root: true })
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        }, { root: true })
      }
    },
    async refresh ({ state, commit, dispatch }) {
      try {
        const { data } = await axios.post(`https://securetoken.googleapis.com/v1/token?key=${process.env.VUE_APP_FB_KEY}`, {
          grant_type: 'refresh_token',
          refresh_token: state.refreshToken
        })
        commit('setToken', {
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          expiresIn: data.expires_in
        })
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isAuthenticated (_, getters) {
      return !!getters.token
    },
    isAdmin (state) {
      return state.user.role === 'admin'
    },
    isUser (_, getters) {
      return !getters.isAdmin
    },
    isExpired (state) {
      return new Date() >= state.expiresDate
    },
    user (state) {
      return state.user
    }
  }
}
