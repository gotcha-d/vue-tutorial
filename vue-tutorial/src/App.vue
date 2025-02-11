<script setup lang="ts">
import { ref } from 'vue'

const randValue = ref('まだです')
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10)
  randValue.value = String(rand)
}
const onResetClick = (): void => {
  randValue.value = "まだです"
}
</script>

<template>
  <section>
    <!-- v-onは引数に渡したイベントにイベントリスナを設定する -->
    <button v-on:click="onButtonClick">クリック</button>
    <!-- 省略形 -->
    <button @click="onResetClick">リセット</button>
    <p>クリックの結果： {{ randValue }}</p>
  </section>
</template>
