import axios from '@/axios/db'
import {transform} from '@/utils/transform'
export default {
    namespaced: true,
    state(){
        return {
            comments:[]
        }
    },
    mutations: {
        setComments(state,comments){
            state.comments = comments
        },
        addComment(state,comment){
            state.comments.push(comment)
        }
    },
    actions: {
        async sendComment({ commit },payload){
            try {
                console.log('asdasdas')
                const date = Date.now()
                const id  = Date.now() + Math.random() * 1000
                const {name,secondName} = JSON.parse(localStorage.getItem('shop-user'))
                const comment = {
                    date,
                    id,
                    name,
                    rating:{'0':0},
                    secondName,
                    ...payload
                }
                const { data } = await axios.post(`/comments.json`,comment)
                console.log(data)
                comment.id = data.name
                commit('addComment',comment)
            } catch (error) {
                console.log(error)
            }
        },
        async loadComments({ commit },id){
            try {
                const { data } = await axios.get(`/comments.json`)
                console.log(data)
                const res = transform(data)
                commit('setComments', res.reduce((acc,e) => {
                    if(e.productId == id){
                        acc.push(e)
                    }
                    
                    return acc
                },[]))
                
            } catch (error) {
                console.log(error)
            }
        },
        async loadComment({ commit }, id){
            try {
                const { data } = await axios.get(`/comments/${id}.json`)
                commit('setComments', data)
            } catch (error) {
                console.log(error)
            }
        },
        async rate(_,payload){
            try {
                const { data } = await axios.patch(`/comments/${payload.commentId}/rating.json`,{
                    [payload.userId]:payload.rating
                })
            } catch (e) {
                console.log(e)
            }
        },
        async rateFirst(_,payload){
            try {
                const { data } = await axios.put(`/comments/${payload.commentId}/rating.json`,{
                    [payload.userId]:payload.rating
                })
            } catch (e) {
                console.log(e)
            }
        },
        async rateDelete(_,payload){
            try {
                const { data } = await axios.delete(`/comments/${payload.commentId}/rating/${payload.userId}.json`)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        comments(state){
            return state.comments
        }
    }
}