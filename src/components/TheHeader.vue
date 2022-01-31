<template>
    <header class="header">
        <the-logo />
        <the-navbar />
        <the-basket />
    </header>
</template>
<script>
import TheLogo from './TheLogo.vue'
import TheNavbar from './TheNavbar.vue'
import TheBasket from './TheBasket.vue'
export default {
  components: { TheLogo, TheBasket, TheNavbar }
}
</script>
