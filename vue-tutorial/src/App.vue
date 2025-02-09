<script setup lang="ts">
import { ref, computed } from 'vue'

const radiusInit = Math.round(Math.random() * 10)
const radius = ref(radiusInit)
const PI = 3.14
// 外部から与えられた計算結果をリアクティブデータにする方法が算出プロパティ
// 算出プロパティは読み取り専用であることに注意する
const area = computed((): number =>{
  return radius.value * radius.value * PI
})
const changeRadius = () => {
  const newRadius = Math.round(Math.random() * 10)
  radius.value = newRadius
}
setInterval(changeRadius, 1000)
</script>

<template>
円の半径を{{ radius }}、円周率を{{ PI }}とするとき円の面積は{{ area }}
</template>
