<template>
    <div class="basket"
        @click="toCart"
    >
        <font-awesome-icon :icon="['fa','cart-plus']" />
        <div 
            class="basket__counter"
            :class="{'basket__counter_active':animFlag}"
        >
            {{counter > 99 ? '99+' : counter}}</div>
    </div>
</template>
<script>

import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const counter = computed(() => store.getters['cart/length'])
        const animFlag = ref(false)

        watch(counter, (ne,prev) => {
            animFlag.value = true
        }) 
        const toCart = () => {
            animFlag.value = false
            router.push('/cart')
        }
        return{
            counter,
            animFlag,
            toCart
        }
    },
}
</script>