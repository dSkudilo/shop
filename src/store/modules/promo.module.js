import axios from '../../axios/db'
import {transform} from '../../utils/transform'
export default {
    namespaced: true,
    state(){
        return {
            promoProducts:[]
        }
    },
    mutations: {
        setPromo(state,promoProducts){
            state.promoProducts = promoProducts
        }
    },
    actions: {
        async send(_,payload){
            try {
                const { data } = await axios.post(`/promo/${payload.category}.json`,payload.product)
            } catch (error) {
                console.log(error)
            }
        },
        async loadPromo({ commit },payload){
            try {
                const { data } = await axios.get(`/promo/${payload}.json`)
                commit('setPromo', transform(data))
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        promo(state){
            return state.promoProducts
        }
    }
}