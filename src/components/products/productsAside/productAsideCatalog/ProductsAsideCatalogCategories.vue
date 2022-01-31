<template>
    <ul class="products-aside__list">
        <li class="products-aside__item topic-dark products-aside__item_title">
            KATEGORIEN
        </li>
        <li
            class="products-aside__item"
            v-for="cat in categories"
            :key="cat.id"
        >
            <app-checkbox
                :data="cat"
                @changeValue="changeFilter"
            />
        </li>

    </ul>
</template>

<script>
export default {
  props: ['categories'],
  emits: ['changeFilter'],
  setup (_, { emit }) {
    const changeFilter = (val) => {
      emit('changeFilter', {
        cat: 'category',
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
