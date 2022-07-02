<script setup>
import { onMounted } from 'vue';
import StoreCart from '@/store/cart';
import UniCart from '@/components/UniCart.vue';

const storeCart = StoreCart();

const deleteCarts = async () => {
  try {
    const result = await Swal.fire({
      title: '確定要刪除所有品項?',
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
  } catch (error) {
    console.log(error);
  }
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
          <th class="w-[10%]">品項</th>
          <th class="w-1/2"></th>
          <th class="w-1/5">單價</th>
          <th class="w-1/5">數量</th>
          <th>金額</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <UniCart v-for="cart in storeCart.carts" :key="cart.id" :cart="cart" />
        <!-- <tr
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
          <td>{{ item.product.title }}</td>
          <td>NT${{ $filters.currency(item.product.price) }}</td>
          <td>
            <select class="custom-select w-16" v-model="quantity">
              <option :value="num" v-for="num in 6" :key="num">
                {{ num }}
              </option>
            </select>
          </td>
          <td>NT${{ $filters.currency(quantity * item.product.price) }}</td>
          <td class="text-center">
            <button @click="deleteUniCart(item.id)">
              <i class="fa-solid fa-x fa-lg"></i>
            </button>
          </td>
        </tr> -->
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="py-5">
            <button class="btn-outline" @click="deleteCarts">
              刪除所有品項
            </button>
          </td>
          <td>總金額</td>
          <td class="text-end text-[28px]">
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
