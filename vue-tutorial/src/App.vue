<script setup lang="ts">
import { ref } from 'vue'

const url = ref('https://vuejs.org/')
const isSendButtonDisabled = ref(true)
</script>

<template>
  <!-- v-bindはマスタッシュ構文を使えないタグの属性部分に対してテンプレート変数を利用するための構文 -->
  <p>
    <a v-bind:href="url" target="_blank">Vue.jsのサイト</a>
  </p>
  <p>
    <a :href="url" target="_blank">Vue.jsのサイト(省略形)</a>
  </p>
  <p>
    <a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsのガイドページ</a>
  </p>
  <p>
    <button v-bind:disabled="isSendButtonDisabled">送信</button>
  </p>
</template>