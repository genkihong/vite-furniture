import { defineStore } from 'pinia';

export default defineStore('recommend', {
  state: () => ({
    recommendData: {
      first: [
        {
          user: '王六角',
          userImg: 'I9L7WOr.png',
          userMessage: 'CP值很高。',
          product: 'Jodan 雙人床架',
          productImg: 'cXcOLhu.png',
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
          product: 'Charles 系列儲物組合',
          productImg: 'G73FRuT.png',
        },
        {
          user: 'isRaynotArray',
          userImg: 'NycuPVy.png',
          userMessage: '物超所值!',
          product: 'Antony 遮光窗簾',
          productImg: 'HvT3zlU.png',
        },
        {
          user: '程鮭魚',
          userImg: 'zdFOQIv.png',
          userMessage: '租屋用剛剛好',
          product: 'Louvre 單人床架',
          productImg: 'Ed7bxLr.png',
        },
      ],
      second: [
        {
          user: '小杰',
          userImg: 'W7fyzp2.png',
          userMessage: '非常舒適，有需要會再回購。',
          product: 'Louvre 雙人床架',
          productImg: 'oJb4G1d.png',
        },
        {
          user: '江八角',
          userImg: '8O1cOnG.png',
          userMessage: '品質不錯～',
          product: 'Charles 雙人床架',
          productImg: 'eCaHhpW.png',
        },
        {
          user: 'juni讚神',
          userImg: 'C0NDvSA.png',
          userMessage: '讚ㄉ！',
          product: 'Antony 床邊桌',
          productImg: 'npA3DgP.png',
        },
        {
          user: '久安說安安',
          userImg: 'hUsTZDm.png',
          userMessage: '一個躺剛剛好',
          product: 'Louvre 單人床架',
          productImg: 'bt1lsT2.png',
        },
        {
          user: 'PeiQun',
          userImg: '3ako6QX.png',
          userMessage: '睡起來很舒適',
          product: 'Antony 雙人床架',
          productImg: 'kwIRna8.png',
        },
      ],
    },
  }),
  getters: {},
  actions: {},
});
