import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import './index.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import currency from './methods/filters';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueSweetalert2);

// 全局 filters
app.config.globalProperties.$filters = {
  currency,
};
//sweetalert2
// app.provide('Swal', app.config.globalProperties.$swal);
window.Swal = app.config.globalProperties.$swal;
app.mount('#app');
