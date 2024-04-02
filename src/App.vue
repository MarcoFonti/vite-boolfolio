<!-- JS -->
<script>
/* IMPORTO APPHEADER */
import AppHeader from './components/AppHeader.vue';
/* IMPORTO APPLOADER */
import AppLoader from './components/AppLoader.vue';
/* IMPORTO STORE */
import {store} from './data/store';

export default {
    name: 'App',

    /* DATI */
    data: () => ({
        store
    }),

    /* COMPONENTI */
    components: { AppHeader, AppLoader },
};

</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <AppHeader />
    <!-- HOME -->
    <main class="container">
        <AppLoader v-if="store.isLoader"/>
        <RouterView/>
    </main>
</template>

<!-- CSS -->
<style></style>
