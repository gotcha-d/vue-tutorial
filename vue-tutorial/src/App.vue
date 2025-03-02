<script setup lang="ts">
import { ref } from "vue"
import Input from "./components/Input.vue";
import Radio from "./components/Radio.vue";
import Select from "./components/Select.vue";

// 現在表示させるコンポーネント
const currentComp = ref(Input)
// 現在表示させるコンポーネント名
const currentCompName = ref("Input")

const compList = [Input, Radio, Select]
const compNameList = ["Input", "Radio", "Select"]
let currentCompIndex = 0

const switchComp = (): void => {
  currentCompIndex++

  // 規定値以上の場合はリセットさせる
  if (currentCompIndex > 2) {
    currentCompIndex = 0
  }

  // コンポーネント切り替え
  currentComp.value = compList[currentCompIndex]
  currentCompName.value = compNameList[currentCompIndex]
}
</script>

<template>
  <p>コンポーネント名: {{ currentCompName }}</p>
  <KeepAlive>
    <component v-bind:is="currentComp" />
  </KeepAlive>
  <button v-on:click="switchComp">切り替え</button>
</template>