<template>
    <div class="cart-list" >
        <h2 class="cart-list__title title-block">Список покупок </h2>
        <div 
            class="cart__item"
            v-for="c in cart"
            :key="c"
        >
            <cart-item 
                :cart="c"
                :product="returnProductInCart(c)"
            />
      </div>
    </div>
</template>
<script>
import CartItem from '@/components/cart/CartItem.vue'
export default {
    props:['products','cart'],
    setup({ products }) {
        const returnProductInCart = (cart) => Object.values(products).find(e =>
            e.id == cart.options.productId)
        
        return{
            returnProductInCart
        }
    },
    components:{
        CartItem
    }
}
</script>