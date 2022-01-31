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
        :full="true"
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
import { useStore } from 'vuex'
import TheFooter from '@/components/TheFooter.vue'
import AppSlider from '@/components/ui/AppSlider.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomePromo from '@/components/home/HomePromo.vue'
import HomeDeal from '@/components/home/HomeDeal.vue'
import { computed, onMounted, ref, watch } from '@vue/runtime-core'
export default {
  setup () {
    const store = useStore()
    const loadFlag = ref(true)
    const currentCat = ref('new in shop')
    const changeCat = (cat) => currentCat.value = cat

    watch(currentCat, async (cur) => loadProduct())

    onMounted(async () => {
      loadProduct()
      // await store.dispatch('promo/send',{
      //     product:{
      //         id:'-MqzmzyvvsrnbZ_sQlCJ'
      //     },
      //     category:'discounts'
      // })
    })
    const loadProduct = async () => {
      loadFlag.value = true
      await store.dispatch('promo/loadPromo', currentCat.value)
      const promoIds = computed(() => store.getters['promo/promoIds'])
      await store.dispatch('product/loadProductDefinite', promoIds.value)
      loadFlag.value = false
    }
    return {
      promo: computed(() => store.getters['product/productDefinite']),
      loadFlag,
      changeCat
    }
  },

  components: {
    AppSlider,
    HomePromo,
    HomeTabs,
    HomeDeal,
    TheFooter

  }
}
</script>
