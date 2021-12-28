
<template>
    <swiper 
        :slidesPerView="slidesPerView" 
        :spaceBetween="0" 
        :slidesPerGroup="1" 
        :pagination='{"clickable": true}' 
        :navigation="true">
    <swiper-slide
        v-for="(src,i) in data"    
        :key="i"
    >
        <img :src="getImgUrl(src)" alt="">
    </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.min.css'
import { ref } from '@vue/reactivity';
import { onBeforeMount, onBeforeUnmount } from '@vue/runtime-core';

export default {
    props:['data'],
    setup(){
        const getImgUrl = (pet) => {
            const images = require.context('@/assets/products/', false, /\.jpg$/)
            return images('./' + pet)
        }
        const slidesPerView = ref(0)
        const windowResizeHandler = () => {
            if(window.innerWidth <= 640){
                slidesPerView.value = 1
            }else{
                slidesPerView.value = 3
            }
        }
        onBeforeMount(() => {
            windowResizeHandler()
            window.addEventListener('resize', windowResizeHandler)
        })
        onBeforeUnmount(() => window.removeEventListener('resize', windowResizeHandler))
        return{
            getImgUrl,
            slidesPerView
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>
<style scoped>


.swiper {
  width: 100%;
  height: 90vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

</style>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.min.css'
 setup(){
        const getImgUrl = (pet) => {
            const images = require.context('@/assets/products/', false, /\.jpg$/)
            return images('./' + pet)
        }
        return{
            getImgUrl
        }
    },