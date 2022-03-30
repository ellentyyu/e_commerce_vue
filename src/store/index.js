import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    productsAll: [],
    message: {}
  },
  getters: {
  },
  mutations: {
    setProductsAll (state, payload) {
      state.productsAll = payload
    },
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    getProductsAll ({ commit }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(api).then((res) => {
        if (res.data.success) {
          commit('setProductsAll', res.data.products)
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    pushMessages (context, payload) {
      context.commit('setMessage', payload)
    }
  },
  modules: {
  }
})
