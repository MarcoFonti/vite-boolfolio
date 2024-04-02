/* IMPORTO LE FUNZIONI DI VUE ROUTER */
import { createRouter, createWebHistory } from 'vue-router';

/* IMPORTO LE PAGINE  */
import AppHome from '../pages/AppHome.vue';
import AppError from '../pages/AppError.vue';
import ProjectShowPage from '../pages/ProjectShowPage.vue';

/* DEFINISCO LRìE VARIE ROTTE */

const router = createRouter({

    /* CREO CRONOLOGIA */
    history: createWebHistory(),

    /* ROTTE */
    routes:
        [
            { path: '', component: AppHome, name: 'home' }, /* ERRORE SE METTO / */
            { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
            { paht: '/error', component: AppError, name: 'error' },
            { paht: '/:pathMatch(.*)*', redirect: 'error' }
        ]
});

export { router };
