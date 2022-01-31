<template>
    <section class="products-list">
        <div class="products-list__showcase" >
            <card
                v-for="item in products"
                :key="item"
                :product="item"
            />
        </div>
        <!-- <products-paginate /> -->
    </section>
</template>
<script>

import Card from '@/components/card/Card.vue'
import ProductsPaginate from '@/components/products/ProductsPaginate.vue'
export default {
  props: ['products'],
  setup () {
    return {
    }
  },
  components: { Card, ProductsPaginate }
}
</script>
