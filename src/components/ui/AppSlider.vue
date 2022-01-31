
<template>
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :loop="true"
        :pagination="{
            'clickable': true
        }"

        :autoplay="{delay:5000}"
        :class="['app-slider',{
            'app-slider_full':full
        }]">
        <swiper-slide
            v-for="( item , i) in data"
            :key="i"
        >
            <img
                :src="getImgUrl(item.img)"
                :alt="item.title"
                class="app-slider__bg"
            />
            <div :class="['app-slider__content',{
                'app-slider__content_white':item.white
            }]">
                <img
                    src="@/assets/logo.png"
                    alt="logo"
                    class="app-slider__logo"
                    v-if="!item.noLogo"
                >
                <h2 class="app-slider__title">{{item.title}}</h2>
                <p class="app-slider__text">{{item.content}}</p>
            </div>

        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Autoplay
} from 'swiper'
SwiperCore.use([Autoplay])
export default {
  props: ['data', 'full'],
  setup () {
    const getImgUrl = (pet) => {
      const images = require.context('@/assets/', false, /\.jpg$/)
      return images('./' + pet)
    }
    return {
      getImgUrl
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>

</style>
