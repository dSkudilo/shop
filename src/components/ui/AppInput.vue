<template>
  <div
    :class="['input-control',{'input-control_error':error}]"
  >
    <label
    >
      <slot></slot>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      @blur="blur"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :autocomplete="autocomplete"
    >
    <small v-show="error">{{error}}</small>
  </div>
</template>
<script>
export default {
  name: 'app-input',
  props: {
    modelValue: {},
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Введите текст'
    },
    autocomplete: {
      type: String,
      default: 'new-password'
    },
    requiredText: {
      type: String,
      default: ' '
    },
    minText: {
      type: String,
      default: 'Кол-во символов должно быть больше '
    },
    minLength: {
      type: Number,
      default: 100
    },
    error: {
      type: String
    },
    blur: {}
  },
  emits: ['input', 'update:modelValue']

}
</script>
