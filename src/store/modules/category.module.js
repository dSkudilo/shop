import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      categories: []
    }
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async sendCategories (_, payload) {
      try {
        await axios.post('/categories.json', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async loadCategories ({ commit }) {
      try {
        const { data } = await axios.get('/categories.json')
        commit('setCategories', transform(data))
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    categories (state) {
      return state.categories
    }
  }
}
