import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      products: [],
      product: {},
      productInCart: []
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    },
    setProduct (state, product) {
      state.product = product
    },
    setProductsDefinite (state, products) {
      state.productInCart = products
    },
    clearProducts (state) {
      state.products = []
    },
    clearProduct (state) {
      state.product = {}
    }
  },
  actions: {
    async sendProduct ({ dispatch, commit }, payload) {
      try {
        await axios.post('/products.json', payload)
        commit('clearProduct')
        dispatch('setMessage', {
          value: 'Товар успешно добавлен !',
          type: 'primary'
        }, { root: true })
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
        dispatch('setMessage', {
          value: 'Тест прием это тест !',
          type: 'primary'
        }, { root: true })
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
        commit('setProduct', data)
      } catch (error) {
        dispatch('setMessage', {
          value: 'Не удалось загрузить товар !',
          type: 'danger'
        }, { root: true })
      }
    },
    async patchProduct ({ commit, dispatch }, val) {
      try {
        await axios.patch(`/products/${val.id}.json`, val.product)
        dispatch('setMessage', {
          value: 'Товар успешно изменен !',
          type: 'primary'
        }, { root: true })
      } catch (error) {
        dispatch('loadProduct', val.id)
        dispatch('setMessage', {
          value: 'Не удалось загрузить изменить товар !',
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
    product (state) {
      return state.product
    },
    productDefinite (state) {
      return state.productInCart
    }
  }
}
