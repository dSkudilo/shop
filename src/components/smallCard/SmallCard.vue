<template>
    <div class="small-card">
        <img
            :src="getImgUrl(product.imgs[0])"
            :alt="product.name"
            class="small-card__img">
        <div class="small-card__inf">
            <h5 class="small-card__title card-title">{{product.name}}</h5>
            <p class="small-card__descr text-grey">FASHION HAS ALWAYS BEEN SO TEMPORARY AND UNCERTAIN. YOU CAN’T KEEP UP...</p>
            <p class="small-card__price topic-dark">
                {{currency(product.price)}}
            </p>
        </div>
    </div>
</template>
<script>
import { currency } from '@/utils/currency.js'
export default {
  props: ['product'],
  setup () {
    const getImgUrl = (pet) => {
      const images = require.context('@/assets/products/', false, /\.jpg$/)
      return images('./' + pet)
    }
    return { currency, getImgUrl }
  }
}
</script>
