<template>
    <div class="modal-backdrop" v-if="optionsFlag" @click="close"></div>
    <aside class="aside aside_left"></aside>
    <aside class="aside aside_right">
        <button class="aside__button" @click="toggleOptions">
            <font-awesome-icon :icon="['fa','bars']" />
        </button>
        <ul class="aside__list" :class="{aside__list_visible:optionsFlag}">
            <li class="aside__item" @click="toggleSearch">
                <font-awesome-icon :icon="['fa','search']" />
                <the-search
                     v-if="searchFlag"
                />
            </li>
            <li class="aside__item" @click="toggleAuth">
                <font-awesome-icon :icon="['fa','lock']" />
                <the-auth
                    v-if="authFlag"
                />
            </li>

        </ul>
    </aside>
</template>
<script>
import { ref } from '@vue/reactivity'
import TheAuth from './TheAuth.vue'
import TheSearch from './TheSearch.vue'
export default {
  setup () {
    const authFlag = ref(false)
    const toggleAuth = () => {
      authFlag.value = !authFlag.value
    }
    const searchFlag = ref(false)
    const toggleSearch = () => {
      searchFlag.value = !searchFlag.value
    }
    const optionsFlag = ref(false)
    const toggleOptions = () => {
      optionsFlag.value = !optionsFlag.value
    }
    const close = () => {
      optionsFlag.value = false
      authFlag.value = false
      searchFlag.value = false
    }
    return {
      toggleSearch, toggleAuth, authFlag, searchFlag, optionsFlag, toggleOptions, close
    }
  },
  components: { TheAuth, TheSearch }
}
</script>
