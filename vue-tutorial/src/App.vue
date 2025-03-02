<script setup lan="ts">
import { ref } from 'vue';
import OneSection from './components/OneSection.vue';

const taroProblemsInit = [
  "電話が通じません。",
  "留守です"
]
const taro = ref("田中太郎")
const taroProblems = ref(taroProblemsInit)
const jiro = ref("鈴木次郎")
</script>

<template>
  <h2>SLotの利用</h2>
  <OneSection :name="taro">
    <ul>
      <li
        v-for="problems of taroProblems"
        v-bind:key="problems"
      >
        {{ problems }}
      </li>
    </ul>
  </OneSection>
  <OneSection :name="jiro"/>
</template>
