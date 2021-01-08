// import { manbing } from "api/manbingapi.js"
import { mana } from "api/manaapi.js"
let manastore = {
    state: {
        // arr: [],
        arr1: []
    },
    getters: {
        // arr2(state) {
        //     return state.arr.arr2
        // },
        arr(state) {
            return state.arr1.arr
        },
        arr2(state) {
            return state.arr1.arr2
        },
        arr3(state) {
            return state.arr1.arr3
        },
        arr4(state) {
            return state.arr1.arr4
        },
        arr5(state) {
            return state.arr1.arr5
        }
    },
    mutations: {
        // man(state, payload) {
        //     state.arr = payload
        // },
        manb(state, payload) {
            state.arr1 = payload
        },
        manc(state, payload) {
            state.arr2 = payload
        },
        mand(state, payload) {
            state.arr2 = payload
        },
        mane(state, payload) {
            state.arr2 = payload
        },
        manf(state, payload) {
            state.arr2 = payload
        }
    },
    actions: {
        // man(store) {
        //     manbing("/manbingdata").then((ok) => {
        //         store.commit("man", ok.data.arr2[0])
        //         console.log(ok.data.arr2[0])
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        // },
        manb(store) {
            mana("/manadata").then((ok) => {
                store.commit("manb", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        },
        manc(store) {
            mana("/manadata").then((ok) => {
                store.commit("manc", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        },
        mand(store) {
            mana("/manadata").then((ok) => {
                store.commit("mand", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        },
        mane(store) {
            mana("/manadata").then((ok) => {
                store.commit("mane", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        },
        manf(store) {
            mana("/manadata").then((ok) => {
                store.commit("manf", ok.data)
                console.log(ok)
            }).catch((err) => {
                console.log(err)
            })
        },

    },
    modules: {},
}
export default manastore