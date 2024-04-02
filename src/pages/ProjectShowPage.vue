<!-- JS -->
<script>
/* IMPORTO AXIOS */
import axios from 'axios';
/* IMPORTO LA CARD */
import ProjectCard from '../components/projects/ProjectCard.vue';
/* IMPORTO LOADER */
import AppLoader from '../components/AppLoader.vue';

/* URL ENDPOINT */
const endpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectShowPage',

    /* DATI */
    data: () => ({
        project: null,
        isLoader: false,
    }),

    /* COMPONENTI */
    components: { ProjectCard, AppLoader },

    /* METODI */
    methods: {
        /* FUNZIONE PER RICHIEDERE API */
        apiProject() {
            this.isLoader = true
            axios.get(endpoint + this.$route.params.slug)
                .then(res => {
                    this.project = res.data;
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
        this.apiProject();
    },
}

</script>

<!-- HTML -->
<template>
    <div class="container">
        <AppLoader v-if="isLoader && !project" />
        <ProjectCard v-if="!isLoader && project" :project="project" :isYouSee="true" />
        <footer class="d-flex justify-content-between align-items-center mt-5">
            <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">
                <i class="fa-solid fa-rotate-left me-2"></i>
                Torna indietro
            </RouterLink>
        </footer>
    </div>
</template>

<!-- CSS -->
<style></style>