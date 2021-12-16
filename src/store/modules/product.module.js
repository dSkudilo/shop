import axios from '@/axios/db'
import {transform} from '@/utils/transform'
export default {
    namespaced: true,
    state(){
        return {
            products:[],
            productInCart:[]
        }
    },
    mutations: {
        setProducts(state,products){
            state.products = products
        },
        setProductsInCart(state,products){
            state.productInCart.push(products)
        }
    },
    actions: {
        async sendProducts(_,payload){
            
            try {
                const { data } = await axios.post(`/products.json`,payload)
            } catch (error) {
                console.log(error)
            }
        },
        async loadProducts({ commit }){
            console.log('sadasd')
            try {
                const { data } = await axios.get(`/products.json`)
                console.log(data)
                commit('setProducts', transform(data))
                
            } catch (error) {
                console.log(error)
            }
        },
        async loadProduct({ commit }, id){
            try {
                const { data } = await axios.get(`/products/${id}.json`)
                commit('setProducts', data)
            } catch (error) {
                console.log(error)
            }
        },
        async loadProductInCart({ commit }, id){
            try {
                const { data } = await axios.get(`/products/${id}.json`)
                commit('setProductsInCart', {...data,id:id})
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        products(state){
            return state.products
        },
        productInCart(state){
            return state.productInCart
        }
    }
}