import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export function useProductForm (productId) {
  const store = useStore()
  const loadFlag = ref(true)
  const product = computed(() => store.getters['product/product'])
  onMounted(async () => {
    if (productId) {
      await store.dispatch('product/loadProduct', productId)
    } else {
      store.commit('product/clearProduct')
    }
    await store.dispatch('category/loadCategories')
    await store.dispatch('brand/loadBrands')
    await store.dispatch('size/loadSizes')
    await store.dispatch('color/loadColors')
    loadFlag.value = false
  })
  const addImgHandler = (img) => {
    if (product.value.imgs) {
      product.value.imgs.push(img)
    } else {
      product.value.imgs = [img]
    }
  }
  const deleteImgHandler = (img) => {
    const id = product.value.imgs.findIndex(item => item === img)
    product.value.imgs.splice(id, 1)
    if (product.value.imgs.length <= 0) {
      delete product.value.imgs
    }
  }
  const getProductValueHandler = (val) => {
    Object.keys(val).forEach(key => {
      // if (product.value[key] !== val[key]) {
      if (key === 'colors' || key === 'size') {
        const obj = val[key].reduce((acc, item, id) => {
          acc[id] = item
          return acc
        }, {})
        product.value[key] = obj
        console.log(obj)
        return
      }
      product.value[key] = val[key]
      // }
    })
  }
  const actionProductHadler = async (val) => {
    getProductValueHandler(val)
    if (productId) {
      await store.dispatch('product/patchProduct', {
        id: productId, product: product.value
      })
      await store.dispatch('product/loadProduct', productId)
    } else {
      await store.dispatch('product/sendProduct', product.value)
    }
  }
  return {
    product,
    loadFlag,
    categories: computed(() => store.getters['category/categories']),
    brands: computed(() => store.getters['brand/brands']),
    sizes: computed(() => store.getters['size/sizes']),
    colors: computed(() => store.getters['color/colors']),
    addImgHandler,
    deleteImgHandler,
    getProductValueHandler,
    actionProductHadler
  }
}
