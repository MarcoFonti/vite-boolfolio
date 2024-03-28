<!-- JS -->
<script>
/* IMPORTO APPHEADER */
import AppHeader from './components/AppHeader.vue';
/* IMPORTO AXIOS */
import axios from 'axios';
/* URL ENDPOINT */
const endpoint = 'http://127.0.0.1:8000/api/projects/'; 

export default {
    name: 'App',
    data: () => ({
        projects: []
    }),

    /* COMPONENTI */
    components: { AppHeader },

    /* METODI */
    methods:{
        /* FUNZIONE PER RICHIEDERE API */
        apiProjects(){
            axios.get(endpoint).then((res) => {
                this.projects = res.data;
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
    <AppHeader/>
</template>

<!-- CSS -->
<style></style>
