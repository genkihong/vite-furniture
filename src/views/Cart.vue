<script setup>
import { onMounted } from 'vue';
import StoreCart from '@/store/cart';

const storeCart = StoreCart();

const deleteUniCart = (id) => {
  storeCart.deleteUniCart(id);
};

const deleteCarts = () => {
  storeCart.deleteCarts();
};

onMounted(() => {
  storeCart.getCarts();
});
</script>

<template>
  <section class="bg-[#F8F8F8] pt-12 pb-[70px] mb-[60px]">
    <h2 class="text-center text-[28px] mb-8">我的購物車</h2>
    <table class="table-auto w-full max-w-[920px] mx-auto text-xl text-left">
      <thead>
        <tr>
          <th class="w-[10%]">品項</th>
          <th class="w-1/5"></th>
          <th class="w-1/5">單價</th>
          <th class="w-1/5">數量</th>
          <th class="w-1/5">金額</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-[#B9B9B9]"
          v-for="item in storeCart.carts"
          :key="item.id"
        >
          <td class="py-5">
            <div
              class="w-20 h-20 bg-cover bg-center"
              :style="{ backgroundImage: `url(${item.product.images})` }"
            ></div>
          </td>
          <td class="">{{ item.product.title }}</td>
          <td class="">NT${{ $filters.currency(item.product.price) }}</td>
          <td class="">{{ item.quantity }}</td>
          <td>
            NT${{ $filters.currency(item.quantity * item.product.price) }}
          </td>
          <td class="text-center">
            <button @click="deleteUniCart(item.id)">
              <i class="fa-solid fa-x fa-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="pt-5">
            <button class="btn-outline" @click="deleteCarts">
              刪除所有品項
            </button>
          </td>
          <td class="">總金額</td>
          <td class="text-end text-[28px]">
            NT${{ $filters.currency(storeCart.finalTotal) }}
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>

<style lang="scss" scoped></style>
