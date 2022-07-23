<script setup>
import { toRef } from 'vue';
import StoreCart from '@/store/cart';

const storeCart = StoreCart();
const props = defineProps({
  product: Object,
});

const product = toRef(props, 'product');

const addCart = (productId) => {
  storeCart.addCart(productId);
};
</script>

<template>
  <li class="h-[460px] text-xl relative rounded-b">
    <img
      class="object-cover object-center"
      :src="product.images"
      :alt="product.description"
    />
    <div class="badge">新品</div>
    <button
      class="btn w-full mb-2"
      @click="addCart(product.id)"
      :class="{
        'cursor-not-allowed': storeCart.loadingId === product.id,
      }"
      :disabled="storeCart.loadingId === product.id"
    >
      <i
        class="fa-solid fa-spinner fa-spin-pulse"
        v-if="storeCart.loadingId === product.id"
      ></i>
      加入購物車
    </button>
    <p class="mb-2">{{ product.title }}</p>
    <p class="line-through">NT${{ $filters.currency(product.origin_price) }}</p>
    <p class="text-[28px]">NT${{ $filters.currency(product.price) }}</p>
  </li>
</template>

<style lang="scss" scoped></style>
