<template>
    <div 
        class="tabs__row"
        ref="slider"
    >
        <home-tabs-paginate 
            :step="currentStep"
            @changePag="nextStep"
            :pageValue="pageValue"
        />
        <div 
            class="tabs__slide"
            :style="{transform: 'translateX(-' + move() +'%)'}"
        >
                <card 
                    v-for="(product, id) in promo" 
                    :key="product.id"
                    :id="id"
                    :product="product"
                    :class="getClass('card_anime-',id)"
            />
        </div>
        
    </div>
</template>
<script>
import { ref, onBeforeMount, onBeforeUnmount, computed, onMounted, } from 'vue'
import { removeSwipeSlider, useSwipeSlider } from '../../../use/slider-swipe'
import HomeTabsPaginate from './HomeTabsPaginate.vue'
import Card from '../../card/Card.vue'
export default {
    
    props:['promo'],
    setup(props) {
        const promo = computed(() => props.promo)
        const slider = ref(null)
        const length = computed(() => promo.value.length)
        const currentStep = ref(1)
        const stepValue = ref(4)
        

        let pageValue =computed(()=>(Math.ceil(length.value / stepValue.value)))

        const move = () => {
            if(currentStep.value * stepValue.value > length.value){
                return (length.value / (stepValue.value)) * 100 - 100
            }
            return (currentStep.value - 1) * 100
        }
        const nextStep = (id) => {
            if(id){
                currentStep.value = id
                return
            }
            if(length.value / stepValue.value <= currentStep.value){
                return
            }
            currentStep.value++
        }
        const prevStep = () => {
            if(currentStep.value <= 0){
                return
            }
            currentStep.value--
        }
        const handleResize = () => {
            if(window.innerWidth <= 480){
                stepValue.value = 1
            }else if(window.innerWidth <= 768){
                stepValue.value = 2
            }else{
                stepValue.value = 4
            }
        }
        onBeforeMount(() => {
            handleResize()
            window.addEventListener('resize', handleResize)
        })
        onMounted(() => {
            useSwipeSlider(slider.value,nextStep,prevStep)
        })
        onBeforeUnmount(() => {
            removeSwipeSlider(slider.value,nextStep,prevStep)
            window.removeEventListener('resize', handleResize)
        })

        const getClass = (name,id) => {
            if(id > 3){
                return
            }
            return name + id
        }

        return{
            slider,
            length,
            currentStep,
            pageValue,
            nextStep,
            move,
            promo,
            getClass
        } 
    },
    components:{
        HomeTabsPaginate, Card
    }
}
</script>