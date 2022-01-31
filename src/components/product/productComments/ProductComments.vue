<template>
    <section class="product-comments">
        <h3
            v-if="comments.length > 0"
            class="product-comments__title product-subtitle"
        >Отзывы</h3>
        <h3
            v-else
            class="product-comments__title product-subtitle"
        >Отзывов нету </h3>
        <ul class="product-comments__list">
            <li class="product-comments__item"
                v-for="comment in comments"
                :key="comment"
            >
                <product-comment
                    :comment="comment"
                    @rate="rate"
                />
            </li>
        </ul>
        <product-comment-create />
    </section>
</template>
<script>
import ProductComment from '@/components/product/productComments/ProductComment.vue'
import ProductCommentCreate from '@/components/product/productComments/ProductCommentCreate.vue'
export default {
  props: ['comments'],
  emits: ['rate'],
  setup (_, { emit }) {
    const rate = (val) => emit('rate', val)

    return {
      rate
    }
  },
  components: {
    ProductComment,
    ProductCommentCreate
  }
}
</script>
