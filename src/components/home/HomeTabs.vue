<template>
  <section class="container tabs">
    <home-tabs-category
      @changeCategoryHandler="changeCategoryHandler"
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
  emits: ['changeCategoryHandler'],
  setup (_, { emit }) {
    const changeCategoryHandler = (cat) => {
      emit('changeCategoryHandler', cat)
    }
    return {
      changeCategoryHandler
    }
  },
  components: {
    HomeTabsCategory
  }
}
</script>
