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

const mousePointerX = ref(0)
const mousePointerY = ref(0)
const onImageMouseMove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX
  mousePointerY.value = event.offsetY
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
  <section>
    <img src="./assets/logo.svg" alt="vueのロゴ" width="200" v-on:mousemove="onImageMouseMove">
    <p>ポインタの位置： x={{ mousePointerX }},y={{ mousePointerY }}</p>
  </section>
</template>
