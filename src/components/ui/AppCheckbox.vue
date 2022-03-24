<template>
  <div class="checkbox__control">
    <label class="checkbox__content">
      <input
        type="checkbox"
        class="checkbox__real"
        v-model="checkboxValue"
        @change="$emit('changeValueHandler',checkboxValue,data)"
      >
      <span class="checkbox__fake"></span>
        <slot></slot>
    </label>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  name: 'app-checkbox',
  props: {
    data: {},
    initVal: {
      type: Boolean,
      default: false
    },
    modelValue: {}
  },
  emits: ['changeValueHandler'],
  setup (props) {
    const checkboxValue = ref(props.initVal)
    watch(() => props.initVal, () => {
      checkboxValue.value = props.initVal
    })
    return {
      checkboxValue
    }
  }
}
</script>

<style>

</style>
