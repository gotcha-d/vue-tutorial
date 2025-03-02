<script setup lang="ts">
import { inject, computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { Member } from '@/interfaces';

interface Props {
  id: number
}
const props = defineProps<Props>()

const memberList = inject("memberList") as Map<number, Member>
const member = computed(
  (): Member => {
  return memberList.get(props.id) as Member
  }
)
const localNote = computed(() => {
  let note = "--"
  if (member.value.note !== undefined) {
    note = member.value.note
  }
  return note
})
</script>

<template>
  <section>
    <h2>会員詳細情報</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>名前</dt>
      <dd>{{ member.name }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>