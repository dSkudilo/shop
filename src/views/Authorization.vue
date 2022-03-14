<template>
  <div class="authorization container">
    <h2 class="authorization__title title-block">Авторизация</h2>
    <div class="authorization__content">
      <div class="authorization__card">
        <authorization-registration
          @registrationHandler="registrationHandler"
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
import { useStore } from 'vuex'
import AuthorizationLogin from '@/components/authorization/AuthorizationLogin.vue'
import AuthorizationRegistration from '@/components/authorization/AuthorizationRegistration.vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()
    const registrationHandler = async (obj) => {
      try {
        await store.dispatch('auth/signUp', {
          name: obj.name,
          secondName: obj.secondName,
          email: obj.email,
          password: obj.password
        })
        router.push({ name: 'home' })
      } catch (error) {

      }
    }
    return {
      registrationHandler
    }
  },
  components: {
    AuthorizationRegistration,
    AuthorizationLogin
  }
}
</script>

<style>

</style>
