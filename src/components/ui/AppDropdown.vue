<template>
  <div class="back-drop"
    v-if="flag"
    @click="flag = false"
  ></div>
  <div class="dropdown__control">
    <span class="dropdown__title text-grey">
      <slot></slot>
    </span>
    <button
      class="dropdown__select"
      :class="{'dropdown__select_active':flag}"
      @click="flag = !flag"
    >{{content}}</button>
    <ul class="dropdown__list" v-if="flag">
      <li
        class="dropdown__item"
        v-for="item in data"
        :key="item"
        @click="selectHandler(item)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'app-dropdown',
  props: ['data'],
  emits: ['selectHandler'],
  setup (_, { emit }) {
    const content = ref('Выберите размер')
    const flag = ref(false)
    const selectHandler = (item) => {
      content.value = item
      flag.value = false
      emit('selectHandler', item)
    }
    return {
      flag,
      content,
      selectHandler
    }
  }
}
</script>
