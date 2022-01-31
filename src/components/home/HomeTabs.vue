<template>
    <section class="container tabs">
        <home-tabs-category
            @changeCat="changeCat"
        />
        <app-loader
            v-if="loadFlag"
        />
        <app-promo-slider
            :data="promo"
            v-else
        />
    </section>
</template>
<script>
import HomeTabsCategory from './homeTabs/HomeTabsCategory.vue'
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

  components: { HomeTabsCategory }
}
</script>
