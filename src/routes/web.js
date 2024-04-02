/* IMPORTO LE FUNZIONI DI VUE ROUTER */
import { createRouter, createWebHistory } from 'vue-router';

/* IMPORTO LE PAGINE  */
import AppHome from '../pages/AppHome.vue';
import AppError from '../pages/AppError.vue';

/* DEFINISCO LRìE VARIE ROTTE */

const router = createRouter({

    /* CREO CRONOLOGIA */
    history: createWebHistory(),

    /* ROTTE */
    routes:
        [
            { path: '', component: AppHome, name: 'home' },
            { paht: '/error', component: AppError, name: 'error' },
            { paht: '/:pathMatch(.*)*', redirect: 'error' }
        ]
});

export { router };
