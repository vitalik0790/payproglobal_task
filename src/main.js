import { createApp } from 'vue';
import Vuelidate from 'vuelidate'

import App from './App.vue';
import router from './router';
import BaseDialog from './components/BaseDialog.vue'

const app = createApp(App);

app.use(router);
app.use(Vuelidate);

app.component('base-dialog', BaseDialog);

app.mount('#app');
