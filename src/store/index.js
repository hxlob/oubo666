import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { //存放Vuex里的数据状态
    // items:{
    //     id,
    //     image,
    //     num,....
    // }
  },
  getters: {//states 获取计算属性
  },
  mutations: { //更改state数据状态的时候实现
  },
  actions: { //提交mutations的异步操作
  },
  modules: { // Vuex的其他模块
    cart,
  }
})
