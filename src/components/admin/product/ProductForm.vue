<template>
  <form
    class="admin-product container"
    @submit.prevent="$emit('actionProductHadler')"
  >
    <product-imgs
      :imgs="product.imgs"
      @deleteImgHandler="deleteImgHandler"
      @addImgHandler="addImgHandler"
    ></product-imgs>
    <product-info
      :data="product"
      :categories="categories"
      @changeInfoHandler="changeInfoHandler"
      @changePromoHandler="changePromoHandler"
    >
    </product-info>
    <button
      class="dark-btn"
    >Отправить</button>
  </form>
</template>

<script>
import ProductImgs from '@/components/admin/product/ProductImgs.vue'
import ProductInfo from '@/components/admin/product/ProductInfo.vue'
export default {
  props: ['product', 'categories'],
  emits: [
    'actionProductHadler',
    'deleteImgHandler',
    'addImgHandler',
    'changeInfoHandler',
    'changePromoHandler'
  ],
  setup (_, { emit }) {
    const deleteImgHandler = (val) => {
      emit('deleteImgHandler', val)
    }
    const addImgHandler = (val) => {
      emit('addImgHandler', val)
    }
    const changeInfoHandler = (val) => {
      emit('changeInfoHandler', val)
    }
    const changePromoHandler = (val) => {
      emit('changePromoHandler', val)
    }

    return {
      deleteImgHandler,
      addImgHandler,
      changeInfoHandler,
      changePromoHandler
    }
  },
  components: {
    ProductImgs,
    ProductInfo
  }
}
</script>
