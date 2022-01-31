import axios from '../../axios/db'
export default {
  namespaced: true,
  state () {
    return {
      promoProducts: [],
      promoIds: []
    }
  },
  mutations: {
    setPromo (state, promoIds) {
      state.promoIds = promoIds
    }
  },
  actions: {
    async send (_, payload) {
      try {
        await axios.post(`/promo/${payload.category}.json`, payload.product)
      } catch (error) {
        console.log(error)
      }
    },
    async loadPromo ({ commit }, payload) {
      try {
        const { data } = await axios.get(`/promo/${payload}.json`)
        const ids = Object.values(data).map((element) => element.id)
        commit('setPromo', ids)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    promoIds (state) {
      return state.promoIds
    }
  }
}
