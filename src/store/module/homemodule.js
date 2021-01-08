let homestore = {
    state: {
        arr: []
    },
    getters: {

    },
    mutations: {
        homel(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        homelink(store) {
            let ok = [
                { img: "man.jpg" },
                { img: "nan.jpg" },
                { img: "xin.jpg" },
                { img: "feng.jpg" },
                { img: "gan.jpg" },
                { img: "pi.jpg" },
                { img: "wei.jpg" },
                { img: "ying.jpg" },
                { img: "xiao.jpg" },
                { img: "xing.jpg" },
                { img: "ge.jpg" },
                { img: "yang.jpg" },
                { img: "zi.jpg" },
                { img: "fu.jpg" },
                { img: "yi.jpg" },

            ]
            store.commit("homel", ok)
        }
    },
    modules: {},
}
export default homestore