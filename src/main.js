import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { createPinia } from 'pinia';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';
import './index.css';
import currency from './methods/filters';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueSweetalert2);

app.component('loading', Loading);
// 全局 filters
app.config.globalProperties.$filters = {
  currency,
};
//sweetalert2
// app.provide('Swal', app.config.globalProperties.$swal);
window.Swal = app.config.globalProperties.$swal;
app.mount('#app');
