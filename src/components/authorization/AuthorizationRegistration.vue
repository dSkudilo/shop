<template>
  <div class="authorization-registration">
    <h2 class="authorization__title title-block">Создание учтной записи</h2>
    <p class="authorization__text  text-gray">ДЛЯ РЕГИСТРАЦИИ УКАЖИТЕ ПОЖАЛУЙСТА СВОЙ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ (E-MAIL)</p>
    <form 
      class="authorization__form"
      @submit.prevent="registration"  
    >
      <div :class="['input-control',{'input-control_error':nError}]">
        <label>Имя</label>
        <input 
            type="text" 
            v-model="name" 
            @blur="nBlur"
            autocomplete="new-password"
        >
        <small v-if="eError">{{ nError }}</small>
      </div>

      <div :class="['input-control',{'input-control_error':sError}]">
        <label>Фамилия</label>
        <input 
            type="text"  
            v-model="secondName" 
            @blur="sBlur"
            autocomplete="new-password"
        >
        <small v-if="pError">{{ sError }}</small>
      </div>

      <div :class="['input-control',{'input-control_error':eError}]">
        <label>Email</label>
        <input 
            type="email" 
            v-model="email" 
            @blur="eBlur"
            autocomplete="new-password"
        >
        <small v-if="eError">{{ eError }}</small>
      </div>

      <div :class="['input-control',{'input-control_error':pError}]">
        <label>Пароль</label>
        <input 
            type="password" 
            v-model="password" 
            @blur="pBlur"
            autocomplete="new-password"
        >
        <small v-if="pError">{{ pError }}</small>
      </div>
      <button class="authorization__btn dark-btn">Создание учетной записи</button>
    </form>
  </div>
</template>

<script>

import { useLoginForm } from '@/use/login-form'
import {useField} from 'vee-validate'
import * as yup from 'yup'
export default {
  emits:['registration'],
  setup(_,{ emit }){

    const registration = () => {
      emit('registration',{
        name: name.value,
        secondName: secondName.value,
        email: email.value,
        password: password.value
      })
    }
    const {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
    } = useLoginForm()
    const {value: name, errorMessage: nError, handleBlur: nBlur} = useField(
      'name',
      yup
        .string()
        .trim()
        .required('Пожалуйста укажите имя')
    )

    const {value: secondName, errorMessage: sError, handleBlur: sBlur} = useField(
      'secondName',
      yup
        .string()
        .trim()
        .required('Пожалуйста укажите фамилию')
    )
    return{
      registration,
      name,
      secondName,
      nError,
      nBlur,
      sError,
      sBlur,
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
    }
  }
}
</script>

<style>

</style>