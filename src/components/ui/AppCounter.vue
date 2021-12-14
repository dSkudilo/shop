<template>
    <div class="counter__control">
        <span class="counter__title text-gray">
            <slot></slot>
        </span>
        <div class="counter__btns">
            <button 
                :class="['counter__btn', 'grey-btn',{
                    'grey-btn_disable':counter >= number
                }]"
                @click="counterAdd"    
            >+</button>
            <button class="counter__btn grey-btn">{{counter}}</button>
            <button 
                :class="['counter__btn', 'grey-btn',{
                    'grey-btn_disable':counter <= 0
                }]"
                @click="counterMinus"    
            >-</button>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    props:['number'],
    emits:['counter'],
    setup(props,{ emit }) {
        const counter = ref(0)
        const counterAdd = () => {
            if(counter.value < props.number -100){
                counter.value++
                emit('counter',counter.value)
            }
        }
        const counterMinus = () => {
            if(counter.value > 0){
                counter.value--
                emit('counter',counter.value)
            }
        }
        return{
            counter,
            counterAdd,
            counterMinus,
        } 
    },
}
</script>