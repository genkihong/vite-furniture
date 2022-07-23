<script setup>
import { toRef, watch } from 'vue';
import StoreCart from '@/store/cart';

const storeCart = StoreCart();
const props = defineProps({
  cart: Object,
});

const cart = toRef(props, 'cart');

const deleteUniCart = (id) => {
  Swal.fire({
    title: '確定要刪除?',
    icon: 'warning',
    position: 'top',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      storeCart.deleteUniCart(id);
      Swal.fire({
        toast: true,
        width: '15rem',
        background: '#6A33F8',
        color: '#FFFFFF',
        position: 'top-end',
        icon: 'success',
        title: '已刪除購物車',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
};

watch(
  () => cart.value.quantity, //監聽 ref 物件的值
  (newVal, oldVal) => {
    storeCart.patchCarts(cart.value.id, newVal);
  }
);
</script>

<template>
  <tr class="border-b border-[#B9B9B9]">
    <td class="py-5">
      <div
        class="w-20 h-20 bg-cover bg-center"
        :style="{ backgroundImage: `url(${cart.product.images})` }"
      ></div>
    </td>
    <td>{{ cart.product.title }}</td>
    <td>NT${{ $filters.currency(cart.product.price) }}</td>
    <td>
      <select class="custom-select w-16" v-model="cart.quantity">
        <option :value="num" v-for="num in 6" :key="num">
          {{ num }}
        </option>
      </select>
    </td>
    <td>NT${{ $filters.currency(cart.quantity * cart.product.price) }}</td>
    <td class="text-center">
      <button @click="deleteUniCart(cart.id)">
        <i class="fa-solid fa-x fa-lg"></i>
      </button>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
