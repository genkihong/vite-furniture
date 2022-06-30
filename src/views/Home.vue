<script setup>
import { provide } from 'vue';
import Recommend from '@/components/Recommend.vue';
import Product from '@/components/Product.vue';
import Cart from '@/components/Cart.vue';
const imgUrl = import.meta.env.PROD ? import.meta.env.VITE_IMGURL : '';
provide('imgUrl', imgUrl);
// console.log(imgUrl);
// console.log(process.env.NODE_ENV);
// console.log(import.meta.env);
</script>

<template>
  <div class="container mx-auto">
    <header class="max-w-[1110px] mx-auto">
      <nav class="flex py-9">
        <h1 class="mr-auto text-2xl font-bold hover:text-[#6A33F8]">
          <a href="#">WOWOROOM</a>
        </h1>
        <ul class="flex text-xl">
          <li class="mr-12 hover:text-[#6A33F8]">
            <a href="#features">床墊優勢</a>
          </li>
          <li class="mr-12 hover:text-[#6A33F8]">
            <a href="#recommendation">好評推薦</a>
          </li>
          <li class="mr-12 hover:text-[#6A33F8]">
            <a href="#transport">運送方式</a>
          </li>
          <li class="hover:text-[#6A33F8]">
            <a href="#booking">立即預訂</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="h-10 bg-black mb-8"></div>
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
    <section class="mb-[60px]">
      <Product />
    </section>

    <section class="bg-[#F8F8F8] pt-12 pb-[70px]">
      <Cart />
    </section>
  </div>
</template>

<style scoped></style>
