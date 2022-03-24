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
      type="button"
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
import { watch } from '@vue/runtime-core'
export default {
  name: 'app-dropdown',
  props: {
    data: Array,
    initVal: {
      type: String,
      required: false
    }
  },
  emits: ['selectHandler'],
  setup (props, { emit }) {
    const content = ref(props.initVal ? props.initVal : 'Выберите размер')
    const flag = ref(false)
    const selectHandler = (item) => {
      content.value = item
      flag.value = false
      emit('selectHandler', item)
    }
    watch(() => props.initVal, () => {
      content.value = props.initVal
    })
    return {
      flag,
      content,
      selectHandler
    }
  }
}
</script>
