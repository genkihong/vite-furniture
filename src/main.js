import { createApp } from 'vue';
// import axios from 'axios';
import { createPinia } from 'pinia';
import router from './router';
import './index.css';
import currency from './methods/filters';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
// app.use(axios);
// 全局 filters
app.config.globalProperties.$filters = {
  currency,
};

app.mount('#app');
