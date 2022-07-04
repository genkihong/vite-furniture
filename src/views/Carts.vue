<script setup>
import { onMounted } from 'vue';
import StoreCart from '@/store/cart';
import UniCart from '@/components/UniCart.vue';
// import Swal from 'sweetalert2';
const storeCart = StoreCart();

const deleteCarts = () => {
  Swal.fire({
    title: '確定要刪除所有品項?',
    icon: 'warning',
    position: 'top',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      storeCart.deleteCarts();
      Swal.fire({
        toast: true,
        width: '20rem',
        background: '#6A33F8',
        color: '#FFFFFF',
        position: 'top-end',
        icon: 'success',
        title: '已刪除所有品項',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
};

onMounted(() => {
  storeCart.getCarts();
});
</script>

<template>
  <section class="bg-[#F8F8F8] pt-12 pb-[70px]">
    <h2 class="text-center text-[28px] mb-8">我的購物車</h2>
    <table
      class="table-auto w-full max-w-[920px] mx-auto text-xl text-left"
      v-if="storeCart.cartsLength"
    >
      <thead>
        <tr>
          <th class="w-[120px]">品項</th>
          <th class="w-[280px]"></th>
          <th class="w-[160px]">單價</th>
          <th class="w-[120px]">數量</th>
          <th class="w-[160px]">金額</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <UniCart v-for="cart in storeCart.carts" :key="cart.id" :cart="cart" />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="py-5">
            <button class="btn-outline" @click="deleteCarts">
              刪除所有品項
            </button>
          </td>
          <td>總金額</td>
          <td colspan="2" class="text-end text-[28px] min-w-[180px]">
            NT${{ $filters.currency(storeCart.finalTotal) }}
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <router-link class="btn block text-center rounded" to="/order">
              建立訂單
            </router-link>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="max-w-[920px] mx-auto" v-else>
      <h2 class="text-xl text-center mb-8">{{ storeCart.message }}</h2>
      <router-link class="btn block text-center rounded" to="/">
        繼續購物
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
