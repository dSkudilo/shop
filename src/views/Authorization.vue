<template>
    <div class="authorization container">
        <h2 class="authorization__title title-block">Авторизация</h2>
        <div class="authorization__content">
            <div class="authorization__card">
                <authorization-registration
                    @registration="registration"
                />
            </div>
            <div class="authorization__card">
                <authorization-login />
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
    const registration = async (obj) => {
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
      registration
    }
  },
  components: { AuthorizationRegistration, AuthorizationLogin }
}
</script>

<style>

</style>
