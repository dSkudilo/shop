<template>
  <div class="colors">
    <span class="text-grey colors__title">Colors</span>
    <div class="colors__list">
      <div class="colors__color"
        v-for="(color,idx) in colors" :key="color"
      >
        <label>
          <input
            type="radio"
            :name="name"
            :checked="idx == initVal"
            @input="selectHandler(idx)"
          >
          <span :style="{background:color}"></span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'app-colors',
  props: {
    colors: Array,
    initVal: {
      type: Number,
      default: 0
    }
  },
  emits: ['selectColorHandler'],
  setup (props, { emit }) {
    const selectHandler = (colorId) => {
      emit('selectColorHandler', colorId)
    }
    onMounted(() => selectHandler(props.initVal))
    const name = Math.random() * 10000000
    return {
      selectHandler,
      name
    }
  }
}
</script>
