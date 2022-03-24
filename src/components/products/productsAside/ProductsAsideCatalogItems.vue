<template>
  <ul class="products-aside__list">
    <li class="products-aside__item topic-dark products-aside__item_title">
      Производитель
    </li>
    <li
      class="products-aside__item"
      v-for="d in data"
      :key="d.id"
    >
      <app-checkbox
        :data="d"
        @changeValueHandler="changeFilterHandler"
      >{{d.title}}</app-checkbox>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data', 'nameType'],
  emits: ['changeFilterHandler'],
  setup (props, { emit }) {
    const changeFilterHandler = (val, data) => {
      emit('changeFilterHandler', {
        cat: props.nameType,
        type: data.type,
        value: val
      })
    }
    return {
      changeFilterHandler
    }
  }
}
</script>

<style>

</style>
