<script setup lan="ts">
import { ref } from 'vue';
import OneSection from './components/OneSection.vue';

const taro = ref("田中太郎")
const jiro = ref("鈴木次郎")
</script>

<template>
  <h2>SLotの利用</h2>
  <OneSection :name="taro">
    <p>{{ taro }}さんは連絡がつきません</p>
  </OneSection>
  <OneSection :name="jiro"/>
</template>
