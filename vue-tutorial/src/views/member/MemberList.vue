<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import type { Member } from '@/interfaces';
import { useMemberStore } from '@/store/member';

const memberStore = useMemberStore()
memberStore.prepareMemberList()

const memberList = computed(
  (): Map<number, Member> => {
    return memberStore.memberList
  }
)
const isEmptyList = computed(() => {
  return memberStore.isMemberListEmpty
})
const isLoading = computed((): boolean => {
  return memberStore.isLoading
})
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">
          TOP
        </RouterLink>
      </li>
      <li>会員リスト</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p>
      新規登録は<RouterLink :to="{name: 'memberAdd'}">こちら</RouterLink>から
    </p>
    <p v-if="isLoading">
      データ取得中。。。
    </p>
    <section v-else>
      <ul>
        <li v-if="isEmptyList">会員情報は存在しません</li>
        <li
          v-for="[id, member] in memberList"
          v-bind:key="id"
          >
          <RouterLink v-bind:to="{name: 'memberDetail', params: {id: id}}">
            idが{{ id }}の{{ member.name }}さん
          </RouterLink>
        </li>
      </ul>
    </section>
    <RouterView />
  </section>
</template>