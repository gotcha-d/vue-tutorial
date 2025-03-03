<script setup lang="ts">
import { computed, inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import type { Member } from '@/interfaces';
import { useMemberStore } from '@/store/member';

const memberStore = useMemberStore()
const memberList = computed(
  (): Map<number, Member> => {
    return memberStore.memberList
  }
)
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
    <section>
      <ul>
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