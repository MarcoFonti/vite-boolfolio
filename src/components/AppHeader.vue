<!-- JS -->
<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'AppHeader',

};

</script>

<!-- HTML -->
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-secondary py-3">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" :to="{ name: 'home'}">Boolfolio - API</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink class="nav-link active" :to="{ name: 'home' }">Home</RouterLink>
                    </div>
                    <div class="navbar-nav">
                        <RouterLink class="nav-link active" :to="{ name: 'contact-email' }">Contatti</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<!-- CSS -->
<style></style>