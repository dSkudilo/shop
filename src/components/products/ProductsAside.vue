<template>
<button 
    class="product-aside__open"
    :class="{'product-aside__open_hidden':asideFlag}" 
    @click="showAside"   
>
    <font-awesome-icon :icon="['fa','compass']" />
</button>

    <aside 
        class="products-aside"
        :class="{'products-aside_show':asideFlag}"
    >
        <button 
            class="product-aside__close"
            @click="closeAside"
        >
            <font-awesome-icon :icon="['fa','ban']" />
        </button>

        <products-aside-catalog
            :categories="categories"
            :brands="brands"
            :sizes="sizes"
            @changeFilter="changeFilter"
        />
        <products-aside-chosen />
        <products-aside-popular
            :popular="popular"
        />
    </aside>
</template>
<script>
import { ref } from '@vue/reactivity'
import ProductsAsideCatalog from './productsAside/ProductsAsideCatalog.vue'
import ProductsAsideChosen from './productsAside/ProductsAsideChosen.vue'
import ProductsAsidePopular from './productsAside/ProductsAsidePopular.vue'

export default {
    props:['categories','brands','sizes','popular'],
    emits:['changeFilter'],
    setup(_,{emit}) {
        const asideFlag = ref(false)
        const showAside = () => {
            asideFlag.value = true
            document.body.classList.add('nowrap')
        }
        const closeAside = () => {
            asideFlag.value = false
            document.body.classList.remove('nowrap')
        }
        const changeFilter = (val) => {
            emit('changeFilter',val)
        }
        return{
            asideFlag,showAside,closeAside,changeFilter
        }
    },
    components:{
        ProductsAsideCatalog,ProductsAsideChosen,ProductsAsidePopular}
}
</script>