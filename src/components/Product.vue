<script setup>
import StoreCart from '@/store/cart';

const props = defineProps({
  product: Object,
});

const storeCart = StoreCart();

const addCart = (id) => {
  storeCart.addCart(id);
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
};
</script>

<template>
  <li class="h-[460px] text-xl relative rounded-b">
    <img
      class="object-cover object-center"
      :src="props.product.images"
      :alt="props.product.description"
    />
    <div class="badge">新品</div>
    <button
      class="btn w-full mb-2"
      @click="addCart(props.product.id)"
      :class="{
        'cursor-not-allowed': storeCart.loadingId === props.product.id,
      }"
      :disabled="storeCart.loadingId === props.product.id"
    >
      <i
        class="fa-solid fa-spinner fa-spin-pulse"
        v-if="storeCart.loadingId === props.product.id"
      ></i>
      加入購物車
    </button>
    <p class="mb-2">{{ props.product.title }}</p>
    <p class="line-through">
      NT${{ $filters.currency(props.product.origin_price) }}
    </p>
    <p class="text-[28px]">NT${{ $filters.currency(props.product.price) }}</p>
  </li>
</template>

<style lang="scss" scoped></style>
