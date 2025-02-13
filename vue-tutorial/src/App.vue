<script setup lang="ts">
import { ref } from 'vue'

// vモデル
const inputNameModel = ref("双方向")

// 片方向
const inputNameBind = ref("しんちゃん")
const inputNameOn = ref("ななし")
const onInputName = (event: Event) => {
  const element = event?.target as HTMLInputElement
  inputNameOn.value = element.value
}

// 双方向
const inputName2Way = ref('双方向')
const onInputName2Way = (event: Event) => {
  const element = event.target as HTMLInputElement
  inputName2Way.value = element.value
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

  <div>
    <h2>双方向のデータバインディング</h2>
    <input type="text" v-bind:value="inputName2Way" v-on:input="onInputName2Way">
    <p>{{ inputName2Way }}</p>
  </div>
</template>