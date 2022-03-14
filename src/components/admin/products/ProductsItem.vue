<template>
  <li class="admin-list__item">
    <div
      class="admin-list__imgs"
    >
      <img
        v-for="(img,id) in product.imgs"
        :key="id"
        class="admin-list__img"
        :src="getImgUrl(img)"
        :alt="id"
      >
    </div>
    <div class="admin-list__info">
      <p class="topic-darck">Id: 38</p>
      <p class="topic-darck">Название: Some shit</p>
      <p class="topic-darck">Бренд: Some shit</p>
      <p class="topic-darck">Категория: Some shit</p>
      <p class="topic-darck">Кол-во: 67</p>
        <ul
          class="admin-list__line"
        >
          <li
            class="admin-list__point text-grey">
            Размеры:
          </li>
          <li
            class="admin-list__point text-grey"
            v-for="(size,id) in 5"
            :key="id"
          >{{id}}</li>
        </ul>
    </div>
    <div class="admin-list__colors">
      <ul
        v-for="(color,id) in 4"
        :key="id"
        class="admin-list__line"
      >
        <li
          class="admin-list__point"
        >red</li>
      </ul>
    </div>
    <div class="admin-list__meta">
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
