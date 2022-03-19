<template>
  <div class="container">
    <app-loader
    v-if="loadFlag"
    ></app-loader>
    <div
      v-else
      class="admin-product container"
    >
      <product-imgs
        :imgs="product.imgs"
        @deleteImgHandler="deleteImgHandler"
        @addImgHandler="addImgHandler"
      ></product-imgs>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

import ProductImgs from '@/components/admin/product/ProductImgs.vue'
export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    const loadFlag = ref(true)
    const productId = route.params.id
    const product = computed(() => store.getters['product/products'])
    const deleteImgHandler = (img) => {
      const id = product.value.imgs.findIndex(item => item === img)
      product.value.imgs.splice(id, 1)
    }
    const addImgHandler = (img) => {
      product.value.imgs.push(img)
    }
    onMounted(async () => {
      loadFlag.value = true
      await store.dispatch('product/loadProduct', productId)
      loadFlag.value = false
    })
    return {
      loadFlag,
      deleteImgHandler,
      addImgHandler,
      product
    }
  },
  components: {
    ProductImgs
  }
}
</script>
