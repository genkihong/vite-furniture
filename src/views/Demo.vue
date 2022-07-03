<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../store/main';
import { useForm, useField } from 'vee-validate';

const store = useStore();
const { todos, counter, test, doubleCount, completedTodo } = storeToRefs(store); //解構 store
const { obj, arr } = test.value;
const handleClick = () => {
  obj.name = 'two';
};

//vee-validate Form-level Validation
const simpleSchema = {
  userName(value) {
    if (value && value.trim()) {
      console.log('name', value);
      return true;
    }
    return '必填';
  },
  tel(value) {
    if (value && value.trim()) {
      console.log('tel', value);
      return true;
    }
    return '必填';
  },
};

const { handleSubmit } = useForm({
  validationSchema: simpleSchema,
});

const addOrder = handleSubmit((user) => {
  console.log('submit', user);
  storeOrder.addOrder(user);
});

const { value: name, errorMessage: userNameError } = useField('userName');
const { value: tel, errorMessage: telError } = useField('tel');
</script>

<template>
  <form @submit="addOrder">
    <input v-model="name" type="text" name="userName" />
    <span>{{ userNameError }}</span>
    <input v-model="tel" type="text" name="tel" />
    <span>{{ telError }}</span>
    <button>Submit</button>
  </form>
  <!-- <h1>Home</h1>
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
  <button type="button" @click="handleClick">change obj</button> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
