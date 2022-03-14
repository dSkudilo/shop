<template>
  <ul class="products-paginate">
    <li class="products-paginate__item products-paginate__item_disabled">
      <font-awesome-icon :icon="['fa','arrow-left']">
      </font-awesome-icon>
    </li>
    <li
      class="products-paginate__item"
      v-for="item in 5"
      :key="item"
      :class="{'products-paginate__item_active':item == 1}"
    >
      {{item}}
    </li>
    <li class="products-paginate__item">
      <font-awesome-icon :icon="['fa','arrow-right']">
      </font-awesome-icon>
    </li>
  </ul>
</template>
