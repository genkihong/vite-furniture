<script setup>
import { defineProps, toRefs } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});
// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
// const name = toRef(props, 'name');
const { name } = toRefs(props);
// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
// 驗證輸入欄位
const { value, errorMessage } = useField(name);
</script>

<template>
  <div class="mb-5">
    <label :for="name" class="block mb-1.5">{{ label }}</label>
    <input
      class="custom-input w-[350px]"
      :type="type"
      :id="name"
      :placeholder="placeholder"
      :name="name"
      v-model="value"
    />
    <span class="ml-2 text-[#C72424]">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
