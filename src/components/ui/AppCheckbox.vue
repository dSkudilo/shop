<template>
    <div class="checkbox__control">
        <label class="checkbox__content">
            <input 
                type="checkbox" 
                class="checkbox__real" 
                v-model="checkboxValue"
                @change="changeValue"
            >
            <span class="checkbox__fake"></span>
                {{data.title}}
        </label>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'app-checkbox',
    props:['data'],
    emits:['changeValue'],
    setup({ data },{ emit }){
        const checkboxValue = ref('') 
        const changeValue = () => {
            emit('changeValue',{
                type:data.type,
                value:checkboxValue.value
            })
        }
        return{
            checkboxValue,changeValue
        }
    }
}
</script>

<style>

</style>