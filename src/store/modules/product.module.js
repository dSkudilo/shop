import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      products: [],
      productInCart: []
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    },
    setProductsDefinite (state, products) {
      state.productInCart = products
    }
  },
  actions: {
    async sendProducts (_, payload) {
      try {
        await axios.post('/products.json', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async loadProducts ({ commit }) {
      console.log('sadasd')
      try {
        const { data } = await axios.get('/products.json')
        commit('setProducts', transform(data))
      } catch (error) {
        console.log(error)
      }
    },
    async loadProduct ({ commit }, id) {
      try {
        const { data } = await axios.get(`/products/${id}.json`)
        commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    async loadProductDefinite ({ commit }, ids) {
      try {
        const products = []
        for (const id of ids) {
          const { data } = await axios.get(`/products/${id}.json`)
          products.push({ ...data, id: id })
        }
        commit('setProductsDefinite', products)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    productDefinite (state) {
      return state.productInCart
    }
  }
}
