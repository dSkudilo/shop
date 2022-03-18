<template>
  <div class="authorization container">
    <h2 class="authorization__title title-block">Авторизация</h2>
    <div class="authorization__content">
      <div class="authorization__card">
        <authorization-registration
        ></authorization-registration>
      </div>
      <div class="authorization__card">
        <authorization-login>
        </authorization-login>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorizationLogin from '@/components/authorization/AuthorizationLogin.vue'
import AuthorizationRegistration from '@/components/authorization/AuthorizationRegistration.vue'
export default {
  components: {
    AuthorizationRegistration,
    AuthorizationLogin
  }
}
</script>

<style>

</style>
