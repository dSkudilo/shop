<template>
    <div 
        :class="['input-control',{'input-control_error':error}]"    
    >
        <label
            v-if="label"    
        >
            {{label}}
        </label>
        <input 
            :type="type" 
            :placeholder="placeholder"
            v-model="inputVal"
            @blur="blur"
            @input="input"
            :autocomplete="autocomplete"
        >
        <small v-if="error">{{error}}</small>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
export default {
    name:'app-input',
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:'Введите текст'
        },
        label:{
            type:String
        },
        autocomplete:{
            type:String,
            default:'new-password'
        },
        requiredText:{
            type:String,
            default:' '
        },
        minText:{
            type:String,
            default:'Кол-во символов должно быть больше '
        },
        minLength:{
            type:Number,
            default:0
        }
    },
    emits:['input'],
    setup(props,{ emit }) {
        const input = () => {
            emit('input',inputVal.value)
        }
        const some = ref('asdasdasdasdas')
        // const {handleSubmit, isSubmitting, submitCount} = useForm()
        const {value: inputVal, errorMessage: error, handleBlur: blur} = useField(
            'inputVal',
            yup
                .string()
                .trim()
                .required(props.requiredText)
                .min(props.minLength, props.minText + props.minLength +' символов')
           
        )



        return{
            inputVal,
            input,
            error,
            blur,
        }
    },
}
</script>