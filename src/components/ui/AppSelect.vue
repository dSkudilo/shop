<template>
  <div class="app-select">
    <h4 class="app-select__label">
      <slot></slot>
    </h4>
    <ul class="app-select__list">
      <li
        :class="['app-select__item', {'app-select__item_active':steps.includes(item)}]"
        v-for="item in data"
        :key="item"
        @click="selectHandler(item)"
      >
        {{item}}
      </li>
    </ul>
    <small
      v-show="error"
      class="app-select__error-text"
    >{{error}}</small>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  name: 'app-select',
  props: ['data', 'initVal', 'error'],
  emits: ['selectHandler'],
  setup (props, { emit }) {
    const steps = ref(props.initVal || [])
    const selectHandler = (val) => {
      const id = steps.value.findIndex(step => step === val)
      if (id !== -1) {
        steps.value.splice(id, 1)
      } else {
        steps.value.push(val)
      }
      emit('selectHandler', steps.value)
    }
    watch(() => props.initVal, () => {
      steps.value = props.initVal || []
    })
    return {
      steps,
      selectHandler
    }
  }
}
</script>
