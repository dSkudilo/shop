<template>
    <app-slider 
        :data="[
        {
            img:'mainSliderOne.jpg',
            title:'Styler',
            content:'GET UP TO 15% OFF'
        },
        {
            img:'slide-2.jpg',
            title:'Sale',
            content:'GET UP TO 25% OFF'
        },
        {
            img:'slide-3.jpg',
            title:'New',
            content:'GET UP TO 35% OFF',
            white:true
        }
        ]"
        :minHeight="'90vh'"
    />
    <home-promo />
    <home-tabs 
        :loadFlag="loadFlag"
        :promo="promo"
        @changeCat="changeCat"
    />
    <home-deal />
    <the-footer />
</template>
<script>
import {useStore} from 'vuex'
import TheFooter from '@/components/TheFooter.vue'
import AppSlider from '@/components/ui/AppSlider.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomePromo from '@/components/home/HomePromo.vue'
import HomeDeal from '@/components/home/HomeDeal.vue'
import { computed, onMounted, ref, watch } from '@vue/runtime-core'
export default {
    setup() {
        const store = useStore()
        const loadFlag = ref(true)
        const currentCat = ref('new in shop')
        const changeCat = (cat) => {
            currentCat.value = cat
        }

         watch(currentCat, async (cur) => {
            loadFlag.value = true
            await store.dispatch('promo/loadPromo',currentCat.value)
            setTimeout(() => {
                loadFlag.value = false
            },1000)
        })

        onMounted( async () => {
            await store.dispatch('promo/loadPromo',currentCat.value)
            loadFlag.value = false
            // await store.dispatch('promo/send',{
            //     id:Date.now(),
            //     productId:'-MoU42_KEueDerPDSC-x',
            //     name:'Ahmed Samirov',
            //     title:'Отзыв',
            //     text:'CRAS AT TORTOR NIBH. SED BIBENDUM SCELERISQUE TELLUS NEC ACCUMSAN. CRAS MALESUADA MASSA LOREM. QUISQUE EU LIGULA VENENATIS, LUCTUS MI EU, ALIQUAM METUS. IN DOLOR PURUS, SOLLICITUDIN ET ANTE ID, GRAVIDA VEHICULA DOLOR. INTEGER VEL PHARETRA NUNC. SED VITAE ARCU ORNARE, BIBENDUM LIBERO NON, SOLLICITUDIN ENIM. NULLA FACILISI. SED NISI LECTUS, CONGUE QUIS DOLOR NON, CONVALLIS SCELERISQUE NULLA. FUSCE ID DIAM FINIBUS, PLACERAT LEO NEC, GRAVIDA DOLOR. MAECENAS DIGNISSIM EST UT ORCI MOLLIS, IN VULPUTATE EST HENDRERIT.',
            //     date:Date.now(),
            //     rate:3.3

            // })
            // await store.dispatch('promo/send',{product:{
            //     brand:'gap',
            //     category:'jeans',
            //     colors:{
            //         0:'red',
            //         1:'blue'
            //     },
            //     discount:false,
            //     id:1412512512,
            //     imgs:['t1.jpg','t2.jpg','t3.jpg'],
            //     name:'super jeans',
            //     new:true,
            //     sale:true,
            //     discount:0.17,
            //     number:12,
            //     price:1377,
            //     size:{
            //         0:'s',
            //         1:'m',
            //         2:'l',
            //         3:'xl',
            //         4:'xxl',
            //         5:'xxxl'
            //     }
            //     },category:'salesLeaders'
            // })
            //  window.scrollTo({ top: 0 })
        })
        return{
            promo:computed(() => store.getters['promo/promo']),
            loadFlag,
            changeCat
        }
    },

    components:{
        AppSlider,
        HomePromo,
        HomeTabs,
        HomeDeal,
        TheFooter,

    }
}
</script>