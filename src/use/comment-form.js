import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {computed, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export function useCommentForm() {
  const store = useStore()
  const route = useRoute()

  const {handleSubmit, isSubmitting, submitCount} = useForm()

  const {value: theme, errorMessage: tError, handleBlur: tBlur} = useField(
    'theme',
    yup
      .string()
      .trim()
      .required('Необходимо ввести тему отзыва')
  )

  const MIN_LENGTH = 0

  const {value: message, errorMessage: mError, handleBlur: mBlur} = useField(
    'message',
    yup
      .string()
      .trim()
      .required('Пожалуйста введите пароль')
      .min(MIN_LENGTH, `Отзыв должен быть больше ${MIN_LENGTH} символов`)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => submitCount.value = 0, 1500)
    }
  })

  const onSubmit = handleSubmit(async values => {
    try {
      const productId = route.params.id
      await store.dispatch('comment/sendComment',{productId,...values})
      
    } catch (e) {
    }
  })

  return {
    theme,
    message,
    tError,
    mError,
    tBlur,
    mBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
    handleSubmit
  }
}