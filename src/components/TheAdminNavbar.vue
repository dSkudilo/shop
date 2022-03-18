<template>
  <nav class="nav"
    @click="showMobile"
  >
    <button
      class="nav__menu"
      :class="{nav__menu_dark:navFlag}"
    >menu</button>
    <ul class="nav__list"
      :class="{nav__list_hidden:!navFlag}"
    >
      <router-link
        :to="{name:'adminProducts'}"
        custom
        v-slot="{href, navigate, isActive}"
      >
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Товары
          </a>
        </li>
      </router-link>
      <router-link
        :to="{name:'products'}"
        custom
        v-slot="{href, navigate, isActive}"
      >
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Категории
          </a>
        </li>
      </router-link>
      <router-link
        :to="{name:'about'}"
        custom
        v-slot="{href, navigate, isActive}"
      >
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Промо
          </a>
        </li>
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Бренды
          </a>
        </li>
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Размеры
          </a>
        </li>
        <li
          class="nav__item"
          :class="{'nav__item_active':isActive}"
          @click="navigate"
        >
          <a
            :active="isActive"
            :href="href"
            class="nav__link">
            Пользователи
          </a>
        </li>
      </router-link>
    </ul>
  </nav>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const navFlag = ref(false)
    const showMobile = () => {
      navFlag.value = !navFlag.value
    }
    return {
      showMobile, navFlag
    }
  }
}
</script>
