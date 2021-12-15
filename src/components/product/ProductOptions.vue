<template>
    <section class="product-options">
        <h1 class="product-options__title">{{product.name}}</h1>
        <ul class="product-options__list">
            <li class="product-options__item">
                <p class="product-options__text text-grey">Артикул <span>{{product.vendor}} 1111</span></p>
            </li>
            <li class="product-options__item">
                <p class="product-options__text text-grey">Состояние: <span>{{product.condition}}Новый товар</span></p>
            </li>
            <li class="product-options__item">
                <p class="product-options__text text-grey">Количество: <span>{{product.number}}</span></p>
            </li>
        </ul>
        <p class="product-options__price">Цена: {{currency(product.price)}}</p>
        <div class="product-options__row">
            <product-options-colors
                :colors="product.colors"
                @selectColor="selectColor"
            />
            <div class="product-options__dropdown">
                <app-dropdown
                    :data="product.size"
                    @select="selectSize"
                >Размер</app-dropdown>
            </div>
            <app-counter
                :number="product.number"
                @counter="counter"
            >Количество</app-counter>
        </div>
        <div class="product-options__btn">
            <button
                @click="$emit('inCart')" 
                class="dark-btn">
                <font-awesome-icon :icon="['fa','cart-plus']" />
                В корзину
            </button>
            <p class="product-options__error" v-if="error">
                {{error}}
            </p>
        </div>
    </section>
</template>
<script>
import { ref } from '@vue/reactivity'
import ProductOptionsColors from '@/components/product/productOptions/ProductOptionsColors.vue'
import AppDropdown from '@/components/ui/AppDropdown.vue'
import AppCounter from '@/components/ui/AppCounter.vue'
import { currency } from '@/utils/currency'
export default {
    props:['product','error'],
    emits:['selectSize','selectColor','counter','inCart'],
    setup(_,{ emit }) {
        const colors = ref([{color:'#ce1f21'},{color:'#e04b34'},{color:'#435f9f'},{color:'#00aaf0'}])
        const selectSize = (size) => emit('selectSize',size)
        const selectColor = (color) => emit('selectColor',color)
        const counter = (number) => {emit('counter',number)}
        return{
            colors,
            selectSize,
            selectColor,
            counter,
            currency,
            
        }
    },
    components:{
        AppDropdown,
        ProductOptionsColors,
        AppCounter
    }
}
</script>