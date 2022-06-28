<script setup>
import { ref, inject } from 'vue';
import { storeToRefs } from 'pinia';
import storeRecommend from '@/store/recommend';

const { recommendData } = storeToRefs(storeRecommend()); //解構 storeRecommend()
const scroll = ref(null); //取得模板元素
const isActive = ref(false);
const imgUrl = inject('imgUrl');

let startX = 0;
let startScrollLeft = 0;

//滑鼠按下時
const dragStart = (e) => {
  isActive.value = true;
  // scroll.value.classList.add('active');
  startX = e.pageX; //起始座標
  startScrollLeft = scroll.value.scrollLeft; //捲軸起始值，預設為0
};

//滑鼠拖曳時
const dragHandle = (e) => {
  // e.preventDefault();
  // if (!scroll.value.classList.contains('active')) return;
  if (!isActive.value) return;
  const move = e.pageX - startX; //計算移動距離(現在座標 - 起始座標)
  scroll.value.scrollLeft = startScrollLeft - move; //向左拖曳 pageX 值會遞減，所以 move 會負值
  //console.log(e.pageX);
  //console.log(startX);
  //console.log(startScrollLeft);
};

//滑鼠離開或放開時
const dragStop = () => {
  isActive.value = false;
  // scroll.value.classList.remove('active');
};
</script>

<template>
  <div class="max-w-[1110px] mx-auto">
    <h2 class="text-center text-white text-[28px] mb-8">好評推薦</h2>
    <div
      class="scroll-zone"
      :class="{ active: isActive }"
      @mousedown="dragStart"
      @mousemove.prevent="dragHandle"
      @mouseup="dragStop"
      @mouseleave="dragStop"
      ref="scroll"
    >
      <ul class="flex ml-[95px] mb-5">
        <li
          class="card flex"
          :class="{ 'mr-[30px]': index !== 4 }"
          v-for="(item, index) in recommendData.first"
          :key="item.user"
        >
          <img :src="`${imgUrl}/images/${item.productImg}`" alt="" />
          <div class="card-content ml-4">
            <div class="flex mb-2">
              <img
                class="rounded-full h-10"
                :src="`${imgUrl}/images/${item.userImg}`"
                :alt="item.user"
                width="40"
              />
              <div class="ml-2">
                <p>{{ item.user }}</p>
                <p class="text-sm text-[#6A33F8]">{{ item.product }}</p>
              </div>
            </div>
            <p>{{ item.userMessage }}</p>
          </div>
        </li>
      </ul>
      <ul class="flex">
        <li
          class="card flex"
          :class="{ 'mr-[30px]': index !== 4 }"
          v-for="(item, index) in recommendData.second"
          :key="item.user"
        >
          <img :src="`${imgUrl}/images/${item.productImg}`" alt="" />
          <div class="card-content ml-4">
            <div class="flex mb-2">
              <img
                class="rounded-full h-10"
                :src="`${imgUrl}/images/${item.userImg}`"
                :alt="item.user"
                width="40"
              />
              <div class="ml-2">
                <p>{{ item.user }}</p>
                <p class="text-sm text-[#6A33F8]">{{ item.product }}</p>
              </div>
            </div>
            <p>{{ item.userMessage }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
