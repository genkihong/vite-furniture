import axios from 'axios';
import { defineStore } from 'pinia';
import StatusStore from './status';

export default defineStore('product', {
  state: () => ({
    products: [],
  }),
  getters: {
    categories(state) {
      const set = new Set();
      state.products.forEach((item) => {
        set.add(item.category);
      });
      const categories = [...set]; //Array.from(set)
      return categories;
    },
  },
  actions: {
    async getProducts() {
      const status = StatusStore();
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/products`;
      status.isLoading = true;
      try {
        const res = await axios.get(api);
        this.products = res.data.products;
        status.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});
