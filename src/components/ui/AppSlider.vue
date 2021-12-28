<template>
    <div class="slider">
        <div class="slider__item" 
            v-for="( item , idx ) in data" 
            :key="item.id"
            :class="{
                slider__item_hidden: currentStep !== idx,
                slider__item_white:item.white    
            }"
        >
            <img class="slider__img" 
                :src="getImgUrl(item.img)" 
                :alt="item.title"
            />
            <div 
                class="slider__info"
                :class="{'slider__info_middle':item.noLogo}"
            >
                <img 
                    src="@/assets/logo.png" 
                    alt="logo" 
                    class="slider__logo"
                    v-if="!item.noLogo"
                >
                <h2 class="slider__title">{{item.title}}</h2>
                <p class="slider__text">{{item.content}}</p>
            </div>
        </div>
        <div class="slider__btns">
            <label class="slider__btn"
                v-for="(item, idx) in data" 
                :key="item.id"
            > 
                <input 
                    type="radio" 
                    name="slider" 
                    class="slider__real"
                    :checked="idx == currentStep"
                    @click="slider(idx)"
                >
                <span class="slider__fake"></span>
            </label>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    props:['data'],
    setup(props) {
        const dataLength = ref(Object.keys(props.data).length - 1)
        const currentStep = ref(0)
        const slider = (idx) => {
            
            if(currentStep.value == dataLength.value){
              
                currentStep.value = 0
            }else{
                currentStep.value = idx
            }
            
        }
        onMounted(() =>{
            delay()
        })
        const delay = () => {
            const nextStep = currentStep.value + 1
            setTimeout(() => slider(nextStep),1000) 
        }
        const getImgUrl = (pet) => {
            const images = require.context('@/assets/', false, /\.jpg$/)
            return images('./' + pet)
        }

        return {currentStep,slider,getImgUrl,delay}
    },
    
}
</script>