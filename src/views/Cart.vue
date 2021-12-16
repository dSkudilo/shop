<template>
  <app-loader 
    v-if="loadFlag"
  />
  <section class="cart container" v-else>
    <cart-empty 
      v-if="!inCart" 
    />
    <cart-list 
      v-else
      :products="products"
      :cart="cart"
    />
    
  </section>
  <the-footer/>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

import CartEmpty from '@/components/cart/CartEmpty.vue'
import CartList from '@/components/cart/CartList.vue'


export default {
  setup(){
    const store = useStore()
    const loadFlag = ref(true)
    const cart = store.getters['cart/cart']
    const inCart = computed(() => store.getters['cart/length'])

    const loadData = async (arr) => {
      if(inCart) {  
        for (const id of arr) {
          await store.dispatch('product/loadProductInCart',id)
        }
      }
        loadFlag.value = false
        console.log('done')
    }

    onMounted(async () => {
        let cartIds = Object.values(cart).map(e => e.options.productId)
        cartIds = [... new Set(cartIds)]
        loadData(cartIds)   
    })
    return{
      loadFlag,
      inCart,
      products:computed(() => store.getters['product/productInCart']),
      cart
    }
  },
  components:{
    TheFooter,
    CartEmpty,
    CartList

  }
}
</script>

<style>

</style>