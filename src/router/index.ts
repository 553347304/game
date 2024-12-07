import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'web',
            component: () => import('../views/web/web.vue'),
            children: [
                {path: "", name: "index", component: () => import('../views/web/index.vue'),},
                {path: "win_jh", name: "win_jh", component: () => import('../views/web/win_jh.vue'),},
                {path: "jh", name: "jh", component: () => import('../views/web/jh.vue'),},
                {path: "slwz", name: "slwz", component: () => import('../views/web/slwz.vue'),},
                {path: "blhx", name: "blhx", component: () => import('../views/web/blhx.vue'),},
            ]
        },
    ]
})

export default router
