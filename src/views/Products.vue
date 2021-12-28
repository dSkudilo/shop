<template>
    <app-slider 
        :data="[
            {
                img:'productsSlide-2.jpg',
                title:'Wolfskin',
                noLogo:true,
                white:true
            },
            {
                img:'productsSlide-1.jpg',
                title:'Wolfskin',
                noLogo:true,
                white:true
            },
            {
                img:'productsSlide-3.jpg',
                title:'Wolfskin',
                noLogo:true,
                white:true
            }
        ]"
        
    />
    <div class="products container">
        <products-aside
            :brands="brands"
            :categories="categories"
            :sizes="sizes"
            :popular="popular"
            @changeFilter="changeFilter"
        />
        <app-loader v-if="loadProducts" />
        <products-list 
            v-else
            :products="products"
        />
     </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import ProductsAside from '@/components/products/ProductsAside.vue'
import ProductsList from '@/components/products/ProductsList.vue'
import AppSlider from '@/components/ui/AppSlider.vue'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const filterVal = ref({})
        const loadProducts = ref(true)
        const loadAside = ref(true)

        const changeFilter = (val) => {
            if(!filterVal.value[val.cat]){
                filterVal.value[val.cat] = []
            }
            const id = filterVal.value[val.cat].findIndex(e => e == val.type)
            if(id !== -1){
                filterVal.value[val.cat].splice(id, 1)
                if(filterVal.value[val.cat].length <=0){
                    delete filterVal.value[val.cat]
                }
            }else{
                filterVal.value[val.cat].push(val.type)
            }    
        }

        
        function compareArrs(val,arr){ 
            if(typeof val === 'object'){
                return val.reduce((acc,p) => {
                    if(arr.includes(p))
                        acc = true
                    return acc
                }, false)
            }else{
                return arr.includes(val)
            }
        }

        const products = computed(() => {
            let products =  store.getters['product/products']
            Object.keys(filterVal.value).forEach(k => {
                products = products.filter(p =>{
                    const category = filterVal.value[k]
                    if(category){
                        return compareArrs(p[k],category)
                    }
                    return p
                })
            })
            return products
        })

        onMounted( async () => {
        
            await store.dispatch('category/loadCategories')
            await store.dispatch('brand/loadBrands')
            await store.dispatch('size/loadSizes')
            await store.dispatch('promo/loadPromo','popular')
            loadAside.value = false
            await store.dispatch('product/loadProducts')
            loadProducts.value = false
        })
        return {
            loadProducts,
            categories:computed(() => store.getters['category/categories']),
            brands:computed(() => store.getters['brand/brands']),
            sizes:computed(() => store.getters['size/sizes']),
            popular:computed(() => store.getters['promo/promo']),
            products,
            changeFilter,

        }
    },
    components:{ProductsAside,ProductsList, AppSlider}
}
</script>