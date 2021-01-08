import { list } from "api/listapi.js"
let liststore = {
    state: {
        list: []
    },
    getters: {

        list1(state) {
            return state.list.list1
        },
    },
    mutations: {
        list(state, payload) {
            state.list = payload
        },
    },
    actions: {
        list(store) {
            list("/listdata").then((ok) => {
                store.commit("list", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    modules: {},
}

export default liststore