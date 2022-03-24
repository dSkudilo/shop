<template>
  <div class="admin-product__img-add">
    <div class="input-control">
      <label>Добавить новую фотографию</label>
      <input
        placeholder="укажите название"
        type="text"
        v-model="newImg"
      >
    </div>
    <button
      class="dark-btn"
      @click="addImgHandler(newImg)"
      type="button"
    >Добавить</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  emits: ['addImgHandler'],
  setup (_, { emit }) {
    const newImg = ref('')
    const addImgHandler = () => {
      emit('addImgHandler', newImg.value)
      newImg.value = ''
    }
    return {
      addImgHandler,
      newImg
    }
  }
}
</script>
