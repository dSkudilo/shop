import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteLeave } from 'vue-router'
export function useProductForm (productId) {
  const store = useStore()
  const loadFlag = ref(true)
  const product = productId
    ? computed(() => store.getters['product/products'])
    : ref({})
  const initProduct = ref('')
  onMounted(async () => {
    if (productId) {
      await store.dispatch('product/loadProduct', productId)
    } else {
      store.commit('product/clearProducts')
    }
    await store.dispatch('category/loadCategories')
    initProduct.value = JSON.stringify(product.value)
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
  }
  const changePromoHandler = (obj) => {
    product.value[obj.cat] = obj.val
  }
  const changeInfoHandler = (val) => {
    Object.keys(val).forEach(key => {
      if (product.value[key] !== val[key]) {
        if (key === 'colors' || key === 'size') {
          const obj = val[key].split(',').reduce((acc, item, id) => {
            acc[id] = item
            return acc
          }, {})
          product.value[key] = obj
          return
        }
        product.value[key] = val[key]
      }
    })
  }
  const actionProductHadler = async () => {
    if (productId) {
      await store.dispatch('product/patchProduct', {
        id: productId, product: product.value
      })
    } else {
      await store.dispatch('product/sendProducts', product.value)
    }
    initProduct.value = JSON.stringify(product.value)
  }
  onBeforeRouteLeave(() => {
    if (initProduct.value !== JSON.stringify(product.value)) {
      const answer = window.confirm(
        'Вы действительно хотите перейти? У вас есть несохраненные изменения !'
      )
      if (!answer) return false
    }
  })
  return {
    product,
    loadFlag,
    categories: computed(() => store.getters['category/categories']),
    addImgHandler,
    deleteImgHandler,
    changePromoHandler,
    changeInfoHandler,
    actionProductHadler
  }
}
