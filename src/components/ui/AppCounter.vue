<template>
  <div class="counter__control">
    <span class="counter__title text-grey">
      <slot></slot>
    </span>
    <div class="counter__btns">
      <button
        :class="['counter__btn', 'grey-btn',{
          'grey-btn_disable':counter >= number
        }]"
        @click="addCounterHandler"
      >+</button>
      <button class="counter__btn grey-btn">{{counter}}</button>
      <button
        :class="['counter__btn', 'grey-btn',{
            'grey-btn_disable':counter <= 0
        }]"
        @click="removeCounterHandler"
      >-</button>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'app-counter',
  props: ['number', 'val'],
  emits: ['counterHandler'],
  setup (props, { emit }) {
    const counter = ref(props.val || 0)
    const addCounterHandler = () => {
      if (counter.value < props.number) {
        counter.value++
        emit('counterHandler', counter.value)
      }
    }
    const removeCounterHandler = () => {
      if (counter.value > 0) {
        counter.value--
        emit('counterHandler', counter.value)
      }
    }
    return {
      counter,
      addCounterHandler,
      removeCounterHandler
    }
  }
}
</script>
