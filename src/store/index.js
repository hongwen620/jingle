import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import homestore from "./module/homemodule.js"
import manastore from "./module/manamodule.js"
import liststore from "./module/listmodule.js"
import mestore from "./module/memodule.js"
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        homestore,
        manastore,
        liststore,
        mestore
    }
})