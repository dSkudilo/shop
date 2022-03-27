import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      colors: []
    }
  },
  mutations: {
    setColors (state, colors) {
      state.colors = colors
    }
  },
  actions: {
    async sendColors (_, payload) {
      try {
        await axios.post('/colors.json', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async loadColors ({ commit }) {
      try {
        const { data } = await axios.get('/colors.json')
        commit('setColors', transform(data))
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    colors (state) {
      return state.colors
    }
  }
}
