import { createStore } from 'vuex'
import promo from './modules/promo.module'
import category from './modules/category.module'
import brand from './modules/brand.module'
import size from './modules/size.module'
import product from './modules/product.module'
import comment from './modules/comment.module'
import auth from './modules/auth.module'
import cart from './modules/cart.module'
import color from './modules/color.module'

export default createStore({
  state () {
    return {
      messeage: null
    }
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    },
    clearMessage (state) {
      state.message = null
    }
  },
  actions: {
    setMessage ({ commit }, message) {
      commit('setMessage', message)
      setTimeout(() => commit('clearMessage'), 3000)
    }
  },
  modules: {
    promo,
    category,
    brand,
    size,
    product,
    comment,
    auth,
    cart,
    color
  }
})
