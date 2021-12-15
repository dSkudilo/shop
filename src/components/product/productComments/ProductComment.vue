<template>
    <div class="product-comment">
        <div class="product-comment__info">
            <app-rating
                :rating="comment.rating || 0"
                :id="comment.id"
                @select="rate"
            />
            <h4 class="product-comment__name text-dark">{{ comment.name}} {{comment.secondName}}</h4>
            <p class="product-comment__date text-grey">{{ comment.date }}</p>
        </div>
        <div class="product-comment__message">
            <h5 class="product-comment__title heading-dark">{{ comment.theme }}</h5>
            <p class="product-comment__text text-grey">{{ comment.message }}</p>
        </div>
    </div>
</template>
<script>
import AppRating from '@/components/ui/AppRating.vue'
export default {
    props:['comment'],
    emits:['rate'],
    setup({ comment },{emit}) {
        const rate = rating => emit('rate',{commentId:comment.id,...rating})
        
        return{
            rate
        }
    },
    components:{AppRating}
}
</script>