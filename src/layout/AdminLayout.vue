<template>
  <the-admin-navbar></the-admin-navbar>
  <div class="with-nav with-aside wrapper">
    <main class="main">
      <router-view>
      </router-view>
    </main>
  </div>
</template>
<script>
import TheAdminNavbar from '@/components/TheAdminNavbar.vue'
export default {
  components: {
    TheAdminNavbar
  }
}
</script>
