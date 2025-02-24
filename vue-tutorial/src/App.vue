
<script setup lang="ts">
import { computed, ref } from 'vue';
import OneMember from './components/OneMember.vue';
import OneSection from './components/OneSection.vue';

interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

const memberListInit = new Map<number, Member>()
memberListInit.set(1, {id: 1, name: "田中太郎", email: "taro@example.jp", points:35, note: "初回特典あり"})
memberListInit.set(2, {id: 2, name: "鈴木次郎", email: "jiro@example.jp", points:53})
const memberList = ref(memberListInit)

/* 会員リスト内のポイントの合計 */
const totalPoints = computed(() => {
  let totalPoints = 0
  memberList.value.forEach(member => {
    totalPoints += member.points
  });
  return totalPoints
})

const randInit = Math.round(Math.random() * 10)
const rand = ref(randInit)
const onCreateNewRand = () => {
  rand.value = Math.round(Math.random() * 10)
}

// Emitにより実行されるメソッド
const onIncrementPoint = (memberId: number)  => {
  const member = memberList.value.get(memberId) as Member
  console.log("ttt")
  member.points++
}
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <OneMember 
      v-for="[key, member] in memberList"
      :key="key"
      :id="member.id"
      :name="member.name"
      :email="member.email"
      :points="member.points"
      :note="member.note"
      v-on:incrementPoint = "onIncrementPoint"
    />
  </section>
  <hr>
  <section>
    <p>親コンポーネントで乱数を表示: {{ rand }}</p>
    <OneSection
      :rand="rand"
      v-on:createNewRand = "onCreateNewRand"
    />
  </section>
</template>
<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
