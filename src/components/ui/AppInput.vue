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
    <small v-if="error">{{error}}</small>
  </div>
</template>
<script>
import { useField } from 'vee-validate'
import * as yup from 'yup'
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
      default: 0
    }
  },
  emits: ['input', 'update:modelValue'],
  setup (props, { emit }) {
    const input = () => {
      emit('input', inputVal.value)
    }
    const { value: inputVal, errorMessage: error, handleBlur: blur } = useField(
      'inputVal',
      yup
        .string()
        .trim()
        .required(props.requiredText)
        .min(props.minLength, props.minText + props.minLength + ' символов')
    )
    return {
      inputVal,
      input,
      error,
      blur
    }
  }
}
</script>
