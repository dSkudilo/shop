<template>
    <div class="product-comments__create" v-if="isAuthenticated">
        <h3 class="product-comments__title product-subtitle">Оставить отзыв!</h3>
        <form class="product-comments__form" @submit.prevent="onSubmit">
            <div class="product-comments__add">
                <button class="dark-btn">Оставить комментарий</button>
            </div>
            <div class="product-comments__inputs">
                <div :class="['input-control',{'input-control_error':tError}]">
                    <label>Тема отзыва</label>
                    <input
                        type="text"
                        v-model="theme"
                        @blur="tBlur"
                        autocomplete="off"
                    >
                    <small v-if="tError">{{ tError }}</small>
                </div>
                <div :class="['input-control',{'input-control_error':mError}]">
                    <textarea
                        type="text"
                        v-model="message"
                        @blur="mBlur"
                        autocomplete="off"
                        placeholder="Введите текст"
                    ></textarea>
                    <small v-if="mError">{{ mError }}</small>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { useCommentForm } from '@/use/comment-form'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
export default {
  setup () {
    const store = useStore()
    return {
      isAuthenticated: computed(() => store.getters['auth/isAuthenticated']),
      ...useCommentForm()
    }
  }
}
</script>

<style>

</style>
