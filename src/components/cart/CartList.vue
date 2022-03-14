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
        :product="returnProductHandler(c)"
        @updateCounterHandler="updateCounterHandler"
        @deleteCartHandler="deleteCartHandler"
        @updateColorHandler="updateColorHandler"
      ></cart-item>
    </div>
  </div>
</template>
<script>
import CartItem from '@/components/cart/CartItem.vue'
export default {
  props: ['products', 'cart'],
  emits: ['updateCounterHandler', 'deleteCartHandler', 'updateColorHandler'],
  setup (props, { emit }) {
    const returnProductHandler = (cart) => Object.values(props.products).find(e =>
      e.id === cart.options.productId)
    const updateCounterHandler = (obj) => emit('updateCounterHandler', obj)
    const deleteCartHandler = (id) => emit('deleteCartHandler', id)
    const updateColorHandler = (obj) => emit('updateColorHandler', obj)
    return {
      returnProductHandler,
      updateCounterHandler,
      deleteCartHandler,
      updateColorHandler
    }
  },
  components: {
    CartItem
  }
}
</script>
