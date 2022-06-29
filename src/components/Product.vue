<script setup></script>

<template>
  <div class="max-w-[1110px] mx-auto">
    <select class="custom-select mb-8">
      <option value="all">全部</option>
      <option value="bedstead">床架</option>
      <option value="store">收納</option>
      <option value="curtain">窗簾</option>
    </select>

    <ul class="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
      <li class="h-[460px] text-xl relative rounded-b">
        <img
          class="object-cover object-center"
          src="/images/ExbKbSE.png"
          alt=""
        />
        <div class="badge">新品</div>
        <button class="btn mb-2">加入購物車</button>
        <p class="mb-2">Antony 雙人床架／雙人加大</p>
        <p class="line-through">NT$18,000</p>
        <p class="text-[28px]">NT$12,000</p>
      </li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
      <li class="h-[460px] border border-black"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
