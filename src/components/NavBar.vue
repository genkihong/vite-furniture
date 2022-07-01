<script setup></script>

<template>
  <header class="max-w-[1110px] mx-auto">
    <nav class="flex py-9">
      <h1 class="mr-auto text-2xl font-bold hover:text-[#6A33F8]">
        <router-link to="/">WOWOROOM</router-link>
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
        <li
          class="mr-12 hover:text-[#6A33F8]"
          :class="{ 'text-[#6A33F8]': $route.name == 'Order' }"
        >
          <router-link to="/order">立即預訂</router-link>
        </li>
        <li
          class="hover:text-[#6A33F8]"
          :class="{ 'text-[#6A33F8]': $route.name == 'Cart' }"
        >
          <router-link to="/cart"
            ><i class="fa-solid fa-cart-arrow-down fa-lg"></i
          ></router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="h-10 bg-black mb-8"></div>
</template>

<style lang="scss" scoped></style>
