<template>
  <div class="modal-backdrop" v-if="optionsFlag" @click="closeModalHandler"></div>
  <aside class="aside aside_left"></aside>
  <aside class="aside aside_right">
    <button class="aside__button" @click="toggleOptionsHandler">
      <font-awesome-icon :icon="['fa','bars']">
      </font-awesome-icon>
    </button>
    <ul class="aside__list" :class="{aside__list_visible:optionsFlag}">
      <li class="aside__item" @click="toggleSearchHandler">
        <font-awesome-icon :icon="['fa','search']">
        </font-awesome-icon>
        <the-search
              v-if="searchFlag"
        ></the-search>
      </li>
      <li class="aside__item" @click="toggleAuthHandler">
        <font-awesome-icon :icon="['fa','lock']" />
        <the-auth
            v-if="authFlag"
        ></the-auth>
      </li>
    </ul>
  </aside>
</template>
<script>
import { ref } from '@vue/reactivity'
import TheAuth from '@/components/TheAuth.vue'
import TheSearch from '@/components/TheSearch.vue'
export default {
  setup () {
    const authFlag = ref(false)
    const toggleAuthHandler = () => {
      authFlag.value = !authFlag.value
    }
    const searchFlag = ref(false)
    const toggleSearchHandler = () => {
      searchFlag.value = !searchFlag.value
    }
    const optionsFlag = ref(false)
    const toggleOptionsHandler = () => {
      optionsFlag.value = !optionsFlag.value
    }
    const closeModalHandler = () => {
      optionsFlag.value = false
      authFlag.value = false
      searchFlag.value = false
    }
    return {
      toggleSearchHandler,
      toggleAuthHandler,
      authFlag,
      searchFlag,
      optionsFlag,
      toggleOptionsHandler,
      closeModalHandler
    }
  },
  components: {
    TheAuth,
    TheSearch
  }
}
</script>
