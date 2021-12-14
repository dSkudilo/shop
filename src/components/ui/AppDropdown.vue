<template>
    <div class="back-drop"  
        v-if="flag"
        @click="flag = false"
    ></div>
    <div class="dropdown__control">
        <span class="dropdown__title text-gray">
            <slot></slot>
        </span>
        <button 
            class="dropdown__select"
            :class="{'dropdown__select_active':flag}"
            @click="flag = !flag"
        >{{content}}</button>
        <ul class="dropdown__list" v-if="flag">
            <li 
                class="dropdown__item" 
                v-for="item in data"
                :key="item"
                @click="select(item)"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    props:['data'],
    emits:['select'],
    setup(_,{ emit }) {
        const content = ref('Выберите размер')
        const flag = ref(false)
        const select = (item) =>{
            content.value = item
            flag.value = false
            emit('select',item)
        }
        return{
            flag,content,select
        }
    },
}
</script>