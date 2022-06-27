import { defineStore } from 'pinia';

export default defineStore('recommend', {
  state: () => ({
    recommendData: {
      first: [
        {
          user: '王六角',
          userImg: 'I9L7WOr.png',
          userMessage: 'CP值很高。',
          productImg: 'cXcOLhu.png',
          product: 'Jodan 雙人床架',
        },
        {
          user: 'Leaf',
          userImg: 'CUFGfay.png',
          userMessage: '很喜歡～還有送三年保固～',
          product: 'Antony 雙人床架',
          productImg: 'JlGUkjl.png',
        },
        {
          user: '美濃鄧子琪',
          userImg: '8WwZsLS.png',
          userMessage: '廚房必備美用品！',
          productImg: 'G73FRuT.png',
          product: 'Charles 系列儲物組合',
        },
        {
          user: 'isRaynotArray',
          userImg: 'NycuPVy.png',
          userMessage: '物超所值!',
          productImg: 'HvT3zlU.png',
          product: 'Antony 遮光窗簾',
        },
        {
          user: '程鮭魚',
          userImg: 'zdFOQIv.png',
          userMessage: '租屋用剛剛好',
          productImg: 'Ed7bxLr.png',
          product: 'Louvre 單人床架',
        },
      ],
      second: [
        {
          user: '小杰',
          userImg: 'W7fyzp2.png',
          userMessage: '非常舒適，有需要會再回購。',
          productImg: 'oJb4G1d.png',
          product: 'Louvre 雙人床架',
        },
        {
          user: '江八角',
          userImg: '8O1cOnG.png',
          userMessage: '品質不錯～',
          productImg: 'eCaHhpW.png',
          product: 'Charles 雙人床架',
        },
        {
          user: 'juni讚神',
          userImg: 'C0NDvSA.png',
          userMessage: '讚ㄉ！',
          productImg: 'npA3DgP.png',
          product: 'Antony 床邊桌',
        },
        {
          user: '久安說安安',
          userImg: 'hUsTZDm.png',
          userMessage: '一個躺剛剛好',
          productImg: 'bt1lsT2.png',
          product: 'Louvre 單人床架',
        },
        {
          user: 'PeiQun',
          userImg: '3ako6QX.png',
          userMessage: '睡起來很舒適',
          productImg: 'kwIRna8.png',
          product: 'Antony 雙人床架',
        },
      ],
    },
  }),
  getters: {},
  actions: {},
});
