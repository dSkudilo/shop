
<template>
    <swiper 
        
        :pagination='{"clickable": true}' 
        class="promo-slider"
        :slidesPerView="4" 
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
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);


export default {
    name:'app-promo-slider',
    props:['data'],
    setup(){
        const getClass = (name,id) => {
            if(id > 3){
                return
            }
            return name + id
        }
        return{
            getClass
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Card
    },
}
</script>