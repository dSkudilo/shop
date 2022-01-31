<template>
    <div class="card" @click="$router.push('/product/' + product.id)">
        <div class="card__shows-text">
            Wolfskin
        </div>
        <div class="card__hashtags">
            <div
                v-if="product.sale"
                class="card__sale">
                    sale!
            </div>
            <div
                v-if="product.new"
                class="card__new">
                    new
            </div>
        </div>
        <div
            v-if="product.discount"
            class="card__discount">
                {{percent(product.discount)}}
        </div>
        <card-slider
            :data="
                {
                    imgs:product.imgs
                }
            "
        />
        <div class="card__info">
            <h3 class="card__name">
                {{product.name}}
            </h3>
            <p class="card__price">
                {{currency(product.price)}}
            </p>
            <button class="card__btn">
                <font-awesome-icon :icon="['fa','cart-plus']" />
                В корзину
            </button>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import CardSlider from './CardSlider.vue'
import { currency } from '../../utils/currency'
import { percent } from '../../utils/percent'
export default {
  props: ['id', 'product'],
  setup (props) {
    const product = ref(props.product)
    return {
      product,
      currency,
      percent
    }
  },
  components: { CardSlider }
}
</script>
