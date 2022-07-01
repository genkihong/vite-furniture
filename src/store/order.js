import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('order', {
  state: () => ({
    orders: [],
  }),
  getters: {},
  actions: {
    async addOrder({ name, tel, email, address, payment }) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/orders`;
      try {
        const order = {
          user: {
            name,
            tel,
            email,
            address,
            payment,
          },
        };
        const res = await axios.post(api, order);
        this.orders = res.data.orders;
      } catch (error) {
        console.log(error);
      }
    },
    async getOrders() {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/orders`;
      try {
        const res = await axios.get(api);
        this.orders = res.data.orders;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUniOrder(id) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/orders/${id}`;
      try {
        const res = await axios.delete(api);
        this.orders = res.data.orders;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOrders() {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/orders`;
      try {
        const res = await axios.delete(api);
        this.orders = res.data.orders;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
