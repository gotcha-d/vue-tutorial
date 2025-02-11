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
const pBgColor = ref('white')
const onParagraphClick =(color: string): void => {
  pBgColor.value = color
}

const pMsg = ref('イベント前(ここをクリック)')
const pBgColorEvent = ref('white')
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
  pBgColorEvent.value = bgColor
  pMsg.value = event.timeStamp.toString()
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
    <!-- イベントオブジェクトだけを渡すときはテンプレート上のイベントメソッドに引数は不要 -->
    <img src="./assets/logo.svg" alt="vueのロゴ" width="200" v-on:mousemove="onImageMouseMove">
    <p>ポインタの位置： x={{ mousePointerX }},y={{ mousePointerY }}</p>
  </section>
  <section>
    <!-- 任意の引数を渡すときはテンプレート上のイベントメソッドに引数が必要 -->
    <p  v-on:click="onParagraphClick('pink')" v-bind:style="{backgroundColor: pBgColor}">
      ここをクリックすると色が変わります
    </p>
  </section>
  <section>
    <!-- イベントオブジェクトとその他の引数を併用したいときは$eventを明記する -->
    <p v-on:click="onPClickWithEvent('green', $event)" v-bind:style="{backgroundColor: pBgColorEvent}">
      {{ pMsg }}
    </p>
  </section>
</template>
