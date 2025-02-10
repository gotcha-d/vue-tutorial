<script setup lang="ts">
import { reactive, computed } from 'vue';

const radiusInit = Math.round(Math.random() * 10)
const data = reactive({
  PI: 3.14,
  radius: radiusInit
})
const area = computed(() => {
  return data.radius * data.radius * data.PI
})
const changeRadius = (): Number => {
  data.radius = Math.round(Math.random() * 10)
}
setInterval(changeRadius, 1000)
</script>

<template>
  <h2>半径{{ data.radius }}の円の面積は, 円周率が{{ data.PI }}のとき{{ area }}</h2>
</template>