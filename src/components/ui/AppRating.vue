<template>
    <div class="text-grey">Оценка: {{floor(ratingValue) || currentRating +'.0'}}</div>

    <div class="rating">
        <div class="rating__body">
            <div 
                :class="[{'rating__selected':isSelect},{'rating__active':!isSelect}]"
                :style="{width:currentRating * 20  + '%'}"    
            >
            </div>
            <div 
                class="rating__items"
                @input="setRating"
            >
                <input 
                    v-for="idx in 5"
                    :key="idx"
                    type="checkbox" 
                    :name="id" 
                    :value="idx"
                    class="rating__item"
                >
            </div>
        </div>
    </div>


</template>
<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { floor } from '@/utils/floor.js'
export default {
    props:['rating','id'],
    emits:['select'],
    setup({ rating },{ emit }){
        const store = useStore()
        const ratingValue = computed(() => {
                return Object.values(rating).reduce((acc,val) => acc -= -val,0) 
                    / Object.values(rating).length || 0
            })
        const currentRating = ref(ratingValue.value)
        const isSelect = ref(false)
        const userId = store.getters['auth/user'].id
        if(rating[userId]){
            isSelect.value = true
        }
        const setRating = (e) => {
            if(!store.getters['auth/isAuthenticated']){
                alert('Для того чтобы оставить рйтинг вам нужно зарегистрироваться')
                return
            }
             
            isSelect.value = true  

            if(rating[userId] == e.target.value){
                console.log('same')
                delete rating[userId]
                currentRating.value = ratingValue.value
                isSelect.value = false  
                emit('select',{
                    delete:true,
                    rating:currentRating.value,
                    userId
                })
                return
            }
            if(currentRating.value == 0){
                currentRating.value = e.target.value
                rating = {[userId]:currentRating.value} 
            }
            
            currentRating.value = e.target.value
            emit('select',{
                rating:currentRating.value,
                userId
            })
            rating[userId] = currentRating.value
        }
        return{
            setRating,
            currentRating,
            isSelect,
            ratingValue,
            floor
        }
    }
}
</script>