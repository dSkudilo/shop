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
      <app-colors
        :colors="product.colors"
        @selectColor="selectColor"
      ></app-colors>
      <div class="product-options__dropdown">
        <app-dropdown
          :data="product.size"
          @select="selectSize"
        >Размер</app-dropdown>
      </div>
      <app-counter
        :number="product.number"
        @counterHandler="counter"
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
import AppDropdown from '@/components/ui/AppDropdown.vue'
import AppCounter from '@/components/ui/AppCounter.vue'
import { currency } from '@/utils/currency'
export default {
  props: ['product', 'cart', 'error'],
  emits: ['selectSize', 'selectColor', 'counter', 'inCart'],
  setup (_, { emit }) {
    const selectSize = (size) => emit('selectSize', size)
    const selectColor = (color) => emit('selectColor', color)
    const counter = (number) => emit('counter', number)
    return {
      selectSize,
      selectColor,
      counter,
      currency
    }
  },
  components: {
    AppDropdown,
    AppCounter
  }
}
</script>
