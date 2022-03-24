<template>
  <div class="container">
    <h1>Create product</h1>
    <app-loader
      v-if="loadFlag"
    ></app-loader>
    <product-form
      v-else
      :product="product"
      :categories="categories"
      @deleteImgHandler="deleteImgHandler"
      @addImgHandler="addImgHandler"
      @changeInfoHandler="changeInfoHandler"
      @changePromoHandler="changePromoHandler"
      @actionProductHadler="actionProductHadler"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/product/ProductForm.vue'
import { useProductForm } from '@/use/product-form.js'
export default {
  setup () {
    return {
      ...useProductForm()
    }
  },
  components: {
    ProductForm
  }
}
</script>
