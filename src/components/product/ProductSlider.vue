<template>
    <div class="product-slider" ref="slider">
        <div class="product-slider__left" @click="prevStep"></div>
        <div class="product-slider__right" @click="nextStep"></div>
        <div class="product-slider__row">
            <ul 
                class="product-slider__list"
                :style="{transform: 'translateX(' + (-move) +'%)'}"
            >
                <li 
                    class="product-slider__slide" 
                    v-for="(item,id) in imgs" :key="item"
                    :style="{left:ss(id)}"
                    :class="{
                        'product-slider__slide_dur'
                        : (id == length - 1 &&( moveFlag == 'forward')) 
                        || (id == 2 && (moveFlag == 'back'))}"
               
                >
                    <img 
                        :src="getImgUrl(item)" 
                        alt=""
                        class="product-slider__img"
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import { onBeforeMount, onBeforeUnmount, onMounted } from '@vue/runtime-core'
import { removeSwipeSlider, useSwipeSlider } from '../../use/slider-swipe'
export default {
    props:['data'],
    setup(props) {
        const slider = ref(null)
        const propImgs = props.data
        const imgs = ref(propImgs)
        const length = ref((imgs.value.length))
        const moveE = ref(0)
        const moveFlag = ref('forward')
        const move = computed(() => moveE.value * leftValue.value)
        const leftValue = ref()
        const currentStep = ref(0)
        const ss = (id) => {
            return ((( id - currentStep.value ) * leftValue.value )  + move.value ) +'%' 
        }
        const nextStep = () => {
            moveFlag.value = 'forward'
            if(Math.abs(currentStep.value) > length.value - 2 ){
                currentStep.value = -1
            }
            currentStep.value++
            moveE.value++
        }
        const prevStep = () => {
            moveFlag.value = 'back'
            if(currentStep.value <= 0){
                currentStep.value = length.value
            }
           
            moveE.value--
            currentStep.value--
        }
        const getImgUrl = (pet) => {
            const images = require.context('@/assets/products/', false, /\.png$/)
            return images('./' + pet)
        }
    
   

        const handleResize = () => {
            if(window.innerWidth <= 640){
                leftValue.value = 110
            }else{
                leftValue.value = 33.3333
            }
        }
        
        onBeforeMount(() => {
            imgs.value.push(propImgs[0])
            imgs.value.unshift(propImgs[length.value - 1])
            handleResize()
            window.addEventListener('resize', handleResize)
        })
        onMounted(() => {
            useSwipeSlider(slider.value,nextStep,prevStep)
        })
        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize)
            removeSwipeSlider(slider.value,nextStep,prevStep)
        })
        return{
            imgs,
            currentStep,
            prevStep,
            nextStep,
            getImgUrl,
            ss,
            length,
            moveFlag,
            move,
            slider,
            
        }
    },
}
</script>
