<script setup lang="ts">
import { computed } from 'vue';
import type { Member } from '@/interfaces';
import { useMemberStore } from '@/store/member';

interface Props {
  id: number
}
const props = defineProps<Props>()

const memberStore = useMemberStore()
const member = computed((): Member => {
  return memberStore.getById(props.id
  )
})
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