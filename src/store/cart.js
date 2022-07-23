import axios from 'axios';
import { defineStore } from 'pinia';
import StatusStore from './status';

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
      const status = StatusStore();
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      status.isLoading = true;
      try {
        const res = await axios.get(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
        status.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },
    async addCart(productId, quantity = 1) {
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      this.loadingId = productId;
      const cart = {
        data: {
          productId,
          quantity,
        },
      };
      try {
        const res = await axios.post(api, cart);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
        this.loadingId = '';
        Swal.fire({
          toast: true,
          width: '15rem',
          background: '#6A33F8',
          color: '#FFFFFF',
          position: 'top-end',
          icon: 'success',
          title: '已加入購物車',
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        console.log(error.response);
      }
    },
    async patchCarts(id, quantity = 1) {
      const status = StatusStore();
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      status.isLoading = true;
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
        status.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },
    async deleteCarts() {
      const status = StatusStore();
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts`;
      status.isLoading = true;
      try {
        const res = await axios.delete(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
        this.message = res.data.message;
        status.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },
    async deleteUniCart(id) {
      const status = StatusStore();
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/carts/${id}`;
      status.isLoading = true;
      try {
        const res = await axios.delete(api);
        this.carts = res.data.carts;
        this.total = res.data.total;
        this.finalTotal = res.data.finalTotal;
        status.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});
