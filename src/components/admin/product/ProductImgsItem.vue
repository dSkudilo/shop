<template>
  <li
    v-for="(img, id) in imgs"
    :key="img"
    :class="[
      'admin-product__list-img',
      {'admin-product__list-img_zoom': id == currentImgSelected }
    ]"
    @click="selectImgHandler(id)"
  >
    <img
      :src="getImgUrl(img)"
      :alt="img"
      class="admin-product__img"
    >
    <span
      class="admin-product__img-close"
      @click.stop="deleteImgHandler(img)"
    >&times;</span>
  </li>
  <teleport
    to="body"
  >
    <div class="back-drop"
      v-if="currentImgSelected || currentImgSelected === 0"
      @click="zoomOutHandler"
    ></div>
  </teleport>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  props: ['imgs'],
  emits: ['deleteImgHandler'],
  setup (_, { emit }) {
    const store = useStore()
    const currentImgSelected = ref()
    const zoomOutHandler = () => { currentImgSelected.value = null }
    const selectImgHandler = (id) => {
      if (currentImgSelected.value === id) {
        zoomOutHandler()
        return
      }
      currentImgSelected.value = id
    }
    const deleteImgHandler = (img) => {
      emit('deleteImgHandler', img)
      zoomOutHandler()
    }
    const getImgUrl = (pet) => {
      try {
        const images = require.context('@/assets/products', false, /\.jpg$/)
        return images('./' + pet)
      } catch (error) {
        store.dispatch('setMessage', {
          value: 'Не удалось загрузить фото !',
          type: 'danger'
        })
        emit('deleteImgHandler', pet)
      }
    }

    return {
      getImgUrl,
      currentImgSelected,
      selectImgHandler,
      zoomOutHandler,
      deleteImgHandler
    }
  }
}
</script>
