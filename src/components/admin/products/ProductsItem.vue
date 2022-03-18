<template>
  <li class="admin-products__list-item">
    <div
      class="admin-products__list-imgs"
    >
      <img
        v-for="(img,id) in product.imgs"
        :key="id"
        class="admin-products__list-img"
        :src="getImgUrl(img)"
        :alt="id"
      >
    </div>
    <div class="admin-products__list-info">
      <p class="topic-darck">Id: {{product.id}}</p>
      <p class="topic-darck">Название: {{product.name}}</p>
      <p class="topic-darck">Бренд: {{product.brand}}</p>
      <p class="topic-darck">Категория: {{product.category}}</p>
      <p class="topic-darck">Кол-во: {{product.number}}</p>
        <ul
          class="admin-products__list-line"
        >
          <li
            class="admin-products__list-point text-grey">
            Размеры:
          </li>
          <li
            class="admin-products__list-point text-grey"
            v-for="(size,id) in product.size"
            :key="id"
          >&nbsp;{{size}}</li>
        </ul>
    </div>
    <div class="admin-products__list-colors">
      <ul
        v-for="(color,id) in product.colors"
        :key="id"
        class="admin-products__list-line"
      >
        <li
          class="admin-products__list-point"
        >{{color}}</li>
      </ul>
    </div>
    <div class="admin-products__list-meta">
      <p class="topic-darck">New: {{product.new || 'не участвует'}}</p>
      <p class="topic-darck">Скидка: {{product.discount || 'не участвует'}}</p>
      <p class="topic-darck">Распродажа: {{product.sale || 'не участвует'}}</p>
    </div>
    <p
      class="topic-dark"
    >1377 $</p>
  </li>
</template>

<script>
export default {
  props: ['product'],
  setup () {
    const getImgUrl = (pet) => {
      const images = require.context('@/assets/products', false, /\.jpg$/)
      return images('./' + pet)
    }
    return {
      getImgUrl
    }
  }
}
</script>
