import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);
/**教程 */
import StartTutorial from '../components/page/tutorial/start.vue';
import PaperGraph from '../components/page/tutorial/paper-graph.vue';

/**配置项手册 */
import ConfigStart from "../components/page/configuration/start.vue";
// ancohors
import Anchors from "../components/page/configuration/anchors/index.vue";
//ConnectionPoint
import ConnectionPoint from "../components/page/configuration/connectionPoint/index.vue";
// ConnectionStrategies
import ConnectionStrategies from "../components/page/configuration/connectionStrategies/index.vue";
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
                    component: StartTutorial,
                    // component:  () => import(/* webpackChunkName: "dashboard" */ '../components/page/tutorial/start.vue'),
                    meta: { title: '开始教程' }
                },
                {
                    path: '/PaperGraph',
                    component: PaperGraph,
                    // component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/tutorial/paper-graph.vue'),
                    meta: { title: 'PaperGraph' }
                },
                // 配置项
                {
                    path: '/configStart',
                    component: ConfigStart,
                    meta: { title: 'Joint Api' }
                },
                {
                    path: '/anchors',
                    component: Anchors,
                    meta: { title: 'anchors' }
                },
                {
                    path: '/anchors_bottom',
                    component: Anchors,
                    meta: { title: 'bottom' }
                },
                {
                    path: '/anchors_bottomLeft',
                    component: Anchors,
                    meta: { title: 'bottomLeft' }
                },
                {
                    path: '/anchors_bottomRight',
                    component: Anchors,
                    meta: { title: 'bottomRight' }
                },
                {
                    path: '/anchors_center',
                    component: Anchors,
                    meta: { title: 'center' }
                },
                {
                    path: '/anchors_custom',
                    component: Anchors,
                    meta: { title: 'custom' }
                },
                {
                    path: '/anchors_left',
                    component: Anchors,
                    meta: { title: 'left' }
                },
                {
                    path: '/anchors_midSide',
                    component: Anchors,
                    meta: { title: 'midSide' }
                },
                {
                    path: '/anchors_modelCenter',
                    component: Anchors,
                    meta: { title: 'modelCenter' }
                },
                {
                    path: '/anchors_perpendicular',
                    component: Anchors,
                    meta: { title: 'perpendicular' }
                },
                {
                    path: '/anchors_right',
                    component: Anchors,
                    meta: { title: 'right' }
                },
                {
                    path: '/anchors_top',
                    component: Anchors,
                    meta: { title: 'top' }
                },
                {
                    path: '/anchors_topLeft',
                    component: Anchors,
                    meta: { title: 'topLeft' }
                },
                {
                    path: '/anchors_topRight',
                    component: Anchors,
                    meta: { title: 'topRight' }
                },
                {
                    path: '/connectionPoints',
                    component: ConnectionPoint,
                    meta: { title: 'connectionPoints' }
                },
                {
                    path: '/connectionPoints_anchor',
                    component: ConnectionPoint,
                    meta: { title: 'anchor' }
                },
                {
                    path: '/connectionPoints_bbox',
                    component: ConnectionPoint,
                    meta: { title: 'bbox' }
                },
                {
                    path: '/connectionPoints_boundary',
                    component: ConnectionPoint,
                    meta: { title: 'boundary' }
                },
                {
                    path: '/connectionPoints_rectangle',
                    component: ConnectionPoint,
                    meta: { title: 'rectangle' }
                },
                {
                    path: '/connectionPoints_custom',
                    component: ConnectionPoint,
                    meta: { title: 'custom' }
                },
                {
                    path: '/connectionStrategies',
                    component: ConnectionStrategies,
                    meta: { title: 'connectionStrategies' }
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
});

router.beforeEach((to, from, next) => {
    if (to.path == "/403" || to.path == "/404"||to.path=="/login") {
        next();
    }else if(!menuArr.includes(to.path.substr(1))){
        next("/403")
    }else {

        next();
    }
});


