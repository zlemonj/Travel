import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
//暂时用不到异步 直接commit
/*  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },*/
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
