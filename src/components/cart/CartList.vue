<template>
    <div class="cart-list" >
        <h2 class="cart-list__title title-block">Список покупок </h2>
        <div 
            class="cart__item"
            v-for="(c,name) in cart"
            :key="c"
        >
            <cart-item 
                :cart="c"
                :productCartId="name"
                :product="returnProductInCart(c)"
                @updateCounterHandler="updateCounterHandler"
                @deleteCartHandler="deleteCartHandler"
            />
      </div>
    </div>
</template>
<script>
import CartItem from '@/components/cart/CartItem.vue'
export default {
    props:['products','cart'],
    emits:['updateCounterHandler','deleteCartHandler'],
    setup({ products }, { emit }) {
        const returnProductInCart = (cart) => Object.values(products).find(e =>
            e.id == cart.options.productId)
        
        const updateCounterHandler = (obj) => emit('updateCounterHandler',obj)
        const deleteCartHandler = (id) => emit('deleteCartHandler',id)
        return{
            returnProductInCart,
            updateCounterHandler,
            deleteCartHandler
        }
    },
    components:{
        CartItem
    }
}
</script>