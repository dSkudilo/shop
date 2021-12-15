<template>
    <app-loader
        v-if="loadFlag"
        :style="{'height':'100vh'}"
    />
    <div v-else>
        <product-slider
            :data="product.imgs"
        />

        <div class="container product">
            <product-options 
                :product="product"
                :error="opError"
                @selectSize="selectSize"
                @selectColor="selectColor"
                @counter="counter"
                @inCart="inCart"
            />
            <product-description />
            <product-comments
                :comments="comments"
                @rate="rate"
            />
            <product-related />
        </div>
        <the-footer />
    </div>
</template>
<script>
import TheFooter from '@/components/TheFooter'
import ProductSlider from '@/components/product/ProductSlider.vue'
import ProductOptions from '@/components/product/ProductOptions.vue'
import ProductDescription from '@/components/product/ProductDescription.vue'
import ProductComments from '@/components/product/productComments/ProductComments.vue'
import ProductRelated from '@/components/product/productRelated/ProductRelated.vue'
import ps from '@/components/product/ps.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from '@vue/runtime-core'
export default {
    setup() {
        const store = useStore()
        const route = useRoute()
        const productId = route.params.id
        const loadFlag = ref(true)

        const size = ref()
        const color = ref()
        const number = ref(0)
        const selectSize = (s) => {
            size.value = s
        }
        const selectColor = (c) => {
            color.value = c
        }
        const counter = (n) => {
            number.value = n
        }
        const opError = ref(null)
        const inCart = () => {
            if(!size.value || !color.value || !number.value){
                opError.value = 'Необходимо указать цвет, размер и количество для товара!'
                return
            }
            opError.value = null
 
            const product = {} 
        
            store.commit('cart/add',{
                number:number.value,
                options:{
                    productId,
                    size:size.value,
                    color:color.value,
                }
            })
        }

        const rate = async val => {
           
            if(val.first){
                await store.dispatch('comment/rateFirst',{...val})
                return
            }
            if(val.delete){
                await store.dispatch('comment/rateDelete',{...val})
                return
            }
            await store.dispatch('comment/rate',{...val})
        }



        onMounted( async () => {
            await store.dispatch('product/loadProduct',productId)
            await store.dispatch('comment/loadComments', productId)
            await store.dispatch('comment/sendComment',{
                id:Date.now(),
                productId:'-MoU42_KEueDerPDSC-x',
                name:'Ahmed Samirov',
                title:'Отзыв',
                text:'CRAS AT TORTOR NIBH. SED BIBENDUM SCELERISQUE TELLUS NEC ACCUMSAN. CRAS MALESUADA MASSA LOREM. QUISQUE EU LIGULA VENENATIS, LUCTUS MI EU, ALIQUAM METUS. IN DOLOR PURUS, SOLLICITUDIN ET ANTE ID, GRAVIDA VEHICULA DOLOR. INTEGER VEL PHARETRA NUNC. SED VITAE ARCU ORNARE, BIBENDUM LIBERO NON, SOLLICITUDIN ENIM. NULLA FACILISI. SED NISI LECTUS, CONGUE QUIS DOLOR NON, CONVALLIS SCELERISQUE NULLA. FUSCE ID DIAM FINIBUS, PLACERAT LEO NEC, GRAVIDA DOLOR. MAECENAS DIGNISSIM EST UT ORCI MOLLIS, IN VULPUTATE EST HENDRERIT.',
                date:Date.now(),
                rate:3.3

            })
            // await store.dispatch('product/sendProducts',{
            //     brand:'gap',
            //     category:'jeans',
            //     colors:{
            //         0:'red',
            //         1:'blue'
            //     },
            //     discount:false,
            //     id:1412512512,
            //     imgs:['j1.png','j2.png','j3.png','j2.png'],
            //     name:'super jeans',
            //     number:12,
            //     price:1488,
            //     size:{
            //         0:'s',
            //         1:'m',
            //         2:'l',
            //         3:'xl',
            //         4:'xxl',
            //         5:'xxxl'
            //     }
            // })
            loadFlag.value = false
        })
        return{
            product:computed(() => store.getters['product/products']),
            comments:computed(() => store.getters['comment/comments']),
            loadFlag,
            selectSize,
            selectColor,
            counter,
            opError,
            inCart,
            rate
        }
    },
    components:{
        ProductSlider,
        ProductOptions,
        ProductDescription,
        ProductComments,
        ProductRelated,
        ps,
        TheFooter
    }
}
</script>
<style>

</style>