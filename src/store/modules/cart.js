export default {
    namespaced: true,
    state() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) ?? {}
      }
    },
    mutations: {
      clear(state) {
        state.cart = {}
        localStorage.removeItem('cart')
      },
      add(state, product) {
        let inCart = false
        const lockId = Date.now() + Math.random() * 10000
        Object.keys(state.cart).forEach(key => {
            if(JSON.stringify(state.cart[key].options) === JSON.stringify(product.options)){
                state.cart[key].number += product.number
                localStorage.setItem('cart', JSON.stringify(state.cart))
                inCart = true
            }   
        })
        if(!inCart){
            state.cart[lockId] = product
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
      },
      remove(state, productId) {
        const count = state.cart[productId].number
        if (typeof count === 'undefined') {
          return
        }
        if (count <= 1) {
          delete state.cart[productId]
          localStorage.setItem('cart', JSON.stringify(state.cart))
          return
        }
        state.cart[productId] = count - 1
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
      delete(state,productId){
        delete state.cart[productId]
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
      counterUpdate(state,obj){
        state.cart[obj.id].number = obj.val
        if(state.cart[obj.id].number <= 0){
          delete state.cart[obj.id]
          localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
      colorChange(state,obj){
        state.cart[obj.id].options.color = obj.color
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    getters: {
      count(state) {
        return Object.values(state.cart).reduce((acc, i) => acc + i, 0)
      },
      cart(state) {
        return state.cart
      },
      length(state){
        if(Object.values(state.cart).length <= 0 ){
          return 0 
        }
        return Object.values(state.cart).reduce((acc,i) => acc += i.number,0) 
      }
    }
  }