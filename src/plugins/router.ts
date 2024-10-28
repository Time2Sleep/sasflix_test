import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: () => import('../pages/MainPage.vue') },
    { path: '/:id', name: 'post', component: () => import('../pages/Post.vue') },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;