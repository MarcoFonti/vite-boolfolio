<!-- JS -->
<script>
/* IMPORTO APPLOADER */
import {store} from '../data/store'
/* IMPORTO PROJECTSLIST */
import ProjectsList from '../components/projects/ProjectsList.vue';
/* IMPORTO AXIOS */
import axios from 'axios';
/* URL ENDPOINT */
const endpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'AppHome',
    data: () => ({
        projects: [],
        store
    }),

    /* COMPONENTI */
    components: { ProjectsList },

    /* METODI */
    methods: {
        /* FUNZIONE PER RICHIEDERE API */
        apiProjects() {
            store.isLoader = true
            axios.get(endpoint)
                .then(res => {
                    this.projects = res.data;
                }).catch(err => {
                    console.error(err);
                }).then(() => {
                    store.isLoader = false;
                })
        }
    },

    /* ALL'AVVIO DELLA PAGINA */
    created() {
        /* RIESTA FUNZIONE API */
        this.apiProjects();
    }


};

</script>

<!-- HTML -->
<template>
    <main class="container">
        <div v-if="!store.isLoader">
            <h1 class="text-danger mt-3">Lista Progetti</h1>
            <ProjectsList :projects_list="projects" />
        </div>
    </main>
</template>

<!-- CSS -->
<style></style>
