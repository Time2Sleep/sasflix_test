import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: () => import('../pages/MainPage.vue') },
    { path: '/:id', name: 'post', component: () => import('../pages/PostPage.vue') },
];

const router = createRouter({
    history: createWebHistory('/sasflix_test'),
    routes,
});

export default router;