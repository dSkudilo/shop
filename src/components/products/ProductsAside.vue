<template>
  <button
    class="product-aside__open"
    :class="{'product-aside__open_hidden':asideFlag}"
    @click="showAsideHandler"
  >
    <font-awesome-icon :icon="['fa','compass']">
    </font-awesome-icon>
  </button>
  <aside
    class="products-aside"
    :class="{'products-aside_show':asideFlag}"
  >
    <button
      class="product-aside__close"
      @click="closeAsideHandler"
    >
      <font-awesome-icon :icon="['fa','ban']">
      </font-awesome-icon>
    </button>
    <products-aside-catalog
      :categories="categories"
      :brands="brands"
      :sizes="sizes"
      @changeFilterHandler="changeFilterHandler"
    ></products-aside-catalog>
    <products-aside-chosen>
    </products-aside-chosen>
    <products-aside-popular
      :popular="popular"
    ></products-aside-popular>
  </aside>
</template>
<script>
import { ref } from '@vue/reactivity'
import ProductsAsideCatalog from '@/components/products/productsAside/ProductsAsideCatalog.vue'
import ProductsAsideChosen from '@/components/products/productsAside/ProductsAsideChosen.vue'
import ProductsAsidePopular from '@/components/products/productsAside/ProductsAsidePopular.vue'

export default {
  props: ['categories', 'brands', 'sizes', 'popular'],
  emits: ['changeFilterHandler'],
  setup (_, { emit }) {
    const asideFlag = ref(false)
    const showAsideHandler = () => {
      asideFlag.value = true
      document.body.classList.add('nowrap')
    }
    const closeAsideHandler = () => {
      asideFlag.value = false
      document.body.classList.remove('nowrap')
    }
    const changeFilterHandler = (val) =>
      emit('changeFilterHandler', val)

    return {
      asideFlag,
      showAsideHandler,
      closeAsideHandler,
      changeFilterHandler
    }
  },
  components: {
    ProductsAsideCatalog,
    ProductsAsideChosen,
    ProductsAsidePopular
  }
}
</script>
