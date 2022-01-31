<template>
    <h2 class="products-aside__title title-block">Популярное</h2>
    <ul class="products-aside__list">

        <li
            v-for="product in popular"
            :key="product.id"
            class="products-aside__item"
        >
            <small-card
                :product="product"
            />
        </li>
    </ul>
    <button class="aside-btn">Популярное ></button>
</template>
<script>
import SmallCard from '@/components/smallCard/SmallCard.vue'

export default {
  props: ['popular'],

  components: { SmallCard }
}
</script>
