<!-- JS -->
<script>
/* IMPORTO AXIOS */
import axios from 'axios';
/* IMPORTO LA PROJECTSLIST */
import ProjectsList from '../components/projects/ProjectsList.vue';
/* IMPORTO APPLOADER */
import { store } from '../data/store'


/* URL ENDPOINT */
const endpoint = 'http://127.0.0.1:8000/api';

export default {
    name: 'TechnologyProjectsPage',

    /* DATI */
    data: () => ({
        store,
        project: [],
        technologyLabel: ''
    }),

    /* COMPONENTI */
    components: { ProjectsList },

    /* METODI */
    methods: {
        /* FUNZIONE PER RICHIEDERE API */
        async apiTechnologyProject() {
            store.isLoader = true
            const res = await axios.get(`${endpoint}/technologies/${this.$route.params.slug}/projects/`)
            try {
                const { projects, label } = res.data;
                this.project = projects;
                this.technologyLabel = label;

            } catch (error) {

                console.error(err);
                this.$router.push({ name: 'error' });
            }

            store.isLoader = false;

        }
    },

    /* ALL'AVVIO DELLA PAGINA */
    created() {
        /* RIESTA FUNZIONE API */
        this.apiTechnologyProject();
    },

}

</script>

<!-- HTML -->
<template>
    <div class="container">
        <div v-show="!store.isLoader">
            <h1 class="mt-4 text-danger">Progetti per Tecnolgie {{ technologyLabel }}</h1>
            <ProjectsList :projects_list="project" />
            <footer class="d-flex justify-content-between align-items-center my-5">
                <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">
                    <i class="fa-solid fa-rotate-left me-2"></i>
                    Torna indietro
                </RouterLink>
            </footer>
        </div>
    </div>
</template>

<!-- CSS -->
<style></style>