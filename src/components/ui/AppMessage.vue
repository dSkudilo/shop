<template>
  <transition name="fade">
    <div
      v-if="message"
      :class="['message','message_' + message.type, 'message_show']"
      @click="close"
    >
      <p class="alert__title" v-if="title">{{title}}</p>
      <p class="alert__text">{{message.value}}</p>
      <span class="message__close">&times;</span>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'app-message',
  setup () {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!'
    }

    const message = computed(() => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

    return {
      message,
      title,
      close: () => store.commit('clearMessage')
    }
  }
}
</script>
