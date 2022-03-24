<template>
  <div>
    <h2 class="products-aside__title title-block">Каталог</h2>
    <products-aside-catalog-items
      :data="categories"
      nameType='category'
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-items>
    <products-aside-catalog-items
      :data="brands"
      nameType='brand'
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-items>
    <products-aside-catalog-items
      :data="sizes"
      nameType='size'
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-items>
  </div>
</template>
<script>
import ProductsAsideCatalogItems from '@/components/products/productsAside/ProductsAsideCatalogItems.vue'
export default {
  props: ['categories', 'brands', 'sizes'],
  emits: ['changeFilterHandler'],
  setup (_, { emit }) {
    const changeFilterHandler = (val) => {
      emit('changeFilterHandler', val)
    }
    return {
      changeFilterHandler
    }
  },
  components: {
    ProductsAsideCatalogItems
  }
}
</script>
