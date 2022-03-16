<template>
<div class="cart">
  <app-loader
    v-if="loadFlag"
  ></app-loader>
  <section class="container" v-else>
    <cart-empty
      v-if="!inCart"
    ></cart-empty>
    <div
      class="cart__conten"
      v-else
    >
      <cart-list
        :products="products"
        :cart="cart"
        @updateCounterHandler="updateCounterHandler"
        @deleteCartHandler="deleteCartHandler"
        @updateColorHandler="updateColorHandler"
      ></cart-list>
      <cart-buy
        :price="costPayment"
      ></cart-buy>
    </div>
  </section>
</div>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

import CartEmpty from '@/components/cart/CartEmpty.vue'
import CartList from '@/components/cart/CartList.vue'
import CartBuy from '@/components/cart/CartBuy.vue'

export default {
  setup () {
    const store = useStore()
    const loadFlag = ref(true)
    const cart = store.getters['cart/cart']
    const inCart = computed(() => store.getters['cart/length'])

    const updateCounterHandler = (obj) => store.commit('cart/counterUpdate', obj)
    const deleteCartHandler = (id) => store.commit('cart/delete', id)
    const updateColorHandler = (obj) => store.commit('cart/colorChange', obj)

    onMounted(async () => {
      // уникальные id
      let cartIds = Object.values(cart).map(e => e.options.productId)
      cartIds = [...new Set(cartIds)]
      if (inCart) {
        await store.dispatch('product/loadProductDefinite', cartIds)
      }
      loadFlag.value = false
    })
    const products = computed(() => store.getters['product/productDefinite'])
    return {
      loadFlag,
      inCart,
      products,
      cart,
      updateCounterHandler,
      deleteCartHandler,
      updateColorHandler,
      costPayment: computed(() => {
        const productsPrice = Object.values(products.value).reduce((acc, element) => {
          acc[element.id] = { price: element.price }
          return acc
        }, {})
        return Object.values(cart).reduce((acc, element) => {
          acc += element.number * productsPrice[element.options.productId].price
          return acc
        }, 0)
      })
    }
  },
  components: {
    TheFooter,
    CartEmpty,
    CartList,
    CartBuy

  }
}
</script>

<style>

</style>
