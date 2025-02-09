<script setup lang="ts">
import { ref } from "vue"

// テンプレート変数はrefで定義する
const name = ref('田中太郎')
</script>

<template>
  <!-- これがマスタッシュ構文 -->
  <h1>こんにちは、{{ name }}さん</h1>
</template>
