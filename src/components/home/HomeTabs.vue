<template>
  <section class="container tabs">
    <home-tabs-category
      @changeCat="changeCat"
    ></home-tabs-category>
    <app-loader
      v-if="loadFlag"
    ></app-loader>
    <app-promo-slider
      :data="promo"
      v-else
    ></app-promo-slider>
  </section>
</template>
<script>
import HomeTabsCategory from '@/components/home/homeTabs/HomeTabsCategory.vue'
export default {
  props: ['promo', 'loadFlag'],
  emits: ['changeCat'],
  setup (_, { emit }) {
    const changeCat = (cat) => {
      emit('changeCat', cat)
    }
    return {
      changeCat
    }
  },
  components: {
    HomeTabsCategory
  }
}
</script>
