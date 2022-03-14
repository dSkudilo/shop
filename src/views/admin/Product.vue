<template>
<app-loader
  v-if="loadFlag"
></app-loader>
  {{product}}
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    const loadFlag = ref(true)
    const productId = route.params.id
    onMounted(async () => {
      loadFlag.value = true
      await store.dispatch('product/loadProduct', productId)
      loadFlag.value = false
    })
    return {
      loadFlag,
      product: computed(() => store.getters['product/products'])
    }
  }
}
</script>
