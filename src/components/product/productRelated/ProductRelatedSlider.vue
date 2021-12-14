<template>
    <div class="related-slider" ref="slider">
        <div 
            class="related-slider__arrow related-slider__arrow_left"
            @click="prevStep"    
        >
            <font-awesome-icon :icon="['fa','arrow-left']" />
        </div>
        <div 
            class="related-slider__arrow related-slider__arrow_right"
            @click="nextStep"    
        >
            <font-awesome-icon :icon="['fa','arrow-right']" />
        </div>
        <ul 
            class="related-slider__list"
            :style="{transform: 'translateX(' + (-move()) +'%)'}"
        >
            <li class="related-slider__item" 
                v-for="item in len"
                :key="item"
            >
                <product-related-card />
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import ProductRelatedCard from './ProductRelatedCard.vue'
import { onBeforeMount, onBeforeUnmount, onMounted } from '@vue/runtime-core'
import { removeSwipeSlider, useSwipeSlider } from '../../../use/slider-swipe'
export default {
    setup() {
        const slider = ref(null)
        const len = ref(9)
        const currentStep = ref(0)
        const startValue = ref(6) 
        const moveValue = ref(16.6666)
        const nextStep = () => {
            if(currentStep.value >= len.value - startValue.value){
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
        const move = () =>{
            return currentStep.value * moveValue.value
        }
        const handleResize = () => {
            if(window.innerWidth <= 640){
                startValue.value = 2
                moveValue.value = 50
            }else if(window.innerWidth <= 960){
                startValue.value = 4
                moveValue.value = 25
            }else{
                startValue.value = 6
                moveValue.value = 16.6666
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
        return{
            slider,
            currentStep,
            len,
            nextStep,
            prevStep,
            move,
            startValue
        }
    },
    components:{ProductRelatedCard}
}
</script>