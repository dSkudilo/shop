
<template>
    <swiper
      :pagination='{"clickable": true}'
      class="promo-slider"
      :slidesPerView="slidesPerView"
    >
        <swiper-slide
          v-for="(product, i) in data"
          :key="i"
        >
            <card
              :product="product"
              :class="getClass('card_anime-',i)"
            />
        </swiper-slide>
    </swiper>
</template>
<script>

import Card from '@/components/card/Card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import SwiperCore, {
  Pagination
} from 'swiper'
import { onBeforeMount, onBeforeUnmount, ref } from '@vue/runtime-core'

SwiperCore.use([Pagination])

export default {
  name: 'app-promo-slider',
  props: ['data'],
  setup () {
    const getClass = (name, id) => {
      if (id > 3) {
        return
      }
      return name + id
    }
    const slidesPerView = ref(0)
    const windowResizeHandler = () => {
      if (window.innerWidth <= 480) {
        slidesPerView.value = 1
      } else if (window.innerWidth <= 768) {
        slidesPerView.value = 2
      } else if (window.innerWidth <= 1100) {
        slidesPerView.value = 3
      } else {
        slidesPerView.value = 4
      }
    }
    onBeforeMount(() => {
      windowResizeHandler()
      window.addEventListener('resize', windowResizeHandler)
    })
    onBeforeUnmount(() => window.removeEventListener('resize', windowResizeHandler))
    return {
      getClass,
      slidesPerView
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Card
  }
}
</script>
