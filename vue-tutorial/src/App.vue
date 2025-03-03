<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useMemberStore } from './store/member';

const memberStore = useMemberStore()
memberStore.initList()
</script>

<template>
  <header>
    <h1>Piniaサンプル</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>