<!-- JS -->
<script>
/* IMPORTO APPHEADER */
import AppHeader from './components/AppHeader.vue';
/* IMPORTO APPHOME */
import AppHome from './pages/AppHome.vue';

export default {
    name: 'App',

    /* COMPONENTI */
    components: { AppHeader, AppHome },
};

</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <AppHeader />
    <!-- HOME -->
    <main class="container">
        <RouterView/>
    </main>
</template>

<!-- CSS -->
<style></style>
