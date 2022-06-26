<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../store/main';

const store = useStore();
// console.log(store)
// console.log(storeToRefs(store));
// console.log(storeToRefs(store).todos)
// console.log(store.todos);
const { todos, counter, test, doubleCount, completedTodo } = storeToRefs(store); //解構 store
// console.log(todos);
// console.log(test);
const { obj, arr } = test.value;
// console.log(obj);

const handleClick = () => {
  obj.name = 'two';
};
// defineProps({
//   msg: String,
// });

// const count = ref(0)
</script>

<template>
  <h1>Home</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.id }}:{{ todo.name }} - {{ todo.isCompleted }}
    </li>
  </ul>
  <h3>Completed:</h3>
  <ul>
    <li v-for="todo in completedTodo" :key="todo.id">
      {{ todo.id }}:{{ todo.name }} - {{ todo.isCompleted }}
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
  </ul>
  <div>obj name is {{ obj.name }}</div>
  <div>{{ doubleCount }}</div>
  <button type="button" @click="counter++">count is: {{ counter }}</button>
  <button type="button" @click="handleClick">change obj</button>

  <!-- <h1>{{ msg }}</h1> -->

  <!-- <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p> -->

  <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
