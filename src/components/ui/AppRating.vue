<template>
  <div class="text-grey">Оценка: {{floor(ratingValue) || currentRating +'.0'}}</div>
  <div class="rating">
    <div class="rating__body">
      <div
        :class="[{'rating__selected':isSelect},{'rating__active':!isSelect}]"
        :style="{width:currentRating * 20  + '%'}"
      >
      </div>
      <div
        class="rating__items"
        @input="setRatingHandler"
      >
        <input
          v-for="idx in 5"
          :key="idx"
          type="checkbox"
          :name="id"
          :value="idx"
          class="rating__item"
        >
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { floor } from '@/utils/floor.js'
import { onMounted } from '@vue/runtime-core'
export default {
  props: ['rating', 'id'],
  emits: ['selectHandler'],
  name: 'app-rating',
  setup (props, { emit }) {
    const store = useStore()
    const rating = ref(props.rating)

    const ratingValue = computed(() => Object.values(rating.value).reduce((acc, val) => {
      acc -= -val
      return acc
    }, 0) / (Object.values(rating.value).length - 1) || 0
    )
    const currentRating = ref(ratingValue.value)
    const isSelect = ref(false)
    const userId = store.getters['auth/user'].id
    const setRatingHandler = (e) => {
      if (!store.getters['auth/isAuthenticated']) {
        alert('Для того чтобы оставить рйтинг вам нужно зарегистрироваться')
        return
      }
      isSelect.value = true
      if (Number(rating.value[userId]) === Number(e.target.value)) {
        delete rating.value[userId]
        currentRating.value = ratingValue.value
        isSelect.value = false
        emit('selectHandler', {
          delete: true,
          rating: currentRating.value,
          userId
        })
        return
      }
      if (Number(currentRating).value === 0) {
        currentRating.value = e.target.value
        rating.value = {
          [userId]: currentRating.value
        }
      }
      currentRating.value = e.target.value
      emit('selectHandler', {
        rating: currentRating.value,
        userId
      })
      rating.value[userId] = currentRating.value
    }
    onMounted(() => {
      if (rating.value[userId]) {
        isSelect.value = true
        currentRating.value = rating.value[userId]
      }
    })
    return {
      setRatingHandler,
      currentRating,
      isSelect,
      ratingValue,
      floor
    }
  }
}
</script>
