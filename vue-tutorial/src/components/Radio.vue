<script setup lang="ts">
import { ref } from "vue"
const memberType = ref(1)
</script>

<template>
  <label for="">
    <input type="radio" name="memberType" v-model="memberType" value="1">
    通常会員
  </label>
  <label for="">
    <input type="radio" name="memberType" v-model="memberType" value="2">
    特別会員
  </label>
  <label for="">
    <input type="radio" name="memberType" v-model="memberType" value="3">
    優良会員
  </label>
  <br>
  <p>選択されたラジオボタン： {{ memberType }}</p>
</template>