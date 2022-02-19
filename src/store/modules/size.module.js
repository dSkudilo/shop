import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      sizes: []
    }
  },
  mutations: {
    setSizes (state, sizes) {
      state.sizes = sizes
    }
  },
  actions: {
    async sendSizes (_, payload) {
      try {
        await axios.post('/sizes.json', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async loadSizes ({ commit }) {
      try {
        const { data } = await axios.get('/sizes.json')
        commit('setSizes', transform(data))
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    sizes (state) {
      return state.sizes
    }
  }
}
