/* IMPORTO LE FUNZIONI DI VUE ROUTER */
import { createRouter, createWebHistory } from 'vue-router';

/* IMPORTO LE PAGINE  */
import AppHome from '../pages/AppHome.vue';
import AppError from '../pages/AppError.vue';
import ProjectShowPage from '../pages/ProjectShowPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue';
import TechnologyProjectsPage from '../pages/TechnologyProjectsPage.vue';
import AppFormEmail from '../form/AppFormEmail.vue';

/* DEFINISCO LRìE VARIE ROTTE */

const router = createRouter({

    /* CREO CRONOLOGIA */
    history: createWebHistory(),

    /* ROTTE */
    routes:
        [
            { path: '/', component: AppHome, name: 'home' }, 
            { path: '/contact', component: AppFormEmail, name: 'contact-email' }, 
            { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
            { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects'},
            { path: '/technologies/:slug/projects', component: TechnologyProjectsPage, name: 'technology-projects'},
            { path: '/error', component: AppError, name: 'error' },
            { path: '/:pathMatch(.*)*', redirect: 'error' }
        ]
});

export { router };
