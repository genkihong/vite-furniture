import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
export default router;
