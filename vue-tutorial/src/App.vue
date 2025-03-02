
<script setup lang="ts">
import { reactive, provide } from 'vue';
import BaseSection from './components/BaseSection.vue';
import type { Member } from './interfaces';

// 会員情報リストの用意
const memberList = new Map<number, Member>()
memberList.set(1, {id:1, name: "田中太郎", email: "tanaka@example.jp", points: 35, note: "初回入会特典あり"})
memberList.set(2, {id:2, name: "鈴木二郎", email: "suzuki@example.jp", points: 53})
// 会員情報をprovide
provide("memberList", reactive(memberList))
</script>

<template>
  <BaseSection />
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
