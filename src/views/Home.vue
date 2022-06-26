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
        class="bg-center bg-cover bg-no-repeat relative"
        style="background-image: url('/images/3ewLAKn.png'); height: 420px"
      >
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
      <div class="max-w-[1110px] mx-auto">
        <h2 class="text-center text-white text-[28px] mb-8">好評推薦</h2>
        <div class="overflow-x-scroll cursor-grab">
          <ul class="flex ml-[95px] mb-5">
            <li class="card flex mr-[30px]">
              <img src="/images/cXcOLhu.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/I9L7WOr.png"
                    alt="王六角"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>王六角</p>
                    <p class="text-sm text-[#6A33F8]">Jodan 雙人床架</p>
                  </div>
                </div>
                <p>CP值很高。</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/JlGUkjl.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/CUFGfay.png"
                    alt="Leaf"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>Leaf</p>
                    <p class="text-sm text-[#6A33F8]">Antony 雙人床架</p>
                  </div>
                </div>
                <p>很喜歡～還有送三年保固～</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/G73FRuT.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/8WwZsLS.png"
                    alt="美濃鄧子琪"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>美濃鄧子琪</p>
                    <p class="text-sm text-[#6A33F8]">Charles 系列儲物組合</p>
                  </div>
                </div>
                <p>廚房必備美用品！</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/HvT3zlU.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/NycuPVy.png"
                    alt="isRaynotArray"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>isRaynotArray</p>
                    <p class="text-sm text-[#6A33F8]">Antony 遮光窗簾</p>
                  </div>
                </div>
                <p>物超所值!</p>
              </div>
            </li>
            <li class="card flex">
              <img src="/images/Ed7bxLr.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/zdFOQIv.png"
                    alt="程鮭魚"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>程鮭魚</p>
                    <p class="text-sm text-[#6A33F8]">Louvre 單人床架</p>
                  </div>
                </div>
                <p>租屋用剛剛好</p>
              </div>
            </li>
          </ul>
          <ul class="flex">
            <li class="card flex mr-[30px]">
              <img src="/images/oJb4G1d.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/W7fyzp2.png"
                    alt="小杰"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>小杰</p>
                    <p class="text-sm text-[#6A33F8]">Louvre 雙人床架</p>
                  </div>
                </div>
                <p>非常舒適，有需要會再回購</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/eCaHhpW.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/8O1cOnG.png"
                    alt="江八角"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>江八角</p>
                    <p class="text-sm text-[#6A33F8]">Charles 雙人床架</p>
                  </div>
                </div>
                <p>品質不錯～</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/npA3DgP.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/C0NDvSA.png"
                    alt="juni讚神"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>juni讚神</p>
                    <p class="text-sm text-[#6A33F8]">Antony 床邊桌</p>
                  </div>
                </div>
                <p>讚ㄉ！</p>
              </div>
            </li>
            <li class="card flex mr-[30px]">
              <img src="/images/bt1lsT2.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/hUsTZDm.png"
                    alt="久安說安安"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>久安說安安</p>
                    <p class="text-sm text-[#6A33F8]">Louvre 單人床架</p>
                  </div>
                </div>
                <p>一個躺剛剛好</p>
              </div>
            </li>
            <li class="card flex">
              <img src="/images/kwIRna8.png" alt="" />
              <div class="card-content ml-4">
                <div class="flex mb-2">
                  <img
                    class="rounded-full h-10"
                    src="/images/3ako6QX.png"
                    alt="PeiQun"
                    width="40"
                  />
                  <div class="ml-2">
                    <p>PeiQun</p>
                    <p class="text-sm text-[#6A33F8]">Antony 雙人床架</p>
                  </div>
                </div>
                <p>睡起來很舒適</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.hidden-scroll::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
</style>
