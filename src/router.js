import { createRouter, createWebHistory } from 'vue-router'
import TheForm from './components/TheForm.vue'
import ThankYouPage from './components/ThankYouPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/payment' },
        { path: '/payment', component: TheForm },
        { path: '/thankyou', component: ThankYouPage },
    ],
})

export default router;