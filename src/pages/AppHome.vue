<!-- JS -->
<script>
/* IMPORTO APPLOADER */
import AppLoader from '../components/AppLoader.vue';
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
        isLoader: false
    }),

    /* COMPONENTI */
    components: { ProjectsList },

    /* METODI */
    methods: {
        /* FUNZIONE PER RICHIEDERE API */
        apiProjects() {
            this.isLoader = true
            axios.get(endpoint)
                .then(res => {
                    this.projects = res.data;
                }).catch(err => {
                    console.error(err);
                }).then(() => {
                    this.isLoader = false;
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
        <AppLoader v-if="isLoader" />
        <div v-else>
            <h1 class="text-danger mt-3">Lista Progetti</h1>
            <ProjectsList :projects_list="projects" />
        </div>
    </main>
</template>

<!-- CSS -->
<style></style>
