<template>
  <ul :class="[
    'admin-product__list-imgs',
    {'admin-product__list-imgs_center': !imgs}
  ]">
    <h2
      class="topic-dark"
      v-if="!imgs"
    >Фотографий нету !</h2>
    <products-imgs-item
      v-else
      :imgs="imgs"
      @deleteImgHandler="deleteImgHandler"
    >
    </products-imgs-item>
  </ul>
  <product-imgs-add
    @addImgHandler="addImgHandler"
  ></product-imgs-add>
</template>

<script>
import ProductsImgsItem from '@/components/admin/product/ProductImgsItem.vue'
import ProductImgsAdd from '@/components/admin/product/ProductImgsAdd.vue'
export default {
  props: ['imgs'],
  emits: ['deleteImgHandler', 'addImgHandler'],
  setup (_, { emit }) {
    const addImgHandler = (val) => emit('addImgHandler', val)
    const deleteImgHandler = (img) => emit('deleteImgHandler', img)
    return {
      addImgHandler,
      deleteImgHandler
    }
  },
  components: {
    ProductsImgsItem,
    ProductImgsAdd
  }
}
</script>
