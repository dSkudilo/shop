<template>
  <h2 class="topic-dark">Товары</h2>
  <app-loader
    v-if="loadFlag"
  ></app-loader>
  <products-list
    v-else
    :products="products"
  ></products-list>
</template>

<script>
import ProductsList from '@/components/admin/products/ProductsList.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from '@vue/runtime-core'
export default {
  setup () {
    const store = useStore()
    const loadFlag = ref(true)

    onMounted(async () => {
      loadFlag.value = true
      await store.dispatch('product/loadProducts')
      loadFlag.value = false
    })
    return {
      store,
      loadFlag,
      products: computed(() => store.getters['product/products'])
    }
  },
  components: {
    ProductsList
  }
}
</script>
