import axios from '@/axios/db'
import {transform} from '@/utils/transform'
export default {
    namespaced: true,
    state(){
        return {
            products:[]
        }
    },
    mutations: {
        setProducts(state,products){
            state.products = products
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
            try {
                const { data } = await axios.get(`/products.json`)
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
        }
    },
    getters: {
        products(state){
            return state.products
        }
    }
}