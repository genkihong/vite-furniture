<script setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput.vue';
import StoreOrder from '@/store/order';

const storeOrder = StoreOrder();
const payment = ref('ATM');
const isSubmitting = ref(false);

const onSubmit = ({ name, tel, email, address }) => {
  isSubmitting.value = true;
  const user = {
    name,
    tel,
    email,
    address,
    payment: payment.value,
  };
  setTimeout(() => {
    Swal.fire({
      toast: true,
      width: '15rem',
      background: '#6A33F8',
      color: '#FFFFFF',
      position: 'top-end',
      icon: 'success',
      title: '已送出訂單',
      showConfirmButton: false,
      timer: 1000,
    });
    isSubmitting.value = false;
  }, 2000);

  // storeOrder.addOrder(user);
};
// 定義要驗證的輸入欄位
const schema = Yup.object({
  name: Yup.string().required('必填!'),
  tel: Yup.string().required('必填!'),
  email: Yup.string().email().required('必填!'),
  address: Yup.string().required('必填!'),
  // password: Yup.string().min(6).required(),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
</script>

<template>
  <section class="max-w-[400px] mx-auto">
    <h2 class="text-center text-[28px] mb-8">填寫預訂資料</h2>
    <Form @submit="onSubmit" :validation-schema="schema">
      <TextInput
        label="姓名"
        name="name"
        type="text"
        placeholder="請輸入姓名"
      />
      <TextInput label="電話" name="tel" type="text" placeholder="請輸入電話" />
      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="請輸入Email"
      />
      <TextInput
        label="寄送地址"
        name="address"
        type="text"
        placeholder="請輸入寄送地址"
      />
      <div class="mb-12">
        <label for="transaction" class="block mb-1.5">交易方式</label>
        <select
          id="transaction"
          class="custom-select w-[350px]"
          v-model="payment"
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
          :class="{ 'cursor-not-allowed': isSubmitting }"
          :disabled="isSubmitting"
        >
          送出預訂資料
        </button>
      </div>
    </Form>
    <!-- <form @submit="onSubmit">
      <div class="mb-5">
        <label for="name" class="block mb-1.5">姓名</label>
        <input
          type="text"
          id="name"
          class="custom-input w-[350px]"
          placeholder="請輸入姓名"
          name="name"
          v-model="name"
        />
        <span class="ml-2 text-[#C72424]">{{ nameError }}</span>
      </div>
      <div class="mb-5">
        <label for="tel" class="block mb-1.5">電話</label>
        <input
          type="tel"
          id="tel"
          class="custom-input w-[350px]"
          placeholder="請輸入電話"
          name="tel"
          v-model="tel"
        />
        <span class="ml-2 text-[#C72424]">{{ telError }}</span>
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          class="custom-input w-[350px]"
          placeholder="請輸入 Email"
          name="email"
          v-model="email"
        />
        <span class="ml-2 text-[#C72424]">{{ emailError }}</span>
      </div>
      <div class="mb-5">
        <label for="address" class="block mb-1.5">寄送地址</label>
        <input
          type="text"
          id="address"
          class="custom-input w-[350px]"
          placeholder="請輸入寄送地址"
          name="address"
          v-model="address"
        />
        <span class="ml-2 text-[#C72424]">{{ addressError }}</span>
      </div>
      <div class="mb-12">
        <label for="transaction" class="block mb-1.5">交易方式</label>
        <select id="transaction" class="custom-select w-[350px]" name="payment">
          <option value="ATM">ATM</option>
          <option value="信用卡">信用卡</option>
          <option value="超商付款">超商付款</option>
        </select>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn text-xl rounded w-[255px]"
          :class="{ 'cursor-not-allowed': isSubmitting }"
          :disabled="isSubmitting"
        >
          送出預訂資料
        </button>
      </div>
    </form> -->
  </section>
</template>

<style lang="scss" scoped></style>
