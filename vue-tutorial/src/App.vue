<script setup lang="ts">
import { ref } from "vue"

const html = ref("<a href='https://vuejs.org'>Vue.jsのトップページ</a>")
</script>
<template>
  <!-- テンプレート変数はバインドするときに自動でエスケープする -->
  <section>{{ html }}</section>
  <section v-html="html"></section>
</template>