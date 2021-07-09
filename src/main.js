import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TheForm from './components/TheForm.vue'
import ThankYouPage from './components/ThankYouPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/payment' },
        { path: '/payment', component: TheForm },
        { path: '/thankyou', component: ThankYouPage },
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');
