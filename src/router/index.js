import { createRouter, createWebHistory } from 'vue-router';
import Notes from '@/views/notes.vue';

export const ROUTE_HOME_NAME = 'Home';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: ROUTE_HOME_NAME,
            path: '/home',
            component: Notes,
        },
    ],
});

export default router;
