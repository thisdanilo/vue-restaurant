import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path:'/produtos',
            name: 'product',
            component: () => import('@/views/ProductsView.vue')
        }
    ]
})

export default router;