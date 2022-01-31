<template>
  <div>
    <h2 class="products-aside__title title-block">Каталог</h2>
    <products-aside-catalog-categories
      :categories="categories"
      @changeFilter="changeFilter"
    ></products-aside-catalog-categories>
    <products-aside-catalog-brands
      :brands="brands"
      @changeFilter="changeFilter"
    ></products-aside-catalog-brands>
    <products-aside-catalog-sizes
      :sizes="sizes"
      @changeFilter="changeFilter"
    ></products-aside-catalog-sizes>
  </div>
</template>
<script>
import ProductsAsideCatalogCategories from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogCategories.vue'
import ProductsAsideCatalogBrands from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogBrands.vue'
import ProductsAsideCatalogSizes from '@/components/products/productsAside/productAsideCatalog/ProductsAsideCatalogSizes.vue'
export default {
  props: ['categories', 'brands', 'sizes'],
  emits: ['changeFilter'],
  setup (_, { emit }) {
    const changeFilter = (val) => {
      emit('changeFilter', { ...val })
    }
    return {
      changeFilter
    }
  },
  components: {
    ProductsAsideCatalogCategories,
    ProductsAsideCatalogBrands,
    ProductsAsideCatalogSizes
  }
}
</script>
