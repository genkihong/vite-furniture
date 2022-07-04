import { defineStore } from 'pinia';
import axios from 'axios';

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
      const api = `${import.meta.env.VITE_API_PATH}/api/livejs/v1/customer/${
        import.meta.env.VITE_CUSTOM_PATH
      }/products`;
      try {
        const res = await axios.get(api);
        this.products = res.data.products;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});
