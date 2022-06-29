<script setup>
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import storeProduct from '@/store/product';

const store = storeProduct();
const category = ref('全部');

// console.log('categories', store.categories);
// const filterCategory = {
//   all: (data) => data,
//   bedstead: (data) => data.filter((item) => item.category === '床架'),
//   store: (data) => data.filter((item) => item.category === '收納'),
//   curtain: (data) => data.filter((item) => item.category === '窗簾'),
// };

const filterProducts = computed(() => {
  return store.products.filter((item) => {
    if (category.value === '全部') {
      return store.products;
    }
    return item.category.includes(category.value);
  });
  // return filterCategory[category.value](products.value);
});

onMounted(() => {
  store.getProducts();
});
</script>

<template>
  <div class="max-w-[1110px] mx-auto">
    <select class="custom-select mb-8" v-model="category">
      <option value="全部">全部</option>
      <option :value="item" v-for="item in store.categories" :key="item">
        {{ item }}
      </option>
      <!-- <option value="bedstead">床架</option>
      <option value="store">收納</option>
      <option value="curtain">窗簾</option> -->
    </select>

    <ul class="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
      <li
        class="h-[460px] text-xl relative rounded-b"
        v-for="item in filterProducts"
        :key="item.id"
      >
        <img class="object-cover object-center" :src="item.images" alt="" />
        <div class="badge">新品</div>
        <button class="btn mb-2">加入購物車</button>
        <p class="mb-2">{{ item.title }}</p>
        <p class="line-through">
          NT${{ $filters.currency(item.origin_price) }}
        </p>
        <p class="text-[28px]">NT${{ $filters.currency(item.price) }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
