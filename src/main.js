import { createApp } from 'vue';
import { createPinia } from 'pinia'; //沒有 store/index.js 時寫法
import router from './router';
import './index.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
