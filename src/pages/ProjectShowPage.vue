<!-- JS -->
<script>
/* IMPORTO AXIOS */
import axios from 'axios';
/* IMPORTO LA CARD */
import ProjectCard from '../components/projects/ProjectCard.vue';
/* IMPORTO APPLOADER */
import { store } from '../data/store'


/* URL ENDPOINT */
const endpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectShowPage',

    /* DATI */
    data: () => ({
        store,
        project: null,
    }),

    /* COMPONENTI */
    components: { ProjectCard },

    /* METODI */
    methods: {
        /* FUNZIONE PER RICHIEDERE API */
        apiProject() {
            store.isLoader = true
            axios.get(endpoint + this.$route.params.slug)
                .then(res => {
                    this.project = res.data;
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
        this.apiProject();
    },
}

</script>

<!-- HTML -->
<template>
    <div class="container">
        <div v-if="!store.isLoader && project">
            <ProjectCard :project="project" :isYouSee="true" />
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