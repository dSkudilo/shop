<template>
    <the-header>
    </the-header>
    <the-aside>
    </the-aside>
    <div class="with-nav with-aside wrapper">
      <main class="main">
        <router-view />
      </main>
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheAside from '@/components/TheAside.vue'
export default {
  components: {
    TheHeader,
    TheAside
  }
}
</script>
