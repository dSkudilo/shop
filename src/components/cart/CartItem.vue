<template>
  <div class="cart-item">
    <button
      class="cart-item__delete"
      @click="deleteCartHandler"
    >
      <font-awesome-icon :icon="['fa','times-circle']">
      </font-awesome-icon>
    </button>
    <div
      class="cart-item__photo"
      @click="to"
    >
      <img
        class="cart-item__img"
        :src="getImgUrl(product.imgs[0])" alt=""
      >
    </div>
    <div class="cart-item__info">
      <h3 class="topic-dark">{{product.name}}</h3>
      <p class="text-grey">size:{{cart.options.size}}</p>
    </div>
    <app-colors
      class="cart-item__colors"
      :colors="product.colors"
      :id="product.id"
      :initVal="cart.options.color"
      @selectColor="updateColorHandler"
    ></app-colors>
    <app-counter
      class="cart-item__counter"
      :val="cart.number"
      :number="product.number"
      @counterHandler="updateCounterHandler"
    >количество</app-counter>
    <span class="cart-item__price topic-dark">
      {{currency(product.price * cart.number)}}
    </span>
  </div>
</template>
<script>
import { currency } from '@/utils/currency.js'
import { useRouter } from 'vue-router'
export default {
  props: ['product', 'cart', 'productCartId'],
  emits: ['updateCounterHandler', 'deleteCartHandler', 'updateColorHandler'],
  setup (props, { emit }) {
    const getImgUrl = (pet) => {
      const images = require.context('@/assets/products/', false, /\.jpg$/)
      return images('./' + pet)
    }
    const router = useRouter()
    const to = () => router.push({ name: 'product', params: { id: props.product.id } })
    const updateCounterHandler = (val) => emit('updateCounterHandler', { id: props.productCartId, val })
    const deleteCartHandler = (val) => emit('deleteCartHandler', props.productCartId)
    const updateColorHandler = (color) => emit('updateColorHandler', { id: props.productCartId, color })
    return {
      getImgUrl,
      currency,
      to,
      updateCounterHandler,
      deleteCartHandler,
      updateColorHandler
    }
  }

}
</script>
