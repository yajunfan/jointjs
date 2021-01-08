import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/startTutorial'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/startTutorial',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/tutorial/start.vue'),
                    meta: { title: '开始教程' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
              
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
const router = new Router({
	mode: 'hash',
})
router.beforeEach((to, from, next) => {
    if (to.path == "/403" || to.path == "/404"||to.path=="/login") {
        next();
    }else if(!menuArr.includes(to.path.substr(1))){
        next("/403")
    }else {
        next();
    }
});


