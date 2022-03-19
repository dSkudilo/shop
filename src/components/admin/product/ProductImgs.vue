<template>
  <ul class="admin-product__list-imgs">
    <products-imgs-item
      :imgs="imgs"
      @deleteImgHandler="deleteImg"
    >
    </products-imgs-item>
  </ul>
  <product-imgs-add
    @addImgHandler="addImg"
  ></product-imgs-add>
</template>

<script>
import ProductsImgsItem from '@/components/admin/product/ProductImgsItem.vue'
import ProductImgsAdd from '@/components/admin/product/ProductImgsAdd.vue'
export default {
  props: ['imgs'],
  emits: ['deleteImgHandler', 'addImgHandler'],
  setup (_, { emit }) {
    const addImg = (val) => emit('addImgHandler', val)
    const deleteImg = (img) => emit('deleteImgHandler', img)
    return {
      addImg,
      deleteImg
    }
  },
  components: {
    ProductsImgsItem,
    ProductImgsAdd
  }
}
</script>
