import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    productsAll: []
  },
  getters: {
  },
  mutations: {
    setProductsAll (state, payload) {
      state.productsAll = payload;
    }
  },
  actions: {
    getProductsAll ({ commit }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          commit('setProductsAll', res.data.products);
        }
      });
    }
  },
  modules: {
  }
})
