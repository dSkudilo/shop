<template>
  <component
    :is="layout + '-layout'"
    v-if="layout"
    [v-cloak]
  />
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
export default {
  setup () {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: { MainLayout }
}
</script>
<style>
  [v-cloak]{
    display: none;
  }
</style>
