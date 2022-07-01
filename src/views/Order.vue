<script setup>
import { reactive } from 'vue-demi';
import StoreOrder from '@/store/order';

const storeOrder = StoreOrder();

const user = reactive({
  name: '',
  tel: '',
  email: '',
  address: '',
  payment: 'ATM',
});

const addOrder = (user) => {
  storeOrder.addOrder(user);
};
</script>

<template>
  <section class="max-w-[350px] mx-auto">
    <h2 class="text-center text-[28px] mb-8">填寫預訂資料</h2>
    <form>
      <div class="mb-5">
        <label for="name" class="block mb-1.5">姓名</label>
        <input
          type="text"
          id="name"
          class="custom-input"
          placeholder="請輸入姓名"
          required
          v-model="user.name"
        />
      </div>
      <div class="mb-5">
        <label for="tel" class="block mb-1.5">電話</label>
        <input
          type="tel"
          id="tel"
          class="border border-[#CED4DA] rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
          placeholder="請輸入電話"
          required
          v-model="user.tel"
        />
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          class="border border-[#CED4DA] rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
          placeholder="請輸入 Email"
          required
          v-model="user.email"
        />
      </div>
      <div class="mb-5">
        <label for="address" class="block mb-1.5">寄送地址</label>
        <input
          type="text"
          id="address"
          class="border border-[#CED4DA] rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
          placeholder="請輸入寄送地址"
          required
          v-model="user.address"
        />
      </div>
      <div class="mb-12">
        <label for="transaction" class="block mb-1.5">交易方式</label>
        <select
          id="transaction"
          class="custom-select w-full"
          v-model="user.payment"
        >
          <option value="ATM">ATM</option>
          <option value="信用卡">信用卡</option>
          <option value="超商付款">超商付款</option>
        </select>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn text-xl rounded w-[255px]"
          @click="addOrder(user)"
        >
          送出預訂資料
        </button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
