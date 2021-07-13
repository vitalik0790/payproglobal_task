import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import BaseDialog from './components/BaseDialog.vue'

const app = createApp(App);
app.use(router);
app.component('base-dialog', BaseDialog);

app.mount('#app');
