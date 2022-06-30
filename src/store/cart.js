import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('cart', {
  state: () => ({
    carts: [],
    total: 0,
    finalTotal: 0,
  }),
  getters: {},
  actions: {
    async addCart(id, quantity = 1) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      try {
        const cart = {
          productId: id,
          quantity,
        };
        const res = await axios.post(api, { data: cart });
        console.log(res.data);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
      } catch (error) {
        console.log(error);
      }
    },
    async getCarts() {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      try {
        const res = await axios.get(api);
        // console.log(res.data);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUniCart(id) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts/${id}`;
      try {
        const res = await axios.delete(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCarts() {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      try {
        const res = await axios.delete(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
