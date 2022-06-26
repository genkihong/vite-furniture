import { defineStore } from 'pinia';

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useStore = defineStore('Main', {
  // 注意 state 是一個 function，推薦使用 arrow function
  // 可幫助 typescript 更好進行類型推斷
  state: () => ({
    APILoading: false,
    counter: 1,
    todos: [
      {
        id: 1,
        name: 'first',
        isCompleted: false,
      },
      {
        id: 2,
        name: 'second',
        isCompleted: true,
      },
    ],
    test: {
      arr: ['1', '2', '3'],
      obj: {
        name: 'one',
      },
    },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    completedTodo: (state) => {
      return state.todos.filter((item) => item.isCompleted);
    },
  },
  actions: {},
});
