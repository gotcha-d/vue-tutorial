<script setup lang="ts">
import { ref } from 'vue'

// 現在日時
let now = new Date()
let nowString = now.toLocaleTimeString()
let timeString = nowString
const refTimeString = ref(nowString)

function changeTime() {
  let newNow = new Date()
  let newNowString = newNow.toLocaleTimeString()
  timeString = newNowString
  refTimeString.value = newNowString
}
setInterval(changeTime, 1000)
</script>

<template>
  <h2>現在時刻： {{ timeString }}</h2>
  <h2>現在時刻(ref)： {{ refTimeString }}</h2>
</template>
