<!-- JS -->
<script>
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'ProjectsList',
    /* PROPS */
    props: { projects_list: Array },
    /* COMPONENTI */
    components: { ProjectCard }

};

</script>

<!-- HTML -->
<template>
    <section id="projects-list">
        <div v-if="projects_list.length">
            <ProjectCard v-for="project in projects_list" :key="project.id" :project="project" />
        </div>
        <h3 v-else class="text-center">Non ci sono progetti</h3>
    </section>
</template>

<!-- CSS -->
<style scoped></style>