import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Swiper from '@/pages/Swiper'
import VueSeamlessScroll from '@/pages/VueSeamlessScroll'
import Wangeditor from '@/pages/Wangeditor'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },  
        {
            path: '/swiper',
            name: 'Swiper',
            component: Swiper,
        },
        {
            path: '/seamscroll',
            name: 'VueSeamlessScroll',
            component: VueSeamlessScroll,
        },
        {
            path: '/wangeditor',
            name: 'Wangeditor',
            component: Wangeditor,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
    ],
})
