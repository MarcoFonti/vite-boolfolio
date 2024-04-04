<!-- JS -->
<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'CardList',

    /* PROPS */
    props: { project: Object, isYouSee: Boolean },

    /* COMPUTED */
    computed: {
        /* DATA DI PUBBLICAZIONE */
        publicationDate() {
            /* CREO UNA NUOVA DATA */
            const date = new Date(this.project.created_at)

            /* CREO VARIABILE */
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            /* CONDIZIONE SE */
            if (day < 10) {
                day = '0' + day;
            }

            if (month < 10) {
                month = '0' + month;
            }

            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }
    }

};

</script>

<!-- HTML -->
<template>
    <div class="card my-3">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div>
                <span class="text-uppercase me-3">{{ project.title }}</span>
                <strong class="text-uppercase"><i class="fa-solid fa-screwdriver-wrench">:</i></strong>
                <span v-if="project.technologies?.length">
                    <RouterLink v-for="technology in project.technologies" :key="technology.id"
                        :to="{ name: 'technology-projects', params: { slug: technology.slug } }">
                        <span class="badge rounded-pill ms-1" :class="`text-bg-${technology.color}`">{{
                    technology.label }}</span>
                    </RouterLink>
                </span>
                <span v-else>Nessuna</span>
            </div>
            <RouterLink v-if="!isYouSee" :to="{ name: 'project-show', params: { slug: project.slug } }"
                class="btn btn-primary"><i class="fas fa-eye"></i></RouterLink>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-3 mt-1">
                    <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid">
                </div>
                <div class="col">
                    <h5 class="card-title mb-2 text-uppercase">{{ project.title }}</h5>
                    <h6 class="card-subtitle mb-3 text-body-secondary">{{ publicationDate }}</h6>
                    <div class="d-flex align-items-center gap-1 mb-2"><strong class="text-uppercase">Tipologia:</strong>
                        <RouterLink v-if="project.type" :to="{ name: 'type-projects', params: { slug: project.type.slug } }">
                            <span class="badge" :style="{ 'background-color': project.type.color }">{{
                    project.type.label }}</span>
                        </RouterLink>
                        <span v-else>Nessuna</span>
                    </div>
                    <p class="card-text">{{ project.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped></style>