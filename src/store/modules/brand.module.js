import axios from '@/axios/db'
import { transform } from '@/utils/transform'

export default {
  namespaced: true,
  state () {
    return {
      brands: []
    }
  },
  mutations: {
    setBrands (state, brands) {
      state.brands = brands
    }
  },
  actions: {
    async sendBrands (_, payload) {
      try {
        const { data } = await axios.post('/brands.json', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async loadBrands ({ commit }) {
      try {
        const { data } = await axios.get('/brands.json')
        commit('setBrands', transform(data))
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    brands (state) {
      return state.brands
    }
  }
}
