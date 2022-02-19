<template>
  <header class="header">
    <the-logo>
    </the-logo>
    <the-navbar>
    </the-navbar>
    <the-basket>
    </the-basket>
  </header>
</template>
<script>
import TheLogo from '@/components/TheLogo.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheBasket from '@/components/TheBasket.vue'
export default {
  components: {
    TheLogo,
    TheBasket,
    TheNavbar
  }
}
</script>
