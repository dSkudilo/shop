<template>
    <section class="related">
        <h3 class="related__title product-subtitle">Сопутствующие товары</h3>
        <product-related-slider />
    </section>
</template>
<script>
import ProductRelatedSlider from './ProductRelatedSlider.vue'
export default {
    setup() {
        
    },
    components:{ProductRelatedSlider}
}
</script>