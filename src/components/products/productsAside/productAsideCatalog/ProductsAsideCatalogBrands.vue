<template>
  <ul class="products-aside__list">
    <li class="products-aside__item topic-dark products-aside__item_title">
      Производитель
    </li>
    <li
      class="products-aside__item"
      v-for="brand in brands"
      :key="brand.id"
    >
      <app-checkbox
        :data="brand"
        @changeValueHandler="changeFilter"
      ></app-checkbox>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['brands'],
  emits: ['changeFilterHandler'],
  setup (_, { emit }) {
    const changeFilter = (val) => {
      emit('changeFilterHandler', {
        cat: 'brand',
        ...val
      })
    }
    return {
      changeFilter
    }
  }
}
</script>

<style>

</style>
