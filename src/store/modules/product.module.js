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
    async sendProducts ({ dispatch }, payload) {
      try {
        await axios.post('/products.json', payload)
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        }, { root: true })
      }
    },
    async loadProducts ({ commit, dispatch }) {
      try {
        const { data } = await axios.get('/products.json')
        commit('setProducts', transform(data))
      } catch (error) {
        dispatch('setMessage', {
          value: 'Не удалось загрузить товары !',
          type: 'danger'
        }, { root: true })
      }
    },
    async loadProduct ({ commit, dispatch }, id) {
      try {
        const { data } = await axios.get(`/products/${id}.json`)
        commit('setProducts', data)
      } catch (error) {
        dispatch('setMessage', {
          value: 'Не удалось загрузить товар !',
          type: 'danger'
        }, { root: true })
      }
    },
    async loadProductDefinite ({ commit, dispatch }, ids) {
      try {
        const products = []
        for (const id of ids) {
          const { data } = await axios.get(`/products/${id}.json`)
          products.push({ ...data, id: id })
        }
        commit('setProductsDefinite', products)
      } catch (error) {
        dispatch('setMessage', {
          value: 'Не удалось загрузить товар !',
          type: 'danger'
        }, { root: true })
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
