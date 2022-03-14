<template>
  <ul class="admin-list">
    <products-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="$router.push('/admin/product/' + product.id)"
    ></products-item>
  </ul>
</template>

<script>
import ProductsItem from '@/components/admin/products/ProductsItem.vue'
export default {
  props: ['products'],
  components: {
    ProductsItem
  }
}
</script>
