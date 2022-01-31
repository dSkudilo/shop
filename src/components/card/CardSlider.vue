<template>
    <div class="card-slider">
        <img :src="getImgUrl(data.imgs[currentStep])"
            alt="product"
            class="card-slider__slide"
        >
        <ul class="card-slider__miniatures" @click.stop>
            <li class="card-slider__miniatur"
                v-for="(img,id) in data.imgs"
                :key="img"
                :class="{'card-slider__miniatur_active':id == currentStep}"
                @click="currentStep = id"
                v-show="id < 3"
            >
                <img :src="getImgUrl(img)" :alt="id" >
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'

export default {
  props: ['data'],
  setup () {
    const currentStep = ref(0)
    const getImgUrl = (pet) => {
      const images = require.context('@/assets/products/', false, /\.jpg$/)
      return images('./' + pet)
    }
    return {
      getImgUrl, currentStep
    }
  }
}
</script>
