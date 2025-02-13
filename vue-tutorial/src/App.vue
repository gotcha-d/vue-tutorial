<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('未送信')
const onFormSubmit = (): void => {
  msg.value = "送信されました"
}

const msg2 = ref("まだです")
const onEnterKey = (): void => {
  msg2.value = "エンターキーが押下されました"
}
const onRightButtonClick = (): void => {
  msg2.value = "右クリックされました"
}
const onShiftClick = (): void => {
  msg2.value = "シフト押しながらクリックされました"
}
</script>

<template>
  <section>
    <!-- preventをつけていないと、フォームのデフォルトのイベントが実行されてページがリロードされてしまう -->
    <!-- <form action="#" v-on:submit="onFormSubmit"> -->
    <!-- <form action="#" v-on:submit.prevent="onFormSubmit">
      <input type="text" required>
      <button type="submit">送信</button>
    </form>
    <p>{{ msg }}</p> -->
  </section>

  <p>{{ msg2 }}</p>
  <input type="text" v-on:keydown.enter="onEnterKey">
  <!-- keydown.enterだと、shift+enterもイベントハンドラが実行される。enterだけの場合にしたい場合はこれ -->
  <input type="text" v-on:keydown.enter.exact="onEnterKey">
  <button v-on:click.right="onRightButtonClick">右クリック</button>
  <button v-on:click.shift="onShiftClick">シフト押しながらクリック</button>
</template>