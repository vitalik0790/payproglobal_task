import { createRouter, createWebHistory } from 'vue-router'
import TheForm from './components/TheForm.vue'
import ThankYouPage from './components/ThankYouPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/payment' },
        { path: '/payment', name: 'payment', component: TheForm },
        { path: '/thankyou', name: 'thankyou', component: ThankYouPage },
    ],
})

export default router;