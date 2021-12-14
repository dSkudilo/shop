<template>
    <section class="container tabs">
        <home-tabs-category 
            @changeCat="changeCat"
        />
        <app-loader 
            v-if="loadFlag"
        />
        <home-tabs-slider 
            v-else
            :promo="promo"
            v-cloak
        />
    </section>
</template>
<script>
import HomeTabsCategory from './homeTabs/HomeTabsCategory.vue'
import HomeTabsSlider from './homeTabs/HomeTabsSlider.vue'
export default {
    props:['promo','loadFlag'],
    emits:['changeCat'],
    setup(_, { emit }){
        const changeCat = (cat) => {
            emit('changeCat',cat)
        }
        return{
            changeCat
        }
    },
    
    components:{HomeTabsCategory,HomeTabsSlider}
}
</script>