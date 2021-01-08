import { me } from "api/meapi.js"
let mestore = {
    state: {
        arr: []
    },
    getters: {

        arra(state) {
            return state.arr.arr1
        },
        arrb(state) {
            return state.arr.arrb
        },
    },
    mutations: {
        me(state, payload) {
            state.arr = payload
        },
    },
    actions: {
        me(store) {
            me("/medata").then((ok) => {
                store.commit("me", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    modules: {},
}

export default mestore