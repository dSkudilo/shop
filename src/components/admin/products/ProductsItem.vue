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
      <p class="topic-darck">Id: 38</p>
      <p class="topic-darck">Название: Some shit</p>
      <p class="topic-darck">Бренд: Some shit</p>
      <p class="topic-darck">Категория: Some shit</p>
      <p class="topic-darck">Кол-во: 67</p>
        <ul
          class="admin-products__list-line"
        >
          <li
            class="admin-products__list-point text-grey">
            Размеры:
          </li>
          <li
            class="admin-products__list-point text-grey"
            v-for="(size,id) in 5"
            :key="id"
          >{{id}}</li>
        </ul>
    </div>
    <div class="admin-products__list-colors">
      <ul
        v-for="(color,id) in 4"
        :key="id"
        class="admin-products__list-line"
      >
        <li
          class="admin-products__list-point"
        >red</li>
      </ul>
    </div>
    <div class="admin-products__list-meta">
      <p class="topic-darck">New: true</p>
      <p class="topic-darck">Скидка: нету</p>
      <p class="topic-darck">Распродажа: не участвует</p>
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
