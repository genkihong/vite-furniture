<script setup>
import { provide, ref, onMounted, computed } from 'vue';
// import Swal from 'sweetalert2';
import StoreProduct from '@/store/product';
import Recommend from '@/components/Recommend.vue';
import Product from '@/components/Product.vue';

const storeProduct = StoreProduct();
const category = ref('全部');
const imgUrl = import.meta.env.PROD ? import.meta.env.VITE_IMGURL : '';
provide('imgUrl', imgUrl);

// console.log(process.env.NODE_ENV);
// console.log(import.meta.env);
// const filterCategory = {
//   all: (data) => data,
//   bedstead: (data) => data.filter((item) => item.category === '床架'),
//   store: (data) => data.filter((item) => item.category === '收納'),
//   curtain: (data) => data.filter((item) => item.category === '窗簾'),
// };
const filterProducts = computed(() => {
  return storeProduct.products.filter((item) => {
    if (category.value === '全部') {
      return storeProduct.products;
    }
    return item.category.includes(category.value);
  });
});

onMounted(() => {
  storeProduct.getProducts();
});
</script>

<template>
  <!-- banner -->
  <section class="banner mb-[60px] max-w-[1110px] mx-auto">
    <div
      class="bg-center bg-cover bg-no-repeat relative h-[420px]"
      :style="{ backgroundImage: `url(${imgUrl}/images/3ewLAKn.png)` }"
    >
      <!-- style=" background-image: url('/images/3ewLAKn.png')"> -->
      <p class="text-white text-[32px] absolute left-12 bottom-12">
        窩窩家居<br />跟您一起品味生活
      </p>
    </div>
  </section>
  <!-- 床墊優勢 -->
  <section id="features" class="mb-[60px] max-w-[1110px] mx-auto text-center">
    <h2 class="text-[28px] mb-7">床墊優勢</h2>
    <div class="flex justify-between text-xl">
      <div>
        <img src="/images/tR426y5.png" alt="原木料環保" />
        <p class="mt-2">原木料環保</p>
      </div>
      <div>
        <img src="/images/Fd2MiBb.png" alt="好收納" />
        <p class="mt-2">好收納</p>
      </div>
      <div>
        <img src="/images/5n1uTFh.png" alt="好組裝" />
        <p class="mt-2">好組裝</p>
      </div>
    </div>
  </section>
  <!-- 家具比較 -->
  <section id="compare" class="bg-[#F8F8F8] pt-12 mb-16">
    <h2 class="text-center text-[28px] mb-8">家具比較</h2>
    <table class="table-auto w-full max-w-[730px] mx-auto">
      <thead>
        <tr class="border-b border-[#B9B9B9] text-xl">
          <th></th>
          <th class="pb-3">窩窩系統模組家具</th>
          <th class="text-[#797979] pb-3">組合式家具</th>
          <th class="text-[#797979] pb-3">實木家具</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr class="border-b border-[#B9B9B9]">
          <td class="text-xl text-left py-3">可單人自行組裝</td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
          <td class="text-[#797979]">不一定</td>
          <td></td>
        </tr>
        <tr class="border-b border-[#B9B9B9]">
          <td class="text-xl text-left py-3">可多次重複拆裝</td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr class="border-b border-[#B9B9B9]">
          <td class="text-xl text-left py-3">床墊規格彈性大</td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
          <td class="text-[#797979]">不一定</td>
          <td class="text-[#797979]">不一定</td>
        </tr>
        <tr class="border-b border-[#B9B9B9]">
          <td class="text-xl text-left py-3">材質可長久使用</td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
          <td></td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
        </tr>
        <tr class="border-b border-[#B9B9B9]">
          <td class="text-xl text-left py-3">小客車即可搬運</td>
          <td class="text-[#6A33FF]">
            <i class="fa-solid fa-check fa-2xl"></i>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
  <!-- 好評推薦 -->
  <section id="recommendation" class="bg-[#301E5F] pt-[60px] pb-20 mb-8">
    <Recommend />
  </section>
  <!-- 運送方式 -->
  <section id="transport" class="w-full max-w-[730px] mx-auto mb-[72px]">
    <h2 class="text-center text-[28px] mb-8">運送方式</h2>
    <ul class="flex text-center">
      <li class="mr-[90px] relative">
        <div class="circle flex items-center justify-center mb-2">
          <i class="fa-solid fa-cart-shopping text-5xl"></i>
        </div>
        <p class="text-xl">STEP.1</p>
        <p>選購商品</p>
      </li>
      <li class="mr-[90px] relative">
        <div class="circle flex items-center justify-center mb-2">
          <i class="fa-solid fa-list text-5xl"></i>
        </div>
        <p class="text-xl">STEP.2</p>
        <p>填寫預定資料</p>
      </li>
      <li class="mr-[90px] relative">
        <div class="circle flex items-center justify-center mb-2">
          <i class="fa-solid fa-check text-5xl"></i>
        </div>
        <p class="text-xl">STEP.3</p>
        <p>預定成功</p>
      </li>
      <li>
        <div class="circle flex items-center justify-center mb-2">
          <i class="fa-solid fa-envelope text-5xl"></i>
        </div>
        <p class="text-xl">STEP.4</p>
        <p>Email 付款資訊</p>
      </li>
    </ul>
  </section>
  <!-- 產品列表 -->
  <section id="products" class="mb-[60px]">
    <!-- <Product /> -->
    <div class="max-w-[1110px] mx-auto">
      <select class="custom-select mb-8 w-[255px]" v-model="category">
        <option value="全部">全部</option>
        <option
          :value="item"
          v-for="item in storeProduct.categories"
          :key="item"
        >
          {{ item }}
        </option>
      </select>

      <ul class="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        <Product
          v-for="product in filterProducts"
          :key="product.id"
          :product="product"
        />
        <!-- <li
          class="h-[460px] text-xl relative rounded-b"
          v-for="item in filterProducts"
          :key="item.id"
        >
          <img
            class="object-cover object-center"
            :src="item.images"
            :alt="item.description"
          />
          <div class="badge">新品</div>
          <button
            class="btn w-full mb-2"
            @click="addCart(item.id)"
            :class="{ 'cursor-not-allowed': storeCart.loadingId === item.id }"
            :disabled="storeCart.loadingId === item.id"
          >
            <i
              class="fa-solid fa-spinner fa-spin-pulse"
              v-if="storeCart.loadingId === item.id"
            ></i>
            加入購物車
          </button>
          <p class="mb-2">{{ item.title }}</p>
          <p class="line-through">
            NT${{ $filters.currency(item.origin_price) }}
          </p>
          <p class="text-[28px]">NT${{ $filters.currency(item.price) }}</p>
        </li> -->
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
