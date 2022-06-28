<script setup>
import { provide } from 'vue';
import Recommend from '@/components/Recommend.vue';
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
          <li class="mr-12 hover:text-[#6A33F8]"><a href="#">運送方式</a></li>
          <li class="hover:text-[#6A33F8]"><a href="#">立即預訂</a></li>
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
      <table class="table-auto border-[#B9B9B9] w-full max-w-[730px] mx-auto">
        <thead>
          <tr class="border-b text-xl">
            <th></th>
            <th class="pb-3">窩窩系統模組家具</th>
            <th class="text-[#797979] pb-3">組合式家具</th>
            <th class="text-[#797979] pb-3">實木家具</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="border-b">
            <td class="text-xl py-3">可單人自行組裝</td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined"> done </span>
            </td>
            <td class="text-[#797979]">不一定</td>
            <td></td>
          </tr>
          <tr class="border-b">
            <td class="text-xl py-3">可多次重複拆裝</td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined">done</span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="border-b">
            <td class="text-xl py-3">床墊規格彈性大</td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined">done</span>
            </td>
            <td class="text-[#797979]">不一定</td>
            <td class="text-[#797979]">不一定</td>
          </tr>
          <tr class="border-b">
            <td class="text-xl py-3">材質可長久使用</td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined">done</span>
            </td>
            <td></td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined">done</span>
            </td>
          </tr>
          <tr class="border-b">
            <td class="text-xl py-3">小客車即可搬運</td>
            <td class="text-[#6A33FF]">
              <span class="material-symbols-outlined">done</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- 好評推薦 -->
    <section id="recommendation" class="bg-[#301E5F] pt-[60px] pb-20">
      <Recommend />
    </section>
  </div>
</template>

<style scoped>
.hidden-scroll {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
</style>
