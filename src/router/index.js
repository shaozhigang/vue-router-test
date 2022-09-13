// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器、
const router =  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true},   //路由的元信息 自定义信息的容器
                    beforeEnter:(to, from, next)=>{
                        // 独享守卫
                    }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true},   //路由的元信息 自定义信息的容器
                    children:[
                        {
                            name:'xiangqing',  //命名路由， 可用于跳转的时候简化编码
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        },
    ]
})

// 全局前置路由守卫  初始化时候被调用 每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
    console.log('@前置',to,from,next)
    if(to.meta.isAuth){  //判断是否需要鉴权
        //进行鉴权操作
    } 
    next()  // 俗称 放行
})

// 全局后置路由守卫
router.afterEach((to, from)=>{
    console.log('@后置',to,from)
})

export default router