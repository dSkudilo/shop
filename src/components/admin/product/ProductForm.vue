<template>
  <form
    class="admin-product container"
    @submit.prevent="actionProductHadler"
  >
  {{product.imgs}}
    <product-imgs
      :imgs="product.imgs"
      @deleteImgHandler="deleteImgHandler"
      @addImgHandler="addImgHandler"
      :error="iError"
    ></product-imgs>
    <div class="admin-product__info">
      <app-input
        :error="nError"
        :blur="nBlur"
        v-model="name">
        Название</app-input>
      <app-input
        :error="numberError"
        :blur="numberBlur"
        v-model="number">
        Кол-во</app-input>
      <app-input
        :error="pError"
        :blur="pBlur"
        v-model="price"
      >Цена</app-input>
      <app-select
        :error="cError"
        :data="colorsNames"
        :initVal="colors"
        @selectHandler="selectColorsHandler"
      >Цвета</app-select>
      <app-select
        :error="sError"
        :data="sizesNames"
        :initVal="size"
        @selectHandler="selectSizeHandler"
      >Размеры</app-select>
      <app-dropdown
        :data="brandsNames"
        :initVal="brand"
        :error="bError"
        @selectHandler="selectBrandHandler"
      >Бренд</app-dropdown>
      <app-dropdown
        :data="categoriesNames"
        :initVal="category"
        :error="catError"
        @selectHandler="selectCategoryHandler"
      >Категория</app-dropdown>
    </div>
    <div class="admin-product__promo">
      <app-input v-model="discount">
        Скидка
      </app-input>
      <app-checkbox
        data="new"
        :initVal="isNew"
        @changeValueHandler="changeValueHandler"
      >Товар новый ?</app-checkbox>
      <app-checkbox
        data="sale"
        :initVal="sale"
        @changeValueHandler="changeValueHandler"
      >Участвует в скидке ?</app-checkbox>
    </div>
    <button
      class="dark-btn"
    >Отправить</button>
  </form>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'
import { useForm } from 'vee-validate'
import { useProductFields } from '@/use/product-fields.js'
import ProductImgs from '@/components/admin/product/ProductImgs.vue'
import { computed, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  props: [
    'product',
    'categories',
    'brands',
    'sizes',
    'allColors'
  ],
  emits: [
    'actionProductHadler',
    'deleteImgHandler',
    'addImgHandler'
  ],
  setup (props, { emit }) {
    const deleteImgHandler = (val) => {
      emit('deleteImgHandler', val)
    }
    const addImgHandler = (val) => {
      emit('addImgHandler', val)
    }
    const { handleSubmit } = useForm()
    const {
      name,
      price,
      number,
      category,
      brand,
      colors,
      size,
      imgs
    } = useProductFields()
    const actionProductHadler = handleSubmit(values => {
      emit('actionProductHadler', {
        ...values,
        discount: discount.value,
        new: isNew.value,
        sale: sale.value
      })
    })
    brand.value = props.product.brand || ''
    name.value = props.product.name || ''
    price.value = props.product.price || ''
    number.value = props.product.number || ''
    colors.value = props.product.colors || []
    size.value = props.product.size || []
    category.value = props.product.category || ''
    const isNew = ref(props.product.new)
    const sale = ref(props.product.sale)
    const categoriesNames = props.categories.map(cat => cat.type)
    const sizesNames = props.sizes.map(size => size.type)
    const colorsNames = props.allColors.map(color => color.color)
    const iError = props.product.imgs ? ref(false) : ref('Нужно добавить фото !')
    const selectCategoryHandler = (val) => {
      category.value = val
    }
    const brandsNames = props.brands.map(brand => brand.type)
    const selectBrandHandler = (val) => {
      brand.value = val
    }
    const selectSizeHandler = (val) => {
      size.value = val
    }
    const selectColorsHandler = (val) => {
      colors.value = val
    }
    const discount = ref(props.product.discount || '')
    const changeValueHandler = (val, cat) => {
      switch (cat) {
        case 'new':
          isNew.value = val
          break
        case 'sale':
          sale.value = val
          break
      }
    }
    const getFieldsVal = () => {
      return JSON.stringify(
        brand.value + name.value + price.value + number.value +
        colors.value + size.value + category.value + discount.value
      )
    }
    const initProduct = ref(getFieldsVal())
    onBeforeRouteLeave(() => {
      if (initProduct.value !== values.value) {
        const answer = window.confirm(
          'Вы действительно хотите перейти? У вас есть несохраненные изменения !'
        )
        if (!answer) return false
      }
    })
    const values = computed(() => getFieldsVal())
    watch(() => props.product, () => { // передаем геттер
      brand.value = props.product.brand
      name.value = props.product.name
      price.value = props.product.price
      number.value = props.product.number
      colors.value = props.product.colors
      size.value = props.product.size
      category.value = props.product.category
      discount.value = props.product.discount
      isNew.value = props.product.new
      sale.value = props.product.sale
      initProduct.value = getFieldsVal()
    })
    watch(() => props.product.imgs, () => {
      iError.value = props.product.imgs ? false : 'Нужно добавить фото !'
    })
    return {
      ...useProductFields(),
      deleteImgHandler,
      handleSubmit,
      addImgHandler,
      actionProductHadler,
      brand,
      name,
      imgs,
      price,
      number,
      colors,
      size,
      sale,
      isNew,
      category,
      categoriesNames,
      sizesNames,
      brandsNames,
      selectCategoryHandler,
      selectBrandHandler,
      selectSizeHandler,
      selectColorsHandler,
      colorsNames,
      discount,
      changeValueHandler,
      iError
    }
  },
  components: {
    ProductImgs
  }
}
</script>
