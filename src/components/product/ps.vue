<template>
{{currentStep}}{{length}}{{directionFlag}}
    <div class="product-slider" ref="slider">
        <button 
            class="product-slider__left" 
            @click="prevStep"
            :disabled="delay"
        ></button>
        <button 
            class="product-slider__right" 
            @click="nextStep"
            :disabled="delay"
        ></button>
        <div class="product-slider__row">
            <ul 
                ref="row"
                class="product-slider__list"
                :style="{transform: 'translateX('+ move +')'}"
            >
                <!-- <li
                    class="product-slider__slide"     
                >
                    <img 
                        :src="getImgUrl(data[length-2])" 
                        alt=""
                        class="product-slider__img"
                    >
                </li> -->
                <li
                    class="product-slider__slide"     
                >
                    <img 
                        :src="getImgUrl(data[length-1])" 
                        alt=""
                        class="product-slider__img"
                    >
                </li>
                <li 
                    class="product-slider__slide" 
                    v-for="(item) in data" :key="item"
                >
                    <img 
                        :src="getImgUrl(item)" 
                        alt=""
                        class="product-slider__img"
                    >
                </li>
                <li
                    class="product-slider__slide" 
                >
                    <img 
                        :src="getImgUrl(data[0])" 
                        alt=""
                        class="product-slider__img"
                    >
                </li>
                <!-- <li
                    class="product-slider__slide" 
                >
                    <img 
                        :src="getImgUrl(data[1])" 
                        alt=""
                        class="product-slider__img"
                    >
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from '@vue/runtime-core'
import { removeSwipeSlider, useSwipeSlider } from '../../use/slider-swipe'
export default {
    props:['data'],
    setup(props) {
        const slider = ref(null)
        const length = ref((props.data.length))
        const currentStep = ref(1)
        const move = computed(() => -currentStep.value * leftValue.value  + '%')
        const row = ref(null)
        const directionFlag = ref('')
        const delay = ref(false)
        const leftValue = ref()
        const getImgUrl = (pet) => {
            const images = require.context('@/assets/products/', false, /\.png$/)
            return images('./' + pet)
        }

        const prevStep = () => {
            row.value.style.transition = "transform .2s ease"
            currentStep.value < 0
                ? false
                : currentStep.value --
            row.value.style.transform = 'translateX(' + move.value +')'
            directionFlag.value = 'prev'
            if(currentStep.value <= 0  ){
                jump()
            }
            setDelay()
        }
        const nextStep = () => {
            row.value.style.transition = "transform .2s ease"
            currentStep.value >= length.value 
                ? false
                : currentStep.value ++
            row.value.style.transform = 'translateX('+ move.value +')'
            directionFlag.value = 'next'
            if(currentStep.value >= length.value){
                jump()
            }
            setDelay()
        }

        const setDelay = () => {
            delay.value = true
            setTimeout(() => delay.value = false ,300)
        }

        const jump = () => {
            console.log('jump')
            const fn = () => {
                console.log('fn')
                if(directionFlag.value == 'next'){
                    currentStep.value = 0
                    console.log('next')
                }else{
                    currentStep.value = length.value
                    console.log('prev')
                }
                row.value.style.transition = "none"
                row.value.style.transform = 'translateX('+ move.value +')'
                row.value.removeEventListener('transitionend',fn)
            }
            row.value.addEventListener('transitionend',fn)
        }

        const handleResize = () => {
            if(window.innerWidth <= 640){
                leftValue.value = 100
            }else{
                leftValue.value = 33.3333
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
            window.removeEventListener('resize', handleResize)
            removeSwipeSlider(slider.value,nextStep,prevStep)
        })

        return {
            slider,
            getImgUrl,
            prevStep,
            nextStep,
            move,
            row,
            length,
            currentStep,
            delay,
            directionFlag
        }
    },
}
</script>