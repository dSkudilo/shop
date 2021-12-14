<template>
  <div class="authorization-registration">
    <h2 class="authorization__title title-block">Уже зарегистрированы?</h2>
    <p class="authorization__text  text-gray">ДЛЯ ВХОДА УКАЖИТЕ ПОЖАЛУЙСТА СВОЙ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ И ПАРОЛЬ</p>
    <form 
      class="authorization__form"
      @submit.prevent="login"
    >
      <div :class="['input-control',{'input-control_error':eError || isTooManyAttempts}]">
        <label>Email</label>
        <input 
            type="email" 
            v-model="email" 
            @blur="eBlur"
            autocomplete="off"
        >
        <small v-if="eError">{{ eError }}</small>
      </div>

      <div :class="['input-control',{'input-control_error':pError || isTooManyAttempts}]">
        <label>Пароль</label>
        <input 
            type="password" 
            v-model="password" 
            @blur="pBlur"
            autocomplete="off"
        >
        <small v-if="pError">{{ pError }}</small>
        <small v-if="isTooManyAttempts">Слишком много попыток попробуйте позже</small>
      </div>
      
      <button 
        :class="['authorization__btn', 'dark-btn',{'disabled':isTooManyAttempts}]"
        :disabled="isTooManyAttempts"
      >Войти</button>
    </form>
  </div>
</template>

<script>
import { useLoginForm } from '@/use/login-form'
export default {
  setup(){
    return{
      ...useLoginForm(),
    }
  }
}
</script>

<style>

</style>