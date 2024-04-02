<!-- JS -->
<script>

export default {
    name: 'AppLoader',

};

</script>

<!-- HTML -->
<template>
    <div class="d-flex justify-content-center align-items-center loader-overlay">
        <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
}

.spinner-border {
    width: 200px;
    height: 200px;
}
</style>