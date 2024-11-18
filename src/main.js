import './index.css'
import '@splidejs/vue-splide/css';
import PrimeVue from 'primevue/config'
import VueSplide from '@splidejs/vue-splide';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use( VueSplide )
app.mount('#app')
