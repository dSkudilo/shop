<template>
  <div class="cart-buy">
    <div class="cart-buy__info">
      <h2 class="cart-buy__title">К оплате: </h2>
      <span class="cart-buy__price">&nbsp; {{currency(price)}}</span>
    </div>
    <button class="cart-buy__btn dark-btn">Купить !</button>
  </div>
</template>

<script>
import { currency } from '@/utils/currency'
export default {
  props: ['price'],
  setup () {
    return {
      currency
    }
  }
}
</script>

<style>

</style>
