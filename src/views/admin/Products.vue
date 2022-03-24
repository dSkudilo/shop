<template>
  <div class="container">
    <h2 class="topic-dark">Товары</h2>
    <app-loader
      v-if="loadFlag"
    ></app-loader>
    <div
      v-else
      class="admin-products__content">
      <div class="admin-products__contr">
        <app-input v-model="searchValue">
          Поиск товара по названию или ID
        </app-input>
        <router-link
          :to="{name:'adminProductCreate'}"
          v-slot="{href, navigate}"
        >
          <a
            :href="href"
            @click="navigate"
            class="dark-btn"
          >Добавить товар</a>
        </router-link>
      </div>
      <products-not-found
        v-if="!filterProducts.length"
      ></products-not-found>
      <products-list
        v-else
        :products="filterProducts"
      ></products-list>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/admin/products/ProductsList.vue'
import ProductsNotFound from '@/components/admin/products/ProductsNotFound.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch } from '@vue/runtime-core'
import { debounce } from '@/utils/debounce.js'
export default {
  setup () {
    const store = useStore()
    const loadFlag = ref(true)
    const searchValue = ref('')
    const products = computed(() => store.getters['product/products'])
    const filterProducts = ref()
    onMounted(async () => {
      loadFlag.value = true
      await store.dispatch('product/loadProducts')
      loadFlag.value = false
      filterProducts.value = products.value
    })
    const searchProductsHandler = debounce((searchValue) => {
      filterProducts.value = []
      if (!searchValue) {
        filterProducts.value = products.value
        return
      }
      Object.values(products.value).forEach(val => {
        if (val.id.toLowerCase().includes(searchValue.toLowerCase()) || val.name.toLowerCase().includes(searchValue.toLowerCase())) {
          filterProducts.value.push(val)
        }
      })
    }, 1500)

    watch(searchValue, () => {
      searchProductsHandler(searchValue.value)
    })
    return {
      store,
      loadFlag,
      searchValue,
      filterProducts,
      products
    }
  },
  components: {
    ProductsList,
    ProductsNotFound
  }
}
</script>
