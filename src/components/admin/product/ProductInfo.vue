<template>
  <div class="admin-product__info">
    <app-input v-model="brand">
      Бренд
    </app-input>
    <app-input v-model="name">
      Название
    </app-input>
    <app-input v-model="number">
      Кол-во
    </app-input>
    <app-input v-model="price">
      Цена
    </app-input>
    <app-input v-model="colors">
      Цвета
    </app-input>
    <app-input v-model="size">
      Размеры
    </app-input>
    <app-dropdown
      :data="categoriesNames"
      :initVal="category"
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
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  props: ['data', 'categories'],
  emits: ['changePromoHandler', 'changeInfoHandler'],
  setup (props, { emit }) {
    const brand = ref(props.data.brand || '')
    const name = ref(props.data.name || '')
    const price = ref(props.data.price || '')
    const number = ref(props.data.number || '')
    const colors = ref(props.data.colors || '')
    const size = ref(props.data.size || '')
    const category = ref(props.data.category || '')
    const isNew = ref(props.data.new)
    const sale = ref(props.data.sale)
    const categoriesNames = props.categories.map(cat => cat.type)
    const selectCategoryHandler = (val) => {
      category.value = val
    }
    const discount = ref(props.data.discount || '')
    const changeValueHandler = (val, cat) => {
      emit('changePromoHandler', {
        val: val,
        cat: cat
      })
      isNew.value = props.data.new
      sale.value = props.data.sale
    }
    const values = computed(() => JSON.stringify(
      brand.value + name.value + price.value + number.value +
      colors.value + size.value + category.value + discount.value
    ))
    watch(values, () => {
      emit('changeInfoHandler', {
        brand: brand.value || '',
        name: name.value || '',
        price: price.value || '',
        number: number.value || '',
        colors: colors.value || '',
        size: size.value || '',
        category: category.value || '',
        discount: discount.value || ''
      })
    })
    watch(() => props.data, () => { // передаем геттер
      brand.value = props.data.brand
      name.value = props.data.name
      price.value = props.data.price
      number.value = props.data.number
      colors.value = props.data.colors
      size.value = props.data.size
      category.value = props.data.category
      discount.value = props.data.discount
      isNew.value = props.data.new
      sale.value = props.data.sale
    })
    return {
      values,
      brand,
      name,
      price,
      number,
      colors,
      size,
      sale,
      isNew,
      category,
      categoriesNames,
      selectCategoryHandler,
      discount,
      changeValueHandler
    }
  }
}
</script>
