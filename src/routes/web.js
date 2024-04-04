/* IMPORTO LE FUNZIONI DI VUE ROUTER */
import { createRouter, createWebHistory } from 'vue-router';

/* IMPORTO LE PAGINE  */
import AppHome from '../pages/AppHome.vue';
import AppError from '../pages/AppError.vue';
import ProjectShowPage from '../pages/ProjectShowPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue'

/* DEFINISCO LRìE VARIE ROTTE */

const router = createRouter({

    /* CREO CRONOLOGIA */
    history: createWebHistory(),

    /* ROTTE */
    routes:
        [
            { path: '/', component: AppHome, name: 'home' }, 
            { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
            { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects'},
            { path: '/error', component: AppError, name: 'error' },
            { path: '/:pathMatch(.*)*', redirect: 'error' }
        ]
});

export { router };
