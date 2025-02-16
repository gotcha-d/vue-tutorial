<script setup lang="ts">
import { computed, ref } from 'vue';

const number = ref(80)
const showOrNot = computed((): boolean => {
  let showOrNot = false
  const rand = Math.round(Math.random() * 100)
  if (rand >= 50 ) {
    showOrNot = true
  }
  return showOrNot
})
</script>
<template>
  <p v-if="number >= 50">
    条件に合致したので表示1
  </p>
  <!-- 可読性の観点からv-ifの中に複雑な式を書くのはNG -->
  <p v-if="Math.round(Math.random() * 100) >= 50">
    条件に合致したので表示2
  </p>
  <!-- 条件に合致した場合のみレンダリングされる -->
  <p v-if="showOrNot">
    条件に合致したので表示3
  </p>
</template>