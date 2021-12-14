import { createStore } from 'vuex'
import promo from './modules/promo.module'
import category from './modules/category.module'
import brand from './modules/brand.module'
import size from './modules/size.module'
import product from './modules/product.module'
import comment from './modules/comment.module'
import auth from './modules/auth'
import cart from './modules/cart'

export default createStore({
  state(){
    return{}
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    promo,
    category,
    brand,
    size,
    product,
    comment,
    auth,
    cart
  }
})
