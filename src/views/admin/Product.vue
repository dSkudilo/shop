<template>
  <div class="container">
    <app-loader
      v-if="loadFlag"
    ></app-loader>
    <product-form
      v-else
      :product="product"
      :categories="categories"
      :brands="brands"
      :sizes="sizes"
      :allColors="colors"
      @deleteImgHandler="deleteImgHandler"
      @addImgHandler="addImgHandler"
      @actionProductHadler="actionProductHadler"
    ></product-form>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import ProductForm from '@/components/admin/product/ProductForm.vue'
import { useProductForm } from '@/use/product-form.js'
export default {
  setup () {
    const route = useRoute()
    const productId = route.params.id || null
    return {
      ...useProductForm(productId)
    }
  },
  components: {
    ProductForm
  }
}
</script>
