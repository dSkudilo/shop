import axios from '@/axios/db'
import { transform } from '@/utils/transform'
export default {
  namespaced: true,
  state () {
    return {
      comments: []
    }
  },
  mutations: {
    setComments (state, comments) {
      state.comments = comments
    },
    addComment (state, comment) {
      state.comments.push(comment)
    }
  },
  actions: {
    async sendComment ({ commit, dispatch }, payload) {
      try {
        const date = Date.now()
        const id = Date.now() + Math.random() * 1000
        const { name, secondName } = JSON.parse(localStorage.getItem('shop-user'))
        const comment = {
          date,
          id,
          name,
          rating: { 0: 0 },
          secondName,
          ...payload
        }
        const { data } = await axios.post('/comments.json', comment)
        comment.id = data.name
        commit('addComment', comment)
        dispatch('setMessage', {
          value: 'Комментарий добавлен !',
          type: 'primary'
        }, { root: true })
      } catch (error) {
        dispatch('setMessage', {
          value: 'Комментарий не удалось отправить !',
          type: 'danger'
        }, { root: true })
      }
    },
    async loadComments ({ commit, dispatch }, id) {
      try {
        const { data } = await axios.get('/comments.json')
        const res = transform(data)
        commit('setComments', res.reduce((acc, e) => {
          if (e.productId === id) {
            acc.push(e)
          }
          return acc
        }, []))
      } catch (error) {
        dispatch('setMessage', {
          value: 'Не удалось загрузить комментарии !',
          type: 'danger'
        }, { root: true })
      }
    },
    // async loadComment ({ commit }, id) {
    //   try {
    //     const { data } = await axios.get(`/comments/${id}.json`)
    //     commit('setComments', data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    async rate (_, payload) {
      try {
        await axios.patch(`/comments/${payload.commentId}/rating.json`, {
          [payload.userId]: payload.rating
        })
      } catch (e) {
        console.log(e)
      }
    },
    async rateFirst (_, payload) {
      try {
        await axios.put(`/comments/${payload.commentId}/rating.json`, {
          [payload.userId]: payload.rating
        })
      } catch (e) {
        console.log(e)
      }
    },
    async rateDelete (_, payload) {
      try {
        await axios.delete(`/comments/${payload.commentId}/rating/${payload.userId}.json`)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    comments (state) {
      return state.comments
    }
  }
}
