<!-- JS -->
<script>
import axios from 'axios';
import { store } from '../data/store';
const endopoint = 'http://127.0.0.1:8000/api/contact/';

export default {
    name: 'AppFormEmail',

    /* DATI */
    data: () => ({
        form: {
            name: '',
            email: '',
            text: '',

        }
    }),
    /* FUNZIONE PER RICHIAMRE API */
    methods: {
        contactEmail() {
            store.isLoader = true
            axios.post(endopoint, this.form).then(res =>{
                console.log(res);
            }).catch(err => {
                console.error(err);
            }).then(() =>{
                store.isLoader = false
            });

        }

    }

};

</script>

<!-- HTML -->
<template>
    <h2 class="text-danger my-3">Contattaci</h2>
    <form class="row g-3 needs-validation" @submit.prevent="contactEmail" novalidate>
        <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-12">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-12">
            <label for="content" class="form-label">Contenuto</label>
            <div class="input-group has-validation">
                <textarea class="form-control" id="text" v-model="form.text" required rows="5"></textarea>
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
        </div>

        <div class="col-12">
            <button class="btn btn-primary" type="submit">Invia</button>
        </div>
    </form>
</template>

<!-- CSS -->
<style></style>