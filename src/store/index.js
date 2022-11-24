
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex) 

import login from './modules/login'
import createPersistedState from "vuex-persistedstate";
 
// vuex-persistedstate vuex模块同步本地持久化 https://github.com/robinvdvleuten/vuex-persistedstate/tree/3.x.x

const dataState = createPersistedState({
    key:"vue2-fly",
    paths:["login"]
})

export default new Vuex.Store({
    plugins:[dataState],

    modules:{
        login
    }
})
