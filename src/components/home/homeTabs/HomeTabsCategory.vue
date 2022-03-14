<template>
  <ul class="tabs__titles">
    <li
      class="tabs__title"
      v-for="(cat,id) in CATEGORY"
      :key="cat.name"
      :class="{tab__title_active:currentCat == id}"
      @click="selectCategoryHandler(id)"
    >
      {{cat.title}}
    </li>
  </ul>
</template>
<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  emits: ['changeCategoryHandler'],
  setup (_, { emit }) {
    const CATEGORY = ref([
      {
        title: 'Новинки',
        name: 'new in shop'
      },
      {
        title: 'Популярное',
        name: 'popular'
      },
      {
        title: 'Лидеры продаж',
        name: 'salesLeaders'
      },
      {
        title: 'Скидки',
        name: 'discounts'
      }
    ])
    const currentCat = ref(0)
    const selectCategoryHandler = (id) => {
      currentCat.value = id
    }
    const getName = (id) => CATEGORY.value[id].name

    watch(currentCat, (cur) => {
      emit('changeCategoryHandler', getName(cur))
    })
    return {
      CATEGORY,
      currentCat,
      selectCategoryHandler
    }
  }
}
</script>
