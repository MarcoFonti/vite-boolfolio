import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
/* IMPORTO LOADER */
import AppLoader from './components/AppLoader.vue';
/* IMPORTO LE MIE ROTTE */
import { router } from './routes/web.js';

const app = createApp(App)
/* AGGIUNGO COMPONENTE */
app.component('AppLoader', AppLoader)
/* ROTTE */
app.use(router)
app.mount('#app')
