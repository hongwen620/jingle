import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: '/list',
        name: 'List',
        component: () =>
            import ('../views/list.vue')
    },
    {
        path: '/me',
        name: 'Me',
        component: () =>
            import ('../views/me.vue')
    },
    {
        path: '/manbing',
        name: 'Manbing',
        component: () =>
            import ('../views/manbing.vue')
    },
    {
        path: '/mana/:xiao',
        name: 'Mana',
        component: () =>
            import ('../views/mana.vue')
    },
    {
        path: '/qiang/:xixi',
        name: 'Qiang',
        component: () =>
            import ('../views/qiang.vue')
    },
    {
        path: '/dizhi',
        name: 'Dizhi',
        component: () =>
            import ('../views/dizhi.vue')
    },
    {
        path: '*',
        name: 'No',
        component: () =>
            import ('../views/no.vue')
    }
]

const router = new VueRouter({

    base: process.env.BASE_URL,
    routes
})

export default router