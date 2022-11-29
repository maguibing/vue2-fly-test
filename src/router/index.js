import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Swiper from '@/pages/Swiper'
import VueSeamlessScroll from '@/pages/VueSeamlessScroll'
import Wangeditor from '@/pages/Wangeditor'
import NotFound from '@/pages/404'

Vue.use(Router)

const router = new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Home',
            meta:{
                title:"首页"
            },
            component: Home,
        },  
        {
            path: '/swiper',
            name: 'Swiper',
            meta:{
                title:"轮播图"
            },
            component: Swiper,
        },
        {
            path: '/seamscroll',
            name: 'VueSeamlessScroll',
            meta:{
                title:"无限滚动"
            },
            component: VueSeamlessScroll,
        },
        {
            path: '/wangeditor',
            name: 'Wangeditor',
            meta:{
                title:"富文本编辑器"
            },
            component: Wangeditor,
        },
        {
            path: '/login',
            name: 'Login',
            meta:{
                title:"登陆"
            },
            component: Login,
        },
        {
            path: '*',
            name: 'NotFound',
            meta:{
                title:"未找到资源"
            },
            component: NotFound,
        },
    ],
})

// router.beforeEach(async(to, from, next) => {
//     const title = (to.meta.title ? to.meta.title : '')
//     document.title = title
//     next()
// })

export default router