import {createRouter,createWebHashHistory} from 'vue-router'
import Main from '../view/Main'
import User from '../view/User.vue'
import Login from '../view/Login'
import Lbt from '../view/Lbt'
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来

// 2. 将路由和组件进行映射
const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/lunbotu',
        children: [
                   
            {
                path: '/lunbotu',
                component: Lbt,
                name: 'lunbotu'
            },

            {
                path: '/jichuxinxi',
                component: ()=>import ('@/view/Info.vue'),
                name: 'jichuxinxi'
            },
            {
                path: '/wenti',
                component: ()=>import ('@/view/WenTi.vue'),
                name: 'wenti'
            },
            {
                path: '/video',
                component: ()=>import ('@/view/Spgl.vue'),
                name: 'video'
            },
            {
                path: '/faxian',
                component: ()=>import ('@/view/FaXian.vue'),
                name: 'faxian'
            },
            {
                path: '/huishou',
                component: ()=>import ('@/view/HuiShou.vue'),
                name: 'huishou'
            },
            {
                path: '/shangpin',
                component: ()=>import ('@/view/ShangPin.vue'),
                name: 'shangpin'
            },
            {
                path: '/wupin',
                component: ()=>import ('@/view/FenLei.vue'),
                name: 'wupin'
            },
            
           
            {
                path: '/user',
                component: User,
                name: 'user'
            },



            // {
            //     path: '/fenlei',
            //     component: FenLei,
            //     name: 'fenlei'
            // },
            // {
            //     path: '/geshou',
            //     component: Geshou,
            //     name: 'geshou'
            // },
            // {
            //     path: '/music',
            //     component: Music,
            //     name: 'music'
            // },

            // {
            //     path: '/home',
            //     component: Home
            // },


        
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }
    //   { path: '/home', component: Home },
    //   { path: '/bar', component: Bar },
    //   { path: '/foo', component: Foo }
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

// 导航首位
router.beforeEach((to, from, next) => {
    var token = window.localStorage.getItem("token");
    if (!token && to.name != 'login') {
        // 用户未登录
        next({
            name: 'login'
        })
    } else {
        next();
    }
})


export default router

