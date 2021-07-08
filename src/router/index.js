import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from './../pages/home/index.vue';

export const routes= [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    {
        path: '/transform',
        name: 'Transform',
        component: ()=>import('@/pages/transform/index.vue'),
    },
]

const history = createWebHistory();
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.afterEach(() => {
    window.scrollTo(0,0);
})
export default router
