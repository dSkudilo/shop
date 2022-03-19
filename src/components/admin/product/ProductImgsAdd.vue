<template>
  <div class="admin-product__img-add">
    <div class="input-control">
      <label>Добавить новую фотографию</label>
      <input
        placeholder="укажите название"
        type="text"
        v-model="newImg"
      >
      {{newImg}}
    </div>
    <button
      class="dark-btn"
      @click="addImg(newImg)"
    >Добавить</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  emits: ['addImgHandler'],
  setup (_, { emit }) {
    const newImg = ref('')
    const addImg = () => {
      emit('addImgHandler', newImg.value)
      newImg.value = ''
    }
    return {
      addImg,
      newImg
    }
  }
}
</script>
