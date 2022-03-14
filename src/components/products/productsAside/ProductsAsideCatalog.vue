<template>
  <div>
    <h2 class="products-aside__title title-block">Каталог</h2>
    <products-aside-catalog-categories
      :categories="categories"
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-categories>
    <products-aside-catalog-brands
      :brands="brands"
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-brands>
    <products-aside-catalog-sizes
      :sizes="sizes"
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog-sizes>
  </div>
</template>
<script>
import ProductsAsideCatalogCategories from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogCategories.vue'
import ProductsAsideCatalogBrands from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogBrands.vue'
import ProductsAsideCatalogSizes from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogSizes.vue'
export default {
  props: ['categories', 'brands', 'sizes'],
  emits: ['changeFilterHandler'],
  setup (_, { emit }) {
    const changeFilterHandler = (val) => {
      emit('changeFilterHandler', { ...val })
    }
    return {
      changeFilterHandler
    }
  },
  components: {
    ProductsAsideCatalogCategories,
    ProductsAsideCatalogBrands,
    ProductsAsideCatalogSizes
  }
}
</script>
