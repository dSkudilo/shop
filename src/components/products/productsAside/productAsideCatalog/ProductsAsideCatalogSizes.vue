<template>
  <ul class="products-aside__list products-aside__list_last">
    <li class="products-aside__item topic-dark products-aside__item_title">
      Размер
    </li>
    <li
      class="products-aside__item"
      v-for="size in sizes"
      :key="size.id"
    >
      <app-checkbox
        :data="size"
        @changeValueHandler="changeFilter"
      ></app-checkbox>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['sizes'],
  emits: ['changeFilterHandler'],
  setup (_, { emit }) {
    const changeFilter = (val) => {
      emit('changeFilterHandler', {
        cat: 'size',
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
