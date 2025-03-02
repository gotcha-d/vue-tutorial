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
    <template v-slot:default>
      <p>問題発生したよ</p>
    </template>
    <template v-slot:etail>
      <ul>
        <li v-for="problem in taroProblems">
          {{ problem }}
        </li>
      </ul>
    </template>
  </OneSection>
  <OneSection :name="jiro">
    <!-- すべてのSlotに対して子コンポーネントに渡すHTMLを指定する必要はない -->
    <template #default>
      <p>微妙に問題発生</p>
    </template>
  </OneSection>
</template>
