<script setup>
import { ref, watch } from 'vue';
import StoreCart from '@/store/cart';

const props = defineProps({
  cart: Object,
});
// console.log(props.cart);
const storeCart = StoreCart();
const quantity = ref(props.cart.quantity);

const deleteUniCart = async (id) => {
  try {
    const result = await Swal.fire({
      title: '確定要刪除?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      position: 'top',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    });
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
  } catch (error) {
    console.log(error);
  }
  // Swal.fire({
  //   title: '確定要刪除?',
  //   // text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: '確定',
  //   cancelButtonText: '取消',
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     storeCart.deleteUniCart(id);
  //     Swal.fire('', '已刪除', 'success');
  //   }
  // });
};

watch(quantity, (newVal, oldVal) => {
  // console.log('new', newVal);
  // console.log('old', oldVal);
  storeCart.patchCarts(props.cart.id, newVal);
});
</script>

<template>
  <tr class="border-b border-[#B9B9B9]">
    <td class="py-5">
      <div
        class="w-20 h-20 bg-cover bg-center"
        :style="{ backgroundImage: `url(${props.cart.product.images})` }"
      ></div>
    </td>
    <td>{{ props.cart.product.title }}</td>
    <td>NT${{ $filters.currency(props.cart.product.price) }}</td>
    <td>
      <select class="custom-select w-16" v-model="quantity">
        <option :value="num" v-for="num in 6" :key="num">
          {{ num }}
        </option>
      </select>
    </td>
    <td>NT${{ $filters.currency(quantity * props.cart.product.price) }}</td>
    <td class="text-center">
      <button @click="deleteUniCart(props.cart.id)">
        <i class="fa-solid fa-x fa-lg"></i>
      </button>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
