import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('cart', {
  state: () => ({
    carts: [],
    total: 0,
    finalTotal: 0,
    message: '',
    loadingId: '',
  }),
  getters: {
    cartsLength: (state) => state.carts.length,
  },
  actions: {
    async getCarts() {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      try {
        const res = await axios.get(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
      } catch (error) {
        console.log(error);
      }
    },
    async addCart(id, quantity = 1) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      this.loadingId = id;
      const cart = {
        data: {
          productId: id,
          quantity,
        },
      };
      try {
        const res = await axios.post(api, cart);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
        this.loadingId = '';
      } catch (error) {
        console.log(error);
      }
    },
    async patchCarts(id, quantity = 1) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      const cart = {
        data: {
          id,
          quantity,
        },
      };
      try {
        const res = await axios.patch(api, cart);
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
        this.message = res.data.message;
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
  },
});
