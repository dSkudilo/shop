<template>
  <section class="products-list">
    <div class="products-list__showcase" >
      <card
        v-for="item in products"
        :key="item"
        :product="item"
      ></card>
    </div>
    <products-paginate></products-paginate>
  </section>
</template>
<script>

import Card from '@/components/card/Card.vue'
import ProductsPaginate from '@/components/products/ProductsPaginate.vue'
export default {
  props: ['products'],
  components: {
    Card,
    ProductsPaginate
  }
}
</script>
