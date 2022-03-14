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
        @selectColorHandler="selectColorHandler"
      ></app-colors>
      <div class="product-options__dropdown">
        <app-dropdown
          :data="product.size"
          @selectHandler="selectSizeHandler"
        >Размер</app-dropdown>
      </div>
      <app-counter
        :number="product.number"
        @counterHandler="changeCounterHandler"
      >Количество</app-counter>
    </div>
    <div class="product-options__btn">
      <button
        @click="$emit('inCart')"
        class="dark-btn">
        <font-awesome-icon :icon="['fa','cart-plus']">
        </font-awesome-icon>
        В корзину
      </button>
      <p class="product-options__error" v-if="error">
        {{error}}
      </p>
    </div>
  </section>
</template>
<script>
import { currency } from '@/utils/currency'
export default {
  props: ['product', 'cart', 'error'],
  emits: ['selectSizeHandler', 'selectColorHandler', 'changeCounterHandler', 'inCart'],
  setup (_, { emit }) {
    const selectSizeHandler = (size) => emit('selectSizeHandler', size)
    const selectColorHandler = (color) => emit('selectColorHandler', color)
    const changeCounterHandler = (number) => emit('changeCounterHandler', number)
    return {
      selectSizeHandler,
      selectColorHandler,
      changeCounterHandler,
      currency
    }
  }
}
</script>
