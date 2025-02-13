<script setup lang="ts">
import { ref } from 'vue'

// 双方向
const inputNameModel = ref("双方向")

// 方方向
const inputNameBind = ref("しんちゃん")
const inputNameOn = ref("ななし")
const onInputName = (event: Event) => {
  const element = event?.target as HTMLInputElement
  inputNameOn.value = element.value
}
</script>

<template>
  <div>
    <h2>v-modelを使用</h2>
    <input type="text" v-model="inputNameModel">
    <p>{{ inputNameModel }}</p>
  </div>
  <div>
    <h2>片方向のデータバインディング</h2>
    <input type="text" v-bind:value="inputNameBind">
    <input type="text" v-on:input="onInputName">
    <p>{{ inputNameOn }}</p>
  </div>

</template>